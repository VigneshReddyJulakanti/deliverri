import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot'
const RestaurantCard = ({
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat
}) => {
  return (
    <TouchableOpacity className="pt-2 mr-3">
      
        <Image source={{uri:imgUrl}} className="w-64 h-36 "></Image>
        <Text className="font-bold text-lg mt-1">{title}</Text>
    <View className="mt-2 flex-row space-x-2">
        
    <FontAwesomeIcon icon={faStar} color={"green"} size={17}/>
        <Text><Text className="text-green-500 mr-3">{rating}</Text> . {genre}</Text>
    </View>
    <View className="mt-2 flex-row space-x-2">

    <FontAwesomeIcon icon={faLocationDot} color={"blue"} size={17}/>
    <Text>Near by . {address}</Text>
    </View>

    
    </TouchableOpacity>
  )
}

export default RestaurantCard