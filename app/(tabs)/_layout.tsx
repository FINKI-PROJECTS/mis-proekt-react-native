import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, useColorScheme } from "react-native";
import Colors from "../../constants/Colors";
import { createTestData } from "../services/testService";
import HeaderIcon from "../../components/HeaderIcon";
import { AuthProvider } from "../services/context/AuthContext";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navbar from "../../components/Navbar";

interface ITabBarIconProps {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}
/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: ITabBarIconProps) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: " ",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          header: () => <Navbar />,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "Tab Two",
          tabBarIcon: ({ color }) => <TabBarIcon name="ambulance" color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? "light"].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="three"
        options={{
          title: "Tab Three",
          tabBarIcon: ({ color }) => <TabBarIcon name="address-book" color={color} />,
        }}
      />
    </Tabs>
  );
}
