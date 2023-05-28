import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Text,
  Animated,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { WelcomeScreenStrings } from "../code/strings/WelcomeScreen.string";

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const [showIcon, setShowIcon] = useState(true);
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const handlePress = (page: string) => {
    navigation.navigate(page as never);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fadeOut();
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      setShowIcon(false);
    });
  };

  return (
    <ImageBackground
      source={require("../assets/backgrounds/blueWaves.jpg")}
      style={styles.backgroundImage}
    >
      <View style={styles.appTitle}>
        {showIcon ? (
          <Animated.View style={{ opacity: fadeAnim }}>
            <Image
              source={require("../assets/icons/comic-book.png")}
              style={styles.icon}
            />
          </Animated.View>
        ) : (
          <>
            <Text style={styles.text}>{WelcomeScreenStrings.appName}</Text>
            <Text style={styles.quote}>{WelcomeScreenStrings.appQuote}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                handlePress("Comics");
              }}
            >
              <Text style={styles.buttonText}>
                {WelcomeScreenStrings.btnText}
              </Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  appTitle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#073763",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    width: "70%",
    opacity: 0.8,
    marginBottom: 20,
    elevation: 50,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 4,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    textAlign: "center",
  },
  text: {
    fontFamily: "Arial",
    color: "#f3f6f4",
    fontSize: 50,
    textAlign: "center",
    marginTop: 50,
    fontWeight: "bold",
  },
  quote: {
    textAlign: "center",
    marginBottom: 20,
    color: "#f3f6f4",
    fontSize: 20,
  },
  icon: {
    width: 150,
    height: 150,
  },
});
