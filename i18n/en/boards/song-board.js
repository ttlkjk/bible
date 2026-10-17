// Song of Songs whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does.
// The lecture notes for this lecture have no slide pictures, so no photos are attached.
window.BOARD = {
  scenes: [
    {
      id: "song", title: "The Song of Songs",
      beats: [
        { say: "In Hebrew, the Song of Songs is called Shir Hashirim. It means the song of songs.",
          draw: [["title", "t", "The Song of Songs"],
                 ["write", "a1", [120, 310], "Shir Hashirim", { size: 84, color: "red" }],
                 ["write", "a2", { after: "a1", gap: 50 }, "= song of songs", { size: 64, color: "blue" }]] },
        { say: "Its genre is close to an opera.",
          draw: [["write", "a3", [120, 440], "Genre: close to opera", { size: 64 }],
                 ["under", "a3"]] },
        { say: "But our Korean Bible just writes it all out in one stream, so it is hard to tell who is speaking from where to where. You need to look at an English Bible or a modern translation to understand it.",
          draw: [["write", "a4", [120, 570], "who's speaking?", { size: 60, color: "gray" }],
                 ["write", "a5", { after: "a4", gap: 110 }, "check English / modern Bible", { size: 56, color: "green" }],
                 ["arrow", "a4", "a5"]] },
        { say: "Of the 1005 songs Solomon wrote, the Song of Songs is the most beautiful.",
          draw: [["write", "a6", [120, 720], "most beautiful of Solomon's 1005 songs", { size: 56, color: "red" }],
                 ["circle", "a6"]] }
      ]
    },
    {
      id: "eros", title: "The Beauty of Eros",
      beats: [
        { say: "The Song of Songs shows the beauty of eros that God gave to human beings. It sings of the pure, innocent love between a man and a woman.",
          draw: [["clear"],
                 ["title", "t", "The beauty of eros"],
                 ["write", "b1", [120, 300], "beauty of eros, God's gift", { size: 64, color: "blue" }],
                 ["write", "b2", [120, 410], "pure love of man and woman", { size: 56 }]] },
        { say: "In fact, the Song of Songs expresses sexual love between a man and a woman very directly.",
          draw: [["write", "b3", [120, 540], "very direct language", { size: 64, color: "red" }]] },
        { say: "That is why Jews are not allowed to read the Song of Songs before the age of thirty.",
          draw: [["write", "b4", { after: "b3", gap: 110 }, "not before age 30", { size: 64 }],
                 ["arrow", "b3", "b4"],
                 ["box", "b4"]] },
        { say: "So there was a lot of dispute before it was accepted into the canon. In the end, people saw that the love in the Song of Songs is an analogy of God's love, and it was accepted.",
          draw: [["write", "b5", [120, 690], "canon dispute", { size: 60, color: "gray" }],
                 ["write", "b6", { after: "b5", gap: 110 }, "analogy of God's love → in", { size: 56, color: "green" }],
                 ["arrow", "b5", "b6"]] },
        { say: "An analogy means two things are alike in some way, so you can compare one to the other.",
          draw: [["write", "b7", [180, 790], "analogy = alike, so one can picture the other", { size: 44, color: "gray" }]] }
      ]
    },
    {
      id: "read", title: "Reading the Song",
      beats: [
        { say: "Usually people approach it like this. God's love for us, and Jesus' love for the church: if we put it in terms of a love we can understand, wouldn't it be a love like this?",
          draw: [["clear"],
                 ["title", "t", "How to read it"],
                 ["write", "c1", [120, 300], "God's love · Jesus' love", { size: 60 }],
                 ["write", "c2", [120, 400], "as a love we know?", { size: 60, color: "blue" }]] },
        { say: "Rather than interpreting it verse by verse, the safe way is to understand the love of one man and one woman across the whole book, and then apply that love to God's love.",
          draw: [["write", "c3", [120, 530], "verse by verse", { size: 56, color: "gray" }],
                 ["strike", "c3", "gray"],
                 ["write", "c4", { after: "c3", gap: 110 }, "whole book's love → God's love", { size: 52, color: "green" }],
                 ["arrow", "c3", "c4"]] },
        { say: "So let's understand the Song of Songs as a book that sings of love itself, and move on.",
          draw: [["write", "c5", [120, 680], "a song of love itself", { size: 72, color: "red" }],
                 ["circle", "c5"]] },
        { say: "Everyone, you don't need to read the Song of Songs for now. Now, shall we go on to Ezra chapter 7?",
          draw: [["write", "c6", [180, 800], "no need to read it for now · next: Ezra 7", { size: 44, color: "gray" }]] }
      ]
    }
  ]
};
