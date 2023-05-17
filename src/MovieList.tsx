import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Header } from "./components/Header";
import { Movie } from "./types/Movie";
import { MovieListItem } from "./components/MovieListItem";

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
      <Header text="Movies" />
      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />
      <FlatList
        contentContainerStyle={styles.contentContainerStyle}
        data={filteredMovies}
        renderItem={({ item }) => <MovieListItem movie={item} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contentContainerStyle: {
    padding: 16,
  },
  searchInput: {
    marginTop: 26,
    marginBottom: 10,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: "#D0D5DD",
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    height: 46,
    color: "#667085",
  },
});
