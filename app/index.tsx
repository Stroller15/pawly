import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useCustomFonts } from "../assets/fonts/fonts";
import { Link } from "expo-router";
export default function App() {
  const fontsLoaded = useCustomFonts();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Link href={"/login"}>
        <Text>Go to login screen</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
});
