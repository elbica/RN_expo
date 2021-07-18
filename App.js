import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import Weather from "./Weather";
export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      // console.log(location);
      setIsLoading(false);
    } catch (err) {
      Alert.alert("Can't");
    }
  };
  useEffect(() => {
    getLocation();
  }, []);
  return isLoading ? (
    <Loading></Loading>
  ) : (
    <Weather temp={28} condition={"clear"}></Weather>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  yellowView: {
    flex: 1,
    backgroundColor: "yellow",
  },
  blueView: {
    flex: 1,
    backgroundColor: "blue",
  },
});
