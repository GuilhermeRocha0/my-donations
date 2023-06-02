import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { LinearGradient } from 'expo-linear-gradient'
import { FontAwesome5 } from '@expo/vector-icons'
import { Logo } from '../../components/Logo'

import api from '../../services/api'

export function Login({ onLogin }) {
  const navigation = useNavigation()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleLogin() {
    try {
      const response = await api.post('/usuario/login', {
        email,
        senha: password
      })
      const token = response.data.token
      onLogin(token)
    } catch (error) {
      console.log(error)
    }
  }

  function handleFacebookLogin() {
    console.log('Clicou em conectar pelo Facebook')
  }

  function handleGoogleLogin() {
    console.log('Clicou em conectar pelo Google')
  }

  function handleNavigateToSignUp() {
    navigation.navigate('SignUp')
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.gradient}
        locations={[0.0, 0.5, 0.9]}
        colors={['#ACFF8F', '#81E671', '#2BD410']}
      />

      <View style={styles.logo}>
        <Logo />
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>E-mail:</Text>
        <TextInput
          style={styles.input}
          keyboardType={'email-address'}
          value={email}
          onChangeText={txt => setEmail(txt)}
        />

        <Text style={styles.label}>Senha:</Text>
        <TextInput
          style={styles.input}
          keyboardType={'password'}
          value={password}
          onChangeText={txt => setPassword(txt)}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonTitle}>Conectar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.loginIconsContainer}>
        <Text style={styles.loginIconsTitle}>Conecte-se com:</Text>

        <View style={styles.icons}>
          <TouchableOpacity onPress={handleFacebookLogin}>
            <FontAwesome5 name="facebook-f" size={24} color="#FFF" />
          </TouchableOpacity>

          <TouchableOpacity onPress={handleGoogleLogin}>
            <FontAwesome5 name="google" size={24} color="#FFF" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={handleNavigateToSignUp}>
          <Text style={styles.signUpButton}>Criar Conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingStart: 48,
    paddingEnd: 48,
    justifyContent: 'center'
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '100%',
    backgroundColor: 'transparent'
  },
  logo: {
    alignSelf: 'center',
    marginBottom: 95
  },
  form: {
    marginBottom: 80
  },
  label: {
    color: '#000',
    fontFamily: 'Inter_600SemiBold',
    marginBottom: 12
  },
  input: {
    fontFamily: 'Inter_400Regular',
    backgroundColor: '#FFF',
    marginBottom: 16,
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 20
  },
  button: {
    alignSelf: 'center',
    backgroundColor: '#177D06',
    paddingHorizontal: 48,
    paddingVertical: 12,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
    shadowOpacity: 0.25,
    shadowRadius: 2,
    marginTop: 42
  },
  buttonTitle: {
    color: '#FFF'
  },
  loginIconsContainer: {
    alignItems: 'center'
  },
  loginIconsTitle: {
    color: '#FFF',
    fontFamily: 'Inter_400Regular'
  },
  icons: {
    width: '20%',
    marginTop: 12,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between'
  },
  signUpButton: {
    marginTop: 24,
    color: '#FFF',
    fontFamily: 'Inter_400Regular'
  }
})
