import React from "react";
import {Image, View, StyleSheet} from 'react-native';

import Texto from '../../../componentes/Texto';
import logo from '../../../../assets/logo.png';

export default function Detalhes(){
    return <>
    <Texto style={estilos.nome}>Pokedéx</Texto>
    <View style={estilos.pokebolaProfessor}>
        <Image source={logo} style={estilos.imagemPokebola}/>
        <Texto style={estilos.nomeProfessor}>Professor Chies</Texto>
    </View>
    <Texto style={estilos.descricao}>Saiba todas as curiosidades e 
                características do seu pokémon favorito!</Texto>
    </>
}

const estilos = StyleSheet.create({
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