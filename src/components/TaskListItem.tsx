import { Text, StyleSheet, Pressable } from "react-native";
import { AntDesign} from "@expo/vector-icons";
import { Link } from "expo-router";

// @ts-ignore
export default function TaskListItem({ task }) {
    return (
        <Link href={`/${task.id}`} asChild={true} >
            <Pressable style={styles.container}>
                <Text style={styles.text}>{task.description}</Text>
                <AntDesign name="close" size={16} color="white" />
            </Pressable>
        </Link>
    );
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