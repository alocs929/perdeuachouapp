import React, { useState } from 'react';
import {View, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PageHeader from '../../components/PageHeader';

import {
    Container,
    Footer,
    EditButton,
    EditButtonText,
    BodyObjeto,
    Imagem,
    Lista,
    ListaItem,
    Topico,
    Descricao
} from './styles';

import api from '../../services/api';

function DetalhesObjeto (){

    const [objeto, setObjeto] = useState({});

    async function getObjeto(){
        const response = await api.get('objeto');
        if (response.status){
            setObjeto(response.data);
            // retornar
        }
    }

    const navigation = useNavigation();
    
    return (
        <Container>
            <PageHeader title="Detalhes" />
            <BodyObjeto>
                {/* <ImgCard></ImgCard> */}
                <Imagem></Imagem>
                <Lista>
                    <ListaItem>
                        <Topico>Data: </Topico>
                        <Descricao>30/07/2020</Descricao>
                    </ListaItem>
                    <ListaItem>
                        <Topico>Categoria: </Topico>
                        <Descricao>
                            Capacete de motocicleta
                        </Descricao>
                    </ListaItem>
                    <ListaItem>
                        <Topico>Descrição: </Topico>
                        <Descricao>
                            Branco, viseira transparente, adesivo unicornio, 
                            modelo esportivo, marca IBF
                        </Descricao>
                    </ListaItem>
                    <ListaItem>
                        <Topico>Localização: </Topico>
                        <Descricao>
                            Encontrado no RU da UFC
                        </Descricao>
                    </ListaItem>
                    <ListaItem>
                        <Topico>Status: </Topico>
                        <Descricao>
                            Registrado, em busca do proprietario
                        </Descricao>
                    </ListaItem>
                </Lista>
            </BodyObjeto>
            <Footer>
                <EditButton>
                    <EditButtonText>
                        Editar
                    </EditButtonText>
                </EditButton>
            </Footer>
        </Container>
    );
}

export default DetalhesObjeto;