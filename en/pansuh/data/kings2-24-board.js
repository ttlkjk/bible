// 2 Kings 24~25 whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does. (This chapter has no slide photos.)
window.BOARD = {
  scenes: [
    {
      id: "author", title: "Did Jeremiah Write 2 Kings?",
      beats: [
        { say: "Now, Second Kings chapters 24 and 25? They're the same as Jeremiah chapter 52. So the author is very likely the same person.",
          draw: [["title", "t", "Did Jeremiah write 2 Kings?"],
                 ["write", "a1", { at: [430, 330] }, "2 Kgs 24~25", { anchor: "middle", size: 72, color: "blue" }],
                 ["write", "a2", { at: [1170, 330] }, "Jer 52", { anchor: "middle", size: 72, color: "blue" }],
                 ["write", "a3", { at: [800, 330] }, "=", { anchor: "middle", size: 84, color: "red" }]] },
        { say: "Why do I say that? Because Jeremiah's name never shows up in Second Kings. If someone else had written it, they couldn't have left Jeremiah out. But he's just not there.",
          draw: [["write", "a4", [120, 480], "No Jeremiah in 2 Kings!", { color: "red" }],
                 ["under", "a4"]] },
        { say: "Maybe Jeremiah had already written plenty about himself in the book of Jeremiah. So he left himself out of the history book.",
          draw: [["write", "a5", [120, 610], "his own story → in Jeremiah", { size: 56 }],
                 ["write", "a6", { after: "a5", gap: 40 }, "→ left out here", { size: 56, color: "blue" }]] },
        { say: "And think about it. Back then, who else but Jeremiah could've written this history with such remarkable insight?",
          draw: [["write", "a7", [120, 760], "Only Jeremiah had that insight", { size: 60, color: "green" }],
                 ["box", "a7", "green"]] }
      ]
    },
    {
      id: "deaf", title: "The Road to Ruin",
      beats: [
        { say: "Here's the thing. Ignorance, stubbornness, misunderstanding, and prejudice. That's the road to ruin.",
          draw: [["clear"],
                 ["title", "t", "The road to ruin"],
                 ["write", "b1", { at: [800, 340] }, "ignorance · stubbornness · misunderstanding · prejudice", { anchor: "middle", size: 52, color: "red" }],
                 ["circle", "b1"]] },
        { say: "If you've got ignorance, stubbornness, misunderstanding, and prejudice like Zedekiah, you can't hear the truth, even when someone's telling it to you plainly.",
          draw: [["write", "b2", [120, 500], "Zedekiah", { color: "blue" }],
                 ["write", "b3", { after: "b2", gap: 110 }, "can't hear the truth"],
                 ["arrow", "b2", "b3"]] },
        { say: "And that's what happened. Because of the people's ignorance, stubbornness, misunderstanding, and prejudice, Jeremiah's words never got through to their ears.",
          draw: [["write", "b4", [120, 630], "Jeremiah's words never got through", { size: 60 }],
                 ["under", "b4", "gray"]] },
        { say: "The terrible result of that? Lamentations shows it to us. So, shall we go on to Lamentations?",
          draw: [["write", "b5", [120, 780], "the terrible result", { size: 60 }],
                 ["write", "b6", { after: "b5", gap: 110 }, "Lamentations", { size: 72, color: "red" }],
                 ["arrow", "b5", "b6"]] }
      ]
    }
  ]
};
