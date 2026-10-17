// Haggai whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does.
window.BOARD = {
  scenes: [
    {
      id: "stopped", title: "After the Work Stopped",
      beats: [
        { say: "So the temple work had stopped for fifteen years. And the people? They were saying, good, that worked out nicely.",
          draw: [["title", "t", "After the work stopped"],
                 ["write", "a1", [120, 290], "stopped 15 yrs", { size: 64 }],
                 ["write", "a2", { after: "a1", gap: 110 }, "\"Good!\"", { size: 64, color: "red" }],
                 ["arrow", "a1", "a2"]] },
        { say: "The materials they'd brought for the temple, they used to build their own houses. And the temple building just fizzled out.",
          draw: [["write", "a3", [120, 410], "temple materials", { size: 64 }],
                 ["write", "a4", { after: "a3", gap: 110 }, "my own house", { size: 64, color: "red" }],
                 ["arrow", "a3", "a4"],
                 ["write", "a5", [160, 490], "temple building fizzles out", { size: 48, color: "gray" }]] },
        { say: "Then God sends the prophet Haggai. In the second year of King Darius, on the first day of the sixth month, the word comes to Zerubbabel the governor and Joshua the high priest.",
          draw: [["write", "a6", [120, 630], "God sends Haggai", { size: 80, color: "blue" }],
                 ["box", "a6"],
                 ["write", "a7", [160, 720], "Darius yr 2, month 6 · to Zerubbabel, Joshua", { size: 46, color: "gray" }]] },
        { say: "Now, this King Darius isn't the Darius in the book of Daniel, the one related to Cyrus. This is Darius Hystaspes. He took the throne after Cyrus and Cambyses the Second.",
          draw: [["write", "a8", [120, 830], "Darius = Darius Hystaspes", { size: 56, color: "red" }],
                 ["write", "a9", { after: "a8", gap: 30 }, "(≠ Darius in Daniel)", { size: 44, color: "gray" }]] }
      ]
    },
    {
      id: "not-time", title: "Not Yet the Time?",
      beats: [
        { say: "The people were saying, the time hasn't come yet to build the house of the LORD. And isn't that what people always say? Not yet, not yet.",
          draw: [["clear"],
                 ["title", "t", "Not yet the time?"],
                 ["write", "b1", [120, 290], "\"Not time to build\"", { size: 64 }],
                 ["strike", "b1"],
                 ["photo", "p1", "img/p3/image4.jpg", [1100, 170, 420, 236], { tilt: 2, caption: "The prophet Haggai rebukes" }]] },
        { say: "But think about it. They got to come back because the decree of Cyrus went out, in God's time and by God's will.",
          draw: [["write", "b2", [120, 400], "God's time = Cyrus' decree", { size: 60, color: "blue" }],
                 ["under", "b2", "blue"]] },
        { say: "Is it a time for you yourselves to dwell in your paneled houses, while this house lies waste? And he says, you've sown much and bring in little. You eat, but you're not filled. And he who earns wages puts them into a bag with holes.",
          draw: [["write", "b3", [120, 530], "temple in ruins ↔ my paneled house", { size: 56 }],
                 ["write", "b4", [160, 620], "sow much, reap little · bag with holes", { size: 48, color: "gray" }]] },
        { say: "So for people like that, God let business go badly.",
          draw: [["write", "b5", [120, 730], "business fails", { size: 64, color: "red" }],
                 ["circle", "b5"]] },
        { say: "But we shouldn't read this to mean, if you don't give big to the church building fund, God will ruin your business. Right?",
          draw: [["write", "b6", { after: "b5", gap: 70 }, "no building gift = ruin?", { size: 48, color: "gray" }],
                 ["strike", "b6"]] }
      ]
    },
    {
      id: "listen", title: "A Changed People",
      beats: [
        { say: "And Zerubbabel, Joshua, and all the remnant of the people obeyed the voice of the LORD and the words of Haggai.",
          draw: [["clear"],
                 ["title", "t", "A changed people"],
                 ["write", "c1", [120, 290], "they obey Haggai", { size: 64, color: "green" }],
                 ["under", "c1", "green"]] },
        { say: "Here's what matters. In the past, whenever a prophet spoke, this people just beat him and killed him.",
          draw: [["write", "c2", [120, 430], "before: beat and kill prophets", { size: 60 }],
                 ["strike", "c2"]] },
        { say: "But after coming back from the Babylonian Exile, they finally saw how important the prophets were. And they listened. That's another change.",
          draw: [["write", "c3", [120, 550], "after Exile: listen to prophets", { size: 60, color: "blue" }],
                 ["box", "c3"]] },
        { say: "The people were saying, it looks like God isn't with us. But God says, I am with you.",
          draw: [["write", "c4", [120, 690], "\"I am with you\"", { size: 72, color: "red" }]] },
        { say: "And he stirs up the spirit of all the people, and they come and work on the house of God.",
          draw: [["write", "c5", [160, 800], "stirs their spirit → work begins", { size: 56, color: "green" }]] }
      ]
    },
    {
      id: "glory", title: "The Latter Glory Will Be Greater",
      beats: [
        { say: "Who is left among you who saw this house in its former glory? Isn't it in your eyes as nothing?",
          draw: [["clear"],
                 ["title", "t", "The latter glory is greater"],
                 ["write", "d1", [120, 290], "\"Is it not as nothing?\"", { size: 64 }]] },
        { say: "Next to the size of Solomon's temple, this one looked so small and shabby. The people's hearts just sank.",
          draw: [["write", "d2", [120, 410], "Solomon's temple", { size: 56 }],
                 ["write", "d3", { after: "d2", gap: 24 }, "vs", { size: 48, color: "gray" }],
                 ["write", "d4", { after: "d3", gap: 24 }, "shabby new one", { size: 56 }],
                 ["write", "d5", { after: "d4", gap: 30 }, "→ discouraged", { size: 56, color: "red" }]] },
        { say: "But God says, be strong and work, for I am with you. Size isn't what matters. Remember what Solomon said? Even the heaven of heavens can't contain God.",
          draw: [["write", "d6", [120, 540], "be strong and work", { size: 60, color: "blue" }],
                 ["write", "d7", [160, 620], "size is not what matters", { size: 48, color: "gray" }]] },
        { say: "The treasures of all nations will come, and the latter glory of this house will be greater than the former. So don't be discouraged, he says.",
          draw: [["write", "d8", [120, 740], "latter glory > former glory", { size: 64, color: "red" }],
                 ["box", "d8"]] },
        { say: "So you see the pattern? Guilt, exhortation, warning, and restoration. It runs all through even a short book like Haggai.",
          draw: [["write", "d9", [120, 845], "guilt → exhortation → warning → restoration", { size: 46, color: "green" }]] }
      ]
    },
    {
      id: "zerubbabel", title: "Zerubbabel's Ability",
      beats: [
        { say: "But here's the problem. There was no money to rebuild the temple. Over those fifteen years, they'd spent it all on their own houses and their own needs.",
          draw: [["clear"],
                 ["title", "t", "Zerubbabel's ability"],
                 ["write", "e1", [120, 290], "no funds", { size: 64, color: "red" }],
                 ["write", "e2", { after: "e1", gap: 40 }, "(15 yrs spent on own houses)", { size: 48, color: "gray" }]] },
        { say: "They couldn't build because they'd spent the money. But people said, it's because Zerubbabel isn't up to the job.",
          draw: [["write", "e3", [120, 410], "\"Zerubbabel is incompetent\"", { size: 60 }],
                 ["strike", "e3"]] },
        { say: "So Zerubbabel, troubled, finally goes to Persia. Now, this story isn't in the Bible. It comes from history.",
          draw: [["write", "e4", [120, 540], "Zerubbabel → Persia", { size: 60, color: "blue" }],
                 ["write", "e5", { after: "e4", gap: 40 }, "not Bible · history", { size: 48, color: "gray" }]] },
        { say: "As it happens, Zerubbabel's friend Darius Hystaspes has been king of Persia for about two years. Early in his reign, he's busy choosing seven counselors to steady his throne.",
          draw: [["write", "e6", [120, 670], "friend Darius is king", { size: 60 }],
                 ["write", "e7", { after: "e6", gap: 40 }, "choosing 7 counselors", { size: 48, color: "gray" }]] },
        { say: "And right then, a great scholar named Zerubbabel comes to see him. Darius is delighted.",
          draw: [["write", "e8", [120, 800], "scholar Zerubbabel visits → king delighted", { size: 50, color: "green" }]] }
      ]
    },
    {
      id: "truth", title: "Truth Is the Strongest",
      beats: [
        { say: "The king throws a banquet and holds a symposium on one question. What's the strongest thing in the world?",
          draw: [["clear"],
                 ["title", "t", "What is strongest?"],
                 ["write", "f1", [120, 290], "wine?", { size: 64 }],
                 ["write", "f2", { after: "f1", gap: 70 }, "women?", { size: 64 }],
                 ["write", "f3", { after: "f2", gap: 70 }, "king?", { size: 64 }]] },
        { say: "Some say wine is strongest. Some say women. Some say the king. All sorts of answers. Then at the end, Zerubbabel, with real Jewish wisdom, gives a powerful speech. Truth is the strongest. And he wins first prize.",
          draw: [["write", "f4", { after: "f3", gap: 90 }, "truth!", { size: 88, color: "red" }],
                 ["circle", "f4"]] },
        { say: "The king's thrilled. He promises to give him whatever he asks, even half the kingdom. Everyone thinks he'll ask for a seat among the seven counselors. But Zerubbabel asks for a gift for the building fund.",
          draw: [["write", "f5", [120, 430], "seat among 7", { size: 60 }],
                 ["strike", "f5"],
                 ["write", "f6", { after: "f5", gap: 60 }, "building gift, please", { size: 60, color: "blue" }],
                 ["box", "f6"]] },
        { say: "Think about it. The king of an empire of 127 provinces is backing him. Imagine how much he brought back! He comes home, rebuilds, and finishes it cleanly in four years.",
          draw: [["write", "f7", [120, 560], "backed by king of 127 lands", { size: 52 }],
                 ["write", "f8", { after: "f7", gap: 100 }, "done in 4 yrs", { size: 60, color: "green" }],
                 ["arrow", "f7", "f8"]] },
        { say: "So, the decree of Cyrus was in 538 B.C. They returned in 536. The work stopped for fifteen years, then four years of rebuilding, so it was finished in 516 B.C. And the claim that it stopped because the leader was weak? That turned out to be wrong too.",
          draw: [["write", "f9", [120, 690], "538 decree → 536 return → 15 yrs stop + 4 →", { size: 46 }],
                 ["write", "f10", { after: "f9", gap: 16 }, "516 done", { size: 56, color: "red" }]] },
        { say: "The temple was burned on the tenth day of the fifth month in 586 B.C. So the rebuilding came exactly seventy years later.",
          draw: [["write", "f11", [120, 820], "586 burned → 516 done", { size: 60 }],
                 ["write", "f12", { after: "f11", gap: 40 }, "exactly 70 yrs", { size: 64, color: "red" }],
                 ["under", "f12"]] }
      ]
    }
  ]
};
