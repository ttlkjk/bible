// 1 Corinthians whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does.
window.BOARD = {
  scenes: [
    {
      id: "trouble", title: "Trouble in the Corinthian Church",
      beats: [
        { say: "In Ephesus there was great revival and growth, but in the church at Corinth, trouble broke out.",
          draw: [["title", "t", "Trouble in the Corinthian church"],
                 ["write", "a1", [120, 300], "Ephesus: revival", { size: 60, color: "green" }],
                 ["write", "a2", { after: "a1", gap: 80 }, "Corinth: trouble", { size: 60, color: "red" }],
                 ["photo", "p1", "img/p4/image47.jpg", [1170, 170, 340, 191], { tilt: 2 }]] },
        { say: "It seems Paul wrote about four letters to sort it out. Paul visited three times, and Timothy and Titus also visited and worked hard. The Corinthian church was a really difficult church.",
          draw: [["write", "a3", [120, 440], "4 letters · Paul ×3 · Timothy · Titus", { size: 50 }],
                 ["write", "a4", { below: "a3", gap: 90 }, "a really hard church", { size: 64, color: "red" }],
                 ["under", "a4"]] },
        { say: "Timothy carries First Corinthians there himself. It is a letter that says, handle this problem this way, and that problem that way.",
          draw: [["write", "a5", [120, 680], "a fix for each problem", { size: 64, color: "blue" }]] },
        { say: "After greetings up to verse 9, he goes straight into pointing out the problems of the Corinthian church one by one. Eleven of them in all.",
          draw: [["photo", "p2", "img/p4/image48.jpg", [960, 450, 540, 304], { tilt: -2 }],
                 ["write", "a6", [120, 800], "problems, one by one", { size: 56, color: "gray" }]] }
      ]
    },
    {
      id: "faction", title: "Factions",
      beats: [
        { say: "First, factions. When Paul left after a year and a half of ministry, he thought, they'll do fine on their own now. So he took all his staff, even Priscilla and Aquila, and went to Ephesus. The Corinthian church became very empty.",
          draw: [["clear"],
                 ["title", "t", "① Factions"],
                 ["write", "b1", [120, 280], "left with all the staff → empty", { size: 52, color: "gray" }]] },
        { say: "Then Apollos came to Corinth and ministered, and he became popular. He was learned, eloquent, and good-looking too. So there was the Apollos party.",
          draw: [["write", "b2", { at: [230, 420] }, "Apollos party", { anchor: "middle", size: 52, color: "blue" }],
                 ["write", "b3", { at: [230, 490] }, "brains · words · looks", { anchor: "middle", size: 40, color: "gray" }]] },
        { say: "Those who had been blessed through Paul said, Apollos is good, but there's not much substance. So there was the Paul party.",
          draw: [["write", "b4", { at: [610, 420] }, "Paul party", { anchor: "middle", size: 52, color: "blue" }],
                 ["write", "b5", { at: [610, 490] }, "little substance", { anchor: "middle", size: 40, color: "gray" }]] },
        { say: "With those two fighting, the Cephas party appeared, saying Paul is not even an apostle and Apollos is just an unknown evangelist. And then even a Christ party, saying, forget Paul and all the rest, Christ is the best.",
          draw: [["write", "b6", { at: [990, 420] }, "Cephas party", { anchor: "middle", size: 52, color: "blue" }],
                 ["write", "b7", { at: [1370, 420] }, "Christ party", { anchor: "middle", size: 52, color: "blue" }],
                 ["write", "b8", { at: [1370, 490] }, "forget all the rest", { anchor: "middle", size: 40, color: "gray" }]] },
        { say: "This is the Greek way of thinking. Just as philosophy has its schools, they were very proud of who they had learned from. That culture came straight into the church.",
          draw: [["write", "b9", [120, 640], "Greek culture: \"I studied under ___\" = pride", { size: 56, color: "red" }]] },
        { say: "Paul tells them to quit it right away. Chapter 3. I planted, Apollos watered, but God gave the increase. So let no one boast in men.",
          draw: [["write", "b10", [120, 790], "plant · water", { size: 60 }],
                 ["write", "b11", { after: "b10", gap: 100 }, "God gives the growth", { size: 64, color: "green" }],
                 ["arrow", "b10", "b11"],
                 ["box", "b11", "green"]] }
      ]
    },
    {
      id: "immoral", title: "A Shameful Immorality",
      beats: [
        { say: "Second, the problem of a shameful immorality. Chapter 5. There is sexual immorality that is not even found among the Gentiles. Someone has taken his father's wife.",
          draw: [["clear"],
                 ["title", "t", "② A shameful immorality"],
                 ["write", "c1", [120, 300], "took his father's wife", { size: 64, color: "red" }]] },
        { say: "A woman the father had kept like a concubine, the son took to live with him after the father died.",
          draw: [["write", "c2", [180, 400], "not even among the Gentiles", { size: 48, color: "gray" }]] },
        { say: "Paul says that though he is absent in body, he is present in spirit and already knows, and he has delivered such a man to Satan. For the destruction of the flesh, so that the spirit may be saved in the day of the Lord Jesus.",
          draw: [["write", "c3", [120, 530], "handed over to Satan", { size: 56 }],
                 ["write", "c4", { after: "c3", gap: 40 }, "flesh destroyed, spirit saved", { size: 52, color: "blue" }]] },
        { say: "Verse 9. When I told you to keep away from the sexually immoral, I didn't mean never meet such people in the world at all. For that you would have to go out of the world.",
          draw: [["write", "c5", [120, 670], "everyone in the world?", { size: 56, color: "gray" }],
                 ["strike", "c5"]] },
        { say: "Verse 11. Anyone who is called a brother. If you find such a person inside the church, put him out.",
          draw: [["write", "c6", { after: "c5", gap: 100 }, "a 'brother' in church? put him out", { size: 52, color: "red" }],
                 ["arrow", "c5", "c6"],
                 ["under", "c6"]] }
      ]
    },
    {
      id: "lawsuit", title: "Lawsuits Among Believers",
      beats: [
        { say: "Third, chapter 6. Believers were suing and accusing one another over their own interests.",
          draw: [["clear"],
                 ["title", "t", "③ Lawsuits among believers"],
                 ["write", "d1", [120, 300], "suing each other for gain", { size: 64 }]] },
        { say: "For the Greeks, going to court was everyday life. Settling even trivial things in court was the pride of a cultured citizen. Every neighborhood had a small court called the bema, and people went to law over petty matters.",
          draw: [["write", "d2", [120, 440], "bema = local small court", { size: 60, color: "blue" }],
                 ["write", "d3", { after: "d2", gap: 40 }, "lawsuit = civic pride", { size: 50, color: "gray" }]] },
        { say: "Paul says, verse 3, don't you know that we will judge angels? People who will judge angels, crouching like criminals before unbelieving judges over a few coins? How can that be right?",
          draw: [["write", "d4", [120, 600], "those who will judge angels", { size: 60, color: "red" }],
                 ["write", "d5", { below: "d4", gap: 70 }, "→ worldly court for a few coins?", { size: 56 }]] },
        { say: "Why not just take the loss? What do you think you're doing?",
          draw: [["write", "d6", [120, 790], "rather take the loss", { size: 72, color: "green" }],
                 ["circle", "d6", "green"]] }
      ]
    },
    {
      id: "body", title: "Glorify God in Your Body",
      beats: [
        { say: "Then from verse 12, he tells them to glorify God in their bodies. The Corinthians of that time were almost completely loose about sex.",
          draw: [["clear"],
                 ["title", "t", "Glorify God in your body"],
                 ["write", "e1", [120, 300], "sexually almost anything goes", { size: 60 }]] },
        { say: "Under the influence of Epicurean hedonism, they believed the spirit is not affected by the flesh. So basic desires like sex should be satisfied whenever they come, just like eating when you're hungry.",
          draw: [["write", "e2", [120, 430], "hedonism: spirit unaffected by flesh", { size: 56, color: "blue" }],
                 ["write", "e3", [180, 510], "(like eating when hungry)", { size: 48, color: "gray" }]] },
        { say: "Paul says, verse 15, your bodies are members of Christ. He who is joined to a prostitute is one body with her, but he who is joined to the Lord is one spirit with him.",
          draw: [["write", "e4", [120, 600], "body = member of Christ", { size: 64, color: "red" }],
                 ["under", "e4"]] },
        { say: "Flee sexual immorality. You are a temple where the Holy Spirit dwells. You are not your own. The Lord bought you with the price of his blood, so you are his.",
          draw: [["write", "e5", [120, 715], "Spirit's temple · bought with his blood", { size: 56 }]] },
        { say: "Therefore glorify God in your body.",
          draw: [["write", "e6", [120, 830], "Glorify God in your body!", { size: 64, color: "green" }],
                 ["box", "e6", "green"]] }
      ]
    },
    {
      id: "marriage", title: "Marriage for Believers",
      beats: [
        { say: "Fourth, the problem of marriage. In chapter 7 verse 1 it says, concerning the things about which you wrote. So Paul and the Corinthian church exchanged letters several times. We can infer that they asked, is it right to marry or not to marry?",
          draw: [["clear"],
                 ["title", "t", "④ Should we marry?"],
                 ["write", "f1", [120, 290], "7:1 \"the things you wrote about\"", { size: 56, color: "gray" }]] },
        { say: "Paul once said it is good to stay single like him. That turned into something like a doctrine, and there arose a can-marry party and a can't-marry party.",
          draw: [["write", "f2", [120, 420], "\"good to stay single\"", { size: 60 }],
                 ["write", "f3", { after: "f2", gap: 90 }, "made doctrine → 2 parties", { size: 56, color: "red" }],
                 ["arrow", "f2", "f3"]] },
        { say: "Paul said that because early in his ministry he thought Jesus would come very soon. And soon the terrible persecution under Emperor Nero would begin, and having a wife and children would make it harder.",
          draw: [["write", "f4", [180, 540], "why: Christ's soon return · Nero's coming persecution", { size: 48, color: "blue" }]] },
        { say: "Paul's conclusion is, if you can, it's better to stay single, but if you really can't hold back, marry. And those already married should take good care of their homes.",
          draw: [["write", "f5", [120, 690], "single if you can; if not, marry", { size: 60, color: "green" }],
                 ["write", "f6", { below: "f5", gap: 100 }, "the married: guard your home", { size: 56, color: "green" }]] }
      ]
    },
    {
      id: "meat", title: "Food Offered to Idols",
      beats: [
        { say: "Fifth, chapter 8, the problem of food offered to idols. Meat that was offered before an idol and then sold in the market. Can you eat it or not?",
          draw: [["clear"],
                 ["title", "t", "⑤ Idol meat: OK to eat?"],
                 ["write", "g1", [120, 300], "offered to idols → sold in market", { size: 60 }]] },
        { say: "Food has no sin in it. Eating it won't send you to hell. Not eating doesn't make you worse off, and eating doesn't make you better off.",
          draw: [["write", "g2", [120, 430], "food itself is not sin", { size: 64, color: "blue" }]] },
        { say: "Verse 9. But take care that your liberty does not become a stumbling block to those who are weak. Verse 13. If food makes my brother stumble, I will never eat meat again.",
          draw: [["write", "g3", [120, 570], "my liberty ≠ a stumbling block for the weak", { size: 56 }],
                 ["write", "g4", [180, 660], "v. 13: I will never eat meat again", { size: 48, color: "gray" }]] },
        { say: "So what's the conclusion? You may eat it. But let's be careful about eating in front of someone whose faith is weak.",
          draw: [["write", "g5", [120, 800], "you may eat", { size: 64, color: "green" }],
                 ["write", "g6", { after: "g5", gap: 50 }, "but careful before the weak", { size: 60, color: "red" }],
                 ["under", "g6"]] }
      ]
    },
    {
      id: "apostle", title: "Paul's Apostleship",
      beats: [
        { say: "Sixth, the usual item on the menu. The question of Paul's apostleship. Paul didn't accept payment, so as not to be a burden to the Corinthian church. And then they needled him, saying, he didn't take it because he's not an apostle.",
          draw: [["clear"],
                 ["title", "t", "⑥ Paul's apostleship (the usual)"],
                 ["write", "h1", [120, 290], "took no pay", { size: 60 }],
                 ["write", "h2", { after: "h1", gap: 100 }, "\"Because he's no apostle!\"", { size: 60, color: "red" }],
                 ["arrow", "h1", "h2"]] },
        { say: "Paul gets angry and says, it's not that I have no right. I didn't use that right so as not to hinder the gospel of Christ.",
          draw: [["write", "h3", [120, 420], "right not used = no hindrance to gospel", { size: 56, color: "blue" }]] },
        { say: "Verse 15. I would rather die. In the old Korean Bible there are dots after it. He's afraid this will sound like he's asking for money. Absolutely not, I'd rather starve to death.",
          draw: [["write", "h4", [120, 550], "\"I would rather die…\"", { size: 60 }],
                 ["write", "h5", { after: "h4", gap: 40 }, "not asking for money", { size: 48, color: "gray" }]] },
        { say: "Verse 19. Though he was free, he became a servant to win more people. To the Jews he became as a Jew, and to those without the law, as one without the law. In a word, he met them at their level.",
          draw: [["write", "h6", [120, 680], "to Jews as a Jew = meet them at their level", { size: 56 }]] },
        { say: "Paul never once let his apostleship slide. Why? Because if his apostleship fell, his gospel would fall too.",
          draw: [["write", "h7", [120, 810], "apostleship falls → gospel falls", { size: 60, color: "red" }],
                 ["under", "h7"]] }
      ]
    },
    {
      id: "test", title: "Temptation You Can Bear",
      beats: [
        { say: "In chapter 10 he tells them not to worship idols, and sexual immorality keeps coming up alongside it. That's because Corinth had a temple of Aphrodite. In those days, idol worship was sexual immorality.",
          draw: [["clear"],
                 ["title", "t", "10:13, read again"],
                 ["write", "i1", [120, 290], "temple of Aphrodite", { size: 56, color: "gray" }],
                 ["write", "i2", { after: "i1", gap: 50 }, "idolatry = immorality", { size: 64, color: "red" }]] },
        { say: "It is in this context that the famous verse 13 comes. No temptation has taken you except what is common to man. God will make the way of escape, so that you may be able to endure it.",
          draw: [["write", "i3", [120, 420], "\"common temptation · way of escape\"", { size: 60, color: "blue" }]] },
        { say: "This doesn't mean God will help you overcome temptation. He has just been half threatening them with the story of those who died worshiping idols. If he suddenly said God will rescue you, it wouldn't fit, would it?",
          draw: [["write", "i4", [120, 550], "God helps you win?", { size: 60, color: "gray" }],
                 ["strike", "i4"]] },
        { say: "God is that kind of God. So if you worship idols, that is purely your own choice and your own fall. It is not God's testing.",
          draw: [["write", "i5", { after: "i4", gap: 110 }, "idolatry = your choice", { size: 60, color: "red" }],
                 ["arrow", "i4", "i5"],
                 ["box", "i5"]] },
        { say: "So we must not settle for a faith of memorizing a few key verses. Many people memorize this verse as a key verse, but it means something completely different, doesn't it?",
          draw: [["write", "i6", [120, 760], "memory-verse faith ✕ → read the context", { size: 60, color: "green" }]] }
      ]
    },
    {
      id: "veil", title: "Head Coverings and Love Feasts",
      beats: [
        { say: "Seventh, chapter 11, the problem of women's head coverings. The tradition Paul handed down was that men should not cover their heads, and women should wear a veil. It was a sign of being under a man's authority, and a sign of being married.",
          draw: [["clear"],
                 ["title", "t", "⑦ Veils  ⑧ Love feasts"],
                 ["write", "j1", [120, 290], "women: veil on head", { size: 60, color: "blue" }],
                 ["write", "j2", { after: "j1", gap: 40 }, "under authority · married", { size: 48, color: "gray" }]] },
        { say: "Hebrew thinking saw a woman's hair as sexual. Girls covered their hair from the age of 13, and showing your hair was thought of as almost like baring your breasts. Imagine how shocked Paul must have been when he came to Corinth.",
          draw: [["write", "j3", [180, 390], "Hebrew: showing hair ≈ baring the chest", { size: 48, color: "gray" }]] },
        { say: "It seems some women refused to wear it. Paul says firmly, the head of the woman is the man, the head of the man is Christ, and the head of Christ is God. All the churches of God have received this practice.",
          draw: [["write", "j4", [120, 500], "woman → man → Christ → God", { size: 56 }]] },
        { say: "Eighth, chapter 11 verse 17, the problem of the love feast after Sunday worship. He begins by saying, in this I do not praise you. This meal wasn't paid for out of the church budget. The rich each brought a little food and shared it.",
          draw: [["write", "j5", [120, 640], "love feast = the rich bring food to share", { size: 56, color: "blue" }]] },
        { say: "Those who only ever received felt uncomfortable and left without eating. With the leftover wine and bread, some got drunk, and the poor went hungry.",
          draw: [["write", "j6", [120, 740], "some drunk, some hungry", { size: 56, color: "red" }]] },
        { say: "Is it right for the rich to humiliate the poor? What I handed down to you is what Jesus said on the night he was betrayed, do this in remembrance of me. Not eating and having fun.",
          draw: [["write", "j7", [120, 840], "remember the Lord, not eat and have fun", { size: 50, color: "green" }]] }
      ]
    },
    {
      id: "gifts", title: "Many Kinds of Gifts",
      beats: [
        { say: "Ninth, the most serious problem, spiritual gifts. Spiritual gifts appeared and the church grew fast, but its foundation was weak.",
          draw: [["clear"],
                 ["title", "t", "⑨ Gifts (the most serious)"],
                 ["write", "k1", [120, 290], "fast growth · weak foundation", { size: 60 }]] },
        { say: "The so-called Paul party were women, the tongues party, the spiritual party. Apollos couldn't speak in tongues, so they looked down on him, and when he tried to preach, they would break out babbling in tongues.",
          draw: [["write", "k2", [120, 410], "Apollos looked down on: no tongues", { size: 56, color: "red" }]] },
        { say: "In the end, Apollos resigned over this. Chapter 16 verse 12. Paul strongly urged him to go back, but he had been so badly treated that he had no desire at all to go.",
          draw: [["write", "k3", [120, 530], "Apollos resigns", { size: 64, color: "red" }],
                 ["write", "k4", { after: "k3", gap: 50 }, "\"no desire at all to go\" (16:12)", { size: 48, color: "gray" }]] },
        { say: "What he says first in chapter 12 is that there are many kinds of gifts, but the same Spirit. In Greek culture, every field had its own god. Not so. The one Spirit distributes to each person.",
          draw: [["write", "k5", [120, 660], "many gifts, same Spirit", { size: 60, color: "blue" }],
                 ["write", "k6", { after: "k5", gap: 40 }, "(Greek: a god for each field)", { size: 44, color: "gray" }]] },
        { say: "So we are all members belonging to Christ, one body. And the order God set in the church is apostles, prophets, teachers, miracles, healings, helps, governments, and last of all tongues. Paul put tongues at the very end on purpose.",
          draw: [["write", "k7", [120, 790], "apostles · prophets · teachers … tongues last", { size: 56 }],
                 ["circle", "k7", "red"]] }
      ]
    },
    {
      id: "love", title: "Chapter 13, the Love Chapter",
      beats: [
        { say: "At the end of chapter 12 he says, earnestly desire the greater gifts, and I will show you a most excellent way. Then in chapter 13 he speaks of love. What is the greatest? Love.",
          draw: [["clear"],
                 ["title", "t", "ch. 13: the love chapter?"],
                 ["write", "l1", [120, 300], "most excellent way = love", { size: 64, color: "red" }]] },
        { say: "But this is not a lecture on love with no particular reader. In a letter with clear recipients, saying this is what love is, is a rebuke. You don't have this kind of love.",
          draw: [["write", "l2", [120, 430], "lecture on love", { size: 56, color: "gray" }],
                 ["strike", "l2"],
                 ["write", "l3", { after: "l2", gap: 100 }, "you have no love!", { size: 60, color: "red" }],
                 ["arrow", "l2", "l3"]] },
        { say: "From verse 1 he picks on tongues again, doesn't he? Though I speak with the tongues of men and of angels, but have not love, I am a clanging cymbal.",
          draw: [["write", "l4", [120, 560], "tongues of men, angels − love = clanging cymbal", { size: 54 }]] },
        { say: "Love is patient. That means they weren't patient. Love is kind. That means they weren't kind. Love does not behave rudely. Like the way some people get a little gift of tongues and right away start talking down to everyone.",
          draw: [["write", "l5", [120, 680], "patient → you weren't · kind → you weren't", { size: 52, color: "blue" }]] },
        { say: "In a word, the behavior of the Corinthian believers was lovelessness. It's a classy, indirect rebuke.",
          draw: [["write", "l6", [120, 810], "classy indirect rebuke", { size: 72, color: "red" }],
                 ["circle", "l6"]] }
      ]
    },
    {
      id: "tongues", title: "Tongues and Prophecy",
      beats: [
        { say: "In chapter 14 comes what he really wanted to say, tongues and prophecy. Chapters 12 and 13 are like an introduction. Follow after love, and earnestly desire spiritual gifts, but especially that you may prophesy.",
          draw: [["clear"],
                 ["title", "t", "ch. 14: what he really wants to say"],
                 ["write", "m1", { at: [430, 300] }, "tongues", { anchor: "middle", size: 80, color: "gray" }],
                 ["write", "m2", { at: [1170, 300] }, "prophecy", { anchor: "middle", size: 80, color: "blue" }]] },
        { say: "Tongues are spoken to God. But if no one understands and there is no interpreter, what good is it? It may build up the speaker, but it can't build up the church.",
          draw: [["write", "m3", { at: [430, 420] }, "to God · not understood", { anchor: "middle", size: 48 }],
                 ["write", "m4", { at: [430, 500] }, "builds only self", { anchor: "middle", size: 52, color: "gray" }]] },
        { say: "Prophecy is spoken to people, so it can be understood. It builds up, encourages, and comforts.",
          draw: [["write", "m5", { at: [1170, 420] }, "to people · understood", { anchor: "middle", size: 48 }],
                 ["write", "m6", { at: [1170, 500] }, "builds up the church", { anchor: "middle", size: 52, color: "green" }]] },
        { say: "He says tongues are a sign for unbelievers. So those who think they have great faith shouldn't go around showing off with it. And he speaks of order. If there's no interpreter, don't do it in church. If you do, take turns, and let one interpret.",
          draw: [["write", "m7", [120, 640], "no interpreter → not in church · take turns", { size: 54 }]] },
        { say: "And let women keep silent in the church. This is aimed squarely at the ones who caused the problem. Verse 37. If anyone thinks he is spiritual, let him know that what I write is the Lord's command. The conclusion is, decently and in order.",
          draw: [["write", "m8", [120, 790], "conclusion: decently and in order", { size: 64, color: "red" }],
                 ["under", "m8"]] }
      ]
    },
    {
      id: "resurrection", title: "Resurrection and the Collection",
      beats: [
        { say: "Tenth, chapter 15, misunderstandings about the resurrection. The Greeks thought death sets you free. They solved the problem of death by glorifying death.",
          draw: [["clear"],
                 ["title", "t", "⑩ Resurrection  ⑪ Collection"],
                 ["write", "n1", [120, 300], "Greek: death = freedom", { size: 60, color: "gray" }]] },
        { say: "So when Paul came and said the body will rise again, they couldn't accept it.",
          draw: [["write", "n2", { after: "n1", gap: 100 }, "bodily resurrection? no way", { size: 60, color: "red" }],
                 ["arrow", "n1", "n2"]] },
        { say: "Verse 51. At the last trumpet we will all be changed, in a moment, in the twinkling of an eye, and the dead will be raised. We'll deal with this in detail when we do Revelation.",
          draw: [["write", "n3", [120, 460], "last trumpet · changed in a moment · dead raised", { size: 52, color: "blue" }],
                 ["write", "n4", [180, 550], "(more in Revelation)", { size: 46, color: "gray" }]] },
        { say: "Finally, about the collection. This is more of an encouragement than a problem. Set it aside, I'll come and pick it up. That is First Corinthians.",
          draw: [["write", "n5", [120, 720], "collection: \"save it, I'll come get it\"", { size: 64, color: "green" }],
                 ["box", "n5", "green"]] }
      ]
    }
  ]
};
