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
//Data bank

function easyMode() {
  modal.style.display = "none"; //removes modal
  var randomnum = Math.floor(Math.random() * 3) + 1;
  finalAnswer, codes, words;
  if (randomnum == 1) {
    codes = ["yob", "clsaomrso.", "gose", "hte", "ot", "heT"];
    words = ["boy", "classroom.", "goes", "the", "to", "The"];
    finalAnswer = "Theboygoestotheclassroom.";
  } else if (randomnum == 2) {
    codes = ["oMo", "ovel", "wsim.", "ot", "add", "nad"];
    words = ["Mom", "love", "swim.", "to", "dad", "and"];
    finalAnswer = "Momanddadlovetoswim.";
  } else if (randomnum == 3) {
    codes = ["tac.", "ftaer", "hTe", "god", "hte", "cahses"];
    words = ["cat.", "after", "The", "dog", "the", "chases"];
    finalAnswer = "Thedogchasesafterthecat.";
  }
  $("#p1code").html(codes[0]);
  $("#p2code").html(codes[1]);
  $("#p3code").html(codes[2]);
  $("#p4code").html(codes[3]);
  $("#p5code").html(codes[4]);
  $("#p6code").html(codes[5]);
  return [finalAnswer, codes, words];
}

function mediumMode() {
  modal.style.display = "none"; //removes modal
  var randomnum = Math.floor(Math.random() * 3) + 1;
  finalAnswer, codes, words;
  if (randomnum == 1) {
    codes = ["adevretnu", "iggno", "eW", "rea", "no", "na"];
    words = ["adventure", "going", "We", "are", "on", "an"];
    finalAnswer = "Wearegoingonanadventure";
  } else if (randomnum == 2) {
    codes = ["ifavoetr", "yM", "ttoPer", "si", "kobo", "arrHy"];
    words = ["favorite", "My", "Potter", "is", "book", "Harry"];
    finalAnswer = "MyfavoritebookisHarryPotter";
  } else if (randomnum == 3) {
    codes = ["ouyr", "stmu", "xames", "oYu", "tsudy", "ofr"];
    words = ["your", "must", "exams", "You", "study", "for"];
    finalAnswer = "Youmuststudyforyourexams";
  }
  $("#p1code").html(codes[0]);
  $("#p2code").html(codes[1]);
  $("#p3code").html(codes[2]);
  $("#p4code").html(codes[3]);
  $("#p5code").html(codes[4]);
  $("#p6code").html(codes[5]);
  return [finalAnswer, codes, words];
}

function hardMode() {
  modal.style.display = "none"; //removes modal
  var randomnum = Math.floor(Math.random() * 3) + 1;
  finalAnswer, codes, words;
  if (randomnum == 1) {
    codes = ["qjyreu", "achin", "eralnrde", "hiwel", "eW", "ni"];
    words = ["jquery", "china", "learned", "while", "We", "in"];
    finalAnswer = "Welearnedjquerywhileinchina";
  } else if (randomnum == 2) {
    codes = ["oegs", "yob", "nignadc", "hTe", "ightn", "veery"];
    words = ["goes", "boy", "dancing", "The", "night", "every"];
    finalAnswer = "Theboygoesdancingeverynight";
  } else if (randomnum == 3) {
    codes = ["ilwl", "ov1C9i-d", "eatb", "hTe", "eevlyunlat", "rdwlo"];
    words = ["will", "Covid-19", "beat", "The", "eventually", "world"];
    finalAnswer = "TheworldwilleventuallybeatCovid-19";
  }
  $("#p1code").html(codes[0]);
  $("#p2code").html(codes[1]);
  $("#p3code").html(codes[2]);
  $("#p4code").html(codes[3]);
  $("#p5code").html(codes[4]);
  $("#p6code").html(codes[5]);
  return [finalAnswer, codes, words];
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
  } else {
    $("#result6").html("<strong>Try Again</strong>");
  }
});
