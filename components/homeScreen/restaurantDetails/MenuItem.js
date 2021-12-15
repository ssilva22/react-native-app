import React from "react"
import {View, Text, StyleSheet, Image, ScrollView} from "react-native"
import BouncyCheckbox from "react-native-bouncy-checkbox"
import {Divider} from "react-native-elements/dist/divider/Divider"
import {useDispatch, useSelector} from "react-redux"

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

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },

  titleStyle: {
    fontSize: 19,
    fontWeight: "600",
  },
})

export default function MenuItem({restaurantName}) {
  const dispatch = useDispatch()
  const cartItems = useSelector(
    (state) => state.cartReducer.selectedItems.items
  )
  const isFoodInCart = (food, cartItems) =>
    Boolean(cartItems.find((item) => item.title === food.title))

  const selectItem = (item, checkboxValue) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...item,
        restaurantName: restaurantName,
        checkboxValue: checkboxValue,
      },
    })

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => (
        <View key={index}>
          <View style={styles.menuItemStyle}>
            <BouncyCheckbox
              iconStyle={{borderColor: "lightgray", borderRadius: 0}}
              fillColor="green"
              onPress={(checkboxValue) => selectItem(food, checkboxValue)}
              isChecked={isFoodInCart(food, cartItems)}
            />
            <FoodInfo food={food} />
            <FoodImage food={food} />
          </View>
          <Divider
            width={0.5}
            orientation="vertical"
            style={{marginHorizontal: 20}}
          />
        </View>
      ))}
    </ScrollView>
  )
}

const FoodInfo = (props) => (
  <View style={{width: 235, justifyContent: "space-evenly"}}>
    <Text style={styles.titleStyle}>{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
)

const FoodImage = (props) => (
  <View>
    <Image
      source={{uri: props.food.image}}
      style={{width: 100, height: 100, borderRadius: 8}}
    />
  </View>
)
