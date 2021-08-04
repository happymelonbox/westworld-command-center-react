import React, { Component } from 'react';
import '../stylesheets/Headquarters.css';
import { Grid } from 'semantic-ui-react';
import Details from './Details'
import ColdStorage from './ColdStorage';
import LogPanel from './LogPanel'

class Headquarters extends Component {
  constructor(){
    super()
    this.state ={
      selectedHost: []
    }
  }
  handleSelected = (event) => {
    const hostList = this.props.hosts
    const selectedKey = event.target.key
  }
  render(){
    return(
      <Grid celled='internally'>
        <Grid.Column width={8}>

        < ColdStorage hosts={this.props.hosts} selectedHost={this.handleSelected}/>

        </Grid.Column>
        <Grid.Column width={5}>
          <Details selectedHost={this.state.selectedHost}/>
        </Grid.Column>
        <Grid.Column width={3}>

        < LogPanel />

        </Grid.Column>
      </Grid>
    )
  }
}

export default Headquarters;
