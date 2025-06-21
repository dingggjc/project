import React from 'react';
import { View, Text } from 'react-native';
import { Calculator } from 'lucide-react-native';

export default function CalculatorHeader() {
  return (
    <View className="bg-white pb-6 pt-6 px-6 border-b border-gray-200">
      <View className="flex-row items-center mb-2">
        <Calculator size={28} className="text-blue-500" />
        <Text className="text-2xl font-bold text-gray-800 ml-3">
          Love Joy Grace
        </Text>
      </View>
      <Text className="text-base text-gray-500 ml-11">
        Gamita ni og dika kahibaw mo math
      </Text>
    </View>
  );
}
