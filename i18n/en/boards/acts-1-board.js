// Acts 1–12 whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does.
window.BOARD = {
  scenes: [
    {
      id: "overview", title: "Overview of Acts",
      beats: [
        { say: "The original name of Acts is Praxeis Apostolon, the footsteps of the apostles.",
          draw: [["title", "t", "Overview of Acts"],
                 ["write", "a1", [100, 290], "Praxeis Apostolon", { size: 60, color: "blue" }],
                 ["write", "a1b", { after: "a1", gap: 40 }, "= footsteps of the apostles", { size: 52 }]] },
        { say: "But it doesn't tell the stories of all twelve apostles. The first part covers Peter in Jerusalem, Philip in Samaria, and Paul and Barnabas in Antioch. The later part covers Paul's missionary journeys, all the way to his road to Rome.",
          draw: [["write", "a2", [100, 400], "Peter · Philip · Paul & Barnabas → to Rome", { size: 52 }]] },
        { say: "Acts is a book of transition. The Old Testament is the age of God the Father, the Gospels are God the Son, Jesus, and now it shows the move into the age of God the Holy Spirit.",
          draw: [["write", "a3", { at: [300, 550] }, "Father", { anchor: "middle", size: 72 }],
                 ["write", "a4", { at: [800, 550] }, "Son", { anchor: "middle", size: 72 }],
                 ["write", "a5", { at: [1300, 550] }, "Spirit", { anchor: "middle", size: 80, color: "red" }],
                 ["arrow", "a3", "a4"],
                 ["arrow", "a4", "a5", "red"],
                 ["write", "a3b", { at: [300, 630] }, "OT", { anchor: "middle", size: 46, color: "gray" }],
                 ["write", "a4b", { at: [800, 630] }, "Gospels", { anchor: "middle", size: 46, color: "gray" }],
                 ["write", "a5b", { at: [1300, 630] }, "Acts", { anchor: "middle", size: 46, color: "gray" }]] },
        { say: "As Jesus ascended, he said, You will receive power when the Holy Spirit has come upon you, and you will be my witnesses in Jerusalem, in all Judea and Samaria, and to the uttermost parts of the earth. Acts shows how that word comes true.",
          draw: [["write", "a6", [100, 740], "Jerusalem → Judea → Samaria → ends of earth", { size: 50, color: "blue" }]] },
        { say: "It is so spectacular you could call it the Acts of the Holy Spirit. Don't look at Peter or Paul. Look at what the Holy Spirit is doing.",
          draw: [["write", "a7", [100, 840], "not Peter · Paul → look at the Spirit", { size: 52, color: "red" }],
                 ["under", "a7"]] }
      ]
    },
    {
      id: "why", title: "A Sequel Written by Luke",
      beats: [
        { say: "The author is Luke. He wrote it like a sequel to the Gospel of Luke. The former treatise have I made, O Theophilus. The same recipient, and he says he is continuing his earlier account.",
          draw: [["clear"],
                 ["title", "t", "A sequel by Luke"],
                 ["write", "b1", [100, 300], "author: Luke", { color: "blue" }],
                 ["write", "b1b", { after: "b1", gap: 50 }, "sequel to Luke (Acts 1:1~2)", { size: 52 }]] },
        { say: "It is also connected with ten of Paul's letters. First and Second Thessalonians, Galatians, First and Second Corinthians, Romans, and the Prison Epistles.",
          draw: [["write", "b2", [100, 420], "linked to 10 Pauline Epistles", { size: 60 }],
                 ["write", "b2b", { below: "b2", gap: 66 }, "1 & 2 Thess · Gal · 1 & 2 Cor · Rom · Prison Epistles", { size: 44, color: "gray" }]] },
        { say: "We need to see where he stayed and how many years he worked there, what letter he wrote at that time, whose hands he sent it with, and how the readers responded. They are letters, so they're hard to understand when you read them on their own.",
          draw: [["write", "b3", [100, 610], "when · sent by whom · response?", { size: 52 }],
                 ["write", "b3b", { after: "b3", gap: 40 }, "letters alone are hard", { size: 46, color: "gray" }]] },
        { say: "Why study Acts? You can study the models and cases of the early church, and it is the textbook for every missionary.",
          draw: [["write", "b4", [100, 720], "early church cases · missionary textbook", { size: 52, color: "green" }]] },
        { say: "We are all missionaries. So we need to study our textbook, Acts, well.",
          draw: [["write", "b5", [100, 830], "We're all missionaries!", { size: 60, color: "red" }],
                 ["circle", "b5"]] }
      ]
    },
    {
      id: "ascension", title: "Words Before the Ascension",
      beats: [
        { say: "John indeed baptized with water, but you will be baptized with the Holy Spirit. The word baptism is baptizo, which means to be immersed in water. It is closer to immersion.",
          draw: [["clear"],
                 ["title", "t", "Words before the ascension"],
                 ["photo", "p1", "img/p4/image25.jpg", [1090, 170, 430, 242], { tilt: 2, caption: "The ascension of Jesus" }],
                 ["write", "c1", [100, 290], "baptism = baptizo (immersed)", { size: 56, color: "blue" }]] },
        { say: "Baptism has three meanings. First, sins are washed away. Second, you die. The old self is buried with Jesus. Third, you are united with Jesus.",
          draw: [["write", "c2", [100, 400], "① sins washed ② death ③ union", { size: 52 }]] },
        { say: "The disciples ask, Lord, will you at this time restore the kingdom to Israel? If you gather about five hundred men, that's a pretty threatening number, isn't it?",
          draw: [["write", "c3", [100, 530], "\"Will you now restore the kingdom?\"", { size: 52, color: "gray" }]] },
        { say: "It is not for you to know times or seasons. But you will receive power when the Holy Spirit has come upon you, and you will be my witnesses.",
          draw: [["write", "c4", [100, 640], "times X → Spirit, then witnesses", { size: 60, color: "red" }]] },
        { say: "After seeing Jesus ascend, they gathered in Mark's upper room and prayed. Peter proposed choosing an apostle to replace Judas Iscariot, and two men were put forward, Joseph and Matthias.",
          draw: [["write", "c5", [100, 770], "Joseph & Matthias", { size: 56 }]] },
        { say: "The decision was made by casting lots. The meaning was to leave room for God to decide. And so Matthias was chosen.",
          draw: [["write", "c5b", { after: "c5", gap: 110 }, "lots = leave it to God", { size: 56, color: "green" }],
                 ["arrow", "c5", "c5b"]] }
      ]
    },
    {
      id: "pentecost", title: "The Spirit Comes at Pentecost",
      beats: [
        { say: "On the day of Pentecost, a sound came from heaven like a rushing mighty wind, and tongues like fire, divided, rested on each of them. And they began to speak in other tongues.",
          draw: [["clear"],
                 ["title", "t", "The Spirit at Pentecost"],
                 ["photo", "p2", "img/p4/image26.jpg", [1090, 170, 430, 242], { tilt: -2 }],
                 ["write", "d1", [100, 290], "wind · tongues of fire · tongues", { size: 52 }]] },
        { say: "This was a special case that happened only once. It is not a universal event.",
          draw: [["write", "d2", [100, 400], "only once, a special case", { size: 60, color: "red" }],
                 ["under", "d2"]] },
        { say: "Most of the time, the word tongues in the Bible is better translated as foreign languages. The disciples spoke, and each listener heard it in his own language.",
          draw: [["write", "d3", [100, 530], "tongues = languages", { size: 60, color: "blue" }],
                 ["write", "d3b", { after: "d3", gap: 40 }, "each heard his own", { size: 48, color: "gray" }]] },
        { say: "The people gathered there had come from all over the world to keep the Passover. Then came the Feast of Unleavened Bread, and fifty days later Pentecost. Since they were already there, they meant to stay through Pentecost before going home.",
          draw: [["write", "d4", [100, 650], "Passover → Unleavened Bread → Pentecost (50 days)", { size: 46 }]] },
        { say: "People from fifteen nations were about to scatter back to their own countries. Mission was urgent, so in an instant God had the gospel preached in other languages.",
          draw: [["write", "d5", [100, 780], "15 nations → gospel before they scatter!", { size: 52, color: "red" }],
                 ["box", "d5", "red"]] }
      ]
    },
    {
      id: "pierced", title: "The Main Point Is Being Pierced",
      beats: [
        { say: "Peter proclaims that this event fulfills the word of Joel chapter 2. Then he points out their sin and tells them to repent.",
          draw: [["clear"],
                 ["title", "t", "The point: cut to the heart"],
                 ["write", "e1", [100, 300], "Joel 2 fulfilled", { color: "blue" }]] },
        { say: "When they heard this, they were pierced to the heart. So when you read this part, the main point is not the tongues. It is that they heard the word and were pierced.",
          draw: [["write", "e2", [100, 440], "tongues", { color: "gray" }],
                 ["strike", "e2", "gray"],
                 ["write", "e3", { after: "e2", gap: 110 }, "cut by the word", { size: 72, color: "red" }],
                 ["arrow", "e2", "e3"],
                 ["circle", "e3"]] },
        { say: "Men and brethren, what shall we do? When you realize you are a sinner, this is what comes out.",
          draw: [["write", "e4", [100, 590], "\"What shall we do?\""]] },
        { say: "Peter says, Repent, and be baptized in the name of Jesus Christ for the forgiveness of sins, and you will receive the gift of the Holy Spirit.",
          draw: [["write", "e5", [100, 740], "repent → baptism → forgiveness → gift of Spirit", { size: 48, color: "green" }],
                 ["under", "e5", "green"]] }
      ]
    },
    {
      id: "church", title: "Is the Early Church a Model?",
      beats: [
        { say: "All who believed were together and had all things in common. They sold their property and possessions and shared them as anyone had need. You might mistake this for the ideal church,",
          draw: [["clear"],
                 ["title", "t", "Is the early church a model?"],
                 ["write", "f1", [100, 290], "all in common · sold and shared (Acts 2:43~47)", { size: 48 }]] },
        { say: "but this is not a model. It belongs to the special cases. The Jerusalem church at that time was in a situation where it had no other choice.",
          draw: [["write", "f2", [100, 400], "model", { color: "gray" }],
                 ["strike", "f2", "gray"],
                 ["write", "f3", { after: "f2", gap: 110 }, "special case", { color: "red" }],
                 ["arrow", "f2", "f3"],
                 ["box", "f3", "red"]] },
        { say: "Jerusalem was not an industrial city. It was a political and religious city. If you believed in Jesus, you were thrown out of the synagogue, removed from public office, and cut off from trade. To survive, they had no choice but to sell their property.",
          draw: [["write", "f4", [100, 520], "political · religious city", { size: 56, color: "blue" }],
                 ["write", "f4b", { after: "f4", gap: 40 }, "expelled · no office · no trade", { size: 44, color: "gray" }]] },
        { say: "That is why later, wherever Paul planted a church, he always took up a collection for the saints in Jerusalem and carried it there.",
          draw: [["write", "f5", [100, 630], "Paul's collection → Jerusalem", { size: 56 }]] },
        { say: "But the Jerusalem church did well to do it. Because they had no property, they were scattered everywhere, so they did not die when Jerusalem was destroyed in A.D. 70.",
          draw: [["write", "f6", [100, 740], "scattered → escaped A.D. 70 fall", { size: 56, color: "green" }]] },
        { say: "Still, in the end their numbers kept shrinking and people went back to Judaism. The letter written to people like that is Hebrews.",
          draw: [["write", "f7", [100, 840], "those back in Judaism → Hebrews", { size: 50, color: "gray" }]] }
      ]
    },
    {
      id: "gate", title: "At the Beautiful Gate",
      beats: [
        { say: "Chapter 3, verse 1. The hour of prayer, the ninth hour, which is three in the afternoon. A man lame from birth was carried and laid at the Beautiful Gate every day. The important word is every day.",
          draw: [["clear"],
                 ["title", "t", "At the Beautiful Gate"],
                 ["write", "g1", [100, 290], "9th hour = 3 p.m.", { size: 50, color: "gray" }],
                 ["write", "g2", { after: "g1", gap: 50 }, "every day at the gate", { size: 60, color: "red" }],
                 ["under", "g2"]] },
        { say: "Then why had Peter and John never noticed this man before?",
          draw: [["write", "g3", [100, 410], "why not seen before?", { size: 56, color: "blue" }]] },
        { say: "When the Holy Spirit came, they began to see the people around them. The Spirit came with power, so they believed they could do things they never imagined before, and these people caught their eye.",
          draw: [["write", "g4", { after: "g3", gap: 110 }, "Spirit came → now they see", { size: 52, color: "green" }],
                 ["arrow", "g3", "g4"]] },
        { say: "Because of the healed man, a crowd gathered at Solomon's Porch, and Peter preached. Why do you look so earnestly at us? Then he went through the whole history and proclaimed Christ.",
          draw: [["write", "g5", [100, 530], "\"Why look so earnestly on us?\"", { size: 56 }]] },
        { say: "Chapter 4. The Sadducees arrested the two of them and locked them up, because they were preaching the resurrection of the dead. The Sadducees are the ones who say there is no resurrection. Even so, those who heard the word and believed numbered five thousand, counting only the men.",
          draw: [["write", "g6", [100, 650], "arrested → 5000 believe (men only)", { size: 56 }]] },
        { say: "After they were released, they prayed together. Verse 29, grant that your servants may speak your word with all boldness. And verse 31, they spoke the word of God with boldness. A prayer like this is answered right away.",
          draw: [["write", "g7", [100, 790], "v. 29 boldly → v. 31 boldly = instant answer", { size: 52, color: "blue" }],
                 ["box", "g7", "blue"]] }
      ]
    },
    {
      id: "ananias", title: "Barnabas and Ananias",
      beats: [
        { say: "Chapter 4, verse 32. They shared their goods and possessions, so there was no one in need. The rich sold what they had and laid it at the apostles' feet. The man introduced as one of them is Barnabas.",
          draw: [["clear"],
                 ["title", "t", "Barnabas and Ananias"],
                 ["write", "h1", [100, 290], "no one in need", { size: 60 }],
                 ["write", "h1b", { after: "h1", gap: 40 }, "← Barnabas", { size: 56, color: "blue" }]] },
        { say: "Chapter 5. Ananias and Sapphira, a married couple, imitate him. Church work must not be done out of rivalry. But these two secretly kept back part of the money.",
          draw: [["write", "h2", [100, 400], "Ananias & Sapphira: imitate + keep back", { size: 50, color: "red" }]] },
        { say: "So they were struck dead. But their death is not the conclusion. The conclusion is verse 11: great fear came.",
          draw: [["write", "h3", [100, 510], "conclusion: not death but", { size: 48, color: "gray" }],
                 ["write", "h3b", { after: "h3", gap: 40 }, "great fear (v. 11)", { size: 56, color: "red" }],
                 ["circle", "h3b"]] },
        { say: "Many signs and wonders were done through the apostles, so that people carried the sick and followed Peter, hoping even his shadow might fall on them.",
          draw: [["write", "h4", [100, 630], "even Peter's shadow", { size: 56 }]] },
        { say: "Verse 17. The high priest and the Sadducees were filled with jealousy and put the apostles in prison. But an angel of the Lord opened the prison doors at night. When they went to arrest them again, they did not use force, because they were afraid the people would stone them. Why do something that will get you stoned?",
          draw: [["write", "h5", [100, 740], "jealousy → prison → angel opens doors", { size: 54 }]] },
        { say: "The conclusion is verse 42. Every day, in the temple and from house to house, they never stopped teaching and preaching that Jesus is the Christ.",
          draw: [["write", "h6", [100, 845], "daily teaching and preaching (v. 42)", { size: 50, color: "green" }]] }
      ]
    },
    {
      id: "deacons", title: "The Seven Deacons",
      beats: [
        { say: "Chapter 6. In the daily distribution, the Hebrews gave relief only to other Hebrews, so the Greek-speaking believers were left out.",
          draw: [["clear"],
                 ["title", "t", "The seven deacons"],
                 ["write", "i1", [100, 300], "relief to Hebrews only → Greeks left out", { size: 50 }]] },
        { say: "The apostles did it themselves to make sure it was fair, and then they couldn't do the work they really had to do. So they decided. It is not right for us to leave the word of God and serve tables.",
          draw: [["write", "i2", [100, 430], "leave the word to serve tables X", { size: 56, color: "red" }],
                 ["under", "i2"]] },
        { say: "When the believers numbered about five to ten thousand, they chose seven deacons. They were smarter and more capable than the apostles.",
          draw: [["write", "i3", [100, 560], "7 deacons", { color: "blue" }],
                 ["write", "i3b", { after: "i3", gap: 40 }, "smarter than the apostles", { size: 50 }]] },
        { say: "Stephen knew history inside out, from Genesis to Jesus. Philip was so skilled that he taught the Ethiopian eunuch all the way from one verse in Isaiah to Jesus, and led him to faith.",
          draw: [["write", "i4", [140, 680], "Stephen: knew all history", { size: 48 }],
                 ["write", "i5", [140, 780], "Philip: from Isaiah to Jesus", { size: 48 }]] },
        { say: "And a man named Nicolas later became the head of a heresy called the Nicolaitans.",
          draw: [["write", "i6", [900, 680], "Nicolas → Nicolaitans (heresy)", { size: 44, color: "gray" }]] }
      ]
    },
    {
      id: "stephen", title: "The Martyrdom of Stephen",
      beats: [
        { say: "They could not stand up to Stephen in argument, so they bribed people to be false witnesses and accused him. As Stephen stood before the council, his face was like the face of an angel.",
          draw: [["clear"],
                 ["title", "t", "Stephen's martyrdom"],
                 ["photo", "p3", "img/p4/image27.jpg", [1090, 170, 430, 242], { tilt: 2 }],
                 ["write", "j1", [100, 290], "false witnesses", { size: 52, color: "gray" }],
                 ["write", "j1b", { after: "j1", gap: 40 }, "face like an angel", { size: 52, color: "blue" }]] },
        { say: "The stage was set, so Stephen preached a sermon that fills all of chapter 7. A history sermon, built on historical facts no one could possibly deny.",
          draw: [["write", "j2", [100, 400], "ch. 7 = history sermon", { size: 60, color: "red" }]] },
        { say: "Then they all stopped their ears, rushed at him, and stoned him to death, because they could not win with words. As he died, Stephen asked, like Jesus, that their sin be forgiven.",
          draw: [["write", "j3", [100, 520], "ears stopped, stones → Stephen forgives", { size: 52 }]] },
        { say: "But there was one man who by mistake did not stop his ears and heard it all. Paul. He was the one keeping the coats of those who stoned Stephen. He could not answer it, so chapter 8 says he approved of his death. Good riddance.",
          draw: [["write", "j4", [100, 640], "Paul didn't stop his ears", { size: 56, color: "blue" }],
                 ["write", "j4b", { after: "j4", gap: 40 }, "\"good riddance\"", { size: 48, color: "gray" }]] },
        { say: "This event set off a persecution, and the Christians, who had been gathering only among themselves, were scattered all over the world. The great commission, go therefore, was carried out by force. They should have left on their own.",
          draw: [["write", "j5", [100, 780], "scattered = commission by force", { size: 60, color: "red" }],
                 ["box", "j5", "red"]] }
      ]
    },
    {
      id: "samaria", title: "Samaria and the Ethiopian Eunuch",
      beats: [
        { say: "Only when the people were scattered did the gospel finally reach Samaria. Philip preached actively, the apostles came to join him, and a great revival broke out.",
          draw: [["clear"],
                 ["title", "t", "Samaria and the eunuch"],
                 ["write", "k1", [100, 300], "scattered → revival in Samaria", { size: 60, color: "green" }]] },
        { say: "Then a man named Simon offered money for this power, and the apostles gave him a severe rebuke. From then on, buying and selling church offices came to be called simony.",
          draw: [["write", "k2", [100, 420], "Simon's money", { size: 56, color: "gray" }],
                 ["write", "k2b", { after: "k2", gap: 110 }, "simony = buying offices", { size: 52, color: "red" }],
                 ["arrow", "k2", "k2b"]] },
        { say: "The Holy Spirit sends Philip to the Ethiopian eunuch. Understandest thou what thou readest? What he taught then was not the New Testament but the Old Testament.",
          draw: [["write", "k3", [100, 550], "eunuch: \"Do you understand?\"", { size: 56 }],
                 ["write", "k3b", { after: "k3", gap: 40 }, "→ from the OT", { size: 46, color: "gray" }]] },
        { say: "The Holy Spirit does not do everything alone. There is work that must have a person. Teaching the Bible. Even if you experience every kind of spiritual gift, to know the Bible rightly you need a prepared teacher.",
          draw: [["write", "k4", [100, 720], "teaching the Bible = needs people", { size: 56, color: "blue" }],
                 ["under", "k4", "blue"]] },
        { say: "Who will do it?",
          draw: [["write", "k5", { after: "k4", gap: 60 }, "Who will?", { size: 64, color: "red" }],
                 ["circle", "k5"]] }
      ]
    },
    {
      id: "paul", title: "Paul's Conversion",
      beats: [
        { say: "This is the most influential conversion in human history. Chapter 9. On the way to Damascus, he is blinded by a bright light.",
          draw: [["clear"],
                 ["title", "t", "Paul's conversion"],
                 ["write", "l1", [100, 290], "light at Damascus · greatest conversion", { size: 52 }]] },
        { say: "Paul asked two questions here. Who art thou, Lord? Lord, what wilt thou have me to do? When you know who Jesus is and what you must do, then you can say you finally know what you need to know.",
          draw: [["write", "l2", [100, 400], "Who are you, Lord?", { size: 52, color: "blue" }],
                 ["write", "l3", [100, 490], "What shall I do?", { size: 52, color: "blue" }],
                 ["write", "l4", [760, 445], "= what we must know", { size: 52, color: "green" }],
                 ["box", "l4", "green"]] },
        { say: "What's interesting is that Paul had never met Jesus, so he had never persecuted Jesus. He persecuted believers, but Jesus counted that as persecuting him. Because Jesus is the head of the church, and we are his body.",
          draw: [["write", "l5", [100, 610], "persecute church = persecute Jesus", { size: 54, color: "red" }],
                 ["write", "l5b", { after: "l5", gap: 40 }, "head & body", { size: 46, color: "gray" }]] },
        { say: "Jesus could have opened Paul's blind eyes right away. But to make him acknowledge the authority of the church, he had him go to Ananias and receive grace through him.",
          draw: [["write", "l6", [100, 710], "blinded → sent to Ananias", { size: 52 }]] },
        { say: "He is a chosen vessel of mine, to bear my name. I will show him how many things he must suffer for my name's sake. You don't believe in Jesus to get blessed. Paul saw that ahead of time, and still he walked that road.",
          draw: [["write", "m1", [100, 820], "chosen vessel · a road of suffering, not blessing", { size: 48, color: "red" }]] },
        { say: "In Damascus, where he had gone to kill, he preached instead. To the Jews he was a traitor, and to the Christians he was still the man who wanted to kill them. He became the enemy of both camps. He was rejected in Jerusalem too, but Barnabas stepped forward and got them to accept him.",
          draw: [["write", "m2", [900, 710], "enemy of both → Barnabas", { size: 46, color: "blue" }]] }
      ]
    },
    {
      id: "cornelius", title: "Cornelius",
      beats: [
        { say: "Chapter 10. In a vision, Peter sees a sheet full of unclean animals. And God says, Rise, Peter, kill and eat.",
          draw: [["clear"],
                 ["title", "t", "Cornelius"],
                 ["photo", "p4", "img/p4/image32.jpg", [1090, 170, 430, 242], { tilt: 2, caption: "The vision of the sheet" }],
                 ["write", "n1", [100, 290], "unclean animals in a sheet", { size: 52 }],
                 ["write", "n2", [100, 390], "\"Rise, Peter; kill and eat\"", { size: 52, color: "red" }]] },
        { say: "Oh no, Lord, I have never eaten anything unclean in my whole life. What is clean and unclean is for me to decide. It happens three times. Peter is pretty stubborn too.",
          draw: [["write", "n3", [100, 500], "\"Never eaten it\" × 3", { size: 52, color: "gray" }],
                 ["write", "n3b", { after: "n3", gap: 40 }, "← stubborn", { size: 48, color: "gray" }]] },
        { say: "The vision was meant to correct the Jewish view that saw Gentiles as animals. God has made the Gentiles clean too, so go without hesitation.",
          draw: [["write", "n4", [100, 610], "Gentiles = animals?", { size: 52, color: "gray" }],
                 ["strike", "n4", "gray"],
                 ["write", "n5", { after: "n4", gap: 110 }, "God made them clean", { size: 52, color: "green" }],
                 ["arrow", "n4", "n5"]] },
        { say: "God had already shown Cornelius a vision too, so that he would invite Peter. The Holy Spirit is the main character, leading the mission.",
          draw: [["write", "n6", [100, 720], "Spirit is the lead", { size: 56, color: "blue" }],
                 ["box", "n6", "blue"]] },
        { say: "Peter explains about Jesus, and in the middle of the sermon the Holy Spirit comes down. These people have received the Holy Spirit just as we did. Can anyone forbid water for baptizing them?",
          draw: [["write", "n7", { after: "n6", gap: 60 }, "Spirit mid-sermon → baptism", { size: 48, color: "red" }]] },
        { say: "But the Jerusalem church takes him to task. Why did you go into the house of uncircumcised men and eat with them? When he tells them how they received grace, that complaint disappears. In verse 18 they say, God has granted to the Gentiles also repentance unto life, and they just glide past it. We do that sometimes too, don't we?",
          draw: [["write", "n8", [100, 830], "\"Why eat with the uncircumcised?\" → glossed over (11:18)", { size: 44, color: "gray" }]] }
      ]
    },
    {
      id: "antioch", title: "The Church in Antioch",
      beats: [
        { say: "Those scattered because of Stephen went as far as Antioch, and preached the Lord Jesus to the Greeks too. A church was born, and the Jerusalem church sent Barnabas. A good move.",
          draw: [["clear"],
                 ["title", "t", "The church in Antioch"],
                 ["write", "p1", [100, 290], "the scattered → Antioch · Greeks too", { size: 54 }]] },
        { say: "But Barnabas was not a clever man. He was a good man. Church planters and evangelists must be good. Character matters more than anything else.",
          draw: [["write", "p2", [100, 400], "Barnabas = a good man", { size: 56, color: "blue" }],
                 ["write", "p2b", { after: "p2", gap: 40 }, "→ character first", { size: 52, color: "red" }],
                 ["under", "p2b"]] },
        { say: "Barnabas brought Saul from Tarsus, and for a whole year they taught a large crowd. They didn't do anything else. They taught. And the Bible then was the Old Testament.",
          draw: [["write", "p3", [100, 510], "taught a year with Saul (OT)", { size: 56 }]] },
        { say: "They lived just like Christ, so they got the nickname Christians. It was actually a bit of a mocking name. Today, because we live so differently from the Bible, people in Korea mock Christians with a nickname that means dog-Christians. We need to think about that.",
          draw: [["write", "p4", [100, 620], "lived like Christ → Christians", { size: 56, color: "green" }],
                 ["write", "p4b", { after: "p4", gap: 40 }, "and today?", { size: 48, color: "gray" }]] },
        { say: "Chapter 12. Herod Agrippa the First kills James with the sword. He was the first apostle to be martyred. But Peter is spared. We don't know why, but we need both people who give their lives to defend the truth and people who remain. Martyrdom, preaching, and witness are the same word, martureo.",
          draw: [["write", "p5", [100, 760], "James martyred · Peter spared", { size: 52 }],
                 ["write", "p5b", { after: "p5", gap: 40 }, "martyr = preach = witness", { size: 48, color: "red" }],
                 ["box", "p5b", "red"]] }
      ]
    },
    {
      id: "end", title: "The Conclusion of Acts",
      beats: [
        { say: "Proud Herod did not give glory to God, so God struck him and he died. But the word kept growing.",
          draw: [["clear"],
                 ["title", "t", "The conclusion of Acts"],
                 ["write", "q1", [100, 300], "Herod dies, the word grows", { size: 60 }]] },
        { say: "All through Acts there are words that sound like conclusions. Many turned to the Lord. The word of God grew mightily and prevailed. When Peter raised Dorcas, the conclusion was also, many believed in the Lord.",
          draw: [["write", "q2", [100, 430], "\"Many turned to the Lord\"", { size: 56, color: "blue" }],
                 ["write", "q3", [100, 530], "\"The word grew mightily\"", { size: 56, color: "blue" }]] },
        { say: "Healing, gifts like tongues, even miracles where the dead come back to life. Those things themselves are not what matters. We should pay attention to what God accomplished through them.",
          draw: [["write", "q4", [100, 660], "miracles", { color: "gray" }],
                 ["strike", "q4", "gray"],
                 ["write", "q5", { after: "q4", gap: 110 }, "what God did", { color: "red" }],
                 ["arrow", "q4", "q5"]] },
        { say: "The apostles, the first missionaries, did nothing else. They taught the word, the Old Testament, so that people would realize Jesus is the Christ. We must do this ministry too.",
          draw: [["write", "q6", [100, 800], "teach the word → Jesus is the Christ", { size: 56, color: "green" }],
                 ["box", "q6", "green"]] }
      ]
    }
  ]
};
