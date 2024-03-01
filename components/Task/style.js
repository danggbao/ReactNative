import { StyleSheet } from "react-native";
import colors from "../../contains/colors";
const styles = StyleSheet.create({
    item : {
        flexDirection : 'row',
        backgroundColor : colors.white,
        paddingVertical : 5,
        paddingHorizontal : 20,
        marginBottom : 10,
        marginHorizontal : 8,
        borderRadius : 10,
        alignItems : 'center',
        justifyContent : 'space-between'
    
      },
      square : {
        width : 48,
        height : 36,
        borderRadius : 10,
        justifyContent : 'center',
        alignItems : 'center'
      },
      even : {
        backgroundColor : colors.second,
      },
      odd : {
        backgroundColor : colors.green,
      }
});



export default styles;