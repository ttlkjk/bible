// Revelation whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does.
window.BOARD = {
  scenes: [
    {
      id: "intro", title: "How to Approach Revelation",
      beats: [
        { say: "Now we come to Revelation. First, with what attitude should we approach the book of Revelation?",
          draw: [["title", "t", "Revelation: Overview"],
                 ["photo", "p1", "img/p4/image93.jpg", [1080, 190, 440, 248], { tilt: 3 }],
                 ["write", "a1", [120, 300], "how to approach Revelation", { color: "blue" }],
                 ["under", "a1", "blue"]] },
        { say: "First, Revelation is easy. There's no need to be afraid of it.",
          draw: [["write", "a2", [160, 450], "① it's easy", { size: 80, color: "red" }],
                 ["circle", "a2"]] },
        { say: "Second, if at all possible, get to know it well.",
          draw: [["write", "a3", [160, 600], "② get to know it well", { size: 72 }]] },
        { say: "I'll tell you later which parts are hard. Most of it you can pretty much understand just by reading.",
          draw: [["write", "a4", [160, 750], "most of it is clear just by reading", { size: 50, color: "gray" }]] }
      ]
    },
    {
      id: "background", title: "Historical Background",
      beats: [
        { say: "Revelation was written at a time when Rome had conquered and ruled the world. Here, the world means the Mediterranean region, not including China or India.",
          draw: [["clear"],
                 ["title", "t", "Historical background"],
                 ["write", "b1", [100, 290], "when Rome ruled the world", { size: 60 }],
                 ["write", "b1n", [140, 370], "world = Mediterranean region (not China · India)", { size: 44, color: "gray" }]] },
        { say: "It was the reign of the eleventh emperor, Flavius Domitian. All the other apostles had been martyred, and only the apostle John was left, watching over the churches.",
          draw: [["write", "b2", [100, 480], "11th emperor Domitian", { size: 60, color: "blue" }],
                 ["write", "b3", { after: "b2", gap: 50 }, "only John left", { size: 60, color: "red" }]] },
        { say: "From A.D. 64 to 68, the first persecution, under Emperor Nero, had passed.",
          draw: [["write", "b4", [100, 600], "A.D. 64~68", { size: 56, color: "gray" }],
                 ["write", "b5", { after: "b4", gap: 40 }, "1st persecution: Nero", { size: 56 }]] },
        { say: "In A.D. 70, the city of Jerusalem fell and the temple burned. The one who took the city was General Titus, the older brother of Emperor Domitian.",
          draw: [["write", "b6", [100, 700], "A.D. 70", { size: 56, color: "gray" }],
                 ["write", "b7", { after: "b6", gap: 40 }, "Jerusalem falls · temple burns", { size: 56 }],
                 ["write", "b7n", { after: "b7", gap: 40 }, "(Titus = emperor's brother)", { size: 44, color: "gray" }]] },
        { say: "And from A.D. 90 to 96, in the middle of the second persecution, under Domitian, Revelation was written.",
          draw: [["write", "b8", [100, 810], "A.D. 90~96", { size: 56, color: "gray" }],
                 ["write", "b9", { after: "b8", gap: 40 }, "written during 2nd persecution: Domitian", { size: 56, color: "red" }],
                 ["under", "b9"]] }
      ]
    },
    {
      id: "church", title: "The Church at That Time",
      beats: [
        { say: "What was the church like at that time? The believers and the ministers were gripped by extreme worry, anxiety, and fear.",
          draw: [["clear"],
                 ["title", "t", "The church at that time"],
                 ["photo", "p2", "img/p4/image95.jpg", [1100, 190, 420, 236], { tilt: -2 }],
                 ["write", "c1", [120, 300], "worry · anxiety · fear", { size: 72, color: "red" }]] },
        { say: "Believers who were weak in faith hastily concluded that they could not believe in Christ's return at all.",
          draw: [["write", "c2", [120, 430], "\"can't believe He'll return\"", { size: 60 }]] },
        { say: "And other believers hastily concluded that the time of the Lord's return was just around the corner.",
          draw: [["write", "c3", [120, 540], "\"His return is imminent\"", { size: 60 }],
                 ["write", "c3n", { after: "c3", gap: 40 }, "→ both too hasty", { size: 48, color: "gray" }]] },
        { say: "That is why this revelation was given. As Peter said, the church can endure a time of persecution only when it has this kind of hope.",
          draw: [["write", "c4", [120, 700], "hope lets us endure", { size: 80, color: "green" }],
                 ["box", "c4", "green"]] }
      ]
    },
    {
      id: "fear", title: "Fear Not",
      beats: [
        { say: "The first message of Revelation is this. Fear not.",
          draw: [["clear"],
                 ["title", "t", "ch. 1 · Fear not"],
                 ["photo", "p3", "img/p4/image96.jpg", [1080, 190, 440, 248], { tilt: 2, caption: "The revelation on Patmos" }]] },
        { say: "It says blessed is he who reads, and those who hear the words of this prophecy, and keep the things written in it. We are reading and hearing right now, aren't we? Now all we have to do is keep it.",
          draw: [["write", "d1", [100, 300], "who read · who hear · who keep", { size: 60 }],
                 ["write", "d2", [140, 400], "= blessed", { size: 60, color: "green" }],
                 ["write", "d2n", { after: "d2", gap: 40 }, "now just keep it!", { size: 48, color: "gray" }]] },
        { say: "Behold, he cometh with clouds. If he doesn't come on the clouds, it's a fake. In Korea alone there are more than thirty people who call themselves Jesus, and they are all fakes.",
          draw: [["write", "d3", [100, 560], "He comes with clouds", { color: "blue" }],
                 ["write", "d4", { after: "d3", gap: 50 }, "30+ self-made Jesuses = fake", { size: 52, color: "red" }],
                 ["strike", "d4"]] },
        { say: "This time he does not come as a man, as he did before. He comes as the Judge.",
          draw: [["write", "d5", [100, 700], "as a man", { size: 60, color: "gray" }],
                 ["write", "d6", { after: "d5", gap: 120 }, "comes as Judge", { size: 72, color: "red" }],
                 ["arrow", "d5", "d6"],
                 ["circle", "d6"]] },
        { say: "John was on the island called Patmos. On the Lord's day he was in the Spirit, and he heard a great voice, like a trumpet. What thou seest, write in a book, and send it unto the seven churches.",
          draw: [["write", "d7", [100, 820], "Patmos · Lord's day · \"send it to the seven churches\"", { size: 50, color: "gray" }]] }
      ]
    },
    {
      id: "sonofman", title: "One Like the Son of Man",
      beats: [
        { say: "He turned to see the voice, and he saw seven golden lampstands, and among them stood one like the Son of man.",
          draw: [["clear"],
                 ["title", "t", "One like the Son of man"],
                 ["photo", "p4", "img/p4/image105.jpg", [1080, 170, 440, 248], { tilt: -2 }],
                 ["write", "e1", [100, 300], "among seven golden lampstands", { size: 60 }],
                 ["write", "e2", [100, 400], "one like the Son of man", { size: 72, color: "blue" }]] },
        { say: "His eyes were like a flame of fire, his voice like the sound of many waters, and his face like the sun shining in its strength. In contrast to the Jesus in the Gospels who died so helplessly, he appears full of glory and majesty.",
          draw: [["write", "e3", [100, 540], "Jesus who died helpless", { size: 56, color: "gray" }],
                 ["write", "e4", { after: "e3", gap: 110 }, "glory · majesty", { size: 72, color: "red" }],
                 ["arrow", "e3", "e4"]] },
        { say: "John fell at his feet as though dead, and the Lord laid his right hand on him and said: Fear not. I am the first and the last. I am he that liveth.",
          draw: [["write", "e5", [100, 680], "\"Fear not · I am he that liveth\"", { size: 64, color: "blue" }]] },
        { say: "The keys of death and of Hades are not held by the king of the underworld. Jesus holds them. He is not a dead Jesus but the living Jesus. So he shows enough evidence that we have no need to fear, and then he tells us, fear not.",
          draw: [["write", "e6", [100, 810], "keys of death and Hades", { size: 56 }],
                 ["write", "e7", { after: "e6", gap: 40 }, "underworld king", { size: 56, color: "gray" }],
                 ["strike", "e7"],
                 ["write", "e8", { after: "e7", gap: 40 }, "Jesus", { size: 64, color: "red" }],
                 ["circle", "e8"]] }
      ]
    },
    {
      id: "three", title: "Write Three Things",
      beats: [
        { say: "Write the things which thou hast seen, and the things which are, and the things which shall be hereafter. These three are what John deals with.",
          draw: [["clear"],
                 ["title", "t", "Contents of Revelation"],
                 ["write", "f1", [120, 300], "① what you have seen", { size: 64 }],
                 ["write", "f1c", [700, 300], "ch. 1", { size: 64, color: "blue" }],
                 ["write", "f2", [120, 410], "② the things which are", { size: 64 }],
                 ["write", "f2c", [700, 410], "ch. 2~3", { size: 64, color: "blue" }],
                 ["write", "f3", [120, 520], "③ things to come", { size: 64 }],
                 ["write", "f3c", [700, 520], "ch. 6~22", { size: 64, color: "blue" }]] },
        { say: "What he had seen was the seven stars in the right hand and the seven golden lampstands. The seven lampstands are the seven churches, and the seven stars are the angels of the seven churches, that is, their ministers.",
          draw: [["write", "f4", [120, 660], "7 lampstands = 7 churches", { size: 56 }],
                 ["write", "f5", [120, 770], "7 stars = ministers of the 7 churches", { size: 56, color: "red" }]] },
        { say: "The things which are, are chapters 2 and 3: letters of praise and rebuke sent to the seven churches. Ephesus, Smyrna, Pergamum, Thyatira, Sardis, Philadelphia, and Laodicea.",
          draw: [["photo", "p5", "img/p4/image103.jpg", [1100, 190, 420, 236], { tilt: 2, caption: "Site of the church in Philadelphia" }],
                 ["write", "f6", [1000, 600], "letters: praise & rebuke", { size: 56, color: "blue" }]] },
        { say: "The believers didn't realize how lacking their own churches were. They were scared and anxious, so they only wanted Jesus to come. But according to Jesus, many of the churches were a mess.",
          draw: [["write", "f7", [1000, 720], "many were a mess", { size: 56, color: "red" }],
                 ["under", "f7"]] }
      ]
    },
    {
      id: "heaven", title: "Worship in Heaven",
      beats: [
        { say: "Chapter 4. A door is opened in heaven, and a voice is heard. Come up hither.",
          draw: [["clear"],
                 ["title", "t", "Worship in heaven (ch. 4~5)"],
                 ["write", "g1", [100, 300], "\"Come up hither\"", { size: 64, color: "blue" }]] },
        { say: "False end-times teachers insist this is the rapture. But this is God calling up one man, John. The purpose is to show him the things which must be hereafter, that is, the things to come.",
          draw: [["write", "g2", [100, 410], "rapture", { size: 60, color: "gray" }],
                 ["strike", "g2"],
                 ["write", "g3", { after: "g2", gap: 40 }, "calls up John alone", { size: 60, color: "red" }],
                 ["write", "g3n", [140, 490], "purpose: to show what's to come", { size: 44, color: "gray" }]] },
        { say: "John goes up and sees a scene of worship in heaven. There is a throne adorned with jewels, and around it sit the twenty-four elders wearing crowns.",
          draw: [["photo", "p6", "img/p4/image108.jpg", [1080, 180, 440, 248], { tilt: 2, caption: "The throne of God" }],
                 ["write", "g4", [100, 610], "throne · 24 elders", { size: 60 }]] },
        { say: "Around the throne are four living creatures, like a lion, a calf, a man, and an eagle. They are angels called cherubim. Day and night they praise, Holy, holy.",
          draw: [["write", "g5", { after: "g4", gap: 50 }, "4 living creatures = cherubim", { size: 60, color: "blue" }],
                 ["write", "g6", [140, 700], "lion · calf · man · eagle", { size: 46, color: "gray" }]] },
        { say: "In the right hand of him who sits on the throne is a book sealed with seven seals. A strong angel cries out: Who is worthy to open the book, and to loose the seals thereof?",
          draw: [["write", "g7", [100, 810], "book sealed with 7 seals → who can open it?", { size: 60, color: "red" }]] }
      ]
    },
    {
      id: "lamb", title: "The Lamb Who Opens the Seals",
      beats: [
        { say: "Who opens it? The Lamb comes forward and takes the book. The Lamb is Jesus.",
          draw: [["clear"],
                 ["title", "t", "Who opens the seals?"],
                 ["photo", "p7", "img/p4/image111.jpg", [1060, 170, 460, 259], { tilt: -2 }],
                 ["write", "h1", [120, 320], "the Lamb = Jesus", { size: 80, color: "red" }],
                 ["circle", "h1"]] },
        { say: "Then the four living creatures and the twenty-four elders fall down before the Lamb, holding harps and golden bowls full of incense.",
          draw: [["write", "h2", [120, 480], "harps · golden bowls of incense", { size: 60 }]] },
        { say: "This incense is the prayers of the saints.",
          draw: [["write", "h3", [120, 610], "incense = prayers of saints", { size: 72, color: "blue" }],
                 ["box", "h3", "blue"]] },
        { say: "And from chapter 6, he begins to open the seals.",
          draw: [["write", "h4", [120, 770], "from ch. 6: seals opened", { size: 64, color: "red" }],
                 ["under", "h4"]] }
      ]
    },
    {
      id: "seals", title: "The Four Horsemen",
      beats: [
        { say: "The first seal is a white horse. The white horse is always the conqueror. Once he has received the crown, he should stop. But he still holds a bow and goes on conquering and to conquer. It means war keeps going on.",
          draw: [["clear"],
                 ["title", "t", "Seven seals (ch. 6)"],
                 ["photo", "p8", "img/p4/image112.jpg", [1080, 170, 440, 248], { tilt: 2, caption: "The four horsemen" }],
                 ["write", "i1", [100, 300], "① white", { size: 60 }],
                 ["write", "i1b", [400, 300], "conquering and to conquer", { size: 56, color: "gray" }]] },
        { say: "The second seal is a red horse. It means war.",
          draw: [["write", "i2", [100, 410], "② red", { size: 60, color: "red" }],
                 ["write", "i2b", [400, 410], "war", { size: 56 }]] },
        { say: "The third seal is a black horse: severe famine. A measure of wheat for a denarius. That measure is a choenix, about a cup of flour. A cup for a working man's full day's wage. That's about 180,000 won. Murderous prices.",
          draw: [["write", "i3", [100, 520], "③ black", { size: 60 }],
                 ["write", "i3b", [400, 520], "famine · 1 cup = 180,000 won", { size: 52, color: "blue" }]] },
        { say: "The rider holds a pair of scales in his hand. As in Leviticus, scales are picture language for severe famine.",
          draw: [["write", "i3n", [400, 600], "scales = picture of famine", { size: 44, color: "gray" }]] },
        { say: "The fourth seal is a pale horse: death. Pale is the color of a corpse. A fourth of the earth dies. We may not know the month or the day, but when this happens, we will know the fourth seal has been opened.",
          draw: [["write", "i4", [100, 720], "④ pale", { size: 60 }],
                 ["write", "i4b", [450, 720], "death · 1/4 of earth dies", { size: 56, color: "red" }],
                 ["under", "i4b"]] }
      ]
    },
    {
      id: "seals2", title: "The Fifth and Sixth Seals",
      beats: [
        { say: "When the fifth seal is opened, we see the souls of those martyred since the creation of the world. Their bodies have not yet been raised. They are still souls.",
          draw: [["clear"],
                 ["title", "t", "5th · 6th seals"],
                 ["photo", "p9", "img/p4/image114.jpg", [1100, 170, 420, 236], { tilt: -2 }],
                 ["write", "j1", [100, 300], "⑤ souls of martyrs", { size: 64 }]] },
        { say: "The martyrs ask: How long until you avenge us? The answer is: Wait until the number of the martyrs is complete.",
          draw: [["write", "j2", [140, 410], "\"How long?\"", { size: 56, color: "gray" }],
                 ["write", "j3", { after: "j2", gap: 110 }, "until the number is full", { size: 60, color: "blue" }],
                 ["arrow", "j2", "j3"]] },
        { say: "At the sixth seal there is a great earthquake, the sun becomes black, and the stars of heaven fall to the earth. That happened in Russia not long ago, didn't it? I wonder if some angel was practicing ahead of time.",
          draw: [["photo", "p10", "img/p4/image115.jpg", [1100, 470, 420, 236], { tilt: 2, caption: "The day the stars fall" }],
                 ["write", "j4", [100, 560], "⑥ stars fall", { size: 64, color: "red" }],
                 ["write", "j4n", [140, 640], "Russia? angel practicing?", { size: 44, color: "gray" }]] },
        { say: "Not only do the stars fall, but the sky departs, and it's an earthquake so great that mountains and islands are moved.",
          draw: [["write", "j5", [100, 740], "sky departs · mountains & islands moved", { size: 50 }]] },
        { say: "So people say: Mountains and rocks, fall on us and hide us. This is the last chance to repent.",
          draw: [["write", "j6", [100, 830], "\"rocks, hide us\" → last chance to repent", { size: 52, color: "red" }]] }
      ]
    },
    {
      id: "sealed", title: "Those Who Are Sealed",
      beats: [
        { say: "Chapter 7. Then those who repented are sealed on their foreheads. This also appears in Ezekiel chapter 9.",
          draw: [["clear"],
                 ["title", "t", "The sealed (ch. 7)"],
                 ["photo", "p11", "img/p4/image116.jpg", [1080, 170, 440, 248], { tilt: 2 }],
                 ["write", "k1", [100, 310], "seal on foreheads of the repentant", { size: 64, color: "blue" }],
                 ["write", "k1n", [140, 390], "also in Ezek ch. 9", { size: 44, color: "gray" }]] },
        { say: "Those sealed among the Jews are twelve thousand from each of the twelve tribes, a hundred and forty-four thousand.",
          draw: [["write", "k2", [100, 520], "12 tribes × 12,000", { size: 60 }],
                 ["write", "k3", { after: "k2", gap: 40 }, "= 144,000", { size: 72, color: "red" }],
                 ["circle", "k3"]] },
        { say: "And then Christians come from all over the world, Koreans included.",
          draw: [["write", "k4", [100, 680], "Christians from all the world (Korea too)", { size: 60 }]] },
        { say: "These are all people washed in the blood of the Lamb.",
          draw: [["write", "k5", [140, 790], "= washed in the Lamb's blood", { size: 64, color: "green" }],
                 ["under", "k5", "green"]] }
      ]
    },
    {
      id: "trumpets", title: "The Seven Trumpets",
      beats: [
        { say: "The seventh seal doesn't bring an event of its own. It brings the seven trumpets. All right, now the trumpets sound.",
          draw: [["clear"],
                 ["title", "t", "Seven trumpets (ch. 8~11)"],
                 ["photo", "p12", "img/p4/image118.jpg", [1100, 170, 420, 236], { tilt: -2, caption: "Ready to sound the trumpets" }],
                 ["write", "l0", [100, 290], "7th seal → 7 trumpets", { size: 60, color: "blue" }]] },
        { say: "At the first trumpet, a third of the trees on land burn up. At the second, a third of the sea creatures die. At the third, a third of the fresh water turns bitter. At the fourth, a third of the sun, moon, and stars are struck.",
          draw: [["write", "l1", [100, 390], "① trees 1/3  ② sea creatures 1/3", { size: 52 }],
                 ["write", "l2", [100, 470], "③ fresh water 1/3  ④ sun · moon · stars 1/3", { size: 52 }]] },
        { say: "At the fifth trumpet, locusts sting the people who never repented and did not receive the seal. It hurts like a scorpion's sting, so much that they would bite their tongues and try to die, but for five months they cannot die. And still they grind their teeth and blaspheme God.",
          draw: [["write", "l3", [100, 570], "⑤ locusts · 5 months, can't even die", { size: 56, color: "red" }],
                 ["write", "l3n", [140, 640], "still grind teeth and blaspheme God", { size: 44, color: "gray" }]] },
        { say: "At the sixth trumpet, a great war breaks out in the Middle East and a third die. Out of eight billion, a fourth die at the fourth seal, leaving six billion. Then a third die here, leaving four billion. Right before Jesus comes, fifty percent die.",
          draw: [["write", "l4", [100, 740], "⑥ Mideast war 1/3", { size: 56 }],
                 ["write", "l5", { after: "l4", gap: 50 }, "8 bn → 6 bn → 4 bn", { size: 56, color: "blue" }],
                 ["write", "l6", { after: "l5", gap: 40 }, "50%", { size: 72, color: "red" }],
                 ["circle", "l6"]] },
        { say: "This is truly the moment right before Jesus returns, right before the rapture. And the seventh trumpet is an angel announcing the last trumpet.",
          draw: [["write", "l7", [100, 830], "⑦ angel announcing the last trumpet", { size: 52, color: "blue" }]] }
      ]
    },
    {
      id: "lasttrumpet", title: "The Last Trumpet",
      beats: [
        { say: "Chapter 10. An angel standing with one foot on the sea and one foot on the land swears an oath: There will be no more delay. When the seventh angel sounds his trumpet, the mystery of God will be finished.",
          draw: [["clear"],
                 ["title", "t", "The last trumpet (ch. 10~11)"],
                 ["photo", "p13", "img/p4/image120.jpg", [1080, 170, 440, 248], { tilt: 2 }],
                 ["write", "m1", [100, 300], "\"no more delay\"", { size: 64, color: "blue" }]] },
        { say: "You know ring girls, right? This angel is a ring angel. An angel like this comes down with the seventh trumpet.",
          draw: [["write", "m2", [100, 410], "ring girl → ring angel", { size: 56, color: "gray" }]] },
        { say: "To see what that mystery is, let's look at 1 Corinthians chapter 15. In a moment, at the last trump, we shall all be changed. The rapture and Jesus' return happen at exactly this time.",
          draw: [["write", "m3", [100, 540], "last trumpet = rapture · return", { size: 64, color: "red" }],
                 ["under", "m3"],
                 ["write", "m3n", [140, 620], "1 Cor 15:51~52 · all changed in a moment", { size: 44, color: "gray" }]] },
        { say: "By the sixth trumpet, half of the population has died. A figure appears who skillfully overcomes this great tribulation. He is the Antichrist.",
          draw: [["write", "m4", [100, 720], "skillfully overcomes great tribulation", { size: 52 }],
                 ["write", "m5", { after: "m4", gap: 40 }, "= Antichrist", { size: 60, color: "red" }],
                 ["box", "m5"]] },
        { say: "In chapter 11, two witnesses appear who preach the gospel to the Jews in the last days. When the beast kills them, people celebrate by sending gifts to one another. But after three and a half days they rise again and go up to heaven.",
          draw: [["write", "m6", [100, 830], "two witnesses · mission to Jews · risen after 3½ days", { size: 50, color: "blue" }]] }
      ]
    },
    {
      id: "pause", title: "The Moment History Stopped",
      beats: [
        { say: "In chapter 11, verse 15, the trumpet sounds. So in chapter 12, either Jesus should come down or people should be raptured. But none of that appears. Instead, strange things start to appear.",
          draw: [["clear"],
                 ["title", "t", "Saints and unbelievers part ways"],
                 ["write", "n1", [100, 300], "11:15 trumpet", { size: 60 }],
                 ["write", "n2", { after: "n1", gap: 110 }, "ch. 12: strange content?", { size: 60, color: "gray" }],
                 ["arrow", "n1", "n2"]] },
        { say: "The rapture has already happened, and the saints have all disappeared. The moment the seventh trumpet sounded, history came to a dead stop.",
          draw: [["write", "n3", [100, 430], "history stops dead!", { size: 80, color: "red" }],
                 ["box", "n3"]] },
        { say: "So John pauses for a moment too. In chapters 12, 13, and 14, he shows how things came to this, the highlights from the beginning of the spiritual world until now. Only the very biggest events.",
          draw: [["write", "n4", [100, 570], "ch. 12~14 = highlights of history", { size: 60, color: "blue" }]] },
        { say: "Chapter 15 shows the raptured saints. Chapters 16 to 18 show the wrath and judgment poured out on the world left behind. Chapters 19 and 20 go back to where the raptured saints are. Like a camera cutting from place to place, the revelation goes in three directions.",
          draw: [["photo", "p14", "img/p4/image123.jpg", [1120, 230, 400, 300], { tilt: 2, caption: "Revelation in three directions" }],
                 ["write", "n5", [100, 690], "ch. 15 saints · ch. 16~18 wrath · ch. 19~20 saints", { size: 50 }],
                 ["write", "n6", [100, 800], "like a camera cutting around", { size: 56, color: "red" }],
                 ["under", "n6"]] }
      ]
    },
    {
      id: "dragon", title: "The Woman and the Dragon",
      beats: [
        { say: "Chapter 12. A woman clothed with the sun wears a crown of twelve stars on her head, with the moon under her feet. She is with child, a male child who will rule all nations with a rod of iron. This child is Jesus.",
          draw: [["clear"],
                 ["title", "t", "Israel and the devil (ch. 12)"],
                 ["photo", "p15", "img/p4/image124.jpg", [1080, 170, 440, 248], { tilt: -2, caption: "The woman and the dragon" }],
                 ["write", "o1", [100, 300], "male child = Jesus", { size: 60, color: "blue" }]] },
        { say: "The woman who carried Jesus is not Mary but the nation of Israel. The sun, the moon, and twelve stars also appeared in Joseph's dream.",
          draw: [["write", "o2", [100, 410], "Mary", { size: 60, color: "gray" }],
                 ["strike", "o2"],
                 ["write", "o3", { after: "o2", gap: 40 }, "woman = nation of Israel", { size: 64, color: "red" }],
                 ["write", "o3n", [140, 490], "Joseph's dream: sun · moon · 12 stars", { size: 44, color: "gray" }]] },
        { say: "A dragon with seven heads and ten horns tried to devour the child. But Jesus ascended to heaven, and Israel fled into the wilderness for 1,260 days.",
          draw: [["write", "o4", [100, 610], "dragon: 7 heads 10 horns", { size: 46 }],
                 ["write", "o5", { after: "o4", gap: 30 }, "→ ascends · desert 1260 days", { size: 46, color: "blue" }]] },
        { say: "When the dragon arrogantly went up to challenge heaven, Michael stopped him, struck him where it hurts, and threw him down to the earth. He took a third of the stars of heaven with him, his underlings. So that means our side is bigger, right?",
          draw: [["photo", "p16", "img/p4/image126.jpg", [1100, 520, 420, 236], { tilt: 2, caption: "Michael's war with the dragon" }],
                 ["write", "o6", [100, 720], "Michael casts out dragon · 1/3 of stars", { size: 56 }],
                 ["write", "o6n", [140, 800], "our side is bigger!", { size: 48, color: "green" }]] },
        { say: "Heaven rejoices, but now the people on earth are in trouble. The devil has come down in great wrath, knowing his time is short. The woman is protected in the wilderness with the wings of a great eagle, and the earth opens its mouth and swallows the water the dragon spewed out.",
          draw: [["write", "o7", [560, 800], "devil came down in wrath", { size: 52, color: "red" }]] }
      ]
    },
    {
      id: "beast", title: "The Beast and 666",
      beats: [
        { say: "Chapter 13. A beast with ten horns and seven heads comes up out of the sea. It receives authority from the dragon and blasphemes and persecutes the saints. It bears the mark 666.",
          draw: [["clear"],
                 ["title", "t", "The beast appears (ch. 13)"],
                 ["photo", "p17", "img/p4/image129.jpg", [1080, 170, 440, 248], { tilt: 2, caption: "Revelation chapter 13" }],
                 ["write", "q1", [100, 300], "beast from the sea", { size: 60 }],
                 ["write", "q2", { after: "q1", gap: 40 }, "666", { size: 80, color: "red" }],
                 ["circle", "q2"]] },
        { say: "But Rome was occupying the land, so every letter sent to the churches was censored. If you wrote, 'Watch out for that wicked Roman emperor,' you'd be caught right away.",
          draw: [["write", "q3", [100, 430], "Roman censorship", { size: 60, color: "blue" }],
                 ["write", "q3n", { after: "q3", gap: 40 }, "\"beware emperor\" → caught", { size: 48, color: "gray" }]] },
        { say: "That's why they talk about a horned dragon and a beast. It's like a code word for the persecutors. 666 was also a code the believers already knew among themselves. You know 666? Watch out for that guy.",
          draw: [["write", "q4", [100, 560], "dragon · beast · 666 = believers' code", { size: 60, color: "red" }],
                 ["under", "q4"]] },
        { say: "Of course, it first reflects the situation at that time. But it is also an expression that applies when the Antichrist and the false prophet appear in the truly last days to come.",
          draw: [["write", "q5", [100, 680], "that time + the last days too", { size: 56 }]] },
        { say: "Another beast with two horns works miracles and makes people bow down to an idol. Those who don't bow are killed, and at this point the number of the martyrs is complete. Those who don't receive the mark 666 on their forehead or hand cannot buy or sell. We can't know what form the mark takes. It's some kind of mark, anyway.",
          draw: [["write", "q6", [100, 800], "no mark, no buying or selling · form unknown", { size: 52, color: "blue" }]] }
      ]
    },
    {
      id: "endure", title: "The Patience of the Saints",
      beats: [
        { say: "Chapter 14 is a vision urging endurance to the end. The Lamb stands on Mount Zion with the hundred and forty-four thousand holy ones.",
          draw: [["clear"],
                 ["title", "t", "A vision urging endurance"],
                 ["photo", "p18", "img/p4/image132.jpg", [1080, 190, 440, 248], { tilt: -2, caption: "The angel with the sickle" }],
                 ["write", "r1", [100, 310], "Lamb on Mt. Zion + 144,000", { size: 56 }]] },
        { say: "No matter how hard it gets, don't take the mark. Endure. Here is the patience of the saints.",
          draw: [["write", "r2", [100, 440], "don't take the mark, endure", { size: 64, color: "red" }],
                 ["box", "r2"]] },
        { say: "An angel with a sharp sickle gathers the grapes, throws them into the winepress, and treads them. But when John looks, they aren't grapes. They look like the heads of unbelievers. The blood rises up to the horses' bridles and spreads out for sixteen hundred furlongs.",
          draw: [["write", "r3", [100, 600], "winepress · blood to the bridles", { size: 56 }],
                 ["write", "r3n", [140, 680], "for 1600 furlongs", { size: 44, color: "gray" }]] },
        { say: "Those who take the mark, who follow the false prophet and the Antichrist, will drink the wine of the wrath of God. Never betray him.",
          draw: [["write", "r4", [100, 800], "never betray", { size: 72, color: "red" }],
                 ["under", "r4"]] }
      ]
    },
    {
      id: "glasssea", title: "The Sea of Glass and the Seven Bowls",
      beats: [
        { say: "That's chapters 12, 13, and 14. It went from the distant past up to this point, and at that moment the saints were raptured in an instant and gone. Now, chapter 15.",
          draw: [["clear"],
                 ["title", "t", "The raptured saints (ch. 15)"],
                 ["write", "s1", [100, 300], "ch. 15:1~4", { size: 56, color: "gray" }],
                 ["write", "s2", { after: "s1", gap: 40 }, "sea of glass with fire", { size: 64, color: "blue" }]] },
        { say: "On the other side of the sea of glass, the transformed saints sing the song of Moses and the song of the Lamb. In Exodus chapter 15, they sang a song when Pharaoh's army sank in the Red Sea. That was the foreshadowing, and now it has truly come to pass.",
          draw: [["write", "s3", [100, 410], "song of Moses · song of the Lamb", { size: 60, color: "green" }],
                 ["write", "s3n", [140, 490], "Exod 15 Red Sea song = foreshadowing", { size: 44, color: "gray" }]] },
        { say: "Verses 5 to 8 are about the seven bowls of wrath. God's wrath, built up as he watched what people have done since creation, did not just disappear. It was stored in seven bowls, and now it comes out.",
          draw: [["photo", "p19", "img/p4/image134.jpg", [1080, 180, 440, 248], { tilt: 2, caption: "The wine of the seven bowls" }],
                 ["write", "s4", [100, 610], "ch. 15:5~8", { size: 56, color: "gray" }],
                 ["write", "s5", { after: "s4", gap: 40 }, "7 bowls of wrath", { size: 64, color: "red" }]] },
        { say: "The saints have crossed over the sea of glass, and it is poured out on the earth where only unbelievers are left. Saints and unbelievers alike go through the tribulation of the seven seals and trumpets. But we do not receive the bowls of wrath.",
          draw: [["write", "s6", [100, 740], "through tribulation", { size: 64 }],
                 ["write", "s7", { after: "s6", gap: 60 }, "but not wrath", { size: 64, color: "green" }],
                 ["under", "s7", "green"]] }
      ]
    },
    {
      id: "camera", title: "Camera Movement",
      beats: [
        { say: "Look at the chart. Chapter 15, verses 1 to 4, is the far side of the sea of glass. Verses 5 to 8 is the scene of the bowls of wrath being poured out on the earth left behind.",
          draw: [["clear"],
                 ["title", "t", "Camera movement"],
                 ["photo", "p20", "img/p4/image135.jpg", [820, 180, 700, 394], { tilt: -1 }]] },
        { say: "You could call it a thumbnail. You know how on YouTube, after you watch episode 2, two thumbnails pop up at the end, for episode 1 and episode 3?",
          draw: [["write", "u1", [100, 320], "ch. 15 = thumbnail", { size: 72, color: "red" }],
                 ["circle", "u1"],
                 ["write", "u1n", [100, 430], "next episode at the end of a video", { size: 48, color: "gray" }]] },
        { say: "The main feature starts in chapter 16, and the camera switches back and forth. Chapters 16, 17, and 18 are the wrath and judgment poured out on the earth. Chapters 19 and 20 go back to the saints across the sea of glass, the wedding feast and the millennial kingdom.",
          draw: [["write", "u2", [100, 680], "ch. 16~18: wrath on earth", { size: 60 }],
                 ["write", "u3", [100, 790], "ch. 19~20: wedding · millennium", { size: 60, color: "blue" }]] },
        { say: "When I say I teach Revelation, this is the part I mean. If nobody explains it to you like this, you could die and come back to life and still not figure it out.",
          draw: [["write", "u4", [900, 680], "← this part!", { size: 64, color: "red" }],
                 ["write", "u4n", [900, 790], "hard to get without help", { size: 48, color: "gray" }]] }
      ]
    },
    {
      id: "bowls", title: "The Seven Bowls of Wrath",
      beats: [
        { say: "Chapter 16, the seven bowls of wrath. With the first bowl, painful sores break out on the bodies of those who received the mark 666.",
          draw: [["clear"],
                 ["title", "t", "Seven bowls of wrath (ch. 16)"],
                 ["photo", "p21", "img/p4/image136.jpg", [1100, 170, 420, 236], { tilt: 2 }],
                 ["write", "v1", [100, 290], "① sores on the marked", { size: 52 }]] },
        { say: "With the second, the sea becomes blood. With the third, the fresh water and the rivers all become blood, and no one can drink. This was in the plagues on Egypt too.",
          draw: [["write", "v2", [100, 380], "② sea → blood  ③ fresh water → blood", { size: 52 }],
                 ["write", "v2n", { after: "v2", gap: 30 }, "(Egypt)", { size: 44, color: "gray" }]] },
        { say: "With the fourth, the sun explodes, and countless people are burned to death by its heat. With the fifth, thick darkness falls.",
          draw: [["write", "v3", [100, 470], "④ sun explodes  ⑤ darkness", { size: 52 }]] },
        { say: "With the sixth, unclean spirits like frogs come out, and the Euphrates River dries up. That opens the way for an army of two hundred million from the east.",
          draw: [["write", "v4", [100, 580], "⑥ Euphrates dries up · army of 200 million", { size: 52 }]] },
        { say: "With the seventh, there is an earthquake, and hailstones weighing forty-two kilograms fall, and the whole world is smashed.",
          draw: [["write", "v5", [100, 680], "⑦ earthquake · 42 kg hail", { size: 52, color: "red" }]] },
        { say: "Even so, people do not repent.",
          draw: [["write", "v6", [100, 810], "still no repentance", { size: 72, color: "red" }],
                 ["under", "v6"]] }
      ]
    },
    {
      id: "babylon", title: "The Harlot and Babylon",
      beats: [
        { say: "Chapter 17. A woman holding a cup that throws the world into confusion sits on a beast with seven heads and ten horns, and she persecutes the saints. He shows that this harlot will be destroyed.",
          draw: [["clear"],
                 ["title", "t", "Harlot and Babylon (ch. 17~18)"],
                 ["photo", "p22", "img/p4/image137.jpg", [1080, 170, 440, 248], { tilt: -2, caption: "Fall of the false harlot" }],
                 ["write", "w1", [100, 300], "ch. 17: harlot destroyed", { size: 64, color: "blue" }]] },
        { say: "The lecturer thinks this harlot is probably the Roman Catholic Church.",
          draw: [["write", "w2", [140, 400], "harlot = Roman Catholic? (lecturer's view)", { size: 48, color: "gray" }]] },
        { say: "Chapter 18 is the vision of the fall of the last Babylon.",
          draw: [["write", "w3", [100, 540], "ch. 18: fall of last Babylon", { size: 64, color: "red" }]] },
        { say: "The ancient Babylon was a nation in what is now Iraq. The Babylon of the Middle Ages was Rome. We don't know who the last Babylon will be, but for now, they say the strongest nation, America, is the most likely.",
          draw: [["write", "w4", [100, 680], "old Babylon = Iraq", { size: 52 }],
                 ["write", "w5", { after: "w4", gap: 50 }, "Middle Ages = Rome", { size: 52 }],
                 ["write", "w6", [100, 800], "last Babylon = ?  (now: likely USA)", { size: 52, color: "gray" }]] }
      ]
    },
    {
      id: "return", title: "Hallelujah and the Return",
      beats: [
        { say: "Chapter 19. The camera turns back again to the saints across the sea of glass. The Hallelujah that rang out last in Psalm 150 finally bursts forth.",
          draw: [["clear"],
                 ["title", "t", "Hallelujah and the return (ch. 19)"],
                 ["photo", "p23", "img/p4/image140.jpg", [1080, 170, 440, 248], { tilt: 2, caption: "King of kings, Lord of lords" }],
                 ["write", "x1", [100, 320], "Hallelujah!", { size: 96, color: "green" }]] },
        { say: "As Hallelujah rings out, Jesus comes down, and the saints meet the Lord in the air.",
          draw: [["write", "x2", [100, 460], "return · meet the Lord in the air", { size: 60, color: "blue" }]] },
        { say: "The forces that still challenge him are all killed by the sword that comes out of Jesus' mouth, and the birds follow and fill their bellies.",
          draw: [["write", "x3", [100, 580], "sword from His mouth", { size: 56 }]] },
        { say: "Jesus seizes the harlot and the Antichrist and throws them alive into the lake of fire burning with brimstone. But up to this point, no one has gone to hell yet. They are in Hades.",
          draw: [["write", "x4", [100, 700], "harlot · Antichrist → lake of fire", { size: 56, color: "red" }],
                 ["write", "x5", [100, 810], "until now, all are in Hades", { size: 52, color: "gray" }],
                 ["under", "x5", "gray"]] }
      ]
    },
    {
      id: "millennium", title: "The Millennial Kingdom",
      beats: [
        { say: "Chapter 20. An angel seizes the dragon, puts him into the bottomless pit, and shuts the lid, so he cannot come out for a thousand years.",
          draw: [["clear"],
                 ["title", "t", "The millennium (ch. 20)"],
                 ["photo", "p24", "img/p4/image143.jpg", [1080, 170, 440, 248], { tilt: -2, caption: "The dragon locked in the pit" }],
                 ["write", "y1", [100, 300], "dragon → pit 1000 yrs", { size: 64, color: "red" }]] },
        { say: "Meanwhile, for a thousand years, the saints fly through the whole universe with the Lord, traveling.",
          draw: [["write", "y2", [100, 430], "saints tour the universe with the Lord", { size: 56, color: "green" }]] },
        { say: "When the thousand years are over, the dragon is released for a little while and struggles to fight the saints again. You know how in action movies, the hero knocks down the villain and turns around, and the villain always makes one last desperate move? Then the hero finishes him with his coolest kick!",
          draw: [["write", "y3", [100, 580], "after 1000 yrs · dragon's last struggle", { size: 56 }],
                 ["write", "y3n", [140, 660], "like a villain in an action movie", { size: 46, color: "gray" }]] },
        { say: "Fire comes down from heaven and devours them, and finally the dragon is thrown into the lake burning with fire and brimstone.",
          draw: [["write", "y4", [100, 800], "final blow → dragon into the lake of fire", { size: 60, color: "red" }],
                 ["under", "y4"]] }
      ]
    },
    {
      id: "judgment", title: "The Final Judgment",
      beats: [
        { say: "God sits on a great white throne, and all the souls in Hades are brought up. This is the resurrection of judgment.",
          draw: [["clear"],
                 ["title", "t", "Great white throne judgment"],
                 ["photo", "p25", "img/p4/image144.jpg", [1080, 170, 440, 248], { tilt: 2, caption: "The great white throne" }],
                 ["write", "z1", [100, 300], "resurrection of judgment", { size: 72, color: "red" }]] },
        { say: "We shouldn't have this resurrection, right? We must have the resurrection of life, not the resurrection of judgment.",
          draw: [["write", "z2", [100, 420], "resurrection of life", { size: 72, color: "green" }],
                 ["circle", "z2", "green"],
                 ["write", "z2n", { after: "z2", gap: 60 }, "is what we need", { size: 52, color: "gray" }]] },
        { say: "Each person is judged one by one, by looking at the scrolls in which every sin they ever committed is written.",
          draw: [["write", "z3", [100, 560], "judged by the scrolls of sins", { size: 60 }]] },
        { say: "The record of our sins as believers has been blotted out by the blood of Jesus. It's gone. Unbelievers' sins remain just as they were, so they are judged by the scrolls.",
          draw: [["write", "z4", [100, 680], "believers: blotted out by His blood", { size: 56, color: "green" }],
                 ["write", "z5", { after: "z4", gap: 50 }, "others: sins remain", { size: 56, color: "red" }]] },
        { say: "And all of them go into the lake burning with fire and brimstone. A place where the fire is not quenched and the worm does not die.",
          draw: [["write", "z6", [100, 810], "lake of fire · fire not quenched, worm not dying", { size: 52, color: "gray" }]] }
      ]
    },
    {
      id: "newjerusalem", title: "The New Jerusalem",
      beats: [
        { say: "When all this is over, a new heaven and a new earth open up. An angel takes John along, saying he will show him just one more thing.",
          draw: [["clear"],
                 ["title", "t", "New heaven and new earth"],
                 ["photo", "p26", "img/p4/image150.jpg", [1080, 170, 440, 248], { tilt: -2, caption: "The new Jerusalem" }],
                 ["write", "aa1", [100, 300], "new heaven, new earth", { size: 64, color: "blue" }]] },
        { say: "It is the bride of the Lamb, the new Jerusalem. It comes down from above, beautiful, like a bride adorned for her husband.",
          draw: [["write", "aa2", [100, 420], "bride of the Lamb = new Jerusalem", { size: 60, color: "red" }],
                 ["under", "aa2"]] },
        { say: "Up close, it is a city laid out as a square. Its foundation stones are all jewels, the twelve gates are pearls, and the street of the city is pure gold, like glass.",
          draw: [["write", "aa3", [100, 550], "a square · foundations of jewels", { size: 56 }],
                 ["write", "aa4", [100, 650], "12 gates of pearl · street of gold", { size: 56 }]] },
        { say: "There is no temple, because God and the Lamb are its temple. God's glory always shines there, so there's no use for the sun or the moon.",
          draw: [["write", "aa5", [100, 790], "no temple · no need of sun or moon", { size: 56, color: "blue" }]] }
      ]
    },
    {
      id: "river", title: "By the River of Life",
      beats: [
        { say: "Finally, by the river of the water of life. Looking into the city, the street is pure gold.",
          draw: [["clear"],
                 ["title", "t", "By the river of life"],
                 ["photo", "p27", "img/p4/image152.jpg", [1000, 170, 520, 293], { tilt: 2 }],
                 ["write", "bb1", [100, 300], "street of gold", { size: 64 }]] },
        { say: "And the water of life flows.",
          draw: [["write", "bb1b", { after: "bb1", gap: 40 }, "· river of life", { size: 64, color: "blue" }]] },
        { say: "On either side of the river is the tree of life, bearing a different fruit every month. You have to pick it and eat it to truly live forever.",
          draw: [["write", "bb2", [100, 430], "new fruit every month", { size: 64 }],
                 ["write", "bb3", [100, 560], "→ eat it to truly live forever", { size: 64, color: "green" }],
                 ["under", "bb3", "green"]] },
        { say: "An announcement. Let's meet under the tenth tree on the left. If you don't listen to the announcement properly, you won't find us.",
          draw: [["write", "bb4", { at: [800, 760] }, "Notice: meet under the 10th tree on the left!", { anchor: "middle", size: 66, color: "red" }],
                 ["box", "bb4"]] }
      ]
    }
  ]
};
