import { StatusBar, SafeAreaView } from 'react-native';
import React from 'react';

import Pokedex from './src/telas/Pokedex';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <Pokedex/>
    </SafeAreaView>
  );
}
