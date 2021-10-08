import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// import instance from "../http";

const YALK_API_KEY = `xqrpNE2qApuv6cccahILr5W-N6OfW3RYkq2XvrcgNZmIoD2midqrCV3LuqRHIyKDY9afr73IQFhk5IOETBPsmQ1GrqxH8WzosjjkZCPm0sAxmc_53rUiNS7LFOheYXYx`;
export default function Restrutrant({}) {
  const [restrutrantData, setRestrutrantData] = useState([]);
  // console.log("THIS THE STATE VALUE", restrutrantData);

  const url = "https://jsonplaceholder.typicode.com/posts";
  const resData = fetch(url, {
    headers: {
      Authorization: "My custom headers",
    },
  })
    .then((res) => res.json())
    .then((data) => setRestrutrantData(data))
    .catch((error) => console.log("this is the eroor", error));

  useEffect(() => {
    resData();
  }, []);

  return (
    <TouchableOpacity activeOpacity={1} style={{ marginBottom: 10 }}>
      {restrutrantData.map((e, i) => (
        <View key={i}>
          <Text>{e.title}</Text>
        </View>
      ))}
      {/* {restrutrantData.map((e, i) => (
        <View
          style={{
            backgroundColor: "#ffffff",
            marginTop: 10,
            padding: 15,
          }}
        >
          <RestrutrantImage url={e?.image_url} />
          <RestrutrantInfo restName={e?.name} time={time} rating={e?.rating} />
        </View>
      ))} */}
    </TouchableOpacity>
  );
}

const RestrutrantImage = ({ url }) => (
  <>
    <Image
      source={{
        uri: url,
      }}
      style={{ width: "100%", height: 180 }}
    />
    <TouchableOpacity
      style={{
        position: "absolute",
        right: 17,
        top: 17,
      }}
    >
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
);

const RestrutrantInfo = ({ restName, time, rating }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 7,
      justifyItem: "center",
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>{restName}</Text>
      <Text style={{ color: "grey", fontSize: 13 }}>{time}. min</Text>
    </View>
    <View>
      <Text
        style={{
          backgroundColor: "#eee",
          alignItems: "center",
          borderRadius: 30,
          padding: 8,
          fontWeight: "900",
        }}
      >
        {rating}
      </Text>
    </View>
  </View>
);
// {

