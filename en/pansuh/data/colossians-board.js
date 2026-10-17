// Colossians whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does.
window.BOARD = {
  scenes: [
    {
      id: "background", title: "Background",
      beats: [
        { say: "Colossians was written together with Ephesians. Colossians speaks of Christ, the head of the church,",
          draw: [["title", "t", "Background of Colossians"],
                 ["write", "a1", [120, 290], "Colossians:", { size: 56, color: "gray" }],
                 ["write", "a2", { after: "a1", gap: 24 }, "head of church", { color: "red" }]] },
        { say: "and Ephesians speaks of the church, the body of Christ. The two books make a pair.",
          draw: [["write", "a3", [120, 400], "Ephesians:", { size: 56, color: "gray" }],
                 ["write", "a4", { after: "a3", gap: 24 }, "body of Christ", { color: "blue" }],
                 ["line", [100, 440], [900, 440], "gray"]] },
        { say: "Colossae is right next to Ephesus, isn't it? It was not a church Paul planted. It was started by people who had learned the Bible from Paul in the school of Tyrannus.",
          draw: [["photo", "p1", "../../pansuh/img/p4/image69.jpg", [1060, 190, 480, 270], { tilt: 2, caption: "Colossae near Ephesus" }],
                 ["write", "a5", [120, 560], "church founded by Tyrannus grads", { size: 56 }]] },
        { say: "A man named Epaphras was serving there. When he heard Paul was in prison, he went all the way to Rome to find him.",
          draw: [["write", "a6", [120, 680], "Epaphras", { size: 60, color: "blue" }],
                 ["write", "a7", { after: "a6", gap: 110 }, "Paul in Rome", { size: 60 }],
                 ["arrow", "a6", "a7"]] },
        { say: "So Paul, with deep love and affection, wrote a Christology and sent it to them. In Korean, the word for this is gidok-ron, and gidok is the Chinese-character transliteration of Christ.",
          draw: [["write", "a8", [120, 810], "Christology = doctrine of Christ", { size: 64, color: "red" }],
                 ["box", "a8"]] }
      ]
    },
    {
      id: "christ", title: "The Christ Colossians Shows",
      beats: [
        { say: "Strictly speaking, all the religions that speak of Christ, the Roman Catholic Church, the Eastern Orthodox Church, and Protestantism, are called Christianity. For us, it is more accurate to say Protestant. The Korean word for Protestant, gaesin, means to reform and to renew.",
          draw: [["clear"],
                 ["title", "t", "The Christ Colossians shows"],
                 ["write", "b1", [120, 290], "Christianity: Catholic · Orthodox · Protestant", { size: 48, color: "gray" }],
                 ["write", "b2", [120, 380], "Protestant (gaesin) = reform + renew", { size: 52, color: "gray" }]] },
        { say: "Colossians shows Christ in twelve ways. First, the preexistent Christ, who was there before any creature existed. And Christ the Creator, who created together with the triune God.",
          draw: [["photo", "p2", "../../pansuh/img/p4/image70.jpg", [1060, 470, 460, 259], { tilt: -2 }],
                 ["write", "b3", [120, 500], "preexistent · Creator", { color: "blue" }]] },
        { say: "If we could see God with our eyes, he would look like Jesus. Christ, the image of God. Christ, who is above all angels, principalities, powers, and thrones.",
          draw: [["write", "b4", [120, 610], "image of God · above angels", { size: 64, color: "blue" }]] },
        { say: "All the mysteries of the universe are filled up in him. He is the Savior, and the Christ who mediates between us and God.",
          draw: [["write", "b5", [120, 720], "mystery · Savior · Mediator", { size: 64, color: "blue" }]] },
        { say: "The Son of God, the head of the church, the one who dwells in you, the one who will come again, the one who will judge the living and the dead. It is packed full of words about Christ.",
          draw: [["write", "b6", [120, 830], "packed full of Christ", { size: 60, color: "red" }],
                 ["under", "b6"]] }
      ]
    },
    {
      id: "heresy", title: "The Colossian Heresy and Christ Preeminent",
      beats: [
        { say: "At that time Colossae was a crossroads linking east and west, so all kinds of philosophies lived side by side. That is how the Colossian heresy came about.",
          draw: [["clear"],
                 ["title", "t", "Christ preeminent"],
                 ["write", "c1", [120, 290], "crossroads", { size: 56, color: "gray" }],
                 ["write", "c2", { after: "c1", gap: 110 }, "Colossian heresy", { color: "red" }],
                 ["arrow", "c1", "c2"]] },
        { say: "It was a jumbled mix of Judaism and Gnosticism.",
          draw: [["write", "c3", { after: "c2", gap: 40 }, "= Judaism + Gnosticism", { size: 48, color: "gray" }]] },
        { say: "Paul refutes these ideas and describes how Christ is preeminent in four main relationships. First, his relationship to God, chapter 1 verse 15. He is the image of God and the firstborn of every creature.",
          draw: [["write", "c4", [120, 420], "① to God", { color: "blue" }],
                 ["write", "c4b", [520, 420], "1:15 image · firstborn", { size: 56 }]] },
        { say: "His relationship to creation, verses 16 and 17. He is the Creator.",
          draw: [["write", "c5", [120, 530], "② to creation", { color: "blue" }],
                 ["write", "c5b", [520, 530], "1:16~17 Creator", { size: 56 }]] },
        { say: "His relationship to the church, verse 18. He is the head of the church.",
          draw: [["write", "c6", [120, 640], "③ to church", { color: "blue" }],
                 ["write", "c6b", [520, 640], "1:18 head of church", { size: 56 }]] },
        { say: "And his work of redemption, verses 19 to 23. Through the blood of the cross he reconciled all things to God and completed redemption.",
          draw: [["write", "c7", [120, 750], "④ redemption", { color: "blue" }],
                 ["write", "c7b", [520, 750], "1:19~23 reconciled by blood of cross", { size: 52, color: "red" }],
                 ["under", "c7b"]] }
      ]
    },
    {
      id: "ch2", title: "Chapter 2: Shadow and Reality",
      beats: [
        { say: "Chapter 2 verse 8. Beware lest any man spoil you through philosophy and vain deceit. The mark of false teachings is rationalism, putting human reason first. In the end they deny revelation.",
          draw: [["clear"],
                 ["title", "t", "Chapter 2"],
                 ["write", "d1", [120, 290], "rationalism · reason", { size: 60 }],
                 ["write", "d2", { after: "d1", gap: 110 }, "deny revelation", { size: 60, color: "red" }],
                 ["arrow", "d1", "d2"]] },
        { say: "Verse 9 is the answer. The fullness of the Godhead dwelt in Christ, who came in the flesh. He is a man, and he is God. Believers are being made full in him.",
          draw: [["write", "d3", [120, 410], "answer v. 9: fullness of Godhead in Christ", { size: 52, color: "blue" }]] },
        { say: "Verse 11. The circumcision made without hands means the baptism of verse 12. Through baptism we become one body with Christ, so when he died we died, and when he rose we rose too.",
          draw: [["write", "d4", [120, 530], "circumcision w/o hands = baptism", { size: 56 }],
                 ["write", "d5", [180, 630], "died with him, rose with him", { size: 52, color: "green" }]] },
        { say: "The conclusion is verse 16. Let no man judge you in meat, or in drink, or in respect of a feast day, or of the sabbath. These are only a shadow of things to come.",
          draw: [["write", "d6", [120, 770], "food · drink · feasts · sabbath = shadow", { size: 52, color: "gray" }]] },
        { say: "But Christ is the reality itself. So Christ is preeminent.",
          draw: [["write", "d7", [1060, 640], "Christ = reality", { size: 64, color: "red" }],
                 ["box", "d7"]] }
      ]
    },
    {
      id: "practice", title: "Chapters 3 and 4: Practice",
      beats: [
        { say: "Chapters 3 and 4 are the practical part. If ye then be risen with Christ, seek those things which are above.",
          draw: [["clear"],
                 ["title", "t", "Ch. 3 · 4: Practice"],
                 ["write", "e1", [120, 290], "seek things above", { color: "blue" }],
                 ["under", "e1", "blue"]] },
        { say: "Seeking the things above means putting to death your members which are upon the earth. Fornication, uncleanness, inordinate affection, evil desire, and covetousness, which is idolatry. From verse 18 on, it is the same as Ephesians.",
          draw: [["write", "e2", [120, 400], "= put to death earthly members", { size: 56 }],
                 ["write", "e3", [180, 490], "fornication · uncleanness · passion · evil desire · greed", { size: 44, color: "gray" }]] },
        { say: "Chapter 4 is an exhortation to prayer and thanksgiving. He asks them to pray that God would open a door for the word, so he can speak the mystery of Christ. All of Paul's prayer requests are about preaching the gospel.",
          draw: [["write", "e4", [120, 620], "prayer request = door for gospel", { size: 60, color: "red" }]] },
        { say: "Verse 16. This letter is a circular, to be passed around and read. Verse 17. He tells Archippus, Philemon's son, to fulfill the ministry he received in the Lord. It seems he had stopped serving for some reason.",
          draw: [["write", "e5", [120, 730], "circular letter (v. 16)", { size: 50, color: "gray" }],
                 ["write", "e6", { after: "e5", gap: 50 }, "Archippus, fulfill your ministry (v. 17)", { size: 46 }]] },
        { say: "In the end, Colossians is saying: don't be distracted by the empty philosophies of the world. Let's really get to know Christ properly.",
          draw: [["write", "e7", [120, 840], "no distractions, know Christ rightly", { size: 60, color: "green" }]] }
      ]
    }
  ]
};
