// Judges whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does.
window.BOARD = {
  scenes: [
    {
      id: "judge", title: "What Is a Judge?",
      beats: [
        { say: "This is Judges. In Hebrew, judges are shophetim. The word shaphat means to judge.",
          draw: [["title", "t", "Judges"],
                 ["photo", "p1", "img/image111.jpg", [1110, 40, 400, 225], { tilt: 3 }],
                 ["write", "a1", [120, 330], "judges = shophetim", { size: 64, color: "blue" }],
                 ["write", "a2", { below: "a1", gap: 90 }, "shaphat = to judge", { size: 54, color: "gray" }]] },
        { say: "So the judges were men who judged, like courtroom judges.",
          draw: [["write", "a3", { after: "a1", gap: 60 }, "court judges", { size: 64, color: "red" }],
                 ["circle", "a3"]] },
        { say: "Judges is the story of the age of theocracy, when God himself ruled.",
          draw: [["write", "a4", [120, 580], "theocracy: God is King", { color: "blue" }]] },
        { say: "But even though God was King, things didn't go the way God wanted.",
          draw: [["write", "a5", [180, 690], "yet things didn't go God's way", { size: 56, color: "red" }],
                 ["under", "a5"]] },
        { say: "Hebrew history is the history of the covenant. And the history of that covenant not being kept becomes serious starting with Judges.",
          draw: [["write", "a6", [120, 820], "covenant not kept → serious from Judges on", { size: 54 }]] }
      ]
    },
    {
      id: "death", title: "After the Death of Joshua",
      beats: [
        { say: "Chapter 1, verse 1 begins with, after the death of Joshua.",
          draw: [["clear"],
                 ["title", "t", "\"After the death of Joshua\""],
                 ["write", "b1", [120, 300], "after Moses died · after Joshua died", { size: 56 }],
                 ["write", "b2", [120, 400], "after Saul died · after David died", { size: 56 }]] },
        { say: "When the historian wrote this history, he marked each turning point with the death of one person. That shows how important one person is.",
          draw: [["write", "b3", [120, 540], "turning point = one death"],
                 ["write", "b4", { after: "b3", gap: 110 }, "one person matters", { size: 56, color: "red" }],
                 ["arrow", "b3", "b4"],
                 ["circle", "b4"]] },
        { say: "In verse 1, they ask which of them should go up first.",
          draw: [["write", "b5", [120, 690], "\"Who shall go up first?\"", { color: "blue" }]] },
        { say: "Before Joshua's death, there was no need to ask this. The twelve tribes always fought together. After the land was divided, their strength was scattered.",
          draw: [["write", "b6", [180, 810], "12 tribes once together → land divided, strength split", { size: 46, color: "gray" }]] }
      ]
    },
    {
      id: "cause1", title: "Causes of the Religious Dark Age, Part 1",
      beats: [
        { say: "Let's look at why the time of the judges became a religious dark age. First, dividing up the land scattered their strength. Their fighting power was spread out.",
          draw: [["clear"],
                 ["title", "t", "Why a religious dark age"],
                 ["photo", "p2", "img/image112.jpg", [1150, 40, 380, 214], { tilt: 2 }],
                 ["write", "c1", [120, 330], "① land divided → strength split", { color: "blue" }]] },
        { say: "So second, they could not drive out the inhabitants of the land.",
          draw: [["write", "c2", [120, 450], "② couldn't drive out inhabitants", { color: "blue" }]] },
        { say: "Third, since they couldn't drive them out, instead of converting them, they got converted.",
          draw: [["write", "c3", [120, 570], "③ didn't convert, got converted", { color: "red" }],
                 ["under", "c3"]] },
        { say: "When good and evil live side by side, good usually ends up looking like evil.",
          draw: [["write", "c4", { at: [800, 740] }, "good + evil together → good copies evil", { anchor: "middle", size: 56, color: "red" }],
                 ["box", "c4"]] }
      ]
    },
    {
      id: "cause2", title: "Causes of the Religious Dark Age, Part 2",
      beats: [
        { say: "Fourth, the eyewitnesses of the history of salvation died.",
          draw: [["clear"],
                 ["title", "t", "Why a dark age (cont.)"],
                 ["write", "d1", [120, 300], "④ witnesses of salvation died", { color: "blue" }]] },
        { say: "There were no books with it written down, and no living witnesses left, so they couldn't know their past history.",
          draw: [["write", "d2", [180, 410], "no books, no witnesses", { size: 52, color: "gray" }]] },
        { say: "Fifth, they did not read the Law aloud. Joshua did not hold the public Bible readings that Moses had commanded.",
          draw: [["write", "d3", [120, 550], "⑤ Law not read aloud", { color: "blue" }]] },
        { say: "Sixth, Joshua did not appoint a successor. Moses prayed and appointed Joshua, but the Bible says nothing about a successor to Joshua.",
          draw: [["write", "d4", [120, 690], "⑥ no successor", { color: "blue" }],
                 ["write", "d4b", { after: "d4", gap: 50 }, "Moses → Joshua → ?", { size: 56, color: "red" }]] },
        { say: "It's a mystery of history.",
          draw: [["write", "d5", [180, 810], "a mystery of history", { size: 56, color: "gray" }],
                 ["circle", "d4b"]] }
      ]
    },
    {
      id: "drive", title: "Israel Did Not Drive Them Out",
      beats: [
        { say: "Chapter 1, verse 19. Judah drove out the people of the hill country, but could not drive out those in the valley, because they had chariots of iron.",
          draw: [["clear"],
                 ["title", "t", "Did not drive them out"],
                 ["write", "e1", [120, 300], "1:19 Judah: iron chariots, not driven out", { size: 54 }]] },
        { say: "Benjamin, Manasseh, Ephraim, Zebulun, Asher, Naphtali. Most of the tribes did not drive out the people living in the land they had received by lot.",
          draw: [["write", "e2", [120, 420], "Benjamin · Manasseh · Ephraim · Zebulun · Asher · Naphtali", { size: 44 }],
                 ["write", "e3", [120, 520], "most tribes failed", { color: "red" }],
                 ["under", "e3"]] },
        { say: "Look at verse 34. One tribe was actually driven out itself. The Amorites forced the children of Dan into the hill country.",
          draw: [["write", "e4", [120, 640], "Dan was driven out instead", { size: 58, color: "gray" }]] },
        { say: "God had already said it in Numbers chapter 33, verse 55. If you do not drive out the inhabitants of the land, those you let remain will be pricks in your eyes and thorns in your sides.",
          draw: [["write", "e5", [120, 780], "Num 33:55 pricks in eyes · thorns in sides", { size: 54, color: "blue" }],
                 ["box", "e5", "blue"]] }
      ]
    },
    {
      id: "mix", title: "Blending In, and an Endless Loop",
      beats: [
        { say: "The Israelites who didn't drive them out finally blended in with them. They served Baal and Ashtaroth.",
          draw: [["clear"],
                 ["title", "t", "Blending in, endless loop"],
                 ["write", "f1", [100, 300], "not driven out"],
                 ["write", "f2", { after: "f1", gap: 110 }, "blend in", { color: "red" }],
                 ["arrow", "f1", "f2"],
                 ["write", "f3", { below: "f1", gap: 100 }, "served Baal · Ashtaroth", { size: 54 }]] },
        { say: "They took their daughters as wives, gave their own daughters to their sons, and served their gods.",
          draw: [["write", "f4", [100, 520], "intermarriage → their gods too", { size: 54, color: "gray" }]] },
        { say: "Another thing to notice: the phrase, the children of Israel did evil in the sight of the LORD, keeps coming up. Again, and again, once more, once more.",
          draw: [["photo", "p3", "img/image115.jpg", [1000, 40, 520, 293], { tilt: -2, caption: "again · again · once more · once more" }],
                 ["write", "f5", [100, 650], "did evil in the sight of the LORD", { size: 60, color: "blue" }]] },
        { say: "God used judges to rescue them in a hurry, and they went back to doing evil. He rescued them again, and again they did evil. An endless loop.",
          draw: [["write", "f6", [100, 790], "evil → rescue → evil → rescue", { size: 54 }],
                 ["write", "f7", { after: "f6", gap: 50 }, "endless loop", { size: 64, color: "red" }],
                 ["circle", "f7"]] }
      ]
    },
    {
      id: "judges1", title: "The Judges, Part 1",
      beats: [
        { say: "Let's look at the judges. Othniel defeated Cushan-rishathaim, king of Mesopotamia.",
          draw: [["clear"],
                 ["title", "t", "The judges"],
                 ["write", "g1", [120, 300], "Othniel", { color: "blue" }],
                 ["write", "g1b", { after: "g1", gap: 50 }, "beat Cushan-rishathaim", { size: 56 }]] },
        { say: "Shamgar killed six hundred Philistines with an ox goad.",
          draw: [["write", "g2", [120, 420], "Shamgar", { color: "blue" }],
                 ["write", "g2b", { after: "g2", gap: 50 }, "600 with an ox goad", { size: 56 }]] },
        { say: "The prophetess Deborah crushed nine hundred iron chariots.",
          draw: [["write", "g3", [120, 540], "Deborah", { color: "blue" }],
                 ["write", "g3b", { after: "g3", gap: 50 }, "crushed 900 iron chariots", { size: 56 }]] },
        { say: "Gideon tore down Baal's altar and tested God with a fleece. Thirty-two thousand men, then ten thousand, then three hundred.",
          draw: [["write", "g4", [120, 680], "Gideon", { color: "blue" }],
                 ["write", "g4b", { after: "g4", gap: 50 }, "Baal altar · fleece · 32000 → 10000 → 300", { size: 50 }]] },
        { say: "But these men weren't mighty warriors. They were cowards.",
          draw: [["write", "g5", [240, 800], "not heroes but cowards", { size: 56, color: "red" }],
                 ["under", "g5"]] }
      ]
    },
    {
      id: "judges2", title: "The Judges, Part 2",
      beats: [
        { say: "Abimelech was the son of Gideon's concubine. Saying, my father was king, he killed his seventy half brothers. When he was struck by a millstone, he told the young man who carried his armor to kill him.",
          draw: [["clear"],
                 ["title", "t", "The judges (cont.)"],
                 ["write", "h1", [120, 300], "Abimelech", { color: "blue" }],
                 ["write", "h1b", { after: "h1", gap: 50 }, "killed 70 half brothers", { size: 56 }]] },
        { say: "Jephthah was the son of a harlot. He vowed that if he won the battle, he would offer as a burnt offering whoever came out to meet him first. He should have read Leviticus.",
          draw: [["write", "h2", [120, 420], "Jephthah", { color: "blue" }],
                 ["write", "h2b", { after: "h2", gap: 50 }, "vowed the first to greet him", { size: 50 }],
                 ["write", "h2c", { after: "h2b", gap: 30 }, "read Lev!", { size: 44, color: "gray" }]] },
        { say: "Ibzan had thirty sons and thirty daughters-in-law, all married to foreigners. That's not allowed.",
          draw: [["write", "h3", [120, 540], "Ibzan", { color: "blue" }],
                 ["write", "h3b", { after: "h3", gap: 50 }, "30 sons · 30 foreign wives", { size: 56 }]] },
        { say: "Samson lived however he pleased. He was born a Nazirite, but he didn't live a set-apart life at all.",
          draw: [["write", "h4", [120, 660], "Samson", { color: "blue" }],
                 ["write", "h4b", { after: "h4", gap: 50 }, "Nazirite, but not set apart", { size: 56 }]] },
        { say: "If the judges were like this, what do you think the lives of ordinary people were like?",
          draw: [["write", "h5", { at: [800, 800] }, "judges like this, so the people?", { anchor: "middle", size: 60, color: "red" }],
                 ["under", "h5"]] }
      ]
    },
    {
      id: "noking", title: "There Was No King",
      beats: [
        { say: "The conclusion of Judges comes at the very end. Chapter 21, verse 25. In those days there was no king in Israel. Every man did that which was right in his own eyes.",
          draw: [["clear"],
                 ["title", "t", "There was no king"],
                 ["photo", "p4", "img/image116.jpg", [1110, 40, 400, 225], { tilt: 2 }],
                 ["write", "i1", [100, 330], "21:25 no king", { size: 68, color: "blue" }],
                 ["write", "i2", { below: "i1", gap: 100 }, "right in his own eyes", { size: 64, color: "red" }],
                 ["under", "i2"]] },
        { say: "Chapter 18, verse 1 also begins, in those days there was no king in Israel. The story of the Levite's concubine in chapter 19 begins the same way.",
          draw: [["write", "i3", [100, 580], "18:1 · ch. 19 too: \"no king\"", { size: 56, color: "gray" }]] },
        { say: "The writer is deliberately telling us that all this happened because there was no king.",
          draw: [["write", "i4", [100, 690], "writer's point: no king", { size: 58 }]] },
        { say: "But what do you mean, no king? God was their King. It's not that there was no king. Nobody acknowledged God as King.",
          draw: [["write", "i5", [100, 810], "no king", { size: 58, color: "gray" }],
                 ["strike", "i5"],
                 ["write", "i6", { after: "i5", gap: 110 }, "didn't accept Him as King", { size: 60, color: "red" }],
                 ["arrow", "i5", "i6"],
                 ["box", "i6"]] }
      ]
    },
    {
      id: "micah", title: "Micah's Idol",
      beats: [
        { say: "In chapter 17, a man named Micah in the hill country of Ephraim stole money from his mother.",
          draw: [["clear"],
                 ["title", "t", "Ch. 17 Micah's idol"],
                 ["write", "j1", [120, 300], "Micah steals mom's money"]] },
        { say: "His mother poured out a curse, so he brought the money back and admitted he had taken it. Right away his mother turned the curse into a blessing.",
          draw: [["write", "j2", [120, 420], "curse"],
                 ["write", "j3", { after: "j2", gap: 110 }, "returned → instant blessing", { color: "blue" }],
                 ["arrow", "j2", "j3"]] },
        { say: "Then they made an idol with that money. And they said they were dedicating it to the LORD.",
          draw: [["write", "j4", [120, 550], "idol from the money", { color: "red" }],
                 ["write", "j5", { after: "j4", gap: 50 }, "= for the LORD?", { size: 56 }]] },
        { say: "He even set up a shrine in his house. Serving idols and serving God too. A total mishmash.",
          draw: [["write", "j6", [120, 680], "home shrine: idols + God", { size: 58 }],
                 ["write", "j7", { after: "j6", gap: 50 }, "mishmash!", { size: 72, color: "red" }],
                 ["circle", "j7"]] },
        { say: "Verse 6. In those days there was no king in Israel, so everyone did whatever he wanted.",
          draw: [["write", "j8", [180, 810], "17:6 no king, everyone did as he liked", { size: 52, color: "gray" }]] }
      ]
    },
    {
      id: "levite", title: "The Young Levite and the Tribe of Dan",
      beats: [
        { say: "One day a young Levite from Bethlehem in Judah was passing by this house. Micah called him in and asked him to be the priest of his house. I'll give you a nice car and a big salary. Okay?",
          draw: [["clear"],
                 ["title", "t", "Young Levite and Dan"],
                 ["write", "k1", [120, 300], "young Levite → Micah's priest", { color: "blue" }],
                 ["write", "k1b", [180, 400], "nice car + salary", { size: 52, color: "gray" }]] },
        { say: "Just then men from the tribe of Dan passed by. One of them recognized the young Levite's voice and asked him to inquire of God where they should go.",
          draw: [["write", "k2", [120, 530], "Dan: \"Ask God where to go\"", { size: 60 }]] },
        { say: "This was the answer. Before the LORD is your way wherein you go.",
          draw: [["write", "k3", [120, 660], "\"Your way is before the LORD\"", { color: "red" }]] },
        { say: "False prophets and fake pastors always say things like this on their own. Everything will go well, no matter what.",
          draw: [["write", "k4", [180, 780], "false prophet: all will go well", { size: 56, color: "gray" }],
                 ["strike", "k4"]] }
      ]
    },
    {
      id: "dan", title: "Stealing the Idol",
      beats: [
        { say: "The spies from Dan went back and stirred the others up. Micah's house has an idol, a shrine, and teraphim. Let's go take them. God's people wanted an idol shrine so badly they were going to steal it.",
          draw: [["clear"],
                 ["title", "t", "Stealing the idol"],
                 ["write", "l1", [120, 300], "\"Let's take the idol · teraphim\"", { color: "red" }]] },
        { say: "They broke in and were carrying out the idol and the ephod, when the young Levite priest caught them red-handed. What do you think you're doing?",
          draw: [["write", "l2", [120, 420], "priest: \"What are you doing?\"", { size: 58 }]] },
        { say: "Shut up and come with us. Do you want to stay the priest of one house, or become the priest of a whole tribe? We'll upgrade you to a Genesis, the fancier car, and pay you a big salary. And so the priest went along again.",
          draw: [["write", "l3", [120, 540], "one house"],
                 ["write", "l4", { after: "l3", gap: 110 }, "whole tribe + better car", { size: 56, color: "blue" }],
                 ["arrow", "l3", "l4"],
                 ["write", "l5", { after: "l4", gap: 40 }, "goes along", { size: 48, color: "gray" }]] },
        { say: "Micah hurried after them, but verse 25 says, keep quiet, before we kill you.",
          draw: [["write", "l6", [120, 670], "18:25 \"Shut up\"", { size: 58, color: "red" }]] },
        { say: "Then they struck down the people of Laish, who were living in peace, and settled in that land. The writer of Judges points out that the idol Micah made stayed with the tribe of Dan.",
          draw: [["write", "l7", [120, 800], "struck Laish, settled · idol stays with Dan", { size: 54 }],
                 ["under", "l7"]] }
      ]
    },
    {
      id: "concubine", title: "The Levite's Concubine",
      beats: [
        { say: "Chapter 19, in those days when there was no king in Israel. A certain Levite in a remote part of the hill country of Ephraim took a concubine. What kind of Levite takes a concubine?",
          draw: [["clear"],
                 ["title", "t", "Ch. 19~21 Levite's concubine"],
                 ["write", "m1", [120, 300], "a Levite with a concubine?", { color: "gray" }]] },
        { say: "The concubine left and went to her father's house, and he went to bring her back. If you go to get her, bring her back quickly. But he dawdled, and she was abused all night by the worthless men of that place until she died.",
          draw: [["write", "m2", [120, 420], "dawdled → she was killed by thugs", { size: 58, color: "red" }]] },
        { say: "Even more horrible, this Levite cut her body into twelve pieces and sent them to the twelve tribes of Israel.",
          draw: [["write", "m3", [120, 540], "body in 12 pieces → 12 tribes", { size: 58 }]] },
        { say: "All the tribe of Benjamin had to do was catch the thugs and punish them. Instead they tried to protect them, and it ended in war with the other eleven tribes. They were badly defeated, and only six hundred men were left.",
          draw: [["write", "m4", [120, 670], "Benjamin versus 11"],
                 ["write", "m5", { after: "m4", gap: 110 }, "only 600 left", { color: "red" }],
                 ["arrow", "m4", "m5"]] },
        { say: "The tribes had sworn not to give their daughters to Benjamin. So they struck down all the people of Jabesh-gilead, spared only four hundred young virgins, and married them to the Benjamites. Are these people in their right minds?",
          draw: [["write", "m6", [120, 800], "Jabesh-gilead · 400 virgins", { size: 58 }],
                 ["write", "m7", { after: "m6", gap: 50 }, "sane?", { size: 64, color: "red" }],
                 ["circle", "m7"]] }
      ]
    },
    {
      id: "end", title: "This Is Judges",
      beats: [
        { say: "Here's the conclusion. Chapter 21, verse 25. In those days there was no king in Israel. Every man did that which was right in his own eyes.",
          draw: [["clear"],
                 ["title", "t", "Conclusion"],
                 ["write", "n1", [120, 300], "no king → right in his own eyes", { color: "blue" }]] },
        { say: "God is King, and yet they keep saying there's no king. That means they didn't acknowledge God as King.",
          draw: [["write", "n2", [120, 420], "= didn't accept God as King", { color: "red" }],
                 ["under", "n2"]] },
        { say: "We saw this before, right? There were three things a king of Israel must never do: horses, wives, and silver and gold. And one thing he must do: copy the Law, read it every day, live it out, and teach it.",
          draw: [["write", "n3", [120, 560], "don't: horses · wives · silver & gold", { size: 58 }],
                 ["write", "n4", [120, 660], "do: read the Law daily · live it · teach it", { size: 56, color: "green" }]] },
        { say: "With no king to do these things, what happened? Everyone did whatever he wanted. Friends, this is Judges.",
          draw: [["write", "n5", { at: [800, 810] }, "own way = Judges", { anchor: "middle", size: 80, color: "red" }],
                 ["box", "n5"]] }
      ]
    }
  ]
};
