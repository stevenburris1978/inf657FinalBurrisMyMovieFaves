import React, { useState } from "react";
import { StyleSheet, 
  View, 
  Text, 
  Image, 
  TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Favorites } from "../../context/FavoritesContext";

export default function MovieDetails ({ route, navigation }) {
  const { movie } = route.params;
  const { addItemToFavorites } = Favorites();
  const [quantity, setQuantity] = useState(1);

  const handleAddToFavorites = () => {
    addItemToFavorites({ ...movie, quantity });
    setQuantity(1);
    navigation.navigate("Favorites");
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: movie.image }} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.genre}>{movie.genre}</Text>
        <Text style={styles.date}>{movie.date}</Text>
        <Text style={styles.rating}>{movie.rating}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setQuantity((prev) => prev - 1)}
            disabled={quantity === 1}
          >
            <MaterialCommunityIcons name="minus" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.quantity}>{quantity}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setQuantity((prev) => prev + 1)}
          >
            <MaterialCommunityIcons name="plus" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.addToFavoritesButton}
          onPress={handleAddToFavorites}
        >
          <MaterialCommunityIcons name="favorite" size={24} color="red" />
          <Text style={styles.addToFavoritesText}>Add to Favorites</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageContainer: {
    height: "50%",
    width: "100%",
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  rating: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  genre: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  date: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#FF6347",
    borderRadius: 20,
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  quantity: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  addToFavoritesButton: {
    backgroundColor: "#FF6347",
    borderRadius: 20,
    height: 40,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  addToFavoritesText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});