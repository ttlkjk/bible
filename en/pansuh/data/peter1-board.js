// 1 Peter whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does.
window.BOARD = {
  scenes: [
    {
      id: "bg", title: "Background of the Letter",
      beats: [
        { say: "So, here's the background of 1 Peter. Peter didn't actually write it down himself. It says he wrote it by Silvanus. And we can see Mark was traveling with him too, as his helper.",
          draw: [["title", "t", "1 Peter: background"],
                 ["photo", "p1", "../../pansuh/img/p4/image84.jpg", [1120, 200, 400, 225], { tilt: -2.5 }],
                 ["write", "a1", [120, 290], "written by Silvanus", { size: 56 }],
                 ["write", "a2", [120, 390], "attendant: Mark", { size: 56, color: "gray" }]] },
        { say: "Peter could feel it. Persecution of Christians was getting closer and closer. And he wrote this letter believing one thing: only a firm hope can get you through persecution.",
          draw: [["write", "a3", [120, 530], "persecution coming", { color: "red" }],
                 ["write", "a4", { after: "a3", gap: 110 }, "firm hope", { color: "blue" }],
                 ["arrow", "a3", "a4"],
                 ["box", "a4", "blue"]] },
        { say: "The sufferings of this present time are not worthy to be compared with the glory which shall be revealed in us. That's Romans chapter 8, verse 18.",
          draw: [["write", "a5", [120, 650], "present sufferings < glory to come", { size: 56 }],
                 ["write", "a5b", { after: "a5", gap: 40 }, "Rom 8:18", { size: 44, color: "gray" }]] },
        { say: "Think about it. If there's nothing ahead, why put up with suffering? You can only bear the pain of this life if you've got hope that something's waiting beyond death. So in the end, hope is strong faith.",
          draw: [["write", "a6", [120, 790], "hope = strong faith", { size: 76, color: "red" }],
                 ["under", "a6"]] }
      ]
    },
    {
      id: "hope1", title: "True Hope According to Peter 1",
      beats: [
        { say: "So what's true hope, according to Peter? First, it's a hope built on God's promise. Not some vague wish. It's a hope that's guaranteed to come true, and God himself guarantees it.",
          draw: [["clear"],
                 ["title", "t", "True hope according to Peter"],
                 ["write", "b1", [120, 290], "① based on God's promise", { color: "blue" }],
                 ["write", "b1b", { after: "b1", gap: 50 }, "vague wish ✕", { size: 50, color: "gray" }]] },
        { say: "Second, it's a hope that's incorruptible, undefiled, and doesn't fade away. Everything in this world is going to decay. So if you put your hope in those things, then when they decay, you decay right along with them.",
          draw: [["write", "b2", [120, 420], "② incorruptible hope", { color: "blue" }],
                 ["write", "b2b", { after: "b2", gap: 50 }, "all worldly things decay", { size: 50, color: "gray" }]] },
        { say: "Third, it's a hope as firm as an anchor of the soul. When you've got a hope like that, it's like an anchor for your soul. You don't get shaken.",
          draw: [["write", "b3", [120, 550], "③ anchor of the soul", { color: "blue" }],
                 ["write", "b3b", { after: "b3", gap: 50 }, "not shaken · Heb 6:19", { size: 50, color: "gray" }]] },
        { say: "Fourth, it's a hope that reaches past death. People who don't know Christianity think death is the end. But it isn't. Death is the beginning of eternal life.",
          draw: [["write", "b4", [120, 680], "④ beyond death", { color: "blue" }],
                 ["write", "b5", { after: "b4", gap: 60 }, "death = end", { size: 56, color: "gray" }],
                 ["strike", "b5"],
                 ["write", "b6", { after: "b5", gap: 110 }, "start of eternal life", { size: 56, color: "green" }],
                 ["arrow", "b5", "b6"]] },
        { say: "When we die, we'll be cut off from this world. So let's not love the things of this world too much, okay?",
          draw: [["write", "b7", [160, 800], "don't love this world's things too much", { size: 52, color: "red" }]] }
      ]
    },
    {
      id: "hope2", title: "True Hope According to Peter 2",
      beats: [
        { say: "Fifth, it's a hope that helps us get through tribulation and persecution. Here's the thing. Without being sure about the life to come, nobody can be a martyr.",
          draw: [["clear"],
                 ["title", "t", "True hope according to Peter"],
                 ["write", "c1", [120, 290], "⑤ hope that endures persecution", { color: "blue" }]] },
        { say: "The faith we need right now is a faith that's ready for martyrdom. And the preparations for persecution? They're already done.",
          draw: [["write", "c2", [160, 390], "faith ready for martyrdom", { size: 60, color: "red" }],
                 ["under", "c2"]] },
        { say: "Sixth, it's a hope that makes us holy. Everyone who has this hope has to purify himself. Why? Because the world we're about to step into is a holy world.",
          draw: [["write", "c3", [120, 520], "⑥ hope that makes holy", { color: "blue" }],
                 ["write", "c3b", { after: "c3", gap: 50 }, "we're headed to a holy world", { size: 50, color: "gray" }]] },
        { say: "Seventh, it's a hope we can explain to people. Honestly, I've never once met anyone who asked me the reason for my hope. Maybe I didn't look like someone with hope? Still, you never know when someone's going to ask. So we need to be well prepared.",
          draw: [["write", "c4", [120, 650], "⑦ hope we can explain", { color: "blue" }]] },
        { say: "Now, to put it bluntly, this isn't about getting ready so you won't be embarrassed. Don't stop at just having hope. Know the reason for it clearly, too. In other words, have true knowledge. Alright, now we move on to 2 Peter.",
          draw: [["write", "c5", [160, 780], "know the reason = true knowledge", { color: "red" }],
                 ["box", "c5"]] }
      ]
    }
  ]
};
