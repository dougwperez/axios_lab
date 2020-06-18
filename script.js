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
  var randomnum = Math.floor(Math.random() * 20) + 1;
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
  } else if (randomnum == 16) {
    codes = ["ylap", "abll.", "nma", "ot", "hTe", "olsve"];
    words = ["play", "ball.", "man", "to", "The", "loves"];
    finalAnswer = "Themanlovestoplayball.";
    hints = "What you do in baseball.";
  } else if (randomnum == 17) {
    codes = ["yfilam", "me.las", "esnjoy", "gaient", "Teh", "gbi"];
    words = ["family", "meals.", "enjoys", "eating", "The", "big"];
    finalAnswer = "Thefamilyenjoyseatingbigmeals.";
    hints = "Free word: enjoys";
  } else if (randomnum == 18) {
    codes = ["het", "abc.he", "sdki", "og", "eTh", "ot"];
    words = ["the", "beach.", "kids", "go", "The", "to"];
    finalAnswer = "Thekidsgotothebeach.";
    hints = "This place is next to the ocean.";
  } else if (randomnum == 19) {
    codes = ["vole", "cei", "eta", "mca.re", "ot", "I"];
    words = ["love", "ice", "eat", "cream.", "to", "I"];
    finalAnswer = "Ilovetoeaticecream.";
    hints = "This food makes you fat.";
  } else if (randomnum == 20) {
    codes = ["dgnna.ic", "nad", "lvoe", "oyb", "irlg", "ehT"];
    words = ["dancing.", "and", "love", "boy", "girl", "The"];
    finalAnswer = "Theboyandgirllovedancing.";
    hints = "What we do when the music plays.";
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
  var randomnum = Math.floor(Math.random() * 20) + 1;
  finalAnswer, codes, words;
  if (randomnum == 1) {
    codes = ["ni", "ecI", "nsu.", "setlm", "eht", "mcrea"];
    words = ["in", "Ice", "sun.", "melts", "the", "cream"];
    finalAnswer = "Icecreammeltsinthesun.";
    hints = "What if you drop the ice cream on the hot ground?";
  } else if (randomnum == 2) {
    codes = ["nlalobo", "sga.", "eTh", "chmu", "sah", "os"];
    words = ["balloon", "gas.", "The", "much", "has", "so"];
    finalAnswer = "Theballoonhassomuchgas.";
    hints = "You use this at your birthday party!";
  } else if (randomnum == 3) {
    codes = ["ti", "warte", "qduili,", "solfw.", "enhW", "is"];
    words = ["it", "water", "liquid,", "flows.", "When", "is"];
    finalAnswer = "Whenwaterisliquid,itflows.";
    hints = "A river is in this state.";
  } else if (randomnum == 4) {
    codes = ["ebecom", "eeszerf", "ot", "Teh", "ewatr", "cie."];
    words = ["become", "freezes", "to", "The", "water", "ice."];
    finalAnswer = "Thewaterfreezestobecomeice.";
    hints = "What will happen if you put water into the fridge?";
  } else if (randomnum == 5) {
    codes = ["ehT", "igb", "si", "ildso.", "a", "mapl"];
    words = ["The", "big", "is", "solid.", "a", "lamp"];
    finalAnswer = "Thebiglampisasolid.";
    hints = "Something that can give you light.";
  } else if (randomnum == 6) {
    codes = ["adevretnu.", "iggno", "eW", "rea", "no", "na"];
    words = ["adventure.", "going", "We", "are", "on", "an"];
    finalAnswer = "Wearegoingonanadventure.";
    hints = "When you and your friends go somewhere new.";
  } else if (randomnum == 7) {
    codes = ["ifavoetr", "yM", "ttoPer.", "si", "kobo", "arrHy"];
    words = ["favorite", "My", "Potter.", "is", "book", "Harry"];
    finalAnswer = "MyfavoritebookisHarryPotter.";
    hints = "A famous book series by JK Rowling.";
  } else if (randomnum == 8) {
    codes = ["ouyr", "stmu", "xames.", "oYu", "tsudy", "ofr"];
    words = ["your", "must", "exams.", "You", "study", "for"];
    finalAnswer = "Youmuststudyforyourexams.";
    hints = "What your parents tell you to do all the time.";
  } else if (randomnum == 9) {
    codes = ["fciiudftl", "si", "cieceSn", "eyvr", "cbjesut.", "a"];
    words = ["difficult", "is", "Science", "very", "subject.", "a"];
    finalAnswer = "Scienceisaverydifficultsubject.";
    hints = "Not math, not English and not History.";
  } else if (randomnum == 10) {
    codes = ["na", "vahe", "idaP.", "ueds", "I", "ot"];
    words = ["an", "have", "iPad.", "used", "I", "to"];
    finalAnswer = "IusedtohaveaniPad.";
    hints = "A type of tablet.";
  } else if (randomnum == 11) {
    codes = ["ttes", "teh", "eadtrsh", "koto", "eW", "vree."];
    words = ["test", "the", "hardest", "took", "We", "ever."];
    finalAnswer = "Wetookthehardesttestever.";
    hints = "A test like the SAT or the Gaokao.";
  } else if (randomnum == 12) {
    codes = ["eth", "filsetva.", "rooomwrT", "og", "ot", "est'l"];
    words = ["the", "festival.", "Tomorrow", "go", "to", "let's"];
    finalAnswer = "Tomorrowlet'sgotothefestival.";
    hints = "After today, we will go to a place with music and food.";
  } else if (randomnum == 13) {
    codes = ["em", "etelbrir", "a", "dtlo", "eH", "ile."];
    words = ["me", "terrible", "a", "told", "He", "lie."];
    finalAnswer = "Hetoldmeaterriblelie.";
    hints = "The opposite of wonderful truth.";
  } else if (randomnum == 14) {
    codes = ["dusyt.", "Yuo", "me", "rimesopd", "ldwuo", "uoy"];
    words = ["study.", "You", "me", "promised", "would", "you"];
    finalAnswer = "Youpromisedmeyouwouldstudy.";
    hints = "What your parents might say to you.";
  } else if (randomnum == 15) {
    codes = ["si", "fo", "sopirn", "rprisesno.", "lluf", "eTh"];
    words = ["is", "of", "prison", "prisoners.", "full", "The"];
    finalAnswer = "Theprisonisfullofprisoners.";
    hints = "Where you go when you break the law.";
  } else if (randomnum == 16) {
    codes = ["kitseasm", "nltaura.", "yoln", "oT", "si", "aemk"];
    words = ["mistakes", "natural.", "only", "To", "is", "make"];
    finalAnswer = "Tomakemistakesisonlynatural.";
    hints = "To make mistakes is human.";
  } else if (randomnum == 17) {
    codes = ["atnw", "ot", "yuo", "od", "Wtha", "od?"];
    words = ["want", "to", "you", "do", "What", "do?"];
    finalAnswer = "Whatdoyouwanttodo?";
    hints = "Just a actions.";
  } else if (randomnum == 18) {
    codes = ["is", "fra", "vrye", "yaaw.", "ehT", "sdilna"];
    words = ["is", "far", "very", "away.", "The", "island"];
    finalAnswer = "Theislandisveryfaraway.";
    hints = "This place is surrounded by water on all sides.";
  } else if (randomnum == 19) {
    codes = ["a", "heav", "eipssrd.", "aerf", "fo", "yeTh"];
    words = ["a", "have", "spiders.", "fear", "of", "They"];
    finalAnswer = "Theyhaveafearofspiders.";
    hints = "Something people are afraid of.";
  } else if (randomnum == 20) {
    codes = ["hnlpaesEt", "rae", "cmei.", "uoiyvslbo", "rggbei", "ahnt"];
    words = ["Elephants", "are", "mice.", "obviously", "bigger", "than"];
    finalAnswer = "Elephantsareobviouslybiggerthanmice.";
    hints = "Obviously goes before bigger.";
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
  var randomnum = Math.floor(Math.random() * 18) + 1;
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
    codes = ["si", "tnhisk", "ehs", "eH", "oto", "tclemitaraiis."];
    words = ["is", "thinks", "she", "He", "too", "materialistic."];
    finalAnswer = "Hethinkssheistoomaterialistic.";
    hints = "The root word is material.";
  } else if (randomnum == 8) {
    codes = ["nsur", "elefs", "eh", "livae.", "eh", "enhW"];
    words = ["runs", "feels", "he", "alive.", "he", "When"];
    finalAnswer = "Whenherunshefeelsalive.";
    hints = "An activity that is healthy.";
  } else if (randomnum == 9) {
    codes = ["wlhei", "tpisoilc", "kalt", "vghain", "erevN", "rninde."];
    words = ["while", "politics", "talk", "having", "Never", "dinner."];
    finalAnswer = "Nevertalkpoliticswhilehavingdinner.";
    hints = "Something you shouldn't talk about at dinner.";
  } else if (randomnum == 10) {
    codes = ["cisum.", "eSh", "ees", "ot", "veli", "vosel"];
    words = ["music.", "She", "see", "to", "live", "loves"];
    finalAnswer = "Shelovestoseelivemusic.";
    hints = "When you see a band play their music on a stage.";
  } else if (randomnum == 11) {
    codes = ["namy", "sshakr.", "oenac", "sah", "ehT", "treefndif"];
    words = ["many", "sharks.", "ocean", "has", "The", "different"];
    finalAnswer = "Theoceanhasmanydifferentsharks.";
    hints = "What lives in the sea?";
  } else if (randomnum == 12) {
    codes = ["uyo", "hisus?", "scipy", "evre", "tea", "Heva"];
    words = ["you", "sushi?", "spicy", "ever", "ate", "Have"];
    finalAnswer = "Haveyoueveratespicysushi?";
    hints = "A question about food.";
  } else if (randomnum == 13) {
    codes = ["ti", "to", "ihhpolopys?", "syutd", "sewi", "sI"];
    words = ["it", "to", "philosophy?", "study", "wise", "Is"];
    finalAnswer = "Isitwisetostudyphilosophy?";
    hints = "The study of knowledge, reality and existence.";
  } else if (randomnum == 14) {
    codes = ["rPsitened.", "hte", "nWiohanstg", "aws", "egoreG", "frsit"];
    words = ["President.", "the", "Washington", "was", "George", "first"];
    finalAnswer = "GeorgeWashingtonwasthefirstPresident.";
    hints = "A famous president of the USA.";
  } else if (randomnum == 15) {
    codes = ["eth", "araaSh.", "eetrds", "si", "rsgaetl", "hTe"];
    words = ["the", "Sahara.", "desert", "is", "largest", "The"];
    finalAnswer = "ThelargestdesertistheSahara.";
    hints = "A very famous desert in the world.";
  } else if (randomnum == 16) {
    codes = [
      "hlcetonocailg",
      "adn",
      "nesavmcatdne",
      "era",
      "iv.atl",
      "Stiieincfc",
    ];
    words = [
      "technological",
      "and",
      "advancements",
      "are",
      "vital.",
      "Scientific",
    ];
    finalAnswer = "Scientificandtechnologicaladvancementsarevital.";
    hints = "Root words: science and technology.";
  } else if (randomnum == 17) {
    codes = ["e.seGrk", "yrDomacec", "anentci", "meac", "hte", "fomr"];
    words = ["Greeks.", "Democracy", "ancient", "came", "the", "from"];
    finalAnswer = "DemocracycamefromtheancientGreeks.";
    hints = "A political system where the people vote.";
  } else if (randomnum == 18) {
    codes = ["dna", "era", "exiEersc", "enitag", "trnioma.tp", "lwle"];
    words = ["and", "are", "Exercise", "eating", "important.", "well"];
    finalAnswer = "Exerciseandeatingwellareimportant.";
    hints = "Secrets to a healthy life.";
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
