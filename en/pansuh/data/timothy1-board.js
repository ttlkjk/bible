// 1 Timothy whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does.
window.BOARD = {
  scenes: [
    {
      id: "stay", title: "Why Timothy Was Left Behind",
      beats: [
        { say: "Okay, First Timothy, chapter 1. When Paul went on to Macedonia, he urged Timothy to stay behind in Ephesus.",
          draw: [["title", "t", "1 Timothy"],
                 ["photo", "p1", "../../pansuh/img/p4/image80.jpg", [1268, 46, 260, 146], { tilt: 3 }],
                 ["write", "a1", [120, 300], "stay in Ephesus", { color: "blue" }],
                 ["write", "a2", { after: "a1", gap: 30 }, "1 Tim 1:3", { size: 44, color: "gray" }]] },
        { say: "So why did he leave Timothy there? To stop people from teaching other doctrines, and from getting caught up in myths and endless genealogies.",
          draw: [["write", "a3", [120, 420], "other doctrine"],
                 ["write", "a4", { after: "a3", gap: 40 }, "myths · endless genealogies"],
                 ["strike", "a3", "red"],
                 ["strike", "a4", "red"]] },
        { say: "Think of the Greek and Roman myths. Look at the gods in them. They marry their own daughters. It's a total mess, isn't it?",
          draw: [["write", "a5", [120, 540], "Greek and Roman myths"],
                 ["write", "a6", { after: "a5", gap: 40 }, "marry daughters · a mess", { size: 52, color: "gray" }]] },
        { say: "The Greeks lived immoral lives, so they made up gods who looked just like them.",
          draw: [["write", "a7", [120, 660], "immoral living"],
                 ["write", "a8", { after: "a7", gap: 110 }, "gods like themselves", { color: "red" }],
                 ["arrow", "a7", "a8"]] },
        { say: "All this stuff just stirs up arguments. And he left Timothy there to put a stop to it.",
          draw: [["write", "a9", [120, 790], "→ only stir up arguments", { color: "red" }],
                 ["under", "a9"]] }
      ]
    },
    {
      id: "law", title: "The Goal of the Teaching, and the Law",
      beats: [
        { say: "Now, the goal of this teaching is love. Love that comes from a pure heart, a good conscience, and a sincere faith.",
          draw: [["clear"],
                 ["title", "t", "Goal of teaching, and the law"],
                 ["write", "b1", [120, 290], "goal of teaching ="],
                 ["write", "b2", { after: "b1", gap: 30 }, "love", { size: 80, color: "red" }],
                 ["circle", "b2"],
                 ["write", "b3", [180, 370], "from a pure heart · good conscience · sincere faith", { size: 46, color: "gray" }]] },
        { say: "But people wander off from the gospel and want to be teachers of the law. And they don't even know what they're talking about.",
          draw: [["write", "b4", [120, 500], "want to teach the law"],
                 ["write", "b5", { after: "b4", gap: 40 }, "don't know what they say", { size: 52, color: "gray" }]] },
        { say: "He says the law isn't made for a righteous man.",
          draw: [["write", "b6", [120, 620], "law not made for the righteous", { size: 60, color: "blue" }]] },
        { say: "It's for the lawless and the disobedient, the ungodly and sinners, murderers, the sexually immoral, slave traders, liars, and anything else that goes against sound teaching.",
          draw: [["write", "b7", [120, 720], "lawless · disobedient · ungodly · sinners · murderers", { size: 52 }],
                 ["write", "b8", [120, 800], "immoral · slave traders · liars · against sound teaching", { size: 52 }]] }
      ]
    },
    {
      id: "fight", title: "The Good Fight and Church Discipline",
      beats: [
        { say: "He tells him, fight the good fight, holding on to faith and a good conscience. You always have to keep a good conscience.",
          draw: [["clear"],
                 ["title", "t", "Good fight and discipline"],
                 ["write", "c1", [120, 290], "good fight · faith · good conscience", { color: "blue" }]] },
        { say: "But some people threw that conscience away, and their faith was shipwrecked. And he says he handed them over to Satan.",
          draw: [["write", "c2", [120, 410], "conscience gone → faith wrecked", { size: 60 }],
                 ["write", "c3", { after: "c2", gap: 40 }, "given to Satan", { size: 60, color: "red" }]] },
        { say: "Hymenaeus shows up again in Second Timothy, chapter 2, verse 17. He's the one saying the resurrection has already happened.",
          draw: [["write", "c4", [120, 530], "Hymenaeus"],
                 ["write", "c5", { after: "c4", gap: 40 }, "resurrection already past (2 Tim 2:17)", { size: 52, color: "gray" }]] },
        { say: "And Alexander seems to be the man who testified against Paul.",
          draw: [["write", "c6", [120, 640], "Alexander"],
                 ["write", "c7", { after: "c6", gap: 40 }, "testified against Paul?", { size: 52, color: "gray" }]] },
        { say: "The early church's discipline was sharp as a razor. If they said, I hand you over to Satan in the name of the Father, the Son, and the Holy Spirit, that person would nearly die.",
          draw: [["write", "c8", [120, 770], "razor-sharp discipline", { color: "red" }],
                 ["box", "c8"],
                 ["write", "c9", { after: "c8", gap: 50 }, "\"given to Satan\" → nearly dies", { size: 44, color: "gray" }]] }
      ]
    },
    {
      id: "mediator", title: "One Mediator",
      beats: [
        { say: "Chapter 2, verse 5. For there is one God, and one mediator between God and men, the man Christ Jesus.",
          draw: [["clear"],
                 ["title", "t", "Ch. 2 · One mediator"],
                 ["write", "d1", [120, 300], "mediator, God and man"],
                 ["write", "d2", { after: "d1", gap: 110 }, "Jesus Christ alone", { color: "red" }],
                 ["arrow", "d1", "d2"],
                 ["box", "d2"]] },
        { say: "The Roman Catholic Church keeps saying Mary, or the Pope, or the saints are mediators. But there's only one mediator. Jesus Christ.",
          draw: [["write", "d3", [120, 420], "Mary · Pope · saints"],
                 ["strike", "d3"],
                 ["write", "d4", { after: "d3", gap: 30 }, "(Roman Catholic)", { size: 44, color: "gray" }]] },
        { say: "Starting in chapter 2, verse 9, he talks about how women should adorn themselves. Not with braided hair, or gold, or pearls, or expensive clothes.",
          draw: [["write", "d5", [120, 560], "braided hair · gold · pearls · costly clothes", { size: 56 }],
                 ["strike", "d5"]] },
        { say: "Adorn yourselves only with good works. Don't dress up with clothes and jewelry. Good works are the best makeup there is.",
          draw: [["write", "d6", [120, 690], "good works = best cosmetic", { color: "green" }],
                 ["circle", "d6"]] }
      ]
    },
    {
      id: "birth", title: "Saved in Childbearing",
      beats: [
        { say: "Let a woman learn in silence. I don't permit a woman to teach or to have authority over a man. Now, this is about the order of creation.",
          draw: [["clear"],
                 ["title", "t", "Saved in childbearing?"],
                 ["write", "e1", [120, 290], "learn in silence (1 Tim 2:11~12)", { size: 56 }],
                 ["write", "e2", [120, 390], "= order of creation", { color: "blue" }]] },
        { say: "But what does it mean, she shall be saved in childbearing?",
          draw: [["write", "e3", [120, 510], "saved in childbearing", { color: "red" }]] },
        { say: "Calvin read it as, by fulfilling a woman's role. Having children is so important that it's put side by side with salvation.",
          draw: [["write", "e4", [120, 620], "Calvin:", { size: 56, color: "gray" }],
                 ["write", "e5", { after: "e4", gap: 30 }, "by fulfilling her role", { color: "blue" }],
                 ["under", "e5"]] },
        { say: "God made woman as a helper for man. And to help someone, you have to be better than them, right? Women have the gift of helping someone and building that person up.",
          draw: [["write", "e6", [120, 730], "helper"],
                 ["write", "e7", { after: "e6", gap: 110 }, "power to help and build up", { color: "green" }],
                 ["arrow", "e6", "e7"]] },
        { say: "And bearing and raising children especially, that's a huge thing. It carries history forward, and it builds up God's inheritance.",
          draw: [["write", "e8", [120, 830], "raising children = carrying history, building God's inheritance", { size: 48, color: "red" }]] }
      ]
    },
    {
      id: "bishop", title: "Qualifications of an Overseer",
      beats: [
        { say: "Chapter 3 is about the qualifications of an overseer, a bishop. If a man desires the office of a bishop, he desires a good work. It's not about having power.",
          draw: [["clear"],
                 ["title", "t", "Ch. 3 · Overseer qualifications"],
                 ["write", "f1", [120, 290], "overseer ="],
                 ["write", "f2", { after: "f1", gap: 30 }, "desires a good work", { color: "green" }],
                 ["write", "f3", [180, 370], "not about wielding power", { size: 46, color: "gray" }]] },
        { say: "He has to be blameless, the husband of one wife, temperate, sober-minded, hospitable, able to teach, and not a lover of money.",
          draw: [["write", "f4", [120, 480], "blameless · one wife · temperate · sober · hospitable · teaches · money X", { size: 44 }]] },
        { say: "He has to run his own house well. If a man doesn't know how to run his own house, how's he going to take care of God's church?",
          draw: [["write", "f5", [120, 580], "must rule his own house", { size: 60, color: "blue" }]] },
        { say: "Not a new convert, either. No matter how educated or capable he is, don't make someone an elder who's just walked into the church.",
          draw: [["write", "f6", [120, 690], "new convert"],
                 ["strike", "f6"],
                 ["write", "f7", { after: "f6", gap: 40 }, "even if educated · capable", { size: 52, color: "gray" }]] },
        { say: "He also needs a good reputation with outsiders. This part is really important. Appoint someone who's already respected as a grown-up, even outside the church.",
          draw: [["write", "f8", [120, 810], "respected even outside the church", { color: "red" }],
                 ["under", "f8"]] }
      ]
    },
    {
      id: "deacon", title: "Qualifications of a Deacon",
      beats: [
        { say: "Deacons, too, have to be dignified. Not two-faced, not given to much wine, not greedy of filthy lucre.",
          draw: [["clear"],
                 ["title", "t", "Deacon qualifications"],
                 ["write", "g1", [120, 290], "dignified · double-tongued X · wine X · dirty gain X", { size: 52 }]] },
        { say: "They have to hold the mystery of the faith with a clean conscience.",
          draw: [["write", "g2", [120, 400], "pure conscience + mystery of faith", { size: 60, color: "blue" }]] },
        { say: "And even with people like that, he says, test them first. Appoint them only after they've proven themselves.",
          draw: [["write", "g3", [120, 530], "test them first"],
                 ["write", "g4", { after: "g3", gap: 110 }, "then appoint", { color: "red" }],
                 ["arrow", "g3", "g4"]] },
        { say: "Women, too, have to be dignified. Not slanderers, but temperate, and faithful in everything.",
          draw: [["write", "g5", [120, 650], "women too: dignified · slander X · temperate · faithful", { size: 52 }]] },
        { say: "Those who've served well as deacons earn a good standing for themselves, and great boldness in the faith.",
          draw: [["write", "g6", [120, 780], "good standing · great boldness", { color: "green" }],
                 ["box", "g6"]] }
      ]
    },
    {
      id: "godliness", title: "Discernment and Godliness",
      beats: [
        { say: "Chapter 4. In the latter times some shall depart from the faith, giving heed to seducing spirits and doctrines of devils.",
          draw: [["clear"],
                 ["title", "t", "Ch. 4 · Discernment, godliness"],
                 ["write", "h1", [120, 290], "seducing spirits · doctrines of devils", { size: 60 }]] },
        { say: "So don't believe every spirit. You've got to discern. You need to know, is this really the Spirit of God, or a spirit that's making a fool of the church?",
          draw: [["write", "h2", [120, 400], "discern spirits", { color: "red" }],
                 ["circle", "h2"],
                 ["write", "h3", { after: "h2", gap: 50 }, "God's Spirit? or one mocking the church?", { size: 48, color: "gray" }]] },
        { say: "Food was made by God. So if you eat it with thanks, there's no problem.",
          draw: [["write", "h4", [120, 530], "food: eat with thanks → OK", { size: 56 }]] },
        { say: "Bodily exercise profits a little, but godliness is profitable for all things. It even holds promise for the life to come.",
          draw: [["write", "h5", [120, 650], "bodily exercise = a little profit", { size: 50, color: "gray" }],
                 ["write", "h6", [120, 760], "godliness = profits all", { color: "red" }],
                 ["write", "h7", { below: "h6", gap: 60 }, "(promise for the life to come)", { size: 44, color: "gray" }]] },
        { say: "Be an example to the believers, in word, in conduct, in love, in faith, in purity. Give yourself to reading, to encouraging, and to teaching.",
          draw: [["write", "h8", [920, 650], "be an example", { size: 56, color: "blue" }],
                 ["write", "h9", [920, 730], "word · conduct · love · faith · purity", { size: 44 }],
                 ["write", "h10", [920, 810], "read · exhort · teach", { size: 46 }]] }
      ]
    },
    {
      id: "family", title: "Treat Them Like Family",
      beats: [
        { say: "Chapter 5. Don't rebuke an older man. Encourage him like a father. Treat younger men like brothers.",
          draw: [["clear"],
                 ["title", "t", "Ch. 5 · Like family"],
                 ["write", "i1", [120, 290], "older men → as fathers", { size: 56 }],
                 ["write", "i2", [800, 290], "younger men → as brothers", { size: 56 }]] },
        { say: "Treat older women like mothers, and younger women like sisters, in all purity.",
          draw: [["write", "i3", [120, 390], "older women → as mothers", { size: 56 }],
                 ["write", "i4", [800, 390], "younger women → as sisters", { size: 56 }]] },
        { say: "Honor widows who are really widows.",
          draw: [["write", "i5", [120, 510], "honor true widows", { color: "blue" }]] },
        { say: "Let them learn to repay their parents. In other words, teach them to honor their parents.",
          draw: [["write", "i6", [120, 630], "repay parents = teach honoring parents", { size: 60, color: "red" }],
                 ["under", "i6"]] },
        { say: "You have to take good care of your relatives, especially your own family. If you don't, he says, you're worse than an unbeliever.",
          draw: [["write", "i7", [120, 750], "not caring for family"],
                 ["write", "i8", { after: "i7", gap: 110 }, "worse than unbeliever", { color: "red" }],
                 ["arrow", "i7", "i8"]] }
      ]
    },
    {
      id: "elders", title: "Honoring Elders, and Wine",
      beats: [
        { say: "Chapter 5, verse 17. Let the elders who rule well be counted worthy of double honor, especially those who labor in the word and in teaching.",
          draw: [["clear"],
                 ["title", "t", "Honoring elders, and wine"],
                 ["write", "j1", [120, 290], "elders who rule well = double honor", { size: 60, color: "blue" }]] },
        { say: "Thou shalt not muzzle the ox that treadeth out the corn. And, the labourer is worthy of his reward.",
          draw: [["write", "j2", [120, 400], "do not muzzle the ox", { size: 56 }],
                 ["write", "j3", [180, 470], "the laborer is worthy of his wages", { size: 44, color: "gray" }]] },
        { say: "So today, that means we should honor the teaching elders, the pastors, and pay them fairly.",
          draw: [["write", "j4", [120, 580], "teaching elders · pastors"],
                 ["write", "j5", { after: "j4", gap: 110 }, "fitting pay", { color: "red" }],
                 ["arrow", "j4", "j5"]] },
        { say: "In chapter 5, verse 23, he says, Drink no longer only water, but use a little wine.",
          draw: [["write", "j6", [120, 700], "not only water, a little wine", { size: 56 }]] },
        { say: "It seems Timothy had stomach trouble. Wine would've helped as medicine, but he wouldn't touch it. So Paul tells him, it's fine as medicine, so drink a little. That's how seriously they took godliness.",
          draw: [["write", "j7", [120, 810], "won't touch it, even as medicine", { size: 56 }],
                 ["write", "j8", { after: "j7", gap: 40 }, "that's godliness!", { size: 56, color: "green" }],
                 ["circle", "j8"]] }
      ]
    },
    {
      id: "money", title: "Money Is a Handy Tool",
      beats: [
        { say: "Chapter 6. Even in the same church, a slave shouldn't walk up to his master and say, hey, brother. He should serve him even better.",
          draw: [["clear"],
                 ["title", "t", "Ch. 6 · Money is a handy tool"],
                 ["write", "k1", [120, 290], "slave to master: 'brother'", { size: 56 }],
                 ["strike", "k1"],
                 ["write", "k2", { after: "k1", gap: 40 }, "serve even better", { size: 56, color: "red" }]] },
        { say: "It's not the slave calling his master brother. The right way is for the master to lift the slave up and treat him like a brother.",
          draw: [["write", "k3", [120, 400], "master lifts slave up as a brother", { size: 56, color: "green" }]] },
        { say: "Verse 8. For every believer, pastor or church member, here's the basic attitude. If we have food and clothing, we're content with that.",
          draw: [["write", "k4", [120, 510], "food · clothing → be content", { size: 56, color: "blue" }]] },
        { say: "The love of money is the root of all evil. You can't serve both God and money.",
          draw: [["write", "k5", [120, 630], "love of money = root of all evil", { color: "red" }],
                 ["box", "k5"]] },
        { say: "Serving money means giving money too much power. Money can do most things, sure. But that doesn't mean you should try to fix everything with it.",
          draw: [["write", "k6", [120, 740], "serving money = giving it too much authority", { size: 56 }]] },
        { say: "Money is just a handy tool. Think of it that way, and go no further.",
          draw: [["write", "k7", [120, 840], "money is just a handy tool", { size: 60, color: "green" }],
                 ["under", "k7"]] }
      ]
    },
    {
      id: "rich", title: "To the Rich",
      beats: [
        { say: "Charge them that are rich in this world, that they be not highminded, nor trust in uncertain riches.",
          draw: [["clear"],
                 ["title", "t", "To the rich"],
                 ["write", "l1", [120, 290], "not highminded"],
                 ["write", "l2", [120, 400], "hope in uncertain riches"],
                 ["strike", "l2"]] },
        { say: "But in God, who richly gives us all things to enjoy.",
          draw: [["write", "l3", { after: "l2", gap: 110 }, "hope in God", { color: "blue" }],
                 ["arrow", "l2", "l3"]] },
        { say: "Do good, be ready to share, and be generous.",
          draw: [["write", "l4", [120, 530], "do good · share · compassion", { color: "green" }]] },
        { say: "That way they lay up a good foundation for the future, and take hold of the life that's truly life.",
          draw: [["write", "l5", [120, 650], "lay a good foundation"],
                 ["write", "l6", { after: "l5", gap: 110 }, "true life", { color: "red" }],
                 ["arrow", "l5", "l6"],
                 ["circle", "l6"]] },
        { say: "O Timothy, keep that which is committed to thy trust, avoiding profane and vain babblings and oppositions. And that's how it ends. Now let's move on to Titus.",
          draw: [["write", "l7", [120, 780], "guard the trust, avoid empty talk and arguments", { size: 52 }],
                 ["write", "l8", [1250, 840], "on to Titus →", { size: 52, color: "gray" }]] }
      ]
    }
  ]
};
