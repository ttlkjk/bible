// Paul's last missionary journey whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does.
window.BOARD = {
  scenes: [
    {
      id: "free", title: "Released in Rome",
      beats: [
        { say: "Now, Paul's last missionary journey. The route is drawn on the map.",
          draw: [["title", "t", "Paul's last journey"],
                 ["photo", "p1", "../../pansuh/img/p4/image78.jpg", [1080, 200, 460, 259], { tilt: 2, caption: "Route of the last journey" }]] },
        { say: "When Emperor Nero died, Paul was found not guilty and released from prison in Rome.",
          draw: [["write", "a1", [120, 300], "Rome prison"],
                 ["write", "a2", { after: "a1", gap: 110 }, "released", { color: "red" }],
                 ["arrow", "a1", "a2"],
                 ["write", "a3", [120, 375], "Emperor Nero died", { size: 46, color: "gray" }]] },
        { say: "He had originally planned to go to Spain, remember? But it doesn't look like he went to Spain.",
          draw: [["write", "a4", [120, 500], "Spain?"],
                 ["strike", "a4"],
                 ["write", "a5", { after: "a4", gap: 40 }, "probably didn't go", { size: 52, color: "gray" }]] },
        { say: "He came all the way to Crete, visited the church, and left Titus there. That's Titus chapter 1, verse 5.",
          draw: [["write", "a6", [120, 630], "Crete", { color: "blue" }],
                 ["write", "a7", { after: "a6", gap: 40 }, "left Titus there"],
                 ["under", "a7", "red"],
                 ["write", "a8", { after: "a7", gap: 30 }, "Titus 1:5", { size: 44, color: "gray" }]] },
        { say: "He also left people like Apollos and Zenas the lawyer there.",
          draw: [["write", "a9", [120, 750], "+ also left Apollos, Zenas the lawyer", { size: 52, color: "gray" }]] }
      ]
    },
    {
      id: "asia", title: "From Ephesus to Troas",
      beats: [
        { say: "Next is Ephesus. He told Timothy to stay on in Ephesus, and left Timothy there.",
          draw: [["clear"],
                 ["title", "t", "From Ephesus to Troas"],
                 ["write", "c1", [120, 290], "Ephesus", { color: "blue" }],
                 ["write", "c2", { after: "c1", gap: 40 }, "left Timothy"],
                 ["write", "c3", { after: "c2", gap: 30 }, "1 Tim 1:3 abide at Ephesus", { size: 44, color: "gray" }]] },
        { say: "Then he went through Laodicea to the region of Colossae, and he probably went to Philemon's house. Because in Philemon he said, prepare me a lodging.",
          draw: [["write", "c4", [120, 420], "Laodicea", { size: 56 }],
                 ["write", "c5", { after: "c4", gap: 110 }, "Colossae", { color: "blue" }],
                 ["arrow", "c4", "c5"],
                 ["write", "c6", { after: "c5", gap: 40 }, "Philemon's house"],
                 ["write", "c7", [180, 495], "Phlm 1:22 prepare me also a lodging", { size: 44, color: "gray" }]] },
        { say: "He said he would come and see whether Philemon had welcomed Onesimus and forgiven him, so of course he went.",
          draw: [["write", "c8", { after: "c6", gap: 40 }, "Onesimus forgiven?", { size: 52, color: "red" }]] },
        { say: "Then he went to Hierapolis, and on through Smyrna, Pergamum, Adramyttium, and Assos, and arrived at Troas.",
          draw: [["write", "c9", [120, 630], "Hierapolis → Smyrna → Pergamum → Adramyttium → Assos → Troas", { size: 46 }]] },
        { say: "The weather was a bit hot then, so he took off his cloak and left it at the home of a deacon named Carpus. In Second Timothy chapter 4 he asks Timothy to bring the cloak he left at Carpus's house.",
          draw: [["write", "c10", [120, 760], "Troas: cloak at Carpus's"],
                 ["circle", "c10"],
                 ["write", "c11", { after: "c10", gap: 50 }, "2 Tim 4:13 cloke, books, parchments", { size: 44, color: "gray" }]] }
      ]
    },
    {
      id: "philippi", title: "1 Timothy from Philippi",
      beats: [
        { say: "So he crossed over to Samothrace, then over to Neapolis, and came to Philippi.",
          draw: [["clear"],
                 ["title", "t", "1 Timothy from Philippi"],
                 ["write", "d1", [120, 290], "Samothrace → Neapolis → Philippi", { size: 60 }]] },
        { say: "In Philippians he said he trusted that he himself would come shortly. He would have looked into the problems of the church at Philippi too.",
          draw: [["write", "d2", [120, 400], "looks into Philippi's problems"],
                 ["write", "d3", [180, 470], "Phil 2:24 I trust in the Lord that I also myself shall come shortly", { size: 44, color: "gray" }]] },
        { say: "While sorting out the church's problems like that, he needed to go back to Ephesus and appoint elders and deacons.",
          draw: [["write", "d4", [120, 600], "back to Ephesus"],
                 ["write", "d5", { after: "d4", gap: 110 }, "appoint elders · deacons", { color: "blue" }],
                 ["arrow", "d4", "d5"]] },
        { say: "But in case he was delayed, he wrote to Timothy in Ephesus, saying, you appoint them in my place. That letter is First Timothy.",
          draw: [["write", "d6", [120, 730], "if I'm late, you do it", { color: "red" }],
                 ["write", "d7", { after: "d6", gap: 110 }, "1 Timothy", { size: 80, color: "blue" }],
                 ["arrow", "d6", "d7"],
                 ["box", "d7"]] }
      ]
    },
    {
      id: "titus", title: "Titus and Nicopolis",
      beats: [
        { say: "Then he went through Amphipolis and Apollonia, and when he got to around Thessalonica, there were problems here too.",
          draw: [["clear"],
                 ["title", "t", "Titus and Nicopolis"],
                 ["write", "e1", [120, 290], "Amphipolis → Apollonia → Thessalonica", { size: 60 }],
                 ["write", "e2", [120, 400], "problems here too", { color: "red" }]] },
        { say: "He thought, this won't do. So right after writing to Timothy, he wrote a letter to Titus. That's the book of Titus. It also deals with appointing elders.",
          draw: [["write", "e3", [120, 530], "right after Timothy"],
                 ["write", "e4", { after: "e3", gap: 110 }, "Titus", { size: 80, color: "blue" }],
                 ["arrow", "e3", "e4"],
                 ["box", "e4"],
                 ["write", "e5", [180, 610], "also about appointing elders", { size: 44, color: "gray" }]] },
        { say: "He says, I will send Artemas or Tychicus, and when they arrive, hurry and come over to Nicopolis. He had decided to winter there.",
          draw: [["write", "e6", [120, 730], "come quickly to Nicopolis"],
                 ["write", "e7", { after: "e6", gap: 40 }, "to winter there", { size: 52, color: "gray" }]] },
        { say: "It was hot back in Troas, and it's already winter. It looks like he was planning a big gathering.",
          draw: [["write", "e8", { after: "e7", gap: 50 }, "→ big meeting?", { size: 56, color: "red" }]] },
        { say: "He says that if people like Apollos and Zenas the lawyer have nothing to do, send them on ahead. So they could learn ahead of time how to prepare for the gathering.",
          draw: [["write", "e9", [120, 830], "send Apollos · Zenas ahead to learn to prepare", { size: 52, color: "gray" }]] }
      ]
    },
    {
      id: "prison", title: "The Mamertine Prison",
      beats: [
        { say: "But there is no record that the gathering happened. A little later, we find Paul in prison in Rome. Something went wrong, and anyway, he was locked up.",
          draw: [["clear"],
                 ["title", "t", "Mamertine Prison"],
                 ["photo", "p2", "../../pansuh/img/p4/image79.jpg", [1000, 190, 540, 304], { tilt: -2, caption: "Mamertine Prison" }],
                 ["write", "f1", [120, 300], "no record of meeting", { size: 56, color: "gray" }],
                 ["write", "f2", [120, 410], "jailed in Rome", { color: "red" }]] },
        { say: "This time it was not house arrest, but the Mamertine Prison, a prison for those condemned to death. It was a prison cut out of rock.",
          draw: [["write", "f3", [120, 540], "house arrest"],
                 ["strike", "f3"],
                 ["write", "f4", { after: "f3", gap: 50 }, "death row", { color: "red" }],
                 ["circle", "f4"],
                 ["write", "f5", [180, 615], "cut out of rock", { size: 44, color: "gray" }]] },
        { say: "It was designed in a strange way. There is one small window, and when you look out of it, all you can see is the road to the place of execution.",
          draw: [["write", "f6", [120, 730], "one small window"],
                 ["write", "f7", { after: "f6", gap: 110 }, "sees only road to execution", { size: 56, color: "red" }],
                 ["arrow", "f6", "f7"]] },
        { say: "The letter he wrote at this time is Second Timothy. And then Paul was martyred.",
          draw: [["write", "f8", [120, 835], "letter written here = 2 Timothy", { size: 60, color: "blue" }],
                 ["write", "f9", { after: "f8", gap: 40 }, "→ martyred", { size: 60, color: "red" }]] }
      ]
    },
    {
      id: "pastoral", title: "The Pastoral Epistles",
      beats: [
        { say: "First Timothy, Titus, and Second Timothy. These three letters are grouped together under one name.",
          draw: [["clear"],
                 ["title", "t", "Pastoral Epistles"],
                 ["photo", "p3", "../../pansuh/img/p4/image78.jpg", [1060, 190, 480, 270], { tilt: 2 }],
                 ["write", "g1", [120, 300], "1 Timothy · Titus · 2 Timothy", { size: 56, color: "blue" }]] },
        { say: "Because a pastor sent them to pastors, they are classed as the Pastoral Epistles.",
          draw: [["write", "g2", [120, 430], "pastor → pastor"],
                 ["write", "g3", { after: "g2", gap: 40 }, "= Pastoral Epistles", { color: "red" }],
                 ["circle", "g3"]] },
        { say: "As a whole, they are about serving the church.",
          draw: [["write", "g4", [120, 570], "serving the church", { size: 56 }]] },
        { say: "They write about appointing deacons and elders, and about what a pastor should do.",
          draw: [["write", "g5", [120, 680], "appointing deacons and elders", { size: 56 }],
                 ["write", "g6", [120, 790], "a pastor's duties", { size: 56, color: "green" }],
                 ["under", "g6"]] }
      ]
    }
  ]
};
