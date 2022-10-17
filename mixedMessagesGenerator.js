let lex  = ['You ', 'Your ', 'Bob ', 'Joe '];
let verb   = ['play ', 'are ', 'plays ','is ', 'was '];
let infin  = 'playing ';
let noun   = ['guitar ', 'piano ', 'drums ', 'song ', ];
let adj    = ['good', 'better', 'great', 'meh'];
let prep   = ' at ';
let prep2  = ' on ';

let genNum =()=>{return Math.floor(Math.random()*4)};
let genNum4 =()=>{return Math.floor(Math.random()*3)};
let genNum2 =()=>{return Math.floor(Math.random()*2)};
let genNum3 =()=>{return Math.floor(Math.random()*2)+2};
let genNum5 =()=>{return Math.floor(Math.random()*2)+3};
let genNum6 =()=>{return Math.floor(Math.random()*3)+2};

const generator1 = ()=>{
  
  let uMan = lex[genNum()]; 
  let action2 = verb[genNum2()];
  let action4 = verb[genNum5()];
  let action5 = verb[genNum6()];
  let object2 = noun[genNum4()];
  let how = adj[genNum()];

  if (uMan == lex[0] && action2 == verb[1]){

    return uMan + action2 + how + prep + object2 + infin;

  } else if (uMan == lex[0] && action2 == verb[0]){

    return uMan + action2 + object2 + how;

  }else if ( uMan == lex[1]){

    return uMan + object2 + infin + action4 + how  ;

  } else {
    return uMan + action5 + how + prep2 + object2;
  };


};
//--
let theBoys  = ['Butcher.', 'Homelander.'];

const generator2 = ()=>{
let quote2 = ['. Just like '];
return quote2 + theBoys[genNum2()];
};

let pex = ['bubu', 'brbr', 'baba', 'bobo'];

//let msg1 = generator1();
let msg2 = generator1() + generator2();
//let msg3 = generator1() + generator2();
let mixmsg = [msg1, msg2];

const mixedmessages = (arrg)=>{
return arrg;
};

// dom stuff //

let customBut = document.getElementById('Custom');
let defaultBut = document.getElementById('Default');
let genMesBut = document.getElementById('genMes');
let submitbut = document.getElementById('subBut');
let ferstInput = document.getElementById("aname");
let secundInput = document.getElementById("anoname");
let therdInput = document.getElementById("sup");
let furthInput = document.getElementById("ansup");
//disabled on page load 
genMesBut.disabled = true;
ferstInput.disabled = true;
secundInput.disabled = true;
therdInput.disabled = true;
furthInput.disabled = true;
submitbut.disabled = true;

const customButEnable = ()=>{
  genMesBut.innerHTML = "De-generate Message";
  defaultBut.disabled = true;  
  ferstInput.disabled = false;
  secundInput.disabled = false;
  therdInput.disabled = false;
  furthInput.disabled = false;
  
};
//
const mesMixerFunc1 = ()=>{
  printSpot.innerHTML = mixedmessages(msg2);
  genMesBut.disabled = true;
};

const defButDisables =()=>{
   customBut.disabled = true; 
   genMesBut.disabled = false;
   genMesBut.onclick = mesMixerFunc1;
};
// new arrays formage

 
const submitting =()=>{
  genMesBut.disabled = false;
  submitbut.disabled = true;
    
  
};


customBut.onclick = customButEnable;
defaultBut.onclick = defButDisables ;
submitbut.onclick = submitting;


let printSpot = document.getElementById("printOut");




const subButEnable=()=>{submitbut.disabled = false;};
furthInput.addEventListener('change', subButEnable);




// ------------------ main fct



