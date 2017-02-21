Module.register("loadapi",{
    // Default module config.
    defaults: {
        text: "Hello Magic Mirror loadapi!"
    },

    // Override dom generator.
    getDom: function() {
        var wrapper = document.createElement("div");
        wrapper.innerHTML = this.config.text;
        return wrapper;
    }
});