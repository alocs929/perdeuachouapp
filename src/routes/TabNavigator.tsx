import React from 'react';


import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import CadastroObjeto from '../pages/CadastroObjeto';
import Profile from '../pages/Profile';
import Inicial from '../pages/Inicial'
import Cadastro from '../pages/Cadastro'
import PageHeader from '../components/PageHeader';

const Tab = createMaterialTopTabNavigator();

const DrawerNavigator: React.FC = () => {
  return (
    <>
      <PageHeader title="Pagina Inicial" />

      <Tab.Navigator style={{ marginTop: 0 }}  >
        <Tab.Screen name="Achados" component={Inicial} />
        <Tab.Screen name="Perdidos" component={Cadastro} />
      </Tab.Navigator>
    </>
  );
}

export default DrawerNavigator;
