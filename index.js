/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import configure from './configure';
import {registerBackgroundMessageHandler} from './handlers';

configure();
registerBackgroundMessageHandler();
AppRegistry.registerComponent(appName, () => App);
