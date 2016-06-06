
$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    event.preventDefault();

    debugger;

    var q1 = $("input#fav1").val();
    var q2 = $("input#fav2").val();
    var q3 = $("input#fav3").val();
    var answers = [q1, q2, q3];
    var answersNew = [answers[1], answers[0], answers[2]];

    $(".fav2").text(answersNew[0]);
    $(".fav1").text(answersNew[1]);
    $(".fav3").text(answersNew[2]);

    $("#result-array").show();

  });
});
