import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PageHeader from '../../components/PageHeader';

import {
  Container,
  Footer,
  Body,
  SideContainer,
  ObjetoHead,
  TitlePrimary,
  TitleLabel,
  SuccessButton,
  DangerButton,
  PrimaryButton,
  ButtonText,
  Lista,
  ListaItem,
  Topico,
  Descricao,
  LineVertical,
  PerdidoNav,
  PerdidoNavBtn
} from './styles';

import api from '../../services/api';

function Match({ navigation }) {
  const [objeto, setObjeto] = useState({});
  const [comparados, setComparados] = useState([]);



  return (
    <>
      <Container
        contentContainerStyle={{
          paddingHorizontal: 8,
          paddingBottom: 16,
          // marginTop: 10,
          alignItems: 'center'
        }}
      >
        <PageHeader title="Match" />
        <Body>
          <SideContainer>
            <ObjetoHead>
              <TitlePrimary>
                Achado
              </TitlePrimary>
            </ObjetoHead>

            <Lista>
              <ListaItem>
                <Topico>Data: </Topico>
                <Descricao>30/07/2020</Descricao>
              </ListaItem>
              <ListaItem>
                <Topico>Categoria: </Topico>
                <Descricao>
                  Categoria mockada
                </Descricao>
              </ListaItem>
              <ListaItem>
                <Topico>Descrição: </Topico>
                <Descricao>
                  Descricao mockada
                </Descricao>
              </ListaItem>
              <ListaItem>
                <Topico>Localização: </Topico>
                <Descricao>
                  localização mockada
                </Descricao>
              </ListaItem>
              <ListaItem>
                <Topico>Status: </Topico>
                <Descricao>
                  status mockado
                </Descricao>
              </ListaItem>
            </Lista>

          </SideContainer>

          <LineVertical></LineVertical>

          <SideContainer>
            <ObjetoHead>
              <TitlePrimary>
                Perdido
              </TitlePrimary>
              <TitleLabel>
                (3 Opções encontradas)
              </TitleLabel>
            </ObjetoHead>
            <Lista>
              <ListaItem>
                <Topico>Data: </Topico>
                <Descricao>30/07/2020</Descricao>
              </ListaItem>
              <ListaItem>
                <Topico>Categoria: </Topico>
                <Descricao>
                  Categoria mockada
                </Descricao>
              </ListaItem>
              <ListaItem>
                <Topico>Descrição: </Topico>
                <Descricao>
                  Descricao mockada
                </Descricao>
              </ListaItem>
              <ListaItem>
                <Topico>Localização: </Topico>
                <Descricao>
                  localização mockda
                </Descricao>
              </ListaItem>
              <ListaItem>
                <Topico>Status: </Topico>
                <Descricao>
                  status mockado
                </Descricao>
              </ListaItem>
            </Lista>
            <PerdidoNav>
              <PerdidoNavBtn>
                <ButtonText> prev </ButtonText>
              </PerdidoNavBtn>

              <PerdidoNavBtn>
                <ButtonText> prox </ButtonText>
              </PerdidoNavBtn>
            </PerdidoNav>
          </SideContainer>
        </Body>

      </Container>

      <Footer>
        <SuccessButton>
          <ButtonText>Confirmar</ButtonText>
        </SuccessButton>

        <PrimaryButton>
          <ButtonText>Mensagem</ButtonText>
        </PrimaryButton>

        <DangerButton onPress={() => {
          navigation.goBack();
        }}>
          <ButtonText>Recusar</ButtonText>
        </DangerButton>
      </Footer>
    </>
  );
}

export default Match;