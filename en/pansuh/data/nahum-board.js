// Nahum whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does.
window.BOARD = {
  scenes: [
    {
      id: "nineveh", title: "Warning of Nineveh's Fall",
      beats: [
        { say: "Okay, Nahum. This little book is a warning that Nineveh, that's Assyria, is going to be destroyed. It's a jealous, avenging God saying, Nineveh will fall.",
          draw: [["title", "t", "Nahum Overview"],
                 ["write", "a1", [120, 290], "Nineveh (Assyria) will fall", { color: "red" }],
                 ["under", "a1"]] },
        { say: "Now, Nineveh is the city a man named Nimrod built, back in Genesis chapter 10. Today, that's northern Iraq.",
          draw: [["write", "a2", [120, 410], "Gen 10: built by Nimrod", { size: 56 }],
                 ["write", "a3", { below: "a2", gap: 80 }, "= northern Iraq", { size: 56, color: "blue" }],
                 ["photo", "p1", "../../pansuh/img/p2/image21.jpg", [1100, 190, 420, 237], { tilt: 2, caption: "Nineveh · northern Iraq" }]] },
        { say: "And in eighteen forty-five, a British archaeologist named Layard confirmed it. Nineveh was a real city, right there in history.",
          draw: [["write", "a4", [120, 620], "1845: confirmed by Layard", { size: 56 }]] },
        { say: "Remember Jonah? Because of his preaching, the city was spared for about a hundred and fifty more years. But then it went back to doing evil, and this book says, this time it'll really fall.",
          draw: [["write", "a5", [120, 760], "Jonah preaches → +150 yrs", { size: 52, color: "green" }],
                 ["write", "a6", { after: "a5", gap: 100 }, "evil again → fall", { size: 56, color: "red" }],
                 ["arrow", "a5", "a6"]] }
      ]
    },
    {
      id: "comfort", title: "Nahum = Comfort",
      beats: [
        { say: "So, the name Nahum. It means comfort.",
          draw: [["clear"],
                 ["title", "t", "Nahum = Comfort"],
                 ["write", "b1", [120, 300], "Nahum", { size: 84 }],
                 ["write", "b2", { after: "b1", gap: 40 }, "= comfort", { size: 84, color: "blue" }],
                 ["box", "b2", "blue"]] },
        { say: "Why comfort? Because Nineveh's fall was good news for the Jews. Think of hearing, under Japanese colonial rule, that Japan was falling. That kind of news.",
          draw: [["write", "b3", [120, 440], "Nineveh's fall", { size: 60 }],
                 ["write", "b4", { after: "b3", gap: 110 }, "comfort for the Jews", { size: 60, color: "green" }],
                 ["arrow", "b3", "b4"],
                 ["write", "b5", { below: "b3", gap: 80 }, "(like news of Japan's fall under colonial rule)", { size: 46, color: "gray" }]] },
        { say: "Chapter 1 verse 1 says, the vision of Nahum the Elkoshite. And honestly, that's all we know about him. He was an Elkoshite.",
          draw: [["write", "b6", [120, 660], "an Elkoshite — that's all we know", { size: 56 }]] },
        { say: "Here's the thing about a warning. If they turn back, they can still be forgiven. So God's still giving them a chance to repent.",
          draw: [["write", "b7", [120, 790], "warning = still a chance to repent", { size: 64, color: "red" }],
                 ["circle", "b7"]] }
      ]
    },
    {
      id: "jealous", title: "A Jealous God",
      beats: [
        { say: "Chapter 1 verse 2. The Lord is a jealous God, and he avenges. No warm-up, no lead-in. He just says it, doesn't he?",
          draw: [["clear"],
                 ["title", "t", "A Jealous and Avenging God"],
                 ["write", "c1", [120, 300], "1:2 jealous · avenging · wrath", { size: 64, color: "red" }]] },
        { say: "If you've only ever looked at the God of love, a God like this feels a bit strange, doesn't it?",
          draw: [["write", "c2", [120, 420], "only knew the God of love… strange?", { size: 52, color: "gray" }]] },
        { say: "In verse 8, there's an overflowing flood. And that water means two things.",
          draw: [["write", "c3", [120, 540], "v. 8 overflowing flood", { color: "blue" }],
                 ["under", "c3", "blue"]] },
        { say: "First, Nineveh was invaded by Babylon and destroyed, in six hundred twelve B.C.",
          draw: [["write", "c4", [160, 660], "① 612 B.C. Babylon invades", { size: 56 }]] },
        { say: "Second, after that, real water actually flooded the city and leveled Nineveh flat to the ground.",
          draw: [["write", "c5", [160, 780], "② real flood → leveled flat", { size: 56 }]] }
      ]
    },
    {
      id: "pride", title: "Why It Fell",
      beats: [
        { say: "So why was Assyria destroyed? Well, in seven twenty-one B.C., Shalmaneser, the king of Assyria, destroyed Israel.",
          draw: [["clear"],
                 ["title", "t", "Assyria's Pride"],
                 ["write", "d1", [120, 290], "721 B.C. Shalmaneser destroys Israel", { size: 56 }]] },
        { say: "About eight years later, they came up to swallow Judah too. And they said, Who among all the gods of the countries has delivered their country out of my hand, that the Lord should deliver Jerusalem out of my hand?",
          draw: [["write", "d2", [120, 410], "\"Who can deliver from my hand?\"", { size: 64, color: "red" }],
                 ["write", "d3", { after: "d2", gap: 30 }, "(2 Kgs 18:33~35)", { size: 44, color: "gray" }]] },
        { say: "That's pride, isn't it? And because of it, God struck down a hundred and eighty-five thousand Assyrian soldiers in a single night.",
          draw: [["write", "d4", [120, 530], "pride", { size: 72, color: "red" }],
                 ["circle", "d4"],
                 ["write", "d5", { after: "d4", gap: 110 }, "185,000 dead overnight", { size: 60 }],
                 ["arrow", "d4", "d5"]] },
        { say: "Sennacherib, the king of Assyria, went home, and his own sons killed him. From there, Assyria slowly slid toward ruin. Nahum was probably written right around then.",
          draw: [["write", "d6", [120, 660], "Sennacherib killed by sons → road to ruin", { size: 52 }],
                 ["write", "d7", { below: "d6", gap: 70 }, "Nahum written around then", { size: 46, color: "gray" }]] },
        { say: "So here's the takeaway. God doesn't just judge religious wrongs. He judges ethical and moral wrongs too.",
          draw: [["write", "d8", [120, 820], "He judges moral wrongs too", { size: 60, color: "blue" }],
                 ["box", "d8", "blue"]] }
      ]
    }
  ]
};
