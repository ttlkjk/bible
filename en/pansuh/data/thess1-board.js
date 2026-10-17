// 1 Thessalonians whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does.
window.BOARD = {
  scenes: [
    {
      id: "bg", title: "Background of 1 Thessalonians",
      beats: [
        { say: "First Thessalonians is said to be the earliest written of all the New Testament books.",
          draw: [["title", "t", "1 Thess: background"],
                 ["write", "a1", [120, 300], "earliest NT writing", { color: "red" }],
                 ["under", "a1"],
                 ["photo", "p1", "../../pansuh/img/p4/image37.jpg", [1130, 170, 380, 214], { tilt: 2 }]] },
        { say: "We saw it in Acts, right? Paul ministered in Thessalonica for three Sabbaths, and a church was born.",
          draw: [["write", "a2", [120, 440], "3 Sabbaths", { size: 60 }],
                 ["write", "a3", { after: "a2", gap: 110 }, "church is born", { size: 60, color: "blue" }],
                 ["arrow", "a2", "a3"]] },
        { say: "But the Jewish leaders grew jealous and began to oppose it.",
          draw: [["write", "a4", [120, 570], "Jewish leaders: jealousy · opposition", { size: 56 }]] },
        { say: "Having left a church like that behind, he must have been worried. He wrote this letter to encourage them and to find out how they were doing.",
          draw: [["write", "a5", [120, 720], "worry", { size: 72, color: "red" }],
                 ["write", "a6", { after: "a5", gap: 110 }, "encourage + check on them", { size: 60, color: "green" }],
                 ["arrow", "a5", "a6"],
                 ["box", "a6", "green"]] }
      ]
    },
    {
      id: "city", title: "Thessalonica, a New City",
      beats: [
        { say: "What kind of place is Thessalonica? Today it is the second largest port city in Greece. In Korea, it would be like Busan.",
          draw: [["clear"],
                 ["title", "t", "What was Thessalonica?"],
                 ["write", "b1", [120, 300], "Greece's 2nd port city", { size: 60 }],
                 ["write", "b2", { below: "b1", gap: 90 }, "= Korea's Busan", { size: 60, color: "blue" }],
                 ["photo", "p2", "../../pansuh/img/p4/image38.jpg", [1150, 160, 360, 270], { tilt: -2, caption: "Thessalonica today" }]] },
        { say: "It was a new city with a short history. When Paul went there, the city was only about 350 years old.",
          draw: [["write", "b3", [120, 520], "350 yrs old = new city", { color: "red" }],
                 ["circle", "b3"]] },
        { say: "In Alexander's time, Philippi was originally the capital of Macedonia.",
          draw: [["write", "b4", [120, 660], "first capital: Philippi", { size: 56, color: "gray" }],
                 ["strike", "b4", "gray"]] },
        { say: "But King Cassander moved the capital to the port of Therma, and named it Thessalonica after his wife, Thessalonike. In today's words, a new town.",
          draw: [["write", "b5", [120, 790], "Cassander → wife's name", { size: 56 }],
                 ["write", "b6", { after: "b5", gap: 40 }, "= new town", { size: 56, color: "blue" }]] }
      ]
    },
    {
      id: "young", title: "A Young City with a Synagogue",
      beats: [
        { say: "Thessalonica was a young city, quick to accept new things.",
          draw: [["clear"],
                 ["title", "t", "A city in Paul's favor"],
                 ["write", "c1", [120, 300], "open to new things", { size: 56 }],
                 ["write", "c2", { below: "c1", gap: 90 }, "young city", { size: 72, color: "blue" }]] },
        { say: "This is the Paul memorial church in Thessalonica.",
          draw: [["photo", "p3", "../../pansuh/img/p4/image39.jpg", [1040, 160, 440, 248], { tilt: 2, caption: "Paul memorial church" }]] },
        { say: "And the Jews there had a synagogue.",
          draw: [["write", "c3", [120, 560], "a Jewish synagogue", { size: 60 }]] },
        { say: "For Paul, these were very favorable conditions.",
          draw: [["write", "c4", [120, 720], "very favorable!", { size: 80, color: "red" }],
                 ["under", "c4"],
                 ["photo", "p4", "../../pansuh/img/p4/image40.jpg", [1080, 530, 400, 225], { tilt: -2, caption: "View of Thessalonica" }]] }
      ]
    },
    {
      id: "ch1", title: "Chapter 1: Faith, Love, Hope",
      beats: [
        { say: "Chapter 1 is the greeting. He greets them in the names of Paul, Silas, and Timothy.",
          draw: [["clear"],
                 ["title", "t", "Ch. 1: Paul is moved"],
                 ["write", "d1", [120, 290], "greeting: Paul · Silas · Timothy", { size: 56, color: "gray" }]] },
        { say: "It says the faith of the Thessalonian believers moved Paul deeply. What does he praise? Your work of faith,",
          draw: [["write", "d2", [160, 420], "work of faith", { size: 60, color: "blue" }]] },
        { say: "labor of love,",
          draw: [["write", "d3", { after: "d2", gap: 50 }, "labor of love", { size: 60, color: "blue" }]] },
        { say: "and patience of hope.",
          draw: [["write", "d4", { after: "d3", gap: 50 }, "patience of hope", { size: 60, color: "blue" }],
                 ["box", "d4", "blue"]] },
        { say: "Verse 4 talks about election. In just three weeks, Paul had taught them everything, from the resurrection of Christ to mission to the Second Coming.",
          draw: [["write", "d5", [120, 590], "v. 4 election", { color: "red" }],
                 ["write", "d6", { after: "d5", gap: 50 }, "3 weeks: resurrection · mission · return", { size: 46, color: "gray" }]] },
        { say: "We didn't choose God. God chose us. It may seem like I decided to believe in Jesus, but even that is within God's predestination.",
          draw: [["write", "d7", [120, 740], "I chose", { color: "gray" }],
                 ["strike", "d7"],
                 ["write", "d8", { after: "d7", gap: 110 }, "God chose us", { color: "red" }],
                 ["arrow", "d7", "d8"],
                 ["under", "d8"]] }
      ]
    },
    {
      id: "ch2a", title: "Chapter 2: Paul's Ministry",
      beats: [
        { say: "In chapter 2 Paul explains the ministry he did in Thessalonica. In Philippi I suffered so much I nearly died, but I still preached the gospel to you.",
          draw: [["clear"],
                 ["title", "t", "Ch. 2: How I did it"],
                 ["write", "e1", [120, 290], "suffered in Philippi", { size: 60 }],
                 ["write", "e2", { after: "e1", gap: 110 }, "still preached", { size: 60, color: "blue" }],
                 ["arrow", "e1", "e2"]] },
        { say: "To please God, he says, we used no deceit or impure methods. We didn't flatter, and we had no greed.",
          draw: [["write", "e3", [120, 420], "deceit · flattery · greed", { size: 60 }],
                 ["strike", "e3"],
                 ["write", "e4", { after: "e3", gap: 40 }, "please God", { size: 60, color: "green" }]] },
        { say: "He could have used his authority as an apostle, but he says he was gentle, like a nurse caring for her children. Why? Because the believers were still young. He preached for three weeks and then left.",
          draw: [["write", "e5", [120, 550], "apostle's authority", { size: 60, color: "gray" }],
                 ["write", "e6", { after: "e5", gap: 110 }, "gentle, like a nurse", { size: 60, color: "red" }],
                 ["arrow", "e5", "e6"]] },
        { say: "Verse 9. Paul worked while he preached the gospel so as not to be a burden. What work? Making tents.",
          draw: [["write", "e7", [120, 690], "v. 9 worked while preaching = tents", { size: 60 }]] },
        { say: "That is why, today, people who do mission work with their own money are sometimes called tentmaker missionaries.",
          draw: [["write", "e8", [120, 810], "tentmaker missionary", { size: 72, color: "blue" }],
                 ["circle", "e8"],
                 ["write", "e9", { after: "e8", gap: 60 }, "self-funded", { size: 48, color: "gray" }]] }
      ]
    },
    {
      id: "ch2b", title: "Chapter 2: Faith Grown in Three Weeks",
      beats: [
        { say: "Verse 10. We behaved holily, justly, and blamelessly among you. Why? Verse 12, so that you would walk worthy of God.",
          draw: [["clear"],
                 ["title", "t", "The messenger comes first"],
                 ["write", "f1", [120, 290], "holy · just · blameless", { size: 60 }],
                 ["write", "f2", { after: "f1", gap: 110 }, "worthy of God", { size: 60, color: "blue" }],
                 ["arrow", "f1", "f2"]] },
        { say: "If the one who preaches the gospel is not holy, not just, and full of faults, then those who receive it won't walk worthy of God either.",
          draw: [["write", "f3", [180, 380], "faulty messenger → faulty hearers too", { size: 48, color: "gray" }]] },
        { say: "Verse 13. Thankfully, the Thessalonians received Paul's words not as the word of men, but as the word of God.",
          draw: [["write", "f4", [120, 500], "word of men", { size: 60, color: "gray" }],
                 ["strike", "f4"],
                 ["write", "f5", { after: "f4", gap: 110 }, "received as God's word", { size: 60, color: "red" }],
                 ["arrow", "f4", "f5"]] },
        { say: "So, following the example of the churches in Judea, they reached the point of enduring persecution from their own countrymen. Friends, raising believers like that in three weeks, is that easy or hard?",
          draw: [["write", "f6", [120, 630], "enduring persecution", { size: 60 }],
                 ["write", "f7", { after: "f6", gap: 50 }, "in 3 weeks?!", { size: 72, color: "red" }],
                 ["circle", "f7"]] },
        { say: "He says he tried several times to come and see them, but Satan hindered him. And when I meet Jesus, if I receive a crown, it will be you. They only had three weeks together, but his love for them was second to none.",
          draw: [["write", "f8", [120, 790], "my crown = you", { size: 72, color: "green" }],
                 ["box", "f8", "green"]] }
      ]
    },
    {
      id: "ch3", title: "Chapter 3: Sending Timothy",
      beats: [
        { say: "Chapter 3. So who does he send? Verse 2, he sends Timothy. To make them strong, so they won't be shaken in their troubles.",
          draw: [["clear"],
                 ["title", "t", "Ch. 3: Timothy sent"],
                 ["write", "g1", [120, 300], "sends Timothy", { color: "blue" }],
                 ["write", "g2", { after: "g1", gap: 50 }, "unshaken in trouble", { size: 56 }]] },
        { say: "Verse 4. I told you we would suffer trouble, and it happened just as I said.",
          draw: [["write", "g3", [180, 400], "v. 4: I said trouble would come, and it did", { size: 46, color: "gray" }]] },
        { say: "Verse 6. Timothy came back and said their faith had grown a lot, and they were dying to see Paul and his team. Hearing that, Paul was greatly comforted.",
          draw: [["write", "g4", [120, 540], "faith grew a lot!", { color: "green" }],
                 ["write", "g5", { after: "g4", gap: 50 }, "dying to see you", { size: 56 }],
                 ["under", "g4", "green"]] },
        { say: "So, thinking about what gift to give them, he says he will go and see them face to face, and supply what is lacking in their faith.",
          draw: [["write", "g6", [120, 680], "gift = go, fill up their faith", { color: "red" }]] },
        { say: "So I've made up my mind too. Even if it takes me until dawn today, I will supply what you are lacking.",
          draw: [["write", "g7", [180, 800], "(me too: until dawn, filling the gaps)", { size: 52, color: "gray" }]] }
      ]
    },
    {
      id: "ch4", title: "Chapter 4: God's Will Is Holiness",
      beats: [
        { say: "Chapter 4. He says, finally, just one more thing, and keeps going all the way to chapter 6. Paul's a bit like me, isn't he? Geniuses have something in common.",
          draw: [["clear"],
                 ["title", "t", "Ch. 4: Finally, one thing…"],
                 ["write", "h1", [120, 290], "\"finally, one thing\" → to ch. 6", { size: 56, color: "gray" }]] },
        { say: "What does he urge? Keep doing what you are doing, even more. In other words, you're doing well.",
          draw: [["write", "h2", [120, 410], "do so more and more", { color: "green" }]] },
        { say: "Verse 3. This is the will of God, your sanctification. Remember I said holiness means being set apart?",
          draw: [["write", "h3", [120, 550], "God's will = holiness", { size: 72, color: "red" }],
                 ["write", "h4", { after: "h3", gap: 50 }, "(= set apart)", { size: 56, color: "blue" }],
                 ["under", "h3"]] },
        { say: "Abstain from sexual immorality, treat your wife with honor, don't follow lustful passions, and don't wrong your brother.",
          draw: [["write", "h5", [180, 660], "no immorality · honor your wife · don't wrong a brother", { size: 44, color: "gray" }]] },
        { say: "Verse 9, you are doing well at brotherly love. Verse 10, do it even more. Verse 11, quietly do your own work well, so you will not be in need.",
          draw: [["write", "h6", [120, 790], "brotherly love · quietly work", { size: 60, color: "blue" }],
                 ["box", "h6", "blue"]] }
      ]
    },
    {
      id: "sleep", title: "Concerning Those Who Sleep",
      beats: [
        { say: "Verse 13. But I would not have you to be ignorant, brothers, concerning those who are asleep. A double negative is a strong positive, right? I really want you to know about those who have died. So that you don't grieve like people who have no hope.",
          draw: [["clear"],
                 ["title", "t", "Those who sleep"],
                 ["write", "i1", [120, 290], "\"would not have you ignorant\"", { size: 56 }],
                 ["write", "i2", { after: "i1", gap: 40 }, "= know this!", { size: 56, color: "blue" }]] },
        { say: "What happens to those who died in Jesus? They rise again.",
          draw: [["write", "i3", [120, 420], "dead in Jesus", { size: 60 }],
                 ["write", "i4", { after: "i3", gap: 110 }, "rise", { size: 80, color: "green" }],
                 ["arrow", "i3", "i4"],
                 ["circle", "i4", "green"]] },
        { say: "Verse 16. Jesus will descend from heaven with a shout, with the voice of the archangel, and with the trumpet of God. This is an important source for when we study Revelation later.",
          draw: [["write", "i5", [120, 560], "shout · archangel · trumpet", { size: 56 }],
                 ["write", "i6", { after: "i5", gap: 40 }, "from heaven", { size: 60, color: "red" }],
                 ["under", "i6"]] },
        { say: "So everyone today who calls himself Jesus is a fake. The real Jesus has to come down from heaven. Anyone else is either a fraud or an antichrist.",
          draw: [["write", "i7", [180, 660], "self-styled Jesus = fake (fraud · antichrist)", { size: 48, color: "gray" }]] },
        { say: "Then the dead in Christ will rise first, and those who are left alive will be caught up in the clouds to meet the Lord in the air. He tells them to comfort one another with these words.",
          draw: [["write", "i8", [120, 790], "dead first", { size: 60 }],
                 ["write", "i9", { after: "i8", gap: 110 }, "meet the Lord in the air", { size: 60, color: "blue" }],
                 ["arrow", "i8", "i9"]] }
      ]
    },
    {
      id: "thief", title: "Not Like a Thief",
      beats: [
        { say: "This part needs special attention. Chapter 5, verses 1 to 6. The day of the Lord comes like a thief in the night.",
          draw: [["clear"],
                 ["title", "t", "Day of the Lord · 1 Thess 5:1~6"],
                 ["write", "j1", [120, 300], "day of Lord = thief in the night", { size: 60 }]] },
        { say: "But on the last day, the return of Jesus comes like a thief to the people of the world,",
          draw: [["write", "j2", { at: [440, 470] }, "the world", { anchor: "middle", size: 64 }],
                 ["write", "j3", { at: [440, 570] }, "like a thief", { anchor: "middle", size: 60, color: "gray" }]] },
        { say: "but not like a thief to us. You are all children of light, and children of the day.",
          draw: [["write", "j4", { at: [1130, 470] }, "us", { anchor: "middle", size: 72, color: "red" }],
                 ["write", "j5", { at: [1130, 570] }, "not like a thief", { anchor: "middle", size: 60, color: "red" }],
                 ["box", "j5"],
                 ["write", "j6", { at: [1130, 670] }, "children of light · of day", { anchor: "middle", size: 48, color: "blue" }]] },
        { say: "If you study the Bible well, especially Revelation, you may not know the month, the day, and the hour, but you will be able to discern the time. I'll explain it when we get to Revelation, and you will all understand.",
          draw: [["write", "j7", { at: [800, 800] }, "not the date, but you'll discern the time", { anchor: "middle", size: 56, color: "green" }],
                 ["under", "j7", "green"]] }
      ]
    },
    {
      id: "will", title: "God's Will, from Verse 12",
      beats: [
        { say: "One more thing: God's will. People usually say only verses 16 to 18 are God's will. Rejoice always, pray without ceasing, in everything give thanks.",
          draw: [["clear"],
                 ["title", "t", "God's will · 1 Thess 5"],
                 ["write", "k1", [120, 290], "usually: only v. 16~18", { size: 60, color: "gray" }],
                 ["write", "k2", { below: "k1", gap: 80 }, "rejoice · pray · give thanks", { size: 52, color: "gray" }]] },
        { say: "But you should draw the circle starting from verse 12.",
          draw: [["write", "k3", [120, 510], "from v. 12!", { size: 80, color: "red" }],
                 ["circle", "k3"]] },
        { say: "What comes right before rejoice always? Always follow what is good. You should rejoice while following what is good. You shouldn't rejoice always while following evil, should you?",
          draw: [["write", "k4", { after: "k3", gap: 70 }, "always follow good", { size: 56 }],
                 ["write", "k5", { after: "k4", gap: 90 }, "rejoice", { size: 56, color: "blue" }],
                 ["arrow", "k4", "k5"]] },
        { say: "Those verses rhyme nicely, so they're easy to pluck out and use, but they are not the only will of God. From verse 19, do not quench the Spirit, that is God's will too.",
          draw: [["write", "k6", [120, 660], "v. 19~ don't quench the Spirit", { size: 60 }],
                 ["write", "k7", { after: "k6", gap: 40 }, "= God's will too", { size: 56, color: "blue" }]] },
        { say: "That is why we read the whole Bible, so we don't make mistakes like this.",
          draw: [["write", "k8", [120, 800], "so: read the whole Bible", { size: 72, color: "red" }],
                 ["under", "k8"]] }
      ]
    },
    {
      id: "kiss", title: "Greet with a Kiss",
      beats: [
        { say: "Verse 26 says, greet all the brothers with a holy kiss, right? First Peter, Romans, and First Corinthians say the same thing.",
          draw: [["clear"],
                 ["title", "t", "Greet with a kiss"],
                 ["write", "l1", [120, 290], "1 Thess 5:26 · 1 Pet 5:14 · Rom 16:16 · 1 Cor 16:20", { size: 50, color: "gray" }]] },
        { say: "Paul says this to almost every church he writes to.",
          draw: [["write", "l2", [120, 420], "same words to almost every church", { size: 60 }]] },
        { say: "Back then, a kiss was the greeting among people of fairly high status. It was not given to slaves or servants.",
          draw: [["write", "l3", [120, 560], "kiss = greeting of the upper class", { size: 56, color: "blue" }],
                 ["write", "l4", { after: "l3", gap: 40 }, "not servants", { size: 48, color: "gray" }]] },
        { say: "But Paul says greet all the brothers. Servant, free, or slave, it makes no difference. Greet everyone the same way.",
          draw: [["write", "l5", [120, 720], "same for servant · free · slave", { color: "red" }],
                 ["under", "l5"]] }
      ]
    },
    {
      id: "trouble", title: "A Letter That Caused Trouble",
      beats: [
        { say: "But this letter caused trouble in the church at Thessalonica.",
          draw: [["clear"],
                 ["title", "t", "A letter that caused trouble"]] },
        { say: "Chapter 1 verse 10, chapter 2 verse 19, chapter 3 verse 13, chapter 4 verse 15, chapter 5 verse 23. At the end of every chapter he says that the Lord is coming.",
          draw: [["write", "m1", [120, 290], "1:10 · 2:19 · 3:13 · 4:15 · 5:23", { size: 56, color: "gray" }],
                 ["write", "m2", { below: "m1", gap: 100 }, "each chapter ends: 'coming'", { color: "blue" }],
                 ["under", "m2", "blue"]] },
        { say: "So people said Jesus was coming any moment. They stopped going to school, stopped going to work, and just went around stirring up trouble.",
          draw: [["write", "m3", [120, 540], "coming soon!", { size: 72, color: "red" }],
                 ["write", "m4", { after: "m3", gap: 110 }, "quit school · work", { size: 60 }],
                 ["arrow", "m3", "m4"]] },
        { say: "When Paul heard this, he was shocked and wrote again. Jesus is coming, but not that soon. That follow-up letter is Second Thessalonians.",
          draw: [["write", "m5", [120, 700], "not that soon", { size: 60 }],
                 ["write", "m6", { after: "m5", gap: 110 }, "2 Thessalonians", { size: 72, color: "green" }],
                 ["arrow", "m5", "m6"],
                 ["box", "m6", "green"]] }
      ]
    }
  ]
};
