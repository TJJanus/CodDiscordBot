const Discord = require('discord.js')

const client = new Discord.Client();
require('dotenv').config()

//Hello



client.once('ready', () => {
    console.log('FlashbangBot is online!')
});

client.on('message', msg => {
    if(msg.content === 'HELLO'){
        msg.reply('Hello Friend!');
    }
})

// Random Map Generator
const maps = ['Armada','Checkmate', 'Cartel', 'Sattelite', 'Crossroads', 'Garrison', 'Miami', 'Moscow',]
const gameModes = ['Hardpoint', 'SnD', 'Control']

const hpMaps = ['Cartel', 'Checkmate', 'Crossroads', 'Garrison', 'Moscow']
const sndMaps = ['Checkmate', 'Crossroads', 'Garrison', 'Miami', 'Moscow']
const ctlrMaps = ['Checkmate', 'Garrison', 'Moscow']

client.on('message', msg => {

    const randomHpMap = hpMaps[Math.floor(Math.random() * hpMaps.length)];
    
    if(msg.content === '.NewHP'){
        msg.reply(`${randomHpMap} - Hardpoint `)
    }

})

client.on('message', msg => {

    const randomCtrlMap = ctlrMaps[Math.floor(Math.random() * ctlrMaps.length)];

    if(msg.content === '.NewControl'){
        msg.reply(`${randomCtrlMap} - Control `)
    }
})

client.on('message', msg => {

    const randomSnDMap = sndMaps[Math.floor(Math.random() * sndMaps.length)];

    if(msg.content === '.NewSnD'){
        msg.reply(`${randomSnDMap} - Search and Destroy `)
    }
})


client.on('message', msg => {
    const randomMap = maps[Math.floor(Math.random() * maps.length)];
    const randomGameMode = gameModes[Math.floor(Math.random() * gameModes.length)];

    if(msg.content === '.NewMap'){
        msg.reply(`${randomMap} - ${randomGameMode}`)
    }
})


client.login(process.env.TOKEN_API) // giving access to the application make sure this is last line
