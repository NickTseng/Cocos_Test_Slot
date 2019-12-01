var Roller = require('slot.Roller');
cc.Class({
    extends: cc.Component,
    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function () {
    },

    spin: function(){
        var rollers = this.node.getComponentsInChildren(Roller);

        rollers.forEach(function(roller, index, array){
            roller.toggleSpin();
        })
    },

    w_spin: function(){
        var rollers = this.node.getComponentsInChildren(Roller);
        var delay = 1000;

        setTimeout(function () {
            rollers[0].toggleSpin();
        }.bind(this), delay+2000);

        setTimeout(function () {
            rollers[1].toggleSpin();
        }.bind(this), delay+4000);

        setTimeout(function () {
            rollers[2].toggleSpin();
        }.bind(this), delay+6000);

        setTimeout(function () {
            rollers[3].toggleSpin();
        }.bind(this), delay+8000);

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
