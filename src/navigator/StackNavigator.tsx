import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { screen2 } from '../screen/screen2';
import { screen1 } from '../screen/screen1';
import { PRIMARY_COLOR } from '../common/constantsColor';
export type RootStackParams = {
  Home: undefined,
  Pantalla2: undefined,
}

const Stack = createStackNavigator<RootStackParams>();


export const StackNavigator = () => {
  return (
    <Stack.Navigator    
    screenOptions={{
      cardStyle:{
        backgroundColor:PRIMARY_COLOR
      }
      }}>

  <Stack.Screen name="Home" component={screen1}  />
  <Stack.Screen name="Pantalla2" component={screen2}  />

</Stack.Navigator>
)}
