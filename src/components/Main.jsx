import './Main.css'
import React, { createElement } from 'react';

function Main() {
  const userName = 'FRANCOLDO'

  return (
    <main>
      <h2>Tris di {userName}</h2>
      <div className='trisTable'>
       <Board />
      </div>
    </main>
  );
}

export default Main