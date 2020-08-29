import React, {useEffect, useRef} from 'react';
import {TextInputProps} from 'react-native';

import {useField} from '@unform/core';

import {Container, TextInput, Icon} from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

interface InputValueRef {
  value: string;
}

const Input: React.FC<InputProps> = ({name, icon, ...rest}) => {
  const {registerField, fieldName, error} = useField(name);
  const inputValueRef = useRef<InputValueRef>({value: ''});

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
    });
  }, [registerField, fieldName]);

  return (
    <Container>
      <Icon name={icon} size={20} color="#89858D" />
      <TextInput
        onChangeText={(value) => {
          inputValueRef.current.value = value;
        }}
        {...rest}
      />
    </Container>
  );
};

export default Input;
