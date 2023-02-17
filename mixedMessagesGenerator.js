// dom stuff //

let customBut = document.getElementById('Custom');
let defaultBut = document.getElementById('Default');
let genMesBut = document.getElementById("genMess");
let submitbut = document.getElementById('subBut');
let ferstInput = document.getElementById("aname");
let secundInput = document.getElementById("anoname");
let therdInput = document.getElementById("sup");
let furthInput = document.getElementById("ansup");

const relButton = document.getElementById('mixRefre');
//--
//disabled on page load 
ferstInput.disabled = true;
secundInput.disabled = true;
therdInput.disabled = true;
furthInput.disabled = true;
submitbut.disabled = true;
genMesBut.disabled = true;
relButton.disabled = true;

//---custom select --
const customButEnable = ()=>{
  genMesBut.innerHTML = "De-generate Message";
  defaultBut.disabled = true;  
  ferstInput.disabled = false;
  secundInput.disabled = false;
  therdInput.disabled = false;
  furthInput.disabled = false;
 // genMesBut.onclick = mesMixerFuncB;
};

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

const generator1 = (hArray)=>{
  
  let uMan = hArray[genNum()]; 
  let action2 = verb[genNum2()];
  let action4 = verb[genNum5()];
  let action5 = verb[genNum6()];
  let object2 = noun[genNum4()];
  let how = adj[genNum()];

  if (uMan == hArray[0] && action2 == verb[1]){

    return uMan + action2 + how + prep + infin + object2;

  } else if (uMan == hArray[0] && action2 == verb[0]){

    return uMan + action2 + object2 + how;

  }else if ( uMan == hArray[1]){

    return uMan + object2 + infin + action4 + how  ;

  } else {
    return uMan + action5 + how + prep2 + object2;
  };


};

let theBoys  = ['Butcher.', 'Homelander.'];


  
//theToys.push(therdInput.value, furthInput.value);

const generator2 = (suprM)=>{
let quote2 = ['. Just like '];
return quote2 + suprM[genNum2()];
};

let msg2 = generator1(lex) + generator2(theBoys);
//let msg3 = generator1(pex) + generator2(theToys);

const mixedmessages = (arrg)=>{
return arrg;
};

const defButDisables =()=>{
  customBut.disabled = true; 
  genMesBut.disabled = false;
  genMesBut.onclick = mesMixerFunc1;
};
//
const mesMixerFunc1 = ()=>{
  printSpot.innerHTML = mixedmessages(msg2);
  genMesBut.disabled = true;
  relButton.disabled = false;

};

// new arrays formage
const submitting =()=>{
  genMesBut.disabled = false;
  submitbut.disabled = true;
};

const mesMixerFuncB = ()=>{ 
  let pex = ['You ', 'Your ', ferstInput.value+" ", secundInput.value+" " ];
  let theToys = [therdInput.value+".", furthInput.value+"."];
  let msg3 = generator1(pex) + generator2(theToys);
  printSpot.innerHTML = mixedmessages(msg3);
  genMesBut.disabled = true;
  relButton.disabled = false;

  
}; 

genMesBut.onclick = ()=>{
 
  mesMixerFuncB();
};
customBut.onclick = customButEnable;
defaultBut.onclick = defButDisables ;
submitbut.onclick = submitting;

let printSpot = document.getElementById("printOut");

const subButEnable=()=>{submitbut.disabled = false;};
furthInput.addEventListener('change', subButEnable);


const reloads = ()=>{

  ferstInput.value = '';
  secundInput.value = '';
  therdInput.value = '';
  furthInput.value = '';
  defaultBut.checked =false;
  customBut.checked =false;

  location.reload();
  relButton.disabled = true;
};

relButton.onclick = reloads;
