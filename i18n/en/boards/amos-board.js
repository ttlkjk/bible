// Amos whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does.
window.BOARD = {
  scenes: [
    {
      id: "intro", title: "Overview of Amos",
      beats: [
        { say: "Now let's go to Amos, who was active in the same period.",
          draw: [["title", "t", "Overview of Amos"],
                 ["photo", "p1", "img/p2/image5.jpg", [1060, 190, 480, 270], { tilt: 2 }]] },
        { say: "You saw it, right? Israel wouldn't repent, but Nineveh did.",
          draw: [["write", "a1", [100, 310], "Israel", { size: 60 }],
                 ["cross", [370, 290], "red"],
                 ["write", "a2", [100, 420], "Nineveh", { size: 60 }],
                 ["write", "a3", { after: "a2", gap: 40 }, "repents O", { size: 60, color: "green" }]] },
        { say: "God was baffled, and as a last try he sent Amos, and then he sent Hosea.",
          draw: [["write", "a4", [100, 580], "last try:", { size: 56, color: "gray" }],
                 ["write", "a5", { after: "a4", gap: 40 }, "Amos → Hosea", { color: "blue" }],
                 ["box", "a5"]] }
      ]
    },
    {
      id: "south", title: "The Prophet of Justice",
      beats: [
        { say: "Amos is known as the prophet of justice.",
          draw: [["clear"],
                 ["title", "t", "Amos = prophet of justice"]] },
        { say: "Chapter 1, verse 1 says these are the words of Amos, who was among the herdsmen of Tekoa, which he saw concerning Israel. Amos was a man from Judah in the south.",
          draw: [["write", "b1", [120, 300], "herdsman of Tekoa"],
                 ["write", "b2", { after: "b1", gap: 50 }, "= from Judah (south)", { color: "blue" }]] },
        { say: "Israel would not listen to the prophets at all, so God sent a man from the south to the north, hoping at least to get their attention.",
          draw: [["write", "b3", [120, 430], "southerner"],
                 ["write", "b4", { after: "b3", gap: 110 }, "sent north", { color: "red" }],
                 ["arrow", "b3", "b4"],
                 ["write", "b5", { after: "b4", gap: 40 }, "(to get attention)", { size: 48, color: "gray" }]] },
        { say: "Notice the words, two years before the earthquake. God sent Elijah and Elisha, and they didn't listen. But when he sent Jonah to Nineveh, Nineveh listened.",
          draw: [["write", "b6", [120, 580], "\"2 years before the earthquake\"", { color: "red" }],
                 ["under", "b6"],
                 ["write", "b7", [120, 700], "Elijah · Elisha ✗", { size: 56 }],
                 ["write", "b8", { after: "b7", gap: 60 }, "Jonah → Nineveh ○", { size: 56, color: "green" }]] },
        { say: "Look, it works there, so why not with you? Just in case, God sent Amos. When even that didn't work, the earthquake came two years later.",
          draw: [["write", "b9", [120, 820], "\"It works there, why not with you?\"", { size: 56, color: "blue" }]] }
      ]
    },
    {
      id: "quake", title: "The Earthquake under Uzziah",
      beats: [
        { say: "Maybe God was angry. He couldn't strike the people, so he struck the ground.",
          draw: [["clear"],
                 ["title", "t", "Earthquake under Uzziah"],
                 ["write", "c1", [120, 300], "not the people"],
                 ["write", "c2", { after: "c1", gap: 110 }, "struck the ground", { color: "red" }],
                 ["arrow", "c1", "c2"]] },
        { say: "We do that too, don't we? We can't hit a person, so we kick the trash can instead.",
          draw: [["write", "c3", [180, 400], "(we kick the trash can too)", { size: 48, color: "gray" }]] },
        { say: "According to Jewish tradition, it was so big that a mountain was pushed about four kilometers away.",
          draw: [["write", "c4", [120, 540], "a mountain moved ~4 km", { color: "blue" }],
                 ["box", "c4"]] },
        { say: "This event became a saying in Israel's history. When people saw someone running away in a panic, they would say, he runs like someone fleeing the earthquake in Uzziah's day.",
          draw: [["write", "c5", [120, 690], "\"like fleeing Uzziah's earthquake\"", { size: 56 }],
                 ["under", "c5", "red"]] }
      ]
    },
    {
      id: "nations", title: "Neighbors First",
      beats: [
        { say: "First God judges the surrounding nations. For three transgressions of Damascus, yes, for four, I will not turn away its punishment.",
          draw: [["clear"],
                 ["title", "t", "Neighbors judged first"],
                 ["photo", "p2", "img/p2/image6.jpg", [1060, 180, 480, 270], { tilt: -2, caption: "The nations around Israel" }],
                 ["write", "d1", [100, 300], "\"for three sins, even four\"", { color: "red" }]] },
        { say: "Damascus, Gaza, Tyre, Edom, Ammon, Moab, and then even Judah come one after another.",
          draw: [["write", "d2", [100, 420], "Damascus · Gaza · Tyre · Edom", { size: 56 }],
                 ["write", "d3", [100, 520], "Ammon · Moab · Judah", { size: 56 }]] },
        { say: "Hearing all this, Israel must have been thrilled, whistling and cheering.",
          draw: [["write", "d4", [100, 640], "Israel: whistling~", { size: 56, color: "gray" }]] },
        { say: "But that was only the warm-up. Now comes the main event. For three transgressions of Israel, he says, and this goes on all the way to chapter 9.",
          draw: [["write", "d5", [100, 780], "main event = Israel", { color: "red" }],
                 ["write", "d6", { after: "d5", gap: 40 }, "(to ch. 9)", { size: 52, color: "gray" }],
                 ["box", "d5"]] }
      ]
    },
    {
      id: "sins", title: "The Sins of Amos's Day",
      beats: [
        { say: "All of it lays bare the sins of Israel. The luxury of the rich was extreme, and people were sunk in materialism and pleasure-seeking.",
          draw: [["clear"],
                 ["title", "t", "The sins of Amos's day"],
                 ["write", "e1", [120, 290], "luxury of the rich · materialism · pleasure", { size: 54 }]] },
        { say: "They sold the righteous for silver, and a person was worth a pair of sandals. The only measure of everything was money.",
          draw: [["write", "e2", [120, 400], "a person = a pair of sandals", { color: "red" }],
                 ["write", "e3", [120, 520], "the only measure = money", { size: 56 }],
                 ["circle", "e2"]] },
        { say: "They made the Nazirites drink wine. It's like unbelievers who get a believer to drink and quietly enjoy saying, see, you're just like us.",
          draw: [["write", "e4", [120, 620], "wine for Nazirites", { size: 56 }],
                 ["write", "e5", { after: "e4", gap: 40 }, "\"you're just like us\"", { size: 52, color: "gray" }]] },
        { say: "They shut the prophets' mouths and told them not to prophesy.",
          draw: [["write", "e6", [120, 710], "prophets silenced", { size: 56, color: "red" }]] },
        { say: "The powerful built summer palaces and winter palaces, and ivory palaces, and lived in luxury and corruption.",
          draw: [["write", "e7", [120, 810], "summer · winter · ivory palaces", { size: 56, color: "blue" }]] }
      ]
    },
    {
      id: "sins2", title: "Ivory Beds and Milk Baths",
      beats: [
        { say: "The women too drank heavily and lived wildly. They slept late on beds of ivory, stretched out on their couches, and chanted idle songs to the sound of the harp.",
          draw: [["clear"],
                 ["title", "t", "Ivory beds and milk baths"],
                 ["write", "f1", [120, 290], "sleeping late on ivory · idle songs", { size: 56 }]] },
        { say: "They drank wine by the bowlful, sprinkled themselves with every kind of costly perfume, and bathed in milk.",
          draw: [["write", "f2", [120, 400], "wine in bowls · perfume ·", { size: 56 }],
                 ["write", "f3", { after: "f2", gap: 30 }, "milk baths", { color: "red" }],
                 ["circle", "f3"]] },
        { say: "They turned justice into gall, and righteousness into wormwood.",
          draw: [["write", "f4", [120, 540], "justice → gall · right → wormwood", { size: 64, color: "blue" }]] },
        { say: "They made the ephah small and the shekel large, and got rich on dishonest gain.",
          draw: [["write", "f5", [120, 670], "small ephah · big shekel", { size: 56 }],
                 ["write", "f6", { after: "f5", gap: 40 }, "= dishonest gain", { size: 56, color: "red" }]] },
        { say: "And they found the coming of the Sabbath a nuisance.",
          draw: [["write", "f7", [120, 800], "Sabbath = a nuisance", { color: "red" }],
                 ["under", "f7"]] }
      ]
    },
    {
      id: "justice", title: "Justice like Waters",
      beats: [
        { say: "Look at chapter 5, from verse 21. I hate, I despise your feasts, and I take no delight in your solemn assemblies. Though you offer me burnt offerings and meal offerings, I will not accept them.",
          draw: [["clear"],
                 ["title", "t", "Justice like waters"],
                 ["write", "g1", [120, 300], "feasts · assemblies · offerings", { size: 56 }],
                 ["strike", "g1"]] },
        { say: "Take away from me the noise of your songs. I will not listen to the music of your harps.",
          draw: [["write", "g2", [120, 420], "songs · harps", { size: 56 }],
                 ["strike", "g2"]] },
        { say: "But let justice run down like waters, and righteousness like a mighty stream.",
          draw: [["write", "g3", [120, 580], "justice like waters", { size: 72, color: "blue" }],
                 ["write", "g4", [120, 700], "righteousness like a stream", { size: 72, color: "blue" }],
                 ["box", "g4", "blue"]] },
        { say: "There were grand religious acts and events, but that is not what God wants. He wants morality, honesty, and faith restored.",
          draw: [["write", "g5", [120, 820], "restore morality · honesty · faith", { size: 56, color: "green" }]] }
      ]
    },
    {
      id: "return", title: "Yet You Did Not Return",
      beats: [
        { say: "As I read through this, underline the words, yet you have not returned to me, every time they come up. God tried one way after another, and still Israel did not return.",
          draw: [["clear"],
                 ["title", "t", "Amos 4:6~13"],
                 ["write", "h1", [120, 300], "\"Yet you have not returned to me\"", { size: 56, color: "red" }],
                 ["under", "h1"]] },
        { say: "He made food run out, he kept them from drinking their fill of water, he struck them with blight, mildew, and the palmerworm, and still they did not return.",
          draw: [["write", "h2", [120, 420], "food · water · blight · mildew · locusts", { size: 56 }]] },
        { say: "He struck them with plague and the sword, and overthrew their cities like Sodom and Gomorrah, and still they did not return.",
          draw: [["write", "h3", [120, 530], "plague · sword · like Sodom", { size: 56 }],
                 ["write", "h4", { after: "h3", gap: 40 }, "→ still ✗", { size: 56, color: "red" }]] },
        { say: "In the time of the judges, at least, when they were struck and it hurt, they cried out to God.",
          draw: [["write", "h5", [120, 670], "Judges: struck → cried out", { size: 56, color: "gray" }]] },
        { say: "But by Amos's time, even when they were struck, they just ground their teeth. They did everything else, but they would not return to God.",
          draw: [["write", "h6", [120, 790], "Amos: grinding teeth, no return", { size: 56, color: "red" }],
                 ["box", "h6"]] }
      ]
    },
    {
      id: "famine", title: "A Famine of the Word",
      beats: [
        { say: "Chapter 8, verse 11. Not a famine of bread, nor a thirst for water, but of hearing the words of the LORD.",
          draw: [["clear"],
                 ["title", "t", "A famine of the Word"],
                 ["write", "i1", [120, 300], "bread ✗ · water ✗", { size: 56, color: "gray" }],
                 ["write", "i2", { after: "i1", gap: 50 }, "famine of the Word", { color: "red" }],
                 ["circle", "i2"]] },
        { say: "In the end, in the last days, a famine of hearing the Word will come. Not knowing this, they shut the prophets' mouths and tell them not to prophesy.",
          draw: [["write", "i3", [120, 430], "yet they silence the prophets", { size: 56 }]] },
        { say: "The last chapter, chapter 9, is a prophecy of restoration. I will bring back the captivity of my people Israel. They will rebuild the ruined cities, plant vineyards, and drink their wine.",
          draw: [["write", "i4", [120, 590], "ch. 9 · restored", { color: "green" }],
                 ["write", "i5", { after: "i4", gap: 50 }, "cities · vineyards · gardens", { size: 56 }]] },
        { say: "I will plant them on their land, and they will no more be pulled up.",
          draw: [["write", "i6", [120, 730], "\"no more pulled up\"", { color: "green" }],
                 ["box", "i6", "green"]] }
      ]
    },
    {
      id: "heart", title: "God's Heart",
      beats: [
        { say: "With what kind of heart is God saying all this?",
          draw: [["clear"],
                 ["title", "t", "God's heart"]] },
        { say: "Almighty God was so angry because this tiny country, about the size of Korea's Gangwon Province, would not do as he wished.",
          draw: [["write", "j1", [120, 300], "a tiny country, size of Gangwon", { size: 56 }],
                 ["write", "j2", { below: "j1", gap: 100 }, "won't obey → God angry", { color: "red" }]] },
        { say: "Keeping feasts, gathering in solemn assemblies, burnt offerings, peace offerings, praise, the sound of harps. He says, I can't stand the sight of any of it.",
          draw: [["write", "j3", [120, 530], "feasts · assemblies · offerings · praise", { size: 52 }],
                 ["write", "j4", [120, 620], "= can't stand the sight", { size: 56, color: "red" }]] },
        { say: "What must he think when he looks at the Korean church today? Why does Sunday come around so often? God, please just take the tithe and leave us alone.",
          draw: [["write", "j5", [120, 710], "\"Why does Sunday come so often?\"", { size: 52, color: "gray" }],
                 ["write", "j6", [120, 800], "\"Take the tithe, leave us alone\"", { size: 52, color: "gray" }]] },
        { say: "That's how it was in Amos's day too.",
          draw: [["write", "j7", { after: "j6", gap: 80 }, "= Amos's day", { color: "red" }],
                 ["circle", "j7"]] }
      ]
    }
  ]
};
