import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useFonts, Raleway_700Bold } from "@expo-google-fonts/raleway";
import { Nunito_400Regular, Nunito_700Bold } from "@expo-google-fonts/nunito";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import { styles } from "@/styles/onboarding/onboard";
import Icon from 'react-native-vector-icons/Ionicons';

export default function OnBoardingScreen() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [code, setCode] = useState("");
  const [confirm, setConfirm] = useState(null);
  const navigation = useNavigation();

  const signInWithPhoneNumber = async () => {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
    } catch (e) {
      console.log("Error sending the code", e);
    }
  };

  const confirmCode = async () => {
    try {
      const userCredential = await confirm.confirm(code);
      const user = userCredential.user;

      // Check if user is new or existing
      const userDocument = await firestore().collection("users").doc(user.uid).get();

      if (userDocument.exists) {
        navigation.navigate("WelcomeIntro");
      } else {
        navigation.navigate("Profile");
      }
    } catch (e) {
      console.log("Error confirming the code", e);
    }
  };

  let [fontsLoaded, fontError] = useFonts({
    Raleway_700Bold,
    Nunito_400Regular,
    Nunito_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <LinearGradient
      colors={["#FF416C", "#FF4B2B"]}
      style={styles.container}
    >
      <TouchableOpacity style={styles.skipWrapper} onPress={() => navigation.navigate("WelcomeIntro")}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>
      <View style={styles.inputWrapper}>
        <Text style={styles.infoText}>Please enter your phone number to sign in</Text>
        <View style={styles.inputContainer}>
          <Icon name="call-outline" size={20} color="#000" style={styles.iconStyle} />
          <TextInput
            style={[styles.input, styles.phoneNumberInput]}
            placeholder="Phone Number"
            placeholderTextColor="gray"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
          />
        </View>
        <TouchableOpacity onPress={signInWithPhoneNumber} style={styles.buttonWrapper}>
          <Text style={styles.buttonText}>Send OTP</Text>
        </TouchableOpacity>
        {confirm && (
          <View>
            <View style={styles.inputContainer}>
              <Icon name="key-outline" size={20} color="#000" style={styles.iconStyle} />
              <TextInput
                style={[styles.input, styles.verificationCodeInput]}
                placeholder="Verification Code"
                placeholderTextColor="#000"
                value={code}
                onChangeText={setCode}
                keyboardType="number-pad"
              />
            </View>
            <TouchableOpacity onPress={confirmCode} style={styles.buttonWrapper}>
              <Text style={styles.buttonText}>Confirm Code</Text>
            </TouchableOpacity>
          </View>
        )}
        <View style={styles.orWrapper}>
          <View style={styles.line} />
          <Text style={styles.orText}>OR</Text>
          <View style={styles.line} />
        </View>
        <TouchableOpacity style={styles.emailButtonWrapper}>
          <Text style={styles.emailButtonText}>Continue with Email</Text>
        </TouchableOpacity>
        <View style={styles.socialWrapper}>
          <TouchableOpacity style={styles.socialButtonWrapper}>
            <Text style={styles.socialButtonText}>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButtonWrapper}>
            <Text style={styles.socialButtonText}>Google</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.footerText}>
          By continuing, you agree to our Terms of Service, Privacy Policy, and Content Policy.
        </Text>
      </View>
    </LinearGradient>
  );
}
