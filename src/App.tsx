import { StyleSheet, Text, View } from "react-native";

// Task 7
// Make an HTTP request to the following endpoint
// https://xn3k4w-4000.csb.app/movies
// This will return a list of movies
// Display the title of each movie, in a list.
// Hint: Remember to use useEffect and useState

async function getMovies() {
  // TODO: Put your fetch() logic here and you can use `await`
}

export function App() {
  // TODO: Put your useEffect here
  return (
    <View style={styles.container}>
      <Text>Hello React Native!</Text>
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
