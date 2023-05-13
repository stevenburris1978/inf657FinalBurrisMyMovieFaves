import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
  } from "react-native";
  import movies from "../../data/movies";
  import { MaterialCommunityIcons } from "@expo/vector-icons";

  export default function HomeScreen({ navigation }) {
    const navigateToMovieDetails = (movie) => {
      navigation.navigate("MovieDetails", { movie });
    };
  
    return (
      <View style={styles.container}>
        <FlatList
          data={movies}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigateToMovieDetails(item)}>
              <View style={styles.cardContainer}>
                <Image source={item.image} style={styles.movieImage} />
                <View style={styles.movieDetails}>
                  
                  <Text style={styles.movieTitle}>
                    {item.title}
                  </Text>
                  <Text style={styles.movieGenre}>
                    {item.genre}                    
                  </Text>

                  <Text style={styles.date}>
                    {item.date}
                  </Text>
                  <Text style={styles.rating}>
                    {item.rating}
                  </Text>

                  <View style={styles.tapContainer}>
                  <MaterialCommunityIcons name="gesture-tap" size={24} color="black" />
                  </View>

                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20,
      paddingTop: 20,
      backgroundColor: "#F2F2F2",
    },
    cardContainer: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#FFFFFF",
      borderRadius: 10,
      marginBottom: 20,
      overflow: "hidden",
      elevation: 3,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 2,
    },
    rating: {
      fontSize: 20,
      fontWeight: "bold",
      marginVertical: 10,
    },
    tapContainer: {
      marginBottom: 10,
      marginLeft: "75%",
    },
    date: {
      fontSize: 20,
      fontWeight: "bold",
      marginVertical: 10,
    },
    movieImage: {
      width: "30%",
      height: 100,
      resizeMode: "cover",
    },
    movieDetails: {
      flex: 1,
      padding: 10,
    },
    movieTitle: {
      fontSize: 16,
      fontWeight: "bold",
      marginBottom: 5,
    },
    movieGenre: {
      fontSize: 14,
      marginBottom: 5,
    },
  });