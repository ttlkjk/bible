// Jude whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does.
window.BOARD = {
  scenes: [
    {
      id: "intruders", title: "Discerning Heresy",
      beats: [
        { say: "Okay, Jude. What's it about? In a word, it's about spotting heresy.",
          draw: [["title", "t", "Jude = discerning heresy"],
                 ["photo", "p1", "img/p4/image91.jpg", [1120, 210, 380, 214], { tilt: -2 }]] },
        { say: "A few people have slipped in quietly, without anyone noticing. And they're causing a lot of trouble.",
          draw: [["write", "a1", [120, 300], "a few crept in unnoticed", { color: "red" }]] },
        { say: "People like that were marked out long ago for this judgment. Who are they? They're the ones who deny Jesus Christ.",
          draw: [["write", "a2", [180, 400], "marked out long ago for judgment", { size: 56 }],
                 ["write", "a3", [180, 490], "= those who deny Jesus Christ", { size: 56, color: "red" }],
                 ["under", "a3", "red"]] },
        { say: "People like that are hidden rocks in your love feasts. You know that feeling of biting on a stone in the middle of a meal? That's them. And they're shepherds who only feed themselves.",
          draw: [["write", "a4", [120, 610], "rocks in love feasts", { size: 60, color: "blue" }],
                 ["write", "a5", { after: "a4", gap: 16 }, "(biting a stone)", { size: 44, color: "gray" }],
                 ["write", "a6", [120, 700], "shepherds feeding only themselves", { size: 56, color: "blue" }]] },
        { say: "They're clouds without water, blown along by the wind. And autumn trees with no fruit.",
          draw: [["write", "a7", [120, 810], "waterless clouds", { size: 60, color: "blue" }],
                 ["write", "a8", { after: "a7", gap: 50 }, "fruitless autumn trees", { size: 60, color: "blue" }],
                 ["photo", "p2", "img/p4/image92.jpg", [1180, 490, 320, 180], { tilt: 3 }]] }
      ]
    },
    {
      id: "advice", title: "Marks and Counsel",
      beats: [
        { say: "Now, let's look at how you can spot them. They're grumblers and complainers, and they walk after their own lusts.",
          draw: [["clear"],
                 ["title", "t", "Marks of heresy → our task"],
                 ["write", "b1", [120, 290], "marks", { size: 56, color: "red" }],
                 ["box", "b1", "red"],
                 ["write", "b2", { after: "b1", gap: 50 }, "murmur · complain · follow lusts", { size: 56 }]] },
        { say: "They also talk big, proud words. And they flatter people to get something out of it.",
          draw: [["write", "b3", [282, 390], "proud words · flattery for gain", { size: 56 }]] },
        { say: "So what do we do? Jude tells us to build ourselves up on our faith, and to pray in the Holy Spirit.",
          draw: [["write", "b4", [120, 530], "counsel", { size: 56, color: "green" }],
                 ["box", "b4", "green"],
                 ["write", "b5", { after: "b4", gap: 50 }, "build up in faith · pray in the Spirit", { size: 56 }]] },
        { say: "Keep yourselves in the love of God, and wait for the mercy of our Lord Jesus Christ unto eternal life.",
          draw: [["write", "b6", [282, 630], "keep yourselves in God's love", { size: 56 }],
                 ["write", "b7", [282, 730], "wait for the Lord's mercy (to eternal life)", { size: 56 }]] },
        { say: "And he closes with this. Have mercy on some who doubt.",
          draw: [["write", "b8", [282, 830], "have mercy on those who doubt", { size: 56, color: "blue" }],
                 ["under", "b8", "blue"]] }
      ]
    }
  ]
};
