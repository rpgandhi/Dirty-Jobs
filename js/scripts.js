//business logic


//front end logic
$(document).ready(function() {
  $("#quiz").submit(function(event) {
    event.preventDefault();
  });
  var answersArr = [];
  $("#quizNav1").click(function(event) {
    $("input:checkbox[name=quizboxes]:checked").each(function(){
      var answer = $(this).val();
      answersArr.push(answer);
      console.log(answersArr);
    });
    $("#quiz1").hide();
    $("#quiz2").fadeIn("slow");
  })
  $("#quizNav2").click(function(event) {
    $("input:checkbox[name=quizboxes2]:checked").each(function(){
      var answer = $(this).val();
      answersArr.push(answer);
      console.log(answersArr);
    });
    $("#quiz2").hide();
    $("#quiz3").fadeIn("slow");
  });
  $("#quizNav3").click(function(event) {
    $("input:checkbox[name=quizboxes3]:checked").each(function(){
      var answer = $(this).val();
      answersArr.push(answer);
      console.log(answersArr);
    });
    $("#quiz3").hide();
  });

  // console.log(answersArr);
});
