import React, { Component } from 'react';
import PokemonDetail from './Pokemon/Detail/PokemonDetail';

class PokedexMainScreen extends Component {
    render(){
        return(
            <div className="card shadow-sm p-3 mb-5 bg-white rounded">
                <h4 className="card-title">Pokemon Information</h4>
                <div className="card-body">
                    {
                        this.props.pokemonName != '' ? 
                        <PokemonDetail pokemonName={this.props.pokemonName} catch={this.props.catch}/> 
                        : <p>Please select a pokemon to show the detail...</p>
                    }
                    
                </div>
            </div>
        )
    }
}

export default PokedexMainScreen;