//   "data": Object {
//     "businesses": Array [
//       Object {
//         "alias": "c-level-san-diego",
//         "categories": Array [
//           Object {
//             "alias": "newamerican",
//             "title": "American (New)",
//           },
//           Object {
//             "alias": "seafood",
//             "title": "Seafood",
//           },
//           Object {
//             "alias": "steak",
//             "title": "Steakhouses",
//           },
//         ],
//         "coordinates": Object {
//           "latitude": 32.7241827616904,
//           "longitude": -117.188347987279,
//         },
//         "display_phone": "(619) 298-6802",
//         "distance": 8047.249566972773,
//         "id": "Sa_qcnc7ZgzSOylf3plTRA",
//         "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/rE2Ti2kPJTW_xv2FkW-8Lg/o.jpg",
//         "is_closed": false,
//         "location": Object {
//           "address1": "880 Harbor Island Dr",
//           "address2": "",
//           "address3": "",
//           "city": "San Diego",
//           "country": "US",
//           "display_address": Array [
//             "880 Harbor Island Dr",
//             "San Diego, CA 92101",
//           ],
//           "state": "CA",
//           "zip_code": "92101",
//         },
//         "name": "C Level",
//         "phone": "+16192986802",
//         "price": "$$",
//         "rating": 4.5,
//         "review_count": 3438,
//         "transactions": Array [],
//         "url": "https://www.yelp.com/biz/c-level-san-diego?adjust_creative=I0VMvQyvIA5sU_djoK7kzw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=I0VMvQyvIA5sU_djoK7kzw",
//       },
//       Object {
//         "alias": "cross-street-chicken-and-beer-san-diego",
//         "categories": Array [
//           Object {
//             "alias": "korean",
//             "title": "Korean",
//           },
//           Object {
//             "alias": "beerbar",
//             "title": "Beer Bar",
//           },
//           Object {
//             "alias": "chicken_wings",
//             "title": "Chicken Wings",
//           },
//         ],
//         "coordinates": Object {
//           "latitude": 32.820203,
//           "longitude": -117.154722,
//         },
//         "display_phone": "(858) 430-6001",
//         "distance": 3293.775226071546,
//         "id": "Ve1N_Y3lwtI4UYwDvUEtZg",
//         "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/6_qyHE810GL_ZSkmR118OQ/o.jpg",
//         "is_closed": false,
//         "location": Object {
//           "address1": "4403 Convoy St",
//           "address2": "",
//           "address3": null,
//           "city": "San Diego",
//           "country": "US",
//           "display_address": Array [
//             "4403 Convoy St",
//             "San Diego, CA 92111",
//           ],
//           "state": "CA",
//           "zip_code": "92111",
//         },
//         "name": "Cross Street Chicken and Beer",
//         "phone": "+18584306001",
//         "price": "$$",
//         "rating": 4.5,
//         "review_count": 1831,
//         "transactions": Array [
//           "delivery",
//           "pickup",
//         ],
//         "url": "https://www.yelp.com/biz/cross-street-chicken-and-beer-san-diego?adjust_creative=I0VMvQyvIA5sU_djoK7kzw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=I0VMvQyvIA5sU_djoK7kzw",
//       },
//       Object {
//         "alias": "steamy-piggy-san-diego-2",
//         "categories": Array [
//           Object {
//             "alias": "chinese",
//             "title": "Chinese",
//           },
//           Object {
//             "alias": "asianfusion",
//             "title": "Asian Fusion",
//           },
//           Object {
//             "alias": "ramen",
//             "title": "Ramen",
//           },
//         ],
//         "coordinates": Object {
//           "latitude": 32.8256099801121,
//           "longitude": -117.154518795069,
//         },
//         "display_phone": "(858) 492-0401",
//         "distance": 3896.543638537019,
//         "id": "iyLfem8zE0fLWTf-4WdqaA",
//         "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/CVqqVnRmASxe9B2Oaa5fxg/o.jpg",
//         "is_closed": false,
//         "location": Object {
//           "address1": "4681 Convoy St",
//           "address2": "",
//           "address3": null,
//           "city": "San Diego",
//           "country": "US",
//           "display_address": Array [
//             "4681 Convoy St",
//             "San Diego, CA 92111",
//           ],
//           "state": "CA",
//           "zip_code": "92111",
//         },
//         "name": "Steamy Piggy",
//         "phone": "+18584920401",
//         "price": "$$",
//         "rating": 4,
//         "review_count": 2454,
//         "transactions": Array [
//           "delivery",
//           "pickup",
//         ],
//         "url": "https://www.yelp.com/biz/steamy-piggy-san-diego-2?adjust_creative=I0VMvQyvIA5sU_djoK7kzw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=I0VMvQyvIA5sU_djoK7kzw",
//       },
//       Object {
//         "alias": "buds-louisiana-cafe-san-diego",
//         "categories": Array [
//           Object {
//             "alias": "cajun",
//             "title": "Cajun/Creole",
//           },
//           Object {
//             "alias": "breakfast_brunch",
//             "title": "Breakfast & Brunch",
//           },
//           Object {
//             "alias": "wine_bars",
//             "title": "Wine Bars",
//           },
//         ],
//         "coordinates": Object {
//           "latitude": 32.821062910211,
//           "longitude": -117.124669642923,
//         },
//         "display_phone": "(858) 573-2837",
//         "distance": 4365.094267885721,
//         "id": "AS--bXkiFStoRkwoLqkJEg",
//         "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/JZxUzZxbbsxKbG1bK9Bqhg/o.jpg",
//         "is_closed": false,
//         "location": Object {
//           "address1": "4320 Viewridge Ave",
//           "address2": "Ste A",
//           "address3": "",
//           "city": "San Diego",
//           "country": "US",
//           "display_address": Array [
//             "4320 Viewridge Ave",
//             "Ste A",
//             "San Diego, CA 92123",
//           ],
//           "state": "CA",
//           "zip_code": "92123",
//         },
//         "name": "Bud's Louisiana Cafe",
//         "phone": "+18585732837",
//         "price": "$$",
//         "rating": 4.5,
//         "review_count": 2371,
//         "transactions": Array [
//           "delivery",
//         ],
//         "url": "https://www.yelp.com/biz/buds-louisiana-cafe-san-diego?adjust_creative=I0VMvQyvIA5sU_djoK7kzw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=I0VMvQyvIA5sU_djoK7kzw",
//       },
//       Object {
//         "alias": "homestyle-hawaiian-san-diego",
//         "categories": Array [
//           Object {
//             "alias": "hawaiian",
//             "title": "Hawaiian",
//           },
//           Object {
//             "alias": "salad",
//             "title": "Salad",
//           },
//           Object {
//             "alias": "seafood",
//             "title": "Seafood",
//           },
//         ],
//         "coordinates": Object {
//           "latitude": 32.801671968633,
//           "longitude": -117.159088104705,
//         },
//         "display_phone": "(858) 571-5828",
//         "distance": 1320.2097003677886,
//         "id": "OfjUGieDXyPB8jWa0pvehA",
//         "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/CGv32yBM01C2dUt-UL_LBA/o.jpg",
//         "is_closed": false,
//         "location": Object {
//           "address1": "7524 Mesa College Dr",
//           "address2": "",
//           "address3": "",
//           "city": "San Diego",
//           "country": "US",
//           "display_address": Array [
//             "7524 Mesa College Dr",
//             "San Diego, CA 92111",
//           ],
//           "state": "CA",
//           "zip_code": "92111",
//         },
//         "name": "Homestyle Hawaiian",
//         "phone": "+18585715828",
//         "price": "$$",
//         "rating": 4,
//         "review_count": 1814,
//         "transactions": Array [
//           "delivery",
//         ],
//         "url": "https://www.yelp.com/biz/homestyle-hawaiian-san-diego?adjust_creative=I0VMvQyvIA5sU_djoK7kzw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=I0VMvQyvIA5sU_djoK7kzw",
//       },
//       Object {
//         "alias": "dumpling-inn-san-diego-6",
//         "categories": Array [
//           Object {
//             "alias": "chinese",
//             "title": "Chinese",
//           },
//           Object {
//             "alias": "bars",
//             "title": "Bars",
//           },
//         ],
//         "coordinates": Object {
//           "latitude": 32.824255,
//           "longitude": -117.154314,
//         },
//         "display_phone": "(858) 268-9638",
//         "distance": 3745.7263544682764,
//         "id": "pTNcDnsNvEu9lFZbJmqw_g",
//         "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/PgquCTDVNYB2HPrcJ1z-mg/o.jpg",
//         "is_closed": false,
//         "location": Object {
//           "address1": "4625 Convoy St",
//           "address2": "",
//           "address3": "",
//           "city": "San Diego",
//           "country": "US",
//           "display_address": Array [
//             "4625 Convoy St",
//             "San Diego, CA 92111",
//           ],
//           "state": "CA",
//           "zip_code": "92111",
//         },
//         "name": "Dumpling Inn",
//         "phone": "+18582689638",
//         "price": "$$",
//         "rating": 4,
//         "review_count": 3034,
//         "transactions": Array [
//           "d...(truncated to the first 10000 characters)
