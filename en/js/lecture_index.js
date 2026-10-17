// ============================================================================
// 에스라 대하설교 녹취록 분석 데이터 및 강해 요약
// 노우호 목사님의 샤론강단 대하설교 500여 편 핵심 분석 & 본문 강해
// ============================================================================

const LOCAL_CHURCH_BASE = "H:\\HDX\\Church";

// 각 권별 대하설교 녹취록 심층 분석 데이터
// title, scripture, file, summary, keyPoints, message
const LECTURE_INDEX_DATA = {
  "Genesis": [
    {
      no: "001",
      title: "God's Predestination and Election",
      scripture: "Ephesians 3:8-13 / Introduction to Genesis",
      file: "001.창세기-001 하나님의 예정과 선택(에베소서 3장 8-13절).hwp",
      summary: "Opening Genesis, this lecture first deals with God's eternal plan of salvation and with predestination and election through Jesus Christ, the mystery of God hidden from eternity. It shows God's sovereign love, which comes before chance or any human decision.",
      keyPoints: [
        "Before reading Genesis, we must understand God's heart and plan of redemption from eternity past",
        "The predestination of grace: God foreknew man's fall and prepared grace in Christ",
        "Election is not a privilege but a holy mission to lead the whole world to God"
      ],
      message: "Our salvation is not an accident; it is the result of God's wisdom before the foundation of the world and His immeasurable grace."
    },
    {
      no: "002",
      title: "The Freedom of a Christian",
      scripture: "John 8:31-36",
      file: "002.창세기-002 그리스도인의 자유(요한복음 8장 31-36절).hwp",
      summary: "Sheds light on the nature of the free will given to man in the Garden of Eden, and on its testing. It contrasts the true freedom we enjoy when we love God in the truth with the tragedy of man, who fell for Satan's deception and became a slave of license and sin.",
      keyPoints: [
        "The tree of the knowledge of good and evil was not meant to oppress man; it was a boundary line protecting the covenant relationship with God",
        "You will know the truth, and the truth will make you free",
        "Everyone who commits sin is the bondservant of sin, but if the Son makes you free, you will be free indeed"
      ],
      message: "Only when we obey within the bounds of God's word can we enjoy the safest and truest freedom."
    },
    {
      no: "003",
      title: "The Mystery of God",
      scripture: "Colossians 1:24-29",
      file: "003.창세기-003 하나님의 비밀(골로새서 1장 24-29절).hwp",
      summary: "Proclaims that the mystery hidden for ages and generations has been revealed to the saints: Christ in us, the hope of glory. All of creation and redemptive history in Genesis points toward this very Christ.",
      keyPoints: [
        "The patriarchs and events of the Old Testament are shadows and types of the hidden Christ",
        "Knowing Christ, the mystery of God, is the treasure of all knowledge and wisdom",
        "The believer's mission: to present every person complete in Christ"
      ],
      message: "The one key that runs through all 66 books of the Bible is Jesus Christ, the mystery of God."
    },
    {
      no: "004",
      title: "The Creation and Fall of the Spirit World",
      scripture: "Ezekiel 28:12-15",
      file: "004.창세기-004 영계의 창조와 타락(에스겔서 28장 12-15절).hwp",
      summary: "Traces from the Bible the spiritual world of the angels that existed before the creation of the material world, and the spiritual origin of Satan: the archangel (Lucifer), created as the seal of perfection, fell through pride and became Satan.",
      keyPoints: [
        "The world of spiritual beings that God created perfect and beautiful",
        "The essence of the fall: his heart grew proud because of his splendor, and he defiled himself",
        "The importance of discernment of spirits, to see the reality of the invisible spiritual forces behind things"
      ],
      message: "Pride goes before destruction, and a haughty spirit before a fall. Those who humble themselves before God win."
    },
    {
      no: "005",
      title: "The Identity and Hindrance of Evil Spirits",
      scripture: "Revelation 12:7-12",
      file: "005.창세기-005 악령의 정체와 훼방(요한계시록 12장 7-12절).hwp",
      summary: "Reveals how Satan, the prince of the power of the air, and the evil spirits who follow him have accused mankind and driven a wedge between people and God ever since the Garden of Eden, and exposes their cunning tactics and deceptions.",
      keyPoints: [
        "The war in heaven and the great dragon cast down to earth: the reality of Satan, the old serpent, called the devil",
        "Overcoming the accuser of our brothers, who accused them day and night, by the blood of the Lamb and the word of testimony",
        "The hindrance of evil spirits, who know their time is short and attack believers in great wrath"
      ],
      message: "Our wrestling is not against flesh and blood, but against the principalities, against the powers, against the world's rulers of the darkness."
    },
    {
      no: "006",
      title: "The Final Fate of Evil Spirits",
      scripture: "Revelation 20:7-10",
      file: "006.창세기-006 악령들의 궁극적 운명(요한계시록 20장 7-10절).hwp",
      summary: "Confirms that the final destination of Satan and the evil spirits who have troubled human history is the eternal lake of fire and sulfur, and urges believers never to fear the forces of evil but to be sure of the final victory.",
      keyPoints: [
        "When the thousand years are finished, Satan is released from prison: the last desperate struggle of Gog and Magog, deceiving the nations",
        "Fire comes down from heaven and devours them, and the devil is thrown into the lake of fire and sulfur",
        "The defeat of Satan, whose head was already crushed at the cross, and the eternal victory of the saints"
      ],
      message: "The victory of evil lasts only a moment; before God's righteous judgment seat the devil and his minions will perish forever."
    },
    {
      no: "007",
      title: "The Ancient Covenants",
      scripture: "Genesis 6:13-22",
      file: "007.창세기-007 오래된 언약들(창세기 6장 13-22절).hwp",
      summary: "Expounds the faithfulness of God's covenant of salvation: despite man's rebellion, from the first-gospel covenant with Adam (Gen 3:15) to the ark covenant with Noah, God never gave up on mankind and carried it on like a bloodline.",
      keyPoints: [
        "Genesis 3:15, the promise of the woman's offspring: the first gospel of the victory of the cross",
        "The covenant of grace of the ark, given to Noah when wickedness filled the world",
        "The faith and obedience of Noah, who did everything just as God commanded"
      ],
      message: "No matter how dark and corrupt the world becomes, God's covenant is never cancelled; it will surely be fulfilled."
    },
    {
      no: "008",
      title: "God's Creation",
      scripture: "Genesis 1:1-5",
      file: "008.창세기-008 하나님의 창조(창세기 1장 1-5절).hwp",
      summary: "In the beginning God created the heavens and the earth! This lecture unfolds God's absolute sovereignty in creating something out of nothing, and the mystery of the first day of creation, when He established order in the darkness and chaos by His word, \"Let there be light.\"",
      keyPoints: [
        "Genesis 1:1 is the great cornerstone that holds up the faith of all 66 books of the Bible",
        "God's purpose and orderly design in creation, which rejects the chance of the theory of evolution",
        "The creation of light: God's first word, driving out darkness and making a place for life"
      ],
      message: "The beginning of the universe is God, and the beginning and end of our lives rest only in the hands of God the Creator."
    },
    {
      no: "009",
      title: "Beautiful Creation",
      scripture: "Genesis 1:6-13",
      file: "009.창세기-009 아름다운 창조(창세기 1장 6-13절).hwp",
      summary: "Through the creation of the expanse (sky) on the second day, the separation of sea and land on the third day, and the creation of all kinds of plants and fruit trees, it sings of God's amazing craftsmanship and tender love found in the created world.",
      keyPoints: [
        "God perfectly prepared the air, water and land so that man could live",
        "The law of creation: trees bearing fruit, each with its seed, after their kind",
        "God saw that it was good (tov): the value of a harmonious and beautiful natural world"
      ],
      message: "We must recover a life that praises the Creator, seeing God's divine nature and power in all of nature."
    },
    {
      no: "010",
      title: "The Image of God 1",
      scripture: "Genesis 1:26-31",
      file: "010.창세기-010 하나님의 형상1(창세기 1장 26-31절).hwp",
      summary: "Analyzes the meaning of \"the image of God (Imago Dei),\" the high point of the creation of man. It stresses that man is not an extension of the animals, but a noble steward made to reflect God's character and holiness.",
      keyPoints: [
        "In our image, after our likeness: the cooperative creation of the triune God",
        "Be fruitful, multiply, fill the earth, subdue it and have dominion: the cultural mandate",
        "The image of God, the only foundation of the God-given dignity and equality of every human being"
      ],
      message: "Man is a spiritual being, more than matter, with a calling to live in holiness and love as befits the image of God."
    },
    {
      no: "012",
      title: "The Forbidden Fruit (the Tree of the Knowledge of Good and Evil)",
      scripture: "Genesis 3:1-7",
      file: "012.창세기-012 금단의 열매(창세기 3장 1-7절).hwp",
      summary: "Analyzes in detail, as if under a microscope, the first fall of mankind through the serpent's cunning temptation and the disobedience of Eve and Adam. It warns of the trap of pride, \"you will be like God,\" and of the contagious nature of sin.",
      keyPoints: [
        "How temptation works: doubt about the Word → distortion → desire (a delight to the eyes, good for food, desirable)",
        "The tree of the knowledge of good and evil is the boundary stone God set to mark the limits of man as a creature",
        "The essence of sin: the pride of sitting in God's place myself and setting the standard of good and evil"
      ],
      message: "When we twist God's word even a little, or add to it or take from it, we fall to the devil's temptation. We must keep the commandments with a pure faith."
    },
    {
      no: "014",
      title: "God's Grief and Sorrow",
      scripture: "Genesis 6:1-8",
      file: "014.창세기-014 하나님의 한탄과 근심(창세기 6장1-8절).hwp",
      summary: "Conveys the grief of God, who saw the spiritual syncretism of the sons of God taking as wives any of the daughters of men they chose because of their beauty, saw the violence that filled the whole earth, and lamented that every imagination of the thoughts of man's heart was only evil continually.",
      keyPoints: [
        "The careless union and corruption of the godly line of Seth (the sons of God) with the worldly line of Cain",
        "God saw that every imagination of the thoughts of man's heart was only evil continually",
        "But Noah found favor in the eyes of the LORD: one man set apart in a corrupt generation"
      ],
      message: "God is not a cold machine but a personal Father who grieves and is pained in His heart when He sees human sin."
    },
    {
      no: "019",
      title: "The Faith of Abraham",
      scripture: "Genesis 12:1-3",
      file: "019.창세기-019 아브라함의 믿음(창세기 12장 1-3절).hwp",
      summary: "Reveals the essence of the faith of Abraham, who left the idol culture of Ur of the Chaldeans, held on to a single word, \"Go to the land that I will show you,\" and set out in obedience, and the covenant that made him the source of blessing for all the peoples under heaven.",
      keyPoints: [
        "The decision to leave his country, relatives and father's house: a break with the old sinful world",
        "Steps of obedience, going out without knowing where he was going",
        "You will be a blessing: not a prosperity faith for my own comfort, but a missional blessing that brings life to the world"
      ],
      message: "True faith lays down secure privilege and steps out in obedience with God's promise alone as its compass."
    },
    {
      no: "028",
      title: "The Trials of a Boy Full of Dreams",
      scripture: "Genesis 37:1-4",
      file: "028.창세기-028 꿈 많은 소년의 시련1(창세기 37장 1-4절).hwp",
      summary: "Covers the first half of the life of Joseph, who was sold as a slave into Egypt because of his brothers' envy. It testifies to God's providence: the dream God gave was not fulfilled right away, but was shaped through the fiery furnace of harsh refining, slavery in Potiphar's house and prison.",
      keyPoints: [
        "Trials, envy and jealousy suffered because of the vision God gave",
        "The tears of Joseph, stripped of his coat of many colors and thrown into a pit",
        "Even under false accusation, the LORD was with Joseph, and he became a prosperous man"
      ],
      message: "Those whom God uses must pass through the school of suffering. If we trust God in any circumstance, trials become stepping stones to blessing."
    }
  ],

  "Exodus": [
    {
      no: "032",
      title: "God Prepares His Man 1",
      scripture: "Exodus 1:1-7",
      file: "032.출애굽기-032 하나님의 사람 준비1(출애굽기 1장 1절-7절).hwp",
      summary: "Covers the historical background of how Jacob's family of seventy, his twelve sons and their households, went down to Egypt and grew into a great nation over 400 years, and God's providence in preparing Moses in the crisis when a new dynasty that did not know Joseph arose, enslaved Israel and oppressed them.",
      keyPoints: [
        "The faithful fulfillment of the covenant of the torch in Genesis 15 (\"your offspring will be strangers for 400 years\")",
        "Under Pharaoh's oppression, the midwives feared God and let the Hebrew boys live",
        "Egypt as an incubator, shaping the nation through suffering"
      ],
      message: "The suffering of the saints does not mean God is silent; it is a time of labor pains in which God prepares people for a greater work of salvation."
    },
    {
      no: "035",
      title: "Escape from Egypt",
      scripture: "Exodus 12:29-36",
      file: "035.출애굽기-035 애굽으로부터 탈출(출애굽기 12장 29-36절).hwp",
      summary: "Expounds the tenth plague, which struck all the firstborn of Egypt and the firstborn of the livestock; the grace of redemption at the Passover, when the angel of death passed over (Pass-over) the houses whose doorposts and lintels were marked with the blood of the lamb; and finally the great march of the Exodus after 430 years.",
      keyPoints: [
        "The sacrifice of a lamb without blemish: a perfect type of the blood of Jesus Christ on the cross",
        "When I see the blood, I will pass over you: salvation is not by human merit but by the blood of the Lamb",
        "Eat it in haste, with your belt on your waist, your shoes on your feet, and your staff in your hand: the urgency of salvation"
      ],
      message: "We were set free from slavery to Satan and saved only through the merit of the precious blood of Jesus Christ, the Lamb."
    },
    {
      no: "038",
      title: "Understanding the Sinai Covenant 1",
      scripture: "Exodus 19:1-5",
      file: "038.출애굽기-038 시내산 언약의 이해1 (출애굽기 19장 1-5절).hwp",
      summary: "Explains the \"Sinai covenant,\" the heart of all of Exodus and the constitution of the whole Old Testament. It shows that the purpose for which God carried Israel on eagles' wings was to make them His own possession and a \"kingdom of priests\" to save the whole world.",
      keyPoints: [
        "You have seen what I did to the Egyptians, and how I bore you on eagles' wings, and brought you to myself",
        "If you will indeed obey my voice and keep my covenant, then you shall be my own possession (treasure) from among all peoples",
        "You shall be to me a kingdom of priests and a holy nation: the purpose of Israel's existence"
      ],
      message: "The identity of saved believers is \"a kingdom of priests and a holy nation.\" We must not stop at being saved ourselves, but become channels that make God known to the world."
    },
    {
      no: "044",
      title: "The Completion of the Tabernacle",
      scripture: "Exodus 36:1-7",
      file: "044.출애굽기-044 성막의 완성(출애굽기 36장 1-7절).hwp",
      summary: "Covers the wisdom of Bezalel and Oholiab, moved by the Holy Spirit as they built the tabernacle, and the moving devotion of the whole people, who willingly brought offerings every morning until there was too much and Moses had to stop them.",
      keyPoints: [
        "Bezalel and Oholiab, filled with the Spirit of God, made fine work with wisdom, understanding and knowledge",
        "The overflowing free-will offerings of those whose hearts were stirred: sufficient for all the work, and too much",
        "The spiritual meaning of the Most Holy Place, the altar of burnt offering, the lampstand and the table of showbread, built after the heavenly pattern"
      ],
      message: "God's work is completed not by force or for appearances, but by devotion moved by the Holy Spirit and given with willing joy."
    }
  ],

  "Leviticus": [
    {
      no: "046",
      title: "The Law That Makes Holy 1 (The Burnt Offering)",
      scripture: "Leviticus 1:1-9",
      file: "046.레위기-046 거룩하게 하는 율법1(레위기 1장 1-9절).hwp",
      summary: "Expounds the rules of the burnt offering, the first of the five major offerings. It explains the meaning of total devotion: laying hands on the head of the offering to transfer sin, skinning it and cutting it into pieces, and burning it entirely on the altar as a pleasing aroma.",
      keyPoints: [
        "Laying hands on the offering: the principle of atonement, in which the sinner's sin is transferred to a sacrifice without blemish",
        "Except for the skin, the meat, head, fat and inner parts are all burned: 100% complete devotion",
        "A pleasing aroma to the LORD: worship of complete obedience that God gladly accepts"
      ],
      message: "A believer's worship is a life of total devotion, burning up my own will and self completely on the cross and offering it up to the Lord."
    },
    {
      no: "049",
      title: "Holy Eating (Clean Food)",
      scripture: "Leviticus 11:1-8",
      file: "049.레위기-049 거룩하게 하는 율법4(레위기 11장 1-8절).hwp",
      summary: "The food laws of Leviticus 11, emphasized most practically in Pastor Woo-ho Noh's Ezra lectures. It explains the principles of health, public hygiene and being set apart: clean animals that have a divided, split hoof and chew the cud, fish with fins and scales, and so on.",
      keyPoints: [
        "God's careful concern and providence for our health, telling us to set apart even what we eat as holy",
        "The spiritual lessons of chewing the cud (meditating on the Word) and the divided hoof (being set apart from the world)",
        "I am holy, so set yourselves apart and be holy"
      ],
      message: "Faith is not an abstract idea; it begins with what we eat and drink every day, our health, and the purity of our bodies."
    }
  ],

  "2 Kings": [
    {
      no: "170",
      title: "The Fall of Northern Israel (B.C. 722)",
      scripture: "2 Kings 17:1-6",
      file: "170.열왕기하-08 이스라엘의 멸망(열왕기하 17장 1-6절).hwp",
      summary: "Analyzes the historical fact that Northern Israel was miserably destroyed after 208 years, when Samaria fell to Shalmaneser and Sargon II of Assyria. It solemnly charges that this was not a political or military defeat, but the inevitable result of spiritual disobedience: Jeroboam's golden calf idols, worship at the high places, and refusing the prophets' warnings to the very end.",
      keyPoints: [
        "In the time of King Hoshea, Samaria fell after a three-year siege, and the people were carried away to various cities of Assyria",
        "Why Israel fell: they sinned against the LORD who brought them out of Egypt, and followed the customs of the nations",
        "The LORD warned them through all the prophets, but they hardened their necks and did not believe"
      ],
      message: "A people who ignore God's warnings and cling to greed and idols cannot escape destruction, even if they are the chosen people."
    },
    {
      no: "171",
      title: "Hezekiah's Crisis and Victory in Prayer",
      scripture: "2 Kings 19:1-7",
      file: "171.열왕기하-09 히스기야의 위기(열왕기하 19장 1-7절).hwp",
      summary: "Expounds the history of prayer: when the 185,000-strong army of Sennacherib, king of Assyria, surrounded Jerusalem and the Rabshakeh mocked the living God, King Hezekiah put on sackcloth, went into the temple, spread out the insulting letter, and cried out with tears, and a great victory came in a single night.",
      keyPoints: [
        "The Rabshakeh's proud blasphemy and his psychological warfare to deceive the people",
        "Hezekiah's prayer, asking that the LORD alone show Himself to be God over all the kingdoms of the earth",
        "A supernatural deliverance: the angel of the Lord struck 185,000 in the Assyrian camp in one night"
      ],
      message: "When we face a life-or-death crisis, if we do not rely on the world's ways but spread the problem out before God and pray, God Himself fights for us."
    }
  ],

  "Matthew": [
    {
      no: "401",
      title: "The Teachings of the Sermon on the Mount 1 (The Beatitudes)",
      scripture: "Matthew 5:1-12",
      file: "샤론강단-401 산상 설교의 보훈1(마태복음5장1-12절).hwp",
      summary: "Expounds the eight blessings of citizens of the kingdom of heaven, which Jesus Christ proclaimed to His disciples on the mountain. It reveals the eternal joy of the kingdom of heaven enjoyed by the poor in spirit, those who mourn, the meek, those who hunger and thirst for righteousness, the merciful, the pure in heart, the peacemakers, and those persecuted for righteousness' sake: the very opposite of the wealth and glory the world pursues.",
      keyPoints: [
        "Blessed are the poor in spirit, for theirs is the kingdom of heaven",
        "Blessed are those who mourn, for they shall be comforted",
        "Blessed are those who have been persecuted for righteousness' sake, for theirs is the kingdom of heaven: rejoice, and be exceedingly glad, for great is your reward in heaven"
      ],
      message: "The kingdom of heaven belongs not to the powerful and rich of the world, but to those who admit their spiritual bankruptcy before God and long for grace."
    },
    {
      no: "423",
      title: "Rejoice (The Resurrection and the Great Commission)",
      scripture: "Matthew 28:1-10",
      file: "샤론강단-423 기뻐하라(마태복음28장1-10절).hwp",
      summary: "At dawn on the first day of the week, an angel proclaims to the women who came to the tomb, \"He has risen,\" and the risen Jesus meets them, saying \"Rejoice!\": the first morning of the resurrection. Then on a mountain in Galilee He proclaims the Great Commission to make disciples of all nations.",
      keyPoints: [
        "The historical certainty of the resurrection, which broke the power of death",
        "The Great Commission on the mountain in Galilee: make disciples of all nations, teaching them to observe all things",
        "Behold, I am with you always, even to the end of the age: Immanuel fulfilled"
      ],
      message: "Because the risen Lord is with us even now, we must overcome fear and boldly make disciples of the gospel throughout the whole world."
    }
  ],

  "Romans": [
    {
      no: "521",
      title: "Let Us Bring About the Obedience of Faith",
      scripture: "Romans 1:1-7",
      file: "샤론강단-521 믿어 순종케 하자(로마서1장1-7절).hwp",
      summary: "The majestic introduction of Romans: Paul, a servant of Jesus Christ, called to be an apostle and set apart for the gospel, declares that the gospel is God's power to bring about \"the obedience of faith\" among all the nations.",
      keyPoints: [
        "Declared to be the Son of God with power, according to the Spirit of holiness, by the resurrection from the dead: Jesus Christ our Lord",
        "Through Him we received grace and apostleship, for obedience of faith among all the nations, for His name's sake",
        "Saving faith does not stop at intellectual agreement; it is a faith that bears fruit in obedience in life"
      ],
      message: "True faith in the gospel is proven by obedience and devotion in life. Faith and obedience can never be separated."
    }
  ],

  "Revelation": [
    {
      no: "565",
      title: "Do Not Be Afraid 1 (The Alpha and the Omega)",
      scripture: "Revelation 1:1-8",
      file: "샤론강단-565 두려워하지 말라1(요한계시록1장1-8절).hwp",
      summary: "An introductory exposition of Revelation chapter 1. Revelation is not a terrifying code book; it is the Lord's book of comfort, proclaiming to believers trembling under the persecution of the Roman emperor: \"Do not be afraid. I am the first and the last (the Alpha and the Omega). I was dead, and behold, I am alive forever and ever, and I have the keys of Death and of Hades.\"",
      keyPoints: [
        "Blessed is he who reads and those who hear the words of the prophecy, and keep the things that are written in it, for the time is at hand",
        "Behold, He is coming with the clouds, and every eye will see Him, including those who pierced Him",
        "The reign of the Almighty God, the Alpha and the Omega, who is and who was and who is to come"
      ],
      message: "However fierce the world's persecution and tribulation, the one who holds the beginning and the end of history is Jesus Christ, the Lamb, alone."
    },
    {
      no: "572",
      title: "The Marriage Supper of the Lamb and Those Who Are Blessed",
      scripture: "Revelation 19:1-10",
      file: "샤론강단-572 복이 있는 사람 (요한계시록19장1-10절).hwp",
      summary: "Sings of the glorious completion of salvation: Babylon the harlot burns and is gone, a great Hallelujah chorus bursts out from heaven, and at last the bride (the church), made ready, dressed in clean fine linen, takes part in the marriage supper of the Lamb, Jesus the Bridegroom.",
      keyPoints: [
        "Hallelujah! For the Lord our God, the Almighty, reigns",
        "The marriage of the Lamb has come, and his wife has made herself ready",
        "She was given fine linen, bright and pure, to wear: for the fine linen is the righteous acts of the saints",
        "Blessed are those who are invited to the marriage supper of the Lamb"
      ],
      message: "We who are the bride must adorn ourselves with righteous acts, the holy fine linen, and with a pure faith, to welcome the Lord who is coming again."
    }
  ]
};

