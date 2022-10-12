import { View, Text } from 'react-native'
import React from 'react'
import SafeViewAndroid from "../components/SafeViewAndroid";
import * as Animatable from "react-native-animatable"
import * as Progress from "react-native-progress"
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'
const PreparingOrderScreen = () => {
  const navigation = useNavigation()
  useEffect(()=>{setTimeout(()=>{navigation.navigate("Delivery")},15000)
},[])
  return (
    <SafeAreaView className="bg-green-400" >
        <View className="h-full  justify-center items-center">
        <Animatable.Image
        animation="slideInUp"
        iterationCount={1}
        className="h-96 w-96"/>
        <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-lg my-10 text-white font-bold text-center">
            Waiting for Restaurant to accept order!
        </Animatable.Text>
        <Progress.Circle size={60} indeterminate={true} color="white"/>

        </View>
      
    </SafeAreaView>
  )
}

export default PreparingOrderScreen