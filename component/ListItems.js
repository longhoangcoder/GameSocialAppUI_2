import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { windowWidth } from "../utils/Dimensions";

export default function ListItems({
    photo,
    title,
    subTitle,
    isFree,
    price,
    onPress
}) {
  return (
    <View style = {{flexDirection:"row", justifyContent:"space-between", alignItems:"center",marginBottom: 20}}>
      <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
        <Image
          source={photo}
          style={{ width: 55, height: 55, borderRadius: 10, marginRight: 8 }}
        />
        <View style ={{width: windowWidth - 220}} >
          <Text
            style={{ fontSize: 14, fontFamily: "RobotoMedium", color: "#333" }}
          >
            {subTitle}
          </Text>
          <Text
          numberOfLines={1}
            style={{
              fontSize: 14,
              fontFamily: "RobotoMedium",
              color: "#333",
              textTransform: "uppercase",
            }}
          >
            {title}
          </Text>
        </View>
      </View>
      <TouchableOpacity onPress={onPress} style = {{backgroundColor:'#0aada8' ,padding: 10, width: 100, borderRadius: 10}}>
          <Text style = {{textAlign:"center", fontSize: 14, fontFamily: "RobotoMedium", color: "#fff"}}>
              {isFree == 'Yes' && 'Play' }
              {isFree == 'No' && price }
          </Text>
      </TouchableOpacity>
    </View>
  );
}
