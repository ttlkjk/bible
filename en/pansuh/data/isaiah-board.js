// Isaiah whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does.
window.BOARD = {
  scenes: [
    {
      id: "intro", title: "Isaiah Overview",
      beats: [
        { say: "Okay, here's our overview of Isaiah. In Hebrew, Isaiah is Yeshayahu. It means 'Yahweh is salvation.'",
          draw: [["title", "t", "Isaiah Overview"],
                 ["photo", "p1", "../../pansuh/img/p2/image19.jpg", [1060, 190, 480, 270], { tilt: 2, caption: "The ministry of the prophet Isaiah" }],
                 ["write", "a1", [100, 300], "Yeshayahu = Yahweh is salvation", { size: 52, color: "blue" }]] },
        { say: "Isaiah has 66 chapters in all.",
          draw: [["write", "a2", [100, 430], "66 chapters", { size: 72, color: "red" }],
                 ["circle", "a2"]] },
        { say: "Chapters 1 to 39 are the Old Testament story. A warning. That's 39 chapters.",
          draw: [["write", "a3", [100, 590], "ch. 1~39", { size: 64, color: "blue" }],
                 ["write", "a4", { after: "a3", gap: 40 }, "OT story (warning)", { size: 56 }]] },
        { say: "Chapters 40 to 66 are the New Testament story. A promise. That's 27 chapters.",
          draw: [["write", "a5", [100, 730], "ch. 40~66", { size: 64, color: "green" }],
                 ["write", "a6", { after: "a5", gap: 40 }, "NT story (promise)", { size: 56 }]] }
      ]
    },
    {
      id: "mission", title: "A Strange Mission",
      beats: [
        { say: "Chapter 1 verse 1. He served in Judah and Jerusalem through five kings. In the days of Uzziah, Jotham, Ahaz, and Hezekiah, and on into Manasseh.",
          draw: [["clear"],
                 ["title", "t", "A strange mission"],
                 ["write", "b1", [120, 300], "five kings · in Judah and Jerusalem", { size: 56 }]] },
        { say: "He and Jeremiah served longer than anyone. And when a prophet serves that long, it tells you how evil the times were.",
          draw: [["write", "b2", [120, 410], "long ministry", { size: 56 }],
                 ["write", "b3", { after: "b2", gap: 100 }, "that evil a time", { color: "red" }],
                 ["arrow", "b2", "b3"]] },
        { say: "So the mission he got was to shut the door of grace. Make their ears deaf, their eyes dim, and their hearts dull, so they wouldn't understand the truth. The exact opposite of the usual!",
          draw: [["write", "b4", [120, 540], "deaf ears · dim eyes · dull hearts", { size: 56, color: "red" }],
                 ["box", "b4"]] },
        { say: "You can feel two things here. Disappointment so deep that He wants to give up. And still, a longing for them to come back.",
          draw: [["write", "b5", [120, 670], "wanting to give up", { size: 56 }],
                 ["write", "b6", { after: "b5", gap: 50 }, "+ longing for their return", { size: 56, color: "blue" }]] },
        { say: "Maybe that's why, in the book of Isaiah, we never actually see Isaiah evangelizing anyone, or leading anyone to repent. Micah, in the same period, didn't do much more than accuse and enlighten either.",
          draw: [["write", "b7", [120, 800], "no scene of Isaiah winning or converting anyone", { size: 52, color: "gray" }]] }
      ]
    },
    {
      id: "ox", title: "Even the Ox Knows Its Owner",
      beats: [
        { say: "Chapter 1 verse 2. The ox knows his owner, and the donkey his master's crib, but Israel does not know, my people do not consider.",
          draw: [["clear"],
                 ["title", "t", "Even the ox knows its owner"],
                 ["write", "c1", [120, 300], "ox · donkey know their master", { size: 60 }],
                 ["write", "c2", { after: "c1", gap: 50 }, "Israel doesn't", { size: 60, color: "red" }]] },
        { say: "Verse 9. Unless the Lord of hosts had left us a very small remnant, we'd have been like Sodom and Gomorrah. He left a remnant because of His covenant with Abraham and David.",
          draw: [["write", "c3", [120, 420], "small remnant, for the covenant", { size: 56, color: "blue" }]] },
        { say: "Verse 11. What are your many sacrifices to me? God just can't stand empty, going-through-the-motions religion.",
          draw: [["write", "c4", [120, 550], "He can't stand formal religion", { color: "red" }],
                 ["under", "c4"]] },
        { say: "Even the sacrifices weren't commands from God. They were a way of living He gave them. Leviticus says 'if anyone offers,' but people took it as a command. When did I ever ask for that?",
          draw: [["write", "c5", [120, 680], "sacrifice = command ✗ · way to live ○", { size: 56 }],
                 ["write", "c6", { after: "c5", gap: 40 }, "(\"if anyone offers\")", { size: 46, color: "gray" }]] },
        { say: "And even then, they only trample the courts. Just for show. I cannot bear iniquity together with the solemn assembly. Holding a sacred assembly while doing evil at the same time? That's just taunting God.",
          draw: [["write", "c7", [120, 800], "assembly + evil = taunting God", { color: "red" }]] }
      ]
    },
    {
      id: "pray", title: "Prayer Is Lived",
      beats: [
        { say: "Verse 15. Even though you make many prayers, I will not hear. Your hands are full of blood.",
          draw: [["clear"],
                 ["title", "t", "Prayer is lived"],
                 ["write", "d1", [120, 300], "hands full of blood → He won't hear", { size: 60, color: "red" }]] },
        { say: "You don't pray with your mouth. You pray with your life. If you cheat people, speculate in houses and land, and crush the poor, then no matter how much you pray, God acts like He didn't hear.",
          draw: [["write", "d2", [120, 420], "pray with life, not just lips", { color: "blue" }],
                 ["box", "d2"]] },
        { say: "Verse 16. Cease to do evil, learn to do well, relieve the oppressed, judge the fatherless, plead for the widow. That's true repentance. That's true godliness.",
          draw: [["write", "d3", [120, 560], "help the oppressed · orphan · widow", { size: 56, color: "green" }]] },
        { say: "So who are the oppressed? Foreign workers. Temporary workers. Store and department store staff who put up with verbal abuse. Orphans have no power, and widows have no money for a lawyer.",
          draw: [["write", "d4", [120, 670], "today's weak: foreign workers · temp workers · store staff", { size: 46, color: "gray" }]] },
        { say: "James chapter 1 verse 27 says the same thing. Pure religion is to visit orphans and widows in their affliction, and to keep yourself unspotted from the world.",
          draw: [["write", "d5", [120, 800], "Jas 1:27 pure religion", { color: "blue" }],
                 ["write", "d6", { after: "d5", gap: 40 }, "= care · stay unspotted", { size: 56 }]] }
      ]
    },
    {
      id: "politics", title: "Grinding the Faces of the Poor",
      beats: [
        { say: "Verse 21. How the faithful city has become a prostitute! The princes love bribes, and they don't care for orphans and widows.",
          draw: [["clear"],
                 ["title", "t", "Grinding the faces of the poor"],
                 ["write", "e1", [120, 300], "faithful city → prostitute", { size: 60 }]] },
        { say: "Politics is supposed to mean cutting down the high places to fill in the low places. But they're doing the opposite. They're digging out the low places to make the high places even higher.",
          draw: [["write", "e2", [120, 420], "politics = cut the high, fill the low", { size: 56, color: "blue" }],
                 ["write", "e3", [120, 520], "now reversed", { size: 56, color: "red" }]] },
        { say: "In chapter 2, the high mountains, the towers, and the strong walls all fall. In chapter 3, the lowly people who were oppressed end up ruling over the leaders. God turns the world upside down.",
          draw: [["write", "e4", { after: "e3", gap: 60 }, "→ God turns the world upside down", { size: 56 }]] },
        { say: "Chapter 3 verse 15. Why do you grind the faces of the poor? Real estate speculation is grinding the faces of the poor. And who's doing it? The elders and princes of the people.",
          draw: [["write", "e5", [120, 660], "property speculation = grinding faces", { color: "red" }],
                 ["box", "e5"]] },
        { say: "Chapter 4, seven women taking hold of one man? That means the men have all died. Then chapter 5, the song of the vineyard. He looked for good grapes, but it brought forth wild grapes.",
          draw: [["write", "e6", [120, 790], "ch. 4 seven women · ch. 5 wild grapes", { size: 56, color: "gray" }]] }
      ]
    },
    {
      id: "call", title: "Here Am I",
      beats: [
        { say: "Chapter 6 is Isaiah's call. It was in the year King Uzziah died, around 740 to 735 B.C. An angel called a seraph touched his lips with a coal, and his sin was forgiven.",
          draw: [["clear"],
                 ["title", "t", "Here am I"],
                 ["write", "f1", [120, 300], "seraph · live coal · sin forgiven", { size: 56 }]] },
        { say: "When God asked, Who will go for us? Isaiah said, Here am I. He figured he'd get some grand task. But no. Stop the people's ears, and shut their eyes.",
          draw: [["write", "f2", [120, 420], "\"Here am I\"", { color: "blue" }],
                 ["write", "f3", { after: "f2", gap: 100 }, "stop their ears, shut their eyes", { size: 56, color: "red" }],
                 ["arrow", "f2", "f3"]] },
        { say: "Isaiah cries out, How long? Until everything's ruined and smashed, and the people are carried far away.",
          draw: [["write", "f4", [120, 540], "How long? → until carried far away", { size: 56 }]] },
        { say: "Verse 13. As a terebinth or an oak leaves a stump when it's cut down, so the holy seed will remain. And sure enough, the northern kingdom fell in 721 B.C., and the southern kingdom in 586 B.C.",
          draw: [["write", "f5", [120, 670], "stump = holy seed", { color: "green" }],
                 ["write", "f6", { after: "f5", gap: 50 }, "(north 721 · south 586)", { size: 52, color: "gray" }]] },
        { say: "What Isaiah realized was this. There was no hope in his own time. New hope would only come when Jesus came. That's why Isaiah keeps talking about Jesus. And whenever the New Testament talks about Messianic prophecy, it's always quoting Isaiah.",
          draw: [["write", "f7", [120, 800], "Isaiah always talks about Jesus", { color: "red" }],
                 ["under", "f7"]] }
      ]
    },
    {
      id: "immanuel", title: "Immanuel",
      beats: [
        { say: "Chapter 7 is about Ahaz. He kept leaning on Assyria. Even when he was told his kingdom would fall within 65 years, he just couldn't believe it.",
          draw: [["clear"],
                 ["title", "t", "Ahaz and Immanuel"],
                 ["write", "g1", [120, 300], "Ahaz: trusts Assyria · won't believe", { size: 56 }]] },
        { say: "Then at least ask for a sign! And verse 12, he says, I will not tempt the Lord. Well then, just believe!",
          draw: [["write", "g2", [120, 410], "\"I will not tempt the Lord\"", { size: 56, color: "red" }]] },
        { say: "So God tells him straight out. Verse 14. Behold, the virgin shall conceive and bear a son, and shall call his name Immanuel.",
          draw: [["write", "g3", [120, 540], "Immanuel", { size: 80, color: "blue" }],
                 ["box", "g3"]] },
        { say: "Matthew quoted this as a prophecy of Jesus' birth. But here, it's not actually about Jesus. The word for virgin here just means a young woman. Almah. The word for virgin is betulah.",
          draw: [["write", "g4", { after: "g3", gap: 60 }, "virgin = almah (young woman)", { size: 52 }],
                 ["write", "g5", { below: "g4", gap: 70 }, "(virgin = betulah)", { size: 48, color: "gray" }]] },
        { say: "A young woman Ahaz knew well would have a child. You're trembling, so name him 'God is with us.' By the time the child can tell good from evil, about 10 to 12 years old, those two kings will be gone. So don't be afraid.",
          draw: [["write", "g6", [120, 790], "~12 yrs: two kings gone → don't fear", { size: 56, color: "green" }]] }
      ]
    },
    {
      id: "branch", title: "A Shoot from the Stem of Jesse",
      beats: [
        { say: "Chapters 8 and 9 are about the coming of the Messiah. And chapter 10 is about God judging Assyria.",
          draw: [["clear"],
                 ["title", "t", "A shoot from the stem of Jesse"],
                 ["write", "h1", [120, 300], "ch. 8~9 Messiah · ch. 10 Assyria judged", { size: 56 }]] },
        { say: "Assyria was the rod of God's anger. But Assyria was only a tool, and it got full of pride. By the strength of my hand I have done it, and by my wisdom.",
          draw: [["write", "h2", [120, 420], "Assyria, a tool", { size: 56 }],
                 ["write", "h3", { after: "h2", gap: 90 }, "\"by my hand, my wisdom\"", { size: 56, color: "red" }],
                 ["arrow", "h2", "h3"]] },
        { say: "And because of that pride, Assyria will fall.",
          draw: [["write", "h4", [120, 530], "pride → Assyria falls", { size: 56, color: "red" }],
                 ["under", "h4"]] },
        { say: "Chapter 11. A shoot comes out of the stem of Jesse. The shoot becomes a bud, then a sprout, and when it hardens, it becomes a branch. The spirit of wisdom and understanding, the spirit of counsel and might, rests on Him, and He judges with righteousness. That's Jesus.",
          draw: [["write", "h5", [120, 670], "shoot → bud → sprout → branch", { color: "green" }],
                 ["write", "h6", { after: "h5", gap: 50 }, "= Jesus", { color: "blue" }],
                 ["circle", "h6"]] },
        { say: "Chapter 12 confesses that God Himself is our salvation.",
          draw: [["write", "h7", [120, 800], "ch. 12: God is our salvation", { size: 56 }]] }
      ]
    },
    {
      id: "nations", title: "God Runs the World",
      beats: [
        { say: "From chapter 13, we get the prophecies against the nations. Babylon, Philistia, Moab, Damascus, Cush, Egypt, Edom, all the way to Tyre and Sidon. Mostly, they're going to fall or be punished.",
          draw: [["clear"],
                 ["title", "t", "God runs the world"],
                 ["write", "i1", [120, 300], "ch. 13~23 the nations", { color: "blue" }],
                 ["write", "i2", [120, 400], "Babylon · Philistia · Moab · Damascus · Egypt · Tyre...", { size: 46, color: "gray" }]] },
        { say: "God isn't just Israel's God. He's the King who rules every nation in the world. So He judges every nation.",
          draw: [["write", "i3", [120, 530], "King over all nations", { size: 56 }]] },
        { say: "Other petty gods don't care about any of that. At most, they reign as the god of one people. But our God runs the whole world.",
          draw: [["write", "i4", [120, 640], "petty gods: one people", { size: 56, color: "gray" }],
                 ["write", "i5", { after: "i4", gap: 60 }, "God: runs the world", { color: "red" }],
                 ["box", "i5"]] },
        { say: "Chapter 24 tells of the earth shaking and breaking apart at the end. Chapter 25 is restoration, and chapter 26 is victory. In Isaiah, judgment and restoration are all mixed together like this.",
          draw: [["write", "i6", [120, 790], "ch. 24 the end · 25 restoration · 26 victory", { size: 52 }]] }
      ]
    },
    {
      id: "thatday", title: "In That Day",
      beats: [
        { say: "When God talks about restoration, pay close attention to the words 'in that day.'",
          draw: [["clear"],
                 ["title", "t", "'In that day'"]] },
        { say: "In Korean, 'that day' means the day we were just talking about, right?",
          draw: [["write", "j1", [120, 300], "Korean: the day just mentioned", { size: 56, color: "gray" }]] },
        { say: "But Hebrew doesn't work that way. It means a certain day God has set. And mostly, it means the time when Jesus returns.",
          draw: [["write", "j2", [120, 420], "Hebrew: a day God has set", { color: "blue" }],
                 ["write", "j3", { below: "j2", gap: 100 }, "→ mostly His return", { color: "red" }],
                 ["circle", "j3"]] },
        { say: "Chapter 27 verse 1. In that day the Lord will punish leviathan the fleeing serpent, and He will kill the dragon that is in the sea. Revelation chapter 12 verse 9. The great dragon is the old serpent, the devil, and Satan.",
          draw: [["write", "j4", [120, 680], "leviathan = dragon = old serpent = Satan", { size: 52 }],
                 ["write", "j5", { after: "j4", gap: 30 }, "(Rev 12:9)", { size: 46, color: "gray" }]] },
        { say: "Chapter 29. Woe to Ariel! Ariel is another name for Jerusalem. They honor me with their lips, but their heart is far from me.",
          draw: [["write", "j6", [120, 800], "honor with lips · heart far away", { color: "red" }]] }
      ]
    },
    {
      id: "soft", title: "Speak Smooth Things",
      beats: [
        { say: "From chapter 30 verse 9. They say to the seers, Don't see. Don't prophesy to us right things. Speak to us smooth things.",
          draw: [["clear"],
                 ["title", "t", "Speak smooth things"],
                 ["write", "k1", [120, 300], "\"not right things, smooth things\"", { color: "red" }]] },
        { say: "And in the end, they even rudely say, Make the Holy One of Israel leave us. Even today, not many people like listening to the word.",
          draw: [["write", "k2", [120, 420], "\"make the Holy One leave us\"", { size: 56 }]] },
        { say: "Sermons keep getting shorter. The Puritans preached two or three hours at a time. But we at Hangiseon are doing fine, right? We go fourteen hours!",
          draw: [["write", "k3", [120, 540], "Puritans 2~3 hrs", { size: 56, color: "gray" }],
                 ["write", "k4", { after: "k3", gap: 60 }, "Hangiseon 14 hrs!", { size: 56, color: "green" }]] },
        { say: "Chapter 32 says a king will reign in righteousness. In the near term, that's Josiah. In the far term, it's Jesus.",
          draw: [["write", "k5", [120, 670], "king reigning in righteousness = Josiah · Jesus", { size: 52, color: "blue" }]] },
        { say: "Chapter 33. Who can stand in the end? The one who walks righteously, speaks uprightly, and takes no bribes. Chapters 36 to 39 are Hezekiah's good and bad deeds. Same as Second Kings chapters 18 to 20.",
          draw: [["write", "k6", [120, 790], "ch. 36~39 Hezekiah's record = 2 Kgs 18~20", { size: 52, color: "gray" }]] }
      ]
    },
    {
      id: "comfort", title: "Comfort My People",
      beats: [
        { say: "Now, from chapter 40, the mood changes completely. Some people call it Second Isaiah. It's set around the time the Babylonian Exile was coming to an end.",
          draw: [["clear"],
                 ["title", "t", "From ch. 40 · Second Isaiah"],
                 ["write", "l1", [120, 300], "Exile coming to an end", { size: 60 }]] },
        { say: "Unlike the first part, it's full of strength, comfort, and hope. Read it alongside the last part of Daniel, and it just clicks.",
          draw: [["write", "l2", [120, 420], "strength · comfort · hope", { color: "green" }],
                 ["write", "l3", { after: "l2", gap: 50 }, "(same time as end of Daniel)", { size: 48, color: "gray" }]] },
        { say: "Chapter 40 verse 1. Comfort, comfort my people. Her warfare is accomplished, her iniquity is pardoned. The seventy years of hard service are over.",
          draw: [["write", "l4", [120, 560], "\"Comfort my people\"", { size: 72, color: "blue" }],
                 ["write", "l5", { below: "l4", gap: 100 }, "70 years of service over", { size: 56 }]] },
        { say: "Chapter 41 verse 10. Don't be afraid, for I am with you. A lot of people get this wrong. It isn't said to us. It's spoken to the people of Israel, who'd just finished seventy years of service in Babylon.",
          draw: [["write", "l6", [120, 800], "\"Don't be afraid\" → to Israel after the Exile", { size: 52, color: "red" }]] }
      ]
    },
    {
      id: "servant", title: "The Servant of the Lord",
      beats: [
        { say: "Chapter 42. The servant who won't break a bruised reed or quench a dimly burning wick. In the near sense, it's the prophet himself speaking these words. In the far sense, it's a picture of Jesus.",
          draw: [["clear"],
                 ["title", "t", "The Servant of the Lord"],
                 ["write", "m1", [120, 300], "won't break a bruised reed", { color: "blue" }],
                 ["write", "m2", [120, 400], "near: the prophet · far: Jesus", { size: 52 }]] },
        { say: "He won't just make Israel prosper. He'll become a light to the nations, and save all the people of the world.",
          draw: [["write", "m3", [120, 530], "light to nations → salvation for all", { size: 56, color: "green" }]] },
        { say: "Chapter 43 verse 10. You are my witnesses. He confirms Israel's mission as a nation all over again. If there was no god before Him and none after Him, then He alone is God.",
          draw: [["write", "m4", [120, 660], "national mission = God's witnesses", { size: 56 }]] },
        { say: "Verse 11. I, even I, am the Lord, and besides me there is no savior. That's exactly what the name Isaiah, Yeshayahu, means. The Lord is the One who saves.",
          draw: [["write", "m5", [120, 790], "no savior but Me = Isaiah", { color: "red" }],
                 ["box", "m5"]] }
      ]
    },
    {
      id: "cyrus", title: "Cyrus and the Suffering Servant",
      beats: [
        { say: "Chapter 44 shows how pitiful idol worship is. Their eyes are covered, so they can't even say, Isn't this thing in my right hand a lie?",
          draw: [["clear"],
                 ["title", "t", "Cyrus and the Suffering Servant"],
                 ["write", "n1", [120, 300], "ch. 44: can't even say \"Isn't this a lie?\"", { size: 52 }]] },
        { say: "Chapter 45 is about Cyrus, the anointed one. He wasn't even born yet, but God would set Israel free through him. God anoints and uses even Gentiles.",
          draw: [["write", "n2", [120, 420], "ch. 45 Cyrus", { color: "blue" }],
                 ["write", "n3", { after: "n2", gap: 50 }, "God anoints even Gentiles", { size: 56 }]] },
        { say: "From chapter 46, the gods of Babylon collapse, and Babylon itself comes down. Chapter 52 is about waking up Zion, which had been asleep for seventy years.",
          draw: [["write", "n4", [120, 540], "ch. 46~52: Babylon falls, Zion wakes", { size: 52 }]] },
        { say: "Chapter 53. He has no form nor comeliness. Maybe He came looking like this on purpose, so the proud and self-important wouldn't meet Jesus. It prophesies that a Messiah like this would suffer.",
          draw: [["write", "n5", [120, 670], "ch. 53 Messiah with no form or comeliness", { size: 52, color: "red" }],
                 ["under", "n5"]] },
        { say: "But Isaiah wasn't called to wake the people up with these revelations. They needed to be disciplined, so his calling was not to tell them.",
          draw: [["write", "n6", [120, 800], "(called not to tell them)", { size: 52, color: "gray" }]] }
      ]
    },
    {
      id: "fast", title: "Fasting, and a New Heaven and New Earth",
      beats: [
        { say: "Chapter 55. Come, all you who are thirsty, come to the waters. You who have no money, come without price. Don't wear yourself out on what isn't bread. Just listen to God, and joy will come.",
          draw: [["clear"],
                 ["title", "t", "Fasting · new heaven and earth"],
                 ["write", "o1", [120, 300], "ch. 55 you who thirst, come free", { size: 56, color: "blue" }]] },
        { say: "Chapter 58 teaches about fasting. The fast that pleases God is to loosen the bonds of wickedness, share your bread with the hungry, and clothe the naked.",
          draw: [["write", "o2", [120, 420], "true fast = loosen bonds, share", { size: 56 }]] },
        { say: "Fasting, in a word, is a hunger strike. Nowhere in the Bible does God command fasting. He never approved of it as a way to be godly.",
          draw: [["write", "o3", [120, 540], "fasting = hunger strike", { color: "red" }],
                 ["write", "o4", { after: "o3", gap: 50 }, "(godliness ✗)", { size: 52, color: "gray" }]] },
        { say: "Chapter 61 is the good news of salvation. Jesus later read it in the synagogue at Nazareth. And chapters 65 and 66 are about the new heaven and the new earth. That's why Isaiah's also called the Bible in miniature.",
          draw: [["write", "o5", [120, 670], "ch. 65~66 new heaven, new earth", { color: "green" }],
                 ["write", "o6", { after: "o5", gap: 50 }, "= Bible in miniature", { size: 56, color: "blue" }]] },
        { say: "Chapter 66 verse 2. He who is poor and of a contrite spirit, and trembles at my word. Not just anyone gets in on the time of restoration. It's this kind of person God looks upon.",
          draw: [["write", "o7", [120, 800], "contrite, trembles at My word", { color: "red" }],
                 ["box", "o7"]] }
      ]
    }
  ]
};
