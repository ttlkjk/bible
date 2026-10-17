// Hebrews whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does.
window.BOARD = {
  scenes: [
    {
      id: "purpose", title: "Why It Was Written",
      beats: [
        { say: "So, let's start with why Hebrews was written, and who wrote it. And honestly? We still don't really know who wrote it.",
          draw: [["title", "t", "Why Hebrews was written"],
                 ["photo", "p1", "img/p4/image83.jpg", [1120, 200, 400, 225], { tilt: 2.5 }],
                 ["write", "a1", [120, 290], "Author:", { size: 56, color: "gray" }],
                 ["write", "a2", { after: "a1", gap: 24 }, "still unknown", { size: 56 }]] },
        { say: "It's a letter to the Hebrews. It was written to Jews who had come to believe in Jesus, but then, when persecution came, went back to Judaism.",
          draw: [["write", "a3", [120, 410], "came to Jesus"],
                 ["write", "a4", { after: "a3", gap: 110 }, "persecution", { color: "red" }],
                 ["arrow", "a3", "a4"],
                 ["write", "a5", { below: "a3", gap: 110 }, "back to Judaism", { color: "red" }],
                 ["arrow", "a4", "a5"]] },
        { say: "So to win these people back, the writer of Hebrews decided to compare Judaism and Christianity.",
          draw: [["write", "a6", [120, 660], "Judaism vs. Christianity = compare", { color: "blue" }],
                 ["box", "a6", "blue"]] },
        { say: "And the point is, in every way, Christianity is better. So come back to Christ.",
          draw: [["write", "a7", [120, 800], "Come back to Christ!", { size: 72, color: "red" }],
                 ["under", "a7"]] }
      ]
    },
    {
      id: "verses", title: "A Few Key Verses",
      beats: [
        { say: "Now, when you think of Hebrews, some famous key verses come to mind, right? Can you think of any?",
          draw: [["clear"],
                 ["title", "t", "Famous key verses"],
                 ["write", "b0", [120, 280], "Any come to mind?", { size: 52, color: "gray" }]] },
        { say: "Now faith is the substance of things hoped for, the evidence of things not seen. Or, it is appointed unto men once to die, but after this the judgment.",
          draw: [["write", "b1", [120, 390], "faith = substance of things hoped for", { size: 52 }],
                 ["write", "b2", [120, 490], "appointed once to die", { size: 56 }]] },
        { say: "The word of God is quick, and powerful, and sharper than any two-edged sword. That's a famous one too.",
          draw: [["write", "b3", [120, 590], "word sharper than any two-edged sword", { size: 52 }]] },
        { say: "A key verse is supposed to be so important that without it, you can't understand the whole book. But here's the thing. Take all these verses out of Hebrews, and what Hebrews is saying isn't hurt one bit.",
          draw: [["write", "b4", [1180, 490], "take all out", { size: 56, color: "red" }],
                 ["write", "b5", { below: "b4", gap: 90 }, "no damage", { size: 64, color: "red" }],
                 ["box", "b5"]] },
        { say: "So let go of the kind of faith that picks out a few key verses and walks around reciting them. You've got to know the whole Bible rightly, and let Scripture explain Scripture.",
          draw: [["write", "b6", [120, 760], "memorizing verses", { color: "gray" }],
                 ["strike", "b6", "gray"],
                 ["write", "b7", { after: "b6", gap: 110 }, "Scripture interprets Scripture", { size: 56, color: "blue" }],
                 ["arrow", "b6", "b7"],
                 ["under", "b7", "blue"]] }
      ]
    },
    {
      id: "better1", title: "Christ Is Better",
      beats: [
        { say: "So here's the Christ Hebrews shows us. First, Christ is greater than the prophets. God sent prophet after prophet, and it didn't work, so in the last days Jesus came, didn't he? Put all the prophets together, and they still don't measure up to Jesus.",
          draw: [["clear"],
                 ["title", "t", "Christ is better"],
                 ["write", "c1", [120, 290], "① prophets", { color: "blue" }],
                 ["write", "c1b", [520, 290], "all of them together < Jesus", { size: 56 }]] },
        { say: "Second, Christ is better than the angels. Angels are just ministering spirits, but Jesus is the firstborn Son.",
          draw: [["write", "c2", [120, 420], "② angels", { color: "blue" }],
                 ["write", "c2b", [520, 420], "ministering spirits < firstborn", { size: 56 }]] },
        { say: "Third, Christ is better than Moses. Moses was only a servant in charge of God's house. Jesus is the Son of that house.",
          draw: [["write", "c3", [120, 550], "③ Moses", { color: "blue" }],
                 ["write", "c3b", [520, 550], "servant in the house < Son", { size: 56 }]] },
        { say: "Fourth, Christ is greater than Joshua. Think about it. If Joshua had given them true rest, would David have talked later about another rest?",
          draw: [["write", "c4", [120, 680], "④ Joshua", { color: "blue" }],
                 ["write", "c4b", [520, 680], "David speaks of another rest", { size: 56 }]] },
        { say: "The real rest is the one Jesus gives. It's the eternal rest we'll enjoy in heaven after we die.",
          draw: [["write", "c5", [520, 800], "real rest = eternal rest in heaven", { size: 56, color: "red" }],
                 ["under", "c5"]] }
      ]
    },
    {
      id: "priest", title: "The Eternal High Priest",
      beats: [
        { say: "Fifth, Melchizedek, a priest greater than Aaron. Aaron and the priests stood in the middle too, but they had sins of their own. They barely got atoned for themselves before going into the sanctuary, and they kept dying and being replaced. They were shaky priests.",
          draw: [["clear"],
                 ["title", "t", "⑤ Aaron < Melchizedek"],
                 ["write", "d1", [120, 290], "Aaron:", { color: "gray" }],
                 ["write", "d1b", { after: "d1", gap: 30 }, "own sins · keeps dying, replaced", { size: 56 }]] },
        { say: "But our Jesus is the eternal high priest after the order of Melchizedek. And Melchizedek was so great that Abraham gave him a tenth.",
          draw: [["write", "d2", [120, 410], "Jesus = order of Melchizedek", { color: "blue" }],
                 ["write", "d2b", [160, 500], "received tithes from Abraham", { size: 48, color: "gray" }]] },
        { say: "Above Aaron is Levi. Above Levi are Jacob, Isaac, and Abraham. And that Abraham knelt before Melchizedek and was blessed by him. That's what chapter 7 is all about.",
          draw: [["write", "d3", [120, 620], "Aaron < Levi < Jacob · Isaac < Abraham < Melchizedek", { size: 50 }]] },
        { say: "Jesus isn't a one-time use. He has no weakness, no flaw, no blemish. He doesn't die, and he isn't replaced. He's the eternal high priest.",
          draw: [["write", "d4", [120, 770], "eternal high priest", { size: 72, color: "red" }],
                 ["circle", "d4"],
                 ["write", "d5", { after: "d4", gap: 60 }, "spotless · undying · unchanging", { size: 46, color: "gray" }]] }
      ]
    },
    {
      id: "temple", title: "The Temple and the Precious Blood",
      beats: [
        { say: "Sixth, Christ is better than the temple. What you have isn't the true temple. It was built after the pattern Moses saw on the mountain. It's just a model house, a copy.",
          draw: [["clear"],
                 ["title", "t", "⑥ Temple · ⑦ Blood"],
                 ["write", "e1", [120, 290], "earthly temple = model house", { size: 56, color: "gray" }],
                 ["write", "e2", { after: "e1", gap: 110 }, "real one in heaven", { size: 56, color: "blue" }],
                 ["arrow", "e1", "e2"]] },
        { say: "The real temple is in heaven, where our Jesus went in. Jesus entered that real Most Holy Place once, for all.",
          draw: [["write", "e3", { at: [1190, 390] }, "once for all, Most Holy Place", { anchor: "middle", size: 48, color: "blue" }]] },
        { say: "Seventh, precious blood, better than the blood of goats or calves. Animal blood doesn't take sin away. It just reminds you of sin.",
          draw: [["write", "e4", [120, 540], "blood of goats · calves", { color: "gray" }],
                 ["write", "e5", { after: "e4", gap: 60 }, "only a reminder of sin", { size: 56 }]] },
        { say: "All it does is give a one-year suspended sentence, year after year, for sins that deserve death.",
          draw: [["write", "e6", [160, 640], "= suspended sentence, one year at a time", { size: 52, color: "gray" }]] },
        { say: "The only thing that truly atones for sin is the blood of God's only begotten Son, without spot and without blemish.",
          draw: [["write", "e7", [120, 790], "precious blood of the Son", { size: 68, color: "red" }],
                 ["box", "e7"],
                 ["write", "e8", { after: "e7", gap: 60 }, "truly atones for sin", { size: 56, color: "green" }]] }
      ]
    },
    {
      id: "comeback", title: "Come Back",
      beats: [
        { say: "Eighth, Christ will surely come. It looks like they were losing heart and going back because his second coming was taking so long. For yet a little while, and he that shall come will come, and will not tarry. We are not of them who draw back unto perdition.",
          draw: [["clear"],
                 ["title", "t", "So come back"],
                 ["write", "f1", [120, 280], "⑧ He will surely come", { size: 56, color: "blue" }],
                 ["write", "f1b", { after: "f1", gap: 40 }, "Heb 10:37~39", { size: 44, color: "gray" }]] },
        { say: "Ninth, don't stop meeting together. Don't be like some who've gotten into the habit of skipping. Take heart, and work even harder at gathering.",
          draw: [["write", "f2", [120, 380], "⑨ don't forsake meeting together", { size: 56, color: "blue" }],
                 ["write", "f2b", { after: "f2", gap: 40 }, "Heb 10:23~25", { size: 44, color: "gray" }]] },
        { say: "Tenth, don't lose heart when you're disciplined. God disciplines every son he receives. He disciplines because he loves. Even when you're being hit, you still come to God.",
          draw: [["write", "f3", [120, 480], "⑩ discipline = because He loves", { size: 56, color: "blue" }]] },
        { say: "Eleventh, the Lord really won't forsake us. Don't love money, and be content with what you have. But if we sin on purpose after knowing the truth, there's no more sacrifice for sins, only judgment. So he's telling them, come back.",
          draw: [["write", "f4", [120, 580], "⑪ He will never forsake us", { size: 56, color: "blue" }],
                 ["write", "f4b", { after: "f4", gap: 40 }, "Heb 13:5", { size: 44, color: "gray" }]] },
        { say: "So it's eleven to nothing. Judaism is all just a model, a shadow. Now that the real thing, Jesus, has come, the model goes away. So what's the writer of Hebrews saying in the end? Come back!",
          draw: [["write", "f5", [120, 740], "11 : 0", { size: 96, color: "red" }],
                 ["write", "f6", { after: "f5", gap: 140 }, "Come back!", { size: 96, color: "red" }],
                 ["arrow", "f5", "f6"],
                 ["circle", "f6"]] },
        { say: "I didn't mention a single key verse, but you can see everything he's saying, right? Later, when you read Hebrews, just keep in mind how it's comparing Judaism and Christianity. It'll sink in so much better.",
          draw: [["write", "f7", { at: [1250, 830] }, "when reading: compared to what?", { anchor: "middle", size: 44, color: "gray" }]] }
      ]
    }
  ]
};
