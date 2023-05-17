import { StyleSheet, Text, View } from "react-native";

type Props = {
  text: string;
};

export function Header(props: Props) {
  const { text } = props;
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    borderBottomWidth: 1,
    borderBottomColor: "#EAECF0",
    height: 64,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  headerText: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: "600",
    color: "#101828",
  },
});
