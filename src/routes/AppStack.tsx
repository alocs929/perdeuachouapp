import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login'
import Cadastro from '../pages/Cadastro'
import CadastroObjeto from '../pages/CadastroObjeto'

// import CadastroObjeto from '../pages/CadastroObjeto'


import DrawerNavigator from './DrawerNavigator';
import Profile from '../pages/Profile';
import TabNavigator from './TabNavigator'
const { Navigator, Screen } = createStackNavigator();


function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        {/* <Screen name="Profile" component={Profile} /> */}
        <Screen name="Login" component={Login} />
        <Screen name="CadastroObjeto" component={CadastroObjeto} />
        <Screen name="DrawerNavigator" component={DrawerNavigator} />
        <Screen name="Cadastro" component={Cadastro} />
        <Screen name="Inicial" component={TabNavigator} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
