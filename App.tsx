/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyDrawer from './src/navegation/Drawer';


function App(){
  return (
    <NavigationContainer>
      <MyDrawer/>
    </NavigationContainer>
  );
}



export default App;
