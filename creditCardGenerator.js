let card = [];
let bott = [];
let otherBatch = [];
let anotherBatch = [];

const cardGen=()=>{
  let instances =()=>{return Math.floor(Math.random()*1)+15};
let numberGen =()=>{return Math.floor(Math.random()*10)};
//console.log(instances());
//console.log(numberGen());
  for (i=0; i<=instances(); i++ ){
    card.push(numberGen());
  }
  return card.join('');
};
// COPY 1
const genCard=()=>{
  let instances =()=>{return Math.floor(Math.random()*6)+10};
let motoras =()=>{return Math.floor(Math.random()*10)};
  for (i=0; i<=instances(); i++ ){
    bott.push(motoras());
  }
  return bott.join('');
};
//COPY 2
const genBatch=()=>{
  let instances =()=>{return Math.floor(Math.random()*6)+10};
let motoras =()=>{return Math.floor(Math.random()*10)};
  for (i=0; i<=instances(); i++ ){
    otherBatch.push(motoras());
  }
  return otherBatch.join('');
};
//COPY 3
const genMore=()=>{
  let instances =()=>{return Math.floor(Math.random()*6)+10};
let motoras =()=>{return Math.floor(Math.random()*10)};
  for (i=0; i<=instances(); i++ ){
    anotherBatch.push(motoras());
  }
  return anotherBatch.join('');
};
// rest 

let theGenerator = document.getElementById('genBut');
let cardOne = document.getElementById('cardNoa');
let cardTwo = document.getElementById('cardNob');
let cardThree = document.getElementById('cardNoc');
let cardFour = document.getElementById('cardNod');

 cardOne.disabled=true;
 cardTwo.disabled=true;
 cardThree.disabled=true;
 cardFour.disabled=true;



const textAlter=()=>{

    cardOne.value = cardGen();
    cardTwo.value = genCard();
    cardThree.value = genBatch();
    cardFour.value = genMore();
    document.getElementById('genBut').disabled = true;
    
};

theGenerator.onclick = textAlter;

//VALIDATION 
const validateCred = (arr) => {
  let evenList =[];
  let oddList =[];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 1) {
      oddList.push(arr[i]);
    } else {
      evenList.push(arr[i])
      }
};
evenList = evenList.map(num => {
  if (num * 2 > 9){
    return num * 2 - 9;
  }else {
    return num * 2;
  }
});

let sumOdd = oddList.reduce((x, y)=>{return x+y});
let sumEven = evenList.reduce((z, q)=>{return z+q});

const total = ( sumOdd, sumEven )=>{
  let result = sumOdd + sumEven;
  //console.log(result);
  if (result% 10 == 0){return "Valid";}
  else {return "Invalid";}
   };
  
return total( sumOdd, sumEven );
  
  };

  //let valElement = document.getElementById('cardNoa');
  let valLocation = document.getElementById('valOne');
  let valLocation2 = document.getElementById('valTwo');
  let valLocation3 = document.getElementById('valThree');
  let valLocation4 = document.getElementById('valFour');

  
   valLocation.disabled=true;
   valLocation2.disabled=true;
   valLocation3.disabled=true;
   valLocation4.disabled=true;

  let valButton = document.getElementById('validateBut');

  
  const validatorB = ()=>{
    valLocation.value = validateCred(cardOne.value);
    valLocation2.value = validateCred(cardTwo.value);
    valLocation3.value = validateCred(cardThree.value);
    valLocation4.value = validateCred(cardFour.value);
    document.getElementById('validateBut').disabled = true;

  };

  valButton.onclick = validatorB;

  // ---Issuer reveal ---

  let maker = '';
const issuer = (cartela)=>{
    //let brandList = [];
    
      if (cartela[0] == 3 ){
         maker='Amex';
      }else if (cartela[0] == 0){
        maker='Lady Gaga';
      }else if (cartela[0] == 1){
        maker='Chuck Norris';
      }else if (cartela[0] == 2){
        maker='A dolphin';
      }else if (cartela[0] == 7){
        maker='God';
      }else if (cartela[0] == 4){
        maker='Visa';
      }else if(cartela[0] == 5){
        maker='Mastercard';
      } else if (cartela[0] == 6){
        maker='Discover';
      }else {
       maker='Company-Not-Found';
      };
    
    return maker;
};

let makerOne = document.getElementById('issOne');
let makerTwo = document.getElementById('issTwo');
let makerThree = document.getElementById('issThree');
let makerFour = document.getElementById('issFour');

makerOne.disabled=true;
makerTwo.disabled=true;
makerThree.disabled=true;
makerFour.disabled=true;

let revealer = document.getElementById('revealBut');

const revGen = ()=>{
   makerOne.value = issuer(cardOne.value);
   makerTwo.value = issuer(cardTwo.value);
   makerThree.value = issuer(cardThree.value);
   makerFour.value = issuer(cardFour.value);

   revealer.disabled = true;

};

revealer.onclick = revGen;