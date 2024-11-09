import { useFonts } from "expo-font";

export function useCustomFonts() {
  const [fontsLoaded] = useFonts({
    "Rubik-Regular": require("./Rubik-Regular.ttf"),
    "Rubik-Medium": require("./Rubik-Medium.ttf"),
    "Rubik-Bold": require("./Rubik-Bold.ttf"),
    "Rubik-SemiBold": require("./Rubik-SemiBold.ttf"),
  });

  return fontsLoaded;
}
