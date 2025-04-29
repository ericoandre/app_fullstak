import { Link, router } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

import styled from 'styled-components/native';
import theme from "../../../theme";

import { Button, ButtonText, Label,InputContainer, StyledInput } from "../../../components";
import { useState } from 'react';

import {  createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../../services/firebaseConfig';
import { collection, setDoc, doc } from 'firebase/firestore';

export default function SingUp(){
    const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repPassword, setRepPassword] = useState('');
  
      const [emailFocus, setEmailFocus] = useState(false);
      const [passwordFocus, setpasswordFocus] = useState(false);
      const [repPasswordFocus, setRepPasswordFocus] = useState(false);
      const [firstNameFocus, setFirstNameFocus] = useState(false);
      // const [lastNameFocus, setLastNameFocus] = useState(false);

    const [errorMessage, setErrorMessage] = useState('');

    const handleSignUp = async () => {
        try {

          if (password==repPassword){
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            router.push({pathname:'screen/singin'});
          }else{
            setErrorMessage('senha não são iguais!');
          }

      
          // Agora salvar no Firestore
          // await setDoc(doc(db, "usersapp"), {
          //   id: user.uid,
          //   name: firstName,
          //   // lastName: lastName,
          //   email: email,
          //   createdAt: new Date()
          // });
      
          console.log('Usuário cadastrado e dados salvos!');
        } catch (error) {
          console.log('Erro:', error);
          setErrorMessage('Email ou senha incorretos!');
        }
      };
  
    return (
        <Container>
            <TopImage source={require('../../../assets/hero-theeth.54c2c4e9.png')} resizeMode="contain" />
            <TitleContainer>
                <Title>Better </Title>
                <SubTitle>Dentistry</SubTitle>
            </TitleContainer>
          
          <InputContainer>
            <Label $isFocusedOrFilled={ firstNameFocus || firstName !== ''}>Name</Label>
            <StyledInput 
            placeholder=""
            keyboardType="email-address"
            autoCapitalize="none"
            $isFocused={firstNameFocus}
            value={firstName}
            onChangeText={setFirstName}
            onFocus={() => setFirstNameFocus(true)}
            onBlur={() => setFirstNameFocus(false)}
            />
            </InputContainer>  
      <InputContainer>
        <Label $isFocusedOrFilled={emailFocus || email !== ''}>Email</Label>
        <StyledInput
          placeholder=""
          keyboardType="email-address"
          autoCapitalize="none"
          $isFocused={emailFocus}
          value={email}
          onChangeText={setEmail}
          onFocus={() => setEmailFocus(true)}
          onBlur={() => setEmailFocus(false)}
        />
      </InputContainer>
      <InputContainer>
        <Label $isFocusedOrFilled={passwordFocus || password !== ''}>Password</Label>
        <StyledInput
          placeholder=""
          secureTextEntry
          $isFocused={passwordFocus}
          value={password}
          onChangeText={setPassword}
          onFocus={() => setpasswordFocus(true)}
          onBlur={() => setpasswordFocus(false)}
        />
      </InputContainer>
      <InputContainer>
        <Label $isFocusedOrFilled={ repPasswordFocus || repPassword !== ''}>Rep Password</Label>
        <StyledInput
          placeholder=""
          secureTextEntry
          $isFocused={repPasswordFocus}
          value={repPassword}
          onChangeText={setRepPassword}
          onFocus={() => setRepPasswordFocus(true)}
          onBlur={() => setRepPasswordFocus(false)}
        />
      </InputContainer>
 
      <Button onPress={() => handleSignUp() }>
        <ButtonText>Sing Up</ButtonText>
      </Button>

      <Footer>
        <FooterText>Already have an account?</FooterText>
        <Link style={styles.text} href='/screen/singin'> Sing In</Link>
      </Footer>
      {errorMessage !== '' && <ErrorText>{errorMessage}</ErrorText>}
        </Container>

        // <View style={styles.container}>
        //     <Text>SingUp Page</Text>
        //     <Link href='/screen/singin'>SingIn</Link>
        // </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'green',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
      color: 'white',
      fontWeight:'bold',
    }
});

const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.blue_100};
  justify-content: center;
  align-items: center;
  padding: 20px;
`;
const TopImage = styled.Image`
  width: 250px;
  height: 250px;
  margin-top: 30px;
  margin-bottom: 20px;
`;
const TitleContainer = styled.View`
  flex-direction: row;
  margin-bottom: 25px;
`;

const Title = styled.Text`
  font-size: 33px;
  color: white;
  font-weight: bold;
`;

const SubTitle = styled.Text`
  font-size: 30px;
  color: #cccccc;
  font-weight: bold;
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
  color: white;
  font-size: 14px;
`;

const FooterLink = styled.Text`
  color: white;
  font-size: 14px;
  font-weight: bold;
  margin-left: 5px;
`;