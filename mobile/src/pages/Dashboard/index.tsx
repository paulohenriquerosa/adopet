import React, {useEffect, useState, useCallback} from 'react';
import Icon from 'react-native-vector-icons/Feather';

import {useNavigation} from '@react-navigation/native';
import api from '../../service/api';

import {
  Container,
  Header,
  HeaderTitle,
  Feed,
  Post,
  PostHeader,
  UserInfo,
  AvatarUser,
  Username,
  TimeText,
  ImagePost,
  CardFooter,
  Actions,
  DetailsButton,
  DetailsButtonText,
} from './styles';

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

const Dashboar: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const {navigate} = useNavigation();

  useEffect(() => {
    async function loadPosts() {
      const response = await api.get('posts');
      setPosts(response.data);
    }

    loadPosts();
  }, []);

  const handleNavigateToDetail = useCallback(
    (id: number) => {
      navigate('DetailsPost', {
        id,
      });
    },
    [navigate],
  );

  const handleNavigateToOwner = useCallback(
    (id: number) => {
      navigate('Profile', {
        id,
      });
    },
    [navigate],
  );

  return (
    <Container>
      <Header>
        <HeaderTitle>Adopet</HeaderTitle>
      </Header>
      <Feed>
        {posts.map((post) => (
          <Post key={String(post.id)}>
            <PostHeader>
              <UserInfo onPress={() => handleNavigateToOwner(post.owner.id)}>
                <AvatarUser
                  source={{
                    uri: post.owner.avatar_url,
                  }}
                />
                <Username>{post.owner.name}</Username>
              </UserInfo>

              <Icon name="clock" size={20} color="#C9C9C9" />
              <TimeText>30min</TimeText>
            </PostHeader>

            <ImagePost
              source={{
                uri: post.imgURL,
              }}
            />
            <CardFooter>
              <Actions>
                <Icon name="thumbs-up" size={30} color="#B8B8B8" />
                <Icon name="share-2" size={30} color="#B8B8B8" />
              </Actions>
              <DetailsButton onPress={() => handleNavigateToDetail(post.id)}>
                <DetailsButtonText>Saber mais</DetailsButtonText>
              </DetailsButton>
            </CardFooter>
          </Post>
        ))}
      </Feed>
    </Container>
  );
};

export default Dashboar;
