function Board () {
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
    const arrayNumberTris = numberSquare.map((square) => <button key={square} id={square} className='square' value={square} onClick={handleClick}> {isClicked? 'x':'o'}
    </button>)

 return arrayNumberTris;
}
export default Board;
