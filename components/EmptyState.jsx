import { View, Text, Image } from "react-native";
import React from "react";
import { images } from "../constants";
import {router} from "expo-router";
import CustomButtom from "./CustomButton";

const EmptyState = ({ title, subtitle }) => {
  return (
    <View className="flex-1 items-center justify-center px-4">
      <Image
        source={images.empty}
        className="w-[270px] h-[215px]"
        resizeMode="contain"
      />
      <Text className="text-xl font-psemibold text-center mt-2 text-white">
        {title}
      </Text>
      <Text className="font-pmedium text-sm text-gray-100">{subtitle}</Text>
      <CustomButtom
        title="Create video"
        handlePress={() => router.push("./create")}
        containerStyles="w-full my-5"
      />
    </View>
  );
};

export default EmptyState;
