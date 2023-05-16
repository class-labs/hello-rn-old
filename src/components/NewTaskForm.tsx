import { useState } from "react";
import { Alert, Button, StyleSheet, TextInput, View } from "react-native";

export function NewTaskForm() {
  const [taskName, setTaskName] = useState("");
  return (
    <View style={styles.form}>
      <TextInput
        style={styles.textInput}
        value={taskName}
        onChangeText={(taskName) => {
          setTaskName(taskName);
        }}
      />
      <Button
        title="Add"
        onPress={() => {
          Alert.alert(taskName);
          setTaskName("");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    padding: 20,
    flexDirection: "row",
  },
  textInput: {
    padding: 8,
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 4,
    flex: 1,
  },
});
