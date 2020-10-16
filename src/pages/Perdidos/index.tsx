import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import CadastroObjeto from '../CadastroObjeto'
import { Ionicons } from '@expo/vector-icons';
import { ActivityIndicator, FlatList, View, Image, TouchableOpacity } from "react-native"
import { Card, Title, Paragraph } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';

import {
  Container,
  Titulo,
  CampoTexto,
  Label,
  ButtonSave,
  ButtonSaveText,
  MensagemSucesso,
  ButtonAddItem,
  BtnContainer,
  BtnMenu,
  BtnMenuText,
  ListContainer
} from './styles';
import { Text, TextInput } from "react-native";
import FAB from "../../components/FloatActionButton";

import api from '../../services/api';

// import PageHeader from '../../components/PageHeader';
const CadastroObjetos: React.FC = () => {
  const navigation = useNavigation();
  const [isContentLoaded, setContentLoaded] = useState(false)
  const [foundedItems, setFoundedItems] = useState([])

  function detalhesObjeto (){
    navigation.navigate('Detalhes Objeto');
  }

  useEffect(() => {
    const URI = "";
    const fetchData = async () => {

      try {
        const [idString, token] = await AsyncStorage.multiGet([
          '@PerdeuAchou:id',
          '@PerdeuAchou:token',
        ]);

        const id = parseInt(idString[1])
        console.log(id)
        const URI = `pertence/${id}/perdido`;

        const data = await (await api.get(URI)).data;
        if (data) {
          setContentLoaded(true)
          console.log(data)
          setFoundedItems(data.content)
        }

      }
      catch (error) {
        setContentLoaded(true)

      }
      // setFoundedItems(data)
    }
    fetchData();

  }, [])


  const renderItemFunction = (data) => {
    return (<Card style={{ marginBottom: 10 }}>
      <Card.Content>
        <View style={{ display: 'flex', flexDirection: "row", justifyContent: "space-around" }}>
          <Title>{data.item.descricao}</Title>
          {console.log(data.item.images[0].link)}
          <Image style={{ height: 100, width: 100 }} resizeMode='cover' source={{ uri: data.item.images[0].link }} />
        </View>
        <View>
          <TouchableOpacity onPress={ () => {detalhesObjeto()} }>
            <Text>Detalhes</Text>
          </TouchableOpacity>
        </View>
      </Card.Content>
    </Card>)
  }
  //variables
  const runContent = () => {
    if (!isContentLoaded) {
      return <ActivityIndicator style={{ flex: 1 }} size="large" />
    } else {
      //JUST A PLACEHOLDER


      return (
        <ListContainer>
          <FlatList data={foundedItems} renderItem={renderItemFunction} keyExtractor={(data, index) => data.title} />
        </ListContainer>
      )

    }
  }


  return (
    <>
      {/* <PageHeader title="Pagina Inicial" /> */}
      <Container>
        {
          runContent()
        }


        {/* <Label>Data</Label>
            <CampoTexto placeholder="Data em que o pertence foi encontrado" /> */}

        <FAB screenDirection="CadastroObjeto" />


        {/* <ButtonAddItem>
          <ButtonSaveText>
            Adicionar Item
          </ButtonSaveText>
          <Ionicons style={{ marginRight: 2, marginLeft: -30 }} name="md-add-circle" size={30} color="white" />
        </ButtonAddItem> */}
      </Container>

    </>
  );
}


export default CadastroObjetos;
