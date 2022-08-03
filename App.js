import { StatusBar, SafeAreaView, View } from 'react-native';
import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts, 
  Montserrat_400Regular,
  Montserrat_700Bold } from "@expo-google-fonts/montserrat";

import Pokedex from './src/telas/pokedex';
import mock from './src/mocks/pokedex';

export default function App() {
const [fontCarregada] = useFonts ({
  "MontserratRegular": Montserrat_400Regular,
  "MontserratBold": Montserrat_700Bold,
});

if(!fontCarregada) {
  return <AppLoading />
}

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar />
      <Pokedex {...mock} />
    </SafeAreaView>
  );
}
