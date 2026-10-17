// Philippians whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does.
window.BOARD = {
  scenes: [
    {
      id: "place", title: "Where Is Philippi?",
      beats: [
        { say: "This is Philippians. The church in Philippi was the church Lydia served.",
          draw: [["title", "t", "Philippians"],
                 ["write", "a1", [120, 290], "church in Philippi = Lydia's church", { size: 56, color: "blue" }]] },
        { say: "Philippi is called Filippoi today, and it is in northeastern Greece. On the map it is up in the Macedonia area.",
          draw: [["photo", "p1", "img/p4/image73.jpg", [120, 380, 520, 293], { tilt: -2, caption: "Philippi in Macedonia" }],
                 ["write", "a2", [760, 470], "today: Filippoi", { color: "red" }],
                 ["write", "a3", { below: "a2", gap: 90 }, "NE Greece", { size: 56 }]] },
        { say: "If you go there even today, there is a Lydia memorial church.",
          draw: [["photo", "p2", "img/p4/image74.jpg", [1120, 560, 380, 214], { tilt: 3, caption: "Lydia memorial church" }],
                 ["write", "a4", [760, 720], "Lydia church", { size: 52, color: "gray" }],
                 ["arrow", "a4", [1090, 720], "gray"]] }
      ]
    },
    {
      id: "why", title: "The Letter of Joy",
      beats: [
        { say: "Paul and the Philippian church were devoted to each other. But while Paul was away on his missionary journeys and they drifted a little apart, two factions formed in the church, the Euodia party and the Syntyche party.",
          draw: [["clear"],
                 ["title", "t", "Why Philippians was written"],
                 ["photo", "p3", "img/p4/image75.jpg", [1120, 190, 400, 225], { tilt: 2, caption: "Philippi today" }],
                 ["write", "b1", [120, 290], "Euodia side", { size: 64, color: "red" }],
                 ["write", "b2", { after: "b1", gap: 36 }, "vs", { size: 56, color: "gray" }],
                 ["write", "b3", { after: "b2", gap: 36 }, "Syntyche side", { size: 64, color: "red" }]] },
        { say: "As the two fought, the church grew cold. That is a problem any church could have, right?",
          draw: [["write", "b4", [180, 390], "→ church grew cold", { size: 52, color: "gray" }]] },
        { say: "Epaphroditus, the minister in charge, was worried. When he heard Paul was in prison, he tried to bring them together by collecting a gift for him. But even this turned into vanity and strife: that side gave this much, so we should give this much too.",
          draw: [["write", "b5", [120, 520], "reconcile by a gift?", { size: 60 }],
                 ["write", "b6", { after: "b5", gap: 110 }, "vanity & strife", { size: 60, color: "red" }],
                 ["arrow", "b5", "b6"]] },
        { say: "He was hurt, but he took the gift and went to find Paul. On the way, he fell sick nearly to death. Thankfully, he got better.",
          draw: [["write", "b7", [120, 640], "Epaphroditus: near death", { size: 56 }],
                 ["write", "b8", { after: "b7", gap: 110 }, "recovered", { size: 60, color: "green" }],
                 ["arrow", "b7", "b8"]] },
        { say: "Paul wrote Philippians hoping that if this news reached Philippi, their joy would come back. Rejoice comes up again and again, so it is also called the letter of joy.",
          draw: [["write", "b9", [120, 790], "Letter of Joy", { size: 84, color: "red" }],
                 ["circle", "b9"]] }
      ]
    },
    {
      id: "ch1", title: "Ch. 1: As Long as Christ Is Preached",
      beats: [
        { say: "Chapter 1. Thank you for supporting me from the first day until now. You are all partakers with me of grace. And he prays for the Philippian believers: that their love would abound in knowledge and all discernment, that they would approve the things that are excellent, and be filled with the fruits of righteousness.",
          draw: [["clear"],
                 ["title", "t", "Chapter 1"],
                 ["write", "c1", [120, 290], "thanks for support · partakers of grace", { size: 56 }],
                 ["write", "c2", [180, 380], "prayer: love · knowledge · discernment · fruit of righteousness", { size: 44, color: "gray" }]] },
        { say: "From verse 12. What happened to me, being in prison, has actually advanced the gospel. The brothers have become bolder and preach the word without fear.",
          draw: [["write", "c3", [120, 500], "in prison", { size: 60 }],
                 ["write", "c4", { after: "c3", gap: 110 }, "gospel advanced", { size: 60, color: "green" }],
                 ["arrow", "c3", "c4"]] },
        { say: "Some preach Christ out of love, and some out of envy and strife, to trouble Paul. Verse 18. Either way, as long as Christ is preached, I rejoice.",
          draw: [["write", "c5", [120, 620], "as long as Christ is preached, I rejoice", { size: 64, color: "red" }],
                 ["under", "c5"]] },
        { say: "Paul also speaks his honest heart. To die and be with Christ is better for me, but to stay alive is better for you. I don't know which to choose.",
          draw: [["write", "c6", [120, 740], "death = better for me / life = better for you", { size: 52, color: "gray" }]] },
        { say: "Verse 29. For unto you it is given in the behalf of Christ, not only to believe on him, but also to suffer for his sake.",
          draw: [["write", "c7", [120, 840], "v. 29: faith + suffering = grace", { size: 56, color: "blue" }]] }
      ]
    },
    {
      id: "ch2", title: "Ch. 2: The Humility of Christ",
      beats: [
        { say: "Suffering does not end in suffering. Only those who pass through suffering enjoy glory.",
          draw: [["clear"],
                 ["title", "t", "Ch. 2: Imitate His humility"],
                 ["write", "d1", [120, 290], "suffering", { color: "gray" }],
                 ["write", "d2", { after: "d1", gap: 110 }, "glory", { color: "green" }],
                 ["arrow", "d1", "d2"]] },
        { say: "Chapter 2 tells us to imitate the humility of Christ. He was God, yet He took the form of a servant and became a man. Where else will you find humility like that?",
          draw: [["write", "d3", [120, 410], "God", { size: 60 }],
                 ["write", "d4", { after: "d3", gap: 110 }, "form of a servant · man", { size: 60, color: "blue" }],
                 ["arrow", "d3", "d4"]] },
        { say: "So let nothing be done through strife or vanity, but let each esteem others better than himself.",
          draw: [["write", "d5", [120, 530], "esteem others better than yourself", { size: 64, color: "red" }],
                 ["box", "d5"]] },
        { say: "Verse 12. Work out your own salvation with fear and trembling. Salvation has already begun, but it is not yet complete. Still, there is no chance at all that it will fail. We live between the already and the not yet.",
          draw: [["write", "d6", [120, 660], "already", { size: 64, color: "blue" }],
                 ["write", "d7", { after: "d6", gap: 160 }, "not yet", { size: 64, color: "blue" }],
                 ["line", [305, 640], [435, 640], "gray"]] },
        { say: "It is like holding a ticket for the train to heaven. When the train comes, you just get on. But every time the conductor comes by, you have to show it. You prove a faith without pretense by acts of love.",
          draw: [["write", "d8", [120, 800], "ticket = faith → shown by acts of love", { size: 56, color: "green" }]] }
      ]
    },
    {
      id: "ch3", title: "Ch. 3: The True Circumcision",
      beats: [
        { say: "In chapter 3 he says rejoice again. And then: beware of dogs, beware of evil workers, beware of the concision, those who mutilate the body. He is telling them not to get circumcised by the circumcision party.",
          draw: [["clear"],
                 ["title", "t", "Chapter 3"],
                 ["write", "e1", [120, 290], "mutilating the body = circumcision", { size: 56, color: "gray" }],
                 ["strike", "e1", "gray"]] },
        { say: "Not those who perform circumcision, but we, who always serve, who boast in Jesus and do not boast in human things, we are the true circumcision.",
          draw: [["write", "e2", [120, 410], "true circumcision = we who boast in Jesus", { size: 64, color: "blue" }]] },
        { say: "If it comes to boasting, I have plenty too. I was circumcised on the eighth day, a Hebrew of the Hebrews.",
          draw: [["write", "e3", [180, 510], "circumcised 8th day · Hebrew of Hebrews", { size: 48, color: "gray" }]] },
        { say: "But the most excellent thing is the knowledge of Christ. Everything else is dung. And yet people are desperate because they cannot have more of that dung.",
          draw: [["write", "e4", [120, 640], "knowledge of Christ", { color: "red" }],
                 ["under", "e4"],
                 ["write", "e5", { after: "e4", gap: 60 }, "the rest = dung", { size: 56, color: "gray" }]] },
        { say: "From verse 17. We are citizens of heaven. We live in this world only for a little while.",
          draw: [["write", "e6", [120, 790], "citizens of heaven", { size: 64, color: "green" }],
                 ["box", "e6", "green"]] }
      ]
    },
    {
      id: "ch4", title: "Ch. 4: Read It in Context",
      beats: [
        { say: "Chapter 4, verse 2. He urges Euodia and Syntyche to make peace. Verses 6 and 7. Be careful for nothing, but in everything by prayer and supplication with thanksgiving let your requests be made known unto God.",
          draw: [["clear"],
                 ["title", "t", "Chapter 4"],
                 ["write", "f1", [120, 290], "Euodia · Syntyche: make peace", { size: 56 }],
                 ["write", "f2", [120, 390], "don't worry, pray", { size: 56 }]] },
        { say: "Does that mean God grants everything you pray for? No. It says the peace of God will keep our hearts and minds.",
          draw: [["write", "f3", { after: "f2", gap: 110 }, "peace guards hearts & minds", { size: 56, color: "blue" }],
                 ["arrow", "f2", "f3"]] },
        { say: "Verse 13. I can do all things through Christ which strengtheneth me. You have to read this properly, starting from verse 11. I have learned, in whatsoever state I am, therewith to be content. I know how to be abased, and I know how to abound.",
          draw: [["write", "f4", [120, 520], "v. 13: I can do all things", { color: "red" }],
                 ["write", "f5", [180, 620], "← from v. 11: secret of contentment", { size: 52, color: "gray" }]] },
        { say: "It does not mean you can do anything at all. It means you can endure both need and plenty. If you cut out one verse, hang it in a frame, and shout, I can do it, that is just self-hypnosis.",
          draw: [["write", "f6", [120, 740], "can do anything", { size: 56, color: "gray" }],
                 ["strike", "f6", "gray"],
                 ["write", "f7", { after: "f6", gap: 110 }, "can endure all", { size: 60, color: "green" }],
                 ["arrow", "f6", "f7"]] },
        { say: "If you live your faith by memorizing a few key verses, you end up believing in a strange God. You must know the whole, and understand each verse accurately in its context. Obedience comes later. First, let's know it rightly.",
          draw: [["write", "f8", [120, 835], "first know it rightly, in context", { size: 60, color: "red" }],
                 ["under", "f8"]] }
      ]
    }
  ]
};
