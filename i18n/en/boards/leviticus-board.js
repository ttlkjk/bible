// Leviticus whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does.
window.BOARD = {
  scenes: [
    {
      id: "core", title: "Old Covenant = Leviticus",
      beats: [
        { say: "People say Leviticus is boring and dry. But here's the thing. Give up on Leviticus, and you've basically given up on the whole Old Testament.",
          draw: [["title", "t", "Old covenant = Leviticus"],
                 ["write", "a1", [120, 300], "boring · dry", { color: "gray" }],
                 ["write", "a2", { after: "a1", gap: 110 }, "skip it = skip the whole OT", { color: "red" }],
                 ["arrow", "a1", "a2"]] },
        { say: "We don't read the Bible for fun, right? We read it for meaning.",
          draw: [["write", "a3", { at: [800, 440] }, "not for fun, for meaning", { anchor: "middle", size: 76, color: "blue" }],
                 ["under", "a3", "blue"]] },
        { say: "Leviticus is the center of the Old Testament. Its core. And it's the center of the Pentateuch, too.",
          draw: [["write", "a4", [120, 580], "center · core of OT · center of Pentateuch", { size: 56 }]] },
        { say: "And of all the books in the Old and New Testaments, it was the very first one written.",
          draw: [["write", "a5", [120, 690], "the first book written", { size: 60 }]] },
        { say: "Strictly speaking, Leviticus is the covenant itself. It's the covenant of Sinai, the old covenant.",
          draw: [["write", "a6", [120, 810], "Leviticus = Sinai covenant = old covenant", { size: 56, color: "red" }],
                 ["box", "a6"]] }
      ]
    },
    {
      id: "levi", title: "A Covenant of Life and Peace",
      beats: [
        { say: "Malachi chapter 2, verses 4 and 5. My covenant with Levi was a covenant of life and peace.",
          draw: [["clear"],
                 ["title", "t", "Covenant with Levi"],
                 ["photo", "p1", "img/image81.jpg", [1060, 40, 440, 248], { tilt: 2 }],
                 ["write", "b1", [100, 330], "Mal 2:4~5", { size: 52, color: "gray" }],
                 ["write", "b2", { below: "b1", gap: 100 }, "covenant with Levi = Leviticus", { color: "blue" }]] },
        { say: "So what kind of covenant is Leviticus? A covenant of life and peace.",
          draw: [["write", "b3", [100, 570], "covenant of life and peace", { size: 72, color: "green" }],
                 ["circle", "b3", "green"]] },
        { say: "Why do we study the Law? To learn to fear the LORD.",
          draw: [["write", "b4", [100, 700], "goal: learn to fear the LORD", { size: 60, color: "red" }]] },
        { say: "If you just fear God, you get salvation, plus a little extra on top, and blessings too.",
          draw: [["write", "b5", [160, 810], "salvation · extra · blessing", { size: 54, color: "gray" }]] }
      ]
    },
    {
      id: "when", title: "When Leviticus Was Given",
      beats: [
        { say: "Now, when Leviticus was given really matters. First, it was given after they were saved, as the rules for living like saved people. It's not the condition for salvation.",
          draw: [["clear"],
                 ["title", "t", "Why and when given?"],
                 ["write", "c1", [120, 300], "① after salvation · how to live as his people", { size: 52, color: "blue" }],
                 ["write", "c1b", [180, 390], "condition for salvation", { size: 48, color: "gray" }],
                 ["strike", "c1b"]] },
        { say: "Second, it's a law to give life and peace. So they'd become a holy people and be blessed, and live healthy, good lives on this earth.",
          draw: [["write", "c2", [120, 500], "② to live healthy and well on earth", { size: 60, color: "blue" }]] },
        { say: "Third, it was given so Israel could fulfill its mission as a nation, to become a kingdom of priests. I mean, would it be okay for a missionary to go out and cheat people?",
          draw: [["write", "c3", [120, 610], "③ to be a kingdom of priests", { size: 60, color: "red" }],
                 ["under", "c3"]] },
        { say: "The Law is the way to be blessed. And why does God bless? To make other nations envy them. Not by force, but by envy. That's how a personal God works.",
          draw: [["write", "c4", [120, 730], "blessing → nations envy", { color: "green" }],
                 ["write", "c4b", { after: "c4", gap: 40 }, "(the personal way)", { size: 46, color: "gray" }]] },
        { say: "You know what slaves in the ancient Near East dreamed about? Being sold to Israel. There they were treated as people, rested one day in seven, got more than a hundred days off a year, and still earned three times what the nations around paid in a year.",
          draw: [["write", "c5", [120, 840], "slaves' dream: be sold to Israel", { size: 50, color: "gray" }]] }
      ]
    },
    {
      id: "kingdom", title: "Where Is Heaven?",
      beats: [
        { say: "The kingdom God wanted to build together with Israel is the kingdom of heaven. And heaven isn't up there in the sky. Heaven is the place where the Law is kept.",
          draw: [["clear"],
                 ["title", "t", "Where is heaven?"],
                 ["write", "d1", [120, 300], "up in the sky", { color: "gray" }],
                 ["strike", "d1"],
                 ["write", "d2", { after: "d1", gap: 110 }, "where the Law is kept", { color: "red" }],
                 ["arrow", "d1", "d2"],
                 ["circle", "d2"]] },
        { say: "What are the three elements of a nation? People, sovereignty, and territory.",
          draw: [["write", "d3", { at: [400, 460] }, "people", { anchor: "middle", size: 64 }],
                 ["write", "d4", { at: [800, 460] }, "sovereignty", { anchor: "middle", size: 64 }],
                 ["write", "d5", { at: [1200, 460] }, "territory", { anchor: "middle", size: 64 }]] },
        { say: "The land's God's anyway, so set that aside. It's a place where God's people are, and where God's sovereignty, meaning the Law, the law of heaven, is kept.",
          draw: [["write", "d6", { at: [400, 570] }, "God's people", { anchor: "middle", size: 50, color: "blue" }],
                 ["write", "d7", { at: [800, 570] }, "Law = heaven's law", { anchor: "middle", size: 50, color: "blue" }],
                 ["write", "d8", { at: [1200, 570] }, "God's land", { anchor: "middle", size: 50, color: "blue" }]] },
        { say: "And what kind of nation is that? The kingdom of God! And the kingdom of God is heaven.",
          draw: [["write", "d9", { at: [800, 700] }, "= kingdom of God = heaven", { anchor: "middle", size: 76, color: "red" }],
                 ["box", "d9"]] },
        { say: "If you only ever think of heaven as some super nice place you go after you die, you end up a strange kind of Christian, full of greed. Talking about God with your mouth, while your life's a mess.",
          draw: [["write", "d10", { at: [800, 820] }, "only a nice place after death? → greedy Christians", { anchor: "middle", size: 48, color: "gray" }]] }
      ]
    },
    {
      id: "model", title: "The Model House",
      beats: [
        { say: "Picture a nation where brothers love each other dearly, share whatever's left over, and give to anyone who asks. A nation that treats even servants as people, and makes sure they rest one day in seven.",
          draw: [["clear"],
                 ["title", "t", "Israel, the model house"],
                 ["write", "e1", [120, 300], "love · sharing · servants respected · rest", { size: 56 }]] },
        { say: "Even with a third of the year off, they earn more than three times as much a year. Politics are stable, and the LORD's army is with them, so who'd dare threaten them? If you were a slave, you'd want to be sold there. If you were free, you'd want to become a citizen.",
          draw: [["write", "e2", [120, 420], "a nation everyone envies", { color: "green" }],
                 ["under", "e2", "green"]] },
        { say: "The idea is to build a nation like that, like a model house, and together carry out a huge world mission, bringing all the scattered nations of the world back to God.",
          draw: [["write", "e3", [120, 550], "model house"],
                 ["write", "e4", { after: "e3", gap: 110 }, "world mission", { color: "red" }],
                 ["arrow", "e3", "e4"],
                 ["box", "e3"]] },
        { say: "And God gave the Law as the law of his kingdom. The rules those missionaries have to keep.",
          draw: [["write", "e5", { after: "e4", gap: 50 }, "missionary rules = Law", { size: 50, color: "blue" }]] },
        { say: "If you keep it, you become holy. Crying out Lord! until your voice is hoarse, that's not holiness. That's just a sore throat.",
          draw: [["write", "e6", [120, 690], "\"Lord~!\" (hoarse voice)", { size: 56, color: "gray" }],
                 ["strike", "e6"]] },
        { say: "Holiness means keeping the Law, and so being set apart. The theme of Leviticus is chapter 11 verse 45. Ye shall therefore be holy, for I am holy.",
          draw: [["write", "e7", [120, 810], "holy = set apart by keeping Law", { size: 60, color: "red" }],
                 ["write", "e8", { after: "e7", gap: 50 }, "Lev 11:45", { size: 50, color: "gray" }]] }
      ]
    },
    {
      id: "valid", title: "When the Law Expires",
      beats: [
        { say: "Now let's look at how long the Law stays in force. The laws that were kept as a pattern, a shadow, were done away with once the real thing came.",
          draw: [["clear"],
                 ["title", "t", "Is the Law still valid?"],
                 ["photo", "p2", "img/image82.jpg", [1120, 40, 400, 225], { tilt: -2 }],
                 ["write", "f1", [100, 330], "laws done away = shadows", { color: "blue" }]] },
        { say: "Take the sacrificial law. Sacrificing cattle, sheep, and goats was done away with after Jesus, the real thing, sacrificed himself. Circumcision was done away with when baptism came, the circumcision of the heart. And customary laws like levirate marriage were done away with too.",
          draw: [["write", "f2", [140, 440], "sacrifices · circumcision · customs", { size: 58 }],
                 ["strike", "f2"]] },
        { say: "But the laws people actually live out? Those are never done away with.",
          draw: [["write", "f3", [100, 590], "laws that stay = real practice", { color: "red" }]] },
        { say: "Food laws, hygiene laws, and judicial laws. The food laws were about what people really ate, so they're not done away with. In fact, our food today is so unclean that we need to be even more careful than they were back then.",
          draw: [["write", "f4", [140, 700], "food · hygiene · judicial laws", { size: 58, color: "green" }],
                 ["under", "f4", "green"],
                 ["write", "f5", [140, 810], "be even pickier about food today", { size: 48, color: "gray" }]] }
      ]
    },
    {
      id: "five1", title: "Five Offerings, Part 1",
      beats: [
        { say: "Here's how Leviticus is laid out. Chapters 1 to 10 are the holy laws of sacrifice. Chapters 1 to 7 are the five offerings. The burnt offering, the grain offering, the peace offering, the sin offering, and the trespass offering.",
          draw: [["clear"],
                 ["title", "t", "Five offerings (ch. 1~7)"],
                 ["photo", "p3", "img/image83.jpg", [1120, 40, 400, 225], { tilt: 2 }],
                 ["write", "g1", [100, 330], "burnt · grain · peace · sin · trespass", { size: 56, color: "blue" }]] },
        { say: "Burnt offering means to burn, to roast. It's a sacrifice in place of the sinner who'd burn in the fire of hell. It stands for devotion.",
          draw: [["write", "g2", [100, 460], "burnt", { color: "red" }],
                 ["write", "g2b", { after: "g2", gap: 50 }, "burn · dies for sinner = devotion", { size: 52 }]] },
        { say: "The grain offering is a gift. Wheat is ground up and offered as fine flour. Only when it's ground to powder can it become one.",
          draw: [["write", "g3", [100, 580], "grain", { color: "red" }],
                 ["write", "g3b", { after: "g3", gap: 50 }, "fine flour · ground to powder → one", { size: 52 }]] },
        { say: "The peace offering means it doesn't stop at atonement. It has to go all the way to reconciliation. The person who offered it gets to eat some too. It's an offering of sharing.",
          draw: [["write", "g4", [100, 700], "peace", { color: "red" }],
                 ["write", "g4b", { after: "g4", gap: 50 }, "up to reconciliation · sharing", { size: 52, color: "green" }]] },
        { say: "With an ox, after the priest's share, you've got about six hundred kilograms of meat, and it has to be eaten within a day or two. You can't just invite your close friends. You'd have to invite everyone to pull that off.",
          draw: [["write", "g5", [160, 810], "600 kg of meat · in 2 days → invite all", { size: 50, color: "gray" }]] }
      ]
    },
    {
      id: "five2", title: "Five Offerings, Part 2",
      beats: [
        { say: "The sin offering only forgives sins done without knowing. Sins done on purpose, planned out, or over and over have to be punished by death.",
          draw: [["clear"],
                 ["title", "t", "Sin and trespass offerings"],
                 ["write", "h1", [100, 300], "sin", { color: "red" }],
                 ["write", "h1b", { after: "h1", gap: 50 }, "only sins done unknowingly", { size: 58 }],
                 ["write", "h1c", [160, 400], "on purpose · planned · repeated → death", { size: 48, color: "gray" }]] },
        { say: "The trespass offering is for when you've caused a loss to God or to your neighbor. You have to pay it back with twenty percent added.",
          draw: [["write", "h2", [100, 530], "trespass", { color: "red" }],
                 ["write", "h2b", { after: "h2", gap: 50 }, "repay loss + 20%", { size: 58 }]] },
        { say: "The laws of sacrifice are given twice. The first time, it's about how the worshiper brings the offering. The second time, it's about how the priest carries out the rite.",
          draw: [["write", "h3", { at: [420, 640] }, "1st: the worshiper", { anchor: "middle", size: 54, color: "blue" }],
                 ["write", "h4", { at: [1180, 640] }, "2nd: the priest", { anchor: "middle", size: 54, color: "blue" }]] },
        { say: "The first part says a poor person may bring a dove. The second part tells the priest not to use a knife on a dove, but to do it with his fingernail.",
          draw: [["write", "h5", { at: [420, 740] }, "a dove is OK", { anchor: "middle", size: 52 }],
                 ["write", "h6", { at: [1180, 740] }, "by fingernail", { anchor: "middle", size: 52 }],
                 ["arrow", "h5", "h6", "green"]] },
        { say: "The rich folks bringing oxen can take care of themselves. But the poor people's doves? The priest has to handle those himself. God's really cool, isn't he?",
          draw: [["write", "h7", { at: [800, 840] }, "God is so cool!", { anchor: "middle", size: 56, color: "red" }]] }
      ]
    },
    {
      id: "fire", title: "Strange Fire",
      beats: [
        { say: "Chapters 8 and 9 are the ordination of the priests.",
          draw: [["clear"],
                 ["title", "t", "Ordination and strange fire"],
                 ["write", "i1", [120, 300], "ch. 8~9 ordination of priests", { size: 58, color: "gray" }]] },
        { say: "Chapter 10 is the death of Nadab and Abihu. Aaron's sons offered strange fire, which the LORD hadn't commanded, and fire came out from the altar, and they burned to death.",
          draw: [["write", "i2", [120, 430], "ch. 10 Nadab, Abihu", { color: "blue" }],
                 ["write", "i2b", { after: "i2", gap: 50 }, "strange fire", { color: "red" }],
                 ["circle", "i2b"]] },
        { say: "The root was drinking. The result was offering strange fire. And in the end, they burned to death.",
          draw: [["write", "i3", [120, 580], "wine"],
                 ["write", "i4", { after: "i3", gap: 110 }, "strange fire"],
                 ["write", "i5", { after: "i4", gap: 110 }, "burned", { color: "red" }],
                 ["arrow", "i3", "i4"],
                 ["arrow", "i4", "i5"]] },
        { say: "Chapter 10 verse 9. Do not drink wine nor strong drink when ye go into the tabernacle of the congregation, lest ye die.",
          draw: [["write", "i6", [120, 730], "10:9 no wine in the tabernacle", { size: 58 }],
                 ["under", "i6"]] }
      ]
    },
    {
      id: "food", title: "The Chopsticks Chapter",
      beats: [
        { say: "Chapters 11 to 25 are the life of a holy people. First up, chapter 11, the food rules. We call it the chopsticks chapter, because 11 looks like a pair of chopsticks.",
          draw: [["clear"],
                 ["title", "t", "Ch. 11 Food rules (chopsticks ch.)"]] },
        { say: "The meat you can eat comes from animals with split hooves that chew the cud. Cattle, sheep, goats, deer. Not pigs, dogs, or rabbits.",
          draw: [["write", "j1", [100, 310], "meat: split hoof + chews cud", { size: 56, color: "blue" }],
                 ["write", "j1b", { after: "j1", gap: 40 }, "ox · sheep ○  pig · rabbit ✕", { size: 48, color: "gray" }]] },
        { say: "Fish have to have scales and fins. Yellow croaker, sea bream, pollack, anchovy, those are fine. Eel and catfish, no.",
          draw: [["write", "j2", [100, 430], "fish: scales + fins", { size: 56, color: "blue" }],
                 ["write", "j2b", { after: "j2", gap: 40 }, "croaker · pollack ○  eel · catfish ✕", { size: 48, color: "gray" }]] },
        { say: "Only a few birds can be eaten. Birds of prey that eat other birds or fish aren't allowed. Sparrows and doves are fine.",
          draw: [["write", "j3", [100, 550], "birds: birds of prey ✕", { size: 56, color: "blue" }],
                 ["write", "j3b", { after: "j3", gap: 40 }, "sparrow · dove ○", { size: 48, color: "gray" }]] },
        { say: "Insects have to have wings and creep on four legs. Locusts and crickets are fine. Centipedes, no.",
          draw: [["write", "j4", [100, 670], "insects: wings + four legs", { size: 56, color: "blue" }],
                 ["write", "j4b", { after: "j4", gap: 40 }, "locust ○  centipede ✕", { size: 48, color: "gray" }]] },
        { say: "Creeping things like weasels, mice, and lizards can't be eaten.",
          draw: [["write", "j5", [100, 790], "creepers: weasel · mouse · lizard ✕", { size: 56, color: "red" }]] }
      ]
    },
    {
      id: "clean", title: "Chapters 12~17",
      beats: [
        { say: "Chapter 12 is the time of purification after childbirth. Thirty-three days for a boy, sixty-six days for a girl. Making a girl takes more work.",
          draw: [["clear"],
                 ["title", "t", "Ch. 12~17"],
                 ["write", "k1", [100, 300], "ch. 12 childbirth: boy 33 · girl 66 days", { size: 54 }],
                 ["write", "k1b", { after: "k1", gap: 40 }, "girls are harder", { size: 44, color: "gray" }]] },
        { say: "Chapter 13 is how to examine leprosy. Unlucky Friday the thirteenth, leprosy. Chapter 14 is the cleansing rite once the leprosy's healed.",
          draw: [["write", "k2", [100, 420], "ch. 13 leprosy check · 14 cleansing", { size: 56 }],
                 ["write", "k2b", { after: "k2", gap: 40 }, "Friday the 13th", { size: 44, color: "gray" }]] },
        { say: "Chapter 15, the issue, is a sexually transmitted disease. The Old Testament calls it an issue, and the New Testament calls it an issue of blood. Chapter 16 is the rules for the Day of Atonement.",
          draw: [["write", "k3", [100, 540], "ch. 15 issue (NT: issue of blood) · 16 Day of Atonement", { size: 48 }]] },
        { say: "Chapter 17 says never eat blood or fat. For the life of all flesh is the blood thereof.",
          draw: [["write", "k4", [100, 690], "ch. 17 no blood or fat", { color: "red" }],
                 ["write", "k5", [160, 800], "life of all flesh is the blood (17:14)", { size: 54, color: "blue" }],
                 ["under", "k4"]] }
      ]
    },
    {
      id: "ethics", title: "Chapters 18~24",
      beats: [
        { say: "Chapter 18 is the sexual ethics of a holy people. Sure enough, number 18, ethics' greatest hit, is sexual ethics. Sexual ethics in the ancient Near East had hit rock bottom. Even their gods were immoral.",
          draw: [["clear"],
                 ["title", "t", "Ch. 18~24"],
                 ["write", "l1", [100, 290], "ch. 18 sexual ethics", { size: 58, color: "blue" }],
                 ["write", "l1b", { after: "l1", gap: 40 }, "ethics' #18 hit", { size: 46, color: "gray" }]] },
        { say: "Chapter 19 is social ethics. Because at nineteen, you finish high school and head out into society.",
          draw: [["write", "l2", [100, 400], "ch. 19 social ethics", { size: 58, color: "blue" }],
                 ["write", "l2b", { after: "l2", gap: 40 }, "into society at 19", { size: 46, color: "gray" }]] },
        { say: "Chapter 20 is the sins that have to be punished by death. The point isn't killing. It's to put away evil from among you. It's a preventive law.",
          draw: [["write", "l3", [100, 510], "ch. 20 death penalty sins", { size: 58, color: "blue" }],
                 ["write", "l3b", { after: "l3", gap: 40 }, "= prevention", { size: 58, color: "red" }],
                 ["circle", "l3b"]] },
        { say: "Chapter 21 is the rules for how priests should carry themselves. Every believer's a priest, so whether you're a deacon or a pastor, you have to live a holy life. Chapter 22 is offerings without blemish.",
          draw: [["write", "l4", [100, 620], "ch. 21 priests' conduct → all are priests", { size: 54, color: "blue" }]] },
        { say: "The feasts in chapter 23 are for remembering and celebrating great events of grace in history, so they're never forgotten. Chapter 24 is taking care of the tabernacle and the altar.",
          draw: [["write", "l5", [100, 730], "ch. 23 feasts = never forget", { size: 58, color: "green" }],
                 ["write", "l6", [100, 830], "ch. 24 care of tabernacle and altar", { size: 50, color: "gray" }]] }
      ]
    },
    {
      id: "jubilee", title: "Sabbath Year and Jubilee",
      beats: [
        { say: "Chapter 25 is the sabbath year, the jubilee, and the redemption of land. In the sabbath year, once every seven years, the land rests. That year's crops belong to the servants, hired workers, strangers, orphans and widows. The weak of society.",
          draw: [["clear"],
                 ["title", "t", "Ch. 25 Sabbath year · Jubilee · Land"],
                 ["write", "m1", [100, 300], "sabbath year (7)", { color: "blue" }],
                 ["write", "m1b", { after: "m1", gap: 50 }, "land rests · crop for the weak", { size: 52 }]] },
        { say: "In the sixth year, God gives three times the harvest. Debts are forgiven, and slaves go free.",
          draw: [["write", "m2", [160, 400], "6th year: triple crop · debts forgiven · slaves freed", { size: 46, color: "gray" }]] },
        { say: "The jubilee comes once every fifty years. Liberty is proclaimed, and land goes back to its original owner.",
          draw: [["write", "m3", [100, 530], "jubilee (50)", { color: "blue" }],
                 ["write", "m3b", { after: "m3", gap: 50 }, "liberty · land back to owner", { size: 56 }]] },
        { say: "It's God's perfect social security system. Poverty is never passed down, and there are no super rich and no desperately poor.",
          draw: [["write", "m4", [100, 650], "poverty never inherited", { color: "green" }],
                 ["under", "m4", "green"]] },
        { say: "The land law starts from this. All land belongs to God. Nobody can own it. Only the right to farm it can be bought and sold. If a brother falls on hard times and sells his land, his nearest well-off relative pays the price. That's the redemption of the inheritance.",
          draw: [["write", "m5", [100, 790], "land is God's", { color: "red" }],
                 ["write", "m6", { after: "m5", gap: 110 }, "redeeming the land", { color: "blue" }],
                 ["arrow", "m5", "m6"],
                 ["box", "m6", "blue"]] }
      ]
    },
    {
      id: "order", title: "Priorities of Faith",
      beats: [
        { say: "The way Leviticus is laid out shows us the priorities of a life of faith. Chapters 1 to 10, the life of worship, our relationship with God, that's the most important.",
          draw: [["clear"],
                 ["title", "t", "Priorities of faith"],
                 ["photo", "p4", "img/image85.jpg", [1120, 40, 400, 225], { tilt: 2 }],
                 ["write", "n1", [100, 330], "① ch. 1~10: worship", { size: 68, color: "red" }]] },
        { say: "Next is chapter 11, your own health. You've got to be healthy to do God's work.",
          draw: [["write", "n2", [100, 450], "② ch. 11: health", { size: 64, color: "blue" }]] },
        { say: "Then chapters 12 to 25, our relationships with other people.",
          draw: [["write", "n3", [100, 570], "③ ch. 12~25: neighbors", { size: 64, color: "blue" }]] },
        { say: "And money matters? Those are in chapter 27. The very last priority.",
          draw: [["write", "n4", [100, 690], "④ ch. 27: money last", { size: 64, color: "gray" }]] },
        { say: "So now that the Law's been given, what should we do? We've got to try it out. And that's exactly what they do. Just among themselves, out in the wilderness.",
          draw: [["write", "n5", { at: [1100, 790] }, "let's try it, in the wilderness!", { anchor: "middle", size: 60, color: "green" }],
                 ["under", "n5", "green"]] }
      ]
    }
  ]
};
