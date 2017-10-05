//business logic

var garbageCollector = ["gettingdirty", "insectslive","insectsdead","animalexcrement", "humanexcrement", "strongsmells","education", "hazardousmaterials", "wakeearly"];
var homeInspector = ["animalexcrement", "animalslive", "animalsdead", "insectslive", "insectsdead", "confinedspaces", "hazardousmaterials", "gettingdirty", "wakeearly", "education"];
var septicTankServicer = ["humanexcrement", "insectslive", "insectsdead", "confinedspaces", "hazardousmaterials", "strongsmells", "gettingdirty", "education"];
var fishCanner = ["animalblood", "animalexcrement", "animalslive", "animalsdead", "exterminationslaughter",  "strongsmells", "gettingdirty", "relocate"];
var fishHatchery = ["animalslive", "animalrepro", "confinedspaces", "hazardousmaterials", "strongsmells", "relocate"];
var podiatrist = ["humanblood", "strongsmells", "education"];
var medicalExaminer = [ "humanblood", "humanexcrement", "humansdead", "hazardousmaterials", "strongsmells", "wakeearly", "education"];
var butcher = ["animalblood", "animalslive", "animalsdead",  "exterminationslaughter"];
var taxidermist = ["animalblood", "animalexcrement", "animalsdead", "insectsdead",  "hazardousmaterials", "strongsmells"];
var clothDiaper = [ "humanexcrement", "hazardousmaterials", "strongsmells",  "wakeearly"];
var exterminator = ["animalblood", "animalexcrement", "animalslive", "animalsdead", "insectslive", "insectsdead", "exterminationslaughter", "confinedspaces", "hazardousmaterials"];
var sewerInspector = ["animalexcrement", "humanexcrement", "animalslive", "animalsdead", "insectslive", "insectsdead", "confinedspaces", "hazardousmaterials", "strongsmells", "gettingdirty"];
var pigFarmer = ["animalblood", "animalexcrement", "animalslive", "animalsdead", "insectslive", "insectsdead", "animalrepro", "hazardousmaterials", "strongsmells", "gettingdirty", "wakeearly", "relocate", "education"];
var chewingGumRemover = ["hazardousmaterials"];
var pigeonPoopCleaner = ["animalexcrement", "insectslive", "hazardousmaterials"];
var oilSpillCleaner = ["animalslive", "animalsdead", "hazardousmaterials", "travel", "education"];
var horseBreeder = ["animalslive", "animalexcrement", "animalblood", "relocate"];
var slaughterHouseWorker = ["animalslive", "animalsdead", "animalblood", "relocate", "strongsmells", "gettingdirty", "exterminationslaughter"];
var poopCoffee = ["animalslive", "animalexcrement", "insectslive", "relocate"];
var mortician = ["humansdead", "hazardousmaterials", "humanexcrement", "humanblood",
"education", "wakeearly"];
var crimeSceneCleaner = ["humansdead", "insectslive", "hazardousmaterials", "humanblood", "wakeearly"];

var jobsject = { garbageCollector, homeInspector, septicTankServicer, fishCanner, fishHatchery, podiatrist, medicalExaminer, butcher, taxidermist, clothDiaper, exterminator, sewerInspector, pigFarmer, chewingGumRemover, pigeonPoopCleaner, oilSpillCleaner, horseBreeder, slaughterHouseWorker, poopCoffee, mortician, crimeSceneCleaner }


var traits = ["gettingdirty", "insectslive","insectsdead","animalexcrement", "humanexcrement", "strongsmells","education", "hazardousmaterials", "wakeearly", "confinedspaces"];

var dirty = ["Garbage Collecter", "Sewer Inspecter", "Septic Tank Servicer"];


//front end logic
$(document).ready(function() {
  $('.slider').slider();
  $("#quiz").submit(function(event) {
    event.preventDefault();
  });
  var outputArr = [];
  var answersArr = [];
  $("#quizNav1").click(function(event) {
    $("input:checkbox[name=quizboxes]:checked").each(function(){
      var answer = $(this).val();
      answersArr.push(answer);
    });
    $("#quiz1").hide();
    $("#quiz2").fadeIn("slow");
  })
  $("#quizNav2").click(function(event) {
    $("input:checkbox[name=quizboxes2]:checked").each(function(){
      var answer = $(this).val();
      answersArr.push(answer);
    });
    $("#quiz2").hide();
    $("#quiz3").fadeIn("slow");
  });
  $("#quizNav3").click(function(event) {
    $("input:checkbox[name=quizboxes3]:checked").each(function(){
      var answer = $(this).val();
      answersArr.push(answer);
    });
    $("#quiz3").hide();

    for (var i = 0; i < answersArr.length; i++) {
        var trait = "." + answersArr[i];
        $(trait).show();

    }
  });
});
