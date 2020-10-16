import React, { useState, useEffect } from 'react';
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
import api from '../../services/api';
import profileImg from '../../assets/Logo.jpg';
import PageHeader from '../../components/PageHeader';
import AsyncStorage from '@react-native-community/async-storage';


const Profile: React.FC = () => {

  const [isContentLoaded, setContentLoaded] = useState(false);
  const [usuario, setUsuario] = useState({
    "nome":"string",
    "email":"string",
    "cpfCpnj":"string",
    "telefone":"string"
  });

  useEffect(() => {
    const fetchData = async () => {

      try {
        const [idString, token] = await AsyncStorage.multiGet([
          '@PerdeuAchou:id',
          '@PerdeuAchou:token',
        ]);
        
        const id = parseInt(idString[1]);
        console.log(id);
        
        const URI = `usuario/${id}`;

        const data = await (await api.get(URI)).data;
        if (data) {
          setContentLoaded(true)
          console.log(data)
          setUsuario(data);
        }

      }
      catch (error) {
        setContentLoaded(true)
        console.error(error);
      }
      // setFoundedItems(data)
    }
    fetchData();

  }, [isContentLoaded])

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
            <ContentField> {usuario.nome} </ContentField>
          </Field>

          <Field>
            <TitleField>Email: </TitleField>
            <ContentField> {usuario.email} </ContentField>
          </Field>

          <Field>
            <TitleField>CPF/CNPJ: </TitleField>
            <ContentField> {usuario.cpfCpnj} </ContentField>
          </Field>

          <Field>
            <TitleField>Telefone: </TitleField>
            <ContentField> {usuario.telefone} </ContentField>
          </Field>

        </FieldBox>


      </Container>


    </View>
  );
}


export default Profile;
