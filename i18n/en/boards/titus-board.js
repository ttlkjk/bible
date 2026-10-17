// Titus whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does.
window.BOARD = {
  scenes: [
    {
      id: "elder", title: "Appoint Elders",
      beats: [
        { say: "Okay, Titus chapter 1, verse 5. Here Paul tells us why he left Titus behind in Crete.",
          draw: [["title", "t", "Titus · Appoint elders"],
                 ["photo", "p1", "img/p4/image81.jpg", [1268, 46, 260, 146], { tilt: 3 }],
                 ["write", "a1", [120, 300], "why he was left in Crete"],
                 ["write", "a2", [180, 375], "Titus 1:5", { size: 44, color: "gray" }]] },
        { say: "It was to set in order the things that were still lacking, and to appoint elders in every city.",
          draw: [["write", "a3", [120, 500], "appoint elders in every city", { color: "red" }],
                 ["under", "a3"]] },
        { say: "Now, if you look at his status, his position, he's an elder. If you look at the work he does, he's an overseer.",
          draw: [["write", "a4", { at: [440, 640] }, "elder = status · position", { anchor: "middle", size: 56, color: "blue" }],
                 ["write", "a5", { at: [1180, 640] }, "overseer = the work", { anchor: "middle", size: 56, color: "blue" }]] },
        { say: "But the Methodists and the Presbyterians use these two words separately. That's kind of strange too, isn't it?",
          draw: [["write", "a6", [120, 780], "Methodists · Presbyterians split them", { size: 56 }],
                 ["write", "a7", { after: "a6", gap: 40 }, "strange", { size: 56, color: "red" }],
                 ["circle", "a7"]] }
      ]
    },
    {
      id: "qualify", title: "Qualifications of an Overseer",
      beats: [
        { say: "So, let's look at the qualifications. He has to be blameless, the husband of one wife, with children who believe.",
          draw: [["clear"],
                 ["title", "t", "Overseer qualifications (Titus 1:6~9)"],
                 ["write", "b1", [120, 290], "blameless · husband of one wife · believing children", { size: 52 }]] },
        { say: "An overseer is God's steward. So he can't be self-willed, or quick to anger. Not given to wine, not violent, not greedy of filthy lucre.",
          draw: [["write", "b2", [120, 410], "Don't", { size: 56, color: "red" }],
                 ["write", "b3", [120, 490], "self-willed · quick temper · wine · violence · dirty gain", { size: 48 }],
                 ["strike", "b3"]] },
        { say: "But he does need to be hospitable, a lover of good, sober-minded, just, holy, and self-controlled.",
          draw: [["write", "b4", [120, 610], "Do", { size: 56, color: "green" }],
                 ["write", "b5", [120, 690], "hospitable · loves good · sober · just · holy · self-controlled", { size: 46 }]] },
        { say: "He has to hold fast the faithful word, just as he was taught. Then he can encourage people with sound teaching, and correct the ones who oppose it.",
          draw: [["write", "b6", [120, 810], "exhort with sound teaching · rebuke opponents", { size: 52, color: "blue" }],
                 ["box", "b6"]] }
      ]
    },
    {
      id: "teach", title: "What Fits Sound Teaching",
      beats: [
        { say: "Now chapter 2. But speak thou the things which become sound doctrine.",
          draw: [["clear"],
                 ["title", "t", "Ch. 2 · Fits sound teaching"],
                 ["write", "c0", [120, 290], "speak what fits sound teaching", { color: "blue" }]] },
        { say: "Older men should be temperate, reverent, and sober-minded. Sound in faith, in love, and in patience.",
          draw: [["write", "c1", [120, 410], "older men", { size: 56 }],
                 ["write", "c2", { after: "c1", gap: 40 }, "temperate · reverent · sober · faith, love, patience", { size: 48, color: "gray" }]] },
        { say: "Older women should be holy in how they live. Not slanderers, not slaves to much wine. And they should teach the young women.",
          draw: [["write", "c3", [120, 510], "older women", { size: 56 }],
                 ["write", "c4", { after: "c3", gap: 40 }, "holy · slander X · slave to wine X · teach young women", { size: 46, color: "gray" }]] },
        { say: "Young men, urge them to be sober-minded. And you, in all things, be an example of good works yourself.",
          draw: [["write", "c5", [120, 610], "young men", { size: 56 }],
                 ["write", "c6", { after: "c5", gap: 40 }, "sober · you be the example of good works", { size: 52, color: "gray" }]] },
        { say: "Servants should obey their masters in everything. They shouldn't steal from them, and they should show real, good faithfulness.",
          draw: [["write", "c7", [120, 710], "servants", { size: 56 }],
                 ["write", "c8", { after: "c7", gap: 40 }, "obey · don't pilfer · good faithfulness", { size: 52, color: "gray" }]] },
        { say: "Why? So that they adorn the teaching of God in all things. Think about it. When Christ's people do good, God's teaching shines.",
          draw: [["write", "c9", [120, 830], "good works → God's teaching shines", { size: 60, color: "red" }],
                 ["under", "c9"]] }
      ]
    },
    {
      id: "prepare", title: "Prepare Well Ahead",
      beats: [
        { say: "Then in chapter 3, he says, reject foolish myths and genealogies. And someone caught up in heresy? Warn him once or twice, and then stay away.",
          draw: [["clear"],
                 ["title", "t", "Ch. 3 · Prepare well ahead"],
                 ["write", "d1", [120, 290], "foolish myths · genealogies"],
                 ["strike", "d1"],
                 ["write", "d2", [120, 380], "heretic: warn once or twice, then avoid", { size: 52, color: "gray" }]] },
        { say: "And he says, I'll send Artemas or Tychicus to you, so hurry and come to me at Nicopolis.",
          draw: [["write", "d3", [120, 480], "hurry to Nicopolis", { size: 56 }],
                 ["write", "d4", { after: "d3", gap: 30 }, "Titus 3:12", { size: 44, color: "gray" }]] },
        { say: "Here we meet Zenas the lawyer. Now, the word lawyer, in this sense, shows up only once in the whole New Testament. It means someone who makes church law.",
          draw: [["write", "d5", [120, 590], "lawyer", { color: "blue" }],
                 ["write", "d6", { after: "d5", gap: 40 }, "= maker of church law"],
                 ["write", "d7", [180, 655], "only once in the NT", { size: 44, color: "gray" }]] },
        { say: "Paul's urging them to send people out well ahead of time, and to learn to devote themselves to the good work of getting things ready.",
          draw: [["write", "d8", [120, 770], "send ahead, prepare", { color: "red" }]] },
        { say: "Here's the thing. If you prepare long and prepare well, even a short ministry bears fruit.",
          draw: [["write", "d9", { after: "d8", gap: 110 }, "short, yet fruitful", { color: "green" }],
                 ["arrow", "d8", "d9"],
                 ["circle", "d9"]] }
      ]
    },
    {
      id: "titus", title: "Titus, an Outstanding Man",
      beats: [
        { say: "And then the final greeting. All that are with me salute thee. Grace be with you all.",
          draw: [["clear"],
                 ["title", "t", "Titus, an outstanding man"],
                 ["write", "e1", [120, 290], "greetings · grace be with you all", { size: 52, color: "gray" }]] },
        { say: "You know, Titus was a truly outstanding man.",
          draw: [["write", "e2", [120, 410], "Titus = outstanding", { color: "red" }],
                 ["circle", "e2"]] },
        { say: "He's the one who sorted out the problems in the Corinthian church.",
          draw: [["write", "e3", [120, 540], "solved Corinth's problems"]] },
        { say: "And Paul left him in Crete, a place full of evil, lazy people. He was the kind of person who went to the hard places and did the work well.",
          draw: [["write", "e4", [120, 650], "left in evil, lazy Crete"],
                 ["write", "e5", [120, 770], "does well in hard places", { color: "green" }],
                 ["under", "e5"]] },
        { say: "Alright, now let's move on to Second Timothy.",
          draw: [["write", "e6", [1150, 830], "on to 2 Timothy →", { size: 52, color: "gray" }]] }
      ]
    }
  ]
};
