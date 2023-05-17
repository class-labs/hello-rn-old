import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
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
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        {movies.map((movie) => (
          <Text key={movie.id}>{movie.title}</Text>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contentContainerStyle: {
    padding: 16,
  },
});
