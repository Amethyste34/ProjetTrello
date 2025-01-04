import {StyleSheet, View, Text} from 'react-native';
import {StatusBar} from "expo-status-bar";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
        <Text>Hello !</Text>
        <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
