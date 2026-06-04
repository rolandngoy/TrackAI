// src/navigation/ProfessorTabs.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { C } from '../utils/colors';

import ProfActivityScreen    from '../screens/professor/ProfActivityScreen';
import ProfChatScreen        from '../screens/professor/ProfChatScreen';
import ProfAssignmentsScreen from '../screens/professor/ProfAssignmentsScreen';
import ProfUploadScreen      from '../screens/professor/ProfUploadScreen';

const Tab = createBottomTabNavigator();

export default function ProfessorTabs() {
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
        tabBarActiveTintColor: C.P,
        tabBarInactiveTintColor: C.MUTED2,
        tabBarLabelStyle: { fontSize: 10, fontWeight: '500' },
        tabBarIcon: ({ focused, color }) => {
          const icons = {
            Activity:    focused ? 'home' : 'home-outline',
            Chat:        focused ? 'chatbubbles' : 'chatbubbles-outline',
            Assignments: focused ? 'clipboard' : 'clipboard-outline',
            Upload:      focused ? 'cloud-upload' : 'cloud-upload-outline',
          };
          return <Ionicons name={icons[route.name]} size={22} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Activity"     component={ProfActivityScreen} />
      <Tab.Screen name="Chat"         component={ProfChatScreen} />
      <Tab.Screen name="Assignments"  component={ProfAssignmentsScreen} />
      <Tab.Screen name="Upload"       component={ProfUploadScreen} />
    </Tab.Navigator>
  );
}
