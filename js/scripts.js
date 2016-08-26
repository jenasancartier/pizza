//business logic:
function Pizza(size, protein, cheese, veggies) {
  this.size = size;
  this.protein = protein;
  this.cheese = cheese;
  this.veggies = veggies;
}


Pizza.prototype.calculatePrice = function() {
  var pizzaPrice = 0;
  debugger;
  if (this.size === "Small") {
    pizzaPrice += 8;
  } else if (this.size === "Medium") {
    pizzaPrice += 12;
  } else if (this.size === "Large") {
    pizzaPrice += 16;
  }
  if (this.protein === "Field Sausage") {
    pizzaPrice += 3;
  } else if (this.protein === "Pepper Roni") {
    pizzaPrice += 2;
  } else if (this.protein === "BBQ Chickpeas") {
    pizzaPrice += 3;
  }
  if (this.cheese === "Notzarella Cheese") {
    pizzaPrice += 1;
  } else if (this.cheese === "Cashew Cheese") {
    pizzaPrice += 2;
  } else if (this.cheese === "Creamy Avocado Pesto Cheese") {
    pizzaPrice += 3;
  }
  var i = this.veggies[i];
  for (var i=0; i<this.veggies.length; i++) {
    pizzaPrice += ([i] * 2);
    }
    return pizzaPrice;
  }

var newPizza;

//user interface logic:
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var selectSize = $("select#size-options").val();
    var selectProtein = $("select#protein-options").val();
    var selectCheese = $("select#cheese-options").val();
    var selectVeggies = [];
    $(".veggie-option").each(function(index, checkbox) {
    var checked = checkbox.checked;
    var value = $(checkbox).val();
    if (checked) {
      selectVeggies.push(value);
    }
  });

    var newPizza = new Pizza(selectSize, selectProtein, selectCheese, selectVeggies);


    $(".output").show();
    $("#showSize").text(selectSize);
    $("#showProtein").text(selectProtein);
    $("#showCheese").text(selectCheese);
    $("#showVeggies").text(selectVeggies.join(", "));
    $("#pizzaPrice").text(newPizza.calculatePrice());


  });
});
