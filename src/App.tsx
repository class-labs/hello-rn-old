import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from "react-native";

type Movie = {
  id: number;
  title: string;
};

async function getMovies() {
  const response = await fetch("https://xn3k4w-4000.csb.app/movies");
  return await response.json();
}

export function App() {
  const [movies, setMovies] = useState<Array<Movie> | null>(null);
  useEffect(() => {
    getMovies().then((movies) => {
      setMovies(movies);
    });
  }, []);

  if (movies === null) {
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
