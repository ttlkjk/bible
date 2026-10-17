// Malachi whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does.
window.BOARD = {
  scenes: [
    {
      id: "tired", title: "God Has Grown Weary",
      beats: [
        { say: "The historical background of Malachi, in a word, is that God has grown completely weary.",
          draw: [["title", "t", "God has grown weary"],
                 ["photo", "p1", "img/p3/image25.jpg", [1080, 190, 440, 248], { tilt: 2 }],
                 ["write", "a1", [120, 310], "God is worn out", { size: 80, color: "red" }],
                 ["circle", "a1"]] },
        { say: "These people went to Babylon and learned for certain that there is no one but God. Through Ezra and Nehemiah they even read through the Bible. And yet even they became corrupt and fell away again.",
          draw: [["write", "a2", [120, 450], "Babylon · read-through", { size: 60 }],
                 ["write", "a3", { after: "a2", gap: 110 }, "fell again", { size: 60, color: "red" }],
                 ["arrow", "a2", "a3"]] },
        { say: "From Moses to Malachi is a thousand years. A thousand years of love has turned into foam on the water.",
          draw: [["write", "a4", [120, 590], "Moses → Malachi: 1000 yrs of love, gone", { size: 60, color: "blue" }]] },
        { say: "So He has decided to end it completely, and He wants to meet them one last time. That is the heartbreaking situation. The word Malachi means my messenger.",
          draw: [["write", "a5", [120, 720], "to meet them one last time", { size: 60 }],
                 ["write", "a6", [180, 810], "Malachi = my messenger", { size: 48, color: "gray" }]] }
      ]
    },
    {
      id: "love", title: "I Have Loved You",
      beats: [
        { say: "The Lord says, I have loved you. But the people answer, Wherein hast thou loved us?",
          draw: [["clear"],
                 ["title", "t", "I have loved you"],
                 ["write", "b1", [120, 300], "\"I have loved you\"", { size: 64, color: "blue" }],
                 ["write", "b2", [120, 420], "\"Wherein hast thou loved us?\"", { size: 64, color: "red" }]] },
        { say: "Usually, in a serious moment like this, men don't have much to say. I did love you, that much is true. And the answer comes back: oh, how did you love me? From the very first word, there is no conversation.",
          draw: [["write", "b3", [180, 510], "no conversation from the first word", { size: 48, color: "gray" }]] },
        { say: "Did God love Israel? Yes. Then did He beat them too? How much? A lot.",
          draw: [["write", "b4", [120, 640], "He loved them · and beat them a lot", { size: 60 }]] },
        { say: "They were beaten so much that they clearly remember the beatings, but there is not a trace of any memory of being loved.",
          draw: [["write", "b5", [120, 770], "beaten: O", { size: 64 }],
                 ["write", "b6", { after: "b5", gap: 80 }, "loved: X", { size: 64, color: "red" }],
                 ["under", "b6"]] }
      ]
    },
    {
      id: "priests", title: "Talking Back Every Time",
      beats: [
        { say: "A son honors his father, and a servant his master. If I am a father, where is my honor? And the priests say, Wherein have we despised thy name?",
          draw: [["clear"],
                 ["title", "t", "Talking back every time"],
                 ["write", "c1", [120, 290], "\"Where is mine honour?\"", { size: 60, color: "blue" }],
                 ["write", "c2", [120, 390], "\"Wherein have we despised?\"", { size: 60, color: "red" }]] },
        { say: "They offer polluted bread on the altar, and still say, Wherein have we polluted thee? They talk back every single time.",
          draw: [["write", "c3", [120, 510], "offer polluted bread, still talk back", { size: 60 }]] },
        { say: "They sacrifice the blind, the lame, and the sick. In today's terms, it is like barely moving your lips during the hymns at worship and staring at your smartphone.",
          draw: [["write", "c4", [120, 630], "blind · lame · sick", { size: 60, color: "red" }],
                 ["write", "c5", { after: "c4", gap: 40 }, "= phone during worship", { size: 48, color: "gray" }]] },
        { say: "It's not that they don't do it at all. They do it carelessly, half-heartedly. What a bother, how long do we have to keep this up? They keep looking at the clock.",
          draw: [["write", "c6", [180, 720], "not skipping it, just careless (eyes on the clock)", { size: 44, color: "gray" }]] },
        { say: "Offer it now unto thy governor. Will he be pleased with thee?",
          draw: [["write", "c7", [120, 830], "\"Offer it to thy governor\"", { size: 64, color: "blue" }],
                 ["box", "c7"]] }
      ]
    },
    {
      id: "close", title: "Better to Shut the Temple Doors",
      beats: [
        { say: "Chapter 1, verse 10. I wish there were someone among you who would shut the doors of the temple, so that you would not kindle fire on my altar for nothing.",
          draw: [["clear"],
                 ["title", "t", "Better to shut the temple doors"],
                 ["write", "d1", [120, 310], "\"Who would shut the doors?\"", { size: 64, color: "red" }],
                 ["under", "d1"]] },
        { say: "He says, I have no pleasure in you, and I will not accept an offering at your hand.",
          draw: [["write", "d2", [120, 440], "I won't accept your offerings", { size: 60 }]] },
        { say: "In verse 13, the people sneer, Behold, what a weariness is it! Weariness here means it is a hassle.",
          draw: [["write", "d3", [120, 580], "\"What a weariness!\"", { size: 64, color: "blue" }],
                 ["write", "d4", { after: "d3", gap: 40 }, "= what a hassle", { size: 52, color: "gray" }]] },
        { say: "And they brought what was taken by violence, the lame, and the sick. Should I accept this?",
          draw: [["write", "d5", [120, 720], "stolen · lame · sick", { size: 60 }],
                 ["write", "d6", { after: "d5", gap: 40 }, "accept this?", { size: 60, color: "red" }]] }
      ]
    },
    {
      id: "levi", title: "To the Priests",
      beats: [
        { say: "Chapter 2 is spoken to the priests. He says He will curse your blessings, meaning your children, and spread dung on your faces.",
          draw: [["clear"],
                 ["title", "t", "To the priests (ch. 2)"],
                 ["write", "e1", [120, 290], "your blessings = children", { size: 56 }],
                 ["write", "e2", { after: "e1", gap: 40 }, "→ I will curse", { size: 56, color: "red" }]] },
        { say: "The law you hated keeping so much is actually the law that gives life and peace. The covenant made with Levi is the law and the ordinances. That is Leviticus.",
          draw: [["write", "e3", [120, 410], "law = life & peace", { size: 64, color: "green" }],
                 ["write", "e4", { after: "e3", gap: 40 }, "covenant with Levi = Leviticus", { size: 52, color: "gray" }]] },
        { say: "The reason for making this covenant was so that they would fear God. Anyone who studies Leviticus properly will come to fear God. Someone who does not fear Him does not know God.",
          draw: [["write", "e5", [120, 540], "study Leviticus rightly → fear God", { size: 64, color: "blue" }],
                 ["box", "e5"]] },
        { say: "Originally, the law of truth was in the priests' mouths, and they turned many away from iniquity. But they fell. Their lips no longer kept knowledge, and they caused many to stumble at the law.",
          draw: [["write", "e6", [120, 670], "law of truth", { size: 60 }],
                 ["write", "e7", { after: "e6", gap: 110 }, "led many from the law", { size: 60, color: "red" }],
                 ["arrow", "e6", "e7"]] },
        { say: "That is exactly why the priests are now despised and looked down on. They did not keep it themselves, and they led people astray.",
          draw: [["write", "e8", [120, 800], "why despised: didn't keep it, led others astray", { size: 52, color: "gray" }]] }
      ]
    },
    {
      id: "wife", title: "An Altar Covered with Tears",
      beats: [
        { say: "You cover the altar of the Lord with tears, with weeping, and with crying out. So He no longer accepts your offering. And you ask, Why?",
          draw: [["clear"],
                 ["title", "t", "An altar covered with tears"],
                 ["write", "f1", [120, 290], "tears · weeping · crying", { size: 64, color: "blue" }],
                 ["write", "f2", { after: "f1", gap: 40 }, "→ offering refused", { size: 56 }]] },
        { say: "These tears come from the poor and the oppressed, and especially from their own wives, whom they mistreated until they cried out to God. These men abandoned their wives because they wanted to marry foreign women.",
          draw: [["write", "f3", [120, 410], "left their wives to wed foreign women", { size: 60, color: "red" }]] },
        { say: "There is a hint in verse 16. I hate divorce, and the one who covers his garment with violence. That means they beat them. They hid the bruises under their clothes.",
          draw: [["write", "f4", [120, 530], "violence covered by garment = hiding bruises", { size: 56 }],
                 ["under", "f4"]] },
        { say: "The treachery in verse 15 is sending a wife away by nitpicking, when she has done nothing wrong.",
          draw: [["write", "f5", [180, 620], "treachery = nitpicking to send her away", { size: 48, color: "gray" }]] },
        { say: "God could have made many people at once. But a godly offspring can only come from one man and one woman, right? So He paired them one by one, and they threw their wives away with one excuse after another.",
          draw: [["write", "f6", [120, 760], "godly seed = one man + one woman", { size: 64, color: "green" }],
                 ["box", "f6", "green"]] }
      ]
    },
    {
      id: "justice", title: "Where Is the God of Justice?",
      beats: [
        { say: "Chapter 2, verse 17. You have wearied the Lord with your words, and yet you say, Wherein have we wearied him? People who do evil never think they will be destroyed.",
          draw: [["clear"],
                 ["title", "t", "Where is the God of justice?"],
                 ["write", "g1", [120, 290], "the wicked don't see their ruin", { size: 60 }]] },
        { say: "To please God you have to do evil. Where is the God of judgment? Just live however you like. How do you think God feels, watching all this?",
          draw: [["write", "g2", [120, 410], "\"Where is the God of judgment?\"", { size: 64, color: "red" }]] },
        { say: "In chapter 3 He says the Lord will suddenly come. Where is the God of justice, you ask? Here I am, what of it? And He comes at a time no one expects.",
          draw: [["write", "g3", [120, 540], "\"Here I am. So?\"", { size: 80, color: "blue" }],
                 ["write", "g4", { after: "g3", gap: 40 }, "comes suddenly", { size: 56 }]] },
        { say: "He comes as the Judge. Against the sorcerers, the adulterers, the false swearers, those who oppress the hireling in his wages,",
          draw: [["write", "g5", [120, 670], "sorcerers · adulterers · false oaths · wages", { size: 50 }]] },
        { say: "those who oppress the widow and the fatherless, who turn aside the stranger, and who do not fear God. He judges them all.",
          draw: [["write", "g6", [120, 770], "widow & orphan · stranger · no fear", { size: 50 }],
                 ["write", "g7", { at: [1340, 720] }, "Judgment", { anchor: "middle", size: 80, color: "red" }],
                 ["circle", "g7"]] }
      ]
    },
    {
      id: "tithe", title: "The Point of the Tithe",
      beats: [
        { say: "Return unto me, and I will return unto you. And they say, Wherein shall we return? They are not asking because they want to know. They are mocking.",
          draw: [["clear"],
                 ["title", "t", "The point of the tithe"],
                 ["write", "h1", [120, 290], "\"Wherein shall we return?\"", { size: 60 }],
                 ["write", "h2", { after: "h1", gap: 40 }, "= mockery", { size: 56, color: "red" }]] },
        { say: "Verse 8. You are robbers. What did we rob? Tithes and offerings. Remember, in the later part of Nehemiah, the Levites all ran off because no one paid the tithe.",
          draw: [["write", "h3", [120, 410], "robbery = tithes & offerings", { size: 60, color: "blue" }]] },
        { say: "And then comes verse 10, the most famous verse in Malachi. But you know the mood here is not, pay your tithe and I will bless you, right?",
          draw: [["write", "h4", [120, 520], "tithe → blessing?", { size: 60, color: "gray" }],
                 ["strike", "h4", "gray"]] },
        { say: "When people tithe, the Levites who live on it come back. The Levites teach the law and help people keep it. And when they keep the law, they receive the blessing, as promised.",
          draw: [["write", "h5", [120, 650], "tithe", { size: 56 }],
                 ["write", "h6", { after: "h5", gap: 80 }, "Levites return", { size: 56 }],
                 ["write", "h7", { after: "h6", gap: 80 }, "law taught", { size: 56 }],
                 ["write", "h8", { after: "h7", gap: 80 }, "blessing", { size: 60, color: "green" }],
                 ["arrow", "h5", "h6"],
                 ["arrow", "h6", "h7"],
                 ["arrow", "h7", "h8"]] },
        { say: "The point is not the tithe. The point is to get them to keep the law. Remove the root cause of not keeping the law.",
          draw: [["write", "h9", [120, 790], "point: get them to keep the law", { size: 64, color: "red" }],
                 ["under", "h9"]] }
      ]
    },
    {
      id: "book", title: "The Book of Remembrance",
      beats: [
        { say: "The people say it is vain to serve God. They call the proud happy, and say that those who work wickedness are set up.",
          draw: [["clear"],
                 ["title", "t", "Book of remembrance"],
                 ["write", "i1", [120, 290], "\"It is vain to serve God\"", { size: 64, color: "red" }]] },
        { say: "It is true, actually. Wicked people get rich and live just fine.",
          draw: [["write", "i2", [180, 385], "true: the wicked do prosper", { size: 48, color: "gray" }]] },
        { say: "But verse 16. Who was written in the book of remembrance? Those who feared the Lord, and who thought upon His name.",
          draw: [["write", "i3", [120, 530], "the book", { size: 80, color: "blue" }],
                 ["box", "i3"],
                 ["write", "i4", { after: "i3", gap: 60 }, "those who fear Him · honor His name", { size: 52, color: "green" }]] },
        { say: "First Samuel chapter 2, verse 30. Them that honour me I will honour, and they that despise me shall be lightly esteemed.",
          draw: [["write", "i5", [120, 680], "those who honor Me I will honor", { size: 60 }],
                 ["write", "i6", { after: "i5", gap: 40 }, "1 Sam 2:30", { size: 44, color: "gray" }]] }
      ]
    },
    {
      id: "silence", title: "The End of the OT: 400 Years of Silence",
      beats: [
        { say: "Chapter 4. On the day of judgment a fire like a furnace will come, and all who ignore God and do evil will be like stubble before it.",
          draw: [["clear"],
                 ["title", "t", "End of OT: 400 years of silence"],
                 ["write", "j1", [120, 290], "wicked: stubble before the furnace", { size: 56, color: "red" }]] },
        { say: "But on those who fear Him, the sun of righteousness will shine with healing. And remember the law of Moses, the statutes and judgments I commanded him at Horeb. That is exactly what Solomon said in Ecclesiastes, isn't it?",
          draw: [["write", "j2", [120, 390], "those who fear Him: healing rays", { size: 56, color: "green" }],
                 ["write", "j3", [180, 475], "remember the law of Moses = same as Ecclesiastes", { size: 44, color: "gray" }]] },
        { say: "Before the coming of the great and dreadful day of the Lord, I will send you Elijah the prophet. He shall turn the heart of the fathers to the children, and the heart of the children to their fathers.",
          draw: [["write", "j4", [120, 600], "I will send Elijah: turn the hearts", { size: 60, color: "blue" }]] },
        { say: "And so the Old Testament ends. The thrilling first love of the Exodus is cruelly broken, and God is silent for 400 years, until John the Baptist appears and says, Repent.",
          draw: [["write", "j5", [120, 730], "400 yrs of silence", { size: 72, color: "red" }],
                 ["circle", "j5"],
                 ["write", "j6", { after: "j5", gap: 60 }, "→ until John the Baptist", { size: 52 }]] },
        { say: "In this land without God, war and disaster go on and on. Above all, the 150-year war between the Seleucid and Ptolemaic dynasties grinds them down as if in a millstone.",
          draw: [["write", "j7", [180, 830], "Seleucids vs Ptolemies, 150-yr war = millstone", { size: 48, color: "gray" }]] }
      ]
    }
  ]
};
