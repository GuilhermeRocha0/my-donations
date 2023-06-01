import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Home } from '../pages/Home'
import { Profile } from '../pages/Profile'

import CustomTabBar from '../components/CustomTabBar'

const Tab = createBottomTabNavigator()

export function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#FFF',
        tabBarStyle: {
          backgroundColor: '#2BD410',
          borderTopWidth: 0
        }
      }}
      tabBar={props => <CustomTabBar {...props} />}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: 'home-outline'
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: 'person-circle-outline'
        }}
      />
    </Tab.Navigator>
  )
}
