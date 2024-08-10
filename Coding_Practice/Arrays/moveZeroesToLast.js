function moveZeroesToLast(arr){
    let z = 0;  // Zero Tracker
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 0) {
        arr[z++] = arr[i]
      }
    }
     arr.fill(0, z);
    return arr;
}

console.log(moveZeroesToLast([1,0,0,7,5,0]))


// Time complexity = O(n)
// Space complexity = O(1)
