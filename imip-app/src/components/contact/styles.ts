import { StyleSheet } from "react-native";

import { theme } from "../../theme";

export const styles  = StyleSheet.create({
    container: {
        width:"100%",
        height:80,
        flexDirection:"row",
        alignItems:"center",
        borderRadius:5,
        gap:12,
        backgroundColor: theme.colors.bgGray,
        marginBottom:10,
    
    },
    name:{
        color: theme.colors.black,
        fontSize:18
    }
})