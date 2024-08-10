function shuffle(arr){
    for(let i=0; i<arr.length; i++){
        const j = Math.floor(Math.random() * (i+1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
  
  console.log(shuffle([1,2,3,4]))
  