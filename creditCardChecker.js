// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];
// Add your functions below:
const validateCred = (arr) => {
  let evenList =[];
  let oddList =[];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 1) {
      oddList.push(arr[i]);
    } else {
      evenList.push(arr[i])
      }
}
//  console.log(oddList);
//  console.log(evenList);
evenList = evenList.map(num => {
  if (num * 2 > 9){
    return num * 2 - 9;
  }else {
    return num * 2;
  }
});
//new evenList 
// console.log(evenList);

let sumOdd = oddList.reduce((x, y)=>{return x+y});
let sumEven = evenList.reduce((z, q)=>{return z+q});

// console.log(sumOdd);
// console.log(sumEven);

const total = ( sumOdd, sumEven )=>{
  let result = sumOdd + sumEven;
  //console.log(result);
  if (result% 10 == 0){return true;}
  else {return false;}
   };
  


return total( sumOdd, sumEven );
  //console.log(total(sumOdd,sumEven));
  };
 // test 
 

let invList = [];
  let vaList = [];
function findInvalidCards(cards){
  //let invList = [];
  //let vaList = [];
  for (let i=0; i < cards.length; i++){
      if (validateCred(cards[i]) == true ){
         vaList.push(cards[i]);
      }else if (validateCred(cards[i]) == false ){
        invList.push(cards[i]);}
      
  }
 //return invList;
  console.log(invList);
  //console.log(vaList);
};
//console.log(batch);
findInvalidCards(batch);


let brandList = [];
const idInvalidCardCompanies = (list)=>{
    //let brandList = [];
    for (let i=0; i<list.length; i++){
      if (list[i][0] == 3 ){
         brandList.splice(0,1,'Amex');
       
      }else if (list[i][0] == 4){
        brandList.splice(1,1,'Visa');
      }else if(list[i][0] == 5){
        brandList.splice(2,1,'Mastercard');
      } else if (list[i][0] == 6){
        brandList.splice(3,1,'Discover');
      }else {
        brandList.splice(4,1,'Company-Not-Found')
      }
    }
    console.log(`The Brands list is : ${brandList}`);
};

idInvalidCardCompanies(invList);




