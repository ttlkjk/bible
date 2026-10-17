// Acts 20:4~28:32 whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does.
window.BOARD = {
  scenes: [
    {
      id: "overview", title: "Acts 20:4~28:32",
      beats: [
        { say: "This time, we're looking at Acts from chapter 20 verse 4, all the way to the end, chapter 28 verse 32.",
          draw: [["title", "t", "Acts 20:4 ~ 28:32"],
                 ["photo", "p1", "img/p4/image64.jpg", [1120, 200, 380, 214], { tilt: 2 }]] },
        { say: "First up, the last stretch of the third missionary journey. The trip from Greece to Jerusalem.",
          draw: [["write", "a1", [120, 300], "3rd missionary journey", { color: "blue" }],
                 ["write", "a2", [120, 410], "Greece", { size: 72 }],
                 ["write", "a3", { after: "a2", gap: 150 }, "Jerusalem", { size: 72, color: "red" }],
                 ["arrow", "a2", "a3"]] },
        { say: "Chapter 20 verse 3 says Paul was about to sail for Syria. But here's the thing. Jerusalem was part of the Roman province of Syria. So it means he was heading to Jerusalem.",
          draw: [["write", "a4", [120, 550], "\"sail for Syria\"", { size: 60 }],
                 ["write", "a5", { after: "a4", gap: 40 }, "= Jerusalem", { size: 60, color: "red" }],
                 ["under", "a5", "red"]] },
        { say: "You've all come to Chuncheon today, right? Say Eun-saem, who lives in Daejeon, tells you she set out for Gangwon Province. That's right. If she says she set out for Chuncheon, that's right too. Same thing.",
          draw: [["write", "a6", [160, 680], "left for Gangwon = left for Chuncheon", { size: 50, color: "gray" }],
                 ["write", "a7", [160, 780], "Jerusalem is in Syria", { size: 52, color: "blue" }]] }
      ]
    },
    {
      id: "noship", title: "Giving Up the Ship",
      beats: [
        { say: "He was set to sail the next day. But he heard some of the Jews were plotting to kill him. Why? Paul was going to Jerusalem with a big sum of money. He was carrying the collection, so he had a lot of cash on him.",
          draw: [["clear"],
                 ["title", "t", "Giving up the ship"],
                 ["write", "b1", [120, 290], "Paul with the gift", { size: 60 }],
                 ["write", "b2", { after: "b1", gap: 100 }, "murder plot", { size: 60, color: "red" }],
                 ["arrow", "b1", "b2", "red"]] },
        { say: "So in the end, he gave up on the ship and went back over land. Look at the map. By ship it'd be quick. But going around by land? More than ten times as long.",
          draw: [["write", "b3", [120, 410], "ship", { size: 60 }],
                 ["strike", "b3", "red"],
                 ["write", "b4", { after: "b3", gap: 50 }, "by land (10×+)", { size: 60, color: "blue" }],
                 ["photo", "p1", "img/p4/image65.jpg", [1060, 190, 440, 248], { tilt: -2, caption: "Paul's third journey" }]] },
        { say: "And here's the funny part. Who were these Jews who wanted to kill Paul and take his money? People on their way to Jerusalem to worship.",
          draw: [["write", "b5", [120, 540], "would-be killers = worshipers", { size: 56, color: "red" }],
                 ["circle", "b5", "red"]] },
        { say: "Since he had to go the long way anyway, Paul went around Macedonia, visited the churches he'd planted, and held meetings.",
          draw: [["write", "b6", [120, 670], "the long way → visits churches, meetings", { size: 52, color: "green" }]] },
        { say: "If he'd gone by ship, Acts would've ended at chapter 20, right?",
          draw: [["write", "b7", [160, 790], "by ship? Acts ends at ch. 20!", { size: 52, color: "gray" }]] }
      ]
    },
    {
      id: "team", title: "Paul's Team and Luke",
      beats: [
        { say: "Verse 4 lists the people going with Paul. They're representatives from each church.",
          draw: [["clear"],
                 ["title", "t", "Paul's team (20:4~6)"],
                 ["write", "c1", [120, 290], "companions = church delegates", { size: 60, color: "blue" }]] },
        { say: "You can see Paul handling the collection really openly. Guarding the money, and making sure it's used the right way.",
          draw: [["write", "c2", [180, 390], "gift handled transparently", { size: 56, color: "green" }],
                 ["under", "c2", "green"]] },
        { say: "He sends them ahead to Troas. They go first and get things ready, so Paul's time is well used. They're like his staff. Now Paul's team moves in an organized way.",
          draw: [["write", "c3", [180, 490], "ahead to Troas → staff role", { size: 56 }]] },
        { say: "At the end of verse 5, the word us shows up. Up to here, Luke wrote in the third person. From here on, it's we. That tells us Luke joined them at this point.",
          draw: [["write", "c4", [120, 630], "\"us\"", { size: 80, color: "red" }],
                 ["circle", "c4", "red"],
                 ["write", "c5", { after: "c4", gap: 60 }, "he → we = Luke joins", { size: 56, color: "blue" }]] },
        { say: "He'd meant to keep the Feast of Unleavened Bread in Jerusalem. But he missed the ship, so he kept it in Philippi. After that, they headed for Troas.",
          draw: [["write", "c6", [120, 780], "Unleavened Bread: Jerusalem", { size: 48 }],
                 ["strike", "c6"],
                 ["write", "c7", { after: "c6", gap: 30 }, "→ Philippi → Troas", { size: 48, color: "gray" }]] }
      ]
    },
    {
      id: "troas", title: "Eutychus at Troas",
      beats: [
        { say: "Last time he passed through Troas, they asked him to stay a while. But Paul couldn't find Titus, and he was anxious, so he just moved on.",
          draw: [["clear"],
                 ["title", "t", "Seven days at Troas"],
                 ["write", "d1", [120, 290], "last time: left because of Titus", { size: 56, color: "gray" }]] },
        { say: "So to make up for letting them down back then, he held meetings for seven days.",
          draw: [["write", "d2", [120, 400], "making up → 7 days of meetings", { size: 60, color: "blue" }]] },
        { say: "And he preached with so much passion, it went on until Eutychus dozed off on the window ledge, fell, and died. In the end, Paul brought him back to life.",
          draw: [["write", "d3", [120, 530], "Eutychus: dozed, fell, died", { size: 56, color: "red" }],
                 ["write", "d4", { after: "d3", gap: 90 }, "raised", { size: 60, color: "green" }],
                 ["arrow", "d3", "d4", "green"]] },
        { say: "It says the people were not a little comforted, right? And the name Eutychus means fortunate.",
          draw: [["write", "d5", [180, 630], "Eutychus = 'fortunate'", { size: 56 }],
                 ["box", "d5", "blue"]] },
        { say: "From Troas to Assos is a good distance, so you'd normally take a ship. But Paul went alone on foot, and sent the others and the luggage to Assos by ship. Maybe he wasn't feeling well. Maybe he had bad memories of ships. We don't know.",
          draw: [["write", "d6", [120, 770], "to Assos: Paul on foot, team by ship", { size: 52 }],
                 ["write", "d7", [160, 840], "→ Mitylene · Chios · Samos · Miletus", { size: 44, color: "gray" }]] }
      ]
    },
    {
      id: "miletus", title: "Farewell at Miletus",
      beats: [
        { say: "He'd missed the Feast of Unleavened Bread, but he wanted to at least keep Pentecost in Jerusalem. So Paul sailed right past Ephesus. Maybe he was being careful because of the Artemis temple incident.",
          draw: [["clear"],
                 ["title", "t", "At Miletus (20:16~)"],
                 ["write", "e1", [120, 290], "Jerusalem by Pentecost", { size: 60 }],
                 ["write", "e2", { after: "e1", gap: 40 }, "skips Ephesus", { size: 52, color: "gray" }]] },
        { say: "Instead, he sent for the elders of Ephesus and gave them a lot of charges.",
          draw: [["write", "e3", [120, 400], "calls Ephesian elders → charges", { size: 60, color: "blue" }]] },
        { say: "Look at verse 22. I go bound in the Spirit to Jerusalem, not knowing what will happen to me there. Only the Holy Spirit testifies that bonds and afflictions wait for me.",
          draw: [["write", "e4", [120, 530], "bound in the Spirit", { size: 60, color: "blue" }],
                 ["write", "e5", { after: "e4", gap: 100 }, "bonds, afflictions", { size: 60, color: "red" }],
                 ["arrow", "e4", "e5", "red"]] },
        { say: "Verse 24. I don't count my life dear to myself at all, so that I may finish the ministry I received from the Lord Jesus, to testify the gospel of the grace of God. What an amazing man, right?",
          draw: [["write", "e6", [120, 660], "the gospel > my life", { size: 72, color: "red" }],
                 ["under", "e6", "red"]] },
        { say: "In the second half of verse 25, he says, I know that you will see my face no more. It's like he knows he's going to die. These are almost his last words.",
          draw: [["write", "e7", [120, 790], "\"you will see my face no more\"", { size: 52 }],
                 ["write", "e8", { after: "e7", gap: 40 }, "= last will", { size: 60, color: "red" }],
                 ["circle", "e8", "red"]] }
      ]
    },
    {
      id: "word", title: "I Commend You to the Word of His Grace",
      beats: [
        { say: "Verse 31. Remember that for three years I did not stop warning everyone night and day with tears.",
          draw: [["clear"],
                 ["title", "t", "Commended to the Lord and His word"],
                 ["write", "f1", [120, 290], "v. 31: 3 yrs, night and day, tears", { size: 60 }]] },
        { say: "Verse 32. Now I commend you to the Lord and to the word of his grace, which is able to build you up, to make you holy, and to give you an inheritance.",
          draw: [["write", "f2", [120, 420], "the word of grace", { color: "blue" }],
                 ["write", "f3", [220, 530], "① builds up", { size: 60 }],
                 ["write", "f4", { after: "f3", gap: 50 }, "② makes holy", { size: 60 }],
                 ["write", "f5", { after: "f4", gap: 50 }, "③ gives inheritance", { size: 60 }]] },
        { say: "And I feel the same way. I want the word of God's grace I've preached to build up each one of you, make you holy, and in the end, give you an inheritance.",
          draw: [["write", "f6", [160, 640], "I feel the same way", { size: 52, color: "gray" }]] },
        { say: "Because I believe nothing but the word can make a person stand.",
          draw: [["write", "f7", [120, 780], "what makes us stand = only the word", { size: 60, color: "red" }],
                 ["box", "f7", "red"]] }
      ]
    },
    {
      id: "agabus", title: "Ready Even to Die",
      beats: [
        { say: "He says goodbye to the elders, goes by Cos, Rhodes, and Patara, catches a ship bound for Phoenicia, and lands at Tyre.",
          draw: [["clear"],
                 ["title", "t", "From Tyre to Jerusalem"],
                 ["write", "g1", [120, 290], "Cos → Rhodes → Patara → Tyre", { size: 56, color: "gray" }]] },
        { say: "And here, the disciples try to stop him from going to Jerusalem.",
          draw: [["write", "g2", [120, 400], "disciples try to stop him", { size: 60, color: "blue" }]] },
        { say: "A prophet named Agabus takes Paul's belt and ties up his own hands and feet. And he says, the Holy Spirit says the Jews will bind the owner of this belt and hand him over to the Gentiles. So of course the disciples try to stop him.",
          draw: [["write", "g3", [120, 520], "Agabus: binds hands, feet with belt", { size: 56 }],
                 ["write", "g4", [180, 610], "→ the belt's owner will be bound", { size: 52, color: "red" }]] },
        { say: "Verse 13. Paul answers. What are you doing, weeping and breaking my heart? For I am ready not only to be bound, but also to die at Jerusalem for the name of the Lord Jesus.",
          draw: [["write", "g5", [120, 740], "\"ready also to die\"", { size: 72, color: "red" }],
                 ["under", "g5", "red"]] },
        { say: "You can't stop a man who's ready to die. And at last, he arrives at his final destination. Jerusalem.",
          draw: [["write", "g6", { after: "g5", gap: 60 }, "→ reaches Jerusalem", { size: 56, color: "green" }]] }
      ]
    },
    {
      id: "temple", title: "James's Advice and the Temple Riot",
      beats: [
        { say: "In Jerusalem he meets James, the brother of Jesus. And James tells him, right now the Jews think you're someone who breaks the law.",
          draw: [["clear"],
                 ["title", "t", "Arrest in Jerusalem"],
                 ["write", "h1", [120, 290], "James: \"They think you break the law\"", { size: 52 }]] },
        { say: "So, take these four men who've made a vow, purify yourself with them, and pay their expenses. Then you'll look like you keep the law, and there won't be a problem. It's kind of a show, really.",
          draw: [["write", "h2", [180, 390], "purify with 4 vow-takers + pay", { size: 52 }],
                 ["write", "h3", { after: "h2", gap: 40 }, "= a show", { size: 56, color: "red" }],
                 ["circle", "h3", "red"]] },
        { say: "Paul could've said, why should I? But he did what James said.",
          draw: [["write", "h4", [180, 490], "\"Why should I?\" → goes along", { size: 52, color: "gray" }]] },
        { say: "But people thought Paul had brought Trophimus, a Greek, into the temple. And Gentiles weren't allowed in the temple.",
          draw: [["write", "h5", [120, 620], "Greek Trophimus in temple?", { size: 60, color: "blue" }],
                 ["write", "h6", { after: "h5", gap: 40 }, "(no Gentiles)", { size: 46, color: "gray" }]] },
        { say: "The whole crowd rushed in, dragged Paul out of the temple, and beat him. The commander came and arrested him. Verse 35 says he had to be carried. That's how badly he was beaten.",
          draw: [["write", "h7", [120, 760], "dragged, beaten → arrested (carried)", { size: 56, color: "red" }]] }
      ]
    },
    {
      id: "citizen", title: "Crazy for the Gospel",
      beats: [
        { say: "Half beaten to death, Paul asks the commander in Greek, may I speak? The commander's shocked. You speak Greek?",
          draw: [["clear"],
                 ["title", "t", "Crazy for the gospel"],
                 ["write", "i1", [120, 290], "in Greek: \"May I speak?\"", { size: 60 }]] },
        { say: "Even while he's being beaten half to death, he wants to preach. This man Paul is truly crazy for the gospel.",
          draw: [["write", "i2", { after: "i1", gap: 50 }, "crazy for the gospel", { size: 56, color: "red" }],
                 ["circle", "i2", "red"]] },
        { say: "Once he's given permission, he starts speaking in Hebrew, and the crowd gets quieter. He tells his whole testimony, starting with meeting the Lord at Damascus. But look at verse 22. They shout that he isn't fit to live, throw off their clothes, toss dust in the air. Total chaos.",
          draw: [["write", "i3", [120, 410], "Hebrew speech · Damascus testimony", { size: 52, color: "blue" }],
                 ["write", "i4", { after: "i3", gap: 40 }, "→ more chaos", { size: 52, color: "red" }]] },
        { say: "The commander feels betrayed. He has Paul tied up, planning to get the whole story out of him with a flogging. Then Paul says just one thing. Is it lawful for you to scourge a man who is a Roman, and not found guilty?",
          draw: [["write", "i5", [120, 540], "tied up to flog", { size: 52 }],
                 ["write", "i6", { after: "i5", gap: 40 }, "\"a Roman, uncondemned?\"", { size: 52, color: "red" }]] },
        { say: "The commander asks, are you really a Roman citizen? Yes. I bought my citizenship for a great sum. But I was born a citizen.",
          draw: [["write", "i7", [180, 650], "commander: bought it", { size: 56 }],
                 ["write", "i8", [180, 750], "Paul: born a citizen", { size: 56, color: "blue" }],
                 ["box", "i8", "blue"]] },
        { say: "Total knockout, right? The men who were about to question him took off. And the commander was scared too, because he'd tied up a Roman citizen.",
          draw: [["write", "i9", [900, 710], "Total KO!", { size: 92, color: "red" }]] }
      ]
    },
    {
      id: "council", title: "Before the Council: 40 and 470",
      beats: [
        { say: "Now the commander's in a real bind. He calls the whole council together to find out what the Jews are accusing Paul of, and stands him in front of them. And here, Paul uses his head. He brings up the resurrection.",
          draw: [["clear"],
                 ["title", "t", "Paul before the council"],
                 ["write", "j1", [120, 290], "Paul's topic: resurrection", { size: 60, color: "blue" }]] },
        { say: "The Sadducees always said there's no resurrection. The Pharisees said there is. And they fought bitterly over it. Paul touched exactly that nerve, and they started fighting each other. The commander, afraid Paul would get hurt, took him back into the barracks. This commander's really something, isn't he?",
          draw: [["write", "j2", [180, 390], "Sadducees (no)", { size: 52 }],
                 ["write", "j3", { after: "j2", gap: 50 }, "vs", { size: 52, color: "red" }],
                 ["write", "j4", { after: "j3", gap: 50 }, "Pharisees (yes)", { size: 52 }]] },
        { say: "That night, the Lord stood by Paul and said, be of good cheer. As you have testified about me in Jerusalem, so you must testify also at Rome. That was a guarantee. He wouldn't die before he got to Rome.",
          draw: [["write", "j5", [120, 520], "\"testify also at Rome\" (23:11)", { size: 56, color: "red" }],
                 ["write", "j6", [180, 610], "= guaranteed alive until Rome", { size: 52, color: "green" }]] },
        { say: "But forty men lay in ambush. They swore not to eat or drink until they'd killed Paul. Paul's nephew, his sister's son, found out and told the commander.",
          draw: [["write", "j7", [120, 740], "40 in ambush", { size: 64, color: "red" }],
                 ["write", "j8", { below: "j7", gap: 70 }, "nephew tells", { size: 46, color: "gray" }]] },
        { say: "The commander sent him off to Caesarea at three in the morning with 470 soldiers. Forty men came out to kill Paul, and God got 470 men ready to protect him.",
          draw: [["write", "j9", [820, 740], "470 guards", { size: 72, color: "green" }],
                 ["arrow", "j7", "j9"],
                 ["box", "j9", "green"]] }
      ]
    },
    {
      id: "felix", title: "Before Felix",
      beats: [
        { say: "That night they reached Antipatris. The next day he was sent on to Governor Felix in Caesarea. And Felix kept Paul in Herod's palace.",
          draw: [["clear"],
                 ["title", "t", "Defense before Felix"],
                 ["write", "k1", [120, 290], "Antipatris → Caesarea (Herod's palace)", { size: 52, color: "gray" }]] },
        { say: "Five days later, the high priest Ananias and a lawyer named Tertullus brought charges against Paul. And Paul defended himself once again.",
          draw: [["write", "k2", [120, 400], "accusers: Ananias + lawyer Tertullus", { size: 56 }]] },
        { say: "Felix knew a little about the Way of Jesus, so he put off the trial and gave Paul some freedom. He even let his friends take care of him.",
          draw: [["write", "k3", [120, 510], "trial delayed · some freedom", { size: 60, color: "blue" }]] },
        { say: "When Paul talked about righteousness, self-control, and the judgment to come, Felix got scared. But he kept sending for him, hoping Paul might give him some money. It's the same everywhere, isn't it?",
          draw: [["write", "k4", [120, 630], "righteousness · self-control · judgment", { size: 48 }],
                 ["write", "k5", { after: "k4", gap: 40 }, "afraid, hoping for money", { size: 48, color: "red" }]] },
        { say: "So two years went by in the prison at Caesarea. Paul had time to calmly organize his theology. And Luke traveled around Palestine gathering material for the Gospel of Luke.",
          draw: [["write", "k6", [120, 760], "Caesarea 2 yrs", { size: 64, color: "blue" }],
                 ["box", "k6", "blue"],
                 ["write", "k7", { after: "k6", gap: 50 }, "Paul: theology · Luke: Gospel material", { size: 44, color: "green" }]] }
      ]
    },
    {
      id: "festus", title: "I Appeal to Caesar",
      beats: [
        { say: "When Festus took office, the Jews accused Paul again, and asked for him to be sent to Jerusalem. Their plan was to ambush him on the way and kill him.",
          draw: [["clear"],
                 ["title", "t", "Before Festus and Agrippa"],
                 ["write", "l1", [120, 290], "send him to Jerusalem = ambush", { size: 60, color: "red" }]] },
        { say: "Paul knew about the plot. So he said, I appeal to Caesar, asking to be sent to Rome. A Roman citizen had the right to be tried in Rome.",
          draw: [["write", "l2", [120, 410], "\"I appeal to Caesar\"", { size: 64, color: "blue" }],
                 ["circle", "l2", "blue"],
                 ["write", "l3", { after: "l2", gap: 60 }, "a Roman citizen's right", { size: 48, color: "gray" }]] },
        { say: "A few days later, King Agrippa and Bernice came. Festus said, perfect timing, let's hear Paul's story. He couldn't send him to Rome without any charge.",
          draw: [["write", "l4", [120, 540], "King Agrippa + Bernice: find a charge", { size: 56 }]] },
        { say: "Paul gave another long speech. Festus said, all your learning has driven you mad. And King Agrippa said, you're trying to convert me, aren't you?",
          draw: [["write", "l5", [180, 640], "Festus: \"much learning made you mad\"", { size: 50 }],
                 ["write", "l6", [180, 720], "Agrippa: \"trying to convert me?\"", { size: 50 }]] },
        { say: "In the end they said, he's done nothing worthy of death. If he hadn't appealed, he could've gone free. Paul knew that too. But Paul's goal was Rome. So he thought, good, now I get to Rome safely, and for free.",
          draw: [["write", "l7", [120, 830], "goal: Rome! → safe and free", { size: 60, color: "green" }],
                 ["under", "l7", "green"]] }
      ]
    },
    {
      id: "voyage", title: "The Ship to Rome",
      beats: [
        { say: "Paul and some other prisoners were handed over to Julius, a centurion of the Augustan band. There was no ship going straight there, so first they got on a ship of Adramyttium.",
          draw: [["clear"],
                 ["title", "t", "The road to Rome"],
                 ["write", "m1", [120, 290], "centurion Julius", { size: 60, color: "blue" }],
                 ["write", "m2", { after: "m1", gap: 40 }, "Adramyttium ship", { size: 48, color: "gray" }],
                 ["photo", "p1", "img/p4/image66.jpg", [1060, 200, 440, 248], { tilt: 2, caption: "Paul taken to Rome" }]] },
        { say: "At Sidon, Julius kindly let Paul go see his friends and be cared for. At Myra, they switched to a ship from Alexandria sailing for Italy.",
          draw: [["write", "m3", [120, 400], "Sidon → Myra (Alexandrian ship)", { size: 52 }]] },
        { say: "The ship moved slowly and just barely made it to Fair Havens. But that harbor wasn't good for spending the winter, so most of them wanted to go on to Phoenix and winter there.",
          draw: [["write", "m4", [120, 500], "Fair Havens → winter in Phoenix?", { size: 52 }],
                 ["write", "m5", { after: "m4", gap: 30 }, "(wintering)", { size: 44, color: "gray" }]] },
        { say: "At first, a gentle south wind blew, and they thought, great. But then a wild wind called Euroclydon hit, and they couldn't reach Phoenix. They were driven out to sea.",
          draw: [["write", "m6", [120, 640], "Euroclydon", { size: 76, color: "red" }],
                 ["circle", "m6", "red"],
                 ["write", "m7", { after: "m6", gap: 60 }, "driven out to sea", { size: 52 }]] },
        { say: "Back then, ships were sailing ships. If a wave hit them from the side, they'd capsize. So you had to turn the bow into the waves and cut right through. Just like the pirate ship ride at an amusement park. All 276 people were completely wiped out.",
          draw: [["write", "m8", [120, 780], "sailing ship = pirate-ship ride", { size: 52 }],
                 ["write", "m9", { after: "m8", gap: 40 }, "276 wiped out", { size: 52, color: "blue" }]] }
      ]
    },
    {
      id: "malta", title: "On Malta",
      beats: [
        { say: "Chapter 27 verse 24. Fear not, Paul. You must stand before Caesar, and God has given you all those who sail with you.",
          draw: [["clear"],
                 ["title", "t", "Fear not"],
                 ["write", "n1", [120, 290], "\"You must stand before Caesar\"", { size: 60, color: "red" }]] },
        { say: "Paul thought he might die too. But God had promised he'd stand before Caesar, so he was bold. The ship might break apart, but the ending, getting to Rome, was already settled. So he was calm.",
          draw: [["write", "n2", [180, 390], "outcome already settled → calm", { size: 56, color: "blue" }]] },
        { say: "So Paul says, we must run aground on a certain island. He stops the sailors from escaping, and finally he has everyone eat, and he gives thanks.",
          draw: [["write", "n3", [180, 490], "\"we must be cast on an island\"", { size: 56 }]] },
        { say: "In the end, the ship broke apart, and everyone made it to Malta safely.",
          draw: [["write", "n4", [120, 620], "ship breaks", { size: 60 }],
                 ["write", "n5", { after: "n4", gap: 100 }, "all saved on Malta", { size: 60, color: "green" }],
                 ["arrow", "n4", "n5", "green"]] },
        { say: "On Malta, a viper bit Paul, but he didn't die, so the islanders thought he was a god. He healed Publius's father through prayer, and that turned into three months of meetings. And when they left, the islanders loaded the ship with food for all 276 people.",
          draw: [["write", "n6", [120, 750], "viper · Publius's father → 3 months of meetings", { size: 48 }],
                 ["write", "n7", [180, 835], "on leaving: food for all 276", { size: 44, color: "gray" }]] }
      ]
    },
    {
      id: "rome", title: "Rome at Last",
      beats: [
        { say: "Three months later, they took a ship from Alexandria, and went by Syracuse, Rhegium, and Puteoli on to Rome.",
          draw: [["clear"],
                 ["title", "t", "Rome at last"],
                 ["write", "o1", [120, 290], "Syracuse → Rhegium → Puteoli → Rome", { size: 52, color: "gray" }]] },
        { say: "The Christians in Rome heard the news and came out as far as the Forum of Appius and the Three Taverns to welcome him. When Paul saw them, he thanked God and took courage.",
          draw: [["write", "o2", [120, 410], "welcome at Appius' Forum · Three Taverns", { size: 52, color: "green" }]] },
        { say: "Julius, the centurion escorting him, must've been stunned. A prisoner welcomed like this! Calm while the sea was raging, didn't die from a viper bite, even healed people. He must've written a good report.",
          draw: [["write", "o3", [120, 530], "Julius stunned → good report?", { size: 56, color: "blue" }]] },
        { say: "Thanks to Julius, he didn't go to the prison for people awaiting trial. He lived two years in his own rented house. It was house arrest. He wasn't free, but other people could come and go freely.",
          draw: [["write", "o4", [120, 650], "rented house 2 yrs (house arrest)", { size: 52 }],
                 ["write", "o5", { after: "o4", gap: 40 }, "visitors come freely", { size: 44, color: "gray" }]] },
        { say: "During this time, Paul wrote Ephesians, Colossians, Philemon, and Philippians. He wrote them in prison, so they're called the Prison Epistles. Next time, we'll look at these four Prison Epistles.",
          draw: [["write", "o6", [120, 790], "Prison Epistles", { size: 64, color: "red" }],
                 ["box", "o6", "red"],
                 ["write", "o7", { after: "o6", gap: 50 }, "Eph · Col · Phlm · Phil", { size: 50 }]] }
      ]
    }
  ]
};
