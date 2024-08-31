import axios from 'axios' 
import React, { useRef, useState, useEffect } from 'react' 
import { Platform, ScrollView, Text, TextInput, TouchableOpacity, View, Dimensions } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native' 
import { ChevronLeftIcon } from "react-native-heroicons/outline" 
import {styles} from '../styles'


var {width , height} = Dimensions.get('window') 
const ios = Platform.OS == 'ios'  
const topMargin = ios ? '' : 'mt-3' 

export default function AllInvoiceScreen(){

    const navigation = useNavigation();

    return ( 
        
        
        <ScrollView contentContainerStyle={{paddingBottom:20}} className='flex-1 bg-neutral-900'>
            

                <SafeAreaView className = 'w-full mt-5'>

                    <View className = 'flex-row items-center justify-between mx-4'>
                        <TouchableOpacity onPress={() => navigation.goBack()} className='bg-amber-500 rounded-xl p-1'>
                            <ChevronLeftIcon size='28' strokeWidth={2.5} color= 'white' />
                        </TouchableOpacity>
                    </View>

                </SafeAreaView>
    
            
                
                <View className = 'flex gap-[40px]  my-[80px] mx-[10px]'>
                    <Text className = 'text-[40px] font-bold items-center text-amber-500'>Sign In</Text>

                    <TouchableOpacity onPress={() => navigation.navigate('Register', {setCurrentUser: setCurrentUser})}>
                        <Text className = 'text-[10px] underline text-white'>Don't have an Account?  Click Here</Text>
                    </TouchableOpacity>

            
                </View>
                    

        </ScrollView>

    )
}