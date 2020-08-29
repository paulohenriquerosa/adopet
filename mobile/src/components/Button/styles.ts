import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  background-color: #fff;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-top: 16px;
`;

export const ButtonText = styled.Text`
  font-size: 24px;
  color: #744dbe;
`;
