import React from "react"
import {View, StyleSheet, Text, TouchableOpacity} from "react-native"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"

export default function Bottomtabs() {
  return (
    <View
      style={{
        flexDirection: "row",
        marginTop: 12,
        marginHorizontal: 20,
        justifyContent: "space-between",
        marginBottom: -10,
      }}
    >
      <Icon icon="home" text="Home" />
      <Icon icon="search" text="Browse" />
      <Icon icon="shopping-bag" text="Shop" />
      <Icon icon="receipt" text="Orders" />
      <Icon icon="user" text="Account" />
    </View>
  )
}

const Icon = (props) => (
  <TouchableOpacity>
    <View>
      <FontAwesome5
        name={props.icon}
        size={25}
        style={{marginBottom: 2, alignSelf: "center"}}
      />
      <Text>{props.text}</Text>
    </View>
  </TouchableOpacity>
)
