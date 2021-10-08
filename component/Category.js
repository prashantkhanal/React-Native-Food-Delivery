import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

const items = [
  {
    image: require("../assets/images/shopping-bag.png"),
    text: "Pick-up",
  },

  {
    image: require("../assets/images/soft-drink.png"),
    text: "Soft Drinks",
  },
  {
    image: require("../assets/images/bread.png"),
    text: "Bakery Items",
  },
  {
    image: require("../assets/images/fast-food.png"),
    text: "Fast Food",
  },
  {
    image: require("../assets/images/desserts.png"),
    text: "Dessert Food",
  },
];

export default function Category() {
  return (
    <View
      style={{
        marginTop: 8,
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingLeft: 15,
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((e, i) => (
          <View style={{ alignItems: "center", marginRight: 20 }} key={i}>
            <Image
              source={e.image}
              style={{
                width: 50,
                height: 40,
                resizeMode: "contain",
              }}
            />
            <Text style={{ fontSize: 14, fontWeight: "900" }}>{e.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
