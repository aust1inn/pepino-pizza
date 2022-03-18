function Pizza (size ,crust) {
    this.size = size
    this.crust = crust
    this.toppings = []
};


 
// user logic

$(document).ready(function(){

    $("#order-btn").click(function(){
        $("#order-btn").text("Another order");

       
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
                toppingsPrice +=100
            }
            else if (element=="pepperoni" && myPizza.size=="medium") {
                toppingsPrice +=150
            }
            else if (element=="pepperoni" && myPizza.size=="large") {
                toppingsPrice +=200
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
                toppingsPrice +=50
            }
            else if (element=="onions" && myPizza.size=="medium") {
                toppingsPrice +=75
            }
            else if (element=="onions" && myPizza.size=="large") {
                toppingsPrice +=100
            }
            
        });    


        // size pricing
        let sizePrice = 0
        if (myPizza.size=="small") {
            sizePrice +=500
        }
        else if (myPizza.size=="medium") {
            sizePrice +=850
        }
        else if (myPizza.size=="large") {
            sizePrice +=1300
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
        };


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
            "<td class=price>"+
            totalPrice +
            "</td>" +
            "</tr>"
        );
        let prices = [];
        let grand = 0
        $(".price").each(function(){
            prices.push(parseInt($(this).text()))
          });
        //   alert(prices)

        prices.forEach(price => {
              grand +=price
          });

        $("#total").text(" Total: Ksh" +grand)

        $("#checkout").click(function(){
        
            let deliveryStatus = $("#deliver").val();
            let myLocation = $("#location").val();
            let myPay = 250;

            if (deliveryStatus=="yes") {
                myPay +=grand
                $(".result1").append("Your pay is Ksh" +myPay)
                $(".result2").append(`Your order will be delivered to ${myLocation} Thank you for shopping with pepino`)

            }
        });

    });
});

// checkout


