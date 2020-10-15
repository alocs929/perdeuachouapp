import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

// import Constants from 'expo-constants';
// import * as Permissions from 'expo-permissions' ;
import * as ImagePicker from 'expo-image-picker' ;

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
import {Text, TextInput, Picker } from "react-native";
import api from '../../services/api';
import PageHeader from '../../components/PageHeader';
const CadastroObjetos: React.FC = () => {

    const [cadastrado, setCadastrado] = useState(false);
    const [categoria, setCategoria] = useState('');
    const [descricao, setDescricao] = useState('');
    const [encontradoEm, setEncontradoEm] = useState('');
    const [id, setId] = useState(1);
    const [images, setImages] = useState({});
    const [status, setStatus] = useState('AGUARDANDO');
    const [tipo, setTipo] = useState('PERDIDO');
    const [usuario, setUsuario] = useState(
        {
            "cpfCpnj": "string",
            "email": "string",
            "id": 1,
            "nome": "string",
            "pertences": [
              {}
            ],
            "telefone": "string"
        }
    );
    const navigation = useNavigation();
    const [data,setData] = useState({id: Number, token: String});

    useEffect(() => {
      async function loadStorageData(): Promise<void> {
        const [idString, token] = await AsyncStorage.multiGet([
          '@PerdeuAchou:id',
          '@PerdeuAchou:token',
        ]);
        console.log(idString[1], token[1]);
      }
    }, []);

    async function imagePickerCall () {
        const data = await ImagePicker.launchImageLibraryAsync({});

        if (data.cancelled === true){
            return;
        }

        if (!data.uri){
            return;
        }

        setImages(data);
    }

    function carregarImagem(){
        console.log('carregar imagem');
    }

    function cleanFields(){
        setCategoria('');
        setDescricao('');
        setEncontradoEm('');
    }

    async function handleFieldsSubmit (){
        let pertence = {
            categoria,
            descricao,
            encontradoEm,
            id,
            images,
            status,
            tipo,
            usuario
        };
        console.log(pertence);
        const response = await api.post('pertence', pertence);
        if (response.status){
            setCadastrado(true);
            cleanFields();
        }
        console.log(response.data);
    }

    return (
      <>
        <PageHeader title="Cadastro de Objetos"/>

        <Container>
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
                value={encontradoEm}
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
