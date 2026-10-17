// Luke whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does.
window.BOARD = {
  scenes: [
    {
      id: "luke", title: "Who Was Luke?",
      beats: [
        { say: "Okay, let's look at what makes the Gospel of Luke special. First, it was written by a Gentile. Luke was a Greek.",
          draw: [["title", "t", "Who Was Luke?"],
                 ["photo", "p1", "img/p4/image12.jpg", [1090, 170, 430, 242], { tilt: 2 }],
                 ["write", "a1", [100, 290], "written by a Gentile", { size: 56, color: "red" }],
                 ["write", "a1b", { after: "a1", gap: 30 }, "Luke, a Greek", { size: 52 }],
                 ["circle", "a1b"]] },
        { say: "Luke's said to have been a doctor, and a historian too. He wrote it somewhere around the years sixty to sixty-four.",
          draw: [["write", "a2", [100, 400], "physician · historian", { size: 56, color: "blue" }],
                 ["write", "a2b", { after: "a2", gap: 50 }, "written c. A.D. 60~64", { size: 46, color: "gray" }]] },
        { say: "Luke doesn't put himself forward. Titus was his brother, and he never once mentions it. He writes briefly, but in careful detail.",
          draw: [["write", "a3", [100, 510], "keeps himself hidden", { size: 56 }],
                 ["write", "a3b", { after: "a3", gap: 40 }, "even though Titus was his brother!", { size: 46, color: "gray" }]] },
        { say: "Colossians chapter 4 verse 14. Luke the beloved physician, and Demas greet you. Luke, the beloved physician.",
          draw: [["write", "a4", [100, 620], "Luke, the beloved physician", { size: 56, color: "red" }],
                 ["write", "a4b", { after: "a4", gap: 40 }, "Col 4:14", { size: 46, color: "gray" }]] },
        { say: "Luke wrote the Gospel of Luke and Acts. Think about that. A Gentile wrote Scripture. And the name Lucas means, to shine.",
          draw: [["write", "a5", [100, 730], "Luke + Acts", { size: 56, color: "blue" }],
                 ["write", "a5b", { after: "a5", gap: 50 }, "Lucas = to shine", { size: 52, color: "green" }]] },
        { say: "He loved history. In Luke, there are lots of verses you just couldn't write without having read 1 and 2 Chronicles.",
          draw: [["write", "a6", [100, 835], "loved history → verses that need 1 & 2 Chr behind them", { size: 44, color: "gray" }]] }
      ]
    },
    {
      id: "why", title: "Why He Wrote (Luke 1:1~4)",
      beats: [
        { say: "Luke chapter 1, verses 1 to 4, tell us why he wrote. Concerning the things which have been fulfilled among us. See, this man cares about facts. He's not trying to dress it up like a myth.",
          draw: [["clear"],
                 ["title", "t", "Why He Wrote (Luke 1:1~4)"],
                 ["write", "c1", [100, 300], "about facts", { color: "red" }],
                 ["write", "c1b", { after: "c1", gap: 80 }, "myth-like decoration", { size: 56, color: "gray" }],
                 ["strike", "c1b", "gray"]] },
        { say: "He says many had already taken pen in hand to set out an account. So why write another one? Because he wasn't satisfied with the earlier ones.",
          draw: [["write", "c2", [100, 430], "many have written", { size: 60 }],
                 ["write", "c2b", { after: "c2", gap: 110 }, "why again? not satisfied", { size: 60, color: "red" }],
                 ["arrow", "c2", "c2b"]] },
        { say: "So he traced everything from the very beginning, looked into it carefully, and some things he worked out by reasoning it through.",
          draw: [["write", "c3", [100, 560], "from the source · carefully · by inference", { size: 56, color: "blue" }],
                 ["under", "c3", "blue"]] },
        { say: "And it seemed good to him to write it in order to most excellent Theophilus, so that you might know the certainty of the things you were taught.",
          draw: [["write", "c4", [100, 700], "to most excellent Theophilus · in order", { size: 52 }],
                 ["write", "c4b", { below: "c4", gap: 70 }, "the certainty of what you were taught", { size: 48, color: "green" }]] }
      ]
    },
    {
      id: "order", title: "In Order? To Compare",
      beats: [
        { say: "But here's the thing. He didn't write in strict time order. When there's a similar event, he pulls it in and puts it right alongside.",
          draw: [["clear"],
                 ["title", "t", "In Order? To Compare"],
                 ["write", "d1", [100, 300], "not strictly chronological", { size: 56 }],
                 ["write", "d1b", { after: "d1", gap: 40 }, "similar events pulled in", { size: 46, color: "gray" }]] },
        { say: "For example, in chapter 7, when Mary pours out the perfume, the point isn't the perfume. It's comparing the sinner and the Pharisee. Simon, and Mary.",
          draw: [["write", "d2", [100, 430], "ch. 7 perfume", { size: 60, color: "blue" }],
                 ["write", "d2b", { after: "d2", gap: 40 }, "= Simon versus Mary", { size: 60, color: "red" }],
                 ["under", "d2b"]] },
        { say: "Simon didn't even give him water to wash his feet,",
          draw: [["write", "d3", { at: [420, 620] }, "Simon", { anchor: "middle", size: 76 }],
                 ["write", "d3b", { at: [420, 740] }, "no water for feet", { anchor: "middle", size: 56, color: "gray" }]] },
        { say: "but Mary wet his feet with her tears, and wiped them with her hair.",
          draw: [["write", "vs", { at: [800, 620] }, "vs", { anchor: "middle", size: 56, color: "gray" }],
                 ["write", "d4", { at: [1150, 620] }, "Mary", { anchor: "middle", size: 76, color: "red" }],
                 ["write", "d4b", { at: [1150, 740] }, "tears on feet, wiped with hair", { anchor: "middle", size: 48, color: "green" }],
                 ["circle", "d4"]] }
      ]
    },
    {
      id: "only1", title: "Only in Luke",
      beats: [
        { say: "Some events show up only in Luke. First, the birth of John the Baptist. The other Gospels start with John already crying out, but Luke tells it in detail, even the story of how he was conceived.",
          draw: [["clear"],
                 ["title", "t", "Only in Luke"],
                 ["photo", "p2", "img/p4/image13.jpg", [1110, 190, 410, 231], { tilt: -2 }],
                 ["write", "e1", [100, 300], "birth of John the Baptist", { size: 60, color: "blue" }]] },
        { say: "He also gives the political backdrop for when John the Baptist appeared. In the fifteenth year of Tiberius Caesar, when Pontius Pilate was governor, Herod was tetrarch, and Annas and Caiaphas were high priests, the word of God came to John.",
          draw: [["write", "e2", [100, 410], "political setting (Luke 3:1~2)", { size: 56 }],
                 ["write", "e2b", { below: "e2", gap: 66 }, "Tiberius · Pilate · Herod · Annas & Caiaphas", { size: 44, color: "gray" }]] },
        { say: "Why did Joseph and Mary go to Bethlehem? Because Caesar Augustus ordered a census. It was a head tax.",
          draw: [["write", "e3", [100, 580], "why Bethlehem = census (poll tax)", { size: 56 }]] },
        { say: "In Matthew, it's only the wise men from the East who worship him. But when Luke looked into it, the shepherds worshiped him too.",
          draw: [["write", "e4", [100, 690], "only wise men?", { size: 56, color: "gray" }],
                 ["write", "e4b", { after: "e4", gap: 110 }, "shepherds too", { size: 60, color: "green" }],
                 ["arrow", "e4", "e4b"]] },
        { say: "In Matthew, it looks like they fled right after he was born. But he was circumcised on the eighth day, and the purification was done too. And that trip to Jerusalem when he was twelve, coming of age, when they lost Jesus and found him again? Luke's the one who dug that up too.",
          draw: [["write", "e5", [100, 810], "circumcised day 8 · story at age 12", { size: 60, color: "red" }]] }
      ]
    },
    {
      id: "repent", title: "Genealogy and Repentance",
      beats: [
        { say: "Luke takes the family line past Abraham, all the way back to the source. Matthew's genealogy comes down,",
          draw: [["clear"],
                 ["title", "t", "Genealogy and Repentance"],
                 ["write", "f1", { at: [420, 300] }, "Matthew", { anchor: "middle", size: 72, color: "blue" }],
                 ["write", "f1b", { at: [420, 400] }, "going down ↓", { anchor: "middle", size: 56 }]] },
        { say: "and Luke's genealogy goes up.",
          draw: [["write", "f2", { at: [1150, 300] }, "Luke", { anchor: "middle", size: 72, color: "red" }],
                 ["write", "f2b", { at: [1150, 400] }, "going up ↑", { anchor: "middle", size: 56 }],
                 ["box", "f2b", "red"]] },
        { say: "When John the Baptist said, repent, soldiers and tax collectors asked him, What do you mean, repent?",
          draw: [["write", "f3", [100, 540], "\"What does 'repent' mean?\"", { size: 60 }]] },
        { say: "If you have two coats, share. Tax collectors, don't collect more than you're told. Soldiers, don't extort, don't accuse anyone falsely, and be content with your pay.",
          draw: [["write", "f4", [140, 650], "2 coats → share · tax men → no skimming · soldiers → be content", { size: 44, color: "gray" }]] },
        { say: "So he showed repentance as a real, concrete change in how you live.",
          draw: [["write", "f5", [100, 790], "repent = real change of life", { size: 64, color: "red" }],
                 ["under", "f5"]] }
      ]
    },
    {
      id: "sermon", title: "First Sermon in Nazareth",
      beats: [
        { say: "Luke was curious about things like this too. What was Jesus' first sermon? In Matthew, it looks like the Sermon on the Mount comes first. But when Luke looked into it, that wasn't the case.",
          draw: [["clear"],
                 ["title", "t", "First Sermon in Nazareth"],
                 ["write", "g1", [100, 300], "Sermon on the Mount first?", { size: 56, color: "gray" }],
                 ["strike", "g1", "gray"],
                 ["write", "g2", { after: "g1", gap: 100 }, "Nazareth synagogue", { size: 60, color: "red" }],
                 ["arrow", "g1", "g2"]] },
        { say: "The text was Isaiah chapter 61, and the title was, the year of the Lord's favor.",
          draw: [["write", "g3", [100, 430], "Isaiah 61 · year of the Lord's favor", { size: 60, color: "blue" }]] },
        { say: "That sermon stirred people up, and they nearly killed him. He usually didn't use his power for himself, but that time, he barely got away by his power.",
          draw: [["write", "g4", [100, 560], "nearly killed → escaped by power", { size: 60 }]] },
        { say: "Jesus didn't preach to please the people of his day. The Pharisees, the scribes, the rich, the establishment, they didn't say amen. They ground their teeth. And the response was always the same. They plotted to kill him.",
          draw: [["write", "g5", [100, 700], "no crowd-pleasing sermons", { size: 56 }],
                 ["write", "g5b", { after: "g5", gap: 40 }, "→ teeth grinding", { size: 56, color: "red" }],
                 ["circle", "g5b"]] }
      ]
    },
    {
      id: "seventy", title: "The Seventy and Mary",
      beats: [
        { say: "And it wasn't only the twelve disciples. There were seventy. Jesus' disciples were like circles inside circles. Right in the center, Peter, James, and John.",
          draw: [["clear"],
                 ["title", "t", "The Seventy and Mary"],
                 ["write", "h1", { at: [800, 300] }, "Peter · James · John", { anchor: "middle", size: 56, color: "red" }]] },
        { say: "Around them, the twelve. And around them, the seventy.",
          draw: [["write", "h2", { at: [800, 410] }, "the Twelve", { anchor: "middle", size: 64, color: "blue" }],
                 ["write", "h3", { at: [800, 530] }, "the Seventy", { anchor: "middle", size: 76, color: "green" }],
                 ["box", "h3", "green"]] },
        { say: "The parable of the Good Samaritan. You'd think everyone recorded it, right? But only Luke does.",
          draw: [["write", "h4", [100, 690], "Good Samaritan = only Luke", { size: 56 }]] },
        { say: "Mary, sitting at Jesus' feet and listening to the word. He said hearing the word matters more than working, more even than making Jesus a meal.",
          draw: [["write", "h5", [100, 810], "working < hearing the word", { size: 60, color: "red" }],
                 ["under", "h5"]] }
      ]
    },
    {
      id: "margin", title: "Luke's Concerns",
      beats: [
        { say: "Luke makes a point of including lots of women, and he gives their names. Mary, Joanna, Susanna.",
          draw: [["clear"],
                 ["title", "t", "Luke's Concerns"],
                 ["write", "i1", [100, 300], "women named: Mary · Joanna · Susanna", { size: 56 }]] },
        { say: "He cares a lot about Samaritans, tax collectors, prostitutes, the poor, and the sick. Jesus healed ten lepers, but only one came back to say thank you. And that man was a Samaritan.",
          draw: [["write", "i2", [100, 420], "Samaritans · tax men · prostitutes · poor · sick", { size: 50, color: "blue" }],
                 ["write", "i2b", [160, 520], "10 lepers, 1 came back = a Samaritan", { size: 46, color: "gray" }]] },
        { say: "The parable of the prodigal son. Now, the son who left home and came back isn't the real prodigal. The real prodigal is the son who stayed home and was jealous of his brother coming back.",
          draw: [["write", "i3", [100, 660], "real prodigal = jealous son at home", { size: 60, color: "red" }],
                 ["under", "i3"]] },
        { say: "The rich man and Lazarus. Here we learn that when people die, they go to Hades or to Paradise, and there's a gap between them nobody can cross. It's a parable, but it's not just a parable.",
          draw: [["write", "i4", [100, 800], "Hades | Paradise: a gap no one crosses", { size: 56 }]] }
      ]
    },
    {
      id: "zacchaeus", title: "Zacchaeus and Two Prayers",
      beats: [
        { say: "Read the parable of the unjust steward in a modern translation. It's not praising him. It's actually making fun of him.",
          draw: [["clear"],
                 ["title", "t", "Zacchaeus and Two Prayers"],
                 ["write", "j1", [100, 300], "unjust steward = sarcasm", { size: 56, color: "blue" }]] },
        { say: "The unjust judge and the widow who kept bothering him. And Zacchaeus, who climbed up the mulberry tree.",
          draw: [["write", "j2", [100, 420], "judge & widow · Zacchaeus", { size: 56 }]] },
        { say: "Except it wasn't a mulberry tree. It was a sycamore fig.",
          draw: [["photo", "p3", "img/p4/image16.jpg", [1090, 170, 430, 242], { tilt: 2, caption: "sycamore fig" }],
                 ["write", "j3", [100, 540], "mulberry", { color: "gray" }],
                 ["strike", "j3", "gray"],
                 ["write", "j3b", { after: "j3", gap: 110 }, "sycamore fig", { color: "green" }],
                 ["arrow", "j3", "j3b"]] },
        { say: "The offering of the rich, and the widow's two little coins. And the Pharisee who prayed, I thank you that I'm not like this tax collector.",
          draw: [["write", "j4", [100, 680], "Pharisee: \"thank you I'm not like him\"", { size: 52, color: "gray" }]] },
        { say: "The tax collector wouldn't even lift his face. He beat his chest and said, I'm a sinner. And God counted the tax collector as the more righteous one.",
          draw: [["write", "j5", [100, 800], "tax collector: \"I am a sinner\"", { size: 60, color: "red" }],
                 ["box", "j5", "red"]] }
      ]
    },
    {
      id: "pen", title: "Luke the Writer",
      beats: [
        { say: "The fig tree planted in the vineyard. For three years the owner waited, and no fruit. So he said, cut it down. But the gardener said, leave it one more year. I'll dig around it and fertilize it, and if it still doesn't bear fruit, then cut it down.",
          draw: [["clear"],
                 ["title", "t", "Luke the Writer"],
                 ["write", "k1", [100, 300], "3 yrs, no fruit", { size: 60, color: "gray" }],
                 ["write", "k1b", { after: "k1", gap: 110 }, "leave it this year too", { size: 60, color: "green" }],
                 ["arrow", "k1", "k1b"]] },
        { say: "The two disciples on the road to Emmaus, and the risen Lord going up to heaven. You'd expect every Gospel writer to record these, wouldn't you? But only Luke does.",
          draw: [["write", "k2", [100, 420], "Emmaus · the Ascension", { size: 60 }]] },
        { say: "The songs of praise from the angels, Mary, Zechariah, Elizabeth, and Simeon. A lot of our hymns and anthems come from Luke. Even The First Noel came from here.",
          draw: [["write", "k3", [100, 540], "songs → hymns (The First Noel)", { size: 56, color: "blue" }]] },
        { say: "He healed a man with dropsy, that's a bad swelling, and he raised the dead son of the widow of Nain.",
          draw: [["write", "k4", [100, 650], "dropsy (swelling) · widow of Nain's son", { size: 52 }]] },
        { say: "So Luke has everything in the earlier Gospels, plus more than thirty extra stories, and it's still just twenty-four chapters. It's actually shorter than Matthew. Luke was a remarkable writer.",
          draw: [["write", "k5", [100, 800], "30+ stories added, still 24 ch.", { size: 60, color: "red" }],
                 ["write", "k5b", { after: "k5", gap: 50 }, "= what a pen!", { size: 64, color: "green" }],
                 ["circle", "k5b", "green"]] }
      ]
    }
  ]
};
