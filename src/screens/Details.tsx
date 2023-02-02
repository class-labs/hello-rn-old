import { Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types/Navigation';
import { Repo } from '../types/GithubApi';
import { useQuery } from '@tanstack/react-query';

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
  const { data, isLoading, error } = useQuery(['org-details', orgId], () =>
    getOrgDetails(orgId),
  );

  if (error) {
    return <Text>{String(error)}</Text>;
  }

  if (isLoading || data === undefined) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={{ flex: 1, alignItems: 'flex-start', padding: 20 }}>
      <Text>Org: {route.params.orgId}</Text>
      {data.map((repo) => (
        <Text key={repo.id}>{repo.name}</Text>
      ))}
    </View>
  );
}
