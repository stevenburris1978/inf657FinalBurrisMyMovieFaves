import { StyleSheet, Text, View } from "react-native";
import Navigation from "./src/Navigation";
import "react-native-gesture-handler";
import { AuthContextProvider } from "./src/context/AuthContext";
// import { CartProvider } from "./src/context/CartContext";

export default function App() {
  return (
    <AuthContextProvider>
      <View style={styles.container}>
        <Navigation />
      </View>
    </AuthContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});