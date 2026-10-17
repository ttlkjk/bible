// 1 John whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does.
window.BOARD = {
  scenes: [
    {
      id: "restore", title: "Restored Relationships",
      beats: [
        { say: "The first theme of First John is the restoration of our relationship with God.",
          draw: [["title", "t", "1 John = restored relationships"],
                 ["photo", "p1", "../../pansuh/img/p4/image88.jpg", [1100, 200, 400, 225], { tilt: 2, caption: "1 John (true love)" }]] },
        { say: "In Genesis chapter 3, the trust between God and man was broken.",
          draw: [["write", "a1", [120, 300], "Gen 3", { color: "gray" }],
                 ["write", "a2", { after: "a1", gap: 40 }, "God ↔ man: trust broken"]] },
        { say: "In chapter 4, one brother killed another, and fellowship between people began to break down too. And it was not easily restored.",
          draw: [["write", "a3", [120, 420], "Gen 4", { color: "gray" }],
                 ["write", "a4", { after: "a3", gap: 40 }, "brother ↔ brother: murder"],
                 ["strike", "a4", "red"]] },
        { say: "Then Jesus Christ came as the atoning sacrifice between God and man.",
          draw: [["write", "a5", [120, 560], "Jesus Christ = atoning sacrifice", { color: "blue" }],
                 ["box", "a5", "blue"]] },
        { say: "And He gave a new commandment, to love one another. This is the restoration of relationships. Between God and man, and between brother and brother.",
          draw: [["write", "a6", [120, 690], "New command: love one another"],
                 ["write", "a7", [120, 810], "Both relationships restored", { color: "green" }],
                 ["under", "a7", "green"]] }
      ]
    },
    {
      id: "love1", title: "True Love According to John ①",
      beats: [
        { say: "Let's look one by one at true love as John describes it. First, love as the fruit of light.",
          draw: [["clear"],
                 ["title", "t", "True love according to John"],
                 ["write", "b1", [120, 300], "1. Love as the fruit of light", { color: "blue" }]] },
        { say: "Because God is light, we must live as reflectors of His light.",
          draw: [["write", "b2", [180, 400], "God = light", { size: 56 }],
                 ["write", "b3", { after: "b2", gap: 120 }, "we = reflectors of light", { size: 56, color: "red" }],
                 ["arrow", "b2", "b3"]] },
        { say: "Second, love in the truth. If you have the real truth, your life of faith has to show itself in love.",
          draw: [["write", "b4", [120, 540], "2. Love in the truth", { color: "blue" }],
                 ["write", "b5", { after: "b4", gap: 50 }, "real truth → shows as love", { size: 48, color: "gray" }]] },
        { say: "Third, love for God and love for our brothers. Love shows itself in these two ways.",
          draw: [["write", "b6", [120, 680], "3. Love for God + for brothers", { color: "blue" }]] },
        { say: "Love for God and love for your neighbor. Jesus said the whole law and the prophets hang on these.",
          draw: [["write", "b7", [180, 800], "= whole law and prophets hang on these", { size: 56, color: "red" }],
                 ["under", "b7", "red"]] }
      ]
    },
    {
      id: "love2", title: "True Love According to John ②",
      beats: [
        { say: "Fourth, love without shame or fear. Perfect love casts out shame and fear.",
          draw: [["clear"],
                 ["title", "t", "True love (continued)"],
                 ["write", "c1", [120, 290], "4. Love with no shame · no fear", { size: 60, color: "blue" }]] },
        { say: "Christian faith is a personal relationship with God. Through faith, the broken relationship is restored, and that relationship is completed in love. Not only completed, but kept going by love.",
          draw: [["write", "c2", [180, 390], "faith → restored", { size: 52 }],
                 ["write", "c3", { after: "c2", gap: 100 }, "love → completed · kept going", { size: 52, color: "green" }],
                 ["arrow", "c2", "c3"]] },
        { say: "Fifth, love that bears fruit in deed and in truth. Not just saying you love, but a love that puts it into practice.",
          draw: [["write", "c4", [120, 520], "5. Love fruitful in deed and truth", { size: 60, color: "blue" }],
                 ["write", "c5", [180, 610], "words only", { size: 52 }],
                 ["strike", "c5", "red"],
                 ["write", "c6", { after: "c5", gap: 40 }, "\"be warmed\"? → really warm them, feed them", { size: 46, color: "gray" }]] },
        { say: "Sixth, love that gives us boldness even in the judgment.",
          draw: [["write", "c7", [120, 720], "6. Love that gives boldness in judgment", { size: 56, color: "blue" }]] },
        { say: "Seventh, love that keeps the commandments. When someone you love asks you for something, you do it, don't you? This kind of love is real love.",
          draw: [["write", "c8", [120, 830], "7. Love that keeps commands", { size: 56, color: "blue" }],
                 ["write", "c9", { after: "c8", gap: 60 }, "= real love", { size: 64, color: "red" }],
                 ["circle", "c9", "red"]] }
      ]
    }
  ]
};
