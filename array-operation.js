
//*
//* write  a  function give me the sum of all numbers in an array
//*
//*step-->1 declare a function
//*step--->2 call check whether function is properly
//*step--->3 set a perameter(s)
//*step--->4 pas the perameter(s),check whether perameter is passed in a proper format
//*step-->5 do the function operation(step by step)
//*
//*


 
function sumOfNumbers(numbers){
    let sum=0;
     for( const number of numbers){
        console.log(number);
        sum=sum+number;
     }
     return sum;
}
 
  const numbs=[2,3,4,5,5,6,]
  const sum=sumOfNumbers(numbs);
 console.log('sum of numbers is',sum);