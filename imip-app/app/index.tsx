import { Link, router} from 'expo-router';
import { StyleSheet, Text } from 'react-native';

import { Button, ButtonText} from '../components';
import styled from 'styled-components';
import theme from "../theme";

export default function index(){

    function handleSingIn(){
        router.push('/screen/singin');
    }
    
    return (
        <Container>
            <Button style={styles.footerButton} onPress={handleSingIn}>
                <ButtonText>Entrar</ButtonText>
            </Button>
        </Container>
    )
}

const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.blue_100};
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const styles = StyleSheet.create({
    footerButton:{
        backgroundColor: '#3498db',
        alignItems: 'center',
        position: 'absolute',
        bottom: 100,
    }
});