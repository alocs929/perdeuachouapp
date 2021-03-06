import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  /* flex: 1;
  align-items: center; */
  /* justify-content: center; */
  /* padding-top: 10%; */
  
`;

export const Titulo = styled.Text`
  color: #121212;
  margin-left: 16px;
  font-size: 18px;
  width: 100%;
  text-align: center;
  margin-bottom: 5%;
`;

export const Label = styled.Text`
    color: #121212;
    font-size: 14px;
    width: 90%;
`;

export const CampoTexto = styled.TextInput`
    width: 90%;
    border: solid 1px #121212;
    font-size: 16px;
    padding: 4px;
    border-radius: 4px;
    margin-bottom: 4px;
`;

export const BotaoImagem = styled.TouchableOpacity`
    width: 90%;
    /* border: solid 1px #121212; */
    font-size: 16px;
    padding: 10px 4px;
    border-radius: 4px;
    margin-bottom: 4px;
    background-color:  #ff6b6b;

`;

export const MensagemSucesso = styled.Text`
  width: 100%;
  text-align: center;
`;

export const ButtonSave = styled.TouchableOpacity`
  margin-top: 10%;
  width: 90%;
  background-color:  #ff6b6b;
  padding: 8px;
  border-radius: 4px;
`;

export const ButtonSaveText = styled.Text`
  width: 100%;
  color:  #fff;
  text-align: center;
  font-size: 14px;
`;



export const SelectBorder = styled.View`
  width: 90%;
  border: solid 1px #121212;
  border-radius: 4px;
`;

export const Select = styled.Picker`
  width: 100%;
  
  /* height: 16px; */
`;