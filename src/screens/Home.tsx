import { Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/Navigation';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export function Home() {
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
