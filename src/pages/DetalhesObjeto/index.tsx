import React, { useState, useEffect } from 'react';
import {View, Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
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

const  DetalhesObjeto: React.FC = () =>{

    const [objeto, setObjeto] = useState({

    });
    
    

    const [data,setData] = useState({id: Number, token: String});

    

    async function getObjeto(){
        const data = await AsyncStorage.getItem('@PerdeuAchou:objeto');
        console.log(data);
    }

    useEffect(() => {
        async function loadStorageData(): Promise<void> {
          const [idString, token] = await AsyncStorage.multiGet([
            '@PerdeuAchou:id',
            '@PerdeuAchou:token', 
        ]);
          console.log(idString[1], token[1]);
        }

        // async function getObjeto(){
        //     const response = await api.get('pertence');
        //     if (response.status){
        //         setObjeto(response.data);
        //         // retornar
        //     }
        // }

        loadStorageData();
        getObjeto();
        
      }, []);

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
                        <Descricao>26/04/2020</Descricao>
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