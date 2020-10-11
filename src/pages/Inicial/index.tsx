import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';



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
  BtnMenuText
} from './styles';
import { Text, TextInput } from "react-native";
import api from '../../services/api';
import PageHeader from '../../components/PageHeader';
const CadastroObjetos: React.FC = () => {

  

  const navigation = useNavigation();


  return (
    <>
      <PageHeader title="Pagina Inicial" />
      <Container>

        <BtnContainer>
          <BtnMenu>
            <BtnMenuText>

              Achados
            </BtnMenuText>
          </BtnMenu>
          <BtnMenu>
            <BtnMenuText>

              Perdidos
          </BtnMenuText>

          </BtnMenu>

        </BtnContainer>


        {/* <Label>Data</Label>
            <CampoTexto placeholder="Data em que o pertence foi encontrado" /> */}









        <ButtonAddItem>
          <ButtonSaveText>
            Adicionar Item
          </ButtonSaveText>
          <Ionicons style={{ marginRight: 2, marginLeft: -30 }} name="md-add-circle" size={30} color="white" />
        </ButtonAddItem>
      </Container>

    </>
  );
}


export default CadastroObjetos;
