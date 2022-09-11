//promises - Date: Aug 02

//a function that returns a promise
const calculate =(a,b,c) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if( a<0 ||b<0 ||c<0)
      {
        return reject("No numbers can be negative. NO NUMBERS CAN BE NAGATIVE");
      }
      resolve(a+b+c);
    },1500)
  })
}

//call

//`THIS IS SIMILAR AS SAYING
// console.log(`THE RESULT OF THE ADDITION IS: ${calculate(1,2,3)}`);
//console.log(calculate(1,2,3));


calculate(1,2,3).then((displayAdditionAbove) => {
  console.log(`The addition result: ${displayAdditionAbove}`); //string interpolation
}).catch(err => {console.log(err)});
