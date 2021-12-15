import React from "react"
import {View, Text} from "react-native"
import {Divider} from "react-native-elements/dist/divider/Divider"
import About from "../components/homeScreen/restaurantDetails/About"
import MenuItem from "../components/homeScreen/restaurantDetails/MenuItem"

export default function RestaurantDetails({route}) {
  return (
    <View>
      <About route={route} />
      <Divider width={1.8} style={{marginVertical: 20}} />
      <MenuItem />
    </View>
  )
}
