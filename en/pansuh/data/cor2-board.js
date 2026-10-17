// 2 Corinthians whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does.
window.BOARD = {
  scenes: [
    {
      id: "odd", title: "A Book with a Strange Structure",
      beats: [
        { say: "Okay, 2 Corinthians. People talk about this book a lot, because its structure is strange. In chapter 9, Paul asks them to give to a collection. A collection is something like a donation.",
          draw: [["title", "t", "2 Corinthians: strange structure"],
                 ["write", "a1", { at: [430, 320] }, "ch. 9", { anchor: "middle", size: 80, color: "blue" }],
                 ["write", "a2", { at: [430, 420] }, "let's give (a donation)", { anchor: "middle", size: 56 }]] },
        { say: "But then in chapter 10, he gets angry. He says, I Paul, who in presence am lowly among you, but being absent am bold toward you.",
          draw: [["write", "a3", { at: [1170, 320] }, "ch. 10", { anchor: "middle", size: 80, color: "red" }],
                 ["write", "a4", { at: [1170, 420] }, "blows up in anger", { anchor: "middle", size: 56, color: "red" }],
                 ["arrow", "a1", "a3"]] },
        { say: "Lowly face to face, but bold when he's away? Here's what they were saying. That Paul can't make a peep in person, but read his letters and he's a UFC fighter. Paul's quoting them and throwing it right back.",
          draw: [["write", "a5", { at: [800, 570] }, "\"Can't peep in person, a UFC fighter in letters\"", { anchor: "middle", size: 54, color: "gray" }]] },
        { say: "I mean, think about it. In chapter 9 he asks them to give for the poor saints, and in chapter 10 he flies into a rage. Who'd feel like giving after that?",
          draw: [["write", "a6", { at: [800, 730] }, "Who gives after being yelled at?", { anchor: "middle", size: 64, color: "red" }],
                 ["under", "a6"]] }
      ]
    },
    {
      id: "papyrus", title: "More Than One Letter",
      beats: [
        { say: "Also, in chapter 7 he says he's glad the Corinthian church repented. So the letter pointing out their wrongs and urging them to repent came first, and the happy letter about their repentance came later.",
          draw: [["clear"],
                 ["title", "t", "More than one letter?"],
                 ["write", "b1", [100, 290], "urge repentance", { size: 60, color: "red" }],
                 ["write", "b2", { after: "b1", gap: 100 }, "rejoice (ch. 7)", { size: 60, color: "green" }],
                 ["arrow", "b1", "b2"]] },
        { say: "So it really looks like this isn't just one letter. Back then, letters were mostly written on a paper called papyrus.",
          draw: [["write", "b3", [100, 420], "papyrus", { size: 72, color: "blue" }],
                 ["photo", "p1", "../../pansuh/img/p4/image51.jpg", [1040, 180, 460, 259], { tilt: 2, caption: "Papyrus" }]] },
        { say: "Old papyrus gets ragged and torn like this. So they'd copy it again onto a fresh sheet.",
          draw: [["photo", "p2", "../../pansuh/img/p4/image53.jpg", [1060, 560, 340, 214], { tilt: -3 }],
                 ["write", "b4", [100, 560], "worn out → copied again", { size: 56 }]] },
        { say: "And so Barclay argues that the parts got attached in reverse order.",
          draw: [["write", "b5", [100, 700], "Barclay: joined in reverse order", { size: 60, color: "red" }],
                 ["under", "b5"]] },
        { say: "Let's try reading it Barclay's way. Chapters 10 to 13 first, then chapters 1 to 9.",
          draw: [["write", "b6", [100, 820], "ch. 10~13 first → ch. 1~9 after", { size: 56, color: "blue" }]] }
      ]
    },
    {
      id: "timothy", title: "Timothy Comes Back in Tears",
      beats: [
        { say: "Let me fill in what happened in between. Timothy took Paul's letter and read it to them, but it did not go over well at all.",
          draw: [["clear"],
                 ["title", "t", "What happened in between?"],
                 ["write", "c1", [120, 300], "Timothy reads letter", { size: 60 }],
                 ["write", "c2", { after: "c1", gap: 110 }, "poor response", { size: 60, color: "red" }],
                 ["arrow", "c1", "c2"]] },
        { say: "Timothy came back in tears and told Paul everything.",
          draw: [["write", "c3", [120, 440], "Timothy returns in tears", { size: 64, color: "blue" }]] },
        { say: "From chapter 10 on, Paul's writing after hearing how they reacted, and he's answering them. So as you read, you can guess what the Corinthian believers said.",
          draw: [["write", "c4", [120, 590], "ch. 10~13 = rebuttal of response", { size: 64, color: "red" }],
                 ["box", "c4"],
                 ["write", "c5", [180, 700], "→ read backward, you hear what they said", { size: 50, color: "gray" }]] }
      ]
    },
    {
      id: "react1", title: "How the Corinthians Reacted, Part 1",
      beats: [
        { say: "First, they doubted he was really an apostle. They said, he calls himself an apostle, but he isn't. And Paul insists, maybe not to other churches, but to you, I am.",
          draw: [["clear"],
                 ["title", "t", "How the Corinthians reacted"],
                 ["write", "d1", [100, 290], "① doubt apostleship", { size: 60, color: "blue" }],
                 ["write", "d2", { below: "d1", gap: 70 }, "\"to you I am an apostle\"", { size: 48, color: "gray" }],
                 ["photo", "p3", "../../pansuh/img/p4/image54.jpg", [1060, 170, 440, 248], { tilt: 2 }]] },
        { say: "Verse 2 is a warning. He says he prays he won't have to deal with them the way he deals with those who think we live any old way. If his apostleship falls, the gospel he preached loses its weight too. That's why he speaks so strongly.",
          draw: [["write", "d3", [100, 480], "apostleship falls → gospel loses authority", { size: 56, color: "red" }],
                 ["under", "d3"]] },
        { say: "Second, they made fun of his looks. Verse 7. Do ye look on things after the outward appearance? Who's plain-looking because they want to be? You think I chose to look like this?",
          draw: [["write", "d4", [100, 620], "② mock his looks", { size: 60, color: "blue" }],
                 ["write", "d5", { after: "d4", gap: 40 }, "\"you look at outward appearance\"", { size: 48, color: "gray" }]] },
        { say: "Third, what they thought of his speaking. Verse 10. His letters are weighty and powerful, but his bodily presence is weak, and his speech contemptible. Saying rude things like that, of course he got angry.",
          draw: [["write", "d6", [100, 780], "③ strong letters, weak speech", { size: 60, color: "blue" }]] }
      ]
    },
    {
      id: "react2", title: "How the Corinthians Reacted, Part 2",
      beats: [
        { say: "Fourth, there was a lot of talk about him being single. We still don't know if Paul never married, or married and then divorced. Anyway, all sorts of rumors went around.",
          draw: [["clear"],
                 ["title", "t", "Reactions, continued"],
                 ["write", "e1", [120, 290], "④ rumors about single life", { size: 60, color: "blue" }]] },
        { say: "Fifth, they made wild guesses because he didn't take pay. Chapter 11 verse 7. Is it a sin that I preached the gospel to you for free? By that logic, taking support from other churches so I could serve you must be robbery?",
          draw: [["write", "e2", [120, 420], "⑤ took no pay → suspicion", { size: 60, color: "blue" }],
                 ["write", "e3", { after: "e2", gap: 40 }, "\"a sin to preach free?\"", { size: 48, color: "gray" }]] },
        { say: "Sixth, he's got no boldness in anything. He always served humbly, so they said he had no force. You know, it's usually the people without real ability who shout, right?",
          draw: [["write", "e4", [120, 550], "⑥ no boldness", { size: 60, color: "blue" }],
                 ["write", "e5", { after: "e4", gap: 40 }, "(those without skill shout)", { size: 48, color: "gray" }]] },
        { say: "Seventh, he didn't keep his promise to visit. In the first letter he said he'd come and see their power, but something came up and he couldn't go. And they said, are you really following the Holy Spirit? What kind of Holy Spirit keeps changing his mind?",
          draw: [["write", "e6", [120, 680], "⑦ broke promise to visit", { size: 60, color: "blue" }],
                 ["write", "e7", { after: "e6", gap: 40 }, "\"Spirit keeps changing?\"", { size: 48, color: "gray" }]] },
        { say: "Eighth, they doubted the Spirit of Christ could be in such a plain-looking man.",
          draw: [["write", "e8", [120, 810], "⑧ Spirit of Christ in him?", { size: 60, color: "blue" }]] }
      ]
    },
    {
      id: "react3", title: "Support and Illness",
      beats: [
        { say: "Ninth, while he was serving in Ephesus, he got support from Corinth, and they said he was draining the church's money. Actually, it was individuals like Stephanas, Fortunatus, and Achaicus who supported him.",
          draw: [["clear"],
                 ["title", "t", "Last reactions: support & illness"],
                 ["write", "f1", [120, 290], "⑨ \"draining church funds\"", { size: 60, color: "blue" }],
                 ["write", "f2", { below: "f1", gap: 80 }, "really: personal gifts of Stephanas · Fortunatus · Achaicus", { size: 44, color: "gray" }]] },
        { say: "Tenth, in chapter 12, they made a big deal of Paul's long illness. Before, people got healed just from laying his handkerchief on them, and now he can't even get better under a blanket.",
          draw: [["write", "f3", [120, 510], "⑩ illness", { size: 64, color: "blue" }],
                 ["write", "f4", { after: "f3", gap: 50 }, "handkerchief → now not even a blanket?", { size: 52 }]] },
        { say: "Verse 7. Paul says he prayed three times about his illness too. But because the revelations he'd received were so great, it stayed, like a thorn.",
          draw: [["write", "f5", [120, 640], "prayed 3 times · great revelation → 'thorn'", { size: 56, color: "red" }],
                 ["under", "f5"]] },
        { say: "Verse 15. The more I love you, the less I am loved? Wow, it sounds like a love letter, doesn't it? And he says all of this is to build you up.",
          draw: [["write", "f6", [120, 790], "\"The more I love, the less loved?\"", { size: 60, color: "green" }],
                 ["write", "f7", { after: "f6", gap: 30 }, "(love letter?)", { size: 46, color: "gray" }]] }
      ]
    },
    {
      id: "ch13", title: "Chapter 13: Holding a Grudge",
      beats: [
        { say: "Chapter 13 verse 1. I'm coming to you now. In the mouth of two or three witnesses shall every word be established. Deuteronomy 19 verse 15 says a charge only stands with two or three witnesses.",
          draw: [["clear"],
                 ["title", "t", "Ch. 13: Final warning"],
                 ["write", "g1", [120, 290], "by 2 or 3 witnesses (Deut 19:15)", { size: 60, color: "blue" }]] },
        { say: "I'll check everything. Were those loudmouths just talking, or was it the truth, backed by two or three witnesses? And verse 2. If I come again, I will not spare.",
          draw: [["write", "g2", [120, 420], "If I come again, I won't spare", { size: 64, color: "red" }]] },
        { say: "Verse 10. I write these things while absent, so that when present I won't have to be harsh. He's poking at what the believers said earlier. So that he won't kill them when they meet. He's really holding a grudge.",
          draw: [["write", "g3", [120, 560], "Grudge!", { size: 80, color: "red" }],
                 ["circle", "g3"],
                 ["write", "g4", { after: "g3", gap: 60 }, "why he writes while absent", { size: 50, color: "gray" }]] },
        { say: "The last verse, verse 13. In most English Bibles, that's verse 14. The grace of the Lord Jesus Christ, and the love of God, and the communion of the Holy Spirit, with you all. Heard it lots of times, right? Pastors use it for the benediction. In the original, there's no word for 'be.'",
          draw: [["write", "g5", [120, 720], "v. 13 (Eng. 14) = benediction", { size: 60, color: "green" }],
                 ["write", "g6", { after: "g5", gap: 50 }, "no 'be' in original", { size: 50, color: "gray" }],
                 ["under", "g5", "green"]] }
      ]
    },
    {
      id: "titus", title: "Sending Titus",
      beats: [
        { say: "So that fierce letter is chapters 10 to 13. Then in chapters 1 to 9, the mood changes again. Maybe the front part got torn off and attached at the back.",
          draw: [["clear"],
                 ["title", "t", "Corinth's problem solved"],
                 ["write", "h1", [100, 290], "after fierce letter → regret", { size: 56 }],
                 ["photo", "p4", "../../pansuh/img/p4/image55.jpg", [980, 180, 520, 293], { tilt: -1.5, caption: "Troas · Philippi · Thessalonica" }]] },
        { say: "After he sent it, he felt relieved at first, but he kept regretting it. What if they pick at it again? So he calls Titus. Go take a look at Corinth, and check on the other churches on your way back.",
          draw: [["write", "h2", [100, 420], "Titus to Corinth", { size: 64, color: "blue" }]] },
        { say: "Now, unlike Timothy, Titus doesn't cry and whine. He's sharp as a razor.",
          draw: [["write", "h3", [100, 540], "Titus = razor", { size: 64, color: "red" }],
                 ["box", "h3"]] },
        { say: "It was time for him to be back, but he didn't show up. So Paul went out to meet him, all the way to Troas. The people there figured he'd hold meetings and got ready, but he passed right through, saying he had urgent business.",
          draw: [["write", "h4", [100, 680], "Troas: passed by, no meetings", { size: 56 }]] },
        { say: "He got to Samothrace, Neapolis, Philippi, and around Thessalonica, and there was Titus, coming up the road humming a happy tune.",
          draw: [["write", "h5", [100, 800], "meets Titus near Philippi · Thessalonica", { size: 56, color: "green" }]] }
      ]
    },
    {
      id: "cut", title: "Cut Them Right Off",
      beats: [
        { say: "Oh my, man, what happened? What do you mean, what happened? It went great.",
          draw: [["clear"],
                 ["title", "t", "\"It went great\""],
                 ["write", "i1", [120, 300], "\"What happened?\" \"It went great\"", { size: 60 }]] },
        { say: "I just cut them off. Those guys won't be coming to church starting next week. When he got there, he saw it was just a few people stirring up trouble, so Titus drove them out.",
          draw: [["write", "i2", [120, 440], "\"Cut them right off\"", { size: 80, color: "red" }],
                 ["write", "i3", { below: "i2", gap: 80 }, "a few troublemakers → Titus drove them out", { size: 50, color: "gray" }]] },
        { say: "Since it went well, Paul sends Titus back to Corinth. What? I just came from there. Yes, I know that. Now that the problem's solved, we need to do the collection we planned.",
          draw: [["write", "i4", [120, 660], "back to Corinth", { size: 60 }],
                 ["write", "i5", { after: "i4", gap: 110 }, "now let's give", { size: 64, color: "green" }],
                 ["arrow", "i4", "i5"]] },
        { say: "So the letter he wrote and sent again is 2 Corinthians chapters 1 to 9. And the heart of it is chapter 9. Let's give to the collection.",
          draw: [["write", "i6", [120, 800], "ch. 1~9 = letter for the collection", { size: 64, color: "blue" }],
                 ["under", "i6", "blue"]] }
      ]
    },
    {
      id: "comfort", title: "Comfort, Comfort, Comfort",
      beats: [
        { say: "You can see the mood has really changed from chapter 1. In verses 1 to 7 he comforts, and comforts, and comforts.",
          draw: [["clear"],
                 ["title", "t", "Ch. 1~2: Mood changes"],
                 ["write", "j1", [120, 310], "comfort · comfort · comfort", { size: 80, color: "green" }]] },
        { say: "He just keeps talking about comfort. That shows how worried he was after sending that letter, chapters 10 to 13.",
          draw: [["write", "j2", [180, 410], "how much he worried after the fierce letter", { size: 48, color: "gray" }]] },
        { say: "Chapter 2 verse 5. If anyone has caused grief, the punishment's enough now, so rather forgive him and comfort him. He's saying, even the man Titus drove out, take him back with love.",
          draw: [["write", "j3", [120, 560], "even the one cast out", { size: 60 }],
                 ["write", "j4", { after: "j3", gap: 110 }, "forgive & love", { size: 64, color: "red" }],
                 ["arrow", "j3", "j4"]] },
        { say: "And then he suddenly goes off on a side track and talks for a while about how we're the aroma of Christ.",
          draw: [["write", "j5", [120, 720], "(tangent) aroma of Christ", { size: 60, color: "blue" }]] }
      ]
    },
    {
      id: "spirit", title: "The Law and the Ministry of the Spirit",
      beats: [
        { say: "In chapter 3 he says the law ended up being something that kills, and he sets the law against Christ. The ministry of the letter that kills, and the ministry of the Spirit,",
          draw: [["clear"],
                 ["title", "t", "Ch. 3~4: Contrast"],
                 ["write", "k1", { at: [420, 300] }, "letter that kills", { anchor: "middle", size: 56, color: "gray" }],
                 ["write", "k2", { at: [1180, 300] }, "ministry of Spirit", { anchor: "middle", size: 64, color: "blue" }],
                 ["write", "k3", { at: [800, 300] }, "VS", { anchor: "middle", size: 56, color: "red" }]] },
        { say: "the ministry of condemnation, and the ministry of righteousness.",
          draw: [["write", "k4", { at: [420, 420] }, "ministry of condemnation", { anchor: "middle", size: 52, color: "gray" }],
                 ["write", "k5", { at: [1180, 420] }, "ministry of righteousness", { anchor: "middle", size: 56, color: "blue" }],
                 ["write", "k6", { at: [800, 420] }, "VS", { anchor: "middle", size: 56, color: "red" }]] },
        { say: "And he says, where the Spirit of the Lord is, there is liberty. It's not doing it grudgingly, scared you'll die if you don't. It's doing what's right freely, because of the glory we're going to receive.",
          draw: [["write", "k7", [120, 580], "where the Spirit is, there is liberty", { size: 64, color: "green" }],
                 ["under", "k7", "green"]] },
        { say: "Chapter 4 verse 7. We have this treasure in earthen vessels. Putting the most precious thing in a fragile jar means what matters isn't the jar. It's what's inside.",
          draw: [["write", "k8", [120, 740], "clay jar", { size: 64 }],
                 ["write", "k9", { after: "k8", gap: 110 }, "contents over the jar", { size: 64, color: "red" }],
                 ["arrow", "k8", "k9"]] }
      ]
    },
    {
      id: "new", title: "Therefore, a New Creature",
      beats: [
        { say: "Chapter 5 verse 10. We must all appear before the judgment seat of Christ and be judged for the good and evil done in the body.",
          draw: [["clear"],
                 ["title", "t", "Ch. 5: Therefore what?"],
                 ["write", "l1", [120, 290], "good & evil done in body → judgment seat", { size: 56, color: "gray" }]] },
        { say: "Verse 14. If one died for all, then were all dead.",
          draw: [["write", "l2", [120, 420], "one died for all = all died", { size: 60, color: "blue" }]] },
        { say: "Verse 15. So that they'd no longer live for themselves, but for him who died for them and rose again.",
          draw: [["write", "l3", [180, 520], "to live not for self, but for him", { size: 48, color: "gray" }]] },
        { say: "And verse 17, which you've all memorized. Therefore if any man be in Christ, he is a new creature. Everybody memorizes therefore. But if I ask, therefore because of what? Hardly anyone knows.",
          draw: [["write", "l4", [120, 660], "therefore → new creature", { size: 72, color: "red" }],
                 ["write", "l5", { after: "l4", gap: 50 }, "because of what?", { size: 56, color: "blue" }],
                 ["circle", "l5", "blue"]] },
        { say: "He said it right before. One died for all, so all died. Because of that, anyone who's in Christ becomes a new being.",
          draw: [["write", "l6", [120, 800], "because he died for us → new being", { size: 60, color: "green" }],
                 ["under", "l6", "green"]] }
      ]
    },
    {
      id: "offering", title: "The Spirit of Giving",
      beats: [
        { say: "Last, let's just look at the spirit of giving, from chapter 8 verse 13, and wrap up. Think of the collection as today's offering plus a donation.",
          draw: [["clear"],
                 ["title", "t", "Ch. 8~9: Spirit of giving"],
                 ["write", "m1", [120, 290], "collection = offering + donation", { size: 60, color: "blue" }]] },
        { say: "I don't mean you gather up your money to feed others and go hungry yourselves. It's for equality.",
          draw: [["write", "m2", [120, 420], "others eased, you burdened?", { size: 56, color: "gray" }],
                 ["strike", "m2"],
                 ["write", "m3", { after: "m2", gap: 110 }, "equality", { size: 72, color: "red" }],
                 ["arrow", "m2", "m3"]] },
        { say: "Chapter 9. Paul says he'd bragged to the Macedonians that Achaia had been ready since last year. But if they all showed up and it wasn't ready, how embarrassing would that be? So he's sending the brothers ahead to get it ready.",
          draw: [["write", "m4", [120, 570], "boasted: ready since last year", { size: 56 }],
                 ["write", "m5", { after: "m4", gap: 40 }, "(don't embarrass me)", { size: 48, color: "gray" }]] },
        { say: "Not grudgingly, or of necessity. God loves a cheerful giver, you know that, right? He doesn't leave them any way out, does he? Giving cheerfully means giving with joy.",
          draw: [["write", "m6", [120, 710], "God loves a cheerful giver", { size: 64, color: "green" }],
                 ["box", "m6", "green"]] },
        { say: "So that's 2 Corinthians in a nutshell. Reading it this way, does the structure problem feel a bit more solved?",
          draw: [["write", "m7", [180, 830], "read ch. 10~13 → ch. 1~9 and it makes sense", { size: 48, color: "gray" }]] }
      ]
    }
  ]
};
