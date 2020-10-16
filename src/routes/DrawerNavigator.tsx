import React from 'react';

import { Button, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CadastroObjeto from '../pages/CadastroObjeto';
import DetalhesObjeto from '../pages/DetalhesObjeto';
import Match from '../pages/Match';
import PageHeader from '../components/PageHeader';
import Profile from '../pages/Profile';
import TabNavigator from './TabNavigator'
import Graficos from '../pages/Graficos'

const Drawer = createDrawerNavigator();

const DrawerNavigator: React.FC = () => {
  return (
    <>
      <Drawer.Navigator initialRouteName="Iniciar">

        <Drawer.Screen name="Iniciar" component={TabNavigator} />
        <Drawer.Screen name="Cadastro de Objetos" component={CadastroObjeto} />
        <Drawer.Screen name="DetalhesObjeto" component={DetalhesObjeto} />

        <Drawer.Screen name="Match" component={Match} />
        <Drawer.Screen name="Perfil" component={Profile} />
        <Drawer.Screen name="Graficos" component={Graficos} />

      </Drawer.Navigator>
    </>
  );
}

export default DrawerNavigator;
