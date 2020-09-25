import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {Container, Titulo} from './styles';
import {Text } from "react-native";

function CadastroObjetos () {
    const navigation = useNavigation();
    return (
        <Container>
            <Titulo>
                Cadastrar Pertence
            </Titulo>
        </Container>
    );
}


export default CadastroObjetos;