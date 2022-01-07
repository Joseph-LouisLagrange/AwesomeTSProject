/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import * as React from 'react';
import {
  StyleSheet,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import { SetupPage } from './src/component/setup/SetupPage';
import { Home } from './src/component/Home';
import { RootStackParamList } from './src/config/Before';

import { simpleUpdate } from 'react-native-update';




const Stack =  createNativeStackNavigator<RootStackParamList>();

class App extends React.Component{
  render() {
    return (
      <NavigationContainer >
          <Stack.Navigator initialRouteName={SetupPage.ROUTE_NAME}  screenOptions={{headerShown:false}}>
              <Stack.Screen
                name={SetupPage.ROUTE_NAME}
                component={SetupPage}
              />
              <Stack.Screen
                name={Home.ROUTE_NAME}
                component={Home}
              />
          </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  m: {
    width: '100%',
    height: '100%',
  },
});

//export default App;

// 对根组件使用simpleUpdate方法封装后导出
export default simpleUpdate(App);