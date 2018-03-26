const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '[help]') {
    msg.reply('``` List of commands \n ------- \n Commands: \n (1.) [help] - Brings up this text. \n (2.) [Bronze] - [Top500] or [-Bronze] - [-Top500] doing this will update your rank. \n (3.) [signup] Signup for fight night. \n (4.) *For staff only* list said signed players *MAY SPAM CHAT* \n   ```');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === "[bronze]") {
    var role = msg.guild.roles.find("name", 'Bronze')
    msg.member.addRole(role)
    msg.reply("` Your rank has now been updated to 'Bronze.' `")
  } else if (msg.content.toLowerCase() === "[gold]") {
    var role = msg.guild.roles.find("name", 'Gold')
    msg.member.addRole(role)
    msg.reply("` Your rank has now been updated to 'Gold.' `")
  } else if (msg.content.toLowerCase() === "[platinum]") {
    var role = msg.guild.roles.find("name", 'Platinum')
    msg.member.addRole(role)
    msg.reply("` Your rank has now been updated to 'Platinum.' `")
  } else if (msg.content.toLowerCase() === "[diamond]") {
    var role = msg.guild.roles.find("name", 'Diamond')
    msg.member.addRole(role)
    msg.reply("` Your rank has now been updated to 'Diamond.' `")
  } else if (msg.content.toLowerCase() === "[silver]") {
    var role = msg.guild.roles.find("name", 'Silver')
    msg.member.addRole(role)
    msg.reply("` Your rank has now been updated to 'Silver.' `")
  } else if (msg.content.toLowerCase() === "[master]") {
    var role = msg.guild.roles.find("name", 'Master')
    msg.member.addRole(role)
    msg.reply("` Your rank has now been updated to 'Master.' `")
  } else if (msg.content.toLowerCase() === "[grandmaster]") {
    var role = msg.guild.roles.find("name", 'Grandmaster')
    msg.member.addRole(role)
    msg.reply("` Your rank has now been updated to 'Grandmaster.' `")
  } else if (msg.content.toLowerCase() === "[top500]") {
    var role = msg.guild.roles.find("name", 'Top500')
    msg.member.addRole(role)
    msg.reply("` Your rank has now been updated to 'Top500.' `")
  } else if (msg.content.toLowerCase() === "[dps]") {
    var role = msg.guild.roles.find("name", 'DPS')
    msg.member.addRole(role)
    msg.reply("` Your role has now been updated to 'DPS' `")
  } else if (msg.content.toLowerCase() === "[tank]") {
    var role = msg.guild.roles.find("name", 'Tank')
    msg.member.addRole(role)
    msg.reply("` Your role has now been updated to 'Tank' `")
  }else if (msg.content.toLowerCase() === "[support]") {
    var role = msg.guild.roles.find("name", 'Support')
    msg.member.addRole(role)
    msg.reply("` Your role has now been updated to 'Support' `")
  }
})

client.on('message', msg => {
  if (msg.content.toLowerCase() === "[-bronze]") {
    var role = msg.guild.roles.find("name", 'Bronze')
    msg.member.removeRole(role)
    msg.reply("` Your rank has now been updated. `")
  } else if (msg.content.toLowerCase() === "[-gold]") {
    var role = msg.guild.roles.find("name", 'Gold')
    msg.member.removeRole(role)
    msg.reply("` Your rank has now been updated.`")
  } else if (msg.content.toLowerCase() === "[-platinum]") {
    var role = msg.guild.roles.find("name", 'Platinum')
    msg.member.removeRole(role)
    msg.reply("` Your rank has now been updated. `")
  } else if (msg.content.toLowerCase() === "[-diamond]") {
    var role = msg.guild.roles.find("name", 'Diamond')
    msg.member.removeRole(role)
    msg.reply("` Your rank has now been updated.`")
  } else if (msg.content.toLowerCase() === "[-silver]") {
    var role = msg.guild.roles.find("name", 'Silver')
    msg.member.removeRole(role)
    msg.reply("` Your rank has now been updated. `")
  } else if (msg.content.toLowerCase() === "[-master]") {
    var role = msg.guild.roles.find("name", 'Master')
    msg.member.removeRole(role)
    msg.reply("` Your rank has now been updated.`")
  } else if (msg.content.toLowerCase() === "[-grandmaster]") {
    var role = msg.guild.roles.find("name", 'Grandmaster')
    msg.member.removeRole(role)
    msg.reply("` Your rank has now been updated. `")
  } else if (msg.content.toLowerCase() === "[-top500]") {
    var role = msg.guild.roles.find("name", 'Top500')
    msg.member.removeRole(role)
    msg.reply("` Your rank has now been updated. `")
  } else if (msg.content === "[-dps]") {
    var role = msg.guild.roles.find("name", 'DPS')
    msg.member.removeRole(role)
    msg.reply("` Your role has now been updated.`")
  } else if (msg.content.toLowerCase() === "[-tank]") {
    var role = msg.guild.roles.find("name", 'Tank')
    msg.member.removeRole(role)
    msg.reply("` Your role has now been updated. `")
  }else if (msg.content.toLowerCase() === "[-support]") {
    var role = msg.guild.roles.find("name", 'Support')
    msg.member.removeRole(role)
    msg.reply("` Your role has now been updated.`")
  }
})


client.on('message', msg => {
    if ( msg.content === "[signup]") {
      msg.reply("```Signed Up with the name: " + msg.author.username +". Thank you for signing up. ```")
      var set1 = '{"Name":[{"name": "example"}]}';
      var jsonStr = '{"Name":[{"name": "example"}]}';
      var obj = JSON.parse(jsonStr);
      obj['Name'].push({"Name":msg.author.username});
      jsonStr = JSON.stringify(obj);
      var data = jsonStr
      if (set1 === jsonStr) {
        fs.writeFile('wolfpack.json', data, (err) => { if (err) throw err;})
      }
        fs.readFile("wolfpack.json", "utf-8", function callback(err, data) {
          if (err){
            throw err;
          } else {
            obj = JSON.parse(data)
            obj['Name'].push({"Name": msg.author.username});
            json = JSON.stringify(obj)
            fs.writeFile("wolfpack.json", json, 'utf-8', (err) => {if (err) throw err;})
    }})
  }
});

client.on('message', msg => {
  if (msg.content === "[listsigned]" && msg.member.roles.find("name", "Staff")) {
    if(msg.member.roles.find("name", "Staff") || msg.member.roles.find("name", "Pit Boss") || msg.member.roles.find("name", "Head Staff")){
      fs.readFile("wolfpack.json", "utf-8", function callback(err, data) {
        if (err){
          throw err;
        } else {
          msg.reply(data);
        }
  })
}}
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
// Create a new webhook
const hook = new Discord.WebhookClient('webhook id', 'webhook token');

// Send a message using the webhook
hook.send('I am now alive!');



client.login(process.env.BOT_TOKEN)
