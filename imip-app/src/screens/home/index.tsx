import { TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import { styles } from "./styles";

import { Input } from "../../components/input";
import { theme } from "../../theme";
import { useState } from "react";
import { Contact } from "../../components/contact";
import { Button } from "../../components/button";

export const Home = () => {
    const [name, setName] = useState("");
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Input style={styles.input}>
                    <Feather name="search" size={16} color={theme.colors.gray_300} />
                    <Input.Field 
                        placeholder=""
                        onChangeText={setName}
                        value={name}
                    />
                    <TouchableOpacity onPress={() => setName("")} activeOpacity={0.7}>
                        <Feather name="x" size={16} color={theme.colors.gray_300}  />
                    </TouchableOpacity>   
                </Input>
            </View>

            <Contact contact={{
                name:"Erico",
                image: require('../../../assets/user-139.png')
            }}>

            </Contact>
            <Button title="Teste" ></Button>
        </View>
    )
}
