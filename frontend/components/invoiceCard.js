import { View,Text, Dimensions, TouchableWithoutFeedback, Image } from "react-native";
import React from "react";
import { img500 } from "../api/moviedb";
import { useNavigation } from '@react-navigation/native' 



var {width , height} = Dimensions.get('window');

export default function InvoiceCard({item}){


    const navigation = useNavigation() 


    return ( 
        <TouchableWithoutFeedback onPress = {()=>navigation.navigate(`${item.title}`)}>   
            <Image
                source={{uri: item.img}}
                style = {{width: width*0.6 , height: height*0.4}}
                className = 'rounded-3xl'
            />
        </TouchableWithoutFeedback>
    )
}