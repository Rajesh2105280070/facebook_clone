/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
import Navigations from './src/navigations/Navigations';

AppRegistry.registerComponent(appName, () => Navigations);
