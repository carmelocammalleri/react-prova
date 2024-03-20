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

class Board extends React.Component {
  render(){
    let numberSquare= [];
    for(let i=1; i<10; i++){
      numberSquare.push(i);
    }

    const arrayNumberTris = numberSquare.map((square) => <button className='square' onClick={() => console.log('click')}>{square}</button>);
    return arrayNumberTris;
  }
}

export default Main