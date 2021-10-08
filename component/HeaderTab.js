import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function HeaderTab() {
  const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      <HeaderButton
        text="Delivery"
        setActiveTab={setActiveTab}
        activeTab={activeTab}
      />
      <HeaderButton
        text="Pickup"
        setActiveTab={setActiveTab}
        activeTab={activeTab}
      />
    </View>
  );
}

const HeaderButton = ({ text, setActiveTab, activeTab }) => (
  <TouchableOpacity
    style={{
      paddingVertical: 6,
      borderRadius: 30,
      paddingHorizontal: 15,
      backgroundColor: activeTab === text ? "#000000" : "#ffffff",
    }}
    onPress={() => setActiveTab(text)}
  >
    <Text
      style={{
        color: activeTab === text ? "#ffffffff" : "#000000",
        fontSize: 17,
        fontWeight: "900",
      }}
    >
      {text}
    </Text>
  </TouchableOpacity>
);
