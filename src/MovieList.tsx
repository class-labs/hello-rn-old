import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";
import { useQuery } from "@tanstack/react-query";

type Movie = {
  id: number;
  title: string;
};

async function getMovies(): Promise<Array<Movie>> {
  const response = await fetch("https://xn3k4w-4000.csb.app/movies");
  return await response.json();
}

export function MovieList() {
  // TODO: Use useState() to store the value of the search input
  // Remember to set the `value` and `onChangeText` accordingly

  const { data, error, isLoading } = useQuery(["movies"], getMovies);
  const movies = data ?? [];

  if (error) {
    return (
      <SafeAreaView>
        <Text>{String(error)}</Text>
      </SafeAreaView>
    );
  }

  if (isLoading) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView>
      <TextInput style={styles.searchInput} placeholder="Search..." />
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        {
          // TODO: Filter the movies before we map
          // You want to filter such that only the movies which match the search
          // query will be included.
          movies.map((movie) => (
            <Text key={movie.id}>{movie.title}</Text>
          ))
        }
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contentContainerStyle: {
    padding: 16,
  },
  searchInput: {
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 14,
  },
});
