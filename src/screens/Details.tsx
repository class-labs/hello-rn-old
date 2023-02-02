import { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types/Navigation';

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

async function getOrgDetails(orgId: string) {
  const url = `https://api.github.com/orgs/${orgId}/repos`;
  // TODO: Use fetch() to get the JSON from that URL
}

export function Details() {
  const route = useRoute<DetailsScreenRouteProp>();
  const { orgId } = route.params;
  useEffect(() => {
    getOrgDetails(orgId).then((data) => {
      // TODO: Put `data` into state so that it can be displayed below
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Org username: {route.params.orgId}</Text>
      {/* TODO: Display the organization name, location and list of repositories */}
    </View>
  );
}
