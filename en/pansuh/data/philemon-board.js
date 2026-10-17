// Philemon whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does.
window.BOARD = {
  scenes: [
    {
      id: "background", title: "Philemon and Onesimus",
      beats: [
        { say: "Okay, first, the background of Philemon. Tychicus is carrying three letters. Ephesians, Colossians, and Philemon.",
          draw: [["title", "t", "Philemon: background"],
                 ["photo", "p1", "../../pansuh/img/p4/image71.jpg", [1100, 190, 400, 225], { tilt: 2.5 }],
                 ["write", "a1", [120, 290], "Eph · Col · Phlm", { size: 56 }],
                 ["write", "a2", [180, 380], "→ carried by Tychicus", { size: 52, color: "gray" }]] },
        { say: "Philemon learned the Bible from Paul at the school of Tyrannus, and he became a minister. He was leading a house church. And his son? That's Archippus.",
          draw: [["write", "a3", [120, 500], "Philemon", { color: "blue" }],
                 ["write", "a4", { after: "a3", gap: 40 }, "Tyrannus grad · house church", { size: 52 }]] },
        { say: "Now, there was a slave in his house named Onesimus. He took some money and ran off to Rome.",
          draw: [["write", "a5", [120, 640], "slave Onesimus", { color: "red" }],
                 ["write", "a6", { after: "a5", gap: 110 }, "money → Rome", { size: 60 }],
                 ["arrow", "a5", "a6"]] },
        { say: "Back then, a slave escaping all the way to Rome? That was a huge deal. A smart man like this really wasn't the kind of person who should've been a slave.",
          draw: [["write", "a7", [180, 770], "huge event · a smart man", { size: 52, color: "gray" }]] }
      ]
    },
    {
      id: "return", title: "Sent Back",
      beats: [
        { say: "He fled to Rome, met Paul, met Jesus, and was completely born again. He became a different man.",
          draw: [["clear"],
                 ["title", "t", "Sending Onesimus back"],
                 ["write", "b1", [120, 290], "meets Paul"],
                 ["write", "b2", { after: "b1", gap: 110 }, "born again", { color: "green" }],
                 ["arrow", "b1", "b2"]] },
        { say: "People like us would say, 'If you go home, they'll beat you to death. Just stay here with me.' But not Paul.",
          draw: [["write", "b3", [120, 410], "stay with me?", { color: "gray" }],
                 ["strike", "b3", "gray"]] },
        { say: "Paul says, sure, Jesus has forgiven you, but you still need your master's forgiveness too. And he sends him back.",
          draw: [["write", "b4", [120, 530], "must be forgiven by master too", { color: "red" }],
                 ["under", "b4"]] },
        { say: "Christianity has never taught that once God forgives you, that's the end of it.",
          draw: [["write", "b5", [120, 650], "God forgives → done?", { size: 56, color: "gray" }],
                 ["cross", [1000, 630], "red"]] },
        { say: "Here's the thing. When a runaway slave got caught, the master usually nailed him to a cross. So Onesimus is going back at the risk of his life. That's why Paul writes him a letter.",
          draw: [["write", "b6", [120, 790], "risks his life", { size: 60 }],
                 ["write", "b7", { after: "b6", gap: 110 }, "one letter from Paul", { size: 60, color: "blue" }],
                 ["arrow", "b6", "b7"],
                 ["box", "b7", "blue"]] }
      ]
    },
    {
      id: "plea", title: "I Appeal for Love's Sake",
      beats: [
        { say: "Tychicus delivers Colossians, then he goes to Pastor Philemon's house and reads this letter. Paul greets Philemon, his wife Apphia, and his son Archippus.",
          draw: [["clear"],
                 ["title", "t", "Philemon: content"],
                 ["write", "c1", [120, 290], "to Philemon · Apphia · Archippus", { size: 56, color: "gray" }]] },
        { say: "He doesn't get straight to the point. First he praises Philemon's faith and love. The hearts of the saints have been refreshed through you. He builds him way up, and only then does he get to the point.",
          draw: [["write", "c2", [120, 410], "praises faith & love", { color: "green" }],
                 ["write", "c3", { after: "c2", gap: 40 }, "← lift him up", { size: 52, color: "gray" }]] },
        { say: "Verses 8 and 9. I could boldly command you in Christ, yet for love's sake I rather appeal to you. And he could have commanded him all he wanted. Philemon was his disciple, after all.",
          draw: [["write", "c4", [120, 540], "could command", { color: "gray" }],
                 ["strike", "c4", "gray"],
                 ["write", "c5", { after: "c4", gap: 110 }, "appeal in love", { color: "red" }],
                 ["arrow", "c4", "c5"]] },
        { say: "Being such a one as Paul the aged, and now also a prisoner. In other words, I'm old, and I'm in prison. That's a little quiet pressure, isn't it?",
          draw: [["write", "c6", [180, 640], "old & in prison → quiet pressure", { size: 52, color: "gray" }]] },
        { say: "Verses 10 and 11. My son Onesimus, whom I have begotten in my chains. Once he was useless to you, but now he's useful. The word for useless is ganesimos, and the word for useful? Onesimus.",
          draw: [["write", "c7", [120, 780], "useless = ganesimos", { size: 60, color: "gray" }],
                 ["write", "c8", { after: "c7", gap: 110 }, "useful = Onesimus", { size: 60, color: "green" }],
                 ["arrow", "c7", "c8"],
                 ["circle", "c8", "green"]] }
      ]
    },
    {
      id: "squeeze", title: "No Way Out",
      beats: [
        { say: "Verses 13 and 14. I wanted to keep him with me, but I'd do nothing without your consent. And he was already using him that way! Paul really knows how to put the squeeze on people, doesn't he?",
          draw: [["clear"],
                 ["title", "t", "Paul leaves no way out"],
                 ["write", "d1", [120, 290], "v. 14: nothing without your consent", { size: 56 }]] },
        { say: "Verses 15 and 16. Perhaps he was parted from you for a while, so that you'd have him forever. From now on, don't treat him as a slave. Treat him as a beloved brother. He and I are already like brothers.",
          draw: [["write", "d2", [120, 400], "v. 16:", { size: 56, color: "gray" }],
                 ["write", "d3", { after: "d2", gap: 24 }, "slave", { color: "gray" }],
                 ["write", "d4", { after: "d3", gap: 110 }, "beloved brother", { color: "red" }],
                 ["arrow", "d3", "d4"]] },
        { say: "Verses 18 and 19. If he owes you anything, put that on my account. I, Paul, write this with my own hand. I'll repay it.",
          draw: [["write", "d5", [120, 530], "v. 18: put it on my account", { color: "blue" }],
                 ["box", "d5", "blue"]] },
        { say: "But hey, you owe me something too, don't you? The debt of the gospel. But I won't mention that.",
          draw: [["write", "d6", [180, 630], "you owe me too… I won't mention it", { size: 52, color: "gray" }]] },
        { say: "Verse 21. I know you'll do even more than I say. He leaves him no way out, doesn't he? Then verse 22. Prepare a lodging for me. What does that mean? I'm coming to check on you.",
          draw: [["write", "d7", [120, 750], "v. 21: you'll do even more", { size: 56 }],
                 ["write", "d8", [120, 840], "v. 22: prepare a room = I'll come", { size: 56, color: "red" }]] }
      ]
    }
  ]
};
