import { Text, View, ScrollView, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomButton from "../components/CustomButton";
import { useGlobalContext } from "@/context/GlobalProvider";

const Index = () => {
  const {isLoading, isLoggedIn} = useGlobalContext();

  if(!isLoading && isLoggedIn) return <Redirect href="/home"></Redirect>

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center min-h-[85vh] px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          ></Image>
          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode="contain"
          ></Image>

          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless Possibilities with
              <Text className="text-secondary-200"> Aora</Text>
            </Text>

            <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
              resizeMode="contain"
            ></Image>
          </View>

          <Text className="text-xs font-pregular text-gray-100 mt-7 text-center">
            Where creativity meets innovation: Journey of limitless exploration
            with Aora
          </Text>

          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push("/SignIn")}
            containerStyles="mt-7 w-full"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light"></StatusBar>
    </SafeAreaView>
  );
};

export default Index;
