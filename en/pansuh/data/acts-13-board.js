// Acts 13–18:11 whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does.
window.BOARD = {
  scenes: [
    {
      id: "name", title: "Saul and Paul",
      beats: [
        { say: "Chapter 13, verse 1. Now there were in the church that was at Antioch certain prophets and teachers: Barnabas, Simeon, Lucius, Manaen, and Saul. See where Saul is? His name doesn't count for much yet, so he comes last, tacked on after 'and.'",
          draw: [["title", "t", "Saul and Paul"],
                 ["write", "a1", [100, 300], "Barnabas · Simeon · Lucius · Manaen", { size: 52 }],
                 ["write", "a1b", { after: "a1", gap: 30 }, "and Saul", { size: 60, color: "red" }],
                 ["circle", "a1b"]] },
        { say: "But very soon, you'll see Saul step out in front as the leader.",
          draw: [["write", "a2", [180, 400], "→ soon the leader", { size: 52, color: "green" }]] },
        { say: "Now, Paul means 'small one,' and Saul means 'asked for.'",
          draw: [["write", "a3", [100, 530], "Paul = small one", { size: 60, color: "blue" }],
                 ["write", "a4", { after: "a3", gap: 80 }, "Saul = asked for", { size: 60, color: "blue" }]] },
        { say: "People say Saul changed his name to Paul, but that's not right. Even Saul is the Greek way of saying the Hebrew name Shaul. So strictly speaking, both are Greek forms.",
          draw: [["write", "a5", [100, 650], "Saul → renamed Paul?", { size: 56, color: "gray" }],
                 ["strike", "a5", "gray"],
                 ["write", "a5b", { after: "a5", gap: 40 }, "both are Greek forms", { size: 52 }]] },
        { say: "With Hebrews, he went by Saul. With Gentiles, he went by Paul. And once it was clear he was the apostle to the Gentiles, he mostly used Paul.",
          draw: [["write", "a6", [100, 790], "Saul to Hebrews · Paul to Gentiles", { size: 60, color: "red" }],
                 ["under", "a6"]] }
      ]
    },
    {
      id: "sent", title: "Missionaries Sent by the Spirit",
      beats: [
        { say: "As they ministered to the Lord and fasted, the Holy Spirit said, Separate me Barnabas and Saul. So the two of them were sent out by the Holy Spirit, and off they went. That's what a missionary is. Someone the Holy Spirit sends.",
          draw: [["clear"],
                 ["title", "t", "Sent by the Spirit"],
                 ["photo", "p1", "../../pansuh/img/p4/image34.jpg", [1110, 160, 410, 302], { tilt: 2 }],
                 ["write", "b1", [100, 300], "missionary = sent by the Spirit", { size: 60, color: "red" }],
                 ["box", "b1", "red"]] },
        { say: "From Seleucia they sailed to Cyprus. At Salamis they preached the word in the synagogues, and John was their helper. Not John the apostle, though. John Mark.",
          draw: [["write", "b2", [100, 420], "Seleucia → Cyprus → Salamis", { size: 52 }],
                 ["write", "b2b", [160, 500], "John = John Mark", { size: 46, color: "gray" }]] },
        { say: "At Paphos they ran into Bar-jesus, which means 'son of Jesus.' He was a Jewish false prophet, and he was with the governor, Sergius Paulus.",
          draw: [["write", "b3", [100, 620], "Paphos: false prophet Bar-jesus · governor Sergius Paulus", { size: 48 }]] },
        { say: "The governor was a wise man, and he wanted to hear the word of God. Here's the thing. A wise person wants to listen. A proud person won't. You have to listen well to see things clearly.",
          draw: [["write", "b4", [100, 750], "wise = wants to hear", { size: 60, color: "green" }],
                 ["write", "b4b", { after: "b4", gap: 80 }, "proud = won't listen", { size: 60, color: "gray" }]] }
      ]
    },
    {
      id: "elymas", title: "Elymas the Sorcerer",
      beats: [
        { say: "Elymas the sorcerer tried hard to keep the governor from believing. And that's the mark of people under demonic influence. They keep others from believing in Jesus.",
          draw: [["clear"],
                 ["title", "t", "Elymas the sorcerer"],
                 ["write", "c1", [100, 300], "keeps governor from faith", { color: "gray" }],
                 ["write", "c1b", [160, 400], "mark of the demonized = keeps people from Jesus", { size: 52, color: "red" }]] },
        { say: "A sorcerer here means a male shaman, a kind of fortune-teller.",
          draw: [["write", "c2", [100, 520], "sorcerer = male shaman", { size: 56, color: "blue" }]] },
        { say: "Then Paul, filled with the Holy Spirit, fixed his eyes on him and said, Thou shalt be blind, not seeing the sun for a season. And right away, a mist and darkness fell on him.",
          draw: [["write", "c3", [100, 640], "Paul: \"You shall be blind\"", { size: 60 }]] },
        { say: "When the governor saw that, he believed. Paul used that moment well to reach the governor, didn't he?",
          draw: [["write", "c4", [100, 770], "governor believes", { size: 64, color: "green" }],
                 ["write", "c4b", { after: "c4", gap: 40 }, "← put to good use!", { size: 48, color: "gray" }],
                 ["circle", "c4", "green"]] }
      ]
    },
    {
      id: "mark", title: "Why Did Mark Go Back?",
      beats: [
        { say: "Then, when they came to Perga in Pamphylia, John Mark left them and went back to Jerusalem. Why? There are a few theories, and scholars still argue about it.",
          draw: [["clear"],
                 ["title", "t", "Why did Mark go back?"],
                 ["write", "d1", [100, 300], "at Perga, John Mark goes home", { size: 60 }]] },
        { say: "The first theory is that he came from a rich family, so he just couldn't handle such a hard journey.",
          draw: [["write", "d2", [140, 420], "① rich kid, couldn't take hardship", { size: 52, color: "gray" }]] },
        { say: "The second theory is that he saw the huge mountains, two thousand meters high, that they'd have to cross to get to Antioch in Pisidia, and he got scared and ran.",
          draw: [["write", "d3", [140, 520], "② scared of 2,000 m mountains", { size: 52, color: "gray" }]] },
        { say: "The third theory is that Mark belonged to the circumcision party. These were people who said, sure, you're saved by believing in Jesus, but you still have to be circumcised and go through the steps of becoming a Jew.",
          draw: [["write", "d4", [140, 630], "③ circumcision party", { size: 60, color: "red" }],
                 ["write", "d4b", { after: "d4", gap: 40 }, "circumcised → become a Jew", { size: 46, color: "gray" }]] },
        { say: "Paul was baptizing Gentiles without circumcising them. So it's very likely Mark went home because he couldn't work with people that radical. And in Colossians chapter 4, Mark is listed among those of the circumcision.",
          draw: [["write", "d5", [100, 780], "baptism, no circumcision → \"Too radical!\"", { size: 60, color: "blue" }],
                 ["box", "d4", "red"]] }
      ]
    },
    {
      id: "stoned", title: "Back into the City",
      beats: [
        { say: "The ones who stayed kept on preaching the gospel. They preached in the synagogue at Antioch in Pisidia, and more and more people believed. Then the Jews and the devout women of high standing turned on them.",
          draw: [["clear"],
                 ["title", "t", "Back into the city"],
                 ["write", "e1", [100, 290], "Pisidian Antioch: believers ↑ → persecution", { size: 56 }]] },
        { say: "So the two shook the dust off their feet and went to Iconium. Today it's called Konya. They preached there too, and people rushed to kill them, so they ran.",
          draw: [["write", "e2", [100, 400], "dust off feet → Iconium (Konya) → flee", { size: 56 }]] },
        { say: "At Lystra, they healed a man who'd been lame from birth, and the people tried to worship them as Zeus and Hermes. Paul and Barnabas stopped them.",
          draw: [["write", "e3", [100, 510], "Lystra: Zeus · Hermes?", { size: 52, color: "gray" }]] },
        { say: "Then people came from Antioch and Iconium and stoned Paul. They thought he was dead and dragged him out of the city. But Paul got up, and went right back into the city.",
          draw: [["write", "e4", [100, 630], "stoned, left for dead", { size: 56 }],
                 ["write", "e4b", { after: "e4", gap: 40 }, "→ back into the city!", { size: 64, color: "red" }],
                 ["circle", "e4b"]] },
        { say: "Think about that. He went straight back into the very city where he'd almost been stoned to death. If we're rejected in the Philippines, we have to go back there too.",
          draw: [["write", "e5", [140, 740], "go back where you were rejected", { size: 52, color: "blue" }]] },
        { say: "After that, they made many disciples in Derbe, then went back through Lystra, Iconium, and Antioch, strengthening the disciples and appointing elders. Then they came home to Antioch, where they'd first been sent out, and told how God had opened the door of faith to the Gentiles.",
          draw: [["write", "e6", [100, 840], "back through, strengthening → report at Antioch", { size: 50, color: "green" }]] }
      ]
    },
    {
      id: "council", title: "The First Jerusalem Council",
      beats: [
        { say: "Now, when they got back from the first missionary journey, there was a circumcision problem in the church at Antioch. People who'd come down from Judea were teaching this. Except ye be circumcised after the manner of Moses, ye cannot be saved.",
          draw: [["clear"],
                 ["title", "t", "First Jerusalem Council"],
                 ["write", "f1", [100, 300], "\"No circumcision, no salvation\"", { size: 60, color: "red" }],
                 ["write", "f1b", { after: "f1", gap: 40 }, "circumcision party, own expense", { size: 46, color: "gray" }]] },
        { say: "In the end, they decided to settle it before the apostles and elders in Jerusalem, and they sent Paul and Barnabas. And that's how the First Jerusalem Council came about.",
          draw: [["write", "f2", [100, 420], "Antioch → apostles and elders in Jerusalem", { size: 56 }]] },
        { say: "After hearing from Paul and Barnabas, and from Peter, James, the brother of Jesus, gave the conclusion. Let's not trouble the Gentiles by making them be circumcised.",
          draw: [["write", "f3", [100, 540], "James's verdict", { color: "blue" }],
                 ["write", "f3b", { after: "f3", gap: 40 }, "don't trouble the Gentiles", { size: 60, color: "green" }]] },
        { say: "But they should stay away from things offered to idols, from blood, from things strangled, and from sexual immorality. And to confirm it, they sent Judas and Silas.",
          draw: [["write", "f4", [140, 650], "abstain: idol offerings · blood · strangled · immorality", { size: 48, color: "gray" }]] },
        { say: "And they made the decision saying, 'It seemed good to the Holy Spirit and to us.' See? The church's decisions are made by people and the Holy Spirit together.",
          draw: [["write", "f5", [100, 790], "\"the Holy Spirit and us\" = decide together", { size: 60, color: "red" }],
                 ["under", "f5"]] }
      ]
    },
    {
      id: "split", title: "The Team Splits",
      beats: [
        { say: "Then Paul had an idea. Let's go back and visit the brothers in every city where we preached, and see how they're doing. That's how the second missionary journey started. Today it's a day's trip, but back then it took a huge amount of time and money.",
          draw: [["clear"],
                 ["title", "t", "The team splits"],
                 ["photo", "p2", "../../pansuh/img/p4/image36.jpg", [1080, 170, 440, 248], { tilt: 2 }],
                 ["write", "g1", [100, 300], "let's revisit → 2nd journey", { size: 56 }]] },
        { say: "But the team split over John Mark. Mark, who'd been in the circumcision party, probably saw the council's decision, changed his mind, and wanted to come along again. Barnabas wanted to take him. Paul said no.",
          draw: [["write", "g2", [100, 420], "sharp dispute over Mark", { size: 60, color: "red" }]] },
        { say: "So Barnabas took Mark and went to his home island of Cyprus,",
          draw: [["write", "g3", { at: [380, 590] }, "Barnabas + Mark", { anchor: "middle", size: 60 }],
                 ["write", "g3b", { at: [380, 690] }, "→ Cyprus", { anchor: "middle", size: 52, color: "gray" }]] },
        { say: "and Paul took Silas and went to Syria and Cilicia.",
          draw: [["write", "g4", { at: [1100, 590] }, "Paul + Silas", { anchor: "middle", size: 60, color: "blue" }],
                 ["write", "g4b", { at: [1100, 690] }, "→ Syria · Cilicia", { anchor: "middle", size: 52, color: "gray" }]] },
        { say: "But the Holy Spirit's camera followed Paul, not Barnabas. We don't know what happened to Barnabas after that.",
          draw: [["write", "g5", { at: [800, 820] }, "the Spirit's camera follows Paul", { anchor: "middle", size: 56, color: "red" }],
                 ["box", "g4", "blue"]] }
      ]
    },
    {
      id: "partners", title: "Lifelong Partners",
      beats: [
        { say: "What to notice on the second journey is this. Paul met good people who'd work with him for the rest of his life. First, right as he set out, he met Silvanus.",
          draw: [["clear"],
                 ["title", "t", "Lifelong partners"],
                 ["write", "h1", [100, 320], "setting out", { size: 52, color: "gray" }],
                 ["write", "h1b", { after: "h1", gap: 60 }, "Silvanus", { size: 72, color: "blue" }]] },
        { say: "In Derbe and Lystra, he met Timothy. His mother was a Jewish woman who believed, and his father was a Greek.",
          draw: [["write", "h2", [100, 470], "Derbe · Lystra", { size: 52, color: "gray" }],
                 ["write", "h2b", { after: "h2", gap: 60 }, "Timothy", { size: 72, color: "blue" }],
                 ["write", "h2c", { after: "h2b", gap: 50 }, "Jewish mother · Greek father", { size: 44, color: "gray" }]] },
        { say: "Timothy had a good name in two cities, Lystra and Iconium. Praised in two whole cities? That's something.",
          draw: [["write", "h3", [180, 570], "well spoken of in two cities!", { size: 52, color: "green" }],
                 ["under", "h2b", "blue"]] },
        { say: "And around Troas, he met Luke. And meeting Luke turned out to be a historic moment too.",
          draw: [["write", "h4", [100, 730], "Troas", { size: 52, color: "gray" }],
                 ["write", "h4b", { after: "h4", gap: 60 }, "Luke", { size: 72, color: "red" }],
                 ["write", "h4c", { after: "h4b", gap: 50 }, "← historic meeting", { size: 52 }],
                 ["circle", "h4b"]] }
      ]
    },
    {
      id: "macedonia", title: "The Spirit Who Blocks the Way",
      beats: [
        { say: "Now, Paul's plan was to go to Asia, to Ephesus, and preach the gospel there. But the Holy Spirit stopped him.",
          draw: [["clear"],
                 ["title", "t", "The Spirit blocks"],
                 ["photo", "p3", "../../pansuh/img/p4/image35.jpg", [1060, 170, 460, 243], { tilt: -2 }],
                 ["write", "i1", [100, 300], "Asia (Ephesus)", { size: 60, color: "gray" }],
                 ["cross", [600, 280], "red"]] },
        { say: "Then how about Bithynia? Stopped there too. The Holy Spirit is completely in charge here, isn't he?",
          draw: [["write", "i2", [100, 420], "Bithynia", { size: 60, color: "gray" }],
                 ["cross", [450, 400], "red"],
                 ["write", "i2b", [560, 420], "Spirit in charge", { size: 52, color: "blue" }]] },
        { say: "So he kept going, passed by Mysia, and came to Troas. And that night he saw a vision. A man of Macedonia was standing there, pleading with him. Come over into Macedonia, and help us.",
          draw: [["write", "i3", [100, 560], "vision at Troas: \"Come over and help us\"", { size: 56, color: "red" }]] },
        { say: "So he crossed over to Macedonia, and the gospel went to Europe. Only then did Paul understand why he'd been led all the way to Troas, and not to Asia or Bithynia.",
          draw: [["write", "i4", [100, 700], "gospel to Europe!", { size: 72, color: "green" }],
                 ["box", "i4", "green"],
                 ["write", "i4b", { after: "i4", gap: 60 }, "so that's why!", { size: 52, color: "gray" }]] }
      ]
    },
    {
      id: "philippi", title: "In Philippi",
      beats: [
        { say: "From Troas they sailed by way of Samothrace and Neapolis and came to Philippi. It was the leading city of that part of Macedonia, and a Roman colony.",
          draw: [["clear"],
                 ["title", "t", "In Philippi"],
                 ["write", "j1", [100, 290], "Philippi = first city of Macedonia · Roman colony", { size: 52, color: "gray" }]] },
        { say: "In Philippi they met Lydia, a seller of purple cloth. Now, purple clothing was incredibly expensive. You had to crack open eight thousand sea snails to make one garment. Only royalty wore it. So Lydia was very, very rich.",
          draw: [["write", "j2", [100, 400], "Lydia: purple cloth dealer", { size: 60, color: "blue" }],
                 ["write", "j2b", [160, 490], "8,000 sea snails = 1 garment", { size: 46, color: "gray" }]] },
        { say: "Later on, she became a generous supporter of Paul's missionary team.",
          draw: [["write", "j3", { after: "j2", gap: 60 }, "→ financial backer", { size: 56, color: "green" }]] },
        { say: "There was a slave girl with a demon who made a lot of money telling fortunes. When Paul drove the demon out, her owners took revenge. He was beaten nearly to death and thrown into prison.",
          draw: [["write", "j4", [100, 610], "demon cast out → beaten, jailed", { size: 56 }]] },
        { say: "Even in prison, they sang hymns. Then an earthquake hit, and all the doors flew open. The jailer was about to kill himself, but Paul stopped him and shared the gospel, and he was saved. The Holy Spirit did all of this to reach that jailer.",
          draw: [["write", "j5", [100, 720], "hymns → earthquake → jailer saved", { size: 60, color: "red" }],
                 ["under", "j5"]] },
        { say: "The next day, when they tried to quietly let him go, Paul said, you did this to Roman citizens, without even a trial? And he walked out with his head held high. So let's all go to the Philippines, and go to prison too.",
          draw: [["write", "j6", [100, 830], "walks out boldly as a Roman citizen", { size: 52, color: "gray" }]] }
      ]
    },
    {
      id: "berea", title: "Thessalonica and Berea",
      beats: [
        { say: "In Thessalonica, for three Sabbaths, he reasoned with them from the Scriptures. He showed that the Christ had to suffer and rise from the dead, and that this Jesus is the Christ. That's all he did.",
          draw: [["clear"],
                 ["title", "t", "Thessalonica and Berea"],
                 ["write", "k1", [100, 300], "Thessalonica: 3 Sabbaths reasoning from Scripture", { size: 56 }]] },
        { say: "Then people got jealous, rounded up some thugs, and started a riot. They took bail money and drove Paul's group out, and the group went on to Berea.",
          draw: [["write", "k2", [140, 400], "jealousy · riot · bail → to Berea", { size: 50, color: "gray" }]] },
        { say: "The Bereans were more noble than those in Thessalonica. They received the word with all readiness of mind, and searched the Scriptures daily, whether those things were so.",
          draw: [["write", "k3", [100, 530], "Berea: eager, searched daily", { size: 60, color: "blue" }],
                 ["box", "k3", "blue"]] },
        { say: "And your walk of faith has to be like this too. Don't just listen. Search the Scriptures every day to see if what you heard is really true. Searching means going through it carefully, point by point.",
          draw: [["write", "k4", [140, 650], "search = examine carefully", { size: 56, color: "red" }],
                 ["under", "k4"]] },
        { say: "People from Thessalonica came all the way to Berea to stir up trouble, so Paul left Timothy and Silas behind and went to Athens alone. And in Athens, things didn't go so well.",
          draw: [["write", "k5", [100, 790], "alone to Athens", { size: 56 }],
                 ["write", "k5b", { after: "k5", gap: 40 }, "→ not much fruit", { size: 48, color: "gray" }]] }
      ]
    },
    {
      id: "corinth", title: "Tentmakers in Corinth",
      beats: [
        { say: "Since things didn't go well in Athens, Paul went down to Corinth, and there he met Priscilla and Aquila.",
          draw: [["clear"],
                 ["title", "t", "Tentmakers in Corinth"],
                 ["write", "l1", [100, 300], "Corinth: Priscilla and Aquila", { color: "blue" }]] },
        { say: "They made tents for a living. And not tents sewn on a sewing machine. It was the craft of building mobile villas for the nobles of that time.",
          draw: [["write", "l2", [100, 430], "tent = nobles' mobile villa", { size: 60 }]] },
        { say: "It was such a high-end craft that one or two orders would cover a whole year's expenses.",
          draw: [["write", "l3", [140, 530], "1 or 2 orders = a year's costs", { size: 52, color: "gray" }]] },
        { say: "Paul preached while he worked. Later he says he did it so he wouldn't be a burden to anyone.",
          draw: [["write", "l4", [100, 680], "work + preach", { size: 72, color: "green" }],
                 ["write", "l4b", { after: "l4", gap: 50 }, "a burden to no one", { size: 52 }],
                 ["circle", "l4", "green"]] }
      ]
    },
    {
      id: "fear", title: "Be Not Afraid",
      beats: [
        { say: "When Silas and Timothy came down, Paul got a bit bolder and preached the word. But the Jews rejected it, as usual.",
          draw: [["clear"],
                 ["title", "t", "Be not afraid"],
                 ["write", "m1", [100, 300], "Jews reject", { size: 60, color: "gray" }]] },
        { say: "Paul shook out his clothes and said, From henceforth I will go unto the Gentiles. In other words, fine, I'll just go to the Gentiles. And when he preached to the Gentiles, they actually believed. Even Crispus, the ruler of the synagogue, believed, with his whole household.",
          draw: [["write", "m2", { after: "m1", gap: 110 }, "to Gentiles → they believe", { size: 60, color: "green" }],
                 ["arrow", "m1", "m2"]] },
        { say: "Around this time, Paul seems to have been a little discouraged.",
          draw: [["write", "m3", [100, 430], "discouraged Paul", { size: 56, color: "gray" }]] },
        { say: "Then one night the Lord spoke to him in a vision. Be not afraid, but speak, and hold not thy peace. For I am with thee, for I have much people in this city.",
          draw: [["write", "m4", [100, 570], "\"Be not afraid, but speak\"", { size: 64, color: "red" }],
                 ["write", "m4b", [160, 660], "I have many people in this city (18:9~10)", { size: 46, color: "gray" }]] },
        { say: "So he stayed boldly in Corinth for a year and a half. During that time, he planted the church in Corinth, wrote First and Second Thessalonians and sent them to the church in Thessalonica, and wrote Galatians for the churches of Galatia. So next time, we'll look at First Thessalonians first.",
          draw: [["write", "m5", [100, 800], "1½ yrs: Corinth church · 1 & 2 Thess · Galatians", { size: 48, color: "blue" }],
                 ["under", "m5", "blue"]] }
      ]
    }
  ]
};
