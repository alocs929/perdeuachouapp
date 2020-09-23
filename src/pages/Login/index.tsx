import React from 'react';

import {Text } from "react-native";

import {Container, CreateAccountButton, CreateAccountButtonText} from './styles';

import { useNavigation } from '@react-navigation/native';

function Login(){

  const navigation = useNavigation();

  return(
    <Container>

      <Text>Tela de Login B</Text>
      <CreateAccountButton onPress={() => navigation.navigate('Cadastro')}>
        <CreateAccountButtonText>Criar uma conta</CreateAccountButtonText>
      </CreateAccountButton>

    </Container>
  );
}

export default Login;
