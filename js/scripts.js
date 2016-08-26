//business logic:
function Pizza(size, protein) {
  this.size = size;
  this.protein = protein;
  this.veggies = [];
}

function Veggie(mushrooms, artichokes, arugula, greenpeppers, olives) {
  this.mushrooms = mushrooms;
  this.artichokes = artichokes;
  this.arugula = arugula,
  this.greenpeppers = greenpeppers;
  this.olives = olives;
}

// Pizza.prototype.calculatePrice = function() {
//
// }

//user interface logic:
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var selectSize = $("select#size-options").val();
    var selectProtein = $("select#protein-options").val();
    var newPizza = new Pizza(selectSize, selectProtein);

    $(".veggie-options").each(function(){
      var inputMushrooms = $(this).find("input#mushrooms").val();
      var inputArtichokes = $(this).find("input#artichokes").val();
      var inputArugula = $(this).find("input#arugula").val();
      var inputGreenPeppers = $(this).find("input#green-peppers").val();
      var inputOlives = $(this).find("input#olives").val();
      var newVeggies = new Veggie(inputMushrooms, inputArtichokes, inputArugula, inputGreenPeppers, inputOlives)
      newPizza.veggies.push(newPizza)


      $(".output").show();
      $("#showSize").text(selectSize);
      $("#showProtein").text(selectProtein);
      $("#showVeggies").text(inputMushrooms, inputArtichokes, inputArugula, inputGreenPeppers, inputOlives);



    });





  });
});
