import { useRoute } from '@react-navigation/native';
import { Text, View } from 'react-native';

export function Details() {
  const route = useRoute();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>
        Details for product:{' '}
        {
          // @ts-ignore
          route.params.productId
        }
      </Text>
    </View>
  );
}
