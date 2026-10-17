// Nahum whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does.
window.BOARD = {
  scenes: [
    {
      id: "nineveh", title: "Warning of Nineveh's Fall",
      beats: [
        { say: "The book of Nahum warns of the destruction of Nineveh, that is, Assyria. It is the warning of a jealous and avenging God that Nineveh will fall.",
          draw: [["title", "t", "Nahum Overview"],
                 ["write", "a1", [120, 290], "Nineveh (Assyria) will fall", { color: "red" }],
                 ["under", "a1"]] },
        { say: "Nineveh is the city built by a man named Nimrod in Genesis chapter 10. Today it is northern Iraq.",
          draw: [["write", "a2", [120, 410], "Gen 10: built by Nimrod", { size: 56 }],
                 ["write", "a3", { below: "a2", gap: 80 }, "= northern Iraq", { size: 56, color: "blue" }],
                 ["photo", "p1", "../../pansuh/img/p2/image21.jpg", [1100, 190, 420, 237], { tilt: 2, caption: "Nineveh · northern Iraq" }]] },
        { say: "In 1845, the British archaeologist Layard confirmed that Nineveh was a city that really existed in history.",
          draw: [["write", "a4", [120, 620], "1845: confirmed by Layard", { size: 56 }]] },
        { say: "Through Jonah's preaching, it was spared for about 150 more years. But it did evil again, and the book says it will finally be destroyed.",
          draw: [["write", "a5", [120, 760], "Jonah preaches → +150 yrs", { size: 52, color: "green" }],
                 ["write", "a6", { after: "a5", gap: 100 }, "evil again → fall", { size: 56, color: "red" }],
                 ["arrow", "a5", "a6"]] }
      ]
    },
    {
      id: "comfort", title: "Nahum = Comfort",
      beats: [
        { say: "The name Nahum means comfort.",
          draw: [["clear"],
                 ["title", "t", "Nahum = Comfort"],
                 ["write", "b1", [120, 300], "Nahum", { size: 84 }],
                 ["write", "b2", { after: "b1", gap: 40 }, "= comfort", { size: 84, color: "blue" }],
                 ["box", "b2", "blue"]] },
        { say: "The fall of Nineveh was a comfort to the Jews. It was like hearing, under Japanese colonial rule, the news that Japan was falling.",
          draw: [["write", "b3", [120, 440], "Nineveh's fall", { size: 60 }],
                 ["write", "b4", { after: "b3", gap: 110 }, "comfort for the Jews", { size: 60, color: "green" }],
                 ["arrow", "b3", "b4"],
                 ["write", "b5", { below: "b3", gap: 80 }, "(like news of Japan's fall under colonial rule)", { size: 46, color: "gray" }]] },
        { say: "Chapter 1, verse 1: the vision of Nahum the Elkoshite. All we know about Nahum is that he was an Elkoshite.",
          draw: [["write", "b6", [120, 660], "an Elkoshite — that's all we know", { size: 56 }]] },
        { say: "A warning means that if they turn back, they may still be forgiven. God is still giving them a chance to repent.",
          draw: [["write", "b7", [120, 790], "warning = still a chance to repent", { size: 64, color: "red" }],
                 ["circle", "b7"]] }
      ]
    },
    {
      id: "jealous", title: "A Jealous God",
      beats: [
        { say: "Chapter 1, verse 2: The Lord is a jealous God and avenges. He says it straight out, with no lead-in, doesn't he?",
          draw: [["clear"],
                 ["title", "t", "A Jealous and Avenging God"],
                 ["write", "c1", [120, 300], "1:2 jealous · avenging · wrath", { size: 64, color: "red" }]] },
        { say: "If you have only looked at the God of love, a God like this feels unfamiliar, doesn't it?",
          draw: [["write", "c2", [120, 420], "only knew the God of love… strange?", { size: 52, color: "gray" }]] },
        { say: "In verse 8, where it speaks of an overflowing flood, that water means two things.",
          draw: [["write", "c3", [120, 540], "v. 8 overflowing flood", { color: "blue" }],
                 ["under", "c3", "blue"]] },
        { say: "First, Nineveh was invaded by Babylon and destroyed in 612 B.C.",
          draw: [["write", "c4", [160, 660], "① 612 B.C. Babylon invades", { size: 56 }]] },
        { say: "Second, after that, real water actually flooded and leveled the city of Nineveh to the ground.",
          draw: [["write", "c5", [160, 780], "② real flood → leveled flat", { size: 56 }]] }
      ]
    },
    {
      id: "pride", title: "Why It Fell",
      beats: [
        { say: "Why was Assyria destroyed? In 721 B.C., Shalmaneser, king of Assyria, destroyed Israel.",
          draw: [["clear"],
                 ["title", "t", "Assyria's Pride"],
                 ["write", "d1", [120, 290], "721 B.C. Shalmaneser destroys Israel", { size: 56 }]] },
        { say: "About eight years later, they came up to swallow Judah too, and said: Who among all the gods of the countries has delivered their country out of my hand, that the Lord should deliver Jerusalem out of my hand?",
          draw: [["write", "d2", [120, 410], "\"Who can deliver from my hand?\"", { size: 64, color: "red" }],
                 ["write", "d3", { after: "d2", gap: 30 }, "(2 Kgs 18:33~35)", { size: 44, color: "gray" }]] },
        { say: "Because of this arrogance, God struck down 185,000 Assyrian soldiers in a single night.",
          draw: [["write", "d4", [120, 530], "pride", { size: 72, color: "red" }],
                 ["circle", "d4"],
                 ["write", "d5", { after: "d4", gap: 110 }, "185,000 dead overnight", { size: 60 }],
                 ["arrow", "d4", "d5"]] },
        { say: "Sennacherib, king of Assyria, went home and was killed by his own sons, and Assyria slowly went down the road to ruin. The book of Nahum was probably written around this time.",
          draw: [["write", "d6", [120, 660], "Sennacherib killed by sons → road to ruin", { size: 52 }],
                 ["write", "d7", { below: "d6", gap: 70 }, "Nahum written around then", { size: 46, color: "gray" }]] },
        { say: "God judges not only religious wrongs, but also ethical and moral wrongs.",
          draw: [["write", "d8", [120, 820], "He judges moral wrongs too", { size: 60, color: "blue" }],
                 ["box", "d8", "blue"]] }
      ]
    }
  ]
};
