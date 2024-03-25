import { useState } from "react";

function Board () {

  const [sign, setSign]= useState("x")

  let isClicked = false;
  function handleClick(e){
    if(!isClicked){
      isClicked = true
      console.log(e.target.value, isClicked);
    } else{
      isClicked = false
      console.log(e.target.value, isClicked);
    }
  }
  let numberSquare= [];
  for(let i=1; i<10; i++){
    numberSquare.push(i);
  }
    const arrayNumberTris = numberSquare.map((square) => <button key={square} id={square} className='square' value={square} onClick={()=> setSign((sign)=> 'zzz')}> {sign}
    </button>)

 return arrayNumberTris;
}
export default Board;
