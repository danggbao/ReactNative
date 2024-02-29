import { StyleSheet } from "react-native";
import colors from "../../contains/colors";
const styles = StyleSheet.create({
    addTask : {
        bottom : 30,
        paddingHorizontal : 10,
        flexDirection : 'row',
        justifyContent : 'space-between',
        width : '100%',
        alignItems : 'center',
    },
    textInput : {
        height : 44,
        width : '80%',
        backgroundColor : colors.white,
        borderWidth : 1,
        borderRadius : 20,
        borderColor : colors.primary,
        paddingHorizontal : 20,
    },
    iconWrapper : {
        height : 44,
        width : 44,
        borderRadius : 90,
        backgroundColor : colors.primary,
        alignItems : 'center',
        justifyContent : 'center',
    },
    icon : {
        fontSize : 25,
        color : colors.white,
    }
})

export default styles;