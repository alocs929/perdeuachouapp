import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  /* flex: 1;
  align-items: center; */

  /* padding-top: 7%; */

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
  margin-right: 20px;
  padding: 10px;
`

export const Relatorio = styled.View`
  width: 90%;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const RelatorioLine = styled.Text`
  width: 100%;
  font-size: 18px;
  margin-bottom: 5px;
`;

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
  text-align:center;

`;
export const ButtonSaveText = styled.Text`
    width: 100%;
    color:  #fff;
    font-size: 20px;
    font-weight:bold;

`;
export const ListContainer = styled.View`
  display:flex;
  justify-content:center;
  align-items:center;
  width: 80%;
`;

export const ReportBtn = styled.TouchableOpacity`
  width: 80%;
  padding: 8px;
  background-color: #ffa726;
  margin-top: 20px;
  margin-bottom: 40px;
`;

export const ReportBtnText = styled.Text`
  color: #fff;
  width: 100%;
  text-align: center;
`;
