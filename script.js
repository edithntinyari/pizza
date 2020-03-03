
 function pizza(pizza size, pizza crust,pizza inputtedNewTopping) {
   this.pizza size = pizza size;
   this.pizza crust = pizza crust;
/  this.pizza toppings= pizza toppings;
 }

 $(document).ready(function() {
   $("form#totalprice").submit(function(event) {
     event.preventDefault();
     var inputtedPizzaSize = $("input#pizza sizeze").val();
     var inputtedPizzaCrust = $("input#pizza crust").val();
     var inputtedPizzaTopping=$("input#pizza topping").val();

     var totalPrice = new price(inputtedPizzaSize, inputtedNewTopping,inputtedNewCrust);

     $("ul#totalprice").append("<li><span>" pizza topping+ pizza size + pizza crust"</span></li>");

     $("input#pizza-size").val("");
     $("input#pizza-crust").val("");
     $("input#pzza-topping").val("");

     funtion totalPrice(pizza price,pizza crust,pizza toppings){
             
    result=pizza price+pizza crust+pizza topping
    
     }
     alert(your total order)




    }

    }  
    
    


  });
}); 



































