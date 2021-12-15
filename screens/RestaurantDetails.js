import React from "react"
import {View, Text} from "react-native"
import {Divider} from "react-native-elements/dist/divider/Divider"
import About from "../components/homeScreen/restaurantDetails/About"
import MenuItem from "../components/homeScreen/restaurantDetails/MenuItem"
import ViewCart from "../components/homeScreen/restaurantDetails/ViewCart"

export default function RestaurantDetails({route, navigation}) {
  return (
    <View>
      <About route={route} />
      <Divider width={1.8} style={{marginVertical: 20}} />
      <MenuItem />
      <ViewCart navigation={navigation} restaurantName={route.params.name} />
    </View>
  )
}
