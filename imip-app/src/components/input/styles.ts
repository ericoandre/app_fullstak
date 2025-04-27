import { StyleSheet } from "react-native";

import { theme } from "../../theme";

export const styles  = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.gray_100,
        borderRadius:18,
        height:54, 
        flexDirection:"row",
        alignItems:"center",
        paddingLeft:12,
        paddingRight:12,
        gap:7,
    },
    input:{
        flex:1,
        color: theme.colors.black,
        fontSize:18,
    }
})