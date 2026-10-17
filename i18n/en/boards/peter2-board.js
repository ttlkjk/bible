// 2 Peter whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does.
window.BOARD = {
  scenes: [
    {
      id: "intro", title: "Believe and You're Done?",
      beats: [
        { say: "Now we come to Second Peter.",
          draw: [["title", "t", "2 Peter"],
                 ["photo", "p1", "img/p4/image85.jpg", [1120, 180, 400, 225], { tilt: 2 }]] },
        { say: "What stands out in Second Peter is the stages of growth, sanctification, and maturity.",
          draw: [["write", "a1", [120, 300], "growth · sanctification · maturity", { size: 56, color: "blue" }],
                 ["under", "a1", "blue"]] },
        { say: "Because we're saved by faith, people think that once they believe, they've hit the jackpot and that's the end of it.",
          draw: [["write", "a2", [120, 500], "believe = done?", { size: 64, color: "gray" }],
                 ["strike", "a2"]] },
        { say: "But there is still a lot to do after that.",
          draw: [["write", "a3", { after: "a2", gap: 110 }, "much to do after", { color: "red" }],
                 ["arrow", "a2", "a3"],
                 ["circle", "a3"]] }
      ]
    },
    {
      id: "steps", title: "Eight Steps",
      beats: [
        { say: "Let's look at the stages one by one. Faith begins with a personal trust in God. Virtue means working hard to build up what is good.",
          draw: [["clear"],
                 ["title", "t", "8 stages of growth"],
                 ["photo", "p2", "img/p4/image86.jpg", [1150, 40, 400, 225], { tilt: -2 }],
                 ["write", "b1", [120, 300], "① faith: personal trust", { size: 48 }],
                 ["write", "b2", [120, 390], "② virtue: build up good", { size: 48 }]] },
        { say: "Knowledge is growing in the knowledge of God. Self-control is being temperate in all things.",
          draw: [["write", "b3", [120, 480], "③ knowledge: grow in it", { size: 48 }],
                 ["write", "b4", [120, 570], "④ self-control: in all", { size: 48 }]] },
        { say: "Patience means letting patience have its perfect work. Godliness is our relationship with God, the vertical relationship that runs up and down.",
          draw: [["write", "b5", [120, 660], "⑤ patience: make it whole", { size: 48 }],
                 ["write", "b6", [800, 480], "⑥ godliness: God · vertical", { size: 48, color: "blue" }]] },
        { say: "Brotherly kindness is our relationship with our brothers and sisters, the horizontal relationship that runs side to side.",
          draw: [["write", "b7", [800, 570], "⑦ brotherly kindness: horizontal", { size: 44, color: "blue" }]] },
        { say: "And the last one is love. It is completed with love, the greatest commandment.",
          draw: [["write", "b8", [800, 700], "⑧ love: completion", { size: 64, color: "red" }],
                 ["box", "b8"]] }
      ]
    },
    {
      id: "judgment", title: "False Prophets and the Day of Judgment",
      beats: [
        { say: "From chapter 2, he says not to follow the teaching of false prophets. They deny the Lord and bring swift destruction on themselves.",
          draw: [["clear"],
                 ["title", "t", "Chapters 2 · 3"],
                 ["write", "c1", [120, 290], "ch. 2: don't follow false prophets", { size: 56, color: "blue" }]] },
        { say: "Then he talks about those God has already judged: the angels who sinned, the wicked old world of Noah's day, and Sodom and Gomorrah.",
          draw: [["write", "c2", [160, 380], "sinning angels · old world · Sodom & Gomorrah", { size: 46, color: "gray" }]] },
        { say: "Chapter 3 talks about the day of God, the day of judgment. In the last days, scoffers will come who mock God. They say, where is the promise of his coming? All things continue as they were from the beginning of creation. That's the nonsense they talk.",
          draw: [["write", "c3", [120, 520], "ch. 3: Judgment Day", { color: "blue" }],
                 ["write", "c4", { after: "c3", gap: 50 }, "\"Where is the promise?\"", { size: 50, color: "gray" }]] },
        { say: "So verse 9 says this. The Lord is not slow concerning his promise, but he is patient, not wishing that any should perish, but that all should come to repentance.",
          draw: [["write", "c5", [120, 660], "slow", { color: "gray" }],
                 ["strike", "c5", "gray"],
                 ["write", "c6", { after: "c5", gap: 110 }, "patient", { color: "red" }],
                 ["arrow", "c5", "c6"],
                 ["circle", "c6"]] },
        { say: "The reason the day of judgment seems to come more slowly than we expect is that he wants even one more person to repent and come back.",
          draw: [["write", "c7", [160, 790], "so one more can repent", { size: 56, color: "green" }]] }
      ]
    },
    {
      id: "grow", title: "Keep Growing",
      beats: [
        { say: "At the end of his letter, Peter says, grow in the knowledge of Christ.",
          draw: [["clear"],
                 ["title", "t", "End of the letter"],
                 ["write", "d1", { at: [800, 400] }, "Grow in the knowledge of Christ", { anchor: "middle", size: 64, color: "red" }],
                 ["under", "d1"]] },
        { say: "Don't stop at just knowing Christ.",
          draw: [["write", "d2", { at: [500, 600] }, "knowing", { anchor: "middle", color: "gray" }]] },
        { say: "He wants us to keep growing.",
          draw: [["write", "d3", { at: [1100, 600] }, "growing", { anchor: "middle", color: "green" }],
                 ["arrow", "d2", "d3"],
                 ["box", "d3", "green"]] },
        { say: "Just as Peter himself did.",
          draw: [["write", "d4", { at: [800, 760] }, "like Peter himself", { anchor: "middle", size: 52, color: "gray" }]] }
      ]
    }
  ]
};
