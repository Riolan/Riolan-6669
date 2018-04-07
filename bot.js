const Discord = require("discord.js");
const client = new Discord.Client();
var baseList = require('./naughtywords.json');
var prefix = "~";
var help = require("./help.json")

client.on('ready', () => {
   console.log(`Logged in as ${client.user.tag}!`);
   client.user.setActivity(" ~help || twitch.tv/x_rio");
   console.log(`Ready to serve on ${client.guilds.size} servers, for ${client.users.size} users.`);
});

var check = [];
async function checkForSpam(msg) {
    var msgTime = msg.createdTimestamp
    var msgUser = msg.member.user.id
    check.push(msgUser)
    if (check.length % 6 === 0) {
      for (var i = 0; i < 6; i++) {
        if (msgUser === check[0] && msgUser === check[1] && msgUser === check[2] && msgUser === check[3] && msgUser === check[4] && msgUser === check[5]) {
          if (i === 3) {
            msg.reply("Please don't spam {warning}")
          }
        }
      }
      check = [];
    }
  }

  var baseList = require('./naughtywords.json');
  async function checkForProfanity(msg) {
    var message = msg.content.toLowerCase()
    messageSliced = message.trim().split(/ +/g)
    var profanity = baseList.words
    for(var i = 0; i < messageSliced.length; i++) {
      for(var j = 0; j < profanity.length; j++) {
        if (profanity[j] === messageSliced[i]) {
          msg.delete()
          .catch(console.error)
          await msg.channel.send("pls no curse-y curse-y", {
            file:"https://media.discordapp.net/attachments/428020896251510784/430886269313220618/0b3f9a7adf4e54addbf6543de0798e8b.png"
          })
        }
      }
    }
  }


const newUsers = [];

client.on("message", async msg => {
  checkForSpam(msg)
  checkForProfanity(msg)
  if(msg.author.bot) return;
  if(msg.content.indexOf(prefix) !== 0) return;
  const args = msg.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if (command === "help") {
    var helpCOM = help.commands.toString()
    msg.channel.send({embed: {
      color: 10181046,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      title: "HELP COMMAND",
      url: "https://twitch.tv/x_rio",
      description: helpCOM,
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL
      }
    }
  }).catch(console.error)
  }
  if (command === "ping") {
    msg.channel.send(":ping_pong: Pong")
  }
     if (command === "role") {
    if (args[0] === "add") {
          var role = args[1];
          var roletoadd = msg.guild.roles.find("name", role.toString());
          if (!roletoadd) {
            msg.channel.send("404... ROLE NOT FOUND.")
            return;
          }
          msg.member.addRole(roletoadd)
    }
    if (args[0] === "remove") {
      var role = args[1];
      var roletoadd = msg.guild.roles.find("name", role.toString());
      if (!roletoadd) {
        msg.channel.send("404... ROLE NOT FOUND")
        return;
      }
      msg.member.removeRole(roletoadd)
    }
  }
})

//
client.on("guildMemberAdd", async (member) => {
    var defaultChannel = member.guild.channels.find(c=> c.name === "global" && c.type === "text");
    if (!defaultChannel) {
      await member.guild.createChannel('global', 'text')
          .then()
          .catch(console.error);
      var defaultChannel = member.guild.channels.find(c=> c.name === "new-members" && c.type === "text");
      var role  = member.guild.roles.find("name", "member")
      defaultChannel.send("Welcome to our music group, " + member + " enjoy your time!");
      member.addRole(role)
      .catch(console.error)
    } else {
      var role  = member.guild.roles.find("name", "member")
      if (!role) {
        defaultChannel.send("Please create the role... 'member' (lowercase) ")
      }
      defaultChannel.send("Welcome to our music group, " + member + " enjoy your time!");
      member.addRole(role)
      .catch(console.error)
    }
});

client.login(process.env.BOT_TOKEN)
