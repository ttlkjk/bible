// 1 Peter whiteboard script. The spoken lines (say) are the lecture notes smoothed for reading aloud; the content is unchanged.
// Board size 1600 x 900. See the top of assets/board.js for what each op does.
window.BOARD = {
  scenes: [
    {
      id: "bg", title: "Background of the Letter",
      beats: [
        { say: "This is the background of 1 Peter. Peter did not write it down himself. It says he wrote it by Silvanus. We can also see that Mark traveled with him as his attendant.",
          draw: [["title", "t", "1 Peter: background"],
                 ["photo", "p1", "img/p4/image84.jpg", [1120, 200, 400, 225], { tilt: -2.5 }],
                 ["write", "a1", [120, 290], "written by Silvanus", { size: 56 }],
                 ["write", "a2", [120, 390], "attendant: Mark", { size: 56, color: "gray" }]] },
        { say: "Peter sensed that persecution of Christians was drawing closer and closer. He wrote this letter believing that only a firm hope can overcome persecution.",
          draw: [["write", "a3", [120, 530], "persecution coming", { color: "red" }],
                 ["write", "a4", { after: "a3", gap: 110 }, "firm hope", { color: "blue" }],
                 ["arrow", "a3", "a4"],
                 ["box", "a4", "blue"]] },
        { say: "The sufferings of this present time are not worthy to be compared with the glory which shall be revealed in us. That's Romans chapter 8, verse 18.",
          draw: [["write", "a5", [120, 650], "present sufferings < glory to come", { size: 56 }],
                 ["write", "a5b", { after: "a5", gap: 40 }, "Rom 8:18", { size: 44, color: "gray" }]] },
        { say: "If there is nothing ahead, there is no reason to endure suffering. You can bear the pain of this life only if you have hope that something lies beyond death. So hope, in the end, is strong faith.",
          draw: [["write", "a6", [120, 790], "hope = strong faith", { size: 76, color: "red" }],
                 ["under", "a6"]] }
      ]
    },
    {
      id: "hope1", title: "True Hope According to Peter 1",
      beats: [
        { say: "True hope according to Peter. First, it is a hope based on God's promise. Not some vague wish, but a hope that is guaranteed to come true, a hope that God himself guarantees.",
          draw: [["clear"],
                 ["title", "t", "True hope according to Peter"],
                 ["write", "b1", [120, 290], "① based on God's promise", { color: "blue" }],
                 ["write", "b1b", { after: "b1", gap: 50 }, "vague wish ✕", { size: 50, color: "gray" }]] },
        { say: "Second, a hope that is incorruptible, undefiled, and that does not fade away. Everything in this world will decay. If you put your hope in those things, then when they decay, you decay with them.",
          draw: [["write", "b2", [120, 420], "② incorruptible hope", { color: "blue" }],
                 ["write", "b2b", { after: "b2", gap: 50 }, "all worldly things decay", { size: 50, color: "gray" }]] },
        { say: "Third, a hope as firm as an anchor of the soul. With a hope like that, it is like an anchor for your soul, and you are not shaken.",
          draw: [["write", "b3", [120, 550], "③ anchor of the soul", { color: "blue" }],
                 ["write", "b3b", { after: "b3", gap: 50 }, "not shaken · Heb 6:19", { size: 50, color: "gray" }]] },
        { say: "Fourth, a hope that reaches beyond death. People who don't know Christianity think death is the end. But death is not the end. It is the beginning of eternal life.",
          draw: [["write", "b4", [120, 680], "④ beyond death", { color: "blue" }],
                 ["write", "b5", { after: "b4", gap: 60 }, "death = end", { size: 56, color: "gray" }],
                 ["strike", "b5"],
                 ["write", "b6", { after: "b5", gap: 110 }, "start of eternal life", { size: 56, color: "green" }],
                 ["arrow", "b5", "b6"]] },
        { say: "Through death we will be cut off from this world. So let's not love the things of this world too much.",
          draw: [["write", "b7", [160, 800], "don't love this world's things too much", { size: 52, color: "red" }]] }
      ]
    },
    {
      id: "hope2", title: "True Hope According to Peter 2",
      beats: [
        { say: "Fifth, a hope that lets us overcome and endure tribulation and persecution. Without certainty about the life to come, no one can be a martyr.",
          draw: [["clear"],
                 ["title", "t", "True hope according to Peter"],
                 ["write", "c1", [120, 290], "⑤ hope that endures persecution", { color: "blue" }]] },
        { say: "The faith we need now is a faith ready for martyrdom. The preparations for persecution are already complete.",
          draw: [["write", "c2", [160, 390], "faith ready for martyrdom", { size: 60, color: "red" }],
                 ["under", "c2"]] },
        { say: "Sixth, a hope that makes us holy. Everyone who has this hope must purify himself. Because the world we are about to enter is a holy world.",
          draw: [["write", "c3", [120, 520], "⑥ hope that makes holy", { color: "blue" }],
                 ["write", "c3b", { after: "c3", gap: 50 }, "we're headed to a holy world", { size: 50, color: "gray" }]] },
        { say: "Seventh, a hope we can explain to people. I have never yet met anyone who asked me the reason for my hope. Maybe it's because I didn't look like a person with hope? Still, we never know when someone will ask, so we must be well prepared.",
          draw: [["write", "c4", [120, 650], "⑦ hope we can explain", { color: "blue" }]] },
        { say: "This isn't about getting ready so you won't be embarrassed, to put it bluntly. Don't stop at having hope. Know clearly the reason for it, too. In other words, have true knowledge. Now we move on to 2 Peter.",
          draw: [["write", "c5", [160, 780], "know the reason = true knowledge", { color: "red" }],
                 ["box", "c5"]] }
      ]
    }
  ]
};
