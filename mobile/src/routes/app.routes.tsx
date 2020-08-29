import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';
import DetailsPost from '../pages/DetailsPost';
import Profile from '../pages/Profile';

const App = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: '#F6F6F6'},
      }}
      // eslint-disable-next-line prettier/prettier
      initialRouteName="Dashboard"
    >
      <App.Screen name="Dashboard" component={Dashboard} />
      <App.Screen name="DetailsPost" component={DetailsPost} />
      <App.Screen name="Profile" component={Profile} />
    </App.Navigator>
  );
};

export default AppRoutes;
