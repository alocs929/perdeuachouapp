import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

// import Constants from 'expo-constants';
// import * as Permissions from 'expo-permissions' ;
import * as ImagePicker from 'expo-image-picker';

import {
  Container,
  Titulo,
  CampoTexto,
  Label,
  ButtonSave,
  ButtonSaveText,
  MensagemSucesso,
  Select,
  SelectBorder,
  BotaoImagem
} from './styles';
import { Text, TextInput, Picker } from "react-native";
import api from '../../services/api';
import PageHeader from '../../components/PageHeader';
import { set } from 'react-native-reanimated';
const CadastroObjetos: React.FC = () => {

  const [cadastrado, setCadastrado] = useState(false);
  const [categoria, setCategoria] = useState('');
  const [descricao, setDescricao] = useState('');
  const [perdidoEm, setEncontradoEm] = useState('');
  const [id, setId] = useState(1);
  const [images, setImages] = useState({});
  const [status, setStatus] = useState('AGUARDANDO');
  const [tipo, setTipo] = useState('ACHADO');
  const [usuario, setUsuario] = useState(
    {
      "id": 0,
    }
  );
  const navigation = useNavigation();
  const [data, setData] = useState({ id: Number, token: String });

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const [idString, token] = await AsyncStorage.multiGet([
        '@PerdeuAchou:id',
        '@PerdeuAchou:token',
      ]);
      console.log('-----------------------------------------------------HI THERE------------------------------------------- ')
      console.info(idString)
      setUsuario({ "id": parseInt(idString[1]) })
    }
    loadStorageData()
  }, []);

  async function imagePickerCall() {
    const data = await ImagePicker.launchImageLibraryAsync({});

    if (data.cancelled === true) {
      return;
    }

    if (!data.uri) {
      return;
    }
    console.log("---------------- YO SILVER ------------------------")
    console.log(data)
    setImages(data);
  }

  function carregarImagem() {
    console.log('carregar imagem');
  }

  function cleanFields() {
    setCategoria('');
    setDescricao('');
    setEncontradoEm('');
  }

  async function handleFieldsSubmit() {
    try {
      let imageData = new FormData();
      let pertence = {
        categoria,
        descricao,
        perdidoEm,
        status,
        tipo,
        usuario
      };
      imageData.append("file", {
        uri: images.uri,
        type: images.type + "/jpeg",
        name: "hi there.jpeg"
      })
      const linkImage = await api.post("/storage/uploadFiles", imageData);

      console.log()

      pertence['images'] = [

        { "link": linkImage.data[0] }
      ]


      const response = await api.post('pertence', pertence);
      if (response.status) {
        setCadastrado(true);
        cleanFields();
      }
    } catch (error) {
      // console.error('Erro ao cadastrar')
      console.log(error)
    }


  }

  return (
    <>
      <PageHeader title="Cadastro de Objetos" />

      <Container 
      contentContainerStyle={{

        alignItems: 'center',
        // justifyContent: 'center'
      }}
      >
        <Titulo>
          Cadastrar Pertence
            </Titulo>
        {/* <Label>Data</Label>
            <CampoTexto placeholder="Data em que o pertence foi encontrado" /> */}
        {
          cadastrado
          &&
          <MensagemSucesso>
            Objeto cadastrado com sucesso
                </MensagemSucesso>
        }


        <BotaoImagem onPress={imagePickerCall}>
          <ButtonSaveText>Escolha uma imagem</ButtonSaveText>
        </BotaoImagem>

        <Label>Categoria</Label>
        <CampoTexto
          placeholder="Tipo de pertence"
          value={categoria}
          onChangeText={text => setCategoria(text)}
        />

        <Label>Descrição</Label>
        <CampoTexto
          placeholder="Descreva o pertence"
          value={descricao}
          onChangeText={text => setDescricao(text)}
        />

        <Label>Localização</Label>
        <CampoTexto
          placeholder="Possiveis locais onde foi perdido / encontrado"
          value={perdidoEm}
          onChangeText={text => setEncontradoEm(text)}
        />

        <Label>Tipo do objeto</Label>
        <SelectBorder>
          <Select
            selectedValue={tipo}
            onValueChange={
              (itemValor, itemIndex) => {
                setTipo(itemValor);
              }
            }
          >
            <Picker.Item
              label="Perdido"
              value="Perdido" />
            <Picker.Item
              label="Achado"
              value="Achado" />
          </Select>
        </SelectBorder>

        <ButtonSave onPress={handleFieldsSubmit}>
          <ButtonSaveText>
            Finalizar Cadastro
                </ButtonSaveText>
        </ButtonSave>
      </Container>
    </>
  );
}


export default CadastroObjetos;
