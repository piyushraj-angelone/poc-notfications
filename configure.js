import PushNotification from 'react-native-push-notification';
import {createChannel, handleNotifications} from './handlers';

const configure = () => {
  PushNotification.configure({
    onRegister: function (token) {},

    onRegistrationError: function (err) {
      console.error('Registration Error!!');
    },

    foreground: true,
    popInitialNotification: true,
    requestPermissions: true,
  });

  createChannel({
    channelId: 'app-notifications',
    channelName: 'App Notifications',
    channelDescription: 'Receive notifications related to app.',
  });
};

export default configure;
