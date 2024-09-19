
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TabNavigation from './src/navigation/TabNavigation'

import DeatilsScreen from './src/screen/DeatilsScreen'
import PaymentScreen from './src/screen/PaymentScreen'


const Stack=createNativeStackNavigator();
const App = () => {
  return (
<NavigationContainer>
  <Stack.Navigator screenOptions={{headerShown:false}}>
  <Stack.Screen name='Tab' component={TabNavigation} options={{animation: 'slide_from_bottom'}}/>
    <Stack.Screen name='Details' component={DeatilsScreen} options={{animation: 'slide_from_bottom'}}/>
    <Stack.Screen name='Payment' component={PaymentScreen} options={{animation: 'slide_from_bottom'}}/>
  </Stack.Navigator>
</NavigationContainer>
  )
}

export default App

