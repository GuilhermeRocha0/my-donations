import React, { useCallback, useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

import { NavigationContainer } from '@react-navigation/native'
import { NotLoggedStackRoutes } from './src/routes/NotLoggedStackRoutes'
import { Routes } from './src/routes'

export default function App() {
  const [token, setToken] = useState('')
  const [fontsLoaded] = useFonts({
    Inter_400Regular: require('./assets/fonts/Inter-Regular.ttf'),
    Inter_600SemiBold: require('./assets/fonts/Inter-SemiBold.ttf')
  })

  function onLogIn(token) {
    setToken(token)
  }

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
      {token.length > 0 ? (
        <Routes token={token} />
      ) : (
        <NotLoggedStackRoutes onLogIn={onLogIn} />
      )}
    </NavigationContainer>
  )
}
