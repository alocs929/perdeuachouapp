import React from 'react';

import { Button, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CadastroObjeto from '../pages/CadastroObjeto';
import DetalhesObjeto from '../pages/DetalhesObjeto';
import Match from '../pages/Match';
import PageHeader from '../components/PageHeader';
import Profile from '../pages/Profile';

const Drawer = createDrawerNavigator();

const DrawerNavigator: React.FC = () => {
  return (
    <>
      <Drawer.Navigator initialRouteName="Login">

        {/* <Text>eu</Text> */}
        {/* <Drawer.Screen name="Login" component={Login}/> */}
        {/* <Drawer.Screen name="Login" component={Login}/> */}
        {/* <Drawer.Screen name="Cadastro" component={Cadastro} /> */}
        <Drawer.Screen name="Cadastro Objetos" component={CadastroObjeto} />
        <Drawer.Screen name="Detalhes Objeto" component={DetalhesObjeto} />
        <Drawer.Screen name="Match" component={Match} />
        <Drawer.Screen name="Cadastro de Objeto" component={CadastroObjeto} />
        <Drawer.Screen name="Perfil" component={Profile} />
      </Drawer.Navigator>
    </>
  );
}

export default DrawerNavigator;
