import React, {useEffect} from 'react';
import {PermissionsAndroid, Text, View} from 'react-native';
import PushNotification from 'react-native-push-notification';

PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);

import messaging from '@react-native-firebase/messaging';

function App() {
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async (remoteMessage: any) => {
      console.log('app: ', remoteMessage);
      if (remoteMessage?.data?.showNotification === 'TRUE') {
        PushNotification.localNotification({
          ...remoteMessage.data,
          channelId: 'app-notifications',
          ignoreInForeground: false,
        });
      }
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    const checkToken = async () => {
      const fcmToken = await messaging().getToken();
      if (fcmToken) {
        console.log('fcmToken from rn: ', fcmToken);
      }
    };
    checkToken();
  }, []);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 22, fontWeight: 'bold'}}>Notification App</Text>
    </View>
  );
}

export default App;
