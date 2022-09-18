import { View, Text, ScrollView } from 'react-native'
import React, { useEffect,useState } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'
import sanityClient from "../sanity";

const FeaturedRow = ({id,title,description}) => {
const [restaurants,setRestaurants] = useState([])

useEffect(()=>{
  sanityClient.fetch(`*[_type=="featured" && _id==$id]
  {...,restaurant[]->
    {...,dishes[]->,
    type->{name}
  },
}[0]`,
{id}
)
.then((data)=>{setRestaurants(data?.restaurant)})
},[])
console.log(restaurants)

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


      {restaurants?.map(restaurants => (<RestaurantCard
      key={restaurants._id} 
      id={restaurants._id}
    imgUrl={restaurants.image}
    title={restaurants.name}
    rating={restaurants.rating}
    genre={restaurants.type?.name}
    address={restaurants.address}
    short_description={restaurants.short_description}
    dishes={restaurants.dishes}
    long={restaurants.long}
    lat={restaurants.lat}/>))}
    
      </ScrollView>

    </View>
  )
}

export default FeaturedRow