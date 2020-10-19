import React, { useState, useEffect } from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PageHeader from '../../components/PageHeader';
import AsyncStorage from '@react-native-community/async-storage';
import Modal from 'react-native-modal';

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
  PerdidoNavBtn,
  Imagem
} from './styles';

import api from '../../services/api';

const  Match: React.FC = ({ route, navigation }) => {

  const [objeto, setObjeto] = useState({
    "categoria":"",
    "descricao":"",
    "local":"",
    "status":"",
    "dataCadastro":"",
    "images":[ { "link":"" } ]
  });
  const [modalVisibleContato,setModalVisibleContato] = useState(false)
  const [modalVisibleDetalhes,setModalVisibleDetalhes] = useState(false)
  const [comparados, setComparados] = useState([
    {
      "categoria":" ",
      "descricao":" ",
      "local":" ",
      "status":" ",
      "dataCadastro":" ",
      "perdidoEm":" ",
      "images": [ { "link":"" } ],
      "usuario":{
        "nome": "igor",
      "email": "igor@gmail.com",
      "senha": "$2a$10$.8NCBCuZfSIWeWCNZjTEIusPj45.x7eyPU9xbZtjS8krwTGL2ld4q",
      "telefone": "123321123",
      "cpfCpnj": "12332112345",
      }
    }
  ]);
  const [idObjetoAtual, setIdObjetoAtual] = useState(0);
  const [openModal,SetOpenModal] = useState(false)
  function avancar () {
    console.log("avancar");
    let maximo = comparados.length;
    let aux = idObjetoAtual;
    aux = (aux  + 1) % maximo;
    setIdObjetoAtual(aux);
  }

  function voltar () {
    console.log("voltar");
    let maximo = comparados.length;
    let aux = idObjetoAtual;
    aux = (aux - 1);
    if (aux < 0){
      aux = maximo - 1;
    }
    setIdObjetoAtual(aux);
  }

  async function  confirmar (idAchado, idPerdido) {
    console.log(idAchado + " " + idPerdido );
    const URIConfirmar = `pertence/entrega/${idAchado}/${idPerdido}`;
    const response = await api.patch(URIConfirmar);
    console.log(response.status);
    //
  }

  function detalhes(){
    navigation.navigate('DetalhesObjeto', { data: comparados[idObjetoAtual] });
  }

  function recusar () {

  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [idString, token] = await AsyncStorage.multiGet([
          '@PerdeuAchou:id',
          '@PerdeuAchou:token',
        ]);

        const id = parseInt(idString[1]);
        console.log(id);

        const URI = `pertence/${id}/match`;

        const data = await (await api.get(URI)).data;
        if (data) {
          console.log("Resposta da requisição ao match");
          console.log(data);
          setComparados(data);
        }

      }
      catch (error) {
        // setContentLoaded(true)
      }
      // setFoundedItems(data)
    }
    fetchData();

  }, []);

  const { data } = route.params;
  return (
    <>


      <Container
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          paddingHorizontal: 8,
          alignItems: 'center',

        }}
      >

        <Modal isVisible={modalVisibleContato}>
        <View  style={{paddingVertical:20, display:'flex',justifyContent:'center', backgroundColor:'white' ,borderRadius: 10}}>

            <View style={{display: 'flex', flexDirection: 'row', justifyContent:'center',}}>
                <Text style={{fontSize:30}}>Contato</Text>

                <TouchableOpacity style={{position:"absolute", top:-20, left:340}} onPress={()=>{setModalVisibleContato(false)}}>
                  <Text  style={{color:'red',fontSize:32}}>
                          X
                  </Text>
                </TouchableOpacity>
            </View>
            <View style={{width:"100%",
              height:1,
          backgroundColor:"lightgray", marginBottom:20}}></View>
          <View style={{marginLeft:25}}>
              <Text style={{fontSize: 18, marginBottom:10}}>Nome: { comparados[idObjetoAtual].usuario.nome }</Text>
              <Text style={{fontSize: 18, marginBottom:10}}>Email: { comparados[idObjetoAtual].usuario.email} </Text>
              <Text style={{fontSize: 18, marginBottom:10}}>Telefone: {comparados[idObjetoAtual].usuario.telefone } </Text>
          </View>
          <View style={{width:"100%",
              height:1,
          backgroundColor:"lightgray"}}></View>
          </View>
        </Modal>

        <Modal isVisible={modalVisibleDetalhes}>
        <View  style={{paddingVertical:20, display:'flex',justifyContent:'center', backgroundColor:'white' ,borderRadius: 10}}>

            <View style={{display: 'flex', flexDirection: 'row', justifyContent:'center',}}>
                <Text style={{fontSize:30}}>Detalhes</Text>

                <TouchableOpacity style={{position:"absolute", top:-20, left:340}} onPress={()=>{setModalVisibleDetalhes(false)}}>
                  <Text  style={{color:'red',fontSize:32}}>
                          X
                  </Text>
                </TouchableOpacity>
            </View>
            <View style={{width:"100%",
              height:1,
          backgroundColor:"lightgray", marginBottom:20}}></View>
          <View style={{marginLeft:10}}>
          <Imagem source={{
              uri: comparados[idObjetoAtual].images[0].link
            }}></Imagem>
            <Lista>
              <ListaItem>
                <Topico>Data: </Topico>
                <Descricao>{comparados[idObjetoAtual].dataCadastro}</Descricao>
              </ListaItem>
              <ListaItem>
                <Topico>Categoria: </Topico>
                <Descricao>
                  {comparados[idObjetoAtual].categoria}
                </Descricao>
              </ListaItem>
              <ListaItem>
                <Topico>Descrição: </Topico>
                <Descricao>
                {comparados[idObjetoAtual].descricao}
                </Descricao>
              </ListaItem>
              <ListaItem>
                <Topico>Localização: </Topico>
                <Descricao>
                {comparados[idObjetoAtual].perdidoEm}
                </Descricao>
              </ListaItem>
              <ListaItem>
                <Topico>Status: </Topico>
                <Descricao>
                {comparados[idObjetoAtual].status}
                </Descricao>
              </ListaItem>
            </Lista>
          </View>
          <View style={{width:"100%",
              height:1,
          backgroundColor:"lightgray"}}></View>
          </View>
        </Modal>





        <PageHeader title="Match" />
        <Body>





          <SideContainer>
            <ObjetoHead>
              <TitlePrimary>
                Achado
              </TitlePrimary>
            </ObjetoHead>

            <Imagem source={{
              uri: data.images[0].link
            }}></Imagem>

            <Lista>
              <ListaItem>
                <Topico>Data: </Topico>
                <Descricao> {data.dataCadastro} </Descricao>
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

          </SideContainer>

          <LineVertical></LineVertical>

          <SideContainer>
            <ObjetoHead>
              <TitlePrimary>
                Perdido
              </TitlePrimary>
              <TitleLabel>
                ( {comparados.length} Opções encontradas)
              </TitleLabel>
            </ObjetoHead>
            <Imagem source={{
              uri: comparados[idObjetoAtual].images[0].link
            }}></Imagem>
            <Lista>
              <ListaItem>
                <Topico>Data: </Topico>
                <Descricao>{comparados[idObjetoAtual].dataCadastro}</Descricao>
              </ListaItem>
              <ListaItem>
                <Topico>Categoria: </Topico>
                <Descricao>
                  {comparados[idObjetoAtual].categoria}
                </Descricao>
              </ListaItem>
              <ListaItem>
                <Topico>Descrição: </Topico>
                <Descricao>
                {comparados[idObjetoAtual].descricao}
                </Descricao>
              </ListaItem>
              <ListaItem>
                <Topico>Localização: </Topico>
                <Descricao>
                {comparados[idObjetoAtual].perdidoEm}
                </Descricao>
              </ListaItem>
              <ListaItem>
                <Topico>Status: </Topico>
                <Descricao>
                {comparados[idObjetoAtual].status}
                </Descricao>
              </ListaItem>
            </Lista>
            <PerdidoNav>
              <PerdidoNavBtn
                onPress={() => {voltar()}}
              >
                <ButtonText> prev </ButtonText>
              </PerdidoNavBtn>

              <PerdidoNavBtn
                onPress={() => {avancar()}}
              >
                <ButtonText> prox </ButtonText>
              </PerdidoNavBtn>
            </PerdidoNav>
            <DangerButton onPress={() => {
              detalhes();
            }}>
            <ButtonText onPress={()=>{setModalVisibleDetalhes(true)}}>Mais detalhes</ButtonText>
          </DangerButton>
          </SideContainer>
        </Body>

      </Container>

      <Footer>
        <SuccessButton
          onPress={() => { confirmar(data.id, comparados[idObjetoAtual].id ); }}
        >
          <ButtonText>Confirmar</ButtonText>
        </SuccessButton>

        <PrimaryButton onPress={()=> setModalVisibleContato(true)}>
          <ButtonText>Contato</ButtonText>
        </PrimaryButton>


      </Footer>
    </>
  );
}

export default Match;
