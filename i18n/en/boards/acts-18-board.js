// Acts 18:12~19:20 whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does.
window.BOARD = {
  scenes: [
    {
      id: "gallio", title: "Gallio the Proconsul",
      beats: [
        { say: "Acts chapter 18, verse 12. When Gallio was proconsul of Achaia, the Jews rose up together. People who rise up all together are usually the bad guys, right? A righteous man stands up alone.",
          draw: [["title", "t", "Gallio, Proconsul of Achaia"],
                 ["write", "a1", [120, 300], "Jews rise up together", { size: 60 }],
                 ["write", "a2", { after: "a1", gap: 40 }, "(the righteous stand alone)", { size: 46, color: "gray" }],
                 ["photo", "p1", "img/p4/image45.jpg", [1170, 380, 340, 191], { tilt: 2 }]] },
        { say: "They wanted to finish things off while the new proconsul did not yet know the local situation. So they accused Paul, saying he persuades people to worship God contrary to the law.",
          draw: [["write", "a3", [120, 430], "\"worship God contrary to the law\"", { size: 52 }]] },
        { say: "But before Paul could even open his mouth to defend himself, Gallio already understood. If it is a question of words and names and your own law, look to it yourselves. And he drove them all out.",
          draw: [["write", "a4", [120, 560], "your law? settle it yourselves", { size: 56, color: "blue" }],
                 ["write", "a5", [180, 650], "→ driven out · Sosthenes, synagogue ruler, beaten", { size: 46, color: "gray" }]] },
        { say: "This Gallio was the younger brother of Seneca, who was Emperor Nero's teacher. He was a very capable man with good judgment.",
          draw: [["write", "a6", [120, 790], "Seneca's brother", { size: 60 }],
                 ["write", "a7", { after: "a6", gap: 50 }, "capable · sound judgment", { size: 60, color: "green" }],
                 ["under", "a7", "green"]] }
      ]
    },
    {
      id: "return", title: "End of the 2nd Journey",
      beats: [
        { say: "After a year and a half of ministry in Corinth, Paul decided to go back to Syria. Priscilla and Aquila went with him.",
          draw: [["clear"],
                 ["title", "t", "Corinth to Antioch"],
                 ["write", "b1", [100, 290], "Corinth 1.5 yrs", { size: 60, color: "blue" }],
                 ["photo", "p2", "img/p4/image46.jpg", [870, 170, 640, 360], { tilt: -1.5, caption: "Paul's 2nd missionary journey" }]] },
        { say: "It says he had his hair cut at Cenchreae, because he had taken a vow. It seems he had made a Nazirite vow.",
          draw: [["write", "b2", [100, 410], "Cenchreae: hair cut", { size: 56 }],
                 ["write", "b3", [140, 490], "(Nazirite vow?)", { size: 46, color: "gray" }]] },
        { say: "He came to Ephesus, where he had wanted to go during the second journey, and reasoned in the synagogue for a short while. When they asked him to stay longer, he said he would return if God willed, and left.",
          draw: [["write", "b4", [100, 600], "Ephesus: brief debate", { size: 56 }]] },
        { say: "He landed at Caesarea, greeted the church in Jerusalem, and went down to Antioch.",
          draw: [["write", "b5", [100, 760], "Caesarea", { size: 56 }],
                 ["write", "b6", { after: "b5", gap: 80 }, "Jerusalem", { size: 56 }],
                 ["write", "b7", { after: "b6", gap: 80 }, "Antioch", { size: 60, color: "red" }],
                 ["arrow", "b5", "b6"],
                 ["arrow", "b6", "b7"],
                 ["box", "b7"]] }
      ]
    },
    {
      id: "apollos", title: "Apollos the Gifted",
      beats: [
        { say: "Chapter 18, verse 23. From 'after he had spent some time there, he departed,' the third missionary journey begins. He went through Galatia and Phrygia, strengthening the disciples. He probably went to check whether they were doing well after he had sent the letter to the Galatians.",
          draw: [["clear"],
                 ["title", "t", "3rd Journey Begins"],
                 ["write", "c1", [120, 290], "'departed' = 3rd journey", { size: 60, color: "red" }],
                 ["write", "c2", { below: "c1", gap: 80 }, "Galatia · Phrygia → checking on Galatians?", { size: 48, color: "gray" }]] },
        { say: "At this time Apollos, a native of Alexandria, came to Ephesus and worked hard there. He was a man of great ability. He was mighty in the Scriptures and an eloquent speaker.",
          draw: [["write", "c3", [120, 510], "Apollos", { size: 80, color: "blue" }],
                 ["write", "c4", { after: "c3", gap: 50 }, "mighty in Scripture · eloquent", { size: 52 }]] },
        { say: "Quite a contrast with Paul, isn't it? Surprisingly, Paul is said to have been a poor speaker.",
          draw: [["write", "c5", [180, 610], "(Paul, surprisingly, was a poor speaker)", { size: 46, color: "gray" }]] },
        { say: "But he did not yet know much about Jesus. He knew only the baptism of John.",
          draw: [["write", "c6", [120, 750], "but knew only John's baptism", { color: "red" }],
                 ["under", "c6"]] }
      ]
    },
    {
      id: "corinth", title: "Apollos Goes to Corinth",
      beats: [
        { say: "So Priscilla and Aquila took him aside and explained things to him step by step. Apollos was capable, so he understood right away.",
          draw: [["clear"],
                 ["title", "t", "Priscilla and Aquila"],
                 ["write", "d1", [120, 300], "Priscilla · Aquila teach", { size: 60 }],
                 ["write", "d2", { after: "d1", gap: 110 }, "gets it at once", { size: 60, color: "blue" }],
                 ["arrow", "d1", "d2"]] },
        { say: "When he asked where they had learned all this, they said, from Paul.",
          draw: [["write", "d3", [180, 410], "\"Where'd you learn this?\" \"From Paul!\"", { size: 52, color: "gray" }]] },
        { say: "In the end, Apollos crossed over to Corinth, served the church in Corinth, and was a great help to them.",
          draw: [["write", "d4", [120, 560], "serves Corinth church → great help", { size: 64, color: "green" }]] },
        { say: "But it does not seem to have done him much good. If you read 1 Corinthians, Apollos had a really hard time with the believers in Corinth.",
          draw: [["write", "d5", [120, 690], "yet he himself suffered", { color: "red" }],
                 ["under", "d5"]] },
        { say: "I know this well, because I have seen it since I was young. Pastors go through a lot of hardship one way or another. Sometimes they are driven out even after doing a lot of good.",
          draw: [["write", "d6", [180, 800], "pastors do good, still get driven out", { size: 48, color: "gray" }]] }
      ]
    },
    {
      id: "spirit", title: "Did You Receive the Spirit?",
      beats: [
        { say: "Chapter 19. While Apollos was in Corinth, Paul came to Ephesus and met some disciples. Did you receive the Holy Spirit when you believed?",
          draw: [["clear"],
                 ["title", "t", "Disciples in Ephesus"],
                 ["write", "e1", [120, 290], "\"Did you receive the Spirit?\"", { size: 60, color: "blue" }]] },
        { say: "We have not even heard whether there is a Holy Spirit. Then into what were you baptized? Into John's baptism.",
          draw: [["write", "e2", [120, 410], "\"We never even heard of it\"", { size: 56 }],
                 ["write", "e3", [120, 520], "\"John's baptism\"", { size: 56 }]] },
        { say: "So Paul says: When John baptized, he said that one greater was coming after him, and to believe in him. That one is Jesus.",
          draw: [["write", "e4", [120, 640], "\"the one coming after me\" = Jesus", { size: 60, color: "red" }]] },
        { say: "Then they were baptized in the name of Jesus, and the Holy Spirit came upon them. There were about twelve of them.",
          draw: [["write", "e5", [120, 780], "baptized in Jesus' name", { size: 56 }],
                 ["write", "e6", { after: "e5", gap: 90 }, "Spirit comes", { size: 60, color: "green" }],
                 ["arrow", "e5", "e6"],
                 ["write", "e7", { after: "e6", gap: 30 }, "(about 12)", { size: 44, color: "gray" }]] }
      ]
    },
    {
      id: "tyrannus", title: "The School of Tyrannus",
      beats: [
        { say: "Using this event as a foothold, Paul boldly taught about the kingdom of God in the synagogue for three months.",
          draw: [["clear"],
                 ["title", "t", "Synagogue 3 mo., Tyrannus 2 yrs"],
                 ["write", "f1", [120, 300], "synagogue 3 months", { size: 60 }]] },
        { say: "But some were hardened and would not obey, and they got in the way. Even the great Paul taught for three months, and people with hard hearts still would not listen. I have given lectures like this many times too, and people who won't listen just won't listen.",
          draw: [["write", "f2", { after: "f1", gap: 110 }, "hard hearts won't listen", { size: 56, color: "gray" }],
                 ["arrow", "f1", "f2"]] },
        { say: "So he borrowed the school of a man named Tyrannus and taught there for two years, and everyone living in Asia, both Jews and Greeks, heard the word of the Lord. When someone like Paul teaches for two years, things happen.",
          draw: [["write", "f3", [120, 460], "Tyrannus 2 yrs", { size: 72, color: "blue" }],
                 ["write", "f4", { after: "f3", gap: 110 }, "all Asia hears", { size: 64, color: "green" }],
                 ["arrow", "f3", "f4"],
                 ["box", "f3", "blue"]] },
        { say: "God worked unusual miracles by the hands of Paul. When handkerchiefs or aprons Paul had used were laid on the sick, diseases were healed and evil spirits went out.",
          draw: [["write", "f5", [120, 620], "handkerchiefs · aprons → healing, demons leave", { size: 52 }]] },
        { say: "God was proving that what Paul said was true.",
          draw: [["write", "f6", [120, 770], "= proof Paul's words are true", { color: "red" }],
                 ["under", "f6"]] }
      ]
    },
    {
      id: "sceva", title: "The Seven Sons of Sceva",
      beats: [
        { say: "This was so amazing that some magicians tried to copy it. People who did not believe imitated Paul, saying, I command you by the Jesus whom Paul preaches.",
          draw: [["clear"],
                 ["title", "t", "Copycats"],
                 ["write", "g1", [120, 290], "magician: \"by the Jesus whom Paul preaches\"", { size: 52 }]] },
        { say: "Verse 14. The seven sons of a priest named Sceva also tried it. Then the evil spirit said: Jesus I know, and Paul I know, but who are you?",
          draw: [["write", "g2", [120, 420], "seven sons of Sceva", { size: 60, color: "blue" }],
                 ["write", "g3", [120, 540], "\"Jesus I know, Paul I know, but who are you?\"", { size: 52, color: "red" }],
                 ["under", "g3"]] },
        { say: "The evil spirit overpowered them, and they fled naked. Quite a farce. The evil spirit is very cunning, isn't it? It stayed quiet when the magicians did it, but when the priest's sons did it, it attacked them.",
          draw: [["write", "g4", [180, 640], "flee naked · cunning spirit", { size: 48, color: "gray" }]] },
        { say: "Because of this, people honored the name of Jesus, confessed their sins, and brought their magic books and burned them. Fifty thousand pieces of silver, about 3.6 billion Korean won. The conclusion is that the word of God grew mightily and prevailed.",
          draw: [["write", "g5", [120, 780], "magic books burned (50,000 silver ≈ ₩3.6 bn)", { size: 52 }],
                 ["write", "g6", { after: "g5", gap: 30 }, "Word grows!", { size: 56, color: "green" }],
                 ["circle", "g6", "green"]] }
      ]
    },
    {
      id: "longer", title: "Longer and Longer Stays",
      beats: [
        { say: "Look at how long Paul ministered in one place. At first it was three weeks, a month,",
          draw: [["clear"],
                 ["title", "t", "Ministry Grows Longer"],
                 ["write", "h1", { at: [230, 340] }, "3 wks · 1 mo.", { anchor: "middle", size: 56 }]] },
        { say: "then three months, a year and a half in Corinth, and then three years in Ephesus.",
          draw: [["write", "h2", { at: [620, 340] }, "3 mo.", { anchor: "middle", size: 60 }],
                 ["write", "h3", { at: [960, 340] }, "1.5 yrs", { anchor: "middle", size: 64, color: "blue" }],
                 ["write", "h4", { at: [1340, 340] }, "3 yrs", { anchor: "middle", size: 80, color: "red" }],
                 ["arrow", "h1", "h2"],
                 ["arrow", "h2", "h3"],
                 ["arrow", "h3", "h4"],
                 ["write", "h5", { at: [960, 420] }, "Corinth", { anchor: "middle", size: 44, color: "gray" }],
                 ["write", "h6", { at: [1340, 420] }, "Ephesus", { anchor: "middle", size: 44, color: "gray" }]] },
        { say: "Paul probably thought Jesus would come back any moment, so he tried to plant churches in as many places as he could.",
          draw: [["write", "h7", [120, 570], "coming soon → churches everywhere", { size: 60 }]] },
        { say: "But as time went on, it seems he realized the Second Coming might not be as soon as he thought. His thinking changed: now he had to build up even one church properly.",
          draw: [["write", "h8", [120, 700], "build one church right", { size: 72, color: "red" }],
                 ["under", "h8"]] },
        { say: "So during those two or three years of ministry in Ephesus, he wrote 1 and 2 Corinthians. Now, let's go on to 1 Corinthians.",
          draw: [["write", "h9", [180, 820], "Ephesus years → 1 & 2 Cor written", { size: 50, color: "green" }]] }
      ]
    }
  ]
};
