import React, { useState, useEffect } from 'react'
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

import { useNavigation, useIsFocused } from '@react-navigation/native'
import { MaterialIcons } from '@expo/vector-icons'
import Products from '../../components/Products'

import api from '../../services/api'

export function Home({ token }) {
  const navigation = useNavigation()
  const isFocused = useIsFocused()

  const [products, setProducts] = useState([])

  useEffect(() => {
    async function fetchApi() {
      try {
        const response = await api.get('/produto', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        setProducts(response.data._embedded.entityModelList)
      } catch (error) {
        console.log(error)
      }
    }
    fetchApi()
  }, [isFocused])

  function handleAddProduct() {
    navigation.navigate('AddProduct')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Alimentos Disponíveis</Text>

        <TouchableOpacity style={styles.addButton} onPress={handleAddProduct}>
          <MaterialIcons name="add" size={24} color="#F3F9FF" />
          <Text style={styles.addButtonTitle}>Nova Doação</Text>
        </TouchableOpacity>
      </View>

      {products.length === 0 && <Text>Nenhum produto no momento.</Text>}

      <FlatList
        style={styles.listContainer}
        data={products}
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
