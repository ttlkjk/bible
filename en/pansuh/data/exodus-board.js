// Exodus whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does.
window.BOARD = {
  scenes: [
    {
      id: "name", title: "The Escape from Egypt",
      beats: [
        { say: "Exodus is the story of the escape from Egypt.",
          draw: [["title", "t", "Exodus = Escape from Egypt"],
                 ["photo", "p1", "../../pansuh/img/image74.jpg", [1060, 190, 440, 248], { tilt: 3 }]] },
        { say: "In the original Hebrew, the title is 'These are the names.' Hebrew titles were taken from the words in the first verse of the book.",
          draw: [["write", "a1", [120, 290], "Hebrew:", { size: 56, color: "gray" }],
                 ["write", "a2", { after: "a1", gap: 24 }, "\"These are the names\"", { size: 56 }]] },
        { say: "That wasn't very satisfying, so when it was translated into Greek, they called it Exodus, which means escape.",
          draw: [["write", "a3", [120, 400], "Greek:", { size: 56, color: "gray" }],
                 ["write", "a4", { after: "a3", gap: 24 }, "Exodus = escape", { size: 56, color: "red" }],
                 ["circle", "a4"]] },
        { say: "Exodus has two main parts. Chapters 1 to 18 go from Egypt to Mount Sinai.",
          draw: [["write", "b1", { at: [420, 620] }, "ch. 1~18", { anchor: "middle", size: 80, color: "blue" }],
                 ["write", "b2", { at: [420, 730] }, "Egypt → Mt. Sinai", { anchor: "middle", size: 56 }]] },
        { say: "Chapters 19 to 40 are what happened at Mount Sinai. The covenant, the Ten Commandments, the detailed rules, and the tabernacle.",
          draw: [["write", "b3", { at: [1180, 620] }, "ch. 19~40", { anchor: "middle", size: 80, color: "blue" }],
                 ["write", "b4", { at: [1180, 730] }, "at Mt. Sinai", { anchor: "middle", size: 56 }],
                 ["arrow", "b1", "b3"]] }
      ]
    },
    {
      id: "king", title: "A New Dynasty",
      beats: [
        { say: "Let's look at the historical background. About 300 years after the Hebrews went down into Egypt, their population had grown enormously.",
          draw: [["clear"],
                 ["title", "t", "Historical background"],
                 ["write", "c1", [120, 300], "300 yrs in Egypt"],
                 ["write", "c2", { after: "c1", gap: 110 }, "population boom", { color: "red" }],
                 ["arrow", "c1", "c2"]] },
        { say: "The Bible says a new king arose who did not know Joseph. The dynasty had changed.",
          draw: [["write", "c3", [120, 430], "king who knew not Joseph"],
                 ["write", "c4", { after: "c3", gap: 110 }, "new dynasty", { color: "red" }],
                 ["arrow", "c3", "c4"]] },
        { say: "Someone from another nation, not an Egyptian, had become king. He saw that the Hebrews might grow more numerous than his own people, so he set out to hold them down.",
          draw: [["write", "c5", [120, 560], "hold them down", { color: "blue" }],
                 ["box", "c5"]] },
        { say: "He made them build the store cities Pithom and Raamses. A store city is the nation's storehouse for emergencies. Mostly weapons and food were kept there.",
          draw: [["write", "c6", { after: "c5", gap: 70 }, "Pithom · Raamses"],
                 ["write", "c7", [180, 660], "store city = emergency storehouse (weapons · food)", { size: 46, color: "gray" }]] },
        { say: "They built ramps out of mud bricks. The soil wasn't sticky, so to hold it together you had to add water and straw. And then they weren't even given straw. Of course there were complaints.",
          draw: [["write", "c8", [120, 790], "mud brick + straw", { size: 60 }],
                 ["strike", "c8"],
                 ["write", "c9", { after: "c8", gap: 50 }, "→ no straw given!", { size: 60, color: "red" }],
                 ["photo", "p2", "../../pansuh/img/image75.jpg", [1190, 470, 330, 186], { tilt: -3, caption: "Traces of baked brick walls" }]] }
      ]
    },
    {
      id: "cry", title: "Crying Out to God",
      beats: [
        { say: "They thought harsh treatment would stop the Hebrews from having children. But all that hard work made them strong and healthy, and they had even more children.",
          draw: [["clear"],
                 ["title", "t", "Under oppression"],
                 ["write", "d1", [120, 300], "oppression"],
                 ["write", "d1b", { after: "d1", gap: 110 }, "even more babies", { color: "blue" }],
                 ["arrow", "d1", "d1b"]] },
        { say: "So Pharaoh told the midwives to kill the babies. But the Hebrew midwives feared God and did not kill them.",
          draw: [["write", "d2", [120, 420], "midwives: kill!"],
                 ["write", "d2b", { after: "d2", gap: 110 }, "feared God, didn't", { color: "blue" }],
                 ["arrow", "d2", "d2b"]] },
        { say: "In the end he ordered every baby boy thrown into the Nile.",
          draw: [["write", "d3", [120, 540], "baby boys into the Nile", { color: "red" }]] },
        { say: "Finally they cried out to God, and their cry went up to God.",
          draw: [["write", "d4", [120, 680], "cry out", { size: 84, color: "red" }],
                 ["circle", "d4"]] },
        { say: "God remembered his covenant with Abraham, Isaac, and Jacob, and he sent Moses.",
          draw: [["write", "d5", { after: "d4", gap: 140 }, "remembers covenant"],
                 ["arrow", "d4", "d5"],
                 ["write", "d6", { below: "d5", gap: 110 }, "sends Moses", { color: "blue" }],
                 ["box", "d6"]] }
      ]
    },
    {
      id: "who", title: "Who Is the LORD?",
      beats: [
        { say: "When Moses and Aaron first went to Pharaoh, Pharaoh said this. Who is the LORD, that I should obey his voice to let Israel go? I know not the LORD, neither will I let Israel go.",
          draw: [["clear"],
                 ["title", "t", "God reveals himself"],
                 ["write", "e1", { at: [800, 330] }, "\"Who is the LORD?\"", { anchor: "middle", size: 88 }],
                 ["write", "e1b", { at: [800, 410] }, "Exod 5:2 · Pharaoh", { anchor: "middle", size: 44, color: "gray" }]] },
        { say: "You don't know him? Then I'll make you know him.",
          draw: [["write", "e2", { at: [800, 530] }, "Don't know? I'll show you", { anchor: "middle", color: "blue" }]] },
        { say: "The ten plagues of Egypt are the process by which God reveals who he is.",
          draw: [["write", "e3", { at: [800, 670] }, "10 plagues = shows who God is", { anchor: "middle", color: "red" }],
                 ["under", "e3"]] },
        { say: "God could have knocked him out in the first round. But on purpose he hardened Pharaoh's heart, so that Pharaoh would keep taking the blows to the very end.",
          draw: [["write", "e4", { at: [800, 810] }, "not a round-1 KO: heart hardened", { anchor: "middle", size: 54, color: "gray" }]] }
      ]
    },
    {
      id: "plagues", title: "The Ten Plagues",
      beats: [
        { say: "In the early nineteenth century, a document written on papyrus was found in Egypt.",
          draw: [["clear"],
                 ["title", "t", "The ten plagues"],
                 ["photo", "p3", "../../pansuh/img/image76.jpg", [100, 230, 540, 304], { tilt: -2, caption: "Papyrus found in the early 1800s" }]] },
        { say: "It talks about a slave revolt, famine, water turned to blood, great upheaval, and deaths all across Egypt.",
          draw: [["write", "l1", [780, 300], "slave revolt · famine", { size: 60 }],
                 ["write", "l2", [780, 410], "water to blood · upheaval", { size: 60, color: "red" }],
                 ["write", "l3", [780, 520], "death across Egypt", { size: 60 }]] },
        { say: "The ten plagues show that God is greater than the gods of Egypt.",
          draw: [["photo", "p4", "../../pansuh/img/image77.jpg", [1040, 585, 390, 219], { tilt: 2 }],
                 ["write", "l4", [160, 760], "gods of Egypt < God", { size: 80, color: "blue" }],
                 ["under", "l4", "blue"]] }
      ]
    },
    {
      id: "three", title: "Three Directions of Revelation",
      beats: [
        { say: "The revelation goes in three directions. First, to Pharaoh and his people. With each plague the words are repeated: they shall know that I am the LORD.",
          draw: [["clear"],
                 ["title", "t", "Three directions"],
                 ["write", "f1", [120, 290], "① to Pharaoh & people", { color: "blue" }],
                 ["write", "f1b", { after: "f1", gap: 40 }, "know I am the LORD", { size: 56 }]] },
        { say: "Each plague strikes one of the gods of Egypt, and the last one strikes the sun god, Ra. Pharaoh was the son of the sun god. So it strikes even Pharaoh's son.",
          draw: [["write", "f2", [180, 380], "Egypt's gods one by one → last: sun god Ra", { size: 46, color: "gray" }],
                 ["under", "f2", "gray"]] },
        { say: "Second, to the people of Israel. Trust me and follow me! He let them see that the things they thought were mighty gods were really nothing at all, so they would gladly set out after him.",
          draw: [["write", "f3", [120, 530], "② to Israel", { color: "blue" }],
                 ["write", "f3b", { after: "f3", gap: 40 }, "Trust me, follow me!", { size: 56 }]] },
        { say: "Third, to everyone who reads Exodus. Stop always looking for miracles. There are already plenty of miracles in the Bible.",
          draw: [["write", "f4", [120, 720], "③ to all readers", { color: "blue" }],
                 ["write", "f4b", { after: "f4", gap: 40 }, "don't chase miracles", { size: 56, color: "red" }],
                 ["circle", "f4b"]] }
      ]
    },
    {
      id: "exit", title: "Out Overnight",
      beats: [
        { say: "Passover, and the escape from Egypt. The preparation took a long time, but the escape itself took just one night and two days.",
          draw: [["clear"],
                 ["title", "t", "Passover exodus"],
                 ["write", "g1", [120, 310], "1 night, 2 days", { size: 96, color: "red" }],
                 ["circle", "g1"],
                 ["photo", "p5", "../../pansuh/img/image78.jpg", [1130, 150, 390, 219], { tilt: 2.5, caption: "The Exodus route" }]] },
        { say: "They probably didn't want to leave the rich land of Goshen. So persecution came to make them leave. God called out people who had grown attached to the place over 400 years, people steeped in a slave mentality.",
          draw: [["write", "g2", [120, 470], "liked Goshen"],
                 ["write", "g3", { after: "g2", gap: 80 }, "persecution"],
                 ["write", "g4", { after: "g3", gap: 80 }, "called out", { color: "blue" }],
                 ["arrow", "g2", "g3"],
                 ["arrow", "g3", "g4"]] },
        { say: "They didn't just walk out. They went out decked in all kinds of gold and silver jewelry and ornaments. The original word carries the sense of plundering. Later, a huge amount of gold went into building the sanctuary. Where do you think all that came from?",
          draw: [["write", "g5", [120, 600], "left with gold & silver"],
                 ["write", "g6", { after: "g5", gap: 110 }, "later: gold for sanctuary", { color: "green" }],
                 ["arrow", "g5", "g6"]] },
        { say: "There was a short road from Egypt to Canaan, but God made them go the long way, through the wilderness. Moses explains in Deuteronomy that it was training, to see whether they would do what God said or not.",
          draw: [["write", "g7", [120, 740], "short road", { color: "gray" }],
                 ["strike", "g7", "gray"],
                 ["write", "g8", { after: "g7", gap: 110 }, "wilderness = training", { color: "red" }],
                 ["arrow", "g7", "g8"],
                 ["under", "g8"]] }
      ]
    },
    {
      id: "covenant", title: "A Kingdom of Priests",
      beats: [
        { say: "Above all, what matters most in Exodus is this: why did they come out of Egypt at all? God didn't just rescue them because they begged to be saved. God had a plan.",
          draw: [["clear"],
                 ["title", "t", "Why did they leave?"],
                 ["write", "h1", [120, 290], "\"Save us!\"", { color: "gray" }],
                 ["strike", "h1"],
                 ["write", "h2", { after: "h1", gap: 110 }, "God's plan", { color: "red" }],
                 ["arrow", "h1", "h2"]] },
        { say: "The covenant at Sinai, Exodus chapter 19, verses 5 and 6.",
          draw: [["write", "h3", [120, 400], "Sinai covenant · Exod 19:5~6", { size: 56, color: "blue" }]] },
        { say: "There is the LORD God, and in the middle he sets up Israel.",
          draw: [["write", "h4", { at: [260, 640] }, "the LORD", { anchor: "middle", size: 72 }],
                 ["write", "h5", { at: [760, 640] }, "Israel", { anchor: "middle", size: 80, color: "red" }],
                 ["arrow", "h4", "h5"],
                 ["box", "h5", "red"]] },
        { say: "And all around it are the nations, like Egypt, Assyria, Babylon, and Moab.",
          draw: [["write", "h6", { at: [1300, 500] }, "Egypt", { anchor: "middle", size: 56 }],
                 ["write", "h7", { at: [1420, 610] }, "Assyria", { anchor: "middle", size: 56 }],
                 ["write", "h8", { at: [1420, 720] }, "Babylon", { anchor: "middle", size: 56 }],
                 ["write", "h9", { at: [1300, 820] }, "Moab", { anchor: "middle", size: 56 }],
                 ["arrow", "h5", "h6", "blue"],
                 ["arrow", "h5", "h7", "blue"],
                 ["arrow", "h5", "h8", "blue"],
                 ["arrow", "h5", "h9", "blue"]] },
        { say: "God made Israel a kingdom of priests. Remember what I explained earlier? Let's do world mission together.",
          draw: [["write", "h10", { at: [760, 820] }, "kingdom of priests", { anchor: "middle", size: 72, color: "blue" }],
                 ["under", "h10", "blue"]] }
      ]
    },
    {
      id: "law", title: "The Ten Commandments and the Detailed Rules",
      beats: [
        { say: "Chapter 20 is the Ten Commandments. Expand the Ten Commandments and you get the Law. Later Jesus sums up the Law in a single word: love God, love your neighbor. And these two are equal.",
          draw: [["clear"],
                 ["title", "t", "Ten Commandments · rules"],
                 ["write", "i1", [120, 290], "ch. 20 Ten Commandments → Law", { size: 56 }],
                 ["write", "i2", { after: "i1", gap: 40 }, "love God = love neighbor", { size: 56, color: "red" }],
                 ["circle", "i2"]] },
        { say: "Chapter 21 is the detailed rules. If a servant's ear is pierced with an awl against the doorpost, he becomes a servant for life. Live so that your servant says, 'Master, I want to live with you all my life.'",
          draw: [["write", "i3", [120, 430], "ch. 21 · pierced ear", { size: 56, color: "blue" }],
                 ["write", "i3b", { after: "i3", gap: 40 }, "be a master worth staying with", { size: 56 }]] },
        { say: "The laws of restitution in chapter 22 usually make you pay back more than the damage you caused. Because relationships matter more.",
          draw: [["write", "i4", [120, 540], "ch. 22 · restitution", { size: 56, color: "blue" }],
                 ["write", "i4b", { after: "i4", gap: 40 }, "repay more → people matter more", { size: 56 }]] },
        { say: "Again and again we are told to care for the stranger, the orphan, and the widow.",
          draw: [["write", "i5", [120, 650], "care for stranger · orphan · widow", { size: 56, color: "green" }]] },
        { say: "The Sabbath is a law that gives rest. It isn't for God's sake, it's for people. Slaves and servants, who could never rest unless someone told them to, and even the animals, could rest completely on this day.",
          draw: [["write", "i6", [120, 790], "Sabbath = law of rest", { color: "red" }],
                 ["write", "i6b", { after: "i6", gap: 40 }, "(made for people)", { size: 52, color: "gray" }],
                 ["under", "i6"]] }
      ]
    },
    {
      id: "calf", title: "The Golden Calf and the Tabernacle",
      beats: [
        { say: "God himself carved all this on tablets of stone and gave them to Moses. Moses came down with them, and there were the people of Israel bowing down to a golden calf. Moses was furious and smashed the tablets.",
          draw: [["clear"],
                 ["title", "t", "The golden calf"],
                 ["write", "j1", [120, 300], "comes down w/ tablets"],
                 ["write", "j2", { after: "j1", gap: 110 }, "bowing to a calf", { color: "red" }],
                 ["arrow", "j1", "j2"],
                 ["write", "j3", { below: "j2", gap: 100 }, "tablets smashed", { size: 56, color: "red" }]] },
        { say: "When Moses confronted him, Aaron made an excuse. I threw the gold into the fire, and out came this calf. That's a lie, isn't it? Chapter 32, verse 4 says Aaron clearly cast it and shaped it with an engraving tool.",
          draw: [["write", "j4", [120, 520], "\"threw it in, out it came\"", { size: 56 }],
                 ["strike", "j4"],
                 ["write", "j5", { after: "j4", gap: 50 }, "32:4 cast · engraved", { size: 56, color: "blue" }]] },
        { say: "Whoever is on the LORD's side, come to me! All the sons of Levi came. That day 3000 people died.",
          draw: [["write", "j6", [120, 650], "on the LORD's side → Levites · 3000 died", { size: 56 }]] },
        { say: "God carved the Ten Commandments on stone tablets again. Now they build the tabernacle and dedicate it. With chapter 40, Exodus comes to an end.",
          draw: [["write", "j7", [120, 790], "new tablets → tabernacle dedicated", { color: "green" }],
                 ["box", "j7", "green"]] }
      ]
    },
    {
      id: "blood", title: "Old Covenant and New Covenant",
      beats: [
        { say: "The Old Testament and the New Testament. The covenant made with the blood of animals is the old covenant,",
          draw: [["clear"],
                 ["title", "t", "Old and New Covenant"],
                 ["write", "k1", [200, 340], "blood of animals"],
                 ["write", "k2", { at: [1150, 340] }, "Old", { size: 80, color: "blue" }],
                 ["arrow", "k1", "k2"]] },
        { say: "and the covenant made with the blood of Jesus is the new covenant.",
          draw: [["write", "k3", [200, 500], "blood of Jesus"],
                 ["write", "k4", { at: [1150, 500] }, "New", { size: 80, color: "red" }],
                 ["arrow", "k3", "k4"],
                 ["box", "k4", "red"]] },
        { say: "The old covenant says: love God, love your neighbor.",
          draw: [["write", "k5", [200, 690], "love God · love neighbor", { color: "blue" }]] },
        { say: "The new covenant says: love one another.",
          draw: [["write", "k6", { at: [1150, 690] }, "love one another", { size: 64, color: "red" }],
                 ["arrow", "k5", "k6"],
                 ["circle", "k6"]] }
      ]
    }
  ]
};
