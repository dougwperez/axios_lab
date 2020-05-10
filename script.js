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
  var randomnum = Math.floor(Math.random() * 6) + 1;
  finalAnswer, codes, words;
  if (randomnum == 1) {
    codes = ["yob", "clsaomrso.", "gose", "hte", "ot", "heT"];
    words = ["boy", "classroom.", "goes", "the", "to", "The"];
    finalAnswer = "Theboygoestotheclassroom.";
  } else if (randomnum == 2) {
    codes = ["oMm", "ovel", "wsim.", "ot", "add", "nad"];
    words = ["Mom", "love", "swim.", "to", "dad", "and"];
    finalAnswer = "Momanddadlovetoswim.";
  } else if (randomnum == 3) {
    codes = ["tac.", "ftaer", "hTe", "god", "hte", "cahses"];
    words = ["cat.", "after", "The", "dog", "the", "chases"];
    finalAnswer = "Thedogchasesafterthecat.";
  } else if (randomnum == 4) {
    codes = ["nru", "isernfd.", "velo", "twih", "ot", "I"];
    words = ["run", "friends.", "love", "with", "to", "I"];
    finalAnswer = "Ilovetorunwithfriends.";
  } else if (randomnum == 5) {
    codes = ["ot", "alkw", "yM", "kelis", "god", "ehmo."];
    words = ["to", "walk", "My", "likes", "dog", "home."];
    finalAnswer = "Mydoglikestowalkhome.";
  } else if (randomnum == 6) {
    codes = ["rsfei", "ehT", "urhgembar", "elmls", "nad", "gdoo."];
    words = ["fries", "The", "hamburger", "smell", "and", "good."];
    finalAnswer = "Thehamburgerandfriessmellgood.";
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
  var randomnum = Math.floor(Math.random() * 6) + 1;
  finalAnswer, codes, words;
  if (randomnum == 1) {
    codes = ["adevretnu.", "iggno", "eW", "rea", "no", "na"];
    words = ["adventure.", "going", "We", "are", "on", "an"];
    finalAnswer = "Wearegoingonanadventure.";
  } else if (randomnum == 2) {
    codes = ["ifavoetr", "yM", "ttoPer.", "si", "kobo", "arrHy"];
    words = ["favorite", "My", "Potter.", "is", "book", "Harry"];
    finalAnswer = "MyfavoritebookisHarryPotter.";
  } else if (randomnum == 3) {
    codes = ["ouyr", "stmu", "xames.", "oYu", "tsudy", "ofr"];
    words = ["your", "must", "exams.", "You", "study", "for"];
    finalAnswer = "Youmuststudyforyourexams.";
  } else if (randomnum == 4) {
    codes = ["fciiudftl", "si", "cieceSn", "eyvr", "cbjesut.", "a"];
    words = ["difficult", "is", "Science", "very", "subject.", "a"];
    finalAnswer = "Scienceisaverydifficultsubject.";
  } else if (randomnum == 5) {
    codes = ["na", "vahe", "idaP.", "ueds", "I", "ot"];
    words = ["an", "have", "iPad.", "used", "I", "to"];
    finalAnswer = "IusedtohaveaniPad.";
  } else if (randomnum == 6) {
    codes = ["ttes", "teh", "eadtrsh", "koto", "eW", "vree."];
    words = ["test", "the", "hardest", "took", "We", "ever."];
    finalAnswer = "Wetookthehardesttestever.";
  }
  console.log(randomnum);
  $("#p1code").html(codes[0]);
  $("#p2code").html(codes[1]);
  $("#p3code").html(codes[2]);
  $("#p4code").html(codes[3]);
  $("#p5code").html(codes[4]);
  $("#p6code").html(codes[5]);
  $("#p6code").html(codes[6]);
  return [finalAnswer, codes, words];
}

function hardMode() {
  modal.style.display = "none"; //removes modal
  var randomnum = Math.floor(Math.random() * 6) + 1;
  finalAnswer, codes, words;
  if (randomnum == 1) {
    codes = ["heseniC", "aChin", "eralnrde", "hiwel", "eW", "ni"];
    words = ["Chinese", "China", "learned", "while", "We", "in"];
    finalAnswer = "WelearnedChinesewhileinChina";
  } else if (randomnum == 2) {
    codes = ["oegs", "yob", "nignadc", "hTe", "ightn", "veery"];
    words = ["goes", "boy", "dancing", "The", "night", "every"];
    finalAnswer = "Theboygoesdancingeverynight";
  } else if (randomnum == 3) {
    codes = ["ilwl", "ov1C9i-d", "eatb", "hTe", "eevlyunlat", "rdwlo"];
    words = ["will", "Covid-19", "beat", "The", "eventually", "world"];
    finalAnswer = "TheworldwilleventuallybeatCovid-19";
  } else if (randomnum == 4) {
    codes = [
      "si",
      "eth",
      "riinblcyde",
      "nmittrpao.",
      "vetennnrimo",
      "irogtcPent",
    ];
    words = [
      "is",
      "the",
      "incredibly",
      "important.",
      "environment",
      "Protecting",
    ];
    finalAnswer = "Protectingtheenvironmentisincrediblyimportant.";
  } else if (randomnum == 5) {
    codes = ["si", "esesennct", "griitWn", "rodw", "isx", "rtrusfintga."];
    words = ["is", "sentences", "Writing", "word", "six", "frustrating."];
    finalAnswer = "Writingsixwordsentencesisfrustrating.";
  } else if (randomnum == 6) {
    codes = ["dwlro.", "eH", "tlarev", "ot", "eht", "vleos"];
    words = ["world.", "He", "travel", "to", "the", "loves"];
    finalAnswer = "Helovestotraveltheworld.";
  }
  $("#p1code").html(codes[0]);
  $("#p2code").html(codes[1]);
  $("#p3code").html(codes[2]);
  $("#p4code").html(codes[3]);
  $("#p5code").html(codes[4]);
  $("#p6code").html(codes[5]);
  $("#p6code").html(codes[6]);
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
