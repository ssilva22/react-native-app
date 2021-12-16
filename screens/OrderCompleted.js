import React, {useState, useEffect} from "react"
import {View, Text, SafeAreaView, ScrollView} from "react-native"
import {useSelector} from "react-redux"
import LottieView from "lottie-react-native"
import firebase from "../firebase/firebase"
import MenuItem from "../components/homeScreen/restaurantDetails/MenuItem"

export default function OrderCompleted() {
  const [lastOrder, setLastOrder] = useState({
    items: [
      {
        title: "Lasagna",
        description: "With ham,cheese, and ground beef",
        price: "$12.25",
        image:
          "/Users/sebastian/Desktop/react-projects/uber-eats-clone/assets/images/bg2.jpg",
      },
    ],
  })

  const {items, restaurantName} = useSelector(
    (state) => state.cartReducer.selectedItems
  )

  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0)

  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  })

  useEffect(() => {
    const db = firebase.firestore()

    const unsubscribe = db
      .collection("orders")
      .orderBy("createdAt", "desc")
      .limit(1)
      .onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
          setLastOrder(doc.data())
        })
      })

    return () => unsubscribe()
  }, [])

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "white"}}>
      <View style={{margin: 15, alignItems: "center", height: "100%"}}>
        <LottieView
          style={{height: 100, alignSelf: "center", marginBottom: 30}}
          source={require("../assets/animations/check-mark.json")}
          autoPlay
          speed={0.5}
          loop={false}
        />
        <Text style={{fontSize: 20, fontWeight: "bold"}}>
          Your order at {restaurantName} has been placed for {totalUSD}{" "}
        </Text>
        <ScrollView>
          <MenuItem foods={lastOrder.items} hideCheckbox={true} />
          <LottieView
            style={{height: 200, alignSelf: "center"}}
            source={require("../assets/animations/cooking.json")}
            autoPlay
            speed={0.5}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}
