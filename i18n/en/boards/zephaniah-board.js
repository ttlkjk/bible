// Zephaniah whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does.
window.BOARD = {
  scenes: [
    {
      id: "name", title: "I Will Utterly Consume",
      beats: [
        { say: "Zephaniah, in Hebrew Tsephanyahu, means 'Yahweh hides.'",
          draw: [["title", "t", "Zephaniah"],
                 ["write", "a1", [120, 290], "Tsephanyahu", { color: "gray" }],
                 ["write", "a2", { after: "a1", gap: 90 }, "Yahweh hides", { color: "blue" }],
                 ["arrow", "a1", "a2"],
                 ["photo", "p1", "img/p2/image11.jpg", [1110, 380, 420, 236], { tilt: -2, caption: "Zephaniah · 640~610" }]] },
        { say: "Chapter 1 verse 1. This is the word that came to Zephaniah in the days of King Josiah. Zephaniah was the great-great-grandson of Hezekiah, his grandson's grandson. So he was of royal blood.",
          draw: [["write", "a3", [120, 420], "Josiah's day · Hezekiah's great-great-grandson", { size: 50 }],
                 ["write", "a4", [120, 520], "= royal line", { size: 56, color: "blue" }]] },
        { say: "But as soon as the author is introduced, what is the very first thing he says? I will utterly consume, I will cut off. In other words, I will wipe them all out.",
          draw: [["write", "a5", [120, 680], "consume · cut off", { size: 96, color: "red" }],
                 ["circle", "a5"]] },
        { say: "As we read the text from here on, underline the words consume and cut off.",
          draw: [["write", "a6", [120, 810], "← underline them in the text", { size: 48, color: "gray" }]] }
      ]
    },
    {
      id: "who", title: "Whom Will He Cut Off?",
      beats: [
        { say: "Who are the people God says he will utterly consume and cut off? First the wicked, and the remnant of Baal.",
          draw: [["clear"],
                 ["title", "t", "Who is cut off (1:2~7)"],
                 ["write", "b1", [120, 290], "the wicked · remnant of Baal"]] },
        { say: "The Chemarim. That word means priests who serve foreign gods. And those who worship the host of heaven on the housetops.",
          draw: [["write", "b2", [120, 400], "Chemarim", { color: "blue" }],
                 ["write", "b3", { after: "b2", gap: 24 }, "(pagan priests)", { size: 48, color: "gray" }],
                 ["write", "b4", { after: "b3", gap: 40 }, "· star worship", { size: 64 }]] },
        { say: "Those who swear by the LORD and also swear by Malcham. Malcham is also called Milcom or Molech. He was a vicious one who made people burn their little children as offerings.",
          draw: [["write", "b5", [120, 530], "swear by the LORD + by Malcham", { color: "red" }],
                 ["write", "b6", [180, 620], "Malcham = Milcom · Molech: children burned as offerings", { size: 46, color: "gray" }]] },
        { say: "Those who turn back from following the LORD. And even those who have not sought the LORD nor inquired of him.",
          draw: [["write", "b7", [120, 760], "those who don't seek or inquire", { size: 64, color: "red" }],
                 ["under", "b7"]] }
      ]
    },
    {
      id: "hide", title: "Hidden in the Tiger's Den",
      beats: [
        { say: "Chapter 2 verse 3. Seek the LORD, all you humble of the land, who have kept his ordinances. Seek righteousness. Seek humility. It may be that you will be hidden in the day of the LORD's anger.",
          draw: [["clear"],
                 ["title", "t", "You will be hidden (2:3)"],
                 ["write", "c1", [120, 290], "seek righteousness, humility → you'll be hidden", { size: 56 }]] },
        { say: "Keeping the LORD's ordinances is what humility is. Bowing and scraping to look humble is hypocrisy, a fake goodness.",
          draw: [["write", "c2", [120, 410], "humility = keeping ordinances", { size: 64, color: "blue" }],
                 ["write", "c3", { after: "c2", gap: 50 }, "bowing = hypocrisy", { size: 56, color: "gray" }],
                 ["strike", "c3", "gray"]] },
        { say: "He doesn't hide just anyone. So how does he hide them? When a fierce beast like a tiger is mauling everything in its path, where is the safest place? The tiger's den.",
          draw: [["write", "c4", [120, 550], "safest place =", { size: 60 }],
                 ["write", "c5", { after: "c4", gap: 40 }, "tiger's den", { size: 84, color: "red" }],
                 ["circle", "c5"]] },
        { say: "When God sent the tiger called Babylon to maul the whole world, he moved his people into Babylon. That is how he hid them.",
          draw: [["write", "c6", [120, 700], "moved into Babylon = hidden", { color: "green" }],
                 ["under", "c6", "green"]] },
        { say: "From chapter 2 verse 4 on, the message continues that all the nations will be destroyed.",
          draw: [["write", "c7", [120, 820], "2:4 on: all nations destroyed", { size: 48, color: "gray" }]] }
      ]
    },
    {
      id: "joy", title: "God Who Cannot Contain His Joy",
      beats: [
        { say: "Chapter 3 verse 17. He cannot contain his joy over you. He will rest in his love for you, and he will rejoice over you with singing.",
          draw: [["clear"],
                 ["title", "t", "Cannot contain his joy (3:17)"],
                 ["write", "d1", [120, 300], "cannot contain his joy", { size: 72, color: "green" }],
                 ["write", "d2", [120, 410], "rests in his love · rejoices with singing", { size: 56 }]] },
        { say: "But this is not a word spoken to us.",
          draw: [["write", "d3", [120, 540], "to us?", { color: "gray" }],
                 ["strike", "d3"]] },
        { say: "He says it as he looks at the people who went into Babylonian exile, came to their senses, and returned. Because of them he cannot contain his joy.",
          draw: [["write", "d4", { after: "d3", gap: 60 }, "exiles who woke up and returned", { size: 64, color: "blue" }],
                 ["box", "d4", "blue"]] },
        { say: "Remember, I said it matters who a word was spoken to. Now we move on to Jeremiah.",
          draw: [["write", "d5", [120, 720], "To whom? That matters!", { size: 72, color: "red" }],
                 ["under", "d5"]] }
      ]
    }
  ]
};
