// 2 Peter whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does.
window.BOARD = {
  scenes: [
    {
      id: "intro", title: "Believe and You're Done?",
      beats: [
        { say: "Alright, now we come to Second Peter.",
          draw: [["title", "t", "2 Peter"],
                 ["photo", "p1", "../../pansuh/img/p4/image85.jpg", [1120, 180, 400, 225], { tilt: 2 }]] },
        { say: "So what stands out in Second Peter? The stages of growth. Sanctification. Maturity.",
          draw: [["write", "a1", [120, 300], "growth · sanctification · maturity", { size: 56, color: "blue" }],
                 ["under", "a1", "blue"]] },
        { say: "See, we're saved by faith, right? So people think, once I believe, I've hit the jackpot, and that's the end of it.",
          draw: [["write", "a2", [120, 500], "believe = done?", { size: 64, color: "gray" }],
                 ["strike", "a2"]] },
        { say: "But it isn't. There's still a lot to do after that.",
          draw: [["write", "a3", { after: "a2", gap: 110 }, "much to do after", { color: "red" }],
                 ["arrow", "a2", "a3"],
                 ["circle", "a3"]] }
      ]
    },
    {
      id: "steps", title: "Eight Steps",
      beats: [
        { say: "Let's go through the stages one by one. Faith starts with trusting God personally. Virtue means working hard to build up what's good.",
          draw: [["clear"],
                 ["title", "t", "8 stages of growth"],
                 ["photo", "p2", "../../pansuh/img/p4/image86.jpg", [1150, 40, 400, 225], { tilt: -2 }],
                 ["write", "b1", [120, 300], "① faith: personal trust", { size: 48 }],
                 ["write", "b2", [120, 390], "② virtue: build up good", { size: 48 }]] },
        { say: "Knowledge is growing in the knowledge of God. Self-control is being temperate in all things.",
          draw: [["write", "b3", [120, 480], "③ knowledge: grow in it", { size: 48 }],
                 ["write", "b4", [120, 570], "④ self-control: in all", { size: 48 }]] },
        { say: "Patience means letting patience have its perfect work. Godliness is our relationship with God. That's the vertical one, running up and down.",
          draw: [["write", "b5", [120, 660], "⑤ patience: make it whole", { size: 48 }],
                 ["write", "b6", [800, 480], "⑥ godliness: God · vertical", { size: 48, color: "blue" }]] },
        { say: "Brotherly kindness is our relationship with our brothers and sisters. That's the horizontal one, running side to side.",
          draw: [["write", "b7", [800, 570], "⑦ brotherly kindness: horizontal", { size: 44, color: "blue" }]] },
        { say: "And the last one? Love. It all comes to completion in love, the greatest commandment.",
          draw: [["write", "b8", [800, 700], "⑧ love: completion", { size: 64, color: "red" }],
                 ["box", "b8"]] }
      ]
    },
    {
      id: "judgment", title: "False Prophets and the Day of Judgment",
      beats: [
        { say: "Then in chapter 2, he says, don't follow the teaching of false prophets. They deny the Lord, and they bring swift destruction on themselves.",
          draw: [["clear"],
                 ["title", "t", "Chapters 2 · 3"],
                 ["write", "c1", [120, 290], "ch. 2: don't follow false prophets", { size: 56, color: "blue" }]] },
        { say: "Then he talks about the ones God has already judged. The angels who sinned. The wicked old world of Noah's day. And Sodom and Gomorrah.",
          draw: [["write", "c2", [160, 380], "sinning angels · old world · Sodom & Gomorrah", { size: 46, color: "gray" }]] },
        { say: "Chapter 3 is about the day of God, the day of judgment. In the last days, he says, scoffers will come and mock God. They'll say, where is the promise of his coming? Everything's just going on the way it has since creation. That's the kind of nonsense they talk.",
          draw: [["write", "c3", [120, 520], "ch. 3: Judgment Day", { color: "blue" }],
                 ["write", "c4", { after: "c3", gap: 50 }, "\"Where is the promise?\"", { size: 50, color: "gray" }]] },
        { say: "So here's what verse 9 says. The Lord is not slow concerning his promise, but he is patient, not wishing that any should perish, but that all should come to repentance.",
          draw: [["write", "c5", [120, 660], "slow", { color: "gray" }],
                 ["strike", "c5", "gray"],
                 ["write", "c6", { after: "c5", gap: 110 }, "patient", { color: "red" }],
                 ["arrow", "c5", "c6"],
                 ["circle", "c6"]] },
        { say: "So why does the day of judgment seem to come slower than we expect? Because he wants even one more person to repent and come back.",
          draw: [["write", "c7", [160, 790], "so one more can repent", { size: 56, color: "green" }]] }
      ]
    },
    {
      id: "grow", title: "Keep Growing",
      beats: [
        { say: "And at the very end of his letter, Peter says, grow in the knowledge of Christ.",
          draw: [["clear"],
                 ["title", "t", "End of the letter"],
                 ["write", "d1", { at: [800, 400] }, "Grow in the knowledge of Christ", { anchor: "middle", size: 64, color: "red" }],
                 ["under", "d1"]] },
        { say: "Don't just stop at knowing Christ.",
          draw: [["write", "d2", { at: [500, 600] }, "knowing", { anchor: "middle", color: "gray" }]] },
        { say: "He wants us to keep on growing.",
          draw: [["write", "d3", { at: [1100, 600] }, "growing", { anchor: "middle", color: "green" }],
                 ["arrow", "d2", "d3"],
                 ["box", "d3", "green"]] },
        { say: "Just like Peter himself did.",
          draw: [["write", "d4", { at: [800, 760] }, "like Peter himself", { anchor: "middle", size: 52, color: "gray" }]] }
      ]
    }
  ]
};
