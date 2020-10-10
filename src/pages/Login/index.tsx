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

  function handleSubmit (){
    console.log(email + password);
  }



  return(
<>
    {/* <SafeAreaView>
    <ScrollView> */}
      <Container>

            <Logo source={logo}></Logo>

            {/* <Title>LOGO</Title> */}

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
              onPress={handleSubmit}
            >
              <ButtonLoginText>Entrar</ButtonLoginText>
            </ButtonLogin>


          <Text
            style={{color: 'red'}}
            onPress={()=>{navigation.navigate('DrawerNavigator')}}
          >Ir para a Stack Navigation</Text>

      </Container>
    {/* </ScrollView>
  </SafeAreaView> */}

      <CreateAccountButton>
        <Text>Ainda não possui uma conta?</Text>
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
