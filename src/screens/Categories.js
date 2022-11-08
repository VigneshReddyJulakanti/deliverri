import {ScrollView,  View, Text } from 'react-native'
import React from 'react'
import CategoryCard from'./CategoryCard'

export default function Categories() {
  return (
    <ScrollView contentContainerStyle={
        {
            paddingHorizontal:10,
            paddingTop:10
        }
    }
    horizontal
    showsHorizontalScrollIndicator={false}

      


    >

      <CategoryCard title="damdam 1" Imguri="https://www.pavaniskitchen.com/wp-content/uploads/2021/02/chbiryani.jpg"/>
      <CategoryCard title="boom 2" Imguri="https://www.pavaniskitchen.com/wp-content/uploads/2021/02/chbiryani.jpg"/>
      <CategoryCard title="boom 3" Imguri="https://www.pavaniskitchen.com/wp-content/uploads/2021/02/chbiryani.jpg"/>
      <CategoryCard title="boom 4" Imguri="https://www.pavaniskitchen.com/wp-content/uploads/2021/02/chbiryani.jpg"/>
      <CategoryCard title="boom 5" Imguri="https://www.pavaniskitchen.com/wp-content/uploads/2021/02/chbiryani.jpg"/>
      <CategoryCard title="boom 5" Imguri="https://www.pavaniskitchen.com/wp-content/uploads/2021/02/chbiryani.jpg"/>
      <CategoryCard title="boom 5" Imguri="https://www.pavaniskitchen.com/wp-content/uploads/2021/02/chbiryani.jpg"/>
      <CategoryCard title="boom 5" Imguri="https://www.pavaniskitchen.com/wp-content/uploads/2021/02/chbiryani.jpg"/>
      <CategoryCard title="boom 5" Imguri="https://www.pavaniskitchen.com/wp-content/uploads/2021/02/chbiryani.jpg"/>
      <CategoryCard title="boom 5" Imguri="https://www.pavaniskitchen.com/wp-content/uploads/2021/02/chbiryani.jpg"/>

      


     
    </ScrollView>
  )
}