import { Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import type { RouteProp } from "@react-navigation/native";

import { RootStackParamList } from "../types/navigation";

type MovieDetailsScreenRouteProp = RouteProp<
  RootStackParamList,
  "MovieDetails"
>;

export function MovieDetails() {
  const { params } = useRoute<MovieDetailsScreenRouteProp>();
  return (
    <View>
      <Text>Movie Details for movie with ID {params.movieId}</Text>
    </View>
  );
}
