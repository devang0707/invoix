import { View,Text, Dimensions, TouchableWithoutFeedback, Image } from "react-native";
import React from "react";
import { img500 } from "../api/moviedb";

var {width , height} = Dimensions.get('window');

export default function InvoiceCard({item,handleClick}){
    return ( 
        <TouchableWithoutFeedback onPress={()=>handleClick(item)}>   
            <Image
                source={{uri: item.img}}
                style = {{width: width*0.6 , height: height*0.4}}
                className = 'rounded-3xl'
            />
        </TouchableWithoutFeedback>
    )
}