import React from "react";
import { StyleSheet, Image, Dimensions, Text, View } from 'react-native';

import Texto from '../componentes/Texto'

import topo from '../../assets/topo.png'
import logo from '../../assets/logo.png'

const width = Dimensions.get('screen').width;

export default function Cesta(){
    return <>
        <Image source={topo} style={estilos.topo} />
        <Texto style={estilos.titulo}>Detalhe dos Pokémons</Texto>

        <View style={estilos.pokedex}>
            <Texto style={estilos.nome}>Pokedéx</Texto>
            <View style={estilos.pokebolaProfessor}>
                <Image source={logo} style={estilos.imagemPokebola}/>
                <Texto style={estilos.nomeProfessor}>Professor Chies</Texto>
            </View>
            <Texto style={estilos.descricao}>Saiba todas as curiosidades e 
                características do seu pokémon favorito!</Texto>
        </View>
        </>
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 1080 / 1920 * width,
    },
    titulo: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 16
    },
    pokedex: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    nome: {
        color:"#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold"
    },
    pokebolaProfessor: {
        flexDirection: "row",
        paddingVertical: 12,
    },
    imagemPokebola: {
        width: 32,
        height: 32
    },
    nomeProfessor: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },
    descricao:{
        color: "#a3a3a3",
        fontSize: 16,
        lineHeight: 26,
    },

})