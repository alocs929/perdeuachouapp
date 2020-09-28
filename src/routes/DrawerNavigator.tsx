import React from 'react';

import { Button, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import CadastroObjeto from '../pages/CadastroObjeto';
import PageHeader from '../components/PageHeader';

const Drawer = createDrawerNavigator();

const DrawerNavigator: React.FC = () => {
  return (
    <>
      <Drawer.Navigator initialRouteName="Login">

        {/* <Text>eu</Text> */}
        {/* <Drawer.Screen name="Login" component={Login}/> */}
        <Drawer.Screen name="Login" component={Login}/>
        <Drawer.Screen name="Cadastro" component={Cadastro} />
        <Drawer.Screen name="CadastroObjetos" component={CadastroObjeto} />
      </Drawer.Navigator>
    </>
  );
}

export default DrawerNavigator;
