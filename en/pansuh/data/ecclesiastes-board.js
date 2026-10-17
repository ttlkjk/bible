// Ecclesiastes whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does.
window.BOARD = {
  scenes: [
    {
      id: "title", title: "Solomon on Life",
      beats: [
        { say: "So, Ecclesiastes. It's Solomon's take on life.",
          draw: [["title", "t", "Solomon on life"],
                 ["photo", "p1", "../../pansuh/img/p3/image22.jpg", [1080, 190, 440, 248], { tilt: 2 }],
                 ["write", "a1", [120, 300], "Eccl = Solomon on life", { size: 64, color: "blue" }]] },
        { say: "The title is Divrei Kohelet. That means the words of the teacher of the assembly. Today we'd just call it a sermon.",
          draw: [["write", "a2", [120, 420], "Divrei Kohelet", { size: 64 }],
                 ["write", "a3", [120, 520], "= words of the assembly's teacher = sermon", { size: 50, color: "red" }]] },
        { say: "Now, the key to Ecclesiastes is at the end. If you read up to chapter 3 and stop there, it turns into Buddhism.",
          draw: [["write", "a4", [120, 660], "the key is at the end", { size: 72, color: "red" }],
                 ["box", "a4"]] },
        { say: "Vanity of vanities, all is vanity. It's all for nothing. But you can't stop there.",
          draw: [["write", "a5", [120, 790], "only to ch. 3 = \"all for nothing\"", { size: 56, color: "gray" }],
                 ["strike", "a5", "gray"]] }
      ]
    },
    {
      id: "world", title: "No Happiness in the World",
      beats: [
        { say: "You just can't find happiness in worldly things.",
          draw: [["clear"],
                 ["title", "t", "No happiness in the world"],
                 ["write", "b1", [120, 300], "worldly things ≠ happiness", { size: 72, color: "red" }]] },
        { say: "And Solomon actually tried most of what we chase today. Riches, honor, power, wisdom, knowledge, all kinds of women, pleasure, and fun.",
          draw: [["write", "b2", [120, 430], "riches · honor · power · wisdom · knowledge", { size: 56 }],
                 ["write", "b3", [120, 530], "all kinds of women · pleasure · enjoyment", { size: 56 }]] },
        { say: "He says he didn't hold back anything his heart or his eyes wanted.",
          draw: [["write", "b4", [120, 660], "denied himself nothing", { size: 60, color: "blue" }]] },
        { say: "But none of it made him happy.",
          draw: [["write", "b5", { after: "b4", gap: 110 }, "no happiness", { size: 60, color: "red" }],
                 ["arrow", "b4", "b5"],
                 ["under", "b5"]] }
      ]
    },
    {
      id: "days", title: "Good Days, Hard Days",
      beats: [
        { say: "Chapter 7, verse 14. In the day of prosperity be joyful, and in the day of adversity consider. God has set the one alongside the other.",
          draw: [["clear"],
                 ["title", "t", "Good days, hard days"],
                 ["write", "c1", [120, 300], "good day → rejoice", { size: 64, color: "green" }],
                 ["write", "c2", [120, 410], "hard day → consider", { size: 64, color: "blue" }]] },
        { say: "So we always need to live thoughtfully. Friends, this one really matters. Unless hard days come, people hardly ever stop and think.",
          draw: [["write", "c3", [120, 540], "stop and think", { size: 72, color: "red" }],
                 ["circle", "c3"]] },
        { say: "Solomon figured it out too. Chapter 9, verse 9. Live joyfully with the wife whom you love, all the days of your life of vanity which God has given you, for that is your portion.",
          draw: [["write", "c4", [120, 680], "enjoy life with your wife = your portion", { size: 54, color: "green" }]] },
        { say: "If he'd known that early on, he wouldn't have brought in a thousand women, right? He fell so far. Only at the very end did he come to his senses, write Ecclesiastes as his testimony, and die.",
          draw: [["write", "c5", [180, 790], "had he known early: no 1,000 women", { size: 48, color: "gray" }]] }
      ]
    },
    {
      id: "end", title: "The Conclusion of Ecclesiastes",
      beats: [
        { say: "So you've got to read the last part. Chapter 11, verse 9. Rejoice, young man, and walk in the ways of your heart and in the sight of your eyes. But know that for all these things God will bring you into judgment.",
          draw: [["clear"],
                 ["title", "t", "Conclusion of Ecclesiastes"],
                 ["write", "d1", [120, 300], "Rejoice, young man", { size: 60 }],
                 ["write", "d2", { after: "d1", gap: 40 }, "but know: judgment", { size: 60, color: "red" }]] },
        { say: "You're not thinking, well, I'm not young anymore, so I'm off the hook, are you?",
          draw: [["write", "d3", [180, 395], "\"I'm not young, so I'm fine?\"", { size: 44, color: "gray" }]] },
        { say: "At the end of chapter 12, it says this. This is the end of the matter. All has been heard. Fear God, and keep his commandments, for this is the whole duty of man.",
          draw: [["write", "d4", [120, 530], "fear God + keep his commands", { size: 64, color: "blue" }],
                 ["write", "d5", { after: "d4", gap: 40 }, "= duty", { size: 80, color: "red" }],
                 ["circle", "d5"]] },
        { say: "So vanity isn't the conclusion. Know the whole duty of man, and always live with the judgment in mind. That's where Ecclesiastes lands.",
          draw: [["write", "d6", [120, 680], "vanity", { size: 60, color: "gray" }],
                 ["strike", "d6", "gray"],
                 ["write", "d7", { after: "d6", gap: 110 }, "duty + remember judgment", { size: 64, color: "green" }],
                 ["arrow", "d6", "d7"],
                 ["under", "d7", "green"]] }
      ]
    }
  ]
};
