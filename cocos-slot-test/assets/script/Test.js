var Roller = require("slot.Roller");
var AudioManager = require("AudioManager");
cc.Class({
  extends: cc.Component,
  properties: {
    audioManager: {
      type: AudioManager,
      default: null
    },
    rewardNum: {
      type: cc.EditBox,
      default: null
    }
  },

  // use this for initialization
  onLoad: function() {},

  spin: function() {
    var rollers = this.node.getComponentsInChildren(Roller);

    rollers.forEach(function(roller, index, array) {
      roller.toggleSpin();
    });
    this.audioManager.playSpinning();
  },

  w_spin: function() {
    var rollers = this.node.getComponentsInChildren(Roller);
    var delay = 1000;
    var num_string = this.rewardNum.string;
    var res = num_string.split("");
    console.log("res = " + res.length);
    console.log("res 0  = " + res[0]);
    console.log("res 0  = " + res[1]);
    console.log("res 0  = " + res[2]);
    console.log("res 0  = " + res[3]);
    console.log("res 0  = " + res[4]);
    // var num = parseInt(num_string);
    // console.log("num = " + num);

    setTimeout(
      function() {
        rollers[0].toggleSpin(parseInt(res[4]));
        this.audioManager.playMetal();
      }.bind(this),
      delay + 2000
    );

    setTimeout(
      function() {
        rollers[1].toggleSpin(parseInt(res[3]));
        this.audioManager.playMetal();
      }.bind(this),
      delay + 3000
    );

    setTimeout(
      function() {
        rollers[2].toggleSpin(parseInt(res[2]));
        this.audioManager.playMetal();
      }.bind(this),
      delay + 4000
    );

    setTimeout(
      function() {
        rollers[3].toggleSpin(parseInt(res[1]));
        this.audioManager.playMetal();
      }.bind(this),
      delay + 4500
    );

    setTimeout(
      function() {
        rollers[4].toggleSpin(parseInt(res[0]));
        this.audioManager.playMetal();
        this.audioManager.playWinSound();
        this.audioManager.pauseSpinning();
      }.bind(this),
      delay + 6500
    );

    // for (var i = 0; i < this.rollers + 1; i++) {
    //     setTimeout(function () {
    //         rollers[i].toggleSpin();
    //     }.bind(this), delay+2000);
    // }

    // rollers.forEach(function(roller, index, array){
    //     // this.schedule(function() {
    //     //     // 这里的 this 指向 component
    //     //     roller.toggleSpin();
    //     // }, delay+200);
    //      setTimeout(function () {
    //         roller.toggleSpin();
    //     }.bind(this), delay+2000);
    // });
  }
  // called every frame, uncomment this function to activate update callback
  // update: function (dt) {

  // },
});
