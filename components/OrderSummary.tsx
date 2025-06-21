import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Plus } from 'lucide-react-native';

interface OrderSummaryProps {
  grandTotal: number;
  onAddItem: () => void;
}

export default function OrderSummary({ grandTotal, onAddItem }: OrderSummaryProps) {
  const formatCurrency = (value: number) => {
    return `₱${value.toFixed(2)}`;
  };

  return (
    <View className="bg-white p-6 border-t border-gray-200">
      <View className="flex-row items-center justify-between mb-4">
        <TouchableOpacity
          onPress={onAddItem}
          className="flex-row items-center bg-blue-500 rounded-lg px-4 py-3"
        >
          <Plus size={20} color="white" />
          <Text className="text-white font-semibold text-base ml-2">Add Item</Text>
        </TouchableOpacity>
        
        <View className="bg-green-50 rounded-lg px-6 py-3 border border-green-200">
          <Text className="text-sm font-medium text-green-700 mb-1">Grand Total</Text>
          <Text className="text-2xl font-bold text-green-600">
            {formatCurrency(grandTotal)}
          </Text>
        </View>
      </View>
    </View>
  );
}