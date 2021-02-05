import React from 'react';
import PokemonListCard from './PokemonListCard'

const myPokemonList = (props) => {
    // let content = (
    //     <div>
    //         {
    //             props.myPokemons.length > 0 ? 
    //                 props.myPokemons.map( (p, index) => {
    //                     return (
    //                         <div key={index}>
    //                             <PokemonListCard 
    //                                 nickName={p.nickName}
    //                                 name={p.name}
    //                             />
    //                             <button 
    //                                 className="btn btn-danger" 
    //                                 onClick={() => props.onReleasePokemon(index)}>
    //                                     Release
    //                             </button>
    //                         </div>
    //                     )
    //                 }) : null
    //         }
    //     </div>
    // )

    let content = null;

    if(props.myPokemons){
        content = (
            <div>
                {
                    props.myPokemons.length > 0 ? 
                        props.myPokemons.map( (p, index) => {
                            return (
                                    <PokemonListCard 
                                        nickName={p.nickName}
                                        name={p.name}
                                        showMyPokemon={true}
                                        key={index}
                                        onReleasePokemon={props.onReleasePokemon}
                                    />
                            )
                        }) : null
                }
            </div>
        )
    }

    return (
        <div>
            {content}
        </div>
    );
}

export default myPokemonList;