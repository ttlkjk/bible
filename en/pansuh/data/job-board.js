// Job whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does.
window.BOARD = {
  scenes: [
    {
      id: "intro", title: "Overview of Job",
      beats: [
        { say: "Okay, the book of Job. Its theme? The suffering of the righteous.",
          draw: [["title", "t", "Overview of Job"],
                 ["write", "a1", [120, 300], "the righteous suffer", { size: 80, color: "red" }],
                 ["circle", "a1"],
                 ["photo", "p1", "../../pansuh/img/p3/image18.jpg", [1100, 190, 420, 236], { tilt: 2 }]] },
        { say: "Job lived back in Abraham's time. But the book itself was probably written during the Babylonian Exile. We don't know who wrote it.",
          draw: [["write", "a2", [120, 430], "time: age of Abraham", { size: 56 }],
                 ["write", "a3", [120, 520], "written: Babylonian Exile · author unknown", { size: 52 }]] },
        { say: "Even after they'd been carried off into exile, for a while the Israelites still thought, the Babylonians are wicked, they deserve to die, and we're the righteous ones.",
          draw: [["write", "a4", [120, 640], "\"Babylon is wicked, we're righteous\"", { size: 56, color: "gray" }]] },
        { say: "And in that situation, they started wrestling with questions. Do the righteous really have to suffer like this? Is God even alive? And someone left us this writing. It's written like the script of a play.",
          draw: [["write", "a5", [120, 770], "why do the righteous suffer?", { size: 56, color: "blue" }],
                 ["write", "a6", { after: "a5", gap: 100 }, "a play script", { size: 56, color: "red" }],
                 ["arrow", "a5", "a6"],
                 ["box", "a6"]] }
      ]
    },
    {
      id: "scene1", title: "The Opening Scene",
      beats: [
        { say: "The curtain goes up, and the stage is God's royal council. Action! And out strolls Satan.",
          draw: [["clear"],
                 ["title", "t", "Job's opening scene"],
                 ["write", "b1", [120, 290], "stage: God's royal council"],
                 ["write", "b2", [180, 380], "Action! → Satan strolls in", { size: 48, color: "gray" }]] },
        { say: "God asks him, where have you come from? And he says, from going to and fro in the earth. Nobody invites him anywhere, but he sure has plenty of places to go.",
          draw: [["write", "b3", [120, 500], "no invitations, but lots of places to go", { size: 52 }]] },
        { say: "God quietly shows off Job. There is none like him in the earth, a perfect and an upright man, one that feareth God, and escheweth evil.",
          draw: [["write", "b4", [120, 620], "God boasts of Job", { color: "blue" }]] },
        { say: "And Satan says, oh, come on, that's only because you bless him. Take it all away, and he'll turn on you. So, what do you say, want to make a bet?",
          draw: [["write", "b5", { after: "b4", gap: 50 }, "\"Take it all, he'll turn\"", { size: 52, color: "gray" }],
                 ["write", "b6", [120, 760], "\"Want to bet?\"", { size: 80, color: "red" }],
                 ["circle", "b6"]] },
        { say: "The two elders made a bet, and only Job got hurt, right? Still, Job came through this test.",
          draw: [["write", "b7", { after: "b6", gap: 80 }, "only Job suffers → yet wins", { size: 52, color: "green" }]] }
      ]
    },
    {
      id: "skin", title: "The Second Test",
      beats: [
        { say: "When God brags about him again, Satan says, this time, strike his body. And God says, don't touch his life.",
          draw: [["clear"],
                 ["title", "t", "The second test"],
                 ["write", "c1", [120, 290], "Satan: strike his body"],
                 ["write", "c2", { after: "c1", gap: 70 }, "spare his life", { color: "blue" }]] },
        { say: "This skin disease is so dreadful the skin almost melts away. Even when he scrapes himself with a potsherd till he bleeds, it just keeps itching.",
          draw: [["write", "c3", [120, 420], "skin disease: scraping with a potsherd, still itching", { size: 48, color: "red" }]] },
        { say: "In the end his skin is all gone, so even the servants walking past don't recognize their own master.",
          draw: [["write", "c4", [180, 515], "servants don't know him", { size: 48, color: "gray" }]] },
        { say: "His friends and Elihu came to see him, and once they saw him, no one could say a word for a whole week. They came to comfort him, but one look at Job, oh my, and they were speechless.",
          draw: [["write", "c5", [120, 650], "friends visit: silent for a week"],
                 ["write", "c6", [180, 760], "\"Oh my....\"", { size: 60, color: "gray" }]] }
      ]
    },
    {
      id: "eliphaz", title: "Eliphaz Speaks",
      beats: [
        { say: "In chapter 3, Job opens his mouth and curses the day he was born. And from then on, his friends grab onto every word he says. Comfort? Not a chance.",
          draw: [["clear"],
                 ["title", "t", "Eliphaz speaks"],
                 ["write", "d1", [120, 290], "Job curses his birthday", { size: 56 }],
                 ["write", "d2", { after: "d1", gap: 100 }, "nitpicking", { size: 56, color: "red" }],
                 ["arrow", "d1", "d2"]] },
        { say: "Eliphaz the Temanite was old enough to be Job's father. He's the oldest, so he speaks first.",
          draw: [["write", "d3", [120, 410], "Eliphaz", { size: 72, color: "blue" }],
                 ["write", "d4", { after: "d3", gap: 40 }, "father's age, speaks first", { size: 48, color: "gray" }]] },
        { say: "Look here, man. Back when things were going well, you gave everyone counsel and advice. Now it's happening to you, and you can't handle it.",
          draw: [["write", "d5", [120, 540], "\"You used to counsel others...\"", { size: 56 }]] },
        { say: "Think about it. Who ever perished, being innocent? Have you ever seen the righteous cut off?",
          draw: [["write", "d6", [120, 660], "\"Who ever perished, being innocent?\"", { size: 60, color: "red" }],
                 ["under", "d6"]] },
        { say: "So what's Eliphaz's point? You must have some sin, and that's why this happened to you. You need to repent.",
          draw: [["write", "d7", [120, 790], "point: sin → misfortune", { size: 60, color: "blue" }],
                 ["box", "d7"]] }
      ]
    },
    {
      id: "judge", title: "Judging by Results",
      beats: [
        { say: "We laugh at Eliphaz, but most of us make the same mistake. When someone runs into trouble, we think, he must've been up to something behind our backs. There's got to be some sin.",
          draw: [["clear"],
                 ["title", "t", "Judging by results"],
                 ["write", "e1", [120, 290], "\"Up to something on the sly\"", { color: "gray" }]] },
        { say: "Chapter 4 verse 8. They that plow iniquity, and sow wickedness, reap the same. He means Job plowed evil, and now he's reaping the poison.",
          draw: [["write", "e2", [120, 410], "plow iniquity, sow wickedness → reap the same", { size: 50 }]] },
        { say: "He can't point to a single cause. He just looks at the result, jumps to the conclusion that there must be some sin behind it, and condemns him.",
          draw: [["write", "e3", [120, 540], "result", { size: 72 }],
                 ["write", "e4", { after: "e3", gap: 100 }, "\"must be sin\"", { size: 72, color: "red" }],
                 ["arrow", "e3", "e4"],
                 ["write", "e5", { after: "e4", gap: 40 }, "= jumping to it", { size: 52, color: "gray" }]] },
        { say: "And then it's like, whoever hides his sin won't prosper, so hurry up and confess.",
          draw: [["write", "e6", [120, 660], "\"Confess, quick!\"", { size: 60 }]] },
        { say: "Chapter 5 verse 27. Lo this, we have searched it, so it is; hear it, and know thou it. Got it? He's treating Job like a sinner, through and through.",
          draw: [["write", "e7", [120, 780], "\"Lo this, we have searched it... got it?\"", { size: 52, color: "blue" }]] }
      ]
    },
    {
      id: "jobsays", title: "Job Answers",
      beats: [
        { say: "In chapter 6, Job answers. If my grief and my calamity were weighed in the balances, they'd be heavier than the sand of the sea.",
          draw: [["clear"],
                 ["title", "t", "Job answers"],
                 ["write", "f1", [120, 300], "heavier than the sand of the sea", { size: 60, color: "blue" }]] },
        { say: "Honestly, I'm not the kind of person you say I am. I've never committed a sin that deserves something like this.",
          draw: [["write", "f2", [120, 430], "\"I never sinned like that\"", { color: "red" }]] },
        { say: "Chapter 6 verse 24. Cause me to understand wherein I have erred. Go write down what sin I committed, and bring it to me.",
          draw: [["write", "f3", [120, 560], "\"Write down my sin, bring it\"", { size: 60 }]] },
        { say: "If there is a sin like that, find it and write it down for me. Then I'll carry it on my head and dance.",
          draw: [["write", "f4", [120, 690], "→ I'll put it on my head and dance", { size: 56, color: "green" }]] }
      ]
    },
    {
      id: "bildad", title: "Bildad Speaks",
      beats: [
        { say: "In chapter 8, Bildad the Shuhite speaks. How long wilt thou speak these things? How long shall the words of thy mouth be like a strong wind?",
          draw: [["clear"],
                 ["title", "t", "Bildad speaks"],
                 ["write", "g1", [120, 290], "Bildad: \"your words, a strong wind\""]] },
        { say: "Doth God pervert judgment? He declares that this punishment is the result of God's judgment, and that's that. Case closed.",
          draw: [["write", "g2", [120, 410], "\"Doth God pervert judgment?\"", { size: 60 }],
                 ["write", "g3", [120, 520], "suffering = verdict", { size: 60, color: "gray" }],
                 ["strike", "g3", "gray"]] },
        { say: "But here's the thing. This isn't the result. It's not the conclusion. It's a process. A process.",
          draw: [["write", "g4", { after: "g3", gap: 80 }, "process, not end", { size: 72, color: "red" }],
                 ["circle", "g4"]] },
        { say: "When we go through hard times in life, we need to think about this too. Do we see it as the conclusion, or as one step in a process?",
          draw: [["write", "g5", [120, 680], "my trouble: the end? or a process?", { size: 56, color: "blue" }]] }
      ]
    },
    {
      id: "children", title: "Even the Children",
      beats: [
        { say: "In chapter 8 verse 4, Bildad says your children must have sinned against the Lord. Remember, all ten of Job's children had died in a single day.",
          draw: [["clear"],
                 ["title", "t", "Dragging in the children"],
                 ["write", "h1", [120, 290], "\"Thy children have sinned\"", { color: "red" }]] },
        { say: "You're paying now for raising your kids badly. Just hearing about my own faults is upsetting enough. Imagine how it feels when they drag my children into it too!",
          draw: [["write", "h2", [180, 390], "their death alone is grief enough...", { size: 48, color: "gray" }]] },
        { say: "And then he tells him to pray. Though thy beginning was small, yet thy latter end should greatly increase. Aha, so that's where that saying comes from. This is nonsense.",
          draw: [["write", "h3", [120, 520], "\"Though thy beginning was small...\"", { size: 56 }],
                 ["write", "h4", { after: "h3", gap: 40 }, "← Bildad!", { size: 52, color: "red" }]] },
        { say: "He also tells him to go ask the people of old, to go do some studying. Can the rush grow without water? So are the paths of all that forget God.",
          draw: [["write", "h5", [120, 650], "\"Ask the elders, go study\"", { size: 56 }],
                 ["write", "h6", [180, 745], "can the rush grow without water?", { size: 44, color: "gray" }]] },
        { say: "In the end he's just bullying him. You forgot God and didn't pray, so your hope is gone. None of it helps Job one bit.",
          draw: [["write", "h7", [120, 830], "bullying = no help", { size: 56, color: "blue" }]] }
      ]
    },
    {
      id: "pray", title: "Job Clings to God",
      beats: [
        { say: "His friends don't comfort him, they just condemn him, so Job gives up on talking to them. He ignores them completely, and clings to God alone.",
          draw: [["clear"],
                 ["title", "t", "Job clings to God alone"],
                 ["write", "i1", [120, 290], "friends"],
                 ["strike", "i1"],
                 ["write", "i2", { after: "i1", gap: 110 }, "prays to God", { color: "blue" }],
                 ["arrow", "i1", "i2"]] },
        { say: "Chapter 9 verse 25. My days are swifter than a post. They pass by like swift ships, like an eagle swooping down on its prey.",
          draw: [["write", "i3", [120, 420], "\"My days are swifter than a post\"", { size: 60 }]] },
        { say: "If you're going to condemn me, don't make me toil for nothing. Just let me die quickly. Why won't you either kill me or let me go? Why torment me like this?",
          draw: [["write", "i4", [120, 550], "\"Just let me die quickly\"", { color: "red" }]] },
        { say: "In chapter 10 he says this. Shew me wherefore thou contendest with me. Oh, if I'm going to be beaten, at least tell me why!",
          draw: [["write", "i5", [120, 690], "\"At least tell me why!\"", { size: 68, color: "blue" }],
                 ["under", "i5"]] }
      ]
    },
    {
      id: "zophar", title: "Zophar Speaks",
      beats: [
        { say: "In chapter 11, Zophar the Naamathite speaks. First of all, you talk too much. Talking too much is sin enough. I wasn't going to say anything, but now I have to.",
          draw: [["clear"],
                 ["title", "t", "Zophar speaks"],
                 ["write", "j1", [120, 290], "Zophar: \"You talk too much\""]] },
        { say: "Chapter 11 verse 6. God exacteth of thee less than thine iniquity deserveth. If it were done properly, you'd be beaten a lot harder than this. Doesn't that just drive you crazy?",
          draw: [["write", "j2", [120, 410], "\"less than thine iniquity\"", { color: "red" }],
                 ["write", "j3", { after: "j2", gap: 40 }, "you deserve worse", { size: 48, color: "gray" }]] },
        { say: "In chapter 12, Job answers. No doubt but ye are the people, and wisdom shall die with you. You call that talking?",
          draw: [["write", "j4", [120, 540], "Job: \"wisdom shall die with you\"", { size: 60, color: "blue" }]] },
        { say: "The truth is, these friends had always been jealous of Job. He was famous as the greatest man of the East, and a righteous man. Just as we thought. Who does he think he is? He's no different.",
          draw: [["write", "j5", [120, 660], "real motive = jealousy", { size: 60 }],
                 ["write", "j6", { after: "j5", gap: 40 }, "\"He's no better!\"", { size: 48, color: "gray" }]] },
        { say: "As the dialogue goes on, Job's speeches get longer and stronger, and his voice rises. The three friends, though, run out of things to say.",
          draw: [["write", "j7", [120, 790], "Job ↑   3 friends running dry ↓", { size: 60, color: "red" }]] }
      ]
    },
    {
      id: "elihu", title: "Elihu Steps In",
      beats: [
        { say: "Chapter 32. Because Job was righteous in his own eyes, the three men stopped answering. And then the youngest, Elihu, burns with anger.",
          draw: [["clear"],
                 ["title", "t", "Elihu steps in"],
                 ["write", "k1", [120, 290], "anger of young Elihu", { color: "blue" }]] },
        { say: "He says Job's wrong because he calls himself more righteous than God, and the friends are wrong because they condemn him without having an answer. Both sides are wrong. So who's right? He is, he says.",
          draw: [["write", "k2", [120, 410], "Job ✗  friends ✗", { size: 60 }],
                 ["write", "k3", { after: "k2", gap: 110 }, "only I'm right", { color: "red" }],
                 ["arrow", "k2", "k3"]] },
        { say: "Being old doesn't make you wise, he says, and he brushes off all the elders. And don't say only God can beat Job. I'm still here.",
          draw: [["write", "k4", [120, 540], "\"I'm still here\"", { size: 72, color: "red" }],
                 ["circle", "k4"]] },
        { say: "My belly is as wine which hath no vent; it is ready to burst like new bottles. In other words, he has to speak, or he'll burst.",
          draw: [["write", "k5", [120, 670], "like wine with no vent", { size: 56 }],
                 ["write", "k6", { after: "k5", gap: 40 }, "about to burst", { size: 48, color: "gray" }]] },
        { say: "What good does your righteousness do God? But he's young, he's got nothing more to give, and it all just fizzles out. Later, when God rebukes them, Elihu isn't even on the list.",
          draw: [["write", "k7", [120, 800], "fizzles → not even on God's list", { size: 56, color: "blue" }]] }
      ]
    },
    {
      id: "lesson", title: "About Suffering",
      beats: [
        { say: "So here's the conclusion. Some of what happens to people comes from sin. But sometimes, it doesn't.",
          draw: [["clear"],
                 ["title", "t", "Conclusion on suffering"],
                 ["write", "l1", [120, 300], "suffering from sin", { size: 60 }],
                 ["write", "l2", { after: "l1", gap: 60 }, "but not always", { size: 64, color: "red" }],
                 ["under", "l2"]] },
        { say: "In fact, trouble can come precisely because a person is righteous. The devil grabs onto that righteousness and won't let go.",
          draw: [["write", "l3", [120, 430], "righteous → devil won't let go", { size: 60, color: "blue" }]] },
        { say: "So when you go through hard times like that, keep your mouth shut and don't make a fuss, if only to spite the devil.",
          draw: [["write", "l4", [120, 560], "shut your mouth, spite the devil", { size: 60, color: "green" }],
                 ["box", "l4", "green"]] },
        { say: "These men were the greatest scholars of their day. And even they made mistakes like this with their words. So we need to be very careful with ours.",
          draw: [["write", "l5", [120, 700], "top scholars still misspoke", { size: 56 }],
                 ["write", "l6", { after: "l5", gap: 100 }, "mind your words!", { size: 64, color: "red" }],
                 ["arrow", "l5", "l6"]] }
      ]
    },
    {
      id: "god", title: "God in the Storm",
      beats: [
        { say: "In chapter 38, the LORD answers Job out of the whirlwind. Who is this that darkeneth counsel by words without knowledge?",
          draw: [["clear"],
                 ["title", "t", "God in the storm"],
                 ["write", "m1", [120, 300], "\"darkeneth counsel by words without knowledge\"", { size: 52, color: "red" }]] },
        { say: "Even so, by God's grading, Job does the best. But even Job, in God's eyes, only got as far as darkening counsel by words without knowledge. And the friends' words? Below standard.",
          draw: [["write", "m2", [120, 420], "Job did best = still words without knowledge", { size: 50 }]] },
        { say: "Gird up now thy loins like a man and answer me, God says, and he goes on about the glory of creation. He brags so much about just one crocodile! Throw stones at it, and it treats them like chaff.",
          draw: [["write", "m3", [120, 540], "glory of creation: even the crocodile", { size: 56, color: "blue" }]] },
        { say: "Put on some goggles, go into the water, and look. The fish are like bullets. They shoot past like arrows.",
          draw: [["write", "m4", [180, 630], "fish fly like bullets", { size: 48, color: "gray" }]] },
        { say: "Job says, I will lay mine hand upon my mouth, and he repents in dust and ashes.",
          draw: [["write", "m5", [120, 770], "hand on mouth → repents in dust and ashes", { size: 52, color: "green" }],
                 ["under", "m5", "green"]] }
      ]
    },
    {
      id: "end", title: "A Process, Not the End",
      beats: [
        { say: "Job's words were the most right. And yet Job got the most rebuke.",
          draw: [["clear"],
                 ["title", "t", "A process, not the end"],
                 ["write", "n1", [120, 290], "Job: most right, most rebuked", { size: 60 }]] },
        { say: "To the friends, God says, bring offerings, and if Job prays for you, I'll forgive you. Elihu isn't even mentioned by name.",
          draw: [["write", "n2", [120, 400], "friends: forgiven if Job prays", { size: 56 }],
                 ["write", "n3", { after: "n2", gap: 50 }, "Elihu: not named", { size: 48, color: "gray" }]] },
        { say: "After that, God blessed Job with twice as much as before. His children weren't doubled, though. He got back the same number as before. Ten.",
          draw: [["write", "n4", [120, 530], "blessing ×2", { size: 72, color: "green" }],
                 ["write", "n5", { after: "n4", gap: 60 }, "children: same number, 10", { size: 56 }]] },
        { say: "After this he lived another hundred and forty years, and saw his sons and his sons' sons, four generations. What he went through earlier wasn't the conclusion. It was a process. Not the conclusion.",
          draw: [["write", "n6", [120, 660], "140 more yrs · 4 generations", { size: 56 }],
                 ["write", "n7", { after: "n6", gap: 80 }, "a process!", { size: 80, color: "red" }],
                 ["circle", "n7"]] },
        { say: "Next, we go on to the Psalms. Psalm 1.",
          draw: [["write", "n8", [120, 800], "next: Psalms", { size: 56, color: "blue" }]] }
      ]
    }
  ]
};
