import React, { useEffect, useState } from "react";
import FilePokemon from "../filePokemon/FilePokemon"
import Pokedex from "../pokedex/pokedex"
import {
  SearchPokemon,
  getPokemonData,
  getPokemons
} from "../searchPokemon/searchPokemon";
import { Button } from "../button/button"

import { DivError, TextError } from "./style";

export const PokemonList = () => {
  const paginationLimit = 10;
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [paginationOffset, setPaginationOffset] = useState(0);

  const addPokemons = () => {
    setPaginationOffset(paginationOffset + paginationLimit)
    console.log("offset", paginationOffset);
  };


  const fetchPokemons = async () => {
    try {
      setLoading(true);
      setNotFound(false);

      const data = await getPokemons(paginationLimit, paginationOffset);

      const promises = data.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });

      const results = await Promise.all(promises);
      setPokemons([...pokemons, ...results]);
      setLoading(false);
    } catch (error) {
      console.log("errou", error);
    }
  };

  useEffect(() => {
    fetchPokemons();
    // eslint-disable-next-line
  }, [paginationOffset]);

  const onSearhHandler = async (pokemon) => {
    if (!pokemon) {
      setPokemons([]);
      return fetchPokemons();
    }

    setLoading(true);
    setNotFound(false);
    const result = await SearchPokemon(pokemon);
    if (!result) {
      setNotFound(true);
    } else {
      setPokemons([result]);
    }
    setLoading(false);
  };

  return (
    <div>
      <FilePokemon onSearch={onSearhHandler} />
      {notFound ? (
        <DivError>
          <img alt="gifPokemon "
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/122.gif" />
          <TextError>
            Ih! Esse Não Tem!
          </TextError>
          <img alt="gifPokemon "
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/143.gif" />
        </DivError>
      ) : (

        <>
          <Pokedex pokemons={pokemons} loading={loading} />
          <Button onClick={addPokemons} />
        </>

      )}

    </div>
  );
}