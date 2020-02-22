import React, { useLayoutEffect, useState } from "react";
import * as Font from "expo-font";
import { Intro } from "./views/intro/Intro";
import {Button, View} from "react-native";
import { Intro2 } from "./views/intro/Intro2";

import {createAppContainer, NavigationActions} from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const MainNavigator = createStackNavigator({
  Home: { screen: Intro2 },
  AddNewExpense: { screen: ({navigation}: any) => <View style={{flex: 1}}><Button title={"Go to Home"} onPress={() => navigation.navigate('Home')}/></View> }
});

export default function App() {
  const [fontsLoaded, setfontsLoaded] = useState(false);

  useLayoutEffect(() => {
    Font.loadAsync({
      "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
      "open-sans-regular": require("./assets/fonts/OpenSans-Regular.ttf"),
      "open-sans-extra-bold": require("./assets/fonts/OpenSans-ExtraBold.ttf"),
      "open-sans-light": require("./assets/fonts/OpenSans-Light.ttf"),
      "open-sans-semi-bold": require("./assets/fonts/OpenSans-SemiBold.ttf")
    }).then(() => setfontsLoaded(true));
  }, []);

  const App = createAppContainer(MainNavigator);
  return fontsLoaded && <App />;
};
