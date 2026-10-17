// Ruth whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does.
window.BOARD = {
  scenes: [
    {
      id: "famine", title: "Famine in the Days of the Judges",
      beats: [
        { say: "Now we move on to Ruth. Chapter 1, verse 1. In the days when the judges ruled, there was a famine in the land.",
          draw: [["title", "t", "Ruth"],
                 ["photo", "p1", "../../pansuh/img/image117.jpg", [1110, 40, 400, 225], { tilt: 3 }],
                 ["write", "a1", [120, 340], "Ruth 1:1 when the judges ruled", { size: 64, color: "blue" }]] },
        { say: "They're separate books, so we read Judges first and then Ruth. But actually, these things happened in the same period.",
          draw: [["write", "a2", [180, 450], "= same era as Judges", { size: 56 }],
                 ["under", "a2"]] },
        { say: "A famine in the land? That means discipline.",
          draw: [["write", "a3", [120, 590], "famine"],
                 ["write", "a4", { after: "a3", gap: 110 }, "discipline", { color: "red" }],
                 ["arrow", "a3", "a4"],
                 ["circle", "a4"]] },
        { say: "When God disciplines you, take it humbly. Don't rebel, and don't run away.",
          draw: [["write", "a5", { after: "a4", gap: 70 }, "take it humbly", { size: 50, color: "green" }]] },
        { say: "But look at verse 2. Where did these people go? To the country of Moab.",
          draw: [["write", "a6", [120, 740], "but → fled to Moab", { color: "red" }]] }
      ]
    },
    {
      id: "rich", title: "They Went Out Full",
      beats: [
        { say: "When famine comes, the law says the rich should open their storehouses and help the poor.",
          draw: [["clear"],
                 ["title", "t", "Why did they flee?"],
                 ["write", "b1", [120, 300], "law: in famine the rich open storehouses", { size: 56, color: "blue" }]] },
        { say: "Later on, Naomi admits it herself. I went out full, and came back a beggar.",
          draw: [["write", "b2", [120, 440], "\"I went out full\""],
                 ["write", "b3", { after: "b2", gap: 110 }, "\"came back empty\""],
                 ["arrow", "b2", "b3"]] },
        { say: "So here's the point. These people were pretty well off. But when the famine came, instead of helping others, they ran.",
          draw: [["write", "b4", [120, 600], "well off, fled instead of helping", { size: 64, color: "red" }],
                 ["under", "b4"]] },
        { say: "In verse 3, the husband dies, and then both sons die too. Within about ten years, they've become a little club of widows.",
          draw: [["write", "b5", [120, 750], "husband · 2 sons die → widows' club", { size: 56 }]] }
      ]
    },
    {
      id: "orpah", title: "Orpah and Ruth",
      beats: [
        { say: "Back then, a woman left on her own had no way to survive.",
          draw: [["clear"],
                 ["title", "t", "Orpah and Ruth"],
                 ["write", "c1", [120, 300], "ancient world: a lone woman can't survive", { size: 54, color: "gray" }]] },
        { say: "Just then, good news comes. God has given his people Israel bread.",
          draw: [["write", "c2", [120, 420], "good news: bread in Israel", { color: "green" }]] },
        { say: "So Naomi tells her daughters-in-law, go on, remarry and have a good life.",
          draw: [["write", "c3", { at: [800, 540] }, "\"Remarry and live well\"", { anchor: "middle", size: 60 }]] },
        { say: "Orpah hears that, and she really does leave.",
          draw: [["write", "c4", { at: [420, 700] }, "Orpah", { anchor: "middle", size: 72 }],
                 ["write", "c4b", { at: [420, 800] }, "really leaves", { anchor: "middle", size: 52, color: "gray" }]] },
        { say: "Ruth missed her chance to go first. So Ruth follows Naomi back.",
          draw: [["write", "c5", { at: [1180, 700] }, "Ruth", { anchor: "middle", size: 84, color: "red" }],
                 ["circle", "c5"],
                 ["write", "c5b", { at: [1180, 800] }, "too slow → follows", { anchor: "middle", size: 52 }]] }
      ]
    },
    {
      id: "mara", title: "Call Me Mara",
      beats: [
        { say: "When the two of them got to Bethlehem, the whole town was stirred up. Is this Naomi?",
          draw: [["clear"],
                 ["title", "t", "Naomi? Call me Mara"],
                 ["write", "d1", [120, 300], "\"Is this Naomi?\"", { size: 68 }]] },
        { say: "Now, the name Naomi means joy. So that was a little backhanded jab, wasn't it?",
          draw: [["write", "d2", { after: "d1", gap: 60 }, "Naomi = joy", { color: "blue" }],
                 ["write", "d2b", { below: "d2", gap: 80 }, "a backhanded jab", { size: 48, color: "gray" }]] },
        { say: "And Naomi answers. Call me not Naomi, call me Mara. In other words, call me bitter.",
          draw: [["write", "d3", [120, 540], "Naomi", { size: 72 }],
                 ["strike", "d3"],
                 ["write", "d4", { after: "d3", gap: 110 }, "Mara = bitter", { size: 72, color: "red" }],
                 ["arrow", "d3", "d4"]] },
        { say: "Notice, here too she says that when she went out, she was full, right?",
          draw: [["write", "d5", [180, 640], "went out full", { size: 50, color: "gray" }]] },
        { say: "But they got to Bethlehem just as the barley harvest was starting. A thin ray of hope shows up.",
          draw: [["write", "d6", [120, 790], "barley harvest → a thread of hope", { size: 64, color: "green" }],
                 ["under", "d6", "green"]] }
      ]
    },
    {
      id: "boaz", title: "By Chance in Boaz's Field",
      beats: [
        { say: "Chapter 2. Among the relatives of Naomi's husband, there was a rich man named Boaz. Ruth says she'll go glean in the fields, and Naomi says, go ahead.",
          draw: [["clear"],
                 ["title", "t", "By chance in Boaz's field"],
                 ["write", "e1", [120, 300], "Boaz: rich relative of her husband", { size: 64, color: "blue" }]] },
        { say: "Chapter 2, verse 3. Ruth happened to come to the field of Boaz, a relative of Elimelech.",
          draw: [["write", "e2", [120, 420], "by chance"],
                 ["strike", "e2"],
                 ["write", "e3", { after: "e2", gap: 110 }, "really, by design", { color: "red" }],
                 ["arrow", "e2", "e3"]] },
        { say: "The word chance shows up about five times in the Bible. But look closely, and it always turns out it was meant to be. And unlike Elimelech, Boaz stayed and looked after the poor.",
          draw: [["write", "e4", [120, 540], "Elimelech: left", { size: 56, color: "gray" }],
                 ["write", "e5", { after: "e4", gap: 70 }, "Boaz: stayed and cared", { size: 56, color: "green" }]] },
        { say: "Boaz comes and greets them. The LORD be with you. And the workers answer, The LORD bless you. That's what it should look like between a boss and his workers.",
          draw: [["write", "e6", [120, 680], "\"The LORD be with you\" ↔ \"The LORD bless you\"", { size: 48 }],
                 ["write", "e7", [180, 790], "boss and workers like this!", { size: 52, color: "blue" }]] }
      ]
    },
    {
      id: "kind", title: "Boaz's Kindness",
      beats: [
        { say: "Boaz asks, who's that young woman? She's the Moabite girl who came back with Naomi. She's been gleaning nonstop from morning until now.",
          draw: [["clear"],
                 ["title", "t", "Boaz's kindness"],
                 ["write", "f1", [120, 300], "Moabite girl: gleaning nonstop since dawn", { size: 54 }]] },
        { say: "Boaz says to Ruth, Don't go to another field. Glean here. If you're thirsty, have some water too. I've told everyone not to touch you.",
          draw: [["write", "f2", [120, 420], "\"Glean here · drink the water\"", { size: 64, color: "blue" }],
                 ["write", "f2b", [180, 510], "told them all not to touch you", { size: 48, color: "gray" }]] },
        { say: "I'm a foreign woman. Why are you so kind to me? I've heard all about how good you've been to your mother-in-law. May God repay you.",
          draw: [["write", "f3", [120, 640], "why so kind?", { size: 64 }],
                 ["write", "f4", { after: "f3", gap: 110 }, "kind to mother-in-law", { size: 64, color: "green" }],
                 ["arrow", "f3", "f4"]] },
        { say: "He gives her a meal, and he even tells his servants to drop some stalks on purpose for Ruth.",
          draw: [["write", "f5", [120, 790], "drop some stalks for her!", { size: 64, color: "red" }],
                 ["circle", "f5"]] }
      ]
    },
    {
      id: "corner", title: "The Corners of the Field",
      beats: [
        { say: "Leviticus chapter 19, verse 9. When you reap your harvest, do not reap to the very corners of your field, and do not gather the gleanings.",
          draw: [["clear"],
                 ["title", "t", "Lev 19:9 field corners"],
                 ["photo", "p2", "../../pansuh/img/image119.jpg", [1000, 60, 520, 293], { tilt: 2, caption: "This part is the field corner" }],
                 ["write", "g1", [100, 300], "don't reap to the corners", { size: 56 }],
                 ["write", "g2", { below: "g1", gap: 100 }, "don't gather what falls", { size: 56 }]] },
        { say: "This lets orphans, widows, and the poor work with their own hands and gather for themselves. It's not a handout. From the very start it says, your share is here too.",
          draw: [["write", "g3", [100, 540], "gather with own hands", { size: 64, color: "blue" }],
                 ["write", "g3b", { after: "g3", gap: 40 }, "(not charity)", { size: 50, color: "gray" }]] },
        { say: "So the one receiving doesn't have to feel ashamed. That's the law.",
          draw: [["write", "g4", [100, 670], "receiver not ashamed", { size: 68, color: "red" }],
                 ["under", "g4"]] },
        { say: "In Seoul, at a community center, there was a big rice jar, sitting right in front of the busy service counter where everyone walks by. Who could scoop rice out of that without feeling embarrassed? I wish I could tell you I kicked it over and broke it. But honestly, I'm the type who puts up with injustice pretty well.",
          draw: [["write", "g5", [100, 800], "rice jar at the counter?", { size: 50 }],
                 ["cross", [650, 780], "red"]] },
        { say: "That's how people do things. But God cares more about the one who receives help than the one who gives it.",
          draw: [["write", "g6", [820, 800], "God cares more for receiver", { size: 50, color: "green" }]] }
      ]
    },
    {
      id: "beyond", title: "Going Beyond the Law",
      beats: [
        { say: "Boaz is a man who goes beyond what the law requires. He's one man shining bright in the dark days of the judges.",
          draw: [["clear"],
                 ["title", "t", "Going beyond the law"],
                 ["write", "h1", [120, 300], "Boaz: one light in dark days", { size: 60, color: "blue" }]] },
        { say: "Someone who wants to do less than the law is always worrying. How far do the corners of the field go? How much do I really have to leave?",
          draw: [["write", "h2", { at: [420, 470] }, "below the law", { anchor: "middle", size: 64 }],
                 ["write", "h3", { at: [420, 580] }, "how far? how much?", { anchor: "middle", size: 50, color: "gray" }],
                 ["write", "h4", { at: [420, 720] }, "bound", { anchor: "middle", size: 72, color: "red" }],
                 ["arrow", "h3", "h4"]] },
        { say: "But go beyond the law like Boaz, and you're free.",
          draw: [["write", "h5", { at: [1180, 470] }, "beyond the law", { anchor: "middle", size: 64 }],
                 ["write", "h6", { at: [1180, 720] }, "free", { anchor: "middle", size: 72, color: "green" }],
                 ["arrow", "h5", "h6"],
                 ["circle", "h6", "green"]] },
        { say: "Cling to the letter of the law, and you're bound. Go beyond the law, and you're free.",
          draw: [["line", [800, 400], [800, 760], "gray"]] }
      ]
    },
    {
      id: "threshing", title: "The Threshing Floor",
      beats: [
        { say: "The boss had officially said it's okay, so they must've dropped plenty, right? She quickly gleaned about an ephah. An ephah would feed two people for a month.",
          draw: [["clear"],
                 ["title", "t", "Night at the threshing floor"],
                 ["write", "i1", [120, 300], "1 ephah = 2 people, 1 month", { size: 60 }]] },
        { say: "When Ruth says she gleaned in Boaz's field, Naomi says, That man is one of our kinsman-redeemers.",
          draw: [["write", "i2", [120, 420], "Boaz = kinsman-redeemer", { size: 64, color: "blue" }],
                 ["box", "i2", "blue"]] },
        { say: "Tonight, put on your makeup and your nice clothes and go down to the threshing floor. When Boaz lies down, lift the blanket and lie there. He'll know what to do.",
          draw: [["write", "i3", [120, 560], "threshing floor · lift the blanket, lie down", { size: 50 }]] },
        { say: "Now, this isn't even levirate marriage. Naomi is practically sending Ruth off as a surrogate to have a child. But Ruth obeys.",
          draw: [["write", "i4", [120, 680], "nearly a surrogate", { size: 56, color: "gray" }],
                 ["write", "i5", { after: "i4", gap: 110 }, "Ruth obeys", { color: "red" }],
                 ["arrow", "i4", "i5"]] },
        { say: "Boaz is deeply moved. You didn't go after young men. You came to an old man like me. I'll do the redeemer's duty. But there's a closer relative than me, so I'll take care of that.",
          draw: [["write", "i6", [120, 800], "\"an old man like me?\" · deeply moved", { size: 52, color: "green" }]] }
      ]
    },
    {
      id: "shoe", title: "Taking Off the Sandal",
      beats: [
        { say: "At daybreak, Boaz calls that relative to the city gate. You're first in line to redeem Elimelech's property. But it has to be done in the name of Ruth's husband.",
          draw: [["clear"],
                 ["title", "t", "Taking off the sandal"],
                 ["write", "j1", [120, 300], "gate: you're first in line", { size: 60, color: "blue" }],
                 ["write", "j1b", { after: "j1", gap: 40 }, "but in her husband's name", { size: 46, color: "gray" }]] },
        { say: "Then the man says, I can't redeem it, or I'll ruin my own inheritance. And he takes off his sandal and hands it over.",
          draw: [["write", "j2", [120, 440], "\"lest I lose out\""],
                 ["write", "j3", { after: "j2", gap: 110 }, "sandal off", { color: "red" }],
                 ["arrow", "j2", "j3"]] },
        { say: "When the right to redeem passes to the next in line, the sandal comes off, and along with it, he gets spat on and slapped in the face. This is what we do to a man who won't build up his brother's house.",
          draw: [["write", "j4", [120, 580], "spit, slap in the face", { size: 58 }]] },
        { say: "After that, word gets around. He's the man whose sandal got pulled off. He can't hold his head up anywhere.",
          draw: [["write", "j5", [120, 720], "= the man with no sandal", { size: 68, color: "red" }],
                 ["under", "j5"]] }
      ]
    },
    {
      id: "obed", title: "A Love Story in the Barley Field",
      beats: [
        { say: "So Boaz and Ruth get married and have a son. That's Obed, David's grandfather.",
          draw: [["clear"],
                 ["title", "t", "Love story in the barley field"],
                 ["write", "k1", [120, 300], "Boaz + Ruth"],
                 ["write", "k2", { after: "k1", gap: 110 }, "Obed", { size: 80, color: "red" }],
                 ["arrow", "k1", "k2"],
                 ["circle", "k2"]] },
        { say: "Here's the genealogy at the end of chapter 4. Salmon begat Boaz, and Boaz begat Obed, and Obed begat Jesse, and Jesse begat David.",
          draw: [["write", "k3", [120, 450], "Salmon → Boaz → Obed → Jesse → David", { size: 60, color: "blue" }]] },
        { say: "The people of Israel read the book of Ruth every Pentecost.",
          draw: [["write", "k4", [120, 580], "read every Pentecost", { size: 56, color: "gray" }]] },
        { say: "Right in the middle of the long, dark tunnel of the Judges, it was a love story in a barley field. Like a ray of light.",
          draw: [["write", "k5", { at: [800, 750] }, "a ray of light in the tunnel", { anchor: "middle", size: 72, color: "green" }],
                 ["under", "k5", "green"]] }
      ]
    }
  ]
};
