import { Alert, Button, StyleSheet, TextInput, View } from "react-native";

export function NewTaskForm() {
  return (
    <View style={styles.form}>
      <TextInput
        style={styles.textInput}
        onChangeText={() => {
          // Hint: Save the value somewhere
        }}
      />
      <Button
        title="Add"
        onPress={() => {
          // TODO: Alert the value that the user entered in the text input
          // Hint: Use Alert.alert()
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
