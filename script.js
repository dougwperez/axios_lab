var el = document.getElementById("myUl");
var sortable = Sortable.create(el);

var array = [];

array.forEach(function (item) {
  var li = document.createElement("li");
  var text = document.createTextNode(item);
  li.appendChild(text);
  document.getElementById("myUl").appendChild(li);
});
var codes;
var finalAnswer;
var words;
var hints;

//IMG
var img = document.createElement("img");
img.src = "goodjobbanner.jpg";
var src = document.getElementById("x");
img.height = 275;
img.width = 450;
img.style.margin = "0 auto";

//AUDIO
var win = new Audio();
win.src = "score.mp3";
win.volume = 0.5;

let log = document.getElementById("finresult");

const targetNode = document.getElementById("myUl");
const config = { attributes: true, childList: true, subtree: true };
const callback = function (mutationsList, observer) {
  // Use traditional 'for loops' for IE 11
  for (let mutation of mutationsList) {
    if (mutation.type === "attributes" && myUl.textContent === finalAnswer) {
      console.log("The " + mutation.attributeName + " attribute was modified.");
      console.log(myUl.textContent);
      console.log("Correct Order");
      win.play();
      src.appendChild(img);
      log.textContent = "correct";
    }
  }
};

const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);

$("#problem1").on("submit", function (event) {
  event.preventDefault();
  var $answer = $(this).find("[name = answer]");
  var answer = $answer.val();
  if (answer === words[0]) {
    $("#result").html("<strong>Correct</strong>");
    var li = document.createElement("li");
    var text = document.createTextNode(words[0]);
    li.appendChild(text);
    document.getElementById("myUl").appendChild(li);
    document.getElementById("check1").disabled = true;
  } else {
    $("#result").html("<strong>Try Again</strong>");
  }
});

$("#problem2").on("submit", function (event) {
  event.preventDefault();
  var $answer = $(this).find("[name = answer]");
  var answer = $answer.val();
  if (answer === words[1]) {
    $("#result2").html("<strong>Correct</strong>");
    var li = document.createElement("li");
    var text = document.createTextNode(words[1]);
    li.appendChild(text);
    document.getElementById("myUl").appendChild(li);
    document.getElementById("check2").disabled = true;
  } else {
    $("#result2").html("<strong>Try Again</strong>");
  }
});

$("#problem3").on("submit", function (event) {
  event.preventDefault();
  var $answer = $(this).find("[name = answer]");
  var answer = $answer.val();
  if (answer === words[2]) {
    $("#result3").html("<strong>Correct</strong>");
    var li = document.createElement("li");
    var text = document.createTextNode(words[2]);
    li.appendChild(text);
    document.getElementById("myUl").appendChild(li);
    document.getElementById("check3").disabled = true;
  } else {
    $("#result3").html("<strong>Try Again</strong>");
  }
});

$("#problem4").on("submit", function (event) {
  event.preventDefault();
  var $answer = $(this).find("[name = answer]");
  var answer = $answer.val();
  if (answer === words[3]) {
    $("#result4").html("<strong>Correct</strong>");
    var li = document.createElement("li");
    var text = document.createTextNode(words[3]);
    li.appendChild(text);
    document.getElementById("myUl").appendChild(li);
    document.getElementById("check4").disabled = true;
  } else {
    $("#result4").html("<strong>Try Again</strong>");
  }
});

$("#problem5").on("submit", function (event) {
  event.preventDefault();
  var $answer = $(this).find("[name = answer]");
  var answer = $answer.val();
  if (answer === words[4]) {
    $("#result5").html("<strong>Correct</strong>");
    var li = document.createElement("li");
    var text = document.createTextNode(words[4]);
    li.appendChild(text);
    document.getElementById("myUl").appendChild(li);
    document.getElementById("check5").disabled = true;
  } else {
    $("#result5").html("<strong>Try Again</strong>");
  }
});

$("#problem6").on("submit", function (event) {
  event.preventDefault();
  var $answer = $(this).find("[name = answer]");
  var answer = $answer.val();
  if (answer === words[5]) {
    $("#result6").html("<strong>Correct</strong>");
    var li = document.createElement("li");
    var text = document.createTextNode(words[5]);
    li.appendChild(text);
    document.getElementById("myUl").appendChild(li);
    document.getElementById("check6").disabled = true;
  } else {
    $("#result6").html("<strong>Try Again</strong>");
  }
});

function hint() {
  hintbox.style.display = "block";
  $("#hinttext").html(hints);
}

function about() {
  aboutbox.style.display = "block";
}

function hidebox() {
  hintbox.style.display = "none";
  aboutbox.style.display = "none";
}
