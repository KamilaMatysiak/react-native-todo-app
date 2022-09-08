import React, {useState} from 'react';
import { Keyboard, ScrollView, StyleSheet, Text, View } from 'react-native';
import TaskInput from './components/TaskInput';
import TaskItem from './components/TaskItem';

export default function App() {

  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if(task == null) return;
    setTasks([...tasks, task]);
    Keyboard.dismiss();
  }

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((value, id) => id  !== taskId))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>ToDo App</Text>
      <ScrollView style={styles.taskList}>
        {
          tasks.map((task, id) => {
            return(
              <View key={id} style={styles.taskContainer}>
                <TaskItem id={id +1} task={task} deleteTask={() => deleteTask(id)}/>
              </View>
            )
          })
        }
      </ScrollView>
      <TaskInput addTask={addTask}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1A3C',
  },

  header: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '600',
    marginTop: 50,
    marginBottom: 25,
    marginHorizontal: 20,
  },

  taskList: {
    marginBottom: 70,
  },

  taskContainer: {
    marginTop: 10,
  },
});

