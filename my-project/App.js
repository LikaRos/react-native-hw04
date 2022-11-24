// import { ImageBackground, StyleSheet, View, Text } from "react-native";
// import { useFonts } from "expo-font";
// import * as SplashScreen from "expo-splash-screen";
// import React, { useEffect, useCallback } from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { RegistrationScreen } from "./Screens/Auth/RegistrationScreen";
import { LoginScreen } from "./Screens/Auth/LoginScreen";

const AuthStack = createStackNavigator();

export default function App() {
  //   const [fontsLoaded] = useFonts({
  //     "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  //     "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  //   });

  //   useEffect(() => {
  //     async function prepare() {
  //       await SplashScreen.preventAutoHideAsync();
  //     }
  //     prepare();
  //   }, []);

  //   const onLayoutRootView = useCallback(async () => {
  //     if (fontsLoaded) {
  //       await SplashScreen.hideAsync();
  //     }
  //   }, [fontsLoaded]);

  //   if (!fontsLoaded) {
  //     return null;
  //   }

  return (
    <>
      <NavigationContainer>
        <AuthStack.Navigator>
          <AuthStack.Screen
            options={{
              headerShown: false,
            }}
            name="Login"
            component={LoginScreen}
          />
          <AuthStack.Screen
            options={{
              headerShown: false,
            }}
            name="Register"
            component={RegistrationScreen}
          />
        </AuthStack.Navigator>
      </NavigationContainer>
    </>
  );
}

//   return (
//     <View style={styles.container} onLayout={onLayoutRootView}>
//       <ImageBackground
//         source={require("./assets/imageBG.png")}
//         style={styles.image}
//       >
//         {/* <Text>Open up App.js to start working on your app!</Text> */}
//         {/* <StatusBar style="auto" /> */}
//         <RegistrationScreen />
//         {/* <LoginScreen /> */}
//       </ImageBackground>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     // alignItems: "center",
//     // justifyContent: "center",
//   },
//   image: {
//     flex: 1,
//     resizeMode: "cover",
//     // justifyContent: "center",
//     justifyContent: "flex-end",
//   },
// });
