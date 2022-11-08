import { View, Text, ScrollView} from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight'
import RestaurantCard from './RestaurantCard'

const FeaturedCatagory = ({id,title,description}) => {
  return (
    <View className="my-2 ">
      <View className="mx-3">
      <View className="flex-row mt-2">
        <Text className="flex-1 ">{title}</Text>
        <FontAwesomeIcon icon={faArrowRight} color={"blue"} size={23}/>
      </View>
      <Text className="text-xs text-gray-500 ">{description}</Text>
      </View>
      <ScrollView horizontal contentContainerStyle={{paddingHorizontal:15}}
      showsHorizontalScrollIndicator={false}>

        <RestaurantCard 
        id={1}
        imgUrl="https://www.pavaniskitchen.com/wp-content/uploads/2021/02/chbiryani.jpg"
        title="Mehfill"
        rating={4.5}
        genre="biryani"
        address="Narayanguda"
        short_description="masth"
        dishes={[]}
        long={0}
        lat={0}
        />

<RestaurantCard 
        id={1}
        imgUrl="https://www.pavaniskitchen.com/wp-content/uploads/2021/02/chbiryani.jpg"
        title="Mehfill"
        rating={4.5}
        genre="biryani"
        address="Narayanguda"
        short_description="masth"
        dishes={[]}
        long={0}
        lat={0}
        />

<RestaurantCard 
        id={1}
        imgUrl="https://www.pavaniskitchen.com/wp-content/uploads/2021/02/chbiryani.jpg"
        title="Mehfill"
        rating={4.5}
        genre="biryani"
        address="Narayanguda"
        short_description="masth"
        dishes={[]}
        long={0}
        lat={0}
        />

<RestaurantCard 
        id={1}
        imgUrl="https://www.pavaniskitchen.com/wp-content/uploads/2021/02/chbiryani.jpg"
        title="Mehfill"
        rating={4.5}
        genre="biryani"
        address="Narayanguda"
        short_description="masth"
        dishes={[]}
        long={0}
        lat={0}
        />
       
      </ScrollView>
    </View> 
  )
}

export default FeaturedCatagory