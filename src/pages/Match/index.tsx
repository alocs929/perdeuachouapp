import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PageHeader from '../../components/PageHeader';
import AsyncStorage from '@react-native-community/async-storage';

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

// interface IMatchProps{
//   route: Object;
//   navigation: Object;
  
// }

const Match: React.FC /* <IMatchProps> */ = ({ route, navigation }) => {
  const [objeto, setObjeto] = useState({
    "categoria":"",
    "descricao":"",
    "perdidoEm":"",
    "status":""
  });
  const [comparados, setComparados] = useState([]);
  const [objetoAtual, setObjetoAtual] = useState(0);

  function incrementar(){
    setObjetoAtual(objetoAtual + 1);
  }

  function decrementar(){
    setObjetoAtual(objetoAtual - 1);
  }

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      try {
        const [idString, token] = await AsyncStorage.multiGet([
          '@PerdeuAchou:id',
          '@PerdeuAchou:token',
        ]);
        console.log('match load user');
        console.log(idString[1], token[1]);
        
        const URI = `pertence/${idString[1]}/match`;
        const dataComparados = await (await api.get(URI)).data;

        
        if (dataComparados){
          console.log(dataComparados);
          setComparados(dataComparados);
        }

      } catch (error) {
        console.log(error);
      }
      
    }
    loadStorageData();
    
    const { data } = route.params;
    
    // setObjeto(data);
    console.log("==============");
    console.log(data);
    // console.log(route);
    // console.log(comparados);

  }, []);
  
  return (
    <>
      <Container
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
          marginTop: 10,
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
                  {objeto.categoria}
                </Descricao>
              </ListaItem>
              <ListaItem>
                <Topico>Descrição: </Topico>
                <Descricao>
                  {objeto.descricao}
                </Descricao>
              </ListaItem>
              <ListaItem>
                <Topico>Localização: </Topico>
                <Descricao>
                  {objeto.perdidoEm}
                </Descricao>
              </ListaItem>
              <ListaItem>
                <Topico>Status: </Topico>
                <Descricao>
                  {objeto.status}
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
                ( {comparados.length}  Opções encontradas)
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
                  {/* {comparados} */}
                </Descricao>
              </ListaItem>
              <ListaItem>
                <Topico>Descrição: </Topico>
                <Descricao>
                  {/* {comparados[objetoAtual].descricao} */}
                  { console.log(comparados) }
                </Descricao>
              </ListaItem>
              <ListaItem>
                <Topico>Localização: </Topico>
                <Descricao>
                  {/* {comparados[objetoAtual].perdidoEm} */}
                </Descricao>
              </ListaItem>
              <ListaItem>
                <Topico>Status: </Topico>
                <Descricao>
                  {/* {comparados[objetoAtual].status} */}
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
          <ButtonText>Contato</ButtonText>
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
