const {REST, Routes} = require('discord.js');

const rest = new REST({version: '10'}).setToken(process.env.TOKEN)
async function clientReadyHandler(client){
    try{
        console.log(`Logged in as ${client.user.tag}!`);
        
        console.log(`Refreshing ${client.commands.size} commands`)
        
        const data = await rest.put(
            Routes.applicationGuildCommands(
              process.env.CLIENT_ID,
              process.env.GUILD_ID
            ),
            {
              body: client.commands.map((command) => {
                return command.data.toJSON();
              }),
            }
          );

        console.log(`reloaded ${data.length} commands`)
    }
    catch(e){
        console.error(e)
    }
}


module.exports = {
    clientReadyHandler
}