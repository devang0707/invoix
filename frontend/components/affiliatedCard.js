import { View,Text, Dimensions, TouchableWithoutFeedback, Image } from "react-native";
import React from "react";

var {width , height} = Dimensions.get('window');

export default function AffiliatedCard({item}){
    //console.log('itemPosterPath', item.poster_path)
    return ( 
        <TouchableWithoutFeedback>   
            <Image
                //source = {require('../assets/favicon.png')} 
                source={{uri: item.img}}
                style = {{width: width*0.4 , height: height*0.2}}
                className = 'rounded-3xl'
            />
        </TouchableWithoutFeedback>
    )
}