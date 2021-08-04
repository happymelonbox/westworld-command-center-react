import React, { Component } from 'react';
import './stylesheets/App.css'
import { Segment } from 'semantic-ui-react';

import Headquarters from './components/Headquarters'
import WestworldMap from './components/WestworldMap'

export const hostsURL = 'http://localhost:4000/hosts'
export const areasURL = 'http://localhost:4000/areas'

class App extends Component {
  constructor(){
    super()
    this.state = {
      areas: [],
      hosts: [],
      areaHosts: []
    }
  }
  componentDidMount(){
    fetch(areasURL)
    .then(resp=>resp.json())
    .then(areaData=>{
    fetch(hostsURL)
    .then(resp=>resp.json())
    .then(hostData=>{
      this.setState({
        hosts: hostData,
        areas: areaData})
    })})}

  render(){
    return (
      <Segment id='app'>
        < WestworldMap areas={this.state.areas} hosts={this.state.areaHosts}/>
        < Headquarters hosts={this.state.hosts}/>
      </Segment>
    )
  }
}

export default App;
