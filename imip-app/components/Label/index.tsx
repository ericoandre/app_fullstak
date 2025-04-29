import styled from 'styled-components/native';
import theme  from "../../theme";

export const Label = styled.Text`
  position: absolute;
  left: 10px;
  top: ${props => (props.$isFocusedOrFilled ? '0px' : '18px')};
  font-size: ${props => (props.$isFocusedOrFilled ? '12px' : '16px')};
  color: ${props => (props.$isFocusedOrFilled ? theme.colors.purple : theme.colors.white )};
  background-color: transparent;
  padding: 0 4px;
  z-index: 1;
`;