import React, { useState } from 'react'
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

export function SignUp({ navigation }) {
  const [nome, setNome] = useState('')
  const [cpf, setCPF] = useState('')
  const [email, setEmail] = useState('')
  const [telfone, setTelefone] = useState('')
  const [nascimento, setNascimento] = useState('')
  const [senha, setSenha] = useState('')
  const [endereco, setEndereco] = useState('')

  function handleGoBack() {
    navigation.goBack()
  }

  function handleSignUp() {
    console.log('Clicou em registrar usuário')
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.goBackButton} onPress={handleGoBack}>
        <Ionicons name="chevron-back" size={24} color="#000" />
        <Text>Voltar</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Cadastrar Conta</Text>

      <ScrollView
        style={styles.formContainer}
        contentContainerStyle={{ paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.label}>Nome:</Text>
        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={txt => setNome(txt)}
        />

        <Text style={styles.label}>E-mail:</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={txt => setEmail(txt)}
        />

        <Text style={styles.label}>Senha:</Text>
        <TextInput
          style={styles.input}
          value={senha}
          onChangeText={txt => setSenha(txt)}
        />

        <Text style={styles.label}>CPF:</Text>
        <TextInput
          style={styles.input}
          value={cpf}
          onChangeText={txt => setCPF(txt)}
        />

        <Text style={styles.label}>Telefone:</Text>
        <TextInput
          style={styles.input}
          value={telfone}
          onChangeText={txt => setTelefone(txt)}
        />

        <Text style={styles.label}>Data de Nascimento:</Text>
        <TextInput
          style={styles.input}
          value={nascimento}
          onChangeText={txt => setNascimento(txt)}
        />

        <Text style={styles.label}>Cidade:</Text>
        <TextInput
          style={styles.input}
          value={endereco}
          onChangeText={txt => setEndereco(txt)}
        />

        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
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
  }
})
