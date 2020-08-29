import React, {useCallback, useRef} from 'react';
import {KeyboardAvoidingView, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {FormHandles} from '@unform/core';
import * as Yup from 'yup';
import {useNavigation} from '@react-navigation/native';
import {useAuth} from '../../hooks/auth';
import getValidationError from '../../utils/getValidationError';
import imgLogo from '../../assets/logo.png';
import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  LogoImg,
  FormContent,
  Form,
  FormText,
  Forgot,
  ForgotText,
  CreateAccount,
  CreateAccountText,
} from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const {navigate} = useNavigation();
  const formRef = useRef<FormHandles>(null);
  const {signIn} = useAuth();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .email('Digite um e-mail válido')
            .required('E-mail obrigatório'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });
        const {email, password} = data;
        signIn({email, password});
      } catch (err) {
        const erros = getValidationError(err);
        formRef.current?.setErrors(erros);
      }
    },
    [signIn],
  );

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
            <Form ref={formRef} onSubmit={handleSubmit}>
              <FormText>Login</FormText>
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

              <Button onPress={() => formRef.current?.submitForm()}>
                Entrar
              </Button>
            </Form>
            <Forgot>
              <ForgotText>Esqueci minha senha</ForgotText>
            </Forgot>
            <CreateAccount onPress={() => navigate('SignUp')}>
              <Icon name="log-in" size={20} color="#fff" />
              <CreateAccountText>Criar uma conta</CreateAccountText>
            </CreateAccount>
          </FormContent>
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default SignIn;
