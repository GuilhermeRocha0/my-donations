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
import { useIsFocused } from '@react-navigation/native'

import api from '../../services/api'

export function Profile({ token }) {
  const isFocused = useIsFocused()

  const [nome, setNome] = useState('')
  const [cpf, setCPF] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [nascimento, setNascimento] = useState('')
  const [senha, setSenha] = useState('')
  const [endereco, setEndereco] = useState('')

  useEffect(() => {
    async function fetchApi() {
      try {
        const response = await api.get('/usuario', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        setNome(response.data.nome)
        setCPF(response.data.cpf)
        setEmail(response.data.email)
        setTelefone(response.data.telefone)
        setNascimento(response.data.nascimento)
        setSenha(response.data.senha)
        setEndereco(response.data.endereco)
      } catch (error) {
        console.log(error)
      }
    }
    fetchApi()
  }, [isFocused])

  async function handleUpdateData() {
    try {
      await api.put(
        '/usuario',
        {
          nome,
          cpf,
          email,
          telefone,
          nascimento,
          senha,
          endereco
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Perfil</Text>

      <ScrollView
        style={styles.formContainer}
        contentContainerStyle={{ paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.label}>Nome: {nome}</Text>

        <Text style={styles.label}>E-mail: {email}</Text>

        <Text style={styles.label}>CPF: {cpf}</Text>

        <Text style={styles.label}>Data de Nascimento: {nascimento}</Text>

        <Text style={styles.label}>Telefone:</Text>
        <TextInput
          style={styles.input}
          value={telefone}
          onChangeText={txt => setTelefone(txt)}
        />

        <Text style={styles.label}>Endereço:</Text>
        <TextInput
          style={styles.input}
          value={endereco}
          onChangeText={txt => setEndereco(txt)}
        />

        <TouchableOpacity
          style={[styles.button, styles.updateButton]}
          onPress={handleUpdateData}
        >
          <Text style={styles.buttonTitle}>Atualizar Dados</Text>
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
  title: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 24
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
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
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
    marginTop: 16,
    width: '50%',
    alignSelf: 'center'
  },
  buttonTitle: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: '#F3F9FF',
    textAlign: 'center'
  }
})
