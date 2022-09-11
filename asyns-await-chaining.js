//promises chaining - Date: August 02

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

calculate(1,2,3).then((displayAdditionAbove) => {
  console.log(`The addition result: ${displayAdditionAbove}`); //string interpolation
  return calculate(displayAdditionAbove, 4,5)
}).then((result) => {
  console.log(`The second call continuously: ${result}`)
})
.catch(err => {console.log(err)});
