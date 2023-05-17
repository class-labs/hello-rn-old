import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from "react-native";
import { useQuery } from "@tanstack/react-query";

import { Repository } from "./types/Repository";

async function getRepos(): Promise<Array<Repository>> {
  const response = await fetch("https://api.github.com/orgs/microsoft/repos");
  return await response.json();
}

export function RepoList() {
  const { data, isLoading, error } = useQuery(["repos"], getRepos);
  const repos = data ?? [];

  if (error) {
    return (
      <SafeAreaView>
        <Text>Something went wrong: {String(error)}</Text>
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
      <ScrollView contentContainerStyle={styles.container}>
        {repos.map((repo) => (
          <Text key={repo.id}>{repo.name}</Text>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
});
