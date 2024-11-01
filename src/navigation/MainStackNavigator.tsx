import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import DetailScreen from '../screens/DetailScreen';
const MainStack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <MainStack.Navigator initialRouteName="DashboardTabs">
      <MainStack.Screen name="DashboardTabs" options={{ headerShown: false }} >
        {props => <TabNavigator {...props}  />}
      </MainStack.Screen>
      <MainStack.Screen name="Detail" component={DetailScreen} options={{ title: 'Event Details' }} />
    </MainStack.Navigator>
  );
};

export default MainStackNavigator;
