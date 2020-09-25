import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ButtonsFooter = styled.View`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
`;

export const CreateAccountButton = styled.TouchableOpacity`
  /* position: absolute;
  left: 0;
  bottom: 0;
  right: 0; */
  border-top-width: 1px;
  /* border-color: #232129; */
  padding: 16px 0 ${16 + getBottomSpace()}px;

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const CreateAccountButtonText = styled.Text`
  color: #ff9000;
  margin-left: 16px;
  font-size: 18px;
  width: 100%;
  text-align: center;
`;
