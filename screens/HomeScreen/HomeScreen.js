import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import styles from "./style";
import Carousel from "react-native-snap-carousel";
import Feather from "react-native-vector-icons/Feather";

import BannerSlider from "../../component/BannerSlider";
import { windowWidth } from "../../utils/Dimensions";

import { freeGames, paidGames, sliderData } from "../../model/data";
import CustomSwitch from "../../component/CustomSwitch";
import { StatusBar } from "expo-status-bar";
import ListItems from "../../component/ListItems";
export default function HomeScreen({ navigation }) {
  const [gamesTab, setGamesTab] = useState(1);
  const renderBanner = ({ item, index }) => {
    return <BannerSlider data={item} />;
  };
  const onSelectSwitch = (value) => {
    setGamesTab(value);
  };
  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.container}>
        <ScrollView style={{ padding: 20 }}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Hello Hoang Long</Text>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <ImageBackground
                  source={require("../../assets/images/user-profile.jpg")}
                  style={styles.userImage}
                  imageStyle={{ borderRadius: 25 }}
                />
            </TouchableOpacity>
          </View>

          <View style={styles.searchInput}>
            <Feather
              name="search"
              size={20}
              color="#C6C6C6"
              style={{ marginRight: 5 }}
            />
            <TextInput placeholder="Search" />
          </View>

          <View style={styles.suggestView}>
            <Text style={{ fontSize: 18, fontFamily: "RobotoMedium" }}>
              Upcoming Games
            </Text>
            <TouchableOpacity onPress={() => {}}>
              <Text style={{ color: "#0aada8", fontWeight: "bold" }}>
                See all
              </Text>
            </TouchableOpacity>
          </View>

          <Carousel
            ref={(c) => {
              this._carousel = c;
            }}
            data={sliderData}
            renderItem={renderBanner}
            sliderWidth={windowWidth - 40}
            itemWidth={300}
            loop={true}
          />

          <View style={{ marginVertical: 20 }}>
            <CustomSwitch
              selectionMode={1}
              option1="Free to play"
              option2="Paid games"
              onSelectSwitch={onSelectSwitch}
            />
          </View>

          {gamesTab == 1 &&
            freeGames.map((item) => (
              <ListItems
                key={item.id}
                photo={item.poster}
                title={item.title}
                subTitle={item.subtitle}
                isFree={item.isFree}
                onPress = {() => navigation.navigate('GameDetails',{title: item.title})} 
              />
            ))}
          {gamesTab == 2 &&
            paidGames.map((item) => (
              <ListItems
                key={item.id}
                photo={item.poster}
                title={item.title}
                subTitle={item.subtitle}
                isFree={item.isFree}
                price={item.price}
                onPress = {() => navigation.navigate('GameDetails',{title: item.title})}
              />
            ))}
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
