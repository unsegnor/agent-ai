const App = require("./index.js")

module.exports = function(){

    const app = App()
    return Object.freeze({
        createAgent
    })

    function createAgent(){
        return app.createAgent()
    }
}
