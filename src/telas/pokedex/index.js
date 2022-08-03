import React from "react";
import { StyleSheet, View, FlatList } from 'react-native';

import Texto from '../../componentes/Texto';

import Detalhes from './componentes/detalhes';
import Topo from './componentes/topo';
import Pokemon from './componentes/pokemon';

export default function Pokedex({topo, detalhes, pokemons}){
    return <>
        <FlatList
            data={pokemons.lista}
            renderItem={Pokemon}
            keyExtractor={({ nome }) => nome }
            ListHeaderComponent={() =>{
                return <>
                    <Topo {...topo} />
                    <View style={estilos.pokedex}>
                        <Detalhes {...detalhes} />
                        <Texto style={estilos.titulo}>{pokemons.titulo}</Texto>
                    </View>
                </>
            }}
        />
    </>
}

const estilos = StyleSheet.create({
    titulo: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
    },
    pokedex: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
})