import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Pokemon = ({pokemon}) => {

  return (
    <div>
        <Card className='my-3 p-3 mb-4 mx-3 text-center shadow' style={{ border: 'none' }}>
          <Link to={`/pokemon/${pokemon.id}`} style={{textDecoration: 'none'}}>
          <Card.Img style={{ width: '8rem', display:'block', marginLeft:'auto', marginRight:'auto' }} className='link-white' src={pokemon.sprites.front_default} variant='top'/>
          </Link>
            <Card.Body className={`${pokemon.types[0].type.name} rounded text-white`}>
              <Link to={`/pokemon/${pokemon.name}`} style={{textDecoration: 'none', color: 'white'}}>
              <span>#{pokemon.id} {pokemon.name}</span>
              </Link>
            </Card.Body>
        </Card>
    </div>
  )
}

export default Pokemon
