// Nehemiah whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does.
window.BOARD = {
  scenes: [
    {
      id: "name", title: "The LORD Comforts",
      beats: [
        { say: "So, the name Nehemiah comes from Naham Yahweh. It means, the LORD comforts.",
          draw: [["title", "t", "The LORD comforts"],
                 ["photo", "p1", "img/p3/image24.jpg", [1080, 190, 440, 248], { tilt: 2 }],
                 ["write", "a1", [120, 300], "Nehemiah = Naham Yahweh", { size: 64, color: "blue" }],
                 ["write", "a2", [120, 400], "the LORD comforts", { size: 64, color: "red" }],
                 ["under", "a2"]] },
        { say: "It's the twentieth year of King Artaxerxes. Nehemiah's in Shushan the palace, the Persian emperor's winter palace. And his brother Hanani shows up from Judah.",
          draw: [["write", "a3", [120, 540], "Shushan (winter palace) ← Hanani arrives", { size: 56 }]] },
        { say: "And the news isn't good. The remnant are in great affliction. The wall of Jerusalem's broken down, and its gates are burned with fire. This is what they were going through after sending away the foreign wives.",
          draw: [["write", "a4", [120, 650], "wall broken down, gates burned", { size: 60, color: "red" }]] },
        { say: "Nehemiah sat down and wept. He mourned for days, he fasted, and he prayed. And here's the thing: he'd never even been to Jerusalem. It shows you how thoroughly elders like Hachaliah taught the second generation about their people, right there in Babylon.",
          draw: [["write", "a5", [120, 770], "wept, fasted, prayed", { size: 60, color: "blue" }],
                 ["write", "a6", { after: "a5", gap: 50 }, "never been there! = taught well", { size: 46, color: "gray" }]] }
      ]
    },
    {
      id: "cup", title: "The King's Cupbearer",
      beats: [
        { say: "Nehemiah was the Persian emperor's cupbearer. Not just someone the emperor chatted with. He was in his most trusted inner circle.",
          draw: [["clear"],
                 ["title", "t", "The king's cupbearer"],
                 ["write", "b1", [120, 290], "cupbearer = emperor's closest man", { size: 64, color: "blue" }]] },
        { say: "With a position like that, he could easily have made excuses. But he gave up every privilege and went out to a desolate frontier. That's truly amazing.",
          draw: [["write", "b2", [120, 410], "gave up privilege → desolate frontier", { size: 60, color: "green" }]] },
        { say: "One day the king asks him, Why is your face sad, seeing you are not sick? And Nehemiah was very much afraid.",
          draw: [["write", "b3", [120, 540], "\"Why is your face sad?\"", { size: 60 }]] },
        { say: "Why? Because a cupbearer with even a hint of worry on his face could be put to death. He was the one man who could kill the emperor at any moment. If he suddenly said, I want to go to Jerusalem, he'd be suspected of rebellion right away.",
          draw: [["write", "b4", [180, 630], "a worried look = death → suspected of revolt", { size: 46, color: "gray" }]] },
        { say: "So Nehemiah was wise. He didn't say Jerusalem. He said, the city where my fathers are buried has been burned.",
          draw: [["write", "b5", [120, 770], "Jerusalem", { size: 60, color: "gray" }],
                 ["strike", "b5", "gray"],
                 ["write", "b6", { after: "b5", gap: 110 }, "city of my fathers' tombs", { size: 56, color: "red" }],
                 ["arrow", "b5", "b6"],
                 ["circle", "b6"]] }
      ]
    },
    {
      id: "ask", title: "A Silent Prayer, Then the Request",
      beats: [
        { say: "Then the king asks, what do you want? And Nehemiah doesn't answer right away. He prays silently to the God of heaven. Even in that split second, he prepared carefully.",
          draw: [["clear"],
                 ["title", "t", "Silent prayer, then request"],
                 ["write", "c1", [120, 290], "king asks", { size: 60 }],
                 ["write", "c2", { after: "c1", gap: 110 }, "prays first", { size: 72, color: "blue" }],
                 ["arrow", "c1", "c2"],
                 ["box", "c2"]] },
        { say: "He asked to be sent to rebuild the city, and the king asked when he'd be back. The time he set was twelve years. And with the queen sitting right there, the emperor couldn't very well be stingy, could he?",
          draw: [["write", "c3", [120, 430], "time: 12 yrs", { size: 64, color: "red" }],
                 ["write", "c4", { after: "c3", gap: 40 }, "queen beside him?", { size: 48, color: "gray" }]] },
        { say: "So he seized the moment. He asked for letters to the governors, even timber for the beams, and the king granted it all, according to the good hand of his God upon him. Sounds just like Ezra, doesn't it?",
          draw: [["write", "c5", [120, 560], "letters · timber → all granted", { size: 60 }],
                 ["write", "c6", [120, 660], "\"the good hand of my God\" = Ezra's words", { size: 52, color: "green" }]] },
        { say: "Army captains and horsemen went along with him. And when Sanballat the Horonite and Tobiah the Ammonite heard about it, it grieved them exceedingly.",
          draw: [["write", "c7", [120, 790], "Sanballat · Tobiah: deeply grieved", { size: 60, color: "red" }]] }
      ]
    },
    {
      id: "people", title: "The People's Pain and the Governor's Example",
      beats: [
        { say: "Now, Ezra had run into big trouble with his reforms. So when Nehemiah showed up with funds and an escort, think how comforted Ezra must have been. Nehemiah really lived up to his name.",
          draw: [["clear"],
                 ["title", "t", "People's pain, governor's example"],
                 ["write", "d1", [120, 290], "comfort for Ezra = true to his name", { size: 56, color: "green" }]] },
        { say: "He hadn't even rested from the trip, and Nehemiah went out at night to inspect the site. A place he'd never seen before.",
          draw: [["write", "d2", [180, 380], "on arrival: night inspection", { size: 48, color: "gray" }]] },
        { say: "In chapter 5, the poor are barely getting by. They're mortgaging their fields, their vineyards, even their children. Meanwhile the rich are lending at interest and grabbing everything the moment it's overdue.",
          draw: [["write", "d3", [120, 510], "poor: even children pledged", { size: 56 }],
                 ["write", "d4", [120, 610], "rich: usury · seizing", { size: 56, color: "red" }]] },
        { say: "So Nehemiah teaches them Leviticus chapter 25. You don't take interest from your brothers. Give back everything you took. And the people said, we'll do just that.",
          draw: [["write", "d5", { at: [1250, 560] }, "Lev 25", { anchor: "middle", size: 64, color: "blue" }],
                 ["write", "d6", { at: [1250, 650] }, "→ give it all back", { anchor: "middle", size: 52 }]] },
        { say: "And even though Nehemiah was governor, he didn't take the governor's allowance. He feared God, so he didn't oppress the people like the ones before him. He actually worked out of his own pocket.",
          draw: [["write", "d7", [120, 780], "governor, but took no salary", { size: 64, color: "green" }],
                 ["under", "d7", "green"]] }
      ]
    },
    {
      id: "threat", title: "Death Threats",
      beats: [
        { say: "In chapter 6, Nehemiah even faces threats on his life. From Sanballat and Tobiah, Geshem the Arabian, and the rest of that riffraff.",
          draw: [["clear"],
                 ["title", "t", "Death threats"],
                 ["write", "e1", [120, 290], "Sanballat · Tobiah · Geshem", { size: 64, color: "red" }]] },
        { say: "They say, let's meet in one of the villages in the plain of Ono. Come out alone. They meant to kill him. And Nehemiah didn't go.",
          draw: [["write", "e2", [120, 410], "\"Meet us at Ono, come alone\"", { size: 56 }],
                 ["write", "e3", { after: "e2", gap: 40 }, "→ didn't go", { size: 56, color: "blue" }]] },
        { say: "So they slandered him. You want to be king, don't you? Why else would you work so hard?",
          draw: [["write", "e4", [120, 530], "slander: \"want to be king?\"", { size: 56, color: "gray" }]] },
        { say: "Once, Shemaiah tipped him off. People are coming to kill you, so hide inside the temple. Turns out he was a double agent, hired by Sanballat and Tobiah. The prophetess Noadiah was in on it too. It was a time when even prophets were blinded by money.",
          draw: [["write", "e5", [120, 650], "Shemaiah = double agent", { size: 60, color: "red" }],
                 ["write", "e6", { after: "e5", gap: 40 }, "even prophetess Noadiah", { size: 48, color: "gray" }]] },
        { say: "Even with his life on the line, Nehemiah just kept steadily at the work. What a courageous man.",
          draw: [["write", "e7", [120, 790], "steady at work, courageous", { size: 64, color: "green" }],
                 ["box", "e7", "green"]] }
      ]
    },
    {
      id: "law", title: "The First Public Reading of the Law",
      beats: [
        { say: "In chapter 8, we get the first public reading of the Law. On the first day of the seventh month, in the square in front of the water gate, Ezra read the book of the Law from early morning until midday.",
          draw: [["clear"],
                 ["title", "t", "1st public reading of the Law"],
                 ["write", "f1", [120, 290], "square at Water Gate · dawn to noon", { size: 60, color: "blue" }]] },
        { say: "And the people realized their sin. They repented, and they rejoiced in the LORD with great joy.",
          draw: [["write", "f2", [120, 400], "repent", { size: 64 }],
                 ["write", "f3", { after: "f2", gap: 110 }, "joy in the LORD", { size: 64, color: "green" }],
                 ["arrow", "f2", "f3"]] },
        { say: "In chapter 10 they make a covenant to keep the Law, and eighty-four people sign it. They even bind themselves with a curse. No intermarriage. Keep the Sabbath. Keep the sabbatical year. Set up ordinances to maintain the temple.",
          draw: [["write", "f4", [120, 510], "84 signed · sworn with a curse", { size: 56, color: "red" }],
                 ["write", "f5", [120, 610], "① no intermarriage ② Sabbath ③ Sabbath year ④ temple upkeep", { size: 44 }]] },
        { say: "Offer the sacrifices properly. Bring the firstfruits properly. Give the firstborn and the redemption price. Give the tithe properly.",
          draw: [["write", "f6", [120, 700], "⑤ sacrifices ⑥ firstfruits ⑦ firstborn + redemption ⑧ tithe", { size: 44 }]] },
        { say: "See, because they read it, they came to understand.",
          draw: [["write", "f7", [120, 820], "read → understand", { size: 72, color: "red" }],
                 ["circle", "f7"]] }
      ]
    },
    {
      id: "again", title: "Nehemiah's Second Reform",
      beats: [
        { say: "Nehemiah had been given twelve years' leave. So, being the man he was, he probably went back to Persia when the twelve years were up. But the work wasn't done, so he came back. Counting the travel and his stay, that's about a year later.",
          draw: [["clear"],
                 ["title", "t", "Nehemiah's second reform"],
                 ["write", "g1", [120, 290], "after 12 yrs → Persia", { size: 56 }],
                 ["write", "g2", { after: "g1", gap: 110 }, "back ~1 yr later", { size: 56 }],
                 ["arrow", "g1", "g2"]] },
        { say: "And when he came back, everything was a mess. This is what you call faith that leans on people. When the leader's around, they act the part. When he's gone, it all falls apart.",
          draw: [["write", "g3", [120, 410], "faith that leans on people", { size: 72, color: "red" }],
                 ["under", "g3"]] },
        { say: "Tobiah, the man who'd threatened and schemed against them, had cleared out a room in the temple and set up an office there. And with no tithes coming in, the Levites had scattered just to make a living.",
          draw: [["write", "g4", [120, 520], "① Tobiah's office in the temple", { size: 52 }],
                 ["write", "g5", [120, 595], "② no tithes, Levites scattered", { size: 52 }]] },
        { say: "Men of Tyre were coming in on the Sabbath and selling their goods. They'd taken foreign wives all over again. And someone from the high priest's family had become Sanballat's son-in-law.",
          draw: [["write", "g6", [120, 670], "③ Tyrians trading on the Sabbath", { size: 52 }],
                 ["write", "g7", [120, 745], "④ foreign wives again", { size: 52 }],
                 ["write", "g8", [120, 820], "⑤ high priest's family = Sanballat's son-in-law", { size: 52, color: "red" }]] }
      ]
    },
    {
      id: "malachi", title: "The Coming of Malachi's Time",
      beats: [
        { say: "So Nehemiah reformed things again and made the people swear again. But Nehemiah couldn't live forever.",
          draw: [["clear"],
                 ["title", "t", "On to Malachi's time"],
                 ["write", "h1", [120, 300], "reform again · swear again", { size: 64 }]] },
        { say: "In the end, once Ezra and Nehemiah died, the faith of the people of Israel fell apart.",
          draw: [["write", "h2", [120, 430], "Ezra · Nehemiah die", { size: 60, color: "gray" }],
                 ["write", "h3", { after: "h2", gap: 110 }, "faith in ruins", { size: 64, color: "red" }],
                 ["arrow", "h2", "h3"]] },
        { say: "They did know God, so they kept up their religious practices. But it slid into formalism.",
          draw: [["write", "h4", [120, 570], "religious acts → formalism", { size: 64, color: "blue" }],
                 ["box", "h4"]] },
        { say: "And that brings us to the time of Malachi. So let's move on to Malachi.",
          draw: [["write", "h5", [120, 720], "Next: Malachi", { size: 72, color: "green" }],
                 ["under", "h5", "green"]] }
      ]
    }
  ]
};
