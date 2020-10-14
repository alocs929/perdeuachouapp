import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login'
import Cadastro from '../pages/Cadastro'
import Inicial from '../pages/Inicial'
// import CadastroObjeto from '../pages/CadastroObjeto'


import DrawerNavigator from './DrawerNavigator';
import Profile from '../pages/Profile';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        {/* <Screen name="Profile" component={Profile} /> */}
        <Screen name="Login" component={Login} />
        <Screen name="Cadastro" component={Cadastro} />
<<<<<<< HEAD
        <Screen name="Iniciar" component={Inicial} />
        {/* <Screen name="CadastroObjeto" component={CadastroObjeto}/> */}
=======
>>>>>>> 11219e782928a70a1f7c39519c86f29c66e8c526
        <Screen name="DrawerNavigator" component={DrawerNavigator} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
