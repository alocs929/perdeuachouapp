import styled from 'styled-components/native';


export const Container = styled.View`
  flex: 1;
  align-items: center;
  /* justify-content: center; */
  padding-top: 10%;
  
`;

export const Body = styled.View`
    width: 100%;
    padding: 5%;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

export const SideContainer = styled.View`
    width: 48%;
    height: 100%;
`;

export const LineVertical = styled.View`
    /* width: 1px; */
    border: .3px solid #ff6b6b;
    height: 100%;
    margin-right: 5px;
`;


export const ObjetoHead = styled.View`
    width: 100%;
    height: 20%;
`;

export const TitlePrimary = styled.Text`
    font-size: 20px;
    text-align: center;
    margin-bottom: 10px;
`;

export const TitleLabel = styled.Text`
    color: #ccc;
    font-size: 12px;
    width: 100%;
    /* height: 8%; */
    /* align-items: center; */
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


export const SuccessButton = styled.TouchableOpacity`
  background-color: #0fd143;
  width: 30%;
  height: 70%;
  padding: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  
`;

export const DangerButton = styled.TouchableOpacity`
  background-color: #de2100;
  width: 30%;
  height: 70%;
  padding: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
`;

export const PrimaryButton = styled.TouchableOpacity`
  background-color: #f7ae0f;
  width: 30%;
  height: 70%;
  padding: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
`;

export const ButtonText = styled.Text`
  text-align: center;
  align-items: center;
  color: #fff;
  font-size: 16px;
  width: 100%;
  
`;

export const PerdidoNav = styled.View`
    margin-top: 10px;
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    /* background-color: red; */
`;

export const PerdidoNavBtn = styled.TouchableOpacity`
    width: 60px;
    height: 40px;
    border-radius: 4px;
    
    justify-content: center;
    background-color: #f7ae0f;
`;

export const Footer = styled.View`
    border: 1px solid #ff6b6b;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 10%;
    flex-direction: row;
    position: absolute;
    bottom: 0;
`;