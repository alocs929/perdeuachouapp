import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { ActivityIndicator, FlatList } from "react-native"
import { Card, Title, Paragraph } from 'react-native-paper';

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
  BtnMenuText
} from './styles';
import { Text, TextInput } from "react-native";
import FAB from "../../components/FloatActionButton";

import api from '../../services/api';

// import PageHeader from '../../components/PageHeader';
const CadastroObjetos: React.FC = () => {
  const navigation = useNavigation();
  const [isContentLoaded, setContentLoaded] = useState(false)
  const [foundedItems, setFoundedItems] = useState([])

  useEffect(() => {
    const URI = "";
    const fetchData = async () => {
      const data = await (await api.get(URI)).data;
      if (data)
        setContentLoaded(true)
      // setFoundedItems(data)
    }



    try {
      fetchData()
    } catch (error) {
      console.log("Hi there")
      setContentLoaded(true)
    }

  }, [])


  const renderItemFunction = ({ item }) => {
    return (<Card>
      <Card.Content>
        <Title>{item.title}</Title>
      </Card.Content>
    </Card>)
  }
  //variables
  const runContent = () => {
    if (!isContentLoaded) {
      return <ActivityIndicator style={{ flex: 1 }} size="large" />
    } else {
      //JUST A PLACEHOLDER
      const DATA = [{
        id: 1,
        title: 'Card 1'
      },
      {
        id: 2,
        title: 'Card 2'
      }
      ];

      return (
        <FlatList data={DATA} renderItem={renderItemFunction} keyExtractor={(item: Item) => item.id}
        />)

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

        <FAB />


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
