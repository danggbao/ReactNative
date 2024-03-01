import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./style";
import textStyles from "./textStyle";
const Task = (props) => {
  const {number} = props;
  const itemBg = number % 2 === 0 ? styles.odd : styles.even;

    return (
        <TouchableOpacity 
        onPress={props.onDeleteTask}
        >
        <View style={styles.item}>
          <View style={[styles.square, itemBg]}>
            <Text style={textStyles.squareText}>{props.number}</Text>
          </View>
          <View style={textStyles.contentText}>
            <Text>{props.title}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
}

export default Task;