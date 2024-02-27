import { StyleSheet } from "react-native";

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
        backgroundColor : '#fff',
        borderWidth : 1,
        borderRadius : 20,
        borderColor : '#a3ccfe',
        paddingHorizontal : 20,
    },
    iconWrapper : {
        height : 44,
        width : 44,
        borderRadius : 90,
        backgroundColor : '#a3ccfe',
        alignItems : 'center',
        justifyContent : 'center',
    },
    icon : {
        fontSize : 25,
        color : '#fff'
    }
})

export default styles;