// Implement a function countBy(array, iteratee) that creates an object composed 
// of keys generated from the results of running each element of array thru iteratee. 
// The corresponding value of each key is the number of times the key was returned by iteratee. 
// iteratees can either be:

// Functions: iteratee functions is invoked with one argument: (value).
// Strings: The property of an object. E.g. 'length' can be used to return the number of elements of arrays.

function countBy(array, iteratee) {
    const result = Object.create(null);
  
    for (const element of array) {
      const key =
        typeof iteratee === 'function' ? iteratee(element) : element[iteratee]; //element[iteratee] is equivalent to element.iteratee
                                                                                // but element.iteratee returns undefined if no value is present in object till runtime.
      result[key] ??= 0; // Nullish coalescing operator sets value to 0 if key is not present previously
      result[key]++;
    }
  
    return result;
  }

  console.log(countBy(['one', 'two'], 'length'))