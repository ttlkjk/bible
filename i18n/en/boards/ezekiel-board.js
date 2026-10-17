// Ezekiel whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does.
window.BOARD = {
  scenes: [
    {
      id: "overview", title: "Ezekiel Overview",
      beats: [
        { say: "Okay, Ezekiel. In Hebrew it's Yechezkel, and it means God strengthened. So why did God need to strengthen him?",
          draw: [["title", "t", "Ezekiel Overview"],
                 ["write", "a1", [120, 290], "Ezekiel =", { size: 64 }],
                 ["write", "a2", { after: "a1", gap: 30 }, "God strengthened", { size: 64, color: "blue" }],
                 ["under", "a2", "blue"]] },
        { say: "He'd been taken away in the first deportation, and there'd be a second and a third still to come. Back home, Jeremiah spoke God's word. Over in Babylon, Ezekiel did.",
          draw: [["write", "a3", [120, 410], "homeland: Jeremiah", { size: 60 }],
                 ["write", "a4", { after: "a3", gap: 80 }, "Babylon: Ezekiel", { size: 60, color: "red" }],
                 ["circle", "a4"]] },
        { say: "In about seven years, Jerusalem would fall. But the people said, come on, the nation won't fall. What did we do that was so bad? The temple's still there, so we'll be going back. Isn't God just too weak?",
          draw: [["write", "a5", [160, 510], "\"Surely not?\" · \"What did we do?\" · \"Is God weak?\"", { size: 46, color: "gray" }]] },
        { say: "Here's an easy way to see it. Jeremiah explains why they must be taken away. Daniel shows what they learned after they were taken. Ezekiel explains why they were taken. Got it? Put it like that, and you can see right away what each book is about.",
          draw: [["write", "a6", [120, 620], "Jeremiah: why they must go", { size: 56 }],
                 ["write", "a7", [120, 700], "Daniel: what they learned there", { size: 56 }],
                 ["write", "a8", [120, 780], "Ezekiel: why they were taken", { size: 56, color: "red" }],
                 ["box", "a8"]] },
        { say: "The people back then didn't listen. Jeremiah preached for forty years, and nobody listened. Still, it was written down, to show every generation that things happen just as God said. The Bible is like a love letter God wrote to you.",
          draw: [["write", "a9", [1030, 700], "Bible =", { size: 56 }],
                 ["write", "a10", [1030, 790], "God's love letter", { size: 60, color: "green" }]] }
      ]
    },
    {
      id: "call", title: "Ezekiel's Call",
      beats: [
        { say: "The first deportation was in 606 B.C. Ezekiel seems to have been taken to Babylon in the second one, in 597 B.C., when he was about twenty-five.",
          draw: [["clear"],
                 ["title", "t", "Ezekiel's call"],
                 ["write", "b1", [120, 290], "2nd exile 597 B.C.", { size: 60 }],
                 ["write", "b2", { after: "b1", gap: 40 }, "about 25", { size: 52, color: "gray" }],
                 ["photo", "p2", "img/p2/image49.jpg", [1060, 170, 460, 259], { tilt: -2, caption: "Ezekiel by the river Chebar" }]] },
        { say: "By the river Chebar, in the land of the Chaldeans, the heavens were opened, and God showed him visions.",
          draw: [["write", "b3", [120, 400], "visions by the Chebar", { size: 60, color: "blue" }]] },
        { say: "Now, there are lots of explanations for the thirtieth year, but hardly any of them fit. If it means he was thirty years old, it makes sense. God usually calls people at thirty. Jesus, John the Baptist, Jeremiah, and Zechariah, all thirty.",
          draw: [["write", "b4", [120, 520], "30th year = age 30", { size: 60, color: "red" }],
                 ["write", "b5", [160, 600], "Jesus · John the Baptist · Jeremiah · Zechariah: 30 too", { size: 46, color: "gray" }]] },
        { say: "Ezekiel didn't minister with words alone. He did strange things, things that would grab people's attention.",
          draw: [["write", "b6", [120, 710], "words + strange acts", { size: 60 }]] },
        { say: "As an adamant harder than flint have I made thy forehead. The times were evil, so he had to minister with a face as hard as diamond. If little things hurt you easily, it's hard to do God's work well.",
          draw: [["write", "b7", [120, 830], "forehead like diamond", { size: 64, color: "red" }],
                 ["box", "b7"],
                 ["write", "b8", { after: "b7", gap: 50 }, "don't hurt easily", { size: 48, color: "gray" }]] }
      ]
    },
    {
      id: "misunderstand", title: "The Exiles' Misunderstandings",
      beats: [
        { say: "In Ezekiel, God's anger comes down to five things the exiles got wrong. First, they misunderstood the Almighty God. Even after the nation fell and they were punished hard, they still misread God with their short-sighted thinking.",
          draw: [["clear"],
                 ["title", "t", "The exiles' misunderstandings"],
                 ["write", "c1", [120, 290], "① misread the Almighty", { size: 60 }]] },
        { say: "Second, they thought, sure, we're not without sin, but our sins aren't that big.",
          draw: [["write", "c2", [120, 400], "② our sins aren't that big", { size: 60 }]] },
        { say: "Third, they thought their ancestors ate lots of grapes, and that's why their own teeth were sour.",
          draw: [["write", "c3", [120, 510], "③ fathers ate grapes, my teeth are sour", { size: 56, color: "red" }]] },
        { say: "Fourth, they lost heart. They thought there was no hope.",
          draw: [["write", "c4", [120, 620], "④ no hope, lost heart", { size: 60 }]] },
        { say: "Fifth, they thought God wasn't being fair. Babylon is way more wicked than we are, so why does God let Babylon win and make us lose? We saw this in Habakkuk too.",
          draw: [["write", "c5", [120, 730], "⑤ God is not fair", { size: 60 }],
                 ["write", "c6", [160, 810], "Babylon is worse, so why? (Habakkuk)", { size: 46, color: "gray" }]] }
      ]
    },
    {
      id: "cherubim", title: "A Mysterious Flying Object",
      beats: [
        { say: "Chapters 1 to 3 are Ezekiel's call. It's mysterious, majestic, and strange. Especially the living creatures that show up. They look like some kind of unidentified flying object.",
          draw: [["clear"],
                 ["title", "t", "Mysterious flying object"],
                 ["write", "d1", [120, 290], "ch. 1~3: the call", { size: 60 }],
                 ["write", "d2", [120, 400], "living creatures = UFO?", { size: 60, color: "blue" }],
                 ["photo", "p3", "img/p2/image53.jpg", [1080, 170, 440, 248], { tilt: 2, caption: "The flying object Ezekiel saw" }]] },
        { say: "They dart here and there like lightning, so fast they shoot straight to where they're going. Zoom!",
          draw: [["write", "d3", [160, 490], "like lightning, straight line, zoom~", { size: 52, color: "gray" }]] },
        { say: "What are they? Chapter 10 tells us. They're angels called cherubim.",
          draw: [["write", "d4", [120, 610], "ch. 10: they are cherubim", { size: 60, color: "red" }],
                 ["under", "d4"]] },
        { say: "When we hear angel, we picture a pretty woman, right? But there are no women among the angels. No men either, of course. Some look like an ox, some like an eagle, some like a man.",
          draw: [["write", "d5", [120, 730], "angel = pretty woman?", { size: 56 }],
                 ["strike", "d5"],
                 ["write", "d6", { after: "d5", gap: 50 }, "like ox · eagle · man", { size: 56, color: "blue" }]] },
        { say: "If anything, the angels say it the other way around. When one of them is a little good-looking, they go, wow, he looks like a human!",
          draw: [["write", "d7", [160, 830], "\"Wow~ looks like a human!\"", { size: 56, color: "green" }]] }
      ]
    },
    {
      id: "scroll", title: "Eat the Scroll",
      beats: [
        { say: "In chapter 2, God gives Ezekiel a stern warning. These people are a rebellious house, a thick-skinned bunch. Even so, don't be afraid of them. Open your mouth and eat what I give you.",
          draw: [["clear"],
                 ["title", "t", "Eat the scroll"],
                 ["write", "e1", [120, 290], "\"Open your mouth and eat\"", { size: 64 }],
                 ["photo", "p4", "img/p2/image54.jpg", [1100, 170, 420, 236], { tilt: -2, caption: "Ezekiel's angels, as imagined" }]] },
        { say: "A hand gives him a scroll, and written in it are lamentations and woe. In chapter 3 he eats it, and it's as sweet as honey. Want to taste it?",
          draw: [["write", "e2", [120, 400], "scroll of lament and woe", { size: 60 }],
                 ["write", "e3", [120, 520], "→ sweet as honey", { size: 72, color: "red" }],
                 ["circle", "e3"]] },
        { say: "When you read the words and they sound like God's word to you, they really are sweet as honey. I used to think that was just a figure of speech. But after I met God, I was reading Leviticus, and I couldn't stop crying.",
          draw: [["write", "e4", [120, 640], "heard as God's word = truly sweet", { size: 60, color: "green" }]] },
        { say: "The God in Leviticus cared so tenderly for orphans, and widows, and the powerless. As I kept reading the Bible like that, I really did taste sweetness in my mouth. It wasn't just a figure of speech after all.",
          draw: [["write", "e5", [160, 720], "reading Leviticus, sweet taste in mouth → not a figure of speech", { size: 46, color: "gray" }]] },
        { say: "They're your own people, so don't worry. I've made your forehead like diamond. In other words, he gave him a face of iron. Whether they will hear, or whether they will forbear, tell them, thus saith the Lord GOD. And me? I just preach it with that same heart.",
          draw: [["write", "e6", [120, 830], "speak, whether they hear or not", { size: 64, color: "red" }],
                 ["under", "e6"]] }
      ]
    },
    {
      id: "son-of-man", title: "Son of Man",
      beats: [
        { say: "God calls Ezekiel son of man. In Korean that's literally son of a person. It's a straight translation of the Hebrew, ben adam.",
          draw: [["clear"],
                 ["title", "t", "Son of man"],
                 ["write", "f1", [120, 290], "son of man = ben adam = son of a person", { size: 60, color: "blue" }]] },
        { say: "Said very politely, it'd be, O honored offspring of humankind. A bit lower, you child of man. And talking down, you little punk of a human.",
          draw: [["write", "f2", [160, 400], "O honored offspring of humankind", { size: 52, color: "gray" }],
                 ["write", "f3", [160, 490], "you child of man", { size: 52 }],
                 ["write", "f4", [160, 580], "you little punk of a human", { size: 52, color: "gray" }]] },
        { say: "God has no reason to be extra polite with Ezekiel, but calling him a punk would be a bit much. If God's calling him in anger, you child of man is about right.",
          draw: [["strike", "f2"],
                 ["strike", "f4"],
                 ["circle", "f3", "red"]] },
        { say: "I've made you a watchman for Israel. If you warn them and they don't listen, that's fine. But if you don't warn them and they die, I won't let you off either. Pretty chilling, isn't it?",
          draw: [["write", "f5", [120, 710], "watchman: don't warn, your fault", { size: 60, color: "red" }],
                 ["box", "f5"]] },
        { say: "I'm God, I'm almighty, and still nothing works out. That's God's heart, as the prophets of that same time heard it. Can you feel that helplessness, and that anger?",
          draw: [["write", "f6", [120, 830], "God's heart: helplessness and anger", { size: 60, color: "blue" }]] }
      ]
    },
    {
      id: "dung", title: "Bread Baked on Cow Dung",
      beats: [
        { say: "In chapter 4, God tells him to prophesy for 390 days, baking his bread over a fire of human dung. Yes, human dung. Poop. When dung dries out well, it burns well.",
          draw: [["clear"],
                 ["title", "t", "Bread baked on cow dung"],
                 ["write", "g1", [120, 290], "390 days · bread on dung fire", { size: 60 }],
                 ["photo", "p5", "img/p2/image57.jpg", [1080, 180, 440, 248], { tilt: 2, caption: "Fire of dried cow dung" }]] },
        { say: "Even today, nomads dry cow dung and horse dung and burn it for fuel. It burns hot. I saw it on a mission trip to Mongolia. And if you burn some that isn't quite dry? The fragrance fills the whole place.",
          draw: [["write", "g2", [160, 380], "nomads' fuel · the 'fragrance' I met in Mongolia", { size: 46, color: "gray" }]] },
        { say: "Ezekiel jumps up. Lord, I've never in my life eaten anything so unclean! And God says, all right, use cow dung instead. What a relief, right?",
          draw: [["write", "g3", [120, 500], "human dung", { size: 60 }],
                 ["strike", "g3"],
                 ["write", "g4", { after: "g3", gap: 110 }, "cow dung instead", { size: 60, color: "blue" }],
                 ["arrow", "g3", "g4"]] },
        { say: "They won't listen to words, so he preaches with his body. If you're eating bread smoked over cow dung, the whole neighborhood's going to come running. What on earth is that ancient stink? What do you think you're doing? Oh, you'll all be eating this soon.",
          draw: [["write", "g5", [120, 630], "preaching with the body", { size: 60, color: "red" }],
                 ["box", "g5"],
                 ["write", "g6", { after: "g5", gap: 50 }, "\"You'll eat it soon too~\"", { size: 50, color: "gray" }]] },
        { say: "He's showing ahead of time how miserably these people will live, eating unclean food. And eating bread by weight is picture language for a terrible famine.",
          draw: [["write", "g7", [120, 780], "bread by weight = severe famine", { size: 60, color: "blue" }]] }
      ]
    },
    {
      id: "judgment", title: "Prophecies of Destruction",
      beats: [
        { say: "In chapter 5, God tells him to shave off his hair. A third he strikes with the sword and scatters, a third he burns, and a third he scatters to the wind.",
          draw: [["clear"],
                 ["title", "t", "Prophecies of doom (ch. 5~7)"],
                 ["write", "h1", { at: [330, 330] }, "1/3 sword", { anchor: "middle", size: 72, color: "red" }],
                 ["write", "h2", { at: [800, 330] }, "1/3 fire", { anchor: "middle", size: 72, color: "red" }],
                 ["write", "h3", { at: [1270, 330] }, "1/3 wind", { anchor: "middle", size: 72, color: "red" }]] },
        { say: "Just like hair belongs to a person, they all belong to me. But I'll pull them all out, strike them with the sword, burn them with fire, and scatter them among the nations. And we've seen it all happen, haven't we? The sword of Babylon, Jerusalem burned down, and Assyria scattering the people of Samaria.",
          draw: [["write", "h4", { at: [330, 440] }, "Babylon's sword", { anchor: "middle", size: 52 }],
                 ["write", "h5", { at: [800, 440] }, "Jerusalem burned", { anchor: "middle", size: 52 }],
                 ["write", "h6", { at: [1270, 440] }, "Assyria scatters", { anchor: "middle", size: 52 }]] },
        { say: "In chapter 6, God tells him to clap his hands and stamp his feet and announce that Israel, who broke the covenant, will be destroyed. Anything to get their attention.",
          draw: [["write", "h7", [120, 580], "ch. 6: clap hands, stamp feet", { size: 60 }]] },
        { say: "Chapter 7 is judgment right around the corner. The time is come, the day of trouble is near. Behold the day, behold, it is come.",
          draw: [["write", "h8", [120, 700], "ch. 7: \"Behold the day\"", { size: 64, color: "red" }],
                 ["circle", "h8"]] },
        { say: "He was captured in 597 B.C. and called in 592. So the fall in 586 was only five or six years away.",
          draw: [["write", "h9", [120, 820], "597 exile → 592 call → 586 fall", { size: 56 }],
                 ["write", "h10", { after: "h9", gap: 40 }, "5~6 yrs left", { size: 56, color: "red" }],
                 ["under", "h10"]] }
      ]
    },
    {
      id: "abominations", title: "Jerusalem's Sins",
      beats: [
        { say: "Chapter 8. The elders of Judah crowd into Ezekiel's house and question him, almost accusing him. Why did God wreck us like this? What did we do wrong? But young Ezekiel isn't ready, and he can't answer.",
          draw: [["clear"],
                 ["title", "t", "Jerusalem's sins (ch. 8)"],
                 ["write", "i1", [120, 290], "elders: \"What did we do wrong?\"", { size: 60 }]] },
        { say: "God's short on time. He puts out the form of a hand, grabs Ezekiel by a lock of his hair, carries him to Jerusalem, and shows him everything live. Not gently by the hand, mind you. Roughly, by the hair.",
          draw: [["write", "i2", [120, 410], "by the hair to Jerusalem", { size: 60, color: "red" }],
                 ["write", "i3", { after: "i2", gap: 40 }, "live broadcast", { size: 52, color: "blue" }]] },
        { say: "At the north gate of the temple is the image of jealousy. He digs through the wall and goes in, and there are seventy elders, the so-called leaders of the nation, burning incense to idols like a cloud. Even Jaazaniah the son of Shaphan is there, and Shaphan's the one who read the law aloud in Josiah's day.",
          draw: [["write", "i4", [120, 530], "image of jealousy · 70 elders' incense", { size: 56 }],
                 ["write", "i5", [160, 610], "even Jaazaniah son of Shaphan", { size: 46, color: "gray" }]] },
        { say: "In the temple, women are even weeping for Tammuz. And about twenty-five men turn their backs on the temple and worship the sun toward the east.",
          draw: [["write", "i6", [120, 720], "weeping for Tammuz · sun worship", { size: 56 }]] },
        { say: "Son of man, do you see this? Is it a light thing that they commit these abominations? God shows him all this so Ezekiel can answer the elders right away.",
          draw: [["write", "i7", [120, 830], "\"Is it a light thing?\"", { size: 64, color: "red" }],
                 ["under", "i7"]] }
      ]
    },
    {
      id: "glory-leaves", title: "God's Glory Departs",
      beats: [
        { say: "In chapter 9, six men come with slaughter weapons in their hands, and one of them has a writer's inkhorn at his side.",
          draw: [["clear"],
                 ["title", "t", "God's glory departs"],
                 ["write", "j1", [120, 290], "ch. 9: slaughter weapons · inkhorn", { size: 56 }]] },
        { say: "God tells him to put a mark on the foreheads of those who sigh and cry over the sins. They're the ones who'll be saved. You need to know this to understand the sealing in Revelation chapter 7.",
          draw: [["write", "j2", [120, 400], "mark on foreheads of those who sigh", { size: 56, color: "green" }],
                 ["write", "j3", { after: "j2", gap: 40 }, "→ Rev 7", { size: 48, color: "gray" }]] },
        { say: "Chapter 10 reveals that the living creatures from chapter 1 are cherubim. And in chapter 11, the glory of God finally leaves. He just can't bear to look at the abominations anymore.",
          draw: [["write", "j4", [120, 530], "ch. 11: God's glory departs", { size: 64, color: "red" }],
                 ["box", "j4"]] },
        { say: "When God leaves, the people have to leave too. Every time God left, foreign armies came and swallowed Jerusalem. Babylon did, and so did Rome. So in chapter 12, Ezekiel packs his bags like he's moving, digs a hole in the wall, and goes in and out through it.",
          draw: [["write", "j5", [120, 660], "ch. 12: moving bags", { size: 56 }],
                 ["write", "j6", { after: "j5", gap: 40 }, "God leaves → people must leave", { size: 52, color: "blue" }]] },
        { say: "Chapter 13 is about false prophetesses who hunt souls. False prophets always claim it's God's word, but God confronts them. I didn't say that, so why are you babbling whatever you like? And there are countless people like that today, too.",
          draw: [["write", "j7", [120, 790], "ch. 13: false prophets", { size: 56 }],
                 ["write", "j8", { after: "j7", gap: 40 }, "\"I have not spoken\"", { size: 56, color: "red" }]] }
      ]
    },
    {
      id: "harlot", title: "Jerusalem, the Abandoned Child",
      beats: [
        { say: "Chapter 16 has a heartbreaking parable from God. As he was passing by, he found a baby girl abandoned in a field, crying, the blood not washed off, the cord not even cut.",
          draw: [["clear"],
                 ["title", "t", "Jerusalem, the abandoned child (ch. 16)"],
                 ["write", "k1", [120, 290], "abandoned baby girl", { size: 60 }],
                 ["write", "k2", { after: "k1", gap: 110 }, "God took her in", { size: 60, color: "blue" }],
                 ["arrow", "k1", "k2"]] },
        { say: "He picked her up, cut the cord, washed her, and raised her. When she was grown but still naked, he dressed her in fine clothes and made her splendid. It's the story of Arphaxad, a son of Shem who never founded a nation and just wandered. God raised up his line for 400 years in the land of Goshen in Egypt, and then clothed them in the glory of Solomon.",
          draw: [["write", "k3", [160, 380], "Arphaxad → 400 yrs in Goshen → Solomon's glory", { size: 48, color: "gray" }]] },
        { say: "But once this woman got famous, she grabbed every man passing by and played the harlot. She didn't even take payment. She paid them! It's about Solomon's day, when they were soaked in foreign religions, like a world's fair of religions.",
          draw: [["write", "k4", [120, 500], "harlotry = foreign religions", { size: 60, color: "red" }],
                 ["write", "k5", { after: "k4", gap: 40 }, "(no fee, even)", { size: 46, color: "gray" }]] },
        { say: "Serving foreign gods meant joining in wild sexual rites. So it's not just a figure of speech. It really happened. And on top of that, they burned the children they'd borne to God and offered them to idols. Would God be angry, or not?",
          draw: [["write", "k6", [120, 620], "sexual rites · children burned as offerings", { size: 56 }],
                 ["under", "k6", "red"]] },
        { say: "Even after all this, God says, I will remember my covenant with you in the days of your youth. And he promises to set up a new covenant. Not cute little lines like, though your beginning was small. You need to see fiery words like these.",
          draw: [["write", "k7", [120, 750], "still remembers the covenant", { size: 60, color: "green" }],
                 ["write", "k8", { after: "k7", gap: 90 }, "new covenant", { size: 64, color: "green" }],
                 ["arrow", "k7", "k8"],
                 ["box", "k8", "green"]] }
      ]
    },
    {
      id: "sour-grapes", title: "God's Final Notice",
      beats: [
        { say: "Chapter 18 verse 2. The people of Israel always said, the fathers have eaten sour grapes, and the children's teeth are set on edge. They felt it was unfair to be paying for their parents' sins.",
          draw: [["clear"],
                 ["title", "t", "God's final notice (ch. 18)"],
                 ["write", "l1", [120, 290], "\"Fathers ate sour grapes, children's teeth on edge\"", { size: 50 }],
                 ["strike", "l1"]] },
        { say: "That's not how it is. Every person pays only for his own sin. Don't ever use that silly proverb again.",
          draw: [["write", "l2", [120, 410], "each for his own sin", { size: 64, color: "red" }],
                 ["box", "l2"]] },
        { say: "Imagine keeping none of the law, running around with foreign gods, burning your kids as offerings, and then saying the way of the Lord isn't fair. That'd drive anyone crazy, wouldn't it?",
          draw: [["write", "l3", [160, 510], "and then: \"The way of the Lord is not equal\"", { size: 50, color: "gray" }]] },
        { say: "Repent, and turn. Why will ye die? I have no pleasure in the death of him that dieth. Turn yourselves, and live. It's the final warning God sends.",
          draw: [["write", "l4", [120, 630], "\"Turn yourselves, and live\"", { size: 72, color: "green" }],
                 ["under", "l4", "green"]] },
        { say: "For a husband to say this to an unfaithful wife means he's the one who loves more. And the one who loves more is the one who gives in. If you realize it and repent, I won't bring up the past. God has no pride at all.",
          draw: [["write", "l5", [120, 750], "the one who loves more gives in", { size: 60, color: "blue" }]] },
        { say: "There's a doctrine called the perseverance of the saints. Perseverance just means steady, patient endurance. With that very endurance, he waited for me. And he's waiting for you.",
          draw: [["write", "l6", [120, 840], "perseverance = steadfast endurance", { size: 56, color: "red" }],
                 ["write", "l7", { after: "l6", gap: 40 }, "→ he waits for you", { size: 50, color: "green" }]] }
      ]
    },
    {
      id: "sword", title: "The Furbished Sword",
      beats: [
        { say: "Even after the final notice of chapter 18, they don't come back. So chapter 19 is a lamentation, a sad song. In chapter 20, the elders come back to argue again, still without repenting. And then chapter 21. A sword, a sword is sharpened, and also furbished.",
          draw: [["clear"],
                 ["title", "t", "The furbished sword (ch. 21~24)"],
                 ["write", "m1", [120, 290], "furbished = polished bright", { size: 60 }],
                 ["write", "m2", { after: "m1", gap: 40 }, "= Babylon", { size: 64, color: "red" }],
                 ["circle", "m2"]] },
        { say: "The sword of the king of Babylon is coming, and at the fork in the road he uses divination. He looks at the liver of a sacrifice. If it's blue, he goes left. If it's red, he goes right. Red comes up. The road to Jerusalem. God shows this to Ezekiel live.",
          draw: [["write", "m3", [120, 410], "divination at fork:", { size: 56 }],
                 ["write", "m4", { after: "m3", gap: 30 }, "blue = Rabbah", { size: 56, color: "blue" }],
                 ["write", "m5", { after: "m4", gap: 50 }, "red = Jerusalem", { size: 56, color: "red" }],
                 ["under", "m5"]] },
        { say: "Chapters 22 and 23 are an interrogation. The woman insists she hasn't sinned, so God reads it all out, one by one. What month, what day, where, with whom, and what she did. And these sins are the ones written in the law.",
          draw: [["write", "m6", [120, 530], "ch. 22~23 interrogation: evidence, one by one", { size: 52 }]] },
        { say: "Chapter 24. Write down the date, this very day. The king of Babylon set himself against Jerusalem this same day. It's the tenth day of the tenth month, 588 B.C. Jerusalem is pictured as a big cauldron, and the fire's stoked till the rust burns off. It's hell in miniature.",
          draw: [["write", "m7", [120, 650], "588 B.C. 10/10 siege", { size: 60, color: "red" }],
                 ["write", "m8", { after: "m7", gap: 40 }, "the cauldron", { size: 56, color: "blue" }]] },
        { say: "Then God takes Ezekiel's wife, and tells him not to weep or mourn. I've just cut off my beloved wife. If you're going to speak my words, you have to know my heart. Reminds you of Hosea, doesn't it?",
          draw: [["write", "m9", [120, 780], "Ezekiel's wife dies", { size: 60 }],
                 ["write", "m10", { after: "m9", gap: 40 }, "= God's heart", { size: 64, color: "red" }],
                 ["box", "m10"]] }
      ]
    },
    {
      id: "restore", title: "Judging the Nations, Restoration",
      beats: [
        { say: "Right after cutting off his wife, God looks up, and there stand the thugs who fooled around with the harlot called Jerusalem, shuffling nervously. The sword's already in his hand, so from chapter 25 he strikes Ammon, Moab, Edom, Tyre, Sidon, and Egypt, one after another. And in chapter 32 he sweeps them all into one pit.",
          draw: [["clear"],
                 ["title", "t", "Nations judged, Israel restored"],
                 ["write", "n1", [120, 290], "ch. 25~32: Ammon · Moab · Edom · Tyre · Sidon · Egypt", { size: 50 }],
                 ["write", "n2", [160, 370], "→ ch. 32: into one pit", { size: 48, color: "red" }]] },
        { say: "Chapter 33 is the watchman's job. Whether they hear or not, go and tell them. In chapter 34, instead of shepherds who only feed themselves, God sets up one true shepherd. That shepherd is David. Our Jesus.",
          draw: [["write", "n3", [120, 480], "ch. 33 watchman · ch. 34 one shepherd = Jesus", { size: 54 }]] },
        { say: "Chapter 36. Israel is restored, not because they're righteous, but for the sake of God's holy name. God does it for his own sake, but we're the ones who get the grace. We're the opposite. We often say we live for others, when really we're living for ourselves.",
          draw: [["write", "n4", [120, 590], "ch. 36: for my holy name's sake", { size: 60, color: "blue" }]] },
        { say: "Then the valley vision in chapter 37. The bones that were boiled down in chapter 24 and poured out come back together and become a great army. It means God will bring the Jews scattered all over the world back to life, and back to their homeland. Chapters 38 and 39 are Gog and Magog, the war of the last days.",
          draw: [["write", "n5", [120, 700], "ch. 37 bones → army", { size: 56, color: "green" }],
                 ["write", "n6", { after: "n5", gap: 40 }, "ch. 38~39 Gog and Magog", { size: 56, color: "red" }]] },
        { say: "Chapters 40 to 48 are a vision of the restored temple. It's a hard passage, because nothing you try to match it with quite fits. The clue is in chapter 43. There's a condition. If they're ashamed of their sins, then teach them. So you can see it as something that almost came true, but didn't, because the condition wasn't met.",
          draw: [["write", "n7", [120, 820], "ch. 40~48 temple vision", { size: 56 }],
                 ["write", "n8", { after: "n7", gap: 40 }, "\"if\" = condition (ch. 43)", { size: 60, color: "red" }],
                 ["under", "n8"]] }
      ]
    }
  ]
};
