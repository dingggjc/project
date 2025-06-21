import React from 'react';
import { View, Text } from 'react-native';

export default function TableHeader() {
  return (
    <View className="flex-row items-center py-3 px-2 bg-gray-100 border-b-2 border-gray-200">
      {/* Number */}
      <View className="w-6 mr-1">
        <Text className="text-xs font-bold text-gray-700 text-center">#</Text>
      </View>

      {/* Item Name */}
      <View className="flex-1 mr-1 min-w-[80px]">
        <Text className="text-xs font-bold text-gray-700">Item Name</Text>
      </View>

      {/* Price - Aligned with price input */}
      <View className="w-16 mr-1">
        <Text className="text-xs font-bold text-gray-700 text-right">
          Price (₱)
        </Text>
      </View>

      {/* Quantity - Aligned with quantity input */}
      <View className="w-12 mr-1">
        <Text className="text-xs font-bold text-gray-700 text-center">
          Case
        </Text>
      </View>

      {/* Total - Aligned with total display */}
      <View className="w-20 mr-1">
        <Text className="text-xs font-bold text-gray-700 text-right">
          Total
        </Text>
      </View>

      {/* Delete */}
      <View className="w-6">
        <Text className="text-xs font-bold text-gray-700 text-center">Del</Text>
      </View>
    </View>
  );
}
