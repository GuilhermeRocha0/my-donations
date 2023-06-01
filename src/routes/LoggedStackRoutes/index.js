import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '../../pages/Home'
import { Details } from '../../pages/Details'
import { AddProduct } from '../../pages/AddProduct'

const Stack = createNativeStackNavigator()

export function LoggedStackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          title: 'Detalhes',
          headerShadowVisible: false
        }}
      />
      <Stack.Screen
        name="AddProduct"
        component={AddProduct}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )
}
