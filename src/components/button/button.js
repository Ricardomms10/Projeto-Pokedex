import React from "react";
import { ContainerButton, BtnMaisPokemon } from "./style"

export const Button = (props) => {

    return (
        <ContainerButton>
            <BtnMaisPokemon
                {...props} > Mais Pokemons
            </BtnMaisPokemon>
        </ContainerButton>
    )
}

