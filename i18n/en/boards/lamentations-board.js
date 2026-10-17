// Lamentations whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does.
window.BOARD = {
  scenes: [
    {
      id: "song", title: "How Lonely Sits the City",
      beats: [
        { say: "Now, Lamentations. It's a song of deep, deep sorrow. Chapter 1, verse 1. How doth the city sit solitary!",
          draw: [["title", "t", "Lamentations"],
                 ["write", "a1", [120, 300], "\"How lonely the city!\"", { size: 76, color: "red" }],
                 ["write", "a2", { after: "a1", gap: 40 }, "Lam 1:1", { size: 48, color: "gray" }]] },
        { say: "There are all kinds of laments in the Bible. The Song of the Bow is one of them. But never in human history, before or since, has there been a lament as sorrowful as this one.",
          draw: [["write", "a3", [120, 430], "Song of the Bow · laments", { size: 50, color: "gray" }],
                 ["write", "a4", { after: "a3", gap: 50 }, "none like this", { color: "red" }],
                 ["under", "a4"]] },
        { say: "Jeremiah said goodbye to those people in Egypt and came back. And one last time, he walks the streets of Jerusalem. The city where, for forty years, he preached the word and prayed with tears of blood.",
          draw: [["write", "a5", [120, 570], "last walk: streets of 40 yrs of tearful prayer", { size: 50, color: "blue" }]] },
        { say: "And what he saw spread out in front of him? It was truly horrifying.",
          draw: [["write", "a6", [120, 720], "a horrifying panorama", { size: 76 }],
                 ["box", "a6", "red"]] }
      ]
    },
    {
      id: "panorama", title: "A Horrifying Panorama",
      beats: [
        { say: "Jerusalem had fallen. Solomon's holy temple had burned and collapsed.",
          draw: [["clear"],
                 ["title", "t", "Before Jeremiah's eyes"],
                 ["photo", "p1", "img/p2/image37.jpg", [1130, 160, 400, 225], { tilt: 2, caption: "Jeremiah's sad song" }],
                 ["write", "b1", [120, 290], "temple burned down", { color: "red" }]] },
        { say: "The royal family and the nobles were killed or taken captive. And so were the little children who used to play in the streets.",
          draw: [["write", "b2", [120, 400], "royals · nobles · even children", { size: 60 }]] },
        { say: "In every house there were bodies no one could carry out. The stench was so bad you couldn't lift your eyes, or even breathe. Mothers were taking the very children they'd raised with their own hands, and eating their flesh.",
          draw: [["write", "b3", [120, 520], "stench of corpses · children's flesh", { size: 56, color: "red" }],
                 ["under", "b3"]] },
        { say: "Skin that was once ruddy as coral had dried up like a stick from hunger and turned black. No one recognized them in the street. Even on feast days, nobody came or went.",
          draw: [["write", "b4", [120, 640], "faces unrecognizable · empty on feast days", { size: 50 }]] },
        { say: "Little children asked for bread, but no one broke it for them. They cried until their eyes gave out, and there was no one to comfort them. Every treasure was plundered. And even the joy, the faith, the hope, and the love in people's hearts? All of it was completely destroyed.",
          draw: [["write", "b5", [120, 760], "no one to comfort", { color: "blue" }],
                 ["write", "b6", { after: "b5", gap: 50 }, "joy · faith · hope · love gone", { size: 48, color: "red" }],
                 ["box", "b5", "blue"]] }
      ]
    }
  ]
};
