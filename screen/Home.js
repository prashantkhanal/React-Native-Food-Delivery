import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StatusBar, View } from "react-native";
import Category from "../component/Category";
import HeaderTab from "../component/HeaderTab";
import Restrutrant from "../component/Restrutrant";
import SearchBar from "../component/SearchBar";
import axios from "react-native-axios";

export default function Home() {
  return (
    <SafeAreaView
      style={{
        paddingTop: 2,
        backgroundColor: "#eee",
        flex: 1,
      }}
    >
      <View style={{ backgroundColor: "#FFFFFF", padding: 10 }}>
        <HeaderTab />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Category />
        <Restrutrant />
      </ScrollView>
    </SafeAreaView>
  );
}
