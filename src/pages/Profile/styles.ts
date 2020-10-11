import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.ScrollView`
  /* flex: 1; */
`;



export const ProfileImg = styled.Image`
  margin-top: 40px;
  width: 150px;
  height: 150px;
  border-radius: 999px;
  margin-bottom: 50px;
`;

export const FieldBox = styled.View`
  flex:1;
  align-items: flex-start;
  margin-left: 0;
`;

export const Field = styled.View`
  margin-top: 20;
  /* flex-direction: row; */
  /* align-items: center; */
`;

export const TitleField = styled.Text`
  font-weight: 600;
  font-size: 15px;
  color: red;

`;
export const ContentField = styled.Text`
  font-size: 20px;
`;
