// Esther whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does.
window.BOARD = {
  scenes: [
    {
      id: "intro", title: "Esther Overview",
      beats: [
        { say: "Everyone knows the story of Esther well. The name Esther means star.",
          draw: [["title", "t", "Esther Overview"],
                 ["write", "a1", [120, 300], "Esther = star", { size: 80, color: "blue" }]] },
        { say: "There are two books in the Bible named after women: Ruth and Esther.",
          draw: [["write", "a2", [120, 420], "books named after women: Ruth · Esther", { size: 56 }]] },
        { say: "This happened in the time of Ahasuerus, king of Persia. He was the king after Cyrus, Cambyses the Second, Pseudo-Smerdis, and Darius.",
          draw: [["write", "a3", [120, 540], "Cyrus · Cambyses II · Pseudo-Smerdis · Darius", { size: 44, color: "gray" }],
                 ["write", "a4", [120, 670], "→ Ahasuerus", { size: 72, color: "red" }],
                 ["circle", "a4"]] },
        { say: "He is the very man at the center of the movie 300. I'll tell you more about him when we study the Intertestamental Period.",
          draw: [["write", "a5", { after: "a4", gap: 60 }, "the king in the movie '300'", { size: 50 }],
                 ["write", "a6", [120, 800], "more in the Intertestamental Period", { size: 44, color: "gray" }]] }
      ]
    },
    {
      id: "feast", title: "The Feast at Shushan",
      beats: [
        { say: "In the third year of his reign, King Ahasuerus held a feast in Shushan the palace. It lasted a full 180 days.",
          draw: [["clear"],
                 ["title", "t", "The feast at Shushan"],
                 ["write", "b1", [120, 310], "180-day feast", { size: 96, color: "red" }],
                 ["circle", "b1"]] },
        { say: "Persia had an amazing culture. The palace at Persepolis was where kings from 127 provinces, from India to Ethiopia, brought their tribute.",
          draw: [["write", "b2", [120, 440], "tribute: 127 provinces, India ~ Ethiopia", { size: 56 }],
                 ["write", "b3", { below: "b2", gap: 60 }, "Persepolis palace", { size: 44, color: "gray" }]] },
        { say: "Then, to thank them for their hard work, he held another seven-day feast for the people of the capital, Shushan.",
          draw: [["write", "b4", [120, 600], "+ 7 more days for the capital", { size: 60, color: "blue" }]] },
        { say: "It was done on a grand scale, in a very free atmosphere. No one was forced to drink. Each person could do as he pleased.",
          draw: [["write", "b5", [120, 720], "free feast: no one forced", { size: 56, color: "green" }]] }
      ]
    },
    {
      id: "vashti", title: "Queen Vashti Removed",
      beats: [
        { say: "On the seventh day, when the king was merry with wine, he quietly wanted to show off the queen's beauty, so he called for her to come out.",
          draw: [["clear"],
                 ["title", "t", "Queen Vashti removed"],
                 ["write", "c1", [120, 290], "drunk king: show off the queen"]] },
        { say: "I know exactly how this man felt. I want to show off my wife even when I'm not drunk. But strangely, when he called the queen, she didn't come.",
          draw: [["write", "c2", [180, 390], "I know how he felt (even sober)", { size: 44, color: "gray" }],
                 ["write", "c3", [120, 510], "Vashti: won't come!", { size: 72, color: "red" }],
                 ["circle", "c3"]] },
        { say: "The angry king gathered his wise men. Is there a lawful way to punish her? Then Memucan, one of the seven princes, spoke up.",
          draw: [["write", "c4", [120, 640], "lawful way to punish?"],
                 ["write", "c5", { after: "c4", gap: 100 }, "Memucan", { color: "blue" }],
                 ["arrow", "c4", "c5"]] },
        { say: "He said that when word of the queen spread, all the wives would despise their husbands. He's taking a jab at the king, isn't he? Painting him as a king who doesn't get respect.",
          draw: [["write", "c6", [120, 770], "\"all wives will despise husbands\"", { size: 52 }],
                 ["write", "c7", { after: "c6", gap: 40 }, "← a jab", { size: 52, color: "gray" }]] },
        { say: "In the end, Vashti was removed, and a decree went out that every man should rule his own house. Things were taking a strange turn. God was directing another drama. Anyone sharp can see it.",
          draw: [["write", "c8", { at: [1260, 430] }, "God's drama", { anchor: "middle", color: "red" }],
                 ["box", "c8"]] }
      ]
    },
    {
      id: "chosen", title: "Esther Is Chosen",
      beats: [
        { say: "Once the king's anger cooled, he couldn't help feeling he'd done wrong. But a clueless official drove the nail in: let's gather beautiful young women.",
          draw: [["clear"],
                 ["title", "t", "Esther is chosen"],
                 ["write", "d1", [120, 290], "king: maybe I was wrong...", { color: "gray" }],
                 ["write", "d2", [120, 410], "clueless official: gather virgins", { color: "red" }]] },
        { say: "Now the foreshadowing begins in a drama that God wrote and directed himself. In Shushan the capital there was a Jew named Mordecai.",
          draw: [["write", "d3", [120, 540], "Mordecai", { size: 72, color: "blue" }],
                 ["write", "d4", { after: "d3", gap: 40 }, "= from Marduk, a Babylonian name", { size: 46, color: "gray" }]] },
        { say: "Mordecai was taken captive in 597 B.C., together with Ezekiel, when King Jehoiachin was carried away.",
          draw: [["write", "d5", [180, 625], "597 B.C.: exiled with Ezekiel under Jehoiachin", { size: 44, color: "gray" }]] },
        { say: "Esther's original name was Hadassah, which means myrtle. She had no parents, so Mordecai raised her like his own daughter.",
          draw: [["write", "d6", [120, 750], "Esther = Hadassah (myrtle)", { size: 56 }],
                 ["write", "d7", { after: "d6", gap: 40 }, "raised by Mordecai", { size: 48, color: "gray" }]] }
      ]
    },
    {
      id: "name", title: "When He Calls Your Name",
      beats: [
        { say: "Each young woman prepared for twelve months. Six months with oil of myrrh, and six months with sweet perfumes and other things for women.",
          draw: [["clear"],
                 ["title", "t", "When he calls your name"],
                 ["write", "e1", [120, 300], "12 months", { size: 80, color: "blue" }],
                 ["write", "e2", { after: "e1", gap: 40 }, "myrrh 6 mo. + spices 6 mo.", { size: 44 }]] },
        { say: "But if the king saw her and didn't call her by name, she never got another chance to come before the king.",
          draw: [["write", "e3", [120, 430], "not called by name → over", { size: 60, color: "red" }]] },
        { say: "Until I called your name, you were nothing more than a gesture. It's as if the poet Chun-su Kim read Esther and then wrote his poem.",
          draw: [["write", "e4", [120, 550], "\"Until I called your name...\"", { size: 56 }],
                 ["write", "e5", [180, 635], "Did Chun-su Kim read Esther?", { size: 44, color: "gray" }]] },
        { say: "Esther asked for nothing more than what Hegai the eunuch appointed, and yet she won the favor of everyone who saw her. As they say, the face is what completes the outfit.",
          draw: [["write", "e6", [120, 760], "only what was given → won favor", { size: 56, color: "green" }],
                 ["write", "e7", { after: "e6", gap: 40 }, "the face completes the look", { size: 44, color: "gray" }]] },
        { say: "At last, Esther became queen. Even so, she still listened to her cousin and did not reveal her people.",
          draw: [["write", "e8", { at: [1270, 300] }, "Queen Esther", { anchor: "middle", size: 72, color: "red" }],
                 ["box", "e8"],
                 ["write", "e9", { at: [1270, 395] }, "people kept secret", { anchor: "middle", size: 44, color: "gray" }]] }
      ]
    },
    {
      id: "hint", title: "An Important Clue",
      beats: [
        { say: "While Mordecai was sitting at the king's gate, he found out that Bigthan and Teresh, the eunuchs who kept the door, were plotting to kill the king.",
          draw: [["clear"],
                 ["title", "t", "An important clue"],
                 ["write", "f1", [120, 300], "Bigthan · Teresh: plot to kill king"]] },
        { say: "Mordecai told Esther, and Esther told the king in Mordecai's name.",
          draw: [["write", "f2", [120, 430], "Mordecai", { color: "blue" }],
                 ["write", "f3", { after: "f2", gap: 110 }, "Esther"],
                 ["write", "f4", { after: "f3", gap: 110 }, "king"],
                 ["arrow", "f2", "f3"],
                 ["arrow", "f3", "f4"]] },
        { say: "The two men were hanged on a tree, and it was written in the book of the chronicles before the king. This is an important clue.",
          draw: [["write", "f5", [120, 570], "written in chronicles", { size: 64, color: "red" }],
                 ["under", "f5"],
                 ["write", "f6", { after: "f5", gap: 50 }, "← clue!", { size: 56, color: "gray" }]] },
        { say: "Remember this record well, and watch how it gets used later.",
          draw: [["write", "f7", [120, 710], "Remember this", { size: 60, color: "green" }]] }
      ]
    },
    {
      id: "haman", title: "Haman's Plot",
      beats: [
        { say: "After this, the king promoted Haman the Agagite and set him above all the princes. Everyone bowed down to Haman, but Mordecai did not bow.",
          draw: [["clear"],
                 ["title", "t", "Haman's plot"],
                 ["write", "g1", [120, 290], "Haman: Agagite"],
                 ["write", "g2", { after: "g1", gap: 80 }, "Mordecai: no bow", { color: "red" }]] },
        { say: "When they asked him why, he basically said, Hey, I'm a Jew. I'm telling you, I'm a Jew.",
          draw: [["write", "g3", [180, 390], "\"I'm a Jew!\"", { size: 52, color: "gray" }]] },
        { say: "Haman was an Amalekite. Long ago, Saul did not obey the command to utterly destroy Amalek. Because of that disobedience, Israel nearly perished altogether.",
          draw: [["write", "g4", [120, 520], "Saul disobeyed (Amalek)"],
                 ["write", "g5", { after: "g4", gap: 110 }, "Israel nearly wiped out", { size: 56, color: "red" }],
                 ["arrow", "g4", "g5"]] },
        { say: "Killing only Mordecai wasn't enough for Haman. He cast Pur, that is, the lot, and set the day in the twelfth month, the month Adar.",
          draw: [["write", "g6", [120, 650], "Pur (lot) → 13th of Adar, 12th month", { size: 56, color: "blue" }]] },
        { say: "And he offered ten thousand talents of silver to have all the Jews destroyed. The decree went out. The king and Haman sat down to drink, but the city of Shushan was thrown into confusion.",
          draw: [["write", "g7", [120, 780], "10,000 talents → decree to destroy all Jews", { size: 52, color: "red" }],
                 ["under", "g7"]] }
      ]
    },
    {
      id: "die", title: "If I Perish, I Perish",
      beats: [
        { say: "Mordecai tore his clothes, put on sackcloth, and cried with a loud and bitter cry. Then he asked Esther to go to the king and plead for her people.",
          draw: [["clear"],
                 ["title", "t", "If I perish, I perish"],
                 ["write", "h1", [120, 290], "Mordecai: go plead with the king"]] },
        { say: "But by law, anyone who went to the king without being called would die. You lived only if the king held out the golden scepter. Not a tablet, a scepter. The tablet was the officials' note board. The scepter was a kind of rod that stood for the king's power.",
          draw: [["photo", "p1", "../../pansuh/img/p3/image17.jpg", [1060, 330, 480, 270], { tilt: 2, caption: "tablet (official) · scepter (king)" }],
                 ["write", "h2", [120, 410], "go uncalled → death", { color: "red" }],
                 ["write", "h3", [120, 520], "golden scepter → life", { color: "green" }]] },
        { say: "Ancient kings were always in danger of assassination. Korea had royal food tasters, and in Genesis there were the chief cupbearer and the chief baker. On top of that, Esther had not been called for thirty days already.",
          draw: [["write", "h4", [160, 615], "assassination risk → tasters, cupbearer, baker", { size: 44, color: "gray" }],
                 ["write", "h5", [160, 690], "Esther: not called for 30 days", { size: 44, color: "gray" }]] },
        { say: "Mordecai said, who knows whether you have come to the kingdom for such a time as this?",
          draw: [["write", "h6", [120, 810], "\"for such a time as this?\"", { size: 56, color: "blue" }]] },
        { say: "Esther answered, fast for me three days, night and day. After that I will go in to the king, which is against the law. And if I perish, I perish. There was no other way.",
          draw: [["write", "h7", { at: [1250, 725] }, "after 3-day fast", { anchor: "middle", size: 44, color: "gray" }],
                 ["write", "h8", { at: [1250, 810] }, "if I perish, I perish", { anchor: "middle", size: 52, color: "red" }],
                 ["circle", "h8"]] }
      ]
    },
    {
      id: "banquet", title: "Esther's Banquet",
      beats: [
        { say: "On the third day, Esther put on her royal robes and stood in the inner court. When the king saw her, she was so lovely that he held out the golden scepter. He said he would give her even half the kingdom.",
          draw: [["clear"],
                 ["title", "t", "Esther's banquet"],
                 ["write", "i1", [120, 290], "golden scepter: even half the kingdom!", { size: 56 }]] },
        { say: "If she had chattered away right then, she would have ruined everything. Melting his heart little by little and making him eager, that was Esther's wisdom.",
          draw: [["write", "i2", [120, 410], "doesn't say it yet", { color: "red" }],
                 ["write", "i3", { after: "i2", gap: 40 }, "= Esther's wisdom", { size: 56, color: "blue" }]] },
        { say: "Careful Esther first invited two people to a banquet, the king and Haman. Then she asked them to come again tomorrow, letting one more day pass.",
          draw: [["write", "i4", [120, 540], "feast 1: king + Haman"],
                 ["write", "i5", { after: "i4", gap: 110 }, "feast 2: tomorrow"],
                 ["arrow", "i4", "i5"]] },
        { say: "She was so beautiful he just melted. Men are all like that. In front of a beautiful woman, they all melt.",
          draw: [["write", "i6", [180, 630], "men all melt", { size: 44, color: "gray" }]] },
        { say: "Haman left in a good mood, but when he saw Mordecai still not rising for him, he grew angry. As his wife and friends advised, he set up a gallows fifty cubits high to hang Mordecai.",
          draw: [["write", "i7", [120, 760], "Haman: builds 50-cubit gallows", { color: "red" }],
                 ["under", "i7"]] }
      ]
    },
    {
      id: "honor", title: "Mordecai Honored",
      beats: [
        { say: "That night the king couldn't sleep. So he had the book of the chronicles read to him, and it told of how he had nearly been killed.",
          draw: [["clear"],
                 ["title", "t", "Mordecai honored"],
                 ["write", "j1", [120, 290], "sleepless king → chronicles"]] },
        { say: "It turned out Mordecai had saved his life, and nothing had been done for him.",
          draw: [["write", "j2", [120, 410], "Mordecai saved him → no reward", { color: "blue" }]] },
        { say: "Just then Haman had come into the palace court to ask that Mordecai be hanged. The king asked him, what shall be done to the man whom the king delights to honor?",
          draw: [["write", "j3", [120, 530], "\"the man the king delights to honor?\"", { size: 56 }]] },
        { say: "Haman was sure it had to be himself, so he named the royal robe, the horse, and the crown. But the king said, do just that for Mordecai.",
          draw: [["write", "j4", [120, 660], "Haman: me, surely!", { color: "gray" }],
                 ["strike", "j4", "gray"],
                 ["write", "j5", { after: "j4", gap: 110 }, "Mordecai!", { size: 72, color: "green" }],
                 ["arrow", "j4", "j5"],
                 ["circle", "j5", "green"]] },
        { say: "Haman went home with his head covered. Before they had even finished talking, the eunuchs came to take him to the banquet. You're busiest right before you fall. It's dizzying, isn't it?",
          draw: [["write", "j6", [120, 790], "busiest right before the fall", { size: 60, color: "red" }],
                 ["under", "j6"]] }
      ]
    },
    {
      id: "fall", title: "Haman's Downfall",
      beats: [
        { say: "At the banquet on the second day, the king asked again. What is your petition, Queen Esther?",
          draw: [["clear"],
                 ["title", "t", "Haman's downfall"],
                 ["write", "k1", [120, 290], "feast 2: what is your petition?"]] },
        { say: "Esther answered, let my life be given me at my petition, and my people at my request. For we are sold, I and my people, to be destroyed.",
          draw: [["write", "k2", [120, 410], "\"give me my life, my people\"", { color: "red" }]] },
        { say: "When the king asked who had dared to do such a thing, Esther said, the adversary and enemy is this wicked Haman.",
          draw: [["write", "k3", [120, 540], "adversary = this wicked Haman"],
                 ["box", "k3"]] },
        { say: "The king went out to the garden in his anger. When he came back, Haman had fallen on the couch where Esther was. The king even misunderstood what he saw.",
          draw: [["write", "k4", [180, 645], "Haman on Esther's couch → king misreads it", { size: 46, color: "gray" }]] },
        { say: "Harbonah the eunuch mentioned the fifty-cubit gallows that Haman had set up, and the king had Haman hanged on it. Only then did the king's anger cool down.",
          draw: [["write", "k5", [120, 780], "gallows for Mordecai → Haman", { color: "red" }],
                 ["under", "k5"]] }
      ]
    },
    {
      id: "revenge", title: "The Jews Strike Back",
      beats: [
        { say: "In chapters 8 and 9, because of Esther's plea, Israel takes revenge on its enemies in many regions.",
          draw: [["clear"],
                 ["title", "t", "The Jews strike back"],
                 ["write", "l1", [120, 290], "ch. 8~9: revenge on enemies"]] },
        { say: "When Haman's order first went out, it became clear who the anti-Semites were. Those were the ones they killed. But they went too far.",
          draw: [["write", "l2", [120, 410], "anti-Semites exposed"],
                 ["write", "l3", { after: "l2", gap: 60 }, "→ went too far", { size: 56, color: "gray" }]] },
        { say: "Anyway, with Mordecai holding real power and Esther as queen, we see many people becoming Jews.",
          draw: [["write", "l4", [120, 540], "Mordecai in power + Queen Esther", { color: "blue" }]] },
        { say: "I mentioned this earlier when we studied Zechariah, didn't I? People of Persia, the superpower that ruled 127 provinces from India to Ethiopia, wanted to become Jews.",
          draw: [["write", "l5", [120, 680], "Persians wanted to become Jews!", { color: "red" }],
                 ["under", "l5"]] }
      ]
    },
    {
      id: "purim", title: "Purim Is Established",
      beats: [
        { say: "Haman's wicked plan came back on his own head, and Haman and his sons were hanged on the gallows. So these two days were called Purim, after the name Pur. Pur means casting lots.",
          draw: [["clear"],
                 ["title", "t", "Purim is established"],
                 ["write", "m1", [120, 290], "Pur = cast lots"],
                 ["write", "m2", { after: "m1", gap: 110 }, "Purim", { size: 80, color: "red" }],
                 ["arrow", "m1", "m2"],
                 ["circle", "m2"]] },
        { say: "On the Sabbath just before Purim, they read Deuteronomy chapter 25, verses 17 to 19. Remember what Amalek did to you.",
          draw: [["write", "m3", [120, 410], "Sabbath before: Deut 25:17-19", { size: 52, color: "gray" }],
                 ["write", "m4", [120, 520], "\"Remember what Amalek did to you\"", { size: 60, color: "blue" }]] },
        { say: "At Purim, every Jew must go to the synagogue and read the book of Esther. Reading it together with other Jews is what matters. The salvation of Purim was a salvation of the whole community, of the whole people.",
          draw: [["write", "m5", [120, 640], "read together = community saved", { size: 60, color: "green" }]] },
        { say: "Anyone too sick to go to the synagogue must still read it, even at home.",
          draw: [["write", "m6", [180, 720], "if very sick, at home", { size: 44, color: "gray" }]] },
        { say: "The rules for reading are fun, too. The four verses about redemption are read out loud, and whenever Haman's name comes up, people shout and make a racket with special noisemakers.",
          draw: [["write", "m7", [120, 820], "redemption verses loud · Haman = noise!", { size: 56, color: "red" }]] }
      ]
    },
    {
      id: "end", title: "Wrapping Up",
      beats: [
        { say: "The book ends with Mordecai becoming second only to the king, being honored, and seeking the good of his people.",
          draw: [["clear"],
                 ["title", "t", "Wrapping up"],
                 ["write", "n1", [120, 300], "Mordecai: next to the king", { color: "green" }]] },
        { say: "To sum up, Esther flows like this. Esther is chosen, Haman's plot, if I perish I perish, Haman's downfall, and the establishment of Purim.",
          draw: [["photo", "p2", "../../pansuh/img/p3/image16.jpg", [1080, 330, 440, 248], { tilt: -2 }]] },
        { say: "Next I'd like to go over the books of poetry and wisdom. They're thought to have been collected and edited around this time.",
          draw: [["write", "n2", [120, 430], "Next: Poetry & Wisdom", { size: 64, color: "blue" }],
                 ["box", "n2"]] },
        { say: "During the Babylonian Exile, the people of Israel realized how important the Scriptures were, and they began collecting and organizing the writings. The books of poetry were also studied and organized in this period.",
          draw: [["write", "n3", [120, 570], "Exile: Scripture matters", { size: 60 }],
                 ["write", "n4", [120, 690], "→ collect · organize (incl. poetry)", { size: 56 }]] }
      ]
    }
  ]
};
