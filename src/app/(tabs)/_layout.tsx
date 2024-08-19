import { Tabs } from "expo-router";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function TabLayout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: 'black', tabBarShowLabel: false }}>
            <Tabs.Screen name='index' options={{
                headerTitle: 'For you',
                tabBarIcon: ({ color }) => <MaterialCommunityIcons name="home-variant" size={26} color={color} />
            }} />
            <Tabs.Screen name='new' options={{
                headerTitle: 'Create post',
                tabBarIcon: ({ color }) => <FontAwesome name="plus-square-o" size={26} color={color} />
            }} />
            <Tabs.Screen name='profile' options={{
                headerTitle: 'Profile',
                tabBarIcon: ({ color }) => <FontAwesome5 name="user-circle" size={26} color={color}  />
            }} />
        </Tabs >
    );
}