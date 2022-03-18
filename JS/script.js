function Pizza (size ,crust) {
    this.size = size
    this.crust = crust
    this.toppings = []
};

// let toppingsPrices = [{
//     pepperoni:{
//         small:50,
//         medium:75,
//         large:100
//     },
//     cheese:{
//         small:75,
//         medium:100,
//         large:125
//     },
//     onion:{
//         small:25,
//         medium:50,
//         large:75
//     }

// }
// ];


// toppingsPrices.forEach(toppingsPrice => {
//     alert(toppingsPrice.pepperoni)
// });
 
// user logic

$(document).ready(function(){

    $("#order-btn").click(function(){

       
        let pizzaSize= $("#pizza-size").val();
        let pizzaCrust= $("#crust").val();

        let myPizza = new Pizza (pizzaSize ,pizzaCrust)

        
        $('input[name="toppings"]:checked').each(function() {
            myPizza.toppings.push(this.value);
            });

            // toppings pricing
            let toppingsPrice = 0
        myPizza.toppings.forEach(element => {
            if (element=="pepperoni" && myPizza.size=="small") {
                toppingsPrice +=50
            }
            else if (element=="pepperoni" && myPizza.size=="medium") {
                toppingsPrice +=75
            }
            else if (element=="pepperoni" && myPizza.size=="large") {
                toppingsPrice +=100
            }
    
            else if (element=="cheese" && myPizza.size=="small") {
                toppingsPrice +=75
            }
            else if (element=="cheese" && myPizza.size=="medium") {
                toppingsPrice +=100
            }
            else if (element=="cheese" && myPizza.size=="large") {
                toppingsPrice +=125
            }
    
            else if (element=="onions" && myPizza.size=="small") {
                toppingsPrice +=25
            }
            else if (element=="onions" && myPizza.size=="medium") {
                toppingsPrice +=50
            }
            else if (element=="onions" && myPizza.size=="large") {
                toppingsPrice +=75
            }
            
        });    

       alert(toppingsPrice)

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


        let totalPrice = crustPrice + sizePrice + toppingsPrice

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

