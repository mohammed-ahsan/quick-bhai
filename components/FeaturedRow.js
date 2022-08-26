import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurentCard from './RestaurentCard'

const FeaturedRow = ({id,title,description}) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">
            {title}
        </Text>
        <ArrowRightIcon color="#00CCBB"/>
      </View>
      <Text className="text-xs text-gray-500 px-4">
{description}
      </Text>
      <ScrollView horizontal contentContainerStyle={{paddingHorizontal:15,}}
      showsHorizontalScrollIndicator={false}
      className="pt-4">
      <RestaurentCard 
      id={123}
    imgUrl="https://reactnative.dev/img/tiny_logo.png"
    title="Sushi"
    rating={4.5}
    genre="Japanese"
    address="123 main"
    short_description="Fugiat elit occaecat incididunt non minim anim ipsum cupidatat adipisicing veniam sunt ad."
    dishes="{[]}"
    long={20}
    lat={0}/>
    <RestaurentCard 
      id={123}
    imgUrl="https://reactnative.dev/img/tiny_logo.png"
    title="Sushi"
    rating={4.5}
    genre="Japanese"
    address="123 main"
    short_description="Fugiat elit occaecat incididunt non minim anim ipsum cupidatat adipisicing veniam sunt ad."
    dishes="{[]}"
    long={20}
    lat={0}/>
    <RestaurentCard 
      id={123}
    imgUrl="https://reactnative.dev/img/tiny_logo.png"
    title="Sushi"
    rating={4.5}
    genre="Japanese"
    address="123 main"
    short_description="Fugiat elit occaecat incididunt non minim anim ipsum cupidatat adipisicing veniam sunt ad."
    dishes="{[]}"
    long={20}
    lat={0}/>
      </ScrollView>

    </View>
  )
}

export default FeaturedRow