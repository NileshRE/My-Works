// rotate array elements by K steps

function rotateArray(arr, k){
    let size = arr.length;
    if(k>size){
        k=k%size;
    }

    const rotated = arr.splice(size-k, k);
    arr.unshift(...rotated);

    return arr;
}
//Time complexity - O(n) because splice and unshift have O(n).

console.log(rotateArray([5, 10, 14, 17, 16], 6))

