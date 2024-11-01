import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import EventsScreen from '../screens/EventsScreen';
import Icon from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();

const TabNavigator = ({ setIsUserLoggedIn }: any) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Events') {
            iconName = 'calendar';
          } else if (route.name === 'Profile') {
            iconName = 'user';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false, tabBarLabel: 'Home' }}
      />
      <Tab.Screen
        name="Events"
        component={EventsScreen}
        options={{ headerShown: false, tabBarLabel: 'Events' }}
      />
      <Tab.Screen
        name="Profile"
        options={{ headerShown: false, tabBarLabel: 'Profile' }}
      >
        {props => <ProfileScreen {...props} setIsUserLoggedIn={setIsUserLoggedIn} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default TabNavigator;
