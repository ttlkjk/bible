// Ephesians whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does.
window.BOARD = {
  scenes: [
    {
      id: "purpose", title: "Why It Was Written",
      beats: [
        { say: "Let's start with why Ephesians was written. The Prison Epistles Paul wrote in Rome, especially Ephesians and Colossians, were written when Paul's theology had reached full maturity.",
          draw: [["title", "t", "Why Ephesians was written"],
                 ["photo", "p1", "../../pansuh/img/p4/image67.jpg", [1100, 190, 400, 225], { tilt: 2.5 }],
                 ["write", "a1", [120, 290], "Prison Epistles", { color: "blue" }],
                 ["write", "a2", { after: "a1", gap: 90 }, "mature theology", { color: "red" }],
                 ["arrow", "a1", "a2"]] },
        { say: "Before, when a church had a problem, he sent a letter to sort it out. His feelings showed in those letters too.",
          draw: [["write", "a3", [120, 420], "before: letters to fix problems", { size: 56, color: "gray" }],
                 ["write", "a4", [180, 520], "feelings showed", { size: 50, color: "gray" }]] },
        { say: "Now Paul was over sixty, and he had become much gentler and humbler.",
          draw: [["write", "a5", [120, 650], "Paul, past 60", { size: 60 }],
                 ["write", "a6", { after: "a5", gap: 110 }, "gentle · humble", { size: 60, color: "green" }],
                 ["arrow", "a5", "a6"]] },
        { say: "So the mood is a little different from First and Second Corinthians or Galatians.",
          draw: [["write", "a7", [120, 790], "a different mood from 1 & 2 Cor, Gal", { size: 54, color: "blue" }],
                 ["under", "a7", "blue"]] }
      ]
    },
    {
      id: "world", title: "A New View of the World",
      beats: [
        { say: "It wasn't that the church in Ephesus had a problem. Something had changed deeply in Paul's own mind. During his first and second missionary journeys, Paul thought Jesus was coming back very soon.",
          draw: [["clear"],
                 ["title", "t", "Paul's view of world & history"],
                 ["write", "b1", [120, 290], "1st & 2nd journeys", { size: 56, color: "gray" }],
                 ["write", "b2", { after: "b1", gap: 110 }, "Jesus returns soon", { color: "red" }],
                 ["arrow", "b1", "b2"]] },
        { say: "Even in Romans, the second coming of Jesus is no longer treated as a major theme.",
          draw: [["write", "b3", [120, 410], "Romans: 2nd coming not a main theme", { size: 56 }]] },
        { say: "People back then thought Spain was the end of the earth. They thought that once the gospel reached the end of the earth, Jesus would come.",
          draw: [["write", "b4", [120, 530], "Spain = end of earth?", { color: "blue" }],
                 ["circle", "b4", "blue"]] },
        { say: "But when he came to Rome, he saw that there were a huge number of nations and peoples to the north too. The gospel hadn't reached them all yet.",
          draw: [["write", "b5", { after: "b4", gap: 70 }, "many nations up north", { size: 56 }]] },
        { say: "He realized the world was not as small as he had thought, and so he also realized that Jesus would not be coming back quite so soon.",
          draw: [["write", "b6", [120, 680], "world is big", { size: 60 }],
                 ["write", "b7", { after: "b6", gap: 110 }, "return not so soon", { size: 60, color: "red" }],
                 ["arrow", "b6", "b7"],
                 ["under", "b7"]] }
      ]
    },
    {
      id: "church", title: "The Theme: The Church",
      beats: [
        { say: "So he thought, then we can't run the church this loosely. It has to be fully structured and organized and built up firmly.",
          draw: [["clear"],
                 ["title", "t", "The theme of Ephesians"],
                 ["write", "c1", [120, 290], "loose church", { color: "gray" }],
                 ["strike", "c1", "gray"],
                 ["write", "c2", { after: "c1", gap: 110 }, "structured · organized · firm", { size: 60, color: "blue" }],
                 ["arrow", "c1", "c2"]] },
        { say: "Until then, he had cared only about personal salvation, being justified by faith.",
          draw: [["write", "c3", [120, 420], "before: personal salvation", { size: 60 }]] },
        { say: "Now he started thinking that he had to build a firm church made up of those saved people.",
          draw: [["write", "c4", [120, 540], "now: the church of the saved", { size: 60, color: "green" }]] },
        { say: "So the theme of Ephesians is ecclesiology. That means the doctrine of the church. Ecclesiology.",
          draw: [["write", "c5", { at: [800, 720] }, "theme = the church", { anchor: "middle", size: 96, color: "red" }],
                 ["box", "c5"]] }
      ]
    },
    {
      id: "blessing", title: "Every Spiritual Blessing",
      beats: [
        { say: "After the greeting, in chapter 1 verse 3, Paul says, Blessed be God. He praises God because God has given us every spiritual blessing in the heavenly places.",
          draw: [["clear"],
                 ["title", "t", "Spiritual blessings (Eph 1:3)"],
                 ["write", "d1", [120, 290], "Blessed be God!", { color: "red" }],
                 ["write", "d2", { after: "d1", gap: 40 }, "← he gives spiritual blessings", { size: 52, color: "gray" }]] },
        { say: "Before the foundation of the world he chose us in Christ, predestined us according to the good pleasure of his will, and adopted us as his children.",
          draw: [["write", "d3", [120, 420], "chosen · predestined · adopted", { color: "blue" }]] },
        { say: "Through his Son he gave us redemption and the forgiveness of sins, made known to us the mystery of his will, and sealed us with the Holy Spirit, setting us apart as his own people forever.",
          draw: [["write", "d4", [120, 540], "redeemed (forgiven) · mystery revealed · sealed by Spirit", { size: 50, color: "blue" }]] },
        { say: "The gathering of people who have received this grace and blessing is the church. That church is the body of Christ, united with Christ. Because it is one body, one life flows into it.",
          draw: [["write", "d5", [120, 680], "the blessed, gathered = church", { color: "red" }],
                 ["under", "d5"],
                 ["write", "d6", [180, 780], "body of Christ · one Spirit · one life", { size: 52, color: "gray" }]] },
        { say: "This is exactly why we came into this world. When Paul realized this, prison or no prison, he burst out, Blessed be God!",
          draw: [["write", "d7", [1080, 790], "praise in jail!", { size: 60, color: "green" }],
                 ["circle", "d7", "green"]] }
      ]
    },
    {
      id: "ch23", title: "Chapters 2 and 3",
      beats: [
        { say: "Chapter 2. You who were dead in trespasses and sins, he made alive. Not that you were bound to die, but that you were already dead.",
          draw: [["clear"],
                 ["title", "t", "Chapters 2 · 3"],
                 ["write", "e1", [120, 290], "you were dead", { color: "gray" }],
                 ["write", "e2", { after: "e1", gap: 110 }, "made alive", { color: "green" }],
                 ["arrow", "e1", "e2"]] },
        { say: "Those who were uncircumcised, strangers to the covenants of promise, having no hope and without God, have been brought near to God by the blood of Christ. He reconciled them through the cross.",
          draw: [["write", "e3", [120, 410], "outsiders", { size: 60 }],
                 ["write", "e4", { after: "e3", gap: 110 }, "brought near by the blood", { size: 60, color: "blue" }],
                 ["arrow", "e3", "e4"]] },
        { say: "So they became fellow heirs, fellow citizens, and members of God's household, and they are being built into a dwelling place for God. That is the church.",
          draw: [["write", "e5", [120, 530], "heirs · citizens · household", { size: 56 }],
                 ["write", "e6", { after: "e5", gap: 90 }, "God's dwelling = church", { size: 56, color: "red" }],
                 ["arrow", "e5", "e6"]] },
        { say: "In chapter 3 verse 1, the words 'I say' are not in the original. There's an ellipsis instead. Paul knew the mystery and was so overwhelmed that he couldn't go on, so Tertius, who was writing it down, put in the dots.",
          draw: [["write", "e7", [120, 680], "3:1 'I say' → original: '...'", { size: 56, color: "gray" }],
                 ["write", "e8", { after: "e7", gap: 40 }, "overwhelmed", { size: 60, color: "red" }],
                 ["circle", "e8"]] },
        { say: "That mystery was not made known even to the Old Testament prophets. It is that the Gentiles too, through the gospel, are fellow heirs, fellow members of the body, and fellow partakers of the promise.",
          draw: [["write", "e9", [120, 800], "mystery = Gentiles too: heirs · body · promise", { size: 54, color: "blue" }],
                 ["under", "e9", "blue"]] }
      ]
    },
    {
      id: "ch4", title: "Chapter 4: Practice",
      beats: [
        { say: "From chapter 4 on, it's about practice. If you share in the church, the body of Christ, what kind of life should you live?",
          draw: [["clear"],
                 ["title", "t", "Ch. 4: How to live"],
                 ["write", "f1", [120, 290], "doctrine", { color: "gray" }],
                 ["write", "f2", { after: "f1", gap: 110 }, "practice", { color: "blue" }],
                 ["arrow", "f1", "f2"]] },
        { say: "With humility and gentleness and patience, bearing with one another in love, keep the unity of the Spirit.",
          draw: [["write", "f3", [120, 410], "humble · gentle · patient · bearing · unity", { size: 56 }]] },
        { say: "He tells them to put away the lewdness, greed, and uncleanness of the Gentiles, and to become a new man.",
          draw: [["write", "f4", [120, 520], "lewdness · greed · uncleanness", { size: 54, color: "gray" }],
                 ["strike", "f4", "gray"],
                 ["write", "f5", { after: "f4", gap: 110 }, "new man", { size: 60, color: "green" }],
                 ["arrow", "f4", "f5"]] },
        { say: "Two things stand out. Grieve not the Holy Spirit of God. And forgive one another, just as God in Christ forgave you.",
          draw: [["write", "f6", [120, 650], "① Grieve not the Holy Spirit", { size: 60, color: "red" }],
                 ["write", "f7", [120, 750], "② Forgive as you were forgiven", { size: 60, color: "red" }]] },
        { say: "Paul stresses these virtues because they are exactly what make the church strong.",
          draw: [["write", "f8", [1120, 850], "→ a strong church", { size: 50, color: "blue" }]] }
      ]
    },
    {
      id: "ch5", title: "Chapter 5: Wives and Husbands",
      beats: [
        { say: "Chapter 5 verse 1. Be imitators of God, as beloved children. The standard Paul asks for goes all the way to imitating God. There's no 'this is good enough.'",
          draw: [["clear"],
                 ["title", "t", "Ch. 5: Imitators of God"],
                 ["write", "g1", [120, 290], "goal = imitators of God", { color: "red" }],
                 ["under", "g1"]] },
        { say: "Then he says to bear the fruit of light, and the fruit of light is simple. Goodness, righteousness, and truth.",
          draw: [["write", "g2", [120, 410], "fruit of light: goodness · righteousness · truth", { size: 52, color: "blue" }]] },
        { say: "Wives, submit, as the church submits to Christ. Husbands, love, as Christ gave himself up for the church.",
          draw: [["write", "g3", [120, 540], "wives → submit", { size: 60 }],
                 ["write", "g4", [720, 540], "husbands → love (to death)", { size: 60 }]] },
        { say: "Which is easier, submitting or laying down your life? Neither one goes first. Both must happen at the same time.",
          draw: [["write", "g5", { at: [800, 670] }, "at the same time!", { anchor: "middle", size: 84, color: "red" }],
                 ["circle", "g5"]] },
        { say: "Verse 27 says it is so that the church would be holy and without blemish. Put the other way, if wives don't submit and husbands don't love, the church is not holy.",
          draw: [["write", "g6", [120, 800], "v. 27: holy and without blemish", { size: 56, color: "green" }]] }
      ]
    },
    {
      id: "ch6", title: "Chapter 6: Parents and Children",
      beats: [
        { say: "Chapter 6. Children, obey your parents in the Lord. God's word is firm about this. But notice, in the Lord. The parents have to be in the Lord first.",
          draw: [["clear"],
                 ["title", "t", "Ch. 6: Children & parents"],
                 ["write", "h1", [120, 290], "children:", { color: "gray" }],
                 ["write", "h2", { after: "h1", gap: 30 }, "obey in the Lord", { color: "blue" }],
                 ["under", "h2", "blue"]] },
        { say: "It says that if you honor your parents, you will live long on the earth. God sees that a person who honors those who brought him into being is worth keeping in being.",
          draw: [["write", "h3", [120, 410], "honor parents", { size: 60 }],
                 ["write", "h4", { after: "h3", gap: 110 }, "long life", { size: 60, color: "green" }],
                 ["arrow", "h3", "h4"]] },
        { say: "But if you honor God who created us, it's not just a long life. You get to live forever. Eternal life.",
          draw: [["write", "h5", [120, 530], "honor God", { size: 60 }],
                 ["write", "h6", { after: "h5", gap: 110 }, "eternal life", { size: 72, color: "red" }],
                 ["arrow", "h5", "h6"],
                 ["circle", "h6"]] },
        { say: "Fathers, provoke not your children to wrath, but bring them up in the nurture and admonition of the Lord.",
          draw: [["write", "h7", [120, 670], "fathers: provoke not to wrath", { size: 56 }]] },
        { say: "Servants, obey. Masters, don't threaten them. You too have a Master in heaven, and he does not judge by appearances.",
          draw: [["write", "h8", [120, 790], "servants → obey / masters → no threats", { size: 52 }],
                 ["write", "h9", { after: "h8", gap: 30 }, "no partiality", { size: 46, color: "gray" }]] }
      ]
    },
    {
      id: "armor", title: "The Whole Armor of God",
      beats: [
        { say: "Our wrestling is not against flesh and blood. After a fight, when you think it over, you realize, oh, I fell for the devil's tricks again. The real fight is against the devil, whom we can't see.",
          draw: [["clear"],
                 ["title", "t", "The whole armor of God"],
                 ["write", "i1", [120, 290], "flesh and blood", { color: "gray" }],
                 ["strike", "i1", "gray"],
                 ["write", "i2", { after: "i1", gap: 110 }, "fight with the devil", { color: "red" }],
                 ["arrow", "i1", "i2"]] },
        { say: "From verse 14, he uses a soldier in full armor as an example. The belt of truth, the breastplate of righteousness, the shoes of the gospel, the shield of faith, the helmet of salvation.",
          draw: [["write", "i3", [120, 410], "belt of truth · breastplate of righteousness", { size: 54 }],
                 ["write", "i4", [120, 510], "shoes of the gospel · shield of faith · helmet of salvation", { size: 50 }]] },
        { say: "And the sword of the Spirit, which is the word of God. The only weapon for attack is the word. Jesus too fought the devil with the word.",
          draw: [["write", "i5", [120, 640], "sword of the Spirit = the word", { size: 64, color: "red" }],
                 ["box", "i5"],
                 ["write", "i6", { after: "i5", gap: 50 }, "only attack weapon", { size: 50, color: "gray" }]] },
        { say: "In the closing greeting he says, grace be with all who love our Lord Jesus Christ unchangingly. But later, in Revelation, the church in Ephesus is rebuked for having left its first love. We must not be like that.",
          draw: [["write", "i7", [120, 790], "love unchangingly", { size: 60, color: "green" }],
                 ["write", "i8", { after: "i7", gap: 110 }, "Rev: lost first love", { size: 56, color: "red" }],
                 ["arrow", "i7", "i8"]] }
      ]
    }
  ]
};
