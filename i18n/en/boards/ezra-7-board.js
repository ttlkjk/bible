// Ezra 7~10 whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does.
window.BOARD = {
  scenes: [
    {
      id: "part2", title: "Ezra Part 2",
      beats: [
        { say: "From here on, we look at part two of Ezra.",
          draw: [["title", "t", "Ezra part 2"],
                 ["photo", "p1", "img/p3/image23.jpg", [1080, 190, 440, 248], { tilt: 2 }]] },
        { say: "Part one centered on Zerubbabel and the high priest Joshua. It told how, after the foundation ceremony, the work on the temple stopped.",
          draw: [["write", "a1", [120, 300], "Part 1: Zerubbabel · Joshua", { size: 60 }],
                 ["write", "a2", [180, 390], "foundation laid → work stops", { size: 48, color: "gray" }]] },
        { say: "Then, as Haggai and Zechariah rebuked and encouraged them, the work started again and was finished. In between came the story of Esther.",
          draw: [["write", "a3", [180, 470], "Haggai · Zechariah → done (Esther in between)", { size: 48, color: "gray" }]] },
        { say: "Now comes the story of the second return, centered on Ezra.",
          draw: [["write", "a4", [120, 620], "Part 2: Ezra's 2nd return", { size: 72, color: "red" }],
                 ["box", "a4"]] }
      ]
    },
    {
      id: "intro", title: "Ezra Introduces Himself",
      beats: [
        { say: "After these things, in the reign of Artaxerxes king of Persia, there was a man named Ezra. This Artaxerxes is Artaxerxes the First, called Longimanus.",
          draw: [["clear"],
                 ["title", "t", "Ezra introduces himself"],
                 ["write", "b1", [120, 290], "Artaxerxes I Longimanus", { size: 60 }]] },
        { say: "There was a man named Ezra, he says. He's writing in the third person, like a narrator, isn't he?",
          draw: [["write", "b2", [180, 380], "third-person narrator", { size: 48, color: "gray" }]] },
        { say: "He traces his family tree all the way back, and says he is a descendant of the high priest Aaron in the sixteenth generation. He takes great care in introducing himself.",
          draw: [["write", "b3", [120, 510], "16th gen. from high priest Aaron", { size: 64, color: "blue" }],
                 ["under", "b3", "blue"]] },
        { say: "The people of the first return had worked hard to barely get the nation running. If somebody suddenly showed up seventy-nine years later, they might brush him off.",
          draw: [["write", "b4", [120, 640], "arrives 79 yrs later", { size: 60 }],
                 ["write", "b5", { after: "b4", gap: 110 }, "might be ignored", { size: 60, color: "red" }],
                 ["arrow", "b4", "b5"]] },
        { say: "Wherever you go, the locals push the newcomers around, right?",
          draw: [["write", "b6", [180, 750], "locals vs. newcomers, everywhere", { size: 52, color: "gray" }]] }
      ]
    },
    {
      id: "scribe", title: "A Scribe Skilled in the Law",
      beats: [
        { say: "Ezra introduces himself as a scribe skilled in the law of Moses. By the help of God, the king granted him everything he asked.",
          draw: [["clear"],
                 ["title", "t", "A scribe skilled in the Law"],
                 ["write", "c1", [120, 290], "scribe skilled in Law", { size: 64, color: "blue" }],
                 ["write", "c2", { after: "c1", gap: 40 }, "king grants all", { size: 52 }]] },
        { say: "He was a legal adviser to King Artaxerxes, who ruled the whole world of that time. He had such authority and trust that the king could not turn down his requests.",
          draw: [["write", "c3", [180, 380], "king's legal adviser", { size: 48, color: "gray" }]] },
        { say: "Ezra was born in Babylon. He knew Jerusalem only from the Scriptures and from history. Yet he gave up all his privileges and came to the community of the returned exiles. He was a man with a firm view of history and a love for his people.",
          draw: [["write", "c4", [120, 510], "born in Babylon → gives up privilege", { size: 56 }],
                 ["write", "c5", [180, 600], "sense of history · love of people", { size: 48, color: "green" }]] },
        { say: "The people who came with him numbered eighteen hundred, and the journey took a full four months. The way the Hebrews exaggerate is a lot like the way we Koreans do, isn't it?",
          draw: [["write", "c6", [700, 690], "1,800 people · 4 full months", { size: 48, color: "gray" }]] },
        { say: "Chapter 7, verse 10. Ezra had prepared his heart to seek the law of the LORD, and to do it, and to teach in Israel. He didn't come to grab a position or to find a living.",
          draw: [["write", "c7", [120, 790], "study → do → teach", { size: 80, color: "red" }],
                 ["circle", "c7"]] }
      ]
    },
    {
      id: "power", title: "Power from the King",
      beats: [
        { say: "The king gave Ezra the authority to recruit people to return, and the king and his seven counselors freely offered silver and gold.",
          draw: [["clear"],
                 ["title", "t", "Power from the king"],
                 ["write", "d1", [120, 290], "recruit returnees · silver & gold", { size: 60 }]] },
        { say: "He also gave him the authority to raise funds, and to spend those funds according to God's will. If anything was needed, he could take as much as he wanted from the king's treasury.",
          draw: [["write", "d2", [120, 400], "raise & spend funds · king's treasury", { size: 60 }]] },
        { say: "He even wrote a decree telling the people beyond the Euphrates River to carry out whatever Ezra asked, and quickly.",
          draw: [["write", "d3", [120, 510], "beyond Euphrates: do as he asks, fast", { size: 60 }]] },
        { say: "In chapter 7, verses 25 and 26, he is even given the power to appoint officials and the power to judge. What a man!",
          draw: [["write", "d4", [120, 630], "+ appoint · judge", { size: 72, color: "red" }],
                 ["under", "d4"]] },
        { say: "And from verse 27, it switches to the first person. He was writing 'Ezra did this', and then in his excitement it becomes 'I did this'.",
          draw: [["write", "d5", [120, 770], "Ezra...", { size: 60, color: "gray" }],
                 ["write", "d6", { after: "d5", gap: 110 }, "I!", { size: 72, color: "blue" }],
                 ["arrow", "d5", "d6"],
                 ["write", "d7", { after: "d6", gap: 50 }, "excited → 1st person", { size: 48, color: "gray" }]] }
      ]
    },
    {
      id: "hand", title: "The Good Hand of God",
      beats: [
        { say: "Chapter 8 lists the names of those who returned, and we see him making a special effort to bring Levites along.",
          draw: [["clear"],
                 ["title", "t", "The good hand of God"],
                 ["write", "e1", [120, 290], "ch. 8: list of returnees · Levites", { size: 56 }]] },
        { say: "Ezra comes from the Hebrew word ezer, which means to help. He believes things get done because God helps.",
          draw: [["write", "e2", [120, 410], "Ezra = ezer = help", { size: 72, color: "blue" }]] },
        { say: "He had taught the emperor that God helps those who rely on him, so he was ashamed to ask for an armed escort. So by the river Ahava, he fasted and asked for God's help.",
          draw: [["write", "e3", [120, 540], "ask for escort", { size: 60, color: "gray" }],
                 ["strike", "e3", "gray"],
                 ["write", "e4", { after: "e3", gap: 110 }, "fast at the Ahava", { size: 60, color: "red" }],
                 ["arrow", "e3", "e4"]] },
        { say: "The hand of our God was upon us, and he delivered us from the hand of the enemy and of those who lay in wait by the way. He really put his life on the line. Do you think the men lying in wait were hiding there for a prank show?",
          draw: [["write", "e5", [120, 670], "saved from ambushers", { size: 60, color: "green" }],
                 ["write", "e6", { after: "e5", gap: 40 }, "not a prank show", { size: 44, color: "gray" }]] },
        { say: "When they arrived, he had every money matter written down. He could easily have siphoned some off, but he handled the funds openly and cleanly.",
          draw: [["write", "e7", [120, 800], "transparent finances", { size: 60, color: "blue" }],
                 ["box", "e7"]] }
      ]
    },
    {
      id: "sin", title: "The Leaders' Sin",
      beats: [
        { say: "After that, the princes came and told him: the people, the priests, and the Levites have taken daughters of foreign peoples as wives for themselves and their sons, and the princes and rulers have been chief in this trespass.",
          draw: [["clear"],
                 ["title", "t", "The leaders' sin"],
                 ["write", "f1", [120, 290], "married foreign women", { size: 60 }],
                 ["write", "f2", { after: "f1", gap: 50 }, "leaders worst", { size: 60, color: "red" }],
                 ["under", "f2"]] },
        { say: "You saw it in Zechariah, didn't you? The high priest Joshua had taken a foreign woman as his wife. If even the high priest did that, what more needs to be said about the ordinary people?",
          draw: [["write", "f3", [180, 390], "even high priest Joshua...", { size: 48, color: "gray" }]] },
        { say: "When Ezra heard this, he tore his garment and his robe, and pulled out the hair of his head and his beard. It was the twelfth month, and he sat at the top of Jerusalem, taking all the rain and snow.",
          draw: [["write", "f4", [120, 520], "tore clothes, pulled out hair & beard", { size: 56, color: "blue" }],
                 ["write", "f5", [180, 610], "in December rain and snow", { size: 48, color: "gray" }]] },
        { say: "Then at the evening sacrifice he fell on his knees and prayed. I am ashamed and blush to lift up my face. Our iniquities are increased over our head, and our trespass is grown up to the heavens.",
          draw: [["write", "f6", [120, 750], "\"iniquities over our head, up to heavens\"", { size: 52, color: "red" }]] }
      ]
    },
    {
      id: "reform", title: "Reform and Opposition",
      beats: [
        { say: "In chapter 10, following the counsel of those who tremble at God's commandment, they make a covenant to send away the foreign wives and their children. Still, there were people willing to help, so there was hope.",
          draw: [["clear"],
                 ["title", "t", "Reform and opposition"],
                 ["write", "g1", [120, 290], "covenant: send foreign wives away", { size: 56 }],
                 ["write", "g2", [180, 385], "helpers = hope", { size: 52, color: "green" }]] },
        { say: "If Ezra had stayed in Persia living in comfort, he would have disappeared along with Persia when it fell.",
          draw: [["write", "g3", [700, 385], "stayed in Persia → gone with it", { size: 44, color: "gray" }]] },
        { say: "But even in something like this, there are always people who oppose it. Jonathan and Jahzeiah opposed it, and Meshullam and Shabbethai helped. But who is Ezra? He pushed the reform through without flinching.",
          draw: [["write", "g4", [120, 510], "against: Jonathan · Jahzeiah", { size: 60, color: "gray" }],
                 ["write", "g5", { after: "g4", gap: 110 }, "unshaken", { size: 64, color: "red" }],
                 ["arrow", "g4", "g5"]] },
        { say: "From the first day of the tenth month to the first day of the first month, over three months, they set up a special prosecutor and even a fact-finding commission, and went through everything.",
          draw: [["write", "g6", [120, 640], "3-month special probe · commission", { size: 60, color: "blue" }],
                 ["box", "g6"]] },
        { say: "The list mentions the son of Jozadak. This is the high priest Joshua himself. Since he was the high priest, it seems they put it indirectly so that those who knew would know. But everyone else is named outright.",
          draw: [["write", "g7", [120, 780], "son of Jozadak = high priest Joshua", { size: 52 }],
                 ["write", "g8", { after: "g7", gap: 40 }, "others named", { size: 44, color: "gray" }]] }
      ]
    },
    {
      id: "next", title: "Why Nehemiah Came",
      beats: [
        { say: "The case of the leaders taking foreign women must have been very hard for Ezra to handle.",
          draw: [["clear"],
                 ["title", "t", "Why Nehemiah came"],
                 ["write", "h1", [120, 290], "foreign wives go home and complain", { size: 60 }]] },
        { say: "The foreign women went back to their own countries and complained to their parents and relatives. Those people came swarming to Jerusalem, tore down the wall, burned the gates, and took people captive.",
          draw: [["write", "h2", [120, 410], "wall torn down, gates burned", { size: 64, color: "red" }],
                 ["arrow", "h1", "h2"]] },
        { say: "Men like Zerubbabel and Joshua had already passed away, and Ezra was stuck, unable to go either way. He had tried to do the right thing, and this is how it turned out.",
          draw: [["write", "h3", [120, 540], "Ezra: stuck either way", { size: 60, color: "gray" }]] },
        { say: "Even so, at that time a few men, including Hanani, Nehemiah's own brother, went to Persia, met Nehemiah, and asked for help.",
          draw: [["write", "h4", [120, 670], "Hanani & co. → Nehemiah in Persia", { size: 60, color: "blue" }]] },
        { say: "And so the story continues with Nehemiah.",
          draw: [["write", "h5", [120, 800], "Next: Nehemiah", { size: 64, color: "green" }],
                 ["under", "h5", "green"]] }
      ]
    }
  ]
};
