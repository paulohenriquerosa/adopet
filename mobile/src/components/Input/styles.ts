import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  width: 100%;
  height: 50px;
  background-color: #fff;
  margin-bottom: 8px;
  border-radius: 5px;

  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 0 16px;

  border-width: 2px;
  border-color: #874cf0;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #89858d;
  font-size: 16px;
`;

export const Icon = styled(Feather)`
  margin-right: 8px;
`;
