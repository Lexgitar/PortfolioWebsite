
let lex    = ['You ', 'Your ', 'Bob ', 'Joe '];
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


//console.log(genNum());
let om = lex[genNum()];
let action = verb[genNum()];
let action2 = verb[genNum2()];
let action3 = verb[genNum3()];
let action4 = verb[genNum5()];
let action5 = verb[genNum6()];

let object = noun[genNum()];
let object2 = noun[genNum4()];
let how = adj[genNum()];
let string ;

const generator1 = ()=>{
 //let x =   om + action ;

  if (om == lex[0] && action2 == verb[1]){

    return om + action2 + how + prep + object2 + infin;

  } else if (om == lex[0] && action2 == verb[0]){

    return om + action2 + object2 + how;

  }else if ( om == lex[1]){

    return om + object2 + infin + action4 + how  ;

  } else {
    return om + action5 + how + prep2 + object2;
  };


};
let theBoys  = ['Butcher.', 'Homelander.'];
const generator2 = ()=>{

let quote2 = ['. Just like '];

return quote2 + theBoys[genNum2()];
};

let msg1 = generator1();
let msg2 = generator1() + generator2();

let mixmsg = [msg1, msg2];

const mixedmessages = ()=>{
return mixmsg[genNum2()];
};


//console.log(mixedmessages());
// dom stuff //

let customBut = document.getElementById('Custom');
let defaultBut = document.getElementById('Default');
let genMesBut = document.getElementById('genMes');

let submitbut = document.getElementById('subBut');

let ferstInput = document.getElementById("aname");
let secundInput = document.getElementById("anoname");
let therdInput = document.getElementById("sup");
let ferthInput = document.getElementById("ansup");
//disabled on page load 
genMesBut.disabled = true;
 ferstInput.disabled = true;
secundInput.disabled = true;
therdInput.disabled = true;
ferthInput.disabled = true;
submitbut.disabled = true;

const customButEnable = ()=>{
  genMesBut.innerHTML = "De-generate Message";
  defaultBut.disabled = true;  
  document.getElementById("aname").disabled = false;
  document.getElementById("anoname").disabled = false;
  document.getElementById("sup").disabled = false;
  document.getElementById("ansup").disabled = false;
  submitbut.disabled = false;
};
//
const defButDisables =()=>{
   customBut.disabled = true; 
   genMesBut.disabled = false;
};
//
const genEnable = ()=>{
  genMesBut.disabled = false;
  submitbut.disabled = true;
};
customBut.onclick = customButEnable;
defaultBut.onclick = defButDisables ;
submitbut.onclick = genEnable;

let printSpot = document.getElementById("printOut");

const mesMixer = ()=>{
  printSpot.innerHTML = mixedmessages();
  genMesBut.disabled = true;
};

genMesBut.onclick = mesMixer;