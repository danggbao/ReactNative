import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./style";
import textStyles from "./textStyle";
const Task = () => {
    return (
        <TouchableOpacity>
        <View style={styles.item}>
          <View style={styles.square}>
            <Text style={textStyles.squareText}>01</Text>
          </View>
          <View style={textStyles.contentText}>
            <Text>Rua chen</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
}

export default Task;