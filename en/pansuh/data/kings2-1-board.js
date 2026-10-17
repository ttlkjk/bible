// 2 Kings 1–14 whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does.
window.BOARD = {
  scenes: [
    {
      id: "ahaziah", title: "The Death of Ahaziah",
      beats: [
        { say: "Second Kings, chapter 1, verse 1. After Ahab died, Moab rebelled against Israel. That means while Ahab was alive, Moab served Israel.",
          draw: [["title", "t", "The death of Ahaziah"],
                 ["write", "a1", [120, 290], "after Ahab: Moab rebels", { size: 60 }]] },
        { say: "Ahab was excellent at politics, the economy, diplomacy, and security.",
          draw: [["write", "a2", [120, 400], "Ahab = great at politics · economy · diplomacy · security", { size: 46, color: "gray" }]] },
        { say: "Of Ahab's seventy sons, Ahaziah, the best of the lot, became king. But he fell through the lattice of his upper room. What was a king doing to fall off a railing?",
          draw: [["write", "a3", [120, 520], "Ahaziah: falls through lattice", { size: 60 }]] },
        { say: "And instead of asking God, he sends men to ask Baal-zebub, the fly god of the Philistines. God is truly angry.",
          draw: [["write", "a4", [120, 640], "asks Baal-zebub", { color: "red" }],
                 ["write", "a5", { after: "a4", gap: 40 }, "(Philistine fly god)", { size: 50, color: "gray" }],
                 ["under", "a4"]] },
        { say: "Elijah delivers the message. Baal-zebub or whatever, you are going to die. In the end he dies, and his brother Jehoram becomes king. It's a time when the king in the south is Jehoram, and the king in the north is Jehoram too.",
          draw: [["write", "a6", [120, 780], "dies", { size: 64, color: "red" }],
                 ["write", "a7", { after: "a6", gap: 110 }, "Jehoram south · Jehoram north", { size: 60, color: "blue" }],
                 ["arrow", "a6", "a7"]] }
      ]
    },
    {
      id: "elisha", title: "From Elijah to Elisha",
      beats: [
        { say: "Now Elijah's mission is finished and he is taken up to heaven, and Elisha is raised up.",
          draw: [["clear"],
                 ["title", "t", "Elijah → Elisha"],
                 ["write", "b1", [120, 290], "Elijah taken up", { size: 60 }],
                 ["write", "b2", { after: "b1", gap: 110 }, "Elisha", { size: 64, color: "blue" }],
                 ["arrow", "b1", "b2"]] },
        { say: "A double portion of Elijah's spirit comes upon Elisha. And a double portion of the spirit means the times had become twice as evil.",
          draw: [["write", "b3", [120, 410], "double spirit = twice as evil times", { color: "red" }],
                 ["under", "b3"]] },
        { say: "The prophets' names go in a series. Elijah means, the Lord, He is God.",
          draw: [["write", "b4", { at: [420, 570] }, "Elijah", { anchor: "middle", size: 72, color: "blue" }],
                 ["write", "b5", { at: [420, 680] }, "the LORD is God", { anchor: "middle", size: 56 }]] },
        { say: "Elisha means, my God is salvation. If through Elijah God showed that He is God, through Elisha He wants to reveal that He is the God who saves.",
          draw: [["write", "b6", { at: [1150, 570] }, "Elisha", { anchor: "middle", size: 72, color: "red" }],
                 ["write", "b7", { at: [1150, 680] }, "God is salvation", { anchor: "middle", size: 56 }],
                 ["arrow", "b4", "b6"],
                 ["box", "b7", "red"]] }
      ]
    },
    {
      id: "miracle1", title: "God Is Salvation, Part 1",
      beats: [
        { say: "His first work, from chapter 2, verse 19, is healing the bad water and making it sweet. Our God? He is salvation.",
          draw: [["clear"],
                 ["title", "t", "Elisha's miracles"],
                 ["photo", "p1", "../../pansuh/img/image142.jpg", [1100, 190, 420, 237], { tilt: 2 }],
                 ["write", "c1", [120, 300], "heals the bad water", { size: 60 }]] },
        { say: "In chapter 3, the allied armies of Israel, Judah, and Edom go to crush Moab's rebellion. But they set out with no preparation, and in the wilderness they're about to die for lack of water. Elisha has them dig ditches, and water flows like a river.",
          draw: [["write", "c2", [120, 420], "dig ditches → water like a river", { size: 60 }]] },
        { say: "The morning sun reflects off the water and it looks like blood. Moab thinks the three kings must have fought and killed each other, so they come empty-handed to plunder, and they are finished.",
          draw: [["write", "c3", [120, 540], "water like blood → Moab finished", { size: 60 }]] },
        { say: "The widow of one of the sons of the prophets, whose two sons a creditor wants to take as slaves. She pours from one jar of oil, and it keeps flowing until every vessel is full. The Shunammite woman who could not have children gives birth to a son, and when that son dies, Elisha brings him back to life.",
          draw: [["write", "c4", [120, 660], "widow's oil · Shunammite's son", { size: 60 }]] },
        { say: "Our God? He is salvation.",
          draw: [["write", "c5", { at: [800, 800] }, "Our God? Salvation!", { anchor: "middle", size: 76, color: "red" }],
                 ["under", "c5"]] }
      ]
    },
    {
      id: "miracle2", title: "God Is Salvation, Part 2",
      beats: [
        { say: "In the seven-year famine, the stew the students cooked had poison in it. Elisha throws in meal and makes it harmless.",
          draw: [["clear"],
                 ["title", "t", "More miracles"],
                 ["photo", "p2", "../../pansuh/img/image143.jpg", [1100, 190, 420, 237], { tilt: -2 }],
                 ["write", "d1", [120, 300], "poison stew made safe", { size: 60 }]] },
        { say: "With twenty barley loaves and some vegetables, he feeds a hundred sons of the prophets. It's the original five loaves and two fish.",
          draw: [["write", "d2", [120, 420], "20 loaves, 100 men", { size: 60 }],
                 ["write", "d3", { after: "d2", gap: 40 }, "(original 5 loaves & 2 fish)", { size: 46, color: "gray" }]] },
        { say: "In chapter 5, he heals the leprosy of Naaman, the commander of the Aramean army. While Naaman was alive, do you think he ever invaded Israel?",
          draw: [["write", "d4", [120, 540], "Naaman's leprosy", { size: 60 }],
                 ["write", "d5", { after: "d4", gap: 40 }, "→ no invasion while he lived", { size: 52, color: "blue" }]] },
        { say: "The axe head that fell into the water was a precious thing, there were only a few in the whole country. He throws in a stick, and it floats up, fits back on, and comes back.",
          draw: [["write", "d6", [120, 660], "sunken axe head floats", { size: 60 }]] },
        { say: "When Naaman dies, Aram attacks. Elisha tells ahead of time where they're lying in ambush, and blocks them ten times. They still come, so he blinds their eyes and leads them right into the middle of Israel's army. Our God? He is salvation.",
          draw: [["write", "d7", [120, 780], "blinds the Aramean army", { size: 60 }],
                 ["write", "d8", { after: "d7", gap: 60 }, "salvation!", { size: 64, color: "red" }],
                 ["circle", "d8"]] }
      ]
    },
    {
      id: "siege", title: "Samaria Under Siege",
      beats: [
        { say: "A good while later, Aram surrounds Samaria completely. Inside the city it's chaos.",
          draw: [["clear"],
                 ["title", "t", "Samaria under siege"],
                 ["write", "e1", [120, 290], "Aram surrounds Samaria", { size: 60 }]] },
        { say: "A donkey's head sold for eighty shekels of silver. That's a laborer's yearly pay, forty million won. A fourth of a kab of dove's dung sold for five shekels of silver, three million won.",
          draw: [["write", "e2", [120, 410], "donkey head = 80 shekels (40M won)", { size: 56, color: "red" }],
                 ["write", "e3", [120, 520], "1/4 kab dove's dung = 5 shekels (3M won)", { size: 56, color: "red" }]] },
        { say: "It got so bad that some women boiled a son and ate him, and then fought because one would not give up her own son.",
          draw: [["write", "e4", [120, 630], "terrible famine", { size: 56, color: "gray" }]] },
        { say: "Four lepers at the city gate say, if we die, we die, and go to the Aramean camp. God amplifies the sound of their steps like the sound of chariots, and the Aramean army panics and runs away. Our God? He is salvation.",
          draw: [["write", "e5", [120, 770], "4 lepers' footsteps", { size: 60 }],
                 ["write", "e6", { after: "e5", gap: 110 }, "Aram flees", { size: 64, color: "green" }],
                 ["arrow", "e5", "e6", "green"]] }
      ]
    },
    {
      id: "shunem", title: "The Shunammite's Land",
      beats: [
        { say: "In chapter 8, the Shunammite woman appears again. Elisha warns her ahead of time that there will be a seven-year famine and she should go away for a while.",
          draw: [["clear"],
                 ["title", "t", "What timing!"],
                 ["write", "f1", [120, 290], "7-yr famine warning → Philistia", { size: 60 }]] },
        { say: "Seven years later she comes back, and her house and land are a mess. She goes to appeal to the king to get her land back.",
          draw: [["write", "f2", [120, 410], "returns, land lost → appeals to king", { size: 56 }]] },
        { say: "Just then the king was hearing from Gehazi about the things Elisha had done. Gehazi is excitedly telling the story of the son brought back to life, and right then that very woman walks in.",
          draw: [["write", "f3", [120, 530], "Gehazi: \"the son raised to life…\"", { size: 56, color: "blue" }],
                 ["write", "f4", { below: "f3", gap: 100 }, "right then, she walks in", { color: "red" }],
                 ["under", "f4"]] },
        { say: "The king has all her property returned, along with seven years of harvest. Wow, what timing, right? Our God? He is salvation.",
          draw: [["write", "f5", [120, 790], "all property + 7 yrs of harvest back", { color: "green" }],
                 ["box", "f5", "green"]] }
      ]
    },
    {
      id: "hazael", title: "Hazael",
      beats: [
        { say: "When Elisha goes to Damascus, the sick Ben-hadad sends gifts and asks him to inquire of the Lord whether he will recover.",
          draw: [["clear"],
                 ["title", "t", "Ben-hadad and Hazael"],
                 ["write", "g1", [120, 290], "king of Aram: asks the LORD", { size: 60, color: "blue" }]] },
        { say: "The king of Israel goes to ask the fly god, while the king of Aram asks God. Strange, isn't it? Wouldn't God be angry?",
          draw: [["write", "g2", [120, 400], "king of Israel: asks fly god", { size: 60, color: "red" }],
                 ["strike", "g2"]] },
        { say: "Elisha says the king will surely recover. Then he stares at Hazael until Hazael is embarrassed, and bursts into tears.",
          draw: [["write", "g3", [120, 530], "Elisha looks at Hazael, weeps", { size: 60 }]] },
        { say: "Because he knew beforehand that when Hazael became king of Aram, he would invade Israel and do all kinds of evil. Hazael waves it away: what, is your servant a dog, that he should do this great thing?",
          draw: [["write", "g4", [120, 650], "\"Is your servant a dog…?\"", { size: 56, color: "gray" }]] },
        { say: "And then, as if he liked the sound of it, he goes back, soaks a thick cloth in water, kills the king with it, and becomes king himself.",
          draw: [["write", "g5", [120, 780], "kills king with wet cloth", { size: 60 }],
                 ["write", "g6", { after: "g5", gap: 110 }, "King Hazael", { size: 64, color: "red" }],
                 ["arrow", "g5", "g6"]] }
      ]
    },
    {
      id: "jehoram", title: "Jehoram and Ahaziah of Judah",
      beats: [
        { say: "Now the story of southern Judah. Jehoram is judged in verse 18: he did as Ahab did. Why? Because he married Ahab's daughter Athaliah.",
          draw: [["clear"],
                 ["title", "t", "Southern Judah"],
                 ["write", "h1", [120, 290], "Jehoram = like Ahab", { color: "red" }],
                 ["write", "h2", { below: "h1", gap: 90 }, "← married Athaliah", { size: 56, color: "gray" }],
                 ["photo", "p3", "../../pansuh/img/image145.jpg", [1100, 190, 420, 237], { tilt: 2, caption: "North and south royal lines" }]] },
        { say: "In Jehoram's time, Edom and Libnah become independent. Vassals turned into enemies.",
          draw: [["write", "h3", [120, 510], "Edom · Libnah break away", { size: 60 }]] },
        { say: "His son Ahaziah becomes king, and with Athaliah as his mother, he did as Ahab did. After all, the family were Ahab's in-laws.",
          draw: [["write", "h4", [120, 630], "Ahaziah = like Ahab (mother Athaliah)", { size: 56, color: "red" }]] },
        { say: "Ahaziah attacks Ramoth-gilead with his uncle Jehoram of the north, and Jehoram is wounded. Ahaziah goes to visit him and is killed along with him in Jehu's revolt.",
          draw: [["write", "h5", [120, 760], "visits the sick", { size: 60 }],
                 ["write", "h6", { after: "h5", gap: 110 }, "dies in Jehu's revolt", { size: 60, color: "red" }],
                 ["arrow", "h5", "h6"]] }
      ]
    },
    {
      id: "jehu", title: "Jehu's Revolt",
      beats: [
        { say: "In chapter 9, Jehoram, the last king of the house of Omri, saw miracles and still did not repent. He was wounded and resting in the plain of Jezreel. The plain of Jezreel also comes up in Hosea, so remember it well.",
          draw: [["clear"],
                 ["title", "t", "Jehu's revolt (ch. 9)"],
                 ["write", "i1", [120, 290], "plain of Jezreel", { color: "blue" }],
                 ["write", "i2", { after: "i1", gap: 40 }, "(also in Hosea)", { size: 50, color: "gray" }]] },
        { say: "Elisha sends one of the sons of the prophets to anoint Jehu and then run. You shall strike the house of Ahab your master.",
          draw: [["write", "i3", [120, 410], "Jehu anointed: strike the house of Ahab", { size: 56 }]] },
        { say: "The first one Jehu kills is Jehoram. The place where he falls, shot by an arrow, is exactly Naboth's vineyard, the very land his father had stolen.",
          draw: [["write", "i4", [120, 530], "where Jehoram fell", { size: 60 }],
                 ["write", "i5", { after: "i4", gap: 110 }, "Naboth's vineyard", { size: 64, color: "red" }],
                 ["arrow", "i4", "i5"],
                 ["circle", "i5"]] },
        { say: "Now Jezebel is left. Even in this urgent situation, she sits at the window painting her eyes and doing her hair. A frightening woman.",
          draw: [["write", "i6", [120, 660], "Jezebel: painting her eyes", { size: 60 }]] },
        { say: "At the shout, throw her down, Jezebel is thrown down. They meant to give her a burial at least, but the dogs had already taken care of the funeral. Just as God said, the dogs would eat her.",
          draw: [["write", "i7", [120, 790], "dogs shall eat = as God said", { color: "red" }],
                 ["under", "i7"]] }
      ]
    },
    {
      id: "purge", title: "Jehu's Zeal",
      beats: [
        { say: "In chapter 10, Jehu writes to the officials who look after Ahab's seventy sons, challenging them to fight. Two kings couldn't stand against him, how can we? So they cut off the seventy heads and send them.",
          draw: [["clear"],
                 ["title", "t", "Jehu's zeal (ch. 10)"],
                 ["write", "j1", [120, 290], "Ahab's 70 sons", { size: 60 }],
                 ["write", "j2", { after: "j1", gap: 60 }, "Ahaziah's 42 brothers", { size: 60 }]] },
        { say: "He says to Jehonadab son of Rechab, come with me and see my zeal for the Lord, and kills all that was left of Ahab in Samaria. According to the word of the Lord, which he spoke to Elijah. It always happens as God said.",
          draw: [["write", "j3", [120, 410], "\"See my zeal for the LORD\"", { size: 56, color: "blue" }],
                 ["write", "j4", [120, 520], "10:17 as the LORD had spoken", { size: 56, color: "red" }]] },
        { say: "He says, I will serve Baal much, gathers all the Baal worshipers together, and kills every one of them. He burns the temple of Baal and turns it into a public toilet. God must have felt so relieved. He guarantees Jehu's throne for four generations.",
          draw: [["write", "j5", [120, 640], "Baal temple → public toilet", { color: "green" }],
                 ["write", "j6", { after: "j5", gap: 50 }, "4 generations", { size: 56, color: "green" }],
                 ["box", "j6", "green"]] },
        { say: "But verse 31: however. Always watch for the word however. Jehu did not turn away from the sins of Jeroboam, the golden calves. Tiresome, isn't it?",
          draw: [["write", "j7", [120, 780], "But", { size: 80, color: "red" }],
                 ["circle", "j7"],
                 ["write", "j8", { after: "j7", gap: 60 }, "didn't leave Jeroboam's sins", { size: 60 }]] }
      ]
    },
    {
      id: "athaliah", title: "Wicked Athaliah",
      beats: [
        { say: "Chapter 11, the wicked Athaliah. She really is something else. When her son Ahaziah dies, she kills all her grandsons so she can become ruler herself.",
          draw: [["clear"],
                 ["title", "t", "Athaliah (ch. 11)"],
                 ["write", "k1", [120, 290], "son dies → kills grandsons", { color: "red" }]] },
        { say: "Ten times more evil than Jezebel. She becomes the only queen who ever ruled in Israel's history.",
          draw: [["write", "k2", [120, 410], "Jezebel × 10 · the only queen", { size: 60 }],
                 ["under", "k2"]] },
        { say: "But she didn't even know how many grandsons she had. Princess Jehosheba steals away one of them, Joash, and raises him in secret.",
          draw: [["write", "k3", [120, 530], "Jehosheba hides Joash", { size: 60, color: "green" }]] },
        { say: "Six years later, when Joash is seven, the high priest gathers supporters, sets a day, and stages a coup. Athaliah is driven out of the temple and killed, and seven-year-old Joash becomes king.",
          draw: [["write", "k4", [120, 660], "coup after 6 yrs", { size: 60 }],
                 ["write", "k5", { after: "k4", gap: 110 }, "King Joash, age 7", { size: 64, color: "blue" }],
                 ["arrow", "k4", "k5"]] }
      ]
    },
    {
      id: "joash", title: "The Faith of Joash",
      beats: [
        { say: "Chapter 12 judges Joash: he did what was right all the days that Jehoiada the priest instructed him. Then what about after Jehoiada died? It means he did not do what was right.",
          draw: [["clear"],
                 ["title", "t", "Joash (ch. 12)"],
                 ["write", "l1", [120, 290], "right only while Jehoiada lived", { color: "red" }]] },
        { say: "The high places still stand, and he repairs the temple. Second Chronicles chapter 24 tells it in detail.",
          draw: [["write", "l2", [120, 410], "temple repair (2 Chr 24)", { size: 56 }],
                 ["write", "l3", { after: "l2", gap: 50 }, "high places remain", { size: 52, color: "gray" }]] },
        { say: "When Hazael king of Aram attacks, Joash empties out the holy things, the temple treasury, and the palace treasury and hands it all over. He made such an effort to repair the temple, but when things got hard, his faith was exposed right away.",
          draw: [["write", "l4", [120, 530], "temple treasury paid to Hazael", { size: 60, color: "red" }]] },
        { say: "Every time they came, he paid them off, so he spoiled them, and they attacked whenever they were bored.",
          draw: [["write", "l5", [120, 650], "pay them → they come again", { size: 56 }]] },
        { say: "Joash dies at forty-seven in a conspiracy. The house of Omri was corrupt, so God judged it through Jehu. Then the house of Jehu became corrupt too. We thought Joash would be a little different, and again, corrupt. What are we supposed to do?",
          draw: [["write", "l6", [120, 780], "Omri → Jehu → Joash: corrupt again", { color: "red" }],
                 ["under", "l6"]] }
      ]
    },
    {
      id: "amaziah", title: "Amaziah and Jeroboam II",
      beats: [
        { say: "In chapter 13, in the north, Jehoahaz becomes king, and then Joash. Joash in the south, Joash in the north. They do not turn from the sins of Jeroboam. And Elisha dies.",
          draw: [["clear"],
                 ["title", "t", "ch. 13~14"],
                 ["write", "m1", [120, 290], "North: Jehoahaz → Joash (Jeroboam's sins)", { size: 56 }],
                 ["write", "m2", [120, 390], "Elisha dies", { size: 52, color: "gray" }]] },
        { say: "In chapter 14, Amaziah king of Judah did what was right, but not like David. He didn't remove the high places either.",
          draw: [["write", "m3", [120, 510], "Amaziah: right, but not like David", { size: 56, color: "blue" }]] },
        { say: "He killed the servants who had killed his father, but he did not kill their sons. He acted according to the law of Moses. That's something we haven't heard in a long time.",
          draw: [["write", "m4", [120, 630], "by the law: spared their sons", { color: "green" }],
                 ["box", "m4", "green"]] },
        { say: "In the north, Jeroboam the Second. He did not turn from the sins of Jeroboam, but as the prophet Jonah said, he restored the territory from the entrance of Hamath to the sea of the Arabah.",
          draw: [["write", "m5", [120, 750], "Jeroboam II: land restored", { size: 60 }],
                 ["write", "m6", { after: "m5", gap: 40 }, "(as Jonah said)", { size: 52, color: "gray" }]] },
        { say: "This is the time when the prophet Jonah was active. So from now on, we'll read the Prophets and the History books together.",
          draw: [["write", "m7", { at: [1200, 400] }, "Prophets + History", { anchor: "middle", size: 72, color: "red" }],
                 ["circle", "m7"]] }
      ]
    }
  ]
};
