import { StatusBar, SafeAreaView, View } from 'react-native';
import React from 'react';
import { useFonts, 
  Montserrat_400Regular,
  Montserrat_700Bold } from "@expo-google-fonts/montserrat";

import Pokedex from './src/telas/pokedex';

export default function App() {
const [fontCarregada] = useFonts ({
  "MontserratRegular": Montserrat_400Regular,
  "MontserratBold": Montserrat_700Bold,
});

if(!fontCarregada) {
  return <View/>
}

  return (
    <SafeAreaView>
      <StatusBar />
      <Pokedex/>
    </SafeAreaView>
  );
}
