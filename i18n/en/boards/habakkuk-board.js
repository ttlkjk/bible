// Habakkuk whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does.
window.BOARD = {
  scenes: [
    {
      id: "context", title: "A Prophet Who Misread the Room",
      beats: [
        { say: "Habakkuk was a prophet who served in the same period as Zephaniah and Jeremiah.",
          draw: [["title", "t", "Habakkuk"],
                 ["write", "a1", [120, 290], "same time as Zephaniah · Jeremiah", { size: 56, color: "blue" }],
                 ["photo", "p1", "img/p2/image11.jpg", [1110, 160, 420, 236], { tilt: 2, caption: "OT Prophets" }]] },
        { say: "The Babylonian army has come and surrounded Jerusalem. People are being killed and carried away.",
          draw: [["write", "a2", [120, 410], "Babylonian army surrounds Jerusalem", { size: 56 }]] },
        { say: "If you have lost a war and you are under siege, what does that mean? It is God's discipline. And it is discipline of a middle level.",
          draw: [["write", "a3", [120, 540], "= God's discipline", { color: "red" }],
                 ["write", "a4", { after: "a3", gap: 40 }, "(medium level)", { size: 48, color: "gray" }],
                 ["under", "a3"]] },
        { say: "God held back His anger again and again, and only then disciplined them. Even if they took the beating quietly and repented, it would not be enough.",
          draw: [["write", "a5", [120, 660], "time to take the rod and repent", { size: 56, color: "green" }]] },
        { say: "But Habakkuk argues with God. You are God, so why do You just stand by? The wicked are tormenting the righteous. Is this normal?",
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
        { say: "In Habakkuk's mind, the wicked are Babylon and the righteous are Jerusalem. He is fuming.",
          draw: [["write", "b3", [120, 520], "wicked = Babylon", { color: "red" }],
                 ["write", "b4", { after: "b3", gap: 90 }, "righteous = Jerusalem", { color: "blue" }]] },
        { say: "But God says, I sent them. I raised up the Chaldeans, that bitter and hasty nation.",
          draw: [["write", "b5", [120, 650], "God: \"I sent them\"", { color: "red" }],
                 ["box", "b5", "red"]] },
        { say: "And then He says, I was going to destroy them anyway. Because they tormented you far too much.",
          draw: [["write", "b6", { after: "b5", gap: 60 }, "punished for going too far", { size: 52, color: "gray" }]] },
        { say: "Habakkuk boldly says, I will climb up to the watchtower and hear what God answers.",
          draw: [["write", "b7", [120, 790], "\"I'll stand on the tower and hear\"", { size: 60 }]] }
      ]
    },
    {
      id: "answer", title: "No One Is Righteous",
      beats: [
        { say: "God is dumbfounded, and answers him. The vision is for an appointed time. Though it tarry, it will surely come. Until then, Babylon is allowed to strut around.",
          draw: [["clear"],
                 ["title", "t", "God's answer (ch. 2)"],
                 ["write", "c1", [120, 290], "appointed time · though it tarry, surely", { size: 56, color: "blue" }]] },
        { say: "Chapter 2, verse 4. The just shall live by his faith. The righteous will not die, because of their faith.",
          draw: [["write", "c2", [120, 420], "the just shall live by faith (2:4)", { size: 64, color: "red" }],
                 ["under", "c2"]] },
        { say: "But people died yesterday too! Those were not righteous. Many died today as well! They were not righteous either.",
          draw: [["write", "c3", [120, 540], "\"People died yesterday!\"", { size: 52 }],
                 ["write", "c4", { after: "c3", gap: 40 }, "→ not righteous", { size: 52, color: "gray" }]] },
        { say: "Then is there no one righteous? None. Not even one? Not even one.",
          draw: [["write", "c5", [120, 650], "\"Not even one?\"", { size: 52 }],
                 ["write", "c6", { after: "c5", gap: 40 }, "→ not even one", { size: 52, color: "red" }]] },
        { say: "Habakkuk said they were the righteous and Babylon was the wicked, and he wanted the righteous saved. But God says there is not a single righteous person. A Jerusalem with not one righteous person left is no different from Babylon.",
          draw: [["write", "c7", [120, 790], "Jerusalem = no different from Babylon", { size: 64, color: "red" }],
                 ["box", "c7", "red"]] }
      ]
    },
    {
      id: "glory", title: "Those Who Will Bite Babylon",
      beats: [
        { say: "So look at verse 6. Those who will bite Babylon will rise up suddenly.",
          draw: [["clear"],
                 ["title", "t", "Babylon falls too"],
                 ["write", "d1", [120, 300], "those who bite Babylon will rise (2:6)", { size: 64 }]] },
        { say: "And in fact, in 539 B.C., Babylon fell to Cyrus, king of Persia.",
          draw: [["write", "d2", [120, 430], "539 B.C. · Cyrus", { size: 72, color: "blue" }],
                 ["circle", "d2", "blue"]] },
        { say: "Chapter 2, verse 14. For the earth shall be filled with the knowledge of the glory of the Lord, as the waters cover the sea. When they see mighty Babylon fall, all the nations will acknowledge the glory of the Lord.",
          draw: [["write", "d3", [120, 570], "as the waters cover the sea (2:14)", { size: 68, color: "green" }]] },
        { say: "This has already been fulfilled. So it is not something that is still going to happen. That song does not fit.",
          draw: [["write", "d4", [120, 700], "already fulfilled", { color: "red" }],
                 ["under", "d4"],
                 ["write", "d5", { after: "d4", gap: 50 }, "\"That song doesn't fit\"", { size: 52, color: "gray" }]] }
      ]
    },
    {
      id: "tremble", title: "A Song Sung Trembling",
      beats: [
        { say: "Having heard this much, Habakkuk starts to tremble. Why does Babylon fall? Because it tormented Israel far too much.",
          draw: [["clear"],
                 ["title", "t", "Habakkuk's prayer (ch. 3)"],
                 ["write", "e1", [120, 290], "why Babylon falls = tormented Israel too much", { size: 50 }]] },
        { say: "Then it is already settled that Israel will be trampled by Babylon, isn't it? Realizing this, his whole body shakes.",
          draw: [["write", "e2", [120, 400], "trampling is settled", { color: "red" }],
                 ["write", "e3", { after: "e2", gap: 50 }, "→ trembling", { size: 56 }]] },
        { say: "Chapter 3, verse 2. In wrath remember mercy. The Lord's work is the fall of Babylon and of Israel, and in the middle of it, he pleads for mercy.",
          draw: [["write", "e4", [120, 530], "in wrath remember mercy", { color: "blue" }],
                 ["under", "e4", "blue"]] },
        { say: "He thought, maybe I am not righteous either. If I keep complaining like this, maybe I will be cast away too. I had better pull myself together.",
          draw: [["write", "e5", [120, 650], "maybe I'm not righteous either", { size: 56, color: "gray" }]] },
        { say: "So this is the song he sang, trembling. Although the fig tree shall not blossom, neither shall fruit be in the vines, yet I will rejoice in the Lord.",
          draw: [["write", "e6", [120, 790], "though no fruit, yet I will rejoice", { size: 64, color: "green" }],
                 ["box", "e6", "green"]] }
      ]
    }
  ]
};
