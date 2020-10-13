import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const SafeAreaViewContainer =  styled.SafeAreaView`

`;
export const Container = styled.ScrollView`

  /* flex: 1;
  align-items: center;
  justify-content: center; */
`;

export const Title = styled.Text`
  width: 100%;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  /* margin-bottom: 80px; */
`;



export const Field = styled.View`

`;

export const FieldCheckBox = styled.View`
  margin-top: 10px;
  margin-bottom: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 280px;
`;

export const TitleField = styled.Text`
  font-size: 15px;
  margin-top: 10px;
  color: red;
`;
export const InputField = styled.TextInput`
  font-size: 20px;
  border: 1px;
  border-radius: 5px;
  padding: 1px 3px;
  width: 300px;
  height: 50px;
  border-color: #d4d4d4;
  padding: 1px 10px;
`;

export const Recover = styled.TouchableOpacity`
  color: red;
`;

export const ButtonLogin = styled.TouchableOpacity`
  margin-top: 10px;
  background-color: #ff6b6b;
  border-radius: 5px;
  width: 300px;
  height: 50px;
  align-items: center;
  justify-content: center;
  padding: 5px;
`;

export const ButtonLoginText = styled.Text`
  font-size: 25px;
  color: #fff;
  width: 100%;
  text-align: center;
`;

export const CreateAccountButton = styled.TouchableOpacity`
  /* position: absolute; */
  margin-top: 10px;
  width: 80%;
  background-color: #f1f1f1;
  left: 0;
  bottom: 0;
  right: 0;
  border-top-width: 1px;
  padding: 10px 0 ${10 + getBottomSpace()}px;

  justify-content: center;
  align-items: center;
`;

export const CreateAccountButtonText = styled.Text`
  margin-top: 5px;
  justify-content: center;
  align-items: center;
  color: #ff9000;
  text-align: center;
  width: 100%;
  
`;

