import React from 'react';
import { useQuery, gql } from '@apollo/client';
import PokemonListCard from './PokemonListCard';

const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      status
      message
      results {
        url
        name
        image
      }
    }
  }
`;

const pokemonList = (props) => {
    const gqlVariables = props.gqlVariables;

    const { loading, error, data } = useQuery(GET_POKEMONS, {
        variables: gqlVariables
    });

    let pokemonsList = null;

    if(loading){
        return <p>Loading pokemons...</p>
    }

    if(error){
        return <p>Some error has occured</p>
    }

    pokemonsList = (
        <div>
            {
                data.pokemons.results.map( (pokemon, index) => {
                    return <PokemonListCard 
                        name={pokemon.name} 
                        image={pokemon.image}
                        key={index}
                        click={props.click}
                        showMyPokemon={false}
                    />
                })
            }
        </div>
    );  

    return (
        <div> 
            {pokemonsList}
        </div>
    );
}

export default pokemonList;