// Zechariah whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does.
window.BOARD = {
  scenes: [
    {
      id: "intro", title: "Zechariah",
      beats: [
        { say: "There is one more prophet who was active at the same time as Haggai. Zechariah.",
          draw: [["title", "t", "Zechariah"],
                 ["write", "a1", [120, 290], "a prophet in Haggai's time", { size: 60 }]] },
        { say: "The name Zechariah means 'the Lord remembers.'",
          draw: [["write", "a2", [120, 410], "Zechariah =", { size: 64 }],
                 ["write", "a3", { after: "a2", gap: 30 }, "the Lord remembers", { size: 64, color: "blue" }],
                 ["under", "a3", "blue"]] },
        { say: "Zechariah, together with Joel, is a prophetic book without rebuke. Joel had no rebuke because the people had already been punished, remember?",
          draw: [["write", "a4", [120, 550], "a prophet with no rebuke", { size: 60, color: "red" }],
                 ["box", "a4"],
                 ["write", "a5", { after: "a4", gap: 50 }, "(like Joel)", { size: 48, color: "gray" }]] },
        { say: "In Zechariah's case, his fellow prophet Haggai had already rebuked them in the sixth month of the second year of Darius. Zechariah himself began in the eighth month of the second year of Darius, and he was young.",
          draw: [["write", "a6", [160, 680], "Haggai already rebuked (Darius yr 2, month 6)", { size: 48 }],
                 ["write", "a7", [160, 780], "Zechariah was young (Darius yr 2, month 8)", { size: 48 }]] }
      ]
    },
    {
      id: "return", title: "Return to Me",
      beats: [
        { say: "The Lord was very displeased with your fathers. How he was displeased is recorded in books like Ezekiel, Zephaniah, and Jeremiah.",
          draw: [["clear"],
                 ["title", "t", "Theme: Return"],
                 ["write", "b1", [120, 290], "very angry with the fathers", { size: 56 }],
                 ["write", "b2", { after: "b1", gap: 40 }, "Ezek · Zeph · Jer", { size: 48, color: "gray" }]] },
        { say: "We have already seen them, so we just understand. 'Right, he was very angry.' Scripture interprets Scripture.",
          draw: [["write", "b3", [120, 410], "Scripture interprets Scripture", { size: 64, color: "blue" }],
                 ["under", "b3", "blue"]] },
        { say: "Return to me, and I will return to you.",
          draw: [["write", "b4", { at: [800, 560] }, "\"Return to me\"", { anchor: "middle", size: 88, color: "red" }],
                 ["circle", "b4"]] },
        { say: "This is the message that runs through the whole Old Testament. People avoid, hide, and run away to the very end, but God keeps saying, to this very day, return, return. And still they did not listen.",
          draw: [["write", "b5", [120, 700], "people: hide and run", { size: 56 }],
                 ["write", "b6", { after: "b5", gap: 80 }, "God: return!", { size: 56, color: "red" }]] },
        { say: "Zechariah was a young prophet, without much experience or knowledge, so the angel always shows him something and confirms it. That makes it much easier for us to understand too.",
          draw: [["write", "b7", [160, 820], "young prophet → angel shows and explains", { size: 52, color: "green" }]] }
      ]
    },
    {
      id: "riders", title: "The Man Among the Myrtles",
      beats: [
        { say: "Zechariah saw at night a man riding on a red horse, standing among the myrtle trees in the valley, and behind him were red, sorrel, and white horses.",
          draw: [["clear"],
                 ["title", "t", "The Man Among the Myrtles"],
                 ["write", "c1", [120, 290], "red · sorrel · white", { size: 60 }],
                 ["photo", "p1", "img/p3/image6.jpg", [1060, 180, 460, 259], { tilt: 2, caption: "vision of the horsemen" }]] },
        { say: "These are the ones the Lord has sent to walk to and fro through the earth. Every day God sends angels to this earth and watches over us with great interest.",
          draw: [["write", "c2", [120, 400], "angels walking the earth", { size: 60, color: "blue" }],
                 ["write", "c3", [160, 480], "watching over us daily", { size: 48, color: "gray" }]] },
        { say: "They are here too. Right now, this is the only place in the whole world holding a four-day Bible camp for young people. He is very interested in this place.",
          draw: [["write", "c4", [120, 600], "they're here too!", { size: 60, color: "green" }]] },
        { say: "The angel of the Lord standing among the myrtles is a little different; he receives the reports of the other angels. We see him as Jesus appearing in the Old Testament.",
          draw: [["write", "c5", [120, 720], "angel of the Lord", { size: 56 }],
                 ["write", "c6", { after: "c5", gap: 100 }, "Jesus in the OT", { size: 60, color: "red" }],
                 ["arrow", "c5", "c6"],
                 ["box", "c6"]] },
        { say: "The angel who appeared to Manoah said his name was Wonderful, and the angel who appeared to Gideon accepted an offering. Here it is Jesus pleading: how long will you not have mercy on Jerusalem? You have been angry for seventy years.",
          draw: [["write", "c7", [160, 820], "Manoah · Gideon · \"angry for 70 years\" plea", { size: 48, color: "gray" }]] }
      ]
    },
    {
      id: "nations", title: "Anger at the Nations at Ease",
      beats: [
        { say: "The angels who were sent went throughout the whole earth, and they found it sitting still and at rest. Still and at rest?",
          draw: [["clear"],
                 ["title", "t", "Anger at the Nations at Ease"],
                 ["write", "d1", [120, 290], "\"all the earth is at rest\"", { size: 60 }],
                 ["write", "d2", { after: "d1", gap: 30 }, "?", { size: 80, color: "red" }]] },
        { say: "God was only a little angry with Jerusalem, but the nations used their strength to add to her suffering. And after that, God is very angry with the nations that are at ease and comfortable.",
          draw: [["write", "d3", [120, 410], "I was a little angry", { size: 56 }],
                 ["write", "d4", { after: "d3", gap: 50 }, "nations added harm", { size: 56, color: "red" }],
                 ["write", "d5", [160, 490], "→ very angry with nations at ease", { size: 52, color: "blue" }]] },
        { say: "You saw Ezekiel earlier, right? After judging Israel with the rod called Babylon, God, with the rod still in hand, beat all the ones who had played along, Egypt, Moab, Ammon and the rest. And at the end, he snaps the rod too.",
          draw: [["write", "d6", [120, 610], "rod: Babylon", { size: 56 }],
                 ["write", "d7", { after: "d6", gap: 100 }, "Egypt · Moab · Ammon too", { size: 56 }],
                 ["arrow", "d6", "d7"],
                 ["write", "d8", [160, 690], "then the rod is broken", { size: 48, color: "red" }]] },
        { say: "Therefore I have returned to Jerusalem with mercies; my house shall be built in it. Like Haggai, Zechariah also says the temple will be built.",
          draw: [["write", "d9", [120, 770], "returned with mercy → My house will be built", { size: 52, color: "green" }]] },
        { say: "We saw God leaving in Ezekiel chapter 11. He left, and after seventy years he came back.",
          draw: [["write", "d10", [160, 845], "Ezek 11: He left → back after 70 years", { size: 46, color: "gray" }]] }
      ]
    },
    {
      id: "horns", title: "Four Horns and a Measuring Line",
      beats: [
        { say: "Zechariah sees four horns. The horns that scattered Judah, Israel, and Jerusalem, that is, the great powers.",
          draw: [["clear"],
                 ["title", "t", "Four Horns, Measuring Line"],
                 ["write", "e1", [120, 290], "4 horns = powers that scattered Judah", { size: 56 }]] },
        { say: "And he shows him four craftsmen, skilled workers, who come to cast down those horns.",
          draw: [["write", "e2", [120, 400], "4 craftsmen", { size: 60, color: "blue" }],
                 ["write", "e3", { after: "e2", gap: 110 }, "cast down the horns", { size: 60, color: "red" }],
                 ["arrow", "e2", "e3"]] },
        { say: "Then a man with a measuring line in his hand goes to measure Jerusalem. In today's terms, this is what he saw. In the old days they used a measuring line; these days they use laser equipment.",
          draw: [["write", "e4", [120, 530], "man with a measuring line", { size: 60 }],
                 ["photo", "p2", "img/p3/image9.jpg", [1080, 470, 420, 236], { tilt: -2, caption: "surveying today" }]] },
        { say: "What does it mean to survey? It means something is about to happen: a road or a bridge, a building, a street. They are going to make something.",
          draw: [["write", "e5", [120, 640], "survey = about to build", { size: 60, color: "blue" }],
                 ["under", "e5", "blue"]] },
        { say: "He shows that people will live in Jerusalem again and buildings will be built. And God himself will be a wall of fire around it.",
          draw: [["write", "e6", [120, 770], "people will live there again", { size: 60, color: "green" }],
                 ["write", "e7", [160, 840], "God, a wall of fire around", { size: 44, color: "gray" }]] }
      ]
    },
    {
      id: "joshua", title: "Joshua in Filthy Clothes",
      beats: [
        { say: "Joshua the high priest is standing before the angel of the Lord, and Satan is standing at his right hand to accuse him. Here too, the angel of the Lord seems to be Jesus.",
          draw: [["clear"],
                 ["title", "t", "Joshua in Filthy Clothes"],
                 ["write", "f1", [120, 290], "Joshua", { size: 64 }],
                 ["write", "f2", { after: "f1", gap: 50 }, "↔", { size: 64, color: "gray" }],
                 ["write", "f3", { after: "f2", gap: 50 }, "Satan accuses", { size: 64, color: "red" }],
                 ["photo", "p3", "img/p3/image10.jpg", [1100, 170, 420, 236], { tilt: 2, caption: "Joshua the high priest" }]] },
        { say: "The problem was that the leaders, including Joshua the high priest, had taken foreign women as wives.",
          draw: [["write", "f4", [120, 410], "leaders married foreign women", { size: 60, color: "red" }],
                 ["under", "f4"]] },
        { say: "Why did they not have wives? It is not that they had none; their wives did not come out of Babylon. So they took foreign women as wives.",
          draw: [["write", "f5", [160, 510], "their wives stayed in Babylon", { size: 50, color: "gray" }]] },
        { say: "Over this issue, sure enough, Satan latched on and was accusing them relentlessly. God really hates hearing Satan's accusations.",
          draw: [["write", "f6", [120, 640], "Satan accuses nonstop", { size: 60 }],
                 ["write", "f7", { after: "f6", gap: 40 }, "God hates it", { size: 56, color: "blue" }]] },
        { say: "What did Nathan say at the time of David and Bathsheba? You have given the enemy occasion to blaspheme. That is why we must keep the statutes and ordinances.",
          draw: [["write", "f8", [120, 770], "give no grounds to accuse → statutes & laws", { size: 52, color: "green" }],
                 ["write", "f9", [160, 840], "David · Bathsheba · Nathan", { size: 44, color: "gray" }]] }
      ]
    },
    {
      id: "forgive", title: "Forgiven and Restored",
      beats: [
        { say: "But God does not scold Joshua; he rebukes Satan. Is not this a burning stick plucked out of the fire?",
          draw: [["clear"],
                 ["title", "t", "Forgiven and Restored"],
                 ["write", "g1", [120, 290], "scold Joshua", { size: 60 }],
                 ["strike", "g1"],
                 ["write", "g2", { after: "g1", gap: 60 }, "rebuke Satan", { size: 64, color: "red" }],
                 ["circle", "g2"]] },
        { say: "Wearing filthy clothes means there is sin.",
          draw: [["write", "g3", [120, 420], "filthy clothes = sin", { size: 60 }]] },
        { say: "But God does not even rebuke him. He says, take off the filthy clothes and put rich clothing on him. That is forgiveness.",
          draw: [["write", "g4", [120, 540], "dressed in fine clothes", { size: 60 }],
                 ["write", "g5", { after: "g4", gap: 110 }, "forgiven", { size: 80, color: "green" }],
                 ["arrow", "g4", "g5"]] },
        { say: "Zechariah must have gotten excited, because he chimes in: let them set a clean turban on his head. And God accepts it. Putting on the clean turban means he is restored to office.",
          draw: [["write", "g6", [120, 680], "clean turban", { size: 60 }],
                 ["write", "g7", { after: "g6", gap: 100 }, "restored", { size: 80, color: "green" }],
                 ["arrow", "g6", "g7"],
                 ["write", "g8", { after: "g7", gap: 40 }, "(Zechariah's idea)", { size: 44, color: "gray" }]] },
        { say: "He tells him not to worry: if from now on he keeps the statutes well, he will go on serving as priest.",
          draw: [["write", "g9", [160, 810], "keep the statutes → stay priest", { size: 56, color: "blue" }]] }
      ]
    },
    {
      id: "olive", title: "Two Olive Trees and a Lampstand",
      beats: [
        { say: "The angel wakes Zechariah up and shows him. There is a lampstand of pure gold with seven lamps, and beside it two olive trees.",
          draw: [["clear"],
                 ["title", "t", "Olive Trees and Lampstand"],
                 ["write", "h1", [120, 290], "gold lampstand + 2 olive trees", { size: 56 }],
                 ["photo", "p4", "img/p3/image11.jpg", [1060, 170, 460, 259], { tilt: -2, caption: "two olive trees and the lampstand" }]] },
        { say: "This is the word of the Lord to Zerubbabel: Not by might, nor by power, but by my Spirit.",
          draw: [["write", "h2", [120, 430], "not by might, nor by power", { size: 60 }],
                 ["write", "h3", [120, 560], "but by My Spirit", { size: 88, color: "red" }],
                 ["box", "h3"]] },
        { say: "These words are spoken to people who said the temple building was delayed because Zerubbabel was incompetent.",
          draw: [["write", "h4", [120, 690], "\"Zerubbabel is incompetent\"", { size: 56 }],
                 ["strike", "h4"]] },
        { say: "It is not by any person's ability or strength, so don't worry. The house that Zerubbabel's hands began, Zerubbabel's hands will finish. And before long, it all came true just as he said.",
          draw: [["write", "h5", [120, 810], "begun by Zerubbabel → finished by Zerubbabel", { size: 52, color: "green" }]] }
      ]
    },
    {
      id: "scroll", title: "Scroll · Ephah · Chariots",
      beats: [
        { say: "Zechariah sees a flying scroll. Twenty cubits long and ten cubits wide. It is the curse that goes out over the whole land.",
          draw: [["clear"],
                 ["title", "t", "Scroll · Ephah · Chariots"],
                 ["write", "i1", [120, 290], "flying scroll", { size: 60, color: "blue" }],
                 ["write", "i2", { after: "i1", gap: 40 }, "= curse over all the land", { size: 56 }]] },
        { say: "When they entered the land of Canaan, they proclaimed it with their own mouths, curses from Mount Ebal and blessings from Mount Gerizim. That scroll of curses is still going around.",
          draw: [["write", "i3", [160, 380], "Ebal curses · Gerizim blessings (Josh 8:30~35)", { size: 46, color: "gray" }]] },
        { say: "You don't have to curse anyone; if someone does what deserves a curse, the curse comes. And you don't have to chase blessing; if you do what deserves a blessing, you are blessed.",
          draw: [["write", "i4", [120, 490], "do good → blessed · do evil → cursed", { size: 56, color: "red" }]] },
        { say: "Especially, being blessed by an unbeliever is a greater blessing than being blessed by a believer. Jesus also said that if you invite and feed those who cannot repay you, you will have a reward in heaven.",
          draw: [["write", "i5", [160, 570], "an unbeliever's blessing = greater", { size: 50, color: "green" }]] },
        { say: "A woman is sitting in the ephah, and this is wickedness. Evil came back along with them, like the culture of serving the Babylonian goddess, and God removes it and sends it back to the land of Shinar.",
          draw: [["write", "i6", [120, 690], "woman in ephah = evil", { size: 56 }],
                 ["write", "i7", { after: "i6", gap: 100 }, "sent back to Shinar", { size: 56, color: "blue" }],
                 ["arrow", "i6", "i7"]] },
        { say: "Finally he sees four chariots, drawn by red, black, white, and dappled horses, the four winds of heaven. It says those who went toward the north country quieted God's spirit. At that time the north meant Babylon. They must have done something right, don't you think?",
          draw: [["write", "i8", [120, 820], "4 chariots: those sent north (Babylon)", { size: 52 }],
                 ["write", "i9", { after: "i8", gap: 30 }, "→ God at rest", { size: 50, color: "green" }]] }
      ]
    },
    {
      id: "fasting", title: "A Lesson on Fasting",
      beats: [
        { say: "People from Bethel come and ask: Should we weep and fast this year too, as we have done for so many years?",
          draw: [["clear"],
                 ["title", "t", "A Lesson on Fasting"],
                 ["write", "j1", [120, 290], "\"Fast again this year?\"", { size: 64 }]] },
        { say: "During the Babylonian Exile, they had kept on fasting in the fourth, fifth, seventh, and tenth months.",
          draw: [["write", "j2", [160, 380], "70 years of exile: fasts in months 4 · 5 · 7 · 10", { size: 46, color: "gray" }]] },
        { say: "Then God says: Did you fast for me? Wasn't it for yourselves?",
          draw: [["write", "j3", [120, 500], "fasting for Me?", { size: 64, color: "red" }],
                 ["circle", "j3"]] },
        { say: "Among children on a hunger strike, not one is doing it for their parents. Fasting is not something spiritual and holy. It is throwing a tantrum at God.",
          draw: [["write", "j4", [120, 630], "kid's hunger strike", { size: 56 }],
                 ["write", "j5", { after: "j4", gap: 100 }, "fasting = tantrum at God", { size: 56, color: "blue" }],
                 ["arrow", "j4", "j5"]] },
        { say: "If you don't eat, you die, right? You are staking your life on it. He is saying, don't create a situation where you have to stake your life in the first place. If you just listen to what the prophets proclaimed, you won't even need to ask whether to fast.",
          draw: [["write", "j6", [120, 760], "heed the Word → no need to fast", { size: 60, color: "green" }],
                 ["under", "j6", "green"]] },
        { say: "God told someone to fast for so many days? That is nonsense. There is not a single place in the Bible like that.",
          draw: [["write", "j7", [160, 845], "God never said \"fast for N days\"", { size: 48, color: "gray" }]] }
      ]
    },
    {
      id: "truth-peace", title: "Love Truth and Peace",
      beats: [
        { say: "God had already said it. Execute true judgment, show kindness and compassion to one another, and do not oppress the widow, the orphan, the foreigner, or the poor.",
          draw: [["clear"],
                 ["title", "t", "Love Truth and Peace"],
                 ["write", "k1", [120, 290], "true judgment · kindness · mercy", { size: 60 }],
                 ["write", "k2", [160, 370], "don't oppress widow · orphan · foreigner", { size: 48, color: "gray" }]] },
        { say: "But they stopped their ears and made their hearts as hard as a diamond, and would not listen. So he says, as I called and they would not listen, so they will call and I will not listen.",
          draw: [["write", "k3", [120, 480], "would not listen", { size: 60 }],
                 ["write", "k4", { after: "k3", gap: 110 }, "scattered among nations", { size: 60, color: "red" }],
                 ["arrow", "k3", "k4"]] },
        { say: "Fasting as part of a pious routine, fasting out of habit, fasting to be seen by others, fasting because you believe it brings a bigger answer. All of it is nonsense. It's exactly what Isaiah said, isn't it?",
          draw: [["write", "k5", [120, 590], "habit · for show · for answers", { size: 56 }],
                 ["strike", "k5"]] },
        { say: "Now that God has withdrawn his anger, what you must do is speak the truth with your neighbor and judge with peace. Then, he says, the fasts of the fourth, fifth, seventh, and tenth months will become feasts of joy and gladness.",
          draw: [["write", "k6", [120, 700], "fast days", { size: 60 }],
                 ["write", "k7", { after: "k6", gap: 110 }, "feasts of joy and gladness", { size: 60, color: "green" }],
                 ["arrow", "k6", "k7"]] },
        { say: "When you see this, God is not mystical; he is personal. He does not enjoy people whining, crying, and fasting all the time. You just have to love peace, justice, and truth.",
          draw: [["write", "k8", { at: [800, 830] }, "just love truth and peace", { anchor: "middle", size: 64, color: "red" }],
                 ["under", "k8"]] }
      ]
    },
    {
      id: "ten-men", title: "Ten Men Grab a Robe",
      beats: [
        { say: "He says that in that day many peoples and strong nations will come to Jerusalem to seek the Lord.",
          draw: [["clear"],
                 ["title", "t", "Ten Men Grab a Robe"],
                 ["write", "l1", [120, 290], "nations come to Jerusalem to seek the Lord", { size: 52 }]] },
        { say: "Ten men from nations of every language will take hold of the robe of one Jew and say: We have heard that God is with you, so we will go with you.",
          draw: [["write", "l2", [120, 420], "ten men", { size: 64, color: "blue" }],
                 ["write", "l3", { after: "l2", gap: 100 }, "the robe of one Jew", { size: 64, color: "red" }],
                 ["arrow", "l2", "l3"]] },
        { say: "This actually happens in history. In the time of Ahasuerus, that is, in Esther's time, and at Pentecost.",
          draw: [["write", "l4", [160, 520], "it happened: Ahasuerus (Esther) · Pentecost", { size: 48, color: "gray" }]] },
        { say: "So today too, when we follow the word, speak the truth with our neighbors, judge fairly, love truth and peace, and people see us doing well and being blessed, there should be people in the world who say, 'I want to believe in that God too.'",
          draw: [["write", "l5", [120, 650], "\"I want to believe in that God too\"", { size: 60, color: "green" }],
                 ["box", "l5"]] },
        { say: "There are so many people who give off only a strange religious smell and none of the fragrance of Christ. I wish the insulting nickname people use for Christianity would disappear.",
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
        { say: "Because Jesus came this way, the proud were judged automatically.",
          draw: [["write", "m3", [120, 430], "the proud = judged by default", { size: 60, color: "blue" }]] },
        { say: "There is also a word that in the last days, a day will come when Jerusalem is blessed once more.",
          draw: [["write", "m4", [160, 520], "a day of blessing for Jerusalem in the end", { size: 48, color: "gray" }]] },
        { say: "Awake, O sword, against my shepherd. Strike the shepherd, and the sheep will be scattered. This is a prophecy of the Messiah.",
          draw: [["write", "m5", [120, 650], "\"strike the shepherd, the sheep scatter\"", { size: 56 }],
                 ["write", "m6", [120, 780], "Messianic prophecy", { size: 72, color: "red" }],
                 ["box", "m6"],
                 ["write", "m7", { after: "m6", gap: 50 }, "Zech 13:7", { size: 44, color: "gray" }]] }
      ]
    },
    {
      id: "second-coming", title: "The Second Coming",
      beats: [
        { say: "When the day of the Lord comes, he says a day will come when the nations fight against Jerusalem. It is the final war from Ezekiel chapters 38 and 39.",
          draw: [["clear"],
                 ["title", "t", "The Second Coming"],
                 ["write", "n1", [120, 290], "nations fight Jerusalem", { size: 60 }],
                 ["write", "n2", { after: "n1", gap: 40 }, "= final war (Ezek 38~39)", { size: 48, color: "gray" }]] },
        { say: "In that day his feet will stand on the Mount of Olives, which is before Jerusalem on the east, and the Mount of Olives will split in two from east to west.",
          draw: [["write", "n3", [120, 410], "His feet on Mt. of Olives", { size: 60, color: "red" }],
                 ["circle", "n3"],
                 ["write", "n4", { after: "n3", gap: 50 }, "splits east-west", { size: 50, color: "blue" }]] },
        { say: "That is why people made many graves on the Mount of Olives. At that time all the holy ones who have fallen asleep in the Lord will rise and come with him. The earthquake in the days of Uzziah is the one we saw in the book of Amos.",
          draw: [["write", "n5", [160, 500], "graves on the mount · saints rise · Uzziah's quake", { size: 44, color: "gray" }]] },
        { say: "The peoples who attacked Jerusalem will rot while they stand: their flesh, their eyes, and their tongues will rot away. It brings to mind biological and chemical warfare.",
          draw: [["write", "n6", [120, 620], "flesh · eyes · tongue rot", { size: 60 }],
                 ["write", "n7", { after: "n6", gap: 40 }, "bio-chem war?", { size: 56, color: "red" }]] },
        { say: "And he says a day will also come when even the bells of the horses will be inscribed 'Holy to the Lord,' and all people will worship.",
          draw: [["write", "n8", [120, 730], "on horse bells: 'Holy to the Lord'", { size: 60, color: "green" }]] },
        { say: "Zechariah tells those who kept picking at Joshua and Zerubbabel that God does not see them that way, and it shows Jesus' entry into Jerusalem all the way to his Second Coming. It is a prophetic book on a tremendous scale. Now we go on to Ezra chapter 5.",
          draw: [["write", "n9", { at: [800, 840] }, "from the entry to the return: huge scale", { anchor: "middle", size: 56, color: "blue" }],
                 ["under", "n9", "blue"]] }
      ]
    }
  ]
};
