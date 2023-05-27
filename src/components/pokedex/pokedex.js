import React from "react";
import Pokemon from "../pokemon/Pokemon";
import PokeBola from "../image/pokeball-rotate.png"

import { PokedexGrid, Loading, TextLoading, PokeBolaImg } from "./style";

const Pokedex = (props) => {
    const {pokemons, loading} = props;
   
    return (
        <>
            {loading ? (
            <Loading><PokeBolaImg alt="PokeBolaRolante" src={PokeBola}/><TextLoading> Carregando, Go Pokemom...</TextLoading></Loading>
            ) : (
            <PokedexGrid>
                    {pokemons && pokemons.map((pokemon, index) => {
                        return (
                            <Pokemon key={index}  pokemon={pokemon}/>
                        )
                    })}
                </PokedexGrid>
                )}
        </>
    )

}

export default Pokedex