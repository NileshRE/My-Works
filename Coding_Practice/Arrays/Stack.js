// Implement a stack data structure in JavaScript that contains the following operations:

// new Stack(): Creates an instance of a Stack class that doesn't contain any items. The constructor does not accept any arguments.
// push(): Pushes an item onto the top of the stack. Required time complexity: O(1).
// pop(): Removes an item at the top of the stack and returns that item. Required time complexity: O(1).
// isEmpty(): Determines if the stack is empty. Required time complexity: O(1).
// peek(): Returns the item at the top of the stack without removing it from the stack. Required time complexity: O(1).
// length(): Returns the number of items in the stack. Required time complexity: O(1).



class Stack {
    constructor() {
    this.items=[];
    }
  
    push(item) {
      this.items.push(item);
      return this.items.length;
      
    }
  
    pop() {
       this.items.pop();
       return items;
      
    }
  
    isEmpty() {
     return this.items.length===0;
      
    }
  
    peek() {
      if(this.items.length > 0){
      return this.items[this.items.length-1];
      }
     
    }
  
    length() {
      return this.items.length;
  }
  }
  
  const s = new Stack();
  s.push(100)
  s.push(200)
  console.log(s.length())