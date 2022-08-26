import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import SafeViewAndroid from "../components/SafeViewAndroid";
import { ChevronDownIcon, UserIcon, MagnifyingGlassIcon, AdjustmentsVerticalIcon } from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";


const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
       <View className="bg-white"> 
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
            <ChevronDownIcon size={20} color="#00CCBB"/>
          </Text>
        </View>
<UserIcon size={35} color="#00CCBB"/>
      </View>
      {/*Search Header*/}
      <View className="flex-row items-center Space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3 mr-2">
        <MagnifyingGlassIcon size={20} color="gray"/>
        <TextInput placeholder="Restaurents and Cuisines" keyboardType="default"/>
        </View>
        <AdjustmentsVerticalIcon color="#00CCBB"/>
      </View>
      <ScrollView className="bg-gray-200">
        {/*Categories*/}
        <Categories/>
        {/*featured*/}
<FeaturedRow id="123" title="Featured" description="Paid placements from our partners"/>
<FeaturedRow id="1234" title="Tasty Discounts" description="Everyone's been enjoying juicy discounts"/>
<FeaturedRow id="12345" title="Offers Near You!" description="Why not to support local restaurent tonight"/>



      </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
