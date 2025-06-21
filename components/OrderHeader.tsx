import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { CreditCard as Edit3 } from 'lucide-react-native';

interface OrderHeaderProps {
  title: string;
  quantity: string;
  onTitleChange: (title: string) => void;
  onQuantityChange: (quantity: string) => void;
}

export default function OrderHeader({
  title,
  quantity,
  onTitleChange,
  onQuantityChange,
}: OrderHeaderProps) {
  return (
    <View className="bg-white p-6 border-b border-gray-200">
      <View className="flex-row items-center justify-between">
        <View className="flex-1">
          <Text className="text-lg font-semibold text-gray-700 mb-2">
            Order Title
          </Text>
          <View className="flex-row items-center bg-gray-50 rounded-lg px-3 py-2">
            <TextInput
              value={title}
              onChangeText={onTitleChange}
              placeholder="Enter order title"
              className="flex-1 text-xl font-bold text-gray-900"
              style={styles.input}
            />
            <Edit3 size={20} color="#6B7280" />
          </View>
        </View>
        <View className="ml-4">
          <Text className="text-lg font-semibold text-gray-700 mb-2">
            Quantity
          </Text>
          <View className="bg-blue-50 rounded-lg px-3 py-2 min-w-[80px]">
            <TextInput
              value={quantity}
              onChangeText={onQuantityChange}
              placeholder="12"
              keyboardType="numeric"
              className="text-xl font-bold text-blue-600 text-center"
              style={styles.input}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    outline: 'none',
  },
});
