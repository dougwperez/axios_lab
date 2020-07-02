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
