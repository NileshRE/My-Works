// Given 2 sorted array of integers, find the elements that exist in both arrays.

function Intersect(arr1, arr2){
    const result=[];
    let i=0, j=0;
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]===arr2[j]){
            result.push(arr1[i]);
                i++;
                j++;
        } else if(arr1[i]<arr2[i]){
            i++;
        }else{
            j++;
        }
    }
    return result;
}

console.log(Intersect([1,2,2,4,5,6],[2,2,4,10,20,2000]))