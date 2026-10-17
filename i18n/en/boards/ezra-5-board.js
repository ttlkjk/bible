// Ezra 5~6 whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does.
window.BOARD = {
  scenes: [
    {
      id: "restart", title: "Temple Work Resumes",
      beats: [
        { say: "The prophets Haggai and Zechariah, the grandson of Iddo, prophesied to the Jews. That's the book of Haggai and the book of Zechariah we just studied.",
          draw: [["title", "t", "Temple work resumes"],
                 ["write", "a1", [120, 290], "Haggai · Zechariah prophesy", { size: 64, color: "blue" }]] },
        { say: "Then Zerubbabel and Jeshua rose up and began to build the house of God, and the prophets were with them, helping them.",
          draw: [["write", "a2", [120, 410], "Zerubbabel · Jeshua rise", { size: 60 }],
                 ["write", "a3", { after: "a2", gap: 110 }, "prophets help", { size: 60, color: "green" }],
                 ["arrow", "a2", "a3"]] },
        { say: "People have to be willing to do it. Then the prophets can help, and God can help too.",
          draw: [["write", "a4", [120, 540], "We must be willing → God helps", { size: 60, color: "red" }],
                 ["under", "a4"]] },
        { say: "Once the building started again, Tattenai the governor beyond the River, Shethar-bozenai, and their companions came picking a quarrel again.",
          draw: [["write", "a5", [120, 680], "Tattenai · Shethar-bozenai object", { size: 60 }],
                 ["cross", [1300, 660], "red"]] },
        { say: "So this time they suggested to King Darius that he search for the decree of Cyrus.",
          draw: [["write", "a6", [160, 800], "\"Search for Cyrus's decree\"", { size: 56, color: "blue" }]] }
      ]
    },
    {
      id: "permit", title: "The Permit Is Found",
      beats: [
        { say: "King Darius had the archives in Babylon searched, and a scroll turned up in the palace at Ecbatana, in the province of Media.",
          draw: [["clear"],
                 ["title", "t", "The permit is found"],
                 ["write", "b1", [120, 290], "scroll at Ecbatana palace", { size: 64 }]] },
        { say: "Darius was a friend of Zerubbabel. When the petition came in, he looked into it, and what turned up was an official permit to build the temple!",
          draw: [["write", "b2", [120, 410], "= official temple permit", { size: 64, color: "red" }],
                 ["box", "b2"]] },
        { say: "Good. They filed complaints and made a fuss to stop it, but now that the permit has turned up, they'd better keep quiet.",
          draw: [["write", "b3", [160, 510], "complainers → now keep quiet", { size: 50, color: "gray" }]] },
        { say: "So the king gave a strict order. Help build the temple right away. Anyone who gets in the way will be put to death, and his house will be made a dunghill.",
          draw: [["write", "b4", [120, 630], "King's order:", { size: 60 }],
                 ["write", "b5", { after: "b4", gap: 30 }, "Help! Hinder → house a dunghill", { size: 56, color: "red" }]] },
        { say: "The people who had tried to block it got a real scare and helped quickly, so everything went smoothly. The temple was finished on the third day of the month Adar, in the sixth year of King Darius.",
          draw: [["write", "b6", [120, 750], "smooth sailing", { size: 60, color: "green" }],
                 ["write", "b7", { after: "b6", gap: 100 }, "done: Darius yr 6, Adar 3", { size: 56 }],
                 ["arrow", "b6", "b7"]] },
        { say: "It was finished in 516 B.C., exactly seventy years after the temple was destroyed.",
          draw: [["write", "b8", [400, 850], "516 B.C. · exactly 70 years", { size: 56, color: "red" }],
                 ["under", "b8"]] }
      ]
    },
    {
      id: "restored", title: "The Restoration of Israel",
      beats: [
        { say: "The children of Israel joyfully held the dedication of the house of God.",
          draw: [["clear"],
                 ["title", "t", "Israel restored"],
                 ["write", "c1", [120, 290], "① temple dedication", { size: 64 }]] },
        { say: "They set the priests in their divisions again, that is, their duty rotations, to serve in the temple. And they kept the Passover on the fourteenth day of the first month.",
          draw: [["write", "c2", [120, 400], "② priests' divisions (rotations) restored", { size: 60 }],
                 ["write", "c3", [120, 510], "③ Passover kept", { size: 60 }]] },
        { say: "And they separated themselves from all the filthiness of the nations of the land.",
          draw: [["write", "c4", [120, 620], "④ put away the nations' filth", { size: 60, color: "red" }],
                 ["under", "c4"]] },
        { say: "That's the end of part one of Ezra. In between comes the time of Esther, and chapters 7 to 10 tell of the second return, led by Ezra.",
          draw: [["write", "c5", [120, 740], "Ezra part 1 ends", { size: 48, color: "blue" }],
                 ["write", "c6", { after: "c5", gap: 80 }, "Esther's time", { size: 48, color: "red" }],
                 ["write", "c7", { after: "c6", gap: 80 }, "ch. 7~10 2nd return", { size: 48, color: "blue" }],
                 ["arrow", "c5", "c6"],
                 ["arrow", "c6", "c7"]] },
        { say: "Now, at this time in Persia, the Jews were nearly wiped out. Let's go live to our correspondent Esther, reporting from Persia.",
          draw: [["write", "c8", { at: [800, 850] }, "→ Over to Esther in Persia!", { anchor: "middle", size: 56, color: "green" }]] }
      ]
    }
  ]
};
