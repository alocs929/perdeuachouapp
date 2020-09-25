import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {Container, Titulo, CampoTexto, Label, ButtonSave, ButtonSaveText} from './styles';
import {Text, TextInput } from "react-native";

function CadastroObjetos () {
    const navigation = useNavigation();
    return (
        <Container>
            <Titulo>
                Cadastrar Pertence
            </Titulo>
            <Label>Data</Label>
            <CampoTexto placeholder="Data em que o pertence foi encontrado" />

            <Label>Categoria</Label>
            <CampoTexto placeholder="Tipo de pertence" />

            <Label>Descrição</Label>
            <CampoTexto placeholder="Descreva o pertence" />

            <Label>Localização</Label>
            <CampoTexto placeholder="Possiveis locais onde foi perdido / encontrado" />

            <ButtonSave>
                <ButtonSaveText>
                    Finalizar Cadastro
                </ButtonSaveText>
            </ButtonSave>
        </Container>
    );
}


export default CadastroObjetos;