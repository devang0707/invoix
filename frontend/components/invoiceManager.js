import { View,Text, TouchableWithoutFeedback, Dimensions , Image } from "react-native";
import React from "react";
import Carousel from "react-native-snap-carousel";
import { useNavigation } from "@react-navigation/native";
import InvoiceCard from "./invoiceCard";


const data= [
    {
        id: 1, 
        title: "AddInvoice",
        img: "https://static.vecteezy.com/system/resources/previews/023/465/796/original/add-button-dark-mode-glyph-ui-icon-increase-volume-menu-command-user-interface-design-white-silhouette-symbol-on-black-space-solid-pictogram-for-web-mobile-isolated-illustration-vector.jpg"
    },
    {
        id: 2, 
        title: "AllInvoice",
        img: "https://cdn.pixabay.com/photo/2018/05/08/21/29/paypal-3384015_1280.png"
    },
]

var {width , height} = Dimensions.get('window');  

export default function InvoiceManager({trendingData}){

    const navigation = useNavigation();
    const handleClick = (item) => {
        navigation.navigate('Movie',item)   
    }

    return ( 
        <View className = 'mb-7 mt-7'>

            <Text className = 'text-amber-500 text-xl mx-4 mb-5'>INVOICE MANAGER</Text>

            <Carousel
                data={data}
                renderItem = {({item}) => <InvoiceCard item={item} />}  
                firstItem = {1}
                inactiveSlideOpacity = {0.60}
                sliderWidth = {width}
                itemWidth = {width*0.60} 
                slideStyle = {{display:'flex',alignItems:'center'}}
                />

        </View>
    )
}


