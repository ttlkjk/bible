// 2 Samuel whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does.
window.BOARD = {
  scenes: [
    {
      id: "open", title: "2 Samuel Overview",
      beats: [
        { say: "Okay, Second Samuel. From chapter 1 all the way to chapter 24, it's all about David.",
          draw: [["title", "t", "2 Samuel Overview"],
                 ["write", "a1", [120, 300], "ch. 1~24", { size: 80, color: "blue" }],
                 ["write", "a2", { after: "a1", gap: 110 }, "all about David", { color: "red" }],
                 ["arrow", "a1", "a2"],
                 ["photo", "p1", "../../pansuh/img/image124.jpg", [1080, 390, 440, 248], { tilt: 2, caption: "Panorama of 2 Samuel" }]] },
        { say: "Saul has died. So let's follow how David moves from here.",
          draw: [["write", "a3", [120, 450], "after Saul died", { size: 60 }],
                 ["write", "a4", { below: "a3", gap: 100 }, "David's moves", { size: 72, color: "blue" }],
                 ["box", "a4"]] },
        { say: "David doesn't make his political moves rashly. He asks God about every single one of them.",
          draw: [["write", "a5", [120, 720], "asks God, one step at a time", { size: 60, color: "green" }],
                 ["under", "a5", "green"]] }
      ]
    },
    {
      id: "amalek", title: "The Amalekite's Lie",
      beats: [
        { say: "A young man comes out of Saul's camp and says he killed Saul. He says he's brought Saul's crown and the bracelet from his arm.",
          draw: [["clear"],
                 ["title", "t", "The young Amalekite"],
                 ["write", "b1", [120, 300], "\"I killed Saul\"", { size: 60 }],
                 ["write", "b2", { after: "b1", gap: 50 }, "crown · bracelet", { size: 52, color: "gray" }]] },
        { say: "He's lying, isn't he? We read the end of First Samuel, so we can tell right away.",
          draw: [["write", "b3", [120, 420], "a lie", { size: 72, color: "red" }],
                 ["circle", "b3"],
                 ["write", "b4", { after: "b3", gap: 60 }, "(see the end of 1 Samuel)", { size: 48, color: "gray" }]] },
        { say: "You say you killed Saul, the Lord's anointed? David has him taken away and struck down on the spot. Think about it. A guy like this, given the chance, would cut off David's head too and carry it to someone else.",
          draw: [["write", "b5", [120, 550], "killed the Lord's anointed?"],
                 ["write", "b6", { after: "b5", gap: 110 }, "executed", { color: "red" }],
                 ["arrow", "b5", "b6"]] },
        { say: "He must have been expecting a reward, but that's because he didn't know David. David wrote a lament for Saul, the very man who'd tried to kill him. It's called the Song of the Bow, and he told them to teach it to the people of Judah.",
          draw: [["write", "b7", [120, 680], "Song of the Bow", { size: 72, color: "blue" }],
                 ["box", "b7"],
                 ["write", "b8", { after: "b7", gap: 60 }, "mourns Saul's death", { size: 56 }]] },
        { say: "Now, the Book of Jashar comes up here. There's a footnote saying this was quoted from the Book of Jashar, which was written before Samuel.",
          draw: [["write", "b9", [120, 800], "Book of Jashar = written before Samuel", { size: 48, color: "gray" }]] }
      ]
    },
    {
      id: "hebron", title: "King in Hebron",
      beats: [
        { say: "In chapter 2, David asks the Lord. Should I go up into one of the cities of Judah? Go up. Where to? To Hebron.",
          draw: [["clear"],
                 ["title", "t", "To Hebron"],
                 ["write", "c1", [120, 300], "asks the LORD (2:1)"],
                 ["write", "c2", { after: "c1", gap: 110 }, "Hebron", { size: 72, color: "blue" }],
                 ["arrow", "c1", "c2"]] },
        { say: "The men of Judah make David king, and then they tell him that the men of Jabesh-gilead buried Saul.",
          draw: [["write", "c3", [120, 430], "Jabesh-gilead buried Saul", { size: 56 }]] },
        { say: "And David actually praises them. You see, Saul had once saved them when they were about to be wiped out.",
          draw: [["write", "c4", [120, 550], "David praises them instead", { color: "green" }],
                 ["under", "c4", "green"]] },
        { say: "People are quietly watching. Is David going to march up and grab the throne? But no, David doesn't act rashly. In Hebron, he becomes king over just the tribe of Judah.",
          draw: [["write", "c5", [120, 690], "no rash moves", { color: "red" }],
                 ["write", "c6", { after: "c5", gap: 60 }, "king of Judah only", { size: 60 }],
                 ["box", "c6"]] }
      ]
    },
    {
      id: "divided", title: "Two Years Divided",
      beats: [
        { say: "Meanwhile Abner, the commander of Saul's army, makes Saul's son Ish-bosheth king. Ish-bosheth is just a figurehead. Abner's the one with the real power. And Israel goes through two shaky years as a divided kingdom.",
          draw: [["clear"],
                 ["title", "t", "David vs Ish-bosheth"],
                 ["write", "d1", [120, 290], "David (Hebron)", { size: 60, color: "blue" }],
                 ["write", "d2", { after: "d1", gap: 80 }, "Ish-bosheth (Mahanaim)", { size: 60, color: "red" }],
                 ["write", "d3", [120, 400], "real power = Abner · 2 unstable years divided", { size: 52, color: "gray" }]] },
        { say: "A battle breaks out at the pool of Gibeon. Ish-bosheth's army loses three hundred and sixty men in no time, and David's army loses only nineteen.",
          draw: [["write", "d4", [120, 520], "pool of Gibeon:", { size: 56, color: "gray" }],
                 ["write", "d5", { after: "d4", gap: 30 }, "360", { size: 64, color: "red" }],
                 ["write", "d6", { after: "d5", gap: 30 }, "vs", { size: 56, color: "gray" }],
                 ["write", "d7", { after: "d6", gap: 30 }, "19", { size: 64, color: "blue" }],
                 ["circle", "d7", "blue"]] },
        { say: "Abner's a seasoned veteran. He sees he can't win, so he pulls back. But Joab's brother Asahel chases after him.",
          draw: [["write", "e1", [120, 640], "Abner retreats", { size: 60 }],
                 ["write", "e2", { after: "e1", gap: 110 }, "Asahel chases", { size: 60, color: "blue" }],
                 ["arrow", "e1", "e2"]] },
        { say: "Just take some soldier's armor and go home. No way, let's finish this today. So Abner thrusts the butt of his spear backward past his side. A sudden brake! And Asahel dies.",
          draw: [["write", "e3", { after: "e2", gap: 110 }, "Asahel dies", { size: 60, color: "red" }],
                 ["arrow", "e2", "e3"]] },
        { say: "Joab chased after him too, but when Abner challenged him to a head-on fight, he lost his nerve and turned back. His brother was dead, and his pride was crushed. His heart was full of grudge.",
          draw: [["write", "e4", [120, 780], "Joab", { size: 76, color: "red" }],
                 ["circle", "e4"],
                 ["write", "e5", { after: "e4", gap: 50 }, "= full of grudge", { size: 60 }]] }
      ]
    },
    {
      id: "abner", title: "The Death of Abner",
      beats: [
        { say: "In chapter 3, Abner keeps getting stronger, and he goes in to Saul's concubine Rizpah. When Ish-bosheth says something about it, Abner says, fine, I'll hand the whole kingdom over to David.",
          draw: [["clear"],
                 ["title", "t", "Abner comes over"],
                 ["write", "f1", [120, 300], "Rizpah affair", { size: 60 }],
                 ["write", "f2", { after: "f1", gap: 110 }, "I'll give it to David", { size: 60, color: "blue" }],
                 ["arrow", "f1", "f2"]] },
        { say: "David has just one condition. Bring me Michal, Saul's daughter. She'd been married to another man for over ten years, and he brings her back.",
          draw: [["write", "f3", [120, 420], "condition: bring Michal", { size: 60 }],
                 ["write", "f4", { below: "f3", gap: 70 }, "(married to another 10+ yrs)", { size: 46, color: "gray" }]] },
        { say: "But here's the problem. Joab. He pretends he wants to whisper something to Abner, and he stabs him with a sword and kills him. It was personal revenge for his brother. And David didn't know.",
          draw: [["write", "f5", [120, 620], "Joab's personal revenge", { color: "red" }],
                 ["under", "f5"],
                 ["photo", "p2", "../../pansuh/img/image126.jpg", [1060, 190, 440, 248], { tilt: -2 }]] },
        { say: "This was the very moment when north and south were about to come together in peace. People are furious. But David shows up at the funeral, weeps out loud, and mourns from the heart.",
          draw: [["write", "f6", [120, 740], "David weeps aloud", { size: 60 }]] },
        { say: "So it turns out it wasn't David, it was Joab. And the people's hearts come rushing back to David like a wave.",
          draw: [["write", "f7", { at: [1280, 740] }, "people turn to David", { anchor: "middle", size: 56, color: "green" }],
                 ["arrow", "f6", "f7", "green"]] }
      ]
    },
    {
      id: "ark", title: "Jerusalem and the Ark",
      beats: [
        { say: "In chapter 4, Rechab and Baanah cut off Ish-bosheth's head and bring it to David. I put to death the man who only lied about it. You actually killed him, and you think you'll live? He dealt with them right away.",
          draw: [["clear"],
                 ["title", "t", "Road to unity"],
                 ["write", "g1", [120, 300], "Ish-bosheth killed (ch. 4)", { size: 56 }],
                 ["write", "g2", { after: "g1", gap: 110 }, "Rechab · Baanah dealt with", { size: 56, color: "red" }],
                 ["arrow", "g1", "g2"]] },
        { say: "In chapter 5, he captures Jerusalem, which the Jebusites held. And in chapter 6, he brings the ark up from Kiriath-jearim.",
          draw: [["write", "g3", [120, 420], "ch. 5 takes Jerusalem", { size: 56, color: "blue" }],
                 ["write", "g4", { after: "g3", gap: 60 }, "ch. 6 brings the ark", { size: 56, color: "blue" }]] },
        { say: "But David makes a mistake. The priests were supposed to carry the ark on their shoulders. He brought it on a cart instead, and Uzzah died.",
          draw: [["write", "g5", [120, 550], "on a cart", { size: 60 }],
                 ["strike", "g5"],
                 ["write", "g6", { after: "g5", gap: 110 }, "Uzzah dies", { size: 60, color: "red" }],
                 ["arrow", "g5", "g6"]] },
        { say: "He was scared, so he left it at the house of Obed-edom. And what was Obed-edom supposed to do with it? But God blessed him.",
          draw: [["write", "g7", [120, 670], "house of Obed-edom", { size: 60 }],
                 ["write", "g8", { after: "g7", gap: 110 }, "blessed", { size: 60, color: "green" }],
                 ["arrow", "g7", "g8", "green"]] },
        { say: "So he brings it again, and this time he studies up first and has the priests carry it.",
          draw: [["write", "g9", [120, 800], "priests carry it on shoulders", { color: "green" }],
                 ["box", "g9", "green"]] }
      ]
    },
    {
      id: "michal", title: "Michal",
      beats: [
        { say: "David's so overjoyed that he dances without even noticing his clothes are coming off. Michal sees it and mocks him.",
          draw: [["clear"],
                 ["title", "t", "David dances, Michal"],
                 ["write", "h1", [120, 300], "David dances"],
                 ["write", "h2", { after: "h1", gap: 110 }, "Michal mocks", { color: "red" }],
                 ["arrow", "h1", "h2"]] },
        { say: "From then on, David doesn't go to Michal. The Bible says she had no child to the day of her death.",
          draw: [["write", "h3", [120, 430], "no child to her death", { size: 60 }]] },
        { say: "But look at it from Michal's side too. She'd been living happily with another man, she was torn away from him, and David never came to see her even once. No wonder she was bitter.",
          draw: [["write", "h4", [120, 550], "Michal's side: torn away + never visited", { size: 50, color: "gray" }]] },
        { say: "What came after this was the Bathsheba affair. David was wrong, a hundred times, a thousand times over. But if you trace cause and effect, you can't say Michal had no part in it.",
          draw: [["write", "h5", [120, 680], "Michal affair"],
                 ["write", "h6", { after: "h5", gap: 110 }, "Bathsheba affair", { color: "red" }],
                 ["arrow", "h5", "h6"],
                 ["write", "h7", { below: "h5", gap: 100 }, "David's fault · Michal has a share too", { size: 50, color: "gray" }]] }
      ]
    },
    {
      id: "house", title: "The House of David",
      beats: [
        { say: "In chapter 7, David says he wants to build a temple. Nathan says go ahead, but God stops him. There's too much blood on his hands.",
          draw: [["clear"],
                 ["title", "t", "Dream of a temple (ch. 7)"],
                 ["write", "i1", [120, 300], "wants to build"],
                 ["write", "i2", { after: "i1", gap: 110 }, "too much blood", { color: "red" }],
                 ["arrow", "i1", "i2"]] },
        { say: "Think about it. A man who ruled by force says, I'm building a temple, please give a donation. What comes in won't be donations. It'll be flattery money, won't it?",
          draw: [["write", "i3", [120, 420], "donations", { size: 60 }],
                 ["strike", "i3"],
                 ["write", "i4", { after: "i3", gap: 40 }, "→ flattery money", { size: 60, color: "red" }]] },
        { say: "Instead, God makes him a promise. You wanted to build me a house, but I'm going to build you a house.",
          draw: [["write", "i5", [120, 550], "I will build you a house", { color: "green" }],
                 ["box", "i5", "green"]] },
        { say: "From chapter 8 to chapter 10, he wins battle after battle. Wherever he went, he won.",
          draw: [["write", "i6", [120, 680], "ch. 8~10 victory after victory", { size: 60, color: "blue" }]] },
        { say: "In chapter 9, he doesn't forget Jonathan's kindness, and he takes care of Mephibosheth, who was lame in both feet. You look upon such a dead dog as I am! Mephibosheth is deeply moved.",
          draw: [["write", "i7", [120, 800], "ch. 9 cares for Mephibosheth", { size: 56 }],
                 ["write", "i8", { after: "i7", gap: 50 }, "\"a dead dog like me\"", { size: 50, color: "gray" }]] }
      ]
    },
    {
      id: "bathsheba", title: "The Bathsheba Affair",
      beats: [
        { say: "Chapter 11 is the famous Bathsheba affair. He lusted, he acted on it, along the way he killed his most loyal servant, and in the end he took her.",
          draw: [["clear"],
                 ["title", "t", "Bathsheba affair (ch. 11)"],
                 ["write", "j1", [120, 300], "lust → act → kill Uriah → take her", { size: 56, color: "red" }]] },
        { say: "The loyal men around him, men like Nathan, Benaiah, and Zadok, saw that crime and still served David just like before. And the most loyal of them all was Uriah the Hittite.",
          draw: [["write", "j2", [120, 420], "loyal men: Nathan · Benaiah · Zadok · Uriah", { size: 50, color: "gray" }]] },
        { say: "In chapter 12, Nathan comes and points out his sin, and David falls down right away.",
          draw: [["write", "j3", [120, 540], "Nathan rebukes"],
                 ["write", "j4", { after: "j3", gap: 110 }, "falls down at once", { color: "green" }],
                 ["arrow", "j3", "j4"]] },
        { say: "Chapter 12, verse 14. By this deed you have given great occasion to the enemies of the Lord to blaspheme. You see, sin gives Satan something to blaspheme with.",
          draw: [["write", "j5", [120, 670], "sin = gives Satan a reason to mock", { color: "red" }],
                 ["under", "j5"]] },
        { say: "After the child died, the next son he had was Solomon. That name comes from shalom. His other name is Jedidiah, which means beloved of the Lord. And yes, this will be on the test.",
          draw: [["write", "j6", [120, 800], "Solomon = shalom", { size: 60, color: "blue" }],
                 ["write", "j7", { after: "j6", gap: 60 }, "Jedidiah = beloved", { size: 60, color: "blue" }],
                 ["box", "j7", "blue"]] }
      ]
    },
    {
      id: "after", title: "It Came to Pass After This",
      beats: [
        { say: "Chapter 13, verse 1. And it came to pass after this. Underline that! This is exactly how a historian sees things.",
          draw: [["clear"],
                 ["title", "t", "13:1"],
                 ["write", "k1", { at: [800, 320] }, "It came to pass after this", { anchor: "middle", size: 76, color: "red" }],
                 ["under", "k1"]] },
        { say: "After David's terrible crime, dark things start happening in David's house. Amnon violates Absalom's sister Tamar, and Absalom gets so angry he kills Amnon.",
          draw: [["write", "k2", [160, 470], "Amnon → Tamar", { size: 60 }],
                 ["write", "k3", { after: "k2", gap: 110 }, "Absalom kills Amnon", { size: 60 }],
                 ["arrow", "k2", "k3"]] },
        { say: "Absalom comes back and starts a rebellion, and David goes through real hardship. In the end Absalom dies too. And once again, Joab disobeys and kills him.",
          draw: [["write", "k4", [160, 600], "Absalom rebels", { size: 60, color: "red" }],
                 ["write", "k5", { after: "k4", gap: 110 }, "Joab kills Absalom", { size: 60 }],
                 ["arrow", "k4", "k5"]] },
        { say: "So what do all these things hang on? They all hang on this one line. And it came to pass after this.",
          draw: [["write", "k6", [160, 760], "all hang on this one line", { color: "blue" }],
                 ["box", "k6", "blue"]] }
      ]
    },
    {
      id: "return", title: "David Returns",
      beats: [
        { say: "When the revolt's put down and David comes back to Jerusalem, who's in the most trouble? Shimei. He thought David was finished, so he cursed him. But David forgives him.",
          draw: [["clear"],
                 ["title", "t", "Reward and punishment"],
                 ["write", "l1", [120, 300], "forgives Shimei", { color: "green" }],
                 ["photo", "p3", "../../pansuh/img/image127.jpg", [1100, 190, 420, 237], { tilt: 2 }]] },
        { say: "He's a political master. Shimei's a walking advertisement. But later, on the hit list David hands to Solomon, guess whose name is there? Shimei's. I spared him because I needed him, but you don't. You know what I mean?",
          draw: [["write", "l2", [120, 420], "walking advertisement", { size: 56, color: "blue" }],
                 ["write", "l3", { below: "l2", gap: 90 }, "→ later on Solomon's hit list", { size: 50, color: "gray" }]] },
        { say: "Mephibosheth was deceived and slandered by his servant Ziba. When David says to split the land again, Mephibosheth says it's enough that the king came back alive, and he lets Ziba take it all.",
          draw: [["write", "l4", [120, 640], "Mephibosheth: enough that the king is back alive", { size: 50 }]] },
        { say: "Barzillai helped him when he fled, so David offers him a position. Barzillai says, I'm old, take my son Chimham instead. So David takes Chimham with him. He's very clear about reward and punishment, isn't he?",
          draw: [["write", "l5", [120, 750], "Barzillai → son Chimham", { size: 52 }],
                 ["write", "l6", { at: [1300, 750] }, "clear reward & penalty", { anchor: "middle", size: 52, color: "red" }],
                 ["box", "l6"]] }
      ]
    },
    {
      id: "late", title: "Famine and Praise",
      beats: [
        { say: "In chapter 21 there's a famine for three years. Why? Because of the grudge of the Gibeonites, the people Saul had tried to wipe out.",
          draw: [["clear"],
                 ["title", "t", "ch. 21~23"],
                 ["write", "m1", [120, 300], "3-yr famine ← Gibeonites' grudge", { size: 60 }]] },
        { say: "Saul's descendants had to be handed over, and David's very careful that it doesn't look like political revenge. He spares Mephibosheth and hands over the others, and the rain comes again.",
          draw: [["write", "m2", [120, 420], "spares Mephibosheth → rain again", { size: 56, color: "green" }]] },
        { say: "Chapter 22 and the start of chapter 23 have a song of praise a lot like Psalm 18. Even in days when death was always brushing past his throat, David never bent his integrity, his uprightness, or his principles.",
          draw: [["write", "m3", [120, 540], "praise (like Ps 18)", { size: 56, color: "blue" }],
                 ["write", "m4", { after: "m3", gap: 50 }, "integrity · uprightness · principle", { size: 52, color: "red" }]] },
        { say: "Here's the thing. To live honestly and with integrity, you first have to practice taking a loss. If you're set on never losing out, you'll end up doing things you shouldn't.",
          draw: [["write", "m5", [120, 670], "practice taking a loss", { color: "red" }],
                 ["circle", "m5"]] },
        { say: "Ruling people with justice, in the fear of God. That's what politics is. Chapter 23 also has David's three mighty men. Josheb-basshebeth, Eleazar, and Shammah.",
          draw: [["write", "m6", [120, 790], "justice + fear of God = politics", { size: 52, color: "blue" }],
                 ["write", "m7", { below: "m6", gap: 52 }, "3 mighty men: Josheb-basshebeth · Eleazar · Shammah", { size: 44, color: "gray" }]] }
      ]
    },
    {
      id: "census", title: "The Census",
      beats: [
        { say: "In chapter 24, once all the troubles are over, David gets proud and takes a census, and he gets into serious trouble for it.",
          draw: [["clear"],
                 ["title", "t", "The census (ch. 24)"],
                 ["write", "n1", [120, 290], "proud David counts the people", { size: 60 }]] },
        { say: "Verse 1 says the Lord moved David. But First Chronicles chapter 21, verse 1 says Satan provoked David. The two books are looking at the same event from different points of view.",
          draw: [["write", "n2", [120, 400], "2 Sam: the LORD moved him", { size: 52, color: "blue" }],
                 ["write", "n3", { after: "n2", gap: 60 }, "1 Chr: Satan provoked", { size: 52, color: "red" }],
                 ["write", "n4", [120, 490], "→ Satan provoked, under God's permission", { size: 48, color: "gray" }]] },
        { say: "The prophet Gad makes him choose one of three things. Seven years of famine, three months of running from his enemies, or three days of plague.",
          draw: [["write", "n5", [120, 600], "7-yr famine · 3 months fleeing · 3-day plague", { size: 50 }]] },
        { say: "David picks number three. People are frightening, but God is merciful, so he'd rather take it from God.",
          draw: [["write", "n6", [120, 710], "chooses 3-day plague", { size: 60, color: "red" }],
                 ["write", "n7", { after: "n6", gap: 50 }, "God's mercy over men", { size: 52, color: "gray" }]] },
        { say: "He buys the threshing floor of Araunah and offers sacrifices there, and the plague stops. And that very spot is where the temple gets built.",
          draw: [["write", "n8", [120, 820], "Araunah's threshing floor", { size: 56 }],
                 ["write", "n9", { after: "n8", gap: 110 }, "temple site", { size: 60, color: "green" }],
                 ["arrow", "n8", "n9", "green"],
                 ["box", "n9", "green"]] }
      ]
    },
    {
      id: "why", title: "Why So Long?",
      beats: [
        { say: "Now, there's a reason we spent so long on the stories of Abraham and David.",
          draw: [["clear"],
                 ["title", "t", "Why so long?"],
                 ["write", "o1", [120, 300], "Abraham · David stories", { size: 64 }]] },
        { say: "It's because God introduces Jesus as the son of Abraham and the son of David.",
          draw: [["write", "o2", [120, 430], "Jesus = son of Abraham & David", { color: "red" }],
                 ["under", "o2"]] },
        { say: "Next, we'll look at Kings, the stories of the kings. And they're judged very simply. For northern Israel, it's this. He followed the sins of Jeroboam.",
          draw: [["write", "o3", [120, 580], "North Israel:", { size: 56, color: "gray" }],
                 ["write", "o4", { after: "o3", gap: 30 }, "followed Jeroboam's sins", { size: 60, color: "blue" }]] },
        { say: "And southern Judah? The question is, did the king do as David did, or not?",
          draw: [["write", "o5", [120, 710], "South Judah:", { size: 56, color: "gray" }],
                 ["write", "o6", { after: "o5", gap: 30 }, "like David / not like David", { size: 60, color: "green" }],
                 ["box", "o6", "green"]] }
      ]
    }
  ]
};
