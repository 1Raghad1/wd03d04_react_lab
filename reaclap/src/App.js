import './App.css';
import FilmDetails from './FilmDetails'
import FilmListing from './FilmListing'
import FlimRow from './FilmRow'
import TMDB from './TMDB'
import './normalize.css'

import React, { Component } from 'react'
export default class App extends Component {
  constructor(){
    super()
    this.handleFaveToggle = this.handleFaveToggle.bind(this)
  }
  state={
    film:TMDB.films,
    faves:[],
    current:{}
  }
  handleFaveToggle=(e)=>{
const faves= {...this.state.faves.slice()}
const filmIndex=faves.indexOf(e.target)
// filmIndex==-1?fave.push(e.target):fave.splice(filmIndex,1)
filmIndex==-1?console.log('d'):console.log('a');
this.setState({faves})

  }

  render() {
    return (
      <div className="film-library">
   
       
      <FilmListing film ={this.state.film} fave = {this.state.faves}  handleFaveToggle={() => this.handleFaveToggle} />

      <div className="film-details">
        <h1 className="section-title">DETAILS</h1>
        <FilmDetails film={this.state.film} current={this.state.current} />
        
      </div>

    </div>
    )
  }
}
