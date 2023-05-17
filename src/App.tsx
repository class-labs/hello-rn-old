import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import logo from "../assets/logo.png";

export function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image source={logo} style={{ width: 48, height: 48 }} />
        </View>
        <Text style={styles.heading1}>Log in to your account</Text>
        <Text style={styles.heading2}>
          Welcome back! Please enter your details.
        </Text>
        <View style={styles.formField}>
          <Text style={styles.formFieldLabel}>Email</Text>
          <TextInput style={styles.textInput} placeholder="Enter your email" />
        </View>
        <View style={styles.formField}>
          <Text style={styles.formFieldLabel}>Password</Text>
          <TextInput
            style={styles.textInput}
            placeholder="••••••••"
            secureTextEntry={true}
          />
        </View>
        <View style={styles.optionsRow}>
          <View style={styles.checkboxField}>
            <View style={styles.checkbox} />
            <Text style={styles.checkboxLabel}>Remember for 30 days</Text>
          </View>
          <Text style={styles.link}>Forgot password</Text>
        </View>
        <Pressable>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Sign in</Text>
          </View>
        </Pressable>
        <View style={styles.footer}>
          <Text style={styles.paragraph}>Don’t have an account?</Text>
          <Text style={styles.link}>Sign up</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  logo: {
    marginTop: 48,
    marginBottom: 24,
    alignItems: "center",
  },
  heading1: {
    marginBottom: 8,
    fontSize: 24,
    lineHeight: 32,
    fontWeight: "600",
    color: "#101828",
    textAlign: "center",
  },
  heading2: {
    fontSize: 16,
    lineHeight: 24,
    color: "#475467",
    textAlign: "center",
    marginBottom: 32,
  },
  formField: {
    marginBottom: 20,
  },
  formFieldLabel: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "500",
    color: "#344054",
    marginBottom: 6,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#D0D5DD",
    paddingTop: 8,
    paddingBottom: 12,
    paddingHorizontal: 14,
    fontSize: 16,
    lineHeight: 24,
    color: "#667085",
    borderRadius: 8,
  },
  optionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 4,
    marginBottom: 24,
  },
  checkboxField: {
    flexDirection: "row",
    gap: 8,
  },
  checkbox: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderColor: "#D0D5DD",
    borderRadius: 4,
    marginTop: 2,
  },
  checkboxLabel: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "500",
    color: "#344054",
  },
  button: {
    backgroundColor: "#7F56D9",
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 8,
    paddingVertical: 10,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
    color: "white",
  },
  footer: {
    marginTop: 32,
    flexDirection: "row",
    justifyContent: "center",
    gap: 4,
  },
  paragraph: {
    fontSize: 14,
    lineHeight: 20,
    color: "#475467",
  },
  link: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "600",
    color: "#6941C6",
  },
});
