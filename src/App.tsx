import { StyleSheet, Text, View } from "react-native";

// Task 6
// Implement a login page based on the following design.
// Design: https://github.com/sstur/sstur/assets/369384/20626e07-155d-4e55-8380-bb3405ddecd7
// Logo image: https://github.com/sstur/sstur/assets/369384/0f18f995-b51c-4bba-b814-8a648ccf9f74

export function App() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20 }}>Hello React Native!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
