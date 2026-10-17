// 2 Kings 15 whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does.
window.BOARD = {
  scenes: [
    {
      id: "azariah", title: "Azariah, King of Judah",
      beats: [
        { say: "Let's go to 2 Kings chapter 15. The two kingdoms, south and north, take turns in the story.",
          draw: [["title", "t", "2 Kings 15"],
                 ["photo", "p1", "../../pansuh/img/p2/image14.jpg", [1110, 40, 400, 225], { tilt: 3 }]] },
        { say: "First, Azariah, king of Judah. The verdict in verse 3 is that he did what was right.",
          draw: [["write", "a1", [120, 340], "Azariah of Judah", { color: "blue" }],
                 ["write", "a2", { after: "a1", gap: 60 }, "did right", { color: "green" }]] },
        { say: "But he did not take away the high places.",
          draw: [["write", "a3", [180, 460], "but high places not removed", { size: 64, color: "red" }],
                 ["under", "a3"]] },
        { say: "In the end God struck him, and he became a leper. He lived in a separate house until the day he died.",
          draw: [["write", "a4", [120, 600], "God struck him"],
                 ["write", "a5", { after: "a4", gap: 110 }, "leprosy · separate house", { size: 64, color: "red" }],
                 ["arrow", "a4", "a5"]] },
        { say: "So his son Jotham ruled in his place.",
          draw: [["write", "a6", [120, 740], "son Jotham rules instead", { size: 56, color: "gray" }]] }
      ]
    },
    {
      id: "north", title: "Revolt After Revolt",
      beats: [
        { say: "Now the northern kingdom of Israel. Verse 8, Zechariah, king of Israel. The verdict: he did evil. The sins of Jeroboam. Then Shallum conspired against him and became king.",
          draw: [["clear"],
                 ["title", "t", "North Israel: revolt after revolt"],
                 ["write", "b1", [100, 300], "Zechariah"],
                 ["write", "b2", { after: "b1", gap: 110 }, "Shallum", { color: "red" }],
                 ["arrow", "b1", "b2"]] },
        { say: "Shallum reigned for one month. Menahem conspired, killed him, and became king.",
          draw: [["write", "b2b", { below: "b2", gap: 70 }, "1 month", { size: 46, color: "gray" }],
                 ["write", "b3", { after: "b2", gap: 110 }, "Menahem", { color: "red" }],
                 ["arrow", "b2", "b3"]] },
        { say: "Menahem died, and his son Pekahiah became king. But Pekah, the son of an officer, conspired against him and became king.",
          draw: [["write", "b4", { after: "b3", gap: 110 }, "Pekahiah"],
                 ["arrow", "b3", "b4"],
                 ["write", "b5", [100, 520], "Pekah", { color: "red" }],
                 ["arrow", "b4", "b5"]] },
        { say: "Then Hoshea the son of Elah conspired and became king. He was the last king of northern Israel. He has the same name as the last prophet.",
          draw: [["write", "b6", { after: "b5", gap: 110 }, "Hoshea", { color: "red" }],
                 ["arrow", "b5", "b6"],
                 ["box", "b6"],
                 ["write", "b6b", { after: "b6", gap: 50 }, "last king of the north", { size: 50, color: "gray" }]] },
        { say: "Every king gets the same verdict. The sins of Jeroboam.",
          draw: [["write", "b7", { at: [800, 720] }, "always: sins of Jeroboam", { anchor: "middle", size: 72, color: "red" }],
                 ["under", "b7"]] }
      ]
    },
    {
      id: "menahem", title: "Menahem and Assyria",
      beats: [
        { say: "Verse 17, Menahem. Once he became king, he went and took revenge on the towns that had not joined his revolt. He ripped open the women who were with child.",
          draw: [["clear"],
                 ["title", "t", "Menahem and Assyria"],
                 ["write", "c1", [120, 300], "Menahem", { color: "blue" }],
                 ["write", "c2", { after: "c1", gap: 50 }, "revenge on towns that refused him", { size: 50, color: "red" }]] },
        { say: "Because of his evil, Pul the king of Assyria invaded. So again he handed over a thousand talents of silver.",
          draw: [["write", "c3", [120, 430], "Pul of Assyria"],
                 ["write", "c4", { after: "c3", gap: 110 }, "1000 talents silver", { size: 64, color: "red" }],
                 ["arrow", "c3", "c4"]] },
        { say: "I guess there was no gold left to strip from the temple. So he extorted the rich, taking fifty shekels of silver from each.",
          draw: [["write", "c5", [180, 540], "extorted 50 shekels from each rich man", { size: 52, color: "gray" }]] },
        { say: "In the time of Pekah, Tiglath-Pileser king of Assyria came, took much of the land, and carried the people away captive.",
          draw: [["write", "c6", [120, 680], "Tiglath-Pileser", { size: 64 }],
                 ["write", "c7", { after: "c6", gap: 110 }, "land taken · captives", { size: 64, color: "red" }],
                 ["arrow", "c6", "c7"]] },
        { say: "He moved them to Assyria. It was a resettlement policy.",
          draw: [["write", "c8", [880, 800], "resettlement", { size: 64, color: "blue" }],
                 ["box", "c8", "blue"]] }
      ]
    },
    {
      id: "jotham", title: "Jotham and Ahaz",
      beats: [
        { say: "Verse 32, Jotham king of Judah. In the second year of Pekah, he became king at the age of twenty-five.",
          draw: [["clear"],
                 ["title", "t", "Jotham and Ahaz of Judah"],
                 ["write", "d1", [120, 300], "Jotham (25)", { color: "blue" }],
                 ["write", "d2", { after: "d1", gap: 60 }, "right · high places stay", { size: 56 }]] },
        { say: "He built the upper gate of the house of the LORD. At this time Rezin king of Aram and Pekah king of Israel attacked Judah.",
          draw: [["write", "d3", [180, 410], "built temple's upper gate", { size: 52, color: "gray" }],
                 ["write", "d4", { after: "d3", gap: 50 }, "Rezin + Pekah attack", { size: 52, color: "red" }]] },
        { say: "Jotham died, and his son Ahaz became king. Chapter 16. He became king at twenty.",
          draw: [["write", "d5", [120, 560], "Ahaz (20)", { color: "blue" }]] },
        { say: "The verdict: he did not do what was right. He followed the kings of Israel and did the abominations of the nations. He made his own son pass through the fire. He burned him to death.",
          draw: [["write", "d6", { after: "d5", gap: 60 }, "son through the fire", { color: "red" }],
                 ["circle", "d6"]] },
        { say: "He also sacrificed on the high places and under the trees. At this time Rezin and Pekah besieged Jerusalem, but they could not overcome Ahaz.",
          draw: [["write", "d7", [180, 690], "sacrifices: high places · under trees", { size: 52, color: "gray" }],
                 ["write", "d8", [180, 800], "Jerusalem besieged → not taken", { size: 52 }]] }
      ]
    },
    {
      id: "ahaz", title: "Ahaz Loses His Mind",
      beats: [
        { say: "From verse 7, Ahaz's madness begins. He sends a letter to Tiglath-Pileser king of Assyria. I am your servant and your son. Save me.",
          draw: [["clear"],
                 ["title", "t", "Ahaz loses his mind"],
                 ["write", "e1", [120, 300], "\"I am your servant and son\"", { size: 68, color: "red" }],
                 ["write", "e1b", { after: "e1", gap: 40 }, "→ Assyria", { size: 52, color: "gray" }]] },
        { say: "And the easy target is always the temple treasury, right? He cleans it out and sends it all.",
          draw: [["write", "e2", [120, 420], "temple treasury emptied"],
                 ["under", "e2"]] },
        { say: "Isaiah, Hosea, every one of the prophets said the same thing: do not lean on the great powers. But he just would not listen.",
          draw: [["write", "e3", [120, 550], "prophets: don't lean on powers", { size: 64, color: "blue" }],
                 ["write", "e3b", { after: "e3", gap: 40 }, "won't listen", { size: 52, color: "red" }]] },
        { say: "Anyway, the king of Assyria came up, attacked Damascus, the capital of Aram, and killed Rezin for him.",
          draw: [["write", "e4", [120, 690], "Assyria"],
                 ["write", "e5", { after: "e4", gap: 110 }, "Damascus · Rezin killed"],
                 ["arrow", "e4", "e5"]] }
      ]
    },
    {
      id: "altar", title: "Copying an Altar",
      beats: [
        { say: "Verse 10. Ahaz went to meet Tiglath-Pileser and saw an altar. He must have liked it, because he drew its pattern and measurements and sent them to Urijah the priest. Have it built before I get back.",
          draw: [["clear"],
                 ["title", "t", "Copying an altar"],
                 ["write", "f1", [100, 290], "sends drawing of pagan altar", { size: 54 }],
                 ["write", "f2", { below: "f1", gap: 90 }, "priest Urijah: does as told", { size: 50, color: "gray" }]] },
        { say: "When he got back, he offered sacrifices on that altar, even though he was not a priest. He even moved the temple's own altar out of the way.",
          draw: [["write", "f3", [100, 510], "king offers sacrifice", { size: 58, color: "red" }],
                 ["write", "f3b", { below: "f3", gap: 70 }, "not even a priest!", { size: 48, color: "gray" }]] },
        { say: "Offer all the sacrifices on this great altar. The bronze altar I will use only to inquire of the Lord. And the priest obeyed this nonsense too.",
          draw: [["write", "f4", [100, 720], "bronze altar \"only to inquire\"", { size: 52 }],
                 ["strike", "f4"]] },
        { say: "Out of fear of the king of Assyria, he moved the temple porch. The part in the red circle is the porch, something like the front entrance.",
          draw: [["photo", "p2", "../../pansuh/img/p2/image15.jpg", [960, 200, 560, 315], { tilt: -2, caption: "Red circle = the porch (entrance)" }]] },
        { say: "He moved it to please the king of Assyria. If only he had cared that much about pleasing God.",
          draw: [["write", "f5", { at: [1240, 680] }, "pleasing Assyria", { anchor: "middle", size: 60, color: "red" }],
                 ["write", "f6", { at: [1240, 790] }, "pleasing God?", { anchor: "middle", size: 60, color: "blue" }]] },
        { say: "Ahaz died, and his son Hezekiah became king. The prophets active in the time of Ahaz and Hezekiah were Micah, Isaiah, and Nahum. The prophets would have had a lot to say, wouldn't they?",
          draw: [["clear"],
                 ["title", "t", "The prophets had a lot to say"],
                 ["write", "g1", [120, 320], "Ahaz → Hezekiah"],
                 ["write", "g2", { at: [800, 520] }, "Micah · Isaiah · Nahum", { anchor: "middle", size: 84, color: "blue" }],
                 ["box", "g2", "blue"]] }
      ]
    }
  ]
};
