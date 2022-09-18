import {  View, Text,Image, TouchableOpacity, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, {useState,useEffect,useMemo} from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { selectRestaurant } from '../feature/restaurantSlice'
import { selectBasketItems, removeFromBasket } from '../feature/basketSlice'
import SafeViewAndroid from "../components/SafeViewAndroid";
import { XCircleIcon } from 'react-native-heroicons/solid'
import { urlFor } from "../sanity";

const BasketScreen = () => {
    const navigation = useNavigation()
    const restaurant = useSelector(selectRestaurant)
    const items = useSelector(selectBasketItems)
    const dispatch = useDispatch()
    const [groupedItemsInBasket,setGroupedItemsInBasket] = useState([])

    useMemo(() => {
     const groupedItems = items.reduce((results, item) => {
        (results[item.id] = results[item.id] || []).push(item)
        return results
     },{})
     
     setGroupedItemsInBasket(groupedItems)
     console.log(groupedItemsInBasket)
    },[items])
    
    console.log(groupedItemsInBasket)
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
    
     <View className="p-5  bg-white shadow-xs">
        <View>
            <Text className="text-lg font-bold text-center">Cart</Text>
            <Text className="text-center text-gray-400">{restaurant.title}</Text>
        </View>
        <TouchableOpacity onPress={navigation.goBack} className="rounded-full bg-gray-100 absolute top-3 right-5">
        <XCircleIcon color="#00CCBB" height={50} width={50}/>
        </TouchableOpacity>
     </View>
     <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
        <Image source={{
            uri:"https://reactnative.dev/img/tiny_logo.png"
            
        }}
        className="h-7 w-7 bg-gray-300 p-4 rounded-full"/>
        <Text className="flex-1">Deliver in 50-75 minutes</Text>
        <TouchableOpacity><Text className="text-green-400">Change</Text></TouchableOpacity>
     </View>
     <ScrollView className="divide-y divide-gray-200">
        {Object.entries(groupedItemsInBasket).map(([key,items]) => (
        <View key={key} className="flex-row items-center space-x-3  bg-white py-2 px-5">
            <Text className="text-green-400">
                {items.length} x
            </Text>
            <Image 
           source={{uri: urlFor(items[0]?.image).url(),}}
           className="h-12 w-12 rounded-full"
           />
            <Text className="flex-1">{items[0]?.name}</Text>
            <Text className="text-gray-600">{items[0]?.price}</Text>
            <TouchableOpacity>
                <Text className="text-green-400 text-xs" onPress={()=>dispatch(removeFromBasket({id:key}))}>Remove</Text>
            </TouchableOpacity>
        </View>
    ))}
     </ScrollView>
     <View className="p-5 bg-white mt-5 space-y-4">
        <View className="flex-row justify-between">
            <Text className="text-gray-400">Subtoal</Text>
            <Text className="text-gray-400"></Text>
        </View>
        <View className="flex-row justify-between">
            <Text className="text-gray-400">Delivery Fee</Text>
            <Text className="text-gray-400"></Text>
        </View>
        <View className="flex-row justify-between">
            <Text className="text-gray-400">Order Total</Text>
            <Text className="text-gray-400"></Text>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate("PreparingOrder")} className="rounded-lg bg-green-400 p-4">
            <Text className="text-center text-white text-lg font-bold">Place Order</Text>
        </TouchableOpacity>
     </View>
    
        </SafeAreaView>
  )
}

export default BasketScreen