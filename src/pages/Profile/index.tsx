import React, { useState } from 'react';
import { View } from "react-native";

import {
  Container,
  ProfileImg,
  Field,
  TitleField,
  ContentField,
  FieldBox
} from './styles';

import { useNavigation } from '@react-navigation/native';

import profileImg from '../../assets/Logo.jpg';
import PageHeader from '../../components/PageHeader';

const Profile: React.FC = () => {


  return(
    <View style={{flex: 1}}>
      <PageHeader title="Perfil"> </PageHeader>

      <Container
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
          // flexGrow: 1,
          marginTop: 10,
          alignItems: 'center'
        }}
      >
        <ProfileImg source={profileImg}></ProfileImg>

        <FieldBox>

          <Field>
            <TitleField>Nome: </TitleField>
            <ContentField>Bruno</ContentField>
          </Field>

          <Field>
            <TitleField>Email: </TitleField>
            <ContentField>bruno@gmail.com</ContentField>
          </Field>

          <Field>
            <TitleField>CPF/CNPJ: </TitleField>
            <ContentField>123.123.123-12</ContentField>
          </Field>

          <Field>
            <TitleField>Telefone: </TitleField>
            <ContentField>(85) 9 12341234</ContentField>
          </Field>

        </FieldBox>


      </Container>


    </View>
  );
}


export default Profile;
