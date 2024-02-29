import React, { useState } from 'react'
import { TextInput, Text, TouchableOpacity, KeyboardAvoidingView, Platform, Keyboard } from 'react-native'
import styles from './style'

const Form = (props) => {

    const [task, setTask] = useState('')
    const handleAddTask = () => {
        if(task.length == 0) {
            alert("Bạn vui lòng nhập công việc");
            return false;
        }
        props.onAddTask(task);
        setTask('')
        Keyboard.dismiss();
    }
    return (
    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    keyboardVerticalOffset={10}
     style={styles.addTask}>
        <TextInput
        value={task}
        placeholder='Your task'
        onChangeText={(text) => setTask(text)} 
        style={styles.textInput}></TextInput>
        <TouchableOpacity
        onPress={handleAddTask}
        style={styles.iconWrapper}>
            <Text style={styles.icon}>+</Text>
        </TouchableOpacity>
    </KeyboardAvoidingView>
    )
}

export default Form;