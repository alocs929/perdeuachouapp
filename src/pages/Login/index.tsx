import React from 'react';

import {Text } from "react-native";

import {Container, CreateAccountButton, CreateAccountButtonText, ButtonsFooter} from './styles';

import { useNavigation } from '@react-navigation/native';

function Login(){

  const navigation = useNavigation();

  return(
    <Container>

      <Text>Tela de Login B</Text>
      <ButtonsFooter>
        <CreateAccountButton onPress={() => navigation.navigate('Cadastro')}>
          <CreateAccountButtonText>Criar uma conta</CreateAccountButtonText>
        </CreateAccountButton>
        <CreateAccountButton onPress={() => navigation.navigate('CadastroObjetos')}>
          <CreateAccountButtonText>Adicionar um objeto</CreateAccountButtonText>
        </CreateAccountButton>
      </ButtonsFooter>
    </Container>
  );
}

export default Login;
