//initialize some variables i will be needing
var number;
var x = "";
//this array will hold all the values to calculate the perfect number
var sumArray = [];
//this variable will insert the ints to the array
var inputToArray;
function isPerfect(number)  
{  
var sum = 0;  //keeps track of the sum of the numbers
   for(var i=1;i<= number/2;i++)  //loop runs for number/2
     {  
         if(number%i === 0)  //if the number divides with no remainer
          {            
               
            sum += i;          
            inputToArray = i;
              
            sumArray[i]  = inputToArray; 
            
          }  
     }  
    console.log(sum, number,sumArray)
     
     if(sum === number && sum !== 0)  
        {  //appends below the form group div
            $(".form-group").append("<p>It is a perfect number.</p>");
            for(var n in sumArray){
                //puts a + sign betweens the numbers and a = sign at the last number
                if(n < sumArray[sumArray.length - 1]){
                    
                    x += (n + " + ")
                }
                else{
                    
                    x += (n + " = " + number);
                    $(".divisors").text(x);
                }
            }
            
        }   
     else  
        {  
            $(".form-group").append("<p>It is not a perfect number.</p>");   
        }     
 }   


var main = function(){
    $(".surprise").hide();
    $("#checkNumber").click( function() { 
        // get number from input box
        var usrInput = $("#newCommentBox").val();
        //parses into an int
       number = parseInt(usrInput);
        //if the input is a number then call the isPerfect function
        if(isNaN(number) === false){
        //calls the isPerfect function
        isPerfect(number);
        }
        else if(usrInput === "egg"){
            
            $(".surprise").show();
            $("img").click(function(){
                $("img").fadeOut(500); 
                $(".eggdestroy").text("Oh no you destroyed the egg now you will have bad luck!");
            })
            
            
        }
        else{
           $("p").text("You did not input a number"); 
           
        }
        
        
    
});
    
}



 

$(document).ready(main);