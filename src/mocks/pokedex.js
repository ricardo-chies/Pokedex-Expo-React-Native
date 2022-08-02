import logo from '../../assets/logo.png';

import Buizel from '../../assets/Pokemons/Buizel.png';
import Bulbasaur from '../../assets/Pokemons/Bulbasaur.png';
import Charmander from '../../assets/Pokemons/Charmander.png';
import Cyndaquil from '../../assets/Pokemons/Cyndaquil.png';
import Grovile from '../../assets/Pokemons/Grovile.png';
import Gyarados from '../../assets/Pokemons/Gyarados.png';
import Pikachu from '../../assets/Pokemons/Pikachu.png';
import Snorlax from '../../assets/Pokemons/Snorlax.png';
import Squirtle from '../../assets/Pokemons/Squirtle.png';

const pokedex = {
    topo: {
        titulo: "Detalhes dos Pokémons",
    },
    detalhes: {
        nome: "Pokedéx",
        logo: logo,
        nomeProfessor: "Professor Chies",
        descricao: "Saiba todas as curiosidades e características do seu pokémon favorito!",
        botao: "Escolher",
    },
    itens: {
        titulo: "Pokémons do Chies",
        lista: [
            {
              nome: "Buizel",
              imagem: Buizel,
            },
            {
              nome: "Bulbasaur",
              imagem: Bulbasaur,
            },
            {
              nome: "Charmander",
              imagem: Charmander,
            },
            {
              nome: "Cyndaquil",
              imagem: Cyndaquil,
            },
            {
              nome: "Grovile",
              imagem: Grovile,
            },
            {
                nome: "Gyarados",
                imagem: Gyarados,
              },
              {
                nome: "Pikachu",
                imagem: Pikachu,
              },
              {
                nome: "Snorlax",
                imagem: Snorlax,
              },
              {
                nome: "Squirtle",
                imagem: Squirtle,
              }
          ]
        }
      }
      
      export default pokedex;