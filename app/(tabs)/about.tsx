import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Calculator, Heart } from 'lucide-react-native';

export default function About() {
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="bg-white py-5 px-6 border-b border-gray-200">
        <View className="flex-row items-center">
          <Calculator size={28} className="text-blue-500" />
          <Text className="text-2xl font-bold text-gray-800 ml-3">About</Text>
        </View>
      </View>

      {/* Content */}
      <ScrollView className="flex-1 px-4" showsVerticalScrollIndicator={false}>
        <View className="bg-white rounded-xl py-8 px-6 my-6 shadow-md shadow-black/10 items-center">
          {/* Icon */}
          <View className="w-20 h-20 rounded-full bg-blue-50 justify-center items-center mb-6 overflow-hidden">
            <Image
              source={require('../../assets/images/dingdong.jpg')}
              className="w-16 h-16 rounded-full"
              resizeMode="cover"
            />
          </View>

          {/* Title */}
          <Text className="text-3xl font-bold text-gray-800 mb-2 text-center">
            Inum-Inum Calculator
          </Text>
          <Text className="text-lg text-gray-500 mb-6 text-center">
            Sayon ra ni bisag hubog ka
          </Text>

          {/* Description */}
          <Text className="text-base text-gray-600 text-center leading-6 mb-8">
            Gikapoy na ka'g compute kung pila imong ginastos sa tanduay? Ayaw
            kabalaka! Kini nga app motabang nimo kwenta pila na ka case imong
            napalit — ug pila na pud ka bayad sa utang!
          </Text>

          {/* Features */}
          <View className="w-full mb-8">
            <Text className="text-lg font-semibold text-gray-800 mb-4">
              Mga Features (Feeling sosyal):
            </Text>
            <Text className="text-base text-gray-600 mb-2 leading-6">
              • Pwede nimo i-add ug i-remove ang imong paliton
            </Text>
            <Text className="text-base text-gray-600 mb-2 leading-6">
              • Real-time kwenta — walay libog
            </Text>
            <Text className="text-base text-gray-600 mb-2 leading-6">
              • Simple kaayo — murag imong crush nga walay label
            </Text>
            <Text className="text-base text-gray-600 mb-2 leading-6">
              • One-tap clear — para limpyohan imong kasaypanan
            </Text>
          </View>

          {/* Footer */}
          <View className="flex-row items-center pt-6 border-t border-gray-100">
            <Heart size={16} className="text-red-500" />
            <Text className="text-base text-gray-500 ml-2 font-medium">
              Gibuhat ni Dingdong — certified gwapo 😎
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
