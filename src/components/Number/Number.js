
import './Number.css';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}



function Number({num=getRandomInt(0,9), glow=false, delay=getRandomInt(0,20)}) {

    return (
        <p className="num" style={{animationDelay: `${delay}s`}} >{num}</p>
    )
}

export default Number;