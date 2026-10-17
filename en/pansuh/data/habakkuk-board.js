// Habakkuk whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does.
window.BOARD = {
  scenes: [
    {
      id: "context", title: "A Prophet Who Misread the Room",
      beats: [
        { say: "Okay, Habakkuk. He's a prophet who served around the same time as Zephaniah and Jeremiah.",
          draw: [["title", "t", "Habakkuk"],
                 ["write", "a1", [120, 290], "same time as Zephaniah · Jeremiah", { size: 56, color: "blue" }],
                 ["photo", "p1", "../../pansuh/img/p2/image11.jpg", [1110, 160, 420, 236], { tilt: 2, caption: "OT Prophets" }]] },
        { say: "Picture it. The Babylonian army has come and surrounded Jerusalem. People are being killed, and people are being carried off.",
          draw: [["write", "a2", [120, 410], "Babylonian army surrounds Jerusalem", { size: 56 }]] },
        { say: "Now, if you've lost a war and you're under siege, what does that mean? It's God's discipline. And not a light one, either. It's discipline of a middle level.",
          draw: [["write", "a3", [120, 540], "= God's discipline", { color: "red" }],
                 ["write", "a4", { after: "a3", gap: 40 }, "(medium level)", { size: 48, color: "gray" }],
                 ["under", "a3"]] },
        { say: "God held back His anger again and again, and only then did He discipline them. Even if they just took the beating quietly and repented, it still wouldn't be enough.",
          draw: [["write", "a5", [120, 660], "time to take the rod and repent", { size: 56, color: "green" }]] },
        { say: "But Habakkuk? He argues with God. You're God, so why are You just standing there? The wicked are tormenting the righteous. Is this normal?",
          draw: [["write", "a6", [120, 790], "\"God, is this normal?\"", { color: "red" }],
                 ["circle", "a6"]] }
      ]
    },
    {
      id: "complaint", title: "How Long?",
      beats: [
        { say: "Chapter 1, verses 1 to 4. O Lord, how long shall I cry, and thou wilt not hear! The wicked doth compass about the righteous; therefore wrong judgment proceedeth.",
          draw: [["clear"],
                 ["title", "t", "Habakkuk's cry (1:1~4)"],
                 ["write", "b1", [120, 290], "\"How long?\"", { size: 72 }],
                 ["write", "b2", [120, 400], "wicked surround righteous → justice bent", { size: 52 }]] },
        { say: "In Habakkuk's mind, the wicked are Babylon, and the righteous are Jerusalem. And he's fuming.",
          draw: [["write", "b3", [120, 520], "wicked = Babylon", { color: "red" }],
                 ["write", "b4", { after: "b3", gap: 90 }, "righteous = Jerusalem", { color: "blue" }]] },
        { say: "But God says, I sent them. I raised up the Chaldeans, that bitter and hasty nation.",
          draw: [["write", "b5", [120, 650], "God: \"I sent them\"", { color: "red" }],
                 ["box", "b5", "red"]] },
        { say: "And then He says, I was going to destroy them anyway. Why? Because they tormented you far too much.",
          draw: [["write", "b6", { after: "b5", gap: 60 }, "punished for going too far", { size: 52, color: "gray" }]] },
        { say: "So Habakkuk boldly says, I'm going to climb up to the watchtower, and I'll hear what God answers.",
          draw: [["write", "b7", [120, 790], "\"I'll stand on the tower and hear\"", { size: 60 }]] }
      ]
    },
    {
      id: "answer", title: "No One Is Righteous",
      beats: [
        { say: "God is just dumbfounded, and He answers him. The vision is for an appointed time. Though it tarry, it will surely come. Until then, Babylon gets to strut around.",
          draw: [["clear"],
                 ["title", "t", "God's answer (ch. 2)"],
                 ["write", "c1", [120, 290], "appointed time · though it tarry, surely", { size: 56, color: "blue" }]] },
        { say: "Chapter 2, verse 4. The just shall live by his faith. In other words, the righteous won't die, because of their faith.",
          draw: [["write", "c2", [120, 420], "the just shall live by faith (2:4)", { size: 64, color: "red" }],
                 ["under", "c2"]] },
        { say: "But people died yesterday too! Well, those weren't righteous. And lots of people died today! They weren't righteous either.",
          draw: [["write", "c3", [120, 540], "\"People died yesterday!\"", { size: 52 }],
                 ["write", "c4", { after: "c3", gap: 40 }, "→ not righteous", { size: 52, color: "gray" }]] },
        { say: "So is there no one righteous? None. Not even one? Not even one.",
          draw: [["write", "c5", [120, 650], "\"Not even one?\"", { size: 52 }],
                 ["write", "c6", { after: "c5", gap: 40 }, "→ not even one", { size: 52, color: "red" }]] },
        { say: "See, Habakkuk said they were the righteous and Babylon was the wicked, and he wanted the righteous saved. But God says there isn't a single righteous person. And a Jerusalem with not one righteous person left? That's no different from Babylon.",
          draw: [["write", "c7", [120, 790], "Jerusalem = no different from Babylon", { size: 64, color: "red" }],
                 ["box", "c7", "red"]] }
      ]
    },
    {
      id: "glory", title: "Those Who Will Bite Babylon",
      beats: [
        { say: "So look at verse 6. Those who will bite Babylon are going to rise up, suddenly.",
          draw: [["clear"],
                 ["title", "t", "Babylon falls too"],
                 ["write", "d1", [120, 300], "those who bite Babylon will rise (2:6)", { size: 64 }]] },
        { say: "And that's exactly what happened. In 539 B.C., Babylon fell to Cyrus, the king of Persia.",
          draw: [["write", "d2", [120, 430], "539 B.C. · Cyrus", { size: 72, color: "blue" }],
                 ["circle", "d2", "blue"]] },
        { say: "Chapter 2, verse 14. For the earth shall be filled with the knowledge of the glory of the Lord, as the waters cover the sea. When the nations see mighty Babylon fall, they'll all acknowledge the glory of the Lord.",
          draw: [["write", "d3", [120, 570], "as the waters cover the sea (2:14)", { size: 68, color: "green" }]] },
        { say: "Now, this has already been fulfilled. So it's not something that's still coming. That song we sing? It doesn't really fit.",
          draw: [["write", "d4", [120, 700], "already fulfilled", { color: "red" }],
                 ["under", "d4"],
                 ["write", "d5", { after: "d4", gap: 50 }, "\"That song doesn't fit\"", { size: 52, color: "gray" }]] }
      ]
    },
    {
      id: "tremble", title: "A Song Sung Trembling",
      beats: [
        { say: "Once Habakkuk hears all this, he starts to tremble. Why does Babylon fall? Because it tormented Israel far too much.",
          draw: [["clear"],
                 ["title", "t", "Habakkuk's prayer (ch. 3)"],
                 ["write", "e1", [120, 290], "why Babylon falls = tormented Israel too much", { size: 50 }]] },
        { say: "Then it's already settled that Israel gets trampled by Babylon, isn't it? When that sinks in, his whole body starts shaking.",
          draw: [["write", "e2", [120, 400], "trampling is settled", { color: "red" }],
                 ["write", "e3", { after: "e2", gap: 50 }, "→ trembling", { size: 56 }]] },
        { say: "Chapter 3, verse 2. In wrath remember mercy. The Lord's work here is the fall of Babylon and of Israel, and right in the middle of it, he pleads for mercy.",
          draw: [["write", "e4", [120, 530], "in wrath remember mercy", { color: "blue" }],
                 ["under", "e4", "blue"]] },
        { say: "He's thinking, maybe I'm not righteous either. If I keep complaining like this, maybe I'll be cast away too. I'd better pull myself together.",
          draw: [["write", "e5", [120, 650], "maybe I'm not righteous either", { size: 56, color: "gray" }]] },
        { say: "So here's the song he sang, trembling. Although the fig tree shall not blossom, neither shall fruit be in the vines, yet I will rejoice in the Lord.",
          draw: [["write", "e6", [120, 790], "though no fruit, yet I will rejoice", { size: 64, color: "green" }],
                 ["box", "e6", "green"]] }
      ]
    }
  ]
};
