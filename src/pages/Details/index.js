import React, { useEffect } from 'react'
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  StatusBar,
  Platform,
  View,
  Text,
  TouchableOpacity,
  TextInput
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useRoute, useNavigation } from '@react-navigation/native'

export function Details() {
  const route = useRoute()
  const navigation = useNavigation()

  const options = ['Não Definido', 'Péssimo', 'Ruim', 'Ok', 'Bom', 'Perfeito']

  useEffect(() => {
    navigation.getParent().setOptions({
      tabBarStyle: { display: 'none', backgroundColor: 'transparent' }
    })
  }, [])

  function handleGoBack() {
    navigation.getParent().setOptions({
      tabBarStyle: {
        display: 'flex',
        backgroundColor: '#2BD410',
        borderTopWidth: 0
      }
    })
    navigation.goBack()
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.goBackButton} onPress={handleGoBack}>
        <Ionicons name="chevron-back" size={24} color="#000" />
        <Text>Voltar</Text>
      </TouchableOpacity>

      <Text style={styles.title}>
        {route.params?.data.nome ? route.params?.data.nome : Detalhes}
      </Text>

      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Detalhes do Produto</Text>

        <Text style={styles.infoText}>
          <Text style={styles.infoColor}>Produto:</Text>{' '}
          {route.params?.data.nome}
        </Text>

        <Text style={styles.infoText}>
          <Text style={styles.infoColor}>Categoria:</Text>{' '}
          {route.params?.data.categoria}
        </Text>

        <Text style={styles.infoText}>
          <Text style={styles.infoColor}>Validade(ano-mês-dia):</Text>{' '}
          {route.params?.data.validade}
        </Text>

        <Text style={styles.infoText}>
          <Text style={styles.infoColor}>Cheiro:</Text>{' '}
          {options[route.params?.data.cheiro]}
        </Text>

        <Text style={styles.infoText}>
          <Text style={styles.infoColor}>Aparência:</Text>{' '}
          {options[route.params?.data.aparencia]}
        </Text>

        <Text style={styles.infoText}>
          <Text style={styles.infoColor}>Consistência:</Text>{' '}
          {options[route.params?.data.consistencia]}
        </Text>

        <Text style={styles.infoText}>
          <Text style={styles.infoColor}>Embalagem:</Text>{' '}
          {options[route.params?.data.embalagem]}
        </Text>

        <Text style={styles.infoText}>
          <Text style={styles.infoColor}>Qualidade:</Text>{' '}
          {options[route.params?.data.qualidade]}
        </Text>

        <Text style={styles.infoText}>
          <Text style={styles.infoColor}>Descrição:</Text>{' '}
          {route.params?.data.descricao}
        </Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Informações de Contato</Text>

        <Text style={styles.infoText}>
          <Text style={styles.infoColor}>Usuário:</Text>{' '}
          {route.params?.data.usuario.nome}
        </Text>

        <Text style={styles.infoText}>
          <Text style={styles.infoColor}>Email:</Text>{' '}
          {route.params?.data.usuario.email}
        </Text>

        <Text style={styles.infoText}>
          <Text style={styles.infoColor}>Telefone:</Text>{' '}
          {route.params?.data.usuario.telefone}
        </Text>
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
  goBackButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  title: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 12,
    marginBottom: 24
  },
  infoContainer: {
    paddingHorizontal: 24,
    marginBottom: 24
  },
  infoTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 18,
    color: '#177D06',
    textAlign: 'center',
    marginBottom: 12
  },
  infoText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    marginBottom: 4
  },
  infoColor: {
    color: '#177D06'
  }
})
