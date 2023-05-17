import { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { GithubOrg } from "./types/GithubOrg";

async function getOrgData(): Promise<GithubOrg> {
  const response = await fetch("https://api.github.com/orgs/microsoft");
  return await response.json();
}

export function App() {
  const [orgData, setOrgData] = useState<GithubOrg | null>(null);
  useEffect(() => {
    getOrgData().then((data) => {
      console.log("Data received:", data);
      // Now that we get the real data from the server, we can update state
      setOrgData(data);
    });
  }, []);
  if (orgData === null) {
    return <Text>Loading...</Text>;
  }
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={{ fontSize: 20 }}>{orgData.name}</Text>
        <Text style={{ fontSize: 16 }}>{orgData.description}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    gap: 10,
  },
});
