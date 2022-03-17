function Pizza (size ,crust) {
    this.size = size
    this.crust = crust
    this.toppings = []
};

let toppingsPrice = [{
    pepperoni:{
        small:50,
        medium:75,
        large:100
    },
    cheese:{
        small:75,
        medium:100,
        large:125
    },
    onion:{
        small:25,
        medium:50,
        large:75
    }

}
    
]
 
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
        let sizePrice = 0
        if (myPizza.size=="small") {
            sizePrice +=300
        }
        else if (myPizza.size=="medium") {
            sizePrice +=600
        }
        else if (myPizza.size=="large") {
            sizePrice +=900
        }

        // crust pricing
        let crustPrice = 0
        if (myPizza.crust=="crispy") {
            crustPrice +=100
        }
        else if (myPizza.crust=="stuffed") {
            crustPrice +=150
        }
        else if (myPizza.crust=="glutten-free") {
            crustPrice +=200
        }


        let totalPrice = crustPrice + sizePrice

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

