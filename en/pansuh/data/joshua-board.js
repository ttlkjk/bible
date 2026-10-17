// Joshua whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does.
window.BOARD = {
  scenes: [
    {
      id: "open", title: "After the Death of Moses",
      beats: [
        { say: "Okay, Joshua. Chapter 1, verse 1 starts like this. After the death of Moses.",
          draw: [["title", "t", "Joshua Overview"],
                 ["write", "a1", [120, 300], "1:1 \"After the death of Moses\"", { size: 64, color: "blue" }]] },
        { say: "One person opens an era, and one person closes it. And Judges, which we'll get to soon, starts with, after the death of Joshua.",
          draw: [["write", "a2", [120, 420], "one man opens & closes an era", { color: "red" }],
                 ["under", "a2"],
                 ["write", "a3", [180, 520], "Judges: \"After the death of Joshua\"", { size: 50, color: "gray" }]] },
        { say: "Joshua has three parts. The conquest of Canaan, the dividing of the land, and then it wraps up with a farewell speech.",
          draw: [["write", "a4", [120, 650], "conquest → land division → farewell", { size: 56 }]] },
        { say: "Joshua steps up as leader, and they cross the Jordan River. And notice, by faith, they put their feet in the water first.",
          draw: [["write", "a5", [120, 790], "Jordan: by faith, feet in first", { size: 60, color: "green" }],
                 ["box", "a5", "green"]] }
      ]
    },
    {
      id: "rahab", title: "Rahab the Harlot",
      beats: [
        { say: "Joshua sends just two spies. He'd learned from what happened back in Moses' day.",
          draw: [["clear"],
                 ["title", "t", "The spies and Rahab"],
                 ["write", "b1", [120, 300], "just 2 spies", { color: "blue" }],
                 ["write", "b1b", { after: "b1", gap: 40 }, "(lesson from Moses' time)", { size: 50, color: "gray" }]] },
        { say: "These two went into the house of Rahab the harlot, and Rahab spotted them right away. They'd been picked from all the men of Israel. The best of the best. Real manly men.",
          draw: [["write", "b2", [120, 420], "Rahab knew them at once"],
                 ["write", "b2b", { after: "b2", gap: 40 }, "real men!", { size: 56, color: "gray" }]] },
        { say: "Rahab hid the two men, and her whole household was saved.",
          draw: [["write", "b3", [120, 540], "hid them"],
                 ["write", "b4", { after: "b3", gap: 110 }, "household saved", { color: "green" }],
                 ["arrow", "b3", "b4"]] },
        { say: "And what this woman says is just a work of art. Verse 11. The Lord your God, he is God in heaven above, and on earth beneath. She's got an eye for God.",
          draw: [["write", "b5", [120, 670], "\"God in heaven above & on earth beneath\"", { size: 54, color: "red" }],
                 ["under", "b5"]] },
        { say: "And she's got an eye for men, too! She marries one of the two, a man named Salmon. And Jesus is a descendant of Salmon. That family line shows up in the book of Ruth.",
          draw: [["write", "b6", [120, 800], "Rahab + Salmon"],
                 ["write", "b7", { after: "b6", gap: 110 }, "Jesus' line", { color: "blue" }],
                 ["arrow", "b6", "b7"],
                 ["circle", "b7", "blue"]] }
      ]
    },
    {
      id: "war", title: "The Conquest of Canaan",
      beats: [
        { say: "Now, the war to take Canaan happened in three campaigns.",
          draw: [["clear"],
                 ["title", "t", "Conquest of Canaan"],
                 ["photo", "p2", "../../pansuh/img/image106.jpg", [1000, 170, 520, 293], { tilt: -2, caption: "Joshua's battles" }]] },
        { say: "First, the central campaign. They cut the land right at the waist.",
          draw: [["write", "c1", [120, 300], "① central", { color: "blue" }],
                 ["write", "c1b", { after: "c1", gap: 40 }, "cut the waist", { size: 56 }]] },
        { say: "Next, the southern campaign. They swept through the south.",
          draw: [["write", "c2", [120, 420], "② south", { color: "blue" }],
                 ["write", "c2b", { after: "c2", gap: 40 }, "sweep the south", { size: 56 }]] },
        { say: "And last, the northern campaign. They pushed north and finished the war.",
          draw: [["write", "c3", [120, 540], "③ north", { color: "blue" }],
                 ["write", "c3b", { after: "c3", gap: 40 }, "push north, done", { size: 56 }]] },
        { say: "In six or seven years of fighting, thirty-one kings of Canaan lost their heads.",
          draw: [["write", "c4", [120, 720], "6~7 yrs · 31 Canaanite kings", { size: 72, color: "red" }],
                 ["under", "c4"]] }
      ]
    },
    {
      id: "cruel", title: "A Cruel War?",
      beats: [
        { say: "As for dividing the land, just read it carefully and take it as it is.",
          draw: [["clear"],
                 ["title", "t", "A cruel war?"]] },
        { say: "But here's a question. Was Joshua's conquest really a cruel war? A God who says wipe out the people of Canaan looks, at first glance, like a cruel God.",
          draw: [["write", "d1", [120, 340], "\"wipe them out\" = cruel God?", { color: "gray" }]] },
        { say: "But think about it. The sins Leviticus chapter 20 says deserve death were exactly what was already going on in the land of Canaan.",
          draw: [["write", "d2", [120, 460], "sins of Lev 20", { color: "blue" }],
                 ["write", "d3", { after: "d2", gap: 50 }, "= what Canaan did", { size: 58 }]] },
        { say: "And He wasn't hard only on the Gentiles. He also drove out Israelites who lived just like them. God is fair.",
          draw: [["write", "d4", [120, 590], "Israel cast out too"],
                 ["write", "d5", { after: "d4", gap: 110 }, "a fair God", { color: "green" }],
                 ["arrow", "d4", "d5"]] },
        { say: "And here's the key point. First, God says, drive them out. Only if they won't leave does He say to kill them. Wipe it all out, and dry up the seed of sin.",
          draw: [["write", "d6", [120, 740], "drive out first", { color: "red" }],
                 ["write", "d7", { after: "d6", gap: 110 }, "won't leave → dry up sin's seed", { size: 52 }],
                 ["arrow", "d6", "d7"],
                 ["circle", "d6"]] }
      ]
    },
    {
      id: "ebal", title: "Mount Ebal and Gibeon",
      beats: [
        { say: "Chapter 8, verse 30. The reading of the law. Half the people stood on Mount Ebal and half on Mount Gerizim, and the curses and blessings were read out loud.",
          draw: [["clear"],
                 ["title", "t", "Law read · Gibeon"],
                 ["photo", "p4", "../../pansuh/img/image108.jpg", [1000, 60, 520, 293], { tilt: 2, caption: "Mt. Ebal · Mt. Gerizim" }],
                 ["write", "e1", [100, 300], "8:30 law read", { color: "blue" }],
                 ["write", "e2", [140, 420], "Ebal · Gerizim: curses & blessings", { size: 54 }]] },
        { say: "In chapter 9, the Gibeonites trick Joshua. They pretend they've come from far away, make a treaty, and survive.",
          draw: [["write", "e3", [100, 570], "ch. 9 Gibeon: treaty by trickery", { color: "red" }]] },
        { say: "The oath's already been sworn, so they go on living among Israel, cutting wood and carrying water.",
          draw: [["write", "e4", [140, 690], "live on as woodcutters & water carriers", { size: 54 }]] },
        { say: "And later on, that causes trouble.",
          draw: [["write", "e5", [140, 810], "→ trouble later", { size: 56, color: "red" }],
                 ["under", "e5"]] }
      ]
    },
    {
      id: "refuge", title: "The Grace of the Cities of Refuge",
      beats: [
        { say: "The grace of the cities of refuge.",
          draw: [["clear"],
                 ["title", "t", "Cities of refuge"],
                 ["write", "f1", [120, 320], "refuge", { size: 84, color: "blue" }],
                 ["box", "f1", "blue"]] },
        { say: "This is the cities of refuge again, the ones we saw in Deuteronomy. Take a look at the map to see where they are.",
          draw: [["photo", "p5", "../../pansuh/img/image109.jpg", [1120, 150, 360, 405], { tilt: -2, caption: "Cities of refuge" }],
                 ["write", "f1b", { after: "f1", gap: 50 }, "also in Deut", { size: 50, color: "gray" }]] },
        { say: "Whoever became king of Israel had a duty to repair these roads every December.",
          draw: [["write", "f2", [120, 480], "king: repair roads each Dec.", { size: 64 }]] },
        { say: "The king looked after them himself.",
          draw: [["write", "f3", [120, 610], "= under the king himself", { color: "red" }],
                 ["under", "f3"]] }
      ]
    },
    {
      id: "farewell", title: "Joshua's Farewell",
      beats: [
        { say: "In Joshua's farewell speech, two phrases come up the most. It happened just as the Lord commanded Moses. And, keep it.",
          draw: [["clear"],
                 ["title", "t", "Joshua's farewell"],
                 ["write", "g1", [120, 300], "\"as commanded Moses\" · keep it", { color: "blue" }]] },
        { say: "Before he died, Joshua gathered the elders and the leaders and said, it was God who did all of this.",
          draw: [["write", "g2", [120, 420], "\"God did it all\"", { color: "green" }]] },
        { say: "Chapter 23 is, keep the law, love God, and then the blessings and the curses.",
          draw: [["write", "g3", [160, 520], "ch. 23: law · love · blessing & curse", { size: 50, color: "gray" }]] },
        { say: "Chapter 24 is a history sermon. And here's the heart of it. Choose whom you will serve. As for me and my house, we will serve the Lord.",
          draw: [["write", "g4", [120, 660], "\"Me and my house will serve the Lord\"", { size: 64, color: "red" }],
                 ["under", "g4"]] },
        { say: "It sounds really grand, doesn't it? But honestly, it means Israel was sliding so far into corruption that he had to say it.",
          draw: [["write", "g5", [160, 790], "→ so corrupt he had to say it", { size: 56, color: "gray" }]] }
      ]
    },
    {
      id: "next", title: "A Bitter Aftertaste",
      beats: [
        { say: "And there's one more bitter aftertaste. Chapter 24, verse 31. As long as the people who knew Joshua and what the Lord had done were alive, they served the Lord. But their children didn't.",
          draw: [["clear"],
                 ["title", "t", "A bitter aftertaste"],
                 ["write", "h1", [100, 300], "gen. who knew: served", { color: "green" }],
                 ["write", "h2", { below: "h1", gap: 110 }, "descendants: did not", { color: "red" }]] },
        { say: "They were already failing to pass the faith on to the next generation.",
          draw: [["write", "h3", [100, 540], "faith not passed on", { size: 72, color: "red" }],
                 ["circle", "h3"]] },
        { say: "This is the land of Canaan God led them into. The sea on the west. And from the south, Philistia, Edom, Moab, Ammon, Assyria. Enemies all around. He wanted them to learn to lean on God alone.",
          draw: [["photo", "p6", "../../pansuh/img/image110.jpg", [1230, 60, 260, 397], { tilt: 2, caption: "Enemies all around" }],
                 ["write", "h4", [100, 680], "enemies all around → rely on God alone", { size: 54, color: "blue" }]] },
        { say: "That's why Moses said to read them the law at least once every seven years. But after doing it once, at Mount Ebal and Mount Gerizim in Joshua's time, they stopped. They got to the point where they didn't even know they'd made a covenant.",
          draw: [["write", "h5", [100, 800], "read law every 7 yrs → once, then done", { size: 54 }],
                 ["strike", "h5"]] },
        { say: "Anyway, history now heads into the religious dark age we call Judges.",
          draw: [["write", "h6", { at: [1060, 580] }, "→ Judges: dark age of faith", { anchor: "middle", size: 56, color: "red" }]] }
      ]
    }
  ]
};
