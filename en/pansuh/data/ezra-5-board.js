// Ezra 5~6 whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does.
window.BOARD = {
  scenes: [
    {
      id: "restart", title: "Temple Work Resumes",
      beats: [
        { say: "So, the prophets Haggai and Zechariah, Iddo's grandson, prophesied to the Jews. Yes, that's the same Haggai and Zechariah we just studied.",
          draw: [["title", "t", "Temple work resumes"],
                 ["write", "a1", [120, 290], "Haggai · Zechariah prophesy", { size: 64, color: "blue" }]] },
        { say: "And then Zerubbabel and Jeshua got up and started building the house of God again. And the prophets were right there with them, helping.",
          draw: [["write", "a2", [120, 410], "Zerubbabel · Jeshua rise", { size: 60 }],
                 ["write", "a3", { after: "a2", gap: 110 }, "prophets help", { size: 60, color: "green" }],
                 ["arrow", "a2", "a3"]] },
        { say: "Here's the thing. People have to be willing first. Then the prophets can help, and God helps too.",
          draw: [["write", "a4", [120, 540], "We must be willing → God helps", { size: 60, color: "red" }],
                 ["under", "a4"]] },
        { say: "Now, as soon as the building starts again, guess who shows up? Tattenai, the governor beyond the River, Shethar-bozenai, and their friends, picking a fight all over again.",
          draw: [["write", "a5", [120, 680], "Tattenai · Shethar-bozenai object", { size: 60 }],
                 ["cross", [1300, 660], "red"]] },
        { say: "So this time, they suggest to King Darius, why don't you look for the decree of Cyrus?",
          draw: [["write", "a6", [160, 800], "\"Search for Cyrus's decree\"", { size: 56, color: "blue" }]] }
      ]
    },
    {
      id: "permit", title: "The Permit Is Found",
      beats: [
        { say: "So King Darius has the archives in Babylon searched. And a scroll turns up in the palace at Ecbatana, over in the province of Media.",
          draw: [["clear"],
                 ["title", "t", "The permit is found"],
                 ["write", "b1", [120, 290], "scroll at Ecbatana palace", { size: 64 }]] },
        { say: "Now, Darius was a friend of Zerubbabel's. When the petition came in, he checked it out, and what did they find? An official permit to build the temple!",
          draw: [["write", "b2", [120, 410], "= official temple permit", { size: 64, color: "red" }],
                 ["box", "b2"]] },
        { say: "Good. They complained and made a big fuss to stop it. But now that the permit has turned up? They'd better keep quiet.",
          draw: [["write", "b3", [160, 510], "complainers → now keep quiet", { size: 50, color: "gray" }]] },
        { say: "So the king gives a strict order. Help build the temple, right now. Anyone who gets in the way will be put to death, and his house will be made a dunghill.",
          draw: [["write", "b4", [120, 630], "King's order:", { size: 60 }],
                 ["write", "b5", { after: "b4", gap: 30 }, "Help! Hinder → house a dunghill", { size: 56, color: "red" }]] },
        { say: "Well, the people who'd tried to block it got a real scare. They helped fast, and everything went smoothly. The temple was finished on the third day of the month Adar, in the sixth year of King Darius.",
          draw: [["write", "b6", [120, 750], "smooth sailing", { size: 60, color: "green" }],
                 ["write", "b7", { after: "b6", gap: 100 }, "done: Darius yr 6, Adar 3", { size: 56 }],
                 ["arrow", "b6", "b7"]] },
        { say: "That's 516 B.C. Exactly seventy years after the temple was destroyed. Think about that.",
          draw: [["write", "b8", [400, 850], "516 B.C. · exactly 70 years", { size: 56, color: "red" }],
                 ["under", "b8"]] }
      ]
    },
    {
      id: "restored", title: "The Restoration of Israel",
      beats: [
        { say: "And the children of Israel held the dedication of the house of God with great joy.",
          draw: [["clear"],
                 ["title", "t", "Israel restored"],
                 ["write", "c1", [120, 290], "① temple dedication", { size: 64 }]] },
        { say: "They set the priests in their divisions again, their duty rotations, so they could serve in the temple. And they kept the Passover on the fourteenth day of the first month.",
          draw: [["write", "c2", [120, 400], "② priests' divisions (rotations) restored", { size: 60 }],
                 ["write", "c3", [120, 510], "③ Passover kept", { size: 60 }]] },
        { say: "And they separated themselves from all the filthiness of the nations of the land.",
          draw: [["write", "c4", [120, 620], "④ put away the nations' filth", { size: 60, color: "red" }],
                 ["under", "c4"]] },
        { say: "And that's the end of part one of Ezra. In between comes the time of Esther. Then chapters 7 to 10 tell about the second return, the one Ezra led.",
          draw: [["write", "c5", [120, 740], "Ezra part 1 ends", { size: 48, color: "blue" }],
                 ["write", "c6", { after: "c5", gap: 80 }, "Esther's time", { size: 48, color: "red" }],
                 ["write", "c7", { after: "c6", gap: 80 }, "ch. 7~10 2nd return", { size: 48, color: "blue" }],
                 ["arrow", "c5", "c6"],
                 ["arrow", "c6", "c7"]] },
        { say: "Now, around this time in Persia, the Jews almost got wiped out. Let's go live to our correspondent Esther, reporting from Persia.",
          draw: [["write", "c8", { at: [800, 850] }, "→ Over to Esther in Persia!", { anchor: "middle", size: 56, color: "green" }]] }
      ]
    }
  ]
};
