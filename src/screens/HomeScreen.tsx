import { Button, YStack } from 'tamagui';
import { Plus } from '@tamagui/lucide-icons';

export function HomeScreen() {
  return (
    <YStack flex={1} justifyContent="center" alignItems="center">
      <Button icon={Plus}>Press here</Button>
    </YStack>
  );
}
