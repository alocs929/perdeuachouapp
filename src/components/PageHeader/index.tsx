import React from 'react'
// import 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons'


import {
  Container,
  Title,
  BoxIconLeft,
  BoxIconRight
} from './styles';
import { useNavigation, DrawerActions } from '@react-navigation/native';

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
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      >
        <Ionicons name="ios-menu" size={35} color={'white'} />

      </BoxIconLeft>

      <Title>
        {title}
      </Title>

      <BoxIconRight onPress={() => console.log("notify")}>
        <Ionicons name="ios-notifications-outline" size={35} color={'white'} />
      </BoxIconRight>
    </Container>
  );
}
export default PageHeader;
