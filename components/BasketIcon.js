import { View, Text, Touchable } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectBasketItems, selectBasketTotal } from '../feature/basketSlice'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native'
import { formatCurrency } from "react-native-format-currency";

const BasketIcon = () => {
 const items = useSelector(selectBasketItems)
 const navigation = useNavigation()
 const basketTotal = useSelector(selectBasketTotal) 
 const [valueFormattedWithSymbol] = formatCurrency({ amount: basketTotal, code: "BDT" })

 if(items.length===0) return null
  
  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity onPress={()=>navigation.navigate("Cart")} className="mx-5 bg-green-500 p-4 rounded-lg flex-row items-center space-x-1">
        <Text className="text-white font-extrabold text-lg bg-green-900 py-1 px-2">{items.length}</Text>
        <Text className="flex-1 text-white font-extrabold text-lg text-center">View Cart</Text>
        <Text className="text-lg text-white font-extrabold">{valueFormattedWithSymbol}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default BasketIcon