import React from 'react';
import image_home from '../image/body.jpg'

function Home () {

  return (
    
    <div className='container'>
        <h1 className='titulo'>Heladeria Italia</h1>
        <p className='subtitulo'><em>Helados con sabor a Felicidad</em></p>
        <img src={image_home} className='image_home' alt='background' />
    </div>
  )
}

export default Home;
