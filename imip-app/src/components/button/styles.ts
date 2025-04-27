import { StyleSheet } from "react-native";

import { theme } from "../../theme";

export const styles  = StyleSheet.create({
    container: {
        width:"100%",
        height:54, 
        borderRadius:5,
        alignContent:"center",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:theme.colors.primary,

    },
    title:{
        color:theme.colors.white,
        fontSize:18,
    }
})