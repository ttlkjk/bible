// 2 John whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does.
window.BOARD = {
  scenes: [
    {
      id: "overview", title: "2 John at a Glance",
      beats: [
        { say: "Okay, Second John. It's a letter John wrote to warn against the antichrist. In other words, the heresy of Gnosticism.",
          draw: [["title", "t", "2 John = beware heresy"],
                 ["photo", "p1", "../../pansuh/img/p4/image89.jpg", [1100, 200, 400, 225], { tilt: -2, caption: "2 John" }]] },
        { say: "Now, what does this Gnostic heresy say? It denies that Jesus Christ came in the flesh.",
          draw: [["write", "a1", [120, 300], "Gnostic heresy", { color: "red" }],
                 ["write", "a2", [120, 400], "denies Jesus came in the flesh", { size: 56 }],
                 ["under", "a2", "red"]] },
        { say: "So John says, don't fall for it. Don't be tempted by heresy. Let's abide in the truth.",
          draw: [["write", "a3", [120, 540], "don't fall for it → abide in the truth", { size: 56, color: "blue" }]] },
        { say: "Don't run ahead and leave the teaching of Christ behind. Let's abide in the commandment we've had from the beginning.",
          draw: [["write", "a4", [120, 670], "abide in the command from the beginning", { size: 52, color: "blue" }],
                 ["box", "a4", "blue"]] }
      ]
    },
    {
      id: "door", title: "Don't Even Open the Door",
      beats: [
        { say: "The letter's addressed to a certain lady. She was probably someone who opened up her home and held church there.",
          draw: [["clear"],
                 ["title", "t", "What 2 John says"],
                 ["write", "b1", [120, 290], "To: a lady", { size: 60 }],
                 ["write", "b2", { after: "b1", gap: 40 }, "(church in her home?)", { size: 46, color: "gray" }]] },
        { say: "Anyone who denies that Jesus came in the flesh is a heretic. And you know what? It's the same today.",
          draw: [["write", "b3", [120, 410], "denies He came in flesh = heretic", { size: 56, color: "red" }],
                 ["write", "b4", { after: "b3", gap: 40 }, "today too", { size: 48, color: "gray" }]] },
        { say: "And if heretics come to your house, he says, don't even open the door. Because once you open that door, you're already halfway won over.",
          draw: [["write", "b5", [120, 550], "don't open the door", { size: 64, color: "red" }],
                 ["circle", "b5", "red"],
                 ["write", "b6", { after: "b5", gap: 70 }, "open = half lost", { size: 52 }]] },
        { say: "So here's rule number one for dealing with heresy. Don't engage. You think you'll evangelize them? It won't work. They read the Bible from a whole different angle, so you can't even have a real conversation.",
          draw: [["write", "b7", [120, 690], "Rule 1 = don't engage", { color: "blue" }],
                 ["box", "b7", "blue"],
                 ["write", "b8", [160, 800], "evangelize them? → different lens, no real talk", { size: 46, color: "gray" }]] },
        { say: "And then he wraps up the letter by telling them he's planning to come and visit.",
          draw: [["write", "b9", [1200, 690], "end: plans to visit", { size: 46, color: "green" }]] }
      ]
    }
  ]
};
