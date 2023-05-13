import { createContext, useState, useEffect } from "react";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const movieCollection = collection(db, "movieList");
      const data = await getDocs(movieCollection);
      setMovies(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getMovies();
  }, []);

  const addMovie = async (movie) => {
    try {
      const docRef = await addDoc(collection(db, "movieList"), movie);
      setMovies([...movies, { ...movie, id: docRef.id }]);
    } catch (error) {
      console.error("Error adding movie: ", error);
    }
  };

  const updateMovie = async (id, updatedMovie) => {
    try {
      const movieDoc = doc(db, "movieList", id);
      await updateDoc(movieDoc, updatedMovie);
      setMovies(
        movies.map((movie) =>
          movie.id === id ? { ...updatedMovie, id } : movie
        )
      );
    } catch (error) {
      console.error("Error updating movie: ", error);
    }
  };

  const deleteMovie = async (id) => {
    try {
      const movieDoc = doc(db, "movieList", id);
      await deleteDoc(movieDoc);
      setMovies(movies.filter((movie) => movie.id !== id));
    } catch (error) {
      console.error("Error deleting movie: ", error);
    }
  };

  return (
    <MovieContext.Provider
      value={{ movies, addMovie, updateMovie, deleteMovie }}
    >
      {children}
    </MovieContext.Provider>
  );
};