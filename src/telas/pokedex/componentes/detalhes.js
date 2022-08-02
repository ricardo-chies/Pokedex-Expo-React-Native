import React from "react";
import {Image, View, StyleSheet, TouchableOpacity} from 'react-native';

import Texto from '../../../componentes/Texto';

export default function Detalhes({nome, logo, nomeProfessor, descricao, botao}){
    return <>
    <Texto style={estilos.nome}>{nome}</Texto>
    <View style={estilos.pokebolaProfessor}>
        <Image source={logo} style={estilos.imagemPokebola}/>
        <Texto style={estilos.nomeProfessor}>{nomeProfessor}</Texto>
    </View>
    <Texto style={estilos.descricao}>{descricao}</Texto>

    <TouchableOpacity style={estilos.botao} onPress={() => {}}>
        <Texto style={estilos.textoBotao}>{botao}</Texto>
    </TouchableOpacity>
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
    botao: {
        marginTop: 16,
        backgroundColor: "#2a9f85",
        paddingVertical: 16,
        borderRadius: 6,
    },
    textoBotao: {
        textAlign: "center",
        color: "#ffffff",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold"
    }
})