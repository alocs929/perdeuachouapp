import React, { useState, useEffect } from 'react';
import 'react-native-gesture-handler'
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { ActivityIndicator, FlatList, View, Image } from "react-native"
import { Card, Title, Paragraph } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';
import PageHeader from '../../components/PageHeader';

// import { Page, Document, StyleSheet } from '@react-pdf/renderer';

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
  ListContainer,
  Relatorio,
  RelatorioLine,
  ReportBtn,
  ReportBtnText
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
  const [entregaSemanal, setEntregaSemanal] = useState([0,0,0,0,0,0,0]);
  const [cadastroSemanal, setCadastroSemanal] = useState([0,0,0,0,0,0,0]);
  const [qtdUsuarios, setQtdUsuarios] = useState(0);
  const [qtdPertencesCadastrados, setQtdPertencesCadastrados] = useState(0);
  const [qtdPertencesRecuperados, setQtdPertencesRecuperados] = useState(0);

  function gerarPdf(){
    console.log('gerar pdf');
  }

  useEffect(() => {
    const fetchData = async () => {

      try {
        console.log("Chamando fetch data");
        
        const URIEntregas = `bi/semana/entregas/pertences/semana`;
        const URICadastro = "bi/semana/cadastro/pertences/semana";
        const URIQtdUsuarios = 'bi/semana/cadastro/usuarios';
        const URIQtdPertencesCadastrados = 'bi/semana/cadastro/pertences';
        const URIQtdPertencesRecuperados = 'bi/semana/entregas/pertences';

        const dataEntreguesSemanal = await (await api.get(URIEntregas)).data;
        const dataCadastrosSemanal = await (await api.get(URICadastro)).data;
        const dataQtdUsuarios = await (await api.get(URIQtdUsuarios)).data;
        const dataQtdPertencesCadastrados = await (await api.get(URIQtdPertencesCadastrados)).data;
        const dataQtdPertencesRecuperados = await (await api.get(URIQtdPertencesRecuperados)).data;
        
        if (dataEntreguesSemanal && dataCadastrosSemanal) {
          setContentLoaded(true);
          
          setEntregaSemanal(dataEntreguesSemanal);
          setCadastroSemanal(dataCadastrosSemanal);
          setQtdUsuarios(dataQtdUsuarios);
          setQtdPertencesCadastrados(dataQtdPertencesCadastrados);
          setQtdPertencesRecuperados(dataQtdPertencesRecuperados);
          
          
        }

      }
      catch (error) {
        setContentLoaded(true);
        console.log(error);
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
          <Text style={{ 
            fontSize: 20, 
            marginTop: 10, 
            fontWeight: 'bold', 
            width: '100%',  
            textAlign: 'center'
            }}>
              Entregas Semanais
          </Text>
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

          <Text style={{ 
            fontSize: 20, 
            marginTop: 10, 
            fontWeight: 'bold',
            width: '100%',
            textAlign: 'center'
            }}>
              Cadastro Semanal
          </Text>
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
      {/* <Document>
        <Page size="A4"> */}
          <Container
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{

            alignItems: 'center',
            justifyContent: 'center'
          }}
          >
            <PageHeader title="Comunidade" />

            <Relatorio>
              <RelatorioLine>
                A nossa comunidade já possui {qtdUsuarios} usuários.
              </RelatorioLine>
              <RelatorioLine>
                São {qtdPertencesCadastrados} pertences cadastrados.
              </RelatorioLine>
              <RelatorioLine>
              Parabéns, graças a vocês já são {qtdPertencesRecuperados}  
              pertences recuperados!
              </RelatorioLine>
            </Relatorio>

            {
              runContent()
            }

            <ReportBtn
              onPress={() => { gerarPdf(); }}
            >
              <ReportBtnText>
                Gerar pdf
              </ReportBtnText>
            </ReportBtn>

          </Container>
        {/* </Page>
      </Document> */}
    </>
  );
}


export default Graficos;