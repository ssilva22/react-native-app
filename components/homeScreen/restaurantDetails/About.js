import React from "react"
import {View, Text, Image} from "react-native"

// const yelpRestaurantInfo = {
//   name: "The Random Restaurant",
//   image_url:
//     "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
//   price: "$$",
//   reviews: "(1500+)",
//   rating: 4.2 + " ⭐",
//   categories: [{title: "Fast-Food"}, {title: "Comfort Food"}],
// }

export default function About(props) {
  const {name, image, price, reviews, rating, categories} = props.route.params

  const formattedCategories = categories.map((cat) => cat.title).join(" • ")

  const restaurantDescription = `${formattedCategories} ${
    price ? " • " + price : ""
  } • ${rating} • (${reviews})+`
  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantName name={name} />
      <RestaurantDescription description={restaurantDescription} />
    </View>
  )
}

const RestaurantImage = (props) => (
  <Image source={{uri: props.image}} style={{width: "100%", height: 180}} />
)

const RestaurantName = (props) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: "600",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {props.name}
  </Text>
)

const RestaurantDescription = (props) => (
  <Text
    style={{
      marginTop: 10,
      marginHorizontal: 15,
      fontWeight: "400",
      fontSize: 15.5,
    }}
  >
    {props.description}
  </Text>
)
