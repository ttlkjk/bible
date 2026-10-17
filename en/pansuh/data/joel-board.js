// Joel whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does.
window.BOARD = {
  scenes: [
    {
      id: "name", title: "Features of Joel",
      beats: [
        { say: "Now we move on to Joel. The name Joel means 'the LORD is Elohim,' that is, the LORD is God.",
          draw: [["title", "t", "Joel"],
                 ["write", "a1", [120, 300], "Joel = the LORD is God", { color: "blue" }],
                 ["under", "a1", "blue"]] },
        { say: "The first feature of Joel: the date it was written is not clear.",
          draw: [["write", "a2", [120, 430], "① date of writing unclear", { size: 56 }]] },
        { say: "Second, there is no section rebuking sin. Joel and Zechariah are the only two books like that.",
          draw: [["write", "a3", [120, 540], "② no rebuke of sin", { size: 56, color: "red" }],
                 ["write", "a3b", { after: "a3", gap: 40 }, "(like Zechariah)", { size: 48, color: "gray" }]] },
        { say: "The pattern of the prophetic books is: rebuke for sin, exhortation, comfort, and hope. Joel and Zechariah have no rebuke for sin. Nahum and Obadiah have no exhortation, no comfort, and no hope. Just rebuke, curse, and the end.",
          draw: [["write", "a4", [120, 670], "Joel · Zechariah: no rebuke", { size: 56, color: "green" }],
                 ["write", "a5", [120, 780], "Nahum · Obadiah: rebuke · curse · the end", { size: 56, color: "red" }]] }
      ]
    },
    {
      id: "mom", title: "A Prophet Like a Mother",
      beats: [
        { say: "Why is there no rebuke? Because this word came after rebuke after rebuke had failed, and they had already been struck once, twice, three times, even four times.",
          draw: [["clear"],
                 ["title", "t", "Why no rebuke?"],
                 ["write", "b1", [120, 300], "rebuked again and again, no use"],
                 ["write", "b2", { below: "b1", gap: 100 }, "after four blows of the rod", { color: "red" }]] },
        { say: "The one who struck says, 'I held back a lot today, so I'll stop here.' But the one who was struck thinks he took a terrible beating.",
          draw: [["write", "b3", [120, 540], "the one who struck: \"I held back\"", { size: 56 }],
                 ["write", "b4", [120, 640], "the one struck: \"I got hit hard\"", { size: 56 }]] },
        { say: "At a time like that, the prophet steps in like a mother. She pushes her son forward and says, 'You were wrong, so go on, go and ask your father to forgive you.' That is the mood of the book of Joel.",
          draw: [["write", "b5", [120, 790], "like a mom: \"Go ask Dad to forgive you\"", { color: "blue" }],
                 ["box", "b5"]] }
      ]
    },
    {
      id: "locust", title: "Insects That Ate Everything",
      beats: [
        { say: "Chapter 1. Hear this, ye old men. Hath this been in your days, or even in the days of your fathers? Tell ye your children of it.",
          draw: [["clear"],
                 ["title", "t", "Insects that ate everything"],
                 ["write", "c1", [120, 300], "\"Tell ye your children of it\"", { size: 60 }]] },
        { say: "God can't keep putting on a show. He shows it just once, and after that, we just need to teach our children well.",
          draw: [["write", "c2", [120, 410], "shown once → teach the children", { size: 56, color: "blue" }]] },
        { say: "Verse 4. That which the palmerworm hath left hath the locust eaten; and that which the locust hath left hath the cankerworm eaten; and that which the cankerworm hath left hath the caterpillar eaten.",
          draw: [["write", "c3", [120, 540], "palmerworm → locust → cankerworm → caterpillar", { size: 52, color: "red" }],
                 ["box", "c3"]] },
        { say: "A nation came up whose teeth, it says, are like the teeth of a lion. If they are like a lion's teeth, then they aren't actually a lion's teeth, right? They scraped off even the bark of the fruit trees, and the trees turned white.",
          draw: [["write", "c4", [120, 670], "\"like a lion's teeth\" = not a lion", { size: 56 }]] },
        { say: "If it has come to the point where there is nothing left even for the offerings, then the priests and the leaders must be the first to fall down and repent. It says the day of the LORD is near.",
          draw: [["write", "c5", [120, 790], "leaders repent first", { size: 56, color: "green" }],
                 ["write", "c6", { after: "c5", gap: 50 }, "day of the LORD is near", { size: 56, color: "red" }]] }
      ]
    },
    {
      id: "heart", title: "Rend Your Heart, Not Your Garments",
      beats: [
        { say: "Chapter 2. Now the terrifying day of God is coming. It says their appearance is as the appearance of horses, and like horsemen. So they're neither horses nor horsemen, right?",
          draw: [["clear"],
                 ["title", "t", "Rend your heart, not your garments"],
                 ["write", "d1", [120, 300], "like horses · like horsemen", { size: 60 }],
                 ["write", "d2", { after: "d1", gap: 50 }, "→ neither", { size: 56, color: "gray" }]] },
        { say: "Verse 11. The day of the LORD is great and very terrible; and who can abide it? No one can endure it, so repent quickly.",
          draw: [["write", "d3", [120, 430], "great and very terrible day", { color: "red" }],
                 ["write", "d4", { after: "d3", gap: 50 }, "→ repent quickly", { size: 56 }]] },
        { say: "From verse 12: how do you repent? You must return with fasting, with weeping, and with all your heart. Don't put on a show of tearing your clothes. Rend your heart.",
          draw: [["write", "d5", [120, 590], "show of tearing clothes", { size: 60 }],
                 ["strike", "d5"],
                 ["write", "d6", { after: "d5", gap: 70 }, "rend your heart", { size: 76, color: "red" }],
                 ["circle", "d6"]] },
        { say: "God is gracious and merciful, slow to anger, so he may not send the disaster after all.",
          draw: [["write", "d7", [120, 760], "gracious · merciful · slow to anger", { size: 56, color: "green" }]] }
      ]
    },
    {
      id: "swarm", title: "The Northern Army",
      beats: [
        { say: "Verse 18. Then the LORD will pity his people, and he says he will send them grain, new wine, and oil.",
          draw: [["clear"],
                 ["title", "t", "Northern army = locusts"],
                 ["write", "e1", [100, 300], "grain · new wine · oil", { size: 56, color: "green" }]] },
        { say: "Verse 20 says 'the northern army,' but that's a metaphor. It isn't an army. It means insects like locusts, which gnaw away even the few grass roots that are left.",
          draw: [["write", "e2", [100, 430], "northern army = metaphor", { color: "blue" }],
                 ["write", "e3", { below: "e2", gap: 100 }, "→ locust-like insects", { color: "red" }],
                 ["box", "e3"]] },
        { say: "Look at this. Plagues of locusts like this still happen today.",
          draw: [["photo", "p1", "../../pansuh/img/p2/image13.jpg", [960, 190, 580, 326], { tilt: 2, caption: "Locust plagues still happen" }]] },
        { say: "When hundreds of millions of locusts as big as a person's forearm come flying, the sky goes dark. And in an instant, nothing is left, not a tree, not a blade of grass.",
          draw: [["write", "e4", [100, 700], "100s of millions, forearm-sized", { size: 56 }],
                 ["write", "e5", [100, 810], "→ nothing left", { size: 56, color: "red" }]] }
      ]
    },
    {
      id: "rain", title: "The Former and the Latter Rain",
      beats: [
        { say: "From verse 21, it speaks of restoration. The grass in the fields will sprout and bear fruit again, and God will restore what the locust-like insects destroyed.",
          draw: [["clear"],
                 ["title", "t", "Former and latter rain"],
                 ["write", "f1", [120, 300], "v. 21~ restoration: sprouts and fruit again", { size: 56, color: "green" }]] },
        { say: "It says the former rain and the latter rain will be restored. The former rain is the rain that comes in autumn, when you sow seed for wheat and barley.",
          draw: [["write", "f2", [120, 430], "former rain", { color: "blue" }],
                 ["write", "f3", { after: "f2", gap: 50 }, "autumn · sowing", { size: 56 }]] },
        { say: "The latter rain is the rain that comes in spring, when the crops ripen.",
          draw: [["write", "f4", [120, 540], "latter rain", { color: "blue" }],
                 ["write", "f5", { after: "f4", gap: 50 }, "spring · ripening", { size: 56 }]] },
        { say: "And as a result, verse 24: the floors shall be full of wheat, and the vats shall overflow with new wine and oil.",
          draw: [["write", "f6", [120, 670], "floors full of wheat · vats of wine and oil", { size: 56 }]] },
        { say: "Verse 25. I will restore to you the years that the locust hath eaten, the cankerworm, and the caterpillar, and the palmerworm. He will give back as much as was taken, right?",
          draw: [["write", "f7", [120, 800], "restore the years the locust ate", { color: "red" }],
                 ["under", "f7"]] }
      ]
    },
    {
      id: "spirit", title: "I Will Pour Out My Spirit",
      beats: [
        { say: "In the prophets, the words of restoration are the most important. They were about the far future, so they probably didn't mean much to the people back then. But for us, most of it is already in the past.",
          draw: [["clear"],
                 ["title", "t", "I will pour out my spirit"],
                 ["write", "g1", [120, 300], "freed from exile · Jesus · Holy Spirit", { size: 56 }],
                 ["write", "g2", { after: "g1", gap: 40 }, "= past", { size: 56, color: "gray" }],
                 ["write", "g3", [120, 400], "Jesus' return", { size: 56, color: "red" }],
                 ["write", "g4", { after: "g3", gap: 40 }, "= still to come", { size: 56, color: "red" }]] },
        { say: "From verse 28, it is the restoration when the Holy Spirit came. I will pour out my spirit upon all flesh; your old men shall dream dreams, your young men shall see visions.",
          draw: [["write", "g5", [120, 550], "v. 28~29: my spirit on all flesh", { color: "blue" }],
                 ["box", "g5"]] },
        { say: "Huh? Sounds familiar, doesn't it? The words of that song come from here. But this already happened when the Holy Spirit came at Pentecost.",
          draw: [["write", "g6", [120, 690], "already fulfilled at Pentecost", { color: "green" }]] },
        { say: "So it really isn't a song we can sing as a longing for the future.",
          draw: [["write", "g7", [120, 800], "future longing ✗", { size: 56, color: "red" }]] }
      ]
    },
    {
      id: "end", title: "A Prophet Who Saw the Last Day",
      beats: [
        { say: "The prophet Joel looked ahead all the way to the last day. Verse 30: blood, and fire, and pillars of smoke in the heavens and in the earth. The sun shall be turned into darkness, and the moon into blood.",
          draw: [["clear"],
                 ["title", "t", "A prophet who saw the last day"],
                 ["write", "h1", [120, 300], "blood · fire · pillars of smoke · blood moon", { size: 58, color: "red" }]] },
        { say: "Remember this well. When you get to Revelation, it shows up exactly as it is.",
          draw: [["write", "h2", [120, 410], "→ same in Revelation", { size: 56, color: "blue" }]] },
        { say: "To sum up: up to verse 27 is about the time of the prophet Joel,",
          draw: [["write", "h3", { at: [330, 600] }, "~v. 27", { anchor: "middle", size: 72, color: "blue" }],
                 ["write", "h4", { at: [330, 700] }, "Joel's day", { anchor: "middle", size: 52 }]] },
        { say: "verses 28 and 29 are about the time of Pentecost,",
          draw: [["write", "h5", { at: [800, 600] }, "v. 28~29", { anchor: "middle", size: 72, color: "blue" }],
                 ["write", "h6", { at: [800, 700] }, "Pentecost", { anchor: "middle", size: 52 }],
                 ["arrow", "h3", "h5"]] },
        { say: "and from verse 30 on, it goes on to the complete end of humanity.",
          draw: [["write", "h7", { at: [1270, 600] }, "v. 30~", { anchor: "middle", size: 72, color: "red" }],
                 ["write", "h8", { at: [1270, 700] }, "the final end", { anchor: "middle", size: 52, color: "red" }],
                 ["arrow", "h5", "h7"],
                 ["circle", "h7"]] }
      ]
    },
    {
      id: "sold", title: "Repaid for What Was Sold",
      beats: [
        { say: "Chapter 3, verse 1. When I shall bring again the captivity of Judah and Jerusalem. Words like these suggest it may have been written quite late, perhaps at the same time as Jeremiah.",
          draw: [["clear"],
                 ["title", "t", "Repaid for what was sold"],
                 ["write", "i1", [120, 300], "\"when I bring again the captivity\"", { size: 56 }],
                 ["write", "i2", [120, 400], "→ written later? (time of Jeremiah)", { size: 52, color: "gray" }]] },
        { say: "Then God gathers all the nations and settles what is right and wrong before judgment. Because they took his silver, his gold, and his treasures, and sold the children of Judah to the Greeks.",
          draw: [["write", "i3", [120, 530], "took silver & gold · sold to Greeks", { size: 56, color: "red" }]] },
        { say: "So he says he will return their deeds upon their own heads, and sell their own children. This is how they will be repaid.",
          draw: [["write", "i4", [120, 650], "deeds return on their own heads", { size: 56 }]] },
        { say: "The foreshadowing of this is Joseph. Joseph was sold, but he came back. In the same way, Israel was sold off, but even now they keep coming back.",
          draw: [["write", "i5", [120, 790], "type = Joseph", { color: "blue" }],
                 ["write", "i6", { after: "i5", gap: 50 }, "sold, then came back", { size: 56, color: "green" }],
                 ["box", "i5"]] }
      ]
    },
    {
      id: "valley", title: "The Valley of Decision",
      beats: [
        { say: "Verse 13. Put ye in the sickle, for the harvest is ripe; the press is full. Multitudes, multitudes in the valley of decision: for the day of the LORD is near.",
          draw: [["clear"],
                 ["title", "t", "The valley of decision"],
                 ["write", "j1", [120, 300], "sickle · winepress · valley of decision", { color: "red" }]] },
        { say: "This is the story in Revelation chapters 14 and 20. The grapes are people's heads, and when they are trodden, blood overflows. We'll look at it in detail when we get to Revelation.",
          draw: [["write", "j2", [120, 410], "→ Rev ch. 14 · 20", { size: 56, color: "blue" }]] },
        { say: "Like this, you have to understand the Old Testament completely before you can understand Revelation.",
          draw: [["write", "j3", [120, 540], "know the OT to see Revelation", { color: "green" }],
                 ["under", "j3", "green"]] },
        { say: "Verse 21. But Judah shall dwell for ever, and Jerusalem from generation to generation. When they do wrong, God strikes them as much as needed, but when the time comes, he will surely bring them back.",
          draw: [["write", "j4", [120, 670], "strikes as needed, but surely brings back", { size: 56 }]] },
        { say: "Joel was an amazing prophet who saw ahead to the coming of the Holy Spirit at Pentecost, to the blood and fire and pillars of smoke, and even to the final judgment in the valley of decision.",
          draw: [["write", "j5", [120, 800], "Joel = saw even the final judgment", { color: "red" }],
                 ["box", "j5"]] }
      ]
    }
  ]
};
