import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

type Movie = {
  id: number;
  title: string;
};

async function getMovies(): Promise<Array<Movie>> {
  const response = await fetch("https://xn3k4w-4000.csb.app/movies");
  return await response.json();
}

export function MovieList() {
  const [searchQuery, setSearchQuery] = useState("");

  const { data, error, isLoading } = useQuery(["movies"], getMovies);
  const movies = data ?? [];
  const lowerCaseSearchQuery = searchQuery.toLowerCase();
  const filteredMovies = movies.filter((movie) => {
    return movie.title.toLowerCase().includes(lowerCaseSearchQuery);
  });

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
      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        {filteredMovies.map((movie) => (
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
  searchInput: {
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 14,
  },
});
