import React, { useState } from 'react';
import {Text, View, SafeAreaView } from "react-native";

import {
  Container,
  CreateAccountButton,
  CreateAccountButtonText,
  Title,
  Logo,
  SubTitle,
  Field,
  TitleField,
  InputField,
  ButtonLoginText,
  ButtonLogin,
  Rolagem
} from './styles';

import { useNavigation } from '@react-navigation/native';

import logo from '../../assets/Logo.jpg';
import api from '../../services/api';
import AsyncStorage from '@react-native-community/async-storage';
const Login: React.FC = () => {

  const buttonStyle = {
    position: "relative",
    width: 160,
    height: 170,
    backgroundColor: "#fff",
  }

  const shadowStyle = {
    width: buttonStyle.width,
    height: buttonStyle.height,
    color: "#000",
    border: 2,
    radius: 3,
    opacity: 0.2,
    x: 0,
    y: 3,
    style: { marginVertical: 5 }
  }


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  async function handleSubmit (){

    const body = `username=${email}&password=${password}&grant_type=password`;

    const response = await api.post('/oauth/token', body, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic cGVyZGV1YWNob3U6TXBhfVkuOEElVEwyWnhtUA=='
      }
    });

    console.log(response);

    if (response.status == 200){
      const id = response.data.id;
      const token = response.data.access_token;

      // console.log('############################')
      // console.log(id)
      // console.log(token)
      // console.log('############################')

      await AsyncStorage.setItem('@PerdeuAchou:token', token);
      await AsyncStorage.setItem('@PerdeuAchou:id', String(id));
      navigation.navigate('DrawerNavigator');

    }

  }

  function testeLoginHandle(){
    navigation.navigate('DrawerNavigator');
  }

// <<<<<<< HEAD
//   return (
//     <>

// =======
  return(
  <>
    <Container>

      <Logo source={logo}></Logo>


      <Field>
        <SubTitle>Seja bem vindo!</SubTitle>
        <TitleField>Email</TitleField>
        <InputField
          placeholder="email..."
          value={email}
          onChangeText={text => setEmail(text)}
        ></InputField>
      </Field>

      <Field>
        <TitleField>Senha</TitleField>
        <InputField
          secureTextEntry={true}
          placeholder="senha..."
          value={password}
          onChangeText={text => setPassword(text)}
        ></InputField>
      </Field>



      <Text
      > Esqueceu a senha? <Text style={{color: 'red'}}>Recuperar</Text>
      </Text>


      <ButtonLogin
        // onPress={handleSubmit}
        onPress={testeLoginHandle}
      >
        <ButtonLoginText>Entrar</ButtonLoginText>
      </ButtonLogin>


    </Container>

    <CreateAccountButton>
      <Text style={{
        width: '100%', 
        textAlign: 'center' 
      }}>
        Ainda não possui uma conta?
      </Text>
      <CreateAccountButtonText
        onPress = {()=> navigation.navigate('Cadastro')}
      >
        <Text style={{color:'red'}}>Registrar</Text>
      </CreateAccountButtonText>
    </CreateAccountButton>

  </>
      
  );
}
export default Login;
