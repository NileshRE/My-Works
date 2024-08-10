// Implement a function that performs binary search on an array of numbers. 
// The function should take in a sorted array of integers and a target integer to find. 
// It returns the index of the target element or -1, if the target element doesn't exist in the array.

function binarySearch(arr, target){
    let left=0;
    let right=arr.length-1;
    for (let i=0;left<=right; i++){
        const mid = Math.floor((left+right)/2);
        if(target<arr[mid]){
            right=mid-1;
        } else if(target>arr[mid]){
            left=mid+1;
        }else{
            return mid;
        }
    }
    return -1;
}

console.log(binarySearch([1,2,4,7,8,10], 3))