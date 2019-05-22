const {Client, Attachment} = require('discord.js');
const bot = new Client();
const fs = require('fs')
bot.login('NTgwNTM5MjgzODk5ODA5ODA1.XOSkTQ.obHec-6piHhc1GhKgi631rgQyZ4');

//Whenever the bot is online run this
bot.on('ready', () => {
    bot.user.setActivity("Harsh's code", {type: "PLAYING"})
    console.log('Logged in as client ')
})

//Event listener for messages
bot.on('message', (message) => {
    if(message.content == 'What is my avatar'){
        message.channel.sendMessage(message.author.avatarURL);
    }
    if(message.content == "!rip"){
        const attachment = new Attachment('attachments/rip.jpg')
        message.channel.send(`${message.author}`, attachment);
    }
    if(message.content == "!memes"){
        const buffer = new fs.readFileSync('attachments/memes.rtf')

        const attachment = new Attachment(buffer, 'memes.rtf')

        message.channel.send(`${message.author} Here's your memes`, attachment)
    }
});

bot.on('guildMemberAdd', member => {
    
})