import {StyleSheet, View } from 'react-native';
import {StatusBar} from "expo-status-bar";
import TaskBoard from "@/src/components/TaskBoard";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
        <StatusBar style='light' />
        <TaskBoard/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
