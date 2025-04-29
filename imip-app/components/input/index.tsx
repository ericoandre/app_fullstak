import styled from 'styled-components/native';
import theme  from "../../theme";

export const InputContainer = styled.View`
  width: 100%;
  margin-bottom: 20px;
`;
export const StyledInput = styled.TextInput`
  height: 50px;
  font-size: 16px;
  color: ${theme.colors.white};
  border-bottom-width: 2px;
  border-bottom-color: ${props => (props.isFocused ? theme.colors.purple : theme.colors.white )};
  background-color: transparent;
`;