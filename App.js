import React,{useState} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
const getFonts = () =>
  Font.loadAsync({
    'InterBold': require("./assets/fonts/Inter-Bold.ttf"),
    'RobotoBold': require("./assets/fonts/Roboto-Bold.ttf"),
    'RobotoBoldItalic': require("./assets/fonts/Roboto-BoldItalic.ttf"),
    'RobotoItalic': require("./assets/fonts/Roboto-Italic.ttf"),
    'RobotoMedium': require("./assets/fonts/Roboto-Medium.ttf"),
    'RobotoMediumItalic': require("./assets/fonts/Roboto-MediumItalic.ttf"),
    'RobotoRegular': require("./assets/fonts/Roboto-Regular.ttf"),
  });
import AuthStack from "./src/navigation/AuthStack";
import AppStack from "./src/navigation/AppStack"
// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

export default function App() {
  const [fontLoaded, setfontLoaded] = useState(false);
  if (fontLoaded) {
    return (
      <NavigationContainer>
        <AppStack/>
        {/* <AuthStack/> */}
      </NavigationContainer>
    );
  } else {
    return (
      <AppLoading startAsync={getFonts} onError={() => console.log("ERROR")} onFinish={() => {
        setfontLoaded(true);
      }} />
    );
  }
}
