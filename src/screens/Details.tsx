import { Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types/Navigation';

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

export function Details() {
  const route = useRoute<DetailsScreenRouteProp>();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details for product: {route.params.productId}</Text>
    </View>
  );
}
