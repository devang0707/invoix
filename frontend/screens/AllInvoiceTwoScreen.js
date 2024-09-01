import React, { useEffect, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import axios from 'axios';
import FormatTwo from '../components/formatTwo';

const { width, height } = Dimensions.get('window');
const ios = Platform.OS === 'ios';
const topMargin = ios ? '' : 'mt-3';

export default function AllInvoiceTwoScreen() {
    const navigation = useNavigation();
    const [invoices, setInvoices] = useState([]); 

    useEffect(() => {
        const fetchInvoices = async () => {
            try {
                const res = await axios.get('http://192.168.1.3:8394/api/alts');
                setInvoices(res.data);  
            } catch (err) {
                console.error("Error fetching invoices:", err);
            }
        };

        fetchInvoices();
    }, []);  

    return (
        <ScrollView contentContainerStyle={{ paddingBottom: 20 }} className='flex-1 bg-neutral-900'>
            <SafeAreaView className='w-full mt-5'>
                <View className='flex-row items-center justify-between mx-4'>
                    <TouchableOpacity onPress={() => navigation.goBack()} className='bg-amber-500 rounded-xl p-1'>
                        <ChevronLeftIcon size={28} strokeWidth={2.5} color='white' />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>

            {invoices.length > 0 ? (
                invoices.map((invoice, index) => (
                    <FormatTwo key={index} invoiceData={invoice} />
                ))
            ) : (
                <Text className="text-white text-center">No Invoices Available</Text>
            )}
        </ScrollView>
    );
}
