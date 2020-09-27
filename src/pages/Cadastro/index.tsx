import React, { useState } from 'react';

import {Text, View } from "react-native";

import {
  Container,
  CreateAccount,
  CreateAccountButtonText,
  Title,
  Field,
  TitleField,
  InputField,
  ButtonLoginText,
  ButtonLogin,
  FieldCheckBox
} from './styles';

import { useNavigation } from '@react-navigation/native';
import { CheckBox } from 'react-native';

function Cadastro(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [check, setCheck] = useState(false);


  const navigation = useNavigation();

  function handleSubmit (){
    console.log(email + password);
  }

  return(

      <Container>
        <Title>Cadastro de Usuário</Title>

        <Field>
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

        <FieldCheckBox>
          <CheckBox
            value={check}
            onValueChange={setCheck}
          ></CheckBox>
          <Text>
            Eu concordo com os
            <Text style={{color: 'red'}}> Termos de Serviço</Text> e
            <Text style={{color: 'red'}}> Politica de Privacidade</Text>.
          </Text>

        </FieldCheckBox>



        <ButtonLogin
          onPress={handleSubmit}
        >
          <ButtonLoginText>Continue</ButtonLoginText>
        </ButtonLogin>

        <CreateAccount>
          <Text>Já possui uma conta?</Text>
          <CreateAccountButtonText
            onPress = {()=> navigation.navigate('Login')}
          >
            <Text style={{color:'red'}}>Sign In</Text>
          </CreateAccountButtonText>
        </CreateAccount>

      </Container>
  );
}


export default Cadastro;
