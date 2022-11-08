import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'


export default function CategoryCard({title,Imguri}) {
  return (
    <TouchableOpacity className="mx-2 ">
        <Image source={{
            uri:Imguri
        }}
        
        className="w-20 h-20 rounded"></Image>
      <Text className=" absolute bottom-1 left-4 text-white font-bold text-5xs">{title}</Text>
    </TouchableOpacity>
  )
}