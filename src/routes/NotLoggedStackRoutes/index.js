import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Login } from '../../pages/Login'
import { SignUp } from '../../pages/SignUp'

const Stack = createNativeStackNavigator()

export function NotLoggedStackRoutes({ onLogIn }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        options={{
          headerShown: false
        }}
      >
        {props => <Login {...props} onLogin={onLogIn} />}
      </Stack.Screen>
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )
}
