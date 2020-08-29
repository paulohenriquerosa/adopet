import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation, useRoute} from '@react-navigation/native';

import api from '../../service/api';

import {
  Container,
  Header,
  Back,
  HeaderTitle,
  ProfileContent,
  UserAvatar,
  UserName,
  Description,
  ContactButton,
  ContactButtonText,
} from './styles';

interface Params {
  id: number;
}

interface Owner {
  id: number;
  name: string;
  avatar_url: string;
  description: string;
}

const Profile: React.FC = () => {
  const {goBack} = useNavigation();
  const [owner, setOwner] = useState<Owner>({} as Owner);
  const route = useRoute();
  const {id} = route.params as Params;

  useEffect(() => {
    async function loadProfile() {
      const response = await api.get(`users/${id}`);
      setOwner(response.data);
    }
    loadProfile();
  }, [id]);

  return (
    <Container>
      <Header>
        <Back onPress={() => goBack()}>
          <Icon name="arrow-left" size={20} color="#fff" />
        </Back>
        <HeaderTitle>Perfil</HeaderTitle>
      </Header>
      <ProfileContent>
        <UserAvatar
          source={{
            uri: owner.avatar_url,
          }}
        />
        <UserName>{owner.name}</UserName>
        <Description>{owner.description}</Description>
        <ContactButton>
          <FontAwesome name="whatsapp" size={20} color="#fff" />
          <ContactButtonText>Entrar em contato</ContactButtonText>
        </ContactButton>
      </ProfileContent>
    </Container>
  );
};

export default Profile;
