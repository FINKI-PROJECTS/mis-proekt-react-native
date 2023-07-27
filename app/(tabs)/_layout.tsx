import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';
import Colors from '../../constants/Colors';
import { createTestData } from '../services/testService';
import CustomHeaderIcon from "../../components/CustomHeaderIcon";


/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  createTestData({ id: '2', name: 'test', description: 'test2' });
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: ' ',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          header: () => (
              <CustomHeaderIcon source={require('../../assets/images/logo_blue.png')} />
          )
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <TabBarIcon name="ambulance" color={color} />,
            headerRight: () => (
                <Link href="/modal" asChild>
                    <Pressable>
                        {({ pressed }) => (
                            <FontAwesome
                                name="info-circle"
                                size={25}
                                color={Colors[colorScheme ?? 'light'].text}
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
          title: 'Tab Three',
          tabBarIcon: ({ color }) => <TabBarIcon name="address-book" color={color} />,
        }}
      />
    </Tabs>
  );
}
