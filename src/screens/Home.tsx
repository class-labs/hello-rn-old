import { useNavigation } from '@react-navigation/native';
import { Button, Text, View } from 'react-native';

export function Home() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="View details of product A"
        onPress={() => {
          // @ts-ignore
          navigation.navigate('Details', { productId: 'A' });
        }}
      />
      <Button
        title="View details of product B"
        onPress={() => {
          // @ts-ignore
          navigation.navigate('Details', { productId: 'B' });
        }}
      />
    </View>
  );
}
