import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import TelaInicial from './Componentes/TelaInicial/index';
import TelaTreinos from './Componentes/TelaTreinos/index';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Inicio" component={TelaInicial} />
        <Stack.Screen name="Treinos" component={TelaTreinos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
