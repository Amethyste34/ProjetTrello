import { View, Text, FlatList, TextInput, Button, StyleSheet } from 'react-native';
import TaskListItem from "@/src/components/TaskListItem";
import { useState} from "react";

export default function TaskList() {
    const [tasks, setTasks] = useState([
        { id: "123", description: 'First task' },
        { id: "67", description: 'Second task' },
    ]);

    const [newTask, setNewTask] = useState('');

    const createTask = () => {
        // console.warn('Create', newTask);
        setTasks([...tasks, {description: newTask}]);
        setNewTask('');
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>TO DO</Text>

                {/* The list of the tasks */}
                <FlatList
                    data={tasks}
                    contentContainerStyle={{ gap: 15 }}
                    renderItem={({ item }) => (
                        <TaskListItem task={ item }/>
                    )}
                />

            {/* New task input */}
            <TextInput
                value={newTask}
                onChangeText={setNewTask}
                placeholder="New task"
                placeholderTextColor="lightgray"
                style={styles.input}
            />
            <Button title="Add task" onPress={createTask}/>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#133266',
        padding: 15,
        borderRadius: 10,
        gap: 15,
        marginTop: 20,
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 10,
        textAlign: 'center',
    },
    input: {
        color: 'white',
        padding: 10,
        backgroundColor: "#245dbf",
        borderRadius: 5
    }
})