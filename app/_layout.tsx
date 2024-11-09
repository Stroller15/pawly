import React from 'react'
import { Stack } from 'expo-router';
import { useCustomFonts } from "../assets/fonts/fonts";

const RootLayout = () => {
  const fontsLoaded = useCustomFonts();

  if (!fontsLoaded) {
    return null; 
  }

  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name='login/index'
      options={{
        headerShown: false
      }}
       />
    </Stack>
  );
}

export default RootLayout;