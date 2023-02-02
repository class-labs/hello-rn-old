import { Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import data from '../data/github.json';
import { RootStackParamList } from '../types/Navigation';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export function Home() {
  const navigation = useNavigation<NavigationProp>();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Orgs</Text>
      {data.orgs.map((org) => (
        <Button
          title={org.name}
          onPress={() => {
            navigation.navigate('Details', { orgId: org.login });
          }}
        />
      ))}
    </View>
  );
}
