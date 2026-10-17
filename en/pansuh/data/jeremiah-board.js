// Jeremiah whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does.
window.BOARD = {
  scenes: [
    {
      id: "call", title: "The Weeping Prophet",
      beats: [
        { say: "Jeremiah lived at the same time as Zephaniah. He came from a priestly family in Anathoth, in the land of Benjamin. And he was a priest himself.",
          draw: [["title", "t", "Jeremiah, the weeping prophet"],
                 ["write", "a1", [120, 290], "priestly family · priest", { color: "blue" }],
                 ["photo", "p1", "../../pansuh/img/p2/image11.jpg", [1110, 160, 420, 236], { tilt: 2, caption: "Jeremiah 627~585" }]] },
        { say: "He served until he was past seventy. For over forty years, he preached sermons nobody listened to. No wife, no children.",
          draw: [["write", "a2", [120, 400], "40 yrs preaching, no one listens", { size: 64, color: "red" }],
                 ["write", "a3", [180, 480], "past age 70 · no wife, no children", { size: 48, color: "gray" }]] },
        { say: "The big hope of that time was Israel coming back from Babylon. But that would only happen after he died. Just like Moses, right? He could see Canaan right in front of him, but he couldn't go in.",
          draw: [["write", "a4", [120, 600], "hope comes after I die", { size: 60 }],
                 ["write", "a5", { after: "a4", gap: 50 }, "= like Moses", { size: 60, color: "blue" }]] },
        { say: "He waves it off. I'm only a child, I can't speak. That's like Moses too. But God says, go. And he promises, you'll be beaten, but you won't die. You'll get beaten half to death, but you won't die.",
          draw: [["write", "a6", [120, 760], "\"Beaten, but not killed\"", { size: 68, color: "red" }],
                 ["under", "a6"]] }
      ]
    },
    {
      id: "love", title: "God's First Love",
      beats: [
        { say: "Chapter 2 is a heartbreaking story. It's about God's first love. A love that never worked out, a painful love he still longs for.",
          draw: [["clear"],
                 ["title", "t", "Ch. 2 · First love"],
                 ["write", "b1", [120, 290], "first love unfulfilled", { color: "red" }]] },
        { say: "When he first made the covenant at Mount Sinai, God thought of it like a wedding. He loved them so much, he'd say, just let anyone try to touch her!",
          draw: [["write", "b2", [120, 410], "Sinai covenant = wedding", { color: "blue" }],
                 ["box", "b2", "blue"]] },
        { say: "But the people of this time, he says, not one of them even asks, where is the LORD? Chapter 2 verse 24 says they're like a wild donkey sniffing the wind. That's idolatry.",
          draw: [["write", "b3", [120, 540], "wild donkey panting (2:24)", { size: 56 }],
                 ["write", "b4", { after: "b3", gap: 40 }, "= idolatry", { size: 56, color: "red" }]] },
        { say: "Then in chapter 3, he says backsliding Israel is actually more righteous than treacherous Judah. Backsliding means turning your back. Treacherous means standing up against God.",
          draw: [["write", "b5", [120, 680], "backsliding = turn away", { size: 56 }],
                 ["write", "b6", { after: "b5", gap: 70 }, "treacherous = defy", { size: 56, color: "red" }],
                 ["write", "b7", [180, 790], "backsliding Israel > treacherous Judah (3:11)", { size: 48, color: "gray" }]] }
      ]
    },
    {
      id: "none", title: "If Even One",
      beats: [
        { say: "Chapter 5 verse 1. If you can find a man, if there's anyone who does justice and seeks the truth, I will pardon this city. It's destroyed because there isn't one righteous person.",
          draw: [["clear"],
                 ["title", "t", "Not one righteous"],
                 ["write", "c1", [120, 290], "if you find even one (5:1)", { color: "blue" }],
                 ["write", "c2", { below: "c1", gap: 100 }, "→ none, so destroyed", { color: "red" }]] },
        { say: "Chapter 7. They commit every sin, they follow other gods, and then they walk into my house and say, we are delivered? Remember how I said some people go to hell fully sure they're saved?",
          draw: [["write", "c3", [120, 520], "\"We are delivered\" (7:10)", { size: 56 }],
                 ["write", "c4", [120, 620], "= abomination", { color: "red" }],
                 ["under", "c4"]] },
        { say: "So God even tells him, don't pray for this people.",
          draw: [["write", "c5", { after: "c4", gap: 80 }, "don't pray (7:16)", { size: 60 }]] },
        { say: "The women bake cakes for the queen of heaven. Who's the queen of heaven? Ishtar, or Ashtoreth, or Venus. She's a version of Semiramis, the one we talked about in Genesis.",
          draw: [["write", "c6", [120, 770], "queen of heaven = Ishtar · Ashtoreth", { size: 54, color: "blue" }],
                 ["write", "c7", { after: "c6", gap: 30 }, "(Semiramis)", { size: 44, color: "gray" }]] }
      ]
    },
    {
      id: "belt", title: "The Rotten Linen Belt",
      beats: [
        { say: "So it's come to this. And God gives Jeremiah a strange command. Take a linen belt, and hide it in a crack in the rock by the Euphrates River.",
          draw: [["clear"],
                 ["title", "t", "The linen belt"],
                 ["photo", "p2", "../../pansuh/img/p2/image35.jpg", [1080, 170, 440, 248], { tilt: -2, caption: "Linen cloth" }],
                 ["write", "d1", [120, 290], "belt in a rock by Euphrates", { size: 64 }]] },
        { say: "Many days later he goes and gets it. And it's completely rotten.",
          draw: [["write", "d2", [120, 410], "→ totally rotten", { color: "red" }]] },
        { say: "Here's what he means. He'll let them rot through and through for seventy years in Babylon, beyond the Euphrates, and then bring them back. Can you feel God's emotion here? You need to feel it.",
          draw: [["write", "d3", [120, 560], "rot 70 yrs in Babylon", { color: "red" }],
                 ["under", "d3"]] },
        { say: "In chapter 14, Jeremiah wonders, why does God, who's almighty, seem so powerless? Why should you be like a man astonished?",
          draw: [["write", "d4", [120, 700], "almighty yet helpless (14:9)", { size: 64, color: "blue" }]] },
        { say: "And what did I say the reason was? Freedom. He can't force them.",
          draw: [["write", "d5", { after: "d4", gap: 50 }, "← freedom", { size: 64, color: "green" }],
                 ["circle", "d5", "green"]] }
      ]
    },
    {
      id: "weary", title: "Weary of Relenting",
      beats: [
        { say: "Chapter 15. They ask, where shall we go? And he says, such as are for death, to death, and such as are for the sword, to the sword. Why are you even asking me?",
          draw: [["clear"],
                 ["title", "t", "Ch. 15~17"],
                 ["write", "e1", [120, 290], "for death, to death (15:2)", { size: 60 }],
                 ["write", "e2", { after: "e1", gap: 40 }, "\"Why ask me?\"", { size: 52, color: "gray" }]] },
        { say: "Verse 6. I am weary with repenting. Forgive seventy times seven, sure. That's the theory. But friends, how many times do you think you could forgive the same sin?",
          draw: [["write", "e3", [120, 420], "weary of relenting", { color: "red" }],
                 ["under", "e3"]] },
        { say: "The children of this land are all going to die and perish. So he even tells him not to get married.",
          draw: [["write", "e4", [120, 540], "don't marry", { size: 60 }]] },
        { say: "Chapter 17 verse 2. Their children remember their Asherah poles. Think about it. What if your girlfriend smiled to herself about her ex every time she met you? You'd want to dunk him in the water, wouldn't you?",
          draw: [["write", "e5", [120, 660], "remember Asherah (17:2) = thinking of ex", { size: 54, color: "blue" }]] },
        { say: "From verse 19, it's, please, just keep the Sabbath. That Sabbath, honestly. Is resting really that hard?",
          draw: [["write", "e6", [120, 790], "\"Is resting that hard?\"", { size: 60, color: "red" }]] }
      ]
    },
    {
      id: "pit", title: "The Pit and the Prayer of Curses",
      beats: [
        { say: "Chapter 18 is the story of the potter. A potter shapes clay however he wants, right? In the same way, God can do as he wills with Israel. Israel is like clay.",
          draw: [["clear"],
                 ["title", "t", "Ch. 18~20"],
                 ["write", "f1", [120, 290], "potter and clay", { color: "blue" }]] },
        { say: "People say, let's not listen to Jeremiah. They even dig a pit to kill him. In the end, Jeremiah can't take it anymore, and he prays a prayer of curses.",
          draw: [["write", "f2", [120, 410], "they dig a pit", { size: 60 }],
                 ["write", "f3", { after: "f2", gap: 110 }, "prayer of curses", { size: 60, color: "red" }],
                 ["arrow", "f2", "f3"]] },
        { say: "Pretty fierce, right? But imagine it. Forty years of preaching and nobody listens. Beaten every day. Shunned by everyone. And people even digging a pit to kill you. You'd pour out curses like that too.",
          draw: [["write", "f4", [180, 500], "40 yrs · beaten daily · shunned", { size: 48, color: "gray" }]] },
        { say: "In chapter 20 he says, that's it, I won't prophesy anymore. But then it's like a fire burning in his heart, and he can't hold it in. So out he goes, crying out again, and he gets beaten again.",
          draw: [["write", "f5", [120, 640], "\"Never again\"", { size: 60 }],
                 ["write", "f6", { after: "f5", gap: 110 }, "fire in my heart", { size: 60, color: "red" }],
                 ["arrow", "f5", "f6"]] },
        { say: "Finally, he curses the day he was born. If I'd known I'd see this, it would've been better never to be born.",
          draw: [["write", "f7", [120, 790], "curses his birthday", { color: "gray" }],
                 ["box", "f7", "gray"]] }
      ]
    },
    {
      id: "surrender", title: "Surrender",
      beats: [
        { say: "Chapter 21. I set before you the way of life and the way of death. And the way of life? It's surrendering to Babylon.",
          draw: [["clear"],
                 ["title", "t", "Ch. 21~24"],
                 ["write", "g1", [120, 290], "way of life = surrender", { color: "red" }],
                 ["circle", "g1"]] },
        { say: "Nobody wanted to hear that. The message was unpleasant, so people turned away from Jeremiah.",
          draw: [["write", "g2", [180, 380], "bad message → rejected", { size: 48, color: "gray" }]] },
        { say: "Chapter 22. Jehoiakim thinks if he builds a fine house of cedar, his royal power will stand. God says, no, that's not how power stands.",
          draw: [["write", "g3", [120, 490], "cedar house ≠ authority", { size: 60 }]] },
        { say: "Chapter 23. The false prophets say they've had dreams, and their goal is to make the people forget God's name. That's Satan's work. Is not my word like a fire? And like a hammer that breaks the rock in pieces?",
          draw: [["write", "g4", [120, 610], "dreaming false prophets", { size: 56, color: "gray" }],
                 ["strike", "g4"],
                 ["write", "g5", { after: "g4", gap: 50 }, "Word: fire, hammer", { size: 56, color: "blue" }]] },
        { say: "Chapter 24. He shows two baskets of figs. Good figs and rotten figs. And the good figs? He means the people taken captive to Babylon.",
          draw: [["write", "g6", [120, 760], "good figs = those taken captive", { size: 64, color: "green" }],
                 ["under", "g6", "green"]] }
      ]
    },
    {
      id: "yoke", title: "The Yoke and the False Prophet",
      beats: [
        { say: "In chapter 25, he promises to bring them back once the seventy years are over. Now, chapter 27 says Jehoiakim, but it should really be Zedekiah. Lots of other Bible versions translate it as Zedekiah.",
          draw: [["clear"],
                 ["title", "t", "Ch. 25~29"],
                 ["write", "h1", [120, 290], "after 70 yrs, return (ch. 25)", { size: 56, color: "green" }],
                 ["write", "h2", [180, 380], "ch. 27 Jehoiakim → really Zedekiah", { size: 46, color: "gray" }]] },
        { say: "Envoys came from all the nations, supposedly to celebrate the coronation. And Jeremiah puts a yoke on his neck and cries out, every nation that doesn't serve the king of Babylon will be destroyed! With foreign envoys standing right there! How embarrassing. What's he doing?",
          draw: [["write", "h3", [120, 490], "yoke on neck: serve Babylon", { size: 64, color: "red" }]] },
        { say: "Then the false prophet Hananiah breaks that yoke. And he lies. God has broken the yoke of Babylon, he says, and all the captives are coming home.",
          draw: [["write", "h4", [120, 610], "Hananiah breaks yoke", { size: 60 }]] },
        { say: "Jeremiah says, Amen, how good it would be if he did that. And he walks away. Then God says, that's a lie, I didn't send him. Hananiah died that same year, in the seventh month.",
          draw: [["write", "h5", { after: "h4", gap: 60 }, "\"That's a lie\"", { size: 60, color: "red" }],
                 ["write", "h6", [180, 690], "Hananiah died that year, 7th month", { size: 46, color: "gray" }]] },
        { say: "In chapter 29, Jeremiah sends a letter to Babylon. You'll be there seventy years, so settle down. Live well, and pray for the blessing of that land.",
          draw: [["write", "h7", [120, 810], "letter: settle, pray for Babylon", { size: 64, color: "blue" }],
                 ["box", "h7", "blue"]] }
      ]
    },
    {
      id: "new", title: "The New Covenant",
      beats: [
        { say: "Chapter 30. He'll bring them back, but he won't let them off as guiltless. He'll correct them in measure.",
          draw: [["clear"],
                 ["title", "t", "Ch. 30~34"],
                 ["write", "i1", [120, 290], "brings back, corrects in measure", { size: 60 }]] },
        { say: "Chapter 31 has the new covenant. That's what we call the New Testament. Even as their husband, he was betrayed. So now it's no longer husband and wife. It's parent and child.",
          draw: [["write", "i2", [120, 420], "new covenant (ch. 31)", { color: "red" }],
                 ["write", "i3", [120, 540], "spouses", { size: 72, color: "gray" }],
                 ["write", "i4", { after: "i3", gap: 120 }, "parent & child", { size: 72, color: "blue" }],
                 ["arrow", "i3", "i4"],
                 ["box", "i4", "blue"]] },
        { say: "Chapter 32. He tells him to buy the field of Hanamel, his uncle's son. Why? It's proof. Even if they're taken captive, they'll come back.",
          draw: [["write", "i5", [120, 670], "buys Hanamel's field = they'll return", { size: 56, color: "green" }]] },
        { say: "And he prophesies that a righteous Branch will grow up for David and bring justice and righteousness. That's the birth of Christ.",
          draw: [["write", "i6", [120, 790], "David's righteous Branch = Christ", { size: 64, color: "red" }],
                 ["under", "i6"]] }
      ]
    },
    {
      id: "rechab", title: "The Rechabites",
      beats: [
        { say: "Chapter 35 is about the descendants of Jonadab son of Rechab, from the Kenites. God tells Jeremiah to offer them wine.",
          draw: [["clear"],
                 ["title", "t", "Rechabites (ch. 35)"],
                 ["photo", "p3", "../../pansuh/img/p2/image36.jpg", [1080, 170, 440, 248], { tilt: 2, caption: "Descendants of Rechab" }],
                 ["write", "j1", [120, 290], "offer Rechabites wine", { size: 64 }]] },
        { say: "And they say, no, we won't drink. Their ancestor Jonadab told them, don't drink wine, don't build houses, live in tents all your lives. And they keep his last words to the letter.",
          draw: [["write", "j2", [120, 410], "\"We won't\" → ancestor's will", { size: 60, color: "blue" }]] },
        { say: "Remember I said God's exclamations show up only a few times in the Bible? Once to Solomon, and here. His command is performed! They obey their ancestor, but you don't listen to me.",
          draw: [["write", "j3", [120, 560], "God exclaims!", { size: 72, color: "red" }],
                 ["circle", "j3"],
                 ["write", "j4", { after: "j3", gap: 70 }, "they obey · you don't listen", { size: 52 }]] },
        { say: "Therefore Jonadab shall not lack a man to stand before me forever. And these people still live that simple, old way of life today.",
          draw: [["write", "j5", [120, 690], "never lack a man to stand before me", { size: 54, color: "green" }]] },
        { say: "They don't believe in Jesus, and their doctrine isn't complete. But it's because of their loyalty and faithfulness. Remember I said the word for faith is more often translated as faithfulness or loyalty?",
          draw: [["write", "j6", [120, 810], "faith ≈ faithfulness · loyalty", { size: 64, color: "blue" }],
                 ["under", "j6", "blue"]] }
      ]
    },
    {
      id: "scroll", title: "The Burned Scroll",
      beats: [
        { say: "Chapter 36. Write down everything I've spoken from the days of Josiah until now. If they hear it and turn back, I'll forgive. So Baruch writes it down.",
          draw: [["clear"],
                 ["title", "t", "The scroll (ch. 36)"],
                 ["write", "k1", [120, 290], "Jeremiah dictates, Baruch writes", { size: 64, color: "blue" }]] },
        { say: "First, Baruch reads it to the officials. They're shocked. We'll report this to the king, they say. You and Jeremiah go hide, and stay well hidden.",
          draw: [["write", "k2", [120, 410], "officials: \"Go hide!\"", { size: 56 }]] },
        { say: "Every time Jehudi read three or four columns, King Jehoiakim cut them off with a knife and threw them into the fire in the brazier. Until the whole scroll was burned. He's the forefather of everyone who burns the Bible.",
          draw: [["write", "k3", [120, 540], "Jehoiakim: knife, fire", { color: "red" }],
                 ["write", "k4", { after: "k3", gap: 40 }, "= first Bible burner", { size: 48, color: "gray" }]] },
        { say: "God told him to write it again. But there was so much, and Baruch added bits he'd missed here and there. That's why the book of Jeremiah is a little jumbled.",
          draw: [["write", "k5", [120, 680], "rewritten", { size: 60 }],
                 ["write", "k6", { after: "k5", gap: 110 }, "so it's jumbled", { size: 60, color: "blue" }],
                 ["arrow", "k5", "k6"],
                 ["under", "k6", "blue"]] }
      ]
    },
    {
      id: "siege", title: "They're Coming, They're Not",
      beats: [
        { say: "Chapter 37. There's a rumor that Egypt is coming up, so the Chaldean soldiers pull back. And Judah's heart leans toward Egypt again. But Jeremiah says, even if only wounded men were left, they'd burn Jerusalem.",
          draw: [["clear"],
                 ["title", "t", "Ch. 37~39"],
                 ["write", "l1", [120, 290], "leaning to Egypt", { size: 56, color: "gray" }],
                 ["write", "l2", { after: "l1", gap: 50 }, "\"Even the wounded will burn it\"", { size: 52, color: "red" }]] },
        { say: "Zedekiah hands Jeremiah over, and they throw him into a pit. Luckily, it was a mud pit, so he lived. The only one with any sense was Ebed-melech, an Ethiopian eunuch.",
          draw: [["write", "l3", [120, 410], "mud pit", { size: 60 }],
                 ["write", "l4", { after: "l3", gap: 110 }, "Ebed-melech pulls him out", { size: 60, color: "green" }],
                 ["arrow", "l3", "l4"]] },
        { say: "Is Babylon coming again? Yes, it's coming. The false prophets say it's not. But in 606 B.C., the first time, they took Daniel, Mishael, Hananiah, and Azariah. In 597, they came again and took Ezekiel too.",
          draw: [["write", "l5", [120, 540], "1st: 606 (Daniel)", { size: 56, color: "blue" }],
                 ["write", "l6", { after: "l5", gap: 70 }, "2nd: 597 (Ezekiel)", { size: 56, color: "blue" }]] },
        { say: "Even so, Zedekiah worries about looking bad in front of the people taken earlier. Then the third time. From the tenth day of the tenth month, in Zedekiah's ninth year, 588 B.C., they surround the city for a year and a half.",
          draw: [["write", "l7", [120, 670], "3rd: siege from 588, 10th month, 10th day · 1.5 yrs", { size: 50, color: "red" }]] },
        { say: "On the ninth day of the fourth month, in 586, the king runs as far as the plains of Jericho, and he's caught. The princes and officials are all killed. Zedekiah's eyes are put out, and he's dragged off to Babylon.",
          draw: [["write", "l8", [120, 800], "fell 586, 4th month, 9th day · eyes", { size: 64, color: "red" }],
                 ["under", "l8"]] }
      ]
    },
    {
      id: "fast", title: "The Four Fasts",
      beats: [
        { say: "From the seventh to the tenth day of the fifth month, the temple and all of Jerusalem burned. Jeremiah was being taken away too, but he was let go on the way and came back to Jerusalem.",
          draw: [["clear"],
                 ["title", "t", "The four fasts"],
                 ["write", "m1", [120, 290], "5th month, days 7~10: temple burns", { size: 56 }]] },
        { say: "Gedaliah became governor, and he told them to serve Babylon. But when he was warned that Ishmael planned to kill him, he didn't believe it. And in the end, in chapter 41, he was assassinated in the seventh month.",
          draw: [["write", "m2", [120, 390], "Gov. Gedaliah killed (7th month)", { size: 56 }]] },
        { say: "And that's how the four fasts came about. The tenth month is the day Jerusalem was finally surrounded. The fourth month is the day the city fell.",
          draw: [["write", "m3", [160, 530], "10th: siege", { size: 64, color: "blue" }],
                 ["write", "m4", [860, 530], "4th: fall", { size: 64, color: "blue" }]] },
        { say: "The fifth month is when the temple and the palace burned down. And the seventh month is when Governor Gedaliah was assassinated.",
          draw: [["write", "m5", [160, 660], "5th: temple burned", { size: 64, color: "blue" }],
                 ["write", "m6", [860, 660], "7th: Gedaliah killed", { size: 64, color: "blue" }]] },
        { say: "Hold on to this. It comes up again in Ezekiel.",
          draw: [["write", "m7", [160, 800], "comes up again in Ezekiel!", { color: "red" }],
                 ["under", "m7"]] }
      ]
    },
    {
      id: "end", title: "4,600 People",
      beats: [
        { say: "Chapter 42. They ask, is Babylon coming again? And Jeremiah says, not this time, so stay and live in this land. But this time they insist it is coming, and they run off to Egypt. And they drag Jeremiah along with them.",
          draw: [["clear"],
                 ["title", "t", "Last words and final tally"],
                 ["write", "n1", [120, 290], "\"Not coming\"", { size: 56 }],
                 ["write", "n2", { after: "n1", gap: 110 }, "\"It is!\" → off to Egypt", { size: 56, color: "red" }],
                 ["arrow", "n1", "n2"]] },
        { say: "In Tahpanhes, Jeremiah buries some large stones and warns them. Nebuchadnezzar will set his throne on these stones and strike Egypt. Those are his last words toward Jerusalem. After that, it seems he wrote Lamentations.",
          draw: [["write", "n3", [120, 400], "stones at Tahpanhes = last warning", { size: 56, color: "blue" }]] },
        { say: "Chapter 45 is to Baruch. I will spare your life. Chapters 46 to 51 are prophecies to the nations, like Egypt, the Philistines, Moab, Ammon, and Edom. And from chapter 50 on, it's about the fall of Babylon.",
          draw: [["write", "n4", [180, 490], "ch. 45 Baruch · ch. 46~51 nations · ch. 50~ Babylon", { size: 44, color: "gray" }]] },
        { say: "From chapter 52 verse 28, we get the final count. The first deportation, 3023 people. The second, 832. The third, 745. 4600 in all.",
          draw: [["write", "n5", [120, 610], "3023 + 832 + 745 =", { size: 64 }],
                 ["write", "n6", { after: "n5", gap: 40 }, "4,600", { size: 84, color: "red" }],
                 ["circle", "n6"]] },
        { say: "Two million people came out of Egypt. Think how much they must have grown since then. And all of them died, and 4600 were left. The scale of the book of Jeremiah is enormous, isn't it?",
          draw: [["write", "n7", [120, 790], "Exodus 2 million → 4,600", { color: "red" }],
                 ["under", "n7"]] }
      ]
    }
  ]
};