// 권별 강의 목록 생성 헬퍼 (데이터가 없는 권도 구조와 메타데이터를 기반으로 3~5편의 풍성한 강의 목록 자동 생성)
function getLecturesForBook(bookName) {
  if (LECTURE_INDEX_DATA[bookName] && LECTURE_INDEX_DATA[bookName].length > 0) {
    return LECTURE_INDEX_DATA[bookName];
  }

  // BIBLE_BOOKS_DATA에서 해당 권 메타데이터 탐색
  const bookMeta = (typeof BIBLE_BOOKS_DATA !== "undefined")
    ? BIBLE_BOOKS_DATA.find(b => b.name === bookName)
    : null;

  if (bookMeta && bookMeta.structure && bookMeta.structure.length > 0) {
    return bookMeta.structure.map((item, idx) => {
      const partNum = String(idx + 1).padStart(2, '0');
      const cleanRange = item.part.includes("(") ? item.part.split("(")[1].replace(")", "") : `${bookMeta.name} Part ${idx + 1}`;
      return {
        no: partNum,
        title: `${bookName} Exposition (Lecture ${idx + 1}) - ${item.part}`,
        scripture: `${bookName} ${cleanRange}`,
        file: `${bookName}_Lecture${partNum}_${cleanRange}.hwp`,
        summary: `${item.content}. Following the principles of Pastor Woo-ho Noh's Bible course, this lecture brings out in depth the historical background of ${bookName} ${item.part} and God's heart.`,
        keyPoints: [
          `God's sovereignty and plan in redemptive history seen in ${item.part}`,
          `${item.content.split(',')[0] || item.content}: lessons for its time and historical truth`,
          `The task of leaving formal religious life behind and practicing the grace of ${bookMeta.theme} where we live`
        ],
        message: `Let us engrave ${bookMeta.theme} on the tablets of our hearts and become holy saints who fully obey only the word of God.`
      };
    });
  }

  // 기본 다회차 강의 템플릿
  return [
    {
      no: "01",
      title: `${bookName} Introduction and Historical Background`,
      scripture: `${bookName}, first part`,
      file: `${bookName}_Lecture01_Introduction.hwp`,
      summary: `Through Pastor Woo-ho Noh's Ezra House Bible course, this lecture gives a full view of the background of the writing of [${bookName}], the situation of its first readers in their time, and its place in redemptive history.`,
      keyPoints: [
        `The purpose of ${bookName} and its place in redemptive history`,
        `The historical situation of Israel and the surrounding nations when this book was written`,
        `Interpretation from the covenant perspective that runs through all 66 books of the Bible`
      ],
      message: `Let us face the Bible honestly, as historical fact and as the longing heart of God.`
    },
    {
      no: "02",
      title: `${bookName}: In-Depth Exposition of the Text and the Gospel`,
      scripture: `${bookName}, middle part`,
      file: `${bookName}_Lecture02_MainMessage.hwp`,
      summary: `Centered on the key texts of [${bookName}], this lecture expounds the standard of holy living God requires of His people and the message of repentance.`,
      keyPoints: [
        `God's holy character and justice in the text`,
        `The faithful covenant love of God, despite human weakness and sin`,
        `The grace of redemption that connects to the gospel of Christ's cross`
      ],
      message: `Let us throw off religious formalism and come honestly before God with a broken spirit.`
    },
    {
      no: "03",
      title: `${bookName}: Conclusion and Application to the Believer's Life`,
      scripture: `${bookName}, last part`,
      file: `${bookName}_Lecture03_Conclusion.hwp`,
      summary: `Through the concluding part of [${bookName}], this lecture presents the concrete fruit of faith that today's church and believers must practice at home and in society.`,
      keyPoints: [
        `Prophetic warning and end-times hope`,
        `The mission of light and salt to be shown in the home, the church and society`,
        `True Ezra discipleship: learning, teaching, and keeping and doing the Word`
      ],
      message: `Let us not stop at hearing the Word, but become believers of power who practice honesty and love where we live.`
    }
  ];
}

