const firststack = [];
const secondstack = [];
var len=firststack.length;

    function enqueue(ele) {
        firststack.push(ele);
        console.log(firststack);
    }
    function dequeue(ele){

      if (secondstack.length==0){
        if(firststack.length==0){
            console.log("No elements")
        }
        while(len >0){
        
            var popped_element=firststack.pop();
            secondstack.push(popped_element);
        }
        }
        console.log(secondstack.push(popped_element));
      }
     
  
   enqueue('1');
   enqueue('2');
   enqueue('3');
   enqueue('4');
   dequeue();
   dequeue();
   dequeue();
   dequeue();
   
   
       