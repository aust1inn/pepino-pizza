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
        let totalPrice = 0
        if (myPizza.size=="small") {
            totalPrice +=300
        }
        else if (myPizza.size=="medium") {
            totalPrice +=600
        }
        else if (myPizza.size=="large") {
            totalPrice +=900
        }

        alert(totalPrice)

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
            "<td>"+
            totalPrice +
            "</td>" +
            "</tr>"
        );
    });
});

