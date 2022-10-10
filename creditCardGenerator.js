let card = [];

const cardGen=()=>{
  let instances =()=>{return Math.floor(Math.random()*6)+10};
let numberGen =()=>{return Math.floor(Math.random()*10)};
//console.log(instances());
//console.log(numberGen());
  for (i=0; i<=instances(); i++ ){
    card.push(numberGen());
  }
  return card;
};

//console.log(cardGen());
//console.table(cardGen());

let theGenerator = document.getElementsByClassName("thename");
let thePlace = document.getElementsByClassName("tester");

const textChange=()=>{
     thePlace.innerHTML = 'Card-9';
};

theGenerator.onclick = textChange;