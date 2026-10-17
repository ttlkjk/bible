// Daniel whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does.
window.BOARD = {
  scenes: [
    {
      id: "structure", title: "The Structure of Daniel",
      beats: [
        { say: "Okay, Daniel. It comes right after Jeremiah. It tells us how the Jews who were taken captive to Babylon lived there, what they came to understand, and what changed.",
          draw: [["title", "t", "Daniel"],
                 ["write", "a1", [120, 290], "lessons learned in Babylonian Exile", { size: 64, color: "blue" }]] },
        { say: "Part one is history and lessons. That's chapters 1 to 6. Chapters 1 to 5 teach through the history of the Neo-Babylonian Empire, and chapter 6 through the history of Medo-Persia.",
          draw: [["write", "a2", [120, 420], "Part 1 · History & lessons (ch. 1~6)", { size: 60 }],
                 ["write", "a3", [180, 500], "ch. 1~5 Neo-Babylon · ch. 6 Medo-Persia", { size: 46, color: "gray" }]] },
        { say: "Part two is revelation and lessons. That's chapters 7 to 12. Chapters 7 and 8 were revealed in the Neo-Babylonian era, and chapters 9 to 12 in the Medo-Persian era.",
          draw: [["write", "a4", [120, 610], "Part 2 · Revelation & lessons (ch. 7~12)", { size: 60 }],
                 ["write", "a5", [180, 690], "ch. 7~8 Neo-Babylon · ch. 9~12 Medo-Persia", { size: 46, color: "gray" }]] },
        { say: "Now, part one is history, so it's the past. Part two is revelation, so you could call it the future. But for us? Part two is the past too. It laid out how things would unfold in the Near East, and world history went exactly the way those words said.",
          draw: [["write", "a6", [120, 810], "Part 2 (future) → past for us", { color: "red" }],
                 ["under", "a6"]] }
      ]
    },
    {
      id: "ch1", title: "Prime Minister Even When Nations Change",
      beats: [
        { say: "Chapter 1. In the third year of Jehoiakim king of Judah, Nebuchadnezzar besieged Jerusalem. That's when the first group of captives was taken. 606 B.C.",
          draw: [["clear"],
                 ["title", "t", "Chapter 1"],
                 ["write", "b1", [120, 290], "Jehoiakim yr 3 · 606 B.C. · 1st captivity", { size: 56 }]] },
        { say: "They wanted to pick people to work in the palace, so they had them eat the king's food. But Daniel and his three friends said no to that unclean food. They ate only vegetables. And still their faces looked better, and they were chosen.",
          draw: [["write", "b2", [120, 410], "refuse king's food", { color: "blue" }],
                 ["write", "b3", { after: "b2", gap: 110 }, "veggies → better looks", { size: 64, color: "green" }],
                 ["arrow", "b2", "b3"]] },
        { say: "Verse 17. God gave these four young men knowledge and wisdom, and Daniel had understanding in all visions and dreams.",
          draw: [["write", "b4", [120, 530], "Daniel: understood dreams & visions", { size: 56 }]] },
        { say: "Verse 21. Daniel continued even unto the first year of king Cyrus. Now, don't just skip past this. When a new king comes in, the first thing he does is clear out the old officials. But Daniel stayed on as prime minister.",
          draw: [["write", "b5", [120, 660], "PM through several kings", { color: "red" }],
                 ["circle", "b5"]] },
        { say: "And this Cyrus? He's a big name in world history too. He's the man who brought down this enormous city of Babylon.",
          draw: [["write", "b6", [120, 790], "Cyrus = the one who toppled Babylon", { size: 56, color: "blue" }]] }
      ]
    },
    {
      id: "ch2", title: "Tell Me the Dream",
      beats: [
        { say: "Chapter 2. In the second year of Nebuchadnezzar, the king has a dream. You know how you wake up and the whole dream's just gone? He calls in the magicians and wise men and says, tell me what I dreamed, and then interpret it too.",
          draw: [["clear"],
                 ["title", "t", "Ch. 2 · Nebuchadnezzar's dream"],
                 ["write", "c1", [120, 290], "tell the dream AND interpret it", { size: 64, color: "red" }]] },
        { say: "They say, Your Majesty, you have to tell us the dream first, then we can interpret it. But the king says, if you can't, I'll cut you in pieces and make your houses a dunghill.",
          draw: [["write", "c2", [120, 410], "fail → cut in pieces (v. 5)", { size: 56, color: "gray" }]] },
        { say: "Daniel and his three friends were about to die too. So they prayed, and God showed it to Daniel in a vision.",
          draw: [["write", "c3", [120, 530], "prayer", { size: 64 }],
                 ["write", "c4", { after: "c3", gap: 110 }, "revealed in a vision", { color: "green" }],
                 ["arrow", "c3", "c4"]] },
        { say: "Verse 27. O king, a secret like that isn't something those wise men and magicians can know. Only the God in heaven reveals secrets.",
          draw: [["write", "c5", [120, 690], "only God in heaven reveals secrets", { size: 64, color: "blue" }],
                 ["box", "c5", "blue"]] }
      ]
    },
    {
      id: "statue", title: "The Statue Daniel Saw",
      beats: [
        { say: "So here's what the king saw. Verse 38. Thou art this head of gold. That's Babylon.",
          draw: [["clear"],
                 ["title", "t", "Great statue (2:38~45)"],
                 ["photo", "p1", "img/p2/image40.jpg", [1080, 170, 440, 248], { tilt: 2, caption: "The statue Daniel saw" }],
                 ["write", "d1", [120, 290], "gold head = Babylon", { size: 60, color: "red" }]] },
        { say: "The chest and two arms of silver are a kingdom lower than the king's. That's Persia. We know that now, but back then nobody knew yet. The belly and thighs are bronze, a kingdom that'll rule over all the earth. That's Greece.",
          draw: [["write", "d2", [120, 390], "silver chest = Persia", { size: 60 }],
                 ["write", "d3", [120, 490], "bronze belly = Greece", { size: 60 }]] },
        { say: "The legs are iron, really strong. That's Rome. The feet are iron mixed with clay, partly strong and partly broken, and they just don't hold together. That's Europe.",
          draw: [["write", "d4", [120, 590], "iron legs = Rome", { size: 60 }],
                 ["write", "d5", [120, 690], "iron + clay feet = Europe", { size: 60 }]] },
        { say: "Verse 44. In the days of these kings God will set up a kingdom, and it shall stand for ever. The king is stunned. He says, your God is a God of gods. And he makes Daniel ruler over Babylon.",
          draw: [["write", "d6", [120, 810], "eternal kingdom God will set up", { color: "blue" }],
                 ["under", "d6", "blue"]] }
      ]
    },
    {
      id: "ch3", title: "The Fiery Furnace",
      beats: [
        { say: "Chapter 3. Even after saying all that, Nebuchadnezzar goes and makes a statue of gold. Sixty cubits high, about as tall as a ten-story apartment building. And he announces that anyone who doesn't bow gets thrown into the furnace.",
          draw: [["clear"],
                 ["title", "t", "Ch. 3 · Gold statue & furnace"],
                 ["write", "e1", [120, 290], "gold statue, 60 cubits", { size: 60 }],
                 ["write", "e2", { after: "e1", gap: 30 }, "(10-story building)", { size: 46, color: "gray" }]] },
        { say: "This here is a bellows. It's a tool for blowing air. Work it over charcoal, and the coals glow almost white. Hot enough to melt iron.",
          draw: [["photo", "p2", "img/p2/image41.jpg", [1080, 170, 440, 248], { tilt: -2, caption: "Bellows · fire that melts iron" }]] },
        { say: "The three friends didn't bow. So they were thrown into a fire heated seven times hotter than usual. Verse 15. Who is that God that shall deliver you out of my hands? A minute ago he was saying God of gods, and he's already forgotten it, hasn't he?",
          draw: [["write", "e3", [120, 420], "7 times hotter", { color: "red" }],
                 ["write", "e4", [120, 530], "\"Who is the god that can save you?\"", { size: 52, color: "gray" }]] },
        { say: "Verse 17. Our God whom we serve is able to deliver us. Now, what comes next is the important part.",
          draw: [["write", "e5", [120, 660], "He is able to deliver", { size: 60 }]] },
        { say: "But if not. We will not bow.",
          draw: [["write", "e6", [120, 790], "But if not", { size: 84, color: "red" }],
                 ["box", "e6", "red"]] }
      ]
    },
    {
      id: "faith", title: "But If Not",
      beats: [
        { say: "We always say, if you save me, I'll believe. Just wet the fleece like you did for Gideon, and I'll believe. Just get me into college, and I'll believe in you.",
          draw: [["clear"],
                 ["title", "t", "This is faith"],
                 ["write", "f1", [120, 290], "if you save me · fleece · college", { size: 64, color: "gray" }],
                 ["strike", "f1"]] },
        { say: "But these men were saying, even if it doesn't go my way, I'll accept what God does. Believing God's will is right, even when it doesn't help me. That's faith.",
          draw: [["write", "f2", [120, 420], "no gain for me, yet God's will is right", { size: 64, color: "red" }],
                 ["under", "f2"]] },
        { say: "In nothing be anxious, but by prayer and petition make your requests known, and the peace of God will guard your hearts and your thoughts. So, does that mean if you pray, he gives you everything? No. It means he guards your heart and your thoughts.",
          draw: [["write", "f3", [120, 550], "prayer → get it all", { size: 56, color: "gray" }],
                 ["strike", "f3", "gray"],
                 ["write", "f4", { after: "f3", gap: 50 }, "guards hearts & thoughts", { size: 56, color: "blue" }]] },
        { say: "How? He guards you so that you can say, but if not.",
          draw: [["write", "f5", [120, 670], "so you can say \"But if not\"", { color: "blue" }],
                 ["box", "f5", "blue"]] },
        { say: "And in the end? They threw in three men, but four figures were seen. And they came out alive, not a hair singed. Meanwhile, the men who threw them in burned to death just from getting close.",
          draw: [["write", "f6", [120, 800], "3 men → 4 figures · not a hair singed", { size: 52, color: "green" }]] }
      ]
    },
    {
      id: "names", title: "Got a Missile?",
      beats: [
        { say: "Verse 28. Blessed be the God of Shadrach, Meshach, and Abednego. The king sends a decree to the whole nation. Anyone who speaks carelessly against that God will be cut in pieces. Why is it always cutting people in pieces with him?",
          draw: [["clear"],
                 ["title", "t", "The three friends' names"],
                 ["write", "g1", [120, 290], "king's decree: praise this God", { color: "blue" }]] },
        { say: "Now, Shadrach, Meshach, and Abednego are Babylonian names. We Koreans had a time too when we were forced to take Japanese names, didn't we? So let's at least remember their real names.",
          draw: [["write", "g2", [120, 420], "Shadrach · Meshach · Abednego", { size: 56, color: "gray" }],
                 ["write", "g3", { after: "g2", gap: 30 }, "= Babylonian", { size: 48, color: "gray" }]] },
        { say: "Here's a trick to memorize the original Hebrew names in no time. Think of Kim Jong-un. He's always building missiles, right?",
          draw: [["write", "g4", [120, 560], "Mishael · Hananiah · Azariah", { size: 72, color: "red" }],
                 ["under", "g4"]] },
        { say: "In Korean it sounds like, misa-il hana-inya? Aseora! Got a missile? Knock it off! Mishael, Hananiah, Azariah.",
          draw: [["write", "g5", [120, 720], "\"Misa-il hana-inya? Aseora~\"", { size: 72, color: "green" }]] }
      ]
    },
    {
      id: "ch4", title: "Seven Years Like a Beast",
      beats: [
        { say: "Chapter 4. Nebuchadnezzar has another dream. This time, even when he tells them the dream, they can't interpret it. So he calls Belteshazzar, that's Daniel's Babylonian name. And it turns out to be a bad dream for the king.",
          draw: [["clear"],
                 ["title", "t", "Ch. 4 · Another dream"],
                 ["write", "h1", [120, 290], "Belteshazzar = Daniel", { size: 56, color: "gray" }],
                 ["write", "h2", { after: "h1", gap: 60 }, "ominous dream", { size: 56, color: "red" }]] },
        { say: "Verse 25. The king will be driven out, eat grass like an ox, get wet with the dew, and seven times will pass. Seven years. Underline this part. Till thou know that the most High ruleth in the kingdom of men.",
          draw: [["write", "h3", [120, 410], "the Most High rules the kingdom of men", { size: 56, color: "blue" }],
                 ["under", "h3", "blue"]] },
        { say: "Daniel even gives him a way out. Do what's right and look after the poor, or at least pretend to. Maybe he'll spare you. But then, verse 30. Is not this great Babylon, that I have built by the might of my power? Nope, nope.",
          draw: [["write", "h4", [120, 540], "\"Babylon that I built\" (v. 30)", { size: 60 }],
                 ["write", "h5", { after: "h4", gap: 40 }, "Nope~", { size: 60, color: "red" }]] },
        { say: "Jeremiah 27. I have given it unto whom it seemed meet unto me. I have given all these lands into the hand of Nebuchadnezzar my servant. So he had it all wrong. Before the words were even out of his mouth, he went mad and wandered the fields for seven years.",
          draw: [["write", "h6", [120, 660], "Jer 27:5~6: I have given it", { size: 52, color: "gray" }],
                 ["write", "h7", { after: "h6", gap: 50 }, "→ 7 years like a beast", { size: 52, color: "red" }]] },
        { say: "When the time was up, he lifted his eyes to heaven, and his mind came back. Verse 37. Those that walk in pride he is able to abase.",
          draw: [["write", "h8", [120, 790], "He is able to humble the proud", { color: "green" }],
                 ["box", "h8", "green"]] }
      ]
    },
    {
      id: "ch5", title: "The Writing on the Wall",
      beats: [
        { say: "Chapter 5. There's a new king now. Belshazzar. He's guzzling wine, and he brings out the gold cups taken from the temple in Jerusalem and drinks from them. He's just asking for it, isn't he?",
          draw: [["clear"],
                 ["title", "t", "Ch. 5 · Belshazzar"],
                 ["write", "i1", [120, 290], "wine from temple gold cups", { size: 60, color: "red" }]] },
        { say: "Then all of a sudden, a hand appears and writes letters on the wall, like sparks from welding. The king's knees start knocking together. He's doing a wobbly-legged little dance.",
          draw: [["photo", "p3", "img/p2/image43.jpg", [1080, 170, 440, 248], { tilt: 2, caption: "Letters like welding sparks" }],
                 ["write", "i2", [120, 410], "hand on wall → writing", { size: 60 }],
                 ["write", "i3", [180, 490], "knees knock together", { size: 46, color: "gray" }]] },
        { say: "Nobody can read it. But they call Daniel, and for him it's a piece of cake. It was written in Hebrew, his mother tongue. Mene, mene, tekel, upharsin. It means counted, counted, weighed, and divided.",
          draw: [["write", "i4", [120, 620], "Mene Mene Tekel Upharsin", { size: 72, color: "blue" }],
                 ["write", "i5", [180, 700], "counted · counted · weighed · divided", { size: 46, color: "gray" }]] },
        { say: "The king was weighed and found wanting, so his time is up. The kingdom goes to the Medes and Persians. That very night Belshazzar was killed, and Darius the Mede took the kingdom. He was Cyrus's uncle on his mother's side.",
          draw: [["write", "i6", [120, 810], "found wanting → dead that night", { color: "red" }],
                 ["under", "i6"]] }
      ]
    },
    {
      id: "scenario", title: "History Is God's Screenplay",
      beats: [
        { say: "That day Cyrus brought down the city of Babylon and handed the rule to his uncle Darius. Mighty Babylon disappeared from history after just 86 years.",
          draw: [["clear"],
                 ["title", "t", "Babylon gone in 86 years"],
                 ["write", "j1", [120, 300], "Babylon: 86 yrs", { size: 84, color: "red" }],
                 ["circle", "j1"]] },
        { say: "Think about it. It grew for 16 years into a huge nation, brought the people of Israel over, gave them 70 years of hands-on field study, and then it was just gone.",
          draw: [["write", "j2", { after: "j1", gap: 70 }, "16 yrs growth + 70 yrs field study", { size: 48 }]] },
        { say: "What does that tell us? The Lord runs the world. The prophets kept saying it, didn't they? Babylon, Assyria, they're nothing but smoking firebrands.",
          draw: [["write", "j3", [120, 450], "the Lord runs the world", { color: "blue" }],
                 ["write", "j4", { after: "j3", gap: 50 }, "(powers = firebrands)", { size: 48, color: "gray" }]] },
        { say: "For ordinary historians, it's a mystery. Why did huge Babylon suddenly vanish? But read the Bible, and it fits world history exactly.",
          draw: [["write", "j5", [120, 580], "mystery to historians", { size: 56, color: "gray" }],
                 ["write", "j6", { after: "j5", gap: 50 }, "→ fits Bible exactly", { size: 56 }]] },
        { say: "The Bible is the screenplay of history, and history is a drama that plays out by that screenplay. Wow, now that's something you should write down.",
          draw: [["write", "j7", [120, 720], "Bible = screenplay of history", { size: 68, color: "red" }],
                 ["write", "j8", [120, 820], "history = drama that follows it", { size: 56, color: "red" }],
                 ["box", "j7", "red"]] }
      ]
    },
    {
      id: "ch6", title: "The Lions' Den and the Four Beasts",
      beats: [
        { say: "In chapter 6, the kingdom has become Medo-Persia, and Darius is king. This is the really famous one. Daniel in the lions' den.",
          draw: [["clear"],
                 ["title", "t", "Ch. 6~7"],
                 ["write", "k1", [120, 290], "lions' den (ch. 6)", { color: "blue" }]] },
        { say: "He was told not to pray, but he prayed. He was thrown into the lions' den, but he came out alive. So king Darius sent out a decree praising God.",
          draw: [["write", "k2", [120, 400], "prayed → lions' den → came out alive", { size: 56 }]] },
        { say: "The key is verse 28. This Daniel prospered in the reign of Darius, and in the reign of Cyrus. Becoming prime minister in one nation is hard enough. But the nation changes, and the prime minister stays? That's amazing.",
          draw: [["write", "k3", [120, 530], "nation changed, still PM", { color: "red" }],
                 ["under", "k3"]] },
        { say: "So far, those are the lessons through history. From chapter 7 on, it's revelation seen in visions. It's hard to go through in detail, so we'll just take a quick look.",
          draw: [["write", "k4", [120, 650], "lessons of history", { size: 56, color: "gray" }],
                 ["write", "k5", { after: "k4", gap: 110 }, "revelation in visions", { size: 56, color: "blue" }],
                 ["arrow", "k4", "k5"]] },
        { say: "The four great beasts in chapter 7 are Babylon, Medo-Persia, the Greek empire, and Rome. And then the Antichrist shows up. It shows how history will unfold from there.",
          draw: [["write", "k6", [120, 790], "4 beasts: Babylon · Medo-Persia · Greece · Rome", { size: 50 }]] }
      ]
    },
    {
      id: "ch11", title: "King of the South, King of the North",
      beats: [
        { say: "Chapter 11 has the story of the king of the south and the king of the north. Alexander the Great had four generals under him. Cassander, Lysimachus, Antigonus, and Ptolemy.",
          draw: [["clear"],
                 ["title", "t", "Ch. 11 · 150-year war"],
                 ["photo", "p4", "img/p2/image44.jpg", [1080, 170, 440, 248], { tilt: -2, caption: "Four-way split" }],
                 ["write", "l1", [120, 290], "Alexander's 4 generals", { color: "blue" }]] },
        { say: "When Antigonus claimed to be number one, Alexander's true successor, Lysimachus and Ptolemy teamed up and got rid of him.",
          draw: [["write", "l2", [120, 400], "Antigonus removed", { size: 60 }]] },
        { say: "Then Seleucus, who'd done the most under General Ptolemy, took that huge territory and started acting big. And Ptolemy in Egypt says, hey, you little underling, who do you think you are? And war broke out.",
          draw: [["write", "l3", [120, 520], "Seleucus", { size: 60 }],
                 ["write", "l4", { after: "l3", gap: 110 }, "Ptolemy: \"You, underling?\"", { size: 60, color: "red" }],
                 ["arrow", "l3", "l4"]] },
        { say: "That's the 150-year war of world history, and Daniel chapter 11 is a short version of it. The south is Egypt, and the north is Assyria.",
          draw: [["write", "l5", [120, 660], "king of south = Egypt", { size: 56, color: "blue" }],
                 ["write", "l6", { after: "l5", gap: 60 }, "king of north = Assyria", { size: 56, color: "blue" }]] },
        { say: "And Israel's stuck right in the middle. It shows how much Israel would suffer, caught in the gap while two superpowers fought for 150 years.",
          draw: [["write", "l7", [120, 800], "Israel caught in between", { color: "red" }],
                 ["circle", "l7"]] }
      ]
    },
    {
      id: "end", title: "Field Study Over",
      beats: [
        { say: "Leviticus 26 says that if they keep disobeying, the heaven will become iron and the earth bronze, right? So what happens to the people caught in between? They get flattened.",
          draw: [["clear"],
                 ["title", "t", "150 years in the millstones"],
                 ["write", "m1", { at: [800, 290] }, "heaven = iron", { anchor: "middle", size: 64, color: "gray" }],
                 ["write", "m2", { at: [800, 390] }, "Israel (flattened)", { anchor: "middle", size: 64, color: "red" }],
                 ["write", "m3", { at: [800, 490] }, "earth = bronze", { anchor: "middle", size: 64, color: "gray" }]] },
        { say: "Israel said serving God was too much trouble. So God said, oh really? Then go try serving a foreign nation. For 150 years they were ground between two great powers, like grain between millstones. And Daniel saw it ahead of time.",
          draw: [["write", "m4", [120, 630], "\"Try serving foreigners\" → 150 yrs ground down", { size: 52 }]] },
        { say: "Field study over. After that, the Jews stopped serving foreign gods for good.",
          draw: [["write", "m5", [120, 760], "field study over", { size: 72, color: "green" }],
                 ["box", "m5", "green"]] },
        { say: "They serve only the Lord God. And that's why they don't believe in Jesus either.",
          draw: [["write", "m6", { after: "m5", gap: 60 }, "serve only the LORD", { size: 56, color: "blue" }],
                 ["write", "m7", { below: "m6", gap: 70 }, "(so they reject Jesus too)", { size: 44, color: "gray" }]] }
      ]
    }
  ]
};
