import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginPage'
import SignUpScreen from '../screens/SignUpPage'

const AuthStack = createNativeStackNavigator();

const AuthStackNavigator = () => {
  return (

    // binding in authstack
    <AuthStack.Navigator initialRouteName="Login" >
      <AuthStack.Screen name="Login" options={{ headerShown: false }} >
        {props => <LoginScreen {...props}  />}
      </AuthStack.Screen>
      <AuthStack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }}  />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;
