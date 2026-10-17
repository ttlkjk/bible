// Jude whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does.
window.BOARD = {
  scenes: [
    {
      id: "intruders", title: "Discerning Heresy",
      beats: [
        { say: "The theme of Jude is discerning heresy.",
          draw: [["title", "t", "Jude = discerning heresy"],
                 ["photo", "p1", "img/p4/image91.jpg", [1120, 210, 380, 214], { tilt: -2 }]] },
        { say: "A few people have crept in unnoticed, and they are causing a lot of trouble.",
          draw: [["write", "a1", [120, 300], "a few crept in unnoticed", { color: "red" }]] },
        { say: "Fellows like that were marked out long ago for this judgment. They are the ones who deny Jesus Christ.",
          draw: [["write", "a2", [180, 400], "marked out long ago for judgment", { size: 56 }],
                 ["write", "a3", [180, 490], "= those who deny Jesus Christ", { size: 56, color: "red" }],
                 ["under", "a3", "red"]] },
        { say: "Fellows like that are hidden rocks in your love feasts. It's like biting on a stone in the middle of a meal. And they are shepherds who feed only themselves.",
          draw: [["write", "a4", [120, 610], "rocks in love feasts", { size: 60, color: "blue" }],
                 ["write", "a5", { after: "a4", gap: 16 }, "(biting a stone)", { size: 44, color: "gray" }],
                 ["write", "a6", [120, 700], "shepherds feeding only themselves", { size: 56, color: "blue" }]] },
        { say: "They are clouds without water, carried along by the winds, and autumn trees without fruit.",
          draw: [["write", "a7", [120, 810], "waterless clouds", { size: 60, color: "blue" }],
                 ["write", "a8", { after: "a7", gap: 50 }, "fruitless autumn trees", { size: 60, color: "blue" }],
                 ["photo", "p2", "img/p4/image92.jpg", [1180, 490, 320, 180], { tilt: 3 }]] }
      ]
    },
    {
      id: "advice", title: "Marks and Counsel",
      beats: [
        { say: "Let's look at their marks. They are murmurers, complainers, and people who walk after their own lusts.",
          draw: [["clear"],
                 ["title", "t", "Marks of heresy → our task"],
                 ["write", "b1", [120, 290], "marks", { size: 56, color: "red" }],
                 ["box", "b1", "red"],
                 ["write", "b2", { after: "b1", gap: 50 }, "murmur · complain · follow lusts", { size: 56 }]] },
        { say: "They also speak proud words, and they flatter people to gain an advantage.",
          draw: [["write", "b3", [282, 390], "proud words · flattery for gain", { size: 56 }]] },
        { say: "So what should we do? Jude urges us to build ourselves up on our faith and to pray in the Holy Spirit.",
          draw: [["write", "b4", [120, 530], "counsel", { size: 56, color: "green" }],
                 ["box", "b4", "green"],
                 ["write", "b5", { after: "b4", gap: 50 }, "build up in faith · pray in the Spirit", { size: 56 }]] },
        { say: "Keep yourselves in the love of God, and wait for the mercy of our Lord Jesus Christ unto eternal life.",
          draw: [["write", "b6", [282, 630], "keep yourselves in God's love", { size: 56 }],
                 ["write", "b7", [282, 730], "wait for the Lord's mercy (to eternal life)", { size: 56 }]] },
        { say: "And he closes by telling us to have mercy on some who doubt.",
          draw: [["write", "b8", [282, 830], "have mercy on those who doubt", { size: 56, color: "blue" }],
                 ["under", "b8", "blue"]] }
      ]
    }
  ]
};
