const Commando = require("discord.js-commando");
const config = require("./config.json");
const client = new Commando.Client({
 "Owner":"229405398124199936",
 "Prefix":"*"
});

// Listener Event: Runs whenever the bot sends a ready event (when it first starts for example)
client.on('ready', () => {

    // We can post into the console that the bot launched.
    console.log('Bot started.');

});


client.login(config.Token);