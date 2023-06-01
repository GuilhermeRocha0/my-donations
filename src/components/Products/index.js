import React from 'react'
import { StyleSheet, View, Text, Pressable } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'

export default function Products({ data }) {
  const navigation = useNavigation()

  function handleNavigate() {
    navigation.navigate('Details', { data: data })
  }

  return (
    <Pressable onPress={handleNavigate} style={styles.container} key={data.id}>
      <Text style={styles.title}>{data.name}</Text>
      <Ionicons name="chevron-forward" size={34} color="#000" />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(172, 255, 143, 0.49)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: 12
  },
  title: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16
  }
})
