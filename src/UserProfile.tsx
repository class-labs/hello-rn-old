import { Button, Text, View } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { RootStackParamList } from "./types/navigation";

type UserProfileNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "UserProfile"
>;

type UserProfileRouteProp = RouteProp<RootStackParamList, "UserProfile">;

export function UserProfile() {
  const navigation = useNavigation<UserProfileNavigationProp>();
  const { params } = useRoute<UserProfileRouteProp>();
  return (
    <View>
      <Text>Username: {params?.username}</Text>
      <Button
        title="Go back home"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}
