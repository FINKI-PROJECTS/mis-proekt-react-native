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
                }}
            />
            <Tabs.Screen
                name="three"
                options={{
                    title: "",
                    tabBarIcon: ({color}) => <TabBarIcon name="bars" color={color}/>,
                    header: () => <Navbar/>,
                }}
            />
        </Tabs>
    );
}
