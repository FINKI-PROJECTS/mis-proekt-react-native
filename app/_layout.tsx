import FontAwesome from "@expo/vector-icons/FontAwesome";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { useColorScheme } from "react-native";
import LoginScreen from "./pages/login";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AuthProvider } from "./services/context/AuthContext";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  return (
    <>
      {/* Keep the splash screen open until the assets have loaded. In the future, we should just support async font loading with a native version of font-display. */}
      {!loaded && <SplashScreen />}
      {loaded && <RootLayoutNav />}
    </>
  );
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaProvider>
      <AuthProvider>
        <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="pages/login" options={{ headerShown: false }} />
            <Stack.Screen name="pages/register" options={{ headerShown: false }} />
            <Stack.Screen name="pages/categories" options={{ headerShown: false }} />
            <Stack.Screen name="pages/product" options={{ headerShown: false }} />
            <Stack.Screen name="pages/list-of-products" options={{ headerShown: false }} />
            <Stack.Screen name="pages/seller" options={{ headerShown: false }} />
            <Stack.Screen name="pages/leave-rating" options={{ headerShown: false }} />
            <Stack.Screen name="pages/list-of-ratings" options={{ headerShown: false }} />
            <Stack.Screen name="pages/create-edit-product" options={{ headerShown: false }} />
            <Stack.Screen name="pages/user-list-of-products" options={{ headerShown: false }} />
            <Stack.Screen name="pages/user-profile" options={{ headerShown: false }} />
            <Stack.Screen name="pages/camera" options={{ headerShown: false }} />
            <Stack.Screen name="modal" options={{ presentation: "modal" }} />
          </Stack>
        </ThemeProvider>
      </AuthProvider>
    </SafeAreaProvider>
  );
}
