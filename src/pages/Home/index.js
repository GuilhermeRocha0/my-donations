import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Platform,
  View,
  Text,
  TouchableOpacity,
  FlatList
} from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { MaterialIcons } from '@expo/vector-icons'
import Products from '../../components/Products'

const donations = [
  {
    id: 1,
    name: 'Arroz',
    category: 'Cereais',
    expirationDate: '01/07/2023',
    quality: '1 - Bom',
    description: 'Arroz fechado',
    active: true
  },
  {
    id: 2,
    name: 'Feijão',
    category: 'Cereais',
    expirationDate: '01/09/2023',
    quality: '1 - Bom',
    description: 'Pacote de feijão fechado',
    active: true
  },
  {
    id: 3,
    name: 'Açucar',
    category: 'Açucares e Doces',
    expirationDate: '01/09/2023',
    quality: '1 - Bom',
    description: 'Pacote de açucar fechado',
    active: true
  }
]

export function Home() {
  const navigation = useNavigation()

  function handleAddDonation() {
    navigation.navigate('AddProduct')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Alimentos Disponíveis</Text>

        <TouchableOpacity style={styles.addButton} onPress={handleAddDonation}>
          <MaterialIcons name="add" size={24} color="#F3F9FF" />
          <Text style={styles.addButtonTitle}>Nova Doação</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        style={styles.listContainer}
        data={donations.filter(item => item.active)}
        renderItem={({ item }) => <Products data={item} />}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 38 : StatusBar.currentHeight,
    backgroundColor: '#F3F9FF',
    paddingStart: 12,
    paddingEnd: 12
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 20
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#177D06',
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 6
  },
  addButtonTitle: {
    fontFamily: 'Inter_600SemiBold',
    color: '#F3F9FF'
  },
  listContainer: {
    marginTop: 24
  }
})
