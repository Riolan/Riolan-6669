const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '[help]') {
    msg.author.sendMessage('``` List of commands... \n ------- \n Commands: \n (1.) [help] - brings up this text. \n (2.) Working on a set role. \n   ```');
  }
});

client.on('message', msg => {
  if (msg.content === "[Bronze]") {
    var role = msg.guild.roles.find("name", 'Bronze')
    msg.member.addRole(role)
    msg.reply("` Your rank has now been updated to 'Bronze.' `")
  } else if (msg.content === "[Gold]") {
    var role = msg.guild.roles.find("name", 'Gold')
    msg.member.addRole(role)
    msg.reply("` Your rank has now been updated to 'Gold.' `")
  } else if (msg.content === "[Platinum]") {
    var role = msg.guild.roles.find("name", 'Platinum')
    msg.member.addRole(role)
    msg.reply("` Your rank has now been updated to 'Platinum.' `")
    msg.member.addRole(role)
  } else if (msg.content === "[Diamond]") {
    var role = msg.guild.roles.find("name", 'Diamond')
    msg.member.addRole(role)
    msg.reply("` Your rank has now been updated to 'Diamond.' `")
  } else if (msg.content === "[Silver]") {
    var role = msg.guild.roles.find("name", 'Silver')
    msg.member.addRole(role)
    msg.reply("` Your rank has now been updated to 'Silver.' `")
  } else if (msg.content === "[Master]") {
    var role = msg.guild.roles.find("name", 'Master')
    msg.member.addRole(role)
    msg.reply("` Your rank has now been updated to 'Master.' `")
  } else if (msg.content === "[Grandmaster]") {
    var role = msg.guild.roles.find("name", 'Grandmaster')
    msg.member.addRole(role)
    msg.reply("` Your rank has now been updated to 'Grandmaster.' `")
  } else if (msg.content === "[Top500]") {
    var role = msg.guild.roles.find("name", 'Top500')
    msg.member.addRole(role)
    msg.reply("` Your rank has now been updated to 'Top500.' `")
  } else if (msg.content === "[DPS]") {
    var role = msg.guild.roles.find("name", 'DPS')
    msg.member.addRole(role)
    msg.reply("` Your role has now been updated to 'DPS' `")
  } else if (msg.content === "[Tank]") {
    var role = msg.guild.roles.find("name", 'Tank')
    msg.member.addRole(role)
    msg.reply("` Your role has now been updated to 'Tank' `")
  }else if (msg.content === "[Support]") {
    var role = msg.guild.roles.find("name", 'Support')
    msg.member.addRole(role)
    msg.reply("` Your role has now been updated to 'Support' `")
  }
})

client.on('message', msg => {
  if (msg.content === "[init]") {
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
      msg.author.sendMessage("```Signed Up with the name: " + msg.author.username +" please note if you name has any invlad characters or symbols im going to kms. - Rio <3 ```")
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
  if (msg.content === "[listsigned]") {
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
  if (msg.content === "@Rio#2582") {
    if ( Math.floor(Math.random() * 20) > 10) {
      msg.reply("Leaf me alone.")
    } else {
      msg.reply("What is it?")
    }
  }
})


client.login(process.env.BOT_TOKEN)
