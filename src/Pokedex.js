import React, { Component } from 'react';
import PokedexMainScreen from './PokedexMainScreen';
import PokedexSubScreen from './PokedexSubScreen'
import ModalInput from './ModalInput';

class Pokedex extends Component{
    constructor(props){
        super(props);
        this.state = {
            gqlVariables: {
                name: ''
            },
            showModal: false,
            targetPokemon: {},
            isSuccess: false,
            myPokemonList: JSON.parse(localStorage.getItem('myPokemons'))
        }
    }

    onPokemonListClickHandler = (name) => {
        const gqlVariables = {...this.state.gqlVariables};
        gqlVariables.name = name;
        this.setState({
            gqlVariables: gqlVariables
        })
        window.scrollTo(0,0);
    }

    hideModal = () => {
        this.setState({
            showModal: false
        });
    }

    catchHandler = (name, id) => {
        const p = Math.floor(Math.random()*2);
        if(p === 0){
            this.setState({
                isSuccess: false,
                showModal: true
            });
        }
        else {
            const targetPokemon = {
                name: name,
                id: id,
                nickName: name
            }
            this.setState({
                targetPokemon: targetPokemon,
                isSuccess: true,
                showModal: true
            });
        }
    }

    onNicknameChanged = (event) => {
        const target = {...this.state.targetPokemon};
        target.nickName = event.target.value;
        this.setState({
            targetPokemon: target
        });
    }

    addPokemonHandler = () => {
        let myPokemons = null;
        if(localStorage.getItem('myPokemons')){
            myPokemons = [...JSON.parse(localStorage.getItem('myPokemons'))];
        }
        else {
            myPokemons = [];
        }

        if(myPokemons.length >= 6){
            alert('You can only carry up to 6 pokemons');
        }
        else {
            const index = myPokemons.findIndex( p => {
                return p.nickName === this.state.targetPokemon.nickName;
            });
    
            if(index >= 0){
                alert('A pokemon with this nickname already exist, please pick another one!');
            }
            else {
                myPokemons.push(this.state.targetPokemon);
                localStorage.setItem('myPokemons', JSON.stringify(myPokemons));
                console.log(localStorage.getItem('myPokemons'));

                const myPokemonsState = [...this.state.myPokemonList];
                myPokemonsState.push(this.state.targetPokemon);
                this.setState({
                    myPokemonList: myPokemonsState
                })
            }
        }

        this.setState({
            showModal: false
        });
    }

    releasePokemonHandler = (nickName) => {
        const pokemonIndex = this.state.myPokemonList.findIndex( p => {
            return p.nickName === nickName
        });
        const myPokemonsCopy = [...this.state.myPokemonList]
        myPokemonsCopy.splice(pokemonIndex, 1);
        localStorage.setItem('myPokemons', JSON.stringify(myPokemonsCopy));
        this.setState({
            myPokemonList: myPokemonsCopy
        })
    }

    render(){
        return(
            <div>
                <ModalInput 
                    show={this.state.showModal} 
                    hide={this.hideModal} 
                    status={this.state.isSuccess}
                    target={this.state.target}
                    changed={this.onNicknameChanged}
                    onAddPokemon={this.addPokemonHandler}
                />
                <PokedexMainScreen pokemonName={this.state.gqlVariables.name} catch={this.catchHandler}/>
                <PokedexSubScreen 
                    click={this.onPokemonListClickHandler} 
                    onReleasePokemon={this.releasePokemonHandler}
                    myPokemons={this.state.myPokemonList}
                />
            </div>
        )
    }
}

export default Pokedex;