// Micah whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does.
window.BOARD = {
  scenes: [
    {
      id: "intro", title: "Micah Overview",
      beats: [
        { say: "Let's go to the book of Micah. Chapter 1, verse 1. The word of the LORD that came to Micah the Morasthite in the days of Jotham, Ahaz, and Hezekiah, kings of Judah, which he saw concerning Samaria and Jerusalem.",
          draw: [["title", "t", "Micah"],
                 ["write", "a1", [120, 300], "days of Jotham · Ahaz · Hezekiah", { size: 56, color: "gray" }]] },
        { say: "Micah means 'Who is like the LORD?' Moresheth is a country village thirty-five kilometers from Jerusalem.",
          draw: [["write", "a2", [120, 420], "Micah = Who is like the LORD?", { color: "blue" }],
                 ["write", "a3", [120, 530], "Moresheth = village 35 km away", { size: 56 }]] },
        { say: "Samaria is the capital of the northern kingdom, and Jerusalem is the capital of the southern kingdom. So this word is not about all of Israel. It's about the privileged, the powerful, the leaders living in the capitals.",
          draw: [["write", "a4", [120, 660], "Samaria · Jerusalem = capitals", { size: 56 }],
                 ["write", "a5", { after: "a4", gap: 50 }, "→ leaders", { color: "red" }],
                 ["circle", "a5"]] },
        { say: "It takes the form of accusing the leaders and exposing their rotten corruption to the whole nation. The aim is to open the people's eyes, so they don't become the plunder of wicked leaders.",
          draw: [["write", "a6", [120, 790], "accuse · expose → wake the people", { color: "green" }]] }
      ]
    },
    {
      id: "high", title: "The High Places of the Earth",
      beats: [
        { say: "Chapter 1, verse 3. The LORD will come down, and tread upon the high places of the earth.",
          draw: [["clear"],
                 ["title", "t", "He treads the high places"],
                 ["write", "b1", [120, 300], "\"tread upon the high places of the earth\"", { size: 56 }]] },
        { say: "Israel is hot, so people always lived up on the hills, and the rich lived on the very highest places. For us, it's like saying he will tread on Gangnam, the rich district of Seoul.",
          draw: [["write", "b2", [120, 420], "high places = rich areas", { size: 56 }],
                 ["write", "b3", { after: "b2", gap: 50 }, "= Gangnam", { color: "red" }],
                 ["circle", "b3"]] },
        { say: "Verse 5. What is the transgression of Jacob? Is it not Samaria? And what are the high places of Judah? Are they not Jerusalem?",
          draw: [["write", "b4", [120, 560], "Jacob's transgression = Samaria", { size: 56 }],
                 ["write", "b5", [120, 660], "Judah's high places = Jerusalem", { size: 56 }]] },
        { say: "What ruins a nation is its leaders, the people who have, the people in power. A farmer out in the country can't ruin a nation.",
          draw: [["write", "b6", [120, 790], "what ruins a nation = leaders", { color: "red" }],
                 ["under", "b6"]] }
      ]
    },
    {
      id: "best", title: "The Ablest Prophet",
      beats: [
        { say: "Among the Old Testament prophets, Micah is the ablest. He has an outstanding eye for society, and he is a man who stands up for the poor.",
          draw: [["clear"],
                 ["title", "t", "The ablest prophet"],
                 ["write", "c1", [120, 300], "eye for society · for the poor", { color: "blue" }]] },
        { say: "Then whose side should the church be on? That's a question we need to think about.",
          draw: [["write", "c2", [120, 420], "Whose side is the church on?", { size: 56, color: "red" }]] },
        { say: "Verse 8. I will lament and wail, I will howl like the jackals. For her wounds are incurable, for it has come even to Jerusalem. When sin goes past a certain point, even God can do nothing about it.",
          draw: [["write", "c3", [120, 560], "incurable wound", { size: 56 }],
                 ["write", "c4", { after: "c3", gap: 50 }, "→ even God can't fix it", { size: 56, color: "red" }]] },
        { say: "Isaiah gives almost the same prophecy. Since Jerusalem has no hope, he receives a strange mission: make the people's ears heavy and shut their eyes. God is worried that they might understand, turn back, and be healed.",
          draw: [["write", "c5", [120, 700], "Isaiah's mission: dull ears, shut eyes", { size: 56, color: "blue" }],
                 ["box", "c5"]] }
      ]
    },
    {
      id: "bed", title: "Plotting Evil in Bed",
      beats: [
        { say: "In chapter 2, he now prophesies in earnest against the luxury of the leaders and against the wicked false prophets.",
          draw: [["clear"],
                 ["title", "t", "Plotting evil in bed"],
                 ["photo", "p1", "../../pansuh/img/p2/image18.jpg", [1080, 190, 440, 248], { tilt: 2, caption: "People living in luxury" }],
                 ["write", "d1", [100, 300], "leaders' luxury · false prophets", { size: 56 }]] },
        { say: "Woe to those who devise iniquity and work evil upon their beds! When the morning is light, they do it, because it is in the power of their hand.",
          draw: [["write", "d2", [100, 420], "\"evil upon their beds\"", { color: "red" }]] },
        { say: "When you lie down at night, you should look back on the day, give thanks, and repent. But they lie there thinking, whom can I use and swindle tomorrow?",
          draw: [["write", "d3", [100, 560], "thanks · repent", { size: 56 }],
                 ["strike", "d3"],
                 ["write", "d4", { after: "d3", gap: 50 }, "whom to swindle tomorrow?", { size: 56, color: "red" }]] },
        { say: "Because they have power and money, they seize fields like Ahab did, covet houses and take them, and oppress people. God says he will bring disaster on people like this.",
          draw: [["write", "d5", [100, 700], "seize fields & houses, like Ahab", { size: 56 }],
                 ["write", "d6", { below: "d5", gap: 100 }, "→ God brings disaster", { size: 56, color: "red" }]] }
      ]
    },
    {
      id: "preacher", title: "The Most Popular Preacher",
      beats: [
        { say: "But when people hear words like this, they don't repent. They shut the prophet's mouth and say, Don't prophesy.",
          draw: [["clear"],
                 ["title", "t", "The most popular preacher"],
                 ["write", "e1", [120, 300], "\"Don't prophesy\" → mouth shut", { size: 60, color: "red" }]] },
        { say: "Verse 11. If a man says, I will prophesy to you of wine and of strong drink, he shall be the prophet of this people.",
          draw: [["write", "e2", [120, 420], "prophesy wine & strong drink → prophet", { size: 56 }]] },
        { say: "The preacher says, Today's sermon title is: Wine and strong drink. The Christian's leisure life. How Christians should use smartphones. The connection between the five loaves and two fish and stock investing.",
          draw: [["write", "e3", [180, 520], "· The Christian's leisure life", { size: 48, color: "gray" }],
                 ["write", "e4", [180, 590], "· Christians and smartphones", { size: 48, color: "gray" }],
                 ["write", "e5", [180, 660], "· Five loaves, two fish & stocks", { size: 48, color: "gray" }]] },
        { say: "Preach sermons that put no burden on anyone, and you're the most popular. Say something that pricks the conscience, and they threaten you to stop your insulting talk. This kind of age isn't new. It was already there in Micah's time.",
          draw: [["write", "e6", [120, 790], "no-burden sermon = most popular", { size: 56, color: "red" }],
                 ["write", "e7", { after: "e6", gap: 40 }, "(already in Micah's day)", { size: 44, color: "gray" }]] }
      ]
    },
    {
      id: "skin", title: "Leaders Who Skin the People",
      beats: [
        { say: "Chapter 3. You who hate the good and love the evil, who tear the skin off my people and the flesh off their bones, who break their bones and chop them up like meat for the pot.",
          draw: [["clear"],
                 ["title", "t", "Leaders who skin the people"],
                 ["write", "f1", [120, 300], "tear off skin · break bones", { color: "red" }]] },
        { say: "A man who raises sheep has the right to shear the wool and the right to milk them.",
          draw: [["write", "f2", [120, 440], "shear wool · milk", { color: "green" }],
                 ["write", "f2b", { after: "f2", gap: 40 }, "○", { color: "green" }]] },
        { say: "But he should only shear the wool, not strip the skin. He should only take the milk, not squeeze out the blood.",
          draw: [["write", "f3", [120, 570], "strip skin · squeeze blood", { color: "red" }],
                 ["write", "f3b", { after: "f3", gap: 40 }, "✗", { color: "red" }]] },
        { say: "They spend so much money on elections that they try to get it all back while in office, helping themselves to this and that. And in the end they wear silver bracelets, handcuffs. That's how politicians end up.",
          draw: [["write", "f4", [120, 720], "recoup costs → handcuffs", { size: 56 }],
                 ["write", "f5", { after: "f4", gap: 40 }, "(how politicians end)", { size: 48, color: "gray" }]] }
      ]
    },
    {
      id: "false", title: "Divining for Money",
      beats: [
        { say: "Look from verse 5. These strange prophets, if you put a bite of meat between their teeth, say Peace, peace, be blessed! If you don't fill their mouths, they threaten that war is coming.",
          draw: [["clear"],
                 ["title", "t", "Divining for money"],
                 ["write", "g1", [100, 300], "a bite of meat → \"Peace!\"", { size: 56 }],
                 ["write", "g2", { after: "g1", gap: 60 }, "none → \"War!\"", { size: 56, color: "red" }]] },
        { say: "But Micah himself says he is full of power by the Spirit of the LORD, and of justice, to declare to Jacob his transgression and to Israel his sin. He means he will keep pointing out their sin.",
          draw: [["write", "g3", [100, 420], "Micah: I'll keep exposing sin", { size: 56, color: "blue" }]] },
        { say: "The heads judge for a bribe, the priests teach for hire, and the prophets divine for money.",
          draw: [["write", "g4", [100, 550], "heads = bribe · priests = hire · prophets = money", { size: 50, color: "red" }]] },
        { say: "And yet they fool themselves, saying, Isn't the LORD among us? No disaster will come upon us.",
          draw: [["write", "g5", [100, 670], "\"No disaster will come on us\"", { size: 56 }],
                 ["write", "g6", { after: "g5", gap: 40 }, "= delusion", { size: 56, color: "red" }]] },
        { say: "Verse 12. Zion will be plowed like a field, and Jerusalem will become heaps. The leaders did all the wrong, but the people suffer along with them.",
          draw: [["write", "g7", [100, 800], "leaders' wrong · people suffer too", { color: "red" }],
                 ["box", "g7"]] }
      ]
    },
    {
      id: "bethlehem", title: "From Bethlehem",
      beats: [
        { say: "Chapter 4 continues with words of comfort. In the near future, the return from Babylon. In the far future, he prophesies even the coming of Jesus.",
          draw: [["clear"],
                 ["title", "t", "Bethlehem Ephrathah"],
                 ["write", "h1", [120, 300], "near: return from Babylon", { size: 56 }],
                 ["write", "h2", [120, 400], "far: Jesus comes", { size: 56, color: "blue" }]] },
        { say: "He says the Messiah will be born, not in a rotten city like Samaria or Jerusalem, but in the country village of Bethlehem.",
          draw: [["write", "h3", [120, 540], "rotten city", { size: 56 }],
                 ["strike", "h3"],
                 ["write", "h4", { after: "h3", gap: 60 }, "country Bethlehem", { color: "green" }]] },
        { say: "Chapter 5, verse 2. But you, Bethlehem Ephrathah, though you are little among the thousands of Judah, out of you shall he come forth to me who is to be ruler in Israel.",
          draw: [["write", "h5", [120, 670], "\"though little, out of you a ruler\"", { color: "blue" }],
                 ["box", "h5"]] },
        { say: "Because of these words of Micah, we know the Messiah would be born in Bethlehem. It isn't found anywhere else.",
          draw: [["write", "h6", [120, 800], "a prophecy found nowhere else", { size: 56, color: "red" }]] }
      ]
    },
    {
      id: "good", title: "What God Wants",
      beats: [
        { say: "So what does God want in the end? Chapter 6, verse 8. What does the LORD require of you,",
          draw: [["clear"],
                 ["title", "t", "What God wants"]] },
        { say: "but to do justly, to love mercy, and to walk humbly with your God?",
          draw: [["write", "i1", [160, 300], "do justly", { color: "blue" }],
                 ["write", "i2", [160, 410], "love mercy", { color: "blue" }],
                 ["write", "i3", [160, 520], "walk humbly with your God", { color: "blue" }],
                 ["box", "i3", "red"]] },
        { say: "This is what is good, more than offering wealth or even your own body.",
          draw: [["write", "i4", [160, 640], "more than offering wealth · body", { size: 52, color: "gray" }]] },
        { say: "The society of that time was a collection of every kind of evil. In a word, chapter 7, verse 4. The best of them is like a brier, the most upright is worse than a thorn hedge. When you gather nothing but garbage, everything stinks.",
          draw: [["write", "i5", [160, 790], "the best of them is like a brier", { color: "red" }]] }
      ]
    },
    {
      id: "resolve", title: "Who Is a God Like You?",
      beats: [
        { say: "Next comes Micah's resolve. Verse 7. But as for me, I will look to the LORD; I will wait for the God of my salvation.",
          draw: [["clear"],
                 ["title", "t", "Micah's resolve"],
                 ["write", "j1", [100, 300], "But I will look to the LORD", { size: 56, color: "blue" }]] },
        { say: "Verse 8. Don't rejoice against me, my enemy, that I have fallen. I will rise again. He says it's only right to be judged, because they have sinned.",
          draw: [["write", "j2", [100, 420], "\"When I fall, I shall arise\"", { size: 56, color: "green" }]] },
        { say: "Verse 14 is a prayer asking God to look after his people, and in verse 15 God answers that he will show wonders as he did in Egypt.",
          draw: [["write", "j3", [100, 540], "prayer → wonders as in Egypt", { size: 56 }]] },
        { say: "Verse 18. Who is a God like you? Someone who has truly met God doesn't weep and wail. He cries out in wonder. There is no one like God.",
          draw: [["write", "j4", [100, 680], "\"Who is a God like you?\"", { color: "red" }],
                 ["under", "j4"]] },
        { say: "Now we move on to Isaiah. We look at the books one by one, but keep in mind that they are actually the same period, just before the fall of northern Israel.",
          draw: [["photo", "p2", "../../pansuh/img/p2/image11.jpg", [1100, 200, 440, 248], { tilt: -2, caption: "Actually the same period" }]] }
      ]
    }
  ]
};
