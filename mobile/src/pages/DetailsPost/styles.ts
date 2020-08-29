import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View``;

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

export const PostHeader = styled.View`
  padding: 12px 16px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const UserInfo = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: auto;
`;
export const AvatarUser = styled.Image`
  height: 32px;
  width: 32px;
  border-radius: 16px;
`;
export const Username = styled.Text`
  color: #8e8e8e;
  margin-left: 8px;
`;

export const TimeText = styled.Text`
  color: #c9c9c9;
  margin-left: 4px;
`;

export const ImagePost = styled.Image`
  height: 220px;
`;

export const Content = styled.View`
  margin: 0 17px;
`;

export const Title = styled.Text`
  color: #484545;
  font-size: 24px;
  margin-top: 20px;
`;
export const Description = styled.Text`
  color: #484545;
  font-size: 16px;
  margin-top: 8px;
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
