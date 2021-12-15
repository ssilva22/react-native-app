import React from "react"
import {View, Text, Image} from "react-native"

const image =
  "https://media.istockphoto.com/photos/empty-restaurant-interior-picture-id1290237592?b=1&k=20&m=1290237592&s=170667a&w=0&h=fgXWrrQ7qWpbiO8O_dpEVlS4JsTZYH8e3FoZ4UeoQH8="

const title = "Random Restaurant"
const description = "Thai • Comfort Food • $$ • (3048+)"

export default function About() {
  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantTitle title={title} />
      <RestaurantDescription description={description} />
    </View>
  )
}

const RestaurantImage = (props) => (
  <Image source={{uri: props.image}} style={{width: "100%", height: 180}} />
)

const RestaurantTitle = (props) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: "600",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {props.title}
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
