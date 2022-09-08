import React, { useState } from "react";
import { KeyboardAvoidingView, StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export default TaskInput = (props) => {
        
    const [task, setTask] = useState();

    const handleAddTask = (value) => {
        props.addTask(value),
        setTask(null);
    };

    return(
        <KeyboardAvoidingView style={styles.container}>
            <TextInput
                style={styles.input}
                value={task}
                onChangeText={text => setTask(text)}
                placeholder={'What do you have to do today?'}
                placeholderTextColor={'#eee'}/>
            <TouchableOpacity onPress={() => handleAddTask(task)}>
                <View style={styles.button}>
                    <MaterialIcons name="keyboard-arrow-up" size={24} color="#333" />
                </View>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        borderColor: '#fff',
        backgroundColor: '#3E3364',
        borderWidth: 1,
        marginHorizontal: 20,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        position: 'absolute',
        bottom: 20,
    },

    input: {
        color: '#fff',
        height: 50,
        flex: 1
    },

    button: {
        height: 30,
        width: 30, 
        borderRadius: 5,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
})