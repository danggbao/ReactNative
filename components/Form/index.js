import React from 'react'
import { TextInput, View, Text, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native'
import styles from './style'

const Form = () => {
    return (
    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    keyboardVerticalOffset={10}
     style={styles.addTask}>
        <TextInput
        placeholder='Your task'
        style={styles.textInput}></TextInput>
        <TouchableOpacity style={styles.iconWrapper}>
            <Text style={styles.icon}>+</Text>
        </TouchableOpacity>
    </KeyboardAvoidingView>
    )
}

export default Form;