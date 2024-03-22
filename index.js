/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {Counter} from './src/Counter';

AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent('Counter', () => Counter);
