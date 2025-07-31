import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabScreen from "../pages/TabScreen";
import Tab2 from "../pages/Tab2";
import Tab3 from "../pages/Tab3";
import Icon from "react-native-vector-icons/MaterialIcons"; 

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
            <Tab.Screen 
                name="Home" 
                component={TabScreen} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" color={color} size={size} />
                    ),
                }}
            />       
            <Tab.Screen 
                name="Characters" 
                component={Tab2} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="people" color={color} size={size} />
                    ),
                }}
            />
             <Tab.Screen 
                name="Contact" 
                component={Tab3} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="contact-mail" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}