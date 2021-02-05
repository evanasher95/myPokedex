import React from 'react';
import './PokemonListCard.css';

const pokemonListCard = (props) => {
    let myPokemons = null;
    let pokeCount = 0;
    if(localStorage.getItem('myPokemons')){
        myPokemons = [...JSON.parse(localStorage.getItem('myPokemons'))];
    }
    
    if(myPokemons){
        pokeCount =  myPokemons.filter(p => { return p.name === props.name }).length;
    }

    let content = (
        <div id="wildPokeDexList" className="card" onClick={() => props.click(props.name)}>
            <div className="card-body">
                <h5>{props.name}</h5>
                <p>Caught: {pokeCount}</p>
            </div>  
        </div>
    )

    if(props.showMyPokemon){
        content = (
            <div className="card">
                <div className="card-body">
                    { props.nickName ? <h5>{props.nickName}</h5> : null }
                    <p>{props.name}</p>
                    <button 
                        className="btn btn-danger" 
                        onClick={() => props.onReleasePokemon(props.nickName)}>
                            Release
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div>
            {content}
        </div>
    );
}

export default pokemonListCard;