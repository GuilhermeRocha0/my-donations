import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '../../pages/Home'
import { Details } from '../../pages/Details'
import { AddProduct } from '../../pages/AddProduct'

const Stack = createNativeStackNavigator()

export function LoggedStackRoutes({ token }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={{
          headerShown: false
        }}
      >
        {props => <Home {...props} token={token} />}
      </Stack.Screen>
      <Stack.Screen
        name="Details"
        options={{
          headerShown: false
        }}
      >
        {props => <Details {...props} token={token} />}
      </Stack.Screen>
      <Stack.Screen
        name="AddProduct"
        options={{
          headerShown: false
        }}
      >
        {props => <AddProduct {...props} token={token} />}
      </Stack.Screen>
    </Stack.Navigator>
  )
}
