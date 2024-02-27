import React from 'react'
import { TextInput, View, Text } from 'react-native'
import styles from './style'

const Form = () => {
    return (
    <View style={styles.addTask}>
        <TextInput style={styles.textInput}></TextInput>
        <View style={styles.iconWrapper}>
            <Text style={styles.icon}>+</Text>
        </View>
    </View>
    )
}

export default Form;