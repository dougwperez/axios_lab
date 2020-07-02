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
