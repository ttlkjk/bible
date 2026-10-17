// 1 & 2 Chronicles whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does. (This chapter has no slide photos.)
window.BOARD = {
  scenes: [
    {
      id: "purpose", title: "A History with a Purpose",
      beats: [
        { say: "Okay, Chronicles. It covers history from Adam, all the way to the decree of Cyrus.",
          draw: [["title", "t", "Chronicles = history with a purpose"],
                 ["write", "a1", [160, 300], "Adam"],
                 ["write", "a2", { after: "a1", gap: 160 }, "Cyrus' decree", { color: "blue" }],
                 ["arrow", "a1", "a2"]] },
        { say: "Kings just picks up where Joshua, Judges, Ruth, and Samuel left off. But Chronicles? It goes all the way back to Adam. That tells you the writer dug right down to the roots. And he had a clear purpose.",
          draw: [["write", "a3", [160, 420], "back to the roots = clear purpose", { size: 56, color: "red" }],
                 ["under", "a3"]] },
        { say: "Think about it. They'd spent seventy years in the Babylonian Exile. Now they're back, and the country's a mess. They're trying to start over in a place that's become a total wasteland.",
          draw: [["write", "a4", [160, 550], "back after 70 yrs", { size: 60 }],
                 ["write", "a5", { after: "a4", gap: 110 }, "fresh start in ruins", { size: 60 }],
                 ["arrow", "a4", "a5"]] },
        { say: "This time they'd learned a few things in Babylon, and they wanted to get it right. So they looked back over their own history and asked, what kind of nation should be our model?",
          draw: [["write", "a6", [160, 680], "Which nation is the model?", { size: 64, color: "blue" }],
                 ["box", "a6", "blue"]] },
        { say: "And who wrote Chronicles? Most likely, Ezra.",
          draw: [["write", "a7", [160, 810], "Author: probably Ezra", { size: 52, color: "gray" }]] }
      ]
    },
    {
      id: "skip", title: "Fast-Forward and Slow Motion",
      beats: [
        { say: "Adam, Seth, Enosh, Kenan, Mahalalel. The early history just zips by, hardly more than a list of names. It's like when you watch YouTube and skip the ads at the start, right?",
          draw: [["clear"],
                 ["title", "t", "How Chronicles is edited"],
                 ["write", "b1", [120, 290], "Adam · Seth · Enosh ...", { size: 60, color: "gray" }],
                 ["write", "b2", { after: "b1", gap: 60 }, "▶▶ fast-forward", { size: 60 }]] },
        { say: "Then David and Solomon show up, and it's, wait, wait, slow down right here. The writer settles in and records everything in detail.",
          draw: [["write", "b3", [120, 410], "David · Solomon", { color: "blue" }],
                 ["write", "b4", { after: "b3", gap: 60 }, "slow, in detail", { color: "green" }],
                 ["under", "b4", "green"]] },
        { say: "But now, did David and Solomon have sins and faults? Sure they did. The writer didn't like that, so he leaves out the Bathsheba affair. And he leaves out Solomon's fall, too.",
          draw: [["write", "b5", [120, 530], "Bathsheba · Solomon's fall", { size: 60 }],
                 ["strike", "b5", "red"],
                 ["write", "b6", { after: "b5", gap: 50 }, "→ left out", { size: 60, color: "red" }]] },
        { say: "Normally, history should be told straight, like Kings, nothing added and nothing taken away. But Chronicles isn't a pure history book. It's history with a purpose. To build the nation on the model of its very best days.",
          draw: [["write", "b7", [120, 650], "Kings = straight record", { size: 56, color: "gray" }],
                 ["write", "b8", { after: "b7", gap: 60 }, "Chr = founding vision", { size: 60, color: "red" }],
                 ["box", "b8", "red"]] },
        { say: "So the parts with nothing worth copying? Just lists of names. The parts worth copying get the full treatment, right down to the rituals, the institutions, the ceremonies, even the economy. It even shows Manasseh, the worst villain under heaven in Kings, repenting and being forgiven, at least to a degree. The feeling is, even now, late as it is, let's go back to God.",
          draw: [["write", "b9", [120, 790], "even Manasseh repents → \"late, but let's return\"", { size: 52, color: "blue" }]] }
      ]
    },
    {
      id: "cyrus", title: "The Decree of Cyrus",
      beats: [
        { say: "Second Chronicles chapter 36, verses 22 and 23. The decree of Cyrus. To fulfill the word of the LORD spoken by the mouth of Jeremiah, the LORD stirred up the spirit of Cyrus.",
          draw: [["clear"],
                 ["title", "t", "Cyrus' decree (2 Chr 36:22~23)"],
                 ["write", "c1", [120, 290], "Cyrus' decree · 538 B.C.", { size: 72, color: "red" }],
                 ["circle", "c1"]] },
        { say: "Build him a house at Jerusalem, which is in Judah. Whoever there is among you of all his people, let him go up.",
          draw: [["write", "c2", [120, 420], "\"Build him a house · let him go up\"", { size: 56 }]] },
        { say: "Now open the start of Ezra and lay it right on top of this. It matches word for word, doesn't it? That's so the history carries straight on.",
          draw: [["write", "c3", { at: [430, 560] }, "end of 2 Chr", { anchor: "middle", size: 64, color: "blue" }],
                 ["write", "c4", { at: [1170, 560] }, "start of Ezra", { anchor: "middle", size: 64, color: "blue" }],
                 ["write", "c5", { at: [800, 560] }, "=", { anchor: "middle", size: 84, color: "red" }]] },
        { say: "Really, the history would connect better if it ran on from Kings. But the writer of Chronicles wrote it on purpose so it leads into Ezra. So Chronicles was written, at the earliest, after the decree of Cyrus.",
          draw: [["write", "c6", [120, 690], "deliberately leads into Ezra", { color: "red" }],
                 ["write", "c7", { after: "c6", gap: 40 }, "(written after decree)", { size: 46, color: "gray" }],
                 ["under", "c6"]] },
        { say: "Chronicles has lots of sources you won't find in Kings. So when you read Kings, read the matching passages in Chronicles too. It really helps you understand what was going on at the time.",
          draw: [["write", "c8", [120, 810], "read Kings + Chronicles together", { color: "green" }],
                 ["box", "c8", "green"]] }
      ]
    }
  ]
};
