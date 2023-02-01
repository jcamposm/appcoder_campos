
import { useFonts } from "expo-font"
import ShopNavigator from "./navigation/ShopNavigator"

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto: require('./assets/fonts/Roboto-Regular.ttf'),
        RobotoBold: require('./assets/fonts/Roboto-Bold.ttf'),
        RobotoThin: require('./assets/fonts/Roboto-Thin.ttf')
  })

  if (!fontsLoaded) {
    return null
  }

  return <ShopNavigator />
}