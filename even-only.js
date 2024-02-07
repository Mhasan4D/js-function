//*create function that will return only even numbers
//* return the sum of even numbers


function  evenNumbersOnly(numbers){
    const evens=[];
    for(const number of numbers){  
        if(number%2===0){
            console.log(number)
            evens.push(number); 
        }
    }

    return evens;
}

 
//  const evens = evenNumbersOnly(numbers)
//               console.log(evens);

   function   sumEvenNumbers(numbers){
         let sum = 0;
      for(const number of numbers) {

         if(number % 2 === 0){
         console.log(number);
         sum = sum + number;
           
        }

       }

       return sum;    

   }

     const numbers=[2,3,8,9,5,44];
     const sum =sumEvenNumbers(numbers);
      console.log('sum of even number',sum);


