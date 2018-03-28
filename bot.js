const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
   client.user.setGame('[help] for help!');
});


client.on('message', msg => {
  if (msg.content === '[help]') {
    msg.reply('``` List of commands \n ------- \n Commands: \n (1.) [help] - Brings up this text. \n (2.) [Bronze] - [Top500] or [-Bronze] - [-Top500] doing this will update your rank. \n (3.) [signup] Signup for fight night. \n (4.) *For staff only* list said signed players *MAY SPAM CHAT* \n   ```');
  }
});

client.on("message", msg => {
  if (msg.content === "[add]") {
    msg.channel.send("Please select your role by choosing any of these reactions....")
            .then(message => {
              if (i < 8 || i === undefined) {
                for (var i = 0; i < 8; i++) {
                  var owrank = ["bronze", "silver", "gold", "platinum", "diamond", "master", "grandmaster", "top500"];
                  var x = client.emojis.find("name", owrank[i]);
                  AWAIT(x);
                  async function AWAIT(x) {
                    await message.react(x.id);
                  }
                }
                i = 9
              }
              client.on("messageReactionAdd", (reaction, t) => {
                if (t.bot === true) {
                } else {
                    var getReaction = reaction._emoji.name;
                    if ( getReaction === 'bronze' ) {
                      var role = msg.guild.roles.find("name", "Bronze")
                      var userID = t.id, guildID = msg.guild.members;
                      var userROLE = guildID.get(userID);
                      userROLE.addRole(role)
                    } else if ( getReaction === "silver") {
                      var role = msg.guild.roles.find("name", "Silver")
                      var userID = t.id, guildID = msg.guild.members;
                      var userROLE = guildID.get(userID);
                      userROLE.addRole(role)
                    } else if ( getReaction === "gold" ) {
                      var role = msg.guild.roles.find("name", "Gold")
                      var userID = t.id, guildID = msg.guild.members;
                      var userROLE = guildID.get(userID);
                      userROLE.addRole(role)
                    } else if ( getReaction === "platinum" ) {
                      var role = msg.guild.roles.find("name", "Platinum")
                      var userID = t.id, guildID = msg.guild.members;
                      var userROLE = guildID.get(userID);
                      userROLE.addRole(role)
                    } else if ( getReaction === "diamond" ) {
                      var role = msg.guild.roles.find("name", "Diamond")
                      var userID = t.id, guildID = msg.guild.members;
                      var userROLE = guildID.get(userID);
                      userROLE.addRole(role)
                    } else if ( getReaction === "master" ) {
                      var role = msg.guild.roles.find("name", "Master")
                      var userID = t.id, guildID = msg.guild.members;
                      var userROLE = guildID.get(userID);
                      userROLE.addRole(role)
                    } else if ( getReaction === "grandmaster" ) {
                      var role = msg.guild.roles.find("name", "Grandmaster")
                      var userID = t.id, guildID = msg.guild.members;
                      var userROLE = guildID.get(userID);
                      userROLE.addRole(role)
                    } else if ( getReaction === "top500" ) {
                      var role = msg.guild.roles.find("name", "Top500")
                      var userID = t.id, guildID = msg.guild.members;
                      var userROLE = guildID.get(userID);
                      userROLE.addRole(role)
                    } else {
                      console.log("SOMEONE ADDED A NEW REACTION")
                    }
                }
              });
            }).catch(console.error);
    msg.channel.send("Please remove your role by choosing any of these reactions....")
      .then(message => {
        if (i < 8 || i === undefined) {
          for (var i = 0; i < 8; i++) {
            var owrank = ["bronze", "silver", "gold", "platinum", "diamond", "master", "grandmaster", "top500"];
            var x = client.emojis.find("name", owrank[i]);
            AWAIT(x);
            async function AWAIT(x) {
              await message.react(x.id);
            }
          }
          i = 9
        }
        client.on("messageReactionAdd", (reaction, t) => {
          if (t.bot === true) {
          } else {
              var getReaction = reaction._emoji.name;
              if ( getReaction === 'bronze' ) {
                var role = msg.guild.roles.find("name", "Bronze")
                var userID = t.id, guildID = msg.guild.members;
                var userROLE = guildID.get(userID);
                userROLE.removeRole(role)
              } else if ( getReaction === "silver") {
                var role = msg.guild.roles.find("name", "Silver")
                var userID = t.id, guildID = msg.guild.members;
                var userROLE = guildID.get(userID);
                userROLE.removeRole(role)
              } else if ( getReaction === "gold" ) {
                var role = msg.guild.roles.find("name", "Gold")
                var userID = t.id, guildID = msg.guild.members;
                var userROLE = guildID.get(userID);
                userROLE.removeRole(role)
              } else if ( getReaction === "platinum" ) {
                var role = msg.guild.roles.find("name", "Platinum")
                var userID = t.id, guildID = msg.guild.members;
                var userROLE = guildID.get(userID);
                userROLE.addRole(role)
              } else if ( getReaction === "diamond" ) {
                var role = msg.guild.roles.find("name", "Diamond")
                var userID = t.id, guildID = msg.guild.members;
                var userROLE = guildID.get(userID);
                userROLE.removeRole(role)
              } else if ( getReaction === "master" ) {
                var role = msg.guild.roles.find("name", "Master")
                var userID = t.id, guildID = msg.guild.members;
                var userROLE = guildID.get(userID);
                userROLE.removeRole(role)
              } else if ( getReaction === "grandmaster" ) {
                var role = msg.guild.roles.find("name", "Grandmaster")
                var userID = t.id, guildID = msg.guild.members;
                var userROLE = guildID.get(userID);
                userROLE.removeRole(role)
              } else if ( getReaction === "top500" ) {
                var role = msg.guild.roles.find("name", "Top500")
                var userID = t.id, guildID = msg.guild.members;
                var userROLE = guildID.get(userID);
                userROLE.removeRole(role)
              } else {
                console.log("SOMEONE ADDED A NEW REACTION")
              }
          }
        });
      }).catch(console.error);
  }
})

client.on('message', msg => {
  if (msg.content === "[pleasedonotcopythismsg!]") {
    for (var i = 0; i < 11; i++) {
      var nameArray = ["DPS", "Support", "Tank", "Top500", "Grandmaster", "Master", "Diamond", "Platinum", "Gold", "Silver", "Bronze"],
          colorArray = ["#8b0000", "#90ee90", "#00FFFF", "#400FFF", "#8c3a07", "#e57b39", "#6665d2", "#e5e4e2", "ffd700", "#C0C0C0", "#cd7f32"];
          name = nameArray[i],
          color = colorArray[i];
          msg.guild.createRole({name:name, color:color, hoist:"true"});
    }
  }
});



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


client.login(process.env.BOT_TOKEN)
