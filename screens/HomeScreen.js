import {
  View,
  Text,
  
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useState, useLayoutEffect, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import SafeViewAndroid from "../components/SafeViewAndroid";
import {
  ChevronDownIcon,
  UserIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import sanityClient from "../sanity";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [FeaturedCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    sanityClient.fetch(
      `*[_type=="featured"]{...,restaurant[]->{...,dishes[]->}}`
    ).then((data)=>{setFeaturedCategories(data)});
  }, []);
  console.log(FeaturedCategories);

  return (
    <SafeAreaView className="bg-white h-full pb-30">
      <View >
        {/*Main Header*/}
        <View className="flex-row pb-3 items-center space-x-2 mx-4">
          <Image
            source={{
              uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <View className="flex-1 px-5">
            <Text className="text-gray-400 font-bold text-xs">
              Deliver Now!
            </Text>
            <Text className="font-bold text-xl">
              Current Location
              <ChevronDownIcon size={20} color="#00CCBB" />
            </Text>
          </View>
          <UserIcon size={35} color="#00CCBB" />
        </View>
        {/*Search Header*/}
        <View className="flex-row items-center Space-x-2 pb-2 mx-4">
          <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3 mr-2">
            <MagnifyingGlassIcon size={20} color="gray" />
            <TextInput
              placeholder="Restaurants and Cuisines"
              keyboardType="default"
            />
          </View>
          <AdjustmentsVerticalIcon color="#00CCBB" />
        </View>
        <ScrollView className="bg-gray-200">
          {/*Categories*/}
          <Categories />
          {/*featured*/}
          {FeaturedCategories?.map(category =>(<FeaturedRow
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
          />))}
          
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
