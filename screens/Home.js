import React, {useEffect, useState} from "react"
import {View, Text, SafeAreaView, ScrollView} from "react-native"
import {Divider} from "react-native-elements"
import Bottomtabs from "../components/homeScreen/BottomTabs"

import Categories from "../components/homeScreen/Categories"
import HeaderTabs from "../components/homeScreen/HeaderTabs"
import RestaurantItems, {
  localRestaurants,
} from "../components/homeScreen/RestaurantItems"
import SearchBar from "../components/homeScreen/SearchBar"

const YELP_API_KEY =
  "sdXlyqxGKYfNzxFySsxHf2vFOGZk2P5hozz63iJhO3tG2ugoIOYCoq-MN1Ax_lvfICZzO3m9HRPWY0Shjej1n2oArFh68rkBln2uOLfsXltL8x6eBzJW1NL_TwC5YXYx"

export default function Home({navigation}) {
  const [restaurantData, setRestaurantData] = useState(localRestaurants)
  const [city, setCity] = useState()
  const [activeTab, setActiveTab] = useState("Delivery")

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`
    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    }

    // Promise.all(yelpUrl, apiOptions)
    //   .then((res) => res.json())
    //   .then((json) =>
    //     setRestaurantData(
    //       json.businesses.filter((business) =>
    //         business.transactions.includes(activeTab.toLowerCase())
    //       )
    //     )
    //   )
    //   .catch((err) => console.log(err))

    fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantData(
          json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      )
  }

  useEffect(() => {
    getRestaurantsFromYelp()
  }, [city, activeTab])

  return (
    <SafeAreaView style={{backgroundColor: "#eee", flex: 1}}>
      <View style={{backgroundColor: "white", padding: 15}}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView>
        <Categories showsVerticalScrollIndicator={false} />
        <RestaurantItems
          restaurantData={restaurantData}
          navigation={navigation}
        />
      </ScrollView>
      <Divider width={1} />
      <Bottomtabs />
    </SafeAreaView>
  )
}
