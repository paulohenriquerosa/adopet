import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
`;
export const Header = styled.View`
  background-color: #874cf0;
  height: 48px;

  align-items: center;
  flex-direction: row;
`;

export const Back = styled(RectButton)`
  padding: 16px;
  position: absolute;
  border-radius: 8px;
`;

export const HeaderTitle = styled.Text`
  color: #fff;
  font-size: 18px;
  margin: 0 auto;
`;

export const ProfileContent = styled.ScrollView`
  padding: 0 20px;
  flex: 1;
`;

export const UserAvatar = styled.Image`
  width: 132px;
  height: 132px;
  border-radius: 68px;
  align-self: center;
  margin-top: 20px;
`;
export const UserName = styled.Text`
  color: #874cf0;
  text-align: center;
  margin-top: 12px;
  font-size: 24px;
`;

export const Description = styled.Text`
  color: #484545;
  font-size: 16px;
  margin-top: 24px;
`;

export const ContactButton = styled(RectButton)`
  background-color: #4caf50;
  padding: 14px 0;
  margin: 24px 0;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
export const ContactButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  margin-left: 8px;
`;
