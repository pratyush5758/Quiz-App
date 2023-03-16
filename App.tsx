import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Login} from './src/screen/public';
import {NativeBaseProvider} from 'native-base';

const App = () => {
  return (
    <NativeBaseProvider>
      <Login />
    </NativeBaseProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
