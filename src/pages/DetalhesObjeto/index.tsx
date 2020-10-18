import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
import PageHeader from '../../components/PageHeader';

import {
  Container,
  Footer,
  EditButton,
  EditButtonText,
  BodyObjeto,
  Imagem,
  Lista,
  ListaItem,
  Topico,
  Descricao
} from './styles';

import api from '../../services/api';

const DetalhesObjeto: React.FC = ({ route, navigation }) => {

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const [idString, token] = await AsyncStorage.multiGet([
        '@PerdeuAchou:id',
        '@PerdeuAchou:token',
      ]);

      console.log(idString[1], token[1]);
    }

    loadStorageData();

  }, []);

  const { data } = route.params;

  return (
    <Container>
      <PageHeader title="Detalhes" />
      <BodyObjeto>
        {/* <ImgCard></ImgCard> */}
        <Imagem source={{
          uri: data.images[0].link
        }}></Imagem>
        <Lista>
          <ListaItem>
            <Topico>Data: </Topico>
            <Descricao>26/04/2020</Descricao>
          </ListaItem>
          <ListaItem>
            <Topico>Categoria: </Topico>
            <Descricao>
              {data.categoria}
            </Descricao>
          </ListaItem>
          <ListaItem>
            <Topico>Descrição: </Topico>
            <Descricao>
              {data.descricao}
            </Descricao>
          </ListaItem>
          <ListaItem>
            <Topico>Localização: </Topico>
            <Descricao>
              {data.perdidoEm}
            </Descricao>
          </ListaItem>
          <ListaItem>
            <Topico>Status: </Topico>
            <Descricao>
              {data.status}
            </Descricao>
          </ListaItem>
        </Lista>
      </BodyObjeto>
      <Footer>
        <EditButton onPress={() => {
          navigation.navigate("Match", { data: data })
        }}>
          <EditButtonText
          >
            Match
          </EditButtonText>
        </EditButton>
      </Footer>
    </Container>
  );
}

export default DetalhesObjeto;
