import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default TaskItem = (props) => {
    return  (
        <View style={styles.container}>
            <View style={[styles.indexContainer, styles.tile]}>
                <Text style={styles.index}>{props.id}</Text>
            </View>
            <View style={[styles.taskContainer, styles.tile]}>
                <Text style={styles.task}>{props.task}</Text>
                <TouchableOpacity onPress={() => props.deleteTask()}>
                    <MaterialIcons style={styles.deleteButton} name='delete' size={24}/>
                </TouchableOpacity>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 20,
    },

    tile: {
        backgroundColor: '#3E3364',
        borderRadius: 12,
        alignItems: 'center',
    },

    indexContainer: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        marginRight: 10,
    },

    index: {
        color: '#fff',
        fontSize: 20
    },

    taskContainer: {
        minHeight: 50,
        justifyContent: 'space-between',
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 5, 
        flexDirection: 'row',
    },

    task: {
        color: '#fff',
        fontSize: 16,
        width: '90%'
    },

    deleteButton: {
        color: '#fff',
        marginRight: 20
    },

})