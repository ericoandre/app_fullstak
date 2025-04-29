import { Link, router } from 'expo-router';

import React, { useState } from 'react';
import styled from 'styled-components/native';

// custom components
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../services/firebaseConfig';

import { Button, ButtonText, Label,InputContainer, StyledInput } from "../../../components";
import theme from "../../../theme";

const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.blue_100};
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const TitleContainer = styled.View`
  flex-direction: row;
  margin-bottom: 25px;
`;

const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: white;
  margin-bottom: 40px;
`;
const SubTitle = styled.Text`
  font-size: 30px;
  color: #cccccc;
  font-weight: bold;
`;

const TopImage = styled.Image`
  width: 250px;
  height: 250px;
  margin-top: 40px;
  margin-bottom: 20px;
`;

const ErrorText = styled.Text`
  color: red;
  margin-top: 10px;
`;
const Footer = styled.View`
  flex-direction: row;
  margin-top: 20px;
`;

const FooterText = styled.Text`
  color:  white;
  font-size: 14px;
`;

const FooterLink = styled.Text`
  color: white;
  font-size: 14px;
  font-weight: bold;
  margin-left: 5px;
`;

export default function SingIn(){
    const [emailFocus, setEmailFocus] = useState(false);
    const [senhaFocus, setSenhaFocus] = useState(false);
  
    const [emailValue, setEmailValue] = useState('');
    const [senhaValue, setSenhaValue] = useState('');

    const [errorMessage, setErrorMessage] = useState('');
  
    const handleLogin = async () => {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, emailValue, senhaValue);
        const user = userCredential.user;
        router.push({pathname:'screen/home', params: {
          name: user.displayName || 'Usuário sem nome',
          email: user.email,
          photo: user.photoURL || 'https://robohash.org/avata' // Se não tiver foto
        }})
      } catch (error) {
        setErrorMessage('Email ou senha incorretos!');
      }
    };

    function handleSingUp(){
      router.push({pathname:'screen/singup'});
    }


    return (
    <Container>
      {/* Imagem acima */}
       <TopImage
        source={require('../../../assets/hero-theeth.54c2c4e9.png')} // ajuste o caminho da sua imagem
        resizeMode="contain"
      />
      {/* Título */}
      <TitleContainer>
        <Title>Better </Title>
        <SubTitle>Dentistry</SubTitle>
      </TitleContainer>
        {/* Inputs */}
        <InputContainer>
        <Label $isFocusedOrFilled={emailFocus || emailValue !== ''}>Email</Label>
        <StyledInput
          placeholder=""
          keyboardType="email-address"
          autoCapitalize="none"
          $isFocused={emailFocus}
          value={emailValue}
          onChangeText={setEmailValue}
          onFocus={() => setEmailFocus(true)}
          onBlur={() => setEmailFocus(false)}
        />
      </InputContainer>
        <InputContainer>
        <Label $isFocusedOrFilled={senhaFocus || senhaValue !== ''}>Password</Label>
        <StyledInput
          placeholder=""
          // secureTextEntry
          $isFocused={senhaFocus}
          value={senhaValue}
          onChangeText={setSenhaValue}
          onFocus={() => setSenhaFocus(true)}
          onBlur={() => setSenhaFocus(false)}
        />
      </InputContainer>


      {/* Botão */}
      <Button onPress={handleLogin}>
        <ButtonText>Entrar</ButtonText>
      </Button>


      {/* Rodapé */}
      <Footer>
        <FooterText>Already have an account?</FooterText>
        <FooterLink onPress={(emailValue) =>  handleSingUp()} >
          Sing Up
        </FooterLink>
      </Footer>

      {errorMessage !== '' && <ErrorText>{errorMessage}</ErrorText>}
      </Container>
  );
};