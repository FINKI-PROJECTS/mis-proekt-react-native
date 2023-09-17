import FontAwesome from "@expo/vector-icons/FontAwesome";
import {Link, Tabs} from "expo-router";
import {Pressable, useColorScheme} from "react-native";
import Colors from "../../constants/Colors";
import Navbar from "../../components/Navbar";
import {CommonActions, StackActions} from "@react-navigation/native";

interface ITabBarIconProps {
    name: React.ComponentProps<typeof FontAwesome>["name"];
    color: string;
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: ITabBarIconProps) {
    return <FontAwesome size={28} style={{marginBottom: -20}} {...props} />;
}

export default function TabLayout() {
    const colorScheme = useColorScheme();

    const resetTabStacksOnBlur = ({ navigation, route }: any) => {
        navigation.dispatch(
            CommonActions.reset({
                index: 1,
                routes: [
                    { name: 'three' },
                ],
            })
        );
    };


    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#7891D3',
            }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: " ",
                    tabBarIcon: ({color}) => <TabBarIcon name="home" color={color}/>,
                    header: () => <Navbar/>,
                }}
            />
            <Tabs.Screen
                name="two"
                options={{
                    title: "",
                    tabBarIcon: ({color}) => <TabBarIcon name="plus" color={color}/>,
                    header: () => <Navbar/>,
                    // headerRight: () => (
                    //   <Link href="/modal" asChild>
                    //     <Pressable>
                    //       {({ pressed }) => (
                    //         <FontAwesome
                    //           name="info-circle"
                    //           size={25}
                    //           color={Colors[colorScheme ?? "light"].text}
                    //           style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                    //         />
                    //       )}
                    //     </Pressable>
                    //   </Link>
                    // ),
                }}
            />
            <Tabs.Screen
                name="three"
                options={{
                    title: "",
                    tabBarIcon: ({color}) => <TabBarIcon name="user" color={color}/>,
                    header: () => <Navbar/>,
                }}
            />
        </Tabs>
    );
}
