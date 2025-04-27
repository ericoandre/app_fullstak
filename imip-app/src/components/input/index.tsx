import {View, ViewProps,TextInput, TextInputProps } from 'react-native';
import { styles } from './styles';

import { theme } from '../../theme';

const Input = ({ children, style }: ViewProps) => {
  return <View style={[styles.container, style]}>{ children }</View>;
};

const Field = ({ ...rest }: TextInputProps) =>{
    return <TextInput style={styles.input} placeholderTextColor={theme.colors.gray_300} { ...rest } />;
};

Input.Field = Field;

export { Input }