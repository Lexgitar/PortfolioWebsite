let card = [];
let bott = [];
let otherBatch = [];
let anotherBatch = [];

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
// COPY 1
const genCard=()=>{
  let instances =()=>{return Math.floor(Math.random()*6)+10};
let motoras =()=>{return Math.floor(Math.random()*10)};
  for (i=0; i<=instances(); i++ ){
    bott.push(motoras());
  }
  return bott;
};
//COPY 2
const genBatch=()=>{
  let instances =()=>{return Math.floor(Math.random()*6)+10};
let motoras =()=>{return Math.floor(Math.random()*10)};
  for (i=0; i<=instances(); i++ ){
    otherBatch.push(motoras());
  }
  return otherBatch;
};
//COPY 3
const genMore=()=>{
  let instances =()=>{return Math.floor(Math.random()*6)+10};
let motoras =()=>{return Math.floor(Math.random()*10)};
  for (i=0; i<=instances(); i++ ){
    anotherBatch.push(motoras());
  }
  return anotherBatch;
};
// rest 

let theGenerator = document.getElementById('genBut');
let cardOne = document.getElementById('cardNoa');
let cardTwo = document.getElementById('cardNob');
let cardThree = document.getElementById('cardNoc');
let cardFour = document.getElementById('cardNod');

const textAlter=()=>{
    cardOne.value = cardGen();
    cardTwo.value = genCard();
    cardThree.value = genBatch();
    cardFour.value = genMore();
    document.getElementById('genBut').disabled = true;
    
};

theGenerator.onclick = textAlter;