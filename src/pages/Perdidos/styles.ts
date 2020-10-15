import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  /* justify-content: center; */
  padding-top: 7%;

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

export const BtnMenu = styled.TouchableOpacity`
    width: 30%;
    background-color: #ff6b6b;
    border-radius: 10px;
    margin-right: 20px
    padding:10px
`

export const BtnContainer = styled.View`
  display:flex;
  flex-direction: row;
  justify-content:space-between;
  align-content:center;

`

export const CampoTexto = styled.TextInput`
    width: 90%;
    border: solid 1px #121212;
    font-size: 16px;
    padding: 4px;
    border-radius: 4px;
    margin-bottom: 4px;
`;
export const MensagemSucesso = styled.Text`
  width: 100%;
  text-align: center;
`;

export const ButtonSave = styled.TouchableOpacity`

    margin-top: 10%;
    width: 90%;
    background-color:  #ff9000;
    padding: 8px;
    border-radius: 4px;

`;
export const ButtonAddItem = styled.TouchableOpacity`
  width:50%;
  background-color:  #ff9000;
  padding:18px;
  border-radius: 30px;
  margin-top: 10%;
  font-weight: bold;
  display:flex;
  flex-direction: row;
  align-items:center;
  justify-content:space-around;
`;
export const BtnMenuText = styled.Text`
  width: 100%;
  color:  #fff;
  font-size: 20px;
  font-weight:bold;
  text-align:center

`
export const ButtonSaveText = styled.Text`
    width: 100%;
    color:  #fff;
    font-size: 20px;
    font-weight:bold;

`;
export const ListContainer = styled.View`
  display:flex;
  justify-content: space-around;
  width: 80%;

`
