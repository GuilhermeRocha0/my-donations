import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Platform,
  View,
  Text
} from 'react-native'

export function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Página Home</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 38 : StatusBar.currentHeight,
    backgroundColor: '#F3F9FF'
  }
})
