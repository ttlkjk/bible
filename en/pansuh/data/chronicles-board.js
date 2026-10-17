// 1 & 2 Chronicles whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does. (This chapter has no slide photos.)
window.BOARD = {
  scenes: [
    {
      id: "purpose", title: "A History with a Purpose",
      beats: [
        { say: "Chronicles covers history from Adam all the way to the decree of Cyrus.",
          draw: [["title", "t", "Chronicles = history with a purpose"],
                 ["write", "a1", [160, 300], "Adam"],
                 ["write", "a2", { after: "a1", gap: 160 }, "Cyrus' decree", { color: "blue" }],
                 ["arrow", "a1", "a2"]] },
        { say: "Kings simply records the history that runs on from Joshua, Judges, Ruth, and Samuel. But Chronicles goes all the way back to Adam. That means the writer dug down to the very roots, and he had a clear purpose.",
          draw: [["write", "a3", [160, 420], "back to the roots = clear purpose", { size: 56, color: "red" }],
                 ["under", "a3"]] },
        { say: "After seventy years in the Babylonian Exile, they came back, and the country was a mess. They were trying to start over in a place that had become a completely ruined wasteland.",
          draw: [["write", "a4", [160, 550], "back after 70 yrs", { size: 60 }],
                 ["write", "a5", { after: "a4", gap: 110 }, "fresh start in ruins", { size: 60 }],
                 ["arrow", "a4", "a5"]] },
        { say: "This time they had learned a few things in Babylon, and they wanted to do it right. So they looked back over their past history and thought hard about what kind of nation should be their model.",
          draw: [["write", "a6", [160, 680], "Which nation is the model?", { size: 64, color: "blue" }],
                 ["box", "a6", "blue"]] },
        { say: "The one who wrote Chronicles was probably Ezra.",
          draw: [["write", "a7", [160, 810], "Author: probably Ezra", { size: 52, color: "gray" }]] }
      ]
    },
    {
      id: "skip", title: "Fast-Forward and Slow Motion",
      beats: [
        { say: "Adam, Seth, Enosh, Kenan, Mahalalel. The early history zips by with little more than a list of names. It's like when we watch YouTube and fast-forward through the ads at the start, right?",
          draw: [["clear"],
                 ["title", "t", "How Chronicles is edited"],
                 ["write", "b1", [120, 290], "Adam · Seth · Enosh ...", { size: 60, color: "gray" }],
                 ["write", "b2", { after: "b1", gap: 60 }, "▶▶ fast-forward", { size: 60 }]] },
        { say: "Then David and Solomon come along, and it's, wait, wait, slow it down right there. The writer settles in and records everything in detail.",
          draw: [["write", "b3", [120, 410], "David · Solomon", { color: "blue" }],
                 ["write", "b4", { after: "b3", gap: 60 }, "slow, in detail", { color: "green" }],
                 ["under", "b4", "green"]] },
        { say: "But did David and Solomon have sins and faults, or not? They did. The writer didn't like that, so he leaves out the Bathsheba affair, and he leaves out Solomon's fall too.",
          draw: [["write", "b5", [120, 530], "Bathsheba · Solomon's fall", { size: 60 }],
                 ["strike", "b5", "red"],
                 ["write", "b6", { after: "b5", gap: 50 }, "→ left out", { size: 60, color: "red" }]] },
        { say: "Normally history should be written straight, like Kings, with nothing added or taken away. But Chronicles is not a pure history book. It is a history with a purpose: to build the nation on the model of its very best era.",
          draw: [["write", "b7", [120, 650], "Kings = straight record", { size: 56, color: "gray" }],
                 ["write", "b8", { after: "b7", gap: 60 }, "Chr = founding vision", { size: 60, color: "red" }],
                 ["box", "b8", "red"]] },
        { say: "So the parts with nothing worth copying are just lists of names, and the parts worth copying are covered in detail, down to the rituals, the institutions, the ceremonies, and the economy. It even records Manasseh, who in Kings was the worst villain under heaven, as repenting and being forgiven to some degree. The feeling is, even now, late as it is, let's return to God.",
          draw: [["write", "b9", [120, 790], "even Manasseh repents → \"late, but let's return\"", { size: 52, color: "blue" }]] }
      ]
    },
    {
      id: "cyrus", title: "The Decree of Cyrus",
      beats: [
        { say: "Second Chronicles chapter 36, verses 22 and 23: the decree of Cyrus. To fulfill the word of the LORD spoken by the mouth of Jeremiah, the LORD stirred up the spirit of Cyrus.",
          draw: [["clear"],
                 ["title", "t", "Cyrus' decree (2 Chr 36:22~23)"],
                 ["write", "c1", [120, 290], "Cyrus' decree · 538 B.C.", { size: 72, color: "red" }],
                 ["circle", "c1"]] },
        { say: "Build him a house at Jerusalem, which is in Judah. Whoever there is among you of all his people, let him go up.",
          draw: [["write", "c2", [120, 420], "\"Build him a house · let him go up\"", { size: 56 }]] },
        { say: "Open the beginning of Ezra and lay it on top of this. It matches word for word, right? So that the history carries straight on.",
          draw: [["write", "c3", { at: [430, 560] }, "end of 2 Chr", { anchor: "middle", size: 64, color: "blue" }],
                 ["write", "c4", { at: [1170, 560] }, "start of Ezra", { anchor: "middle", size: 64, color: "blue" }],
                 ["write", "c5", { at: [800, 560] }, "=", { anchor: "middle", size: 84, color: "red" }]] },
        { say: "Really, the history would connect properly if it ran on from Kings. But the writer of Chronicles deliberately wrote it so that it leads into Ezra. So Chronicles was written at least after the decree of Cyrus.",
          draw: [["write", "c6", [120, 690], "deliberately leads into Ezra", { color: "red" }],
                 ["write", "c7", { after: "c6", gap: 40 }, "(written after decree)", { size: 46, color: "gray" }],
                 ["under", "c6"]] },
        { say: "Chronicles has many sources that are not recorded in Kings. When you read Kings, if you also read the cross-referenced passages in Chronicles, it helps a lot in understanding the situation at the time.",
          draw: [["write", "c8", [120, 810], "read Kings + Chronicles together", { color: "green" }],
                 ["box", "c8", "green"]] }
      ]
    }
  ]
};
