import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_POKEMON_DETAIL = gql`
query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      sprites {
        front_default
      }
      moves {
        move {
          name
        }
      }
      types {
        type {
          name
        }
      }
    }
  }
`;

const pokemonDetail = (props) => {
    const gqlVariables = {
        name: props.pokemonName
    };

    const { loading, error, data } = useQuery(GET_POKEMON_DETAIL, {
        variables: gqlVariables
    });

    let pokemonDetail = null;

    if(loading){
        return <p>Loading pokemons...</p>
    }

    if(error){
        return <p>Some error has occured</p>
    }
    
    pokemonDetail = (
        <div>
            <h1>{data.pokemon.name}</h1>
            <img src={data.pokemon.sprites ? data.pokemon.sprites.front_default : null}></img>
            {
                data.pokemon.moves ? (
                    <div className="card">
                        <div className="card-body">
                            <h4>Moves</h4>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <h6>{data.pokemon.moves[0].move.name}</h6>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="col-sm-6">
                                    <div className="card">
                                            <div className="card-body">
                                                <h6>{data.pokemon.moves[1].move.name}</h6>
                                            </div>
                                        </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="card">
                                            <div className="card-body">
                                                <h6>{data.pokemon.moves[2].move.name}</h6>
                                            </div>
                                        </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="card">
                                            <div className="card-body">
                                                <h6>{data.pokemon.moves[3].move.name}</h6>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null
            }
            <div className="card">
                <h4 className="card-title">Type</h4>
                <div className="card-body">
                    <div className="row">
                    {
                        data.pokemon.types ? data.pokemon.types.map((t, index) => {
                        return (
                                <div className="col-sm-2">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 key={index}>{t.type.name}</h4>
                                        </div>    
                                    </div>
                                </div>
                            )
                        }) : null
                    }
                    </div>
                </div>
            </div>
            <br />
            <button className="btn btn-primary" onClick={() => props.catch(data.pokemon.name, data.pokemon.id)}>Catch</button>
        </div>
    )

    return (
        <div>
            {pokemonDetail}
        </div>
    );
}

export default pokemonDetail;