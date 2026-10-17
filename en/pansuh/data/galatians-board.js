// Galatians whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does.
window.BOARD = {
  scenes: [
    {
      id: "bg", title: "Why Galatians Was Written",
      beats: [
        { say: "This is Galatians. While the apostle Paul was traveling, he wasn't well and rested for a while. The churches planted at that time are the churches of Galatia. Verse 2 says, 'to the churches,' right? So we think many churches were planted.",
          draw: [["title", "t", "Why Galatians was written"],
                 ["write", "a1", [120, 300], "planted while resting, ill", { size: 60 }],
                 ["write", "a2", { below: "a1", gap: 90 }, "v. 2 'to the churches' = many", { size: 52, color: "gray" }],
                 ["photo", "p1", "../../pansuh/img/p4/image44.jpg", [1130, 170, 380, 214], { tilt: 2 }]] },
        { say: "Here is the key. People of the circumcision party came and preached a bogus gospel. Yes, you are saved by believing in Jesus, but first you must be circumcised and become a Jew, and then believe.",
          draw: [["write", "b1", [120, 520], "circumcision", { size: 60 }],
                 ["write", "b2", { after: "b1", gap: 80 }, "Jew", { size: 60 }],
                 ["write", "b3", { after: "b2", gap: 80 }, "Jesus", { size: 60 }],
                 ["arrow", "b1", "b2"],
                 ["arrow", "b2", "b3"],
                 ["write", "b4", { after: "b3", gap: 50 }, "= bogus gospel", { size: 56, color: "red" }]] },
        { say: "They were spouting this rubbish, and still the Galatians got circumcised so they could be saved. Remember how the Bereans searched the Scriptures to see if what they heard was true?",
          draw: [["write", "b5", [120, 650], "but they got circumcised", { size: 60, color: "red" }],
                 ["write", "b6", { after: "b5", gap: 40 }, "(Bereans searched Scripture)", { size: 46, color: "gray" }]] },
        { say: "On top of that, they said Paul was not an apostle, and even doubted his apostleship. Paul heard this news and got angry, and the letter he wrote is Galatians.",
          draw: [["write", "b7", [120, 790], "apostleship doubted", { size: 60 }],
                 ["write", "b8", { after: "b7", gap: 110 }, "an angry letter", { size: 64, color: "red" }],
                 ["arrow", "b7", "b8"],
                 ["box", "b8"]] }
      ]
    },
    {
      id: "ch1", title: "There Is No Other Gospel",
      beats: [
        { say: "From verse 1 he flares up right away, doesn't he? Not from men, neither through man.",
          draw: [["clear"],
                 ["title", "t", "Ch. 1: He flares up!"],
                 ["write", "c1", [120, 290], "from men X", { size: 60, color: "gray" }],
                 ["strike", "c1"]] },
        { say: "He is saying his apostleship was not approved by people. It was approved by God.",
          draw: [["write", "c2", { after: "c1", gap: 110 }, "apostleship = from God", { size: 64, color: "blue" }],
                 ["arrow", "c1", "c2"]] },
        { say: "Verses 6 and 7. There is no other gospel besides the one I preached. The circumcision party is trying to pervert the gospel of Christ.",
          draw: [["write", "c3", [120, 460], "no other gospel", { size: 76, color: "red" }],
                 ["under", "c3"],
                 ["write", "c4", { after: "c3", gap: 50 }, "they pervert the gospel", { size: 50, color: "gray" }]] },
        { say: "Verses 8 and 9. Even if an angel from heaven says anything other than the true gospel I preached, let him be accursed.",
          draw: [["write", "c5", [120, 640], "even an angel saying otherwise", { size: 60 }],
                 ["write", "c6", { after: "c5", gap: 110 }, "cursed", { size: 76, color: "red" }],
                 ["arrow", "c5", "c6"],
                 ["circle", "c6"]] }
      ]
    },
    {
      id: "call", title: "How Paul Became an Apostle",
      beats: [
        { say: "Next, Paul explains step by step how he became an apostle. Before, he was more zealous for Judaism than his fathers, and he fiercely persecuted the church of God.",
          draw: [["clear"],
                 ["title", "t", "How I became an apostle"],
                 ["write", "d1", [120, 300], "persecuted church", { size: 64 }]] },
        { say: "And then he met the very Jesus he was persecuting.",
          draw: [["write", "d2", { after: "d1", gap: 110 }, "met Jesus", { size: 64, color: "red" }],
                 ["arrow", "d1", "d2"],
                 ["circle", "d2"]] },
        { say: "At that time he did not consult the apostles, or flesh and blood.",
          draw: [["write", "d3", [180, 410], "no talks w/ apostles · flesh & blood", { size: 50, color: "gray" }]] },
        { say: "He went to Damascus, after three years went up to Jerusalem, and then went into the regions of Syria and Cilicia.",
          draw: [["write", "d4", [120, 560], "Damascus", { size: 56 }],
                 ["write", "d5", { after: "d4", gap: 90 }, "3 yrs → Jerusalem", { size: 56 }],
                 ["write", "d6", { after: "d5", gap: 90 }, "Syria · Cilicia", { size: 56 }],
                 ["arrow", "d4", "d5"],
                 ["arrow", "d5", "d6"]] },
        { say: "Chapter 2. Even when he came back to Jerusalem fourteen years later, he did not preach the gospel by leaning on the apostles' reputation. He did it so his work would not be in vain.",
          draw: [["write", "d7", [120, 720], "14 yrs on: no leaning on apostles' fame", { size: 54, color: "blue" }],
                 ["under", "d7", "blue"]] }
      ]
    },
    {
      id: "peter", title: "Titus and Peter",
      beats: [
        { say: "He also talks about Titus. Titus was a Greek, a Gentile, right? Even so, he was not forced to be circumcised. Because of the people who had sneaked in, Paul deliberately did not do it.",
          draw: [["clear"],
                 ["title", "t", "Ch. 2: Titus and Peter"],
                 ["write", "e1", [120, 290], "Titus the Greek", { size: 60 }],
                 ["write", "e2", { after: "e1", gap: 110 }, "not circumcised", { size: 60, color: "green" }],
                 ["arrow", "e1", "e2"]] },
        { say: "Paul strongly stresses that the revelation he received came directly from Jesus, just like the other apostles. Verse 7. Peter was sent to the circumcised, to the Jews,",
          draw: [["write", "e3", { at: [440, 470] }, "Peter", { anchor: "middle", size: 72, color: "blue" }],
                 ["write", "e4", { at: [440, 570] }, "to the Jews", { anchor: "middle", size: 60 }]] },
        { say: "and Paul was sent to the uncircumcised, to the Gentiles.",
          draw: [["write", "e5", { at: [1160, 470] }, "Paul", { anchor: "middle", size: 72, color: "blue" }],
                 ["write", "e6", { at: [1160, 570] }, "to the Gentiles", { anchor: "middle", size: 60 }],
                 ["write", "e7", { at: [800, 470] }, "=", { anchor: "middle", size: 80, color: "gray" }]] },
        { say: "He says, I once rebuked Peter for his hypocrisy. Peter was eating with Gentiles, but when the circumcision party came in, he acted as if he hadn't been eating with them, as if he didn't know them, and slipped away. Even Barnabas was tempted when he saw it.",
          draw: [["write", "e8", [120, 730], "rebuked Peter's hypocrisy", { size: 64, color: "red" }],
                 ["write", "e9", { after: "e8", gap: 40 }, "(Barnabas tempted too)", { size: 46, color: "gray" }],
                 ["under", "e8"]] }
      ]
    },
    {
      id: "faith", title: "Begun in the Spirit",
      beats: [
        { say: "Then Paul builds his argument. A person is made righteous not by keeping the law well, but by believing in Jesus. You don't become righteous by things like circumcision.",
          draw: [["clear"],
                 ["title", "t", "Law or faith?"],
                 ["write", "f1", [120, 290], "law · circumcision", { size: 56, color: "gray" }],
                 ["strike", "f1"],
                 ["write", "f2", { after: "f1", gap: 110 }, "righteous by faith", { size: 68, color: "red" }],
                 ["arrow", "f1", "f2"]] },
        { say: "Chapter 3, verse 1. It hasn't been long since Jesus died, it's still vivid before your eyes. How can you be shaken so soon?",
          draw: [["write", "f3", [120, 420], "shaken already?", { size: 60 }]] },
        { say: "Verse 2. These people had already received the Holy Spirit when they were not circumcised. So he asks, did you receive the Spirit because you were circumcised?",
          draw: [["write", "f4", [120, 550], "Spirit received before circumcision", { size: 58, color: "blue" }],
                 ["box", "f4", "blue"]] },
        { say: "Are you so foolish? Having begun in the Spirit, are you now trying to finish in the flesh? He lashes out at them fiercely.",
          draw: [["write", "f5", [120, 720], "begun in the Spirit", { size: 60, color: "green" }],
                 ["write", "f6", { after: "f5", gap: 110 }, "finish in flesh?", { size: 60, color: "red" }],
                 ["arrow", "f5", "f6"]] }
      ]
    },
    {
      id: "curse", title: "Can You Keep It All?",
      beats: [
        { say: "He has a word for those who stress the works of the law, too. Verse 10. If you want to get somewhere by keeping the law, then since you're keeping it, you have to keep all of it.",
          draw: [["clear"],
                 ["title", "t", "3:10 Must keep it all"],
                 ["write", "g1", [120, 300], "by the law → must keep all of it", { size: 60 }]] },
        { say: "But is it possible to keep all of it? Impossible! No one can keep the law perfectly before God.",
          draw: [["write", "g2", [120, 440], "impossible!", { size: 84, color: "red" }],
                 ["circle", "g2"]] },
        { say: "So Christ took on Himself, in our place, the curse we should have received. Now we have become free people.",
          draw: [["write", "g3", [120, 600], "Christ took our curse", { size: 64, color: "blue" }],
                 ["write", "g4", { after: "g3", gap: 110 }, "free", { size: 80, color: "green" }],
                 ["arrow", "g3", "g4"],
                 ["box", "g4", "green"]] },
        { say: "When they say you must be circumcised, don't listen. Please.",
          draw: [["write", "g5", [180, 770], "\"must be circumcised\"? don't listen", { size: 52, color: "gray" }]] }
      ]
    },
    {
      id: "430", title: "The Promise and the Law",
      beats: [
        { say: "From verse 15 an important idea comes up. The promise God made to Abraham was already settled 430 years before the law came.",
          draw: [["clear"],
                 ["title", "t", "Promise first, law later"],
                 ["write", "h1", { at: [330, 330] }, "promise to Abraham", { anchor: "middle", size: 56, color: "blue" }],
                 ["write", "h2", { at: [1200, 330] }, "law", { anchor: "middle", size: 64 }],
                 ["arrow", "h1", "h2"],
                 ["write", "h3", { at: [800, 250] }, "430 yrs", { anchor: "middle", size: 56, color: "red" }]] },
        { say: "Can the law, given 430 years later, overrule that promise? No, it can't.",
          draw: [["write", "h4", { at: [800, 450] }, "later law overrules promise? → no", { anchor: "middle", size: 56 }]] },
        { say: "Then why was the law given? Because people kept sinning. The law is the schoolmaster that leads us until Jesus comes.",
          draw: [["write", "h5", [120, 590], "law = schoolmaster", { size: 68, color: "red" }],
                 ["under", "h5"]] },
        { say: "Simply put, it set guidelines until the one who would solve everything came.",
          draw: [["write", "h6", { after: "h5", gap: 50 }, "guidelines till the Fixer comes", { size: 48, color: "gray" }]] },
        { say: "Now that Jesus has come, we must do not what the law says, but what Jesus says. Those who were baptized into Christ have put on Christ.",
          draw: [["write", "h7", [120, 760], "do as Jesus says", { size: 64, color: "green" }],
                 ["write", "h8", { after: "h7", gap: 50 }, "= put on Christ", { size: 56, color: "blue" }]] }
      ]
    },
    {
      id: "son", title: "Adoption as Sons",
      beats: [
        { say: "In chapter 4 he explains it again. A master has a child, but the child is young. So the father puts a steward in charge until the son grows up.",
          draw: [["clear"],
                 ["title", "t", "Ch. 4: Steward and son"],
                 ["write", "i1", [120, 300], "young son", { size: 64 }],
                 ["write", "i2", { after: "i1", gap: 110 }, "under a steward", { size: 64, color: "gray" }],
                 ["arrow", "i1", "i2"]] },
        { say: "When the time came, God sent His Son, born of a woman, born under the law. He put Him in the same position as us,",
          draw: [["write", "i3", [120, 450], "in time, God sent His Son", { size: 60, color: "blue" }],
                 ["write", "i4", { after: "i3", gap: 40 }, "under law = our place", { size: 50, color: "gray" }]] },
        { say: "so that we might receive the adoption of sons. And so we have become sons of God.",
          draw: [["write", "i5", [120, 610], "we = sons of God", { size: 72, color: "red" }],
                 ["circle", "i5"]] },
        { say: "And if we are sons? Then we have the right to receive the inheritance.",
          draw: [["write", "i6", [120, 770], "if sons?", { size: 64 }],
                 ["write", "i7", { after: "i6", gap: 110 }, "right to inherit", { size: 64, color: "green" }],
                 ["arrow", "i6", "i7"]] }
      ]
    },
    {
      id: "free", title: "Chapter 5: Freedom",
      beats: [
        { say: "What God went this far to give us is in chapter 5. It is freedom. Therefore do not be entangled again with a yoke of bondage.",
          draw: [["clear"],
                 ["title", "t", "Ch. 5: Freedom!"],
                 ["write", "j1", [120, 320], "freedom", { size: 100, color: "red" }],
                 ["circle", "j1"],
                 ["write", "j2", { after: "j1", gap: 80 }, "no yoke of bondage again", { size: 54 }]] },
        { say: "If someone gets circumcised, all that Christ has done has no effect for that person. Verse 3. As I said earlier, such a person has to keep the whole law.",
          draw: [["write", "j3", [120, 480], "if circumcised", { size: 60 }],
                 ["write", "j4", { after: "j3", gap: 110 }, "must keep the whole law", { size: 60, color: "red" }],
                 ["arrow", "j3", "j4"]] },
        { say: "Verse 11. If Paul had made some compromise on the circumcision issue, he would not have been persecuted like this.",
          draw: [["write", "j5", [120, 620], "compromise → no persecution", { size: 60, color: "blue" }]] },
        { say: "And he says, if you're so set on that little operation, go do it to yourselves. Don't go hanging around the circumcision party for it.",
          draw: [["write", "j6", [180, 760], "\"so set on it? do it yourselves\"", { size: 52, color: "gray" }]] }
      ]
    },
    {
      id: "spirit", title: "Walk in the Spirit",
      beats: [
        { say: "Then what should we do? Verse 16. Walk in the Spirit, and you will not fulfill the lust of the flesh.",
          draw: [["clear"],
                 ["title", "t", "Walk in the Spirit"],
                 ["write", "k1", { at: [800, 290] }, "Walk in the Spirit", { anchor: "middle", size: 72, color: "blue" }],
                 ["under", "k1", "blue"]] },
        { say: "What is the lust of the flesh? Verse 19. Sexual immorality, uncleanness, lustfulness, idolatry, sorcery, making enemies, strife, envy, outbursts of anger, factions, drunkenness, and wild living. Those who do such things will not enter the kingdom of God.",
          draw: [["write", "k2", [120, 430], "flesh", { size: 64, color: "red" }],
                 ["write", "k3", { after: "k2", gap: 50 }, "immorality · idolatry · strife · envy · drunkenness…", { size: 46, color: "gray" }]] },
        { say: "The fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, and self-control.",
          draw: [["write", "k4", [120, 570], "fruit of Spirit", { size: 60, color: "green" }],
                 ["write", "k5", { after: "k4", gap: 50 }, "love · joy · peace · patience · kindness", { size: 46 }],
                 ["write", "k6", [520, 650], "goodness · faithfulness · gentleness · self-control", { size: 46 }],
                 ["box", "k4", "green"]] },
        { say: "Verse 26. Let us not be desirous of vain glory, provoking one another, envying one another. That's what I say to my kids more than anything. Don't get irritated and jealous with each other just because your pride got a little hurt.",
          draw: [["write", "k7", [120, 800], "v. 26 no vain glory · don't provoke", { size: 60, color: "red" }],
                 ["under", "k7"]] }
      ]
    },
    {
      id: "gentle", title: "Chapter 6: In a Spirit of Gentleness",
      beats: [
        { say: "Last, chapter 6. Paul seems to have been a little worried. Worried that those who were not circumcised would condemn those already circumcised, and the church would be torn apart.",
          draw: [["clear"],
                 ["title", "t", "Ch. 6: A church torn apart?"],
                 ["write", "l1", [120, 290], "uncircumcised → condemn circumcised?", { size: 56, color: "gray" }]] },
        { say: "Verse 1. If someone is caught in a sin, you who are spiritual, restore such a one in a spirit of gentleness.",
          draw: [["write", "l2", [120, 430], "restore in a spirit of gentleness", { size: 60, color: "blue" }]] },
        { say: "If you point it out and feel superior and puffed up, the church breaks right apart.",
          draw: [["write", "l3", [120, 570], "point out, puffed up", { size: 60 }],
                 ["write", "l4", { after: "l3", gap: 110 }, "church breaks", { size: 64, color: "red" }],
                 ["arrow", "l3", "l4"]] },
        { say: "Also, look to yourself, and be careful not to commit the same sin. So bear one another's burdens, and at the same time each one examines his own work.",
          draw: [["write", "l5", [120, 730], "look to yourself · bear each other's burdens", { size: 52, color: "green" }],
                 ["under", "l5", "green"]] }
      ]
    },
    {
      id: "big", title: "See the Large Letters",
      beats: [
        { say: "Finally, verse 11. See with what large letters I have written to you. It is said that Paul's own handwriting was large and messy.",
          draw: [["clear"],
                 ["title", "t", "See the large letters"],
                 ["write", "m1", [120, 310], "his hand = big & messy", { size: 72, color: "blue" }]] },
        { say: "What he wanted to say was, don't listen to the circumcision party. Going around circumcising people is all about boasting in themselves. It's not a pure motive. And they don't keep the law at all.",
          draw: [["write", "m2", [120, 460], "circumcision party = boasting", { size: 60, color: "red" }],
                 ["write", "m3", { after: "m2", gap: 50 }, "don't keep law", { size: 50, color: "gray" }]] },
        { say: "Those men show no trace of suffering at all, but I bear the marks of Jesus.",
          draw: [["write", "m4", [120, 620], "I bear the marks of Jesus", { size: 72, color: "red" }],
                 ["under", "m4"]] },
        { say: "The grace of our Lord Jesus Christ be with your spirit. Amen. Still, he ends on a gentle note, doesn't he?",
          draw: [["write", "m5", [120, 780], "gentle ending after all: grace be with you", { size: 52, color: "green" }]] }
      ]
    }
  ]
};
