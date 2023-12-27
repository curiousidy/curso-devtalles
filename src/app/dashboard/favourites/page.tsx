import { PokemonsGrid, PokemonsResponse, SimplePokemon } from "@/app/pokemons";
import { notFound } from "next/navigation";


export const metadata = {
    title: 'favoritos',
    description: 'pokemons favoritos'
}

export default async function Favourites() {
                
  return (
    <div className="flex flex-col">

      <span className="text-5xl my-2">`Pokemons favoritos` <small>Global state</small></span>
      <PokemonsGrid pokemons={[]}/>
    </div>
  );
}