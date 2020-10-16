import React, { useState, useEffect } from 'react';
import 'react-native-gesture-handler'
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { ActivityIndicator, FlatList, View, Image } from "react-native"
import { Card, Title, Paragraph } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';
import PageHeader from '../../components/PageHeader';

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

import api from '../../services/api';
import { Dimensions } from "react-native";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
// import PageHeader from '../../components/PageHeader';
const Graficos: React.FC = ({ }) => {
  const navigation = useNavigation();
  const [isContentLoaded, setContentLoaded] = useState(false);
  const [entregaSemanal, setEntregaSemanal] = useState([])
  const [cadastroSemanal, setCadastroSemanal] = useState([])

  // async function guardarObjeto(objeto) {
  //   await AsyncStorage.setItem('@PerdeuAchou:objeto', objeto);
  // }

  useEffect(() => {
    const fetchData = async () => {

      try {

        const URIEntregas = `bi/entregas/pertences`;
        const URICadastro = "bi/cadastro/pertences";

        const dataEntreguesSemanal = await (await api.get(URIEntregas)).data;
        const dataCadastrosSemanal = await (await api.get(URICadastro)).data;

        if (dataEntreguesSemanal && dataCadastrosSemanal) {
          setContentLoaded(true)

          setEntregaSemanal(dataEntreguesSemanal)
          setCadastroSemanal(dataCadastrosSemanal)
        }

      }
      catch (error) {
        setContentLoaded(true)

      }
      // setFoundedItems(data)
    }
    fetchData();

  }, [isContentLoaded])




  //variables
  const runContent = () => {
    if (!isContentLoaded) {
      return <ActivityIndicator style={{ flex: 1 }} size="large" />
    } else {

      return (
        <ListContainer>
          <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold' }}>Entregas Semanal</Text>
          <LineChart
            data={{
              labels: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
              datasets: [
                {
                  data: entregaSemanal
                }
              ]
            }}
            width={Dimensions.get("window").width - 20} // from react-native
            height={220}
            chartConfig={{
              backgroundColor: "#fff",
              backgroundGradientFrom: "#ffa726",
              backgroundGradientTo: "#ff6b6b",
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 5
              },
              propsForDots: {
                r: "8",
                strokeWidth: "7",
                stroke: "#ffa726",
                fill: '#fff'
              }
            }}

            style={{
              marginVertical: 8,
              borderRadius: 16
            }}
          />

          <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold' }}>Cadastro Semanal</Text>
          <LineChart
            data={{
              labels: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
              datasets: [
                {
                  data: cadastroSemanal
                }
              ]
            }}
            width={Dimensions.get("window").width - 25} // from react-native
            height={220}
            chartConfig={{
              backgroundColor: "#fff",
              backgroundGradientFrom: "#ffa726",
              backgroundGradientTo: "#ff6b6b",
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 10
              },
              propsForDots: {
                r: "8",
                strokeWidth: "7",
                stroke: "#ffa726",
                fill: '#fff'
              }
            }}

            style={{
              marginVertical: 0,
              borderRadius: 10
            }}
          />
        </ListContainer>
      )

    }
  }


  return (
    <>
      {/* <PageHeader title="Pagina Inicial" /> */}
      <Container>
        <PageHeader title="Graficos" />


        {
          runContent()
        }


        {/* <Label>Data</Label>
            <CampoTexto placeholder="Data em que o pertence foi encontrado" /> */}



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


export default Graficos;
