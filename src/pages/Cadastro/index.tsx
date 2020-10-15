import React, { useState } from 'react';

import {
  Text,
  CheckBox,
  ScrollView,
  KeyboardAvoidingView
} from "react-native";

import {
  Container,
  CreateAccountButton,
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
import api from '../../services/api';

function Cadastro() {
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [password, setPassword] = useState('');
  const [cpfCnpj, setCpfCnpj] = useState('');
  const [telefone, setTelefone] = useState('');
  const [check, setCheck] = useState(false);


  const navigation = useNavigation();

  async function handleSubmit() {
    let usuario = {
      nome,
      email,
      password,
      cpfCnpj,
      telefone
    }
    const response = await api.post('/usuario', usuario);

    console.log("Cadastrou");
    console.log(response);
  }

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
      >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flex: 1 }}
      >
        <Container
          contentContainerStyle={{
            paddingHorizontal: 16,
            paddingBottom: 16,
            marginTop: 10,
            alignItems: 'center'
          }}
        >
          <Title>Cadastro de Usuário</Title>

          <Field>
            <TitleField>Nome</TitleField>
            <InputField
              placeholder="nome..."
              value={nome}
              onChangeText={text => setNome(text)}
            ></InputField>
          </Field>


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

          <Field>
            <TitleField>CPF/CNPJ</TitleField>
            <InputField
              placeholder="cpf/cnpj..."
              value={cpfCnpj}
              onChangeText={text => setCpfCnpj(text)}
            ></InputField>
          </Field>

          <Field>
            <TitleField>Telefone</TitleField>
            <InputField
              placeholder="telefone..."
              value={telefone}
              onChangeText={text => setTelefone(text)}
            ></InputField>
          </Field>

          <FieldCheckBox>
            <CheckBox
              value={check}
              onValueChange={setCheck}
            ></CheckBox>
            <Text>
              Eu concordo com os
            <Text style={{ color: 'red' }}> Termos de Serviço</Text> e
            <Text style={{ color: 'red' }}> Politica de Privacidade</Text>.
          </Text>

          </FieldCheckBox>



          <ButtonLogin
            onPress={handleSubmit}
          >
            <ButtonLoginText>Continue</ButtonLoginText>
          </ButtonLogin>

        <CreateAccountButton onPress={() => navigation.navigate('Login')}>
          <Text style={{ 
            width: '100%', 
            textAlign: 'center' 
            }}>
            Já possui uma conta?
          </Text>
          <CreateAccountButtonText>
            <Text style={{ color: 'red' }}>Sign In</Text>
          </CreateAccountButtonText>
        </CreateAccountButton>
        </Container>
      </ScrollView>
      </KeyboardAvoidingView>

      {/* <CreateAccountButton onPress={() => navigation.navigate('Login')}>
        <Text>Já possui uma conta?</Text>
        <CreateAccountButtonText>
          <Text style={{ color: 'red' }}>Sign In</Text>
        </CreateAccountButtonText>
      </CreateAccountButton> */}

    </>
  );
}


export default Cadastro;
