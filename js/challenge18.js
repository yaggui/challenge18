const options=["piedra","papel","tijera"];
const botGame= () => {
  let position=Math.random()*3;
  position=Math.floor(position);
  return options[position];
}
const gameStart= (playerSelect) => {
  let botSelect= botGame();
  switch(true){
    case playerSelect=="piedra" && botSelect=="papel":
    case playerSelect=="papel" && botSelect=="tijera":
    case playerSelect=="tijera" && botSelect=="piedra":
      alert("PERDISTE \n"+`${playerSelect} pierde con bot= ${botSelect}`);
      break;
    case playerSelect=="piedra" && botSelect=="tijera":
    case playerSelect=="papel" && botSelect=="piedra":
    case playerSelect=="tijera" && botSelect=="papel":
      alert("GANASTE \n"+`${playerSelect} gana a bot= ${botSelect}`);
      break;
    default:
      alert("EMPATASTE \n"+`${playerSelect} iguala con bot= ${botSelect}`);
      break;
  }
}