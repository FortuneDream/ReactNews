/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Index from './src'

function App(): React.JSX.Element {
  return (
  <NavigationContainer>
    <Index/>
  </NavigationContainer>
  )
}

export default App;
