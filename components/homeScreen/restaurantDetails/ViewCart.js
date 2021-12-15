import React from "react"
import {View, Text} from "react-native"
import {TouchableOpacity} from "react-native-gesture-handler"
import {useSelector} from "react-redux"

export default function ViewCart() {
  const items = useSelector((state) => state.cartReducer.selectedItems.items)
  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0)

  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  })

  console.log(totalUSD)

  return (
    <>
      {total ? (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            position: "absolute",
            bottom: 100,
            zIndex: 999,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <TouchableOpacity
              style={{
                marginTop: 20,
                backgroundColor: "black",
                flexDirection: "row",
                alignItems: "space-between",
                padding: 15,
                borderRadius: 30,
                width: 300,
                position: "relative",
              }}
            >
              <Text style={{color: "white", fontSize: 20, marginLeft: 30}}>
                View Cart
              </Text>
              <Text style={{color: "white", fontSize: 20, marginLeft: 70}}>
                {"(" + totalUSD + ")"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
    </>
  )
}
