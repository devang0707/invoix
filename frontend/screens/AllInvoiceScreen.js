import React from 'react';
import { ScrollView, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import FormatOne from '../components/formatOne'

const { width, height } = Dimensions.get('window');
const ios = Platform.OS === 'ios';
const topMargin = ios ? '' : 'mt-3';

export default function AllInvoiceScreen() {
    const navigation = useNavigation();

    const invoiceData1 = {
        invoiceNumber: '001',
        setDate: '01-09-2024',
        dueDate: '15-09-2024',
        phone: '+919876543210',
        billTo: {
            name: 'CJ',
            address: 'Grove Street',
            cityStateZip: 'San Andreas',
        },
        items: [
            {
                description: 'Vodoo',
                quantity: 1,
                unitPrice: 500.00,
            },
            {
                description: 'Jetpack',
                quantity: 3,
                unitPrice: 50.00,
            },
            {
                description: 'Healthkit',
                quantity: 1,
                unitPrice: 10.00,
            },
        ],
        taxPercentage: 30, 
    };
    const invoiceData2 = {
        invoiceNumber: '002',
        setDate: '31-10-2023',
        dueDate: '18-08-2024',
        phone: '+917898754287',
        billTo: {
            name: 'Big Smoke',
            address: '123 Main Street',
            cityStateZip: 'New York, NY 10001',
        },
        items: [
            {
                description: 'Number 9 Large',
                quantity: 2,
                unitPrice: 200.00,
            },
            {
                description: 'Number 6',
                quantity: 1,
                unitPrice: 50.00,
            },
            {
                description: 'Extra Dip',
                quantity: 2,
                unitPrice: 30.00,
            },
        ],
        taxPercentage: 12, 
    };
    const invoiceData3 = {
        invoiceNumber: '003',
        setDate: '18-09-2022',
        dueDate: '15-11-2022',
        phone: '+919787845232',
        billTo: {
            name: 'Tony Vercetti',
            address: 'Vice city',
            cityStateZip: 'Miami, FL',
        },
        items: [
            {
                description: 'Panzer',
                quantity: 2,
                unitPrice: 70.00,
            },
            {
                description: 'RC Van',
                quantity: 3,
                unitPrice: 80.00,
            },
            {
                description: 'Caddy',
                quantity: 5,
                unitPrice: 60.00,
            },
        ],
        taxPercentage: 20,
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

            <FormatOne invoiceData = {invoiceData1} />
            <FormatOne invoiceData = {invoiceData2} />
            <FormatOne invoiceData = {invoiceData3} />

            
        </ScrollView>
    );
}
