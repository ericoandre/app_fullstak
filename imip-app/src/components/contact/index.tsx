import { Text, ImageProps, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Avatar } from "../avatar";
import { styles } from './styles';

export type ContactProps = {
    name:string
    image?:ImageProps
}

type Props = TouchableOpacityProps & {
    contact:ContactProps
}

export const Contact = ({contact, ...rest}:Props) =>{
    return (
        <TouchableOpacity style={styles.container} {...rest}>
            <Avatar name="Erico" image={contact.image} variant="medium"/>
            <Text style={styles.name}>{contact.name}</Text>
        </TouchableOpacity>
    )
}