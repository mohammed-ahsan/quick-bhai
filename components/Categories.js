import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard'
import sanityClient, { urlFor } from "../sanity"

const Categories = () => {
  const [Categories,setCategories] = useState([])

  useEffect(()=>{
    sanityClient.fetch(`*[_type == "category"]`).then(data => {setCategories(data)})
  },[])
  console.log(Categories)
  return (
    <ScrollView className="bg-gray pb-2.5"
    contentContainerStyle={{
        paddingHorizontal:15,
        paddingTop:10,}}
        horizontal
    showsHorizontalScrollIndicator={false}>
    
      {/*CategoryCard*/}
      {Categories.map((category)=>(<CategoryCard key={category._id} imgUrl={urlFor(category.image).width(200).url()} title={category.name}/>))}
      
    </ScrollView>
  )
}

export default Categories