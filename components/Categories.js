import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView className="bg-gray pb-2.5"
    contentContainerStyle={{
        paddingHorizontal:15,
        paddingTop:10,}}
        horizontal
    showsHorizontalScrollIndicator={false}>
    
      {/*CategoryCard*/}
      <CategoryCard imgUrl="https://reactnative.dev/img/tiny_logo.png" title="Testing 1"/>
      <CategoryCard imgUrl="https://reactnative.dev/img/tiny_logo.png" title="Testing 2"/>
      <CategoryCard imgUrl="https://reactnative.dev/img/tiny_logo.png" title="Testing 3"/>
      <CategoryCard imgUrl="https://reactnative.dev/img/tiny_logo.png" title="Testing 4"/>
      <CategoryCard imgUrl="https://reactnative.dev/img/tiny_logo.png" title="Testing 5"/>
      <CategoryCard imgUrl="https://reactnative.dev/img/tiny_logo.png" title="Testing 6"/>
    </ScrollView>
  )
}

export default Categories