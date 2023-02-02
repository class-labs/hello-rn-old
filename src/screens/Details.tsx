import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types/Navigation';
import { Repo } from '../types/GithubApi';

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

async function getOrgDetails(orgId: string): Promise<Array<Repo>> {
  const url = `https://api.github.com/orgs/${orgId}/repos`;
  const response = await fetch(url);
  if (response.status !== 200) {
    throw new Error(`Unexpected response status: ${response.status}`);
  }
  return await response.json();
}

export function Details() {
  const route = useRoute<DetailsScreenRouteProp>();
  const { orgId } = route.params;
  const [repoList, setRepoList] = useState<Array<Repo> | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    getOrgDetails(orgId)
      .then((repoList) => {
        setRepoList(repoList);
      })
      .catch((error) => {
        setError(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (error !== null) {
    return <Text>{String(error)}</Text>;
  }

  if (repoList === null) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={{ flex: 1, alignItems: 'flex-start', padding: 20 }}>
      <Text>Org: {route.params.orgId}</Text>
      {repoList.map((repo) => (
        <Text key={repo.id}>{repo.name}</Text>
      ))}
    </View>
  );
}
