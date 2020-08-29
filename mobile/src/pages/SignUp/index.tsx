import React from 'react';
import {KeyboardAvoidingView, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {useNavigation} from '@react-navigation/native';
import imgLogo from '../../assets/logo.png';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {
  Container,
  LogoImg,
  FormContent,
  Form,
  FormText,
  Back,
  BackText,
} from './styles';

const SignIn: React.FC = () => {
  const {goBack} = useNavigation();

  return (
    <Container>
      <LogoImg source={imgLogo} />

      <KeyboardAvoidingView behavior="height" style={{flex: 1, width: '100%'}}>
        <ScrollView
          contentContainerStyle={{flex: 1}}
          // eslint-disable-next-line prettier/prettier
          keyboardShouldPersistTaps="handled"
        >
          <FormContent>
            <Form>
              <FormText>Cadastro</FormText>
              <Input
                autoCorrect={false}
                name="name"
                icon="user"
                placeholder="Nome"
              />
              <Input
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                name="email"
                icon="mail"
                placeholder="E-mail"
              />
              <Input
                secureTextEntry
                name="password"
                icon="lock"
                placeholder="Senha"
              />

              <Button>Criar</Button>
            </Form>

            <Back onPress={() => goBack()}>
              <Icon name="arrow-left" size={20} color="#fff" />
              <BackText>Voltar</BackText>
            </Back>
          </FormContent>
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default SignIn;
