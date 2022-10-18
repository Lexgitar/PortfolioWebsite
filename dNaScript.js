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
const enabProdButt = ()=>{prodButton.disabled = false};
passInButton.onclick = enabProdButt;
//
const produceDna = ()=>{
    
    ranger.disabled = false;

};
