// John whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does.
window.BOARD = {
  scenes: [
    {
      id: "date", title: "Date and Background",
      beats: [
        { say: "The Gospel of John is one of the very last writings among the 27 books of the New Testament.",
          draw: [["title", "t", "Date and background"],
                 ["photo", "p1", "img/p4/image19.jpg", [1090, 170, 430, 242], { tilt: 2 }],
                 ["write", "a1", [100, 300], "one of the last of the 27 NT books", { size: 52, color: "red" }]] },
        { say: "John's writings were written around A.D. 90, when all the other apostles had been martyred and only the apostle John was left.",
          draw: [["write", "a2", [100, 420], "c. A.D. 90", { size: 60, color: "blue" }],
                 ["write", "a2b", { after: "a2", gap: 40 }, "only John left", { size: 56 }]] },
        { say: "Nero's persecution had passed, and in the meantime Jerusalem had been destroyed.",
          draw: [["write", "a3", [100, 540], "after Nero's persecution · fall of Jerusalem", { size: 52, color: "gray" }]] },
        { say: "And it was a time when heresy was running wild. The word for knowing, or knowledge, was translated 'gnosis,' and the Gnostics were troubling the church when John wrote.",
          draw: [["write", "a4", [100, 680], "heresy running wild", { color: "red" }],
                 ["write", "a4b", { after: "a4", gap: 90 }, "Gnosticism (gnosis = knowledge)", { size: 50, color: "blue" }],
                 ["arrow", "a4", "a4b"],
                 ["box", "a4b", "blue"]] }
      ]
    },
    {
      id: "gnosis", title: "What Is Gnosticism?",
      beats: [
        { say: "The Gnostics were dualists. They separated matter from spirit.",
          draw: [["clear"],
                 ["title", "t", "What is Gnosticism?"],
                 ["write", "b1", { at: [420, 320] }, "spirit", { anchor: "middle", size: 80, color: "blue" }],
                 ["write", "b2", { at: [1150, 320] }, "matter", { anchor: "middle", size: 80 }],
                 ["line", [800, 230], [800, 360], "gray"]] },
        { say: "They treated matter as sinful and denied creation.",
          draw: [["write", "b3", { at: [1150, 440] }, "sinful · creation denied", { anchor: "middle", size: 56, color: "red" }]] },
        { say: "So they denied the humanity of Jesus. This is Docetism. The idea that Jesus came in a body that only seemed real.",
          draw: [["write", "b4", [100, 600], "Docetism", { size: 72, color: "red" }],
                 ["write", "b4b", { after: "b4", gap: 50 }, "= seeming body → no humanity", { size: 60 }]] },
        { say: "If you do philosophy without studying the Bible, you end up in heresy.",
          draw: [["write", "b5", [100, 770], "philosophy without the Bible → heresy", { size: 60, color: "gray" }],
                 ["under", "b5", "gray"]] }
      ]
    },
    {
      id: "logos", title: "The Theology of the Logos and of Love",
      beats: [
        { say: "The theology of John's Gospel. First, it is the theology of the Logos. John chapter 1 verse 1: In the beginning was the Word, and the Word was God.",
          draw: [["clear"],
                 ["title", "t", "Theology of Logos and love"],
                 ["photo", "p2", "img/p4/image20.jpg", [1090, 170, 430, 242], { tilt: -2 }],
                 ["write", "c1", [100, 300], "\"In the beginning was the Word\"", { size: 52 }],
                 ["write", "c1b", { after: "c1", gap: 30 }, "John 1:1", { size: 44, color: "gray" }]] },
        { say: "Chapter 1 verse 14: The Word became flesh and lived among us. Jesus Christ is the Logos.",
          draw: [["write", "c2", [100, 410], "the Word became flesh", { size: 60 }],
                 ["write", "c2b", { after: "c2", gap: 50 }, "Jesus = Logos", { size: 60, color: "red" }],
                 ["circle", "c2b"]] },
        { say: "Second, it is the theology of love. The apostle Paul's theology is the theology of faith, of justification by faith.",
          draw: [["write", "c3", { at: [300, 600] }, "Paul", { anchor: "middle", size: 64, color: "blue" }],
                 ["write", "c3b", { at: [300, 700] }, "faith", { anchor: "middle", size: 72 }]] },
        { say: "Peter's theology is the theology of hope,",
          draw: [["write", "c4", { at: [800, 600] }, "Peter", { anchor: "middle", size: 64, color: "blue" }],
                 ["write", "c4b", { at: [800, 700] }, "hope", { anchor: "middle", size: 72 }]] },
        { say: "and John's theology is the theology of love. Faith is important, and hope is important, but the greatest of these is love.",
          draw: [["write", "c5", { at: [1300, 600] }, "John", { anchor: "middle", size: 64, color: "blue" }],
                 ["write", "c5b", { at: [1300, 700] }, "love", { anchor: "middle", size: 88, color: "red" }],
                 ["box", "c5b", "red"],
                 ["write", "c6", { at: [800, 820] }, "the greatest is love", { anchor: "middle", size: 52, color: "green" }]] }
      ]
    },
    {
      id: "divine", title: "The Divinity of Jesus",
      beats: [
        { say: "Third, John stresses the divinity of Jesus. Jesus is not just a prophet with great power.",
          draw: [["clear"],
                 ["title", "t", "The divinity of Jesus"],
                 ["write", "d1", [100, 300], "powerful prophet", { color: "gray" }],
                 ["strike", "d1", "gray"]] },
        { say: "John is telling us that the whole divinity of God was in Jesus.",
          draw: [["write", "d2", { after: "d1", gap: 110 }, "fully divine", { color: "red" }],
                 ["arrow", "d1", "d2"]] },
        { say: "Jesus' words and miracles are important. But more important than those is who this person is, the one who does such mighty things.",
          draw: [["write", "d3", [100, 440], "more than miracles → who is He?", { color: "blue" }],
                 ["under", "d3", "blue"]] },
        { say: "In the end, John leads all the way to Thomas's confession: My Lord and my God.",
          draw: [["write", "d4", [100, 580], "Thomas: \"My Lord and my God\"", { size: 60, color: "green" }]] },
        { say: "God, who was the Logos from the beginning, became flesh. He is the Son of God who came from above to this earth. That is why Jesus says many things no ordinary person could say, and John carefully gathered them.",
          draw: [["write", "d5", [100, 720], "Son of God from above", { size: 60, color: "red" }],
                 ["box", "d5", "red"]] }
      ]
    },
    {
      id: "egoeimi", title: "Ego Eimi (I Am)",
      beats: [
        { say: "Ego eimi. I am something. Ordinary people don't talk that way.",
          draw: [["clear"],
                 ["title", "t", "Ego Eimi (I am ...)"],
                 ["photo", "p3", "img/p4/image21.jpg", [1110, 180, 410, 231], { tilt: 2 }],
                 ["write", "e0", [100, 290], "not how ordinary people talk", { size: 52, color: "gray" }]] },
        { say: "I am the bread of life. I am the light of the world. I am the door of the sheep. I am the good shepherd.",
          draw: [["write", "e1", [100, 400], "bread of life", { size: 56, color: "blue" }],
                 ["write", "e2", [100, 500], "light of world", { size: 56, color: "blue" }],
                 ["write", "e3", [100, 600], "sheep's door", { size: 56, color: "blue" }],
                 ["write", "e4", [100, 700], "good shepherd", { size: 56, color: "blue" }]] },
        { say: "I am the resurrection and the life. I am the way, the truth, and the life. I am the true vine.",
          draw: [["write", "e5", [520, 500], "resurrection + life", { size: 56, color: "blue" }],
                 ["write", "e6", [520, 600], "way, truth, life", { size: 56, color: "blue" }],
                 ["write", "e7", [520, 700], "true vine", { size: 56, color: "blue" }],
                 ["write", "e8", [520, 400], "I am ...!", { size: 60, color: "red" }],
                 ["circle", "e8"]] },
        { say: "No one else could say these things. John sensed that Jesus' words carried a self-revealing, self-proclaiming quality.",
          draw: [["write", "e9", [100, 820], "John sensed: self-revelation · self-proclamation", { size: 52, color: "green" }]] }
      ]
    },
    {
      id: "signs", title: "Seven Signs John Chose",
      beats: [
        { say: "John chapter 21 verse 25 says that if everything Jesus did were written down one by one, even the world itself could not hold the books. John seems not very interested in miracles, yet he records seven very distinctive ones.",
          draw: [["clear"],
                 ["title", "t", "Seven signs John chose"],
                 ["photo", "p4", "img/p4/image22.jpg", [1110, 180, 410, 231], { tilt: -2 }],
                 ["write", "f0", [100, 290], "world couldn't hold the books (John 21:25)", { size: 46, color: "gray" }]] },
        { say: "Turning water into wine goes beyond quality. The five loaves and two fish go beyond quantity.",
          draw: [["write", "f1", [100, 400], "water → wine: quality", { size: 56 }],
                 ["write", "f2", [100, 490], "5 loaves, 2 fish: quantity", { size: 56 }]] },
        { say: "He heals the royal official's son without even going there. Beyond space. At Bethesda He heals a man who had been sick for 38 years. Beyond time.",
          draw: [["write", "f3", [100, 580], "official's son: space", { size: 56 }],
                 ["write", "f4", [100, 670], "Bethesda, 38 yrs: time", { size: 56 }]] },
        { say: "Walking on water goes beyond the laws of nature. For the man born blind, He says it was not because of anyone's sin, but for the glory of God, and heals him. Beyond fate.",
          draw: [["write", "f5", [700, 400], "on water: nature", { size: 52 }],
                 ["write", "f6", [700, 490], "born blind: fate", { size: 52 }]] },
        { say: "Last of all, He raises Lazarus from the dead. Beyond death. He said, Lazarus, come out. If He had said, dead ones, rise up, there would have been real trouble.",
          draw: [["write", "f7", [700, 580], "Lazarus: death", { size: 56, color: "red" }],
                 ["circle", "f7"]] },
        { say: "If He goes beyond all of these, who should we believe Him to be? John quietly asks his readers this, and leads the story all the way to Thomas's confession.",
          draw: [["write", "f8", [100, 800], "Beyond all = who is He?", { size: 64, color: "blue" }],
                 ["under", "f8", "blue"]] }
      ]
    },
    {
      id: "only1", title: "Stories Only in John",
      beats: [
        { say: "John stayed on to the end, even after all the apostles had been martyred. He looked over the other Gospels and filled in what was missing.",
          draw: [["clear"],
                 ["title", "t", "Stories only in John"],
                 ["photo", "p5", "img/p4/image23.jpg", [1110, 180, 410, 231], { tilt: 2 }],
                 ["write", "g1", [100, 300], "filled in the gaps", { size: 60, color: "blue" }]] },
        { say: "The wedding at Cana in Galilee, and Nicodemus coming to see Jesus. There we find a deep conversation about new birth and God's love.",
          draw: [["write", "g2", [100, 420], "Cana wedding · Nicodemus (new birth)", { size: 56 }]] },
        { say: "Raising Lazarus from the dead was a huge event, yet the other Gospels don't have it. Lazarus was probably still alive at that time.",
          draw: [["write", "g3", [100, 530], "Lazarus", { size: 60, color: "red" }],
                 ["write", "g3b", { after: "g3", gap: 40 }, "← still alive then?", { size: 48, color: "gray" }]] },
        { say: "The parable of the vine. Matthew, who usually collects parables so well, left it out.",
          draw: [["write", "g4", [100, 640], "the vine", { size: 56 }],
                 ["write", "g4b", { after: "g4", gap: 40 }, "Matthew left it out", { size: 48, color: "gray" }]] },
        { say: "The high priestly prayer. Sixty years had passed, and he still remembered all of it.",
          draw: [["write", "g5", [100, 760], "high priestly prayer → remembered 60 yrs later", { size: 52, color: "green" }]] }
      ]
    },
    {
      id: "thomas", title: "Thomas and Peter",
      beats: [
        { say: "Thomas was not a man full of doubt. He was a man who doubted once. He was very thorough by nature, a believer who never believed carelessly. According to tradition, he worked as a carpenter with Jesus.",
          draw: [["clear"],
                 ["title", "t", "Thomas and Peter"],
                 ["write", "h1", [100, 300], "doubting Thomas", { color: "gray" }],
                 ["strike", "h1", "gray"],
                 ["write", "h2", { after: "h1", gap: 110 }, "thorough Thomas", { color: "blue" }],
                 ["arrow", "h1", "h2"]] },
        { say: "Thomas, come here and put your hand here. Don't be unbelieving, but believing. And Thomas immediately said, My Lord and my God.",
          draw: [["write", "h3", [100, 430], "\"My Lord and my God!\"", { size: 60, color: "red" }]] },
        { say: "Honest doubt is truer than a half-hearted confession of faith. Thomas was the first to recognize Jesus as God.",
          draw: [["write", "h4", [100, 550], "half-hearted confession < honest doubt", { size: 60, color: "green" }],
                 ["under", "h4", "green"]] },
        { say: "Peter's confession of love. Jesus asked him three times. Because of one failure, Peter had even denied his true love for Jesus. This was Jesus' love, letting Peter say what he most wanted to say.",
          draw: [["write", "h5", [100, 680], "asked 3 times = a chance for Peter to say it", { size: 56 }]] },
        { say: "Even in this moving scene, John counts every fish. Not just a whole lot, but 153 fish.",
          draw: [["write", "h6", [100, 800], "153 fish", { size: 64, color: "red" }],
                 ["write", "h6b", { after: "h6", gap: 40 }, "← John counted them all", { size: 48, color: "gray" }],
                 ["circle", "h6"]] }
      ]
    },
    {
      id: "above", title: "Christ Who Came from Above",
      beats: [
        { say: "John chapter 8 verse 23: You are from beneath. I am from above. John says more than twenty times that Jesus came from above.",
          draw: [["clear"],
                 ["title", "t", "Christ who came from above"],
                 ["write", "i1", [100, 300], "\"I am from above\"", { size: 60, color: "red" }],
                 ["write", "i1b", { after: "i1", gap: 40 }, "John 8:23 · 20+ times", { size: 46, color: "gray" }]] },
        { say: "The woman at the well in Samaria. And, he who is without sin, let him throw the first stone.",
          draw: [["write", "i2", [100, 420], "Samaritan woman · sinless throws first stone", { size: 56 }]] },
        { say: "The words about the Holy Spirit, the Comforter. In the other Gospels this is faint, only briefly mentioned in Luke. But John treats it as very important.",
          draw: [["write", "i3", [100, 540], "Holy Spirit, the Comforter", { size: 60, color: "blue" }],
                 ["box", "i3", "blue"]] },
        { say: "The new commandment. After three years of teaching, He gives the decisive lesson: love one another. But the other disciples didn't hear it at all. They were probably too busy arguing about who was greatest, and who would sit on the left and the right.",
          draw: [["write", "i4", [100, 660], "New command: love one another", { size: 56, color: "red" }],
                 ["write", "i4b", { after: "i4", gap: 40 }, "(too busy arguing)", { size: 46, color: "gray" }]] },
        { say: "Unless a grain of wheat falls into the earth and dies, it remains alone, but if it dies, it bears much fruit. And He washed the disciples' feet.",
          draw: [["write", "i5", [100, 790], "grain of wheat · washing feet", { size: 60, color: "green" }]] }
      ]
    },
    {
      id: "detail", title: "Careful John",
      beats: [
        { say: "Nathanael said, Can any good thing come out of Nazareth? But when he actually met Jesus, he said, You are the Son of God. You are King of Israel.",
          draw: [["clear"],
                 ["title", "t", "Careful John"],
                 ["write", "j1", [100, 300], "Nathanael", { size: 60, color: "blue" }],
                 ["write", "j1b", { after: "j1", gap: 40 }, "\"Nazareth?\" → \"Son of God!\"", { size: 52 }]] },
        { say: "When Mary poured out the perfume, Judas criticized her, saying she should have sold it to help the poor. John records: he said this, not because he cared for the poor, but because he was a thief.",
          draw: [["write", "j2", [100, 420], "Judas Iscariot = thief with the money bag", { size: 56, color: "red" }]] },
        { say: "John always recorded the time too. It was about the sixth hour. The ninth hour.",
          draw: [["write", "j3", [100, 530], "times noted: 6th hour · 9th", { size: 56 }]] },
        { say: "At the news of the resurrection, Peter and John ran out. John looked into the tomb so closely that he writes the linen cloths were lying there, and the cloth that had been around His head was folded up in a place by itself.",
          draw: [["write", "j4", [100, 640], "linen cloths · head cloth folded apart", { size: 56, color: "blue" }]] },
        { say: "Even so, not everything Jesus did was written down. Four Gospels: God judged that this was enough to know fully who Jesus is. So we too should study all four Gospels well and evenly.",
          draw: [["write", "j5", [100, 790], "4 Gospels are enough → study all four", { size: 60, color: "red" }],
                 ["under", "j5"]] }
      ]
    }
  ]
};
