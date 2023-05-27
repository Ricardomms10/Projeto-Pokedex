import { Menu } from "../menu/menu";
import { PokemonList } from "../pokemonList/pokemonList";

export const Home = ( ) => {
    return(
        <div >
            <Menu/>
            <PokemonList/>
        </div>
    )
}