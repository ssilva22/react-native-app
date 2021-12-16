import React from "react"
import {View, Text} from "react-native"
import {Divider} from "react-native-elements/dist/divider/Divider"
import About from "../components/homeScreen/restaurantDetails/About"
import MenuItem from "../components/homeScreen/restaurantDetails/MenuItem"
import ViewCart from "../components/homeScreen/restaurantDetails/ViewCart"

const foods = [
  {
    title: "Chocolate Mousse",
    description: "A silky mousse made with whipped cream and milk chocolate",
    price: "$8.50",
    image:
      "https://www.cookingclassy.com/wp-content/uploads/2020/02/chocolate-mousse-3.jpg",
  },
  {
    title: "Kohlrabi and tofu pie",
    description: "A puff pasty case filled with kohlrabi and marinaded tofu",
    price: "$14.50",
    image:
      "https://1.bp.blogspot.com/-3r8RiDewikA/UZw5tQFI9nI/AAAAAAAAFDA/KVAvZbS2W-o/s1600/Kolhrabi+Stuffed+Tofu1.jpg",
  },
  {
    title: "Apple and sage burgers",
    description:
      "Succulent burgers made from fresh apple and dried sage, served in a roll",
    price: "$12.50",
    image:
      "https://www.connoisseurusveg.com/wp-content/uploads/2015/09/apple-sage-chickpea-burger-grab.jpg",
  },
  {
    title: "Spinach and Fregola Spaghetti",
    description: "A silky mousse made with whipped cream and milk chocolate",
    price: "$16 .50",
    image:
      "https://whereismyspoon.co/wp-content/uploads/2017/04/spaghetti-spinach.jpg.webp",
  },
]

export default function RestaurantDetails({route, navigation}) {
  return (
    <View>
      <About route={route} />
      <Divider width={1.8} style={{marginVertical: 20}} />
      <MenuItem restaurantName={route.params.name} foods={foods} />
      <ViewCart navigation={navigation} />
    </View>
  )
}
