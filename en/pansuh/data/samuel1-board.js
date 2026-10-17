// 1 Samuel whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does.
window.BOARD = {
  scenes: [
    {
      id: "intro", title: "1 Samuel",
      beats: [
        { say: "Okay, 1 Samuel. This is a story from three thousand years ago.",
          draw: [["title", "t", "1 Samuel"],
                 ["photo", "p1", "../../pansuh/img/image120.jpg", [1110, 40, 400, 225], { tilt: 3 }],
                 ["write", "a1", [120, 330], "3,000 years ago", { size: 68, color: "blue" }]] },
        { say: "The content's pretty simple. There's Samuel's family, Eli's family, Saul, David's younger years, and then the fall of Saul's house.",
          draw: [["write", "a2", [120, 460], "Samuel · Eli · Saul · young David · fall of Saul's house", { size: 46 }]] },
        { say: "Now, once again, let's hold on to Exodus chapter 19, verses 5 and 6. That's the backbone of the Old Testament. God was dreaming of world mission. So He chose Israel, saved them, gave them the law, even trained them in the wilderness, and then put them right up on the stage of history.",
          draw: [["write", "a3", [120, 600], "Exod 19:5~6 OT backbone", { size: 64, color: "blue" }],
                 ["write", "a4", { after: "a3", gap: 50 }, "→ on history's stage", { size: 52 }]] },
        { say: "But here's the thing. Israel, the lead actor, walked on stage without learning a single line. And now he's just stumbling around.",
          draw: [["write", "a5", [120, 760], "lead actor never learned his lines", { size: 64, color: "red" }],
                 ["under", "a5"]] }
      ]
    },
    {
      id: "samuel", title: "Samuel the Nazirite",
      beats: [
        { say: "So God says, okay, this won't do. Let's set one apart from childhood and raise him that way. So He raises up a Nazirite. But then what? The judges go corrupt all over again.",
          draw: [["clear"],
                 ["title", "t", "Samuel the Nazirite"],
                 ["write", "b1", [120, 300], "set apart from childhood → Nazirite", { size: 60, color: "blue" }]] },
        { say: "Remember, we're still in the time of the Judges. Samuel's a judge too.",
          draw: [["write", "b2", [120, 420], "still the Judges era · Samuel a judge too", { size: 52, color: "gray" }]] },
        { say: "Even Samuel's birth came about this way. God kept a woman named Hannah from having children, and that's what led her to make a vow.",
          draw: [["write", "b3", [120, 550], "Hannah: kept barren", { size: 64 }],
                 ["write", "b4", { after: "b3", gap: 110 }, "vow", { size: 64, color: "red" }],
                 ["arrow", "b3", "b4"]] },
        { say: "Chapter 1, verse 11. No razor shall come upon his head. That's the Nazirite vow.",
          draw: [["write", "b5", { after: "b4", gap: 60 }, "1:11 no razor = Nazirite vow", { size: 46, color: "gray" }]] },
        { say: "So Samuel was born, and just as she'd promised, as soon as he was weaned, she gave him to the temple.",
          draw: [["write", "b6", [120, 700], "weaned → given to the temple", { size: 64, color: "green" }],
                 ["box", "b6", "green"]] }
      ]
    },
    {
      id: "eli-sons", title: "The Sons of Eli",
      beats: [
        { say: "Right after that comes Eli's family. Chapter 2, verse 12. The sons of Eli were worthless men; they did not know the Lord.",
          draw: [["clear"],
                 ["title", "t", "The sons of Eli"],
                 ["write", "c1", [120, 300], "2:12 priest's sons, yet worthless", { size: 64, color: "red" }]] },
        { say: "Now, it's not that they couldn't know Him. They wouldn't know Him.",
          draw: [["write", "c2", [120, 420], "could not know", { size: 58, color: "gray" }],
                 ["strike", "c2"],
                 ["write", "c3", { after: "c2", gap: 110 }, "would not know", { color: "red" }],
                 ["arrow", "c2", "c3"],
                 ["circle", "c3"]] },
        { say: "Verse 17. They despised the offering of the Lord. It wasn't just that it felt like a bother. They'd gotten to the point of despising it.",
          draw: [["write", "c4", [120, 560], "2:17 despised the offering", { size: 60 }],
                 ["write", "c4b", { after: "c4", gap: 40 }, "(not mere boredom)", { size: 46, color: "gray" }]] },
        { say: "Eli says something to them, but they won't listen. Verse 25. Because the Lord intended to kill them. They wouldn't listen, so it seems He meant to put them to death.",
          draw: [["write", "c5", [120, 700], "2:25 wouldn't listen", { size: 64 }],
                 ["write", "c6", { after: "c5", gap: 110 }, "God meant to kill them", { size: 64, color: "red" }],
                 ["arrow", "c5", "c6"]] }
      ]
    },
    {
      id: "eli-sin", title: "Eli's Sin",
      beats: [
        { say: "Verse 29. You honor your sons above Me. That was Eli's sin. He valued his sons more than God.",
          draw: [["clear"],
                 ["title", "t", "Eli's sin"],
                 ["write", "d1", [120, 300], "2:29 sons > God", { size: 72, color: "red" }],
                 ["box", "d1"]] },
        { say: "Verse 30. I said your house would walk before Me forever, but now, far be it from Me. We tend to think, once God promises, He keeps it no matter what. But He can change it, as He watches what people do.",
          draw: [["write", "d2", [120, 450], "2:30 God can even change a promise", { size: 60, color: "blue" }]] },
        { say: "People only know God as the God of love, right? But listen to what He says. Those who honor Me I will honor, and those who despise Me shall be lightly esteemed.",
          draw: [["write", "d3", { at: [420, 590] }, "honor → honor", { anchor: "middle", size: 60, color: "green" }],
                 ["write", "d4", { at: [1180, 590] }, "despise → despised", { anchor: "middle", size: 60, color: "red" }]] },
        { say: "Chapter 3, verse 13. His sons brought a curse on themselves, and he did not restrain them. He knew, and did it anyway. Eli never once told them to stop. Raise a child like that, and everything falls apart.",
          draw: [["write", "d5", [120, 740], "3:13 knew, yet didn't restrain", { size: 64, color: "red" }],
                 ["under", "d5"]] }
      ]
    },
    {
      id: "eli-fall", title: "The Fall of Eli's House",
      beats: [
        { say: "So because he raised his sons badly, the ark of the Lord got captured by the Philistine army.",
          draw: [["clear"],
                 ["title", "t", "Eli's house is shattered"],
                 ["write", "e1", [120, 300], "sons raised badly", { size: 64 }],
                 ["write", "e2", { after: "e1", gap: 110 }, "ark captured", { size: 64, color: "red" }],
                 ["arrow", "e1", "e2"]] },
        { say: "Hophni and Phinehas die in that battle. Just like the word said, on the very same day.",
          draw: [["write", "e3", [120, 440], "Hophni · Phinehas killed", { size: 60 }]] },
        { say: "Eli hears the news, falls off his seat, breaks his neck, and dies.",
          draw: [["write", "e4", [120, 560], "Eli: fell from his seat, died", { size: 60 }]] },
        { say: "Phinehas's wife hears it too, and she dies giving birth. The sons were raised badly, and Eli's whole house is shattered.",
          draw: [["write", "e5", [120, 680], "Phinehas's wife: died in childbirth", { size: 60 }],
                 ["write", "e6", { at: [800, 820] }, "failed to raise sons → house shattered", { anchor: "middle", size: 60, color: "red" }],
                 ["under", "e6"]] }
      ]
    },
    {
      id: "ark", title: "The Ark's Journey",
      beats: [
        { say: "Meanwhile, the Philistines who took the ark are in trouble. In the temple of Dagon in Ashdod, God makes the idol of Dagon bow down to the ark. And the second time? Its head and hands are cut off.",
          draw: [["clear"],
                 ["title", "t", "The Philistines and the ark"],
                 ["write", "f1", [100, 300], "Ashdod: Dagon bows to ark · head & hands off", { size: 50 }]] },
        { say: "Then He strikes the area with terrible tumors. So they send the ark off to Gath. Tumors break out in Gath too, so it goes on to Ekron. And the people of Ekron are in an uproar. No way, we're not taking it!",
          draw: [["write", "f2", [100, 430], "Ashdod", { size: 64 }],
                 ["write", "f3", { after: "f2", gap: 90 }, "Gath", { size: 64 }],
                 ["write", "f4", { after: "f3", gap: 90 }, "Ekron", { size: 64, color: "red" }],
                 ["arrow", "f2", "f3"],
                 ["arrow", "f3", "f4"],
                 ["write", "f4b", { after: "f4", gap: 40 }, "\"Not here!\"", { size: 52, color: "gray" }]] },
        { say: "So they say, let's just send the ark back. But it can't go back empty-handed, so they make things of gold and send those along. And they run a little test. They take cows that have never worn a yoke, cows whose calves aren't weaned yet, and have them pull the cart.",
          draw: [["write", "f5", [100, 560], "nursing cows pull the cart", { size: 56 }]] },
        { say: "And those cows pulled the cart, lowing the whole way, and went exactly where they should.",
          draw: [["write", "f6", { after: "f5", gap: 50 }, "lowing, right on course", { size: 56, color: "blue" }],
                 ["circle", "f6", "blue"]] },
        { say: "But the people of Beth-shemesh wondered what was inside and looked into the ark, and fifty thousand and seventy men died. Picture it. Cows lowing, pulling a cart right toward you. You can see why they were curious.",
          draw: [["write", "f7", [100, 700], "Beth-shemesh: looked in → 50,070 died", { size: 56, color: "red" }]] },
        { say: "Later the ark stays at Abinadab's house in Kiriath-jearim. Samuel gathers all Israel at Mizpah to pray, and they defeat the Philistines.",
          draw: [["write", "f8", [160, 810], "Kiriath-jearim · Mizpah: prayer & victory", { size: 50, color: "green" }]] }
      ]
    },
    {
      id: "king", title: "Give Us a King",
      beats: [
        { say: "Chapter 8. Samuel gets old and makes his sons, Joel and Abijah, judges. But they take bribes and twist justice. The moment they get a position.",
          draw: [["clear"],
                 ["title", "t", "Give us a king (ch. 8)"],
                 ["write", "g1", [120, 300], "Samuel's sons: bribes · crooked justice", { size: 56, color: "red" }]] },
        { say: "And because of this, God ends up stepping down from the throne.",
          draw: [["write", "g2", [120, 420], "→ God steps down from the throne", { size: 58 }]] },
        { say: "The elders come to Samuel and say, make us a king to judge us, like all the nations.",
          draw: [["write", "g3", [120, 560], "\"a king like all the nations\"", { size: 64, color: "blue" }]] },
        { say: "That's telling God to step down from the throne. And you know what? When you tell God to step down, He just steps down.",
          draw: [["write", "g4", [120, 690], "= God, step down", { color: "red" }],
                 ["under", "g4"]] },
        { say: "So the king they set up is Saul. Israel's first king.",
          draw: [["write", "g5", { after: "g4", gap: 80 }, "1st king: Saul", { size: 64, color: "blue" }],
                 ["box", "g5", "blue"]] }
      ]
    },
    {
      id: "jonathan", title: "Saul and Jonathan",
      beats: [
        { say: "Saul did okay at first. But once he got a taste of power, he went bad pretty fast. Chapter 13. Samuel was late, so Saul offered the sacrifice himself, the one only a priest could offer.",
          draw: [["clear"],
                 ["title", "t", "Saul and Jonathan"],
                 ["write", "h1", { at: [420, 290] }, "Saul", { anchor: "middle", size: 76, color: "red" }],
                 ["write", "h2", { at: [420, 400] }, "ch. 13 offered it himself", { anchor: "middle", size: 48 }]] },
        { say: "Jonathan, on the other hand, is outstanding. He's brave, a man of faith and courage.",
          draw: [["write", "h3", { at: [1180, 290] }, "Jonathan", { anchor: "middle", size: 76, color: "green" }],
                 ["write", "h4", { at: [1180, 400] }, "brave · faith · courage", { anchor: "middle", size: 48 }],
                 ["line", [800, 220], [800, 840], "gray"]] },
        { say: "Jonathan attacked the Philistine camp with just his armor-bearer. And before there was much fighting at all, the Philistines were killing each other with their own swords. He had faith like that, and that's why he came to love David as his own life.",
          draw: [["write", "h5", { at: [1180, 520] }, "him + a boy vs. Philistines", { anchor: "middle", size: 46 }],
                 ["write", "h6", { at: [1180, 620] }, "→ loved David as his life", { anchor: "middle", size: 46, color: "blue" }]] },
        { say: "Saul, meanwhile, keeps messing up. Chapter 14, verse 24. Right in the middle of battle, he declares a fast. Even on a full stomach, they might or might not win!",
          draw: [["write", "h7", { at: [420, 520] }, "14:24 fast declared in battle", { anchor: "middle", size: 44 }]] },
        { say: "Jonathan hadn't heard about it. He was so hungry, he dipped a stick in honey and ate, and his eyes lit up. But because Saul had made that vow, he ordered Jonathan killed. The people had to stop him.",
          draw: [["write", "h8", { at: [420, 620] }, "kill Jonathan for honey!", { anchor: "middle", size: 46, color: "red" }],
                 ["write", "h9", { at: [1180, 740] }, "honey → eyes lit up", { anchor: "middle", size: 46, color: "gray" }]] }
      ]
    },
    {
      id: "obey", title: "To Obey Is Better Than Sacrifice",
      beats: [
        { say: "Chapter 15. He's told to utterly destroy Amalek, but he brings back the cattle and sheep, and that causes grief. He even makes an excuse. Oh, I meant to sacrifice them to God.",
          draw: [["clear"],
                 ["title", "t", "Obey > sacrifice"],
                 ["write", "i1", [120, 300], "ch. 15 Amalek: kept cattle · sheep", { size: 54 }],
                 ["write", "i1b", { after: "i1", gap: 40 }, "\"to sacrifice\"", { size: 46, color: "gray" }]] },
        { say: "Saul's faith is all his own ideas. He's barely half listening to God's word.",
          draw: [["write", "i2", [120, 420], "own ideas · half-listens to the Word", { size: 56, color: "red" }]] },
        { say: "So Samuel says to him, chapter 15, verse 22. To obey is better than sacrifice, and to listen than the fat of rams.",
          draw: [["write", "i3", { at: [800, 580] }, "obey > sacrifice", { anchor: "middle", size: 92, color: "blue" }],
                 ["under", "i3", "blue"]] },
        { say: "And even after hearing that, all he cares about is saving face. Verse 30. Honor me now before the elders of my people. In other words, don't embarrass me in front of everyone.",
          draw: [["write", "i4", [120, 720], "15:30 \"honor me before the elders\"", { size: 54 }]] },
        { say: "Verse 35. The Lord regretted that He had made Saul king.",
          draw: [["write", "i5", [120, 820], "15:35 God regretted making him king", { size: 54, color: "red" }],
                 ["box", "i5"]] }
      ]
    },
    {
      id: "anoint", title: "Anointing David",
      beats: [
        { say: "But Samuel keeps pleading with God. Chapter 16. I've already decided to reject him, so why are you mourning? Enough. Go to Jesse. I've prepared another king.",
          draw: [["clear"],
                 ["title", "t", "David anointed (ch. 16)"],
                 ["write", "j1", [120, 300], "\"No more talk, go to Jesse\"", { size: 64, color: "blue" }]] },
        { say: "Samuel asks, but won't Saul come after me? And God says, just tell him you came to offer a sacrifice.",
          draw: [["write", "j2", [180, 400], "\"Say you came to sacrifice\"", { size: 52, color: "gray" }]] },
        { say: "And so, finally, he anoints David. Anointing means setting someone apart. It's what you do when a king or a servant of the Lord is appointed.",
          draw: [["write", "j3", [120, 530], "anointing = set apart", { size: 72, color: "red" }],
                 ["circle", "j3"]] },
        { say: "The Spirit of the Lord comes mightily on David. But from Saul, the Spirit of the Lord departs, and an evil spirit troubles him. Verse 14. And who sends that evil spirit? God does.",
          draw: [["write", "j4", { at: [420, 680] }, "David: Spirit of the Lord", { anchor: "middle", size: 50, color: "green" }],
                 ["write", "j5", { at: [1180, 680] }, "Saul: evil spirit (sent by God)", { anchor: "middle", size: 46, color: "red" }]] },
        { say: "So Saul's headed downhill, fast. Later on, the medium of Endor, a witch, pretends to be Samuel and toys with King Saul.",
          draw: [["write", "j6", { at: [1180, 800] }, "→ toyed with by Endor's medium", { anchor: "middle", size: 44, color: "gray" }]] }
      ]
    },
    {
      id: "sling", title: "David the Slinger",
      beats: [
        { say: "Chapter 17 is Goliath. It's famous, so I won't say much. But when you hear David talk about guarding his flock, it's really amazing. He had what it takes to be a shepherd.",
          draw: [["clear"],
                 ["title", "t", "David the slinger"],
                 ["write", "k1", [100, 300], "ch. 17 Goliath", { size: 60, color: "gray" }],
                 ["write", "k2", [100, 410], "shepherd guarding flock", { size: 64, color: "blue" }]] },
        { say: "He says he fought lions and bears and won. But you can't do that with your bare hands, right? David was a sling expert. This is a sling. See the loop on one end?",
          draw: [["photo", "p2", "../../pansuh/img/image121.jpg", [1060, 50, 440, 248], { tilt: 2, caption: "A sling" }]] },
        { say: "You hook the loop on your finger, whirl it around, then let go of one end. And just the stone flies off, frighteningly fast. It's stronger than a pistol.",
          draw: [["photo", "p3", "../../pansuh/img/image122.jpg", [1060, 410, 440, 248], { tilt: -2 }],
                 ["write", "k3", [100, 550], "whirl, release → beats a pistol", { size: 54, color: "red" }]] },
        { say: "He didn't hit Goliath's forehead by luck. He'd practiced with that sling a lot, protecting his flock. Unless you were really confident, would you take on a lion or a bear?",
          draw: [["write", "k4", [100, 680], "practice, not luck", { size: 68, color: "green" }],
                 ["under", "k4", "green"]] },
        { say: "Later, when David trained his army, he had his slingers and archers practice with both hands, right and left. An army that could shoot with either hand. Pretty scary, isn't it?",
          draw: [["write", "k5", [100, 810], "ambidextrous army", { size: 56, color: "blue" }]] }
      ]
    },
    {
      id: "jealous", title: "Saul's Jealousy",
      beats: [
        { say: "Beating Goliath was great. But because of it, Saul came to hate David. Saul was a lump of jealousy. He couldn't stand anyone better than himself.",
          draw: [["clear"],
                 ["title", "t", "Saul's jealousy"],
                 ["write", "l1", [120, 300], "beat Goliath", { size: 64 }],
                 ["write", "l2", { after: "l1", gap: 110 }, "Saul's hatred", { size: 64, color: "red" }],
                 ["arrow", "l1", "l2"]] },
        { say: "The women sang, Saul has slain his thousands, and David his ten thousands. And Saul completely lost it.",
          draw: [["write", "l3", [120, 420], "Saul his 1,000s · David his 10,000s", { size: 56, color: "blue" }]] },
        { say: "From then on, David lived as a fugitive. Even so, he wouldn't kill Saul. Saul threw a spear at him. Then he dangled his eldest daughter Merab to push David into battle. He didn't want to get his own hands dirty.",
          draw: [["write", "l4", [120, 550], "spear thrown · Merab as bait for war", { size: 54 }],
                 ["write", "l4b", [180, 640], "18:17 not my hand, but the Philistines'", { size: 46, color: "gray" }]] },
        { say: "Then he gave Merab to someone else, and offered Michal as the prize instead. Reminds you of Laban, doesn't it? Bring me a hundred Philistine foreskins. It was a trap. He hoped David would get killed doing it.",
          draw: [["write", "l5", [120, 760], "Michal: 100 foreskins", { size: 56 }],
                 ["write", "l6", { after: "l5", gap: 110 }, "clueless: 200", { size: 56, color: "red" }],
                 ["arrow", "l5", "l6"]] },
        { say: "And clueless David brings back two hundred. Saul sees that Michal loves David, and he fears David even more. In chapter 20, Jonathan tests his father one last time. But there's no hope. So in the end, he says goodbye to David.",
          draw: [["write", "l7", { at: [1300, 300] }, "parting w/ Jonathan (ch. 20)", { anchor: "middle", size: 44, color: "gray" }]] }
      ]
    },
    {
      id: "run", title: "David the Fugitive",
      beats: [
        { say: "Chapter 21. David goes to Nob and is given the showbread to eat. Normally only priests could eat it. But he ate it, because life comes first.",
          draw: [["clear"],
                 ["title", "t", "David on the run (ch. 21~22)"],
                 ["write", "m1", [100, 300], "Nob: showbread", { size: 60, color: "blue" }],
                 ["write", "m1b", { after: "m1", gap: 40 }, "life comes first", { size: 50, color: "gray" }]] },
        { say: "Then he goes to Gath, and they say, isn't this David, the king of the land? See, David's already seen as king. So he thinks fast and acts like a madman. Drooling, scratching at the gate doors, and he barely gets away.",
          draw: [["write", "m2", [100, 420], "Gath: \"David, king of the land\"", { size: 56, color: "blue" }],
                 ["write", "m2b", { after: "m2", gap: 40 }, "plays mad", { size: 50, color: "red" }]] },
        { say: "Chapter 22. He runs to the cave of Adullam. And everyone in distress, everyone in debt, everyone bitter in soul, even people juggling credit cards, about four hundred of them, gather to him. Count the women and children, and it's easily a thousand.",
          draw: [["write", "m3", [100, 550], "cave of Adullam: 400 → easily 1,000", { size: 56, color: "blue" }],
                 ["write", "m3b", [160, 640], "distress · debt · bitterness · card juggling", { size: 46, color: "gray" }]] },
        { say: "He's on the run himself, and now he has to look after a thousand people. Can you imagine how hard that was? He had no choice but to take refuge in Moab. And then God tells him to go to the land of Judah.",
          draw: [["write", "m4", [100, 750], "refuge in Moab → to Judah", { size: 52 }]] },
        { say: "Then Saul, with Doeg the Edomite, kills Ahimelech, the priest of Nob who'd given David a sword and bread, and eighty priests along with him. Only Abiathar barely escapes and goes to David.",
          draw: [["write", "m5", { at: [1250, 750] }, "priests of Nob slain", { anchor: "middle", size: 50, color: "red" }],
                 ["write", "m6", { at: [1250, 840] }, "only Abiathar escapes", { anchor: "middle", size: 44, color: "gray" }]] }
      ]
    },
    {
      id: "route", title: "Ten Years on the Run",
      beats: [
        { say: "Chapter 23. The Philistines attack Keilah and rob the threshing floors. And David, even while he's on the run, hears a town in Judah is in danger and goes to rescue it. Does this guy have no sense at all?",
          draw: [["clear"],
                 ["title", "t", "10 years on the run"],
                 ["photo", "p4", "../../pansuh/img/image123.jpg", [1110, 40, 380, 335], { tilt: 2, caption: "David's flight" }],
                 ["write", "n1", [100, 300], "rescues Keilah", { size: 64, color: "blue" }],
                 ["write", "n1b", { after: "n1", gap: 40 }, "no sense!", { size: 50, color: "gray" }]] },
        { say: "Gibeah, Ramah, Nob, Gath, Moab, Keilah, En-gedi, Ziklag, Hebron. He's chased around like this for about ten years.",
          draw: [["write", "n2", [100, 420], "Gibeah → Nob → Gath → Moab → Keilah", { size: 46 }],
                 ["write", "n3", [100, 500], "→ En-gedi → Ziklag → Hebron", { size: 46 }],
                 ["write", "n4", [100, 600], "~10 yrs", { size: 72, color: "red" }],
                 ["circle", "n4"]] },
        { say: "Saul even sends out three thousand men at a time after him. But David can always see Saul, and Saul can't see David. And every time Saul's about to catch him, a war breaks out and he has to turn back.",
          draw: [["write", "n5", { after: "n4", gap: 60 }, "Saul never sees David", { size: 52, color: "gray" }]] },
        { say: "Hard as it was, David had a principle. Chapter 26, verse 9. Who can stretch out his hand against the Lord's anointed and be guiltless?",
          draw: [["write", "n6", [100, 740], "never strike the Lord's anointed", { size: 64, color: "blue" }],
                 ["under", "n6", "blue"]] },
        { say: "And he's quietly telling the people around him something. I'm anointed too.",
          draw: [["write", "n7", [160, 840], "(= I'm anointed too)", { size: 48, color: "gray" }]] }
      ]
    },
    {
      id: "end", title: "Nabal and the End of Saul",
      beats: [
        { say: "There was a man in Maon named Nabal. David had protected his flocks. So on sheep-shearing day, a good day, David asked for a little help. But Nabal treated him like a runaway slave and flat out refused.",
          draw: [["clear"],
                 ["title", "t", "Nabal and Saul's end"],
                 ["write", "o1", [100, 300], "Nabal: refuses, calls him a slave", { size: 54, color: "red" }],
                 ["write", "o1b", { after: "o1", gap: 40 }, "\"Gird on swords!\"", { size: 46, color: "gray" }]] },
        { say: "Nabal's wife Abigail calms David down with wise words. Her words were smooth as sesame oil. David's heart softens, and he goes back.",
          draw: [["write", "o2", [100, 420], "Abigail: wise words → David calms down", { size: 54, color: "green" }]] },
        { say: "When Nabal hears how close he came to dying, his body goes stiff as a stone, and he dies. David proposes to Abigail right away. Now, she wasn't a young girl. She was a rich older widow. That's how hard up he was.",
          draw: [["write", "o3", [100, 530], "Nabal turns to stone → David proposes to Abigail", { size: 48 }]] },
        { say: "Meanwhile Saul keeps making mistakes. And in chapter 31, he dies fighting the Philistines. On Mount Gilboa, his three sons die, Jonathan too, and Saul is badly wounded by arrows.",
          draw: [["write", "o4", [100, 660], "ch. 31 Mt. Gilboa: Saul & 3 sons", { size: 64, color: "red" }]] },
        { say: "His armor-bearer won't run him through, so Saul falls on his own sword. Afterward, the men of Jabesh-gilead bring Saul's body back and bury it. And that's how 1 Samuel ends.",
          draw: [["write", "o5", [100, 780], "fell on his own sword", { size: 60 }],
                 ["write", "o6", { after: "o5", gap: 60 }, "buried by Jabesh-gilead", { size: 50, color: "gray" }],
                 ["under", "o5"]] }
      ]
    }
  ]
};
