function Pizza (size ,crust) {
    this.size = size
    this.crust = crust
    this.toppings = []
};

// user logic

$(document).ready(function(){

    $("#order-btn").click(function(){


        let pizzaSize= $("#pizza-size").val();
        let pizzaCrust= $("#crust").val();
        let pizzaToppings = new Array ();
        
        $('input[name="toppings"]:checked').each(function() {
            pizzaToppings.push(this.value);
            });

        let myPizza = new Pizza (pizzaSize ,pizzaCrust)
        myPizza.toppings=pizzaToppings

        // size pricing
        //     let sizePrice = 0
        // if (myPizza.size=small) {
        //     let sizePrice = 300
        // }
        // else if (myPizza.size=medium) {
        //     let sizePrice = 600
        // }
        // else if (myPizza.size=large) {
        //     let sizePrice = 900
        // }

        $("#my-orders").append(
            "<tr>" +
            "<td>" +
            myPizza.size +
            "</td>" +
            "<td>" +
            myPizza.crust +
            "</td>" +
            "<td>" +
            myPizza.toppings +
            "</td>"+
            // "<td>"+
            // sizePrice +
            // "</td>" +
            "</tr>"
        );
    });
});

