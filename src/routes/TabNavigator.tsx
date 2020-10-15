import React from 'react';


import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import Achados from '../pages/Achados'
import PageHeader from '../components/PageHeader';
import Match from '../pages/Match'

const Tab = createMaterialTopTabNavigator();

const DrawerNavigator: React.FC = () => {
  return (
    <>
      <PageHeader title="Pagina Inicial" />

      <Tab.Navigator style={{ marginTop: 0 }}  >
        <Tab.Screen name="Achados" component={Achados} />
        <Tab.Screen name="Perdidos" component={Match} />
      </Tab.Navigator>
    </>
  );
}

export default DrawerNavigator;
