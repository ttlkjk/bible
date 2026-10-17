// Proverbs whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does.
window.BOARD = {
  scenes: [
    {
      id: "mashal", title: "Solomon's Sayings",
      beats: [
        { say: "Solomon wrote Proverbs when his wisdom and understanding were at their very best.",
          draw: [["title", "t", "Solomon's sayings"],
                 ["write", "a1", [120, 300], "at the peak of his wisdom", { size: 64 }]] },
        { say: "In Hebrew, Proverbs is called Mashal. You can think of it as Solomon's sayings.",
          draw: [["write", "a2", [120, 430], "Proverbs = Mashal", { size: 80, color: "red" }],
                 ["write", "a3", { after: "a2", gap: 40 }, "Solomon's sayings", { size: 56, color: "blue" }]] },
        { say: "They are short sayings, mostly written in parallel lines.",
          draw: [["write", "a4", [120, 570], "short sayings · parallel lines", { size: 60 }],
                 ["under", "a4"]] },
        { say: "Here is the purpose and the editing of Proverbs at a glance. Let's look at them one by one.",
          draw: [["photo", "p1", "../../pansuh/img/p3/image21.jpg", [1000, 470, 520, 293], { tilt: 2 }]] }
      ]
    },
    {
      id: "edit", title: "How Proverbs Was Edited",
      beats: [
        { say: "Solomon wrote some three thousand proverbs, but not all of them made it into the Bible.",
          draw: [["clear"],
                 ["title", "t", "How Proverbs was edited"],
                 ["write", "b1", [120, 300], "Solomon: about 3000 proverbs", { size: 64 }]] },
        { say: "The Proverbs we have today were edited and selected by the men of Hezekiah. It was edited in a first round and a second round, so some parts are repeated.",
          draw: [["write", "b2", [120, 430], "Hezekiah's men edited · selected", { size: 60, color: "blue" }],
                 ["write", "b3", [180, 520], "1st, 2nd editing → some repeats (Prov 25:1)", { size: 44, color: "gray" }]] },
        { say: "Solomon had so many wives that he could not teach each of his children himself.",
          draw: [["write", "b4", [120, 650], "too many wives", { size: 60 }],
                 ["write", "b5", { after: "b4", gap: 110 }, "women teach children", { size: 60, color: "red" }],
                 ["arrow", "b4", "b5"]] },
        { say: "So it seems he wrote these proverbs so that the women could teach the children. At the very end, there is a proverb about a woman.",
          draw: [["write", "b6", [180, 760], "ends with a proverb about a woman", { size: 48, color: "gray" }]] }
      ]
    },
    {
      id: "purpose", title: "Why Proverbs Was Written",
      beats: [
        { say: "Chapter 1, verses 1 to 6, state the purpose. To know wisdom and instruction, to discern the words of understanding,",
          draw: [["clear"],
                 ["title", "t", "Why Proverbs was written"],
                 ["write", "c1", [120, 280], "① know wisdom and instruction", { size: 56 }],
                 ["write", "c2", [120, 370], "② discern words of understanding", { size: 56 }]] },
        { say: "to receive instruction in dealing wisely, in righteousness, justice, and equity,",
          draw: [["write", "c3", [120, 460], "③ wisely · righteously · justly · fairly", { size: 56 }]] },
        { say: "to give prudence to the simple, and knowledge and discretion to the young man. The wise will increase in learning, and the man of understanding will attain to sound counsel.",
          draw: [["write", "c4", [120, 550], "④ make the simple prudent", { size: 56 }],
                 ["write", "c5", [120, 640], "⑤ knowledge, discretion for youth", { size: 56 }],
                 ["write", "c6", [120, 730], "⑥ gain learning, counsel", { size: 56 }]] },
        { say: "And one more thing. God hears our prayers when we hear his law. One who turns away his ear from hearing the law, even his prayer is an abomination.",
          draw: [["write", "c7", { at: [1300, 560] }, "hear the law", { anchor: "middle", size: 64, color: "blue" }],
                 ["write", "c8", { at: [1300, 680] }, "God hears prayer", { anchor: "middle", size: 64, color: "red" }],
                 ["arrow", "c7", "c8"],
                 ["write", "c9", { at: [1300, 780] }, "Prov 28:9", { anchor: "middle", size: 44, color: "gray" }]] }
      ]
    }
  ]
};
