import React, { useState, useEffect } from 'react'
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
import SelectDropdown from 'react-native-select-dropdown'

import api from '../../services/api'

export function AddProduct({ navigation, token }) {
  const [nome, setNome] = useState('')
  const [categoria, setCategoria] = useState('')
  const [validade, setValidade] = useState('')
  const [cheiro, setCheiro] = useState('')
  const [aparencia, setAparencia] = useState(0)
  const [consistencia, setConsistencia] = useState(0)
  const [embalagem, setEmbalagem] = useState(0)
  const [qualidade, setQualidade] = useState(0)
  const [descricao, setDescricao] = useState('')
  const [userId, setUserId] = useState('')

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

  useEffect(() => {
    console.log(token)
    async function getUser() {
      try {
        const response = await api.get('/usuario', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        setUserId(response.data.id)
      } catch (error) {
        console.log(error)
      }
    }
    getUser()
  }, [])

  async function handleRegisterProduct() {
    try {
      await api.post(
        '/produto',
        {
          usuario: {
            id: userId
          },
          nome,
          categoria,
          validade,
          cheiro,
          aparencia,
          consistencia,
          embalagem,
          qualidade,
          descricao
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      setNome('')
      setCategoria('')
      setValidade('')
      setCheiro(0)
      setAparencia(0)
      setConsistencia(0)
      setEmbalagem(0)
      setQualidade(0)
      setDescricao('')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.goBackButton} onPress={handleGoBack}>
        <Ionicons name="chevron-back" size={24} color="#000" />
        <Text>Voltar</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Cadastre seu Alimento </Text>
      <ScrollView
        style={styles.formContainer}
        contentContainerStyle={{ paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.label}>Nome do Produto:</Text>
        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={txt => setNome(txt)}
        />

        <Text style={styles.label}>Categoria:</Text>
        <TextInput
          style={styles.input}
          value={categoria}
          onChangeText={txt => setCategoria(txt)}
        />

        <Text style={styles.label}>Data de Validade:</Text>
        <TextInput
          style={styles.input}
          value={validade}
          onChangeText={txt => setValidade(txt)}
        />

        <Text style={styles.label}>Cheiro:</Text>
        <SelectDropdown
          data={options}
          onSelect={(selectedItem, index) => {
            setCheiro(index)
          }}
          defaultButtonText={'Escolha uma opção'}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem
          }}
          rowTextForSelection={(item, index) => {
            return item
          }}
          buttonStyle={styles.dropdownButton}
          buttonTextStyle={styles.dropdownButtonText}
          renderDropdownIcon={isOpened => {
            return (
              <Ionicons
                name={isOpened ? 'chevron-up' : 'chevron-down'}
                color={'#000'}
                size={24}
              />
            )
          }}
          dropdownIconPosition={'right'}
          dropdown={styles.dropdown}
          rowStyle={styles.dropdownRow}
          rowTextStyle={styles.dropdownRowText}
        />

        <Text style={styles.label}>Aparência:</Text>
        <SelectDropdown
          data={options}
          onSelect={(selectedItem, index) => {
            setAparencia(index)
          }}
          defaultButtonText={'Escolha uma opção'}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem
          }}
          rowTextForSelection={(item, index) => {
            return item
          }}
          buttonStyle={styles.dropdownButton}
          buttonTextStyle={styles.dropdownButtonText}
          renderDropdownIcon={isOpened => {
            return (
              <Ionicons
                name={isOpened ? 'chevron-up' : 'chevron-down'}
                color={'#000'}
                size={24}
              />
            )
          }}
          dropdownIconPosition={'right'}
          dropdown={styles.dropdown}
          rowStyle={styles.dropdownRow}
          rowTextStyle={styles.dropdownRowText}
        />

        <Text style={styles.label}>Consistência:</Text>
        <SelectDropdown
          data={options}
          onSelect={(selectedItem, index) => {
            setConsistencia(index)
          }}
          defaultButtonText={'Escolha uma opção'}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem
          }}
          rowTextForSelection={(item, index) => {
            return item
          }}
          buttonStyle={styles.dropdownButton}
          buttonTextStyle={styles.dropdownButtonText}
          renderDropdownIcon={isOpened => {
            return (
              <Ionicons
                name={isOpened ? 'chevron-up' : 'chevron-down'}
                color={'#000'}
                size={24}
              />
            )
          }}
          dropdownIconPosition={'right'}
          dropdown={styles.dropdown}
          rowStyle={styles.dropdownRow}
          rowTextStyle={styles.dropdownRowText}
        />

        <Text style={styles.label}>Embalagem:</Text>
        <SelectDropdown
          data={options}
          onSelect={(selectedItem, index) => {
            setEmbalagem(index)
          }}
          defaultButtonText={'Escolha uma opção'}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem
          }}
          rowTextForSelection={(item, index) => {
            return item
          }}
          buttonStyle={styles.dropdownButton}
          buttonTextStyle={styles.dropdownButtonText}
          renderDropdownIcon={isOpened => {
            return (
              <Ionicons
                name={isOpened ? 'chevron-up' : 'chevron-down'}
                color={'#000'}
                size={24}
              />
            )
          }}
          dropdownIconPosition={'right'}
          dropdown={styles.dropdown}
          rowStyle={styles.dropdownRow}
          rowTextStyle={styles.dropdownRowText}
        />

        <Text style={styles.label}>Qualidade:</Text>
        <SelectDropdown
          data={options}
          onSelect={(selectedItem, index) => {
            setQualidade(index)
          }}
          defaultButtonText={'Escolha uma opção'}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem
          }}
          rowTextForSelection={(item, index) => {
            return item
          }}
          buttonStyle={styles.dropdownButton}
          buttonTextStyle={styles.dropdownButtonText}
          renderDropdownIcon={isOpened => {
            return (
              <Ionicons
                name={isOpened ? 'chevron-up' : 'chevron-down'}
                color={'#000'}
                size={24}
              />
            )
          }}
          dropdownIconPosition={'right'}
          dropdown={styles.dropdown}
          rowStyle={styles.dropdownRow}
          rowTextStyle={styles.dropdownRowText}
        />

        <Text style={styles.label}>Descrição:</Text>
        <TextInput
          style={[styles.input, styles.bigInput]}
          multiline={true}
          numberOfLines={5}
          keyboardType={
            Platform.OS == 'ios' ? 'ascii-capable' : 'visible-password'
          }
          value={descricao}
          onChangeText={txt => setDescricao(txt)}
        />

        <TouchableOpacity style={styles.button} onPress={handleRegisterProduct}>
          <Text style={styles.buttonTitle}>Cadastrar</Text>
        </TouchableOpacity>
      </ScrollView>
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
    marginBottom: 36
  },
  formContainer: {
    paddingStart: 24,
    paddingEnd: 24
  },
  label: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    marginBottom: 8
  },
  input: {
    backgroundColor: '#BFBFBF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    height: 50,
    borderRadius: 20,
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bigInput: {
    height: 130,
    textAlignVertical: 'top'
  },
  button: {
    backgroundColor: '#177D06',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3.8,
    paddingVertical: 16,
    borderRadius: 20,
    marginTop: 16
  },
  buttonTitle: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: '#F3F9FF',
    textAlign: 'center'
  },

  dropdownButton: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 8,
    height: 50,
    backgroundColor: '#BFBFBF',
    borderRadius: 20,
    marginBottom: 16
  },
  dropdownButtonText: {
    color: '#000',
    textAlign: 'left',
    fontFamily: 'Inter_400Regular',
    fontSize: 14
  },
  dropdown: {
    backgroundColor: '#BFBFBF',
    borderRadius: 20
  },
  dropdownRow: {
    backgroundColor: '#BFBFBF',
    borderBottomColor: '#C5C5C5'
  },
  dropdownRowText: {
    color: '#000',
    textAlign: 'left',
    fontFamily: 'Inter_400Regular',
    fontSize: 16
  }
})
