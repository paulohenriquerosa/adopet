import styled from 'styled-components/native';
import {Form as Unform} from '@unform/mobile';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const LogoImg = styled.Image`
  height: 158px;
  width: 128px;
  margin: 40px;
`;

export const FormContent = styled.View`
  flex: 1;
  width: 100%;
  background-color: #874cf0;

  align-items: center;
  justify-content: center;
  border-top-left-radius: 45px;
  border-top-right-radius: 45px;
`;
export const Form = styled(Unform)`
  width: 340px;
`;
export const FormText = styled.Text`
  font-size: 36px;
  margin-bottom: 24px;
  text-align: center;
  color: #fff;
`;

export const Forgot = styled.TouchableOpacity`
  margin-top: 24px;
`;
export const ForgotText = styled.Text`
  font-size: 15px;
  color: #fff;
`;

export const Back = styled.TouchableOpacity`
  margin-top: 36px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const BackText = styled.Text`
  color: #fff;
  font-size: 18px;
  margin-left: 8px;
`;
