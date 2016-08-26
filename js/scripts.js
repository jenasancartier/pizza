//business logic:
function Pizza(size, protein, veggies) {
  this.size = size;
  this.protein = protein;
  this.veggies = veggies;
}

Pizza.prototype.calculatePrice = function() {
  var pizzaPrice = 0;
  if (this.size === "Small") {
    pizzaPrice += 8;
  } else if (this.size === "Medium") {
    pizzaPrice += 12;
  } else if (this.size === "Large") {
    pizzaprice += 16;
  }
  if (this.protein === "Field Sausage") {
    pizzaPrice += 3;
  } else if (this.protein === "Pepper Roni") {
    pizzaPrice += 2;
  } else if (this.protein === "BBQ Chickum") {
    pizzaPrice += 3;
  } else {
    for (var i=0; i<selectVeggies.length; i++) {
      pizzaPrice += ([i] * 2);
    }

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
    var selectVeggies = [];
    $(".veggie-option").each(function(index, checkbox) {
    var checked = checkbox.checked;
    var value = $(checkbox).val();
    if (checked) {
      selectVeggies.push(value);
    }
    // var newPizza = new Pizza(selectSize, selectProtein, selectVeggies);
  });

    var newPizza = new Pizza(selectSize, selectProtein, selectVeggies);



    $(".output").show();
    $("#showSize").text(selectSize);
    $("#showProtein").text(selectProtein);
    $("#showVeggies").text(selectVeggies.join(", "));
    $("#pizzaPrice").text(newPizza.calculatePrice());


  });
});
