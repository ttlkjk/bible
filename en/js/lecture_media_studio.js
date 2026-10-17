// ============================================================================
// 에스라 성경강좌 PPT 슬라이드 스튜디오 & 오디오 플레이어 (Lecture Media Studio)
// 로컬 H:\HDX\Church 연동, 슬라이드 뷰어/편집기, A-B 구간반복 MP3 플레이어
// ============================================================================

(function (window) {
  "use strict";

  // --------------------------------------------------------------------------
  // 1. 기본 에스라 성경강좌 PPT 슬라이드 덱 데이터셋
  // (노우호 목사님의 30시간 집중강의 및 샤론강단 강의 교재 기반)
  // --------------------------------------------------------------------------
  const DEFAULT_SLIDE_DECKS = {
    "Genesis": [
      {
        id: "gen-1",
        badge: "Lecture 2: Genesis (1) - Creation",
        title: "God's Creation of the Heavens and the Earth and the Covenant of Eden",
        subtitle: "Genesis chapters 1 ~ 3 | The Providence of Creation and the Fall of Man",
        scriptureRef: "Genesis 1:1, 2:16-17, 3:15",
        bulletPoints: [
          "1. In the beginning God created the heavens and the earth (creation out of nothing)",
          "2. Six days of orderly creation and rest on the seventh day (He blessed it and made it holy)",
          "3. The true meaning of the tree of life and the tree of the knowledge of good and evil in the Garden of Eden",
          "4. Satan's cunning temptation and disobedience: the origin of humanity's tragedy",
          "5. The first gospel (Gen 3:15): God's promise of redemption through the seed of the woman"
        ],
        ezraNote: "If we do not rightly understand Genesis 1~3, the first button of the Bible, all 66 books of the Bible will be misunderstood. God gave human beings not oppression but a personal free will."
      },
      {
        id: "gen-2",
        badge: "Lecture 2: Genesis (2) - The Flood and the Tower of Babel",
        title: "The Judgment of Noah's Flood and the Scattering of Humanity",
        subtitle: "Genesis chapters 6 ~ 11 | The Rebellion and Judgment of Human Civilization",
        scriptureRef: "Genesis 6:5-8, 9:11-13, 11:4-9",
        bulletPoints: [
          "1. Human wickedness fills the earth, and God's grief and sorrow",
          "2. Noah, the righteous man of his generation, and the building of the ark (120 years of grace to repent)",
          "3. A global cataclysm: the fountains of the great deep burst open and the windows of heaven were opened",
          "4. The rainbow covenant: never again will all living things be destroyed by water",
          "5. The rebellion of the Tower of Babel on the plain of Shinar and the confusion of languages"
        ],
        ezraNote: "The judgment of the Flood is a historical fact witnessed by rock layers and fossils all over the world. The end of Babel, a humanistic civilization that left God, is nothing but confusion and scattering."
      },
      {
        id: "gen-3",
        badge: "Lecture 2: Genesis (3) - The Patriarchs",
        title: "The Four Patriarchs: Abraham, Isaac, Jacob, and Joseph",
        subtitle: "Genesis chapters 12 ~ 50 | Calling One Man to Form a Nation",
        scriptureRef: "Genesis 12:1-3, 15:5-6, 50:20",
        bulletPoints: [
          "1. Abraham called out of Ur of the Chaldeans (you will be a blessing)",
          "2. The covenant of the torch (Gen 15): the prophecy of 400 years in Egypt and the promise of the land of Canaan",
          "3. Isaac's obedience and Jehovah-jireh on Mount Moriah",
          "4. Jacob's refining at Bethel and the Jabbok, transformed into Israel",
          "5. The move to Egypt through Joseph: an incubator for 70 people to grow into a nation of 2 million"
        ],
        ezraNote: "God called Abraham not to save just that one man, but to make him the father of a kingdom of priests and to bless all the nations of the earth."
      }
    ],
    "Exodus": [
      {
        id: "exo-1",
        badge: "Lecture 3: The Panorama of Exodus",
        title: "Egypt's Oppression, the Ten Plagues, and the Night of Passover",
        subtitle: "Exodus chapters 1 ~ 14 | Delivering Israel from Pharaoh's Hand",
        scriptureRef: "Exodus 3:7-10, 12:12-14, 14:13-14",
        bulletPoints: [
          "1. God hears the cry after 430 years and calls Moses from the flame of fire at Mount Horeb",
          "2. God's ten plagues that destroy Egypt's ten great idols",
          "3. A type of Passover salvation: the angel of death passed over because of the lamb's blood",
          "4. The miracle of the parting of the Red Sea and the drowning of the Egyptian army",
          "5. Stand still, and see the salvation of the LORD, which he will show to you today"
        ],
        ezraNote: "The Exodus is not merely the freeing of slaves. It is the great event of salvation in which God made known who the LORD is to the whole world, to Egypt, and to the people of Israel."
      },
      {
        id: "exo-2",
        badge: "Lecture 3: The Sinai Covenant and the Tabernacle",
        title: "The Blood Covenant at Sinai and the Tabernacle Set Up on Earth",
        subtitle: "Exodus chapters 19 ~ 40 | The Constitution of a Holy Kingdom of Priests",
        scriptureRef: "Exodus 19:5-6, 20:1-17, 40:34-38",
        bulletPoints: [
          "1. The Sinai covenant (Exod 19:5-6): if you will indeed obey my voice and keep my covenant",
          "2. The Ten Commandments and the Book of the Covenant: the ethics of loving God and loving your neighbor",
          "3. The rebellion of golden calf idolatry and Moses' intercessory prayer",
          "4. The pattern of the tabernacle: the altar of burnt offering, the bronze basin, the Holy Place, and the ark in the Most Holy Place",
          "5. The glory of the LORD fills the tabernacle and leads them by the pillar of cloud and the pillar of fire"
        ],
        ezraNote: "The tabernacle is the dwelling place of love that the holy God Himself showed so that He could live among a sinful people. It is the shadow of Jesus Christ, who later became flesh and dwelt among us."
      }
    ],
    "Leviticus": [
      {
        id: "lev-1",
        badge: "Lecture 4: Leviticus - Be Holy, for I Am Holy",
        title: "The Five Offerings and the Holiness Code of a Holy Priestly People",
        subtitle: "Leviticus chapters 1 ~ 27 | Peace with God and Holiness in Daily Life",
        scriptureRef: "Leviticus 11:45, 19:2, 26:3-13",
        bulletPoints: [
          "1. The five offerings: burnt offering (dedication), grain offering (thanksgiving), peace offering (fellowship), sin offering (forgiveness), guilt offering (restitution)",
          "2. The Day of Atonement (Lev 16): the goat for Azazel and atonement for the whole congregation",
          "3. Clean foods and hygiene laws: statutes that respect life and protect health",
          "4. You shall love your neighbor as yourself (Lev 19:18)",
          "5. Blessings and curses (Lev 26): the peace that comes when we keep God's statutes and commandments"
        ],
        ezraNote: "Leviticus is never a boring book of sacrificial laws. It is a blessed law that God gave to set apart human beings, His creatures, as holy, and to let them live in the healthiest and happiest way, in spirit and in body."
      }
    ],
    "Numbers": [
      {
        id: "num-1",
        badge: "Lecture 5: Numbers - Forty Years of Refining in the Wilderness",
        title: "Unbelief at Kadesh Barnea and Forty Years of Wandering in the Wilderness",
        subtitle: "Numbers chapters 1 ~ 36 | Counting the People and Preparing for Canaan",
        scriptureRef: "Numbers 14:6-9, 21:8-9, 24:17",
        bulletPoints: [
          "1. The first census before leaving Mount Sinai (a people organized as an army)",
          "2. The report of the twelve spies: the unbelieving bad report of ten vs the faith of Joshua and Caleb",
          "3. A day counted as a year: the disobedient generation that perished in the wilderness over 40 years",
          "4. The bronze serpent (Num 21): a type of Christ, who would be lifted up on the cross",
          "5. Overcoming Balaam's false blessing and the temptation to immorality at Baal Peor"
        ],
        ezraNote: "Faith does not mean looking at the giants (the sons of Anak) in front of you. It means looking to the almighty LORD God, who is ten million times greater than they are."
      }
    ],
    "Deuteronomy": [
      {
        id: "deu-1",
        badge: "Lecture 6: Deuteronomy - The Farewell Sermons on the Plains of Moab",
        title: "Shema Israel, and Remember the Forty Years in the Wilderness",
        subtitle: "Deuteronomy chapters 1 ~ 34 | Love the LORD with All Your Heart, Soul, and Might",
        scriptureRef: "Deuteronomy 6:4-9, 8:2-3, 28:1-2, 30:19-20",
        bulletPoints: [
          "1. Looking back on 40 years in the wilderness: man does not live by bread only, but by every word that proceeds out of the mouth of the LORD",
          "2. The Shema (Deut 6:4-9): teach them diligently to your children, bind them on your hand and between your eyes",
          "3. The blessing on Mount Gerizim and the curse on Mount Ebal: the blessing of obedience and the curse of disobedience",
          "4. The law of the king to come (Deut 17): he must keep the book of the law beside him and read it all his life",
          "5. Moses' blessing and his last days on Mount Nebo (his eye was not dim)"
        ],
        ezraNote: "Deuteronomy is the gospel of the Old Testament and Moses' heartfelt last will. It teaches that faith is not knowledge, but must be passed on to the next generation through life."
      }
    ],
    "Joshua": [
      {
        id: "jos-1",
        badge: "Lecture 7: Joshua - The Conquest of Canaan and the Division of the Inheritance",
        title: "Crossing the Jordan and the Three Campaigns of the Conquest of Canaan",
        subtitle: "Joshua chapters 1 ~ 12 | Only Be Strong and Very Courageous",
        scriptureRef: "Joshua 1:7-9, 3:14-17, 6:20",
        bulletPoints: [
          "1. Joshua's call after the death of Moses (every place that the sole of your foot will tread on, I have given you)",
          "2. Rahab's scarlet cord confession of faith and the priests carrying the ark of the covenant across the Jordan",
          "3. Circumcision at Gilgal and the fall of Jericho (the commander of the LORD's army)",
          "4. Achan's sin and the defeat at Ai, then repentance and victory",
          "5. The structure of the Gibeonite alliance and the miracle of the sun standing still over Gibeon"
        ],
        ezraNote: "The war of the conquest of Canaan was not simply a land grab. It was God's holy and just judgment on the Canaanite peoples, whose wickedness had been filling up for 400 years."
      },
      {
        id: "jos-2",
        badge: "Lecture 7: Joshua - Dividing the Land Among the Twelve Tribes and the Farewell Sermon",
        title: "The Inheritance of the Twelve Tribes, the Tabernacle at Shiloh, and the Six Cities of Refuge",
        subtitle: "Joshua chapters 13 ~ 24 | As for Me and My House, We Will Serve the LORD",
        scriptureRef: "Joshua 14:12, 20:1-3, 24:14-15",
        bulletPoints: [
          "1. The bold faith of 85-year-old Caleb: now give me this hill country",
          "2. A fair division of land among the twelve tribes by casting lots, and the tabernacle settled at Shiloh",
          "3. Six cities of refuge east and west of the Jordan to protect someone who killed unintentionally (Cities of Refuge)",
          "4. The 48 Levitical cities spread out: priests sent to teach the Word throughout all Israel",
          "5. Covenant renewal at Shechem: as for me and my house, we will serve the LORD alone"
        ],
        ezraNote: "Joshua was not intoxicated by the victories in front of him. To the very last moment he earnestly urged the people to fear God alone. The victory of faith lies in passing it on."
      }
    ],
    "Judges": [
      {
        id: "jdg-1",
        badge: "Lecture 8: Judges - 350 Years of Religious Darkness",
        title: "The Seven-Step Spiritual Vicious Cycle in Judges and the Work of the Judges",
        subtitle: "Judges chapters 1 ~ 21 | In Those Days There Was No King; Everyone Did What Was Right in His Own Eyes",
        scriptureRef: "Judges 2:10-12, 21:25",
        bulletPoints: [
          "1. Faith not passed on to the next generation: another generation arose who did not know the LORD",
          "2. The seven-step vicious cycle: sin ➔ oppression by foreigners ➔ crying out ➔ deliverance through a judge ➔ peace ➔ forgetting and sinning again",
          "3. The victory of Deborah, a woman judge, and Barak (the flooding of the Kishon River)",
          "4. Gideon's 300 men: routing the huge Midianite army with torches and jars",
          "5. Samson's calling as a Nazirite, his fall, and his final repentance at the end"
        ],
        ezraNote: "The tragedy of Judges is not political chaos. It is a spiritual tragedy in which the Shema of Deuteronomy 6 (teaching the faith at home) collapsed. It exposes the misery of a life that has abandoned God, the true King."
      }
    ],
    "Ruth": [
      {
        id: "rut-1",
        badge: "Lecture 8: Ruth - A Morning Star in the Pitch-Black Darkness",
        title: "The Faith of Ruth the Moabite and Boaz the Kinsman-Redeemer (Goel)",
        subtitle: "Ruth chapters 1 ~ 4 | Your God Will Be My God",
        scriptureRef: "Ruth 1:16-17, 2:12, 4:14-17",
        bulletPoints: [
          "1. The ruin of Elimelech's family, who moved to Moab because of famine (Naomi's suffering)",
          "2. The great decision of Ruth, a foreign woman: your people will be my people",
          "3. Ruth's faithfulness, gleaning in the field of Boaz in Bethlehem",
          "4. The law of the kinsman-redeemer (the Goel system): the gracious responsibility of Boaz, the redeemer",
          "5. The holy grace of bearing Obed and continuing the line of King David and Jesus Christ"
        ],
        ezraNote: "In the deep darkness of Judges, Ruth is a holy jewel: God's grace flows even to a foreign woman, and from her line come King David and Jesus Christ, the Savior of all humanity."
      }
    ],
    "1 Samuel": [
      {
        id: "1sa-1",
        badge: "Lecture 9: 1 Samuel - The Beginning of the Monarchy",
        title: "Hannah's Prayer, Samuel the Last Judge, and Saul and David",
        subtitle: "1 Samuel chapters 1 ~ 31 | To Obey Is Better Than Sacrifice",
        scriptureRef: "1 Samuel 2:30, 15:22, 16:7",
        bulletPoints: [
          "1. The vow-prayer of Hannah, a mother of tears, and the obedience of the boy Samuel",
          "2. The fall of the house of Eli the priest and Ichabod (the glory of God has departed)",
          "3. The great awakening revival at Mizpah and the God of Ebenezer",
          "4. The people demand a king and Saul is crowned, but he is rejected for his disobedience regarding Amalek",
          "5. God, who looks at the heart, anoints David; the defeat of Goliath; ten years of exile in the wilderness"
        ],
        ezraNote: "1 Samuel contrasts the eyes of man, which look at the outward appearance, with the eyes of God, which look at the heart. 'To obey is better than sacrifice, and to listen than the fat of rams.'"
      }
    ],
    "2 Samuel": [
      {
        id: "2sa-1",
        badge: "Lecture 9: 2 Samuel - The Davidic Covenant",
        title: "The Prosperity of David's Kingdom, the Everlasting Davidic Covenant, and Painful Repentance",
        subtitle: "2 Samuel chapters 1 ~ 24 | Your House and Your Kingdom Will Be Made Sure Forever Before Me",
        scriptureRef: "2 Samuel 7:12-16, 12:13, 24:24",
        bulletPoints: [
          "1. Crowned king of united Israel at Hebron and the conquest of the stronghold of Zion in Jerusalem as the capital",
          "2. David's joy as he danced while bringing the ark of God into the City of David",
          "3. The Davidic covenant (2 Sam 7): your seed, who will come out of your body, will build a house for my name",
          "4. Adultery with Bathsheba and the murder of Uriah, the rebuke of Nathan the prophet, and repentance so deep it soaked his bed with tears",
          "5. Absalom's rebellion and David's flight, the sacrifice at Araunah's threshing floor, and reconciliation"
        ],
        ezraNote: "David was great not because he did not sin, but because, when rebuked by the prophet Nathan, he made no excuses, immediately fell on his knees, and offered bone-deep repentance."
      }
    ],
    "1 Kings": [
      {
        id: "1ki-1",
        badge: "Lecture 10: 1 Kings - Glory and Division",
        title: "The Glory and Fall of Solomon's Temple, the Division of the Kingdom, and Elijah",
        subtitle: "1 Kings chapters 1 ~ 22 | The LORD Was Angry with Solomon",
        scriptureRef: "1 Kings 3:9, 8:27-30, 11:4-6, 18:38-39",
        bulletPoints: [
          "1. Solomon's golden age: a thousand burnt offerings and asking for an understanding heart (wisdom)",
          "2. Seven years of building the holy temple in Jerusalem and the cloud of the LORD's glory",
          "3. God's anger at political marriages with 1,000 foreign wives and concubines and at idolatry",
          "4. After Solomon's death, the kingdom divides under Rehoboam (Judah in the south) and Jeroboam (Israel in the north)",
          "5. The prophet Elijah, who judged the Baal worship of Ahab and Jezebel, and the answer by fire on Mount Carmel"
        ],
        ezraNote: "Solomon's tragedy is that he began in grace and ended in lust and compromise. Jeroboam's golden calves at Bethel and Dan became the snare that led to the fall of northern Israel."
      }
    ],
    "Psalms": [
      {
        id: "psa-1",
        badge: "Lecture 11: Psalms - Praise and Prayer of the Soul",
        title: "150 Psalms of Tears and Thanksgiving, and Songs Toward the Messiah",
        subtitle: "Psalms 1 ~ 150 | Blessed Is the Man Whose Delight Is in the Law of the LORD",
        scriptureRef: "Psalms 1:1-2, 23:1-3, 51:10, 119:105",
        bulletPoints: [
          "1. The introduction to the Psalms (Ps 1): the way of the righteous and the way of the wicked, the life of the blessed man",
          "2. David's shepherd psalm (Ps 23): The LORD is my shepherd; I shall not want",
          "3. Tears of repentance (Ps 51): Create in me a clean heart, O God",
          "4. In praise of the Word (Ps 119): Thy word is a lamp unto my feet, and a light unto my path",
          "5. Messianic psalms: Ps 2 (the anointed King), 22 (the suffering of the cross), 110 (the eternal priest after the order of Melchizedek)"
        ],
        ezraNote: "The Psalms are the heartbeat of the saints, poured out before God as they passed through every joy and sorrow and through turbulent suffering. It is the book of prayer quoted most often in the Bible."
      }
    ],
    "Isaiah": [
      {
        id: "isa-1",
        badge: "Lecture 12: Isaiah - The Gospel of the Old Testament",
        title: "The Holy God, the Suffering Servant, and the New Heavens and New Earth",
        subtitle: "Isaiah chapters 1 ~ 66 | He Was Wounded for Our Transgressions",
        scriptureRef: "Isaiah 6:8, 7:14, 9:6, 53:5-6, 65:17",
        bulletPoints: [
          "1. The temple vision and the call (Isa 6): Whom shall I send, and who will go for us? Here am I",
          "2. The Immanuel prophecy (Isa 7:14, 9:6): a virgin shall conceive and bear a son; the Prince of Peace",
          "3. Stern judgment on the nations and the holy stump of the remnant (Remnant)",
          "4. The suffering servant (Isa 53): All we like sheep have gone astray; and the LORD hath laid on him the iniquity of us all",
          "5. End-time salvation and the brilliant vision of the new heavens and the new earth (Isa 65-66)"
        ],
        ezraNote: "The 66 chapters of Isaiah are a miniature of the 66 books of the Bible. The first 39 chapters, warnings of judgment, picture the 39 books of the Old Testament exactly, and the last 27 chapters, comfort and the gospel of the Messiah, picture the 27 books of the New Testament."
      }
    ],
    "Matthew": [
      {
        id: "mat-1",
        badge: "Lecture 13: Matthew - Jesus Christ, Who Came as King",
        title: "The Messiah, Son of David, the Sermon on the Mount, and the Gospel of the Kingdom",
        subtitle: "Matthew chapters 1 ~ 28 | All Authority in Heaven and on Earth Has Been Given to Me",
        scriptureRef: "Matthew 1:1, 5:3-10, 16:16, 28:18-20",
        bulletPoints: [
          "1. The genealogy of Jesus Christ, son of Abraham and son of David (the fulfillment of OT prophecy)",
          "2. The Sermon on the Mount (chapters 5~7): the constitution of the citizens of the kingdom, the Beatitudes, the salt and light of the world",
          "3. Parables of the kingdom (chapter 13): the mustard seed, the yeast, the treasure hidden in the field, the fine pearl",
          "4. Peter's confession of faith (16:16): You are the Christ, the Son of the living God",
          "5. The atoning cross and the resurrection, and the Great Commission: make disciples of all nations, teaching them to observe"
        ],
        ezraNote: "Matthew is the Gospel of 'Jesus Christ, the King of kings,' who broke the 400 years of silence and came to fulfill every covenant of the Old Testament. It quotes the Old Testament more richly than any other."
      }
    ],
    "Acts": [
      {
        id: "act-1",
        badge: "Lecture 15: Acts - The Acts of the Holy Spirit and the Early Church",
        title: "The Coming of the Holy Spirit at Pentecost and the Revival of the Jerusalem Church",
        subtitle: "Acts chapters 1 ~ 12 | When the Holy Spirit Has Come upon You",
        scriptureRef: "Acts 1:8, 2:42-47, 7:55-60",
        bulletPoints: [
          "1. The Lord's last command before His ascension: you will be my witnesses in Jerusalem, in all Judea and Samaria, and to the end of the earth",
          "2. The 120 disciples praying in one accord in Mark's upper room, and the presence of the Spirit at Pentecost like a rushing mighty wind",
          "3. Through Peter's sermon 3,000 repent and are baptized (the apostles' teaching, breaking of bread, and prayer)",
          "4. The bold martyrdom of the deacon Stephen, and the gospel spread to Samaria and Antioch through the scattered believers",
          "5. Saul the persecutor converted on the road to Damascus and called as the apostle to the Gentiles"
        ],
        ezraNote: "Acts is living history: Jesus Christ, who died on the cross and rose again, personally leading His church from the heavenly throne through the Holy Spirit."
      },
      {
        id: "act-2",
        badge: "Lecture 15: Acts - The Missionary Journeys of the Apostle Paul and His Arrival in Rome",
        title: "Evangelism in Asia Minor and Macedonia, and Standing in Rome as a Prisoner",
        subtitle: "Acts chapters 13 ~ 28 | Preaching the Kingdom of God Without Hindrance",
        scriptureRef: "Acts 13:2-3, 16:9-10, 28:30-31",
        bulletPoints: [
          "1. The fasting and prayer of the Antioch church and the sending of Paul and Barnabas on the first missionary journey to Galatia in Asia Minor",
          "2. The Macedonian vision (Acts 16) and the start of the evangelization of Europe: Philippi, Thessalonica, Athens, Corinth",
          "3. Three years of intensive Word ministry in the school of Tyrannus in Ephesus (the word of the Lord grew mightily and prevailed)",
          "4. Arrest in Jerusalem, rescue from the Euroclydon storm, and through the island of Malta, at last arriving in Rome, the heart of the empire",
          "5. In his rented house, boldly and without hindrance teaching the kingdom of God and the Lord Jesus to all, Jews and Gentiles"
        ],
        ezraNote: "Acts 28 ends without a period. Today we believers must keep writing Acts chapter 29 by the power of the Holy Spirit and the Word."
      }
    ],
    "Revelation": [
      {
        id: "rev-1",
        badge: "Lecture 16: Revelation (1) - The Seven Churches and the Throne of the Lamb",
        title: "The Revelation on Patmos and the Letters to the Seven Churches of Asia Minor",
        subtitle: "Revelation chapters 1 ~ 11 | Behold, I Stand at the Door and Knock",
        scriptureRef: "Revelation 1:1-3, 3:20, 5:9-10, 11:15",
        bulletPoints: [
          "1. Blessed is he who reads and those who hear the words of this prophecy and keep the things written in it",
          "2. The majesty and voice of one like a son of man (the glorified Christ) among the lampstands",
          "3. Praise and rebuke for the seven churches of Asia Minor (Ephesus to Laodicea), and rewards for those who overcome",
          "4. The vision of the heavenly throne: only the Lamb who was slain is worthy to open the seven seals",
          "5. The seven seals and seven trumpet judgments: the kingdom of the world becomes the kingdom of our Lord and of His Christ"
        ],
        ezraNote: "Revelation is not a book of terror. It is a gospel of comfort and encouragement, proclaiming eternal victory and hope to believers who were under the severe persecution of the Roman Empire."
      },
      {
        id: "rev-2",
        badge: "Lecture 16: Revelation (2) - Final Victory and the New Heavens and New Earth",
        title: "The Judgment of Babylon the Harlot, the Marriage Supper of the Lamb, and the New Jerusalem",
        subtitle: "Revelation chapters 12 ~ 22 | Amen. Come, Lord Jesus",
        scriptureRef: "Revelation 19:7-9, 21:1-4, 22:20",
        bulletPoints: [
          "1. The spiritual war between the woman clothed with the sun and the red dragon; victory by the blood of the Lamb and the word of their testimony",
          "2. The complete fall of Babylon the great (the harlot civilization of the world) and the heavenly Hallelujah praise",
          "3. The coming of Jesus Christ, King of kings, on a white horse, and the final judgment of the beast and the false prophet",
          "4. A new heaven and a new earth with no more death, sorrow, or tears, and the holy city, the New Jerusalem",
          "5. The brilliant grand finale of the 66 books: He says, Surely I come quickly. Amen. Even so, come, Lord Jesus!"
        ],
        ezraNote: "The tree of life in the Garden of Eden, lost in Genesis, is fully restored in Revelation 22. The Bible proclaims that God's love will surely win."
      }
    ],
    "Course Principles": [
      {
        id: "principle-1",
        badge: "Lecture 1: Basic Principles of the Bible Course and How the Old Testament Fits Together",
        title: "Three Great Principles of the Ezra Bible Course That Run Through All 66 Books",
        subtitle: "Tracing the Thread of God's Holy Redemptive History from Genesis to Revelation",
        scriptureRef: "Ezra 7:10, Nehemiah 8:8, 2 Timothy 3:16-17",
        bulletPoints: [
          "1. Historical background (Fact): understanding when, where, to whom, and why it was written, within its historical setting",
          "2. Context and overall structure (Context): instead of verse-centered quiet times, reading through the flow of the whole book and the thread of redemptive history",
          "3. God's heart (Heart): realizing God's aching heart and longing love that soak every part of the Bible",
          "4. The resolve of Ezra the scribe: he set his heart to study the Word, to do it, and to teach it to the people",
          "5. The organic unity of the Old and New Testaments: the Old Testament is the shadow, the New Testament is the substance, and both converge on Christ"
        ],
        ezraNote: "The Bible is a love letter God sent to people. When you read a letter, you do not tear out just a line or two; you read it from beginning to end, trying to understand the heart of the one who sent it."
      },
      {
        id: "principle-2",
        badge: "Lecture 1: Chart of How the 39 Books of the OT, History and Prophecy, Fit Together",
        title: "Reading the 17 Prophetic Books Paired on the Framework of the 17 Historical Books",
        subtitle: "Reading in Chronological Order Opens Up the True Meaning of the Bible Clearly",
        scriptureRef: "Luke 24:27, 24:44-45",
        bulletPoints: [
          "1. The framework of the OT: the Pentateuch (5 books) ➔ History (12 books), a historical framework of 17 books in all",
          "2. Prophets of the early divided kingdom: Jonah, Amos, Hosea (warning about the prosperity and corruption of northern Israel under Jeroboam II)",
          "3. Prophets of the middle and late divided kingdom: Joel, Isaiah, Micah, Habakkuk, Zephaniah, Jeremiah (warning of judgment on Judah in the south)",
          "4. Prophets of the Babylonian Exile: Ezekiel, Daniel (visions of restoration by the river Chebar and in the Babylonian palace)",
          "5. Prophets of the Return from Exile: Haggai, Zechariah, Malachi (rebuilding the temple and longing for the Messiah to come)"
        ],
        ezraNote: "If you read only the prophets without knowing the historical books, they are very hard to understand. But when you match the prophets to the concrete events of the historical books, you can hear the prophets' cries vividly."
      }
    ],
    "Intertestamental Period": [
      {
        id: "inter-1",
        badge: "The Intertestamental Period (Malachi ~ Matthew, 400 years)",
        title: "The Changing World Empires of the Silent Years and the Hasmonean Maccabean Revolt",
        subtitle: "Persia ➔ Greece under Alexander ➔ Ptolemies & Seleucids ➔ Maccabean independence",
        scriptureRef: "Daniel 8:21-22, 11:31-32, Galatians 4:4",
        bulletPoints: [
          "1. The end of Persia and Alexander the Great's eastern campaign: Greek as a common language and the spread of Hellenistic culture",
          "2. After Alexander's death his four generals divide the empire: the struggle between the Ptolemies of Egypt and the Seleucids of Syria",
          "3. Antiochus IV Epiphanes' atrocities: defiling the Jerusalem temple with an altar to Zeus and burning the books of the law",
          "4. The holy revolution of faith by Mattathias and Judas Maccabeus: the origin of the Feast of Dedication (Hanukkah), when the temple was cleansed and restored",
          "5. 100 years of independence under the Hasmonean dynasty and its gradual corruption, then the Roman general Pompey entering Jerusalem"
        ],
        ezraNote: "The 400 years between the Old and New Testaments were not years of silence when God rested. They were a time of grace in which God carefully prepared the historical stage for sending His only Son to save all humanity."
      },
      {
        id: "inter-2",
        badge: "The Intertestamental Period - The Geographical, Religious, and Political Background of the New Testament",
        title: "Roman Rule, the House of Herod, and the Rise of the Sadducees and Pharisees",
        subtitle: "When the Fullness of Time Came, God Sent Forth His Son, Born of a Woman",
        scriptureRef: "Galatians 4:4-5, Luke 2:1-2",
        bulletPoints: [
          "1. Pax Romana (Pax Romana): the Roman peace, with a network of military roads (Via) and sea routes completed",
          "2. Herod the Great, an Edomite from Idumea (Edom), rules Judea, and the Jerusalem temple is rebuilt over 46 years",
          "3. The forming of Jewish sects: Pharisees (separation by the law), Sadducees (aristocratic, priestly realism), Essenes (asceticism in the caves of Qumran)",
          "4. The Greek Septuagint (LXX) translation of the Old Testament: the Word spread widely throughout the whole Mediterranean world",
          "5. The height of spiritual longing: years of yearning, under Roman oppression, for the true Messiah, the Son of David"
        ],
        ezraNote: "Politically, Rome paved the roads; culturally, Greek let people understand one another; religiously, people were made to feel the limits of the law. Then, at exactly that perfect timing, Jesus came."
      }
    ],
    "Roman History": [
      {
        id: "rome-1",
        badge: "Special Lecture on the History of the Roman Empire and the New Testament",
        title: "The Emperors of Imperial Rome from Caesar to Nero and the Early Church",
        subtitle: "Christian Faith That Did Not Waver Even Before the Sword of Roman Emperor Worship",
        scriptureRef: "Luke 2:1, 3:1, Acts 18:2, 25:11-12",
        bulletPoints: [
          "1. The assassination of Julius Caesar and the rise of Octavian (Augustus): the census decree fulfills the birth in Bethlehem",
          "2. Under Emperor Tiberius: the suffering of Jesus Christ on the cross and the trial before Governor Pilate",
          "3. Claudius' decree expelling the Jews from Rome: Aquila and Priscilla work with Paul in Corinth",
          "4. Emperor Nero's great fire of Rome and the massacre of Christians: the heroic martyrdom of Peter and Paul",
          "5. The severe persecution under Emperor Domitian and the writing of Revelation through the apostle John on Patmos"
        ],
        ezraNote: "The emperors of Rome called themselves gods (God) and forced people to worship them, but Christians gave their lives, saying, 'Caesar is not Lord; Jesus alone is Lord.'"
      }
    ],
    "Bible and History": [
      {
        id: "hist-1",
        badge: "Special Lecture - The Bible, History, and the Future",
        title: "God's Story (His-Story): The Completion of Redemptive History and the Future",
        subtitle: "From Creation to the End, the Lord of Human History Is the LORD of Hosts",
        scriptureRef: "Isaiah 46:9-10, Daniel 2:44, 2 Peter 3:11-13",
        bulletPoints: [
          "1. The true definition of history (History): the holy stage on which the Creator God's providence and plan of redemption unfold",
          "2. The inevitable collapse and judgment of the false myths of human civilization (Babel, the Roman Empire, modern secularism)",
          "3. Salvation history carried on through the holy stump (the remnant) God left at every turn of history",
          "4. The restoration of Israel, the salvation of the full number of the Gentiles, and the gospel witnessed to the whole world",
          "5. The Lord's return and the new heavens and new earth: look for and long for that day with holy conduct and godliness"
        ],
        ezraNote: "Believers who do not know history cannot discern the future. Through the Bible we must discern the will of God, the Lord of history, and stand firm where our lives are placed today."
      }
    ],
    "OT Survey": [
      {
        id: "ot-all-1",
        badge: "30-Hour Bible Course - Comprehensive Textbook on the 39 Books of the Old Testament",
        title: "A Panorama of the 39 Books of the Old Testament and the Faithfulness of the Covenant",
        subtitle: "The Pentateuch, 5 books ➔ History, 12 books ➔ Poetry & Wisdom, 5 books ➔ Prophecy, 17 books",
        scriptureRef: "Luke 24:44, Hebrews 1:1-2",
        bulletPoints: [
          "1. Law (5 books): the origin of the universe and humanity, the covenant constitution of a kingdom of priests, and the tabernacle",
          "2. History (12 books): the conquest of Canaan, the period of the judges, David's united kingdom, division and exile, and the rebuilding of the temple",
          "3. Poetry & Wisdom (5 books): tears, praise, and wisdom for life poured out to God amid a turbulent history",
          "4. Major Prophets & Minor Prophets (17 books): the tears of the prophets who cried out for repentance as they watched their nation perish",
          "5. The conclusion of the Old Testament: the promise that God Himself will send a new covenant and the Messiah for weak human beings who cannot keep the law"
        ],
        ezraNote: "The 39 books of the Old Testament are not old stories. They are a mirror that shows our own sinful self-portrait today, and the first half of salvation, testifying to God's boundless love."
      }
    ],
    "NT Survey": [
      {
        id: "nt-all-1",
        badge: "30-Hour Bible Course - Comprehensive Textbook on the 27 Books of the New Testament",
        title: "A Panorama of the 27 Books of the New Testament and the Fulfilled Gospel",
        subtitle: "The four Gospels, 4 books ➔ Acts, 1 book ➔ Pauline Epistles, 13 books ➔ General Epistles, 8 books ➔ Revelation, 1 book",
        scriptureRef: "John 20:31, Romans 1:16, Revelation 22:20",
        bulletPoints: [
          "1. The four Gospels: the life of Jesus Christ, who came as King (Matthew), Servant (Mark), Son of Man (Luke), and Son of God (John)",
          "2. Acts: the explosive growth of the church, spreading by the power of the Holy Spirit from Jerusalem to Rome, the end of the earth",
          "3. The 13 Pauline Epistles: justification by faith, the mystery of the church, the holy life of believers, and pastoral guidance",
          "4. The 8 General Epistles: exhortations to living faith, hope, and love that overcome suffering and the deception of heresy",
          "5. Revelation: the final victory of the Lamb, who will come again as King of kings, and the completion of the eternal New Jerusalem"
        ],
        ezraNote: "The New Testament declares that every covenant of the Old Testament was fulfilled by blood through Jesus Christ. The gospel is the power of God for salvation to everyone who believes."
      }
    ],
    "Shema Lecture": [
      {
        id: "shema-1",
        badge: "Special Course on Shema Education and Passing On the Faith",
        title: "Hear, O Israel! Passing On the Faith at Home to Save the Next Generation",
        subtitle: "Deuteronomy 6:4~9 | Teach Them Diligently to Your Children",
        scriptureRef: "Deuteronomy 6:4-9, Judges 2:10, 2 Timothy 1:5",
        bulletPoints: [
          "1. The LORD is one LORD; love Him with all your heart, all your soul, and all your might",
          "2. The tragedy of Judges: without Shema education, 'another generation arose who did not know the LORD'",
          "3. Restoring the family altar: parents first arm themselves with the Word and raise their children by the example of their lives",
          "4. Talk of them when you sit in your house, when you walk by the way, when you lie down, and when you rise up",
          "5. Bind them as a sign on your hand, let them be frontlets between your eyes, and write them on the doorposts of your house and on your gates"
        ],
        ezraNote: "The primary responsibility for teaching the faith lies not with Sunday school but with parents and the home. When the home comes alive and the Shema is restored, the future of the church and the nation becomes bright."
      }
    ],
    "Diet Lecture": [
      {
        id: "diet-1",
        badge: "Leviticus 11 - The Diet and Health of a Holy People",
        title: "Biblical Principles of Health and the Statutes of a Holy Diet",
        subtitle: "Leviticus 11:44~45 | I Am Holy; So Set Your Bodies Apart and Be Holy",
        scriptureRef: "Leviticus 11:1-47, 1 Corinthians 6:19-20, 10:31",
        bulletPoints: [
          "1. The true meaning of the food laws: not mere legalism, but God's love protecting the lives and health of His people",
          "2. Clean animals: those with a split, divided hoof that chew the cud (the hygiene of plant-eating animals)",
          "3. Clean fish: those with fins and scales (kinds that do not eat pollutants from the bottom)",
          "4. Forbidden creatures: birds that eat carrion; caution about mollusks and shellfish that build up toxins and heavy metals",
          "5. Your body is a temple of the Holy Spirit: whether you eat or drink or whatever you do, do all to the glory of God"
        ],
        ezraNote: "God cares deeply not only for our souls but also for the health of our bodies. Self-control and a holy diet are a spiritual act of worship that keeps beautiful the precious body God has given us."
      }
    ]
  };

  // --------------------------------------------------------------------------
  // 성경 66권 전권 10~15장 고밀도 종합 PPT 슬라이드 덱 동적 생성 엔진
  // --------------------------------------------------------------------------
  function generateComprehensiveBookSlides(bookName) {
    const bData = (typeof getBookByName === "function")
      ? getBookByName(bookName)
      : (window.BIBLE_BOOKS_DATA ? window.BIBLE_BOOKS_DATA.find(b => b.name === bookName) : null);

    if (!bData) return null;

    const slides = [];
    const testKr = bData.testament === 'OT' ? 'Old Testament' : 'New Testament';

    // SLIDE 1: 책의 개요 및 중심 주제
    slides.push({
      id: `${bData.name}-slide-1`,
      badge: `Ezra Bible Course [${bData.name}] Lecture 1: Overview and Theme`,
      title: `${bData.name} (${bData.engName}) - ${bData.theme}`,
      subtitle: `${testKr} Book ${bData.id} | ${bData.chapters} chapters | Category: ${bData.category} | Chronological order: #${bData.chronologicalOrder}`,
      scriptureRef: `Key verse: ${bData.keyVerse}`,
      bulletPoints: [
        `1. [Place in redemptive history]: A core book of the ${testKr} ${bData.category}, carrying a holy axis of the redemptive history of all 66 books`,
        `2. [Central theme of the book]: ${bData.theme}`,
        `3. [Purpose and historical significance]: ${bData.summary}`,
        `4. [Author and date]: Written by ${bData.author} under the inspiration of the Holy Spirit, c. B.C./A.D. ${bData.date}`,
        `5. [Proclaiming the key verse]: "${bData.keyVerse}"`
      ],
      ezraNote: bData.ezraPerspective
    });

    // SLIDE 2: 저자와 시대적·역사적 배경 심층 연구
    slides.push({
      id: `${bData.name}-slide-2`,
      badge: `Ezra Bible Course [${bData.name}] Lecture 2: Historical Background and the Author's Calling`,
      title: `The Historical Background of ${bData.name} and the Spiritual Situation of Its Author [${bData.author}]`,
      subtitle: `The international situation, the spiritual crisis, and God's plan of redemption at the time the events took place`,
      scriptureRef: `${bData.name} chapter 1 / Date written: ${bData.date}`,
      bulletPoints: [
        `1. [The situation of the times]: the spiritual state of the people of Israel and the political and military threats of the great powers around them`,
        `2. [The heart of the author, ${bData.author}]: called in a time of crisis to awaken the people and proclaim God's justice and love`,
        `3. [The urgency of writing]: warning against empty religious ritual and moral corruption, and restoring the essence of true faith`,
        `4. [The situation of the first readers (First Readers)]: encouraging them to remember God's faithful covenant in the midst of suffering and tribulation`,
        `5. [Historical lesson (Fact)]: God's sovereign providence at work, not in fiction, but in real historical settings`
      ],
      ezraNote: `The Bible testifies, within real history (Fact), to human weakness and failure, and to God's zeal in carrying out His covenant despite that failure.`
    });

    // SLIDE 3: 전체 장별 구조 파노라마와 거룩한 맥
    if (bData.structure && bData.structure.length > 0) {
      const structSummaryBullets = bData.structure.map((s, idx) => 
        `${idx + 1}. [${s.part}]: ${s.content}`
      );
      slides.push({
        id: `${bData.name}-slide-3`,
        badge: `Ezra Bible Course [${bData.name}] Lecture 3: Overview of the Whole Structure`,
        title: `A Panorama of the Structure of All ${bData.chapters} Chapters of ${bData.name} and the Thread of Each Section`,
        subtitle: `Going beyond isolated verses to grasp the framework and flow of the whole book at a glance`,
        scriptureRef: `${bData.name} chapters 1 ~ ${bData.chapters}`,
        bulletPoints: structSummaryBullets,
        ezraNote: "If you break the Bible into single verses, you see only the trees and miss the forest. When you read it within the flow of the whole chapter-by-chapter structure, the author's purpose and the full will of God become clear."
      });

      // SLIDES 4 ~ (4 + structure.length - 1): 장별 구조 각 Part별 단독 정밀 강해 슬라이드
      bData.structure.forEach((partItem, pIdx) => {
        slides.push({
          id: `${bData.name}-slide-struct-${pIdx + 1}`,
          badge: `[${bData.name} Detailed Chapter-by-Chapter Exposition] ${partItem.part.split(':')[0] || 'Section ' + (pIdx + 1)}`,
          title: `${bData.name} ${partItem.part}`,
          subtitle: `Analysis of how the key events of the text unfold and their spiritual message in redemptive history`,
          scriptureRef: `${bData.name} ${partItem.part}`,
          bulletPoints: [
            `1. [Section overview]: ${partItem.content}`,
            `2. [Key historical events]: the major decisions of faith and the process of overcoming crises in this text`,
            `3. [The human picture]: lives of disobedience and compromise, or of people who obeyed by faith even in suffering`,
            `4. [God's character]: the holy God of the covenant, who hates sin yet has compassion on His people`,
            `5. [Spiritual lesson]: a solemn warning and comfort for our lives, families, and church communities today`
          ],
          ezraNote: `As we meditate on this section, we should take the mistakes and repentance of the people in the text as a mirror, and honestly face the idols we must throw away and the obedience we must restore in our lives today.`
        });
      });
    }

    // SLIDES: DEFAULT_SLIDE_DECKS에 사전 정의된 특강/핵심 슬라이드가 있으면 함께 합성
    if (DEFAULT_SLIDE_DECKS[bData.name] && DEFAULT_SLIDE_DECKS[bData.name].length > 0) {
      DEFAULT_SLIDE_DECKS[bData.name].forEach((curatedSlide) => {
        slides.push(Object.assign({}, curatedSlide, {
          id: `${bData.name}-curated-${curatedSlide.id || Math.random()}`
        }));
      });
    }

    // SLIDE: 샤론강단 대하설교 핵심 녹취록 분석 (LECTURE_INDEX_DATA 연동)
    const sermons = (window.LECTURE_INDEX_DATA && window.LECTURE_INDEX_DATA[bData.name])
      ? window.LECTURE_INDEX_DATA[bData.name]
      : [];

    if (sermons.length > 0) {
      const s1 = sermons[0];
      slides.push({
        id: `${bData.name}-slide-sermon-1`,
        badge: `Sharon Pulpit Saga Sermons Analysis [${bData.name} Part ${s1.no}]`,
        title: `Pastor Woo-ho Noh's Saga Sermon: ${s1.title}`,
        subtitle: `Text: ${s1.scripture}`,
        scriptureRef: s1.scripture,
        bulletPoints: [
          `1. [Background of the sermon]: ${s1.summary}`,
          ...(s1.keyPoints || []).map((kp, kIdx) => `${kIdx + 2}. [Key point]: ${kp}`),
          `5. [Sharon Pulpit conclusion]: "${s1.message}"`
        ],
        ezraNote: s1.message || bData.ezraPerspective
      });

      if (sermons.length > 1) {
        const s2 = sermons[1];
        slides.push({
          id: `${bData.name}-slide-sermon-2`,
          badge: `Sharon Pulpit Saga Sermons Analysis [${bData.name} Part ${s2.no}]`,
          title: `Pastor Woo-ho Noh's Saga Sermon: ${s2.title}`,
          subtitle: `Text: ${s2.scripture}`,
          scriptureRef: s2.scripture,
          bulletPoints: [
            `1. [Background of the sermon]: ${s2.summary}`,
            ...(s2.keyPoints || []).map((kp, kIdx) => `${kIdx + 2}. [Key point]: ${kp}`),
            `5. [Sharon Pulpit conclusion]: "${s2.message}"`
          ],
          ezraNote: s2.message || bData.ezraPerspective
        });
      }
    } else {
      slides.push({
        id: `${bData.name}-slide-depth-1`,
        badge: `Ezra Bible Course [${bData.name}] In-Depth Exposition of the Core Text`,
        title: `God's Holy Justice and Love Flowing Through ${bData.name}`,
        subtitle: `God's covenant faithfulness and the warning of judgment engraved in the Word`,
        scriptureRef: bData.keyVerse,
        bulletPoints: [
          `1. [The God of justice]: the holy God never overlooks sin and will surely judge it`,
          `2. [The God of love]: even in judgment He prepares a remnant for those who repent and promises restoration`,
          `3. [The mission of a kingdom of priests]: our identity as a holy people who will lead all the nations of the world to God`,
          `4. [The context of the Old and New Testaments]: how the events and revelation of ${bData.name} affect the whole history of salvation in the 66 books`,
          `5. [Contrition before the Word]: a spiritual awakening, like Ezra the scribe, opening the Word, tearing our garments, and repenting`
        ],
        ezraNote: bData.ezraPerspective
      });
    }

    // SLIDE: 구속사적 연결 및 예수 그리스도의 예표
    slides.push({
      id: `${bData.name}-slide-christ`,
      badge: `Ezra Bible Course [${bData.name}] Redemptive History Seminar`,
      title: `Jesus Christ and the Fulfillment of the Gospel in ${bData.name}`,
      subtitle: `You search the Scriptures, because you think that in them you have eternal life; and these are they which testify of me (John 5:39)`,
      scriptureRef: `John 5:39, Luke 24:27, 24:44`,
      bulletPoints: [
        `1. [Types of Christ]: the offices of Christ seen in ${bData.name} (true Prophet, Priest, and eternal King)`,
        `2. [The covenant of blood]: every covenant and event of the Old Testament is a shadow of Jesus Christ, who would shed His blood on the cross`,
        `3. [The fulfillment of the law]: Christ Himself fulfilled, by His atonement, the demands of the law that human strength cannot meet`,
        `4. [The identity of the church]: believers, the bride of Christ, must live as holy priests in the world`,
        `5. [The eternal kingdom of God]: the eternal new heavens and new earth that the risen Christ will establish when He comes again`
      ],
      ezraNote: `Every thread of the Bible points to Jesus Christ, who died on the cross and rose again. When we read ${bData.name}, too, we must see it in the light of Christ's grace and redemption.`
    });

    // SLIDE: 노우호 목사님의 에스라 성경통독 핵심 맥
    slides.push({
      id: `${bData.name}-slide-ezra-heart`,
      badge: `Pastor Woo-ho Noh's Ezra Pulpit [${bData.name}] Core Thread`,
      title: `Reading Through the Bible to Grasp God's Aching and Longing Heart`,
      subtitle: `Not trapped in the letters (the letter of the text), but hearing the heartbeat of God the Father, who wrote the Bible`,
      scriptureRef: bData.keyVerse,
      bulletPoints: [
        `1. [The heart of God the Father]: ${bData.ezraPerspective}`,
        `2. [The holy habit of reading through]: not breaking the Bible into pieces, but reading straight through with the breath of the author`,
        `3. [The spiritual crisis of this age]: rejecting humanistic quiet times and secularized prosperity theology, and returning to the Bible as it is`,
        `4. [The reform of Ezra the scribe]: kindling the fire of Bible conferences that study, do, and teach the Word`,
        `5. [An honest and good heart]: the basic attitude of believers who hear the Word, keep it, and bear fruit a hundredfold with patience`
      ],
      ezraNote: bData.ezraPerspective
    });

    // SLIDE: 성도들의 삶의 결단 & 실천적 적용
    slides.push({
      id: `${bData.name}-slide-application`,
      badge: `Ezra Bible Course [${bData.name}] Life Decisions and Blessing`,
      title: `Practical Decisions of Faith for Believers Finishing ${bData.name}`,
      subtitle: `But be doers of the word, and not hearers only, deceiving your own selves (Jas 1:22)`,
      scriptureRef: `James 1:22, Joshua 24:14-15`,
      bulletPoints: [
        `1. [Reforming personal devotion]: searching God's Word fully every day and casting off worldly values like rubbish`,
        `2. [Restoring the Shema at home]: parents first arm themselves with the Word and fully pass on the heritage of faith to their children`,
        `3. [Serving the church and our neighbors]: not a faith that stays inside the church, but good works as light and salt in the world`,
        `4. [Balancing justice and love]: keeping God's just law while showing Christ's compassion to our neighbors`,
        `5. [Longing for the Lord who will come again]: Maranatha! Praying 'Come quickly, Lord Jesus,' and adorning ourselves as a holy bride`
      ],
      ezraNote: `Learning the Word is useless if our lives do not change. Hold the Word of ${bData.name} in your heart and take one step of obedience today, right where you live.`
    });

    return slides;
  }

  // --------------------------------------------------------------------------
  // 2. 슬라이드 스튜디오 매니저 (SlideStudioManager)
  // --------------------------------------------------------------------------
  class SlideStudioManager {
    constructor() {
      this.storageKey = "ezra_lecture_slides_v4";
      this.decks = this.loadDecks();
      this.activeBook = "Genesis";
      this.currentSlideIndex = 0;
      this.containerId = null;
      this.isEditing = false;
      this.slideTheme = localStorage.getItem("ezra_slide_theme") || "dark";
      this.slideFontSize = parseInt(localStorage.getItem("ezra_slide_font_size")) || 18;
    }

    toggleSlideTheme() {
      this.slideTheme = this.slideTheme === "dark" ? "light" : "dark";
      localStorage.setItem("ezra_slide_theme", this.slideTheme);
      this.render();
      if (window.showToast) {
        window.showToast(`Slide background: ${this.slideTheme === "dark" ? "Dark background (high contrast)" : "Light background (clear white)"}`);
      }
    }

    adjustFontSize(delta) {
      this.slideFontSize = Math.min(28, Math.max(14, this.slideFontSize + delta));
      localStorage.setItem("ezra_slide_font_size", this.slideFontSize);
      this.render();
      if (window.showToast) {
        window.showToast(`Slide text size: ${this.slideFontSize}px`);
      }
    }

    loadDecks() {
      try {
        const saved = localStorage.getItem(this.storageKey);
        if (saved) {
          const parsed = JSON.parse(saved);
          return Object.assign({}, DEFAULT_SLIDE_DECKS, parsed);
        }
      } catch (e) {
        console.warn("Failed to load local slide decks:", e);
      }
      return JSON.parse(JSON.stringify(DEFAULT_SLIDE_DECKS));
    }

    saveDecks() {
      try {
        localStorage.setItem(this.storageKey, JSON.stringify(this.decks));
      } catch (e) {
        console.error("Failed to save slide decks:", e);
      }
    }

    getSlides(bookName) {
      const name = bookName || this.activeBook;
      
      // 1. 사용자 맞춤 수정 슬라이드가 있고 5장 이상이면 반환
      if (this.decks && this.decks[name] && this.decks[name].length >= 5) {
        return this.decks[name];
      }

      // 2. 집중특강 8종 덱 체크 (성경강좌원리, 신구약중간사, 로마역사, 구약종합, 신약종합, 쉐마특강, 식생활특강, 성경과역사)
      const specialKeys = ["Course Principles", "Diet Lecture", "Intertestamental Period", "Roman History", "OT Survey", "NT Survey", "Shema Lecture", "Bible and History"];
      if (specialKeys.includes(name) && DEFAULT_SLIDE_DECKS[name] && DEFAULT_SLIDE_DECKS[name].length > 0) {
        return DEFAULT_SLIDE_DECKS[name];
      }

      // 3. 성경 66권 전권에 대한 10~15장 고밀도 종합 에스라 슬라이드 덱 동적 합성
      const comprehensive = generateComprehensiveBookSlides(name);
      if (comprehensive && comprehensive.length > 0) {
        return comprehensive;
      }

      // 4. 폴백
      if (DEFAULT_SLIDE_DECKS[name] && DEFAULT_SLIDE_DECKS[name].length > 0) {
        return DEFAULT_SLIDE_DECKS[name];
      }

      return [
        {
          id: `${name}-default-1`,
          badge: `Ezra Bible Course [${name}]`,
          title: `${name} Ezra Bible Course Textbook Slides`,
          subtitle: `Core textbook for Pastor Woo-ho Noh's Bible course and Saga Sermons`,
          scriptureRef: `${name}, whole book`,
          bulletPoints: [
            `1. The historical background and purpose of [${name}]`,
            `2. God's heart and the Ezra Bible read-through perspective`,
            `3. Its place and mission within the redemptive history of the 66 books`,
            `4. Exhortation and practical decisions for believers today`
          ],
          ezraNote: `You can edit or add to the title, key points, and exposition notes of this slide directly with the [Edit] button.`
        }
      ];
    }

    getCurrentSlide() {
      const slides = this.getSlides(this.activeBook);
      if (this.currentSlideIndex >= slides.length) {
        this.currentSlideIndex = 0;
      }
      return slides[this.currentSlideIndex];
    }

    setBook(bookName) {
      this.activeBook = bookName;
      this.currentSlideIndex = 0;
      this.isEditing = false;
      this.render();
      if (typeof window.onSlideBookChanged === "function") {
        window.onSlideBookChanged(bookName);
      }
    }

    nextSlide() {
      const slides = this.getSlides(this.activeBook);
      if (this.currentSlideIndex < slides.length - 1) {
        this.currentSlideIndex++;
        this.render();
      }
    }

    prevSlide() {
      if (this.currentSlideIndex > 0) {
        this.currentSlideIndex--;
        this.render();
      }
    }

    goToSlide(index) {
      const slides = this.getSlides(this.activeBook);
      if (index >= 0 && index < slides.length) {
        this.currentSlideIndex = index;
        this.render();
      }
    }

    toggleEditMode() {
      this.isEditing = !this.isEditing;
      this.render();
    }

    saveCurrentEdit(formData) {
      if (!this.decks[this.activeBook]) {
        this.decks[this.activeBook] = JSON.parse(JSON.stringify(this.getSlides(this.activeBook)));
      }
      const slides = this.decks[this.activeBook];
      const cur = slides[this.currentSlideIndex] || {};

      cur.badge = formData.badge || cur.badge;
      cur.title = formData.title || cur.title;
      cur.subtitle = formData.subtitle || cur.subtitle;
      cur.scriptureRef = formData.scriptureRef || cur.scriptureRef;
      cur.bulletPoints = formData.bulletPointsText
        ? formData.bulletPointsText.split("\n").map(s => s.trim()).filter(Boolean)
        : cur.bulletPoints;
      cur.ezraNote = formData.ezraNote || cur.ezraNote;

      slides[this.currentSlideIndex] = cur;
      this.saveDecks();
      this.isEditing = false;
      this.render();
      if (window.showToast) window.showToast("✅ The slide was saved successfully!");
    }

    addNewSlide() {
      if (!this.decks[this.activeBook]) {
        this.decks[this.activeBook] = JSON.parse(JSON.stringify(this.getSlides(this.activeBook)));
      }
      const slides = this.decks[this.activeBook];
      const newSlide = {
        id: `${this.activeBook}-${Date.now()}`,
        badge: `Ezra Bible Course [${this.activeBook}]`,
        title: `New slide title (click to edit)`,
        subtitle: `Enter lecture subtitle and Bible range`,
        scriptureRef: `${this.activeBook} text`,
        bulletPoints: [
          "1. Enter the first key point.",
          "2. Enter the second key point.",
          "3. Enter the third key point."
        ],
        ezraNote: `Ezra House Bible course key notes and meditation`
      };
      slides.push(newSlide);
      this.saveDecks();
      this.currentSlideIndex = slides.length - 1;
      this.isEditing = true;
      this.render();
      if (window.showToast) window.showToast("➕ A new slide was added. Go ahead and edit it.");
    }

    deleteCurrentSlide() {
      const slides = this.getSlides(this.activeBook);
      if (slides.length <= 1) {
        alert("At least one slide must remain.");
        return;
      }
      if (!confirm("Do you really want to delete the current slide?")) return;

      if (!this.decks[this.activeBook]) {
        this.decks[this.activeBook] = JSON.parse(JSON.stringify(slides));
      }
      this.decks[this.activeBook].splice(this.currentSlideIndex, 1);
      if (this.currentSlideIndex >= this.decks[this.activeBook].length) {
        this.currentSlideIndex = Math.max(0, this.decks[this.activeBook].length - 1);
      }
      this.saveDecks();
      this.isEditing = false;
      this.render();
      if (window.showToast) window.showToast("🗑️ The slide was deleted.");
    }

    resetDefaultSlides() {
      if (!confirm(`Reset the slides for [${this.activeBook}] to the original standard data?`)) return;
      if (DEFAULT_SLIDE_DECKS[this.activeBook]) {
        this.decks[this.activeBook] = JSON.parse(JSON.stringify(DEFAULT_SLIDE_DECKS[this.activeBook]));
      } else {
        delete this.decks[this.activeBook];
      }
      this.saveDecks();
      this.currentSlideIndex = 0;
      this.isEditing = false;
      this.render();
      if (window.showToast) window.showToast("🔄 Restored to the standard slide deck.");
    }

    exportSlideHtml() {
      const slides = this.getSlides(this.activeBook);
      let slidesHtml = slides.map((s, idx) => `
        <div class="slide-card">
          <div class="slide-num">SLIDE ${idx + 1} / ${slides.length}</div>
          <div class="badge">${s.badge || ""}</div>
          <h1 class="title">${s.title || ""}</h1>
          <div class="subtitle">${s.subtitle || ""}</div>
          <div class="scripture">📖 ${s.scriptureRef || ""}</div>
          <ul class="bullets">
            ${(s.bulletPoints || []).map(bp => `<li>${bp}</li>`).join("")}
          </ul>
          <div class="note">
            <strong>💡 Ezra exposition notes:</strong>
            <p>${s.ezraNote || ""}</p>
          </div>
        </div>
      `).join("");

      const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Ezra Bible Course PPT Textbook - ${this.activeBook}</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Malgun Gothic", sans-serif; background: #0f172a; color: #f8fafc; margin: 0; padding: 20px; }
    .slide-card { max-width: 960px; margin: 0 auto 30px auto; background: #1e293b; border-radius: 16px; padding: 40px; box-shadow: 0 10px 25px rgba(0,0,0,0.5); border: 1px solid #334155; page-break-after: always; }
    .slide-num { font-size: 12px; font-weight: bold; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px; }
    .badge { display: inline-block; padding: 4px 12px; background: rgba(245, 158, 11, 0.2); color: #fbbf24; border-radius: 9999px; font-size: 13px; font-weight: bold; margin-bottom: 12px; }
    .title { font-size: 28px; font-weight: 900; margin: 0 0 8px 0; color: #ffffff; }
    .subtitle { font-size: 16px; color: #cbd5e1; margin-bottom: 8px; }
    .scripture { font-size: 14px; font-weight: 600; color: #38bdf8; margin-bottom: 24px; padding-bottom: 12px; border-bottom: 1px solid #334155; }
    .bullets { list-style: none; padding: 0; margin: 0 0 24px 0; }
    .bullets li { font-size: 16px; line-height: 1.8; margin-bottom: 10px; padding-left: 20px; position: relative; color: #e2e8f0; }
    .bullets li::before { content: "•"; color: #f59e0b; font-size: 24px; position: absolute; left: 0; top: -3px; }
    .note { background: rgba(245, 158, 11, 0.1); border-left: 4px solid #f59e0b; padding: 16px; border-radius: 8px; font-size: 14px; line-height: 1.6; color: #fde68a; }
    @media print { body { background: white; color: black; } .slide-card { background: white; border: 1px solid #ccc; color: black; box-shadow: none; } .title { color: black; } .subtitle, .bullets li { color: #333; } }
  </style>
</head>
<body>
  ${slidesHtml}
</body>
</html>`;

      const blob = new Blob([fullHtml], { type: "text/html;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `Ezra_Bible_Course_PPT_${this.activeBook}.html`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      if (window.showToast) window.showToast("📄 The slide HTML document was downloaded!");
    }

    exportDecksBackup() {
      // 모든 슬라이드 덱(기본 + 사용자 커스텀)을 포함한 전체 백업 생성
      const allDecks = Object.assign({}, DEFAULT_SLIDE_DECKS, this.decks);
      const backupData = {
        app: "EzraBibleStudio",
        version: "1.0",
        exportedAt: new Date().toISOString(),
        decks: allDecks
      };
      const jsonStr = JSON.stringify(backupData, null, 2);
      const blob = new Blob([jsonStr], { type: "application/json;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `Ezra_Bible_Course_Slides_Full_Backup_${new Date().toISOString().slice(0, 10)}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      if (window.showToast) window.showToast("💾 The full backup file of the slide lecture notes was saved!");
    }

    importDecksBackup(file) {
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const parsed = JSON.parse(e.target.result);
          if (parsed && (parsed.decks || typeof parsed === "object")) {
            const newDecks = parsed.decks || parsed;
            this.decks = Object.assign({}, this.decks, newDecks);
            this.saveDecks();
            this.render();
            if (window.showToast) window.showToast("📥 The slide backup was restored successfully!");
          } else {
            alert("This is not a valid Ezra slide backup JSON file.");
          }
        } catch (err) {
          alert("An error occurred while reading the file: " + err.message);
        }
      };
      reader.readAsText(file);
    }

    render(containerId) {
      if (containerId) this.containerId = containerId;
      const root = document.getElementById(this.containerId);
      if (!root) return;

      const slides = this.getSlides(this.activeBook);
      const cur = this.getCurrentSlide();
      const total = slides.length;
      const idx = this.currentSlideIndex;

      if (this.isEditing) {
        // 편집 폼 렌더링
        root.innerHTML = `
          <div class="bg-white dark:bg-slate-900 rounded-2xl border border-amber-500/50 p-6 shadow-xl space-y-4">
            <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <div class="flex items-center gap-2">
                <span class="w-3 h-3 rounded-full bg-amber-500"></span>
                <h4 class="text-base font-bold text-slate-900 dark:text-slate-100">Slide editor (slide ${idx + 1} / ${total})</h4>
              </div>
              <div class="flex gap-2">
                <button id="btn-cancel-slide-edit" class="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300">Cancel</button>
                <button id="btn-save-slide-edit" class="px-4 py-1.5 rounded-lg text-xs font-bold bg-amber-600 hover:bg-amber-700 text-white shadow">Save</button>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1">Top badge (lecture number)</label>
                <input id="edit-slide-badge" type="text" value="${cur.badge || ''}" class="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm font-semibold" />
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1">Bible passage (Scripture)</label>
                <input id="edit-slide-scripture" type="text" value="${cur.scriptureRef || ''}" class="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm font-semibold" />
              </div>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1">Slide main title</label>
              <input id="edit-slide-title" type="text" value="${cur.title || ''}" class="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-base font-black" />
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1">Slide subtitle</label>
              <input id="edit-slide-subtitle" type="text" value="${cur.subtitle || ''}" class="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm font-semibold" />
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1">Lecture key points (one per line)</label>
              <textarea id="edit-slide-bullets" rows="5" class="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm leading-relaxed font-medium">${(cur.bulletPoints || []).join("\n")}</textarea>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1">💡 Ezra exposition notes &amp; meditation message</label>
              <textarea id="edit-slide-note" rows="3" class="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm leading-relaxed font-medium">${cur.ezraNote || ''}</textarea>
            </div>
          </div>
        `;

        // 편집 이벤트 바인딩
        const btnCancel = root.querySelector("#btn-cancel-slide-edit");
        const btnSave = root.querySelector("#btn-save-slide-edit");
        if (btnCancel) btnCancel.onclick = () => this.toggleEditMode();
        if (btnSave) {
          btnSave.onclick = () => {
            const formData = {
              badge: root.querySelector("#edit-slide-badge").value,
              scriptureRef: root.querySelector("#edit-slide-scripture").value,
              title: root.querySelector("#edit-slide-title").value,
              subtitle: root.querySelector("#edit-slide-subtitle").value,
              bulletPointsText: root.querySelector("#edit-slide-bullets").value,
              ezraNote: root.querySelector("#edit-slide-note").value
            };
            this.saveCurrentEdit(formData);
          };
        }
        return;
      }

      // 프레젠테이션 뷰어 모드 렌더링 (초고대비 폰트 및 가독성 최적화)
      const isDark = this.slideTheme !== "light";
      const fontSize = this.slideFontSize;

      const bulletsList = (cur.bulletPoints || []).map(b => `
        <li class="flex items-start gap-3.5 leading-relaxed">
          <span class="w-3 h-3 rounded-full ${isDark ? 'bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.8)]' : 'bg-amber-500 shadow-sm'} mt-2 shrink-0"></span>
          <span class="${isDark ? 'text-white' : 'text-slate-950'} font-bold tracking-wide" style="font-size: ${fontSize}px; line-height: 1.65;">${b}</span>
        </li>
      `).join("");

      const canvasBgClass = isDark
        ? "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white border-2 border-slate-700/80 shadow-2xl"
        : "bg-white text-slate-950 border-2 border-slate-300 shadow-xl";

      const titleClass = isDark
        ? "text-white drop-shadow-md"
        : "text-slate-950";

      const subtitleClass = isDark
        ? "text-amber-200 font-bold"
        : "text-slate-600 font-bold";

      const scriptureClass = isDark
        ? "text-sky-300 font-bold drop-shadow"
        : "text-indigo-800 font-bold";

      const bulletsBoxClass = isDark
        ? "bg-slate-900/90 border border-slate-700/80 backdrop-blur-md shadow-2xl"
        : "bg-slate-50 border-2 border-slate-200 shadow-inner";

      const noteBoxClass = isDark
        ? "bg-amber-950/60 border-2 border-amber-500/50 text-amber-100"
        : "bg-amber-50 border-2 border-amber-400/80 text-slate-900";

      const noteTitleClass = isDark
        ? "text-amber-300"
        : "text-amber-800";

      root.innerHTML = `
        <div class="space-y-4">
          <!-- 상단 툴바: 슬라이드 네비게이션 & 편집 버튼 & 글자크기/배경 조절 -->
          <div class="flex flex-wrap items-center justify-between gap-2 p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div class="flex items-center gap-2">
              <span class="px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold">
                ${this.activeBook} PPT lecture slides
              </span>
              <span class="text-xs text-slate-500 dark:text-slate-400 font-mono font-bold">
                ${idx + 1} / ${total}
              </span>
            </div>

            <!-- 네비게이션 및 보기 설정 버튼 그룹 -->
            <div class="flex flex-wrap items-center gap-1.5">
              <!-- 글자 크기 조절 (가- / 가+) -->
              <div class="flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg p-0.5 border border-slate-200 dark:border-slate-700">
                <button id="btn-slide-font-dec" class="px-2 py-1 text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 rounded transition" title="Smaller text">
                  A-
                </button>
                <span class="px-1.5 text-xs font-mono font-bold text-amber-600 dark:text-amber-400">${fontSize}px</span>
                <button id="btn-slide-font-inc" class="px-2 py-1 text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 rounded transition" title="Larger text">
                  A+
                </button>
              </div>

              <!-- 배경 테마 전환 버튼 (어두운 배경 / 밝은 배경) -->
              <button id="btn-slide-theme" class="px-2.5 py-1 rounded-lg text-xs font-bold border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition" title="Switch slide background">
                ${isDark ? '☀️ Light' : '🌙 Dark'}
              </button>

              <div class="h-4 w-px bg-slate-300 dark:bg-slate-700 mx-0.5"></div>

              <!-- 이전 / 다음 버튼 -->
              <button id="btn-slide-prev" ${idx === 0 ? "disabled" : ""} class="px-3 py-1 rounded-lg text-xs font-bold border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-amber-500 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition">
                ◀ Prev
              </button>
              <button id="btn-slide-next" ${idx === total - 1 ? "disabled" : ""} class="px-3 py-1 rounded-lg text-xs font-bold border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-amber-500 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition">
                Next ▶
              </button>
              
              <div class="h-4 w-px bg-slate-300 dark:bg-slate-700 mx-0.5"></div>

              <!-- 편집/추가/내보내기 메뉴 -->
              <button id="btn-slide-edit" class="px-2.5 py-1 rounded-lg text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition" title="Edit the current slide">
                ✏️ Edit
              </button>
              <button id="btn-slide-add" class="px-2.5 py-1 rounded-lg text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition" title="Add a new slide">
                ➕ Add
              </button>
              <button id="btn-slide-del" class="px-2 py-1 rounded-lg text-xs font-bold bg-slate-100 dark:bg-slate-800 text-red-500 hover:bg-red-100 dark:hover:bg-red-950/40 transition" title="Delete the current slide">
                🗑️
              </button>
              <button id="btn-slide-export" class="px-2.5 py-1.5 rounded-lg text-xs font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 hover:bg-amber-500 hover:text-white transition" title="Save/print as an HTML document">
                📄 Export
              </button>
              <button id="btn-slide-backup-export" class="px-2.5 py-1.5 rounded-lg text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition" title="Save a JSON backup file of all slides">
                💾 Backup
              </button>
              <label class="cursor-pointer px-2.5 py-1.5 rounded-lg text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition" title="Restore a JSON backup file">
                📥 Restore
                <input id="btn-slide-backup-import" type="file" accept=".json" class="hidden" />
              </label>
              <button id="btn-slide-reset" class="px-2.5 py-1.5 rounded-lg text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition" title="Restore the original defaults">
                🔄
              </button>
            </div>
          </div>

          <!-- 메인 슬라이드 디스플레이 프레임 (프레젠테이션 디자인) -->
          <div id="slide-presentation-canvas" class="relative rounded-2xl ${canvasBgClass} p-6 sm:p-10 overflow-hidden min-h-[380px] flex flex-col justify-between transition-colors duration-200">
            
            <!-- 슬라이드 배경 장식 워터마크 -->
            <div class="absolute -right-10 -bottom-10 opacity-5 pointer-events-none text-9xl font-black font-serif select-none">
              EZRA
            </div>

            <!-- 슬라이드 상단 정보 -->
            <div>
              <div class="flex flex-wrap items-center justify-between gap-2 mb-4">
                <span class="px-3 py-1 rounded-full text-xs font-black bg-amber-500 text-slate-950 tracking-wider shadow">
                  ${cur.badge || "Ezra Bible Course"}
                </span>
                <span class="text-xs sm:text-sm font-serif ${scriptureClass}">
                  📖 ${cur.scriptureRef || ""}
                </span>
              </div>

              <!-- 슬라이드 제목 & 부제목 -->
              <h2 class="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-snug mb-2 ${titleClass}">
                ${cur.title}
              </h2>
              <p class="text-xs sm:text-sm mb-6 ${subtitleClass}">
                ${cur.subtitle}
              </p>

              <!-- 핵심 요점 불릿 리스트 (초고대비 & 큰 글씨 지원) -->
              <ul class="space-y-3.5 p-5 sm:p-7 rounded-2xl ${bulletsBoxClass}">
                ${bulletsList}
              </ul>
            </div>

            <!-- 슬라이드 하단 에스라 강해 노트 박스 -->
            <div class="mt-6 pt-4 border-t border-slate-700/60 flex items-start gap-3 p-4 rounded-xl ${noteBoxClass}">
              <span class="text-amber-400 text-lg shrink-0">💡</span>
              <div class="text-xs sm:text-sm leading-relaxed font-medium">
                <strong class="block mb-0.5 font-bold ${noteTitleClass}">Ezra exposition point:</strong>
                ${cur.ezraNote || ""}
              </div>
            </div>

          </div>

          <!-- 하단 슬라이드 전체 번호 페이지 칩 네비게이터 -->
          <div class="flex flex-wrap items-center justify-center gap-1.5 py-3 px-3 bg-slate-100/70 dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <span class="text-xs font-black text-amber-600 dark:text-amber-400 mr-2 shrink-0">
              All ${total} slides:
            </span>
            <div class="flex flex-wrap items-center gap-1">
              ${slides.map((s, i) => `
                <button onclick="window.ezraSlideStudio.goToSlide(${i})" 
                        class="px-2.5 py-1 text-xs font-bold rounded-lg transition shrink-0 ${
                          i === idx 
                            ? "bg-amber-500 text-slate-950 shadow-md scale-105 font-black ring-2 ring-amber-400" 
                            : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-amber-500 hover:text-white"
                        }" title="Slide ${i + 1}: ${s.title}">
                  ${i + 1}
                </button>
              `).join("")}
            </div>
          </div>

        </div>
      `;

      // 버튼 이벤트 리스너 연결
      const btnPrev = root.querySelector("#btn-slide-prev");
      const btnNext = root.querySelector("#btn-slide-next");
      const btnFontDec = root.querySelector("#btn-slide-font-dec");
      const btnFontInc = root.querySelector("#btn-slide-font-inc");
      const btnTheme = root.querySelector("#btn-slide-theme");
      const btnEdit = root.querySelector("#btn-slide-edit");
      const btnAdd = root.querySelector("#btn-slide-add");
      const btnDel = root.querySelector("#btn-slide-del");
      const btnExport = root.querySelector("#btn-slide-export");
      const btnBackupExport = root.querySelector("#btn-slide-backup-export");
      const btnBackupImport = root.querySelector("#btn-slide-backup-import");
      const btnReset = root.querySelector("#btn-slide-reset");

      if (btnPrev) btnPrev.onclick = () => this.prevSlide();
      if (btnNext) btnNext.onclick = () => this.nextSlide();
      if (btnFontDec) btnFontDec.onclick = () => this.adjustFontSize(-2);
      if (btnFontInc) btnFontInc.onclick = () => this.adjustFontSize(2);
      if (btnTheme) btnTheme.onclick = () => this.toggleSlideTheme();
      if (btnEdit) btnEdit.onclick = () => this.toggleEditMode();
      if (btnAdd) btnAdd.onclick = () => this.addNewSlide();
      if (btnDel) btnDel.onclick = () => this.deleteCurrentSlide();
      if (btnExport) btnExport.onclick = () => this.exportSlideHtml();
      if (btnBackupExport) btnBackupExport.onclick = () => this.exportDecksBackup();
      if (btnBackupImport) btnBackupImport.onchange = (e) => this.importDecksBackup(e.target.files[0]);
      if (btnReset) btnReset.onclick = () => this.resetDefaultSlides();
    }
  }

  // --------------------------------------------------------------------------
  // 3. 오디오 플레이어 스튜디오 (AudioPlayerStudio)
  // HTML5 Audio API 기반, 로컬 파일 로드, 배속, A-B 구간반복
  // --------------------------------------------------------------------------
  class AudioPlayerStudio {
    constructor() {
      this.audio = new Audio();
      this.containerId = null;
      this.playlist = [];
      this.currentTrackIndex = 0;
      this.isPlaying = false;
      this.playbackRate = 1.0;
      this.playerMode = "local"; // 기본을 로컬 고음질 MP3 모드로 설정 (YouTube 오류 153 방지)
      
      // A-B Loop Repeat 상태
      this.loopA = null; // 초 단위
      this.loopB = null; // 초 단위
      this.isLoopActive = false;

      // 성경 권 필터
      this.activeBook = null;
      this.hasCachedFiles = false;

      this.initDefaultPlaylist();
      this.bindAudioEvents();
      this.loadCachedTracks(); // 브라우저 IndexedDB에 저장된 음원 자동 복원
    }

    initDefaultPlaylist() {
      // 집중성경강좌 14개 전 강의 및 대표 성경 본문 낭독 목록
      // localPath: d:\도시케어\대하설교\audio\ 폴더에 파일 복사 시 폴더 선택 없이 즉시 재생
      this.playlist = [
        {
          id: "01",
          title: "Intensive Lectures 01: How the Old Testament Fits Together",
          book: "Introduction to the Old Testament",
          fileName: "집중강좌_01 구약성경의 상호관계.mp3",
          localPath: "audio/집중강좌_01 구약성경의 상호관계.mp3",
          path: "H:\\HDX\\Church\\집중성경강좌\\집중강좌_01 구약성경의 상호관계.mp3",
          ytQuery: "에스라하우스 EBL 구약의상관관계 노우호",
          url: "",
          hasLocalFile: false,
          duration: "35:00"
        },
        {
          id: "02",
          title: "Intensive Lectures 02: Genesis-Leviticus (Creation, the Fall, the Tabernacle)",
          book: "Genesis",
          fileName: "집중강좌_02 창세기-레위기.mp3",
          localPath: "audio/집중강좌_02 창세기-레위기.mp3",
          path: "H:\\HDX\\Church\\집중성경강좌\\집중강좌_02 창세기-레위기.mp3",
          ytQuery: "에스라하우스 EBL 창세기 레위기 노우호",
          url: "",
          hasLocalFile: false,
          duration: "45:20"
        },
        {
          id: "03",
          title: "Intensive Lectures 03: Numbers-Deuteronomy (40 Years in the Wilderness and the Shema)",
          book: "Deuteronomy",
          fileName: "집중강좌_03 민수기-신명기.mp3",
          path: "H:\\HDX\\Church\\집중성경강좌\\집중강좌_03 민수기-신명기.mp3",
          ytQuery: "에스라하우스 EBL 민수기 신명기 노우호",
          url: "",
          hasLocalFile: false,
          duration: "40:15"
        },
        {
          id: "04",
          title: "Intensive Lectures 04: Joshua-1 Samuel (The Conquest of Canaan and the Monarchy)",
          book: "Joshua",
          fileName: "집중강좌_04 여호수아-삼상.mp3",
          localPath: "audio/집중강좌_04 여호수아-삼상.mp3",
          path: "H:\\HDX\\Church\\집중성경강좌\\집중강좌_04 여호수아-삼상.mp3",
          ytQuery: "에스라하우스 EBL 여호수아 사사기 사무엘상 노우호",
          url: "",
          hasLocalFile: false,
          duration: "38:40"
        },
        {
          id: "05",
          title: "Intensive Lectures 05: 2 Samuel-Hosea (David and the Divided Kingdom)",
          book: "1 Kings",
          fileName: "집중강좌_05 삼하-호세아.mp3",
          localPath: "audio/집중강좌_05 삼하-호세아.mp3",
          path: "H:\\HDX\\Church\\집중성경강좌\\집중강좌_05 삼하-호세아.mp3",
          ytQuery: "에스라하우스 EBL 사무엘하 열왕기 호세아 노우호",
          url: "",
          hasLocalFile: false,
          duration: "42:10"
        },
        {
          id: "06",
          title: "Intensive Lectures 06: Joel-Lamentations (The Cries of the Prophets of Judah)",
          book: "Isaiah",
          fileName: "집중강좌_06 요엘-예레미아애가.mp3",
          localPath: "audio/집중강좌_06 요엘-예레미아애가.mp3",
          path: "H:\\HDX\\Church\\집중성경강좌\\집중강좌_06 요엘-예레미아애가.mp3",
          ytQuery: "에스라하우스 EBL 요엘 이사야 예레미야 노우호",
          url: "",
          hasLocalFile: false,
          duration: "44:50"
        },
        {
          id: "07",
          title: "Intensive Lectures 07: Daniel-Ezekiel (The Babylonian Exile and Visions of Restoration)",
          book: "Daniel",
          fileName: "집중강좌_07 다니엘-에스겔.mp3",
          localPath: "audio/집중강좌_07 다니엘-에스겔.mp3",
          path: "H:\\HDX\\Church\\집중성경강좌\\집중강좌_07 다니엘-에스겔.mp3",
          ytQuery: "에스라하우스 EBL 다니엘 에스겔 노우호",
          url: "",
          hasLocalFile: false,
          duration: "39:30"
        },
        {
          id: "08",
          title: "Intensive Lectures 08: Poetry & Wisdom-Esther (Job, Psalms, Proverbs, and the Return from Exile)",
          book: "Psalms",
          fileName: "집중강좌_08 시가서-에스더.mp3",
          localPath: "audio/집중강좌_08 시가서-에스더.mp3",
          path: "H:\\HDX\\Church\\집중성경강좌\\집중강좌_08 시가서-에스더.mp3",
          ytQuery: "에스라하우스 EBL 시가서 욥기 시편 에스더 노우호",
          url: "",
          hasLocalFile: false,
          duration: "41:15"
        },
        {
          id: "09",
          title: "Intensive Lectures 09: Ezra-Malachi (Rebuilding the Temple and the Conclusion of the OT)",
          book: "Ezra",
          fileName: "집중강좌_09 에스라-말라기.mp3",
          localPath: "audio/집중강좌_09 에스라-말라기.mp3",
          path: "H:\\HDX\\Church\\집중성경강좌\\집중강좌_09 에스라-말라기.mp3",
          ytQuery: "에스라하우스 EBL 에스라 느헤미야 말라기 노우호",
          url: "",
          hasLocalFile: false,
          duration: "36:45"
        },
        {
          id: "10",
          title: "Intensive Lectures 10: The Intertestamental Period-Gospels (400 Years of History and Jesus Christ)",
          book: "Intertestamental Period",
          fileName: "집중강좌_10 신구약중간사-복음서.mp3",
          localPath: "audio/집중강좌_10 신구약중간사-복음서.mp3",
          path: "H:\\HDX\\Church\\집중성경강좌\\집중강좌_10 신구약중간사-복음서.mp3",
          ytQuery: "에스라하우스 EBL 신구약중간사 복음서 노우호",
          url: "",
          hasLocalFile: false,
          duration: "46:10"
        },
        {
          id: "11",
          title: "Intensive Lectures 11: Acts-Epistles (1) (The Coming of the Spirit and Paul's 1st~2nd Missionary Journeys)",
          book: "Acts",
          fileName: "집중강좌_11 사도행전-서신서.mp3",
          localPath: "audio/집중강좌_11 사도행전-서신서.mp3",
          path: "H:\\HDX\\Church\\집중성경강좌\\집중강좌_11 사도행전-서신서.mp3",
          ytQuery: "에스라하우스 EBL 사도행전 서신서 노우호",
          url: "",
          hasLocalFile: false,
          duration: "43:20"
        },
        {
          id: "12",
          title: "Intensive Lectures 12: Acts-Epistles (2) (Paul's 3rd Missionary Journey and Exposition of Romans)",
          book: "Romans",
          fileName: "집중강좌_12 사도행전-서신서.mp3",
          localPath: "audio/집중강좌_12 사도행전-서신서.mp3",
          path: "H:\\HDX\\Church\\집중성경강좌\\집중강좌_12 사도행전-서신서.mp3",
          ytQuery: "에스라하우스 EBL 로마서 고린도서 노우호",
          url: "",
          hasLocalFile: false,
          duration: "40:50"
        },
        {
          id: "13",
          title: "Intensive Lectures 13: Prison Epistles-Jude (Ephesians, Philippians, Colossians, and the General Epistles)",
          book: "Ephesians",
          fileName: "집중강좌_13 옥중서신-유다서.mp3",
          localPath: "audio/집중강좌_13 옥중서신-유다서.mp3",
          path: "H:\\HDX\\Church\\집중성경강좌\\집중강좌_13 옥중서신-유다서.mp3",
          ytQuery: "에스라하우스 EBL 옥중서신 히브리서 공동서신 노우호",
          url: "",
          hasLocalFile: false,
          duration: "41:30"
        },
        {
          id: "14",
          title: "Intensive Lectures 14: Revelation (The Victory of the Lamb and the New Heavens and New Earth)",
          book: "Revelation",
          fileName: "집중강좌_14 요한계시록.mp3",
          localPath: "audio/집중강좌_14 요한계시록.mp3",
          path: "H:\\HDX\\Church\\집중성경강좌\\집중강좌_14 요한계시록.mp3",
          ytQuery: "에스라하우스 EBL 요한계시록 노우호",
          url: "",
          hasLocalFile: false,
          duration: "48:00"
        },
        // --- 개역개정 대표 본문 낭독 (Web Speech Synthesis / 오디오) ---
        {
          id: "scr-gen-01",
          title: "NKRV Bible reading: Genesis chapter 01 (In the beginning God created the heavens and the earth)",
          book: "Genesis",
          fileName: "창세기01.mp3",
          localPath: "audio/창세기01.mp3",
          path: "H:\\HDX\\Church\\성경 개역개정 오디오 mp3파일\\구약\\01 창세기\\창세기01.mp3",
          isScripture: true,
          text: "In the beginning God created the heaven and the earth. And the earth was without form, and void; and darkness was upon the face of the deep. And the Spirit of God moved upon the face of the waters. And God said, Let there be light: and there was light. And God saw the light, that it was good. And God divided the light from the darkness. And God called the light Day, and the darkness he called Night. And the evening and the morning were the first day.",
          url: "",
          duration: "03:40"
        },
        {
          id: "scr-psa-23",
          title: "NKRV Bible reading: Psalm 023 (The LORD is my shepherd)",
          book: "Psalms",
          fileName: "시편023.mp3",
          localPath: "audio/시편023.mp3",
          path: "H:\\HDX\\Church\\성경 개역개정 오디오 mp3파일\\구약\\19 시편\\시편023.mp3",
          isScripture: true,
          text: "The LORD is my shepherd; I shall not want. He maketh me to lie down in green pastures: he leadeth me beside the still waters. He restoreth my soul: he leadeth me in the paths of righteousness for his name's sake. Yea, though I walk through the valley of the shadow of death, I will fear no evil: for thou art with me; thy rod and thy staff they comfort me.",
          url: "",
          duration: "02:15"
        },
        {
          id: "scr-rom-08",
          title: "NKRV Bible reading: Romans chapter 08 (There is therefore now no condemnation)",
          book: "Romans",
          fileName: "로마서08.mp3",
          localPath: "audio/로마서08.mp3",
          path: "H:\\HDX\\Church\\성경 개역개정 오디오 mp3파일\\신약\\06 로마서\\로마서08.mp3",
          isScripture: true,
          text: "There is therefore now no condemnation to them which are in Christ Jesus. For the law of the Spirit of life in Christ Jesus hath made me free from the law of sin and death. For what the law could not do, in that it was weak through the flesh, God sending his own Son in the likeness of sinful flesh, and for sin, condemned sin in the flesh: That the righteousness of the law might be fulfilled in us, who walk not after the flesh, but after the Spirit.",
          url: "",
          duration: "04:10"
        }
      ];
    }

    // IndexedDB 캐싱 (H: 드라이브 분리 후에도 영구 로컬 재생 지원)
    async openDB() {
      return new Promise((resolve) => {
        if (!('indexedDB' in window)) return resolve(null);
        const req = indexedDB.open("EzraAudioArchiveDB", 1);
        req.onupgradeneeded = (e) => {
          const db = e.target.result;
          if (!db.objectStoreNames.contains("audioTracks")) {
            db.createObjectStore("audioTracks", { keyPath: "id" });
          }
        };
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => resolve(null);
      });
    }

    async saveTracksToDB(tracksWithFiles) {
      try {
        const db = await this.openDB();
        if (!db) return;
        const tx = db.transaction("audioTracks", "readwrite");
        const store = tx.objectStore("audioTracks");
        for (const item of tracksWithFiles) {
          store.put({ id: item.id, fileName: item.file.name, fileBlob: item.file });
        }
      } catch (err) {
        console.warn("IndexedDB save error:", err);
      }
    }

    async loadCachedTracks() {
      try {
        const db = await this.openDB();
        if (!db) return;
        const tx = db.transaction("audioTracks", "readonly");
        const store = tx.objectStore("audioTracks");
        const req = store.getAll();
        req.onsuccess = () => {
          const items = req.result;
          if (items && items.length > 0) {
            let restoredCount = 0;
            items.forEach(item => {
              const track = this.playlist.find(p => p.id === item.id);
              if (track && item.fileBlob) {
                track.url = URL.createObjectURL(item.fileBlob);
                track.hasLocalFile = true;
                restoredCount++;
              }
            });
            if (restoredCount > 0) {
              this.hasCachedFiles = true;
              this.render();
            }
          }
        };
      } catch (err) {
        console.warn("IndexedDB restore error:", err);
      }
    }

    bindAudioEvents() {
      this.audio.addEventListener("timeupdate", () => {
        this.onTimeUpdate();
      });

      this.audio.addEventListener("play", () => {
        this.isPlaying = true;
        this.updatePlayStateUI();
      });

      this.audio.addEventListener("pause", () => {
        this.isPlaying = false;
        this.updatePlayStateUI();
      });

      this.audio.addEventListener("ended", () => {
        this.onTrackEnded();
      });

      this.audio.addEventListener("loadedmetadata", () => {
        this.updateDurationUI();
      });
    }

    onTimeUpdate() {
      const cur = this.audio.currentTime;
      const dur = this.audio.duration || 0;

      // A-B 반복 루프 처리
      if (this.isLoopActive && this.loopA !== null && this.loopB !== null) {
        if (cur >= this.loopB) {
          this.audio.currentTime = this.loopA;
          return;
        }
      }

      // 프로그레스 바 & 시간 텍스트 갱신
      const root = document.getElementById(this.containerId);
      if (!root) return;

      const progress = root.querySelector("#audio-seek-bar");
      const curText = root.querySelector("#audio-current-time");
      if (progress && dur > 0) {
        progress.value = (cur / dur) * 100;
      }
      if (curText) {
        curText.textContent = this.formatTime(cur);
      }
    }

    onTrackEnded() {
      if (this.currentTrackIndex < this.playlist.length - 1) {
        this.playTrack(this.currentTrackIndex + 1);
      } else {
        this.isPlaying = false;
        this.updatePlayStateUI();
      }
    }

    playTrack(index) {
      if (index < 0 || index >= this.playlist.length) return;
      this.currentTrackIndex = index;
      const track = this.playlist[index];

      // 이전 Web Speech 중단
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }

      // 1. 이미 로컬 MP3 URL이 연결되어 있으면 즉시 재생
      if (track.url) {
        this.playerMode = "local";
        this.audio.src = track.url;
        this.audio.playbackRate = this.playbackRate;
        this.audio.play().then(() => {
          this.isPlaying = true;
          this.updatePlayStateUI();
          if (window.showToast) window.showToast(`🎧 [High-quality local MP3] Now playing ${track.title}`);
        }).catch(e => {
          console.warn("Local play error:", e);
        });
        this.render();
        return;
      }

      // 2. 성경 본문 낭독 트랙인 경우: 브라우저 음성 합성(TTS)으로 즉시 낭독
      if (track.isScripture && track.text) {
        this.playerMode = "tts";
        this.playSpeech(track);
        this.render();
        return;
      }

      // 3. localPath 상대경로 자동 시도 (d:\도시케어\대하설교\audio\ 폴더에 파일 복사 시 즉시 재생)
      if (track.localPath) {
        this.playerMode = "local";
        const testAudio = new Audio();
        testAudio.src = track.localPath;
        testAudio.oncanplaythrough = () => {
          track.url = track.localPath;
          track.hasLocalFile = true;
          this.audio.src = track.localPath;
          this.audio.playbackRate = this.playbackRate;
          this.audio.play().then(() => {
            this.isPlaying = true;
            this.updatePlayStateUI();
            if (window.showToast) window.showToast(`🎧 [audio/ folder] Playing ${track.title} now!`);
          }).catch(e => console.warn(e));
          this.render();
        };
        testAudio.onerror = () => {
          // audio/ 폴더에 파일 없음 → 폴더 선택기 안내
          this.render();
          if (window.showToast) {
            window.showToast(`📁 Copy the files into the audio folder, or press [📁 Auto-link folder]!`);
          }
        };
        testAudio.load();
        this.render();
        return;
      }

      // 4. 로컬 파일이 아직 로드되지 않은 경우: 폴더 선택기 열기
      this.playerMode = "local";
      this.render();
      if (window.showToast) {
        window.showToast(`📁 Select the H:\\HDX\\Church\\집중성경강좌 folder and all 14 lectures will play right away!`);
      }
      this.openFolderPicker();
    }

    playSpeech(track) {
      if (!('speechSynthesis' in window)) {
        if (window.showToast) window.showToast("This browser does not support speech synthesis.");
        return;
      }
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(track.text);
      utterance.lang = "en-US";
      utterance.rate = this.playbackRate || 1.0;
      utterance.onstart = () => {
        this.isPlaying = true;
        this.updatePlayStateUI();
        if (window.showToast) window.showToast(`📖 [Bible reading] Reading ${track.title} aloud`);
      };
      utterance.onend = () => {
        this.isPlaying = false;
        this.updatePlayStateUI();
      };
      utterance.onerror = () => {
        this.isPlaying = false;
        this.updatePlayStateUI();
      };
      window.speechSynthesis.speak(utterance);
      this.isPlaying = true;
    }

    setPlayerMode(mode) {
      this.playerMode = mode;
      const track = this.playlist[this.currentTrackIndex];
      if (mode === "online") {
        if (this.audio) this.audio.pause();
        if (window.speechSynthesis) window.speechSynthesis.cancel();
      } else if (mode === "local") {
        if (window.speechSynthesis) window.speechSynthesis.cancel();
        if (track && track.url) {
          this.audio.src = track.url;
          this.audio.playbackRate = this.playbackRate;
          this.audio.play().catch(e => console.warn(e));
        }
      } else if (mode === "tts") {
        if (this.audio) this.audio.pause();
        if (track && track.isScripture) {
          this.playSpeech(track);
        } else {
          const summaryText = `${track.title}. ${track.book}. This is the audio guide for the Ezra Bible Intensive Lectures. Together with Pastor Woo-ho Noh's Bible expositions, we read through God's heart in all 66 books of the Bible.`;
          this.playSpeech({ title: track.title, text: summaryText });
        }
      }
      this.render();
    }

    togglePlay() {
      if (this.currentTrackIndex === -1 && this.playlist.length > 0) {
        this.playTrack(0);
        return;
      }
      const track = this.playlist[this.currentTrackIndex];
      if (this.playerMode === "local") {
        if (this.audio.paused) {
          if (track && track.url) {
            this.audio.play().catch(e => console.warn(e));
          } else {
            this.openFolderPicker();
          }
        } else {
          this.audio.pause();
        }
      } else if (this.playerMode === "tts") {
        if (window.speechSynthesis.speaking) {
          if (window.speechSynthesis.paused) {
            window.speechSynthesis.resume();
            this.isPlaying = true;
          } else {
            window.speechSynthesis.pause();
            this.isPlaying = false;
          }
          this.updatePlayStateUI();
        } else if (track) {
          this.playTrack(this.currentTrackIndex);
        }
      }
    }

    seek(seconds) {
      this.audio.currentTime = Math.max(0, Math.min(this.audio.duration || 0, this.audio.currentTime + seconds));
    }

    seekToPercent(percent) {
      if (this.audio.duration) {
        this.audio.currentTime = (percent / 100) * this.audio.duration;
      }
    }

    setSpeed(speed) {
      this.playbackRate = speed;
      this.audio.playbackRate = speed;
      if (this.playerMode === "tts" && window.speechSynthesis.speaking) {
        const track = this.playlist[this.currentTrackIndex];
        if (track) this.playSpeech(track);
      }
      this.render();
      if (window.showToast) window.showToast(`Playback speed: ${speed}x`);
    }

    // A-B 구간반복 제어
    setPointA() {
      this.loopA = this.audio.currentTime;
      if (this.loopB !== null && this.loopB <= this.loopA) {
        this.loopB = null;
        this.isLoopActive = false;
      }
      this.render();
      if (window.showToast) window.showToast(`📍 Point A set: ${this.formatTime(this.loopA)}`);
    }

    setPointB() {
      if (this.loopA === null) {
        if (window.showToast) window.showToast("Please set point A first.");
        return;
      }
      if (this.audio.currentTime <= this.loopA) {
        if (window.showToast) window.showToast("Point B must come after point A.");
        return;
      }
      this.loopB = this.audio.currentTime;
      this.isLoopActive = true;
      this.audio.currentTime = this.loopA;
      this.render();
      if (window.showToast) window.showToast(`🔁 A-B loop started (${this.formatTime(this.loopA)} ~ ${this.formatTime(this.loopB)})`);
    }

    clearLoop() {
      this.loopA = null;
      this.loopB = null;
      this.isLoopActive = false;
      this.render();
      if (window.showToast) window.showToast("The loop was turned off.");
    }

    // 네이티브 폴더 피커 또는 input 클릭으로 1초 만에 전체 폴더 연결
    async openFolderPicker() {
      if ('showDirectoryPicker' in window) {
        try {
          const dirHandle = await window.showDirectoryPicker();
          const files = [];
          for await (const entry of dirHandle.values()) {
            if (entry.kind === 'file' && entry.name.match(/\.(mp3|wav|m4a|aac|ogg)$/i)) {
              const file = await entry.getFile();
              files.push(file);
            }
          }
          if (files.length > 0) {
            this.loadLocalFiles(files);
            return;
          }
        } catch (err) {
          if (err.name !== 'AbortError') {
            console.warn("Directory picker error:", err);
          }
        }
      }
      const folderInput = document.getElementById("audio-folder-input");
      if (folderInput) folderInput.click();
    }

    // 로컬 MP3 파일 및 폴더 로더 + IndexedDB 영구 저장
    loadLocalFiles(fileList) {
      if (!fileList || fileList.length === 0) return;

      let addedCount = 0;
      const tracksToSave = [];

      Array.from(fileList).forEach(file => {
        if (!file.name.match(/\.(mp3|wav|m4a|aac|ogg)$/i)) return;

        const objectUrl = URL.createObjectURL(file);
        
        // 집중강좌 트랙 번호 정밀 매칭 (01~14)
        const fileNumMatch = file.name.match(/(?:집중강좌[_\s]*|강좌[_\s]*|0*)(\d+)/i) || file.name.match(/(\d+)/);
        const fileNum = fileNumMatch ? parseInt(fileNumMatch[1], 10) : null;

        let matched = null;
        if (fileNum !== null) {
          matched = this.playlist.find(p => p.id === String(fileNum).padStart(2, '0'));
        }
        if (!matched) {
          matched = this.playlist.find(p => p.fileName === file.name || file.name.includes(p.fileName) || (p.book && file.name.includes(p.book)));
        }

        if (matched) {
          matched.url = objectUrl;
          matched.hasLocalFile = true;
          tracksToSave.push({ id: matched.id, file: file });
        } else {
          const newId = `local-${Date.now()}-${Math.random()}`;
          this.playlist.push({
            id: newId,
            title: file.name.replace(/\.[^/.]+$/, ""),
            book: "Local audio",
            fileName: file.name,
            path: file.webkitRelativePath || file.name,
            url: objectUrl,
            hasLocalFile: true,
            duration: "--:--"
          });
          tracksToSave.push({ id: newId, file: file });
        }
        addedCount++;
      });

      if (addedCount > 0) {
        this.playerMode = "local";
        this.hasCachedFiles = true;
        this.saveTracksToDB(tracksToSave);
        
        const playIdx = this.currentTrackIndex >= 0 ? this.currentTrackIndex : 0;
        const curTrack = this.playlist[playIdx];
        if (curTrack && curTrack.url) {
          this.audio.src = curTrack.url;
          this.audio.playbackRate = this.playbackRate;
          this.audio.play().then(() => {
            this.isPlaying = true;
            this.updatePlayStateUI();
          }).catch(e => console.warn(e));
        }
        if (window.showToast) window.showToast(`🎵 ${addedCount} high-quality local MP3 files were linked successfully!`);
      }
      this.render();
    }

    setBookFilter(bookName) {
      this.activeBook = bookName;
      if (bookName) {
        const foundIdx = this.playlist.findIndex(p => p.book === bookName || (p.title && p.title.includes(bookName)));
        if (foundIdx !== -1) {
          this.currentTrackIndex = foundIdx;
        }
      }
    }

    formatTime(sec) {
      if (!sec || isNaN(sec)) return "00:00";
      const m = Math.floor(sec / 60);
      const s = Math.floor(sec % 60);
      return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
    }

    updatePlayStateUI() {
      const root = document.getElementById(this.containerId);
      if (!root) return;
      const btnPlay = root.querySelector("#audio-btn-play");
      if (btnPlay) {
        btnPlay.innerHTML = this.isPlaying 
          ? `<svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>`
          : `<svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>`;
      }
    }

    updateDurationUI() {
      const root = document.getElementById(this.containerId);
      if (!root) return;
      const durText = root.querySelector("#audio-duration-time");
      if (durText && this.audio.duration) {
        durText.textContent = this.formatTime(this.audio.duration);
      }
    }

    render(containerId) {
      if (containerId) this.containerId = containerId;
      const root = document.getElementById(this.containerId);
      if (!root) return;

      const curTrack = this.playlist[this.currentTrackIndex] || this.playlist[0] || {
        title: "Intensive Lectures 01: How the Old Testament Fits Together",
        fileName: "집중강좌_01 구약성경의 상호관계.mp3",
        book: "Ezra Bible Course"
      };

      const hasA = this.loopA !== null;
      const hasB = this.loopB !== null;
      const isOnline = this.playerMode === "online";
      const isLocal = this.playerMode === "local";
      const isTts = this.playerMode === "tts";

      // 필터링된 플레이리스트
      let displayPlaylist = this.playlist;
      if (this.activeBook) {
        const matchedList = this.playlist.filter(p => p.book === this.activeBook || (p.title && p.title.includes(this.activeBook)));
        if (matchedList.length > 0) {
          displayPlaylist = matchedList;
        }
      }

      root.innerHTML = `
        <div id="ezra-audio-card" class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-5 shadow-sm space-y-4 transition-all">
          
          <!-- 상단: 현재 트랙 정보 & 모드 선택 -->
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-3.5">
            <div>
              <div class="flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full ${this.isPlaying ? 'bg-emerald-500 animate-pulse' : 'bg-slate-400'}"></span>
                <span class="text-xs font-bold text-emerald-600 dark:text-emerald-400">${curTrack.book}</span>
                <span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${
                  curTrack.url ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20' :
                  isTts ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20' :
                  'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20'
                }">
                  ${curTrack.url ? '🎧 Local MP3 ready to play' : isTts ? '📖 Text read aloud' : '⚡ Needs a 1-second folder link'}
                </span>
              </div>
              <h4 class="text-base font-bold text-slate-900 dark:text-slate-100 mt-1 truncate max-w-lg">
                ${curTrack.title}
              </h4>
              <p class="text-xs text-slate-400 truncate max-w-lg font-mono">${curTrack.fileName}</p>
            </div>

            <!-- 모드 전환 및 폴더 연결 버튼 -->
            <div class="flex flex-wrap items-center gap-2 shrink-0">
              <div class="flex items-center p-1 bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold">
                <button onclick="window.ezraAudioStudio.setPlayerMode('local')" 
                        class="px-2.5 py-1 rounded-lg transition ${isLocal ? 'bg-emerald-600 text-white shadow' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}">
                  🎧 Local high-quality MP3
                </button>
                <button onclick="window.ezraAudioStudio.setPlayerMode('online')" 
                        class="px-2.5 py-1 rounded-lg transition ${isOnline ? 'bg-red-600 text-white shadow' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}">
                  ▶ Official YouTube lectures
                </button>
                <button onclick="window.ezraAudioStudio.setPlayerMode('tts')" 
                        class="px-2.5 py-1 rounded-lg transition ${isTts ? 'bg-amber-600 text-white shadow' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}">
                  📖 Bible reading
                </button>
              </div>

              <!-- H:\HDX\Church 원클릭 폴더 연결 -->
              <button onclick="window.ezraAudioStudio.openFolderPicker()" 
                      class="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow transition flex items-center gap-1.5"
                      title="Automatically match the H:\HDX\Church\집중성경강좌 folder in one go">
                📁 Auto-link folder
              </button>
              <input id="audio-folder-input" type="file" webkitdirectory class="hidden" />
              <input id="audio-file-input" type="file" multiple accept="audio/*,.mp3,.wav" class="hidden" />
            </div>
          </div>

          <!-- 로컬 MP3 연결 안내 배너 (미연결 시 표시) -->
          ${isLocal && !curTrack.url ? `
            <div class="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl space-y-3 shadow-sm">
              <div class="flex items-start gap-3">
                <span class="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center text-xl shrink-0 shadow">📁</span>
                <div class="flex-1 min-w-0">
                  <h5 class="text-sm font-bold text-emerald-900 dark:text-emerald-100">
                    Copy the MP3 files into the <code class="text-emerald-700 dark:text-emerald-300">audio/</code> folder and they play right away!
                  </h5>
                  <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    Copy the files to the path below, and the app will recognize them automatically when it starts, so they play with a single click.
                  </p>
                  <div class="mt-2 p-2.5 bg-white dark:bg-slate-900 rounded-lg border border-emerald-200 dark:border-emerald-800 font-mono text-xs text-slate-700 dark:text-slate-300 space-y-1 select-all">
                    <div>📂 <strong>d:\\도시케어\\대하설교\\audio\\</strong></div>
                    <div class="text-slate-500 pl-5">└ 집중강좌_01 구약성경의 상호관계.mp3</div>
                    <div class="text-slate-500 pl-5">└ 집중강좌_02 창세기-레위기.mp3</div>
                    <div class="text-slate-400 pl-5">└ ... (all 14)</div>
                  </div>
                </div>
              </div>
              <div class="flex items-center gap-2 flex-wrap">
                <span class="text-xs text-slate-500 dark:text-slate-400">Or connect the H: drive:</span>
                <button onclick="window.ezraAudioStudio.openFolderPicker()" class="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow transition flex items-center gap-1.5">
                  📁 Choose a folder on the H: drive
                </button>
              </div>
            </div>
          ` : ''}

          <!-- 온라인 스트리밍 플레이어 뷰 (오류 153 방지: 안정적인 유튜브 공식 연동 카드) -->
          ${isOnline ? `
            <div class="rounded-2xl p-5 bg-gradient-to-br from-red-600/10 via-slate-900/5 to-slate-900/10 dark:from-red-950/30 dark:via-slate-900 dark:to-slate-900 border border-red-500/20 space-y-3">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div class="flex items-center gap-2.5">
                  <span class="w-8 h-8 rounded-xl bg-red-600 text-white flex items-center justify-center font-bold text-base shadow">▶</span>
                  <div>
                    <h5 class="text-sm font-bold text-slate-900 dark:text-slate-100">
                      Ezra House TV official YouTube lectures
                    </h5>
                    <p class="text-xs text-slate-500">Pastor Woo-ho Noh's official lecture: ${curTrack.title}</p>
                  </div>
                </div>
                <span class="text-[11px] px-2.5 py-1 rounded-full bg-red-500/10 text-red-600 dark:text-red-400 font-bold border border-red-500/20 w-fit">
                  Linked to the official channel
                </span>
              </div>
              <div class="p-3 bg-white/80 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-400 space-y-1">
                <p>💡 With the browser's local security policy (file:///), the embedded YouTube iframe may be blocked (error 153).</p>
                <p class="text-slate-500 dark:text-slate-500">Press the button below to listen right away in the official YouTube player, in high quality and without interruption.</p>
              </div>
              <div class="flex flex-wrap items-center gap-2.5 pt-1">
                <a href="https://www.youtube.com/results?search_query=${encodeURIComponent(curTrack.ytQuery || curTrack.title)}" target="_blank" rel="noopener" 
                   class="px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold shadow-md hover:shadow-lg transition flex items-center gap-2">
                  <span>▶ Watch this lecture on YouTube now</span>
                  <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M5 13h11.86l-5.43 5.43 1.42 1.42L21.14 12l-8.29-8.29-1.42 1.42L16.86 11H5v2z"/></svg>
                </a>
                <a href="https://www.youtube.com/@ezrahousetv" target="_blank" rel="noopener" 
                   class="px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 transition">
                  Ezra House TV channel home
                </a>
              </div>
            </div>
          ` : ''}

          <!-- 성경 본문 낭독 (TTS) 뷰 -->
          ${isTts ? `
            <div class="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 space-y-2.5">
              <div class="flex items-center justify-between">
                <h5 class="text-xs font-bold text-amber-700 dark:text-amber-300 flex items-center gap-1.5">
                  <span>📖 Korean voice reading</span>
                  <span class="text-[11px] font-normal text-slate-500">(high-quality reading with the Web Speech API)</span>
                </h5>
                <button onclick="window.ezraAudioStudio.togglePlay()" class="px-3 py-1 rounded bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold shadow">
                  ${this.isPlaying ? 'Pause ❚❚' : 'Replay ▶'}
                </button>
              </div>
              <p class="text-sm sm:text-base leading-relaxed text-slate-800 dark:text-slate-200 font-serif p-3 bg-white dark:bg-slate-800/80 rounded-lg border border-amber-500/10 select-text">
                ${curTrack.text || `The browser's voice reads the commentary on the ${curTrack.title} lecture aloud.`}
              </p>
            </div>
          ` : ''}

          <!-- 로컬 MP3 HTML5 오디오 컨트롤러 (탐색 바 & 재생 & A-B 구간반복) -->
          ${isLocal ? `
            <div class="space-y-3">
              <!-- 탐색 바 & 시간 -->
              <div class="space-y-1.5">
                <input id="audio-seek-bar" type="range" min="0" max="100" value="0" step="0.1"
                       class="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500" />
                <div class="flex justify-between text-xs font-mono text-slate-500">
                  <span id="audio-current-time">${this.formatTime(this.audio.currentTime)}</span>
                  <span id="audio-duration-time">${this.formatTime(this.audio.duration)}</span>
                </div>
              </div>

              <!-- 하단: 메인 컨트롤 버튼 그룹 -->
              <div class="flex flex-wrap items-center justify-between gap-3 pt-1">
                
                <!-- 재생 & 건너뛰기 -->
                <div class="flex items-center gap-2">
                  <button id="audio-btn-skip-back" class="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold transition" title="Back 10 seconds">
                    -10s
                  </button>
                  <button id="audio-btn-play" class="w-10 h-10 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-md transition">
                    ${this.isPlaying 
                      ? `<svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>`
                      : `<svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>`}
                  </button>
                  <button id="audio-btn-skip-fwd" class="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold transition" title="Forward 10 seconds">
                    +10s
                  </button>
                </div>

                <!-- A-B 구간반복 컨트롤러 -->
                <div class="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
                  <button id="audio-btn-set-a" class="px-2.5 py-1 rounded-lg text-xs font-bold transition ${
                    hasA ? 'bg-amber-500 text-white shadow' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }">
                    [Set A${hasA ? `: ${this.formatTime(this.loopA)}` : ''}]
                  </button>
                  <button id="audio-btn-set-b" class="px-2.5 py-1 rounded-lg text-xs font-bold transition ${
                    hasB ? 'bg-amber-500 text-white shadow' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }">
                    [Set B${hasB ? `: ${this.formatTime(this.loopB)}` : ''}]
                  </button>
                  ${hasA || hasB ? `
                    <button id="audio-btn-clear-loop" class="px-2 py-1 rounded-lg text-xs text-red-500 font-bold hover:bg-red-100 dark:hover:bg-red-950/50">
                      Clear ✕
                    </button>
                  ` : ''}
                </div>

                <!-- 재생 배속 조절 -->
                <div class="flex items-center gap-1">
                  ${[0.8, 1.0, 1.2, 1.5, 2.0].map(s => `
                    <button onclick="window.ezraAudioStudio.setSpeed(${s})" class="px-2 py-1 rounded-md text-xs font-bold transition ${
                      this.playbackRate === s 
                        ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 shadow' 
                        : 'text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }">${s}x</button>
                  `).join("")}
                </div>

              </div>
            </div>
          ` : ''}

          <!-- 하단: 플레이리스트 목록 (14개 전 강의 + 성경 낭독) -->
          <div class="pt-2 border-t border-slate-100 dark:border-slate-800">
            <div class="flex items-center justify-between mb-2">
              <h5 class="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                <span>Ezra Intensive Lectures & Bible audio: full list (${displayPlaylist.length})</span>
                ${this.activeBook ? `
                  <button onclick="window.ezraAudioStudio.setBookFilter(null); window.ezraAudioStudio.render();" class="text-[10px] text-emerald-600 dark:text-emerald-400 hover:underline">
                    (show all)
                  </button>
                ` : ''}
              </h5>
              <span class="text-[11px] text-slate-400">Click to play right away</span>
            </div>

            <div class="space-y-1.5 max-h-64 overflow-y-auto pr-1">
              ${displayPlaylist.map((t, idx) => {
                const globalIdx = this.playlist.indexOf(t);
                const isSelected = this.currentTrackIndex === globalIdx;
                return `
                  <div onclick="window.ezraAudioStudio.playTrack(${globalIdx})" 
                       class="p-2.5 rounded-xl text-xs flex items-center justify-between cursor-pointer transition ${
                          isSelected 
                            ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 font-bold border border-emerald-500/40 shadow-sm' 
                            : 'bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-slate-100'
                        }">
                    <div class="flex items-center gap-2.5 truncate">
                      <span class="w-6 text-center font-mono font-bold text-slate-400 dark:text-slate-500 shrink-0">
                        ${isSelected && this.isPlaying ? '▶' : (idx + 1)}
                      </span>
                      <div class="truncate">
                        <span class="truncate font-semibold block">${t.title}</span>
                        <span class="text-[10px] text-slate-400 font-mono truncate block">${t.fileName || t.book}</span>
                      </div>
                    </div>
                    <div class="flex items-center gap-1.5 shrink-0 ml-2">
                      <span class="px-2 py-0.5 rounded text-[10px] font-bold ${
                        t.url ? 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-400' :
                        t.isScripture ? 'bg-amber-500/20 text-amber-600 dark:text-amber-400' :
                        'bg-slate-500/20 text-slate-600 dark:text-slate-400'
                      }">
                        ${t.url ? '🎧 High-quality MP3' : t.isScripture ? '📖 Text reading' : '⚡ 1-second folder link'}
                      </span>
                    </div>
                  </div>
                `;
              }).join("")}
            </div>
          </div>

          <!-- 드래그 & 드롭 또는 파일 추가 영역 -->
          <div id="audio-drop-zone" class="p-2.5 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 text-center text-xs text-slate-400 hover:border-emerald-500 hover:text-emerald-500 transition cursor-pointer" onclick="window.ezraAudioStudio.openFolderPicker()">
            💡 Copy MP3 files into the <strong>d:\도시케어\대하설교\audio\</strong> folder and they will play automatically right away. Or drag and drop MP3 files here.
          </div>

        </div>
      `;

      // 이벤트 리스너 바인딩
      const fileInput = root.querySelector("#audio-file-input");
      const folderInput = root.querySelector("#audio-folder-input");
      const btnPlay = root.querySelector("#audio-btn-play");
      const btnSkipBack = root.querySelector("#audio-btn-skip-back");
      const btnSkipFwd = root.querySelector("#audio-btn-skip-fwd");
      const seekBar = root.querySelector("#audio-seek-bar");
      const btnSetA = root.querySelector("#audio-btn-set-a");
      const btnSetB = root.querySelector("#audio-btn-set-b");
      const btnClearLoop = root.querySelector("#audio-btn-clear-loop");
      const dropZone = root.querySelector("#audio-drop-zone");

      if (fileInput) fileInput.onchange = (e) => this.loadLocalFiles(e.target.files);
      if (folderInput) folderInput.onchange = (e) => this.loadLocalFiles(e.target.files);
      if (btnPlay) btnPlay.onclick = () => this.togglePlay();
      if (btnSkipBack) btnSkipBack.onclick = () => this.seek(-10);
      if (btnSkipFwd) btnSkipFwd.onclick = () => this.seek(10);
      if (seekBar) seekBar.oninput = (e) => this.seekToPercent(parseFloat(e.target.value));
      if (btnSetA) btnSetA.onclick = () => this.setPointA();
      if (btnSetB) btnSetB.onclick = () => this.setPointB();
      if (btnClearLoop) btnClearLoop.onclick = () => this.clearLoop();

      // 드래그 앤 드롭 지원
      if (dropZone) {
        dropZone.ondragover = (e) => {
          e.preventDefault();
          dropZone.classList.add("border-emerald-500", "bg-emerald-500/10");
        };
        dropZone.ondragleave = (e) => {
          e.preventDefault();
          dropZone.classList.remove("border-emerald-500", "bg-emerald-500/10");
        };
        dropZone.ondrop = (e) => {
          e.preventDefault();
          dropZone.classList.remove("border-emerald-500", "bg-emerald-500/10");
          if (e.dataTransfer && e.dataTransfer.files) {
            this.loadLocalFiles(e.dataTransfer.files);
          }
        };
      }
    }
  }

  // --------------------------------------------------------------------------
  // 로컬 파일 메타데이터 정의 (H:\HDX\Church 연동)
  // --------------------------------------------------------------------------
  window.LOCAL_PPT_FILES = [
    // --- ppt강의자료 (25개 원본 PPTX/PDF 파일) ---
    { name: "1강._강좌원리와_구약상관관계.pptx", book: "Course Principles", desc: "Basic principles of the Ezra Bible Course and a chart of how the 39 books of the OT, History and Prophecy, fit together", path: "H:\\HDX\\Church\\ppt강의자료\\1강._강좌원리와_구약상관관계.pptx" },
    { name: "제_2강_창세기(1)_-_창조_1_PPT.pptx", book: "Genesis", desc: "Genesis 1~3: God's creation of the heavens and the earth, the Garden of Eden, and the meaning of the Sabbath rest", path: "H:\\HDX\\Church\\ppt강의자료\\제_2강_창세기(1)_-_창조_1_PPT.pptx" },
    { name: "제_2강_창세기(2)-_창조_2__PPT.pptx", book: "Genesis", desc: "Genesis 1~2: six days of orderly creation and the dignity of human beings", path: "H:\\HDX\\Church\\ppt강의자료\\제_2강_창세기(2)-_창조_2__PPT.pptx" },
    { name: "제_2강_창세기(3)-_타락PPT.pptx", book: "Genesis", desc: "Genesis 3: the serpent's temptation and the forbidden fruit, the fall of man, and the first gospel (Gen 3:15)", path: "H:\\HDX\\Church\\ppt강의자료\\제_2강_창세기(3)-_타락PPT.pptx" },
    { name: "제_2강_창세기(4)-_심판PPT_1.pptx", book: "Genesis", desc: "Genesis 6~8: Noah building the ark and the judgment of the global Flood", path: "H:\\HDX\\Church\\ppt강의자료\\제_2강_창세기(4)-_심판PPT_1.pptx" },
    { name: "제_2강_창세기(5)-심판PPT2.pptx", book: "Genesis", desc: "Geological evidence of the Flood judgment, the rainbow covenant, and a new start", path: "H:\\HDX\\Church\\ppt강의자료\\제_2강_창세기(5)-심판PPT2.pptx" },
    { name: "제_2강_창세기(6)-_분산_PPT.pptx", book: "Genesis", desc: "Genesis 11: the rebellion of the Tower of Babel, the confusion of languages, and humanity scattered over all the earth", path: "H:\\HDX\\Church\\ppt강의자료\\제_2강_창세기(6)-_분산_PPT.pptx" },
    { name: "제3강._출애굽기의_파노라마_&_레위기.pptx", book: "Exodus", desc: "A panorama of the ten plagues of Egypt, the night of Passover, the Sinai covenant, and the pattern of the tabernacle", path: "H:\\HDX\\Church\\ppt강의자료\\제3강._출애굽기의_파노라마_&_레위기.pptx" },
    { name: "3강._레위기-거룩한백성의_식생활(1).pptx", book: "Diet Lecture", desc: "Leviticus 11: the laws of clean and unclean animals and the diet of a holy people", path: "H:\\HDX\\Church\\ppt강의자료\\3강._레위기-거룩한백성의_식생활(1).pptx" },
    { name: "3강._레위기-거룩한백성의_식생활(2).pptx", book: "Diet Lecture", desc: "Holiness and health: an exposition of today's diet and biblical principles of health", path: "H:\\HDX\\Church\\ppt강의자료\\3강._레위기-거룩한백성의_식생활(2).pptx" },
    { name: "제4강__민수기,_신명기.pptx", book: "Numbers", desc: "Unbelief at Kadesh Barnea and 40 years of refining in the wilderness; Deuteronomy, the Shema on the plains of Moab", path: "H:\\HDX\\Church\\ppt강의자료\\제4강__민수기,_신명기.pptx" },
    { name: "제4강_여호수아,_사사기,_룻기.pptx", book: "Joshua", desc: "The war of the conquest of Canaan and the division of the land, the 350 dark years of Judges, and the hesed grace of Ruth", path: "H:\\HDX\\Church\\ppt강의자료\\제4강_여호수아,_사사기,_룻기.pptx" },
    { name: "5강.사무엘상하,열왕기상하.pptx", book: "1 Samuel", desc: "The monarchy of Saul and David, the Davidic covenant, Solomon's temple, and the division into northern and southern kingdoms", path: "H:\\HDX\\Church\\ppt강의자료\\5강.사무엘상하,열왕기상하.pptx" },
    { name: "5강[2].요나,아모스,호세아.pptx", book: "Hosea", desc: "The prophets Jonah, Amos, and Hosea, who worked in the time of Jeroboam II of northern Israel", path: "H:\\HDX\\Church\\ppt강의자료\\5강[2].요나,아모스,호세아.pptx" },
    { name: "6강.요엘-애가.pptx", book: "Isaiah", desc: "The prophets of Judah: Joel, Isaiah, Micah, Habakkuk, Zephaniah, Jeremiah, and Lamentations", path: "H:\\HDX\\Church\\ppt강의자료\\6강.요엘-애가.pptx" },
    { name: "7강.중간사-시가서.pptx", book: "Psalms", desc: "The five books of Poetry & Wisdom (Job, Psalms, Proverbs, Ecclesiastes, Song of Songs) and the background of the Intertestamental Period", path: "H:\\HDX\\Church\\ppt강의자료\\7강.중간사-시가서.pptx" },
    { name: "8강.역대기-말라기.pptx", book: "Ezra", desc: "The Babylonian Exile (Ezekiel, Daniel) and the Return from Exile (1 & 2 Chronicles, Ezra, Nehemiah, Esther, Haggai, Zechariah, Malachi)", path: "H:\\HDX\\Church\\ppt강의자료\\8강.역대기-말라기.pptx" },
    { name: "9강.중간사-요한복음.pptx", book: "Matthew", desc: "400 years of Intertestamental history and the life of Jesus Christ in the four Gospels (Matthew, Mark, Luke, John)", path: "H:\\HDX\\Church\\ppt강의자료\\9강.중간사-요한복음.pptx" },
    { name: "10강(1).사도행전-갈라디아서.pptx", book: "Acts", desc: "The coming of the Holy Spirit at Pentecost, Paul's 1st~3rd missionary journeys, and the freedom of the gospel in Galatians", path: "H:\\HDX\\Church\\ppt강의자료\\10강(1).사도행전-갈라디아서.pptx" },
    { name: "10강(2).고린도서-유다서.pptx", book: "Romans", desc: "All of the Pauline Epistles (1 & 2 Corinthians, Romans, the Prison Epistles, the Pastoral Epistles) and the General Epistles", path: "H:\\HDX\\Church\\ppt강의자료\\10강(2).고린도서-유다서.pptx" },
    { name: "11강.요한계시록(1).pptx", book: "Revelation", desc: "Revelation 1~11: the letters to the seven churches, the Lamb before the throne, the seven seals and seven trumpets", path: "H:\\HDX\\Church\\ppt강의자료\\11강.요한계시록(1).pptx" },
    { name: "11강.요한계시록(2).pptx", book: "Revelation", desc: "Revelation 12~22: the seven bowls, the fall of Babylon the great, the millennial kingdom, and the new heavens and new earth", path: "H:\\HDX\\Church\\ppt강의자료\\11강.요한계시록(2).pptx" },
    { name: "특강_-__성경과_역사_그리고_미래.pptx", book: "Bible and History", desc: "A panorama of human history and God's redemptive history, the last days, and the mission of the church", path: "H:\\HDX\\Church\\특강_-__성경과_역사_그리고_미래.pptx" },
    { name: "신구약중간사_[1].pdf", book: "Intertestamental Period", desc: "Textbook on the 400 years from Malachi to Matthew: the Persian, Greek, Hasmonean, and Roman periods (Part 1)", path: "H:\\HDX\\Church\\ppt강의자료\\신구약중간사_[1].pdf" },
    { name: "신구약중간사_[2].pdf", book: "Intertestamental Period", desc: "Textbook on Intertestamental chronology and geography, apocalyptic literature, and the history of the Herodian dynasty (Part 2)", path: "H:\\HDX\\Church\\ppt강의자료\\신구약중간사_[2].pdf" },

    // --- HDX Church 상위 및 집중강의 PPT 파일 (12개 추가) ---
    { name: "01강 율법서 up.pptx", book: "Genesis", desc: "A comprehensive set of core slides on the Pentateuch, from Genesis to Deuteronomy", path: "H:\\HDX\\Church\\01강 율법서 up.pptx" },
    { name: "02강 역사서와 예언서 1.pptx", book: "Joshua", desc: "Correlation between history and the prophets from Joshua to the early divided kingdom", path: "H:\\HDX\\Church\\02강 역사서와 예언서 1.pptx" },
    { name: "03강 역사서와 예언서 2.pptx", book: "Isaiah", desc: "Exposition of the late divided kingdom, the falls to Assyria and Babylon, the Exile, and the Return from Exile", path: "H:\\HDX\\Church\\03강 역사서와 예언서 2.pptx" },
    { name: "04강 사복음서와 사도들의 행적_수정본.pptx", book: "Matthew", desc: "The public ministry of Jesus in the four Gospels and the early missionary history of Acts", path: "H:\\HDX\\Church\\04강 사복음서와 사도들의 행적_수정본.pptx" },
    { name: "05강 사도들의 행적2.pptx", book: "Acts", desc: "Paul's 3rd missionary journey and his transfer to Rome, with a summary of the Epistles and Revelation", path: "H:\\HDX\\Church\\05강 사도들의 행적2.pptx" },
    { name: "30시간 강의\\구약.pptx", book: "OT Survey", desc: "Core presentation textbook for the Ezra Bible Course 30-hour comprehensive Intensive Lectures on the Old Testament", path: "H:\\HDX\\Church\\30시간 강의\\구약.pptx" },
    { name: "30시간 강의\\신약.pptx", book: "NT Survey", desc: "Core presentation textbook for the Ezra Bible Course 30-hour comprehensive Intensive Lectures on the New Testament", path: "H:\\HDX\\Church\\30시간 강의\\신약.pptx" },
    { name: "신구약중간사 (2014.04).pptx", book: "Intertestamental Period", desc: "Special lecture on the 400 years from Malachi to Matthew: the Greek, Maccabean, and Roman periods", path: "H:\\HDX\\Church\\신구약중간사 (2014.04).pptx" },
    { name: "로마역사 (2014.12).pptx", book: "Roman History", desc: "The history of the Roman Empire from Julius Caesar and Augustus to Nero, and the background of the New Testament", path: "H:\\HDX\\Church\\로마역사 (2014.12).pptx" },
    { name: "구약-요약.pptx", book: "OT Survey", desc: "A summary of the core thread of the 39 OT books in chronological order and of God's heart", path: "H:\\HDX\\Church\\구약-요약.pptx" },
    { name: "김병희 성경강좌 자료 오경(창-신).pptx", book: "Deuteronomy", desc: "Textbook for an in-depth study of the Pentateuch, Genesis~Deuteronomy, and an analysis of the structure of the Law", path: "H:\\HDX\\Church\\김병희 성경강좌 자료 오경(창-신).pptx" },
    { name: "쉐마교육 신앙전수 특강.pptx", book: "Shema Lecture", desc: "Special lecture notes on the Shema of Deuteronomy 6, passing the faith on to children, and restoring the family altar", path: "H:\\HDX\\Church\\쉐마교육 신앙전수 특강.pptx" }
  ];

  window.LOCAL_AUDIO_FILES = [
    { id: "01", title: "Intensive Lectures 01: How the Old Testament Fits Together", fileName: "집중강좌_01 구약성경의 상호관계.mp3", path: "H:\\HDX\\Church\\집중성경강좌\\집중강좌_01 구약성경의 상호관계.mp3", book: "Introduction to the Old Testament" },
    { id: "02", title: "Intensive Lectures 02: Genesis-Leviticus", fileName: "집중강좌_02 창세기-레위기.mp3", path: "H:\\HDX\\Church\\집중성경강좌\\집중강좌_02 창세기-레위기.mp3", book: "Genesis" },
    { id: "03", title: "Intensive Lectures 03: Numbers-Deuteronomy", fileName: "집중강좌_03 민수기-신명기.mp3", path: "H:\\HDX\\Church\\집중성경강좌\\집중강좌_03 민수기-신명기.mp3", book: "Deuteronomy" },
    { id: "04", title: "Intensive Lectures 04: Joshua-1 Samuel", fileName: "집중강좌_04 여호수아-삼상.mp3", path: "H:\\HDX\\Church\\집중성경강좌\\집중강좌_04 여호수아-삼상.mp3", book: "Joshua" },
    { id: "05", title: "Intensive Lectures 05: 2 Samuel-Hosea", fileName: "집중강좌_05 삼하-호세아.mp3", path: "H:\\HDX\\Church\\집중성경강좌\\집중강좌_05 삼하-호세아.mp3", book: "1 Kings" },
    { id: "06", title: "Intensive Lectures 06: Joel-Lamentations", fileName: "집중강좌_06 요엘-예레미아애가.mp3", path: "H:\\HDX\\Church\\집중성경강좌\\집중강좌_06 요엘-예레미아애가.mp3", book: "Isaiah" },
    { id: "07", title: "Intensive Lectures 07: Daniel-Ezekiel", fileName: "집중강좌_07 다니엘-에스겔.mp3", path: "H:\\HDX\\Church\\집중성경강좌\\집중강좌_07 다니엘-에스겔.mp3", book: "Daniel" },
    { id: "08", title: "Intensive Lectures 08: Poetry & Wisdom-Esther", fileName: "집중강좌_08 시가서-에스더.mp3", path: "H:\\HDX\\Church\\집중성경강좌\\집중강좌_08 시가서-에스더.mp3", book: "Psalms" },
    { id: "09", title: "Intensive Lectures 09: Ezra-Malachi", fileName: "집중강좌_09 에스라-말라기.mp3", path: "H:\\HDX\\Church\\집중성경강좌\\집중강좌_09 에스라-말라기.mp3", book: "Ezra" },
    { id: "10", title: "Intensive Lectures 10: The Intertestamental Period-Gospels", fileName: "집중강좌_10 신구약중간사-복음서.mp3", path: "H:\\HDX\\Church\\집중성경강좌\\집중강좌_10 신구약중간사-복음서.mp3", book: "Intertestamental Period" },
    { id: "11", title: "Intensive Lectures 11: Acts-Epistles", fileName: "집중강좌_11 사도행전-서신서.mp3", path: "H:\\HDX\\Church\\집중성경강좌\\집중강좌_11 사도행전-서신서.mp3", book: "Acts" },
    { id: "12", title: "Intensive Lectures 12: Acts-Epistles", fileName: "집중강좌_12 사도행전-서신서.mp3", path: "H:\\HDX\\Church\\집중성경강좌\\집중강좌_12 사도행전-서신서.mp3", book: "Romans" },
    { id: "13", title: "Intensive Lectures 13: Prison Epistles-Jude", fileName: "집중강좌_13 옥중서신-유다서.mp3", path: "H:\\HDX\\Church\\집중성경강좌\\집중강좌_13 옥중서신-유다서.mp3", book: "Ephesians" },
    { id: "14", title: "Intensive Lectures 14: Revelation", fileName: "집중강좌_14 요한계시록.mp3", path: "H:\\HDX\\Church\\집중성경강좌\\집중강좌_14 요한계시록.mp3", book: "Revelation" }
  ];

  // --------------------------------------------------------------------------
  // 전역 인스턴스 초기화 및 헬퍼 바인딩
  // --------------------------------------------------------------------------
  window.ezraSlideStudio = new SlideStudioManager();
  window.ezraAudioStudio = new AudioPlayerStudio();

  // 특정 컨테이너에 슬라이드 뷰어/편집기 렌더링
  window.renderSlideStudioComponent = function (containerId, bookName) {
    if (bookName) window.ezraSlideStudio.activeBook = bookName;
    window.ezraSlideStudio.render(containerId);
  };

  // 특정 컨테이너에 오디오 플레이어 렌더링
  window.renderAudioStudioComponent = function (containerId, bookName) {
    if (bookName) window.ezraAudioStudio.setBookFilter(bookName);
    window.ezraAudioStudio.render(containerId);
  };

})(window);
