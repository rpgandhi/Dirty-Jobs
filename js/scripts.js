//business logic


//front end logic
$(document).ready(function() {
  $("#quiz").submit(function(event) {
    event.preventDefault();
    var fluidComfortArr = [];
    $("input:checkbox[name=fluid-comfort]:checked").each(function(){
      var fluidComfort = $(this).val();
      fluidComfortArr.push(fluidComfort);
    });
      $("#output").text(fluidComfortArr);


  });
  $("#quizNav1").click(function(event) {
    $("#quiz1").hide();
    $("#quiz2").show();
  })
  $("#quizNav2").click(function(event) {
    $("#quiz2").hide();
    $("#quiz3").show();
  })
});
