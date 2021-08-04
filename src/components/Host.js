import React from 'react';
import '../stylesheets/Host.css'
import { Card } from 'semantic-ui-react'

const Host = ({host}) => {
 const handleClick =()=>{}
  return(
    <Card
      className="host"
      onClick={handleClick}
      image={host.imgUrl}
      raised
    />
  )
}

export default Host
