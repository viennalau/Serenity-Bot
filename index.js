//node index.js

const Discord = require("discord.js")
const colors = require('colors')
const client = new Discord.Client()
client.login("secret")

//Cool Bot Startup Message//

client.on('ready', () => {
    console.log("███████╗███████╗██████╗ ███████╗███╗   ██╗██╗████████╗██╗   ██╗".magenta.bold,   ",d88b.d88b,".red.bold)
    console.log("██╔════╝██╔════╝██╔══██╗██╔════╝████╗  ██║██║╚══██╔══╝╚██╗ ██╔╝".magenta,        "88888888888".red.bold)
    console.log("███████╗█████╗  ██████╔╝█████╗  ██╔██╗ ██║██║   ██║    ╚████╔╝ ".magenta.bold,   "`Y8888888Y'".red.bold)
    console.log("╚════██║██╔══╝  ██╔══██╗██╔══╝  ██║╚██╗██║██║   ██║     ╚██╔╝  ".magenta,        "  `Y888Y'  ".red.bold)
    console.log("███████║███████╗██║  ██║███████╗██║ ╚████║██║   ██║      ██║   ".magenta.bold,   "    `Y'    ".red.bold)
    console.log("╚══════╝╚══════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═══╝╚═╝   ╚═╝      ╚═╝   ".magenta)
    console.log("-----------------------------------------------------------------------------".grey)
    console.log(`${client.user.username} is online.`.magenta.bold)
}) 
client.on('message', message => {
    if(message.author.bot) return;

//AFK and changes nickname//

if (message.author.afk === 'true') {
    message.channel.send('You are no longer AFK.')
    message.member.setNickname(`${message.author.past}`)
    message.author.afk = false
}

//Snipe Command//

if (message.content === '-snipe') {
    if (message.channel.snipemessage) {
        message.channel.send(`get sniped bitch: ${message.channel.snipemessage}`)
    }

//EditSnipe Command//

} else if (message.content === '-editsnipe') {
    if (message.channel.editsnipemessage) {
        message.channel.send(`get editsniped bitch: ${message.channel.editsnipemessage}`)
    }

    //Hi Command//

} else if (message.content.startsWith('-hi')) {
    let user = message.mentions.users.first()

    if(!user) {
        let embed = new Discord.MessageEmbed()
        .setTitle('are you that lonely? :pensive:')
        .setDescription('i hope you find a cure to your loneliness')
        .setColor('BLUE')
        .setTimestamp()
        .setImage('https://media1.tenor.com/images/81d53b1482f85320524c29ca0f7e9259/tenor.gif?itemid=17100832')
        message.channel.send(embed)
        
     } else if(user === message.author) {
        let embed = new Discord.MessageEmbed()
        .setTitle('are you that lonely? :pensive:')
        .setDescription('i hope you find a cure to your loneliness')
        .setColor('BLUE')
        .setTimestamp()
        .setImage('https://media1.tenor.com/images/81d53b1482f85320524c29ca0f7e9259/tenor.gif?itemid=17100832')
        message.channel.send(embed)

     } else {
         
        let embed = new Discord.MessageEmbed()
        .setTitle('hello :relaxed:')
        .setDescription(`${message.author.username} says hi to ${user.username}`)
        .setColor('RANDOM')
        .setTimestamp()
        .setImage('https://media1.tenor.com/images/f5cd33863e8319ea72990eefc8e697a8/tenor.gif?itemid=5417197')
        message.channel.send(embed)
    }
}

////
else if (message.content.startsWith('-kiss')) {
    let user = message.mentions.users.first()
    if (!user) return message.channel.send('You didnt mention a user.')

    let embed = new Discord.MessageEmbed()
        .setTitle(`${message.author.username} kissed ${user.username}`)
        .setDescription(`get kissed`)
        .setColor('#FE9AAB')
        .setImage('https://media1.tenor.com/images/503bb007a3c84b569153dcfaaf9df46a/tenor.gif?itemid=17382412')
        .setTimestamp()
    message.react('❤️')
    message.channel.send(embed)
}

//Afk Command//
else if (message.content === '-afk') {
    let embed = new Discord.MessageEmbed()
        .setDescription(':flushed: | You are now AFK.')
        .setColor('PURPLE')
    message.author.past = message.member.displayName
    message.member.setNickname(`[AFK] ${message.member.displayName}`)
    message.author.afk = 'true'
    message.channel.send(embed)
}

//Blush Command//
else if (message.content === '-blush') {
    message.channel.send('https://tenor.com/view/seulisasoo-korean-kids-gif-21390401')
}

//Hug Command//
else if (message.content === '-hug') {
    message.channel.send('https://tenor.com/view/anime-hug-sweet-love-gif-14246498')
}

//Cat Water Command//
else if (message.content === '-cat') {
    message.channel.send('https://images-ext-2.discordapp.net/external/Bf0j-DFwVUI3u118y9sXTL5icYqfsHbyJ91TRUZVw0M/https/media.tenor.com/images/f5e2496db96cf0477d5632481c043068/tenor.gif')
}

//Help Command//
if (message.content === '-help') {
    let embed = new Discord.MessageEmbed()
        .setTitle('Command List')
        .setDescription('\`snipe\`,\`editsnipe\`,\`hi\`,\`afk\`,\`steven\`,\`blush\`,\`hug\`,\`cat\`,\`nuke\`,\`ping\`,\`monke\`,\`kiss\`')
        .setFooter('10 commands found.')
        .setTimestamp()
        .setColor('PURPLE')
    message.channel.send(embed)

//NUKE COMMAND//

} else if (message.content === '-nuke') {
    message.channel.messages.fetch({
        limit: 100,
    }).then(messages => {
        message.channel.bulkDelete(messages)
            .then(deleted => {
                let embed = new Discord.MessageEmbed()
                    .setDescription(`:boom: | Successfully nuked ${deleted.size} messages.`)
                    .setColor('PURPLE')
                    .setImage('https://images-ext-2.discordapp.net/external/OiE0_jP3L1k5La8pZ06Q4i2D0_EOHxsfYxrHK8LmByQ/https/media1.tenor.com/images/8e7ea91861bb1cb34abdb77d67b32f35/tenor.gif')
                message.channel.send(embed)
            })
            .catch(err => console.log(err))
    })

}
//Ping Command//


 else if (message.content === '-ping') {
    message.channel.send("Pinging...").then(m => {
        // The math to calculate the user's ping
        let ping = (new Date().getTime() - message.createdTimestamp);

        if (ping < 0) ping = 0
        // Basic embed.
        var embed = new Discord.MessageEmbed()
            .setTitle(":ping_pong: Pong!")
            .setDescription(`**Ping**: ${ping}ms\n**API Ping:** ${Math.round(client.ws.ping)}ms`)
            .setColor('PURPLE')

        // Then It Edits the message with the ping variable embed that you created
        m.edit("", embed)

    });

{ 
    if (message.content ==='-hex') {
        let hex = random(['#008000', '#E50000'])
        
        let embed = new Discord.MessageEmbed()
            .setTitle('Random Hex')
            .setColor(`${hex}`)
            .setDescription(`**Hex:** ${hex}`)
        message.channel.send(embed)
    }
  
//Extra Stuff//

client.on('messageDelete', message => {
    message.channel.snipemessage = message
})

client.on('messageUpdate', (oldMessage, newMessage) => {
    newMessage.channel.editsnipemessage = oldMessage
})