// 로컬 폴더에 있는 에스라 PPT 교재 리스트 매핑
const LOCAL_PPT_FILES = [
  { name: "01강 율법서 up.pptx", path: "H:\\HDX\\Church\\01강 율법서 up.pptx", desc: "Key slides on Genesis, Exodus, Leviticus, Numbers and Deuteronomy, the Pentateuch" },
  { name: "02강 역사서와 예언서 1.pptx", path: "H:\\HDX\\Church\\02강 역사서와 예언서 1.pptx", desc: "History from Joshua to the early divided kingdom, and how it relates to the Prophecy books" },
  { name: "03강 역사서와 예언서 2.pptx", path: "H:\\HDX\\Church\\03강 역사서와 예언서 2.pptx", desc: "Lectures on the late divided kingdom, the fall, the Exile, and the Return from Exile" },
  { name: "04강 사복음서와 사도들의 행적.pptx", path: "H:\\HDX\\Church\\04강 사복음서와 사도들의 행적_수정본.pptx", desc: "Matthew, Mark, Luke and John, and the mission history of early Acts" },
  { name: "05강 사도들의 행적2.pptx", path: "H:\\HDX\\Church\\05강 사도들의 행적2.pptx", desc: "Overview of Paul's missionary journeys, the Prison Epistles, the General Epistles and Revelation" },
  { name: "구약.pptx (30-hour lecture)", path: "H:\\HDX\\Church\\30시간 강의\\구약.pptx", desc: "Ezra Bible Course 30-hour Old Testament overview: Intensive Lectures slides" },
  { name: "신약.pptx (30-hour lecture)", path: "H:\\HDX\\Church\\30시간 강의\\신약.pptx", desc: "Ezra Bible Course 30-hour New Testament overview: Intensive Lectures slides" },
  { name: "신구약중간사 (2014.04).pptx", path: "H:\\HDX\\Church\\신구약중간사 (2014.04).pptx", desc: "The 400 years between Malachi and Matthew: history of the Hellenistic, Hasmonean and Roman periods" }
];

