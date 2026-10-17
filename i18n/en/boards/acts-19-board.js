// Acts 19:21~20:3 whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does.
window.BOARD = {
  scenes: [
    {
      id: "plan", title: "Paul's Plan",
      beats: [
        { say: "Okay, now the third missionary journey, from Ephesus over to Greece. Paul's done his work in Ephesus, and here's his plan. Go through Macedonia and Achaia, then Jerusalem, and then on to Rome.",
          draw: [["title", "t", "Plan after Ephesus"],
                 ["write", "a1", [100, 300], "Macedonia · Achaia", { size: 52 }],
                 ["write", "a2", { after: "a1", gap: 70 }, "Jerusalem", { size: 52 }],
                 ["arrow", "a1", "a2"],
                 ["write", "a3", { below: "a2", gap: 100 }, "Rome", { size: 72, color: "red" }],
                 ["arrow", "a2", "a3"],
                 ["photo", "p1", "img/p4/image57.jpg", [1040, 180, 460, 259], { tilt: 2, caption: "Third missionary journey" }]] },
        { say: "And notice something. Paul's ministry is getting more and more organized.",
          draw: [["write", "a4", [100, 560], "ministry gets organized", { size: 60, color: "blue" }],
                 ["under", "a4", "blue"]] },
        { say: "He sends an advance team ahead to get things ready. That saves Paul a lot of time. So Timothy and Erastus go on ahead to Macedonia.",
          draw: [["write", "a5", [100, 690], "advance team: Timothy · Erastus", { size: 52 }],
                 ["write", "a6", { after: "a5", gap: 30 }, "(saves Paul's time)", { size: 44, color: "gray" }]] },
        { say: "And a little later, you'll see him leave a team behind, too, to follow up.",
          draw: [["write", "a7", [100, 810], "+ follow-up team", { size: 60, color: "green" }]] }
      ]
    },
    {
      id: "artemis", title: "The Temple of Artemis",
      beats: [
        { say: "Right around then, there's no small commotion. There's a silversmith named Demetrius. He makes little silver shrines of Artemis, tiny silver houses for the goddess, and it's bringing the craftsmen no small business.",
          draw: [["clear"],
                 ["title", "t", "Demetrius and Artemis"],
                 ["write", "b1", [100, 290], "Demetrius = silversmith", { size: 56 }],
                 ["write", "b2", { below: "b1", gap: 80 }, "silver shrine = silver house of a god", { size: 46, color: "gray" }],
                 ["photo", "p2", "img/p4/image58.jpg", [1000, 180, 500, 281], { tilt: -2, caption: "Temple of Artemis in Ephesus" }]] },
        { say: "So who's Artemis? She's an idol of fertility and abundance. You might also know her as Diana.",
          draw: [["write", "b3", [100, 480], "Artemis = fertility", { size: 64, color: "red" }]] },
        { say: "And her temple was huge. Kings from all kinds of nations each gave one of its 127 columns. It took 120 years to build. It was 115 meters long, 55 meters wide, and 19 meters high. The biggest temple in the whole ancient world.",
          draw: [["write", "b4", [100, 610], "127 columns · 120 yrs · 115×55×19m", { size: 52, color: "blue" }],
                 ["write", "b5", { after: "b4", gap: 40 }, "largest", { size: 56, color: "red" }],
                 ["box", "b5"]] },
        { say: "Everything within 300 meters of it was sacred ground. So if a criminal ran in there, nobody could arrest him. And there were a thousand priestesses there, called sacred prostitutes.",
          draw: [["write", "b6", [100, 740], "300m = refuge zone", { size: 56 }],
                 ["write", "b7", { after: "b6", gap: 50 }, "1,000 priestesses", { size: 56, color: "gray" }]] }
      ]
    },
    {
      id: "hands", title: "Gods Made with Hands Are No Gods",
      beats: [
        { say: "So Demetrius gets the craftsmen together and says, look, our whole living comes from this business. But this Paul goes all over Asia saying gods made with hands aren't gods at all.",
          draw: [["clear"],
                 ["title", "t", "One sentence"],
                 ["write", "c1", { at: [800, 300] }, "\"Gods made with hands are no gods\"", { anchor: "middle", size: 60, color: "red" }],
                 ["under", "c1"]] },
        { say: "Think about that. Just one sentence, and that great temple of Artemis starts to shake.",
          draw: [["write", "c2", [100, 430], "temple shaking", { size: 60 }]] },
        { say: "Here's the thing. Idolatry is the height of pride. I make something with my own hands, and then I call it a god. So who's really greater here?",
          draw: [["write", "c3", [100, 560], "height of pride", { size: 64, color: "blue" }],
                 ["write", "c4", { after: "c3", gap: 40 }, "maker > god?", { size: 46, color: "gray" }]] },
        { say: "And it's the height of foolishness, too. I just made it, and now I bow down to it? That's about as foolish as it gets.",
          draw: [["write", "c5", [100, 690], "height of folly", { size: 64, color: "blue" }],
                 ["write", "c6", { after: "c5", gap: 40 }, "make it, bow to it", { size: 46, color: "gray" }]] },
        { say: "And that magnificent temple? Today, there's just one stone column like this left standing.",
          draw: [["photo", "p3", "img/p4/image59.jpg", [1060, 420, 440, 248], { tilt: 2, caption: "Only one column left" }]] }
      ]
    },
    {
      id: "theater", title: "Great Is Artemis",
      beats: [
        { say: "Now the idol makers see their income dropping. So they pack into the theater, and there's an uproar.",
          draw: [["clear"],
                 ["title", "t", "Riot in the theater"],
                 ["write", "d1", [100, 290], "income drops → theater", { size: 56 }],
                 ["photo", "p4", "img/p4/image60.jpg", [1000, 170, 500, 281], { tilt: -2, caption: "Theater of Ephesus" }]] },
        { say: "This theater is huge, but the design is amazing. It's round, so when the wind comes in off the sea, you can hear even a coin drop on the stage. No microphone. No amplifier.",
          draw: [["write", "d2", [100, 410], "no mic, hear a coin drop", { size: 52, color: "gray" }]] },
        { say: "And most of the crowd didn't even know why they were there. For two hours they just kept shouting, Great is Artemis! Great is Artemis!",
          draw: [["write", "d3", [100, 560], "\"Great is Artemis!\" × 2 hrs", { size: 60, color: "red" }],
                 ["circle", "d3"]] },
        { say: "In the middle of all this, Paul wants to go in. So many people, right? Maybe he can preach to them. But his friends stop him. They want to kill you! Do you know where you're going? In the end, the town clerk just barely calms the crowd down.",
          draw: [["write", "d4", [100, 690], "Paul wants in → friends stop him", { size: 52 }],
                 ["write", "d5", [160, 770], "town clerk calms crowd", { size: 46, color: "gray" }]] },
        { say: "And after that, Paul doesn't say, I'll go in and be a martyr. He sees it's time to leave. So he leaves for Greece.",
          draw: [["write", "d6", [760, 830], "time to leave → Greece", { size: 56, color: "green" }],
                 ["under", "d6", "green"]] }
      ]
    },
    {
      id: "greece", title: "Three Months in Greece",
      beats: [
        { say: "Once the uproar's over, Paul encourages the disciples and says goodbye. He goes to Macedonia, encourages them with many words, and then comes to Greece and stays three months.",
          draw: [["clear"],
                 ["title", "t", "Three months in Greece"],
                 ["write", "e1", [120, 300], "Macedonia", { size: 60 }],
                 ["write", "e2", { after: "e1", gap: 110 }, "Greece, 3 months", { size: 64, color: "blue" }],
                 ["arrow", "e1", "e2"]] },
        { say: "Greece here means Corinth, Athens, the region of Achaia. And during those three months there, he writes Romans.",
          draw: [["write", "e3", [180, 400], "Greece (Corinth · Athens · Achaia)", { size: 46, color: "gray" }],
                 ["write", "e4", { after: "e2", gap: 50 }, "writes Romans", { size: 56, color: "red" }],
                 ["box", "e4"]] },
        { say: "He's about to sail for Syria, but the Jews are plotting against him. So he decides to go back through Macedonia instead.",
          draw: [["write", "e5", [120, 540], "Jews' plot → back via Macedonia", { size: 56 }]] },
        { say: "Now, at this point, they're carrying the collection. And it's not just the money. Representatives from the churches travel together, so everyone can see it's handled fairly. Sopater, Aristarchus, Secundus, Gaius, Timothy, Tychicus, and Trophimus.",
          draw: [["write", "e6", [120, 670], "gift + church delegates", { size: 60, color: "blue" }],
                 ["write", "e7", { after: "e6", gap: 40 }, "seen to be fair", { size: 48, color: "gray" }]] },
        { say: "Titus had already gone ahead to Corinth and gotten everything ready. That's why they could hold meetings steadily for three whole months. You can see how organized Paul's team was.",
          draw: [["write", "e8", [120, 810], "Paul's organized team", { size: 72, color: "green" }],
                 ["under", "e8", "green"]] }
      ]
    }
  ]
};
