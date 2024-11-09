import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";

const LoginScreen = () => {
  return (
    <View>
      <Image
        source={require("../../assets/images/login.png")}
        style={{
          height: 500,
          width: "100%",
          padding: 20,
        }}
      />
      <View>
        <Text
          style={{
            fontFamily: "Rubik-Bold",
            display: "flex",
            textAlign: "center",
            fontSize: 30,
            padding: 20,
          }}
        >
          Ready to make a new friend?
        </Text>
        <Text
          style={{
            fontFamily: "Rubik-Regular",
            fontSize: 18,
            textAlign: "center",
            color: Colors.TEXT,
          }}
        >
          Let's adopt the pet which you like and make there life happy again
        </Text>
      </View>
      <Pressable
        style={{
          padding: 14,
          marginTop: 50,
          backgroundColor: Colors.PRIMARY,
          width: "80%",
          alignSelf: "center",
          borderRadius: 14,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontFamily: "Rubik-Medium",
            fontSize: 20,
          }}
        >
          Get Started
        </Text>
      </Pressable>
    </View>
  );
};

export default LoginScreen;
