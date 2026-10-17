// Numbers whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does.
window.BOARD = {
  scenes: [
    {
      id: "training", title: "Training in the Wilderness",
      beats: [
        { say: "Numbers is the record of training in the wilderness, the training of the chosen people.",
          draw: [["title", "t", "Numbers = wilderness training"],
                 ["write", "a1", [120, 300], "wilderness · chosen-people training", { size: 64, color: "blue" }],
                 ["under", "a1", "blue"]] },
        { say: "It covers the time from leaving Mount Sinai after a year there, through the Wilderness of Paran, to the Wilderness of Zin, where they stayed.",
          draw: [["write", "a2", [120, 430], "Mt. Sinai"],
                 ["write", "a3", { after: "a2", gap: 100 }, "Paran"],
                 ["write", "a4", { after: "a3", gap: 100 }, "Zin"],
                 ["arrow", "a2", "a3"],
                 ["arrow", "a3", "a4"],
                 ["write", "a2b", { below: "a2", gap: 80 }, "1 year there", { size: 46, color: "gray" }]] },
        { say: "Training is absolutely necessary. These were new rules they had never had before, so they had to actually practice them.",
          draw: [["write", "a5", [120, 660], "new rules → must practice", { color: "red" }]] },
        { say: "Understanding something does not change your life.",
          draw: [["write", "a6", [120, 790], "understanding ≠ changed life", { size: 68, color: "red" }],
                 ["box", "a6"]] }
      ]
    },
    {
      id: "census", title: "Census and Camp Order",
      beats: [
        { say: "Chapters 1 to 3 are the census and the arrangement of the camp. Before anything else, they are counted. Twenty years old and up, able to draw the sword. There was no upper age limit.",
          draw: [["clear"],
                 ["title", "t", "Census (ch. 1~3)"],
                 ["write", "b1", [100, 330], "20 and up · able to fight", { size: 58 }]] },
        { say: "There were 603,550. In the second census in chapter 26, the number drops to 601,730.",
          draw: [["write", "b2", [100, 460], "603,550", { size: 80, color: "blue" }],
                 ["write", "b3", { after: "b2", gap: 110 }, "601,730", { size: 60, color: "gray" }],
                 ["arrow", "b2", "b3"],
                 ["write", "b3b", { below: "b3", gap: 60 }, "(ch. 26, 2nd)", { size: 44, color: "gray" }]] },
        { say: "Add the women, children, and elderly, and it comes to roughly two to three million. On top of that, each person had three or four animals. It was a huge migration of nearly ten million living, moving creatures.",
          draw: [["write", "b4", [100, 640], "2~3 million + livestock", { size: 60 }],
                 ["write", "b5", { after: "b4", gap: 110 }, "~10 million on the move", { size: 64, color: "red" }],
                 ["arrow", "b4", "b5"]] },
        { say: "Now they were no longer a disorderly mob. They moved like an army. Marching when they moved, and camped in order when they rested, on the east, west, south, and north, with the tabernacle at the center.",
          draw: [["write", "b6", [100, 790], "like an army: camp around the tabernacle", { size: 56, color: "blue" }],
                 ["under", "b6", "blue"]] }
      ]
    },
    {
      id: "problems", title: "Problems of the Great Move",
      beats: [
        { say: "When such an enormous population packs up its belongings, carries its children on its backs, and drives its herds along, all sorts of problems come up.",
          draw: [["clear"],
                 ["title", "t", "Problems of moving 10 million"]] },
        { say: "First, water. To drink that much, water literally had to burst out of the rock. Waiting at a faucet, the impatient ones would have lost their minds.",
          draw: [["write", "c1", [100, 300], "① water", { color: "blue" }],
                 ["write", "c1b", { after: "c1", gap: 50 }, "must burst from the rock", { size: 56 }]] },
        { say: "Second, food. After eating almost all the animals they had brought out of Egypt, they were about to starve. Even the manna, which at first tasted like honey, later tasted like cakes baked with oil, and in the end they hated it as worthless food.",
          draw: [["write", "c2", [100, 420], "② food", { color: "blue" }],
                 ["write", "c2b", { after: "c2", gap: 50 }, "manna: honey → oil cake → \"worthless\"", { size: 50 }]] },
        { say: "Third, when people got sick there was no hospital. If an epidemic broke out, it was a disaster. There was also the problem of where to sleep, and the only place to rest was barely the shade of a rock.",
          draw: [["write", "c3", [100, 540], "③ the sick ④ sleep ⑤ rest", { color: "blue" }]] },
        { say: "And people died often. Five thousand died just on the way to Mount Sinai. They all died together in one place, so it looked as if Moses had brought them out to die.",
          draw: [["write", "c4", [100, 670], "⑥ frequent deaths", { color: "red" }],
                 ["write", "c4b", { after: "c4", gap: 50 }, "5,000 before Sinai", { size: 52, color: "gray" }]] },
        { say: "Exodus 14, verse 11. Because there were no graves in Egypt, have you taken us away to die in the wilderness?",
          draw: [["write", "c5", [160, 800], "\"No graves in Egypt?\" (Exod 14:11)", { size: 54 }],
                 ["under", "c5"]] }
      ]
    },
    {
      id: "levites", title: "The Levites and the Jealousy Offering",
      beats: [
        { say: "Chapter 4 gives the duties of the sons of Levi: Kohath, Gershon, and Merari. The Kohathites carried the holy things. In Korean, Kohath sounds like the word for precious.",
          draw: [["clear"],
                 ["title", "t", "Ch. 4 Levites · ch. 5 jealousy offering"],
                 ["write", "d1", [100, 300], "Kohath: holy things", { size: 58, color: "blue" }],
                 ["write", "d1b", { after: "d1", gap: 40 }, "\"precious\"", { size: 46, color: "gray" }]] },
        { say: "The Gershonites carried things that were rolled up and folded, like cords and coverings. Gershon sounds like fold. The Merarites carried the pillars and boards. Merari sounds like carrying on the shoulder.",
          draw: [["write", "d2", [100, 400], "Gershon: cords · coverings", { size: 58, color: "blue" }],
                 ["write", "d2b", { after: "d2", gap: 40 }, "\"fold\"", { size: 46, color: "gray" }],
                 ["write", "d3", [100, 500], "Merari: pillars · boards", { size: 58, color: "blue" }],
                 ["write", "d3b", { after: "d3", gap: 40 }, "\"shoulder\"", { size: 46, color: "gray" }]] },
        { say: "Chapter 5 is the offering of jealousy. When a husband suspected his wife, he brought her to the priest and offered a meal offering of a tenth of an ephah of barley flour. No oil and no frankincense were put on it.",
          draw: [["write", "d4", [100, 640], "jealousy offering: barley · oil ✕ incense ✕", { size: 54 }]] },
        { say: "This was a law for the sake of women. It officially cleared away suspicion.",
          draw: [["write", "d5", [100, 780], "a law for women = clears suspicion", { size: 72, color: "green" }],
                 ["under", "d5", "green"]] }
      ]
    },
    {
      id: "nazirite", title: "The Nazirite and the Wilderness of Paran",
      beats: [
        { say: "Chapter 6 is the law of the Nazirite. They had to stay away from wine and strong drink. Not even grape juice, fresh grapes, raisins, or grape skins were allowed.",
          draw: [["clear"],
                 ["title", "t", "Ch. 6 Nazirite · ch. 10 to Paran"],
                 ["photo", "p2", "img/image88.jpg", [1180, 40, 320, 360], { tilt: 2, caption: "Map of the wilderness journey" }],
                 ["write", "e1", [100, 300], "Nazirite: no grapes, not even skins", { size: 54, color: "blue" }]] },
        { say: "No razor could touch their head, and they had to stay away from dead bodies. Even of their parents or brothers.",
          draw: [["write", "e2", [140, 410], "no razor · no corpses (even parents)", { size: 52 }]] },
        { say: "The priestly blessing begins at chapter 6, verse 23. It asks for blessing, grace, and peace.",
          draw: [["write", "e3", [100, 540], "priestly blessing: bless · grace · peace", { size: 54, color: "green" }]] },
        { say: "In chapter 7 they bring offerings to dedicate the altar, and in chapter 10 they move on to the Wilderness of Paran. The place they stayed longest was the Wilderness of Zin, thirty-eight years. They were in the Wilderness of Sinai for just over a year.",
          draw: [["write", "e4", [100, 670], "Zin: 38 yrs", { size: 72, color: "red" }],
                 ["circle", "e4"],
                 ["write", "e4b", { after: "e4", gap: 60 }, "Sinai: just over 1 yr", { size: 50, color: "gray" }]] },
        { say: "And then the people's complaints and grumbling burst out.",
          draw: [["write", "e5", [100, 810], "→ complaints burst out", { size: 58, color: "red" }]] }
      ]
    },
    {
      id: "greed", title: "The Graves of Craving",
      beats: [
        { say: "Chapter 11, the incident at Taberah. The people complained wickedly, so God burned the edge of the camp with fire.",
          draw: [["clear"],
                 ["title", "t", "Ch. 11~12 complaints begin"],
                 ["write", "f1", [100, 300], "Taberah: fire at camp edge", { color: "red" }]] },
        { say: "Verse 4. The mixed multitude that came out with them were filled with craving and stirred things up, so the Israelites also complained that they wanted meat.",
          draw: [["write", "f2", [100, 420], "mixed crowd stirs up", { size: 58 }],
                 ["write", "f3", { after: "f2", gap: 110 }, "\"Meat!\"", { size: 64, color: "blue" }],
                 ["arrow", "f2", "f3"]] },
        { say: "So God sent quail. But verse 33 says, while the meat was still between their teeth, before it was chewed, he struck them. That place was named Kibroth-hattaavah, the graves of craving.",
          draw: [["write", "f4", [100, 560], "Kibroth-hattaavah", { size: 64, color: "red" }],
                 ["write", "f4b", { after: "f4", gap: 40 }, "= graves of craving", { size: 56 }],
                 ["box", "f4"]] },
        { say: "In the middle of all this, Moses takes another wife, a Cushite woman.",
          draw: [["write", "f5", [100, 690], "Moses: marries a Cushite woman", { size: 54, color: "gray" }]] },
        { say: "And Moses's sister Miriam challenges his authority, gets leprosy, and has to back down with a yelp.",
          draw: [["write", "f6", [100, 800], "Miriam: challenges Moses → leprosy", { size: 54, color: "gray" }]] }
      ]
    },
    {
      id: "spies", title: "The Twelve Spies",
      beats: [
        { say: "After that they send spies into the land of Canaan. But who sends twelve spies?",
          draw: [["clear"],
                 ["title", "t", "Ch. 13~14 twelve spies"],
                 ["write", "g1", [100, 300], "12 spies?!", { size: 72 }]] },
        { say: "Only Joshua and Caleb said they could win. The rest were frightened and said, we're all dead. And the people got swept up in that opinion again, and they all complained.",
          draw: [["write", "g2", [100, 430], "Joshua · Caleb: we win", { color: "green" }],
                 ["write", "g3", [100, 540], "other 10: we're dead → people grumble", { size: 54, color: "red" }]] },
        { say: "God was furious. Only Joshua and Caleb would enter the land of Canaan, and all the rest would die in the wilderness.",
          draw: [["write", "g4", [100, 670], "only two enter, rest die in wilderness", { size: 64, color: "red" }],
                 ["under", "g4"]] },
        { say: "In chapter 15, verse 32, a man who secretly worked on the Sabbath is stoned to death. Because they were in training, God applied the law rather strictly.",
          draw: [["write", "g5", [140, 790], "Sabbath broken → strict in training", { size: 52, color: "gray" }]] },
        { say: "In chapter 17, only Aaron's staff sprouts and bears almonds. God has it put inside the ark of the testimony and kept as a sign against rebellion.",
          draw: [["write", "g6", { at: [1250, 330] }, "Aaron's staff", { anchor: "middle", size: 60, color: "blue" }],
                 ["write", "g6b", { at: [1250, 420] }, "kept as a sign", { anchor: "middle", size: 46, color: "gray" }]] },
        { say: "From chapter 18, the portions of the priests and Levites are set. They were wholly responsible for Israel's teaching and worship, and the people were responsible for their living.",
          draw: [["write", "g7", { at: [1250, 230] }, "ch. 18 Levites: teaching · worship", { anchor: "middle", size: 44, color: "gray" }]] }
      ]
    },
    {
      id: "rock", title: "Moses Strikes the Rock Twice",
      beats: [
        { say: "Chapter 20. They arrive at Kadesh, and Miriam dies. There is no water, so the people grumble and complain again.",
          draw: [["clear"],
                 ["title", "t", "Ch. 20 Moses's mistake"],
                 ["write", "h1", [100, 300], "Kadesh: Miriam dies · no water", { size: 58 }]] },
        { say: "God told Moses to speak to the rock, but Moses lost his temper and struck the rock twice.",
          draw: [["write", "h2", [100, 430], "speak to the rock"],
                 ["write", "h3", { after: "h2", gap: 110 }, "struck twice", { color: "red" }],
                 ["arrow", "h2", "h3"],
                 ["circle", "h3"]] },
        { say: "So God says he will not let Moses enter the land of Canaan.",
          draw: [["write", "h4", [100, 560], "Moses can't enter Canaan", { color: "red" }],
                 ["under", "h4"]] },
        { say: "How much Moses must have wanted to go in! That dream was shattered because of these people.",
          draw: [["write", "h5", [140, 670], "life's dream shattered by the people", { size: 52, color: "gray" }]] },
        { say: "And yet after that he never neglected leading the people. He led them toward a land he himself could not enter. He was truly a great man.",
          draw: [["write", "h6", [100, 800], "Moses still led to the end", { size: 68, color: "green" }],
                 ["box", "h6", "green"]] }
      ]
    },
    {
      id: "highway", title: "The King's Highway",
      beats: [
        { say: "Once, when the Israelites were passing through the land of Edom, they tried to take a shortcut. The road called the King's Highway.",
          draw: [["clear"],
                 ["title", "t", "The King's Highway"],
                 ["photo", "p3", "img/image89.jpg", [1000, 190, 520, 293], { tilt: -2, caption: "Roads of Israel" }]] },
        { say: "If you look at the land of Israel, there is the coastal road, the patriarchs' road, and the King's Highway. The King's Highway runs along the ridges. It is a cool, fast road.",
          draw: [["write", "i1", [100, 300], "coastal road", { size: 58 }],
                 ["write", "i2", [100, 410], "patriarchs' road", { size: 58 }],
                 ["write", "i3", [100, 520], "King's Highway", { size: 64, color: "blue" }],
                 ["write", "i3b", { after: "i3", gap: 40 }, "ridge · fast", { size: 48, color: "gray" }]] },
        { say: "So they asked the king of Edom, but he refused. They were hurt.",
          draw: [["write", "i4", [100, 660], "Edom's king refuses", { color: "red" }],
                 ["strike", "i3"]] },
        { say: "Later, Edom comes under God's judgment. The fall of Edom shows up all through the Prophets.",
          draw: [["write", "i5", [100, 790], "→ Edom judged later (Prophets)", { size: 56 }]] }
      ]
    },
    {
      id: "snake", title: "The Bronze Serpent",
      beats: [
        { say: "Chapter 21, the bronze serpent. Because they couldn't take the King's Highway, the people grumbled again, and they were bitten by fiery serpents and died.",
          draw: [["clear"],
                 ["title", "t", "Ch. 21 bronze serpent"],
                 ["write", "j1", [120, 300], "grumbling"],
                 ["write", "j2", { after: "j1", gap: 110 }, "fiery serpents", { color: "red" }],
                 ["arrow", "j1", "j2"]] },
        { say: "Grumbling brought the fiery serpents. In Korean the two words even rhyme, don't they?",
          draw: [["write", "j3", [180, 390], "(grumble → serpents)", { size: 48, color: "gray" }]] },
        { say: "Moses prayed, and God said, make a bronze serpent and lift it high on a pole. Whoever looks at it will live.",
          draw: [["write", "j4", [120, 470], "bronze serpent on pole", { size: 64, color: "blue" }],
                 ["write", "j5", { after: "j4", gap: 90 }, "look and live", { size: 72, color: "green" }],
                 ["arrow", "j4", "j5"],
                 ["circle", "j5", "green"]] },
        { say: "The serpent is not what matters. What matters is looking at what you were told to look at.",
          draw: [["write", "j6", [120, 620], "not the snake: look where you're told", { size: 60, color: "red" }],
                 ["under", "j6"]] },
        { say: "We too live when we look at Jesus, don't we?",
          draw: [["write", "j7", { at: [800, 780] }, "look at Jesus and live", { anchor: "middle", size: 80, color: "blue" }]] }
      ]
    },
    {
      id: "balaam", title: "Balaam and Peor",
      beats: [
        { say: "Chapters 22 to 24 are the famous story of Balaam. The king of Moab feared Israel and called Balaam to curse them, but in the end Balaam blessed them instead of cursing them.",
          draw: [["clear"],
                 ["title", "t", "Ch. 22~25 Balaam and Peor"],
                 ["write", "k1", [100, 300], "Balaam: curse", { size: 64 }],
                 ["strike", "k1"],
                 ["write", "k2", { after: "k1", gap: 110 }, "blessing", { size: 64, color: "green" }],
                 ["arrow", "k1", "k2"]] },
        { say: "In chapter 25, at Peor, something terrible happens. The Israelites began committing sexual immorality with the women of Moab.",
          draw: [["write", "k3", [100, 450], "Peor: immorality with Moabite women", { size: 64, color: "red" }]] },
        { say: "When those women sacrificed to their gods, they invited the Israelites, and the way they served those foreign gods was a wild party. The people were lured in and fell for it completely.",
          draw: [["write", "k4", [140, 560], "invited to pagan feast → fell for it", { size: 54, color: "gray" }]] },
        { say: "God was so angry that he told Moses to seize all the leaders and hang them.",
          draw: [["write", "k5", [100, 680], "hang the leaders", { size: 58 }]] },
        { say: "Aaron's grandson Phinehas ran a spear through a man and a woman who were committing immorality, and only then did the plague stop. The plague was typhoid fever.",
          draw: [["write", "k6", [100, 800], "Phinehas → plague stops", { color: "blue" }],
                 ["write", "k6b", { after: "k6", gap: 40 }, "(plague = typhoid)", { size: 46, color: "gray" }]] }
      ]
    },
    {
      id: "refuge", title: "Cities of Refuge",
      beats: [
        { say: "Chapter 35 tells about the cities of refuge. Today, a city of refuge would be something like a police station. Not a church.",
          draw: [["clear"],
                 ["title", "t", "Ch. 35 cities of refuge"],
                 ["photo", "p4", "img/image92.jpg", [1060, 40, 440, 248], { tilt: 2 }],
                 ["write", "l1", [100, 320], "refuge city = police station", { size: 64, color: "blue" }],
                 ["write", "l1b", { below: "l1", gap: 80 }, "(not a church)", { size: 48, color: "gray" }]] },
        { say: "If someone killed a person by accident, he could quickly flee to a city of refuge and be protected from the avenger of blood. The cities were placed within a day's reach from anywhere in Israel, and he could live there until his case was judged.",
          draw: [["write", "l2", [100, 520], "accidental killing → safe from avenger", { size: 56 }]] },
        { say: "The reason for the cities of refuge was to keep personal feelings from setting off reckless revenge. And to prevent unjust deaths.",
          draw: [["write", "l3", [100, 640], "break the revenge cycle · no unjust deaths", { size: 58, color: "red" }],
                 ["under", "l3"]] },
        { say: "God told them to keep the roads to the cities of refuge in good repair, so no one would trip over a stone. According to Jewish tradition, the roads were fourteen meters wide, almost four lanes, and there were signs too. City of refuge, two kilometers, like that.",
          draw: [["write", "l4", [100, 780], "road 14 m wide · sign \"Refuge 2 KM\"", { size: 56, color: "green" }]] }
      ]
    },
    {
      id: "count", title: "How Many Complaints?",
      beats: [
        { say: "When you read the Bible, there is a complaint every time you turn a page, so it looks as if they complained all the time. But it was ten times in forty years.",
          draw: [["clear"],
                 ["title", "t", "How many complaints?"],
                 ["write", "m1", [120, 300], "10 times in 40 yrs", { size: 72, color: "blue" }]] },
        { say: "That's about once every four years. It's almost as if they never complained. What would we have been like?",
          draw: [["write", "m2", { after: "m1", gap: 60 }, "= once / 4 yrs", { size: 64 }],
                 ["write", "m3", [180, 410], "and us…?", { size: 50, color: "gray" }]] },
        { say: "And the complaints were mostly packed into the first two years. The first eight came on the way to Kadesh-barnea. The beginning is the hard part.",
          draw: [["write", "m4", [120, 550], "mostly first 2 yrs → start is hard", { color: "red" }],
                 ["under", "m4"]] },
        { say: "With these lectures too, at first you couldn't imagine listening for more than an hour, but now it's not so bad, is it?",
          draw: [["write", "m5", [180, 660], "a 1-hour lecture was hard at first too", { size: 50, color: "gray" }]] },
        { say: "They had plenty of reason to complain, but God still would not put up with complaining. Especially during training.",
          draw: [["write", "m6", { at: [800, 800] }, "God won't stand complaining (in training)", { anchor: "middle", size: 56, color: "red" }],
                 ["box", "m6"]] }
      ]
    },
    {
      id: "end", title: "The Real Shortcut",
      beats: [
        { say: "In the second census in chapter 26, the number went down, didn't it? In Egypt they had multiplied so much that Pharaoh was afraid. It shows how hard the wilderness training was, and how much they did that deserved death. Verse 64. Everyone died except Joshua and Caleb.",
          draw: [["clear"],
                 ["title", "t", "Why training took so long"],
                 ["photo", "p5", "img/image93.jpg", [1120, 40, 400, 225], { tilt: -2 }],
                 ["write", "n1", [100, 330], "26:64 all died but Joshua · Caleb", { size: 56 }]] },
        { say: "Because of Israel's complaining and grumbling and their distrust of God, the wilderness training dragged on. How many years? Forty.",
          draw: [["write", "n2", [100, 460], "complaints · distrust"],
                 ["write", "n3", { after: "n2", gap: 110 }, "40 yrs", { size: 84, color: "red" }],
                 ["arrow", "n2", "n3"],
                 ["circle", "n3"]] },
        { say: "Friends, the real shortcut is not to be clever and cut corners, but to walk the right path faithfully and steadily. In the end that is faster and safer.",
          draw: [["write", "n4", [100, 610], "real shortcut = the straight path", { size: 68, color: "green" }],
                 ["under", "n4", "green"]] },
        { say: "Being disciplined so often, they gradually became trained. Before, they got water only after being punished. But after the last complaint, they sang, Spring up, O well, and drank the water.",
          draw: [["write", "n5", [100, 740], "\"Spring up, O well~\"", { size: 60, color: "blue" }]] },
        { say: "The generation that would enter Canaan was nearly ready. Around that time, just before he died, Moses preached his last sermon, and that book is Deuteronomy.",
          draw: [["write", "n6", { after: "n5", gap: 60 }, "→ Deuteronomy", { size: 64, color: "red" }],
                 ["box", "n6"]] }
      ]
    }
  ]
};
