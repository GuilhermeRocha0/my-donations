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
import { MaterialIcons, Ionicons } from '@expo/vector-icons'
import Products from '../../components/Products'

import api from '../../services/api'

export function Home({ token }) {
  const navigation = useNavigation()
  const isFocused = useIsFocused()

  const [products, setProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const [dataExists, setDataExists] = useState(false)

  useEffect(() => {
    async function fetchApi() {
      try {
        const response = await api.get(`/produto?page=${currentPage}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        setDataExists(response.data._embedded ? true : false)

        setProducts(response.data._embedded.entityModelList)
      } catch (error) {
        console.log(error)
      }
    }
    fetchApi()
  }, [isFocused, currentPage])

  function handleAddProduct() {
    navigation.navigate('AddProduct')
  }

  function handlePreviousPage() {
    if (currentPage === 0) {
      return
    }
    setCurrentPage(currentPage - 1)
  }

  function handleNextPage() {
    setCurrentPage(currentPage + 1)
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

      {dataExists ? (
        <FlatList
          style={styles.listContainer}
          data={products}
          renderItem={({ item }) => <Products data={item} />}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <Text style={styles.infoMessage}>Nenhum produto nesta página.</Text>
      )}

      <View style={styles.bottomPage}>
        <Text style={styles.infoMessage}>Página {currentPage}</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={handlePreviousPage}>
            <Ionicons name="chevron-back" size={24} color="#F3F9FF" />
            <Text style={styles.buttonTitle}>Anterior</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleNextPage}>
            <Text style={styles.buttonTitle}>Próximo</Text>
            <Ionicons name="chevron-forward" size={24} color="#F3F9FF" />
          </TouchableOpacity>
        </View>
      </View>
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
  infoMessage: {
    fontFamily: 'Inter_400Regular',
    marginTop: 24
  },
  listContainer: {
    marginTop: 24
  },
  bottomPage: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginBottom: 24,
    gap: 16,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#177D06',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3.8,
    paddingVertical: 8,
    borderRadius: 12,
    marginTop: 16,
    width: '45%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonTitle: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: '#F3F9FF',
    textAlign: 'center'
  }
})
