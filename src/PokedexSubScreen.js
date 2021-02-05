import React, { Component } from 'react';
import PokemonList from './Pokemon/List/PokemonList';
import MyPokemonList from './Pokemon/List/MyPokemonList';

class PokedexSubScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            gqlVariables: {
                limit: 10,
                offset: 0
            },
            showMyPokemonList: false
        }
    };

    nextPokemons = () => {
        const gqlVariablesCopy = {...this.state.gqlVariables};
        gqlVariablesCopy.offset += gqlVariablesCopy.limit;
        this.setState({
            gqlVariables: gqlVariablesCopy
        })
    }

    previousPokemons = () => {
        if(this.state.gqlVariables.offset === 0){
            return;
        }

        const gqlVariablesCopy = {...this.state.gqlVariables};
        gqlVariablesCopy.offset -= gqlVariablesCopy.limit;
        this.setState({
            gqlVariables: gqlVariablesCopy
        })
    }

    showIntPokedex = () => {
        this.setState({
            showMyPokemonList: false
        })
    }

    showMyPokemons = () => {
        this.setState({
            showMyPokemonList: true
        })
    }

    render(){
        let content = (
            <div className="card shadow-sm p-3 mb-5 bg-white rounded">
                <div className="card-body">
                    <h3>Pokemon List</h3>
                    <PokemonList gqlVariables={this.state.gqlVariables} click={this.props.click}/>
                    <br />
                    <button onClick={this.previousPokemons} type="button" class="btn btn-primary">
                        Previous
                    </button>
                    <button onClick={this.nextPokemons} type="button" class="btn btn-primary">
                        Next
                    </button>
                </div>
            </div>
        );

        if(this.state.showMyPokemonList){
            content = (
                <div className="card shadow-sm p-3 mb-5 bg-white rounded">
                    <div className="card-body">
                        <h3>My Pokemon List</h3>
                        <MyPokemonList 
                        onReleasePokemon={this.props.onReleasePokemon}
                        myPokemons={this.props.myPokemons}
                        />
                    </div>
                </div>
            );
        }

        return(
            <div>
                {content}
                <button className="btn btn-success" onClick={this.showIntPokedex}>International Pokedex</button>
                <button className="btn btn-danger" onClick={this.showMyPokemons}>My Pokemon</button>
            </div> 
        );
    };
}

export default PokedexSubScreen;