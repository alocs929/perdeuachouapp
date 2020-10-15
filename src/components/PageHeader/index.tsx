import React from 'react'
// import 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons'

import {
  Container,
  Title,
  BoxIconLeft,
  BoxIconRight
} from './styles';
import { useNavigation, NavigationContainer, DrawerActions } from '@react-navigation/native';
// import {  } from '@react-navigation/drawer';

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  const navigation = useNavigation();

  // console.log(props);
  // navigation.openDrawer();

  return (
    <Container>

      <BoxIconLeft 
        onPress={() => {navigation.dispatch(DrawerActions.toggleDrawer())}}
      >
        <Ionicons name="ios-menu" size={35} color={'#000'} />

      </BoxIconLeft>

      <Title>
        {title}
      </Title>

      <BoxIconRight onPress={() => console.log("notify")}>
        <Ionicons name="ios-notifications-outline" size={35} color={'#000'} />
      </BoxIconRight>
    </Container>
  );
}
export default PageHeader;
