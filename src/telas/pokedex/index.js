import React from "react";
import { StyleSheet, View } from 'react-native';

import Detalhes from './componentes/detalhes';
import Topo from './componentes/topo';

export default function Cesta(){
    return <>
        <Topo />

        <View style={estilos.pokedex}>
            <Detalhes />
        </View>
        </>
}

const estilos = StyleSheet.create({
    pokedex: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
})