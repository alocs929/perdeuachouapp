import React, { useState } from 'react';
<<<<<<< HEAD
import { Text } from "react-native";
=======
import {Text, View, SafeAreaView } from "react-native";
>>>>>>> 11219e782928a70a1f7c39519c86f29c66e8c526

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

  function handleSubmit() {
    console.log(email + password);
  }



<<<<<<< HEAD
  return (
    <>

=======
  return(
<>
    {/* <SafeAreaView>
    <ScrollView> */}
>>>>>>> 11219e782928a70a1f7c39519c86f29c66e8c526
      <Container>

            <Logo source={logo}></Logo>

            {/* <Title>LOGO</Title> */}

<<<<<<< HEAD
        <Field>
          <SubTitle>Seja bem vindo!</SubTitle>
          <TitleField>Email</TitleField>
          <InputField
            placeholder="email..."
            value={email}
            onChangeText={text => setEmail(text)}
          ></InputField>
        </Field>
=======
            <Field>
            <SubTitle>Seja bem vindo!</SubTitle>
              <TitleField>Email</TitleField>
              <InputField
                placeholder="email..."
                value={email}
                onChangeText={text => setEmail(text)}
              ></InputField>
            </Field>
>>>>>>> 11219e782928a70a1f7c39519c86f29c66e8c526

            <Field>
              <TitleField>Senha</TitleField>
              <InputField
                secureTextEntry={true}
                placeholder="senha..."
                value={password}
                onChangeText={text => setPassword(text)}
              ></InputField>
            </Field>



<<<<<<< HEAD
        <Text
        > Esqueceu a senha? <Text style={{ color: 'red' }}>Recuperar</Text>
        </Text>
=======
            <Text
            > Esqueceu a senha? <Text style={{color: 'red'}}>Recuperar</Text>
            </Text>
>>>>>>> 11219e782928a70a1f7c39519c86f29c66e8c526


            <ButtonLogin
              onPress={handleSubmit}
            >
              <ButtonLoginText>Entrar</ButtonLoginText>
            </ButtonLogin>


<<<<<<< HEAD
        <Text
          style={{ color: 'red' }}
          onPress={() => { navigation.navigate('DrawerNavigator') }}
        >Ir para a Stack Navigation</Text>
        <Text style={{ color: 'blue' }} onPress={() => { navigation.navigate("Iniciar") }}>Ir para iniciar pagina</Text>
      </Container>
=======
          <Text
            style={{color: 'red'}}
            onPress={()=>{navigation.navigate('DrawerNavigator')}}
          >Ir para a Stack Navigation</Text>
>>>>>>> 11219e782928a70a1f7c39519c86f29c66e8c526

      </Container>
    {/* </ScrollView>
  </SafeAreaView> */}

      <CreateAccountButton>
        <Text>Ainda não possui uma conta?</Text>
        <CreateAccountButtonText
          onPress={() => navigation.navigate('Cadastro')}
        >
          <Text style={{ color: 'red' }}>Registrar</Text>
        </CreateAccountButtonText>
      </CreateAccountButton>

    </>
  );
}
export default Login;
