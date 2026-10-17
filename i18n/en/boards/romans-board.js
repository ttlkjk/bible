// Romans whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does.
window.BOARD = {
  scenes: [
    {
      id: "purpose", title: "Why Romans Was Written",
      beats: [
        { say: "This is Romans. Paul had collected an offering to take to Jerusalem one last time, and while he stayed in Greece for three months, he wrote Romans and sent it to Rome in the hands of Sister Phoebe, a deaconess of the church at Cenchreae.",
          draw: [["title", "t", "Why was Romans written?"],
                 ["write", "a1", [100, 290], "3 months in Greece", { size: 56 }],
                 ["write", "a2", { after: "a1", gap: 90 }, "to Rome by Phoebe", { size: 56, color: "blue" }],
                 ["arrow", "a1", "a2"],
                 ["photo", "p1", "img/p4/image62.jpg", [1200, 380, 320, 180], { tilt: 2 }]] },
        { say: "Romans was written simply enough that a deaconess could read it to them and explain it. It is not a theological paper. It is a letter. Truth is simple by nature.",
          draw: [["write", "a3", [100, 420], "theology paper X  simple letter O", { size: 56, color: "red" }],
                 ["under", "a3"]] },
        { say: "But today's theologians have made it hard. These people have a talent for explaining easy things in a difficult way.",
          draw: [["write", "a4", [160, 520], "(theologians: gift for making easy things hard)", { size: 46, color: "gray" }]] },
        { say: "There are two purposes. First, to let them study Paul's gospel ahead of time. If he sent the letter first, then when Paul arrived, the conversation could move along efficiently.",
          draw: [["write", "a5", [100, 660], "① preview the gospel", { size: 60, color: "blue" }]] },
        { say: "Second, so that the gospel would get there even if he could not. He had tried many times, but strangely he never made it to Rome. Even now he was not sure he could go. So he wrote it thinking, even if I can't go, the gospel must.",
          draw: [["write", "a6", [100, 790], "② even if I can't go, the gospel must", { size: 60, color: "green" }],
                 ["box", "a6", "green"]] }
      ]
    },
    {
      id: "leave", title: "God Gives Them Up",
      beats: [
        { say: "Now the content of Romans. Up to chapter 1, verse 17, he explains why he wrote, his plan to visit, his greetings, and his theme. Then from verse 18, it is the sins of people whom God gives up.",
          draw: [["clear"],
                 ["title", "t", "Ch. 1: God gave them up"],
                 ["write", "b1", [100, 290], "\"gave them up, gave them up…\"", { size: 56, color: "red" }],
                 ["photo", "p2", "img/p4/image63.jpg", [1080, 170, 420, 236], { tilt: 2, caption: "A letter sent to Rome" }]] },
        { say: "We should not understand this as God actively throwing them away. Rather, these people do evil while knowing it is wrong, and God does not force them to stop. That is how it ends up this way.",
          draw: [["write", "b2", [100, 450], "actively cast away?", { size: 56, color: "gray" }],
                 ["strike", "b2"],
                 ["write", "b3", { below: "b2", gap: 90 }, "doesn't force them to stop", { size: 60, color: "blue" }]] },
        { say: "God gave us free will. If we misuse it, He lets us be. Because that is freedom. If He stepped in whenever things went wrong, it would not be freedom.",
          draw: [["write", "b4", [100, 680], "free will → if He steps in, not free", { size: 60 }]] },
        { say: "But He does step in with His chosen children. He will teach them even if He has to beat them. But He doesn't beat just anyone.",
          draw: [["write", "b5", [100, 810], "He steps in for His children", { size: 60, color: "green" }],
                 ["write", "b6", { after: "b5", gap: 40 }, "(not just anyone)", { size: 46, color: "gray" }]] }
      ]
    },
    {
      id: "jews", title: "Ch. 2: A Word to the Jews",
      beats: [
        { say: "Chapter 2 is a word to the Jews. What matters is not whether you have the law, but whether you do it.",
          draw: [["clear"],
                 ["title", "t", "Ch. 2: A word to the Jews"],
                 ["write", "c1", [120, 300], "have the law?", { size: 60, color: "gray" }],
                 ["write", "c2", { after: "c1", gap: 110 }, "do it?", { size: 72, color: "red" }],
                 ["arrow", "c1", "c2"]] },
        { say: "O man, whosoever thou art that judgest, you who judge do the same things, so by judging another you condemn yourself. Even someone who calls himself a Jew can rebel against God.",
          draw: [["write", "c3", [120, 440], "judging others = condemning myself", { size: 60 }]] },
        { say: "Verse 13. Not the hearers of the law are just before God, but the doers of the law shall be justified.",
          draw: [["write", "c4", [120, 580], "hearers X  doers are righteous", { size: 64, color: "blue" }],
                 ["under", "c4", "blue"]] },
        { say: "Circumcision of the flesh is not enough. It must be circumcision of the heart, the law written on the heart. This is a sharp rebuke to the Jews who just had the mark and showed off.",
          draw: [["write", "c5", [120, 740], "of the flesh → of the heart", { size: 64, color: "green" }],
                 ["box", "c5", "green"]] }
      ]
    },
    {
      id: "sinners", title: "All Are Sinners",
      beats: [
        { say: "Chapter 3. All people are sinners before God. The Jews do have an advantage. They were entrusted with the word of God.",
          draw: [["clear"],
                 ["title", "t", "Ch. 3: All are sinners"],
                 ["write", "d1", [120, 290], "Jews' advantage = entrusted with the word", { size: 56, color: "gray" }]] },
        { say: "Only God is righteous. So whether anyone believes or not, God's righteousness does not change.",
          draw: [["write", "d2", [120, 410], "only God is righteous", { size: 60, color: "blue" }]] },
        { say: "Then are we better? No, in no wise. Jews and Greeks are all under sin. There is none righteous, no, not one.",
          draw: [["write", "d3", [120, 560], "none righteous, no, not one", { size: 72, color: "red" }],
                 ["under", "d3"]] },
        { say: "So we cannot keep the law perfectly. The law's job was never to make us righteous. Its job is to make us realize what is sin and what is not.",
          draw: [["write", "d4", [120, 710], "law's job = to reveal sin", { size: 64, color: "green" }],
                 ["box", "d4", "green"]] }
      ]
    },
    {
      id: "faith", title: "Justified by Faith",
      beats: [
        { say: "Then how can we be declared righteous before God? We are justified by faith. That is justification, chapter 4.",
          draw: [["clear"],
                 ["title", "t", "Ch. 4: Justification"],
                 ["write", "e1", [120, 300], "justification = declared righteous by faith", { size: 60, color: "red" }]] },
        { say: "Abraham believed God, and it was counted unto him for righteousness. At that moment he was not yet circumcised. It was before he kept any rules of the law.",
          draw: [["write", "e2", [120, 430], "Abraham: by faith, before circumcision", { size: 60, color: "blue" }]] },
        { say: "Works and faith seem to clash, but the faith meant here is a faith that shows itself in works. The Jews kept the law as a formality and thought that in itself had power.",
          draw: [["write", "e3", [120, 560], "faith = condition", { size: 64, color: "red" }],
                 ["write", "e4", { after: "e3", gap: 110 }, "works = result", { size: 64, color: "green" }],
                 ["arrow", "e3", "e4"]] },
        { say: "Works are not the condition, but the result. Jesus also said you will know them by their fruits.",
          draw: [["write", "e5", [180, 660], "(known by their fruits)", { size: 48, color: "gray" }]] },
        { say: "Verse 31. Do we then make void the law through faith? God forbid: yea, we establish the law. The one who believes ends up establishing the law even more firmly.",
          draw: [["write", "e6", [120, 790], "faith establishes the law", { size: 64, color: "blue" }],
                 ["under", "e6", "blue"]] }
      ]
    },
    {
      id: "adam", title: "Peace, and One Man",
      beats: [
        { say: "Chapter 5. If we have been declared righteous, we now have to grow until we are at peace with God. Therefore let us have peace with God.",
          draw: [["clear"],
                 ["title", "t", "Ch. 5: On to peace"],
                 ["write", "f1", [120, 300], "forgiven · justified", { size: 60 }],
                 ["write", "f2", { after: "f1", gap: 110 }, "peace with God", { size: 64, color: "green" }],
                 ["arrow", "f1", "f2"]] },
        { say: "That is possible through Christ. Here he explains the principle of representation. Adam stands for mankind. When Adam became a sinner, the very being of mankind was changed into a sinner.",
          draw: [["write", "f3", [120, 440], "principle of representation", { size: 60, color: "blue" }],
                 ["write", "f4", { after: "f3", gap: 50 }, "Adam = mankind", { size: 60 }]] },
        { say: "Since this happened through one man's sin, through one man's sacrifice all people can receive life.",
          draw: [["write", "f5", { at: [430, 600] }, "one man's offense", { anchor: "middle", size: 60, color: "gray" }],
                 ["write", "f6", { at: [430, 700] }, "many condemned", { anchor: "middle", size: 56, color: "gray" }],
                 ["arrow", "f5", "f6"]] },
        { say: "Verse 18. As by the offence of one judgment came upon all men to condemnation, even so by the righteousness of one the free gift came upon all men unto justification of life.",
          draw: [["write", "f7", { at: [1170, 600] }, "one righteous act", { anchor: "middle", size: 60, color: "red" }],
                 ["write", "f8", { at: [1170, 700] }, "life for many", { anchor: "middle", size: 56, color: "green" }],
                 ["arrow", "f7", "f8"],
                 ["box", "f8", "green"]] }
      ]
    },
    {
      id: "minus", title: "How Serious Original Sin Is",
      beats: [
        { say: "Chapters 6 and 7 are about how serious original sin is. After receiving such a huge benefit, we should no longer be slaves to sin. But people keep on sinning. This is the sinful nature. Like inertia, it is a tendency to keep sinning.",
          draw: [["clear"],
                 ["title", "t", "Ch. 6: Sinful nature"],
                 ["write", "g1", [120, 300], "sinful nature = inertia toward sin", { size: 64, color: "red" }]] },
        { say: "The writer of Proverbs says that if you know to do good and do not do it, it is sin.",
          draw: [["write", "g2", [180, 400], "know the good, don't do it = sin", { size: 48, color: "gray" }]] },
        { say: "In other words, our state is not zero. It is minus. We have to strive to do good just to barely stay even.",
          draw: [["write", "g3", [120, 550], "we are not 0 but minus", { size: 64, color: "blue" }],
                 ["circle", "g3", "blue"]] },
        { say: "So verse 13. Do not yield your members as instruments of unrighteousness unto sin, but as instruments of righteousness unto God. Then sin shall not have dominion over you, for you are not under the law, but under grace.",
          draw: [["write", "g4", [120, 690], "members as tools of righteousness", { size: 56, color: "green" }],
                 ["write", "g5", { after: "g4", gap: 50 }, "under grace", { size: 56, color: "green" }]] },
        { say: "Since we are under grace, can we live however we like? No. As people who have received grace, we must live even more righteously.",
          draw: [["write", "g6", [120, 810], "live as we like? → more righteously", { size: 60, color: "red" }],
                 ["under", "g6"]] }
      ]
    },
    {
      id: "ch7", title: "Case Dismissed",
      beats: [
        { say: "In chapter 7, he uses a picture to explain when the law applies. The law has force while a person is alive. Once he dies, the case is dismissed, and no one charges him with his crime.",
          draw: [["clear"],
                 ["title", "t", "Ch. 7: When the law applies"],
                 ["write", "h1", [120, 300], "dead → 'case dismissed'", { size: 64, color: "blue" }]] },
        { say: "When Christ died, we died with Him. So the law has nothing to do with us, who are dead. Now we must live, not by the old letter of the law, but in the newness of the Spirit.",
          draw: [["write", "h2", [120, 430], "died with Christ", { size: 60 }],
                 ["write", "h3", { after: "h2", gap: 110 }, "newness of the Spirit", { size: 60, color: "green" }],
                 ["arrow", "h2", "h3"]] },
        { say: "But what does the sin in us do to us? In the inner man I delight in the law of God, but another law in my members wars against it and takes me captive.",
          draw: [["write", "h4", { at: [430, 590] }, "inner man", { anchor: "middle", size: 64, color: "blue" }],
                 ["write", "h5", { at: [1170, 590] }, "law of sin in me", { anchor: "middle", size: 60, color: "red" }],
                 ["write", "h6", { at: [800, 590] }, "VS", { anchor: "middle", size: 60, color: "gray" }]] },
        { say: "Isn't it the same for you? You delight in God's law, but when you actually try to do it, it doesn't go well, right? So Paul also groans. O wretched man that I am! Who shall deliver me from the body of this death?",
          draw: [["write", "h7", { at: [800, 770] }, "\"O wretched man that I am!\"", { anchor: "middle", size: 64, color: "red" }],
                 ["under", "h7"]] }
      ]
    },
    {
      id: "free", title: "Substitution and Debtors",
      beats: [
        { say: "Chapter 8 is the way to be set free from original sin. There is therefore now no condemnation to them which are in Christ Jesus. For the law of the Spirit of life has made me free from the law of sin and death.",
          draw: [["clear"],
                 ["title", "t", "Ch. 8: The way to freedom"],
                 ["write", "i1", [120, 290], "now no condemnation", { size: 64, color: "green" }]] },
        { say: "The law demands death as the price for breaking it. For the wages of sin is death. But God met that demand by letting His own Son die in our place.",
          draw: [["write", "i2", [120, 420], "law demands death", { size: 60 }],
                 ["write", "i3", { after: "i2", gap: 110 }, "the Son died instead", { size: 60, color: "blue" }],
                 ["arrow", "i2", "i3"]] },
        { say: "If someone ate for you, it counts as eaten, right? If someone paid for you, it counts as paid, right? If someone died for you? It counts as died. That is substitution. That is why we have become free from the law.",
          draw: [["write", "i4", [120, 560], "died in our place = we died", { size: 64, color: "red" }],
                 ["box", "i4"]] },
        { say: "Since He paid in our place, we are all debtors. Verse 12. As debtors, we are not to live after the flesh. If someone died because of my wrong, and I have a conscience, I cannot do it again.",
          draw: [["write", "i5", [120, 700], "we = debtors", { size: 64, color: "blue" }],
                 ["write", "i6", { after: "i5", gap: 50 }, "can't repeat the same wrong", { size: 50, color: "gray" }]] },
        { say: "If we live with this heart of a debtor, we can overcome the sinful nature. But we can't do it by our own strength. We must be led by the Holy Spirit. Those led by the Spirit are sons of God. Sons receive an inheritance. But to receive that glory, we must also suffer with Him.",
          draw: [["write", "i7", [120, 830], "led by Spirit → sons → heirs, and suffer too", { size: 54, color: "green" }]] }
      ]
    },
    {
      id: "love", title: "A Love Nothing Can Cut Off",
      beats: [
        { say: "Christianity means suffering along with the gospel. Being blessed comes later. It says that anyone who confesses Jesus as Lord will surely suffer.",
          draw: [["clear"],
                 ["title", "t", "Late ch. 8: Don't worry"],
                 ["write", "j1", [120, 300], "Christianity = suffering with the gospel", { size: 60, color: "red" }],
                 ["write", "j2", { below: "j1", gap: 80 }, "blessing comes later", { size: 50, color: "gray" }]] },
        { say: "But don't worry too much. The Spirit helps our weakness and even prays for us. Verse 34. Jesus also intercedes for us.",
          draw: [["write", "j3", [120, 520], "the Spirit and Jesus intercede for us", { size: 60, color: "blue" }]] },
        { say: "Verse 31. If God be for us, who can be against us?",
          draw: [["write", "j4", [120, 650], "who can be against us?", { size: 64 }]] },
        { say: "Verses 37 to 39. Neither death, nor life, nor angels, nor principalities, nor things present, nor things to come, nor any other creature, shall be able to separate us from the love of God, which is in Christ Jesus. Can I get an amen?",
          draw: [["write", "j5", [120, 790], "nothing can separate us from His love", { size: 64, color: "green" }],
                 ["under", "j5", "green"]] }
      ]
    },
    {
      id: "israel", title: "A Heart for His Own People",
      beats: [
        { say: "Chapter 9 is Paul's aching heart for the Jewish people. For my kinsmen according to the flesh, I could wish that myself were accursed from Christ.",
          draw: [["clear"],
                 ["title", "t", "Ch. 9~10: An aching heart"],
                 ["write", "k1", [120, 300], "even if I'm cut off", { size: 64, color: "red" }],
                 ["write", "k2", { after: "k1", gap: 50 }, "may my people be saved", { size: 60, color: "blue" }]] },
        { say: "From verse 30. He gave them the law, but they could not keep it and were struggling. So God paid an enormous price, the life of His only Son, and wiped it all away as if it never happened. That is the good news.",
          draw: [["write", "k3", [120, 440], "wiped away by the life of His only Son", { size: 60, color: "green" }]] },
        { say: "The Gentiles heard this good news long ago and gained righteousness. But the Jews are still sweating blood trying to keep the law.",
          draw: [["write", "k4", { at: [430, 600] }, "Gentiles", { anchor: "middle", size: 64, color: "blue" }],
                 ["write", "k5", { at: [430, 690] }, "righteous long ago", { anchor: "middle", size: 52, color: "green" }],
                 ["write", "k6", { at: [1170, 600] }, "Jews", { anchor: "middle", size: 64, color: "blue" }],
                 ["write", "k7", { at: [1170, 690] }, "still struggling with law", { anchor: "middle", size: 52, color: "red" }]] },
        { say: "Why is that? Chapter 10, verse 3. Being ignorant of God's righteousness, and going about to establish their own righteousness. Their zeal is not based on true knowledge, so it has no power. What to do about these Jews was Paul's big question.",
          draw: [["write", "k8", [120, 820], "zeal to build own righteousness = no power", { size: 56, color: "red" }],
                 ["under", "k8"]] }
      ]
    },
    {
      id: "jealous", title: "To Make Them Jealous",
      beats: [
        { say: "Chapter 11, verse 1. God has not cast away the Jews. Paul looks closely and sees that God has left the Jews aside and is showing grace to the Gentiles. Then he realizes: Aha, it is to make the Jews jealous!",
          draw: [["clear"],
                 ["title", "t", "Ch. 11: God's plan for the Jews"],
                 ["write", "l1", [120, 300], "God hasn't cast away the Jews", { size: 60 }],
                 ["write", "l2", { below: "l1", gap: 110 }, "to make them jealous!", { size: 72, color: "red" }],
                 ["circle", "l2"]] },
        { say: "God gave free will, so He does not force anyone. A way He can work without harming that freedom is jealousy.",
          draw: [["write", "l3", [180, 510], "a way that doesn't harm freedom = jealousy", { size: 50, color: "blue" }]] },
        { say: "When Seon-ju was a baby, there were times she wouldn't eat. Even a little one has a will, so you can't force the spoon in. Then you say, if you don't eat this, I'll give it to Jun-yeol! And right away she comes and eats.",
          draw: [["write", "l4", [120, 640], "\"Don't eat it? Jun-yeol gets it~\"", { size: 60, color: "green" }]] },
        { say: "So Paul, as the apostle to the Gentiles, works hard at reaching the Gentiles. The Gentiles must eat and enjoy it happily, so the Jews will feel jealous and come, saying, I want some too. From God's side, it gets done without lifting a finger.",
          draw: [["write", "l5", [120, 770], "Gentiles eat & enjoy", { size: 56 }],
                 ["write", "l6", { after: "l5", gap: 100 }, "Jews: \"I want some too\"", { size: 56, color: "blue" }],
                 ["arrow", "l5", "l6"]] },
        { say: "So Paul marvels. O the depth of the riches both of the wisdom and knowledge of God! And he warns the Gentiles too. The grafted branch should not get cocky. He is the one who cuts off even the natural branches when they go wrong.",
          draw: [["write", "l7", [180, 845], "O the depth of His wisdom · grafted branch, don't boast", { size: 44, color: "gray" }]] }
      ]
    },
    {
      id: "practice", title: "Therefore: Putting It into Practice",
      beats: [
        { say: "From chapter 12, starting with therefore, comes the practical part. First, the call to devotion. Present your bodies a living sacrifice, holy. This is your spiritual worship.",
          draw: [["clear"],
                 ["title", "t", "Ch. 12~13: Practice"],
                 ["write", "m1", [120, 290], "body as living sacrifice = spiritual worship", { size: 56, color: "blue" }]] },
        { say: "Devotion means giving our life fully, forever, once for all, and wholly. And a devoted person must not be conformed to this world.",
          draw: [["write", "m2", [180, 390], "fully · forever · once for all · wholly", { size: 48, color: "gray" }],
                 ["write", "m3", [120, 500], "be not conformed to this world", { size: 60 }]] },
        { say: "Be not overcome of evil, but overcome evil with good. You cannot defeat evil with a bigger evil.",
          draw: [["write", "m4", [120, 630], "overcome evil with good", { size: 72, color: "green" }],
                 ["under", "m4", "green"]] },
        { say: "Chapter 13 is the civic ethics of believers. Submit to the governing authorities, pay your taxes honestly, and do your duty as a citizen. And love is the fulfilling of the law. If you love, you cannot commit adultery, murder, or theft.",
          draw: [["write", "m5", [120, 760], "love = fulfilling of the law", { size: 64, color: "red" }],
                 ["write", "m6", { after: "m5", gap: 50 }, "do civic duties too", { size: 50, color: "gray" }]] },
        { say: "The day of the Lord's coming is near. Not in rioting and drunkenness, not in lewdness, not in strife and envying, but put ye on the Lord Jesus Christ.",
          draw: [["write", "m7", [180, 845], "the Lord's day is near → put on Christ", { size: 44, color: "gray" }]] }
      ]
    },
    {
      id: "weak", title: "For the Weak",
      beats: [
        { say: "Chapter 14 is about caring for the weak. Receive the one who is weak in faith, but not to judge his doubts. Why? You may not accept him, but God has received him.",
          draw: [["clear"],
                 ["title", "t", "Ch. 14~16: For the weak"],
                 ["write", "n1", [120, 290], "don't judge the doubts of the weak", { size: 60, color: "blue" }]] },
        { say: "There is a saying that honest doubt is better than false faith. Doubt is not bad. It can be a heart that wants to believe more surely.",
          draw: [["write", "n2", [120, 410], "honest doubt > false faith", { size: 60, color: "green" }]] },
        { say: "Verse 15. If your brother is grieved because of your food, you are no longer walking in love. Destroy not him with thy meat, for whom Christ died. And this is not only about food.",
          draw: [["write", "n3", [120, 530], "don't destroy a brother with your food", { size: 56 }]] },
        { say: "Do not tie others down with what you happened to understand first. Don't keep holding a huge ruler up against others, one you can barely lift yourself. For the kingdom of God is not meat and drink, but righteousness, and peace, and joy in the Holy Spirit.",
          draw: [["write", "n4", [120, 650], "don't measure others with a huge ruler", { size: 56, color: "red" }],
                 ["write", "n5", [180, 730], "kingdom of God = righteousness · peace · joy", { size: 48, color: "gray" }]] },
        { say: "Chapter 15. The strong ought to bear the infirmities of the weak. God made the strong strong so they would care for the weak, not so they could show off and strut around.",
          draw: [["write", "n6", [120, 840], "the strong = to care for the weak", { size: 56, color: "blue" }],
                 ["under", "n6", "blue"]] },
        { say: "In the greetings of chapter 16, 13 of the 24 people Paul greets are royalty or nobility. He may not have been much to look at, but no one could match his scale. So, how about it? Is Romans hard? Once you have this much explanation, you can just read it.",
          draw: [["write", "n7", { after: "n6", gap: 50 }, "13 of 24 greeted: royal · noble", { size: 44, color: "gray" }]] }
      ]
    }
  ]
};
