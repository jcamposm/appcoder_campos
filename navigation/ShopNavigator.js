import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import CategoriesScreen from "../screens/CategoriesScreen"
import CategoryProductScreen from "../screens/CategoryProductScreen"
import ProductDetailScreen from "../screens/ProductDetailScreen"

import { COLORS } from "../constants/colors"

const Stack = createNativeStackNavigator()

export default ShopNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Categories"
        screenOptions={{
          headerStyle: { backgroundColor: COLORS.primary },
          headerTintColor: COLORS.secondary,
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{
            title: 'Mi Estética Integral Online',
          }}
        />
        <Stack.Screen
          name="Products"
          component={CategoryProductScreen}
          options={({ route }) => ({
            title: route.params.title,
          })}
        />
        <Stack.Screen name="Details" component={ProductDetailScreen} />
      </Stack.Navigator>

    </NavigationContainer>

  )
}
