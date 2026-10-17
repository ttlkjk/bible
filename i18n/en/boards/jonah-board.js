// Jonah whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does.
window.BOARD = {
  scenes: [
    {
      id: "review", title: "The Prophets Again",
      beats: [
        { say: "Do you remember this chart? Let's go over the Prophets one more time before we start.",
          draw: [["title", "t", "The Prophets again"],
                 ["photo", "p1", "img/p2/image1.jpg", [1060, 190, 480, 270], { tilt: 2 }]] },
        { say: "Remember, I said prophet, foreteller, and seer all mean the same thing.",
          draw: [["write", "a1", [100, 300], "prophet = foreteller = seer", { size: 60 }]] },
        { say: "A seer tells what he saw first, a prophet tells what he knew first, and foretelling means saying it in advance. Saying what? The scene of punishment, the punishment to come, that punishment is coming.",
          draw: [["write", "a2", [100, 410], "seer: saw first", { size: 52 }],
                 ["write", "a3", [100, 500], "prophet: knew first", { size: 52 }],
                 ["write", "a4", [100, 590], "foretell: said ahead", { size: 52 }],
                 ["write", "a5", { after: "a3", gap: 50 }, "→ punishment!", { size: 56, color: "red" }]] },
        { say: "I said you only need to remember the number four for the Prophets, right? Four, four, four, four, and four, four. Joel, Jonah, Obadiah, Nahum. Amos, Hosea, Isaiah, Micah. Jeremiah, Ezekiel, Habakkuk, Zephaniah. Haggai, Daniel, Malachi, Zechariah.",
          draw: [["write", "b1", [100, 720], "4444  44", { size: 80, color: "red" }],
                 ["write", "b2", [100, 820], "Joel Jonah Obad Nah · Amos Hos Isa Mic · Jer Ezek Hab Zeph · Hag Dan Mal Zech", { size: 44, color: "gray" }]] },
        { say: "On the chart, they're grouped by color, four each, right? They were prophets active in the same period, so they say the same things. That's why these four books have similar content.",
          draw: [["write", "b3", { after: "b1", gap: 70 }, "same era = same message", { size: 56, color: "blue" }],
                 ["circle", "b1"]] }
      ]
    },
    {
      id: "pattern", title: "Four Patterns",
      beats: [
        { say: "Then what did I say the four, four stands for? The four patterns of the Prophets, and the four parts of restoration. Guilt, exhortation, warning, and restoration.",
          draw: [["clear"],
                 ["title", "t", "4 patterns · 4 restorations"],
                 ["write", "c1", [120, 300], "guilt · exhortation · warning ·"],
                 ["write", "c2", { after: "c1", gap: 30 }, "restoration", { color: "red" }],
                 ["circle", "c2"]] },
        { say: "The restoration is the return from the Babylonian Exile, the first coming of Jesus, the coming of the Holy Spirit, and the second coming of Jesus.",
          draw: [["write", "c3", [120, 420], "restoration:", { size: 56, color: "gray" }],
                 ["write", "c4", { after: "c3", gap: 30 }, "return · 1st coming · Spirit · 2nd coming", { size: 52, color: "blue" }]] },
        { say: "When you read the History books and come across something like, 'Wait, they shouldn't be doing that,' without fail a prophet shows up and points out that sin.",
          draw: [["write", "c5", [120, 550], "law broken"],
                 ["write", "c6", { after: "c5", gap: 110 }, "prophet appears → names sin", { color: "red" }],
                 ["arrow", "c5", "c6"]] },
        { say: "But our Bible arranges the books by length, so it's hard. Jonah is short, so they put it way at the back.",
          draw: [["write", "c7", [120, 680], "Bible = ordered by length"],
                 ["write", "c8", { after: "c7", gap: 50 }, "(Jonah way back)", { size: 52, color: "gray" }]] },
        { say: "If you read in that order, the history has already passed, so you can't tell why God sent Jonah to Nineveh. If you read it now, it just makes sense.",
          draw: [["write", "c9", [120, 810], "read it now → it just makes sense", { color: "green" }],
                 ["under", "c9", "green"]] }
      ]
    },
    {
      id: "flee", title: "Jonah Flees to Tarshish",
      beats: [
        { say: "Now, open the book of Jonah. God has told Israel again and again, and they won't listen. God is at a loss, so He sends Jonah to Nineveh.",
          draw: [["clear"],
                 ["title", "t", "Jonah flees to Tarshish"],
                 ["write", "d1", [100, 300], "Israel won't listen"],
                 ["write", "d2", { below: "d1", gap: 110 }, "Jonah → to Nineveh", { color: "blue" }]] },
        { say: "But this prophet gets on a ship going in the exact opposite direction, to Tarshish.",
          draw: [["photo", "p2", "img/p2/image4.jpg", [1000, 190, 540, 304], { tilt: -2, caption: "Tarshish, opposite Nineveh" }],
                 ["write", "d3", [100, 520], "opposite way: Tarshish!", { color: "red" }],
                 ["circle", "d3"]] },
        { say: "Tarshish is today's Spain. At the port of Joppa there were trading ships that carried precious metals. The fact that he knew this shows Jonah had an international outlook.",
          draw: [["write", "d4", [100, 660], "Tarshish = Spain", { size: 56 }],
                 ["write", "d4b", { after: "d4", gap: 30 }, "(port of Joppa · trade ships)", { size: 48, color: "gray" }]] },
        { say: "The distance is about 2,500 kilometers, and once you board that ship, you're stuck on it for a year. He must have thought, if I get on a ship that sails for a year, even God won't be able to do anything about it.",
          draw: [["write", "d5", [100, 790], "2500 km · 1 yr at sea", { size: 56 }],
                 ["write", "d6", { after: "d5", gap: 50 }, "God can't touch me?", { size: 52, color: "red" }]] }
      ]
    },
    {
      id: "fish", title: "Jonah in the Fish",
      beats: [
        { say: "But God brings Jonah back to land in an amazing way. Suddenly a huge storm and waves rise up, and the ship is in chaos.",
          draw: [["clear"],
                 ["title", "t", "Jonah in the fish"],
                 ["write", "e1", [120, 300], "great storm · waves"]] },
        { say: "The sailors cast lots. Who on earth caused all this? And it falls right on Jonah.",
          draw: [["write", "e2", [120, 420], "casting lots"],
                 ["write", "e3", { after: "e2", gap: 110 }, "Jonah caught", { color: "red" }],
                 ["arrow", "e2", "e3"]] },
        { say: "He doesn't even deny it. Throw me into the sea. They throw him. He doesn't die. A great fish is waiting and swallows him, and Jonah is in the belly of the fish for three days.",
          draw: [["write", "e4", [120, 550], "\"Throw me into the sea\"", { size: 56 }],
                 ["write", "e5", { after: "e4", gap: 60 }, "3 days in big fish", { color: "blue" }],
                 ["box", "e5"]] },
        { say: "Chapter 2 has Jonah's prayer from inside the fish. But rather than truly repenting, he's still going on about I this, I that.",
          draw: [["write", "e6", [120, 680], "ch. 2 prayer: still \"I, I...\"", { size: 56 }]] },
        { say: "It seems this prophet had made some vow to God. When he says he will pay his vow, the Lord commands the fish, and it vomits Jonah out onto dry land.",
          draw: [["write", "e7", [120, 800], "I will pay my vow"],
                 ["write", "e8", { after: "e7", gap: 110 }, "vomited on land", { color: "green" }],
                 ["arrow", "e7", "e8"]] }
      ]
    },
    {
      id: "nineveh", title: "Nineveh Repents",
      beats: [
        { say: "Anyway, he arrives and delivers God's word, but half-heartedly, against his will. The city is three days' journey across, and he goes only one day's journey. And he doesn't grab anyone to talk to; he just does it carelessly.",
          draw: [["clear"],
                 ["title", "t", "Nineveh repents"],
                 ["write", "f1", [120, 300], "3-day city"],
                 ["write", "f2", { after: "f1", gap: 110 }, "1 day, half-hearted", { color: "red" }],
                 ["arrow", "f1", "f2"]] },
        { say: "But starting from the king all the way down to the animals, they put on sackcloth and repent.",
          draw: [["write", "f3", [120, 440], "king to animals: sackcloth, repent", { color: "blue" }]] },
        { say: "It isn't just a formality. They turn from their evil way. That's repentance done right.",
          draw: [["write", "f4", [120, 580], "turn from evil way"],
                 ["write", "f5", { after: "f4", gap: 50 }, "= true repentance", { color: "green" }],
                 ["box", "f5", "green"]] },
        { say: "They repented so seriously and turned back, so that's a good thing. But Jonah complains bitterly. He said the city would fall in forty days, and it didn't fall, so now he's the one who looks foolish.",
          draw: [["write", "f6", [120, 730], "Jonah very upset", { color: "red" }],
                 ["write", "f7", { after: "f6", gap: 50 }, "(40 days and it'll fall...)", { size: 48, color: "gray" }]] }
      ]
    },
    {
      id: "angry", title: "Just Take My Life",
      beats: [
        { say: "Jonah argues with God. I knew you were gracious and merciful, that you would relent and not send disaster. That's why I hurried to flee to Tarshish, he says.",
          draw: [["clear"],
                 ["title", "t", "Just take my life"],
                 ["write", "g1", [120, 300], "\"I knew it\""],
                 ["write", "g2", { after: "g1", gap: 60 }, "so I fled", { size: 56, color: "blue" }]] },
        { say: "Then he's so upset he says he'd rather die. Please take my life. And God says, is it right for you to be angry?",
          draw: [["write", "g3", [120, 430], "\"Take my life\"", { color: "red" }],
                 ["write", "g4", { below: "g3", gap: 100 }, "Is it right for you to be angry?", { size: 56, color: "blue" }]] },
        { say: "Jonah goes out to the east side of the city, makes a booth, and sits in its shade to see what will happen to the city.",
          draw: [["write", "g5", [120, 660], "watching from a booth east of city"]] },
        { say: "Even God's own chosen people haven't repented in six hundred years. And these lowlifes are going to repent? Jonah thought Nineveh simply had to be destroyed.",
          draw: [["write", "g6", [120, 790], "\"Not in 600 yrs, and these lowlifes?\"", { size: 56, color: "red" }]] }
      ]
    },
    {
      id: "gourd", title: "The Vine and Jonah",
      beats: [
        { say: "Even seeing him act like that, God prepared a vine, and Jonah was very glad about it.",
          draw: [["clear"],
                 ["title", "t", "The vine and Jonah"],
                 ["write", "h1", [120, 300], "vine prepared"],
                 ["write", "h2", { after: "h1", gap: 110 }, "Jonah glad", { color: "green" }],
                 ["arrow", "h1", "h2"]] },
        { say: "But once he's glad, God can't stand to watch it. What's so lovely about you? He has a worm eat the vine, and again Jonah says it's better to die than to live.",
          draw: [["write", "h3", [120, 420], "worm eats it"],
                 ["write", "h4", { after: "h3", gap: 110 }, "\"better to die\"", { color: "red" }],
                 ["arrow", "h3", "h4"]] },
        { say: "God asks if it is right for him to be angry about the vine, and he says, I do well to be angry, even to death. He talks back to the very end, doesn't he?",
          draw: [["write", "h5", [120, 550], "Jonah talks back to the end", { size: 56 }]] },
        { say: "You have had pity on the vine, which came up in a night and perished in a night. Should I not spare Nineveh, that great city, in which are more than a hundred and twenty thousand people who cannot discern between their right hand and their left, and also much cattle?",
          draw: [["write", "h6", [120, 680], "pity on a vine"],
                 ["write", "h7", { after: "h6", gap: 110 }, "how much more Nineveh 120,000+", { color: "red" }],
                 ["arrow", "h6", "h7"],
                 ["box", "h7"]] },
        { say: "Jonah has nothing to say. Maybe the book of Jonah is like an autobiography, a self-portrait of Jonah. He honestly reveals his own bad heart, and shows that God is right and he is wrong.",
          draw: [["write", "h8", [120, 810], "Jonah = self-portrait", { color: "blue" }],
                 ["write", "h9", { after: "h8", gap: 60 }, "God right, I wrong", { size: 52, color: "green" }]] }
      ]
    }
  ]
};
