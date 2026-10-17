// Zechariah whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does.
window.BOARD = {
  scenes: [
    {
      id: "intro", title: "Zechariah",
      beats: [
        { say: "Now, there's one more prophet who was active at the same time as Haggai. Zechariah.",
          draw: [["title", "t", "Zechariah"],
                 ["write", "a1", [120, 290], "a prophet in Haggai's time", { size: 60 }]] },
        { say: "The name Zechariah means, the Lord remembers.",
          draw: [["write", "a2", [120, 410], "Zechariah =", { size: 64 }],
                 ["write", "a3", { after: "a2", gap: 30 }, "the Lord remembers", { size: 64, color: "blue" }],
                 ["under", "a3", "blue"]] },
        { say: "Zechariah, like Joel, is a prophet book with no rebuke in it. Remember why Joel had none? The people had already been punished.",
          draw: [["write", "a4", [120, 550], "a prophet with no rebuke", { size: 60, color: "red" }],
                 ["box", "a4"],
                 ["write", "a5", { after: "a4", gap: 50 }, "(like Joel)", { size: 48, color: "gray" }]] },
        { say: "With Zechariah, his fellow prophet Haggai had already rebuked them, in the sixth month of Darius's second year. Zechariah started in the eighth month of that same year. And he was young.",
          draw: [["write", "a6", [160, 680], "Haggai already rebuked (Darius yr 2, month 6)", { size: 48 }],
                 ["write", "a7", [160, 780], "Zechariah was young (Darius yr 2, month 8)", { size: 48 }]] }
      ]
    },
    {
      id: "return", title: "Return to Me",
      beats: [
        { say: "The Lord was very displeased with your fathers. And how displeased was he? That's written down in books like Ezekiel, Zephaniah, and Jeremiah.",
          draw: [["clear"],
                 ["title", "t", "Theme: Return"],
                 ["write", "b1", [120, 290], "very angry with the fathers", { size: 56 }],
                 ["write", "b2", { after: "b1", gap: 40 }, "Ezek · Zeph · Jer", { size: 48, color: "gray" }]] },
        { say: "We've already seen those, so we just get it. Right, he was really angry. That's Scripture explaining Scripture.",
          draw: [["write", "b3", [120, 410], "Scripture interprets Scripture", { size: 64, color: "blue" }],
                 ["under", "b3", "blue"]] },
        { say: "Return to me, and I will return to you.",
          draw: [["write", "b4", { at: [800, 560] }, "\"Return to me\"", { anchor: "middle", size: 88, color: "red" }],
                 ["circle", "b4"]] },
        { say: "That's the message running through the whole Old Testament. People dodge, hide, and run, right to the very end. But God keeps saying, even today, come back, come back. And still, they didn't listen.",
          draw: [["write", "b5", [120, 700], "people: hide and run", { size: 56 }],
                 ["write", "b6", { after: "b5", gap: 80 }, "God: return!", { size: 56, color: "red" }]] },
        { say: "Zechariah was a young prophet, without much experience or knowledge. So the angel always shows him something and then checks it with him. And that makes it a lot easier for us to follow too.",
          draw: [["write", "b7", [160, 820], "young prophet → angel shows and explains", { size: 52, color: "green" }]] }
      ]
    },
    {
      id: "riders", title: "The Man Among the Myrtles",
      beats: [
        { say: "One night, Zechariah saw a man riding a red horse, standing among the myrtle trees in the valley. And behind him were red, sorrel, and white horses.",
          draw: [["clear"],
                 ["title", "t", "The Man Among the Myrtles"],
                 ["write", "c1", [120, 290], "red · sorrel · white", { size: 60 }],
                 ["photo", "p1", "img/p3/image6.jpg", [1060, 180, 460, 259], { tilt: 2, caption: "vision of the horsemen" }]] },
        { say: "These are the ones the Lord has sent to walk to and fro through the earth. Every day, God sends angels to this earth, and he's watching over us with real interest.",
          draw: [["write", "c2", [120, 400], "angels walking the earth", { size: 60, color: "blue" }],
                 ["write", "c3", [160, 480], "watching over us daily", { size: 48, color: "gray" }]] },
        { say: "And they're here too, you know. Right now, this is the only place in the whole world holding a four-day Bible camp for young people. He's very interested in this place.",
          draw: [["write", "c4", [120, 600], "they're here too!", { size: 60, color: "green" }]] },
        { say: "The angel of the Lord standing among the myrtles is a bit different. He's the one the other angels report to. We see him as Jesus, showing up in the Old Testament.",
          draw: [["write", "c5", [120, 720], "angel of the Lord", { size: 56 }],
                 ["write", "c6", { after: "c5", gap: 100 }, "Jesus in the OT", { size: 60, color: "red" }],
                 ["arrow", "c5", "c6"],
                 ["box", "c6"]] },
        { say: "The angel who appeared to Manoah said his name was Wonderful. The angel who appeared to Gideon accepted an offering. And here, it's Jesus pleading. How long will you not have mercy on Jerusalem? You've been angry for seventy years.",
          draw: [["write", "c7", [160, 820], "Manoah · Gideon · \"angry for 70 years\" plea", { size: 48, color: "gray" }]] }
      ]
    },
    {
      id: "nations", title: "Anger at the Nations at Ease",
      beats: [
        { say: "The angels who were sent went all through the earth, and they found it sitting still and at rest. Still, and at rest?",
          draw: [["clear"],
                 ["title", "t", "Anger at the Nations at Ease"],
                 ["write", "d1", [120, 290], "\"all the earth is at rest\"", { size: 60 }],
                 ["write", "d2", { after: "d1", gap: 30 }, "?", { size: 80, color: "red" }]] },
        { say: "God was only a little angry with Jerusalem, but the nations threw their strength in and made her suffering worse. So now, God is very angry with those nations sitting there at ease, all comfortable.",
          draw: [["write", "d3", [120, 410], "I was a little angry", { size: 56 }],
                 ["write", "d4", { after: "d3", gap: 50 }, "nations added harm", { size: 56, color: "red" }],
                 ["write", "d5", [160, 490], "→ very angry with nations at ease", { size: 52, color: "blue" }]] },
        { say: "You saw it in Ezekiel earlier, right? God judged Israel with a rod called Babylon. Then, with that rod still in his hand, he beat everyone who'd played along, Egypt, Moab, Ammon, and the rest. And at the very end, he snaps the rod too.",
          draw: [["write", "d6", [120, 610], "rod: Babylon", { size: 56 }],
                 ["write", "d7", { after: "d6", gap: 100 }, "Egypt · Moab · Ammon too", { size: 56 }],
                 ["arrow", "d6", "d7"],
                 ["write", "d8", [160, 690], "then the rod is broken", { size: 48, color: "red" }]] },
        { say: "Therefore I have returned to Jerusalem with mercies; my house shall be built in it. So just like Haggai, Zechariah says the temple's going to be built.",
          draw: [["write", "d9", [120, 770], "returned with mercy → My house will be built", { size: 52, color: "green" }]] },
        { say: "We saw God leave in Ezekiel chapter 11. He left, and after seventy years, he came back.",
          draw: [["write", "d10", [160, 845], "Ezek 11: He left → back after 70 years", { size: 46, color: "gray" }]] }
      ]
    },
    {
      id: "horns", title: "Four Horns and a Measuring Line",
      beats: [
        { say: "Then Zechariah sees four horns. The horns that scattered Judah, Israel, and Jerusalem. In other words, the great powers.",
          draw: [["clear"],
                 ["title", "t", "Four Horns, Measuring Line"],
                 ["write", "e1", [120, 290], "4 horns = powers that scattered Judah", { size: 56 }]] },
        { say: "And then he's shown four craftsmen, skilled workers, coming to throw those horns down.",
          draw: [["write", "e2", [120, 400], "4 craftsmen", { size: 60, color: "blue" }],
                 ["write", "e3", { after: "e2", gap: 110 }, "cast down the horns", { size: 60, color: "red" }],
                 ["arrow", "e2", "e3"]] },
        { say: "Then a man with a measuring line in his hand goes off to measure Jerusalem. That's what he saw, in today's terms. Back then they used a measuring line. These days, it's laser equipment.",
          draw: [["write", "e4", [120, 530], "man with a measuring line", { size: 60 }],
                 ["photo", "p2", "img/p3/image9.jpg", [1080, 470, 420, 236], { tilt: -2, caption: "surveying today" }]] },
        { say: "So what does it mean when someone's surveying? It means something's about to happen. A road, a bridge, a building, a street. They're going to build something.",
          draw: [["write", "e5", [120, 640], "survey = about to build", { size: 60, color: "blue" }],
                 ["under", "e5", "blue"]] },
        { say: "He's showing that people will live in Jerusalem again, and buildings will go up. And God himself will be a wall of fire all around it.",
          draw: [["write", "e6", [120, 770], "people will live there again", { size: 60, color: "green" }],
                 ["write", "e7", [160, 840], "God, a wall of fire around", { size: 44, color: "gray" }]] }
      ]
    },
    {
      id: "joshua", title: "Joshua in Filthy Clothes",
      beats: [
        { say: "Joshua the high priest is standing before the angel of the Lord, and Satan's standing at his right hand to accuse him. Here too, the angel of the Lord seems to be Jesus.",
          draw: [["clear"],
                 ["title", "t", "Joshua in Filthy Clothes"],
                 ["write", "f1", [120, 290], "Joshua", { size: 64 }],
                 ["write", "f2", { after: "f1", gap: 50 }, "↔", { size: 64, color: "gray" }],
                 ["write", "f3", { after: "f2", gap: 50 }, "Satan accuses", { size: 64, color: "red" }],
                 ["photo", "p3", "img/p3/image10.jpg", [1100, 170, 420, 236], { tilt: 2, caption: "Joshua the high priest" }]] },
        { say: "Here's the problem. The leaders, Joshua the high priest included, had married foreign women.",
          draw: [["write", "f4", [120, 410], "leaders married foreign women", { size: 60, color: "red" }],
                 ["under", "f4"]] },
        { say: "Why didn't they have wives? It's not that they had none. Their wives just didn't come out of Babylon. So they married foreign women.",
          draw: [["write", "f5", [160, 510], "their wives stayed in Babylon", { size: 50, color: "gray" }]] },
        { say: "And sure enough, Satan grabbed onto that and wouldn't stop accusing them. God really hates hearing Satan's accusations.",
          draw: [["write", "f6", [120, 640], "Satan accuses nonstop", { size: 60 }],
                 ["write", "f7", { after: "f6", gap: 40 }, "God hates it", { size: 56, color: "blue" }]] },
        { say: "Remember what Nathan said, back with David and Bathsheba? You have given the enemy occasion to blaspheme. That's why we have to keep the statutes and ordinances.",
          draw: [["write", "f8", [120, 770], "give no grounds to accuse → statutes & laws", { size: 52, color: "green" }],
                 ["write", "f9", [160, 840], "David · Bathsheba · Nathan", { size: 44, color: "gray" }]] }
      ]
    },
    {
      id: "forgive", title: "Forgiven and Restored",
      beats: [
        { say: "But God doesn't scold Joshua. He rebukes Satan. Is not this a burning stick plucked out of the fire?",
          draw: [["clear"],
                 ["title", "t", "Forgiven and Restored"],
                 ["write", "g1", [120, 290], "scold Joshua", { size: 60 }],
                 ["strike", "g1"],
                 ["write", "g2", { after: "g1", gap: 60 }, "rebuke Satan", { size: 64, color: "red" }],
                 ["circle", "g2"]] },
        { say: "Wearing filthy clothes means there's sin.",
          draw: [["write", "g3", [120, 420], "filthy clothes = sin", { size: 60 }]] },
        { say: "But God doesn't even rebuke him. He says, take off the filthy clothes, and put rich clothing on him. That's forgiveness.",
          draw: [["write", "g4", [120, 540], "dressed in fine clothes", { size: 60 }],
                 ["write", "g5", { after: "g4", gap: 110 }, "forgiven", { size: 80, color: "green" }],
                 ["arrow", "g4", "g5"]] },
        { say: "Zechariah must've gotten excited, because he jumps in. Let them set a clean turban on his head! And God goes along with it. Putting on the clean turban means he's back in office.",
          draw: [["write", "g6", [120, 680], "clean turban", { size: 60 }],
                 ["write", "g7", { after: "g6", gap: 100 }, "restored", { size: 80, color: "green" }],
                 ["arrow", "g6", "g7"],
                 ["write", "g8", { after: "g7", gap: 40 }, "(Zechariah's idea)", { size: 44, color: "gray" }]] },
        { say: "He tells him, don't worry. If from now on you keep the statutes well, you'll go on serving as priest.",
          draw: [["write", "g9", [160, 810], "keep the statutes → stay priest", { size: 56, color: "blue" }]] }
      ]
    },
    {
      id: "olive", title: "Two Olive Trees and a Lampstand",
      beats: [
        { say: "The angel wakes Zechariah up and shows him something. A lampstand of pure gold, with seven lamps, and two olive trees beside it.",
          draw: [["clear"],
                 ["title", "t", "Olive Trees and Lampstand"],
                 ["write", "h1", [120, 290], "gold lampstand + 2 olive trees", { size: 56 }],
                 ["photo", "p4", "img/p3/image11.jpg", [1060, 170, 460, 259], { tilt: -2, caption: "two olive trees and the lampstand" }]] },
        { say: "This is the word of the Lord to Zerubbabel: Not by might, nor by power, but by my Spirit.",
          draw: [["write", "h2", [120, 430], "not by might, nor by power", { size: 60 }],
                 ["write", "h3", [120, 560], "but by My Spirit", { size: 88, color: "red" }],
                 ["box", "h3"]] },
        { say: "These words are for the people saying the temple was behind schedule because Zerubbabel wasn't up to the job.",
          draw: [["write", "h4", [120, 690], "\"Zerubbabel is incompetent\"", { size: 56 }],
                 ["strike", "h4"]] },
        { say: "It doesn't depend on anyone's ability or strength, so don't worry. The house Zerubbabel's hands started, Zerubbabel's hands will finish. And before long, it all came true, just like he said.",
          draw: [["write", "h5", [120, 810], "begun by Zerubbabel → finished by Zerubbabel", { size: 52, color: "green" }]] }
      ]
    },
    {
      id: "scroll", title: "Scroll · Ephah · Chariots",
      beats: [
        { say: "Zechariah sees a flying scroll. Twenty cubits long, ten cubits wide. It's the curse going out over the whole land.",
          draw: [["clear"],
                 ["title", "t", "Scroll · Ephah · Chariots"],
                 ["write", "i1", [120, 290], "flying scroll", { size: 60, color: "blue" }],
                 ["write", "i2", { after: "i1", gap: 40 }, "= curse over all the land", { size: 56 }]] },
        { say: "When they went into the land of Canaan, they said it out loud with their own mouths. Curses from Mount Ebal, blessings from Mount Gerizim. And that scroll of curses is still going around.",
          draw: [["write", "i3", [160, 380], "Ebal curses · Gerizim blessings (Josh 8:30~35)", { size: 46, color: "gray" }]] },
        { say: "You don't have to curse anybody. If someone does what deserves a curse, the curse comes. And you don't have to chase after blessing either. Do what deserves a blessing, and you're blessed.",
          draw: [["write", "i4", [120, 490], "do good → blessed · do evil → cursed", { size: 56, color: "red" }]] },
        { say: "And here's the thing. Being blessed by an unbeliever is an even bigger blessing than being blessed by a believer. Jesus said it too. If you invite and feed people who can't pay you back, you'll have a reward in heaven.",
          draw: [["write", "i5", [160, 570], "an unbeliever's blessing = greater", { size: 50, color: "green" }]] },
        { say: "A woman is sitting in the ephah, and she's wickedness. Evil came back along with them, like the culture of serving the Babylonian goddess. And God takes it away and sends it back to the land of Shinar.",
          draw: [["write", "i6", [120, 690], "woman in ephah = evil", { size: 56 }],
                 ["write", "i7", { after: "i6", gap: 100 }, "sent back to Shinar", { size: 56, color: "blue" }],
                 ["arrow", "i6", "i7"]] },
        { say: "Last, he sees four chariots, pulled by red, black, white, and dappled horses. They're the four winds of heaven. It says the ones who went toward the north country quieted God's spirit. Back then, the north meant Babylon. They must've done something right, don't you think?",
          draw: [["write", "i8", [120, 820], "4 chariots: those sent north (Babylon)", { size: 52 }],
                 ["write", "i9", { after: "i8", gap: 30 }, "→ God at rest", { size: 50, color: "green" }]] }
      ]
    },
    {
      id: "fasting", title: "A Lesson on Fasting",
      beats: [
        { say: "People from Bethel come and ask, Should we weep and fast this year too, the way we've done for so many years?",
          draw: [["clear"],
                 ["title", "t", "A Lesson on Fasting"],
                 ["write", "j1", [120, 290], "\"Fast again this year?\"", { size: 64 }]] },
        { say: "All through the Babylonian Exile, they'd kept fasting in the fourth, fifth, seventh, and tenth months.",
          draw: [["write", "j2", [160, 380], "70 years of exile: fasts in months 4 · 5 · 7 · 10", { size: 46, color: "gray" }]] },
        { say: "And God says, Did you fast for me? Wasn't it for yourselves?",
          draw: [["write", "j3", [120, 500], "fasting for Me?", { size: 64, color: "red" }],
                 ["circle", "j3"]] },
        { say: "Think of kids on a hunger strike. Not one of them is doing it for their parents. Fasting isn't something spiritual and holy. It's throwing a tantrum at God.",
          draw: [["write", "j4", [120, 630], "kid's hunger strike", { size: 56 }],
                 ["write", "j5", { after: "j4", gap: 100 }, "fasting = tantrum at God", { size: 56, color: "blue" }],
                 ["arrow", "j4", "j5"]] },
        { say: "If you don't eat, you die, right? You're putting your life on the line. And he's saying, don't get yourself into a spot where you have to put your life on the line in the first place. Just listen to what the prophets said, and you won't even need to ask whether to fast.",
          draw: [["write", "j6", [120, 760], "heed the Word → no need to fast", { size: 60, color: "green" }],
                 ["under", "j6", "green"]] },
        { say: "God told someone to fast for so many days? That's nonsense. There's not a single place in the Bible like that.",
          draw: [["write", "j7", [160, 845], "God never said \"fast for N days\"", { size: 48, color: "gray" }]] }
      ]
    },
    {
      id: "truth-peace", title: "Love Truth and Peace",
      beats: [
        { say: "God had already told them. Execute true judgment. Show kindness and compassion to one another. And don't oppress the widow, the orphan, the foreigner, or the poor.",
          draw: [["clear"],
                 ["title", "t", "Love Truth and Peace"],
                 ["write", "k1", [120, 290], "true judgment · kindness · mercy", { size: 60 }],
                 ["write", "k2", [160, 370], "don't oppress widow · orphan · foreigner", { size: 48, color: "gray" }]] },
        { say: "But they stopped up their ears, made their hearts as hard as a diamond, and wouldn't listen. So he says, as I called and they would not listen, so they will call and I will not listen.",
          draw: [["write", "k3", [120, 480], "would not listen", { size: 60 }],
                 ["write", "k4", { after: "k3", gap: 110 }, "scattered among nations", { size: 60, color: "red" }],
                 ["arrow", "k3", "k4"]] },
        { say: "Fasting as part of a pious routine. Fasting out of habit. Fasting so people will see you. Fasting because you think it gets you a bigger answer. It's all nonsense. It's exactly what Isaiah said, isn't it?",
          draw: [["write", "k5", [120, 590], "habit · for show · for answers", { size: 56 }],
                 ["strike", "k5"]] },
        { say: "Now that God has put his anger away, here's what you need to do. Speak the truth with your neighbor, and judge with peace. Then, he says, the fasts of the fourth, fifth, seventh, and tenth months will turn into feasts of joy and gladness.",
          draw: [["write", "k6", [120, 700], "fast days", { size: 60 }],
                 ["write", "k7", { after: "k6", gap: 110 }, "feasts of joy and gladness", { size: 60, color: "green" }],
                 ["arrow", "k6", "k7"]] },
        { say: "So when you see this, God isn't mystical. He's personal. He doesn't enjoy people whining, crying, and fasting all the time. You just need to love peace, justice, and truth.",
          draw: [["write", "k8", { at: [800, 830] }, "just love truth and peace", { anchor: "middle", size: 64, color: "red" }],
                 ["under", "k8"]] }
      ]
    },
    {
      id: "ten-men", title: "Ten Men Grab a Robe",
      beats: [
        { say: "He says that in that day, many peoples and strong nations will come to Jerusalem to seek the Lord.",
          draw: [["clear"],
                 ["title", "t", "Ten Men Grab a Robe"],
                 ["write", "l1", [120, 290], "nations come to Jerusalem to seek the Lord", { size: 52 }]] },
        { say: "Ten men from nations of every language will grab the robe of one Jew and say, We've heard that God is with you, so we're going with you.",
          draw: [["write", "l2", [120, 420], "ten men", { size: 64, color: "blue" }],
                 ["write", "l3", { after: "l2", gap: 100 }, "the robe of one Jew", { size: 64, color: "red" }],
                 ["arrow", "l2", "l3"]] },
        { say: "And this actually happens in history. In the time of Ahasuerus, that's Esther's time, and at Pentecost.",
          draw: [["write", "l4", [160, 520], "it happened: Ahasuerus (Esther) · Pentecost", { size: 48, color: "gray" }]] },
        { say: "So today too, when we follow the word, speak the truth with our neighbors, judge fairly, and love truth and peace, and people see us doing well and being blessed, there ought to be people in the world who say, I want to believe in that God too.",
          draw: [["write", "l5", [120, 650], "\"I want to believe in that God too\"", { size: 60, color: "green" }],
                 ["box", "l5"]] },
        { say: "So many people give off only a strange religious smell, and none of the fragrance of Christ. I wish that insulting nickname people have for Christianity would just disappear.",
          draw: [["write", "l6", [120, 790], "religious smell", { size: 56 }],
                 ["strike", "l6"],
                 ["write", "l7", { after: "l6", gap: 60 }, "fragrance of Christ", { size: 60, color: "blue" }]] }
      ]
    },
    {
      id: "messiah", title: "The King on a Donkey",
      beats: [
        { say: "Rejoice greatly, daughter of Zion! Behold, your King comes to you. He is righteous, and having salvation; lowly, and riding on a donkey, even on a colt, the foal of a donkey.",
          draw: [["clear"],
                 ["title", "t", "The King on a Donkey"],
                 ["write", "m1", [120, 300], "a lowly King on a donkey's colt", { size: 60, color: "red" }],
                 ["write", "m2", { after: "m1", gap: 30 }, "Zech 9:9", { size: 44, color: "gray" }]] },
        { say: "Because Jesus came this way, the proud were judged, just like that.",
          draw: [["write", "m3", [120, 430], "the proud = judged by default", { size: 60, color: "blue" }]] },
        { say: "There's also a word that in the last days, a day will come when Jerusalem is blessed once again.",
          draw: [["write", "m4", [160, 520], "a day of blessing for Jerusalem in the end", { size: 48, color: "gray" }]] },
        { say: "Awake, O sword, against my shepherd. Strike the shepherd, and the sheep will be scattered. That's a prophecy about the Messiah.",
          draw: [["write", "m5", [120, 650], "\"strike the shepherd, the sheep scatter\"", { size: 56 }],
                 ["write", "m6", [120, 780], "Messianic prophecy", { size: 72, color: "red" }],
                 ["box", "m6"],
                 ["write", "m7", { after: "m6", gap: 50 }, "Zech 13:7", { size: 44, color: "gray" }]] }
      ]
    },
    {
      id: "second-coming", title: "The Second Coming",
      beats: [
        { say: "When the day of the Lord comes, he says, a day will come when the nations fight against Jerusalem. That's the final war from Ezekiel chapters 38 and 39.",
          draw: [["clear"],
                 ["title", "t", "The Second Coming"],
                 ["write", "n1", [120, 290], "nations fight Jerusalem", { size: 60 }],
                 ["write", "n2", { after: "n1", gap: 40 }, "= final war (Ezek 38~39)", { size: 48, color: "gray" }]] },
        { say: "In that day his feet will stand on the Mount of Olives, which is before Jerusalem on the east, and the Mount of Olives will split in two from east to west.",
          draw: [["write", "n3", [120, 410], "His feet on Mt. of Olives", { size: 60, color: "red" }],
                 ["circle", "n3"],
                 ["write", "n4", { after: "n3", gap: 50 }, "splits east-west", { size: 50, color: "blue" }]] },
        { say: "That's why people made so many graves on the Mount of Olives. At that time, all the holy ones who've fallen asleep in the Lord will rise and come with him. And the earthquake in the days of Uzziah? That's the one we saw in the book of Amos.",
          draw: [["write", "n5", [160, 500], "graves on the mount · saints rise · Uzziah's quake", { size: 44, color: "gray" }]] },
        { say: "The peoples who attacked Jerusalem will rot right where they stand. Their flesh, their eyes, their tongues will rot away. It makes you think of biological and chemical warfare.",
          draw: [["write", "n6", [120, 620], "flesh · eyes · tongue rot", { size: 60 }],
                 ["write", "n7", { after: "n6", gap: 40 }, "bio-chem war?", { size: 56, color: "red" }]] },
        { say: "And he says a day's coming when even the bells on the horses will say, Holy to the Lord, and all people will worship.",
          draw: [["write", "n8", [120, 730], "on horse bells: 'Holy to the Lord'", { size: 60, color: "green" }]] },
        { say: "So Zechariah tells the people who kept picking at Joshua and Zerubbabel, God doesn't see them that way. And it shows us Jesus riding into Jerusalem, all the way to his Second Coming. It's a prophetic book on a huge scale. Alright, now we go on to Ezra chapter 5.",
          draw: [["write", "n9", { at: [800, 840] }, "from the entry to the return: huge scale", { anchor: "middle", size: 56, color: "blue" }],
                 ["under", "n9", "blue"]] }
      ]
    }
  ]
};
