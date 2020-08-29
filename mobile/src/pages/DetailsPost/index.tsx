import React, {useState, useEffect, useCallback} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation, useRoute} from '@react-navigation/native';
import api from '../../service/api';

import {
  Container,
  Header,
  Back,
  HeaderTitle,
  PostHeader,
  UserInfo,
  AvatarUser,
  Username,
  TimeText,
  ImagePost,
  Content,
  Title,
  Description,
  ContactButton,
  ContactButtonText,
} from './styles';

interface Params {
  id: number;
}

interface Post {
  id: number;
  title: string;
  imgURL: string;
  description: string;
  owner: {
    id: number;
    avatar_url: string;
    name: string;
  };
}

const DetailsPost: React.FC = () => {
  const [post, setPost] = useState<Post>({} as Post);
  const route = useRoute();
  const {id} = route.params as Params;
  const {goBack, navigate} = useNavigation();

  useEffect(() => {
    async function loadPost() {
      const response = await api.get<Post>(`posts/${id}`);
      setPost(response.data);
      console.log(response.data);
    }
    loadPost();
  }, [id]);

  const handleNavigateToOwner = useCallback(
    (owner_id: number) => {
      navigate('Profile', {
        owner_id,
      });
    },
    [navigate],
  );

  return (
    <Container>
      <Header>
        <Back onPress={() => goBack()}>
          <Icon name="arrow-left" size={20} color="#fff" />
        </Back>
        <HeaderTitle>Detalhe</HeaderTitle>
      </Header>
      <PostHeader>
        <UserInfo onPress={() => handleNavigateToOwner(post.owner.id)}>
          <AvatarUser
            source={{
              uri: post.owner?.avatar_url,
            }}
          />
          <Username>{post.owner?.name}</Username>
        </UserInfo>

        <Icon name="clock" size={20} color="#C9C9C9" />
        <TimeText>30min</TimeText>
      </PostHeader>
      <ImagePost
        source={{
          uri: post.imgURL,
        }}
      />
      <Content>
        <Title>{post.title} </Title>
        <Description>{post.description}</Description>

        <ContactButton>
          <FontAwesome name="whatsapp" size={20} color="#fff" />
          <ContactButtonText>Entrar em contato</ContactButtonText>
        </ContactButton>
      </Content>
    </Container>
  );
};

export default DetailsPost;
