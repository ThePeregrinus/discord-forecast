async function interactionCreateHandler(interaction){
    if(!interaction.isChatInputCommand()){
        return;
    }
    const command = interaction.client.commands.get(interaction.commandName)

    if(!command){
        return;
    }

    try{
        await command.execute(interaction)
        console.log(interaction.user.username, 'used command', interaction.commandName )
    }
    catch(e){
        console.error(e)
        if(interaction.replied || interaction.deferred){
            await interaction.followUp({
                content:'Error when execute coma',
                ephemeral: true
            });
        } else{
            await interaction.reply({
                content:'Error when execute coma',
                ephemeral: true
            })
        }
    }


}

module.exports = {
    interactionCreateHandler
}