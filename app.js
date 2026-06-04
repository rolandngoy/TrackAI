// App.js
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { setupNotificationHandler } from './src/utils/notifications';
import RootNavigator from './src/navigation/RootNavigator';

export default function App() {
  useEffect(() => {
    setupNotificationHandler();
  }, []);

  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <RootNavigator />
    </NavigationContainer>
  );
}
