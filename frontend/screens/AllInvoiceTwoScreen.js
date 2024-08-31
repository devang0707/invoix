import React from 'react';
import { ScrollView, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import FormatTwo from '../components/formatTwo'

const { width, height } = Dimensions.get('window');
const ios = Platform.OS === 'ios';
const topMargin = ios ? '' : 'mt-3';

export default function AllInvoiceTwoScreen() {
    const navigation = useNavigation();

    const invoiceData1 = {
        invoiceNumber: '001',
        setDate: '01-09-2021',
        dueDate: '01-12-2021',
        phone: '+918399961277',
        billTo: {
            name: 'Antony',
            address: 'Goat Street',
            cityStateZip: 'Sao Paulo',
        },
        billFrom: {
            name: 'Mudryk',
            address: 'Disciple Street',
            cityStateZip: 'Kiev',
        },
        items: [
            {
                description: 'Ballon D"Or',
                quantity: 10,
                unitPrice: 90.00,
            },
            {
                description: 'POTM',
                quantity: 8,
                unitPrice: 80.00,
            },
            {
                description: 'UCL',
                quantity: 9,
                unitPrice: 90.00,
            },
        ],
        taxPercentage: 5, 
    };
    const invoiceData2 = {
        invoiceNumber: '002',
        setDate: '11-07-2023',
        dueDate: '17-08-2023',
        phone: '+919379878848',
        billTo: {
            name: 'Cristiano Ronaldo',
            address: 'North Street',
            cityStateZip: 'Lisbon',
        },
        billFrom: {
            name: 'Lionel Messi',
            address: 'Miami',
            cityStateZip: 'Florida',
        },
        items: [
            {
                description: 'Jersey',
                quantity: 1,
                unitPrice: 700.00,
            },
            {
                description: 'Cleats',
                quantity: 1,
                unitPrice: 100.00,
            },
            {
                description: 'Ball',
                quantity: 2,
                unitPrice: 10.00,
            },
        ],
        taxPercentage: 15, 
    };
    const invoiceData3 = {
        invoiceNumber: '003',
        setDate: '03-05-2024',
        dueDate: '12-11-2024',
        phone: '+919876543210',
        billTo: {
            name: 'Haaland',
            address: 'South Street',
            cityStateZip: 'Leeds',
        },
        billFrom: {
            name: 'Cucurella',
            address: 'Linda Street',
            cityStateZip: 'Mallorca',
        },
        items: [
            {
                description: 'Song',
                quantity: 1,
                unitPrice: 600.00,
            },
            {
                description: 'Paella',
                quantity: 3,
                unitPrice: 20.00,
            },
            {
                description: 'Goal',
                quantity: 1,
                unitPrice: 400.00,
            },
        ],
        taxPercentage: 8, 
    };
    


    return (
        <ScrollView contentContainerStyle={{ paddingBottom: 20 }} className='flex-1 bg-neutral-900'>

            <SafeAreaView className='w-full mt-5'>
                <View className='flex-row items-center justify-between mx-4'>
                    <TouchableOpacity onPress={() => navigation.goBack()} className='bg-amber-500 rounded-xl p-1'>
                        <ChevronLeftIcon size={28} strokeWidth={2.5} color='white' />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>

            <FormatTwo invoiceData = {invoiceData1} />
            <FormatTwo invoiceData = {invoiceData2} />
            <FormatTwo invoiceData = {invoiceData3} />

            
        </ScrollView>
    );
}
