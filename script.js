// БИНАРНЫЙ АЛГОРИТМ ПОИСКА 

let arr = [22,33,44,55,76,99,234,687,1112];
let binary_search = (nums,target) =>{
  let left = 0;
  let half;
  let right = nums.length -1;
  let guess; 
   while(left <= right){
    half = (left + right)
      guess = nums[half]
      if(guess == target){
        return half
      }  if(guess > target){
        right = half -1
      } else{
        left = half +1
      } 
   }
   return -1
}
console.log(binary_search(arr,"687"))


// МЕТОД SORT С НУЛЯ

let newMassiv = [23,1,7,45,99,4,3]
let sorted = (a) => {
  let msv = a.length - 1;
  for(let i = 0; i < msv; i++){
    for(let k = 0; k < msv - i; k++){
      if(a[k] > a[k + 1]){
        [a[k], a[k + 1]] = [a[k + 1], a[k]];
      }
    }
    
  }        
  return a;
};
console.log(sorted(newMassiv));