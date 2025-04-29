import styled from 'styled-components/native';
import theme  from "../../theme";

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background-color: ${theme.colors.blue_200};
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const ButtonText = styled.Text`
  color:  ${theme.colors.white};
  font-size: 18px;
  font-weight: bold;
`;
