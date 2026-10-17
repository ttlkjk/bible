// Mark whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does.
window.BOARD = {
  scenes: [
    {
      id: "overview", title: "Overview of Mark",
      beats: [
        { say: "So, Mark. More than ninety percent of the Gospel of Mark matches the Gospel of Matthew.",
          draw: [["title", "t", "Overview of Mark"],
                 ["photo", "p1", "../../pansuh/img/p4/image6.jpg", [1080, 170, 440, 248], { tilt: 2 }],
                 ["write", "a1", [100, 300], "90%+ same as Matthew", { color: "red" }]] },
        { say: "Of the four Gospels, it's thought to be the earliest one written. Why? Because it's the shortest.",
          draw: [["write", "a2", [100, 430], "written first", { color: "blue" }],
                 ["write", "a2b", { after: "a2", gap: 50 }, "← shortest", { size: 52, color: "gray" }]] },
        { say: "It was written by Mark, who ministered to the Greeks, so there's no genealogy. The Greeks just weren't interested in Jewish family trees.",
          draw: [["write", "a3", [100, 560], "Mark, minister to Greeks", { size: 56 }],
                 ["write", "a4", { after: "a3", gap: 100 }, "no genealogy", { size: 56, color: "red" }],
                 ["arrow", "a3", "a4"],
                 ["write", "a5", [160, 660], "Jewish genealogy? not interested", { size: 48, color: "gray" }]] },
        { say: "This is Mark's upper room. We call it an upper room, but really, it's just the second floor.",
          draw: [["photo", "p2", "../../pansuh/img/p4/image8.jpg", [1080, 500, 440, 248], { tilt: -2, caption: "Mark's upper room: really a 2nd floor" }],
                 ["write", "a6", [100, 800], "upper room = 2nd floor", { size: 56, color: "blue" }]] }
      ]
    },
    {
      id: "content", title: "What Mark Tells",
      beats: [
        { say: "Here's what's in the Gospel of Mark. John the Baptist's ministry prepares the way for the Christ, and Jesus calls his disciples.",
          draw: [["clear"],
                 ["title", "t", "What Mark tells"],
                 ["write", "b1", [100, 290], "John the Baptist · disciples called", { size: 60 }]] },
        { say: "Then parables about the kingdom of heaven. A lot of things in God's kingdom don't exist on this earth, so they can't be told directly. That's why Jesus keeps saying, the kingdom of heaven is like this.",
          draw: [["write", "b2", [100, 410], "\"The kingdom is like ~\"", { size: 60, color: "blue" }],
                 ["write", "b2b", { after: "b2", gap: 40 }, "always parables", { size: 48, color: "gray" }]] },
        { say: "He heals the sick and people possessed by demons, and with seven loaves and two fish, he feeds four thousand people.",
          draw: [["write", "b3", [100, 530], "healing · 7 loaves, 2 fish (4,000)", { size: 60 }]] },
        { say: "Then Peter's confession of faith. You are the Christ, the Son of the living God. And on the Mount of Transfiguration, Jesus shows his glory.",
          draw: [["write", "b4", [100, 650], "\"Thou art the Christ\"", { size: 60, color: "red" }],
                 ["write", "b4b", { after: "b4", gap: 40 }, "→ glory on the mount", { size: 52 }]] },
        { say: "On the way up to Jerusalem he meets Bartimaeus, and he keeps telling them ahead of time about his suffering. Think about it. If he'd said nothing and then suffered, people could've taken it for an accident.",
          draw: [["write", "b5", [100, 790], "foretells suffering", { size: 56, color: "red" }],
                 ["write", "b5b", { after: "b5", gap: 100 }, "not a mere accident", { size: 56 }],
                 ["arrow", "b5", "b5b"],
                 ["under", "b5b"]] }
      ]
    },
    {
      id: "lastweek", title: "The Last Week",
      beats: [
        { say: "He comes into Jerusalem and cleanses the temple. Then come his teachings from that last week.",
          draw: [["clear"],
                 ["title", "t", "The last week"],
                 ["photo", "p3", "../../pansuh/img/p4/image7.jpg", [1080, 170, 440, 248], { tilt: 2 }],
                 ["write", "c1", [100, 300], "into Jerusalem · temple cleansed", { size: 52 }]] },
        { say: "The great and first commandment. Love God, and love your neighbor.",
          draw: [["write", "c2", [100, 420], "love God · love neighbor", { size: 60, color: "red" }],
                 ["under", "c2"]] },
        { say: "After that comes Mark's teaching on the end times.",
          draw: [["write", "c3", [100, 530], "Mark's end times", { size: 56, color: "gray" }]] },
        { say: "At the house of Simon the leper in Bethany, Mary pours out costly perfume. The other Gospels aren't clear about the place, but Mark names it clearly.",
          draw: [["write", "c4", [100, 650], "Simon's house, Bethany · perfume", { size: 56, color: "blue" }],
                 ["write", "c4b", { after: "c4", gap: 40 }, "clear place!", { size: 52, color: "red" }],
                 ["circle", "c4b"]] },
        { say: "The Last Supper, and then Christ's suffering, resurrection, and ascension. And that's how the Gospel of Mark ends.",
          draw: [["write", "c5", [100, 790], "Last Supper → cross · rising · ascension", { size: 56, color: "green" }]] }
      ]
    }
  ]
};
