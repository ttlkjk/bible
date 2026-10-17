// ============================================================================
// 에스라 성경강좌 - 66권 전체 성경 데이터 (창세기 ~ 요한계시록)
// 노우호 목사님의 에스라하우스 성경강좌 관점 및 성경통독 맥락 반영
// ============================================================================

const BIBLE_BOOKS_DATA = [
  // --------------------------------------------------------------------------
  // [구약 39권] - 1. 모세오경(율법서, 토라) 5권
  // --------------------------------------------------------------------------
  {
    id: 1,
    name: "Genesis",
    engName: "Genesis",
    abbr: "Gen",
    testament: "OT",
    category: "Law",
    chronologicalOrder: 1,
    chapters: 50,
    author: "Moses",
    date: "c. B.C. 1446 ~ 1406",
    keyVerse: "In the beginning God created the heaven and the earth. (Gen 1:1)",
    theme: "The origin of all things, the fall of mankind, and the beginning of God's covenant of salvation",
    summary: "Genesis is the \"book of beginnings.\" Through the primeval history (chapters 1-11) — the creation of the universe and of humankind, the origin of sin, the judgment of Noah's flood, and the Tower of Babel — and the patriarchal history (chapters 12-50) that runs through Abraham, Isaac, Jacob, and Joseph, it shows how God planted the seed of the covenant to save humankind.",
    ezraPerspective: "In Pastor Woo-ho Noh's Ezra course, Genesis is seen as the foundation stone of faith that reveals \"who God is, and where we come from and where we are going.\" He especially stresses that understanding the four great historical events (Creation, Fall, Judgment, Scattering), and the \"covenant of blood\" God made through four people (Abraham, Isaac, Jacob, Joseph), together with God's heart, is the key that opens the whole Bible.",
    structure: [
      { part: "Part 1: Primeval History (chapters 1~11)", content: "Creation of the universe and humankind, the Fall and the first gospel, Cain and Abel, Noah's flood and the rainbow covenant, the Tower of Babel and the scattering of the nations" },
      { part: "Part 2: The Life of Abraham (chapters 12~25)", content: "Abraham's call, the covenant of the torch, the covenant of circumcision, the offering of Isaac" },
      { part: "Part 3: The Lives of Isaac and Jacob (chapters 26~36)", content: "Isaac's obedience and blessing, Jacob's vow at Bethel, 20 years in Paddan-aram, wrestling at the Jabbok and the name Israel" },
      { part: "Part 4: Joseph and God's Providence, Preparing for the Exodus (chapters 37~50)", content: "Joseph the dreamer, his rise to governor of Egypt, Jacob's family moving to and settling in Egypt (the land of Goshen)" }
    ],
    mapType: "genesis",
    youtubeQuery: "에스라하우스 창세기 노우호",
    quizzes: [
      {
        q: "Which of these is NOT one of the four key historical events of early Genesis (chapters 1~11)?",
        options: ["Creation of heaven and earth", "The Fall of humankind", "The Exodus", "Scattering at Babel"],
        ans: 2,
        exp: "The Exodus is the central event of the book of Exodus. The four events of Genesis 1~11 are Creation, the Fall, the judgment of the Flood, and the scattering at Babel."
      },
      {
        q: "When God appeared to Abraham and told him to leave his country, his kindred, and his father's house, what was the heart of the blessing He promised?",
        options: ["To become ruler of every land in the world", "Land, many descendants, and being the source of blessing for all nations", "To gain huge treasures of gold and silver at once", "Eternal life on earth, never dying"],
        ans: 1,
        exp: "In Genesis 12:1-3, God promised land and descendants, and that all the families of the earth would be blessed through Abraham."
      }
    ]
  },
  {
    id: 2,
    name: "Exodus",
    engName: "Exodus",
    abbr: "Exod",
    testament: "OT",
    category: "Law",
    chronologicalOrder: 2,
    chapters: 40,
    author: "Moses",
    date: "c. B.C. 1446 ~ 1406",
    keyVerse: "Now therefore, if ye will obey my voice indeed, and keep my covenant, then ye shall be a peculiar treasure unto me above all people: for all the earth is mine: And ye shall be unto me a kingdom of priests, and an holy nation. (Exod 19:5-6)",
    theme: "Redemption and escape, the covenant at Mount Sinai, and God's presence through the tabernacle",
    summary: "It covers God rescuing the people of Israel, slaves in Egypt for about 400 years, through the ten plagues and the blood of the Passover lamb (chapters 1-18); giving the Ten Commandments and the Law at Mount Sinai and making the covenant of a \"kingdom of priests\" (chapters 19-24); and having the tabernacle built so He could dwell among His people (chapters 25-40).",
    ezraPerspective: "The Ezra course sees Exodus not as a mere miracle story but as \"the Sinai covenant, in which God made a marriage covenant with His people.\" The book of the covenant made at Sinai is the constitution by which Israel becomes a \"kingdom of priests\" to lead all the nations of the world to God, and the tabernacle is the holy dwelling God made so He could live with us.",
    structure: [
      { part: "Part 1: Slavery in Egypt and the Call of Moses (chapters 1~4)", content: "Israel's suffering, Moses' birth and his training in the wilderness of Midian, the call at the burning bush" },
      { part: "Part 2: The Ten Plagues and the Passover Exodus (chapters 5~18)", content: "Showdown with Pharaoh, the ten plagues, the Passover lamb, crossing the Red Sea, manna and water from the rock" },
      { part: "Part 3: The Sinai Covenant and the Giving of the Law (chapters 19~24)", content: "The vision of a kingdom of priests, the Ten Commandments and civil laws, the covenant sealed with blood" },
      { part: "Part 4: The Design and Building of the Tabernacle (chapters 25~40)", content: "The tabernacle system, the golden calf idolatry, the renewal of the covenant, the tabernacle completed and filled with the glory of the LORD" }
    ],
    mapType: "exodus",
    youtubeQuery: "에스라하우스 출애굽기 노우호",
    quizzes: [
      {
        q: "In Exodus 19, what did God declare as the ultimate purpose (identity) for which He rescued the people of Israel?",
        options: ["The strongest military empire in the world", "A kingdom of priests and a holy nation", "The richest trading nation", "An imperial nation ruling all peoples"],
        ans: 1,
        exp: "In Exodus 19:5-6 He declared, \"ye shall be unto me a kingdom of priests, and an holy nation.\""
      }
    ]
  },
  {
    id: 3,
    name: "Leviticus",
    engName: "Leviticus",
    abbr: "Lev",
    testament: "OT",
    category: "Law",
    chronologicalOrder: 3,
    chapters: 27,
    author: "Moses",
    date: "c. B.C. 1445 (Mount Sinai)",
    keyVerse: "For I am the LORD that bringeth you up out of the land of Egypt, to be your God: ye shall therefore be holy, for I am holy. (Lev 11:45)",
    theme: "The way to approach the holy God (sacrifices) and a life of walking with Him (holiness)",
    summary: "Leviticus is God's solemn call: \"Be holy, for I am holy.\" Chapters 1-16 set out the five offerings for coming before God (burnt offering, grain offering, peace offering, sin offering, guilt offering) and the Day of Atonement; chapters 17-27 set out the everyday ethics of a holy people (the Holiness Code, food laws, feasts, the sabbath year and the Jubilee).",
    ezraPerspective: "Pastor Woo-ho Noh counts Leviticus among \"the most important and holy books in the Bible.\" He says, \"If you don't know Leviticus, you can't know the whole Bible,\" and stresses that the food laws of Leviticus 11 (holy eating) and public hygiene, and the \"love your neighbor\" of Leviticus 19, are the roots of Jesus' words in the Gospels.",
    structure: [
      { part: "Part 1: The Five Offerings (chapters 1~7)", content: "Burnt offering (devotion), grain offering (thanks), peace offering (fellowship), sin offering (forgiveness), guilt offering (restitution)" },
      { part: "Part 2: The Priests' Duties and Ordination (chapters 8~10)", content: "The ordination of Aaron and his sons, the strange fire of Nadab and Abihu" },
      { part: "Part 3: Laws of Cleanness and a Life of Holiness (chapters 11~15)", content: "Clean foods, purification after childbirth and leprosy, laws on discharges" },
      { part: "Part 4: The Day of Atonement and the Holiness Code (chapters 16~27)", content: "The Day of Atonement (the scapegoat), the sacredness of blood, moral and social ethics, the seven feasts, the sabbath year and the Jubilee, rewards for obedience and punishment for disobedience" }
    ],
    mapType: "sinai",
    youtubeQuery: "에스라하우스 레위기 노우호",
    quizzes: [
      {
        q: "Among \"creatures that live in the water\" in Leviticus 11, what makes a creature clean and fit to eat?",
        options: ["It has fins and scales", "It has whiskers and spines", "It is over 1 meter long", "It is a hard-shelled crustacean"],
        ans: 0,
        exp: "The Bible clearly says that of the creatures living in the water, only those with fins and scales may be eaten."
      }
    ]
  },
  {
    id: 4,
    name: "Numbers",
    engName: "Numbers",
    abbr: "Num",
    testament: "OT",
    category: "Law",
    chronologicalOrder: 4,
    chapters: 36,
    author: "Moses",
    date: "c. B.C. 1406",
    keyVerse: "The LORD bless thee, and keep thee: The LORD make his face shine upon thee, and be gracious unto thee: The LORD lift up his countenance upon thee, and give thee peace. (Num 6:24-26)",
    theme: "Thirty-eight years of wandering and training in the wilderness, the passing of the disobedient generation, and the preparation of a new generation",
    summary: "The Hebrew title is \"Bemidbar\" (In the Wilderness). It covers the journey from Mount Sinai; the unbelief of the twelve spies at Kadesh Barnea, which led to 38 years of wandering in the wilderness while the old generation died; and the preparation, on the plains of Moab, of the new generation who would enter Canaan, through a second census.",
    ezraPerspective: "The Ezra Bible Course presents Numbers as a book that teaches \"the terrible results of disobedience and grumbling, and God's faithful patience.\" Even amid Israel's rebellion — demanding meat when given manna, and wanting to stone Moses when there was no water — it stresses God's grace in protecting His people, turning Balaam's curse into a blessing.",
    structure: [
      { part: "Part 1: Organizing the Camp at Sinai and Preparing to March (chapters 1~10)", content: "The first census, the arrangement of the camp, the duties of the Levites, the Nazirite vow, Aaron's blessing, the silver trumpet signals" },
      { part: "Part 2: Unbelief at Kadesh Barnea and 38 Years of Wandering (chapters 11~21)", content: "Grumbling after grumbling (Taberah, Kibroth-hattaavah), the twelve spies' report and the revolt, Korah's rebellion, Aaron's budding rod, the bronze serpent" },
      { part: "Part 3: Preparing the New Generation on the Plains of Moab (chapters 22~36)", content: "The story of Balaam and Balak, the sin of Baal-peor at Shittim and Phinehas, the second census, Joshua appointed as successor, the cities of refuge" }
    ],
    mapType: "wilderness",
    youtubeQuery: "에스라하우스 민수기 노우호",
    quizzes: [
      {
        q: "After spying out Canaan from Kadesh Barnea, which two faithful spies cried out, \"They are bread for us! The LORD is with us\"?",
        options: ["Moses and Aaron", "Joshua and Caleb", "Nadab and Abihu", "Eleazar and Phinehas"],
        ans: 1,
        exp: "Of the twelve spies, only Joshua and Caleb trusted God and called out to go forward boldly."
      }
    ]
  },
  {
    id: 5,
    name: "Deuteronomy",
    engName: "Deuteronomy",
    abbr: "Deut",
    testament: "OT",
    category: "Law",
    chronologicalOrder: 5,
    chapters: 34,
    author: "Moses",
    date: "c. B.C. 1406 (plains of Moab)",
    keyVerse: "Hear, O Israel: The LORD our God is one LORD: And thou shalt love the LORD thy God with all thine heart, and with all thy soul, and with all thy might. (Deut 6:4-5)",
    theme: "Renewal of the covenant and Moses' farewell sermons — Shema Israel and teaching the next generation",
    summary: "The Korean title of Deuteronomy, 申命記, uses the character 申 (\"again\"): a book that \"explains the Law again.\" On the plains of Moab, about to cross the Jordan into Canaan, Moses gives three farewell sermons to the new generation born in the wilderness, reminding them of the grace of the past 40 years and urging them to engrave God's commandments on their hearts and obey.",
    ezraPerspective: "This book is the root of one of Pastor Woo-ho Noh's key lectures, the \"Shema Education: Passing On the Faith\" special lecture. The \"Shema (Hear!)\" of Deuteronomy 6 is the great command for the home to be the place of faith education, teaching children diligently. The \"blessings and curses\" of Deuteronomy 28 become the theological measuring stick (the Deuteronomic view of history) that runs through all the later Old Testament history books (Judges to Kings).",
    structure: [
      { part: "Sermon 1: Looking Back on 40 Years in the Wilderness (chapters 1~4)", content: "The rebellion at Kadesh and the wilderness wandering, remembering the conquest of the Amorites, a call to keep the Law" },
      { part: "Sermon 2: A Detailed Exposition of the Law (chapters 5~26)", content: "The Ten Commandments restated, the Shema (chapter 6), the command to destroy the Canaanite peoples, tithes and care for the poor, the court system, laws on kings and prophets" },
      { part: "Sermon 3: Renewal of the Covenant, Blessings and Curses (chapters 27~30)", content: "The Law proclaimed at Mount Ebal and Mount Gerizim, blessings for obedience and curses for disobedience (chapter 28), a call to choose the way of life" },
      { part: "Moses' Last Ministry and Death (chapters 31~34)", content: "Joshua commissioned, the song and blessing of Moses, death on Pisgah's peak on Mount Nebo" }
    ],
    mapType: "moab",
    youtubeQuery: "에스라하우스 신명기 노우호",
    quizzes: [
      {
        q: "What is the name of the key passage, Deuteronomy 6:4-9, that Jews recite every morning and evening?",
        options: ["Hallelujah", "Shema", "Hosanna", "Maranatha"],
        ans: 1,
        exp: "It is the passage that begins \"Hear, O Israel (Shema Israel),\" the heart of Deuteronomy, calling us to love God with all our heart, soul, and strength."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // [구약 39권] - 2. 역사서 12권
  // --------------------------------------------------------------------------
  {
    id: 6,
    name: "Joshua",
    engName: "Joshua",
    abbr: "Josh",
    testament: "OT",
    category: "History",
    chronologicalOrder: 6,
    chapters: 24,
    author: "Joshua",
    date: "c. B.C. 1390",
    keyVerse: "Only be thou strong and very courageous, that thou mayest observe to do according to all the law, which Moses my servant commanded thee... for then thou shalt make thy way prosperous, and then thou shalt have good success. (Josh 1:7-8)",
    theme: "Conquering Canaan, the promised land, dividing the inheritance by tribe, and faithfully keeping the covenant",
    summary: "Under the leadership of Joshua, who succeeded Moses, the people of Israel cross the Jordan, take Jericho and Ai, and subdue central, southern, and northern Canaan in turn (chapters 1-12). They then divide the land among the twelve tribes by lot and, through the covenant at Shechem, pledge to serve the LORD alone (chapters 13-24).",
    ezraPerspective: "The Ezra course explains Joshua's wars not as simple land-grabbing but as \"God's righteous judgment on the iniquity of the Amorites, which had reached its full measure, as foretold in Genesis 15.\" Through the crossing of the Jordan and the circumcision at Gilgal, we also learn that victory or defeat depends not on weapons but on holiness and obedience.",
    structure: [
      { part: "Part 1: Preparing to Enter Canaan (chapters 1~5)", content: "Joshua's call, Rahab and the spies, the miracle of crossing the Jordan, the memorial stones and circumcision at Gilgal" },
      { part: "Part 2: The War of Conquest in Canaan (chapters 6~12)", content: "The fall of Jericho, Achan's sin and Ai, the Gibeonites' trick, defeat of the southern alliance (the battle when the sun stood still), defeat of the northern alliance" },
      { part: "Part 3: Dividing the Inheritance Among the Twelve Tribes (chapters 13~21)", content: "Allotment to the tribes east and west of the Jordan, Caleb's request for Hebron (\"Give me this mountain\"), the cities of refuge and the Levitical cities" },
      { part: "Part 4: Farewell Sermons and the Covenant at Shechem (chapters 22~24)", content: "Clearing up the misunderstanding over the altar by the Jordan, Joshua's final charge, \"as for me and my house, we will serve the LORD\"" }
    ],
    mapType: "canaan_conquest",
    youtubeQuery: "에스라하우스 여호수아 노우호",
    quizzes: [
      {
        q: "Which warrior of faith, at age 85, said \"Give me this mountain now\" and asked for the hill country of Hebron, where the Anakim lived, as his inheritance?",
        options: ["Achan", "Caleb", "Gideon", "Barak"],
        ans: 1,
        exp: "At the advanced age of 85, with unchanging faith, Caleb volunteered to take Hebron, the most rugged land of all."
      }
    ]
  },
  {
    id: 7,
    name: "Judges",
    engName: "Judges",
    abbr: "Judg",
    testament: "OT",
    category: "History",
    chronologicalOrder: 7,
    chapters: 21,
    author: "Samuel (presumed)",
    date: "c. B.C. 1050 ~ 1000",
    keyVerse: "In those days there was no king in Israel: every man did that which was right in his own eyes. (Judg 21:25)",
    theme: "Repeated apostasy, judgment, and deliverance in a vicious cycle — the dark age of God's rule",
    summary: "This is the dark history of about 350 years from Joshua's death until the monarchy was established. It shows seven spiritual cycles — \"sin → God's discipline (foreign invasion) → the people cry out → deliverance through a judge → peace → sin again\" — and exposes the misery of people who rejected God, their true King.",
    ezraPerspective: "Pastor Woo-ho Noh calls Judges \"the spiritual dark age of the Old Testament.\" He stresses its frightening lesson: when the faith education of Deuteronomy 6 (the Shema) is not passed on to the next generation, within just one generation there arises \"another generation which knew not the LORD,\" and it falls into corruption.",
    structure: [
      { part: "Part 1: The Background of the Age of the Judges (1~3:6)", content: "The Canaanite peoples left in the land, the rise of another generation and Baal worship, an introduction to the vicious cycle" },
      { part: "Part 2: The Deeds of the Twelve Judges (3:7~chapter 16)", content: "Othniel, Ehud, Shamgar, Deborah and Barak, Gideon (the 300 men), Tola, Jair, Jephthah (the tragedy of his vow), Ibzan, Elon, Abdon, Samson" },
      { part: "Part 3: The Spiritual and Moral Corruption of the Age of the Judges (chapters 17~21)", content: "Micah's shrine and the idolatry of the tribe of Dan, the Levite's concubine and the tragedy at Gibeah, civil war with the tribe of Benjamin" }
    ],
    mapType: "judges",
    youtubeQuery: "에스라하우스 사사기 노우호",
    quizzes: [
      {
        q: "Which repeated phrase best shows the spiritual condition of the book of Judges?",
        options: ["Israel followed the statutes of David", "In those days there was no king; everyone did what was right in his own eyes", "All the people meditated on the Law day and night", "The temple of the LORD was built in holiness"],
        ans: 1,
        exp: "In Judges 17:6, 21:25 and elsewhere, the book laments, \"there was no king... every man did that which was right in his own eyes.\""
      }
    ]
  },
  {
    id: 8,
    name: "Ruth",
    engName: "Ruth",
    abbr: "Ruth",
    testament: "OT",
    category: "History",
    chronologicalOrder: 8,
    chapters: 4,
    author: "Samuel (presumed)",
    date: "c. B.C. 1000 (time of David)",
    keyVerse: "And Ruth said, Intreat me not to leave thee, or to return from following after thee... thy people shall be my people, and thy God my God (Ruth 1:16)",
    theme: "The love of hesed (lovingkindness) and the line of King David through the kinsman-redeemer (goel)",
    summary: "In the pitch-dark age when the judges ruled, this is a gracious drama of redemptive history: through the devoted love that the Moabite woman Ruth showed her mother-in-law Naomi, and through \"redemption of the inheritance (goel)\" by Boaz, a prominent relative, Ruth becomes an ancestor of King David and of Jesus Christ.",
    ezraPerspective: "The Ezra course describes Ruth, placed after the horrible corruption of Judges, as \"a morning star of grace shining in a dark night sky.\" It shows that even a foreign woman, when she fears God with her whole heart, becomes a glorious figure in the Messiah's genealogy, and that Boaz is a shadow of Jesus Christ, who redeems us.",
    structure: [
      { part: "Chapter 1: The Tragedy of Elimelech's Family and Ruth's Decision", content: "The move to Moab, the death of the husband and two sons, Naomi and Ruth's return to Bethlehem" },
      { part: "Chapter 2: Ruth Gleaning in Boaz's Field", content: "A meeting arranged by God's providence, Boaz's warm welcome and kindness" },
      { part: "Chapter 3: The Appeal for Redemption at the Threshing Floor", content: "Naomi's wise advice, Boaz's pledge at the threshing floor at night" },
      { part: "Chapter 4: Redemption Completed at the City Gate, and David's Genealogy", content: "The nearer kinsman gives up his right, Boaz marries Ruth, the birth of Obed and David's genealogy" }
    ],
    mapType: "bethlehem",
    youtubeQuery: "에스라하우스 룻기 노우호",
    quizzes: [
      {
        q: "In Ruth, what is the Hebrew name for the custom of buying back a relative's lost inheritance and carrying on his family line?",
        options: ["Goel", "Shema", "Hermon", "Shalom"],
        ans: 0,
        exp: "\"Goel\" means one who redeems the inheritance, a redeemer. Boaz fulfills this role and takes Ruth as his wife."
      }
    ]
  },
  {
    id: 9,
    name: "1 Samuel",
    engName: "1 Samuel",
    abbr: "1 Sam",
    testament: "OT",
    category: "History",
    chronologicalOrder: 9,
    chapters: 31,
    author: "Samuel, Nathan, Gad (presumed)",
    date: "after B.C. 930",
    keyVerse: "And Samuel said, Hath the LORD as great delight in burnt offerings and sacrifices, as in obeying the voice of the LORD? Behold, to obey is better than sacrifice, and to hearken than the fat of rams. (1 Sam 15:22)",
    theme: "The shift from the age of the judges to the monarchy, Saul's failure and David's refining",
    summary: "It covers the birth and call of Samuel, the last judge and a prophet (chapters 1-7); the disobedience and downfall of Saul, the first king, set up because the people clamored for a king (chapters 8-15); and the anointing of David, a man after God's own heart, and his more than ten years of suffering as a fugitive (chapters 16-31).",
    ezraPerspective: "Through 1 Samuel, Pastor Woo-ho Noh sharply digs into the essential difference between \"the king people set up (Saul) and the king God sought out (David).\" We learn that Saul was rejected because he put people's opinions and his own face first, while David kept a thorough faith, never harming the LORD's anointed even amid countless hardships and slanders.",
    structure: [
      { part: "Part 1: Samuel's Ministry (chapters 1~7)", content: "Hannah's prayer and Samuel's birth, the fall of Eli's house, the Philistines' capture of the ark, Ebenezer and the revival at Mizpah" },
      { part: "Part 2: King Saul's Rise and Fall (chapters 8~15)", content: "The demand for a king, Saul's anointing, his disobedience concerning Amalek and God's regret" },
      { part: "Part 3: David's Rise and the Years as a Fugitive (chapters 16~30)", content: "David's anointing, the defeat of Goliath, friendship with Jonathan, mercy in the cave at En-gedi, meeting Abigail" },
      { part: "Part 4: Saul's Miserable End (chapter 31)", content: "The battle on Mount Gilboa and the death of Saul and his three sons" }
    ],
    mapType: "david_flight",
    youtubeQuery: "에스라하우스 사무엘상 노우호",
    quizzes: [
      {
        q: "After the battle with Amalek, King Saul disobeyed God's command and kept the best sheep and oxen. What famous declaration did Samuel make to him?",
        options: ["Prayer is better than fasting", "To obey is better than sacrifice", "The battle is the LORD's", "God looks on the heart"],
        ans: 1,
        exp: "In 1 Samuel 15:22 he rebuked Saul: \"to obey is better than sacrifice, and to hearken than the fat of rams.\""
      }
    ]
  },
  {
    id: 10,
    name: "2 Samuel",
    engName: "2 Samuel",
    abbr: "2 Sam",
    testament: "OT",
    category: "History",
    chronologicalOrder: 10,
    chapters: 24,
    author: "Nathan, Gad (presumed)",
    date: "after B.C. 930",
    keyVerse: "And thine house and thy kingdom shall be established for ever before thee: thy throne shall be established for ever. (2 Sam 7:16)",
    theme: "The unification and prosperity of David's kingdom, the Davidic covenant (chapter 7), the sin with Bathsheba and tragedy in the family",
    summary: "David, who became king of Judah at Hebron, rises to be the king of all Israel united, makes Jerusalem the capital, and brings up the ark (chapters 1-6). After the glory of the \"Davidic covenant\" (chapter 7), in which God promised an everlasting throne, the book honestly records the latter half of David's life (chapters 11-24): painful discipline for his sin with Bathsheba, including Amnon and the rebellion of Absalom.",
    ezraPerspective: "Through 2 Samuel, the Ezra course stresses God's stern justice: \"Even a man after God's own heart cannot escape discipline when he sins.\" It also shows that many penitential psalms were born out of events in 2 Samuel (Absalom's rebellion, Nathan's rebuke, and so on), linking the Bible together in three dimensions.",
    structure: [
      { part: "Part 1: The Prosperity and Victories of David's Kingdom (chapters 1~10)", content: "The lament for Saul, seven and a half years of rule at Hebron, the conquest of Jerusalem, the Davidic covenant (chapter 7), kindness to Mephibosheth" },
      { part: "Part 2: David's Sin and Discipline (chapters 11~20)", content: "Adultery with Bathsheba, the wife of Uriah, the prophet Nathan's rebuke through a parable, Amnon and Tamar, Absalom's rebellion and David's flight, Absalom's death" },
      { part: "Part 3: Reflections and Appendices on David's Kingdom (chapters 21~24)", content: "The grievance of the Gibeonites, David's song of praise, David's mighty men, the sin of the census and the altar at Araunah's threshing floor" }
    ],
    mapType: "david_kingdom",
    youtubeQuery: "에스라하우스 사무엘하 노우호",
    quizzes: [
      {
        q: "In 2 Samuel 7, when David wanted to build the temple, God instead promised to establish David's house and throne forever. What is this promise called?",
        options: ["The Sinai covenant", "The Abrahamic covenant", "The Davidic covenant", "The rainbow covenant"],
        ans: 2,
        exp: "The Davidic covenant (2 Samuel 7) is the key covenant foreshadowing that the Messiah would come as David's descendant and set up an everlasting kingdom."
      }
    ]
  },
  {
    id: 11,
    name: "1 Kings",
    engName: "1 Kings",
    abbr: "1 Kgs",
    testament: "OT",
    category: "History",
    chronologicalOrder: 13,
    chapters: 22,
    author: "Jeremiah (presumed)",
    date: "c. B.C. 560 ~ 550 (Babylonian Exile)",
    keyVerse: "For it came to pass, when Solomon was old, that his wives turned away his heart after other gods: and his heart was not perfect with the LORD his God, as was the heart of David his father. (1 Kgs 11:4)",
    theme: "Solomon's building of the temple and his glory, the division of the kingdom because of idolatry, Elijah's ministry",
    summary: "With King Solomon's wisdom and the completion of Solomon's temple, Israel reaches its height of prosperity (chapters 1-10). But through political marriages with foreign women, high places and idols come in, and after Solomon's death the kingdom splits in two: Judah in the south (Rehoboam) and Israel in the north (Jeroboam) (chapters 11-14). The book then covers the spiritual battle of the prophet Elijah, who defeated Ahab, the worst tyrant of the northern kingdom, and 850 prophets of Baal (chapters 17-22).",
    ezraPerspective: "When studying 1 Kings, Pastor Woo-ho Noh solemnly warns of \"the tragedy that one moment of a leader's corruption brings on a whole nation.\" Jeroboam's golden calf altars at Bethel and Dan became \"the way of Jeroboam,\" followed by every one of the 19 kings of northern Israel. And he insists that Elijah's cry on Mount Carmel, \"How long halt ye between two opinions?\", is a warning to us today as well.",
    structure: [
      { part: "Part 1: Solomon's Glory and the Building of the Temple (chapters 1~10)", content: "Putting down Adonijah's rebellion, the thousand burnt offerings at Gibeon and wisdom, building the temple and the palace, the visit of the Queen of Sheba" },
      { part: "Part 2: Solomon's Fall and the Division of the Kingdom (chapters 11~14)", content: "Idolatry, the prophet Ahijah's prophecy of the torn garment, Rehoboam's pride and the split of northern Israel (Jeroboam)" },
      { part: "Part 3: The Early History of the Divided Kingdom (chapters 15~16)", content: "The succession of kings in north and south, the start of the Omri dynasty and the move of the capital to Samaria" },
      { part: "Part 4: King Ahab and the Prophet Elijah (chapters 17~22)", content: "The brook Cherith and the widow of Zarephath, the contest of fire on Mount Carmel, the still small voice at Horeb, the seizure of Naboth's vineyard, the prophet Micaiah's prophecy and Ahab's end" }
    ],
    mapType: "divided_kingdom",
    youtubeQuery: "에스라하우스 열왕기상 노우호",
    quizzes: [
      {
        q: "Jeroboam, the first king of northern Israel, set up golden calves to stop the people from going down to the temple in Jerusalem. In which two places?",
        options: ["Samaria and Jericho", "Bethel and Dan", "Shechem and Hebron", "Shiloh and Gilgal"],
        ans: 1,
        exp: "Jeroboam made golden calf shrines at Bethel, on northern Israel's southern border, and at Dan, in the far north, and led the people into idolatry."
      }
    ]
  },
  {
    id: 12,
    name: "2 Kings",
    engName: "2 Kings",
    abbr: "2 Kgs",
    testament: "OT",
    category: "History",
    chronologicalOrder: 15,
    chapters: 25,
    author: "Jeremiah (presumed)",
    date: "c. B.C. 560 ~ 550",
    keyVerse: "Until the LORD removed Israel out of his sight, as he had said by all his servants the prophets. So was Israel carried away out of their own land to Assyria unto this day. (2 Kgs 17:23)",
    theme: "Elisha's ministry, the fall of northern Israel (B.C. 722) and the fall of southern Judah (B.C. 586)",
    summary: "After Elijah's ascension and Elisha's ministry with a double portion of the spirit (chapters 1-8), and Jehu's purge of the house of Omri (chapters 9-10), northern Israel, which kept ignoring the prophets' warnings, is destroyed by Assyria (chapter 17). Southern Judah blazes up for a while through the religious reforms of Hezekiah and Josiah, but it ends in tragedy: Nebuchadnezzar of Babylon burns the temple in Jerusalem and the people are carried away captive (chapter 25).",
    ezraPerspective: "This is the most dynamic part of Pastor Woo-ho Noh's Bible course. He stresses that our eyes are opened to the Bible only when we read the many written prophetic books (Hosea, Amos, Isaiah, Micah, Nahum, Habakkuk, Zephaniah, Jeremiah) slotted into the history of 2 Kings in chronological order. In 2 Kings we meet God's aching heart: why He had no choice but to destroy the nation of His beloved chosen people.",
    structure: [
      { part: "Part 1: Elisha's Miracles and Ministry (chapters 1~8)", content: "Elijah's ascension, the Shunammite woman, the healing of General Naaman's leprosy, the horses and chariots of fire at Dothan" },
      { part: "Part 2: Jehu's Purge and the Dynasties of North and South (chapters 9~16)", content: "Judgment on Jezebel and the house of Ahab, Athaliah's usurpation and Joash's enthronement, the prosperity of Jeroboam II" },
      { part: "Part 3: The Fall of Northern Israel and Its Causes (chapter 17)", content: "The fall of Samaria under King Hoshea (B.C. 722), Assyria's policy of mixing peoples and the origin of the Samaritans" },
      { part: "Part 4: The Last Days and Fall of Southern Judah (chapters 18~25)", content: "Hezekiah's prayer and the defeat of 185,000, Manasseh's evil deeds, Josiah's finding of the book of the Law in the temple and his reforms, the fall of Jerusalem and destruction of the temple under King Zedekiah (B.C. 586)" }
    ],
    mapType: "fall_of_kingdoms",
    youtubeQuery: "에스라하우스 열왕기하 노우호",
    quizzes: [
      {
        q: "Who was the commander of the Aramean army who was healed of leprosy by washing seven times in the Jordan at the word of the prophet Elisha?",
        options: ["Hazael", "Naaman", "Ben-hadad", "Sennacherib"],
        ans: 1,
        exp: "General Naaman humbled his pride and washed seven times in the Jordan, receiving the grace of flesh made clean like that of a little child."
      }
    ]
  },
  {
    id: 13,
    name: "1 Chronicles",
    engName: "1 Chronicles",
    abbr: "1 Chr",
    testament: "OT",
    category: "History",
    chronologicalOrder: 30,
    chapters: 29,
    author: "Ezra the scribe (presumed)",
    date: "c. B.C. 450 ~ 400 (after the Return from Exile)",
    keyVerse: "And Jabez called on the God of Israel, saying, Oh that thou wouldest bless me indeed, and enlarge my coast, and that thine hand might be with me, and that thou wouldest keep me from evil, that it may not grieve me! And God granted him that which he requested. (1 Chr 4:10)",
    theme: "The genealogy of redemptive history from Adam to David, preparation for building the temple, and the establishment of the order of worship",
    summary: "This book was written to the Jews who came home after 70 years of exile in Babylon, to remind them who their spiritual roots are and how precious the Davidic dynasty and the tradition of temple worship are. It focuses on the vast genealogies of chapters 1-9 and on David's preparation for building the temple and his organizing of the choirs and Levitical duties (chapters 10-29).",
    ezraPerspective: "The Ezra Bible Course interprets Chronicles as \"the pastoral tears of Ezra the scribe, who raised up again, through the Word and worship, a despairing diaspora community that had returned from exile.\" If Kings wrote \"why we were destroyed (a prophet's view of rebuke),\" Chronicles deals with \"how we will be restored as God's covenant people (a priest's view of restoring worship).\"",
    structure: [
      { part: "Part 1: Genealogies from Adam to the Return from Exile (chapters 1~9)", content: "The genealogy of humankind, the genealogies of the twelve tribes and of David's house, the prayer of Jabez (chapter 4), those who returned to live in Jerusalem" },
      { part: "Part 2: The Founding of David's Kingdom (chapters 10~12)", content: "Saul's death, the capture of the stronghold of Zion, the list of mighty men who helped David" },
      { part: "Part 3: Bringing Up the Ark and the Davidic Covenant (chapters 13~17)", content: "The house of Obed-edom, placing the ark on Mount Zion and Asaph's psalm of thanks, David's wish to build the temple and the covenant" },
      { part: "Part 4: Preparing to Build the Temple and Organizing the Duties (chapters 18~29)", content: "Buying the threshing floor on Mount Moriah, stockpiling building materials for the temple, organizing priests, Levites, and choirs into 24 divisions, David's last words and Solomon's enthronement" }
    ],
    mapType: "post_exile",
    youtubeQuery: "에스라하우스 역대상 노우호",
    quizzes: [
      {
        q: "Compared with 1 and 2 Kings, what is the most distinctive purpose and viewpoint of 1 and 2 Chronicles?",
        options: ["Praising the kings' political diplomacy", "Restoring temple worship and Davidic-covenant identity for those who returned from Babylonian Exile", "Recording the heroic tales of the kings of northern Israel", "Proving the philosophical superiority of foreign religions"],
        ans: 1,
        exp: "Chronicles was written to give the people who returned from exile a temple-centered faith and an assurance that the Davidic covenant endures."
      }
    ]
  },
  {
    id: 14,
    name: "2 Chronicles",
    engName: "2 Chronicles",
    abbr: "2 Chr",
    testament: "OT",
    category: "History",
    chronologicalOrder: 31,
    chapters: 36,
    author: "Ezra the scribe (presumed)",
    date: "c. B.C. 450 ~ 400",
    keyVerse: "If my people, which are called by my name, shall humble themselves, and pray, and seek my face, and turn from their wicked ways; then will I hear from heaven, and will forgive their sin, and will heal their land. (2 Chr 7:14)",
    theme: "The dedication of Solomon's temple, the temple reforms of Judah's kings, and Cyrus's decree of return",
    summary: "It covers Solomon's building of the temple and his glory (chapters 1-9), and then, leaving out the history of northern Israel after the division, focuses only on the temple and worship reforms of the kings of southern Judah, the Davidic dynasty. It highlights the revivals under kings who feared God, such as Asa, Jehoshaphat, Hezekiah, and Josiah, and at the end opens a door of hope with the Persian king Cyrus's decree to rebuild the temple (chapter 36).",
    ezraPerspective: "Pastor Woo-ho Noh counts 2 Chronicles 7:14 — \"humble themselves, and pray, and seek my face... and will heal their land\" — as the heart of 2 Chronicles. He also points out that the last verses of 2 Chronicles continue word for word, without a single difference, into Ezra 1:1-3, showing that the writer of 2 Chronicles is Ezra and letting us see God's unbroken plan of restoration.",
    structure: [
      { part: "Part 1: Solomon's Reign and the Dedication of the Temple (chapters 1~9)", content: "The thousand burnt offerings and wisdom, seven years of temple construction, placing the ark of the covenant and the dedication prayer answered by fire, Solomon's wealth and glory" },
      { part: "Part 2: The Temple-Centered History of Judah's Kings (chapters 10~28)", content: "Rehoboam and the division, Asa's reforms, Jehoshaphat's victory with the choir leading the army, Joash's repair of the temple, Uzziah's pride" },
      { part: "Part 3: The Religious Reforms of Hezekiah and Josiah (chapters 29~35)", content: "Hezekiah's cleansing of the temple and restoration of the Passover, the defeat of Assyria, Josiah's finding of the book of the Law and his sweeping reforms" },
      { part: "Part 4: The Fall of Judah and Cyrus's Decree (chapter 36)", content: "Babylon's third invasion and the destruction of the temple, the land's 70 years of sabbath rest, the decree of return by Cyrus king of Persia" }
    ],
    mapType: "temple_rebuild",
    youtubeQuery: "에스라하우스 역대하 노우호",
    quizzes: [
      {
        q: "In 2 Chronicles 20, when the allied armies of Moab and Ammon attacked, which king of Judah put singers (a choir) in front of the army and won a great victory without fighting, simply by praising God?",
        options: ["Rehoboam", "Jehoshaphat", "Ahab", "Manasseh"],
        ans: 1,
        exp: "King Jehoshaphat organized a choir of Levites before the enemy and had them sing, \"Praise the LORD; for his mercy endureth for ever,\" and he won."
      }
    ]
  },
  {
    id: 15,
    name: "Ezra",
    engName: "Ezra",
    abbr: "Ezra",
    testament: "OT",
    category: "History",
    chronologicalOrder: 32,
    chapters: 10,
    author: "Ezra the scribe",
    date: "c. B.C. 440",
    keyVerse: "For Ezra had prepared his heart to seek the law of the LORD, and to do it, and to teach in Israel statutes and judgments. (Ezra 7:10)",
    theme: "Zerubbabel's rebuilding of the temple (first return) and Ezra's revival and reform through the Word (second return)",
    summary: "When the 70 years of Babylonian Exile were complete, by Cyrus's decree the first group of returnees, led by Zerubbabel and Jeshua, rebuilt the temple in Jerusalem (chapters 1-6). About 80 years later, under King Artaxerxes, Ezra, a scribe and priest, led the second return, taught the people God's Law, and carried out a thorough reform of spiritual holiness, breaking off mixed marriages with foreign women (chapters 7-10).",
    ezraPerspective: "This book is the very origin of the name of Pastor Woo-ho Noh's \"Ezra House.\" Ezra the scribe gave his whole life to studying the Scriptures, doing them, and teaching them to the people — the original pioneer of the Bible course. Ezra's spirit, that what rebuilds a broken people is not buildings but only the Word of God, is the motto of Ezra House.",
    structure: [
      { part: "Part 1: The First Return from Exile and the Rebuilding of the Temple (chapters 1~6)", content: "Cyrus's decree and the list of returnees, rebuilding the altar and laying the foundation, a 16-year halt due to Samaritan opposition, encouragement from Haggai and Zechariah, the temple completed (B.C. 516)" },
      { part: "Part 2: The Second Return and Ezra's Spiritual Reform (chapters 7~10)", content: "Artaxerxes' letter and Ezra's resolve, fasting and prayer by the river Ahava, facing the problem of mixed marriages, the people's repentance and renewal" }
    ],
    mapType: "exile_return",
    youtubeQuery: "에스라하우스 에스라 노우호",
    quizzes: [
      {
        q: "According to Ezra 7:10, what three-part rule of action did Ezra the scribe set his heart on for his whole life?",
        options: ["Seizing power, collecting taxes, expanding territory", "To study the Law, to do it, and to teach it", "Fasting, praying, and seeing visions", "Building buildings, training soldiers, and conquering"],
        ans: 1,
        exp: "Ezra firmly resolved to study, practice, and teach the Law of the LORD."
      }
    ]
  },
  {
    id: 16,
    name: "Nehemiah",
    engName: "Nehemiah",
    abbr: "Neh",
    testament: "OT",
    category: "History",
    chronologicalOrder: 34,
    chapters: 13,
    author: "Nehemiah",
    date: "c. B.C. 430",
    keyVerse: "So the wall was finished in the twenty and fifth day of the month Elul, in fifty and two days. And it came to pass, that when all our enemies heard thereof, and all the heathen that were about us saw these things, they were much cast down in their own eyes: for they perceived that this work was wrought of our God. (Neh 6:15-16)",
    theme: "Rebuilding Jerusalem's walls in 52 days (third return) and the Bible gathering in the square before the Water Gate",
    summary: "Nehemiah, cupbearer in the Persian palace at Shushan, hears that his homeland lies in ruins and prays with tears. He then goes as governor and, despite the relentless opposition of Sanballat and Tobiah, with a weapon in one hand and a tool in the other, finishes the wall in 52 days (chapters 1-7). Then, in the square before the Water Gate, he invites Ezra the scribe, and a great revival of Bible teaching takes place at the Feast of Tabernacles, with all the people weeping and repenting (chapters 8-13).",
    ezraPerspective: "Pastor Woo-ho Noh presents the \"Bible course in the square before the Water Gate\" in Nehemiah 8 as the most brilliant model of a Bible read-through gathering in Old Testament history. Men and women, old and young — all who could understand — stood from dawn until noon listening closely to God's Word, while the Levites explained its meaning so they understood, and all the people wept and gave thanks. He insists that this moving scene must be restored in today's church.",
    structure: [
      { part: "Part 1: Nehemiah's Return and the Rebuilding of the Wall (chapters 1~7)", content: "Nehemiah's intercession, his arrival as governor and night inspection, the enemies' opposition and the guard, the wall completed in 52 days" },
      { part: "Part 2: Ezra's Bible Course in the Square before the Water Gate (chapters 8~10)", content: "Reading of the Word and the people's weeping, keeping the Feast of Tabernacles, the great prayer of confession by the Levites, sealing the covenant document" },
      { part: "Part 3: Settling Jerusalem and Further Reforms (chapters 11~13)", content: "Casting lots for residents of the city, the dedication of the wall, managing the tithes, keeping the sabbath, rooting out foreign marriages" }
    ],
    mapType: "jerusalem_wall",
    youtubeQuery: "에스라하우스 느헤미야 노우호",
    quizzes: [
      {
        q: "Under Nehemiah's leadership, in how many days was the wall of Jerusalem miraculously completed despite the enemies' opposition?",
        options: ["40 days", "52 days", "70 days", "120 days"],
        ans: 1,
        exp: "As recorded in Nehemiah 6:15, the wall was miraculously completed in 52 days, and the enemies trembled with fear."
      }
    ]
  },
  {
    id: 17,
    name: "Esther",
    engName: "Esther",
    abbr: "E",
    testament: "OT",
    category: "History",
    chronologicalOrder: 33,
    chapters: 10,
    author: "Mordecai (presumed)",
    date: "c. B.C. 470 (King Ahasuerus of Persia)",
    keyVerse: "For if thou altogether holdest thy peace at this time, then shall there enlargement and deliverance arise to the Jews from another place; but thou and thy father's house shall be destroyed: and who knoweth whether thou art come to the kingdom for such a time as this? (Esth 4:14)",
    theme: "God's invisible providence, the defeat of Haman's plot, and the deliverance of Purim",
    summary: "When the Jews remaining in the Persian Empire face being wiped out overnight through the plot of the wicked chief minister Haman, Esther, who has become queen, fasts and prays — \"if I perish, I perish\" — goes before the king, saves her people, and Haman is executed. The book tells the origin of \"Purim,\" the feast that celebrates the Jews' victory.",
    ezraPerspective: "The Ezra course points out the remarkable feature that the word \"God\" never appears even once in Esther. Though God's name is not mentioned directly, it is the book that most dramatically shows God's providence ruling history from behind the scenes — such as making the king unable to sleep at night so that he has the chronicles read — and the faith of kairos (God's timing).",
    structure: [
      { part: "Part 1: Esther Becomes Queen (chapters 1~2)", content: "Queen Vashti deposed, Esther chosen, Mordecai exposes a plot against the king" },
      { part: "Part 2: Haman's Plot to Wipe Out the Jews (chapters 3~4)", content: "Mordecai refuses to bow to Haman, the decree to massacre the Jews, the resolve to fast: \"if I perish, I perish\"" },
      { part: "Part 3: A Reversal of Victory and Haman's Fall (chapters 5~8)", content: "Esther's two banquet invitations, the king's sleepless night and Mordecai's reward, Haman's execution, a new decree of deliverance" },
      { part: "Part 4: Destroying the Enemies and Establishing Purim (chapters 9~10)", content: "The Jews' victory, Purim proclaimed as a feast, Mordecai promoted to chief minister" }
    ],
    mapType: "persia_susa",
    youtubeQuery: "에스라하우스 에스더 노우호",
    quizzes: [
      {
        q: "In Esther, what feast do the Jews keep to remember the day they escaped from their enemies and their sorrow was turned into joy?",
        options: ["Passover", "Pentecost", "Purim", "Feast of Dedication"],
        ans: 2,
        exp: "\"Purim\" comes from \"pur,\" meaning casting lots, and remembers the day Haman's plot of massacre was reversed."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // [구약 39권] - 3. 시가서(지혜서) 5권
  // --------------------------------------------------------------------------
  {
    id: 18,
    name: "Job",
    engName: "Job",
    abbr: "Job",
    testament: "OT",
    category: "Poetry & Wisdom",
    chronologicalOrder: 11,
    chapters: 42,
    author: "Unknown (Moses or Solomon presumed)",
    date: "Set in the patriarchal age (c. B.C. 2000 ~ 1800)",
    keyVerse: "But he knoweth the way that I take: when he hath tried me, I shall come forth as gold. (Job 23:10)",
    theme: "The undeserved suffering of the righteous and God's sovereign wisdom, a mystery beyond cause and effect",
    summary: "Job, a righteous man of the East, is tested by Satan and suffers extreme loss, losing his children, wealth, and health overnight. Through fierce debates with three friends (Eliphaz, Bildad, Zophar), the narrow human doctrine of cause-and-effect retribution is broken. After the speeches of young Elihu, and before the cosmic wisdom of creation shown by God, who comes in the storm, Job truly repents and receives a double restoration.",
    ezraPerspective: "Pastor Woo-ho Noh regards Job as \"the oldest literature in the Bible and a treasury of mysterious wisdom.\" Going beyond the mechanical cause-and-effect idea that suffering comes only because of sin, it teaches the reality of the unseen spiritual world and a mature faith that trusts God even in trouble we cannot understand.",
    structure: [
      { part: "Part 1: The Heavenly Council and Job's Suffering (chapters 1~2)", content: "Job's godliness, Satan's accusation and the test permitted, the loss of property and children, boils from the sole of his foot to the crown of his head" },
      { part: "Part 2: Three Rounds of Debate with the Three Friends (chapters 3~31)", content: "Job's lament, the friends' cause-and-effect condemnation, Job's claim of innocence and his plea" },
      { part: "Part 3: Elihu's Speeches (chapters 32~37)", content: "Anger at the friends and at Job, a defense of God's teaching through suffering and of His sovereignty" },
      { part: "Part 4: God's Questions from the Storm and Job's Restoration (chapters 38~42)", content: "Questions about the creation of all things, Job's repentance (\"now mine eye seeth thee\"), prayer for his friends and a double blessing" }
    ],
    mapType: "land_of_uz",
    youtubeQuery: "에스라하우스 욥기 노우호",
    quizzes: [
      {
        q: "In the extreme pain of losing everything, what famous praise did Job confess to God?",
        options: ["The LORD gave, and the LORD hath taken away; blessed be the name of the LORD", "Why hast thou forsaken me?", "Avenge me of my enemies", "Now take my life"],
        ans: 0,
        exp: "This is Job's confession in Job 1:21: he did not sin with his lips but praised the sovereign God."
      }
    ]
  },
  {
    id: 19,
    name: "Psalms",
    engName: "Psalms",
    abbr: "Ps",
    testament: "OT",
    category: "Poetry & Wisdom",
    chronologicalOrder: 12,
    chapters: 150,
    author: "David (73 psalms), Asaph (12), the sons of Korah, Moses, Solomon, and others",
    date: "c. B.C. 1400 ~ 450 (spanning about 1,000 years)",
    keyVerse: "Blessed is the man that walketh not in the counsel of the ungodly, nor standeth in the way of sinners, nor sitteth in the seat of the scornful. But his delight is in the law of the LORD; and in his law doth he meditate day and night. (Ps 1:1-2)",
    theme: "Praise and prayer ringing out in every moment of human joy and sorrow, songs of messianic prophecy",
    summary: "The hymnbook and prayer book of the Old Testament saints. It contains laments, thanksgiving psalms, praise psalms, royal psalms, wisdom psalms, imprecatory psalms, and more, arranged in five books (Psalms 1-41, 42-72, 73-89, 90-106, 107-150 — reflecting the structure of the Pentateuch). From tears in suffering to a mighty hallelujah chorus to God on His throne, it strikes every string of the human soul.",
    ezraPerspective: "Pastor Woo-ho Noh stresses that the Psalms must always be read paired with their \"historical background (1 and 2 Samuel, Kings).\" When you know the background — such as the psalm David wrote while hiding from Saul in the cave of Adullam (Psalm 57), or the psalm in which he repented with bone-deep tears before Nathan's rebuke after his sin with Bathsheba (Psalm 51) — the Psalms move you a hundred times more.",
    structure: [
      { part: "Book 1 (Psalms 1~41, corresponds to Genesis)", content: "The blessed man, David's early trials and prayers, \"The LORD is my shepherd\" (Psalm 23)" },
      { part: "Book 2 (Psalms 42~72, corresponds to Exodus)", content: "\"As the hart panteth after the water brooks\" (Psalm 42), the psalm of repentance (Psalm 51), a psalm of Solomon (Psalm 72)" },
      { part: "Book 3 (Psalms 73~89, corresponds to Leviticus)", content: "Psalms of Asaph, struggles of faith centered on the sanctuary, and overcoming them" },
      { part: "Book 4 (Psalms 90~106, corresponds to Numbers)", content: "The prayer of Moses (Psalm 90), praise for the LORD's kingship" },
      { part: "Book 5 (Psalms 107~150, corresponds to Deuteronomy)", content: "Praise of the Word (Psalm 119), the songs of ascents, the final hallelujah chorus of Psalms 146~150" }
    ],
    mapType: "jerusalem_temple",
    youtubeQuery: "에스라하우스 시편 노우호",
    quizzes: [
      {
        q: "Of the 150 psalms, which is the longest and praises God's Word (law, precepts, testimonies, commandments) in alphabetical order (an acrostic)?",
        options: ["Psalm 23", "Psalm 100", "Psalm 119", "Psalm 150"],
        ans: 2,
        exp: "Psalm 119, with 176 verses in all, is the longest chapter in the Bible and is full of praise that longs for God's Word."
      }
    ]
  },
  {
    id: 20,
    name: "Proverbs",
    engName: "Proverbs",
    abbr: "Prov",
    testament: "OT",
    category: "Poetry & Wisdom",
    chronologicalOrder: 14,
    chapters: 31,
    author: "Solomon, Agur, the mother of Lemuel",
    date: "c. B.C. 950 ~ 700",
    keyVerse: "The fear of the LORD is the beginning of knowledge: but fools despise wisdom and instruction. (Prov 1:7)",
    theme: "The fear of the LORD as true wisdom, holy ethics and virtues for everyday life",
    summary: "A practical book of wisdom teaching how the wisdom of fearing God should bear fruit in concrete actions in human life (family, relationships, speech, money, government, and more). It has the call of wisdom in chapters 1-9, short proverbs in chapters 10-31, and ends grandly with the song of the virtuous woman in the final chapter 31.",
    ezraPerspective: "The Ezra course presents Proverbs as \"not just a collection of worldly tips for getting ahead, but the constitution for daily life by which the covenant people live holy, set-apart lives on this earth.\" It insists that true wisdom is acknowledging God's sovereignty in every area of life — each word from our lips, honesty in handling money, watchfulness against laziness.",
    structure: [
      { part: "Part 1: Wise Counsel for the Young (chapters 1~9)", content: "The fear of the LORD as the beginning of knowledge, warnings against the enticements of the wicked, the excellence and invitation of wisdom" },
      { part: "Part 2: The First Collection of Solomon's Proverbs (10~22:16)", content: "Contrasts between the righteous and the wicked, the blessing of honest words and faithful work" },
      { part: "Part 3: The Thirty Sayings of the Wise (22:17~chapter 24)", content: "Do not oppress the poor, do not get drunk" },
      { part: "Part 4: Solomon's Proverbs Edited by Hezekiah's Men (chapters 25~29)", content: "Conduct before the king, parables of the fool and the sluggard" },
      { part: "Part 5: The Proverbs of Agur and the Teaching of King Lemuel (chapters 30~31)", content: "Agur's humble prayer, the instruction of Lemuel's mother, the song of the virtuous woman" }
    ],
    mapType: "palestine_daily",
    youtubeQuery: "에스라하우스 잠언 노우호",
    quizzes: [
      {
        q: "In Proverbs 30, of the two prayer requests Agur made to God, which one concerns wealth?",
        options: ["Make me the richest person in the world", "Give me neither poverty nor riches; feed me with food convenient for me", "Let me seize all my enemies' wealth", "Let gold pour down on me without working"],
        ans: 1,
        exp: "It is the balanced prayer of Proverbs 30:8-9: \"Lest I be full, and deny thee... or lest I be poor, and steal, and take the name of my God in vain.\""
      }
    ]
  },
  {
    id: 21,
    name: "Ecclesiastes",
    engName: "Ecclesiastes",
    abbr: "Eccl",
    testament: "OT",
    category: "Poetry & Wisdom",
    chronologicalOrder: 16,
    chapters: 12,
    author: "Solomon (the Preacher, Qoheleth)",
    date: "c. B.C. 935 (Solomon's last years)",
    keyVerse: "Let us hear the conclusion of the whole matter: Fear God, and keep his commandments: for this is the whole duty of man. (Eccl 12:13)",
    theme: "The vanity of everything under the sun, the emptiness of life without God, and restoring our true duty",
    summary: "A confession of repentance written in the twilight of life by King Solomon, who had enjoyed all the world's wealth, glory, pleasure, knowledge, and power. It declares that all the labor done \"under the sun (human-centered)\" is vain, like chasing the wind, but that the duty of man is to look \"above the sun (God-centered)\": to remember the Creator, to enjoy with gladness the life given now, and to prepare for judgment.",
    ezraPerspective: "Pastor Woo-ho Noh earnestly urges us not to misunderstand Ecclesiastes as a pessimistic book. Solomon's cry, \"Vanity of vanities; all is vanity,\" is a paradox showing that the end of worldly desire without God is emptiness, and 12:1, \"Remember now thy Creator in the days of thy youth,\" is a solemn invitation to the gospel.",
    structure: [
      { part: "Part 1: The Vanity of All Labor under the Sun (chapters 1~2)", content: "The weariness of all things, the emptiness of wisdom, pleasure, and great works" },
      { part: "Part 2: A Time for Everything and Human Limits (chapters 3~6)", content: "A season and a time for every matter under heaven, unjust judgment, the fleetingness of greed and riches" },
      { part: "Part 3: Wisdom in Everyday Life (chapters 7~10)", content: "The wisdom of going to the house of mourning, God's providence in days of prosperity and adversity, people who do not know their time" },
      { part: "Part 4: Remember Your Creator and Prepare for Judgment (chapters 11~12)", content: "Cast thy bread upon the waters, remember thy Creator in the days of thy youth, the conclusion of the matter (fear God)" }
    ],
    mapType: "solomon_palace",
    youtubeQuery: "에스라하우스 전도서 노우호",
    quizzes: [
      {
        q: "What does Ecclesiastes 12:13 reveal as \"the whole duty of man\"?",
        options: ["Gaining more and more knowledge", "Enjoying as much pleasure as possible", "Fearing God and keeping His commandments", "Making your name famous in the world"],
        ans: 2,
        exp: "The final conclusion of Ecclesiastes is: \"Fear God, and keep his commandments: for this is the whole duty of man.\""
      }
    ]
  },
  {
    id: 22,
    name: "Song of Songs",
    engName: "Song of Songs",
    abbr: "Song",
    testament: "OT",
    category: "Poetry & Wisdom",
    chronologicalOrder: 17,
    chapters: 8,
    author: "Solomon",
    date: "c. B.C. 960 (early in Solomon's reign)",
    keyVerse: "for love is strong as death; jealousy is cruel as the grave: the coals thereof are coals of fire, which hath a most vehement flame. Many waters cannot quench love, neither can the floods drown it (Song 8:6-7)",
    theme: "The pure love of King Solomon and the Shulammite woman, the union of Christ and the church",
    summary: "The original title is \"Shir Hashirim\" (the Song of Songs, the most beautiful song). It is a lyric poem singing of the passionate yet pure married love between Shulammite, a country girl, and King Solomon. Beyond that, it foreshadows the bridegroom's love with which God loves His people Israel, and the devoted love Jesus Christ pours out on the church, His bride.",
    ezraPerspective: "The Ezra course teaches the Song of Songs as by no means an obscene love poem, but a sacred poem showing, in a fallen world, how holy and beautiful God created sex and married love to be. It leads us to meditate that true human love comes from God's love, which is like a flame and stronger than death.",
    structure: [
      { part: "Part 1: The Beginning of Love and Longing (chapters 1~2)", content: "The Shulammite woman's confession, the king's praise, the rose of Sharon, the invitation of spring when winter is past and flowers bloom" },
      { part: "Part 2: Dreams of Searching for the Bride, and the Wedding (3~5:1)", content: "Longing at night, Solomon's splendid carriage, praise of the bride's beauty, the holy wedding feast" },
      { part: "Part 3: A Passing Conflict and Restoration (5:2~chapter 6)", content: "Hesitation at the door and searching for the bridegroom, a song of the bridegroom's excellence, the union reaffirmed" },
      { part: "Part 4: The Victory of Mature, Everlasting Love (chapters 7~8)", content: "The bride's full beauty, the seal of love, the flame of the LORD stronger than death" }
    ],
    mapType: "shunem_garden",
    youtubeQuery: "에스라하우스 아가 노우호",
    quizzes: [
      {
        q: "In Song of Songs 2:10, what famous invitation of love does the bridegroom give the bride?",
        options: ["Rise up, my love, my fair one, and come away", "Bring me gold and silver", "Shut the city walls tight", "Let us go out to the battlefield"],
        ans: 0,
        exp: "It is the famous invitation of spring: \"Rise up, my love, my fair one, and come away. For, lo, the winter is past, the rain is over and gone; the flowers appear on the earth...\""
      }
    ]
  },

  // --------------------------------------------------------------------------
  // [구약 39권] - 4. 대예언서 5권
  // --------------------------------------------------------------------------
  {
    id: 23,
    name: "Isaiah",
    engName: "Isaiah",
    abbr: "four",
    testament: "OT",
    category: "Major Prophets",
    chronologicalOrder: 18,
    chapters: 66,
    author: "Isaiah",
    date: "c. B.C. 740 ~ 680 (the times of Uzziah, Jotham, Ahaz, and Hezekiah)",
    keyVerse: "But he was wounded for our transgressions, he was bruised for our iniquities: the chastisement of our peace was upon him; and with his stripes we are healed. (Isa 53:5)",
    theme: "Judgment and salvation, the suffering \"Servant of the LORD\" the Messiah, and the hope of a new heaven and a new earth",
    summary: "It is called \"the gospel within the Old Testament.\" Its 66 chapters are like a miniature of the 66 books of the Bible: chapters 1-39 call Judah and the nations to repentance and announce judgment (matching the 39 books of the Old Testament), and chapters 40-66 grandly prophesy restoration from the Babylonian Exile, the Messiah's suffering on the cross (chapter 53), and salvation for the Gentiles and a new heaven and a new earth (matching the 27 books of the New Testament).",
    ezraPerspective: "Through Isaiah 1:18 (\"Come now, and let us reason together... though your sins be as scarlet, they shall be as white as snow\"), Pastor Woo-ho Noh shows that God is not one who simply punishes, but a loving Father who talks with His people, persuades them, and whose heart is torn for them. The suffering Servant of Isaiah 53 is the crown of the Bible, prophesying the cross of Jesus Christ 700 years beforehand as if taking a photograph.",
    structure: [
      { part: "Part 1: The Sins and Judgment of Judah and Israel (chapters 1~12)", content: "\"Hear, O heavens, and give ear, O earth,\" Isaiah's call vision (chapter 6), the Immanuel prophecy (chapter 7), the Prince of Peace (chapter 9)" },
      { part: "Part 2: Oracles of Judgment on the Nations (chapters 13~27)", content: "Judgment on Babylon, Assyria, Moab, and Egypt; Isaiah's \"little apocalypse\" (chapters 24-27)" },
      { part: "Part 3: The Assyrian Invasion and the Story of Hezekiah (chapters 28~39)", content: "Warning against relying on Egypt, Sennacherib's taunts and Hezekiah's victorious prayer, his life extended and his mistake with the Babylonian envoys" },
      { part: "Part 4: Comfort and Salvation, the Suffering Servant Messiah (chapters 40~55)", content: "\"Comfort ye my people\" (chapter 40), the prophecy of Cyrus's decree (chapter 45), the Servant Songs and the atoning cross (chapter 53)" },
      { part: "Part 5: Future Glory and a New Heaven and New Earth (chapters 56~66)", content: "\"Arise, shine\" (chapter 60), proclaiming the acceptable year of the LORD (chapter 61), the creation of a new heaven and a new earth (chapters 65-66)" }
    ],
    mapType: "assyria_jerusalem",
    youtubeQuery: "에스라하우스 이사야 노우호",
    quizzes: [
      {
        q: "In Isaiah 7:14, what is the name of the son to be conceived and born of a virgin, a name meaning \"God is with us\"?",
        options: ["Maher-shalal-hash-baz", "Immanuel", "Zechariah", "Eliakim"],
        ans: 1,
        exp: "\"Immanuel\" is the prophecy of the virgin birth and means that God is with us; it is fulfilled in Jesus Christ in Matthew 1."
      }
    ]
  },
  {
    id: 24,
    name: "Jeremiah",
    engName: "Jeremiah",
    abbr: "Jer",
    testament: "OT",
    category: "Major Prophets",
    chronologicalOrder: 21,
    chapters: 52,
    author: "Jeremiah (scribe: Baruch)",
    date: "c. B.C. 627 ~ 580 (about 40 years, from Josiah to the fall of Judah)",
    keyVerse: "Behold, the days come, saith the LORD, that I will make a new covenant with the house of Israel, and with the house of Judah... I will put my law in their inward parts, and write it in their hearts; and will be their God, and they shall be my people. (Jer 31:31, 33)",
    theme: "Judah's apostasy and warnings of its fall, tearful pleading, 70 years of Babylonian Exile, and the \"new covenant\"",
    summary: "This is the record of Jeremiah, \"the weeping prophet,\" who lived through the final tragedy of the kingdom of Judah with his whole body. He proclaimed to a people who would not turn back that Jerusalem would fall and that they should surrender to Babylon. Treated as a traitor, thrown into a pit, and locked in prison, he still proclaimed the hope of return after 70 years of exile and of the \"new covenant\" (chapter 31) that the Holy Spirit would write on human hearts.",
    ezraPerspective: "This is the book that brings tears to the listeners' eyes more than any other in Pastor Woo-ho Noh's Bible course. It helps us discover the heart of Jeremiah, who alone delivered God's true tears of blood among false prophets crying \"peace,\" and the Father's true heart in the midst of discipline: \"For I know the thoughts that I think toward you, saith the LORD, thoughts of peace, and not of evil, to give you an expected end\" (Jer 29:11).",
    structure: [
      { part: "Part 1: Jeremiah's Call and Early Ministry (chapters 1~10)", content: "Chosen from the womb, visions of the almond rod and the boiling pot, two evils (forsaking the fountain of living waters, digging broken cisterns), the temple sermon (chapter 7)" },
      { part: "Part 2: Persecution and Prophecies in Symbolic Acts (chapters 11~20)", content: "The parable of the linen girdle, the potter's clay, the broken jar, imprisoned in a pit and Jeremiah's laments" },
      { part: "Part 3: Judgment on Judah's Kings and the 70-Year Sentence (chapters 21~29)", content: "Confrontation with the false prophet Hananiah, the letter fixing the 70 years of Babylonian Exile" },
      { part: "Part 4: The Book of Comfort and the New Covenant (chapters 30~33)", content: "The joy of the day of return, Rachel weeping and comforted, the new covenant proclaimed (chapter 31), buying a field at Anathoth (assurance of restoration)" },
      { part: "Part 5: The Fall of Jerusalem and the Final Ministry (chapters 34~52)", content: "King Jehoiakim burns the scroll, Jerusalem falls, the people taken to Egypt and Jeremiah's martyr-like cry" }
    ],
    mapType: "jeremiah_path",
    youtubeQuery: "에스라하우스 예레미야 노우호",
    quizzes: [
      {
        q: "In Jeremiah 2:13, what did God point out as the two great evils committed by the people of Israel?",
        options: ["Making the golden calf and building the Tower of Babel", "Forsaking the LORD, the fountain of living waters, and digging broken cisterns that can hold no water", "Keeping back the tithe and breaking the sabbath", "Not offering sacrifices and trading with foreigners"],
        ans: 1,
        exp: "God lamented: \"For my people have committed two evils; they have forsaken me the fountain of living waters, and hewed them out cisterns, broken cisterns, that can hold no water.\""
      }
    ]
  },
  {
    id: 25,
    name: "Lamentations",
    engName: "Lamentations",
    abbr: "Lam",
    testament: "OT",
    category: "Major Prophets",
    chronologicalOrder: 22,
    chapters: 5,
    author: "Jeremiah",
    date: "c. B.C. 586 (right after the fall of Jerusalem)",
    keyVerse: "It is of the LORD's mercies that we are not consumed, because his compassions fail not. They are new every morning: great is thy faithfulness. (Lam 3:22-23)",
    theme: "A bitter lament over the tragedy of burned-out Zion, and God's faithfulness found in its ashes",
    summary: "These are five funeral songs written by Jeremiah, who saw with his own eyes the horrible scene of Jerusalem falling to the Babylonian army: the temple burned, the walls broken down, and the people cruelly slaughtered and carried off. In the depth of sorrow, right at the center (chapter 3), he holds on to \"the LORD's mercy and faithfulness, new every morning,\" and pleads for restoration.",
    ezraPerspective: "Pastor Woo-ho Noh explains Lamentations as \"the bitter cup of ruin that human sin brings, and the faith of saints who do not let go of the cord of prayer even at the bottom of despair.\" It is a literary masterpiece that carefully lifts up sorrow in the order of the 22 letters of the Hebrew alphabet (acrostic form), and a book of tears that burrows into God's embrace even while being struck by His rod.",
    structure: [
      { part: "Lament 1: Jerusalem Like a Widow Sitting Desolate and Alone (chapter 1)", content: "The desolation of Zion and the betrayal of allies, admitting sin" },
      { part: "Lament 2: Walls Torn Down by the Lord's Fierce Anger (chapter 2)", content: "The destruction of the temple and the altar, the horror of children dying of hunger" },
      { part: "Lament 3: A Light of Hope in Suffering (chapter 3)", content: "The pain of one struck by the rod of wrath, the Lord's faithfulness new every morning (verses 22-23), waiting in silence for salvation" },
      { part: "Lament 4: Tarnished Gold and Jewels Turned to Ashes (chapter 4)", content: "The miserable fall of the nobles, a famine so extreme that mothers boiled their own children" },
      { part: "Lament 5: Turn Us unto Thee, O LORD (chapter 5)", content: "The plea of the afflicted, \"Turn thou us unto thee, O LORD, and we shall be turned\"" }
    ],
    mapType: "ruined_jerusalem",
    youtubeQuery: "에스라하우스 예레미야애가 노우호",
    quizzes: [
      {
        q: "In Lamentations 3:22-23, what is confessed as the only reason we are not consumed, even in the ashes of despair?",
        options: ["The courage of the army", "Our fine morals", "The LORD's endless mercy and compassion", "Rescue by powerful neighboring nations"],
        ans: 2,
        exp: "It is the moving confession: \"It is of the LORD's mercies that we are not consumed, because his compassions fail not. They are new every morning: great is thy faithfulness.\""
      }
    ]
  },
  {
    id: 26,
    name: "Ezekiel",
    engName: "Ezekiel",
    abbr: "Ezek",
    testament: "OT",
    category: "Major Prophets",
    chronologicalOrder: 24,
    chapters: 48,
    author: "Ezekiel",
    date: "c. B.C. 593 ~ 571 (by the river Chebar in Babylon)",
    keyVerse: "A new heart also will I give you, and a new spirit will I put within you: and I will take away the stony heart out of your flesh, and I will give you an heart of flesh. And I will put my spirit within you, and cause you to walk in my statutes (Ezek 36:26-27)",
    theme: "The departing glory of the LORD, the dry bones in the valley raised to life, and the new temple to be restored",
    summary: "Ezekiel, a priest taken away in the second Babylonian deportation, sees the heavens opened in a vision by the river Chebar and receives his call. He announces the shocking sight of God's glory leaving the temple because of the idolatry in the Jerusalem temple (chapters 8-11) and the coming judgment. After the fall of Jerusalem, he prophesies a brilliant restoration: the vision of the dry bones in the valley becoming an army (chapter 37), the war of Gog and Magog (chapters 38-39), and a holy new temple from which a river of living water flows (chapters 40-48).",
    ezraPerspective: "Pastor Woo-ho Noh explains Ezekiel as a great epic of hope: \"Even in the land of despair in exile, God is alive, and when the breath of the Word blows, even dead bones rise up as a great army.\" The name at the very end, 48:35, \"Jehovah-shammah (The LORD is there),\" testifies that God is still with us in the very middle of suffering.",
    structure: [
      { part: "Part 1: Ezekiel's Call and Symbolic Acts (chapters 1~3)", content: "The vision of the four living creatures and the throne, eating the scroll, the watchman's task" },
      { part: "Part 2: Judah's Sins and the Departure of God's Glory (chapters 4~24)", content: "Besieging a clay tablet and lying on his side, secret idolatry inside the temple, the glory of the LORD leaving the temple threshold and departing by the east gate" },
      { part: "Part 3: Judgment on Seven Surrounding Nations (chapters 25~32)", content: "Judgment on Ammon, Moab, Edom, the Philistines, Tyre (a veiled picture of Satan behind it), Sidon, and Egypt" },
      { part: "Part 4: Israel's Restoration and the New Temple (chapters 33~48)", content: "The shepherds and the flock, the vision of breath bringing the valley of dry bones to life (chapter 37), judgment on Gog and Magog, the plan of the new temple and living water flowing from the threshold, \"Jehovah-shammah\"" }
    ],
    mapType: "ezekiel_exile",
    youtubeQuery: "에스라하우스 에스겔 노우호",
    quizzes: [
      {
        q: "In Ezekiel 37, what brought the dry bones filling the valley to life as an exceeding great army?",
        options: ["Human medical skill", "God's Word, prophesied, and the breath (the Holy Spirit)", "The power of gold and jewels", "Mighty thunder and lightning"],
        ans: 1,
        exp: "When God's Word was prophesied and the breath (ruach, the Holy Spirit) came from the four winds, the dry bones lived and became an exceeding great army."
      }
    ]
  },
  {
    id: 27,
    name: "Daniel",
    engName: "Daniel",
    abbr: "Dan",
    testament: "OT",
    category: "Major Prophets",
    chronologicalOrder: 23,
    chapters: 12,
    author: "Daniel",
    date: "c. B.C. 605 ~ 536 (the royal courts of the Babylonian and Persian empires)",
    keyVerse: "And they that be wise shall shine as the brightness of the firmament; and they that turn many to righteousness as the stars for ever and ever. (Dan 12:3)",
    theme: "God's sovereignty over all the world's empires, uncompromising faith, and God's everlasting kingdom",
    summary: "It covers the historical victories (chapters 1-6) of young Daniel, taken in the first Babylonian deportation, and his three friends (Shadrach, Meshach, Abednego), who purposed in their hearts not to defile themselves with the king's food and kept their faith under the threat of the fiery furnace and the lions' den. It then covers (chapters 7-12) the rise and fall of the world empires — Babylon, Media-Persia, Greece, Rome — the everlasting kingdom of the Messiah, \"the stone cut out without hands,\" and the end-time revelation of the seventy weeks.",
    ezraPerspective: "In the Ezra Bible Course, Daniel is the book that teaches \"God's absolute sovereignty, ruling world history as easily as looking at the palm of His hand.\" Through the vision of the statue in chapter 2 and the four beasts in chapter 7, Pastor Woo-ho Noh points precisely to Alexander the Great of Greece, the Roman Empire, and the turbulent Intertestamental Period, confirming that the Bible is a living history book.",
    structure: [
      { part: "Part 1: Court Stories and the Victory of Faith (chapters 1~6)", content: "Daniel's resolve and the vegetable test, interpreting Nebuchadnezzar's dream of the great statue (gold, silver, bronze, iron, clay, and the stone cut out), the three friends' victory in the fiery furnace, Nebuchadnezzar's madness, the handwriting on Belshazzar's wall (MENE, MENE, TEKEL, UPHARSIN), Daniel in the lions' den" },
      { part: "Part 2: Daniel's Apocalyptic Visions (chapters 7~12)", content: "The vision of the four beasts and the Ancient of Days, the vision of the ram and the goat (foreshadowing Antiochus Epiphanes), Daniel's intercession for his people and the revelation of the seventy weeks, prophecy of the end times (\"shine as the stars\")" }
    ],
    mapType: "four_empires",
    youtubeQuery: "에스라하우스 다니엘 노우호",
    quizzes: [
      {
        q: "In Daniel 3, facing the fiery furnace if they would not bow to Nebuchadnezzar's golden image, what was the essence of the faith confessed by Shadrach, Meshach, and Abednego?",
        options: ["O king, just spare our lives", "God will deliver us, but even if He does not, we will not bow", "We are afraid to die", "We will only pretend to bow"],
        ans: 1,
        exp: "With the uncompromising, absolutely pure faith of \"But if not,\" they experienced God's salvation."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // [구약 39권] - 5. 소예언서 12권
  // --------------------------------------------------------------------------
  {
    id: 28,
    name: "Hosea",
    engName: "Hosea",
    abbr: "Hos",
    testament: "OT",
    category: "Minor Prophets",
    chronologicalOrder: 19,
    chapters: 14,
    author: "Hosea",
    date: "c. B.C. 750 ~ 715 (the last days of northern Israel)",
    keyVerse: "Then shall we know, if we follow on to know the LORD: his going forth is prepared as the morning; and he shall come unto us as the rain, as the latter and former rain unto the earth. (Hos 6:3)",
    theme: "Hosea, who loved his unfaithful wife Gomer to the end, and God's heartbroken, one-sided love for His rebellious people",
    summary: "Hosea, the last prophet of northern Israel, at God's command marries Gomer, an unfaithful woman, and has three children (Jezreel, Lo-ruhamah, Lo-ammi). Through the pain of paying a price to buy back his wife after she left home, he reveals God's aching love (hesed), which cannot give up on Israel, who forsook God to serve the idol Baal.",
    ezraPerspective: "Quoting Hosea 4:6 (\"My people are destroyed for lack of knowledge\") and 6:6 (\"For I desired mercy, and not sacrifice; and the knowledge of God more than burnt offerings\"), Pastor Woo-ho Noh insists throughout the Ezra course that ignorance — falling into religious formalism and not truly knowing God — is the root cause of spiritual ruin.",
    structure: [
      { part: "Part 1: Revelation through Hosea's Family Tragedy (chapters 1~3)", content: "Marriage to Gomer, the ominous names of the three children, the unfaithful wife leaving home and bought back for fifteen pieces of silver" },
      { part: "Part 2: Israel's Sins and Religious Corruption (chapters 4~8)", content: "No knowledge of God, the corruption of the priests, a rebuke of fake repentance like a morning cloud, corruption like a cake not turned" },
      { part: "Part 3: Discipline and God's Compassion (chapters 9~14)", content: "Warning of exile as discipline, the love of a Father who taught His child to walk (chapter 11), \"my repentings are kindled together,\" repentance and the promise of restoration like the dew" }
    ],
    mapType: "northern_israel",
    youtubeQuery: "에스라하우스 호세아 노우호",
    quizzes: [
      {
        q: "In Hosea 6:6, what two things did God declare He truly desires more than sacrifices and burnt offerings?",
        options: ["Fasting and giving to the poor", "Mercy (love) and knowing God", "Expensive oxen and sheep", "Building a huge temple"],
        ans: 1,
        exp: "He said, \"For I desired mercy, and not sacrifice; and the knowledge of God more than burnt offerings.\""
      }
    ]
  },
  {
    id: 29,
    name: "Joel",
    engName: "Joel",
    abbr: "Joel",
    testament: "OT",
    category: "Minor Prophets",
    chronologicalOrder: 20,
    chapters: 3,
    author: "Joel",
    date: "c. B.C. 835 (or presumed around the time of the Exile)",
    keyVerse: "And rend your heart, and not your garments, and turn unto the LORD your God... And it shall come to pass afterward, that I will pour out my spirit upon all flesh; and your sons and your daughters shall prophesy (Joel 2:13, 28)",
    theme: "The locust plague and the Day of the LORD, repentance that tears the heart, and the Spirit to be poured out on all people",
    summary: "Through an unprecedented locust plague that swept the land of Judah, Joel warns of \"the Day of the LORD,\" the coming day of judgment, and urges the priests and people to set a day of fasting and to \"rend your heart, and not your garments.\" After true repentance, God will restore the years the locusts have eaten, and Joel proclaims the great promise \"I will pour out my spirit upon all flesh,\" fulfilled when the Holy Spirit came at Pentecost (Acts 2).",
    ezraPerspective: "The Ezra Bible Course reads Joel as \"God's warning that rejects formal repentance and demands contrition of the whole person, from the heart.\" It also shows that the text of Peter's Pentecost sermon in Acts 2 is Joel 2 itself, helping us see that the Old Testament prophets are directly connected to the birth of the New Testament church.",
    structure: [
      { part: "Part 1: The Locust Plague and a Call to Fast (chapter 1)", content: "The destruction by the palmerworm, the locust, the cankerworm, and the caterpiller; a temple cut off from grain offerings and drink offerings; a cry of repentance" },
      { part: "Part 2: The Day of the LORD and a Call to True Repentance (2:1~17)", content: "Blow the trumpet and sound the alarm, rend your heart and return to the Lord, the priests' tearful prayer" },
      { part: "Part 3: The Land Restored and the Promise of the Spirit (2:18~32)", content: "The former rain and the latter rain, restoring the years the locusts ate, the promise of the Spirit poured out on all people" },
      { part: "Part 4: Judgment on the Nations in the Valley of Jehoshaphat (chapter 3)", content: "Beat your plowshares into swords, salvation in Zion and Judah's everlasting prosperity" }
    ],
    mapType: "judah_plague",
    youtubeQuery: "에스라하우스 요엘 노우호",
    quizzes: [
      {
        q: "In Joel 2:13, instead of outward religious gestures, what did God ask His people to truly tear?",
        options: ["Garments", "Heart", "Tent", "Book"],
        ans: 1,
        exp: "He pleaded, \"rend your heart, and not your garments, and turn unto the LORD your God.\""
      }
    ]
  },
  {
    id: 30,
    name: "Amos",
    engName: "Amos",
    abbr: "Amos",
    testament: "OT",
    category: "Minor Prophets",
    chronologicalOrder: 25,
    chapters: 9,
    author: "Amos (a herdsman of Tekoa and a dresser of sycamore figs)",
    date: "c. B.C. 760 (the height of Jeroboam II's reign)",
    keyVerse: "But let judgment run down as waters, and righteousness as a mighty stream. (Amos 5:24)",
    theme: "The God of justice and righteousness, a stern indictment of luxury and injustice, and the restoration of David's fallen tabernacle",
    summary: "Amos, a herdsman from the country town of Tekoa in southern Judah, roars like a lion against what lay hidden behind the economic prosperity of northern Israel under Jeroboam II: the extreme gap between rich and poor, bribery, corrupt courts, the social injustice of selling the poor for a pair of shoes, and hypocritical sacrifices. Along with five visions of judgment, he prophesies that at the end God will raise up again \"the tabernacle of David that is fallen.\"",
    ezraPerspective: "Introducing Amos as \"the prophet of social justice,\" Pastor Woo-ho Noh awakens us to a painful truth: if the church is rich only in worship and offerings and loses justice, honesty, and compassion for the weak in the world, God firmly rejects it: \"I hate, I despise your feast days, and I will not smell in your solemn assemblies.\"",
    structure: [
      { part: "Part 1: Oracles of Judgment on Eight Nations (chapters 1~2)", content: "The \"three transgressions, and four\" of Damascus, Gaza, Tyre, Edom, Ammon, Moab, Judah, and finally northern Israel" },
      { part: "Part 2: Indictment of Northern Israel's Sins (chapters 3~6)", content: "\"Ye kine of Bashan, that are in the mountain of Samaria,\" \"Come to Bethel, and transgress,\" those who turn justice into wormwood, a warning against the luxury of lying on beds of ivory and playing the viol" },
      { part: "Part 3: Amos's Five Visions (7~9:10)", content: "The vision of locusts, the vision of fire, the vision of the plumb line, the opposition of the priest Amaziah, the vision of a basket of summer fruit, the temple pillars shattered" },
      { part: "Part 4: The Promise to Restore David's Fallen Tabernacle (9:11~15)", content: "David's tabernacle rebuilt, abundance with new wine dropping from the mountains, the promise of being planted forever" }
    ],
    mapType: "samaria_injustice",
    youtubeQuery: "에스라하우스 아모스 노우호",
    quizzes: [
      {
        q: "In the famous words of Amos 5:24, what does God require as the fruit of true worship?",
        options: ["A huge number of rams for sacrifice", "Letting justice run down as waters, and righteousness as a never-failing stream", "A grand choir performance", "The sound of fasting and wailing"],
        ans: 1,
        exp: "\"But let judgment run down as waters, and righteousness as a mighty stream\" is the compass of social justice that runs through the whole Bible."
      }
    ]
  },
  {
    id: 31,
    name: "Obadiah",
    engName: "Obadiah",
    abbr: "Obad",
    testament: "OT",
    category: "Minor Prophets",
    chronologicalOrder: 26,
    chapters: 1,
    author: "Obadiah",
    date: "c. B.C. 586 (right after the fall of Jerusalem)",
    keyVerse: "Though thou exalt thyself as the eagle, and though thou set thy nest among the stars, thence will I bring thee down, saith the LORD. (Obad 1:4)",
    theme: "The pride and judgment of Edom (Esau's descendants), who stood by and mocked as their brother Judah was destroyed",
    summary: "The shortest book in the Old Testament, one chapter (21 verses). It condemns the base sin of the Edomites, Esau's descendants, who lived proudly in high fortresses in the clefts of the rock (Petra): when Babylon invaded, they watched the disaster of their brother Jacob (Israel), looted, and caught those fleeing at the crossroads to hand them over. It proclaims Edom's complete destruction and the final victory of Mount Zion.",
    ezraPerspective: "Through Obadiah, the Ezra course teaches \"how terrible a judgment before God is brought on by the sin of rejoicing at and standing by while a brother suffers.\" However proudly people build fortresses on rugged rocky mountains, they cannot escape God's judgment, and history proves it: Edom vanished without a trace.",
    structure: [
      { part: "Part 1: Edom's Pride and the Declaration of Judgment (verses 1~9)", content: "The pride of dwelling in the clefts of the rock, brought down though soaring like an eagle, betrayal by allies" },
      { part: "Part 2: Indictment of Edom's Sins (verses 10~14)", content: "Violence done to their brother Jacob, the sin of standing aloof and entering the gates to loot on the day of Jerusalem's disaster" },
      { part: "Part 3: Judgment on All Nations and the Kingdom of the LORD (verses 15~21)", content: "\"As thou hast done, it shall be done unto thee,\" the house of Jacob restored as a fire, the saved going up to Mount Zion and the kingdom becoming the LORD's" }
    ],
    mapType: "edom_petra",
    youtubeQuery: "에스라하우스 오바댜 노우호",
    quizzes: [
      {
        q: "Which nation, descended from Esau, Jacob's twin brother, and living in rugged rocky fortresses, is the focus of Obadiah's warning of judgment?",
        options: ["Moab", "Ammon", "Edom", "Philistia"],
        ans: 2,
        exp: "Edom, meaning \"red,\" was a nickname of Esau. His descendants lived in the rocky region of Petra and were judged for their pride."
      }
    ]
  },
  {
    id: 32,
    name: "Jonah",
    engName: "Jonah",
    abbr: "Jonah",
    testament: "OT",
    category: "Minor Prophets",
    chronologicalOrder: 27,
    chapters: 4,
    author: "Jonah",
    date: "c. B.C. 770 (the time of Jeroboam II)",
    keyVerse: "for I knew that thou art a gracious God, and merciful, slow to anger, and of great kindness, and repentest thee of the evil. (Jonah 4:2)",
    theme: "Jonah the runaway prophet, and God's vast salvation and compassion toward pagan Nineveh",
    summary: "Jonah is told to go and cry out judgment against Nineveh, capital of Assyria, Israel's bitter enemy, but he runs away toward Tarshish. Through the storm and repentance in the belly of the great fish, he finally preaches in Nineveh — reluctantly, just one day of a three-day journey. Yet when everyone from the king to the livestock fasts and repents, God relents, and through the lesson of the gourd vine He teaches His universal love that cares for 120,000 souls who cannot tell their right hand from their left.",
    ezraPerspective: "Pastor Woo-ho Noh regards Jonah as \"a great book of mission that smashes the narrow nationalism and closed-minded view of salvation of Israel, the chosen people.\" He also stresses that Jesus Himself said no sign would be given \"but the sign of the prophet Jonas,\" taking the three days in the fish's belly as the surest foreshadowing of His own death on the cross and resurrection.",
    structure: [
      { part: "Chapter 1: Jonah's Disobedience and Flight", content: "The command to go to Nineveh, boarding a ship to Tarshish, the great storm, chosen by lot and thrown into the sea" },
      { part: "Chapter 2: Prayer in the Belly of the Great Fish", content: "A prayer of thanks and vows from the belly of Sheol, vomited out onto dry land" },
      { part: "Chapter 3: Preaching in Nineveh and the Whole City's Repentance", content: "The second call, \"Yet forty days, and Nineveh shall be overthrown,\" the fasting and repentance of Nineveh's king and people, God relents" },
      { part: "Chapter 4: Jonah's Anger and the Lesson of the Gourd", content: "Jonah's complaint, God's providence through the gourd and the worm, \"And should not I spare Nineveh, that great city?\"" }
    ],
    mapType: "jonah_flight",
    youtubeQuery: "에스라하우스 요나 노우호",
    quizzes: [
      {
        q: "In Jonah 4, what plant did God use to shade Jonah's head and then make wither through a worm, teaching a lesson about loving souls?",
        options: ["Fig tree", "Grapevine", "Gourd vine", "Olive tree"],
        ans: 2,
        exp: "To Jonah, who cared about a gourd that came up in a night and perished in a night, God taught the Father's heart that cares for 120,000 souls."
      }
    ]
  },
  {
    id: 33,
    name: "Micah",
    engName: "Micah",
    abbr: "Mic",
    testament: "OT",
    category: "Minor Prophets",
    chronologicalOrder: 28,
    chapters: 7,
    author: "Micah (from Moresheth)",
    date: "c. B.C. 735 ~ 700 (the times of Jotham, Ahaz, and Hezekiah)",
    keyVerse: "He hath shewed thee, O man, what is good; and what doth the LORD require of thee, but to do justly, and to love mercy, and to walk humbly with thy God? (Mic 6:8)",
    theme: "A condemnation of exploitation by leaders, the prophecy of the Messiah's birth in Bethlehem Ephratah, and the true faith God requires",
    summary: "Micah, a prophet from the countryside who ministered at the same time as Isaiah, sharply exposes the greed and exploitation of the people by the political leaders, judges, and false prophets of both kingdoms, and warns that Jerusalem will be destroyed and plowed like a field (chapters 1-3). Yet he gloriously prophesies that in the last days the mountain of the LORD's house will be raised up, and that the Messiah, the ruler whose goings forth have been from everlasting, will be born in Bethlehem (5:2).",
    ezraPerspective: "Pastor Woo-ho Noh stresses Micah 6:8 as \"the verse that most clearly sums up, in three things, what God wants from people in the whole Bible\": \"to do justly, and to love mercy (kindness), and to walk humbly with thy God!\" The prophet Micah's cry became a decisive spark for King Hezekiah's religious reform.",
    structure: [
      { part: "Part 1: The Sins and Judgment of Samaria and Jerusalem (chapters 1~3)", content: "\"Hear, all ye people,\" those who devise sin on their beds, leaders who flay the skin off the people, those who prophesy for money" },
      { part: "Part 2: The Glory of the Last Days and the Prophecy of the Messiah's Birth (chapters 4~5)", content: "Beating swords into plowshares, \"But thou, Bethlehem Ephratah... out of thee shall he come forth... that is to be ruler\" (5:2), the victory of the remnant" },
      { part: "Part 3: God's Courtroom Case and the God Who Forgives (chapters 6~7)", content: "\"Hear ye, O mountains, the LORD's controversy,\" the true faith God requires (6:8), a lament over moral collapse, a hymn of forgiveness to the God who treads our iniquities underfoot and casts them into the depths of the sea" }
    ],
    mapType: "bethlehem_prophecy",
    youtubeQuery: "에스라하우스 미가 노우호",
    quizzes: [
      {
        q: "In Micah 5:2, what small town of Judah was prophesied as the birthplace of the one who would rule Israel (the Messiah)?",
        options: ["Jerusalem", "Nazareth", "Bethlehem Ephratah", "Capernaum"],
        ans: 2,
        exp: "He prophesied: \"But thou, Bethlehem Ephratah, though thou be little among the thousands of Judah, yet out of thee shall he come forth unto me that is to be ruler in Israel.\""
      }
    ]
  },
  {
    id: 34,
    name: "Nahum",
    engName: "Nahum",
    abbr: "Nah",
    testament: "OT",
    category: "Minor Prophets",
    chronologicalOrder: 29,
    chapters: 3,
    author: "Nahum (the Elkoshite)",
    date: "c. B.C. 663 ~ 612 (just before the fall of Assyria)",
    keyVerse: "The LORD is good, a strong hold in the day of trouble; and he knoweth them that trust in him. (Nah 1:7)",
    theme: "The certain fall of Nineveh, the bloody city (the Assyrian Empire), and freedom for oppressed Judah",
    summary: "Nineveh, which had repented at Jonah's preaching, returned some 150 years later to monstrous cruelty, idolatry, and wars of conquest. In one majestic poem, Nahum declares how Nineveh, the bloody city, will be utterly burned, swept away by flood, and destroyed forever. For Judah, God's people groaning under Assyrian oppression, this was a message of true \"comfort\" (the meaning of Nahum's name) from God, their stronghold.",
    ezraPerspective: "The Ezra Bible Course explains Jonah and Nahum as a pair. If Jonah showed God's mercy toward Nineveh and a stay of judgment through repentance, Nahum shows God's righteous judgment on those who kicked away the chance to repent and went back to being a cruel, bloody empire. Even Assyria, the strongest power in the world, fell in a single night when God's time came.",
    structure: [
      { part: "Chapter 1: The Majesty of the Jealous and Avenging God", content: "The scene of the Lord's wrath, rebuking the sea, the LORD a stronghold in the day of trouble, good tidings of peace for Judah" },
      { part: "Chapter 2: A Vivid Picture of Nineveh's Fall", content: "The invading army with red shields, chariots racing, the gates of the rivers opened and the palace dissolved, the lions' den laid waste" },
      { part: "Chapter 3: The Sins of the Bloody City and Its Final Ruin", content: "\"Woe to the bloody city!\", remember the fall of No-amon (Thebes), Assyrian nobles scattering like locusts, an incurable wound" }
    ],
    mapType: "nineveh_fall",
    youtubeQuery: "에스라하우스 나훔 노우호",
    quizzes: [
      {
        q: "What capital of the brutal invading empire, the strongest in the world at that time, does Nahum declare will be destroyed?",
        options: ["Babylon", "Nineveh (Assyria)", "Rome", "Shushan palace"],
        ans: 1,
        exp: "Nahum proclaims \"Woe to the bloody city!\" and the complete ruin of Nineveh, capital of cruel Assyria."
      }
    ]
  },
  {
    id: 35,
    name: "Habakkuk",
    engName: "Habakkuk",
    abbr: "Hab",
    testament: "OT",
    category: "Minor Prophets",
    chronologicalOrder: 35,
    chapters: 3,
    author: "Habakkuk",
    date: "c. B.C. 605 (the time of King Jehoiakim)",
    keyVerse: "Behold, his soul which is lifted up is not upright in him: but the just shall live by his faith. (Hab 2:4)",
    theme: "From doubt to confidence, from lament to praise! The just shall live by his faith",
    summary: "It covers the prophet's first question — \"Why are You silent while the wicked swallow up the righteous?\" — and his second wrestling with God's shocking answer, that He would raise up the even more wicked Babylon to judge Judah. To Habakkuk standing on his watchtower, God gives the answer \"the just shall live by his faith,\" and at last it rises into praise (chapter 3): even though the fig tree does not blossom and there are no cattle in the stalls, he rejoices and leaps in the God of his salvation.",
    ezraPerspective: "Pastor Woo-ho Noh stresses that Habakkuk 2:4 (\"the just shall live by faith\") is an absolute key verse of the Bible, the spark for justification by faith in Romans, Galatians, and Hebrews in the New Testament and for the Reformation. The book shows the process of spiritual maturity in which a faith that asks and wrestles finally rises above circumstances to absolute praise, satisfied with God alone.",
    structure: [
      { part: "Chapter 1: Habakkuk's Anguish and God's Answer", content: "A lament over violence and perverseness, God's answer that He will raise up the Chaldeans (Babylon), a second protest against God using those more wicked" },
      { part: "Chapter 2: Waiting on the Watchtower and Five Woes", content: "Standing on the watch and waiting, \"the vision is yet for an appointed time,\" \"the just shall live by his faith\" (2:4), five woes against the wicked" },
      { part: "Chapter 3: Habakkuk's Prayer and Praise upon Shigionoth", content: "\"O LORD, revive thy work in the midst of the years,\" the glory of God's presence, \"Although the fig tree shall not blossom... yet I will rejoice in the LORD\"" }
    ],
    mapType: "watchtower_faith",
    youtubeQuery: "에스라하우스 하박국 노우호",
    quizzes: [
      {
        q: "What famous gospel principle, proclaimed in Habakkuk 2:4, became the foundation of Romans and Galatians?",
        options: ["The righteous shall not suffer", "The just shall live by his faith", "The righteous shall become the richest in the world", "The righteous shall win battles by the sword"],
        ans: 1,
        exp: "\"The just shall live by his faith\" is the great charter of salvation running through the whole Old and New Testaments."
      }
    ]
  },
  {
    id: 36,
    name: "Zephaniah",
    engName: "Zephaniah",
    abbr: "Zeph",
    testament: "OT",
    category: "Minor Prophets",
    chronologicalOrder: 36,
    chapters: 3,
    author: "Zephaniah (great-great-grandson of King Hezekiah)",
    date: "c. B.C. 630 (early in King Josiah's reign)",
    keyVerse: "The LORD thy God in the midst of thee is mighty; he will save, he will rejoice over thee with joy; he will rest in his love, he will joy over thee with singing. (Zeph 3:17)",
    theme: "The wrath and judgment of the great Day of the LORD, salvation for the humble remnant, and a song of joy",
    summary: "Zephaniah, of royal blood as a great-great-grandson of King Hezekiah, proclaims to a land of Judah overrun with the worship of Baal and Molech and with syncretism that \"the great day of the LORD,\" which will sweep away everything in the universe, is near. He urges all the humble of the earth: \"seek righteousness, seek meekness: it may be ye shall be hid\" (the meaning of Zephaniah's name: the LORD has hidden). After judgment, he lets us hear a glorious song of love in which the Lord \"rejoices over\" His people with overflowing joy.",
    ezraPerspective: "The Ezra course counts Zephaniah 3:17 as \"the greatest love song in the Old Testament, showing how passionately God loves people.\" It helps us realize that the true heart of the God who disciplines is not destruction, but the love of a Father who shakes off our idols and sins, holds us in His arms, and dances, unable to contain His joy.",
    structure: [
      { part: "Chapter 1: The Great Day of the LORD Coming on All the Earth", content: "\"I will utterly consume all things from off the land,\" judgment on those who swear by Molech, the day of wrath when silver and gold cannot deliver" },
      { part: "Chapter 2: A Call to Repentance for a Shameless Nation", content: "\"Gather yourselves together,\" seek righteousness and meekness before the LORD's anger comes, judgment on the Philistines, Moab, Ammon, Cush, and Assyria" },
      { part: "Chapter 3: Jerusalem's Sin and the Song of the Remnant", content: "The filthy, rebellious city; salvation of an afflicted and poor people; \"Sing, O daughter of Zion\"; \"he will rejoice over thee with joy\" (3:17)" }
    ],
    mapType: "judah_reformation",
    youtubeQuery: "에스라하우스 스바냐 노우호",
    quizzes: [
      {
        q: "In Zephaniah 3:17, what feeling does God show as He looks at His saved people?",
        options: ["He cannot hold back His anger", "He rejoices over them with joy and rests quietly in His love", "He still doubts and tests them", "He only watches from afar"],
        ans: 1,
        exp: "It is the verse: \"he will rejoice over thee with joy; he will rest in his love, he will joy over thee with singing.\""
      }
    ]
  },
  {
    id: 37,
    name: "Haggai",
    engName: "Haggai",
    abbr: "Hag",
    testament: "OT",
    category: "Minor Prophets",
    chronologicalOrder: 37,
    chapters: 2,
    author: "Haggai",
    date: "B.C. 520 (the second year of King Darius)",
    keyVerse: "The glory of this latter house shall be greater than of the former, saith the LORD of hosts: and in this place will I give peace, saith the LORD of hosts. (Hag 2:9)",
    theme: "Restoring priorities: Is it time to dwell in your paneled houses? Build the halted temple!",
    summary: "The first returnees from Babylon, facing enemy opposition and economic hardship, abandoned the rebuilding of the temple for 16 years and were busy only building their own houses. Then the prophet Haggai rose up and sharply rebuked their priorities: \"Go up to the mountain, and bring wood, and build the house!\" When the people obeyed at once and resumed the work, God blessed them: \"from this day will I bless you.\"",
    ezraPerspective: "Through Haggai, Pastor Woo-ho Noh stresses \"the priorities of the kingdom of God (Matt 6:33).\" He teaches the principle that if we look after only our own house and our own living and neglect God's work (worship and the Word), however much we earn it is futile, like putting it into a bag with holes; but from the day we set our priorities right with God at the center, God Himself pours out the blessings of heaven.",
    structure: [
      { part: "Sermon 1: The Command to Resume Building the Temple (1:1~11)", content: "\"Consider your ways,\" is it right to live in paneled houses while the temple lies waste?, the cause of the drought revealed" },
      { part: "The People's Immediate Obedience (1:12~15)", content: "The obedience of Zerubbabel, Joshua, and all the people, \"I am with you\"" },
      { part: "Sermon 2: The Promise of the Temple's Latter Glory (2:1~9)", content: "Do not lose heart comparing it with Solomon's temple, God will shake all nations, the latter glory will be greater than the former" },
      { part: "Sermons 3 and 4: Promises of Cleanness and Blessing (2:10~23)", content: "The uncleanness of offerings touched by unclean hands, \"from this day will I bless you,\" Zerubbabel made God's signet (seal)" }
    ],
    mapType: "zerubbabel_temple",
    youtubeQuery: "에스라하우스 학개 노우호",
    quizzes: [
      {
        q: "After the Return from Exile, the people had stopped building the temple for 16 years. What sharp rebuke did the prophet Haggai give them?",
        options: ["Now just work hard at farming", "Is it time for you to dwell in your paneled houses, while this house lies waste?", "Prepare for war with the Persian army", "Emigrate again to another country"],
        ans: 1,
        exp: "In Haggai 1:4 he rebuked them: \"Is it time for you to dwell in your paneled houses, while this house lies waste? Consider your ways.\""
      }
    ]
  },
  {
    id: 38,
    name: "Zechariah",
    engName: "Zechariah",
    abbr: "Zech",
    testament: "OT",
    category: "Minor Prophets",
    chronologicalOrder: 38,
    chapters: 14,
    author: "Zechariah (grandson of Iddo, of a priestly family)",
    date: "c. B.C. 520 ~ 480",
    keyVerse: "Then he answered and spake unto me, saying, This is the word of the LORD unto Zerubbabel, saying, Not by might, nor by power, but by my spirit, saith the LORD of hosts. (Zech 4:6)",
    theme: "Not by might, but by My Spirit! Eight night visions and an end-time panorama of the Messiah's first and second comings",
    summary: "The prophetic book of Zechariah, a young priest who ministered at the same time as Haggai and encouraged the rebuilding of the temple. Chapters 1-8 promise the completion of the temple and the prosperity of Jerusalem through eight mysterious night visions (the rider among the myrtle trees, the four horns and four craftsmen, the golden lampstand and the two olive trees, and others). Chapters 9-14 prophesy the Messiah, the humble King of peace who will enter riding on a donkey's colt (9:9), His being sold for thirty pieces of silver, and the end-time victory of His return on the Mount of Olives.",
    ezraPerspective: "In Pastor Woo-ho Noh's Bible course, Zechariah is a treasury of vast apocalyptic visions — so much so that it can be called \"the Revelation of the Old Testament.\" The encouragement to Zerubbabel, \"Not by might, nor by power, but by the Spirit of the LORD,\" is an eternal truth showing that where human strength runs out, the church is completed by the work of the Holy Spirit.",
    structure: [
      { part: "Part 1: A Call to Repentance and Eight Night Visions (chapters 1~6)", content: "\"Be ye not as your fathers,\" the horses among the myrtle trees, the measuring line, the cleansing of Joshua the high priest, the golden lampstand and two olive trees (chapter 4), the flying scroll, the woman in the ephah, the four chariots, the giving of the crown" },
      { part: "Part 2: The Question about Fasting and the Promise of Restoration (chapters 7~8)", content: "Rebuke of formal fasting, a call to true justice and compassion, the nations streaming to Jerusalem to seek God" },
      { part: "Part 3: Prophecies of the Messiah's First Coming and Suffering (chapters 9~11)", content: "The King who comes lowly, riding on a donkey's colt (9:9), the true shepherd rejected, sold for thirty pieces of silver and cast to the potter" },
      { part: "Part 4: The Messiah's Return and God's Everlasting Kingdom (chapters 12~14)", content: "They shall look upon Him whom they pierced and mourn, a fountain for sin and uncleanness, the Mount of Olives split, the LORD King over all, \"HOLINESS UNTO THE LORD\" even on the bells of the horses" }
    ],
    mapType: "zechariah_visions",
    youtubeQuery: "에스라하우스 스가랴 노우호",
    quizzes: [
      {
        q: "In Zechariah 4:6, God told Zerubbabel that the work of rebuilding the temple would be completed not by human strength or force, but by what?",
        options: ["Plenty of gold and silver", "Only the Spirit of the LORD (the Holy Spirit)", "The force of the Persian army", "The schemes of politicians"],
        ans: 1,
        exp: "It is the famous word: \"Not by might, nor by power, but by my spirit.\""
      }
    ]
  },
  {
    id: 39,
    name: "Malachi",
    engName: "Malachi",
    abbr: "Mal",
    testament: "OT",
    category: "Minor Prophets",
    chronologicalOrder: 39,
    chapters: 4,
    author: "Malachi",
    date: "c. B.C. 430 (late in Nehemiah's time)",
    keyVerse: "Behold, I will send my messenger, and he shall prepare the way before me... saith the LORD of hosts... But unto you that fear my name shall the Sun of righteousness arise with healing in his wings (Mal 3:1, 4:2)",
    theme: "A rebuke of cold love and formal sacrifices, the whole tithe, and the promise of Elijah (John the Baptist) preparing the way",
    summary: "The last book of the Old Testament. Even after the temple was rebuilt, the people's lives did not get better, and they grew cold, saying, \"When did You ever love us?\" Through six questions and answers (disputes), God rebukes them, and the priests who offered blind, lame, unclean sacrifices. Urging obedience in the whole tithe, it closes the Old Testament with the promise that God will send \"Elijah (John the Baptist), who will prepare the way of the Lord,\" beyond the 400 silent years of the Intertestamental Period.",
    ezraPerspective: "Pastor Woo-ho Noh lectures on Malachi 1:10 (\"Who is there even among you that would shut the doors?\") with a heart that coughs up blood. It is God's lament that a loveless, formal religious game would be better off shut down altogether. He clearly shows that the Law of Moses and the promise of Elijah in Malachi 4 are the stepping stones that cross over into the New Testament Gospels.",
    structure: [
      { part: "Dispute 1: Doubt about God's Love, and His Answer (1:1~5)", content: "\"I have loved you\" versus \"Wherein hast thou loved us?\", the choice of Esau and Jacob" },
      { part: "Dispute 2: Rebuke of the Priests' Unclean Sacrifices (1:6~2:9)", content: "Blind and lame offerings, \"would that someone would shut the temple doors,\" the covenant with Levi broken" },
      { part: "Dispute 3: Indictment of Mixed Marriage and Divorce (2:10~16)", content: "Marrying the daughter of a foreign god, God hates divorce that casts off the wife of one's youth" },
      { part: "Disputes 4 and 5: Doubting God's Justice, and the Stolen Tithe (2:17~3:12)", content: "The messenger of the covenant shall come, bring the whole tithe into the storehouse and prove Me" },
      { part: "Dispute 6: The Book of Remembrance for Those Who Fear the LORD, and the Prophecy of Elijah (3:13~4:6)", content: "The complaint that serving God is vain, made His special treasure (jewels), healing in His wings, the promise to send Elijah" }
    ],
    mapType: "malachi_temple",
    youtubeQuery: "에스라하우스 말라기 노우호",
    quizzes: [
      {
        q: "In Malachi 4, the very last chapter of the Old Testament, which prophet did God promise to send before the great and dreadful day comes?",
        options: ["Moses", "Elijah (a type of John the Baptist)", "Isaiah", "David"],
        ans: 1,
        exp: "It ends with Malachi 4:5, \"Behold, I will send you Elijah the prophet before the coming of the great and dreadful day of the LORD,\" which leads on to the appearance of John the Baptist in the New Testament."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // [신약 27권] - 1. 사복음서 4권
  // --------------------------------------------------------------------------
  {
    id: 40,
    name: "Matthew",
    engName: "Matthew",
    abbr: "Matt",
    testament: "NT",
    category: "Gospels",
    chronologicalOrder: 44,
    chapters: 28,
    author: "The apostle Matthew (Levi the tax collector)",
    date: "c. A.D. 60 ~ 65",
    keyVerse: "And Jesus came and spake unto them, saying, All power is given unto me in heaven and in earth. Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost: Teaching them to observe all things whatsoever I have commanded you (Matt 28:18-20)",
    theme: "Jesus Christ the Messiah, who came as King of the Jews, and the great charter of the gospel of the kingdom",
    summary: "Written for Jewish readers, it begins with the genealogy of Jesus Christ, the son of Abraham and the son of David. It proves how the Old Testament prophecies were fulfilled in Jesus, and through five great discourses (teachings on the kingdom of heaven), including the Sermon on the Mount (chapters 5-7), it presents the teaching of Jesus the King who fulfills the Law, His atoning death on the cross, and after the resurrection closes with the Great Commission, \"teach all nations.\"",
    ezraPerspective: "Pastor Woo-ho Noh presents the Sermon on the Mount in Matthew (chapters 5~7) as \"the constitution of the citizens of heaven that the people of the new covenant must keep.\" If the Law given at Sinai in the Old Testament governed outward actions, Jesus requires a fuller and deeper righteousness of God that rules even the motives at the center of the heart (hatred, lust, greed).",
    structure: [
      { part: "Part 1: The King's Genealogy, Birth, and Preparation (chapters 1~4)", content: "The genealogy of the son of Abraham and David, the wise men from the East, victory over temptation in the wilderness, the start of the Galilean ministry" },
      { part: "Part 2: Discourse 1 — The Sermon on the Mount (chapters 5~7)", content: "The Beatitudes, the salt and light of the world, the fulfillment of the Law, the Lord's Prayer, the house on the rock" },
      { part: "Part 3: The King's Power and the Sending of the Disciples (chapters 8~10, Discourse 2)", content: "Ten miracles of healing, the call of Matthew the tax collector, the sending of the twelve disciples and the warning of persecution" },
      { part: "Part 4: Rejection and Parables of the Kingdom (chapters 11~13, Discourse 3)", content: "\"Come unto me, all ye that labour and are heavy laden,\" the seven great parables of the kingdom including the sower, the mustard seed, and the leaven" },
      { part: "Part 5: Training the Church Community (chapters 14~18, Discourse 4)", content: "Five loaves and two fish, walking on water, Peter's confession of faith (chapter 16), the Mount of Transfiguration, teaching on forgiveness and little children" },
      { part: "Part 6: End-Time Prophecy, the Passion, and the Resurrection (chapters 19~28, Discourse 5)", content: "The entry into Jerusalem, the cleansing of the temple, the Olivet discourse on the end times (chapters 24-25), the Last Supper, death on the cross, the resurrection and the Great Commission (chapter 28)" }
    ],
    mapType: "gospel_galilee",
    youtubeQuery: "에스라하우스 마태복음 노우호",
    quizzes: [
      {
        q: "In Matthew 16:16, in the region of Caesarea Philippi, what was Peter's confession to Jesus — the greatest confession of the Christian faith?",
        options: ["You are John the Baptist, Elijah risen again", "Thou art the Christ, the Son of the living God", "Lord, You are the hero who will topple the Roman Empire", "Lord, You are one of the wise rabbis"],
        ans: 1,
        exp: "The Lord's church was built on the rock-like confession, \"Thou art the Christ, the Son of the living God.\""
      }
    ]
  },
  {
    id: 41,
    name: "Mark",
    engName: "Mark",
    abbr: "Mark",
    testament: "NT",
    category: "Gospels",
    chronologicalOrder: 40,
    chapters: 16,
    author: "John Mark (Peter's interpreter)",
    date: "c. A.D. 55 ~ 65 (the church in Rome)",
    keyVerse: "For even the Son of man came not to be ministered unto, but to minister, and to give his life a ransom for many. (Mark 10:45)",
    theme: "Jesus Christ, who came as the suffering Servant; immediate action and the way of the cross",
    summary: "The first of the four Gospels to be written, it was composed in a concise and dynamic style for believers under persecution in the Roman Empire. The word \"immediately\" (Greek: euthys, \"at once\") is used more than 40 times, showing the scenes of Jesus' ministry vividly, as if racing through them. It focuses on the cross of Jesus, who came as a serving Servant and gave His life as a ransom for many.",
    ezraPerspective: "Pastor Woo-ho Noh points out that Mark is the book in which Mark wrote down the apostle Peter's eyewitness testimony. On the key question of the Gospels, \"But whom say ye that I am?\", he highlights the paradoxical truth that it was a Gentile, a Roman centurion beneath the cross, who confessed, \"Truly this man was the Son of God\" (Mark 15:39).",
    structure: [
      { part: "Part 1: The Servant's Ministry Begins, and the Galilean Ministry (1~8:26)", content: "Baptism and temptation in the wilderness, calling the disciples, sabbath disputes, calming the storm, healing the madman of Gerasa, Jairus's daughter" },
      { part: "Part 2: Discipleship and Predictions of the Passion (8:27~chapter 10)", content: "Peter's confession and three predictions of the Passion, denying oneself and taking up one's cross, healing blind Bartimaeus" },
      { part: "Part 3: The Last Week in Jerusalem (chapters 11~16)", content: "The Palm Sunday entry, cursing the fig tree and cleansing the temple, prayer in the garden of Gethsemane, the crucifixion, the empty tomb and the resurrection" }
    ],
    mapType: "gospel_passion",
    youtubeQuery: "에스라하우스 마가복음 노우호",
    quizzes: [
      {
        q: "According to Mark 10:45, what was the ultimate purpose for which Jesus came to this earth?",
        options: ["To become emperor of every nation in the world", "Not to be served, but to serve, and to give His life as a ransom", "To drive out the Roman army by force", "To reach the peak of learning and philosophy"],
        ans: 1,
        exp: "\"For even the Son of man came not to be ministered unto, but to minister, and to give his life a ransom for many\" is the key verse of Mark."
      }
    ]
  },
  {
    id: 42,
    name: "Luke",
    engName: "Luke",
    abbr: "Luke",
    testament: "NT",
    category: "Gospels",
    chronologicalOrder: 45,
    chapters: 24,
    author: "Luke the physician (a Gentile author)",
    date: "c. A.D. 60 ~ 62",
    keyVerse: "For the Son of man is come to seek and to save that which was lost. (Luke 19:10)",
    theme: "Jesus, who came as a perfect man and the Savior of all humankind, and His compassion for outcasts and Gentiles",
    summary: "A historical record that Luke, a physician and co-worker of the apostle Paul, carefully investigated from the very beginning for the most excellent Theophilus. It is rich in Jesus' humanity and prayer, the work of the Holy Spirit, and Jesus' warm love for those pushed aside in the society of the time: women, the poor, tax collectors, Samaritans, and Gentiles. The parable of the prodigal son, the parable of the good Samaritan, and the story of Zacchaeus appear only in Luke.",
    ezraPerspective: "In the Ezra Bible Course, Luke is treated as \"the warmest and most embracing book of salvation in the Bible.\" Pastor Woo-ho Noh conveys the heart of God the Father, who finds the lost sheep, the lost coin, and the prodigal son in chapter 15 and dances for joy, and lets us see the tears of Jesus, who seeks the lost to the very end and saves them.",
    structure: [
      { part: "Part 1: The Birth and Preparation of the Savior (1~4:13)", content: "The announcements of the births of John the Baptist and Jesus, Mary's song, the shepherds' worship, the temple visit at age 12, Jesus' genealogy (back to Adam and God), the temptation in the wilderness" },
      { part: "Part 2: The Galilean Ministry (4:14~9:50)", content: "Proclaiming the Jubilee in the synagogue at Nazareth (\"The Spirit of the Lord is upon me\"), calling Peter, the sermon on the plain, sending out the seventy" },
      { part: "Part 3: The Journey toward Jerusalem (9:51~19:27, material unique to Luke)", content: "The parable of the good Samaritan, Martha and Mary, the three parables of the lost (chapter 15), the rich man and Lazarus, the salvation of Zacchaeus" },
      { part: "Part 4: The Passion, Resurrection, and Ascension (19:28~chapter 24)", content: "Weeping over the city at the sight of the temple, the Last Supper, saving one of the thieves on the cross, the two disciples on the road to Emmaus, the Ascension" }
    ],
    mapType: "luke_journey",
    youtubeQuery: "에스라하우스 누가복음 노우호",
    quizzes: [
      {
        q: "In Luke 19, who was the chief tax collector of Jericho who climbed a sycamore tree to see Jesus, was saved, and resolved to give half his goods to the poor?",
        options: ["Matthew", "Zacchaeus", "Nicodemus", "Bartimaeus"],
        ans: 1,
        exp: "After meeting Jesus, Zacchaeus repented and promised full restitution, and Jesus declared, \"This day is salvation come to this house.\""
      }
    ]
  },
  {
    id: 43,
    name: "John",
    engName: "John",
    abbr: "John",
    testament: "NT",
    category: "Gospels",
    chronologicalOrder: 46,
    chapters: 21,
    author: "The apostle John",
    date: "c. A.D. 85 ~ 90 (Ephesus)",
    keyVerse: "But these are written, that ye might believe that Jesus is the Christ, the Son of God; and that believing ye might have life through his name. (John 20:31)",
    theme: "Jesus Christ the Son of God, the Word in the beginning; seven great signs and seven great \"ego eimi (I am...)\" sayings",
    summary: "The fourth Gospel, written with a unique spiritual insight quite different from the Synoptic Gospels (Matthew, Mark, Luke). Beginning with \"In the beginning was the Word (Logos),\" it testifies that Jesus is God Himself made flesh. Through seven carefully chosen signs, from the wedding at Cana to the raising of Lazarus, and seven great \"I am\" sayings, such as \"I am the bread of life,\" \"I am the light of the world,\" and \"I am the resurrection, and the life,\" it reveals the way to eternal life.",
    ezraPerspective: "Pastor Woo-ho Noh stresses John 3:16 as the diamond-ring verse of the whole Bible, yet he also teaches that the life of John's Gospel is not only the saving of souls but the intimate union of being rooted in Jesus, through the 'Upper Room Discourse' (the promise of the Holy Spirit the Comforter and the parable of the vine) in chapters 14~17.",
    structure: [
      { part: "Part 1: The Incarnation of the Word and the Testimony (ch. 1)", content: "The Logos in the beginning, light and darkness, the testimony of John the Baptist ('the Lamb of God, who takes away the sin of the world'), the disciples follow" },
      { part: "Part 2: The Book of Signs (ch. 2~12, the seven great signs)", content: "Turning water into wine, the conversation with Nicodemus (being born again), the Samaritan woman (living water), healing the man sick for 38 years, the five loaves and two fish and the bread of life, healing the man born blind, raising Lazarus, Mary's alabaster jar of perfume" },
      { part: "Part 3: The Book of Glory - The Upper Room Discourse (ch. 13~17)", content: "Washing the disciples' feet, the new commandment, I am the way, the truth, and the life (ch. 14), the true vine (ch. 15), the Holy Spirit the Comforter (ch. 16), the high priestly prayer of intercession (ch. 17)" },
      { part: "Part 4: The Cross and Resurrection, Restoration by the Sea of Tiberias (ch. 18~21)", content: "The arrest and trial before Pilate, death on the cross ('It is finished'), Thomas' doubt resolved, on the shore of Tiberias Jesus asks Peter three times, 'Do you love me?'" }
    ],
    mapType: "john_seven_signs",
    youtubeQuery: "에스라하우스 요한복음 노우호",
    quizzes: [
      {
        q: "In John's Gospel, what was the first miracle (sign) Jesus performed, at a wedding feast in Galilee?",
        options: ["Walking on water", "Turning water into wine", "Feeding five thousand with five loaves and two fish", "Raising Lazarus"],
        ans: 1,
        exp: "At the wedding feast in Cana, turning water into the finest wine was Jesus' first sign (John 2)."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // [신약 27권] - 2. 신약 역사서 1권
  // --------------------------------------------------------------------------
  {
    id: 44,
    name: "Acts",
    engName: "Acts",
    abbr: "Acts",
    testament: "NT",
    category: "History",
    chronologicalOrder: 47,
    chapters: 28,
    author: "Luke the physician",
    date: "c. A.D. 62 ~ 63 (Roman prison)",
    keyVerse: "But you will receive power when the Holy Spirit has come upon you. You will be witnesses to me in Jerusalem, in all Judea and Samaria, and to the uttermost parts of the earth. (Acts 1:8)",
    theme: "The coming of the Holy Spirit and the birth of the church, the geographic spread of the gospel (from Jerusalem to Rome)",
    summary: "This is the explosive history of the early church, born from the ascension of the risen Jesus and the coming of the Holy Spirit at Pentecost in Mark's upper room. Chapters 1-12 record the evangelizing of Jerusalem, Judea, and Samaria centered on Peter (Stephen's martyrdom, Paul's conversion, the salvation of the Gentile Cornelius), and chapters 13-28 record the march of the gospel: the apostle Paul's first to third missionary journeys, his arrest in Jerusalem, and his arrival in Rome through the storm of Euroclydon, where he boldly preached the kingdom of God.",
    ezraPerspective: "In Pastor Woo-ho Noh's Ezra course, Acts is 'the geographic and historical seedbed of the apostle Paul's 13 epistles.' He stresses that the three-dimensional meaning of the New Testament epistles comes alive only when you slot Galatians, 1 and 2 Thessalonians, 1 and 2 Corinthians, Romans, Ephesians, Philippians, Colossians, and Philemon into their proper places along the journey of Acts chapters 13 to 28.",
    structure: [
      { part: "Part 1: The Jerusalem Church and the Coming of the Holy Spirit (ch. 1~7)", content: "The ascension and the promise, the coming of the Holy Spirit at Pentecost and tongues, healing the lame man, Ananias and Sapphira, choosing the seven deacons, Stephen's martyrdom" },
      { part: "Part 2: Spreading into Judea and Samaria (ch. 8~12)", content: "Philip's preaching in Samaria and the Ethiopian eunuch, Saul's conversion on the road to Damascus, the Holy Spirit falling on Cornelius' household, the founding of the church in Antioch, James' martyrdom and Peter's escape from prison" },
      { part: "Part 3: Paul's First, Second, and Third Missionary Journeys (13~21:16)", content: "First journey (Cyprus, Galatia), the Jerusalem Council (ch. 15), second journey (Philippi, Thessalonica, Athens, Corinth), third journey (Ephesus, the school of Tyrannus)" },
      { part: "Part 4: Paul's Arrest and Transfer to Rome (21:17~ch. 28)", content: "Arrest at the temple in Jerusalem, defenses before Felix, Festus, and Agrippa, the voyage to Rome and the storm of Euroclydon, the miracle on the island of Malta, preaching the gospel unhindered in his rented house in Rome" }
    ],
    mapType: "paul_journeys",
    youtubeQuery: "에스라하우스 사도행전 노우호",
    quizzes: [
      {
        q: "In Acts 1:8, what is the step-by-step geographic order in which the gospel would be witnessed when the Holy Spirit came?",
        options: ["Rome → Athens → Alexandria → Jerusalem", "Jerusalem → all Judea → Samaria → the ends of the earth", "Galilee → Egypt → Babylon → Persia", "Bethlehem → Nazareth → Jericho → Zion"],
        ans: 1,
        exp: "'You will be witnesses to me in Jerusalem, in all Judea and Samaria, and to the uttermost parts of the earth' is the table of contents of the whole book of Acts and the compass of the gospel's spread."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // [신약 27권] - 3. 바울서신 13권 (교회서신 9권 + 목회서신 4권)
  // --------------------------------------------------------------------------
  {
    id: 45,
    name: "Romans",
    engName: "Romans",
    abbr: "Rom",
    testament: "NT",
    category: "Pauline Epistles",
    chronologicalOrder: 48,
    chapters: 16,
    author: "The apostle Paul (written down by Tertius)",
    date: "c. A.D. 57 (during a three-month stay in Corinth)",
    keyVerse: "For therein is the righteousness of God revealed from faith to faith: as it is written, The just shall live by faith. (Rom 1:17)",
    theme: "The gospel of God that gives salvation to everyone who believes, justification by faith and sanctification, the holy life of believers",
    summary: "This book is called the summit of Christian doctrine and the diamond of the Bible. It lays out in perfect logical order the total depravity and sin of all humanity (ch. 1-3), justification through the blood of Jesus Christ (ch. 4-5), sanctification and victory in the Holy Spirit (ch. 6-8), God's providence for Israel's salvation (ch. 9-11), and the practical ethics of believers, 'present your bodies a living sacrifice, holy' (ch. 12-16).",
    ezraPerspective: "Pastor Woo-ho Noh urges us not to read Romans as mere doctrinal knowledge, but to see Paul's missionary passion: why, before his mission to Spain, he sent this majestic gospel of salvation to the church in Rome. In particular, Romans 8's 'Who shall separate us from the love of Christ?' is the believer's eternal hymn for overcoming tribulation.",
    structure: [
      { part: "Part 1: Human Sin and the Need for Righteousness (1~3:20)", content: "The idolatry and corruption of the Gentiles, the hypocrisy of the Jews, there is none righteous, no, not one" },
      { part: "Part 2: The Righteousness of God Received by Faith (3:21~ch. 5)", content: "Jesus Christ the atoning sacrifice, Abraham's faith, peace as the fruit of justification and joy in tribulation" },
      { part: "Part 3: Sanctification and Victory in the Holy Spirit (ch. 6~8)", content: "Baptism and death to sin, the law and the inner struggle (O wretched man that I am!), the law of the Spirit and the love from which nothing can separate us (ch. 8)" },
      { part: "Part 4: Israel's Election and Salvation (ch. 9~11)", content: "The sovereignty of the potter, the righteousness of faith, grafting into the olive tree and the salvation of all Israel" },
      { part: "Part 5: The Life of a Holy, Living Sacrifice (ch. 12~16)", content: "Using spiritual gifts, the principle of love, submission to governing authorities, caring for the weak, Paul's mission plans and greetings to fellow workers" }
    ],
    mapType: "paul_to_rome",
    youtubeQuery: "에스라하우스 로마서 노우호",
    quizzes: [
      {
        q: "In Romans 8:1-2, why is there no condemnation at all for those who are in Christ Jesus?",
        options: ["Because our moral good deeds are perfect", "Because the law of the Spirit of life in Christ Jesus has set us free from the law of sin and death", "Because we kept the law 100%", "Because people in the world praise us"],
        ans: 1,
        exp: "It is the great declaration of victory: 'the law of the Spirit of life in Christ Jesus has made you free from the law of sin and of death.'"
      }
    ]
  },
  {
    id: 46,
    name: "1 Corinthians",
    engName: "1 Corinthians",
    abbr: "1 Cor",
    testament: "NT",
    category: "Pauline Epistles",
    chronologicalOrder: 49,
    chapters: 16,
    author: "The apostle Paul",
    date: "c. A.D. 55 (during his stay in Ephesus)",
    keyVerse: "But now faith, hope, and love remain—these three. The greatest of these is love. (1 Cor 13:13)",
    theme: "Solving division and moral problems in the church, the right use of spiritual gifts (gifts of grace), and the hope of resurrection",
    summary: "This is the pastoral prescription Paul sent when all kinds of practical problems broke out in the church at Corinth, a port city that was a center of trade and culture but full of immorality and idolatry: party strife, incest, lawsuits between church members in secular courts, the question of food offered to idols, disorder in worship, and the abuse of spiritual gifts. He sets the church right with the shining truths of the message of the cross (ch. 1), the love chapter (ch. 13), and the resurrection chapter (ch. 15).",
    ezraPerspective: "In the Ezra course, 1 Corinthians is seen as a mirror warning 'what tragedies happen when the church is stained by the world's secular culture.' Pastor Woo-ho Noh insists that we must take deeply to heart the teaching of chapter 13: however much we boast of every spiritual gift, such as tongues and prophecy, without love we are only sounding brass and a clanging cymbal.",
    structure: [
      { part: "Part 1: Rebuke of Party Divisions in the Church (ch. 1~4)", content: "Divisions into Paul's party, Apollos' party, Cephas' party, and Christ's party; the message of the cross seems foolish but is the power of God" },
      { part: "Part 2: Moral Corruption and Lawsuits (ch. 5~6)", content: "The command to expel the sexually immoral man, rebuke of believers suing each other in secular courts, the believer's body is the temple of the Holy Spirit" },
      { part: "Part 3: Answers on Marriage and Food Offered to Idols (ch. 7~10)", content: "Marriage and singleness, food offered to idols and the believer's freedom and self-restraint, Paul's example of giving up his apostolic rights" },
      { part: "Part 4: Order in Worship and Spiritual Gifts (ch. 11~14)", content: "The proper attitude at the Lord's Supper, the variety of the Spirit's gifts and the image of the body (ch. 12), the love chapter (ch. 13), order in prophecy and tongues (ch. 14)" },
      { part: "Part 5: The Certainty of the Resurrection and Final Exhortations (ch. 15~16)", content: "Christ the firstfruits of the resurrection, the glory of the resurrection body, the collection for the believers in Jerusalem, farewell greetings" }
    ],
    mapType: "corinth_church",
    youtubeQuery: "에스라하우스 고린도전서 노우호",
    quizzes: [
      {
        q: "In 1 Corinthians 13, what is the greatest virtue, without which even faith that could move mountains and the tongues of angels are nothing?",
        options: ["Knowledge", "Power", "Love", "Zeal"],
        ans: 2,
        exp: "It teaches, 'If I don't have love, I am nothing... The greatest of these is love.'"
      }
    ]
  },
  {
    id: 47,
    name: "2 Corinthians",
    engName: "2 Corinthians",
    abbr: "2 Cor",
    testament: "NT",
    category: "Pauline Epistles",
    chronologicalOrder: 50,
    chapters: 13,
    author: "The apostle Paul",
    date: "c. A.D. 55 ~ 56 (Macedonia)",
    keyVerse: "And he said unto me, My grace is sufficient for thee: for my strength is made perfect in weakness. Most gladly therefore will I rather glory in my infirmities, that the power of Christ may rest upon me. (2 Cor 12:9)",
    theme: "A true defense of apostleship and a ministry of tears, treasure in jars of clay, the grace that is strength in weakness",
    summary: "Of all Paul's letters, this is the book in which his most personal and emotional tears and feelings are poured out most honestly. When false apostles slandered Paul's apostleship and mocked his appearance and speech, Paul boasted not of his impressive career but of the 'marks of weakness' he had suffered for the gospel, the many beatings, shipwrecks, hunger, and imprisonments, and he defended the legitimacy of his apostleship as a minister of the new covenant.",
    ezraPerspective: "Pastor Woo-ho Noh explains that in 2 Corinthians we meet 'the deepest pain of a pastor and the comfort of tears.' He teaches that the treasure of exceeding great power (Christ) is held within us, who are like jars of clay, and that, like Paul's thorn in the flesh, our weakness becomes a channel of blessing where God's power rests fully.",
    structure: [
      { part: "Part 1: Comfort in Affliction and Explanation of Travel Plans (ch. 1~2)", content: "The God of all comfort, severe affliction in Asia, explaining why his visit to Corinth was delayed, forgiving the one who repented" },
      { part: "Part 2: The Glory of Ministers of the New Covenant (ch. 3~7)", content: "A letter of Christ written not with ink but with the Spirit, treasure in jars of clay (ch. 4), a new creation (ch. 5), the ministry of reconciliation" },
      { part: "Part 3: Appeal for the Collection for the Jerusalem Church (ch. 8~9)", content: "The moving example of giving by the Macedonian churches, God loves a cheerful giver, He supplies seed to the sower and bread for food" },
      { part: "Part 4: Paul's Defense of His Apostleship and Boasting in Weakness (ch. 10~13)", content: "Refuting the pride of false apostles, Paul's list of sufferings (ch. 11), the vision of the third heaven and the thorn in the flesh (ch. 12), the benediction" }
    ],
    mapType: "paul_travels_macedonia",
    youtubeQuery: "에스라하우스 고린도후서 노우호",
    quizzes: [
      {
        q: "In 2 Corinthians 5:17, what new identity is proclaimed for those who are in Christ Jesus?",
        options: ["Condemner by the law", "A new creation", "Judge of the world", "Religious philosopher"],
        ans: 1,
        exp: "It is the great proclamation: 'Therefore if anyone is in Christ, he is a new creation. The old things have passed away. Behold, all things have become new.'"
      }
    ]
  },
  {
    id: 48,
    name: "Galatians",
    engName: "Galatians",
    abbr: "Gal",
    testament: "NT",
    category: "Pauline Epistles",
    chronologicalOrder: 41,
    chapters: 6,
    author: "The apostle Paul",
    date: "c. A.D. 48 ~ 49 (just before the Jerusalem Council)",
    keyVerse: "I have been crucified with Christ, and it is no longer I that live, but Christ lives in me. That life which I now live in the flesh, I live by faith in the Son of God, who loved me, and gave himself up for me. (Gal 2:20)",
    theme: "The great charter of Christian freedom: there is no other gospel! Justification by faith alone and the nine fruits of the Spirit",
    summary: "This is the declaration of Christian freedom in which Paul, in fierce language, cried out, 'There is no other gospel; even if an angel from heaven preaches another gospel, let him be cursed,' when Jewish legalists infiltrated the Galatian churches he had founded on his first missionary journey and misled the believers, saying, 'Believing in Jesus alone is not enough; you must be circumcised and keep the law of Moses to be saved.'",
    ezraPerspective: "Pastor Woo-ho Noh introduces Galatians as 'the absolute stronghold of the gospel, which the reformer Martin Luther confessed was like his wife Katharina von Bora.' He stresses that every attempt to be made righteous by works of the law makes the cross of no effect, and that when we walk by the Spirit we bear nine beautiful fruits such as love, joy, and peace.",
    structure: [
      { part: "Part 1: There Is No Other Gospel & Paul's Apostleship (ch. 1~2)", content: "A stern warning against another gospel, a gospel of revelation not learned from man, the incident at Antioch where he rebuked Peter for hypocrisy, crucified with Christ (2:20)" },
      { part: "Part 2: Righteousness by Faith (ch. 3~4)", content: "O foolish Galatians, Abraham's faith, the law's role as a tutor (schoolmaster), the Spirit not of slaves but of sons, the allegory of Hagar and Sarah" },
      { part: "Part 3: The Believer's Freedom and the Fruit of the Spirit (ch. 5~6)", content: "Christ has set you free, so do not be entangled again with a yoke of slavery; the works of the flesh and the nine fruits of the Spirit (ch. 5); bear one another's burdens; bearing the marks of Jesus" }
    ],
    mapType: "galatia_churches",
    youtubeQuery: "에스라하우스 갈라디아서 노우호",
    quizzes: [
      {
        q: "Among the 'nine fruits of the Spirit' in Galatians 5:22-23, which fruit is mentioned first?",
        options: ["Faithfulness", "Love", "Self-control", "Gentleness"],
        ans: 1,
        exp: "It goes on: 'But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, and self-control.'"
      }
    ]
  },
  {
    id: 49,
    name: "Ephesians",
    engName: "Ephesians",
    abbr: "Eph",
    testament: "NT",
    category: "Pauline Epistles (Prison Epistles)",
    chronologicalOrder: 51,
    chapters: 6,
    author: "The apostle Paul",
    date: "c. A.D. 60 ~ 62 (Roman prison)",
    keyVerse: "For by grace you have been saved through faith, and that not of yourselves; it is the gift of God, not of works, that no one would boast. (Eph 2:8-9)",
    theme: "The glorious mystery of the church, Christ who unites all things, and the believer's full armor of God",
    summary: "One of Paul's four great Prison Epistles (Ephesians, Philippians, Colossians, Philemon), this is the peak of the doctrine of the church. It covers God's eternal predestination and plan of redemption before the foundation of the world (ch. 1), the grace that made us alive when we were dead in trespasses and sins (ch. 2), the mystery of the church in which Gentiles and Jews become one body in Christ (ch. 3), and the ethics of a Spirit-filled home and society, along with the full armor of God to stand against the schemes of the devil (ch. 6).",
    ezraPerspective: "In the Ezra Bible Course, Ephesians is the book that makes us realize 'how glorious and holy, on a cosmic scale, the church, the gathering of saved believers, is as a living body.' Pastor Woo-ho Noh urges us to arm ourselves spiritually every day with the full armor of Ephesians 6 (the belt of truth, the breastplate of righteousness, the shoes of the gospel of peace, the shield of faith, the helmet of salvation, the sword of the Spirit).",
    structure: [
      { part: "Part 1: The Church's Spiritual Blessings and Predestination (ch. 1~3)", content: "Every spiritual blessing in the heavenly places, the seal of the Holy Spirit, Paul's prayer, salvation as a gift received by grace, the hostility abolished through the cross, the mystery of the church" },
      { part: "Part 2: The Unity of Believers and Everyday Ethics (ch. 4~5)", content: "There is one body and one Spirit, put off the old man and put on the new man, walk as children of light, the love and submission of husbands and wives (the mystery of Christ and the church)" },
      { part: "Part 3: Order in the Home and Spiritual Warfare (ch. 6)", content: "Parents and children, servants and masters, putting on the full armor of God to stand against the devil, and praying always in the Spirit" }
    ],
    mapType: "ephesus_city",
    youtubeQuery: "에스라하우스 에베소서 노우호",
    quizzes: [
      {
        q: "In Ephesians 6, what is mentioned as the only offensive weapon to take up against the schemes of the devil?",
        options: ["The shield of faith", "The sword of the Spirit, which is the word of God", "The breastplate of righteousness", "The helmet of salvation"],
        ans: 1,
        exp: "It clearly says, 'Take the helmet of salvation, and the sword of the Spirit, which is the word of God.'"
      }
    ]
  },
  {
    id: 50,
    name: "Philippians",
    engName: "Philippians",
    abbr: "Phil",
    testament: "NT",
    category: "Pauline Epistles (Prison Epistles)",
    chronologicalOrder: 52,
    chapters: 4,
    author: "The apostle Paul",
    date: "c. A.D. 61 ~ 62 (Roman prison)",
    keyVerse: "Rejoice in the Lord alway: and again I say, Rejoice... I can do all things through Christ which strengtheneth me. (Phil 4:4, 13)",
    theme: "The letter of joy: the true joy of a Christian that springs up even in prison, and the humility of Christ",
    summary: "Though Paul was bound in the cold chains of a Roman prison, this is 'the book of joy,' in which the word 'joy' appears as many as 16 times in just four chapters. He gives thanks to the beloved church at Philippi, the first city of Macedonia, which had shared in Paul's gospel ministry in every way, materially and spiritually, and he urges them to have the mind of Christ Jesus, who humbled Himself and became obedient to the point of death on the cross.",
    ezraPerspective: "Pastor Woo-ho Noh expounds Philippians as 'the secret of a Christian's absolute joy that rises above circumstances.' It was not the people outside the prison who pitied Paul locked inside; rather, Paul comforted the believers outside and cried out, 'Rejoice in the Lord always.' That paradox is a spiritual richness only those filled with Jesus alone can have.",
    structure: [
      { part: "Chapter 1: Imprisonment Actually Advances the Gospel", content: "A prayer of thanks for the church at Philippi, rejoicing even when Christ is preached out of envy and strife, 'For to me to live is Christ, and to die is gain'" },
      { part: "Chapter 2: Christ's Kenosis (Self-Emptying) and Humility", content: "Do nothing through rivalry or conceit, the mind of Christ Jesus (being in the form of God, He humbled Himself), praise for Timothy and Epaphroditus" },
      { part: "Chapter 3: A Life Pressing Toward the Goal", content: "Put no confidence in the flesh, counting all things as rubbish, the race toward the goal of the resurrection, our citizenship is in heaven" },
      { part: "Chapter 4: Rejoice Always & the Secret of Contentment", content: "In nothing be anxious, but make your requests known through prayer and petition; the secret of being content in every situation; 'I can do all things through Christ which strengtheneth me'" }
    ],
    mapType: "philippi_colony",
    youtubeQuery: "에스라하우스 빌립보서 노우호",
    quizzes: [
      {
        q: "In Philippians 3:20, where does it declare that the eternal nationality (citizenship) to which Christians ultimately belong is?",
        options: ["The Roman Empire", "The temple in Jerusalem", "Heaven", "The land of Galilee"],
        ans: 2,
        exp: "It proclaims, 'For our citizenship is in heaven, from where we also wait for a Savior, the Lord Jesus Christ.'"
      }
    ]
  },
  {
    id: 51,
    name: "Colossians",
    engName: "Colossians",
    abbr: "Col",
    testament: "NT",
    category: "Pauline Epistles (Prison Epistles)",
    chronologicalOrder: 53,
    chapters: 4,
    author: "The apostle Paul",
    date: "c. A.D. 60 ~ 62 (Roman prison)",
    keyVerse: "He is the image of the invisible God, the firstborn of all creation. For by him all things were created... He is before all things, and in him all things are held together. (Col 1:15-17)",
    theme: "The absolute supremacy of Christ, the head over all, and the defeat of false philosophy and the Gnostic heresy",
    summary: "When syncretistic heresies such as angel worship, asceticism, and empty philosophy (early Gnosticism) had infiltrated the church at Colossae, founded by Epaphras, Paul wrote this book proclaiming the essence of Christology: 'Christ alone is enough!' It reveals that Christ is the image of the invisible God and the head of the church, and that in Him all the fullness of the Godhead dwells bodily.",
    ezraPerspective: "In the Ezra course, Colossians is explained as a twin letter to Ephesians (Ephesians centers on the church, the body of Christ; Colossians centers on Christ, the head of the church). Pastor Woo-ho Noh stresses that we must not be led astray by the world's philosophy and empty deceit, but become mature believers who seek and set our minds on the things above.",
    structure: [
      { part: "Part 1: The Supremacy of Christ and Paul's Ministry (ch. 1)", content: "Thanksgiving for the Colossian church, transferred from the power of darkness into the kingdom of His beloved Son, the hymn to Christ the Creator and head of the church, Paul made a minister of the church" },
      { part: "Part 2: Warning Against Empty Philosophy and False Teaching (ch. 2)", content: "In Christ are hidden all the treasures of wisdom and knowledge, through the cross He disarmed the rulers and authorities, rejecting legalism, angel worship, and asceticism" },
      { part: "Part 3: The Life of the New Man and Everyday Ethics (ch. 3~4)", content: "Seek the things that are above, put to death your members on the earth, put on the new man, ethics for home and work, continue in prayer and stay alert with thanksgiving, greetings from fellow workers" }
    ],
    mapType: "colossae_valley",
    youtubeQuery: "에스라하우스 골로새서 노우호",
    quizzes: [
      {
        q: "In Colossians 2:3, what does it declare is hidden in Jesus Christ?",
        options: ["Vast amounts of the world's gold and jewels", "All the treasures of wisdom and knowledge", "The authority of the Roman emperor", "Weapons for every war"],
        ans: 1,
        exp: "It declares, 'in whom are hidden all the treasures of wisdom and knowledge.'"
      }
    ]
  },
  {
    id: 52,
    name: "1 Thessalonians",
    engName: "1 Thessalonians",
    abbr: "1 Thess",
    testament: "NT",
    category: "Pauline Epistles",
    chronologicalOrder: 42,
    chapters: 5,
    author: "The apostle Paul",
    date: "c. A.D. 51 (in Corinth, during the second missionary journey)",
    keyVerse: "Always rejoice. Pray without ceasing. In everything give thanks, for this is the will of God in Christ Jesus toward you. (1 Thess 5:16-18)",
    theme: "The work of faith, the labor of love, the patience of hope, and the hope of the return of the Lord Jesus Christ",
    summary: "Paul had stayed only three weeks in Thessalonica, the capital of Macedonia, preaching the gospel on his second missionary journey. This is the letter of comfort and praise he sent to the young church there after receiving Timothy's joyful report that, even under fierce persecution from the Jews, they had spread the news of their faith throughout Macedonia and Achaia. In every chapter he mentions the Lord's coming again (the Second Coming) and urges them to meet the Lord in holiness.",
    ezraPerspective: "Pastor Woo-ho Noh presents 1 Thessalonians as 'the model of the burning purity and Second Coming faith of the earliest church believers.' He stresses the three pillars by which believers overcome the world, 'the work of faith, the labor of love, and the patience of hope,' and teaches that chapter 5's 'Always rejoice, pray without ceasing, in everything give thanks' is the Christian's golden rule.",
    structure: [
      { part: "Chapter 1: The Thessalonian Church, a Model of Faith", content: "A Trinitarian greeting, praise for their work of faith, labor of love, and patience of hope, becoming an example to the whole Greek region" },
      { part: "Chapter 2: Paul's Pastoral Heart, Like a Nursing Mother and a Father", content: "Not with flattery or deceit, but only to please God; laboring night and day like a nursing mother caring for her children" },
      { part: "Chapter 3: Timothy's Report and Paul's Joy", content: "Great comfort from the news that they kept their faith in affliction, stand firm in the Lord" },
      { part: "Chapter 4: A Life of Holiness and the Hope of Resurrection for Those Who Sleep", content: "For this is the will of God, your sanctification (abstaining from sexual immorality); the trumpet sound and the Lord's return in the air when He comes down" },
      { part: "Chapter 5: The Life of the Children of Light and Exhortations", content: "That day will come like a thief; always rejoice, pray without ceasing, in everything give thanks; may your whole spirit, soul, and body be preserved" }
    ],
    mapType: "thessalonica_port",
    youtubeQuery: "에스라하우스 데살로니가전서 노우호",
    quizzes: [
      {
        q: "In 1 Thessalonians 5:16-18, what are the three commands named as 'the will of God in Christ Jesus toward you'?",
        options: ["Fast, give offerings, keep silent", "Always rejoice, pray without ceasing, in everything give thanks", "Sharpen your sword, fight, conquer", "Be careful, be suspicious, step back"],
        ans: 1,
        exp: "It is the famous word: 'Always rejoice. Pray without ceasing. In everything give thanks, for this is the will of God in Christ Jesus toward you.'"
      }
    ]
  },
  {
    id: 53,
    name: "2 Thessalonians",
    engName: "2 Thessalonians",
    abbr: "2 Thess",
    testament: "NT",
    category: "Pauline Epistles",
    chronologicalOrder: 43,
    chapters: 3,
    author: "The apostle Paul",
    date: "c. A.D. 51 ~ 52 (Corinth, soon after the first letter)",
    keyVerse: "We commanded you this: If anyone is not willing to work, don't let him eat. (2 Thess 3:10)",
    theme: "Correcting misunderstandings about the Second Coming, the appearance of the man of lawlessness (the Antichrist), and faithful everyday work",
    summary: "Soon after 1 Thessalonians was sent, a forged letter and rumors claiming 'the day of the Lord has already come' caused end-times confusion: church members abandoned their jobs, stopped working, and lived idly. Paul wrote this letter right away to set things straight. He makes clear that before the Lord comes, 'the falling away' and the appearance of 'the man of lawlessness (the son of destruction)' must come first, and he sternly commands them to work quietly and eat their own bread.",
    ezraPerspective: "In the Ezra Bible Course, Pastor Woo-ho Noh presents 2 Thessalonians as the clearest biblical basis for crushing date-setting doomsday preachers and cult groups that make false claims about the Second Coming. He insists that true faith in the Second Coming is not giving up daily life and fleeing to the mountains, but a healthy everyday faithfulness, working hard with sweat at the job given to us today.",
    structure: [
      { part: "Chapter 1: The Perseverance of Believers and Righteous Judgment at His Coming", content: "Faith and love growing in affliction, eternal punishment and the glory of believers when the Lord Jesus comes in flaming fire" },
      { part: "Chapter 2: Warning About the Man of Lawlessness (the Antichrist) and Deception", content: "Do not be quickly shaken by claims that the day of the Lord has come; first the falling away and the appearance of the man of lawlessness; receive the love of the truth" },
      { part: "Chapter 3: Warning Against Idleness and the Command to Work", content: "Work quietly and eat your own bread; if anyone is not willing to work, don't let him eat; do not grow weary in doing good" }
    ],
    mapType: "thessalonica_work",
    youtubeQuery: "에스라하우스 데살로니가후서 노우호",
    quizzes: [
      {
        q: "In 2 Thessalonians 3:10, what firm instruction was given to those who were idle and not working, using the Second Coming as an excuse?",
        options: ["Give all your property to the church", "If anyone is not willing to work, don't let him eat", "Do no work at all and only pray", "Throw them into prison at once"],
        ans: 1,
        exp: "He warned, 'For even when we were with you, we commanded you this: If anyone is not willing to work, don't let him eat.'"
      }
    ]
  },
  {
    id: 54,
    name: "1 Timothy",
    engName: "1 Timothy",
    abbr: "1 Tim",
    testament: "NT",
    category: "Pauline Epistles (Pastoral Epistles)",
    chronologicalOrder: 55,
    chapters: 6,
    author: "The apostle Paul",
    date: "c. A.D. 63 ~ 65 (after release from his first Roman imprisonment)",
    keyVerse: "But if I tarry long, that thou mayest know how thou oughtest to behave thyself in the house of God, which is the church of the living God, the pillar and ground of the truth. (1 Tim 3:15)",
    theme: "The spiritual attitude of a pastor and the right administration of the church, the qualifications of church officers, and warnings against false teaching",
    summary: "This is the pastoral manual Paul sent, after his first release from prison in Rome, to Timothy, his spiritual son and a young pastor in charge of the church in Ephesus. It teaches the defense of sound doctrine, prayer in public worship and the dignity of men and women believers, the spiritual qualifications of overseers (elders) and deacons (ch. 3), pastoral ethics for dealing with believers of every age in the church, and a contented heart along with a warning against the love of money.",
    ezraPerspective: "Pastor Woo-ho Noh stresses 1 Timothy as 'the pastoral constitution that church officers and ministers today must engrave on their bones.' A church office is not honor or power but a cross of sacrifice and service, and he shows that 1 Timothy 6:10, 'the love of money is a root of all kinds of evil,' is the trap leaders must guard against most.",
    structure: [
      { part: "Chapter 1: Sound Teaching and Paul's Testimony of Thanks", content: "Do not pay attention to myths and genealogies, the good use of the law, the testimony of grace: 'sinners, of whom I am chief'" },
      { part: "Chapter 2: Order in Public Worship and Intercession", content: "Prayer for kings and all who are in high positions, God wants all people to be saved, modest dress" },
      { part: "Chapter 3: The Qualifications of Overseers and Deacons", content: "Blameless, self-controlled, managing his own household well; the church is the house of the living God, the pillar and ground of the truth" },
      { part: "Chapter 4: Warning About Apostasy and the Pastor's Self-Discipline", content: "False teaching that forbids marriage and abstains from foods; reject profane and old wives' fables and train yourself toward godliness" },
      { part: "Chapters 5~6: Caring for Believers and a Warning About Wealth", content: "Honoring widows and elders, the conduct of servants, godliness with contentment is great gain, the love of money is a root of all kinds of evil, fight the good fight of faith" }
    ],
    mapType: "ephesus_pastoral",
    youtubeQuery: "에스라하우스 디모데전서 노우호",
    quizzes: [
      {
        q: "In 1 Timothy 6:10, what is the 'root of all kinds of evil,' which some coveted, were led astray from the faith, and pierced themselves through with many sorrows?",
        options: ["Lust for power", "The love of money", "Boasting of knowledge", "Laziness"],
        ans: 1,
        exp: "It warns, 'For the love of money is a root of all kinds of evil. Some have been led astray from the faith in their greed, and have pierced themselves through with many sorrows.'"
      }
    ]
  },
  {
    id: 55,
    name: "2 Timothy",
    engName: "2 Timothy",
    abbr: "2 Tim",
    testament: "NT",
    category: "Pauline Epistles (Pastoral Epistles)",
    chronologicalOrder: 57,
    chapters: 4,
    author: "The apostle Paul",
    date: "c. A.D. 67 (underground dungeon, second Roman imprisonment)",
    keyVerse: "I have fought the good fight. I have finished the course. I have kept the faith. From now on, the crown of righteousness is stored up for me, which the Lord, the righteous judge, will give to me on that day (2 Tim 4:7-8)",
    theme: "Paul's last will: suffer hardship with the gospel, preach the word, the crown of righteousness",
    summary: "This is the 'last will and testament letter' of the apostle Paul, locked up again in the cold underground Mamertine Prison amid the Roman emperor Nero's fierce persecution of Christians, facing execution (beheading). In the last days, when apostasy and betrayal are everywhere, he solemnly charges his fearful spiritual son Timothy to suffer hardship with the gospel, stand firm on the rock of Scripture, and preach the word in season and out of season.",
    ezraPerspective: "In Pastor Woo-ho Noh's Ezra course, this is the book that moves people to the deepest silence. 2 Timothy 3:16 ('All Scripture is given by inspiration of God...') and Paul's final song of victory in chapter 4, 'I have fought the good fight, I have finished the course, I have kept the faith,' are the grandest and most moving last words, left by an apostle who had run all his life for the gospel, just before he stood before God.",
    structure: [
      { part: "Chapter 1: Encouragement to Faithful Faith", content: "The sincere faith of his grandmother Lois and his mother Eunice, suffer hardship with the gospel, the devotion of Onesiphorus" },
      { part: "Chapter 2: A Good Soldier and a Faithful Worker", content: "Entrust it to faithful people; the images of the soldier, the athlete, and the farmer; vessels of gold and silver in a great house (the importance of being clean)" },
      { part: "Chapter 3: The Perils of the Last Days and the Power of Scripture", content: "Signs of the last days: lovers of self and lovers of money; continue in what you have learned and been assured of; 'All Scripture is given by inspiration of God' (3:16)" },
      { part: "Chapter 4: A Solemn Charge and Paul's Last Words", content: "Preach the word in season and out of season, finishing the course and keeping the faith, assurance of the crown of righteousness, come before winter" }
    ],
    mapType: "rome_mamertine",
    youtubeQuery: "에스라하우스 디모데후서 노우호",
    quizzes: [
      {
        q: "In 2 Timothy 3:16, what is the source that makes all Scripture profitable for teaching, for reproof, for correction, and for instruction in righteousness?",
        options: ["Deep human philosophy", "The inspiration of God (God-breathed)", "The world's long traditions", "The decrees of kings"],
        ans: 1,
        exp: "'All Scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness' proclaims the inerrancy and authority of the Bible."
      }
    ]
  },
  {
    id: 56,
    name: "Titus",
    engName: "Titus",
    abbr: "Titus",
    testament: "NT",
    category: "Pauline Epistles (Pastoral Epistles)",
    chronologicalOrder: 56,
    chapters: 3,
    author: "The apostle Paul",
    date: "c. A.D. 63 ~ 65 (after his first release in Rome)",
    keyVerse: "not by works of righteousness which we did ourselves, but according to his mercy, he saved us through the washing of regeneration and renewing by the Holy Spirit (Titus 3:5)",
    theme: "Setting in order the churches on the island of Crete and appointing elders, removing false teachers, and a people zealous for good works",
    summary: "This is the manual Paul sent when he left Titus on the Mediterranean island of Crete, notorious for liars and lazy people, to pastor there. He commands Titus to appoint qualified elders in every city to steady the churches, to stop the mouths of the circumcision party and false teachers who use empty deceit, and to guide believers of every group, old men, young men, servants, and so on, to become God's own people, zealous for good works in a way worthy of the grace of salvation.",
    ezraPerspective: "Pastor Woo-ho Noh explains Titus as a pastoral letter showing 'how the church must exert holy influence in the middle of the most morally corrupt and rough world.' He insists that if we have truly received the grace of the gospel, it must show up in our lives as 'good works,' and that we must beware of fake faith that is full of words but denies God by its deeds.",
    structure: [
      { part: "Chapter 1: Ministry in Crete and the Qualifications of Elders", content: "The hope of eternal life, the purpose of leaving Titus behind, the qualifications of elders and overseers, the evil nature of the Cretans, stop the mouths of the false teachers" },
      { part: "Chapter 2: A Life Fitting Sound Doctrine", content: "The right attitudes of older men and women, younger women and men, and servants; the grace of God that brings salvation to all people has appeared" },
      { part: "Chapter 3: Civic Ethics and the Washing of Regeneration", content: "Submitting to rulers, the washing of regeneration and renewing by the Holy Spirit according to His mercy (3:5), avoid a divisive person after warning him once or twice" }
    ],
    mapType: "crete_island",
    youtubeQuery: "에스라하우스 디도서 노우호",
    quizzes: [
      {
        q: "In Titus 3:5, if God saved us not by our righteous deeds, by what did He save us?",
        options: ["Our family background and status", "Only God's mercy and the renewing of the Holy Spirit", "The world's laws and sacrifices", "Outstanding human morality"],
        ans: 1,
        exp: "We were saved 'not by works of righteousness which we did ourselves, but according to his mercy, through the washing of regeneration and renewing by the Holy Spirit.'"
      }
    ]
  },
  {
    id: 57,
    name: "Philemon",
    engName: "Philemon",
    abbr: "Phlm",
    testament: "NT",
    category: "Pauline Epistles (Prison Epistles)",
    chronologicalOrder: 54,
    chapters: 1,
    author: "The apostle Paul",
    date: "c. A.D. 60 ~ 62 (Roman prison)",
    keyVerse: "no longer as a slave, but more than a slave, a beloved brother—especially to me, but how much rather to you, both in the flesh and in the Lord. (Phlm 1:16)",
    theme: "A plea for forgiveness and reconciliation for Onesimus, a runaway slave, and becoming one family of brothers in Christ",
    summary: "This is the shortest of Paul's letters, a personal letter. Onesimus (meaning 'useful'), a slave who stole money from the house of Philemon, an influential leader of the Colossian church, and ran away, met Paul in a Roman prison and was converted. Calling him 'my son, whom I have begotten in my bonds, and my very heart,' Paul lovingly pleads with Philemon to forgive him and receive him no longer as a slave but as a beloved brother in Christ. It is a beautiful letter of reconciliation.",
    ezraPerspective: "Pastor Woo-ho Noh explains Philemon as 'the most powerful revolution of love, by which the gospel brought down the cruel slavery of the Roman Empire from within, without bloodshed.' Paul volunteering, 'I will repay it myself,' for Onesimus' debt is a perfect working model of Jesus' redeeming love, which paid the debt of our sins in our place on the cross.",
    structure: [
      { part: "Part 1: Praise for Philemon's Faith and Love (vv. 1~7)", content: "Greetings to Philemon, Apphia, and Archippus; great joy from his love and faith toward the saints" },
      { part: "Part 2: A Loving Plea for Onesimus (vv. 8~20)", content: "Onesimus, the son whom the aged Paul begot in his bonds; receive him as more than a slave, a beloved brother; charge whatever he owes to me" },
      { part: "Part 3: Paul's Confidence and Farewell (vv. 21~25)", content: "Confidence in Philemon's obedience, prepare a lodging for me, greetings from Epaphras, Mark, and Luke" }
    ],
    mapType: "colossae_philemon",
    youtubeQuery: "에스라하우스 빌레몬서 노우호",
    quizzes: [
      {
        q: "In Philemon, what was the name of the runaway slave who stole his master's money and fled, then was converted through Paul and became 'the son I begot in my bonds'?",
        options: ["Tychicus", "Onesimus", "Epaphroditus", "Timothy"],
        ans: 1,
        exp: "Onesimus, once useless, was reborn in the gospel as a useful man and became Philemon's spiritual brother."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // [신약 27권] - 4. 공동서신(일반서신) 8권
  // --------------------------------------------------------------------------
  {
    id: 58,
    name: "Hebrews",
    engName: "Hebrews",
    abbr: "Heb",
    testament: "NT",
    category: "General Epistles",
    chronologicalOrder: 58,
    chapters: 13,
    author: "Unknown (Paul, Barnabas, Apollos, and others suggested)",
    date: "c. A.D. 67 ~ 69 (before the destruction of the temple in Jerusalem)",
    keyVerse: "Having then a great high priest who has passed through the heavens, Jesus, the Son of God, let us hold tightly to our confession... Let us therefore draw near with boldness to the throne of grace, that we may receive mercy and may find grace for help in time of need. (Heb 4:14, 16)",
    theme: "Jesus Christ, superior to the old covenant, the eternal high priest after the order of Melchizedek, and the faith chapter (ch. 11)",
    summary: "This is a majestic sermon written to Jewish Christians who, under persecution from the Roman Empire and pressure from Judaism, were tempted to go back to the old Jewish sacrifices (in danger of apostasy). It proves that Jesus Christ is incomparably greater than the angels, than Moses, and than Aaron's priesthood, and that He is 'the mediator of a better covenant' who entered the true sanctuary in heaven once for all with His own blood and obtained eternal redemption; and it urges them to endure to the end, following the example of the forerunners of faith who endured hardship (ch. 11).",
    ezraPerspective: "Pastor Woo-ho Noh treats Hebrews as 'the supreme commentary for understanding the cross of Jesus Christ, who completed the sacrificial system of Leviticus in the Old Testament.' Through Hebrews he clearly unlocks how the secret of the burnt offerings and the blood of the Day of Atonement in Leviticus was fulfilled in the once-for-all sacrifice of Jesus Christ.",
    structure: [
      { part: "Part 1: The Son of God, Greater Than the Angels and Moses (1~4:13)", content: "The Son greater than the prophets, superior to the angels, do not neglect so great a salvation, Christ more glorious than Moses, the faith that enters into rest" },
      { part: "Part 2: The Great High Priest After the Order of Melchizedek (4:14~ch. 7)", content: "A high priest who sympathizes with our weaknesses, the throne of grace that helps in time of need, a stern warning against apostasy, Abraham's tithe to Melchizedek, the imperfection of the Levitical priesthood" },
      { part: "Part 3: The Better New Covenant and the Perfect Once-for-All Sacrifice (ch. 8~10)", content: "The true sanctuary in heaven, the difference between the blood of animals and the blood of Christ, the eternal sacrifice offered once for all, the new and living way opened through the veil" },
      { part: "Part 4: The Forerunners of Faith and the Race of Faith (ch. 11~13)", content: "Faith is the substance of things hoped for (ch. 11, the faith chapter), so great a cloud of witnesses, the benefit of discipline, a kingdom that cannot be shaken, brotherly love and going outside the camp" }
    ],
    mapType: "hebrews_tabernacle",
    youtubeQuery: "에스라하우스 히브리서 노우호",
    quizzes: [
      {
        q: "What is the most biblical definition of faith proclaimed in Hebrews 11:1?",
        options: ["Faith is a positive way of thinking to become rich", "Faith is the substance of things hoped for, the evidence of things not seen", "Faith is blind belief that obeys unconditionally without doubt", "Faith is a philosophical product made by humans"],
        ans: 1,
        exp: "'Now faith is the substance of things hoped for, the evidence of things not seen. For by it the elders obtained a good report' is the opening of the faith chapter."
      }
    ]
  },
  {
    id: 59,
    name: "James",
    engName: "James",
    abbr: "Jas",
    testament: "NT",
    category: "General Epistles",
    chronologicalOrder: 59,
    chapters: 5,
    author: "James, the Lord's brother (head of the Jerusalem church)",
    date: "c. A.D. 48 ~ 50 (one of the earliest letters)",
    keyVerse: "For as the body apart from the spirit is dead, even so faith apart from works is dead. (Jas 2:26)",
    theme: "Putting living faith into practice, faith without works is dead faith, control of the tongue and patience",
    summary: "It is called 'the Proverbs of the New Testament.' To believers of the twelve tribes scattered abroad, who had misunderstood the 'justification by faith' of Romans and fallen into lawless self-indulgence and moral laziness, saying, 'We are saved by faith, so it doesn't matter how we live,' it cries out forcefully that true faith must be proven by the fruit of life (good works, control of the tongue, caring for orphans and widows, keeping oneself unstained by the world).",
    ezraPerspective: "Pastor Woo-ho Noh explains that Paul's Romans and James never clash; like two sides of a coin, they form a perfect pair. If Paul spoke of 'the root of salvation (faith),' James spoke of 'the fruit of salvation (works).' We must listen carefully to James' rebuke that a faith of the lips only, not proven by works, is no different from the faith of demons.",
    structure: [
      { part: "Chapter 1: Trials and Perseverance & Doers of the Word", content: "Count it all joy when you fall into various trials, ask for wisdom, when desire has conceived it gives birth to sin, be doers of the word and not hearers only, true religion" },
      { part: "Chapter 2: No Favoritism and Faith with Works", content: "Do not show partiality between rich and poor, the royal law (love your neighbor), faith without works is dead (Abraham offering Isaac and Rahab's deeds)" },
      { part: "Chapter 3: Mistakes of Speech and True Wisdom from Heaven", content: "Not many should become teachers, the destructive power of the tongue (a small rudder and a spark), earthly wisdom and the pure wisdom from above" },
      { part: "Chapter 4: Warning Against Worldliness and Humility", content: "Friendship with the world is hostility toward God, resist the devil, do not boast about tomorrow ('If the Lord wills, we will live')" },
      { part: "Chapter 5: Warning to the Rich and the Power of Prayer", content: "The judgment of the rich who withheld wages, be patient until the coming of the Lord, Elijah's earnest prayer and prayer for the sick" }
    ],
    mapType: "diaspora_twelve_tribes",
    youtubeQuery: "에스라하우스 야고보서 노우호",
    quizzes: [
      {
        q: "In James 2:26, 'as the body without the spirit is dead,' faith without what is dead? What is the key word?",
        options: ["Knowledge", "Works (deeds)", "Wealth", "Eloquence"],
        ans: 1,
        exp: "It declares, 'For as the body apart from the spirit is dead, even so faith apart from works is dead.'"
      }
    ]
  },
  {
    id: 60,
    name: "1 Peter",
    engName: "1 Peter",
    abbr: "1 Pet",
    testament: "NT",
    category: "General Epistles",
    chronologicalOrder: 60,
    chapters: 5,
    author: "The apostle Peter (written down by Silvanus)",
    date: "c. A.D. 64 (Rome, just before Nero's persecution)",
    keyVerse: "But you are a chosen race, a royal priesthood, a holy nation, a people for God's own possession, that you may proclaim the excellence of him who called you out of darkness into his marvelous light. (1 Pet 2:9)",
    theme: "A living hope and the refining of fiery trials, holiness on the road of life as strangers, and glory in suffering",
    summary: "Just before the storm of Emperor Nero's brutal persecution broke, it urges the believers scattered like strangers across five regions of Asia Minor (Pontus, Galatia, Cappadocia, Asia, Bithynia) to hold on to the 'living hope, incorruptible, undefiled, and unfading,' through the resurrection of Jesus Christ, to endure the refining of fiery trials more precious than gold, and to live holy lives as a royal priesthood even in suffering.",
    ezraPerspective: "Pastor Woo-ho Noh picks 1 Peter as 'required reading for believers passing through an age of suffering.' In particular, the 'priesthood of all believers' in 1 Peter 2:9 is a core doctrine of the Reformation, and it shows how the vision of a kingdom of priests in Exodus 19 of the Old Testament was fully handed on to New Testament believers.",
    structure: [
      { part: "Chapter 1: A Living Hope and the Call to Holy Separation", content: "An incorruptible inheritance and a living hope, the preciousness of faith refined by fire, the precious blood of Christ, be holy, for I am holy" },
      { part: "Chapter 2: Christ the Living Stone and the Royal Priesthood", content: "Like newborn babies, long for the pure milk; the precious cornerstone; a chosen race, a royal priesthood (2:9); Christ, who left an example of suffering" },
      { part: "Chapter 3: Wives and Husbands at Home & the Attitude in Suffering", content: "Adorn the hidden person of the heart; if you suffer for righteousness' sake, you are blessed; be ready with gentleness and fear to answer anyone who asks the reason for your hope" },
      { part: "Chapters 4~5: The Joy of Sharing in Suffering and the Shepherd's Mission", content: "The end of all things is near, so be sober and pray; do not think the fiery trial strange; be examples to the flock; cast all your worries on the Lord" }
    ],
    mapType: "asia_minor_scattered",
    youtubeQuery: "에스라하우스 베드로전서 노우호",
    quizzes: [
      {
        q: "In 1 Peter 2:9, which of these is NOT one of the four glorious identities proclaimed for all saved believers?",
        options: ["A chosen race", "A royal priesthood", "Worldly rulers of this age", "A holy nation and a people for God's own possession"],
        ans: 2,
        exp: "The believer's identity is 'a chosen race, a royal priesthood, a holy nation, a people for God's own possession.'"
      }
    ]
  },
  {
    id: 61,
    name: "2 Peter",
    engName: "2 Peter",
    abbr: "2 Pet",
    testament: "NT",
    category: "General Epistles",
    chronologicalOrder: 61,
    chapters: 3,
    author: "The apostle Peter",
    date: "c. A.D. 67 ~ 68 (Rome, just before his martyrdom)",
    keyVerse: "But don't forget this one thing, beloved, that one day is with the Lord as a thousand years, and a thousand years as one day. The Lord is not slow concerning his promise, as some count slowness; but he is patient with us, not wishing that anyone should perish, but that all should come to repentance. (2 Pet 3:8-9)",
    theme: "Rooting out the Gnostic heresy of false teachers, partaking of the divine nature, the return and judgment of the Lord Jesus",
    summary: "This is a farewell letter, like a last will, written by the apostle Peter when he knew the day of putting off his tent (martyrdom) was near. It sternly warns against false teachers who had secretly crept into the church and kept preaching lawlessness and denying the Second Coming, and it urges believers to add virtue to their faith and knowledge to their virtue, becoming 'partakers of the divine nature,' to understand the love of God who is patient, treating a thousand years as one day, and to live holy lives looking forward to the new heaven and new earth.",
    ezraPerspective: "Through 2 Peter 3:8-9, Pastor Woo-ho Noh gives the most merciful answer to the question 'Why has the Lord not yet returned?' He shows that the Second Coming is delayed not because the promise is slow, but because of God's aching, loving patience, wanting even one more soul to repent and be saved.",
    structure: [
      { part: "Chapter 1: The Divine Nature and the Certainty of the Inspiration of Scripture", content: "Become partakers of the divine nature (the eight steps of virtue in faith), Peter's premonition of his martyrdom, his eyewitness testimony from the Mount of Transfiguration, Scripture was written as people were moved by the Holy Spirit" },
      { part: "Chapter 2: The True Identity and Judgment of False Teachers", content: "Bringing in destructive heresies; the precedents of judgment on the fallen angels, Noah's flood, and Sodom and Gomorrah; greed following the way of Balaam; springs without water" },
      { part: "Chapter 3: Warning to Scoffers of the Second Coming and the New Heaven and New Earth", content: "Scoffing that all things continue as they were from the beginning of creation, judgment by water and judgment by fire, one day is as a thousand years and a thousand years as one day, the elements will melt with fervent heat, the new heaven and new earth" }
    ],
    mapType: "peter_farewell",
    youtubeQuery: "에스라하우스 베드로후서 노우호",
    quizzes: [
      {
        q: "In 2 Peter 3:8, which phrase expresses God's eternal sense of time, beyond human ideas of time?",
        options: ["With the Lord one day is as a thousand years, and a thousand years as one day", "Time exists only for humans", "The past and future have no meaning at all", "The same yesterday, today, and forever"],
        ans: 0,
        exp: "He said, 'Don't forget this one thing, that one day is with the Lord as a thousand years, and a thousand years as one day.'"
      }
    ]
  },
  {
    id: 62,
    name: "1 John",
    engName: "1 John",
    abbr: "1 John",
    testament: "NT",
    category: "General Epistles",
    chronologicalOrder: 62,
    chapters: 5,
    author: "The apostle John",
    date: "c. A.D. 90 (Ephesus)",
    keyVerse: "Beloved, let's love one another, for love is of God; and everyone who loves has been born of God, and knows God. He who doesn't love doesn't know God, for God is love. (1 John 4:7-8)",
    theme: "Assurance of eternal life, the God of light, love, and truth, discerning false spirits, and the commandment of brotherly love",
    summary: "John, 'the apostle of love,' stands against the Gnostic heresy of Docetism, which denied that Jesus came in the flesh, and firmly proclaims: 'That which was from the beginning, which we have heard, which we have seen with our eyes, which we have looked upon, and our hands have handled, concerning the Word of life.' Because God is light and love, he teaches, true believers must confess their sins, walk in the light, and love their brothers with their whole lives, and so enjoy the assurance of salvation.",
    ezraPerspective: "Pastor Woo-ho Noh proclaims 1 John 4:8, 'God is love,' as the most sublime essence of the Christian faith. He insists that we must always keep in our hearts the apostle John's razor-sharp warning that anyone who says with his lips that he loves God but hates the brother he can see is a liar.",
    structure: [
      { part: "Chapter 1: The Word of Life and Walking in the Light", content: "The Word of life that our hands have handled, God is light, if we confess our sins He is faithful and righteous to cleanse us" },
      { part: "Chapter 2: Jesus Christ Our Advocate, and the Old Commandment That Is Also New", content: "The atoning sacrifice for the sins of the whole world, the assurance of those who keep His commandments, love not the world, warning about the appearance of antichrists" },
      { part: "Chapter 3: God's Children and Practicing Brotherly Love", content: "What manner of love He has given, that we should be called children of God; not as Cain; let us not love in word or with the tongue, but in deed and in truth" },
      { part: "Chapter 4: Discerning the Spirits and Love Made Perfect", content: "Every spirit that confesses that Jesus came in the flesh is of God; God is love; perfect love casts out fear" },
      { part: "Chapter 5: The Faith That Overcomes the World and the Assurance of Eternal Life", content: "The victory that overcomes the world is our faith; the testimony of the water, the blood, and the Spirit; 'He who has the Son has life; he who doesn't have the Son doesn't have life'" }
    ],
    mapType: "ephesus_love",
    youtubeQuery: "에스라하우스 요한일서 노우호",
    quizzes: [
      {
        q: "In 1 John 4:18, what is the perfect thing that casts out fear and leads us into peace?",
        options: ["Great wealth and honor", "Perfect love", "Perfect keeping of the law", "Outstanding human courage"],
        ans: 1,
        exp: "It declares, 'There is no fear in love; but perfect love casts out fear, because fear has punishment.'"
      }
    ]
  },
  {
    id: 63,
    name: "2 John",
    engName: "2 John",
    abbr: "2 John",
    testament: "NT",
    category: "General Epistles",
    chronologicalOrder: 63,
    chapters: 1,
    author: "The apostle John (the elder)",
    date: "c. A.D. 90",
    keyVerse: "For many deceivers are entered into the world, who confess not that Jesus Christ is come in the flesh. This is a deceiver and an antichrist. (2 John 1:7)",
    theme: "The balance of truth and love: walk in the truth, and do not let Gnostic heretics into your house",
    summary: "A short letter of only one chapter (13 verses), sent to 'the elect lady and her children (the believers of a local church).' While reaffirming the old commandment to love one another, it sternly warns them not to let antichrist heretics who deny that Jesus came in the flesh into their house, and not even to greet them, and so it teaches the solemn balance that truth must never be compromised in the name of love.",
    ezraPerspective: "In the Ezra course, 2 John is used to stress that 'love and truth cannot be separated.' Love without truth is blind and dangerous self-indulgence, and truth without love becomes cold, heartless legalism. A true Christian must have the healthy discernment to love one another in the truth.",
    structure: [
      { part: "Love in the Truth and Keeping the Commandments (vv. 1~6)", content: "The elder John's greeting, great joy at seeing the children walking in the truth, the new commandment held from the beginning (love one another)" },
      { part: "Warning Against Antichrist Heretics and Farewell (vv. 7~13)", content: "Deceivers who deny His coming in the flesh; do not receive into your house or greet anyone who does not remain in the teaching; hoping to speak face to face so that joy may be full" }
    ],
    mapType: "asia_minor_churches",
    youtubeQuery: "에스라하우스 요한이서 노우호",
    quizzes: [
      {
        q: "In 2 John 1:7, those who deny that Jesus Christ came in this way are called deceivers and antichrists. In what way do they deny He came?",
        options: ["Coming as a king", "Coming in the flesh (Incarnation)", "Coming as an angel", "Coming as a prophet"],
        ans: 1,
        exp: "Gnostics in the early church regarded the flesh as evil, so they taught Docetism, which denied Jesus' incarnation."
      }
    ]
  },
  {
    id: 64,
    name: "3 John",
    engName: "3 John",
    abbr: "3 John",
    testament: "NT",
    category: "General Epistles",
    chronologicalOrder: 64,
    chapters: 1,
    author: "The apostle John (the elder)",
    date: "c. A.D. 90",
    keyVerse: "Beloved, I pray that you may prosper in all things and be healthy, even as your soul prospers. (3 John 1:2)",
    theme: "Praise for Gaius, who welcomed traveling evangelists who were strangers; rebuke of proud Diotrephes",
    summary: "A personal letter (14 verses) from the apostle John to Gaius, a believer he trusted deeply in spiritual things. He warmly praises Gaius, who received and supported with love the traveling evangelists going about for the gospel as strangers, and so became a 'fellow worker for the truth.' On the other hand he rebukes proud Diotrephes, who loved to be first in the church, rejected the apostle, and threw out those who showed hospitality, and he urges them to imitate Demetrius, who had a good testimony.",
    ezraPerspective: "Pastor Woo-ho Noh reminds us that the blessing in 3 John 2, 'that you may prosper in all things and be healthy, even as your soul prospers,' is one of the words Christians love most, and he rightly points out that the priority of faith is always the 'holy prospering of the soul' first, and that blessings in daily life and health follow on that foundation.",
    structure: [
      { part: "Prayer and Praise for Gaius (vv. 1~8)", content: "Prayer that he may prosper in all things and be healthy as his soul prospers, the joy of seeing his children walk in the truth, the good work of supporting evangelists who are strangers" },
      { part: "The Evil Deeds of Diotrephes and the Good Testimony of Demetrius (vv. 9~14)", content: "Rebuke of the evil words and expulsions of Diotrephes, who loves to be first; imitate what is good; Demetrius' testimony of the truth; a farewell greeting of peace" }
    ],
    mapType: "gaius_hospitality",
    youtubeQuery: "에스라하우스 요한삼서 노우호",
    quizzes: [
      {
        q: "In 3 John 9, who was the proud man who loved to be first in the church, would not receive the apostle John, and threw believers out?",
        options: ["Gaius", "Demetrius", "Diotrephes", "Onesimus"],
        ans: 2,
        exp: "Diotrephes was gripped by a lust for power in the church, rejected the traveling evangelists, and was rebuked for loving to be first."
      }
    ]
  },
  {
    id: 65,
    name: "Jude",
    engName: "Jude",
    abbr: "Jude",
    testament: "NT",
    category: "General Epistles",
    chronologicalOrder: 65,
    chapters: 1,
    author: "Jude, the brother of James (the Lord's brother)",
    date: "c. A.D. 65 ~ 80",
    keyVerse: "Beloved, while I was very eager to write to you about our common salvation, I was constrained to write to you exhorting you to contend earnestly for the faith which was once for all delivered to the saints. (Jude 1:3)",
    theme: "Contend earnestly for the faith! The judgment of false teachers who crept into the church, and the keeping of believers",
    summary: "An apocalyptic letter of only one chapter (25 verses), very similar to 2 Peter 2. When people who turned the grace of God into immorality and denied our only Master, Jesus Christ, had slipped secretly into the church, it reminds readers of the unbelief of the Exodus people, the fallen angels, and the judgment of Sodom and Gomorrah, and it sounds the trumpet: 'Contend earnestly for the faith which was once for all delivered to the saints.'",
    ezraPerspective: "Pastor Woo-ho Noh explains Jude as 'the last spiritual alarm to guard the holiness of the church.' The spiritual war to guard the truth is not only a fight with the world outside; it is a fight against heresy and lawless self-indulgence that quietly creep into the church, and believers must build themselves up on their most holy faith and wait for the Lord's mercy to the end.",
    structure: [
      { part: "The Infiltration of False Teachers and Contending for the Faith (vv. 1~4)", content: "Jude's greeting, the urgent appeal to contend earnestly for the faith, the infiltration of ungodly people who crept in secretly" },
      { part: "Warnings of Judgment from Old Testament History and Images of the Wicked (vv. 5~16)", content: "Unbelievers in the wilderness, fallen angels kept in darkness, the eternal fire of Sodom and Gomorrah, Michael's dispute with the devil over the body of Moses, the way of Cain, the error of Balaam, and the rebellion of Korah, hidden rocks at your feasts who eat without fear" },
      { part: "The Believers Keeping Themselves and a Doxology of Glory (vv. 17~25)", content: "Remembering the apostles' warnings about the last times, building yourselves up on your most holy faith and praying in the Holy Spirit, praise to God our Savior who is able to make us stand without stumbling" }
    ],
    mapType: "spiritual_warfare",
    youtubeQuery: "에스라하우스 유다서 노우호",
    quizzes: [
      {
        q: "In Jude 1:3, what did Jude urge believers to fight for fiercely, without compromise?",
        options: ["Worldly political power", "The faith once for all delivered to the saints", "Gaining more wealth", "A physical war with the Roman army"],
        ans: 1,
        exp: "He strongly urges them to 'contend earnestly for the faith which was once for all delivered to the saints.'"
      }
    ]
  },

  // --------------------------------------------------------------------------
  // [신약 27권] - 5. 신약 예언서(묵시록) 1권
  // --------------------------------------------------------------------------
  {
    id: 66,
    name: "Revelation",
    engName: "Revelation",
    abbr: "Rev",
    testament: "NT",
    category: "Prophecy",
    chronologicalOrder: 66,
    chapters: 22,
    author: "The apostle John",
    date: "c. A.D. 95 ~ 96 (on Patmos, during Emperor Domitian's persecution)",
    keyVerse: "He which testifieth these things saith, Surely I come quickly. Amen. Even so, come, Lord Jesus. The grace of our Lord Jesus Christ be with you all. Amen. (Rev 22:20-21)",
    theme: "The final victory of Jesus Christ and the destruction of Satan, the new heaven and new earth, Maranatha!",
    summary: "This is the splendid finale and completion of all 66 books of the Bible. To the aged apostle John, exiled to the island of Patmos under the harsh persecution of the Roman Empire's emperor worship, the risen Lord appears and gives letters to the seven churches of Asia (chapters 2-3). It then shows the throne and the Lamb, the visions of the sevenfold judgments of seals, trumpets, and bowls, the destruction of the red dragon and the beast from the sea, the fall of the harlot Babylon, and at last the eternal victory of the completed 'new heaven and new earth' and the holy city, the New Jerusalem, where there are no more tears and no more death.",
    ezraPerspective: "This is the highlight to which Pastor Woo-ho Noh's Bible course gives its greatest care. He clearly argues that Revelation is never a book of fear or a tool for the scams of date-setting doomsday preachers, but 'a gospel of comfort and hope that showed the final victory of Jesus the Lamb to the early church believers who were bleeding under the persecution of the Roman emperor, encouraging them to be faithful unto death.' The paradise lost in Genesis is gloriously restored in Revelation.",
    structure: [
      { part: "Part 1: The Vision of the Risen Christ and the Seven Churches (ch. 1~3)", content: "The vision of the Son of Man clothed with a garment down to the feet; letters to the churches of Ephesus, Smyrna, Pergamum, Thyatira, Sardis, Philadelphia, and Laodicea" },
      { part: "Part 2: The Heavenly Throne and the Judgments of the Seven Seals (ch. 4~7)", content: "The heavenly throne and the 24 elders, the Lamb who opens the scroll sealed with seven seals, the four horsemen, the vindication of the martyrs, the 144,000 and the great multitude no one could number" },
      { part: "Part 3: The Judgments of the Seven Trumpets and the Interlude Visions (ch. 8~11)", content: "The plagues of the seven trumpets, John eating the little scroll, the ministry, martyrdom, and resurrection of the two witnesses, the seventh trumpet (the kingdom of the world becomes the kingdom of Christ)" },
      { part: "Part 4: The Conflict with the Dragon and the Beasts (ch. 12~14)", content: "The woman clothed with the sun and the red dragon, the beast that rose out of the sea (the Antichrist) and the beast that rose out of the earth (the false prophet, the mark of 666), the praise of the 144,000 on Mount Zion" },
      { part: "Part 5: The Judgments of the Seven Bowls and the Fall of Babylon (ch. 15~19)", content: "The plagues of the last seven bowls, the judgment of and lament over the great harlot Babylon, the marriage of the Lamb, the return of Jesus, King of kings, riding a white horse, and the defeat of the beast" },
      { part: "Part 6: The Millennium and the New Heaven and New Earth (ch. 20~22)", content: "The binding of Satan, the first resurrection, the final judgment at the great white throne, the new heaven and new earth, the dazzling glory of the city of the New Jerusalem, the river of the water of life and the tree of life, 'Amen, come, Lord Jesus (Maranatha)'" }
    ],
    mapType: "seven_churches_patmos",
    youtubeQuery: "에스라하우스 요한계시록 노우호",
    quizzes: [
      {
        q: "In Revelation 22:20, the last chapter of the Bible, what prayer did believers give in answer to Jesus' promise, 'Surely I come quickly'?",
        options: ["Please don't come yet", "Amen, come, Lord Jesus (Maranatha)", "Come after we have conquered the whole world", "Please protect our wealth"],
        ans: 1,
        exp: "'Amen, come, Lord Jesus' is the confession of faith (Maranatha) at the heart of every believer, closing all 66 books of the Bible."
      }
    ]
  }
];

// ----------------------------------------------------------------------------
// 분류 체계 및 통계 헬퍼 함수
// ----------------------------------------------------------------------------
const BIBLE_CATEGORIES = {
  OT: ["All", "Law", "History", "Poetry & Wisdom", "Major Prophets", "Minor Prophets"],
  NT: ["All", "Gospels", "History", "Pauline Epistles", "General Epistles", "Prophecy"]
};

// 책 ID 또는 이름으로 검색
function getBookById(id) {
  return BIBLE_BOOKS_DATA.find(b => b.id === Number(id));
}

function getBookByName(name) {
  return BIBLE_BOOKS_DATA.find(b => b.name === name || b.engName.toLowerCase() === name.toLowerCase() || b.abbr === name);
}

// 연대기 순서로 정렬된 도서 목록 반환
function getChronologicalBooks() {
  return [...BIBLE_BOOKS_DATA].sort((a, b) => a.chronologicalOrder - b.chronologicalOrder);
}
