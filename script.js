var el = document.getElementById("myUl");
var sortable = Sortable.create(el);
//CHANGE *1 to *2 for second game mode
var randomnum = Math.floor(Math.random() * 2) + 1;
console.log(randomnum);

var array = [];

array.forEach(function (item) {
  var li = document.createElement("li");
  var text = document.createTextNode(item);
  li.appendChild(text);
  document.getElementById("myUl").appendChild(li);
});
//Data bank
if (randomnum == 1) {
  var codes = ["qjyreu", "achin", "eralnrde", "hiwel", "eW", "ni"];
  var words = ["jquery", "china", "learned", "while", "We", "in"];
  var finalAnswer = "Welearnedjquerywhileinchina";
} else if (randomnum == 2) {
  var codes = ["oegs", "yob", "nignadc", "hTe", "ightn", "veery"];
  var words = ["goes", "boy", "dancing", "The", "night", "every"];
  var finalAnswer = "Theboygoesdancingeverynight";
}
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

//src.appendChild(img);
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

$("#p1code").html(codes[0]);
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
  } else {
    $("#result").html("<strong>Try Again</strong>");
  }
});

$("#p2code").html(codes[1]);
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
  } else {
    $("#result2").html("<strong>Try Again</strong>");
  }
});

$("#p3code").html(codes[2]);
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
  } else {
    $("#result3").html("<strong>Try Again</strong>");
  }
});

$("#p4code").html(codes[3]);
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
  } else {
    $("#result4").html("<strong>Try Again</strong>");
  }
});

$("#p5code").html(codes[4]);
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
  } else {
    $("#result5").html("<strong>Try Again</strong>");
  }
});

$("#p6code").html(codes[5]);
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
  } else {
    $("#result6").html("<strong>Try Again</strong>");
  }
});
