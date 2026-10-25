//js program to  print duplicates in array

let numbers = [56, 78, 90, 23, 90, 76, 43, 56];
for(let i=0;i<numbers.length;i++){
    for(let j=i+1;j<numbers.length;j++){
       if(numbers[i]===numbers[j]){
        console.log(numbers[i]);
       }
    }
}