import { Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import data from '../data/github.json';
import { RootStackParamList } from '../types/Navigation';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export function Home() {
  // TODO: [Task 5] Display a list of the orgs in the JSON data. If the user
  // presses one of the items, we will navigate to the details page. For now,
  // the details page will just display the param that was passed in, nothing
  // more.
  const navigation = useNavigation<NavigationProp>();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="View details of product A"
        onPress={() => {
          navigation.navigate('Details', { productId: 'A' });
        }}
      />
      <Button
        title="View details of product B"
        onPress={() => {
          navigation.navigate('Details', { productId: 'B' });
        }}
      />
    </View>
  );
}
