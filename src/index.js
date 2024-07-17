require('dotenv').config()

const {Client, GatewayIntentBits, Events, Rest} = require('discord.js')

const {clientReadyHandler} = require('./events/clientReady')

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds
    ]
});

client.on(Events.ClientReady, clientReadyHandler)

client.login(process.env.TOKEN);