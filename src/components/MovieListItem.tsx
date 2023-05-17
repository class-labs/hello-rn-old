import { StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { Movie } from "../types/Movie";

type Props = {
  movie: Movie;
};

export function MovieListItem(props: Props) {
  const { movie } = props;
  return (
    <View style={styles.card}>
      <View style={styles.cardInner}>
        <Image
          source={{ uri: movie.backdrop_path }}
          contentFit="cover"
          style={styles.image}
        />
        <View style={styles.details}>
          <Text style={styles.releaseDate}>
            {formatDate(movie.release_date)}
          </Text>
          <Text style={styles.title}>{movie.title}</Text>
        </View>
      </View>
    </View>
  );
}

function formatDate(input: string) {
  return new Date(input).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    marginBottom: 16,
    borderRadius: 12,
    shadowColor: "#101828",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.17,
    shadowRadius: 4.65,
  },
  cardInner: {
    borderRadius: 12,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    aspectRatio: 2,
  },
  details: {
    padding: 16,
  },
  releaseDate: {
    fontSize: 16,
    lineHeight: 24,
    color: "#475467",
  },
  title: {
    fontSize: 18,
    lineHeight: 28,
    fontWeight: "500",
    color: "#101828",
  },
});
