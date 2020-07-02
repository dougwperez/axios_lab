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
