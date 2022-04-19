import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import HomeScreen from "../../screens/HomeScreen/HomeScreen";
import CartScreen from "../../screens/CartScreen/CartScreen";
import FavoriteScreen from "../../screens/FavoriteScreen/FavoriteScreen";
import GameDetailScreen from "../../screens/GameDetailScreen/GameDetailScreen";


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="GameDetails"
        component={GameDetailScreen}
        options={({ route }) => ({
          title: route.params?.title,
        })}
      />
    </Stack.Navigator>
  );
};
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#AD40AF",
        },
        tabBarInactiveTintColor: "#fff",
        tabBarActiveTintColor: "yellow",
      }}
    >
      <Tab.Screen
        name="Home2"
        component={HomeStack}
        options={({route})=>({
            tabBarStyle:{
                display:getTabBarVisibility(route),
                backgroundColor: "#AD40AF"
            },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        })}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="shopping-bag" color={color} size={size} />
          ),
          tabBarBadge: 3,
          tabBarBadgeStyle: {
            backgroundColor: "yellow",
          },
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const getTabBarVisibility = (route) => {
    // console.log(route)
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
    // console.log(routeName)
    if(routeName == 'GameDetails' ){
        return 'none'
    }
    return 'flex';
}

export default TabNavigator;
