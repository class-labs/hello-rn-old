import { useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { RootStackParamList } from "../types/navigation";

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

export function Home() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to User Profile"
        onPress={() => {
          navigation.navigate("UserProfile");
        }}
      />
    </View>
  );
}
