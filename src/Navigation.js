import React from "react";
import { View, Text } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';

import { UserAuth } from "./context/AuthContext";

import { FavoritesProvider } from "./context/FavoritesContext";
import SignInScreen from "./screens/SignInScreen";
import ProfilePage from "./screens/ProfilePage";
import SignUpScreen from "./screens/SignUpScreen";

import Movies from "./screens/movie/Movies";
import MovieDetails from "./screens/movie/MovieDetails";
import FavoritesScreen from "./screens/movie/FavoritesScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Stack = createStackNavigator();


function HomeStackScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Home" component={Movies} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Movies"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({ size }) => (
            <MaterialCommunityIcons name="movie-open" size={size} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({ size }) => (
            <MaterialIcons name="favorite" size={size} color="red" />
          ),
        }}
      />

      {/* // add the profile and sign in pages */}
      <Tab.Screen
        name="SignIn/Up"
        component={SignInScreen}
        options={{
          tabBarIcon: ({ size }) => (
            <MaterialCommunityIcons
              name="account-circle"
              color={"black"}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="SignIn" component={SignInScreen} />
  </AuthStack.Navigator>
);

const Drawer = createDrawerNavigator();
function DrawerNavigator() {
  return (
    <FavoritesProvider>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Movies} />
        <Drawer.Screen name="Profile" component={ProfilePage} />
      </Drawer.Navigator>
    </FavoritesProvider>
  );
}

export default function Navigation() {
  const { user } = UserAuth();
  return (
    <NavigationContainer>
      {user ? <DrawerNavigator /> : <AuthStackScreen />}
    </NavigationContainer>
  );
}