import {
    Image,
    StyleSheet,
    Text,
    View,
    useWindowDimensions,
  } from "react-native";
  import React, { useState } from "react";
  import profile from "../../assets/profile.png";
  import CustomInput from "../shared/CustomInput";
  import CustomButton from "../shared/CustomButton";
  import { UserAuth } from "../context/AuthContext";
  import { auth } from "../firebase";
  
  export default function ProfilePage() {
    const [email, setEmail] = useState(auth.currentUser.email);
    const [username, setUsername] = useState("");
  
    const { height } = useWindowDimensions();
    const { updatesUser } = UserAuth();
    const onEdit = async (e) => {
      e.preventDefault();
      const data = { username, email };
      console.log(data);
      try {
        await updatesUser(username, email);
      } catch (err) {
        console.log(err);
      }
    };
  
    return (
      <View style={styles.main}>
        <Image
          source={profile}
          style={(styles.profile, { height: height * 0.3 })}
          resizeMode="contain"
        />
        <Text style={styles.title}>Profile Page</Text>
        <CustomInput placeholder="Email" 
          value={email} 
          setValue={setEmail} />
        <CustomInput
          placeholder="User Name"
          value={username}
          setValue={setUsername}
        />
        <CustomButton text="Edit Profile" onPress={onEdit} />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    main: {
      flex: 1,
      alignItems: "center",
      backgroundColor: "#ffe4b5",
      padding: 40,
    },
    profile: { width: "70%", height: 100, maxHeight: 100, maxWidth: 500 },
    title: { fontSize: 30, fontWeight: "bold" },
  });