import React from "react";
import {Image, View, StyleSheet} from 'react-native';

import Texto from '../../../componentes/Texto';

export default function Detalhes({nome, logo, nomeProfessor, descricao}){
    return <>
    <Texto style={estilos.nome}>{nome}</Texto>
    <View style={estilos.pokebolaProfessor}>
        <Image source={logo} style={estilos.imagemPokebola}/>
        <Texto style={estilos.nomeProfessor}>{nomeProfessor}</Texto>
    </View>
    <Texto style={estilos.descricao}>{descricao}</Texto>
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