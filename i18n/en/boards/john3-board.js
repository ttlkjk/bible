// 3 John whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does.
window.BOARD = {
  scenes: [
    {
      id: "overview", title: "3 John Overview",
      beats: [
        { say: "The first message of 3 John is this: let's walk in the truth.",
          draw: [["title", "t", "3 John"],
                 ["photo", "p1", "img/p4/image90.jpg", [1100, 200, 400, 225], { tilt: 2, caption: "3 John" }],
                 ["write", "a1", [120, 300], "1. Walk in the truth", { color: "blue" }]] },
        { say: "Second, let's welcome strangers, that is, evangelists, and send them on their way. It means we should welcome and look after the traveling evangelists and preachers.",
          draw: [["write", "a2", [120, 420], "2. Welcome · send off strangers", { color: "blue" }],
                 ["write", "a3", [180, 510], "care for traveling evangelists · preachers", { size: 48, color: "gray" }]] },
        { say: "That is working together for the truth.",
          draw: [["write", "a4", [180, 610], "= fellow workers for the truth", { size: 56, color: "green" }],
                 ["under", "a4", "green"]] },
        { say: "But a fellow named Diotrephes not only refused to show this kind of hospitality, he stopped others from doing it too. So John says, you, I'm going to come and have a look at you!",
          draw: [["write", "a5", [120, 750], "Diotrephes", { size: 72, color: "red" }],
                 ["cross", [470, 725], "red"],
                 ["write", "a6", { after: "a5", gap: 200 }, "\"I'll come and see!\"", { size: 52 }]] }
      ]
    },
    {
      id: "gaius", title: "To Gaius",
      beats: [
        { say: "Third, let's not imitate what is evil, but imitate what is good. Whoever does evil has not seen God.",
          draw: [["clear"],
                 ["title", "t", "3 John (cont.)"],
                 ["write", "b1", [120, 290], "3. Imitate good, not evil", { color: "blue" }],
                 ["write", "b2", [180, 380], "evildoers have not seen God", { size: 48, color: "gray" }]] },
        { say: "Fourth, let's work together and take part for the truth.",
          draw: [["write", "b3", [120, 500], "4. Work · share together for truth", { color: "blue" }]] },
        { say: "The letter is addressed to Gaius, a disciple John had raised.",
          draw: [["write", "b4", [120, 630], "To: Gaius", { size: 60 }],
                 ["write", "b5", { after: "b4", gap: 30 }, "(John's disciple)", { size: 46, color: "gray" }]] },
        { say: "He probably wrote more than thirty letters like this. There were many churches then, not well-known churches, but places like house churches.",
          draw: [["write", "b6", [120, 750], "30+ letters like this?", { size: 56 }],
                 ["write", "b7", { after: "b6", gap: 40 }, "house churches", { size: 48, color: "gray" }]] },
        { say: "The apostle John cared for even people like these, writing letters to them. We should follow his example.",
          draw: [["write", "b8", [1000, 750], "Follow John", { size: 60, color: "green" }],
                 ["circle", "b8", "green"]] }
      ]
    }
  ]
};
