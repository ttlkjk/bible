// 2 Thessalonians whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does.
window.BOARD = {
  scenes: [
    {
      id: "intro", title: "2 Thessalonians",
      beats: [
        { say: "Okay, Second Thessalonians. It was written around A.D. 51 or 52.",
          draw: [["title", "t", "2 Thessalonians"],
                 ["write", "a1", [120, 300], "c. A.D. 51~52", { color: "blue" }],
                 ["photo", "p1", "img/p4/image42.jpg", [1100, 170, 400, 225], { tilt: 2 }]] },
        { say: "It was a trip of at least a month and a half. And Timothy carried the letters there and back himself.",
          draw: [["write", "a2", [120, 440], "courier = Timothy", { size: 60 }],
                 ["write", "a3", { after: "a2", gap: 40 }, "(1.5 months at best)", { size: 52, color: "gray" }]] },
        { say: "Paul, Silvanus, and Timothy greet the church of the Thessalonians. And right away, they give thanks.",
          draw: [["write", "a4", [120, 580], "greeting", { size: 60, color: "gray" }],
                 ["write", "a5", { after: "a4", gap: 110 }, "thanks at once", { color: "red" }],
                 ["arrow", "a4", "a5"]] },
        { say: "Why give thanks? Because your faith has grown, your love for one another is overflowing, and you've held on and kept believing right in the middle of affliction and persecution.",
          draw: [["write", "a6", [120, 730], "faith grows · love abounds · endurance", { size: 56, color: "green" }],
                 ["under", "a6", "green"]] }
      ]
    },
    {
      id: "justice", title: "Righteous Judgment",
      beats: [
        { say: "So what is this? Verse 5 says it's a sign of God's righteous judgment. It's the result of His righteous judgment.",
          draw: [["clear"],
                 ["title", "t", "Ch. 1: sign of righteous judgment"],
                 ["write", "b1", { at: [800, 300] }, "God's justice = ?", { anchor: "middle", size: 72, color: "blue" }]] },
        { say: "And what's that justice? Verse 6. To repay affliction to those who afflict you,",
          draw: [["write", "b2", { at: [440, 470] }, "those who afflict", { anchor: "middle", size: 60 }],
                 ["write", "b3", { at: [440, 580] }, "affliction", { anchor: "middle", size: 80, color: "red" }],
                 ["arrow", "b2", "b3"]] },
        { say: "and to repay you who are afflicted with rest.",
          draw: [["write", "b4", { at: [1160, 470] }, "you, afflicted", { anchor: "middle", size: 60 }],
                 ["write", "b5", { at: [1160, 580] }, "rest", { anchor: "middle", size: 80, color: "green" }],
                 ["arrow", "b4", "b5"],
                 ["circle", "b5", "green"]] },
        { say: "This will show up at the end. When Jesus comes again, He'll punish those who don't know God, and those who don't obey the gospel.",
          draw: [["write", "b6", { at: [800, 760] }, "at His return · punishment for those who disobey the gospel", { anchor: "middle", size: 46, color: "gray" }]] }
      ]
    },
    {
      id: "notyet", title: "He Is Not Coming Right Away",
      beats: [
        { say: "Now, chapter 2. Here Paul gets to what he really wants to say.",
          draw: [["clear"],
                 ["title", "t", "Ch. 2: the main point"]] },
        { say: "In the first letter, he'd stressed the Lord's coming really strongly, to comfort them. Then he heard that people had gotten lazy. They'd stopped working and were just waiting around for the day Jesus would come.",
          draw: [["write", "c1", [120, 300], "1 Thess: coming stressed", { size: 60 }],
                 ["write", "c2", { after: "c1", gap: 110 }, "lazy · no work", { size: 60, color: "red" }],
                 ["arrow", "c1", "c2"]] },
        { say: "So he explains. Whether it's by spirit, or by word, or by letter, don't be quickly shaken or afraid, as if the day of the Lord had already come.",
          draw: [["write", "c3", [120, 450], "Don't be quickly shaken", { color: "blue" }],
                 ["under", "c3", "blue"]] },
        { say: "He's not coming right away like that. Something has to happen first. First!",
          draw: [["write", "c4", [120, 610], "not coming right away", { size: 60 }],
                 ["write", "c5", { below: "c4", gap: 130 }, "Something comes first!", { size: 80, color: "red" }],
                 ["box", "c5"]] }
      ]
    },
    {
      id: "apostasy", title: "The Falling Away and the Man of Lawlessness",
      beats: [
        { say: "So what has to come first, before Christ returns? First, the falling away. That comes first.",
          draw: [["clear"],
                 ["title", "t", "What comes before His return"],
                 ["write", "d1", [120, 300], "① falling away", { size: 80, color: "red" }]] },
        { say: "It means abandoning God's way. Not even reading the Bible, and betraying Jesus.",
          draw: [["write", "d2", { after: "d1", gap: 60 }, "leave God's way · betray Jesus", { size: 52, color: "gray" }]] },
        { say: "And that day won't come until the man of lawlessness, the son of destruction, is revealed. He's the adversary. The Antichrist.",
          draw: [["write", "d3", [120, 470], "② man of lawlessness · son of destruction", { size: 60, color: "blue" }],
                 ["write", "d4", { below: "d3", gap: 100 }, "= the Antichrist", { size: 72, color: "red" }],
                 ["circle", "d4"]] },
        { say: "He exalts himself above everything that's worshiped. He sits in the temple of God and sets himself up as God. Underline this part.",
          draw: [["write", "d5", [120, 740], "sits in God's temple, claims to be God", { size: 60 }],
                 ["under", "d5"]] }
      ]
    },
    {
      id: "temple", title: "Which Temple?",
      beats: [
        { say: "Now, when Paul wrote 'sits in the temple of God,' it was around A.D. 51 or 52.",
          draw: [["clear"],
                 ["title", "t", "Where is 'God's temple'?"],
                 ["write", "e1", { at: [340, 330] }, "A.D. 51~52", { anchor: "middle", size: 72, color: "blue" }],
                 ["write", "e2", { at: [340, 430] }, "Paul writes", { anchor: "middle", size: 52 }]] },
        { say: "The temple in Jerusalem wouldn't fall for more than another 18 years. In A.D. 70, the Roman general Titus destroyed Jerusalem, and the temple was burned.",
          draw: [["write", "e3", { at: [1180, 330] }, "A.D. 70", { anchor: "middle", size: 72, color: "red" }],
                 ["write", "e4", { at: [1180, 430] }, "Titus · temple burned", { anchor: "middle", size: 52 }],
                 ["arrow", "e1", "e3"],
                 ["write", "e5", { at: [760, 250] }, "18+ years", { anchor: "middle", size: 48, color: "gray" }]] },
        { say: "So the temple Paul was talking about was the temple in Jerusalem. It was still standing, perfectly intact.",
          draw: [["write", "e6", [120, 600], "Paul's 'temple' = Jerusalem temple", { size: 60 }]] },
        { say: "At the end, the Antichrist will sit in a temple of God that isn't built yet, but someday will be built in Jerusalem. And he'll insist that he's God. Until that Antichrist shows up, there's no second coming.",
          draw: [["write", "e7", [120, 750], "Antichrist in a temple yet to be built", { size: 60, color: "red" }],
                 ["write", "e8", { after: "e7", gap: 40 }, "→ then return", { size: 52, color: "blue" }]] }
      ]
    },
    {
      id: "the", title: "\"The\" Antichrist",
      beats: [
        { say: "Not this antichrist or that antichrist, plural. It's 'the' Antichrist, with the definite article.",
          draw: [["clear"],
                 ["title", "t", "\"The\" Antichrist"],
                 ["write", "f1", [120, 300], "antichrists", { size: 60, color: "gray" }],
                 ["strike", "f1"],
                 ["write", "f2", { after: "f1", gap: 110 }, "\"the\" Antichrist", { size: 72, color: "red" }],
                 ["arrow", "f1", "f2"]] },
        { say: "Verse 8. He's the Antichrist that the returning Jesus will kill with the breath of His mouth and bring to nothing. He has to show up first.",
          draw: [["write", "f3", [120, 430], "returning Jesus destroys him with the breath of His mouth", { size: 50 }]] },
        { say: "Verse 9. The coming of the wicked one is by the working of Satan, with power and signs and lying wonders, and the deception of wickedness. And he comes for those who are perishing.",
          draw: [["write", "f4", [120, 560], "power · signs · lying wonders", { size: 60, color: "blue" }],
                 ["write", "f5", { after: "f4", gap: 110 }, "for the perishing", { size: 60 }],
                 ["arrow", "f4", "f5"]] },
        { say: "Why? Because they didn't receive the love of the truth, the love of God's word. And so they weren't saved.",
          draw: [["write", "f6", [120, 690], "did not receive the love of the truth", { color: "red" }],
                 ["under", "f6"]] },
        { say: "You've got nothing to worry about, right? You could've been loved by Caribbean Bay, or by the PC room. But on these hot days, you've been soaking in the word for three days and two nights. You've received plenty of the love of the truth.",
          draw: [["write", "f7", [180, 810], "not Caribbean Bay or PC bang: 3 days soaked in the Word", { size: 46, color: "gray" }]] }
      ]
    },
    {
      id: "chosen", title: "Chosen, and the Traditions",
      beats: [
        { say: "Verse 11. God sends them a working of error, so that they believe a lie. So that those who didn't believe the truth, but had pleasure in unrighteousness, might be judged.",
          draw: [["clear"],
                 ["title", "t", "Ch. 2, second half"],
                 ["write", "g1", [120, 290], "love unrighteousness", { size: 60 }],
                 ["write", "g2", { after: "g1", gap: 110 }, "believe a lie", { size: 60 }],
                 ["arrow", "g1", "g2"]] },
        { say: "Think about it. Loving unrighteousness is already God's judgment in itself.",
          draw: [["write", "g3", [120, 420], "loving wrong = already judgment", { color: "red" }],
                 ["box", "g3"]] },
        { say: "From verse 13, Paul gives thanks. Because God chose you, and in the end He brought you to salvation. That's why He called you through the gospel.",
          draw: [["write", "g4", [120, 560], "chosen for salvation → called by gospel", { size: 60, color: "green" }]] },
        { say: "And the reason you were called to this Bible camp is the same. So that you, too, can share in the glory of our Lord Jesus Christ. So please, don't be too upset.",
          draw: [["write", "g5", [180, 660], "(same reason you were called to camp)", { size: 48, color: "gray" }]] },
        { say: "So, verse 15. Stand firm, and hold on to the traditions you were taught, whether by word or by letter. In other words, do exactly what you've learned.",
          draw: [["write", "g6", [120, 790], "v. 15 do just as you learned", { color: "blue" }],
                 ["under", "g6", "blue"]] }
      ]
    },
    {
      id: "work", title: "Ch. 3: If You Won't Work",
      beats: [
        { say: "Chapter 3. Paul asks for prayer too. That the word of the Lord would spread, and that they'd be delivered from unreasonable and evil men. And then verse 4. We're confident you'll do, and keep doing, what we command. That leaves them no way out, doesn't it?",
          draw: [["clear"],
                 ["title", "t", "Ch. 3: leave idleness"],
                 ["write", "h1", [120, 290], "asks prayer · \"sure you will do it\"", { size: 56, color: "gray" }]] },
        { say: "Verse 6. He tells them to keep away from those who rashly think Jesus is coming, and so they just sit around idle.",
          draw: [["write", "h2", [120, 420], "Withdraw from the idle", { color: "red" }]] },
        { say: "Verse 8. When Paul was in Thessalonica, he never ate a single meal for free. He worked night and day so he wouldn't be a burden to anyone. Follow our example, and work hard at what you've been given. Even if Jesus is coming today.",
          draw: [["write", "h3", [120, 550], "no free meals · worked day+night", { size: 60 }],
                 ["write", "h4", { after: "h3", gap: 110 }, "imitate", { size: 60, color: "blue" }],
                 ["arrow", "h3", "h4"]] },
        { say: "It wasn't that we had no right to it. We wanted to set an example. Didn't I tell you? If anyone won't work, neither let him eat.",
          draw: [["write", "h5", [120, 700], "Won't work? Don't eat!", { size: 72, color: "red" }],
                 ["circle", "h5"]] },
        { say: "I hear some of you are idle and just making trouble. Tell them to work quietly and earn their own food.",
          draw: [["write", "h6", [180, 820], "work quietly, earn your own food", { size: 48, color: "gray" }]] }
      ]
    },
    {
      id: "good", title: "Do Not Lose Heart",
      beats: [
        { say: "Verse 13. Don't be weary in doing good.",
          draw: [["clear"],
                 ["title", "t", "Do not lose heart in doing good"],
                 ["write", "i1", [120, 300], "doing good", { color: "green" }],
                 ["write", "i2", { after: "i1", gap: 110 }, "an end in itself", { color: "green" }],
                 ["arrow", "i1", "i2"]] },
        { say: "Doing good should be its own reward. But if you expect to see results or get something back, you'll lose heart when that doesn't happen.",
          draw: [["write", "i3", [120, 440], "expect results · reward", { size: 60 }],
                 ["write", "i4", { after: "i3", gap: 110 }, "lose heart", { size: 72, color: "red" }],
                 ["arrow", "i3", "i4"],
                 ["box", "i4"]] },
        { say: "Verse 14 is really harsh. If anyone doesn't obey this letter, point him out and shut him out.",
          draw: [["write", "i5", [120, 600], "won't obey the letter → mark him, shut him out", { size: 56 }]] },
        { say: "But you don't have to treat him like an enemy. Warn him as a brother.",
          draw: [["write", "i6", [120, 730], "as an enemy", { size: 60, color: "gray" }],
                 ["strike", "i6"],
                 ["write", "i7", { after: "i6", gap: 110 }, "warn as a brother", { size: 64, color: "blue" }],
                 ["arrow", "i6", "i7"]] }
      ]
    },
    {
      id: "hand", title: "A Greeting in His Own Hand",
      beats: [
        { say: "Only verses 17 and 18 are in Paul's own handwriting. Usually someone else wrote the letter down, and Paul just wrote the final greeting himself.",
          draw: [["clear"],
                 ["title", "t", "I, Paul, with my own hand"],
                 ["write", "j1", [120, 300], "body = dictated", { size: 60, color: "gray" }],
                 ["write", "j2", { below: "j1", gap: 100 }, "v. 17~18 greeting = own hand", { size: 64, color: "blue" }]] },
        { say: "And Paul's handwriting was big and crooked. Really bad handwriting.",
          draw: [["write", "j3", [120, 540], "big, crooked, messy", { size: 72, color: "red" }],
                 ["circle", "j3"]] },
        { say: "So it was a sign. The reader could say, 'Ah, this letter really is from Paul.'",
          draw: [["write", "j4", [120, 690], "= sign it's really from Paul", { color: "green" }],
                 ["under", "j4", "green"]] },
        { say: "All right, let's sum up Second Thessalonians like this. These are the things that will happen before the Lord returns.",
          draw: [["photo", "p2", "img/p4/image43.jpg", [1040, 420, 480, 270], { tilt: -2, caption: "Before the return" }]] }
      ]
    }
  ]
};
