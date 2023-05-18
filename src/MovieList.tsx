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

// Task 10
// Style the movie list below to match the design here:
// https://github.com/sstur/sstur/assets/369384/254400f7-6063-4551-89c7-9326f15a018d
// Feel free to factor out the individual movie "card" to its own component.
// Ignore icons and genres and any part of the UI that can't be implemented

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
    <SafeAreaView style={{ flex: 1 }}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />
      <FlatList
        contentContainerStyle={styles.contentContainerStyle}
        data={filteredMovies}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
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
