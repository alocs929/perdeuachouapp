import React from 'react';

import { Button, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CadastroObjeto from '../pages/CadastroObjeto';
import Profile from '../pages/Profile';

const Drawer = createDrawerNavigator();

const DrawerNavigator: React.FC = () => {
  return (
    <>
      <Drawer.Navigator>
        <Drawer.Screen name="Cadastro de Objeto" component={CadastroObjeto} />
        <Drawer.Screen name="Perfil" component={Profile} />
      </Drawer.Navigator>
    </>
  );
}

export default DrawerNavigator;
