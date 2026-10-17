// Acts 19:21~20:3 whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does.
window.BOARD = {
  scenes: [
    {
      id: "plan", title: "Paul's Plan",
      beats: [
        { say: "The third missionary journey, from Ephesus to Greece. After finishing his work in Ephesus, Paul plans to go through Macedonia and Achaia, then to Jerusalem, and then on to Rome.",
          draw: [["title", "t", "Plan after Ephesus"],
                 ["write", "a1", [100, 300], "Macedonia · Achaia", { size: 52 }],
                 ["write", "a2", { after: "a1", gap: 70 }, "Jerusalem", { size: 52 }],
                 ["arrow", "a1", "a2"],
                 ["write", "a3", { below: "a2", gap: 100 }, "Rome", { size: 72, color: "red" }],
                 ["arrow", "a2", "a3"],
                 ["photo", "p1", "../../pansuh/img/p4/image57.jpg", [1040, 180, 460, 259], { tilt: 2, caption: "Third missionary journey" }]] },
        { say: "Now Paul's ministry starts to become more and more organized.",
          draw: [["write", "a4", [100, 560], "ministry gets organized", { size: 60, color: "blue" }],
                 ["under", "a4", "blue"]] },
        { say: "He sends an advance team ahead to prepare the way. That saves Paul's time. So he sends Timothy and Erastus ahead to Macedonia.",
          draw: [["write", "a5", [100, 690], "advance team: Timothy · Erastus", { size: 52 }],
                 ["write", "a6", { after: "a5", gap: 30 }, "(saves Paul's time)", { size: 44, color: "gray" }]] },
        { say: "And later we also see him leave a team behind to follow up.",
          draw: [["write", "a7", [100, 810], "+ follow-up team", { size: 60, color: "green" }]] }
      ]
    },
    {
      id: "artemis", title: "The Temple of Artemis",
      beats: [
        { say: "Around that time, no small commotion broke out. A silversmith named Demetrius made silver shrines of Artemis, little silver houses for the goddess, and brought no small business to the craftsmen.",
          draw: [["clear"],
                 ["title", "t", "Demetrius and Artemis"],
                 ["write", "b1", [100, 290], "Demetrius = silversmith", { size: 56 }],
                 ["write", "b2", { below: "b1", gap: 80 }, "silver shrine = silver house of a god", { size: 46, color: "gray" }],
                 ["photo", "p2", "../../pansuh/img/p4/image58.jpg", [1000, 180, 500, 281], { tilt: -2, caption: "Temple of Artemis in Ephesus" }]] },
        { say: "Artemis is an idol of fertility and abundance. She is also called Diana.",
          draw: [["write", "b3", [100, 480], "Artemis = fertility", { size: 64, color: "red" }]] },
        { say: "The temple of Artemis was enormous. Kings of many nations each gave one of its 127 columns. It took 120 years to build, and it was 115 meters long, 55 meters wide, and 19 meters high. It was the largest temple of the ancient world.",
          draw: [["write", "b4", [100, 610], "127 columns · 120 yrs · 115×55×19m", { size: 52, color: "blue" }],
                 ["write", "b5", { after: "b4", gap: 40 }, "largest", { size: 56, color: "red" }],
                 ["box", "b5"]] },
        { say: "Everything within 300 meters of the temple was sacred ground, so a criminal who fled there could not be arrested. And there were a thousand priestesses, called sacred prostitutes.",
          draw: [["write", "b6", [100, 740], "300m = refuge zone", { size: 56 }],
                 ["write", "b7", { after: "b6", gap: 50 }, "1,000 priestesses", { size: 56, color: "gray" }]] }
      ]
    },
    {
      id: "hands", title: "Gods Made with Hands Are No Gods",
      beats: [
        { say: "Demetrius gathered the craftsmen and said: our prosperity comes from this business, but this Paul goes all over Asia saying that gods made with hands are no gods at all.",
          draw: [["clear"],
                 ["title", "t", "One sentence"],
                 ["write", "c1", { at: [800, 300] }, "\"Gods made with hands are no gods\"", { anchor: "middle", size: 60, color: "red" }],
                 ["under", "c1"]] },
        { say: "With just this one sentence, that great temple of Artemis starts to shake.",
          draw: [["write", "c2", [100, 430], "temple shaking", { size: 60 }]] },
        { say: "Idolatry is the height of pride. I make something with my own hands and then call it a god. So who is greater?",
          draw: [["write", "c3", [100, 560], "height of pride", { size: 64, color: "blue" }],
                 ["write", "c4", { after: "c3", gap: 40 }, "maker > god?", { size: 46, color: "gray" }]] },
        { say: "It is also the height of foolishness. I just made it, and then I bow down to it. That is the height of stupidity.",
          draw: [["write", "c5", [100, 690], "height of folly", { size: 64, color: "blue" }],
                 ["write", "c6", { after: "c5", gap: 40 }, "make it, bow to it", { size: 46, color: "gray" }]] },
        { say: "That magnificent temple. Today only one stone column like this is left.",
          draw: [["photo", "p3", "../../pansuh/img/p4/image59.jpg", [1060, 420, 440, 248], { tilt: 2, caption: "Only one column left" }]] }
      ]
    },
    {
      id: "theater", title: "Great Is Artemis",
      beats: [
        { say: "When the idol makers saw their income dropping, they gathered in the theater and there was an uproar.",
          draw: [["clear"],
                 ["title", "t", "Riot in the theater"],
                 ["write", "d1", [100, 290], "income drops → theater", { size: 56 }],
                 ["photo", "p4", "../../pansuh/img/p4/image60.jpg", [1000, 170, 500, 281], { tilt: -2, caption: "Theater of Ephesus" }]] },
        { say: "This theater is huge, but its design is amazing. It is round, so when the wind blows from the sea, you can hear even a coin dropping on the stage. No microphone, no amplifier.",
          draw: [["write", "d2", [100, 410], "no mic, hear a coin drop", { size: 52, color: "gray" }]] },
        { say: "The crowd didn't even know why they had gathered, and for two hours they shouted, Great is Artemis! Great is Artemis!",
          draw: [["write", "d3", [100, 560], "\"Great is Artemis!\" × 2 hrs", { size: 60, color: "red" }],
                 ["circle", "d3"]] },
        { say: "In the middle of all this, Paul wanted to go in, thinking that with so many people he might preach to them. But his friends stopped him. They want to kill you. Do you know where you're going? In the end the town clerk barely managed to calm the crowd.",
          draw: [["write", "d4", [100, 690], "Paul wants in → friends stop him", { size: 52 }],
                 ["write", "d5", [160, 770], "town clerk calms crowd", { size: 46, color: "gray" }]] },
        { say: "After that, Paul did not say he would go and be a martyr. He realized it was time to leave, and he left for Greece.",
          draw: [["write", "d6", [760, 830], "time to leave → Greece", { size: 56, color: "green" }],
                 ["under", "d6", "green"]] }
      ]
    },
    {
      id: "greece", title: "Three Months in Greece",
      beats: [
        { say: "After the uproar ended, Paul encouraged the disciples and said goodbye. He went to Macedonia and encouraged them with many words, and then came to Greece and stayed three months.",
          draw: [["clear"],
                 ["title", "t", "Three months in Greece"],
                 ["write", "e1", [120, 300], "Macedonia", { size: 60 }],
                 ["write", "e2", { after: "e1", gap: 110 }, "Greece, 3 months", { size: 64, color: "blue" }],
                 ["arrow", "e1", "e2"]] },
        { say: "Greece here means Corinth, Athens, the region of Achaia. While he stayed there three months, he wrote Romans.",
          draw: [["write", "e3", [180, 400], "Greece (Corinth · Athens · Achaia)", { size: 46, color: "gray" }],
                 ["write", "e4", { after: "e2", gap: 50 }, "writes Romans", { size: 56, color: "red" }],
                 ["box", "e4"]] },
        { say: "He was about to sail to Syria, but the Jews plotted against him, so he decided to go back through Macedonia.",
          draw: [["write", "e5", [120, 540], "Jews' plot → back via Macedonia", { size: 56 }]] },
        { say: "At this time they were bringing the collection. Not just the money. Representatives of the churches came together, so everyone could see it was handled fairly. Sopater, Aristarchus, Secundus, Gaius, Timothy, Tychicus, and Trophimus.",
          draw: [["write", "e6", [120, 670], "gift + church delegates", { size: 60, color: "blue" }],
                 ["write", "e7", { after: "e6", gap: 40 }, "seen to be fair", { size: 48, color: "gray" }]] },
        { say: "Titus had gone to Corinth ahead of time and prepared well, so they could hold meetings steadily for three months. This shows how organized Paul's team was.",
          draw: [["write", "e8", [120, 810], "Paul's organized team", { size: 72, color: "green" }],
                 ["under", "e8", "green"]] }
      ]
    }
  ]
};
