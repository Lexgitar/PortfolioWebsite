let letterOne = document.getElementById("lettOne");
let letterTwo = document.getElementById("lettTwo");
let letterThree = document.getElementById("lettThree");
let letterFour = document.getElementById("lettFour");

let passInButton = document.getElementById("passInButt");
let prodButton = document.getElementById("prodButt");
let dnaPrint = document.getElementById("dnaOutput");

let ranger = document.getElementById("strAmo");

//--- on page-load :
const onPageLoad=()=>{
letterTwo.disabled = true;
letterThree.disabled = true;
letterFour.disabled = true;
passInButton.disabled = true;
prodButton.disabled = true;
dnaPrint.disabled = true;
ranger.disabled = true;

};

onPageLoad();
// --- enabling back ---
const enabTwo = ()=>{letterTwo.disabled = false};
letterOne.addEventListener('change', enabTwo);
const enabThree = ()=>{letterThree.disabled = false};
letterTwo.addEventListener('change', enabThree);
const enabFour = ()=>{letterFour.disabled = false};
letterThree.addEventListener('change', enabFour);
const enabPass = ()=>{passInButton.disabled = false};
letterFour.addEventListener('change', enabPass);
const enabProdButt = ()=>{
    prodButton.disabled = false;
    letterOne.disabled = true;
    letterTwo.disabled = true;
    letterThree.disabled = true;
    letterFour.disabled = true;
    passInButton.disabled = true;
};
passInButton.onclick = enabProdButt;
//--- awesomeness
const returnRandBase = (lisT) => {
    return lisT[Math.floor(Math.random() * 4)] ;
};
const mockUpStrand = (lisT) => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase(lisT))
    }
    return newStrand
  };
  const strongNess=(strand,arg1, arg2)=>{
    let scrape=[];
          for (let i=0; i <strand.length; i++){
          if((strand[i] === arg1) || (strand[i] === arg2)){
           scrape.push(strand[i]);
        }
     };
            if (scrape.length>=8){
            return alert("WOOOOP !! Strong DNA !!The sum amount between your mom and dad's DNA base is >= 8");
      //console.log('Likely to survive : TRUE');
            }else {
            return alert("That DNA is weak, try again.. I guess");
     // console.log('Likely to survive : FALSE');
        };
    };

const produceDna = ()=>{
    let dnaBases = [letterOne.value, letterTwo.value, letterThree.value, letterFour.value];
   dnaPrint.value = mockUpStrand(dnaBases);
    strongNess(dnaPrint.value, letterTwo.value, letterThree.value);
    ranger.disabled = false;
    prodButton.disabled = true;

};
prodButton.onclick = produceDna;





