import React from "react"
import {View, Text, Image, TouchableOpacity} from "react-native"
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons"

export const localRestaurants = [
  {
    name: "Beachside Bar",
    image_url:
      "https://media.istockphoto.com/photos/empty-restaurant-interior-picture-id1290237592?b=1&k=20&m=1290237592&s=170667a&w=0&h=fgXWrrQ7qWpbiO8O_dpEVlS4JsTZYH8e3FoZ4UeoQH8=",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: "Benihana",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 3.7,
  },
  {
    name: "India's Grill",
    image_url:
      "https://media.istockphoto.com/photos/very-stylish-indian-gourmet-restaurant-picture-id1163284610?b=1&k=20&m=1163284610&s=170667a&w=0&h=jC4tmPenCZc5WFY3ix8NgJZFzveHUGuSKRP-zWhKerY=",
    categories: ["Indian", "Bar"],
    price: "$$",
    reviews: 700,
    rating: 4.9,
  },
]

export default function RestaurantItems({navigation, ...props}) {
  return (
    <>
      {props.restaurantData.map((restaurant, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={1}
          style={{marginBottom: 30}}
          onPress={() =>
            navigation.navigate("RestaurantDetails", {
              name: restaurant.name,
              image: restaurant.image_url,
              price: restaurant.price,
              reviews: restaurant.review_count,
              categories: restaurant.categories,
              rating: restaurant.rating,
            })
          }
        >
          <View style={{marginTop: 10, padding: 15, backgroundColor: "white"}}>
            <RestaurantImage image={restaurant.image_url} />
            <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  )
}

const RestaurantImage = (props) => (
  <TouchableOpacity activeOpacity={1} style={{marginBottom: 30}}>
    <Image
      source={{
        uri: props.image,
      }}
      style={{width: "100%", height: 180}}
    />
    <TouchableOpacity style={{position: "absolute", right: 20, top: 20}}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </TouchableOpacity>
)

const RestaurantInfo = (props) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{fontSize: 15, fontWeight: "bold"}}>{props.name}</Text>
      <Text style={{fontSize: 13, color: "gray"}}>30-45 min •</Text>
    </View>
    <View
      style={{
        backgroundColor: "white",
        height: 30,
        width: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
      }}
    >
      <Text>{props.rating}</Text>
    </View>
  </View>
)
