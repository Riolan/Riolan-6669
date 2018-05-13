const Discord = require("discord.js");
const client = new Discord.Client();
var baseList = require('./naughtywords.json');
var prefix = "~";
var help = require("./help.json")

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
   client.user.setActivity("Welp");
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
    function dothething() {
      var jZ = [];
      for (var i = 0; i < help.commands.length; i++) {
        for (var j = j; j < help.commands.length; j++)
          console.log(help.commands[i])
          jZ.push(help.commands[i].toUpperCase())
      }
      return jZ;
    }
    var embed = new Discord.RichEmbed()
    .setTitle(`HELP PAGE`)
    .setDescription(dothething())
    .addField(`**__NOTE__** `, `Please use the prefix: ${prefix} at the front of any command.`)
    msg.channel.send(embed)
  }
  if (command === "music" && msg.guild.id === "430432416864403467") {
    if (!args[0]) {
      msg.channel.send("Need an argument!")
    } else {
      msg.channel.send(`!!!play https://fanburst.com/hbms432/${args}/download`)
    }
  }


  if (command === "role") {
    if (args[0] === "add") {
      if (!args[2]) {
        var role = args[1];
        var roletoadd = msg.guild.roles.find("name", role.toString());
        if (!roletoadd) {
          msg.channel.send("404... ROLE NOT FOUND.")
          return;
        }
        msg.member.addRole(roletoadd).then(msg.reply("Added role"))
      } else {
        var member = msg.mentions.members.first()
        var role = args[1];
        var roletoadd = msg.guild.roles.find("name", role.toString());
        member.addRole(roletoadd).then(msg.channel.send("Added role to:"))
      }
    }
    if (args[0] === "remove") {
      if (!args[2]) {
        var role = args[1];
        var roletoadd = msg.guild.roles.find("name", role.toString());
        if (!roletoadd) {
          msg.channel.send("404... ROLE NOT FOUND")
          return;
        }
        msg.member.removeRole(roletoadd).then(msg.reply("Removed role"))
      } else {
        var member = msg.mentions.members.first()
        var role = args[1];
        var roletoadd = msg.guild.roles.find("name", role.toString());
        member.removeRole(roletoadd).then(msg.reply("Removed role"))
      }
    }
  }
})


//
client.on("guildMemberAdd", async (member) => {
    var defaultChannel = member.guild.channels.find(c=> c.name === "timeline" && c.type === "text");
    if (!defaultChannel) {
      await member.guild.createChannel('timeline', 'text')
          .then()
          .catch(console.error);
      var defaultChannel = member.guild.channels.find(c=> c.name === "timeline" && c.type === "text");
      var role  = member.guild.roles.find("name", "member")
      defaultChannel.send("Welcome to our music group, " + member + " enjoy your time!");
      member.addRole(role)
      .catch(console.error)
    } else {
      var role  = member.guild.roles.find("name", "member")
      if (!role) {
        defaultChannel.send("Please create the role... 'member' (lowercase) ")
      }
      defaultChannel.send("Welcome to our server, " + member + " enjoy your time here !");
      member.addRole(role)
      .catch(console.error)
    }
});

client.login(process.env.BOT_TOKEN)
