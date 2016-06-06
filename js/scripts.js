
$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    event.preventDefault();

    debugger;

    var q1 = $("input#fav1").val();
    var q2 = $("input#fav2").val();
    var q3 = $("input#fav3").val();
    var answers = [q1, q2, q3];
    var answersNew = [answers[1], answers[0], answers[2]];
    // var answersFinal = [answers.push(answersNew[0], answersNew[1], answersNew[2])];
    answers.push(answersNew[0], answersNew[1], answersNew[2]);

    $(".fav1").text(answers[1]);
    $(".fav2").text(answers[0]);
    $(".fav3").text(answers[2]);
    $(".fav4").text(answers[4]);
    $(".fav5").text(answers[3]);
    $(".fav6").text(answers[5]);

    $("#result-array").show();

  });
});
