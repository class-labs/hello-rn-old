import { Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList } from '../types/Navigation';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const orgUsernames = ['microsoft', 'adobe', 'facebook', 'intuit'];

async function getOrgs(orgUsernames: Array<string>) {
  // TODO: Return an Array<Org>, each Org can be fetched at the following:
  // https://api.github.com/orgs/${orgUsername}
}

export function Home() {
  const navigation = useNavigation<NavigationProp>();
  //TODO: Load the data via the function above, leverage useQuery
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Orgs</Text>
      {data.orgs.map((org) => (
        <Button
          key={org.id}
          title={org.name}
          onPress={() => {
            navigation.navigate('Details', { orgId: org.login });
          }}
        />
      ))}
    </View>
  );
}
