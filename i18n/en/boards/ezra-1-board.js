// Ezra 1~4 whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does.
window.BOARD = {
  scenes: [
    {
      id: "exile-exodus", title: "The Exodus from Babylon",
      beats: [
        { say: "So now we come to the book of Ezra. Remember how the record of the escape from Egypt was called Exodus?",
          draw: [["title", "t", "Ezra = Exodus from Babylon"],
                 ["write", "a1", [120, 290], "Exodus:", { size: 56, color: "gray" }],
                 ["write", "a2", { after: "a1", gap: 24 }, "escape from Egypt", { size: 56 }]] },
        { say: "Ezra and Nehemiah tell how, after Babylon fell, the people were set free and came back to Jerusalem. You could call it the Exodus from Babylon.",
          draw: [["write", "a3", [120, 400], "Ezra · Nehemiah:", { size: 56, color: "gray" }],
                 ["write", "a4", { after: "a3", gap: 24 }, "return from Babylon", { size: 56, color: "red" }],
                 ["circle", "a4"]] },
        { say: "In the first year of Cyrus king of Persia, to fulfill what He'd spoken through Jeremiah, the Lord stirred up the spirit of Cyrus.",
          draw: [["write", "b1", [120, 560], "Jeremiah's word", { size: 56 }],
                 ["write", "b2", { after: "b1", gap: 110 }, "Cyrus's heart stirred", { size: 56, color: "blue" }],
                 ["arrow", "b1", "b2"]] },
        { say: "So Cyrus sent a decree through his whole kingdom. Go up to Jerusalem in Judah and build the house of the Lord. That's what we call the Decree of Cyrus.",
          draw: [["write", "b3", [120, 700], "Decree of Cyrus", { size: 72, color: "red" }],
                 ["box", "b3"],
                 ["write", "b4", { after: "b3", gap: 50 }, "\"Build the house in Jerusalem\"", { size: 46 }],
                 ["photo", "p1", "img/p3/image1.jpg", [1150, 170, 380, 214], { tilt: 2, caption: "Structure of Ezra" }]] }
      ]
    },
    {
      id: "same-text", title: "Same as 2 Chronicles",
      beats: [
        { say: "And here's the interesting part. This Decree of Cyrus is exactly the same as 2 Chronicles chapter 36, verse 22 and on.",
          draw: [["clear"],
                 ["title", "t", "Same as 2 Chronicles"],
                 ["write", "c1", [120, 300], "Ezra 1:1~4", { size: 72 }],
                 ["write", "c2", { after: "c1", gap: 40 }, "=", { size: 72, color: "red" }],
                 ["write", "c3", { after: "c2", gap: 40 }, "2 Chr 36:22~23", { size: 72 }]] },
        { say: "If they were scrolls, you could just glue one right onto the end of the other.",
          draw: [["write", "c4", [160, 430], "as scrolls, they'd join end to end", { size: 56, color: "blue" }],
                 ["under", "c4", "blue"]] },
        { say: "They match word for word, not even one little particle different. So people think Ezra probably wrote Chronicles.",
          draw: [["write", "c5", [120, 580], "word for word", { size: 60 }],
                 ["write", "c6", { after: "c5", gap: 110 }, "author of Chr = Ezra?", { size: 60, color: "red" }],
                 ["arrow", "c5", "c6"],
                 ["circle", "c6"]] },
        { say: "We're studying the Bible in chronological order like this. How's it going? Are you starting to see the Bible a little?",
          draw: [["write", "c7", [120, 740], "read in time order → the Bible opens up", { size: 52, color: "green" }]] }
      ]
    },
    {
      id: "return", title: "How the Exiles Returned",
      beats: [
        { say: "The Return from Exile happened in three waves. The first return was in five thirty-six B.C., led by Zerubbabel.",
          draw: [["clear"],
                 ["title", "t", "Return from Exile"],
                 ["write", "d1", [120, 290], "1st 536 B.C.", { size: 60, color: "red" }],
                 ["write", "d1b", { after: "d1", gap: 40 }, "Zerubbabel", { size: 60 }],
                 ["photo", "p2", "img/p3/image2.jpg", [1060, 180, 460, 259], { tilt: -2, caption: "History of exile and return" }]] },
        { say: "The second return was in four fifty-seven B.C., led by Ezra. And the third was in four forty-four B.C., led by Nehemiah.",
          draw: [["write", "d2", [120, 390], "2nd 457 B.C.", { size: 60, color: "blue" }],
                 ["write", "d2b", { after: "d2", gap: 40 }, "Ezra", { size: 60 }],
                 ["write", "d3", [120, 490], "3rd 444 B.C.", { size: 60, color: "blue" }],
                 ["write", "d3b", { after: "d3", gap: 40 }, "Nehemiah", { size: 60 }]] },
        { say: "The leaders of the first return were the governor Sheshbazzar, who's also called Zerubbabel, and the high priest Joshua.",
          draw: [["write", "d4", [160, 575], "1st = Gov. Zerubbabel (Sheshbazzar) + High Priest Joshua", { size: 44, color: "gray" }]] },
        { say: "The Decree of Cyrus came out in five thirty-eight B.C. But just because a decree's issued doesn't mean you can come right away. They had lives there. People had to be recruited, and the word had to get around.",
          draw: [["write", "d5", [120, 690], "decree 538 B.C.", { size: 60 }],
                 ["write", "d6", { after: "d5", gap: 130 }, "arrival 536 B.C.", { size: 60, color: "red" }],
                 ["arrow", "d5", "d6"],
                 ["write", "d7", [430, 750], "1 yr to prepare + 4~5 months on the road", { size: 44, color: "gray" }]] },
        { say: "And that's exactly seventy years after six oh six B.C., the first deportation, when King Jehoiakim and Daniel were taken captive.",
          draw: [["write", "d8", [120, 835], "606 B.C. 1st exile →", { size: 52, color: "gray" }],
                 ["write", "d9", { after: "d8", gap: 24 }, "exactly 70 yrs", { size: 60, color: "red" }],
                 ["under", "d9"]] }
      ]
    },
    {
      id: "foundation", title: "Laying the Temple Foundation",
      beats: [
        { say: "When they got back, the first thing they had to do was build places to live. That took about a year. Then, after one year and two months, they laid the foundation of the temple.",
          draw: [["clear"],
                 ["title", "t", "Laying the foundation"],
                 ["write", "e1", [120, 290], "housing first", { size: 60 }],
                 ["write", "e2", { after: "e1", gap: 110 }, "foundation after 1 yr 2 mo", { size: 60, color: "blue" }],
                 ["arrow", "e1", "e2"]] },
        { say: "People who'd been taken captive at about ten years old came back at eighty. They'd seen Solomon's temple burn before they left.",
          draw: [["write", "e3", [120, 410], "taken at age 10", { size: 60 }],
                 ["write", "e4", { after: "e3", gap: 110 }, "back at 80", { size: 60, color: "red" }],
                 ["arrow", "e3", "e4"]] },
        { say: "Like Psalm 126 says, when the Lord brought back the captives of Zion, we were like those who dream. Can you feel it? He's letting us rebuild the ruined temple with our own hands.",
          draw: [["write", "e5", [120, 550], "\"like those who dream\"", { size: 64, color: "green" }],
                 ["write", "e6", { after: "e5", gap: 30 }, "Ps 126:1", { size: 44, color: "gray" }]] },
        { say: "The old men who'd seen the first temple wept out loud when they saw the foundation laid. And many others shouted for joy.",
          draw: [["write", "e7", { at: [420, 690] }, "old men: loud weeping", { anchor: "middle", size: 56, color: "blue" }],
                 ["write", "e8", { at: [1160, 690] }, "many others: joy", { anchor: "middle", size: 56, color: "blue" }]] },
        { say: "So the people couldn't tell the shouts of joy from the sound of weeping.",
          draw: [["write", "e9", { at: [780, 820] }, "couldn't tell the sounds apart", { anchor: "middle", size: 64, color: "red" }],
                 ["under", "e9"]] }
      ]
    },
    {
      id: "stopped", title: "Opposition and a Halt",
      beats: [
        { say: "But here's the problem. There were people who'd been living in that land for seventy years. For seventy years they'd thought, this is my land. If someone suddenly told them to leave, they'd be stunned, right?",
          draw: [["clear"],
                 ["title", "t", "Opposition and a halt"],
                 ["write", "f1", [120, 290], "settlers of 70 yrs", { size: 60 }],
                 ["write", "f2", { after: "f1", gap: 110 }, "stunned!", { size: 60, color: "red" }],
                 ["arrow", "f1", "f2"],
                 ["photo", "p3", "img/p3/image3.jpg", [1140, 360, 380, 214], { tilt: 2, caption: "Panorama of Ezra" }]] },
        { say: "So the troublemakers around them came and got in the way. They sent letters saying it was illegal construction, bribed Persian officials, and filed complaint after complaint. And they got the work stopped.",
          draw: [["write", "f3", [120, 400], "obstruction · letters · bribes · complaints", { size: 50, color: "blue" }]] },
        { say: "Even when something's God's will, there can be plenty of opposition. In fact, the more something is God's will, the more the devil fights it.",
          draw: [["write", "f4", [120, 520], "the more God's will, the more opposition", { size: 52, color: "red" }],
                 ["under", "f4"]] },
        { say: "So when hard times come, don't think, I guess this isn't God's will. Think instead, the devil's getting in the way like this, so this must be God's will. And nobody's opposed this Bible camp at all. Now that's a real problem.",
          draw: [["write", "f5", [160, 620], "hardship = must be God's will", { size: 52, color: "green" }]] },
        { say: "In the end, an official order came down from Persia, and the work stopped for fifteen years, until the second year of Darius king of Persia. If a prophet showed up then, what would he say? Build the temple, right? Next, we're going to meet Haggai.",
          draw: [["write", "f6", [120, 760], "until Darius yr 2", { size: 56 }],
                 ["write", "f7", { after: "f6", gap: 30 }, "15 yrs halted", { size: 72, color: "red" }],
                 ["box", "f7"],
                 ["write", "f8", { after: "f7", gap: 50 }, "→ Haggai", { size: 56, color: "blue" }]] }
      ]
    }
  ]
};
