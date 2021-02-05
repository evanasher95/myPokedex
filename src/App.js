import React, { Component } from 'react';
import './App.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Pokedex from './Pokedex';
import 'bootstrap/dist/css/bootstrap.min.css';

const client = new ApolloClient({
  uri: 'https://graphql-pokeapi.vercel.app/api/graphql',
  cache: new InMemoryCache()
});

class App extends Component {
  state = { };

  render(){
    return (
      <div className="App">
        <ApolloProvider client={client}>
          <div className="card">
            <div className="card-body">
              <Pokedex />
            </div>
          </div>
        </ApolloProvider>
      </div>
    );
  }
}

export default App;

