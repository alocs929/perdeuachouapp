import styled from 'styled-components/native';


export const Container = styled.View`
  flex: 1;
  align-items: center;
  /* justify-content: center; */
  padding-top: 10%;
  
`;

export const BodyObjeto = styled.View`
    width: 100%;
    padding: 5%;
    align-items: center;
`;

export const Imagem = styled.View`
    background-color: #ccc;
    width: 100%;
    height: 200px;
`;

export const Lista = styled.View`
    width: 100%;
    flex-direction: column;
`;

export const ListaItem = styled.View`
    width: 100%;
    flex-direction: row;
`;

export const Topico = styled.Text`
    font-weight: bold;
`;

export const Descricao = styled.Text`
    flex: 1;
`;

export const Footer = styled.View`
    border: 1px solid #ff6b6b;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 15%;
    position: absolute;
    bottom: 0;
`;

export const EditButton = styled.TouchableOpacity`
  background-color: #ff6b6b;
  width: 50%;
  padding: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  
`;

export const EditButtonText = styled.Text`
  text-align: center;
  align-items: center;
  color: #fff;
  font-size: 18px;
  width: 100%;
  
`;

