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
        { say: "Since they are separate books, we read Judges and then Ruth. But in fact these things happened in the same period.",
          draw: [["write", "a2", [180, 450], "= same era as Judges", { size: 56 }],
                 ["under", "a2"]] },
        { say: "A famine in the land means discipline.",
          draw: [["write", "a3", [120, 590], "famine"],
                 ["write", "a4", { after: "a3", gap: 110 }, "discipline", { color: "red" }],
                 ["arrow", "a3", "a4"],
                 ["circle", "a4"]] },
        { say: "When God disciplines you, you should take it humbly. You must not rebel or run away.",
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
        { say: "Later Naomi confesses it. I went out full, and came back a beggar.",
          draw: [["write", "b2", [120, 440], "\"I went out full\""],
                 ["write", "b3", { after: "b2", gap: 110 }, "\"came back empty\""],
                 ["arrow", "b2", "b3"]] },
        { say: "The conclusion is that these people were quite well off, but when the famine came, they ran away instead of helping others.",
          draw: [["write", "b4", [120, 600], "well off, fled instead of helping", { size: 64, color: "red" }],
                 ["under", "b4"]] },
        { say: "In verse 3, the husband dies, and then both sons die. Within about ten years, they had become a club of widows.",
          draw: [["write", "b5", [120, 750], "husband · 2 sons die → widows' club", { size: 56 }]] }
      ]
    },
    {
      id: "orpah", title: "Orpah and Ruth",
      beats: [
        { say: "In ancient society, a woman left alone had no way to survive.",
          draw: [["clear"],
                 ["title", "t", "Orpah and Ruth"],
                 ["write", "c1", [120, 300], "ancient world: a lone woman can't survive", { size: 54, color: "gray" }]] },
        { say: "Just then, good news arrives. God has given his people Israel bread.",
          draw: [["write", "c2", [120, 420], "good news: bread in Israel", { color: "green" }]] },
        { say: "So Naomi tells her daughters-in-law to remarry and live well.",
          draw: [["write", "c3", { at: [800, 540] }, "\"Remarry and live well\"", { anchor: "middle", size: 60 }]] },
        { say: "Orpah hears that and really does leave.",
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
        { say: "When the two of them came to Bethlehem, the whole town was stirred and said, Is this Naomi?",
          draw: [["clear"],
                 ["title", "t", "Naomi? Call me Mara"],
                 ["write", "d1", [120, 300], "\"Is this Naomi?\"", { size: 68 }]] },
        { say: "The name Naomi means joy. So that was a little backhanded jab, wasn't it?",
          draw: [["write", "d2", { after: "d1", gap: 60 }, "Naomi = joy", { color: "blue" }],
                 ["write", "d2b", { below: "d2", gap: 80 }, "a backhanded jab", { size: 48, color: "gray" }]] },
        { say: "Naomi answers. Call me not Naomi, call me Mara. In other words, call me bitter.",
          draw: [["write", "d3", [120, 540], "Naomi", { size: 72 }],
                 ["strike", "d3"],
                 ["write", "d4", { after: "d3", gap: 110 }, "Mara = bitter", { size: 72, color: "red" }],
                 ["arrow", "d3", "d4"]] },
        { say: "Here too she says that when she went out, she was full, right?",
          draw: [["write", "d5", [180, 640], "went out full", { size: 50, color: "gray" }]] },
        { say: "But the time they arrived in Bethlehem was just when the barley harvest was beginning. A thin ray of hope appears.",
          draw: [["write", "d6", [120, 790], "barley harvest → a thread of hope", { size: 64, color: "green" }],
                 ["under", "d6", "green"]] }
      ]
    },
    {
      id: "boaz", title: "By Chance in Boaz's Field",
      beats: [
        { say: "Chapter 2. Among the relatives of Naomi's husband, there was a rich man named Boaz. Ruth says she will go glean in the fields, and Naomi says go.",
          draw: [["clear"],
                 ["title", "t", "By chance in Boaz's field"],
                 ["write", "e1", [120, 300], "Boaz: rich relative of her husband", { size: 64, color: "blue" }]] },
        { say: "Chapter 2, verse 3. Ruth happened to come to the field of Boaz, a relative of Elimelech.",
          draw: [["write", "e2", [120, 420], "by chance"],
                 ["strike", "e2"],
                 ["write", "e3", { after: "e2", gap: 110 }, "really, by design", { color: "red" }],
                 ["arrow", "e2", "e3"]] },
        { say: "The word chance appears about five times in the Bible, but when you look closely, it always turns out to be meant to be. Unlike Elimelech, Boaz stayed and took care of the poor.",
          draw: [["write", "e4", [120, 540], "Elimelech: left", { size: 56, color: "gray" }],
                 ["write", "e5", { after: "e4", gap: 70 }, "Boaz: stayed and cared", { size: 56, color: "green" }]] },
        { say: "Boaz comes and greets them. The LORD be with you. And the workers answer, The LORD bless you. That's what relations between boss and workers should be like.",
          draw: [["write", "e6", [120, 680], "\"The LORD be with you\" ↔ \"The LORD bless you\"", { size: 48 }],
                 ["write", "e7", [180, 790], "boss and workers like this!", { size: 52, color: "blue" }]] }
      ]
    },
    {
      id: "kind", title: "Boaz's Kindness",
      beats: [
        { say: "Boaz asks who that young woman is. She is the Moabite girl who came back with Naomi, and she has been gleaning without rest from morning until now.",
          draw: [["clear"],
                 ["title", "t", "Boaz's kindness"],
                 ["write", "f1", [120, 300], "Moabite girl: gleaning nonstop since dawn", { size: 54 }]] },
        { say: "Boaz says to Ruth, Don't go to another field. Glean here. If you're thirsty, drink the water too. I've told everyone not to touch you.",
          draw: [["write", "f2", [120, 420], "\"Glean here · drink the water\"", { size: 64, color: "blue" }],
                 ["write", "f2b", [180, 510], "told them all not to touch you", { size: 48, color: "gray" }]] },
        { say: "I'm a foreign woman. Why are you so kind to me? I've heard all about how well you have treated your mother-in-law. May God repay you.",
          draw: [["write", "f3", [120, 640], "why so kind?", { size: 64 }],
                 ["write", "f4", { after: "f3", gap: 110 }, "kind to mother-in-law", { size: 64, color: "green" }],
                 ["arrow", "f3", "f4"]] },
        { say: "He gives her a meal, and even tells his servants to drop some stalks on purpose for Ruth.",
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
        { say: "It lets orphans, widows, and the poor work with their own hands and gather for themselves. It is not handing things out as a favor. From the start it says, your share is here too.",
          draw: [["write", "g3", [100, 540], "gather with own hands", { size: 64, color: "blue" }],
                 ["write", "g3b", { after: "g3", gap: 40 }, "(not charity)", { size: 50, color: "gray" }]] },
        { say: "So the one receiving does not have to feel ashamed. That is the law.",
          draw: [["write", "g4", [100, 670], "receiver not ashamed", { size: 68, color: "red" }],
                 ["under", "g4"]] },
        { say: "At a community center in Seoul, there was a big rice jar, sitting right in front of the busy service counter where everyone walks by. Who could scoop rice from that without being embarrassed? I wish I could tell you I kicked it and broke it, but I'm the type who puts up with injustice pretty well.",
          draw: [["write", "g5", [100, 800], "rice jar at the counter?", { size: 50 }],
                 ["cross", [650, 780], "red"]] },
        { say: "That is how people do it. But God cares more about the one who receives help than the one who gives it.",
          draw: [["write", "g6", [820, 800], "God cares more for receiver", { size: 50, color: "green" }]] }
      ]
    },
    {
      id: "beyond", title: "Going Beyond the Law",
      beats: [
        { say: "Boaz is a man who does more than the law requires. He is one man shining brightly in the dark days of the judges.",
          draw: [["clear"],
                 ["title", "t", "Going beyond the law"],
                 ["write", "h1", [120, 300], "Boaz: one light in dark days", { size: 60, color: "blue" }]] },
        { say: "Someone who wants to do less than the law is always worrying. How far do the corners of the field go? How much do I have to leave?",
          draw: [["write", "h2", { at: [420, 470] }, "below the law", { anchor: "middle", size: 64 }],
                 ["write", "h3", { at: [420, 580] }, "how far? how much?", { anchor: "middle", size: 50, color: "gray" }],
                 ["write", "h4", { at: [420, 720] }, "bound", { anchor: "middle", size: 72, color: "red" }],
                 ["arrow", "h3", "h4"]] },
        { say: "If you go beyond the law like Boaz, you are free.",
          draw: [["write", "h5", { at: [1180, 470] }, "beyond the law", { anchor: "middle", size: 64 }],
                 ["write", "h6", { at: [1180, 720] }, "free", { anchor: "middle", size: 72, color: "green" }],
                 ["arrow", "h5", "h6"],
                 ["circle", "h6", "green"]] },
        { say: "Cling to the letter of the law and you are bound. Go beyond the law and you are free.",
          draw: [["line", [800, 400], [800, 760], "gray"]] }
      ]
    },
    {
      id: "threshing", title: "The Threshing Floor",
      beats: [
        { say: "The boss had officially given permission, so they must have dropped plenty, right? She quickly gleaned about an ephah. An ephah would feed two people for a month.",
          draw: [["clear"],
                 ["title", "t", "Night at the threshing floor"],
                 ["write", "i1", [120, 300], "1 ephah = 2 people, 1 month", { size: 60 }]] },
        { say: "When Ruth says she gleaned in Boaz's field, Naomi says, That man is one of our kinsman-redeemers.",
          draw: [["write", "i2", [120, 420], "Boaz = kinsman-redeemer", { size: 64, color: "blue" }],
                 ["box", "i2", "blue"]] },
        { say: "Tonight, put on your makeup and your nice clothes and go to the threshing floor. When Boaz lies down, lift the blanket and lie there. He will know what to do.",
          draw: [["write", "i3", [120, 560], "threshing floor · lift the blanket, lie down", { size: 50 }]] },
        { say: "This isn't even levirate marriage. Naomi is practically selling Ruth as a surrogate to bear a child. But Ruth obeys.",
          draw: [["write", "i4", [120, 680], "nearly a surrogate", { size: 56, color: "gray" }],
                 ["write", "i5", { after: "i4", gap: 110 }, "Ruth obeys", { color: "red" }],
                 ["arrow", "i4", "i5"]] },
        { say: "Boaz is deeply moved. You didn't go after young men, you came to an old man like me. I will fulfill the duty of the redeemer. But there is a closer relative than me, so I will take care of that.",
          draw: [["write", "i6", [120, 800], "\"an old man like me?\" · deeply moved", { size: 52, color: "green" }]] }
      ]
    },
    {
      id: "shoe", title: "Taking Off the Sandal",
      beats: [
        { say: "When day breaks, Boaz calls that relative at the city gate. You are first in line to redeem Elimelech's property. But it has to be done in the name of Ruth's husband.",
          draw: [["clear"],
                 ["title", "t", "Taking off the sandal"],
                 ["write", "j1", [120, 300], "gate: you're first in line", { size: 60, color: "blue" }],
                 ["write", "j1b", { after: "j1", gap: 40 }, "but in her husband's name", { size: 46, color: "gray" }]] },
        { say: "Then the man says he cannot redeem it, lest he ruin his own inheritance, and he takes off his sandal and hands it over.",
          draw: [["write", "j2", [120, 440], "\"lest I lose out\""],
                 ["write", "j3", { after: "j2", gap: 110 }, "sandal off", { color: "red" }],
                 ["arrow", "j2", "j3"]] },
        { say: "When the right to redeem passes to the next in line, the sandal is taken off, and with it he gets spat on and slapped in the face. This is what we do to a man who will not build up his brother's house.",
          draw: [["write", "j4", [120, 580], "spit, slap in the face", { size: 58 }]] },
        { say: "Then word gets around that he is the man whose sandal was pulled off, and he can't hold his head up anywhere.",
          draw: [["write", "j5", [120, 720], "= the man with no sandal", { size: 68, color: "red" }],
                 ["under", "j5"]] }
      ]
    },
    {
      id: "obed", title: "A Love Story in the Barley Field",
      beats: [
        { say: "So Boaz and Ruth marry and have a son. That is Obed, David's grandfather.",
          draw: [["clear"],
                 ["title", "t", "Love story in the barley field"],
                 ["write", "k1", [120, 300], "Boaz + Ruth"],
                 ["write", "k2", { after: "k1", gap: 110 }, "Obed", { size: 80, color: "red" }],
                 ["arrow", "k1", "k2"],
                 ["circle", "k2"]] },
        { say: "Here is the genealogy at the end of chapter 4. Salmon begat Boaz, and Boaz begat Obed, and Obed begat Jesse, and Jesse begat David.",
          draw: [["write", "k3", [120, 450], "Salmon → Boaz → Obed → Jesse → David", { size: 60, color: "blue" }]] },
        { say: "The people of Israel read the book of Ruth every Pentecost.",
          draw: [["write", "k4", [120, 580], "read every Pentecost", { size: 56, color: "gray" }]] },
        { say: "In the middle of the long, dark tunnel of the Judges, it was a love story in a barley field, like a ray of light.",
          draw: [["write", "k5", { at: [800, 750] }, "a ray of light in the tunnel", { anchor: "middle", size: 72, color: "green" }],
                 ["under", "k5", "green"]] }
      ]
    }
  ]
};
