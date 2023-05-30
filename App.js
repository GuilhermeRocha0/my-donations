import React, { useCallback, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

import { NavigationContainer } from '@react-navigation/native'
import { Login } from './src/pages/login'

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular: require('./assets/fonts/Inter-Regular.ttf'),
    Inter_600SemiBold: require('./assets/fonts/Inter-SemiBold.ttf')
  })

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync()
    }
    prepare
  }, [])

  const onLayout = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) return null

  return (
    <NavigationContainer onLayout={onLayout}>
      <Login />
    </NavigationContainer>
  )
}
