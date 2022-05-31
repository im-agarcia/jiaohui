import Main from './views/Main/Main';
import Login from './views/Login/Login'
import Members from './views/Members/Membres'
import Ministries from './views/Ministries/Ministries'
import BirthDays from './views/BirthDays/BirthDays'

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


import * as React from 'react';



export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Members" component={Members} />
        <Stack.Screen name="Ministries" component={Ministries} />
        <Stack.Screen name="BirthDays" component={BirthDays} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


