// Obadiah whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does.
window.BOARD = {
  scenes: [
    {
      id: "edom", title: "Who Is Edom?",
      beats: [
        { say: "The name Obadiah comes from Obad Yahu, which means one who worships the Lord. It is a book that prophesies the fall of Edom.",
          draw: [["title", "t", "Obadiah Overview"],
                 ["write", "a1", [120, 290], "Obadiah = worshiper of the LORD", { size: 64, color: "blue" }],
                 ["write", "a2", [120, 400], "prophesies Edom's fall", { size: 60, color: "red" }],
                 ["under", "a2"]] },
        { say: "Edom is the descendants of Esau. They are twin peoples with the descendants of Jacob.",
          draw: [["write", "a3", [120, 520], "Edom = Esau's line", { size: 60 }],
                 ["write", "a4", { after: "a3", gap: 50 }, "(twin of Jacob's line)", { size: 50, color: "gray" }]] },
        { say: "And yet they kept going up to Jerusalem or Samaria to plunder. Whenever Israel got into trouble, they laughed, ha ha, ha ha, and enjoyed it. Remember, God judges moral wrongs too.",
          draw: [["write", "a5", [120, 640], "plunder · \"ha ha\" at brother's trouble", { size: 56, color: "red" }]] },
        { say: "And he says that evil nations are not judged right away, one by one. They are all saved up, and when the day set by the Lord comes, they fall together.",
          draw: [["write", "a6", [120, 770], "saved up → fall together on set day", { size: 60, color: "blue" }],
                 ["box", "a6", "blue"]] }
      ]
    },
    {
      id: "small", title: "I Will Make You Small",
      beats: [
        { say: "Chapter 1, verse 1. The Lord God has prophesied judgment against Edom, and we have heard the news.",
          draw: [["clear"],
                 ["title", "t", "v. 1~2"],
                 ["write", "b1", [120, 300], "v. 1: heard news of Edom's judgment", { size: 60 }]] },
        { say: "Verse 2. Behold, I have made thee small among the heathen: thou art greatly despised.",
          draw: [["write", "b2", [120, 430], "v. 2: small among nations", { color: "red" }],
                 ["under", "b2"]] },
        { say: "I told you, didn't I? When God says he will make you small, you become small.",
          draw: [["write", "b3", [120, 560], "God makes small", { size: 60 }],
                 ["write", "b4", { after: "b3", gap: 110 }, "it becomes small", { size: 64, color: "red" }],
                 ["arrow", "b3", "b4"]] },
        { say: "Today you cannot find the descendants of Edom anywhere on earth. The same goes for Nineveh, and the same for Babylon.",
          draw: [["write", "b5", [120, 700], "Edom · Nineveh · Babylon", { size: 60 }],
                 ["write", "b6", { after: "b5", gap: 50 }, "= gone now", { size: 60, color: "blue" }],
                 ["box", "b6", "blue"]] }
      ]
    },
    {
      id: "rock", title: "Dwellers in the Clefts of the Rock",
      beats: [
        { say: "From verse 3. Thou that dwellest in the clefts of the rock, whose habitation is high; that saith in his heart, Who shall bring me down to the ground? The pride of thine heart hath deceived thee.",
          draw: [["clear"],
                 ["title", "t", "Clefts of the rock (v. 3~9)"],
                 ["write", "c1", [120, 300], "\"Who shall bring me down?\"", { size: 60 }],
                 ["write", "c2", [120, 410], "pride of heart deceived you", { size: 64, color: "red" }],
                 ["under", "c2"]] },
        { say: "Though thou exalt thyself as the eagle, and though thou set thy nest among the stars, thence will I bring thee down.",
          draw: [["write", "c3", [120, 530], "even among stars", { size: 56 }],
                 ["write", "c4", { after: "c3", gap: 110 }, "I'll bring you down", { size: 60, color: "red" }],
                 ["arrow", "c3", "c4"]] },
        { say: "The clefts of the rock are Petra. They lived in a city called Petra, at the foot of Mount Seir in southern Jordan.",
          draw: [["write", "c5", [120, 660], "clefts of rock = Petra", { size: 64, color: "blue" }],
                 ["box", "c5", "blue"],
                 ["write", "c6", { below: "c5", gap: 70 }, "foot of Mt. Seir, S. Jordan", { size: 48, color: "gray" }],
                 ["photo", "p1", "img/p2/image23.jpg", [1100, 200, 420, 237], { tilt: 2, caption: "Petra" }]] },
        { say: "Surrounded by rock on every side, it was a natural fortress. The downside was that farming was impossible. So robbery was their main business.",
          draw: [["write", "c7", { at: [1310, 610] }, "natural fortress", { anchor: "middle", size: 52, color: "green" }],
                 ["write", "c8", { at: [1310, 700] }, "no farming", { anchor: "middle", size: 56 }],
                 ["write", "c9", { at: [1310, 800] }, "robbery = job", { anchor: "middle", size: 60, color: "red" }],
                 ["arrow", "c8", "c9"]] }
      ]
    },
    {
      id: "petra", title: "A Look Inside Petra",
      beats: [
        { say: "You have to walk several kilometers through a narrow gap like this, with high cliffs on both sides.",
          draw: [["clear"],
                 ["title", "t", "Petra"],
                 ["photo", "p2", "img/p2/image25.jpg", [1060, 190, 460, 259], { tilt: -2 }],
                 ["write", "d1", [120, 300], "km through a narrow gap", { size: 60 }]] },
        { say: "Guard just that entrance, and no one can get in. A perfect natural fortress. That's why they were proud.",
          draw: [["write", "d2", [120, 420], "guard the entrance only", { size: 60 }],
                 ["write", "d3", { after: "d2", gap: 110 }, "pride", { size: 72, color: "red" }],
                 ["arrow", "d2", "d3"],
                 ["circle", "d3"]] },
        { say: "There are channels like ditches on both cliffs, so the rain running down the cliffs flows into the city inside. Very clever, isn't it?",
          draw: [["write", "d4", [120, 550], "cliff channels → rain to city", { size: 56, color: "blue" }]] },
        { say: "That entrance is not a building. It is a carving. They came down from above on ropes and cut the rock. They had to get it right the first time. There was no fixing it halfway.",
          draw: [["write", "d5", [120, 680], "entrance = carved rock", { color: "red" }],
                 ["write", "d6", { below: "d5", gap: 90 }, "on ropes · no second try", { size: 50, color: "gray" }]] },
        { say: "Things like this are all carvings too. The Bible just says they dwell in the clefts of the rock, but to our eyes it is art. And Edom like this was wiped out completely. The reason comes from verse 10 on.",
          draw: [["photo", "p3", "img/p2/image26.jpg", [1100, 540, 400, 225], { tilt: 3, caption: "All carved" }]] }
      ]
    },
    {
      id: "why", title: "Why Edom Fell",
      beats: [
        { say: "Verse 10. For thy violence against thy brother Jacob shame shall cover thee, and thou shalt be cut off for ever.",
          draw: [["clear"],
                 ["title", "t", "Why it fell (v. 10~15)"],
                 ["write", "e1", [120, 300], "violence against brother Jacob", { size: 64, color: "red" }],
                 ["under", "e1"]] },
        { say: "On the day foreigners cast lots for Jerusalem, even thou wast as one of them. When your brother nation is suffering, of course you should help. But instead, they were glad.",
          draw: [["write", "e2", [120, 420], "glad instead of helping", { size: 60 }]] },
        { say: "That doesn't mean God sends punishment from heaven right away. But there will surely be a day of judgment.",
          draw: [["write", "e3", [120, 540], "instant punishment", { size: 56 }],
                 ["strike", "e3"],
                 ["write", "e4", { after: "e3", gap: 60 }, "sure day of judgment", { size: 64, color: "red" }],
                 ["box", "e4"]] },
        { say: "Verse 15. As thou hast done, it shall be done unto thee: thy reward shall return upon thine own head.",
          draw: [["write", "e5", [120, 670], "v. 15: as you've done, done to you", { size: 60, color: "blue" }]] },
        { say: "See? He says he will judge, sooner or later. You reap what you sow.",
          draw: [["write", "e6", [120, 800], "reap what you sow", { size: 72, color: "green" }],
                 ["circle", "e6"]] }
      ]
    },
    {
      id: "same", title: "Same Message, One Author",
      beats: [
        { say: "There are other passages that deal with the same content as Obadiah. Isaiah chapter 34, Jeremiah 49 verses 7 to 22, Ezekiel 35 verses 1 to 15, and Amos 1 verses 11 to 12.",
          draw: [["clear"],
                 ["title", "t", "Passages with same content"],
                 ["write", "f1", [120, 290], "Isa 34 · Jer 49:7~22", { size: 56 }],
                 ["write", "f2", [120, 390], "Ezek 35:1~15 · Amos 1:11~12", { size: 56 }]] },
        { say: "Different people living in different places wrote them, and yet the content is the same. That means someone was behind it, right?",
          draw: [["write", "f3", [120, 520], "diff. places · people", { size: 56 }],
                 ["write", "f4", { after: "f3", gap: 90 }, "same content", { size: 64, color: "red" }],
                 ["arrow", "f3", "f4"]] },
        { say: "Prophets of the same era say the same thing because God is the one who spoke it. This is a place where you can see that the true author of the Bible is God.",
          draw: [["write", "f5", [120, 650], "true author of Bible = God", { color: "blue" }],
                 ["box", "f5", "blue"]] },
        { say: "Now we go back to 2 Kings chapter 17. We paused history for a moment and went to look at what the prophets of the same era said. Now history moves again.",
          draw: [["write", "f6", [120, 790], "pause over → 2 Kings 17", { size: 56, color: "green" }],
                 ["photo", "p4", "img/p2/image27.jpg", [1100, 190, 420, 237], { tilt: -2, caption: "OT Prophets" }]] }
      ]
    }
  ]
};
