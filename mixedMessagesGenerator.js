
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
const butTextChange = ()=>{
  genMesBut.innerHTML = "De-generate Message";
  defaultBut.disabled = true;
};
//


const defButReset =()=>{
   customBut.disabled = true;
   document.getElementById("aname").disabled = true;
   document.getElementById("anoname").disabled = true;
   document.getElementById("sup").disabled = true;
   document.getElementById("ansup").disabled = true;

};
//
customBut.onclick = butTextChange;
defaultBut.onclick = defButReset;

let printSpot = getElementById('printOut');

const mesMixer = ()=>{
  printSpot.innerHTML = mixedmessages();

};

genMesBut.onclick = mesMixer;