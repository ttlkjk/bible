// Hosea whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does.
window.BOARD = {
  scenes: [
    {
      id: "intro", title: "Starting Hosea",
      beats: [
        { say: "Now let's look at Hosea. He was active in the same period. But Hosea has a pretty different feel from Amos.",
          draw: [["title", "t", "Hosea"],
                 ["photo", "p1", "img/p2/image11.jpg", [1060, 190, 480, 270], { tilt: 2 }],
                 ["write", "a1", [100, 300], "same era as Amos", { size: 56 }],
                 ["write", "a2", { below: "a1", gap: 100 }, "but a very different feel", { size: 56, color: "blue" }]] },
        { say: "With Hosea, you've got to look closely at chapter 1. This word came in the days of Uzziah, Jotham, Ahaz, and Hezekiah, kings of Judah, and in the days of Jeroboam, king of Israel.",
          draw: [["write", "a3", [100, 540], "look closely at ch. 1", { color: "red" }],
                 ["under", "a3"]] },
        { say: "Northern Israel fell in King Hezekiah's time. So this book was quite likely written after that.",
          draw: [["write", "a4", [100, 680], "likely written after the North fell", { size: 52 }]] },
        { say: "Back then, all over Israel, people were serving other gods instead of God, and provoking him to anger.",
          draw: [["write", "a5", [100, 800], "other gods served everywhere", { color: "red" }]] }
      ]
    },
    {
      id: "command", title: "Take a Wife of Whoredoms",
      beats: [
        { say: "Chapter 1, verse 2. The LORD said to Hosea, Go, take for yourself a wife of whoredoms and children of whoredoms, for the land has committed great whoredom, departing from the LORD.",
          draw: [["clear"],
                 ["title", "t", "Take a wife of whoredoms"],
                 ["write", "b1", [100, 300], "\"Take a wife of whoredoms\"", { color: "red" }],
                 ["write", "b2", { below: "b1", gap: 100 }, "for the land has gone whoring", { size: 52, color: "gray" }]] },
        { say: "Now, this was a special command for a special time. We need to be careful about when it was said, and to whom.",
          draw: [["write", "b3", [100, 530], "special time · special command", { color: "blue" }],
                 ["box", "b3"]] },
        { say: "At that time the whole nation was crazy about serving Baal and Asherah.",
          draw: [["photo", "p2", "img/p2/image12.jpg", [1080, 190, 440, 248], { tilt: -2, caption: "Baal and Asherah" }],
                 ["write", "b4", [100, 680], "whole nation crazy for Baal · Asherah", { size: 52 }]] }
      ]
    },
    {
      id: "gods", title: "How They Saw the Gods",
      beats: [
        { say: "The gods back then were usually a married couple. People believed that when this couple got along and made love, clouds would cover them, and then the rain would fall.",
          draw: [["clear"],
                 ["title", "t", "How they saw the gods"],
                 ["write", "c1", [120, 300], "god couple"],
                 ["write", "c2", { after: "c1", gap: 100 }, "clouds", { size: 64 }],
                 ["arrow", "c1", "c2"],
                 ["write", "c3", { after: "c2", gap: 100 }, "rain", { color: "blue" }],
                 ["arrow", "c2", "c3"]] },
        { say: "So people danced to put the god couple in the mood. That was a strip show. That's where it started.",
          draw: [["write", "c4", [120, 430], "dance for the gods = first strip show", { size: 56 }]] },
        { say: "The temples were built so people could have sex with the idol looking down on them. These rooms were called salons. And there were priestesses wholly devoted to this. They were called Agnes.",
          draw: [["write", "c5", [120, 560], "temple rooms = salons", { size: 56 }],
                 ["write", "c6", { after: "c5", gap: 60 }, "priestesses = Agnes", { size: 56 }]] },
        { say: "Gomer, the woman Hosea married, was really into serving exactly these gods.",
          draw: [["write", "c7", [120, 720], "Gomer = devoted to these gods", { color: "red" }],
                 ["circle", "c7"]] }
      ]
    },
    {
      id: "children", title: "The Names of Three Children",
      beats: [
        { say: "When Gomer had a son, God said, name him Jezreel. Remember the plain of Jezreel? That's where Jehu brought judgment on the dynasty of Omri.",
          draw: [["clear"],
                 ["title", "t", "Names of three children"],
                 ["write", "d1", [120, 300], "1st son Jezreel", { color: "blue" }],
                 ["write", "d1b", { after: "d1", gap: 60 }, "end of Jehu's dynasty too", { size: 56 }]] },
        { say: "But Jehu's dynasty did exactly what Omri's did. So God says he'll put an end to Jehu's dynasty too.",
          draw: [["write", "d2", [180, 400], "(same sins as Omri's dynasty)", { size: 48, color: "gray" }]] },
        { say: "The daughter's name was Lo-ruhamah. Lo is a negative, plus mercy. So it means judgment with no mercy.",
          draw: [["write", "d3", [120, 530], "daughter Lo-ruhamah", { color: "blue" }],
                 ["write", "d3b", { after: "d3", gap: 60 }, "lo (not) + mercy = no mercy", { size: 56 }]] },
        { say: "The third child was named Lo-ammi. Ammi means my people. So it means, not my people.",
          draw: [["write", "d4", [120, 660], "Lo-ammi", { color: "blue" }],
                 ["write", "d4b", { after: "d4", gap: 60 }, "= not my people", { size: 56 }]] },
        { say: "In the end it's saying, I'm not your God anymore, and you're not my people. Just like an angry dad. You're out of the family!",
          draw: [["write", "d5", [120, 800], "\"You're out of the family!\"", { color: "red" }],
                 ["box", "d5"]] }
      ]
    },
    {
      id: "restore", title: "Restoration Right After",
      beats: [
        { say: "But right away, words of restoration come, mixed in with the warnings. Chapter 2, verse 1. Say to your brothers, Ammi, and to your sisters, Ruhamah.",
          draw: [["clear"],
                 ["title", "t", "Restoration right after"],
                 ["write", "e1", [120, 300], "Lo-ammi → Ammi", { color: "green" }],
                 ["write", "e2", { after: "e1", gap: 80 }, "Lo-ruhamah → Ruhamah", { size: 64, color: "green" }]] },
        { say: "The main message? Get rid of your whoredom. They served foreign gods only because they hoped to get what they needed. But serving them gets you nowhere.",
          draw: [["write", "e3", [120, 430], "serving foreign gods is useless", { size: 56 }]] },
        { say: "In the end, they'll all come back. The day will come when she says, I will go and return to my first husband.",
          draw: [["write", "e4", [120, 560], "\"I will return to my first husband\"", { size: 64, color: "blue" }],
                 ["under", "e4", "blue"]] },
        { say: "In verse 8, there's another thing that left God speechless. He gave them silver and gold and riches, and they spent it all on idol worship.",
          draw: [["write", "e5", [120, 700], "God's silver · gold · riches", { size: 56 }],
                 ["write", "e6", { after: "e5", gap: 100 }, "idol worship", { color: "red" }],
                 ["arrow", "e5", "e6"]] },
        { say: "It's like getting pocket money from your parents on Parents' Day and blowing it on a date with your girlfriend. Unbelievable, right?",
          draw: [["write", "e7", [180, 810], "(Parents' Day money spent on a date)", { size: 48, color: "gray" }]] }
      ]
    },
    {
      id: "gomer", title: "A Heart Learned through Gomer",
      beats: [
        { say: "In chapter 3, Gomer was unfaithful from the start. But God told Hosea to bring her home and live with her. He hoped marriage would settle her down. But before long, she ran off after another man.",
          draw: [["clear"],
                 ["title", "t", "A heart learned through Gomer"],
                 ["write", "f1", [120, 300], "Gomer goes after another man", { size: 60 }]] },
        { say: "Hosea went looking for that man and found him. And the man demanded to be paid back for what he'd spent keeping her.",
          draw: [["write", "f2", [120, 420], "found him: \"Pay me back!\"", { size: 60 }]] },
        { say: "Paying a price to get back what's already yours. That's redemption.",
          draw: [["write", "f3", [120, 560], "my own + pay a price = redemption", { size: 72, color: "red" }],
                 ["box", "f3"]] },
        { say: "Hosea went through it himself, so he got it. That's why he cries out with all he's got, Let us press on to know God.",
          draw: [["write", "f4", [120, 730], "\"Let us press on to know God\"", { size: 72, color: "blue" }],
                 ["under", "f4", "blue"]] }
      ]
    },
    {
      id: "knowledge", title: "For Lack of Knowledge",
      beats: [
        { say: "Chapter 4, verse 1. There's no truth, no mercy, no knowledge of God in the land. Only cursing, murder, and adultery.",
          draw: [["clear"],
                 ["title", "t", "Destroyed for lack of knowledge"],
                 ["write", "g1", [120, 300], "truth ✗ · mercy ✗ · knowledge of God ✗", { size: 56 }]] },
        { say: "Verse 6. My people are destroyed for lack of knowledge. God says he'll reject an Israel that doesn't know him.",
          draw: [["write", "g2", [120, 430], "destroyed for lack of knowledge", { size: 72, color: "red" }],
                 ["circle", "g2"]] },
        { say: "Next he rebukes their pagan practices. They ask advice from a piece of wood, and their staff answers them. That's fortune-telling. They sacrifice on mountaintops and commit adultery in the shade of the trees.",
          draw: [["write", "g3", [120, 570], "ask a stick, the staff answers (divining)", { size: 52 }],
                 ["write", "g4", [120, 670], "hilltop sacrifice · adultery under trees", { size: 52 }]] },
        { say: "The second half of verse 14. The people who don't understand will fall.",
          draw: [["write", "g5", [120, 800], "people without understanding fall", { size: 72, color: "red" }]] }
      ]
    },
    {
      id: "know", title: "Let Us Know the LORD",
      beats: [
        { say: "Chapter 5, verse 4. With a spirit of whoredom in them, they can't know the LORD. And since they don't know him, they can't come back to God.",
          draw: [["clear"],
                 ["title", "t", "Let us know the LORD"],
                 ["write", "h1", [100, 300], "whoring heart", { size: 56 }],
                 ["write", "h2", { after: "h1", gap: 90 }, "don't know LORD", { size: 56 }],
                 ["arrow", "h1", "h2"],
                 ["write", "h3", { after: "h2", gap: 90 }, "can't return", { size: 56, color: "red" }],
                 ["arrow", "h2", "h3"]] },
        { say: "Verse 6. Even if they bring whole flocks and herds, they won't find God, because he's already pulled away. And he warns them, lean on the great powers, and I'll tear you like a lion.",
          draw: [["write", "h4", [100, 430], "flocks and herds, still can't find him", { size: 52 }],
                 ["write", "h5", [100, 530], "rely on great powers → torn like by a lion", { size: 52 }]] },
        { say: "Chapter 6. Come, let us return to the LORD. Let us know the LORD, let us press on to know the LORD.",
          draw: [["write", "h6", [100, 670], "\"Let us press on to know the LORD\"", { size: 64, color: "blue" }]] },
        { say: "For I desire mercy, and not sacrifice, and the knowledge of God more than burnt offerings. God never stops wanting us to know him. That's the theme of Hosea.",
          draw: [["write", "h7", [100, 800], "knowing God over sacrifice", { size: 64, color: "red" }],
                 ["write", "h8", { after: "h7", gap: 40 }, "= theme of Hosea", { size: 56, color: "green" }],
                 ["box", "h7"]] }
      ]
    },
    {
      id: "dove", title: "A Silly Dove",
      beats: [
        { say: "Chapter 7, verse 1. When God tried to heal them, their sin came out instead. It's like opening someone up for an appendix operation and finding cancer.",
          draw: [["clear"],
                 ["title", "t", "A silly dove"],
                 ["write", "i1", [120, 300], "appendix surgery", { size: 60 }],
                 ["write", "i2", { after: "i1", gap: 100 }, "finds a cancer", { size: 60, color: "red" }],
                 ["arrow", "i1", "i2"]] },
        { say: "Ephraim is like a silly dove without sense. They call to Egypt, and they go to Assyria.",
          draw: [["write", "i3", [120, 430], "to Egypt · to Assyria", { size: 60 }]] },
        { say: "What's special about a dove? Its homing instinct. A dove that can't find its way home has lost its mind. So the prophet says, don't look to Egypt or Assyria. Look up, to God.",
          draw: [["write", "i4", [120, 560], "dove that can't find home", { color: "blue" }],
                 ["write", "i5", [180, 660], "→ seek God above", { size: 52, color: "green" }]] },
        { say: "Redemption costs a huge price. And even when God says he'll pay all of it himself, they won't listen.",
          draw: [["write", "i6", [120, 730], "God pays it all, still they won't listen", { size: 56 }]] },
        { say: "Verse 15. I trained and strengthened their arms, yet they plot evil against me. Think about it. With the arms God made, they whipped Jesus and nailed him to the cross.",
          draw: [["write", "i7", [120, 830], "arms God strengthened plot evil", { size: 56, color: "red" }]] }
      ]
    },
    {
      id: "firstlove", title: "First Love Betrayed",
      beats: [
        { say: "Chapter 8 rebukes idol worship. Israel served the golden calf. Judah built lots of altars, but treated the law written out for them like something strange.",
          draw: [["clear"],
                 ["title", "t", "First love betrayed"],
                 ["write", "j1", [120, 300], "Israel: golden calf", { size: 56 }],
                 ["write", "j2", [120, 400], "Judah: many altars, law = strange", { size: 56 }]] },
        { say: "Chapter 9 is the day of punishment. Ephraim will go back to Egypt. That means falling back into slavery, like before. And they'll eat unclean things in Assyria.",
          draw: [["write", "j3", [120, 520], "ch. 9 punishment: slavery again", { size: 56, color: "red" }]] },
        { say: "Chapter 9, verse 10. I found Israel like grapes in the wilderness. But they went to Baal-peor and gave themselves to that shameful idol.",
          draw: [["write", "j4", [120, 650], "grapes in desert = God's first love", { size: 64, color: "blue" }],
                 ["write", "j5", { below: "j4", gap: 100 }, "→ gave selves to Baal-peor", { size: 56, color: "red" }]] },
        { say: "They betrayed him before he could even hold them once. Every betrayal hurts. But when love is betrayed, you don't just become strangers. You become enemies.",
          draw: [["write", "j6", { after: "j5", gap: 60 }, "love betrayed = enemy", { size: 56, color: "red" }],
                 ["box", "j6"]] }
      ]
    },
    {
      id: "prayer", title: "Hosea's Prayer",
      beats: [
        { say: "When God says he'll pour out his wrath, Hosea prays. Verse 14. Give them a miscarrying womb and dry breasts. In a time that terrible, he's asking that children not be born at all.",
          draw: [["clear"],
                 ["title", "t", "Hosea's prayer"],
                 ["write", "k1", [120, 300], "\"Better that no child be born\"", { size: 60 }]] },
        { say: "Verse 16. God doesn't grant that prayer. Even if they give birth, I will kill them. Verse 17. Because they wouldn't listen, they end up as wanderers.",
          draw: [["write", "k2", [120, 420], "prayer not heard → wanderers", { size: 56, color: "red" }]] },
        { say: "Chapter 10 is a warning. Those altars you love so much? I'll strike them all and wipe them out. The words destruction and ruin come up a lot.",
          draw: [["write", "k3", [120, 540], "ch. 10: all altars destroyed", { size: 56 }]] },
        { say: "And yet, look at verse 12. If they come back to God, he'll give them a chance. Honestly, God has no pride at all.",
          draw: [["write", "k4", [120, 660], "still, return → a chance!", { color: "green" }]] },
        { say: "Friends, in a love relationship, the one who loves more is always the weaker one.",
          draw: [["write", "k5", [120, 800], "who loves more is weaker", { size: 72, color: "red" }],
                 ["under", "k5"]] }
      ]
    },
    {
      id: "cords", title: "Cords of Love",
      beats: [
        { say: "Chapter 11, verse 1. When Israel was a child, I loved him, and called my son out of Egypt. But the more they were called, the more they went away, and sacrificed to the Baals.",
          draw: [["clear"],
                 ["title", "t", "Cords of love"],
                 ["write", "l1", [120, 300], "called my son out of Egypt", { size: 60 }]] },
        { say: "God called them out to point out what's wrong with the world, and to be missionaries. But instead they followed the world, and the world converted them.",
          draw: [["write", "l2", [120, 420], "sent to convert", { size: 60 }],
                 ["write", "l3", { after: "l2", gap: 100 }, "got converted", { color: "red" }],
                 ["arrow", "l2", "l3"]] },
        { say: "On the wilderness road he taught them to walk, carried them in his arms, drew them with cords of love, and rained down manna. He tried so hard. And still, they couldn't be taught.",
          draw: [["write", "l4", [120, 560], "taught to walk · carried ·", { size: 56 }],
                 ["write", "l5", { after: "l4", gap: 30 }, "cords of love", { color: "blue" }],
                 ["circle", "l5"]] },
        { say: "If they won't understand, then Assyria, whose people repented at Jonah's preaching, will have to be their king. Go to Assyria and learn a thing or two about repenting.",
          draw: [["write", "l6", [120, 700], "Assyria becomes king", { color: "red" }],
                 ["write", "l7", { after: "l6", gap: 50 }, "(go learn repentance)", { size: 48, color: "gray" }]] },
        { say: "So in 722 B.C., God sends Shalmaneser.",
          draw: [["write", "l8", [120, 820], "722 B.C. · Shalmaneser", { size: 60, color: "blue" }],
                 ["box", "l8"]] }
      ]
    },
    {
      id: "full", title: "Full, Then Proud",
      beats: [
        { say: "Chapter 12. Ephraim feeds on wind. They make a covenant with Assyria and carry oil to Egypt. Diplomacy, trade, saving the economy, that's not what matters. What matters is coming back to God.",
          draw: [["clear"],
                 ["title", "t", "Full, then proud"],
                 ["write", "m1", [120, 300], "diplomacy · trade · economy", { size: 56 }],
                 ["strike", "m1"],
                 ["write", "m2", [120, 400], "return to God", { color: "blue" }]] },
        { say: "Even Jacob, who didn't live right, met God when he wept and clung to him. So you come back too. Getting rich with false scales and saying you've done nothing wrong won't help you.",
          draw: [["write", "m3", [120, 500], "Jacob wept, clung → God met him", { size: 56 }],
                 ["write", "m4", [120, 590], "rich by false scales, \"no sin\"", { size: 52, color: "gray" }]] },
        { say: "The name Hosea means God is the Savior. Chapter 13. God filled them up, and they got proud and forgot him.",
          draw: [["write", "m5", [120, 680], "Hosea = God is Savior", { size: 56, color: "blue" }],
                 ["write", "m6", { after: "m5", gap: 50 }, "full → proud → forgot", { size: 56, color: "red" }]] },
        { say: "God has never once worried about us being poor. What he worries about is that once we're full, we'll say we don't know him. So not being rich is actually a blessing.",
          draw: [["write", "m7", [120, 800], "not rich = a blessing", { color: "green" }],
                 ["circle", "m7", "green"]] }
      ]
    },
    {
      id: "return", title: "Return!",
      beats: [
        { say: "Chapter 14 is Hosea's plea. Come back! But how? Take words with you, return to the LORD, and offer the fruit of your lips instead of bulls.",
          draw: [["clear"],
                 ["title", "t", "Ch. 14 · Return!"],
                 ["write", "n1", [120, 300], "instead of bulls", { size: 56 }],
                 ["write", "n2", { after: "n1", gap: 100 }, "fruit of lips", { color: "blue" }],
                 ["arrow", "n1", "n2"]] },
        { say: "We'll stop doing wrong and then asking forgiveness with sacrifices. We won't lean on Assyria to save us, we won't ride on horses, and we'll stop making war.",
          draw: [["write", "n3", [120, 420], "rely on Assyria ✗ · ride horses ✗", { size: 56 }]] },
        { say: "We'll never again call the work of our hands our gods. If they do this, God says, he'll restore them.",
          draw: [["write", "n4", [120, 530], "handmade gods ✗", { size: 56 }],
                 ["write", "n5", { after: "n4", gap: 60 }, "→ restored", { color: "green" }],
                 ["box", "n5", "green"]] },
        { say: "Verse 9. Who is wise, that he may understand these things? Who is prudent, that he may know them? The way it's written, it sounds like nobody back then understood.",
          draw: [["write", "n6", [120, 670], "\"Who is wise, to understand?\"", { size: 56 }]] },
        { say: "And with Hosea as the last prophet, Northern Israel falls.",
          draw: [["write", "n7", [120, 800], "after Hosea, North Israel falls", { color: "red" }],
                 ["under", "n7"]] }
      ]
    }
  ]
};
