// src/navigation/RootNavigator.js
import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, ActivityIndicator } from 'react-native';
import { db } from '../utils/db';

// Auth
import SplashScreen       from '../screens/auth/SplashScreen';
import WhoAreYouScreen    from '../screens/auth/WhoAreYouScreen';
import SelectSchoolScreen from '../screens/auth/SelectSchoolScreen';
import CreateAccountScreen from '../screens/auth/CreateAccountScreen';
import ProfileSetupScreen from '../screens/auth/ProfileSetupScreen';
import LoginScreen        from '../screens/auth/LoginScreen';

// App tabs
import StudentTabs    from './StudentTabs';
import ProfessorTabs  from './ProfessorTabs';

const Stack = createStackNavigator();

export default function RootNavigator() {
  const [loading, setLoading]       = useState(true);
  const [initialRoute, setInitial]  = useState('Splash');

  useEffect(() => {
    (async () => {
      const session = await db.getSession();
      if (session) {
        setInitial(session.role === 'student' ? 'StudentHome' : 'ProfessorHome');
      }
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, backgroundColor: '#0d0f1a', alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator color="#4a9eff" size="large" />
      </View>
    );
  }

  return (
    <Stack.Navigator
      initialRouteName={initialRoute}
      screenOptions={{ headerShown: false, animationEnabled: true }}
    >
      <Stack.Screen name="Splash"         component={SplashScreen} />
      <Stack.Screen name="WhoAreYou"      component={WhoAreYouScreen} />
      <Stack.Screen name="SelectSchool"   component={SelectSchoolScreen} />
      <Stack.Screen name="CreateAccount"  component={CreateAccountScreen} />
      <Stack.Screen name="ProfileSetup"   component={ProfileSetupScreen} />
      <Stack.Screen name="Login"          component={LoginScreen} />
      <Stack.Screen name="StudentHome"    component={StudentTabs} />
      <Stack.Screen name="ProfessorHome"  component={ProfessorTabs} />
    </Stack.Navigator>
  );
}
