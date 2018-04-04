const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
var baseList = require('./naughtywords.json');
var prefix = "~";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
   client.user.setGame('[help] for help!');
});


client.on('message', msg => {
  if (msg.content === '[help]') {
    msg.reply('``` List of commands \n ------- \n Commands: \n (1.) [help] - Brings up this text. \n (2.) Please use [add] (if staf member) or go to a role select channel.```');
  }
});


client.on('message', msg => {
  if (msg.content === "Rio") {
    if ( Math.floor(Math.random() * 20) > 10) {
      msg.reply("Leaf me alone.")
    } else {
      msg.reply("What is it?")
    }
  }
})

client.on("message", async msg => {
//  checkForSpam(msg)
  checkForProfacity(msg)
  if(msg.author.bot) return;
  if(msg.content.indexOf(prefix) !== 0) return;
  const args = msg.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if (command === "ping") {
    msg.channel.send(":ping_pong: Pong")
  }

})

async function checkForProfacity(msg) {
  var message = msg.content.toLowerCase()
  messageSliced = message.trim().split(/ +/g)
  var profanity = baseList.words
  for(var i = 0; i < messageSliced.length; i++) {
    for(var j = 0; j < profanity.length; j++) {
      if (profanity[j] === messageSliced[i]) {
        msg.delete()
        .catch(console.error)
        await msg.channel.send("BEGONE THOT", {
          file:"https://media.discordapp.net/attachments/428020896251510784/430886269313220618/0b3f9a7adf4e54addbf6543de0798e8b.png"
        })
      }
    }
  }
}



client.login(process.env.BOT_TOKEN)
