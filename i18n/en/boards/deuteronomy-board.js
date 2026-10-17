// Deuteronomy whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does.
window.BOARD = {
  scenes: [
    {
      id: "what", title: "What Is Deuteronomy?",
      beats: [
        { say: "So, what is Deuteronomy? Look at chapter 1 verse 5. Moses began to declare this law.",
          draw: [["title", "t", "What is Deuteronomy?"],
                 ["write", "a1", [120, 300], "Deut 1:5 \"began to declare this law\"", { size: 60, color: "gray" }]] },
        { say: "Deuteronomy is an explanation of the law. The name means the commandments repeated.",
          draw: [["write", "a2", [120, 430], "Deut = law explained", { size: 72, color: "blue" }],
                 ["write", "a3", { after: "a2", gap: 50 }, "name: commands repeated", { size: 50, color: "gray" }]] },
        { say: "In a word? It's Moses' farewell sermon.",
          draw: [["write", "a4", [120, 570], "Moses' farewell sermon", { size: 72, color: "red" }],
                 ["circle", "a4"]] },
        { say: "He's pleading with the young generation who are about to go into Canaan. The generation that lived through the amazing events of the Exodus had all died. So he felt he had to explain the covenant to them one more time. And honestly, that's my heart too as I teach you.",
          draw: [["write", "a5", [120, 700], "eyewitnesses died"],
                 ["write", "a6", { after: "a5", gap: 110 }, "again, to the young", { color: "blue" }],
                 ["arrow", "a5", "a6"]] },
        { say: "The content mostly overlaps with Leviticus. And the order's pretty loose.",
          draw: [["write", "a7", [180, 810], "mostly repeats Leviticus · order is loose", { size: 48, color: "gray" }]] }
      ]
    },
    {
      id: "covenant", title: "A Covenant Made with Us Today",
      beats: [
        { say: "In chapter 5, he makes it clear again who the covenant is with. This law wasn't made just with your fathers who've died. It was made with us, the ones alive here today.",
          draw: [["clear"],
                 ["title", "t", "Covenant with whom?"],
                 ["write", "b1", [120, 300], "only the dead fathers", { size: 64, color: "gray" }],
                 ["strike", "b1"],
                 ["write", "b2", { after: "b1", gap: 90 }, "us, alive today", { color: "red" }],
                 ["arrow", "b1", "b2"]] },
        { say: "In other words, it's not something you can keep halfway. Or not keep at all.",
          draw: [["write", "b3", [180, 400], "not something to keep halfway", { size: 50, color: "gray" }]] },
        { say: "Chapter 29 verse 14 says it's even with those who aren't here today. That means future generations too. It's an eternal statute for every generation to come.",
          draw: [["write", "b4", [120, 530], "29:14 even those not here", { color: "blue" }],
                 ["write", "b5", { below: "b4", gap: 100 }, "= future generations · eternal statute", { size: 58 }]] },
        { say: "What about us? We didn't hear it directly, but we've heard it secondhand. So we have to live by the spirit of the law too.",
          draw: [["write", "b6", [120, 790], "we too: spirit of the law", { color: "green" }],
                 ["under", "b6", "green"]] },
        { say: "The law is so basic that making a big deal out of it is kind of laughable. It's kindergarten level. That's why Jesus upgrades all of it. But I tell you, love your enemies.",
          draw: [["write", "b7", { at: [1250, 700] }, "law = kindergarten", { anchor: "middle", size: 52, color: "gray" }],
                 ["write", "b8", { at: [1250, 800] }, "Jesus' upgrade", { anchor: "middle", size: 56, color: "red" }]] }
      ]
    },
    {
      id: "shema", title: "Shema Israel",
      beats: [
        { say: "Shema Israel. Hear, O Israel.",
          draw: [["clear"],
                 ["title", "t", "Shema Israel"],
                 ["write", "c1", [120, 300], "Shema = Hear, O Israel", { size: 68, color: "blue" }]] },
        { say: "Even today, Jewish people use these things to carry out this word literally. The phylactery, the kippah, the tefillin, and the mezuzah.",
          draw: [["write", "c2", [120, 430], "phylactery · kippah · tefillin · mezuzah", { size: 52 }],
                 ["photo", "p2", "img/image97.jpg", [1060, 330, 360, 238], { tilt: -3 }]] },
        { say: "The phylactery is bound between the eyes like a frontlet. And the tefillin is tied on the wrist as a sign.",
          draw: [["write", "c3", [120, 560], "phylactery → between the eyes", { size: 56 }],
                 ["write", "c4", [120, 670], "tefillin → on the wrist", { size: 56 }]] },
        { say: "The mezuzah goes on the doorposts of the house and the gates. People touch it and kiss it as they come and go.",
          draw: [["write", "c5", [120, 790], "mezuzah → doorpost · touch & kiss", { size: 56, color: "red" }],
                 ["photo", "p3", "img/image99.jpg", [1160, 628, 320, 180], { tilt: 2 }]] }
      ]
    },
    {
      id: "door", title: "Write It and Post It",
      beats: [
        { say: "This is the front door of our house.",
          draw: [["clear"],
                 ["title", "t", "Our front door"],
                 ["photo", "p4", "img/image100.jpg", [880, 160, 600, 338], { tilt: -2, caption: "Our front door" }]] },
        { say: "This verse is the only one like it in the whole Bible.",
          draw: [["write", "d1", [100, 330], "the only one in the Bible", { size: 56 }]] },
        { say: "It's the verse that says, write them down and put them up.",
          draw: [["write", "d2", { below: "d1", gap: 120 }, "\"Write & post it\"", { size: 80, color: "red" }],
                 ["circle", "d2"]] },
        { say: "You shall love the LORD your God with all your heart, with all your soul, and with all your might.",
          draw: [["write", "d3", [100, 720], "love with all heart · soul · might", { size: 60, color: "blue" }],
                 ["under", "d3", "blue"]] }
      ]
    },
    {
      id: "ten1", title: "Only Look at Me",
      beats: [
        { say: "Now, the Ten Commandments in chapter 5. They're the same as Exodus 20. I am the LORD your God, who brought you out of the land of Egypt, out of the house of bondage.",
          draw: [["clear"],
                 ["title", "t", "Ten Commandments ①~③"],
                 ["write", "e1", [120, 300], "Deut 5 Ten Commandments = Exod 20", { size: 58, color: "gray" }]] },
        { say: "You shall have no other gods before me. You shall not make idols. You shall not take the name of the LORD in vain.",
          draw: [["write", "e2", [120, 420], "① other gods ② idols ③ name in vain", { size: 56 }]] },
        { say: "The Shema is Moses' way of explaining commandments one to three.",
          draw: [["write", "e3", { after: "e2", gap: 40 }, "→ Shema", { color: "blue" }],
                 ["box", "e3", "blue"]] },
        { say: "Look closely, and it's exactly what a girlfriend would say. Honey, from now on, only look at me. Don't even think about other women. And don't talk about me carelessly in front of other people.",
          draw: [["write", "e4", [120, 570], "\"Only me · no other girls · don't badmouth me\"", { size: 50 }]] },
        { say: "What does that mean? Love only me. And when someone asks you to love only them, what they're really saying is, I'm crazy about you.",
          draw: [["write", "e5", [120, 720], "\"love me\" = I love you like crazy", { size: 64, color: "red" }],
                 ["under", "e5"]] }
      ]
    },
    {
      id: "ten2", title: "Commandments for People",
      beats: [
        { say: "The fourth commandment, the Sabbath, isn't for God's sake. It's for people's sake. I explained that when we did Leviticus, remember?",
          draw: [["clear"],
                 ["title", "t", "Ten Commandments ④~⑥"],
                 ["write", "f1", [120, 300], "④ Sabbath = for people", { color: "blue" }]] },
        { say: "So commandments one to three are about God. And commandments four to ten are about people.",
          draw: [["write", "f2", { at: [420, 430] }, "①~③ for God", { anchor: "middle", size: 56 }],
                 ["write", "f3", { at: [1180, 430] }, "④~⑩ for people", { anchor: "middle", size: 56, color: "green" }]] },
        { say: "The fifth commandment. Honor your father and mother. Honor them, not hit them. That your days may be long in the land. There's a promise of long life.",
          draw: [["write", "f4", [120, 570], "⑤ honor → long life", { size: 60 }],
                 ["write", "f4b", { after: "f4", gap: 30 }, "(not hit)", { size: 48, color: "gray" }]] },
        { say: "But if you honor God, the eternal Father, you don't just get a long life. You get eternal life.",
          draw: [["write", "f5", { after: "f4b", gap: 50 }, "honor God → eternal life", { size: 56, color: "red" }],
                 ["circle", "f5"]] },
        { say: "The sixth commandment. Thou shalt not commit murder. Actually, that's a mistranslation. The original says, you shall not kill. And not only people. You mustn't kill anything that has life.",
          draw: [["write", "f6", [120, 730], "⑥ no murder", { size: 60 }],
                 ["strike", "f6"],
                 ["write", "f7", { after: "f6", gap: 110 }, "do not kill (all life)", { size: 60, color: "blue" }],
                 ["arrow", "f6", "f7"]] }
      ]
    },
    {
      id: "ten3", title: "Justice and Greed",
      beats: [
        { say: "The seventh commandment, don't commit adultery. The eighth, don't steal. The ninth, don't bear false witness.",
          draw: [["clear"],
                 ["title", "t", "Ten Commandments ⑦~⑩"],
                 ["write", "g1", [120, 300], "⑦ adultery ⑧ stealing ⑨ false witness", { size: 56 }]] },
        { say: "False witness is a courtroom word. If the person who should be punished gets rewarded, and the person who should be rewarded gets punished, justice is broken.",
          draw: [["write", "g2", [120, 420], "⑨ false witness", { size: 64 }],
                 ["write", "g3", { after: "g2", gap: 90 }, "justice broken", { size: 64, color: "red" }],
                 ["arrow", "g2", "g3"]] },
        { say: "And when justice is broken, nobody bothers doing good.",
          draw: [["write", "g4", { after: "g3", gap: 90 }, "no one does good", { size: 50 }],
                 ["arrow", "g3", "g4"]] },
        { say: "The tenth commandment, don't covet. It's the hardest of all ten. Covetousness is idolatry.",
          draw: [["write", "g5", [120, 600], "⑩ do not covet", { color: "blue" }],
                 ["write", "g6", { after: "g5", gap: 60 }, "greed = idolatry", { color: "red" }],
                 ["box", "g6"]] },
        { say: "If you can't let go of wanting something, that wanting takes over your whole life. You end up doing anything at all to get it.",
          draw: [["write", "g7", [180, 740], "wanting to have drives your life", { size: 56, color: "gray" }],
                 ["under", "g7", "gray"]] }
      ]
    },
    {
      id: "desert", title: "Why the Wilderness",
      beats: [
        { say: "Chapter 8 verses 2 and 3 tell us why the wilderness years happened. There are three reasons God made them walk that wilderness road for forty years.",
          draw: [["clear"],
                 ["title", "t", "Why 40 yrs in the desert (8:2~3)"]] },
        { say: "First, to humble us. It's only when we're brought low that we receive grace.",
          draw: [["write", "h1", [120, 320], "① to humble", { color: "blue" }],
                 ["write", "h1b", { after: "h1", gap: 60 }, "low → receive grace", { size: 56 }]] },
        { say: "Second, to find out whether we'll keep his commandments or not. God always tests whether we obey his word.",
          draw: [["write", "h2", [120, 470], "② to test", { color: "blue" }],
                 ["write", "h2b", { after: "h2", gap: 60 }, "he always checks obedience", { size: 56 }]] },
        { say: "Third, to show that if you really listen to God's word, making a living isn't a problem. Man does not live by bread only, but by every word that proceeds out of the mouth of the LORD.",
          draw: [["write", "h3", [120, 620], "③ manna", { color: "blue" }],
                 ["write", "h3b", { after: "h3", gap: 60 }, "obey → no worry about food", { size: 56 }],
                 ["write", "h4", { at: [800, 790] }, "not by bread only", { anchor: "middle", size: 72, color: "red" }],
                 ["under", "h4"]] }
      ]
    },
    {
      id: "miracle", title: "Beware of Miracles",
      beats: [
        { say: "Chapter 13 tells us to watch out for miracles and dreamers. Even when signs and wonders happen, don't be easily shaken. And don't follow.",
          draw: [["clear"],
                 ["title", "t", "ch. 13: miracles and dreamers"],
                 ["write", "i1", [120, 300], "don't be shaken by signs & wonders", { size: 64, color: "red" }]] },
        { say: "And he says the dreamer must be put to death.",
          draw: [["write", "i2", [180, 410], "the dreamer must die", { size: 56, color: "gray" }]] },
        { say: "There are three times in the Bible when lots of miracles happen. At the Exodus, when the prophets showed up, and when Jesus came.",
          draw: [["write", "i3", { at: [340, 560] }, "Exodus", { anchor: "middle", size: 64, color: "blue" }],
                 ["write", "i4", { at: [800, 560] }, "prophets", { anchor: "middle", size: 64, color: "blue" }],
                 ["write", "i5", { at: [1260, 560] }, "Jesus", { anchor: "middle", size: 64, color: "blue" }]] },
        { say: "What do they have in common? They're times when God needed to reveal himself.",
          draw: [["write", "i6", { at: [800, 700] }, "in common: when God reveals himself", { anchor: "middle", size: 60, color: "red" }],
                 ["under", "i6"]] },
        { say: "So we shouldn't keep asking him to show us miracles.",
          draw: [["write", "i7", { at: [800, 820] }, "\"Show me a miracle\"? ✕", { anchor: "middle", size: 54, color: "gray" }]] }
      ]
    },
    {
      id: "king", title: "The King and Three Great Joys",
      beats: [
        { say: "Here's a word about whoever becomes king. He said this before Israel even had a king. He's the God who knows everything.",
          draw: [["clear"],
                 ["title", "t", "The one who is king…"],
                 ["photo", "p5", "img/image102.jpg", [1060, 40, 440, 248], { tilt: 2 }],
                 ["write", "j1", [100, 320], "before there was any king", { size: 58 }],
                 ["write", "j1b", { below: "j1", gap: 80 }, "→ the all-knowing God", { size: 52, color: "blue" }]] },
        { say: "The king has to come only from among their own people. There are three things he mustn't do, and one thing he must do.",
          draw: [["write", "j2", [100, 530], "3 don'ts · 1 must-do", { size: 60, color: "red" }]] },
        { say: "Chapter 20 gives Israel's three great joys. First, the joy of planting a fruit tree and picking its first fruit. You get to eat it after five years. Then the joy of building a house and dedicating it. And the joy of getting engaged and having the wedding.",
          draw: [["write", "j3", [100, 660], "3 great joys: first fruit · new house · wedding", { size: 54, color: "green" }]] },
        { say: "A man who hasn't enjoyed these joys yet is sent home, even when war breaks out. God is generous. He's got style.",
          draw: [["write", "j4", [100, 800], "send home even in war", { size: 58 }],
                 ["write", "j5", { after: "j4", gap: 60 }, "God with style", { size: 64, color: "red" }],
                 ["circle", "j5"]] }
      ]
    },
    {
      id: "seven", title: "The Law Every 7 Years",
      beats: [
        { say: "We saw this at the start of the course, didn't we? Once you're in the land of Canaan, read the law to the people at least once every seven years.",
          draw: [["clear"],
                 ["title", "t", "Command: teach the law at Tabernacles"],
                 ["write", "k1", [100, 320], "read the law once every 7 yrs", { size: 60, color: "blue" }]] },
        { say: "But Joshua doesn't do it. I honestly don't know why. And since Joshua didn't, nobody after him did either.",
          draw: [["write", "k2", [100, 450], "not done, from Joshua on", { color: "red" }],
                 ["under", "k2"]] },
        { say: "So Old Testament history is one long story of disobedience. A story of getting beaten.",
          draw: [["write", "k3", [100, 590], "history of disobedience = of beatings", { size: 60 }]] },
        { say: "Almost 800 years later, in Ezra's time, this command is finally kept for the first time. And the people wept and wailed.",
          draw: [["write", "k4", [100, 740], "800 yrs later, first under Ezra", { size: 64, color: "green" }],
                 ["write", "k5", { after: "k4", gap: 40 }, "weeping", { size: 52, color: "gray" }]] }
      ]
    },
    {
      id: "hope", title: "He Knows, Yet He Hopes",
      beats: [
        { say: "Look at chapter 31 verse 16. God already knows the people of Israel will betray him. Have you ever been betrayed? It's bad enough when you don't see it coming. But if you see it coming? It drives you crazy.",
          draw: [["clear"],
                 ["title", "t", "He knows, yet he hopes"],
                 ["write", "l1", [120, 300], "31:16 knows they will betray", { color: "gray" }]] },
        { say: "And yet God knows it all, and he still has hope. I really couldn't understand that.",
          draw: [["write", "l2", [120, 420], "still hopes", { size: 72, color: "red" }],
                 ["circle", "l2"]] },
        { say: "Then I had kids, and I got it. You keep nagging them. You know they won't change right away, and still you hope. Why? Because you love them.",
          draw: [["write", "l3", [120, 560], "nagging the kids"],
                 ["write", "l4", { after: "l3", gap: 110 }, "out of love", { color: "green" }],
                 ["arrow", "l3", "l4"]] },
        { say: "When you lose something precious, you open every drawer, right? Even a drawer you already checked. You saw it wasn't there. And still you open it again. Because what you're looking for is that precious.",
          draw: [["write", "l5", [120, 690], "reopening checked drawers", { size: 58 }],
                 ["write", "l5b", { after: "l5", gap: 40 }, "it's so precious", { size: 52, color: "gray" }]] },
        { say: "You're that precious to God. That's why he brought you here to hear this word. Even though he knows you won't listen.",
          draw: [["write", "l6", { at: [800, 820] }, "you = precious to God", { anchor: "middle", size: 66, color: "blue" }],
                 ["under", "l6", "blue"]] }
      ]
    }
  ]
};
