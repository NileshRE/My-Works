// Question - Print 2nd largest number inside an array

function secondLargNum(array){
    const uniqueArr = Array.from(new Set(array));   //new Set Time complexity: O(n)
    const sorted = uniqueArr.sort((a, b)=> b-a)     //sort function Time complexity: O(nlogn)
    if(sorted.length>=2){
        console.log("2nd largest number:",sorted[1])
    }else{
        console.log("Comparison can't be done")
    }
    
}
// Time complexity : O(nlogn)


// Optimized Approach

function secondLargNumOptim(array){
    let largest = Number.NEGATIVE_INFINITY;
    let secLargest = Number.NEGATIVE_INFINITY;

    for(let i=0; i < array.length; i++){
        if(array[i]>largest){
        secLargest=largest;
        largest = array[i];
        } else if (array[i]!= largest && array[i]>secLargest){
            secLargest = array[i];
        }
    }
    return secLargest;
}

// Time complexity - O(n): since, no. of operations are dependent on array length.
// Space complexity - O(1): It is returning a single element from Array.