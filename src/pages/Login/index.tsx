import React, { useState } from 'react';
import {Text } from "react-native";

import {
  Container,
  CreateAccount,
  CreateAccountButtonText,
  Title,
  SubTitle,
  Field,
  TitleField,
  InputField,
  ButtonLoginText,
  ButtonLogin
} from './styles';

import { useNavigation } from '@react-navigation/native';
import PageHeader from '../../components/PageHeader';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  function handleSubmit (){
    console.log(email + password);
  }

  // async function handleSubmit (){
  //   const response = await api.post('/login', {
  //     email,
  //     password
  //   });
  // }


  // navigation.openDrawer();

  return(
    // <>
    <Container>
      <PageHeader title="Pagina Inicial"/>

      <Title>LOGO</Title>

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

      <CreateAccount>
        <Text>Ainda não possui uma conta?</Text>
        <CreateAccountButtonText
          onPress = {()=> navigation.navigate('Cadastro')}
        >
          <Text style={{color:'red'}}>Registrar</Text>
        </CreateAccountButtonText>
      </CreateAccount>

    </Container>
    // </>
  );
}


export default Login;
