import React from 'react'
import { SafeAreaView, StyleSheet, View, Text } from 'react-native'

export function Details() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Página Details</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F9FF'
  }
})
