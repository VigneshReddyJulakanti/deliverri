import { View, Text, SafeAreaView,Image, TextInput, ScrollView } from 'react-native'
import React  ,{useLayoutEffect}from 'react'
import { useNavigation } from '@react-navigation/native'
import SafeViewAndroid from '../SafeViewAndroid';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown'
import { faUser } from '@fortawesome/free-regular-svg-icons/faUser'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass'
import { faSliders } from '@fortawesome/free-solid-svg-icons/faSliders'
import Categories from './Categories';
import FeaturedCatagory from './FeaturedCatagory';
export default function Homescreen() {
const navigation=useNavigation();
  useLayoutEffect(() => {
   navigation.setOptions({
    headerShown:false,
   })
  }, [])
  return (
    <View >
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea} />
      <View className="mb-3 pb-3">


      {/* header */}
      
      <View className="flex-row space-x-2 items-center bg-white p-2">
          <Image
            source={
          {
            uri:"https://www.pavaniskitchen.com/wp-content/uploads/2021/02/chbiryani.jpg",
          }
        }
        className="h-7 w-7 bg-gray-700 p-4 rounded-full"  />

          
          
            <View className="flex-1">
            <Text className="font-bold text-gray-300 text-xs">Deliver now!
                

            </Text>
            <Text className="font-bold text-xl">Current Location
            <FontAwesomeIcon className="mx-2" icon={ faChevronDown } color={"blue"}/>
            </Text>
            </View>
            <FontAwesomeIcon icon={faUser} color={"blue"} size={23}/>
            
            
         
          </View>



          {/* search */}
          <View className="mx-2">
          <View className="flex-row items-center space-x-2 mx-2">
            
            <Text className="flex-1 bg-gray-200 p-1 py-2 space-x-2">
            <FontAwesomeIcon icon={faMagnifyingGlass} color={"blue"} size={23}/>
            <View className="flex-1 space-x-2">
            <TextInput placeholder='Restaurants and Cuisines' keyboardType='default' className="mx-2"/>
            </View>
            </Text>
          <FontAwesomeIcon icon={faSliders} color={"blue"} size={23} />

          </View>

          </View>
          
          {/* scrollview */}
          <ScrollView>

            {/* categories */}
            <Categories/>

            {/* feautured rows */}
            <FeaturedCatagory id="123" title="apples are one" description="apple a day keeps away"/>
            <FeaturedCatagory id="123" title="apples are one" description="apple a day keeps boom"/>
            <FeaturedCatagory  id="124" title="apples are one" description="apple a day keeps away"/>
            <FeaturedCatagory  id="125" title="apples are two" description="apple a day keeps away"/>
          </ScrollView>
          
          
     
         
    
          </View>
          
          </View>
  )
} 