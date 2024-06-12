// App.tsx
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './LoginPage'; // Assurez-vous que le chemin est correct pour votre structure de projet

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={LoginPage} 
          options={{ title: 'Connexion' }} 
        />
        {/* Vous pouvez ajouter d'autres écrans ici */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
