import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  skipWrapper: {
    position: "absolute",
    top: 40,
    right: 20,
    padding: 10,
  },
  skipText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Nunito_700Bold",
  },
  inputWrapper: {
    width: "100%",
    alignItems: "center",
  },
  infoText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "Nunito_700Bold",
    marginBottom: 20,
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 5,
    marginBottom: 20,
  },
  iconStyle: {
    padding: 10,
  },
  input: {
    flex: 1,
    padding: 15,
    fontSize: 16,
    color: "#000",
  },
  buttonWrapper: {
    width: "100%",
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Nunito_700Bold",
  },
  orWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#ccc",
  },
  orText: {
    marginHorizontal: 10,
    fontSize: 16,
    fontFamily: "Nunito_400Regular",
    color: "#fff",
  },
  emailButtonWrapper: {
    width: "100%",
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 20,
  },
  emailButtonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Nunito_700Bold",
  },
  socialWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  socialButtonWrapper: {
    flex: 1,
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginHorizontal: 5,
  },
  socialButtonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Nunito_700Bold",
  },
  footerText: {
    marginTop: 20,
    fontSize: 12,
    fontFamily: "Nunito_400Regular",
    color: "#fff",
    textAlign: "center",
  },
});
