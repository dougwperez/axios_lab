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
//Data bank

function easyMode() {
  modal.style.display = "none"; //removes modal
  var randomnum = Math.floor(Math.random() * 15) + 1;
  finalAnswer, codes, words, hints;
  if (randomnum == 1) {
    codes = ["yob", "clsaomrso.", "gose", "hte", "ot", "heT"];
    words = ["boy", "classroom.", "goes", "the", "to", "The"];
    finalAnswer = "Theboygoestotheclassroom.";
    hints = "Not a girl who goes to a room at school to learn.";
  } else if (randomnum == 2) {
    codes = ["oMm", "ovel", "wsim.", "ot", "add", "nad"];
    words = ["Mom", "love", "swim.", "to", "dad", "and"];
    finalAnswer = "Momanddadlovetoswim.";
    hints = "Your parents love to do this at the pool.";
  } else if (randomnum == 3) {
    codes = ["tac.", "ftaer", "hTe", "god", "hte", "cahses"];
    words = ["cat.", "after", "The", "dog", "the", "chases"];
    finalAnswer = "Thedogchasesafterthecat.";
    hints = "Dogs do this to cats.";
  } else if (randomnum == 4) {
    codes = ["nru", "isernfd.", "velo", "twih", "ot", "I"];
    words = ["run", "friends.", "love", "with", "to", "I"];
    finalAnswer = "Ilovetorunwithfriends.";
    hints = "The opposite of walking, the opposite of hate.";
  } else if (randomnum == 5) {
    codes = ["ot", "alkw", "yM", "kelis", "god", "ehmo."];
    words = ["to", "walk", "My", "likes", "dog", "home."];
    finalAnswer = "Mydoglikestowalkhome.";
    hints = "Two free answers: likes and walk.";
  } else if (randomnum == 6) {
    codes = ["rsfei", "ehT", "urhgembar", "elmls", "nad", "gdoo."];
    words = ["fries", "The", "hamburger", "smell", "and", "good."];
    finalAnswer = "Thehamburgerandfriessmellgood.";
    hints = "Food from Mcdonalds.";
  } else if (randomnum == 7) {
    codes = ["ot", "ncekiht.", "tac", "esog", "eht", "hTe"];
    words = ["to", "kitchen.", "cat", "goes", "the", "The"];
    finalAnswer = "Thecatgoestothekitchen.";
    hints = "Not a dog goes for food.";
  } else if (randomnum == 8) {
    codes = ["dna", "I", "ym", "add.", "omm", "love"];
    words = ["and", "I", "my", "dad.", "mom", "love"];
    finalAnswer = "Ilovemymomanddad.";
    hints = "The most important people in the world.";
  } else if (randomnum == 9) {
    codes = ["top", "si", "ysicp.", "teh", "smot", "otH"];
    words = ["pot", "is", "spicy.", "the", "most", "Hot"];
    finalAnswer = "Hotpotisthemostspicy.";
    hints = "Spicy food from China.";
  } else if (randomnum == 10) {
    codes = ["Teh", "amn", "os", "si", "tyaod.", "apyhp"];
    words = ["The", "man", "so", "is", "today.", "happy"];
    finalAnswer = "Themanissohappytoday.";
    hints = "Not sad today.";
  } else if (randomnum == 11) {
    codes = ["sfat.", "yver", "sifh", "ielltt", "heT", "wssmi"];
    words = ["fast.", "very", "fish", "little", "The", "swims"];
    finalAnswer = "Thelittlefishswimsveryfast.";
    hints = "Nemo is in a hurry looking for his dad.";
  } else if (randomnum == 12) {
    codes = ["rae", "insmmiwg", "nda", "grenadi.", "yM", "ehbiobs"];
    words = ["are", "swimming", "and", "reading.", "My", "hobbies"];
    finalAnswer = "Myhobbiesareswimmingandreading.";
    hints = "Two free words: hobbies and swimming.";
  } else if (randomnum == 13) {
    codes = ["os", "My", "trsise", "itellt", "nrgya.", "si"];
    words = ["so", "My", "sister", "little", "angry.", "is"];
    finalAnswer = "Mylittlesisterissoangry.";
    hints = "How your little sister feels if you take her candy.";
  } else if (randomnum == 14) {
    codes = ["tCceloaho", "cei", "vortefia.", "camer", "si", "ym"];
    words = ["Chocolate", "ice", "favorite.", "cream", "is", "my"];
    finalAnswer = "Chocolateicecreamismyfavorite.";
    hints = "Not vanilla flavored ice cream.";
  } else if (randomnum == 15) {
    codes = ["ot", "dan", "We", "alpy.", "og", "twna"];
    words = ["to", "and", "We", "play.", "go", "want"];
    finalAnswer = "Wewanttogoandplay.";
    hints = "We would rather do this than our homework.";
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
  var randomnum = Math.floor(Math.random() * 15) + 1;
  finalAnswer, codes, words, hints;
  if (randomnum == 1) {
    codes = ["adevretnu.", "iggno", "eW", "rea", "no", "na"];
    words = ["adventure.", "going", "We", "are", "on", "an"];
    finalAnswer = "Wearegoingonanadventure.";
    hints = "When you and your friends go somewhere new.";
  } else if (randomnum == 2) {
    codes = ["ifavoetr", "yM", "ttoPer.", "si", "kobo", "arrHy"];
    words = ["favorite", "My", "Potter.", "is", "book", "Harry"];
    finalAnswer = "MyfavoritebookisHarryPotter.";
    hints = "A famous book series by JK Rowling.";
  } else if (randomnum == 3) {
    codes = ["ouyr", "stmu", "xames.", "oYu", "tsudy", "ofr"];
    words = ["your", "must", "exams.", "You", "study", "for"];
    finalAnswer = "Youmuststudyforyourexams.";
    hints = "What your parents tell you to do all the time.";
  } else if (randomnum == 4) {
    codes = ["fciiudftl", "si", "cieceSn", "eyvr", "cbjesut.", "a"];
    words = ["difficult", "is", "Science", "very", "subject.", "a"];
    finalAnswer = "Scienceisaverydifficultsubject.";
    hints = "Not math, not English and not History.";
  } else if (randomnum == 5) {
    codes = ["na", "vahe", "idaP.", "ueds", "I", "ot"];
    words = ["an", "have", "iPad.", "used", "I", "to"];
    finalAnswer = "IusedtohaveaniPad.";
    hints = "A type of tablet.";
  } else if (randomnum == 6) {
    codes = ["ttes", "teh", "eadtrsh", "koto", "eW", "vree."];
    words = ["test", "the", "hardest", "took", "We", "ever."];
    finalAnswer = "Wetookthehardesttestever.";
    hints = "A test like the SAT or the Gaokao.";
  } else if (randomnum == 7) {
    codes = ["nru", "isernfd.", "velo", "twih", "ot", "I"];
    words = ["run", "friends.", "love", "with", "to", "I"];
    finalAnswer = "Ilovetorunwithfriends.";
    hints = "The opposite of walking, the opposite of hate.";
  } else if (randomnum == 8) {
    codes = ["ot", "alkw", "yM", "kelis", "god", "ehmo."];
    words = ["to", "walk", "My", "likes", "dog", "home."];
    finalAnswer = "Mydoglikestowalkhome.";
    hints = "Two free answers: likes and walk.";
  } else if (randomnum == 9) {
    codes = ["rsfei", "ehT", "urhgembar", "elmls", "nad", "gdoo."];
    words = ["fries", "The", "hamburger", "smell", "and", "good."];
    finalAnswer = "Thehamburgerandfriessmellgood.";
    hints = "Food from Mcdonalds.";
  } else if (randomnum == 10) {
    codes = ["nru", "isernfd.", "velo", "twih", "ot", "I"];
    words = ["run", "friends.", "love", "with", "to", "I"];
    finalAnswer = "Ilovetorunwithfriends.";
    hints = "The opposite of walking, the opposite of hate.";
  } else if (randomnum == 11) {
    codes = ["ot", "alkw", "yM", "kelis", "god", "ehmo."];
    words = ["to", "walk", "My", "likes", "dog", "home."];
    finalAnswer = "Mydoglikestowalkhome.";
    hints = "Two free answers: likes and walk.";
  } else if (randomnum == 12) {
    codes = ["rsfei", "ehT", "urhgembar", "elmls", "nad", "gdoo."];
    words = ["fries", "The", "hamburger", "smell", "and", "good."];
    finalAnswer = "Thehamburgerandfriessmellgood.";
    hints = "Food from Mcdonalds.";
  } else if (randomnum == 13) {
    codes = ["nru", "isernfd.", "velo", "twih", "ot", "I"];
    words = ["run", "friends.", "love", "with", "to", "I"];
    finalAnswer = "Ilovetorunwithfriends.";
    hints = "The opposite of walking, the opposite of hate.";
  } else if (randomnum == 14) {
    codes = ["ot", "alkw", "yM", "kelis", "god", "ehmo."];
    words = ["to", "walk", "My", "likes", "dog", "home."];
    finalAnswer = "Mydoglikestowalkhome.";
    hints = "Two free answers: likes and walk.";
  } else if (randomnum == 15) {
    codes = ["rsfei", "ehT", "urhgembar", "elmls", "nad", "gdoo."];
    words = ["fries", "The", "hamburger", "smell", "and", "good."];
    finalAnswer = "Thehamburgerandfriessmellgood.";
    hints = "Food from Mcdonalds.";
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
  var randomnum = Math.floor(Math.random() * 15) + 1;
  finalAnswer, codes, words;
  if (randomnum == 1) {
    codes = ["heseniC", "aChin", "eralnrde", "hiwel", "eW", "ni"];
    words = ["Chinese", "China", "learned", "while", "We", "in"];
    finalAnswer = "WelearnedChinesewhileinChina";
    hints = "A very hard language to learn.";
  } else if (randomnum == 2) {
    codes = ["oegs", "yob", "nignadc", "hTe", "ightn", "veery"];
    words = ["goes", "boy", "dancing", "The", "night", "every"];
    finalAnswer = "Theboygoesdancingeverynight";
    hints = "What you do at a party when there is music.";
  } else if (randomnum == 3) {
    codes = ["ilwl", "ov1C9i-d", "eatb", "hTe", "eevlyunlat", "rdwlo"];
    words = ["will", "Covid-19", "beat", "The", "eventually", "world"];
    finalAnswer = "TheworldwilleventuallybeatCovid-19";
    hints = "Another name for the Coronavirus.";
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
    hints = "To stop climate change, we must do this.";
  } else if (randomnum == 5) {
    codes = ["si", "esesennct", "griitWn", "rodw", "isx", "rtrusfintga."];
    words = ["is", "sentences", "Writing", "word", "six", "frustrating."];
    finalAnswer = "Writingsixwordsentencesisfrustrating.";
    hints = "Two free words: frustrating and writing.";
  } else if (randomnum == 6) {
    codes = ["dwlro.", "eH", "tlarev", "ot", "eht", "vleos"];
    words = ["world.", "He", "travel", "to", "the", "loves"];
    finalAnswer = "Helovestotraveltheworld.";
    hints = "What you do when you go to many countries.";
  } else if (randomnum == 7) {
    codes = ["nru", "isernfd.", "velo", "twih", "ot", "I"];
    words = ["run", "friends.", "love", "with", "to", "I"];
    finalAnswer = "Ilovetorunwithfriends.";
    hints = "The opposite of walking, the opposite of hate.";
  } else if (randomnum == 8) {
    codes = ["ot", "alkw", "yM", "kelis", "god", "ehmo."];
    words = ["to", "walk", "My", "likes", "dog", "home."];
    finalAnswer = "Mydoglikestowalkhome.";
    hints = "Two free answers: likes and walk.";
  } else if (randomnum == 9) {
    codes = ["rsfei", "ehT", "urhgembar", "elmls", "nad", "gdoo."];
    words = ["fries", "The", "hamburger", "smell", "and", "good."];
    finalAnswer = "Thehamburgerandfriessmellgood.";
    hints = "Food from Mcdonalds.";
  } else if (randomnum == 10) {
    codes = ["nru", "isernfd.", "velo", "twih", "ot", "I"];
    words = ["run", "friends.", "love", "with", "to", "I"];
    finalAnswer = "Ilovetorunwithfriends.";
    hints = "The opposite of walking, the opposite of hate.";
  } else if (randomnum == 11) {
    codes = ["ot", "alkw", "yM", "kelis", "god", "ehmo."];
    words = ["to", "walk", "My", "likes", "dog", "home."];
    finalAnswer = "Mydoglikestowalkhome.";
    hints = "Two free answers: likes and walk.";
  } else if (randomnum == 12) {
    codes = ["rsfei", "ehT", "urhgembar", "elmls", "nad", "gdoo."];
    words = ["fries", "The", "hamburger", "smell", "and", "good."];
    finalAnswer = "Thehamburgerandfriessmellgood.";
    hints = "Food from Mcdonalds.";
  } else if (randomnum == 13) {
    codes = ["nru", "isernfd.", "velo", "twih", "ot", "I"];
    words = ["run", "friends.", "love", "with", "to", "I"];
    finalAnswer = "Ilovetorunwithfriends.";
    hints = "The opposite of walking, the opposite of hate.";
  } else if (randomnum == 14) {
    codes = ["ot", "alkw", "yM", "kelis", "god", "ehmo."];
    words = ["to", "walk", "My", "likes", "dog", "home."];
    finalAnswer = "Mydoglikestowalkhome.";
    hints = "Two free answers: likes and walk.";
  } else if (randomnum == 15) {
    codes = ["rsfei", "ehT", "urhgembar", "elmls", "nad", "gdoo."];
    words = ["fries", "The", "hamburger", "smell", "and", "good."];
    finalAnswer = "Thehamburgerandfriessmellgood.";
    hints = "Food from Mcdonalds.";
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
  finalAnswer, codes, words, hints;
  if (randomnum == 1) {
    codes = ["adevretnu.", "iggno", "eW", "rea", "no", "na"];
    words = ["adventure.", "going", "We", "are", "on", "an"];
    finalAnswer = "Wearegoingonanadventure.";
    hints = "When you and your friends go somewhere new.";
  } else if (randomnum == 2) {
    codes = ["ifavoetr", "yM", "ttoPer.", "si", "kobo", "arrHy"];
    words = ["favorite", "My", "Potter.", "is", "book", "Harry"];
    finalAnswer = "MyfavoritebookisHarryPotter.";
    hints = "A famous book series by JK Rowling.";
  } else if (randomnum == 3) {
    codes = ["ouyr", "stmu", "xames.", "oYu", "tsudy", "ofr"];
    words = ["your", "must", "exams.", "You", "study", "for"];
    finalAnswer = "Youmuststudyforyourexams.";
    hints = "What your parents tell you to do all the time.";
  } else if (randomnum == 4) {
    codes = ["fciiudftl", "si", "cieceSn", "eyvr", "cbjesut.", "a"];
    words = ["difficult", "is", "Science", "very", "subject.", "a"];
    finalAnswer = "Scienceisaverydifficultsubject.";
    hints = "Not math, not English and not History.";
  } else if (randomnum == 5) {
    codes = ["na", "vahe", "idaP.", "ueds", "I", "ot"];
    words = ["an", "have", "iPad.", "used", "I", "to"];
    finalAnswer = "IusedtohaveaniPad.";
    hints = "A type of tablet.";
  } else if (randomnum == 6) {
    codes = ["ttes", "teh", "eadtrsh", "koto", "eW", "vree."];
    words = ["test", "the", "hardest", "took", "We", "ever."];
    finalAnswer = "Wetookthehardesttestever.";
    hints = "A test like the SAT or the Gao Kao.";
  } else if (randomnum == 7) {
    codes = ["nru", "isernfd.", "velo", "twih", "ot", "I"];
    words = ["run", "friends.", "love", "with", "to", "I"];
    finalAnswer = "Ilovetorunwithfriends.";
    hints = "The opposite of walking, the opposite of hate.";
  } else if (randomnum == 8) {
    codes = ["ot", "alkw", "yM", "kelis", "god", "ehmo."];
    words = ["to", "walk", "My", "likes", "dog", "home."];
    finalAnswer = "Mydoglikestowalkhome.";
    hints = "Two free answers: likes and walk.";
  } else if (randomnum == 9) {
    codes = ["rsfei", "ehT", "urhgembar", "elmls", "nad", "gdoo."];
    words = ["fries", "The", "hamburger", "smell", "and", "good."];
    finalAnswer = "Thehamburgerandfriessmellgood.";
    hints = "Food from Mcdonalds.";
  } else if (randomnum == 10) {
    codes = ["nru", "isernfd.", "velo", "twih", "ot", "I"];
    words = ["run", "friends.", "love", "with", "to", "I"];
    finalAnswer = "Ilovetorunwithfriends.";
    hints = "The opposite of walking, the opposite of hate.";
  } else if (randomnum == 11) {
    codes = ["ot", "alkw", "yM", "kelis", "god", "ehmo."];
    words = ["to", "walk", "My", "likes", "dog", "home."];
    finalAnswer = "Mydoglikestowalkhome.";
    hints = "Two free answers: likes and walk.";
  } else if (randomnum == 12) {
    codes = ["rsfei", "ehT", "urhgembar", "elmls", "nad", "gdoo."];
    words = ["fries", "The", "hamburger", "smell", "and", "good."];
    finalAnswer = "Thehamburgerandfriessmellgood.";
    hints = "Food from Mcdonalds.";
  } else if (randomnum == 13) {
    codes = ["nru", "isernfd.", "velo", "twih", "ot", "I"];
    words = ["run", "friends.", "love", "with", "to", "I"];
    finalAnswer = "Ilovetorunwithfriends.";
    hints = "The opposite of walking, the opposite of hate.";
  } else if (randomnum == 14) {
    codes = ["ot", "alkw", "yM", "kelis", "god", "ehmo."];
    words = ["to", "walk", "My", "likes", "dog", "home."];
    finalAnswer = "Mydoglikestowalkhome.";
    hints = "Two free answers: likes and walk.";
  } else if (randomnum == 15) {
    codes = ["rsfei", "ehT", "urhgembar", "elmls", "nad", "gdoo."];
    words = ["fries", "The", "hamburger", "smell", "and", "good."];
    finalAnswer = "Thehamburgerandfriessmellgood.";
    hints = "Food from Mcdonalds.";
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
