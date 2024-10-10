import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View,Text } from 'react-native';

const Tab = createMaterialTopTabNavigator();

const MyTabs = () => {
    return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
    )
}

function HomeScreen()
{
    return(
        <View>
            <Text>Home Screen</Text> 
        </View>
    )
}

function SettingsScreen()
{
    return(
        <View>
            <Text>
                Settings Screen
            </Text>
        </View>
    )
}