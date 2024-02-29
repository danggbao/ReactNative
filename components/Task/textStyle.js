import React from "react";
import { StyleSheet } from "react-native";
import colors from "../../contains/colors";

const textStyles = StyleSheet.create({
    squareText : {
      color : colors.white,
      fontWeight : '700'
    },
    contentText : {
      width : '80%',
      fontSize : 16,
    }
});

export default textStyles;