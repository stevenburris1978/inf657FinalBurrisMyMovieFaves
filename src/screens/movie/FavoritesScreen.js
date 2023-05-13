import React, { useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
// import { Cart } from "../context/CartContext";

const FavoritesScreen = () => {
  const { favoritesItems, removeItemFromFavorites, clearFavorites, calculateTotalRating } =
    Favorites();

  const renderItem = ({ item }) => (
    <View style={styles.card}>

      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: item.image }} />
      </View>

      <View style={styles.item}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.genre}>{item.genre}</Text>
        <Text style={styles.date}>{item.date}</Text>
        <Text style={styles.itemRating}>Rating: {item.rating}</Text>
        <TouchableOpacity onPress={() => removeItemFromFavorites(item)}>
          <MaterialCommunityIcons name="delete" size={24} color="#FF6347" />
        </TouchableOpacity>
      </View>

    </View>
  );

  return (
    <View style={styles.container}>
      {favoritesItems.length > 0 ? (
        <>
          <FlatList
            data={favoritesItems}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={styles.list}
          />
          <View style={styles.bottom}>
            <Text style={styles.total}>Rating: {calculateTotalRating()}</Text>
            <TouchableOpacity onPress={clearFavorites}>
              <Text style={styles.clear}>Clear Favorites</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <Text style={styles.empty}>Your cart is empty!</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    flexGrow: 1,
    justifyContent: "center",
    paddingVertical: 20,
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
  card: {
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    elevation: 5,
    marginVertical: 15,
    marginHorizontal: 60,
    borderRadius: 10,
    overflow: "hidden",
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: "100%",
  },
  itemTitle: {
    fontSize: 16,
  },
  itemRating: {
    fontSize: 16,
    fontWeight: "bold",
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    width: "100%",
  },
  total: {
    fontSize: 18,
    fontWeight: "bold",
  },
  clear: {
    fontSize: 16,
    color: "#FF6347",
  },
  empty: {
    fontSize: 24,
    color: "#ccc",
  },
});

export default FavoritesScreen;