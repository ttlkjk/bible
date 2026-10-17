// Psalms whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does.
window.BOARD = {
  scenes: [
    {
      id: "hymn", title: "The Hebrew Hymnal",
      beats: [
        { say: "The Psalms are not so much poetry in the usual sense. They are the hymnal of the Hebrews.",
          draw: [["title", "t", "The Hebrew hymnal"],
                 ["write", "a1", [120, 310], "Psalms =", { size: 72 }],
                 ["write", "a2", { after: "a1", gap: 30 }, "hymnal", { size: 88, color: "red" }],
                 ["circle", "a2"],
                 ["photo", "p1", "img/p3/image19.jpg", [1080, 190, 440, 248], { tilt: 2 }]] },
        { say: "It is a collection of the hymns the people of Israel sang in the time of Zerubbabel's temple.",
          draw: [["write", "a3", [120, 440], "hymnal of Zerubbabel's temple era", { size: 56, color: "blue" }]] },
        { say: "Some had melodies, and some were just lyrics, like literature. Today we cannot know the melodies.",
          draw: [["write", "a4", [120, 570], "melodies", { size: 60 }],
                 ["write", "a5", { after: "a4", gap: 110 }, "unknown today", { size: 60, color: "gray" }],
                 ["arrow", "a4", "a5"]] },
        { say: "And the Psalms were not written all at once, nor collected all at once.",
          draw: [["write", "a6", [120, 710], "not written or collected at once", { size: 60, color: "red" }],
                 ["under", "a6"]] }
      ]
    },
    {
      id: "books", title: "A Thousand Years, Five Books",
      beats: [
        { say: "The writing took about a thousand years, from Moses down to the descendants of Asaph.",
          draw: [["clear"],
                 ["title", "t", "1000 years, five books"],
                 ["write", "b1", [120, 300], "Moses → sons of Asaph: ~1000 yrs", { size: 60, color: "blue" }]] },
        { say: "It was edited in five stages. Psalms 1 to 41, 42 to 72, 73 to 89,",
          draw: [["write", "b2", [200, 420], "Ps 1 ~ 41", { size: 56 }],
                 ["write", "b3", [200, 510], "Ps 42 ~ 72", { size: 56 }],
                 ["write", "b4", [200, 600], "Ps 73 ~ 89", { size: 56 }]] },
        { say: "90 to 106, and 107 to 150.",
          draw: [["write", "b5", [200, 690], "Ps 90 ~ 106", { size: 56 }],
                 ["write", "b6", [200, 780], "Ps 107 ~ 150", { size: 56 }],
                 ["write", "b7", { at: [1050, 600] }, "5 books", { anchor: "middle", size: 110, color: "red" }],
                 ["circle", "b7"]] },
        { say: "Of all the books in our Bible, this is the one that took the longest to complete.",
          draw: [["write", "b8", { at: [1050, 760] }, "took the longest", { anchor: "middle", size: 60, color: "green" }]] }
      ]
    },
    {
      id: "authors", title: "The Authors of the Psalms",
      beats: [
        { say: "Looking at the authors, almost half, about 73 psalms, are psalms of David.",
          draw: [["clear"],
                 ["title", "t", "Authors of the Psalms"],
                 ["write", "c1", [120, 300], "David 73 ≒ half", { size: 72, color: "red" }],
                 ["photo", "p2", "img/p3/image20.jpg", [1080, 190, 440, 248], { tilt: -2 }]] },
        { say: "He was a soldier and a statesman, and yet he had this musical gift.",
          draw: [["write", "c2", [120, 410], "soldier · statesman + music", { size: 56 }]] },
        { say: "He could leave so many psalms because he thought through his prayers, organized them, and always wrote them down.",
          draw: [["write", "c3", [120, 540], "always wrote his prayers down", { size: 64, color: "green" }],
                 ["under", "c3", "green"]] },
        { say: "Besides David, there are 12 by the sons of Asaph, 10 by the sons of Korah, 2 by Solomon, and others by Moses, Heman, Ethan, and Ezra, and some by unknown authors.",
          draw: [["write", "c4", [120, 660], "Asaph 12 · Korah 10 · Solomon 2", { size: 56 }],
                 ["write", "c5", [120, 760], "Moses · Heman · Ethan · Ezra · unknown", { size: 48, color: "gray" }]] }
      ]
    },
    {
      id: "ps119", title: "Psalm 119",
      beats: [
        { say: "Psalm 119 in particular is thought to have been written by Ezra, and it follows the order of the Hebrew alphabet.",
          draw: [["clear"],
                 ["title", "t", "Psalm 119"],
                 ["write", "d1", [120, 300], "Ezra (?)", { size: 64 }],
                 ["write", "d2", { after: "d1", gap: 60 }, "alphabetical = acrostic", { size: 64, color: "blue" }],
                 ["box", "d2"]] },
        { say: "And almost every verse has a word like your law, testimonies, ways, precepts, statutes, commandments, judgments, word, ordinances, or your truth.",
          draw: [["write", "d3", [120, 440], "law · testimonies · ways · precepts · statutes", { size: 50 }],
                 ["write", "d4", [120, 540], "commands · judgments · word · ordinances · truth", { size: 50 }]] },
        { say: "In a word, it is a psalm in praise of the law.",
          draw: [["write", "d5", [120, 700], "a psalm praising the law", { size: 76, color: "red" }],
                 ["circle", "d5"]] }
      ]
    },
    {
      id: "kinds", title: "Kinds of Psalms",
      beats: [
        { say: "Let's look at the kinds of psalms. A mizmor is a pure poem, and a shir is a song. The Song of Songs is called Shir Hashirim.",
          draw: [["clear"],
                 ["title", "t", "Kinds of psalms"],
                 ["write", "e1", [120, 300], "mizmor: pure poem"],
                 ["write", "e2", [120, 420], "shir: song"],
                 ["write", "e2b", { after: "e2", gap: 40 }, "(Shir Hashirim = Song of Songs)", { size: 44, color: "gray" }]] },
        { say: "A maskil is a meditation, and a miktam is a satire.",
          draw: [["write", "e3", [120, 540], "maskil: meditation"],
                 ["write", "e4", [120, 660], "miktam: satire"]] },
        { say: "A tefillah is a prayer, and a tehillah is a praise.",
          draw: [["write", "e5", [900, 540], "tefillah: prayer", { color: "blue" }],
                 ["write", "e6", [900, 660], "tehillah: praise", { color: "blue" }]] },
        { say: "There are also psalms of confession of faith, wisdom psalms, historical psalms, teaching psalms, and even psalms of cursing.",
          draw: [["write", "e7", [120, 800], "+ confession · wisdom · history · teaching · curse", { size: 48, color: "gray" }]] }
      ]
    },
    {
      id: "history", title: "Easier If You Know the History",
      beats: [
        { say: "Some psalms are easier to understand if you know the history well.",
          draw: [["clear"],
                 ["title", "t", "Know the history"],
                 ["write", "f0", [120, 290], "history + Psalms = easier", { color: "red" }]] },
        { say: "Psalm 34 is the psalm David wrote after he pretended to be mad before Abimelech and was driven out.",
          draw: [["write", "f1", [120, 410], "Ps 34", { color: "blue" }],
                 ["write", "f1b", { after: "f1", gap: 40 }, "feigned madness before Abimelech", { size: 52 }]] },
        { say: "Psalm 51 is from when the prophet Nathan came to David after he slept with Bathsheba.",
          draw: [["write", "f2", [120, 530], "Ps 51", { color: "blue" }],
                 ["write", "f2b", { after: "f2", gap: 40 }, "Nathan comes after Bathsheba", { size: 52 }]] },
        { say: "Psalm 126 is from when they returned from captivity,",
          draw: [["write", "f3", [120, 650], "Ps 126", { color: "blue" }],
                 ["write", "f3b", { after: "f3", gap: 40 }, "return from captivity", { size: 52, color: "green" }]] },
        { say: "and Psalm 137 was written when they were mocked during the Babylonian Exile.",
          draw: [["write", "f4", [120, 770], "Ps 137", { color: "blue" }],
                 ["write", "f4b", { after: "f4", gap: 40 }, "mocked in Babylonian Exile", { size: 52, color: "red" }]] }
      ]
    }
  ]
};
