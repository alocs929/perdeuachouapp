import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

`;


export const Title = styled.Text`
  font-size: 50px;

`;

export const SubTitle = styled.Text`
  color: gray;
  font-size: 20px;
`;

export const Field = styled.View`

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
`;

export const CreateAccount = styled.View`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
`;

// export const CreateAccountButton = styled.TouchableOpacity`
//   /* position: absolute;
//   left: 0;
//   bottom: 0;
//   right: 0; */
//   border-top-width: 1px;
//   /* border-color: #232129; */
//   padding: 16px 0 ${16 + getBottomSpace()}px;

//   justify-content: center;
//   align-items: center;

// `;

// export const CreateAccountButtonText = styled.TouchableOpacity`
//   margin-top: 5px;
//   /* justify-content: center; */

//   /* background-color: blue; */
//   text-align: center;
//   align-items: center;
//   color: #ff9000;
//   margin-left: 16px;
//   font-size: 18px;
//   width: 100%;
//   text-align: center;
// `;

export const CreateAccountButton = styled.TouchableOpacity`
  position: absolute;

  background-color: #f1f1f1;
  left: 0;
  bottom: 0;
  right: 0;
  border-top-width: 1px;
  padding: 10px 0 ${16 + getBottomSpace()}px;

  justify-content: center;
  align-items: center;
`;

export const CreateAccountButtonText = styled.Text`
  margin-top: 5px;
  justify-content: center;
  align-items: center;
  color: #ff9000;
`;

