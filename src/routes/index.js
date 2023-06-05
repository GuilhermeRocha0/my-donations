import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { LoggedStackRoutes } from './LoggedStackRoutes'
import { Profile } from '../pages/Profile'

import { Ionicons } from '@expo/vector-icons'

import CustomTabBar from '../components/CustomTabBar'

const Tab = createBottomTabNavigator()

export function Routes({ token }) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#F3F9FF',
        tabBarStyle: {
          backgroundColor: '#2BD410',
          borderTopWidth: 0
        }
      }}
      // tabBar={props => <CustomTabBar {...props} />}
    >
      <Tab.Screen
        name="HomeTab"
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="home" color={color} size={size} />
            }
            return <Ionicons name="home-outline" color="#CCCCCC" size={size} />
          }
        }}
      >
        {props => <LoggedStackRoutes {...props} token={token} />}
      </Tab.Screen>
      <Tab.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="person-circle" color={color} size={size} />
            }
            return (
              <Ionicons
                name="person-circle-outline"
                color="#CCCCCC"
                size={size}
              />
            )
          }
        }}
      >
        {props => <Profile {...props} token={token} />}
      </Tab.Screen>
    </Tab.Navigator>
  )
}
