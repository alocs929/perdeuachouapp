import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
    Container,
    Titulo,
    CampoTexto,
    Label,
    ButtonSave,
    ButtonSaveText,
    MensagemSucesso
} from './styles';
import {Text, TextInput } from "react-native";
import api from '../../services/api';

const CadastroObjetos: React.FC = () => {

    const [cadastrado, setCadastrado] = useState(false);
    const [categoria, setCategoria] = useState('');
    const [descricao, setDescricao] = useState('');
    const [encontradoEm, setEncontradoEm] = useState('');
    const [id, setId] = useState(1);
    const [images, setimages] = useState([{"id":2, "link":"string"}]);
    const [status, setStatus] = useState('AGUARDANDO');
    const [tipo, setTipo] = useState('ACHADO');
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

            <ButtonSave onPress={handleFieldsSubmit}>
                <ButtonSaveText>
                    Finalizar Cadastro
                </ButtonSaveText>
            </ButtonSave>
        </Container>
    );
}


export default CadastroObjetos;
