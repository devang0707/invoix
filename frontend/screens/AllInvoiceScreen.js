import axios from 'axios';
import React, { useRef, useState, useEffect } from 'react';
import { Platform, ScrollView, Text, TextInput, TouchableOpacity, View, Dimensions, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { styles } from '../styles';

var { width, height } = Dimensions.get('window');
const ios = Platform.OS == 'ios';
const topMargin = ios ? '' : 'mt-3';

export default function AllInvoiceScreen() {
    const navigation = useNavigation();

    // State declarations
    const [rows, setRows] = useState([{ description: '', quantity: 0, unitPrice: 0, amount: 0 }]);
    const [tax, setTax] = useState(0);
    const [subtotal, setSubtotal] = useState(0);
    const [total, setTotal] = useState(0);

    const handleAddRow = () => {
        setRows([...rows, { description: '', quantity: 0, unitPrice: 0, amount: 0 }]);
    };

    const handleDeleteRow = (index) => {
        const newRows = rows.filter((_, i) => i !== index);
        setRows(newRows);
        calculateSubtotal(newRows);
    };

    const handleRowChange = (index, field, value) => {
        const newRows = [...rows];
        
        // Ensure numeric inputs are valid numbers
        const numericValue = parseFloat(value);
        newRows[index][field] = isNaN(numericValue) ? 0 : numericValue;

        if (field === 'quantity' || field === 'unitPrice') {
            newRows[index].amount = newRows[index].quantity * newRows[index].unitPrice;
        }

        setRows(newRows);
        calculateSubtotal(newRows);
    };

    const calculateSubtotal = (newRows) => {
        const newSubtotal = newRows.reduce((sum, row) => sum + (row.amount || 0), 0);
        setSubtotal(newSubtotal);
        setTotal(newSubtotal + (newSubtotal * (parseFloat(tax) / 100)));
    };

    const handleTaxChange = (value) => {
        const taxValue = parseFloat(value);
        setTax(isNaN(taxValue) ? 0 : taxValue);
        setTotal(subtotal + (subtotal * (isNaN(taxValue) ? 0 : taxValue) / 100));
    };

    return (
        <ScrollView contentContainerStyle={{ paddingBottom: 20 }} className='flex-1 bg-neutral-900'>

            <SafeAreaView className='w-full mt-5'>
                <View className='flex-row items-center justify-between mx-4'>
                    <TouchableOpacity onPress={() => navigation.goBack()} className='bg-amber-500 rounded-xl p-1'>
                        <ChevronLeftIcon size='28' strokeWidth={2.5} color='white' />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>

            <ScrollView className="max-w-3xl text-white mx-auto my-[30px] border border-gray-300 p-5">
                {/* Invoice Header */}
                <View className="text-center mb-6">
                    <Text className="text-2xl text-amber-500 font-bold">INVOICE</Text>
                </View>

                {/* Invoice Info */}
                <View className="flex justify-between mb-6">
                    <View>
                        <View className="my-2 flex-row items-center">
                            <Text className="font-semibold text-white">Invoice #:</Text>
                            <TextInput placeholder="001" className="ml-2 p-2 border border-gray-300 rounded w-20 bg-white" />
                        </View>
                        <View className="my-2 flex-row items-center">
                            <Text className="font-semibold text-white">Set Date:</Text>
                            <TextInput placeholder="DD-MM-YYYY" className="ml-2 p-2 border border-gray-300 rounded bg-white" />
                        </View>
                        <View className="my-2 flex-row items-center">
                            <Text className="font-semibold text-white">Due Date:</Text>
                            <TextInput placeholder="DD-MM-YYYY" className="ml-2 p-2 border border-gray-300 rounded bg-white" />
                        </View>
                        <View className="my-2 flex-row items-center">
                            <Text className="font-semibold text-white">Phone:</Text>
                            <TextInput placeholder="+91XXXXXXXXX" className="ml-2 p-2 border border-gray-300 rounded bg-white" />
                        </View>
                    </View>
                </View>
                <View>
                    <Text className="text-lg text-amber-500 font-semibold">Bill To:</Text>
                    <TextInput placeholder="Name" className="w-[80vw] my-2 p-2 border border-gray-300 rounded bg-white" />
                    <TextInput placeholder="Street Address" className="w-[80vw] my-2 p-2 border border-gray-300 rounded bg-white" />
                    <TextInput placeholder="City, State, ZIP" className="w-[80vw] my-2 p-2 border border-gray-300 rounded bg-white" />
                </View>

                <View>
                    <Text className="text-lg text-amber-500 font-semibold">Bill From:</Text>
                    <TextInput placeholder="Name" className="w-[80vw] my-2 p-2 border border-gray-300 rounded bg-white" />
                    <TextInput placeholder="Street Address" className="w-[80vw] my-2 p-2 border border-gray-300 rounded bg-white" />
                    <TextInput placeholder="City, State, ZIP" className="w-[80vw] my-2 p-2 border border-gray-300 rounded bg-white" />
                </View>

                {/* Table */}
                <View className="w-[90vw] mt-[50px] border-collapse">
                    {/* Header Row */}
                    <View className="flex-row bg-gray-200">
                        <Text className="border border-gray-300 p-2 w-[20vw] text-[10px] text-center font-bold">Description</Text>
                        <Text className="border border-gray-300 p-2 w-[20vw] text-[10px] text-center font-bold">Quantity</Text>
                        <Text className="border border-gray-300 p-2 w-[20vw] text-[10px] text-center font-bold">Unit Price</Text>
                        <Text className="border border-gray-300 p-2 w-[20vw] text-[10px] text-center font-bold">Amount</Text>
                        <Text className="border border-gray-300 p-2 w-[10vw] text-[10px] text-center font-bold"></Text>
                    </View>

                    {/* Table Rows */}
                    {rows.map((row, index) => (
                        <View key={index} className="flex-row">
                            <TextInput
                                placeholder="Desc"
                                value={row.description}
                                onChangeText={(text) => handleRowChange(index, 'description', text)}
                                className="border border-gray-300 p-2 bg-white w-[20vw] text-center"
                            />
                            <TextInput
                                placeholder="0"
                                value={String(row.quantity)}
                                onChangeText={(text) => handleRowChange(index, 'quantity', parseFloat(text))}
                                keyboardType="numeric"
                                className="border border-gray-300 p-2 w-[20vw] text-center bg-white"
                            />
                            <TextInput
                                placeholder="0.00"
                                value={String(row.unitPrice)}
                                onChangeText={(text) => handleRowChange(index, 'unitPrice', parseFloat(text))}
                                keyboardType="numeric"
                                className="border border-gray-300 p-2 w-[20vw] text-center bg-white"
                            />
                            <Text className="border border-gray-300 p-2 w-[20vw] text-center bg-white">{row.amount.toFixed(2)}</Text>
                            <TouchableOpacity onPress={() => handleDeleteRow(index)} className='w-[10vw] bg-red-500 p-3'>
                                <Text className="text-white text-center font-bold">X</Text>
                            </TouchableOpacity>
                        </View>
                    ))}

                    {/* Add Row Button */}
                    <View className="my-4 w-[90vw]">
                        <TouchableOpacity onPress={handleAddRow} className='bg-amber-500 p-3 rounded'>
                            <Text className="text-black font-bold text-center font-bold">Add Row</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Subtotal */}
                    <View className="flex-row w-[90vw]">
                        <Text className="border border-gray-300 p-2 flex-1 font-semibold text-white">Subtotal</Text>
                        <Text className="border border-gray-300 p-2 w-28 text-right text-white">{subtotal.toFixed(2)}</Text>
                    </View>
                    {/* Tax */}
                    <View className="flex-row w-[90vw]">
                        <Text className="border border-gray-300 p-2 flex-1 font-semibold text-white">Tax (%)</Text>
                        <TextInput
                            placeholder="0"
                            value={String(tax)}
                            onChangeText={handleTaxChange}
                            keyboardType="numeric"
                            className="border border-gray-300 p-2 w-28 text-right text-white"
                        />
                    </View>
                    {/* Total */}
                    <View className="flex-row w-[90vw]">
                        <Text className="border border-gray-300 p-2 flex-1 font-semibold text-white">Total</Text>
                        <Text className="border border-gray-300 p-2 w-28 text-right text-white">{total.toFixed(2)}</Text>
                    </View>

                </View>

            </ScrollView>

        </ScrollView>
    );
}
