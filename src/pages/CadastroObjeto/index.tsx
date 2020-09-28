import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import {Container, Titulo, CampoTexto, Label, ButtonSave, ButtonSaveText} from './styles';
import {Text, TextInput } from "react-native";
import api from '../../services/api';

const CadastroObjetos: React.FC = () => {

    const [categoria, setCategoria] = useState('');
    const [descricao, setDescricao] = useState('');
    const [localizacao, setLocalizacao] = useState('');
    const [imagens, setImagens] = useState([""]);
    const [status, setStatus] = useState('AGUARDANDO');
    const [tipo, setTipo] = useState('ACHADO');
    const [usuario, setUsuario] = useState({'id':1});

    const navigation = useNavigation();

    async function handleFieldsSubmit (){
        let pertence = {
            categoria,
            descricao,
            localizacao,
            imagens,
            status,
            tipo,
            usuario
        };
        console.log(pertence);
        const response = await api.post(``, pertence);
        console.log(response.data);
    }

    return (
        <Container>
            <Titulo>
                Cadastrar Pertence
            </Titulo>
            {/* <Label>Data</Label>
            <CampoTexto placeholder="Data em que o pertence foi encontrado" /> */}

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
                value={localizacao}
                onChangeText={text => setLocalizacao(text)}
                />

            <ButtonSave onPress={handleFieldsSubmit}>
                <ButtonSaveText>
                    Finalizar Cadastro
                </ButtonSaveText>
            </ButtonSave>
        </Container>
    );
}


export default CadastroObjetos;