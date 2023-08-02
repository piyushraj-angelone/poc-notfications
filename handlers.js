import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';

export const registerBackgroundMessageHandler = () => {
  try {
    messaging().setBackgroundMessageHandler(async (remoteMessage: any) => {
      console.log('bg: ', remoteMessage);
      if (remoteMessage?.data?.showNotification === 'TRUE') {
        PushNotification.localNotification({
          ...remoteMessage.data,
          channelId: 'app-notifications',
        });
      }
    });
  } catch (err) {}
};

export const createChannel = ({channelId, channelName, channelDescription}) => {
  PushNotification.createChannel({
    channelId: channelId,
    channelName: channelName,
    channelDescription: channelDescription,
  });
};
