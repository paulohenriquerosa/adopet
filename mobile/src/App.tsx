import 'react-native-gesture-handler';
import React from 'react';
import {View, StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import Routes from './routes';
import AppProvider from './hooks';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#874CF0" />
    <AppProvider>
      <View style={{backgroundColor: '#E5E5E5', flex: 1}}>
        <Routes />
      </View>
    </AppProvider>
  </NavigationContainer>
);
export default App;
