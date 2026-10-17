// 2 Timothy whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does.
window.BOARD = {
  scenes: [
    {
      id: "will", title: "Paul's Last Testament",
      beats: [
        { say: "Second Timothy is a letter that is like Paul's last will and testament.",
          draw: [["title", "t", "2 Timothy"],
                 ["photo", "p1", "img/p4/image82.jpg", [1268, 46, 260, 146], { tilt: 3 }],
                 ["write", "a1", [120, 300], "a letter like Paul's last will", { color: "red" }],
                 ["under", "a1"]] },
        { say: "If you look at the end of Titus, it seems everyone except Timothy gathered in Nicopolis. But there is no record of them holding meetings there.",
          draw: [["write", "a2", [120, 420], "gathered at Nicopolis (not Timothy)", { size: 56 }],
                 ["write", "a3", { after: "a2", gap: 30 }, "no meetings recorded", { size: 48, color: "gray" }]] },
        { say: "A little later, we find Paul locked up in the Mamertine prison, Rome's prison for those condemned to death.",
          draw: [["write", "a4", [120, 540], "Rome's death-row prison", { color: "blue" }],
                 ["box", "a4"]] },
        { say: "He sees no hope of getting out, and he thinks, so in the end I will be martyred.",
          draw: [["write", "a5", [120, 660], "\"In the end, martyrdom\"", { size: 60 }]] },
        { say: "Then he longed so much to see Timothy. The letter he wrote then is this very letter.",
          draw: [["write", "a6", [120, 790], "longs to see Timothy", { color: "red" }],
                 ["write", "a7", { after: "a6", gap: 110 }, "2 Timothy", { size: 72, color: "blue" }],
                 ["arrow", "a6", "a7"]] }
      ]
    },
    {
      id: "ch1", title: "Do Not Be Ashamed",
      beats: [
        { say: "Chapter 1. It begins with Paul saying that Timothy's sincere faith brings him to tears.",
          draw: [["clear"],
                 ["title", "t", "ch. 1 · Don't be ashamed"],
                 ["write", "b1", [120, 290], "sincere faith → tears", { size: 60 }]] },
        { say: "He says, do not be ashamed of me, the Lord's prisoner, but share in suffering for the gospel.",
          draw: [["write", "b2", [120, 400], "not ashamed of me, a prisoner", { size: 64 }],
                 ["write", "b3", { after: "b2", gap: 40 }, "suffer for the gospel", { size: 64, color: "red" }]] },
        { say: "There is also talk about his calling. He called us not according to our works, but by grace.",
          draw: [["write", "b4", [120, 520], "by our works"],
                 ["strike", "b4"],
                 ["write", "b5", { after: "b4", gap: 50 }, "called by grace", { color: "green" }],
                 ["circle", "b5"]] },
        { say: "Paul says he too has suffered. Faith, yes, but a faith that works through love.",
          draw: [["write", "b6", [120, 640], "faith working through love", { size: 64, color: "blue" }],
                 ["write", "b6b", { after: "b6", gap: 40 }, "Paul suffered too", { size: 48, color: "gray" }]] },
        { say: "He says everyone in Asia has turned away from him. Among them are Phygelus and Hermogenes. Just as Jesus had his Judas Iscariot.",
          draw: [["write", "b7", [120, 760], "Asia turned away", { size: 52 }],
                 ["write", "b8", { after: "b7", gap: 24 }, "Phygelus · Hermogenes", { size: 44, color: "gray" }],
                 ["write", "b9", [180, 830], "as Jesus had Judas Iscariot", { size: 44, color: "gray" }]] },
        { say: "But a man named Onesiphorus was not ashamed even when Paul was in chains. He came often and refreshed him.",
          draw: [["write", "b10", [1000, 760], "Onesiphorus = came often", { size: 48, color: "green" }],
                 ["under", "b10"],
                 ["write", "b11", [1000, 830], "not ashamed, refreshed me", { size: 44, color: "gray" }]] }
      ]
    },
    {
      id: "faithful", title: "Commit to Faithful Men",
      beats: [
        { say: "Chapter 2. My son, be strong in the grace that is in Christ Jesus.",
          draw: [["clear"],
                 ["title", "t", "ch. 2 · To faithful men"],
                 ["write", "c1", [120, 290], "be strong in grace"]] },
        { say: "The things you have heard from me, commit to faithful men, who will be able to teach others also.",
          draw: [["write", "c2", [120, 430], "Paul"],
                 ["write", "c3", { after: "c2", gap: 80 }, "Timothy"],
                 ["arrow", "c2", "c3"],
                 ["write", "c4", { after: "c3", gap: 80 }, "faithful men", { color: "blue" }],
                 ["arrow", "c3", "c4"],
                 ["write", "c5", { after: "c4", gap: 80 }, "others"],
                 ["arrow", "c4", "c5"]] },
        { say: "This is passing on the teaching. Faithful men here means believers.",
          draw: [["write", "c6", [120, 560], "passing on teaching", { color: "red" }],
                 ["box", "c6"],
                 ["write", "c8", [740, 500], "= believers", { size: 44, color: "gray" }]] },
        { say: "I too am looking for faithful people to hand this Bible camp over to. I hope someone among you will learn and carry this camp on.",
          draw: [["write", "c7", [120, 680], "Who will carry on this Bible camp?", { size: 60, color: "green" }]] },
        { say: "And again he speaks of suffering. Though I am bound in chains, the word of God is not bound.",
          draw: [["write", "c9", [120, 800], "I am bound, but the word is not", { color: "red" }],
                 ["under", "c9"]] }
      ]
    },
    {
      id: "quarrel", title: "Don't Quarrel About Words",
      beats: [
        { say: "Chapter 2 verse 14. Charge them before God not to quarrel about words.",
          draw: [["clear"],
                 ["title", "t", "Don't quarrel about words"],
                 ["write", "d1", [120, 290], "don't quarrel about words", { color: "red" }],
                 ["circle", "d1"]] },
        { say: "It does no good at all. Instead, it ruins those who hear.",
          draw: [["write", "d2", [120, 410], "no profit → ruins the hearers", { size: 60 }]] },
        { say: "That's what I keep telling our kids. Don't quarrel over useless things.",
          draw: [["write", "d3", [180, 490], "what I keep telling our kids", { size: 44, color: "gray" }]] },
        { say: "Do your best to present yourself to God as a workman who does not need to be ashamed, rightly dividing the word of truth.",
          draw: [["write", "d4", [120, 610], "rightly dividing the word of truth", { size: 64, color: "blue" }],
                 ["write", "d5", [120, 700], "a workman not ashamed", { size: 56, color: "green" }]] },
        { say: "The ones who were not like that were Hymenaeus and Philetus. They said the resurrection had already happened, and they overthrew the faith of some.",
          draw: [["write", "d6", [120, 810], "Hymenaeus · Philetus: resurrection is past", { size: 48 }],
                 ["strike", "d6"],
                 ["write", "d7", { after: "d6", gap: 30 }, "→ faith overthrown", { size: 48, color: "red" }]] }
      ]
    },
    {
      id: "vessel", title: "A Clean Vessel",
      beats: [
        { say: "There are vessels of gold and vessels of brass, but the vessel God uses is a clean vessel.",
          draw: [["clear"],
                 ["title", "t", "A clean vessel"],
                 ["write", "e1", [120, 300], "gold · brass vessels"],
                 ["write", "e2", { after: "e1", gap: 110 }, "clean vessel", { color: "red" }],
                 ["arrow", "e1", "e2"],
                 ["circle", "e2"]] },
        { say: "He says, flee youthful lusts.",
          draw: [["write", "e3", [120, 440], "flee youthful lusts"]] },
        { say: "Pursue righteousness, faith, love, and peace, with those who call on the Lord out of a pure heart.",
          draw: [["write", "e4", [120, 560], "pursue righteousness · faith · love · peace", { size: 64, color: "green" }]] },
        { say: "Refuse foolish and ignorant arguments, knowing that they breed quarrels.",
          draw: [["write", "e5", [120, 680], "foolish, ignorant arguments", { size: 56 }],
                 ["strike", "e5"],
                 ["write", "e6", { after: "e5", gap: 40 }, "→ quarrels", { size: 56, color: "red" }]] },
        { say: "The Lord's servant must not quarrel, but be gentle toward all, able to teach, and patient. Even those who oppose him he should correct with gentleness. Perhaps God may give them repentance.",
          draw: [["write", "e7", [120, 800], "Lord's servant: no quarrels, gentle", { color: "blue" }],
                 ["box", "e7"]] }
      ]
    },
    {
      id: "lastdays", title: "The Last Days",
      beats: [
        { say: "Chapter 3. In the last days, perilous times will come.",
          draw: [["clear"],
                 ["title", "t", "ch. 3 · The last days"],
                 ["write", "f1", [120, 290], "perilous times", { color: "red" }]] },
        { say: "People will be lovers of themselves, lovers of money, proud, disobedient to parents, and unthankful.",
          draw: [["write", "f2", [120, 400], "love self · love money · proud · disobey parents · unthankful", { size: 46 }]] },
        { say: "Lovers of pleasure rather than lovers of God, having a form of godliness but denying its power.",
          draw: [["write", "f3", [120, 490], "love of pleasure > love of God", { size: 56 }],
                 ["write", "f4", [120, 590], "form of godliness"],
                 ["write", "f5", { after: "f4", gap: 40 }, "power denied", { color: "red" }],
                 ["under", "f5"]] },
        { say: "The picture of the last days looks exactly like today.",
          draw: [["write", "f6", [700, 290], "= exactly like today", { size: 56, color: "blue" }]] },
        { say: "They are always learning, but if you learn driven by greed, you can never come to the truth.",
          draw: [["write", "f7", [120, 700], "learning driven by greed → never reach truth", { size: 56 }]] },
        { say: "All who want to live godly in Christ Jesus will suffer persecution.",
          draw: [["write", "f8", [120, 810], "want to live godly → persecution", { size: 56, color: "red" }]] }
      ]
    },
    {
      id: "scripture", title: "Scripture Makes Wise for Salvation",
      beats: [
        { say: "The Scriptures are able to make you wise for salvation through faith which is in Christ Jesus.",
          draw: [["clear"],
                 ["title", "t", "Scripture: wise for salvation"],
                 ["write", "g1", [120, 300], "Scripture", { size: 80 }],
                 ["write", "g2", { after: "g1", gap: 110 }, "wise for salvation", { color: "red" }],
                 ["arrow", "g1", "g2"]] },
        { say: "The Scriptures here mean the Old Testament. The Old Testament leads us to salvation through faith in Jesus.",
          draw: [["write", "g3", [120, 420], "Scripture here = Old Testament", { size: 60, color: "blue" }],
                 ["under", "g3"]] },
        { say: "All Scripture is given by inspiration of God.",
          draw: [["write", "g4", [120, 550], "all Scripture = inspired by God"]] },
        { say: "It is profitable for teaching, for reproof, for correction, and for instruction in righteousness.",
          draw: [["write", "g5", [120, 670], "teaching · reproof · correction · instruction", { size: 56 }]] },
        { say: "So that the man of God may be complete, thoroughly equipped for every good work.",
          draw: [["write", "g6", [120, 790], "man of God made complete", { color: "green" }],
                 ["box", "g6"]] }
      ]
    },
    {
      id: "ch4", title: "Preach the Word",
      beats: [
        { say: "Chapter 4. I charge you before Christ Jesus. Preach the word.",
          draw: [["clear"],
                 ["title", "t", "ch. 4 · Preach the word"],
                 ["write", "h1", [120, 300], "Preach the word", { size: 80, color: "red" }]] },
        { say: "Be ready in season and out of season, always.",
          draw: [["write", "h2", [120, 420], "in season, out of season"],
                 ["write", "h3", { after: "h2", gap: 40 }, "always ready", { color: "blue" }],
                 ["under", "h3"]] },
        { say: "And then he says it looks like the time of his martyrdom has come.",
          draw: [["write", "h4", [120, 540], "time for martyrdom has come"]] },
        { say: "After that it closes with things like, greet so-and-so, bring the books written on parchment, find so-and-so and bring him along.",
          draw: [["write", "h5", [120, 650], "greetings · bring the parchments · bring him", { size: 52, color: "gray" }]] },
        { say: "Paul was martyred in A.D. 67, so it seems he wrote this letter around the autumn of A.D. 66. That is the kind of letter Second Timothy is.",
          draw: [["write", "h6", [120, 770], "martyred A.D. 67", { color: "red" }],
                 ["write", "h7", { after: "h6", gap: 40 }, "← written c. autumn 66", { size: 64 }]] },
        { say: "Now we move on to Hebrews.",
          draw: [["write", "h8", [1150, 840], "on to Hebrews →", { size: 52, color: "gray" }]] }
      ]
    }
  ]
};
