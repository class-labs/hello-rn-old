import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Award, Heart } from "lucide-react-native";

import { Movie } from "../types/Movie";

type Props = {
  movie: Movie;
  onPress: (movie: Movie) => void;
};

export function MovieListItem(props: Props) {
  const { movie, onPress } = props;
  return (
    <TouchableOpacity onPress={() => onPress(movie)}>
      <View style={styles.card}>
        <View style={styles.cardInner}>
          <ImageBackground
            source={{ uri: movie.backdrop_path }}
            resizeMode="cover"
            style={styles.image}
          >
            <View style={styles.badge}>
              <Award color="#9E77ED" size={12} />
              <Text style={styles.badgeText}>New Release</Text>
            </View>
            <View style={styles.iconButton}>
              <Heart color="white" size={20} />
            </View>
          </ImageBackground>
          <View style={styles.details}>
            <Text style={styles.releaseDate}>
              {formatDate(movie.release_date)}
            </Text>
            <Text style={styles.title}>{movie.title}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
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
  iconButton: {
    position: "absolute",
    bottom: 10,
    right: 10,
    padding: 12,
    backgroundColor: "rgba(0, 0, 0, .7)",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 8,
    opacity: 0.6,
  },
  badge: {
    position: "absolute",
    left: 8,
    bottom: 8,
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
    backgroundColor: "#F9F5FF",
    borderRadius: 16,
    paddingVertical: 2,
    paddingHorizontal: 8,
  },
  badgeText: {
    fontSize: 12,
    lineHeight: 18,
    color: "#6941C6",
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
