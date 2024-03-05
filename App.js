import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { AppStack } from "./src/navigation/AppStack";

export default function App() {
  return (
    <View style={styles.root}>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
});
