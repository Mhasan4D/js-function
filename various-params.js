
function  evenSizedString(str){
      const size=str.length;
      console.log(str,size)
       if(size%2===0){
        console.log('even number');
        return true;
       }
      else{
        console.log('odd number')
        return false;
      }
}

 const sizeCount=evenSizedString('dhaka');
  console.log(sizeCount);




 function doubleoOrTriple(number,double){
   
       if(double===true){
         const result=number*2;
         return result;
        
       }
     else{
        const result=number*3;
        return result;

     }
 }

//  console.log(doubleoOrTriple(5,true));
//  console.log(doubleoOrTriple(5,false));

 
function numbersOfElement(number){

     const len=number.length;
      return len;
}
 
   const result=numbersOfElement([10,22,33,44,55,66,77,]);

   console.log(result);




   function getAge(person){
     const age=person.age;
      return age;

   }


   

    