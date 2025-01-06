import { View, Text, FlatList } from 'react-native';
import TaskListItem from "@/src/components/TaskListItem";
import { useState} from "react";

export default function TaskList() {
    const [tasks, setTasks] = useState([
        { description: 'First task' },
        { description: 'Second task' },
    ]);
    return (
        <View style={{ backgroundColor: '#133266', padding: 15, borderRadius: 10 }}>
           <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, marginVertical: 10 }}>TO DO</Text>

               {/* The list of the tasks */}
               <FlatList
                   data={tasks}
                   contentContainerStyle={{ gap: 15}}
                   renderItem={({ item }) => (
                       <TaskListItem task={ item }/>
                   )}
               />

           {/* New task input */}
      </View>
    );
}