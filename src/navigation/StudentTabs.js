// src/navigation/StudentTabs.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { C } from '../utils/colors';

import ActivityScreen     from '../screens/student/ActivityScreen';
import ChatScreen         from '../screens/student/ChatScreen';
import AssignmentsScreen  from '../screens/student/AssignmentsScreen';
import UploadScreen       from '../screens/student/UploadScreen';
import AIHelpScreen       from '../screens/student/AIHelpScreen';

const Tab = createBottomTabNavigator();

export default function StudentTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#0a0c16',
          borderTopColor: '#16192e',
          paddingBottom: 10,
          height: 64,
        },
        tabBarActiveTintColor: C.S,
        tabBarInactiveTintColor: C.MUTED2,
        tabBarLabelStyle: { fontSize: 10, fontWeight: '500' },
        tabBarIcon: ({ focused, color, size }) => {
          const icons = {
            Activity:    focused ? 'home' : 'home-outline',
            Chat:        focused ? 'chatbubbles' : 'chatbubbles-outline',
            Assignments: focused ? 'clipboard' : 'clipboard-outline',
            Upload:      focused ? 'cloud-upload' : 'cloud-upload-outline',
            'AI Help':   focused ? 'sparkles' : 'sparkles-outline',
          };
          return <Ionicons name={icons[route.name]} size={22} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Activity"     component={ActivityScreen} />
      <Tab.Screen name="Chat"         component={ChatScreen} />
      <Tab.Screen name="Assignments"  component={AssignmentsScreen} />
      <Tab.Screen name="Upload"       component={UploadScreen} />
      <Tab.Screen name="AI Help"      component={AIHelpScreen} />
    </Tab.Navigator>
  );
}
