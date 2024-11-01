import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainStackNavigator from './src/navigation/MainStackNavigator';
import AuthStackNavigator from './src/navigation/AuthStackNavigator';
import auth from '@react-native-firebase/auth';

const App = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    // Firebase auth state listener
    const unsubscribe = auth().onAuthStateChanged((user) => {
      setIsUserLoggedIn(!!user); // Set to true if user exists, otherwise false
      if (initializing) setInitializing(false);
    });
    
    // Cleanup the listener on unmount
    return unsubscribe;
  }, [initializing]);

  if (initializing) return null; 

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {isUserLoggedIn ? (
          <MainStackNavigator />
        ) : (
          <AuthStackNavigator />
        )}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
