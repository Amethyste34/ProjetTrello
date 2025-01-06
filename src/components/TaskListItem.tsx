import {View, Text, StyleSheet } from "react-native";
import { AntDesign} from "@expo/vector-icons";

// @ts-ignore
export default function TaskListItem({ task }) {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{task.description}</Text>
            <AntDesign name="close" size={16} color="white" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#245dbf",
        padding: 15,
        borderRadius: 5,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    text: {
        color: "white",
        fontSize: 16,
    }
})