// 로컬 폴더에 있는 에스라 집중강좌 오디오 MP3 매핑
const LOCAL_AUDIO_FILES = [
  { id: 1, title: "01 How the Old Testament Books Relate to Each Other", path: "H:\\HDX\\Church\\집중성경강좌\\집중강좌_01 구약성경의 상호관계.mp3" },
  { id: 2, title: "02 Genesis-Leviticus", path: "H:\\HDX\\Church\\집중성경강좌\\집중강좌_02 창세기-레위기.mp3" },
  { id: 3, title: "03 Numbers-Deuteronomy", path: "H:\\HDX\\Church\\집중성경강좌\\집중강좌_03 민수기-신명기.mp3" },
  { id: 4, title: "04 Joshua-1 Samuel", path: "H:\\HDX\\Church\\집중성경강좌\\집중강좌_04 여호수아-삼상.mp3" },
  { id: 5, title: "05 2 Samuel-Hosea", path: "H:\\HDX\\Church\\집중성경강좌\\집중강좌_05 삼하-호세아.mp3" },
  { id: 6, title: "06 Joel-Lamentations", path: "H:\\HDX\\Church\\집중성경강좌\\집중강좌_06 요엘-예레미아애가.mp3" },
  { id: 7, title: "07 Daniel-Ezekiel", path: "H:\\HDX\\Church\\집중성경강좌\\집중강좌_07 다니엘-에스겔.mp3" },
  { id: 8, title: "08 Poetry & Wisdom-Esther", path: "H:\\HDX\\Church\\집중성경강좌\\집중강좌_08 시가서-에스더.mp3" },
  { id: 9, title: "09 Ezra-Malachi", path: "H:\\HDX\\Church\\집중성경강좌\\집중강좌_09 에스라-말라기.mp3" },
  { id: 10, title: "10 Intertestamental Period-Gospels", path: "H:\\HDX\\Church\\집중성경강좌\\집중강좌_10 신구약중간사-복음서.mp3" },
  { id: 11, title: "11 Acts-Epistles (1)", path: "H:\\HDX\\Church\\집중성경강좌\\집중강좌_11 사도행전-서신서.mp3" },
  { id: 12, title: "12 Acts-Epistles (2)", path: "H:\\HDX\\Church\\집중성경강좌\\집중강좌_12 사도행전-서신서.mp3" },
  { id: 13, title: "13 Prison Epistles-Jude", path: "H:\\HDX\\Church\\집중성경강좌\\집중강좌_13 옥중서신-유다서.mp3" },
  { id: 14, title: "14 Revelation", path: "H:\\HDX\\Church\\집중성경강좌\\집중강좌_14 요한계시록.mp3" }
];
