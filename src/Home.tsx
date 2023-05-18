import { View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { RootStackParamList } from "./types/navigation";

type HomeNavigationProp = NativeStackNavigationProp<RootStackParamList, "Home">;

export function Home() {
  const navigation = useNavigation<HomeNavigationProp>();
  return (
    <View>
      <Button
        title="Go to User Profile"
        onPress={() => navigation.navigate("UserProfile", { username: "bob" })}
      />
    </View>
  );
}
