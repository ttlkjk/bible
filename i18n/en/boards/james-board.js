// James whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does.
window.BOARD = {
  scenes: [
    {
      id: "bg", title: "Background",
      beats: [
        { say: "Okay, let's start with the background of James. Who wrote it? James, the brother of Jesus.",
          draw: [["title", "t", "James: background"],
                 ["write", "a1", [120, 290], "Author:", { size: 56, color: "gray" }],
                 ["write", "a2", { after: "a1", gap: 24 }, "James, brother of Jesus", { size: 56 }]] },
        { say: "Now, there's a common misunderstanding about James. People think it's only about works.",
          draw: [["write", "a3", [120, 420], "only works?", { color: "gray" }],
                 ["strike", "a3"]] },
        { say: "But here's the thing. James isn't really talking about works. He's talking about faith. A faith that has works.",
          draw: [["write", "a4", { after: "a3", gap: 110 }, "faith with works", { color: "red" }],
                 ["arrow", "a3", "a4"],
                 ["circle", "a4"]] },
        { say: "Faith and works aren't opposites. They go together, side by side, like parallel lines.",
          draw: [["write", "a5", [120, 590], "faith", { color: "blue" }],
                 ["write", "a6", [120, 700], "works", { color: "blue" }],
                 ["line", [300, 570], [1000, 570], "blue"],
                 ["line", [300, 680], [1000, 680], "blue"],
                 ["write", "a7", [1040, 650], "go together", { size: 56 }]] },
        { say: "In other words, what a person does is the evidence that he has faith.",
          draw: [["write", "a8", [120, 820], "works = evidence of faith", { color: "red" }],
                 ["under", "a8"]] }
      ]
    },
    {
      id: "faith1", title: "Faith in James 1",
      beats: [
        { say: "So what kind of faith is James talking about? First, a faith that overcomes trials and testing. When our faith is real, real trials come.",
          draw: [["clear"],
                 ["title", "t", "Faith in James"],
                 ["write", "b1", [120, 290], "① faith that overcomes trials", { color: "blue" }],
                 ["write", "b2", [160, 380], "true faith → true trials", { size: 56, color: "red" }]] },
        { say: "Satan's no fool, you know. He doesn't bother with people who'll go to hell anyway. But when you're struggling to live by faith? He won't leave you alone.",
          draw: [["write", "b3", { after: "b2", gap: 60 }, "Satan is no fool", { size: 48, color: "gray" }]] },
        { say: "God tests us too. A test is to prove us. A trial is to refine us. And we have to go through all of it.",
          draw: [["write", "b4", [160, 470], "test = proving · trial = refining", { size: 52 }]] },
        { say: "Second, a faith that has works. And those works are love. Faith without love? That's nothing but self-hypnosis.",
          draw: [["write", "b5", [120, 600], "② works = love in action", { color: "blue" }],
                 ["write", "b6", { after: "b5", gap: 50 }, "else self-hypnosis", { size: 52, color: "gray" }]] },
        { say: "Third, a faith that bears fruit through patience. The closer we get to the day the Lord comes, the stronger the trials get. So right now is when we need patience the most.",
          draw: [["write", "b7", [120, 740], "③ faith bearing fruit by patience", { color: "blue" }],
                 ["write", "b8", [160, 830], "more so as the Lord's day nears", { size: 48, color: "gray" }]] }
      ]
    },
    {
      id: "faith2", title: "Faith in James 2",
      beats: [
        { say: "Fourth, a faith full of good fruit. Love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, and self-control.",
          draw: [["clear"],
                 ["title", "t", "Faith in James"],
                 ["write", "c1", [120, 290], "④ faith full of good fruit", { color: "blue" }],
                 ["write", "c2", [90, 380], "love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control", { size: 44, color: "green" }]] },
        { say: "When these fruits of the Spirit show up in what we do, that's when we can say we have faith.",
          draw: [["under", "c2", "green"]] },
        { say: "Fifth, a faith without partiality and without hypocrisy. Our faith mustn't lean to the left or to the right.",
          draw: [["write", "c3", [120, 500], "⑤ faith w/o partiality or hypocrisy", { color: "blue" }]] },
        { say: "Sixth, a faith that isn't friends with the world. Friendship with the world is enmity with God. We live in the world, yes. But we mustn't become its friends.",
          draw: [["write", "c4", [120, 620], "⑥ not friends with the world", { color: "blue" }],
                 ["write", "c4b", { after: "c4", gap: 40 }, "Jas 4:4~5", { size: 44, color: "gray" }],
                 ["write", "c5", [160, 700], "live in the world, but not its friend", { size: 50, color: "red" }]] },
        { say: "Seventh, a faith with love and mercy. For judgment is without mercy to him who has shown no mercy. Mercy triumphs over judgment.",
          draw: [["write", "c6", [120, 820], "⑦ faith with love & mercy", { color: "blue" }],
                 ["write", "c6b", { after: "c6", gap: 40 }, "Jas 2:13", { size: 44, color: "gray" }],
                 ["box", "c6", "red"]] }
      ]
    },
    {
      id: "fhl", title: "Faith, Hope, Love",
      beats: [
        { say: "Now, we're right at the doorstep of the last book, Revelation. So before we go in, let's sum up what we need to hold on to. Faith, hope, and love.",
          draw: [["clear"],
                 ["title", "t", "Before Rev: faith, hope, love"]] },
        { say: "James? That's true faith, a faith that has works.",
          draw: [["write", "d1", [120, 340], "James", { size: 72 }],
                 ["write", "d2", [560, 340], "true faith with works", { color: "blue" }],
                 ["arrow", "d1", "d2"]] },
        { say: "Peter? True hope, resting on God's promise.",
          draw: [["write", "d3", [120, 520], "Peter", { size: 72 }],
                 ["write", "d4", [560, 520], "true hope on the promise", { color: "green" }],
                 ["arrow", "d3", "d4"]] },
        { say: "And John? True love, in the truth.",
          draw: [["write", "d5", [120, 700], "John", { size: 72 }],
                 ["write", "d6", [560, 700], "true love in the truth", { color: "red" }],
                 ["arrow", "d5", "d6"]] }
      ]
    }
  ]
};
