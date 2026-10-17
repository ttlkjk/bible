// New Testament Panorama · Matthew whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does.
window.BOARD = {
  scenes: [
    {
      id: "nt", title: "How the New Testament Is Built",
      beats: [
        { say: "Shall we first look at how the New Testament is put together? First, the four Gospels: Matthew, Mark, Luke, and John. They deal with who Jesus is.",
          draw: [["title", "t", "Structure of the NT"],
                 ["photo", "p1", "img/p4/image2.jpg", [1030, 170, 500, 281], { tilt: 2, caption: "How the NT books relate" }],
                 ["write", "a1", [100, 290], "4 Gospels = Who is Jesus?", { size: 56, color: "blue" }]] },
        { say: "Second, Acts, which is really the Acts of the Holy Spirit. Who the Holy Spirit is, and how the gospel that Jesus completed spreads out. There were many other apostles, but God judged that the deeds of just two men, Peter and Paul, were enough.",
          draw: [["write", "a2", [100, 410], "Acts = Acts of the Spirit", { size: 56, color: "red" }],
                 ["write", "a2b", { below: "a2", gap: 64 }, "deeds of Peter and Paul", { size: 46, color: "gray" }]] },
        { say: "Third, the thirteen letters of Paul are doctrine. The ten letters that tie in with Acts should be put back in time order, so we can check when, where, by whom, and to whom each was written. The other three, First and Second Timothy and Titus, are the Pastoral Epistles.",
          draw: [["write", "a3", [100, 590], "13 Pauline Epistles = doctrine", { size: 56 }],
                 ["write", "a3b", { below: "a3", gap: 64 }, "10 tie in with Acts · 3 Pastoral Epistles", { size: 44, color: "gray" }]] },
        { say: "The eight General Epistles are doctrine too. And last, Revelation is about the end times.",
          draw: [["write", "a4", [100, 800], "8 General Epistles = doctrine", { size: 56 }],
                 ["write", "a5", [1030, 640], "Rev = end times", { size: 56, color: "blue" }],
                 ["under", "a5", "blue"]] }
      ]
    },
    {
      id: "four", title: "Jesus in the Four Gospels",
      beats: [
        { say: "This is how Jesus appears in the four Gospels. Matthew is the gospel for the Jews. The Messiah who came as King of the Jews. Its view is that every prophecy is fulfilled in Jesus, so it quotes the Old Testament a lot.",
          draw: [["clear"],
                 ["title", "t", "Jesus in the 4 Gospels"],
                 ["photo", "p2", "img/p4/image3.jpg", [1060, 170, 460, 259], { tilt: -2 }],
                 ["write", "b1", [100, 300], "Matt", { color: "blue" }],
                 ["write", "b1b", { after: "b1", gap: 40 }, "King of Jews · prophecy", { size: 56 }]] },
        { say: "Mark is the gospel for the Greeks. The King who serves the people, Jesus who came to call all the nations of the world.",
          draw: [["write", "b2", [100, 430], "Mark", { color: "blue" }],
                 ["write", "b2b", { after: "b2", gap: 40 }, "Greeks · serving King", { size: 56 }]] },
        { say: "Luke shows especially Jesus who seeks out sinners, Jesus who came as the offspring of the woman.",
          draw: [["write", "b3", [100, 560], "Luke", { color: "blue" }],
                 ["write", "b3b", { after: "b3", gap: 40 }, "seeks sinners · seed of woman", { size: 56 }]] },
        { say: "John shows Jesus the Son of God. The Word became flesh and came to dwell among us.",
          draw: [["write", "b4", [100, 690], "John", { color: "blue" }],
                 ["write", "b4b", { after: "b4", gap: 40 }, "Son of God · Word made flesh", { size: 56, color: "red" }],
                 ["under", "b4b"]] }
      ]
    },
    {
      id: "order", title: "The Order the Gospels Were Written",
      beats: [
        { say: "In what order were the four Gospels written? Mark was written first.",
          draw: [["clear"],
                 ["title", "t", "Order of writing"],
                 ["write", "c1", [140, 300], "Mark", { size: 72, color: "blue" }],
                 ["write", "c1b", { after: "c1", gap: 60 }, "first", { size: 56 }]] },
        { say: "Matthew used it and put out an expanded edition. That is the Gospel of Matthew.",
          draw: [["write", "c2", [140, 450], "Matt", { size: 72, color: "blue" }],
                 ["arrow", "c1", "c2"],
                 ["write", "c2b", { after: "c2", gap: 60 }, "expanded edition of Mark", { size: 56 }]] },
        { say: "Luke looked at Matthew, Mark, and other gospels, and the story didn't connect well. He wasn't happy with it, so he reorganized it and put out a revised edition. That is the Gospel of Luke.",
          draw: [["write", "c3", [140, 600], "Luke", { size: 72, color: "blue" }],
                 ["arrow", "c2", "c3"],
                 ["write", "c3b", { after: "c3", gap: 60 }, "reorganized, revised edition", { size: 56 }]] },
        { say: "And then, from a different viewpoint than the other three, focusing on the divinity of Jesus, comes the fourth Gospel, John.",
          draw: [["write", "c4", [140, 760], "John", { size: 72, color: "red" }],
                 ["arrow", "c3", "c4"],
                 ["write", "c4b", { after: "c4", gap: 60 }, "new angle: His divinity", { size: 56, color: "red" }],
                 ["box", "c4b", "red"]] }
      ]
    },
    {
      id: "messiah1", title: "Jesus in Matthew ①",
      beats: [
        { say: "In Matthew, Jesus is first of all the son of Abraham and the son of David. The Messiah had to be a descendant of Abraham, Isaac, Jacob, and Judah, and a descendant of David. Because it is the gospel for the Jews, chapter 1 starts with a genealogy.",
          draw: [["clear"],
                 ["title", "t", "Jesus in Matthew ①"],
                 ["photo", "p3", "img/p4/image4.jpg", [1100, 170, 420, 236], { tilt: 2 }],
                 ["write", "d1", [100, 290], "son of Abraham & David", { size: 60, color: "blue" }],
                 ["write", "d1b", { below: "d1", gap: 70 }, "ch. 1 genealogy = gospel for Jews", { size: 46, color: "gray" }]] },
        { say: "The Messiah born as a son of David in Bethlehem, the town of David. The Messiah who came as King of the Jews.",
          draw: [["write", "d2", [100, 470], "Bethlehem · King of Jews", { size: 60 }]] },
        { say: "The Messiah who fulfilled the prophecies of the Old Testament. There are quotations everywhere, and again and again you see the phrase, this happened to fulfill what was spoken by the prophet.",
          draw: [["write", "d3", [100, 580], "fulfills OT prophecy", { size: 60, color: "blue" }],
                 ["under", "d3", "blue"]] },
        { say: "The Messiah who calls sinners to repentance. I came to call sinners. They that be whole need not a physician, but they that are sick.",
          draw: [["write", "d4", [100, 700], "came to call sinners", { size: 60, color: "red" }],
                 ["write", "d4b", { after: "d4", gap: 40 }, "doctor for the sick", { size: 48, color: "gray" }]] },
        { say: "The Messiah who teaches with truth. He doesn't pile teaching on teaching and interpretation on interpretation like the Pharisees. He speaks the truth itself.",
          draw: [["write", "d5", [100, 820], "speaks truth itself", { size: 60, color: "green" }]] }
      ]
    },
    {
      id: "messiah2", title: "From Sin, Demons, and Disease",
      beats: [
        { say: "The Jews had always been ruled by others, so they pictured a Messiah who would save them from the oppression of great powers. National independence. But the Jesus Matthew saw was the Messiah who saves from sin.",
          draw: [["clear"],
                 ["title", "t", "From sin, demons, disease"],
                 ["write", "e1", [100, 300], "independence", { color: "gray" }],
                 ["strike", "e1"],
                 ["write", "e2", { after: "e1", gap: 110 }, "saved from sin", { color: "red" }],
                 ["arrow", "e1", "e2"],
                 ["circle", "e2"]] },
        { say: "The Messiah who defeats the power of demons. No prophet in the Old Testament is said to have defeated demons. Only when Jesus came were the demons finally exposed for what they are.",
          draw: [["write", "e3", [100, 430], "defeats power of demons", { color: "blue" }]] },
        { say: "There are two kinds of demon possession. A short stay is thoughts and temptation. A long stay is when they move in and take control.",
          draw: [["write", "e4", [160, 530], "short stay = thoughts, temptation", { size: 52 }],
                 ["write", "e5", [160, 620], "long stay = moves in, takes control", { size: 52, color: "red" }]] },
        { say: "The Messiah who saves from every disease. In the whole Old Testament, hardly anyone but Naaman was healed of leprosy. But after Jesus came, leprosy was healed like a common cold.",
          draw: [["write", "e6", [100, 760], "leprosy like a cold"]] },
        { say: "The Messiah who takes care of our food. The five loaves and two fish. He didn't just tell us not to worry about what we will eat. He actually showed us that power.",
          draw: [["write", "e7", { after: "e6", gap: 80 }, "5 loaves, 2 fish = feeds us", { size: 64, color: "green" }]] }
      ]
    },
    {
      id: "messiah3", title: "Jesus in Matthew ②",
      beats: [
        { say: "The Messiah who is Lord of the Sabbath. He corrected the wrong view of the Sabbath. The sabbath was made for man, and not man for the sabbath.",
          draw: [["clear"],
                 ["title", "t", "Jesus in Matthew ②"],
                 ["photo", "p4", "img/p4/image5.jpg", [1100, 170, 420, 236], { tilt: -2 }],
                 ["write", "f1", [100, 290], "Sabbath made for man", { size: 60, color: "red" }]] },
        { say: "The Messiah who teaches in parables. He taught so simply that even children could understand. The kingdom of heaven can't be explained except with parables.",
          draw: [["write", "f2", [100, 410], "simple parables", { size: 60, color: "blue" }],
                 ["write", "f2b", { after: "f2", gap: 40 }, "heaven: only parables explain", { size: 46, color: "gray" }]] },
        { say: "On the mountain of the Transfiguration he showed his true glory once. And just as Zechariah chapter 9, verse 9 says, he rides into Jerusalem on a donkey as King of the Jews.",
          draw: [["write", "f3", [100, 530], "Transfiguration · donkey entry", { size: 60 }],
                 ["write", "f3b", { after: "f3", gap: 40 }, "Zech 9:9", { size: 46, color: "gray" }]] },
        { say: "And he cleanses the temple. People coming from far away brought money, bought animals near the temple, and offered sacrifices. But the merchants finally came right into the temple, overcharged people, skimmed off the animals and sold them again. It was a culture that made light of God.",
          draw: [["write", "f4", [100, 660], "temple cleansed", { size: 60, color: "red" }],
                 ["box", "f4", "red"],
                 ["write", "f4b", { after: "f4", gap: 50 }, "house of prayer for all", { size: 52 }]] },
        { say: "He rebukes the hypocrites, teaches about the fall of Jerusalem and the end, and foretells his suffering. The Last Supper, the cross, the resurrection, and at the very end he gives the Great Commission, his last will.",
          draw: [["write", "f5", [100, 800], "Passion · cross · resurrection · Great Commission", { size: 52, color: "green" }],
                 ["under", "f5", "green"]] }
      ]
    },
    {
      id: "feature", title: "Features of Matthew",
      beats: [
        { say: "Here are the features of Matthew. First, it is short and concise. Of course Mark is short too, but Matthew writes briefly and to the point.",
          draw: [["clear"],
                 ["title", "t", "Features of Matthew"],
                 ["write", "g1", [100, 300], "① short & concise"]] },
        { say: "Second, it is the most printed book in human history.",
          draw: [["write", "g2", [100, 420], "② most printed book", { color: "blue" }]] },
        { say: "Third, it is arranged by topic, so the story doesn't flow. It looks as if one day he only preached, another day only told parables, another day only healed.",
          draw: [["write", "g3", [100, 540], "③ arranged by topic"],
                 ["write", "g3b", { after: "g3", gap: 40 }, "→ story doesn't flow", { size: 52, color: "gray" }]] },
        { say: "It may be the personality of Matthew, who had been a tax collector. Or it may be because the Jews had already heard and seen these things and knew them.",
          draw: [["write", "g4", [180, 640], "tax man's habit? · already known?", { size: 46, color: "gray" }]] },
        { say: "Fourth, he didn't write a single story about himself. If there is just one thing, it's that when he lists the disciples, he puts 'the tax collector' in front of his own name: Matthew the tax collector.",
          draw: [["write", "g5", [100, 780], "④ nothing about himself", { color: "red" }],
                 ["write", "g5b", { after: "g5", gap: 60 }, "only: 'tax collector' Matthew", { size: 52, color: "blue" }],
                 ["circle", "g5b", "blue"]] }
      ]
    }
  ]
};
