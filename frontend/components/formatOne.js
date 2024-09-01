import React from 'react';
import { ScrollView, Text, View } from 'react-native';

export default function FormatOne({ invoiceData }) {
    // Calculations
    const subtotal = invoiceData.items.reduce((sum, item) => sum + (item.quantity * item.unitPrice), 0);
    const taxAmount = (subtotal * invoiceData.taxPercentage) / 100;
    const total = subtotal + taxAmount;

    return (
        <ScrollView className="max-w-3xl text-white mx-auto my-8 border border-gray-300 p-5">
            {/* Invoice Header */}
            <View className="text-center mb-6">
                <Text className="text-2xl text-amber-500 font-bold">INVOICE</Text>
            </View>

            {/* Invoice Info */}
            <View className="mb-6">
                <View className="my-2 flex-row items-center">
                    <Text className="font-semibold text-white w-32">Invoice #:</Text>
                    <Text className="text-white">{invoiceData.invoiceNumber}</Text>
                </View>
                <View className="my-2 flex-row items-center">
                    <Text className="font-semibold text-white w-32">Set Date:</Text>
                    <Text className="text-white">{invoiceData.setDate}</Text>
                </View>
                <View className="my-2 flex-row items-center">
                    <Text className="font-semibold text-white w-32">Due Date:</Text>
                    <Text className="text-white">{invoiceData.dueDate}</Text>
                </View>
                <View className="my-2 flex-row items-center">
                    <Text className="font-semibold text-white w-32">Phone:</Text>
                    <Text className="text-white">{invoiceData.phone}</Text>
                </View>
            </View>

            {/* Bill To */}
            <View className="mb-6">
                <Text className="text-lg text-amber-500 font-semibold mb-2">Bill To:</Text>
                <Text className="text-white mb-1">{invoiceData.billTo.name}</Text>
                <Text className="text-white mb-1">{invoiceData.billTo.address}</Text>
                <Text className="text-white">{invoiceData.billTo.cityStateZip}</Text>
            </View>

            {/* Table */}
            <View className="mt-4 border-collapse">
                {/* Header Row */}
                <View className="flex-row bg-gray-200">
                    <Text className="border border-gray-300 p-2 w-[20vw] text-[12px] text-center font-bold">Description</Text>
                    <Text className="border border-gray-300 p-2 w-[20vw] text-[12px] text-center font-bold">Quantity</Text>
                    <Text className="border border-gray-300 p-2 w-[20vw] text-[12px] text-center font-bold">Unit Price</Text>
                    <Text className="border border-gray-300 p-2 w-[20vw] text-[12px] text-center font-bold">Amount</Text>
                </View>

                {/* Table Rows */}
                {invoiceData.items.map((item, index) => (
                    <View key={index} className="flex-row">
                        <Text className="border border-gray-300 p-2 w-[20vw] text-center text-white">{item.description}</Text>
                        <Text className="border border-gray-300 p-2 w-[20vw] text-center text-white">{item.quantity}</Text>
                        <Text className="border border-gray-300 p-2 w-[20vw] text-center text-white"> {item.unitPrice.toFixed(2)}</Text>
                        <Text className="border border-gray-300 p-2 w-[20vw] text-center text-white"> {(item.quantity * item.unitPrice).toFixed(2)}</Text>
                    </View>
                ))}

                {/* Subtotal */}
                <View className="flex-row mt-4">
                    <Text className="border border-gray-300 p-2 flex-1 font-semibold text-white pr-4">Subtotal</Text>
                    <Text className="border border-gray-300 p-2 w-32 text-right text-white"> {subtotal.toFixed(2)}</Text>
                </View>
                {/* Tax */}
                <View className="flex-row">
                    <Text className="border border-gray-300 p-2 flex-1 font-semibold text-white pr-4">Tax ({invoiceData.taxPercentage}%)</Text>
                    <Text className="border border-gray-300 p-2 w-32 text-right text-white"> {taxAmount.toFixed(2)}</Text>
                </View>
                {/* Total */}
                <View className="flex-row">
                    <Text className="border border-gray-300 p-2 flex-1 font-semibold text-white pr-4">Total</Text>
                    <Text className="border border-gray-300 p-2 w-32 text-right text-white"> {total.toFixed(2)}</Text>
                </View>
            </View>
        </ScrollView>
    );
}
