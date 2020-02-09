  $("#problem1").on("submit", function(event) {
        event.preventDefault();
        var $answer = $(this).find("[name = answer]")
        var answer = $answer.val();
        if (answer === "jquery") {
            $("#result").html("<strong>Correct</strong>");
        }else{
             $("#result").html("<strong>Try Again</strong>");
        }
        
    });

   $("#problem2").on("submit", function(event) {
        event.preventDefault();
        var $answer = $(this).find("[name = answer]")
        var answer = $answer.val();
        if (answer === "china") {
            $("#result2").html("<strong>Correct</strong>");
        }else{
             $("#result2").html("<strong>Try Again</strong>");
        }
        });

   $("#problem3").on("submit", function(event) {
    event.preventDefault();
    var $answer = $(this).find("[name = answer]")
    var answer = $answer.val();
    if (answer === "learned") {
        $("#result3").html("<strong>Correct</strong>");
    }else{
        $("#result3").html("<strong>Try Again</strong>");
    }
   });

      $("#problem4").on("submit", function(event) {
    event.preventDefault();
    var $answer = $(this).find("[name = answer]")
    var answer = $answer.val();
    if (answer === "while") {
        $("#result4").html("<strong>Correct</strong>");
    }else{
        $("#result4").html("<strong>Try Again</strong>");
    }
   });

         $("#problem5").on("submit", function(event) {
    event.preventDefault();
    var $answer = $(this).find("[name = answer]")
    var answer = $answer.val();
    if (answer === "summer") {
        $("#result5").html("<strong>Correct</strong>");
    }else{
        $("#result5").html("<strong>Try Again</strong>");
    }
   });