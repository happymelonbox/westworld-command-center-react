import React from 'react';
import { Segment } from 'semantic-ui-react';
import Area from './Area'


const WestworldMap = ({areas, hosts}) => {
  return (
    <Segment id="map" >
      {areas.map(area=>{ 
        return(
        < Area area={area} key={area.id} hosts={hosts}/>
      )})}
    </Segment>
  )
}

export default WestworldMap
