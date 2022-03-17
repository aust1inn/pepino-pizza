function Pizza (size ,crust) {
    this.size = size
    this.crust = crust
    this.toppings = []
};

// user logic

$(document).ready(function(){

   let pizzaSize= $("#pizza-size").val();
   let pizzaCrust= $("#crust").val();
   let pizzaToppings = new Array ();

   $('input[name="toppings"]:checked').each(function() {
    pizzaToppings.push(this.value);
    });

    $("#order-btn").click(function(){
        alert(pizzaToppings)
    });
});

