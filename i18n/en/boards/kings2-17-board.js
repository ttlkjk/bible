// 2 Kings 17~23 whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does.
window.BOARD = {
  scenes: [
    {
      id: "fall", title: "The Fall of the North",
      beats: [
        { say: "So, the last king of the northern kingdom of Israel was Hoshea. He did evil too, though not like the kings before him.",
          draw: [["title", "t", "Fall of northern Israel"],
                 ["write", "a1", [120, 290], "last king: Hoshea", { color: "blue" }],
                 ["photo", "p1", "img/p2/image28.jpg", [1130, 170, 400, 225], { tilt: 2, caption: "Kings of northern Israel" }]] },
        { say: "When Shalmaneser the Fourth, king of Assyria, came up against him, he paid tribute. But then he rebelled, and sent messengers to So, the king of Egypt.",
          draw: [["write", "a2", [120, 400], "pays tribute", { size: 56 }],
                 ["write", "a3", { after: "a2", gap: 110 }, "rebels → So of Egypt", { size: 56, color: "red" }],
                 ["arrow", "a2", "a3"]] },
        { say: "Take a look at this map. Ancient Assyria was huge, wasn't it?",
          draw: [["photo", "p2", "img/p2/image29.jpg", [1080, 500, 440, 248], { tilt: -2, caption: "The Assyrian Empire" }]] },
        { say: "Shalmaneser threw Hoshea in prison and besieged Samaria for three years. Finally he destroyed northern Israel and scattered the people among many nations, so they'd never even dream of rebelling.",
          draw: [["write", "a4", [120, 540], "Samaria besieged 3 yrs → falls", { size: 56 }],
                 ["write", "a5", [120, 650], "scattered among nations", { size: 60, color: "red" }],
                 ["under", "a5"]] },
        { say: "Then he swapped them out and planted Assyrians in Samaria instead. In a word, why did they fall? They didn't keep the covenant of Sinai and Leviticus.",
          draw: [["write", "a6", [120, 770], "cause: Sinai covenant, Leviticus not kept", { size: 50, color: "blue" }],
                 ["box", "a6", "blue"]] }
      ]
    },
    {
      id: "lions", title: "A Mission Field, No Teacher",
      beats: [
        { say: "Now here's an interesting story. The Assyrians who came to Samaria didn't worship the LORD, so lions came and killed them.",
          draw: [["clear"],
                 ["title", "t", "Lions and a priest (17:25~)"],
                 ["write", "b1", [120, 290], "don't serve the LORD"],
                 ["write", "b2", { after: "b1", gap: 110 }, "lions kill them", { color: "red" }],
                 ["arrow", "b1", "b2"]] },
        { say: "They reported it to the king of Assyria, and he said, bring back a priest and serve the god of that land. In other words, serve God.",
          draw: [["write", "b3", [120, 410], "Assyrian king: \"Bring a priest, serve that land's god\"", { size: 46 }]] },
        { say: "The wild beasts were helping, and the king of Assyria was helping too, so the mission could've gone forward. But there was no teacher.",
          draw: [["write", "b4", [120, 530], "beasts help · king helps", { color: "green" }],
                 ["write", "b5", { after: "b4", gap: 60 }, "no teacher", { color: "red" }],
                 ["circle", "b5"]] },
        { say: "So what happened? They feared the LORD, and they also served the gods they'd brought with them. That's what happens when there's no one to teach rightly.",
          draw: [["write", "b6", [120, 660], "fear the LORD + serve own gods", { size: 60 }],
                 ["strike", "b6"]] },
        { say: "And that's why we at Hangiseon work like this. To teach you, the next generation, the Word, and teach it well.",
          draw: [["write", "b7", [120, 790], "teach next generation the Word", { color: "blue" }],
                 ["under", "b7", "blue"]] }
      ]
    },
    {
      id: "hezekiah", title: "Hezekiah: Good and Bad",
      beats: [
        { say: "From chapter 18 verse 13, we get Hezekiah's story. We usually remember just the good part, that he prayed and his life was extended. But he did good things and bad things.",
          draw: [["clear"],
                 ["title", "t", "Hezekiah: good and bad"],
                 ["write", "c1", [120, 290], "good: prayer · life extended", { color: "green" }],
                 ["write", "c2", [120, 400], "bad: surrendered, gave temple gold", { size: 60, color: "red" }]] },
        { say: "One talent is about thirty-two kilograms, so he was told to bring ten tons of silver and one ton of gold. But he brought it so fast that the Assyrians thought, wow, these guys have lots of gold! And they surrounded all of Jerusalem.",
          draw: [["write", "c3", [120, 520], "10 t silver · 1 t gold", { size: 60 }],
                 ["write", "c4", { after: "c3", gap: 110 }, "\"They're loaded!\"", { size: 56 }],
                 ["arrow", "c3", "c4"],
                 ["write", "c5", [180, 600], "1 talent ≈ 32 kg", { size: 44, color: "gray" }]] },
        { say: "He sent Rabshakeh, who poured out every kind of insult and mocked God. Only then, desperate now, did Hezekiah send men to Isaiah.",
          draw: [["write", "c6", [120, 700], "Rabshakeh's insults → to Isaiah", { size: 56 }]] },
        { say: "In the end, a hundred and eighty-five thousand Assyrian soldiers became corpses overnight. And Sennacherib went home and was struck down by his own sons.",
          draw: [["write", "c7", [120, 810], "185,000 dead overnight", { color: "red" }],
                 ["under", "c7"]] }
      ]
    },
    {
      id: "sick", title: "Fifteen More Years",
      beats: [
        { say: "He didn't know those people were doomed, so he stripped all the gold off the temple and handed it over. How could he not get sick? God sent Isaiah to tell him, you're going to die.",
          draw: [["clear"],
                 ["title", "t", "Hezekiah's illness (ch. 20)"],
                 ["write", "d1", [120, 300], "gave temple gold"],
                 ["write", "d2", { after: "d1", gap: 110 }, "\"You will die\"", { color: "red" }],
                 ["arrow", "d1", "d2"]] },
        { say: "Hezekiah turned his face to the wall, and he wept and wailed, asking God to remember the few good things he'd done when he was younger.",
          draw: [["write", "d3", [120, 430], "face to the wall · weeping prayer", { size: 60 }]] },
        { say: "And God, soft-hearted once again, added fifteen years to his life.",
          draw: [["write", "d4", [120, 560], "+15 years of life", { size: 80, color: "green" }],
                 ["circle", "d4", "green"]] },
        { say: "Maybe he couldn't believe he'd be healed, so he asked for a sign. The shadow going forward would be too easy, so he asked for it to go back ten degrees. And the earth turned backward.",
          draw: [["write", "d5", [120, 720], "sign: shadow back 10°", { color: "blue" }],
                 ["write", "d6", { after: "d5", gap: 50 }, "(earth turned back)", { size: 48, color: "gray" }]] }
      ]
    },
    {
      id: "envoy", title: "Babylon's Get-Well Visit",
      beats: [
        { say: "Around this time, Babylon heard that Hezekiah had beaten the Assyrian army in one go, and sent envoys to make an alliance with him.",
          draw: [["clear"],
                 ["title", "t", "Babylon appears"],
                 ["write", "e1", [120, 300], "Babylon: envoys for an alliance"]] },
        { say: "But it turned out the Assyrians had just become corpses overnight. So Babylon quickly turned it into a get-well visit.",
          draw: [["write", "e2", [120, 420], "turns out: dead overnight", { size: 56, color: "gray" }],
                 ["write", "e3", { after: "e2", gap: 50 }, "→ get-well visit", { size: 56 }]] },
        { say: "Hezekiah was so moved. The great empire of Babylon came to visit me when I was sick! And he showed them everything, the national defense sites, starting with the temple treasury.",
          draw: [["write", "e4", [120, 550], "shows all: defenses · treasury", { color: "red" }],
                 ["under", "e4"]] },
        { say: "Isaiah rebuked him. All your treasures will be carried away, and your sons will be taken to Babylon and become eunuchs.",
          draw: [["write", "e5", [120, 670], "Isaiah: treasures taken · sons eunuchs", { size: 56, color: "blue" }]] },
        { say: "And Hezekiah's answer? As long as there's no trouble in my days, that's fine. There's no bigger loser in the world.",
          draw: [["write", "e6", [120, 800], "\"As long as there's peace in my days\"", { size: 56 }],
                 ["strike", "e6", "red"]] }
      ]
    },
    {
      id: "manasseh", title: "Manasseh's Evil",
      beats: [
        { say: "Hezekiah died, and his son Manasseh became king. He was twelve when he became king, and he reigned fifty-five years. His mother's name was Hephzibah.",
          draw: [["clear"],
                 ["title", "t", "Manasseh (ch. 21)"],
                 ["write", "f1", [120, 290], "king at 12 · 55 yrs", { size: 60 }],
                 ["write", "f2", [120, 400], "mother: Hephzibah", { size: 60, color: "blue" }],
                 ["photo", "p3", "img/p2/image32.jpg", [1100, 170, 420, 236], { tilt: 2, caption: "Kings of southern Judah" }]] },
        { say: "The mother's name is given? What did I say that means? He's a bad one. Hephzibah was a wicked woman, so her son turned out the same.",
          draw: [["write", "f3", { after: "f2", gap: 40 }, "mom named = bad king", { size: 48, color: "red" }]] },
        { say: "Because of Manasseh's sins, in the end God just couldn't forgive Jerusalem.",
          draw: [["write", "f4", [120, 540], "Manasseh → never forgiven", { color: "red" }],
                 ["under", "f4"]] },
        { say: "According to tradition, Isaiah, who rarely pointed out the king's wrongs, said one word, and Manasseh had him sawn in two.",
          draw: [["write", "f5", [180, 630], "tradition: Isaiah sawn in two", { size: 48, color: "gray" }]] },
        { say: "Manasseh died and Amon became king. He did the same, so his servants quietly killed him. But then the people killed those servants, and made Josiah king.",
          draw: [["write", "f6", [120, 760], "Amon"],
                 ["write", "f7", { after: "f6", gap: 100 }, "servants kill him"],
                 ["write", "f8", { after: "f7", gap: 100 }, "Josiah", { color: "green" }],
                 ["arrow", "f6", "f7"],
                 ["arrow", "f7", "f8"],
                 ["box", "f8", "green"]] }
      ]
    },
    {
      id: "josiah", title: "Josiah's Reform",
      beats: [
        { say: "Josiah became king at eight. For the first time in a long while, here's a king who walked in the way of David, and turned aside neither to the right nor to the left.",
          draw: [["clear"],
                 ["title", "t", "Josiah's reform (ch. 22~23)"],
                 ["write", "g1", [120, 290], "king at 8 · way of David", { color: "green" }]] },
        { say: "He sent Shaphan the scribe to repair the temple, and Hilkiah the high priest found the scroll of the Law. It's like a cook finding a knife in the kitchen.",
          draw: [["write", "g2", [120, 410], "Hilkiah finds the Law", { size: 60, color: "blue" }],
                 ["write", "g3", { after: "g2", gap: 40 }, "= cook finds knife in kitchen", { size: 46, color: "gray" }]] },
        { say: "It was probably the book of Deuteronomy. The scribe was reading it for the first time, and he just read it aloud. And the twenty-six-year-old king tore his clothes, wept bitterly, and repented.",
          draw: [["write", "g4", [120, 530], "king, 26, tears clothes, weeps", { size: 60 }]] },
        { say: "He realized they'd refused with all their might to do what they were told to do, and risked their lives doing what they were told not to do. So he spent the rest of his life wholeheartedly purging the whole land.",
          draw: [["write", "g5", [120, 650], "purges the land", { size: 72, color: "red" }],
                 ["circle", "g5"]] },
        { say: "But it was too late. Because of Manasseh, God's wrath had already broken out.",
          draw: [["write", "g6", { after: "g5", gap: 70 }, "but too late", { color: "gray" }],
                 ["write", "g7", [120, 800], "wrath set off by Manasseh", { size: 56, color: "red" }]] }
      ]
    },
    {
      id: "end", title: "Josiah's Death",
      beats: [
        { say: "Josiah read the book of the covenant in front of the people, made a covenant, and kept the Passover. Nobody had kept the Passover like this since the time of the judges. Not David, not Samuel, not Solomon.",
          draw: [["clear"],
                 ["title", "t", "No king like him"],
                 ["write", "h1", [120, 290], "covenant read · Passover", { color: "blue" }],
                 ["write", "h2", { after: "h1", gap: 50 }, "first since judges", { size: 48, color: "gray" }]] },
        { say: "But even twenty years after Manasseh died, God's wrath still hadn't turned away.",
          draw: [["write", "h3", [120, 410], "20 yrs later: wrath still there", { color: "red" }],
                 ["under", "h3"]] },
        { say: "Sadly, a man like this didn't even live to forty. When the king of Egypt went up to fight Assyria, Josiah got in the way for no reason, and he died.",
          draw: [["write", "h4", [120, 530], "meddles with Egypt → dies before 40", { size: 56 }]] },
        { say: "All the people mourned. It even became a saying. When someone wept bitterly, people said, he's weeping like when King Josiah died. The people know very well who the real king is.",
          draw: [["write", "h5", [120, 660], "\"weeping like when Josiah died\"", { color: "green" }],
                 ["box", "h5", "green"]] },
        { say: "After Josiah died, Jehoahaz became king and did evil, and next came Jehoiakim. Pharaoh Necho changed Eliakim's name, and Jehoiakim gave Pharaoh the silver and gold he'd squeezed out of the people. Okay, now we go on to Habakkuk.",
          draw: [["write", "h6", [120, 800], "Jehoahaz → Jehoiakim (silver, gold to Pharaoh)", { size: 46, color: "gray" }]] }
      ]
    }
  ]
};
