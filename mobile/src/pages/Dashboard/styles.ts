import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  background-color: #874cf0;
  justify-content: center;
  align-items: center;
  padding: 8px 0px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const HeaderTitle = styled.Text`
  color: #fff;
  font-size: 28px;
`;

export const Feed = styled.ScrollView``;

export const Post = styled.View`
  background-color: #fff;
  border-bottom-width: 0.4px;
  border-bottom-color: #c9c9c9;
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

export const CardFooter = styled.View`
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  flex-direction: row;
`;
export const Actions = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-right: auto;
  width: 80px;
`;

export const DetailsButton = styled(RectButton)`
  background-color: #874cf0;
  padding: 8px 16px;
  border-radius: 4px;
`;
export const DetailsButtonText = styled.Text`
  color: #fff;
  font-size: 14px;
`;
