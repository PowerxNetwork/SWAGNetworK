const Discord = require("discord.js");

const client = new Discord.Client();

var prefix = "!";

client.on('ready', () => {

   console.log(`----------------`);

      console.log(`Desert Bot- Script By : i1Suhaib`);

        console.log(`----------------`);

      console.log(`ON ${client.guilds.size} Servers '     Script By : i1Suhaib ' `);

    console.log(`----------------`);

  console.log(`Logged in as ${client.user.tag}!`);

client.user.setGame(`( ! ) , Akon Beta V 1.1.6`,"http://twitch.tv/S-F")

client.user.setStatus("dnd")

});


client.on('message', message => {
   if (message.content === "!id") {
   let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setThumbnail(message.author.avatarURL)
  .addField("Name:",`${message.author.username}`, true)
  .addField('Discrim:',"#" +  message.author.discriminator, true)
  .addField("ID:", message.author.id, true)
  .addField("Create At:", message.author.createdAt, true)
     
     
  message.channel.sendEmbed(embed);
    }
});


client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='!member')
      var IzRo = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL) 
      .setTitle('🌷| Members info')
      .addBlankField(true)
      .addField('📗| Online',
      `${message.guild.members.filter(m=>m.presence.status == 'online').size}`)
      .addField('📕| DND',`${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`)
      .addField('📙| Idle',`${message.guild.members.filter(m=>m.presence.status == 'idle').size}`)
      .addField('📓| Offline',`${message.guild.members.filter(m=>m.presence.status == 'offline').size}`)
      .addField('➡| Server Members',`${message.guild.memberCount}`)
      message.channel.send(IzRo);
	
    });


client.on('message', message => {
    if (message.content.startsWith("!avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
    if(message.content.startsWith(prefix + 'new')) {
        let args = message.content.split(' ').slice(1).join(' ');
        let support = message.guild.roles.find("name","Support Team");
        let ticketsStation = message.guild.channels.find("name", "TICKETS.");
        if(!args) {
            return message.channel.send('**Please enter a subject for the ticket**');
        };
                if(!support) {
                    return message.channel.send('** Please Create Role Support Team **');
                };
            if(!ticketsStation) {
                message.guild.createChannel("TICKETS.", "category");
            };
                message.guild.createChannel(`ticket-${message.author.username}`, "text").then(ticket => {
                    message.delete()
                        message.channel.send(`Your ticket has been created. [ ${ticket} ]`);
                    ticket.setParent(ticketsStation);
                    ticketsStation.setPosition(1);
                        ticket.overwritePermissions(message.guild.id, {
                            SEND_MESSAGES: false,
                            READ_MESSAGES: false
                        });
                            ticket.overwritePermissions(support.id, {
                                SEND_MESSAGES: true,
                                READ_MESSAGES: true
                            });
                                ticket.overwritePermissions(message.author.id, {
                                    SEND_MESSAGES: true,
                                    READ_MESSAGES: true
                                });
                    let embed = new Discord.RichEmbed()
                                .setTitle('**New Ticket.**')
                                .setColor("RANDOM")
                                .setThumbnail(`${message.author.avatarURL}`)
                                .addField('Subject', args)
                                .addField('Author', message.author)
                                .addField('Channel', `<#${message.channel.id}>`);
 
                                ticket.sendEmbed(embed);
                }) .catch();
    }
    if(message.content.startsWith(prefix + '!close')) {
            if(!message.member.hasPermission("ADMINISTRATOR")) return;
        if(!message.channel.name.startsWith("ticket")) {
            return;
        };  
                let embed = new Discord.RichEmbed()
                    .setAuthor("Repeat it, you have 20 seconds")
                    .setColor("RANDOM");
                    message.channel.sendEmbed(embed) .then(codes => {
 
                   
                        const filter = msg => msg.content.startsWith(prefix + '!close');
                        message.channel.awaitMessages(response => response.content === prefix + 'close', {
                            max: 1,
                            time: 20000,
                            errors: ['time']
                        })
                        .then((collect) => {
                            message.channel.delete();
                        }) .catch(() => {
                            codes.delete()
                                .then(message.channel.send('**The operation was canceled**')) .then((c) => {
                                    c.delete(4000);
                                })
                                   
                           
                        })
 
 
                    })
 
 
           
    }
});


client.on('message', async message => {
 
if(message.content.startsWith( prefix + 'invite')) {
        let oi = message.mentions.users.first() ? message.mentions.users.first().id : message.author.id;
        let Tag = message.mentions.users.first() ? message.mentions.users.first().tag : message.author.tag;
        let Username = message.mentions.users.first() ? message.mentions.users.first().username : message.author.username;
        let Avatar = message.mentions.users.first() ? message.mentions.users.first().avatarURL : message.author.avatarURL;
       
        message.guild.fetchInvites().then(invs => {
            let member = client.guilds.get(message.guild.id).members.get(oi);
            let personalInvites = invs.filter(i => i.inviter.id === oi);
            let urll = invs.filter(i => i.inviter.id === oi);
            let link = urll.reduce((p , v) => v.url +` , Total de membros recrutados no convite: ${v.uses}.\n`+ p, `\nServidor: ${message.guild.name} \n `);
            let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
            let inviteCode = personalInvites.reduce((p, v) => v.code);
            let possibleInvites = [['Total de membros recrutados:']];
            possibleInvites.push([inviteCount, inviteCode]);
            let user = message.mentions.users.first() || message.author;
            let mem = message.guild.member(user);
            let millisJoined = new Date().getTime() - mem.joinedAt.getTime();
            let daysJoined = millisJoined / 1000 / 60 / 60 / 24;
           
            var inviteInfo = new Discord.RichEmbed()
            .setTitle(`:incoming_envelope: **[INVITE INFO]** ${Username}`)
            .setThumbnail(client.user.avatarURL)
            .addField('**الدعوات**', `**➥** [ شخص **${Number(inviteCount)}** ]`)
            .addField('**تم الانضمام للسيرفر من**', `**➥** [ يوم **${daysJoined.toFixed(0)}** ]`)
            .addField('**رابط دعوة الانضمام**', `**➥** [ **https://discord.gg/${inviteCode || 'Zm2U6we'}** ]`)
            .setColor('ORANGE')
            .setTimestamp()
            .setFooter(Tag, Avatar)
           
            message.channel.send(inviteInfo);
            });
    };
});


client.on('message',async message => {
  var room;
  var title;
  var duration;
  var gMembers;
  var filter = m => m.author.id === message.author.id;
  if(message.content.startsWith(prefix + "giveaway")) {
     //return message.channel.send(':heavy_multiplication_x:| **هذا الامر معطل حاليا.. ``حاول في وقت لاحق``**');
    if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send(':heavy_multiplication_x:| **يجب أن يكون لديك خاصية التعديل على السيرفر**');
    message.channel.send(`:eight_pointed_black_star:| **من فضلك اكتب اسم الروم**`).then(msgg => {
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      }).then(collected => {
        let room = message.guild.channels.find('name', collected.first().content);
        if(!room) return message.channel.send(':heavy_multiplication_x:| **لم اقدر على ايجاد الروم المطلوب**');
        room = collected.first().content;
        collected.first().delete();
        msgg.edit(':eight_pointed_black_star:| **اكتب مدة القيف اواي بالدقائق , مثال : 60**').then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000,
            errors: ['time']
          }).then(collected => {
            if(isNaN(collected.first().content)) return message.channel.send(':heavy_multiplication_x:| **يجب عليك ان تحدد وقت زمني صحيح.. ``يجب عليك اعادة كتابة الامر``**');
            duration = collected.first().content * 60000;
            collected.first().delete();
            msgg.edit(':eight_pointed_black_star:| **واخيرا اكتب على ماذا تريد القيف اواي**').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                title = collected.first().content;
                collected.first().delete();
                try {
                  let giveEmbed = new Discord.RichEmbed()
                  .setAuthor(message.guild.name, message.guild.iconURL)
                  .setTitle(title)
                  .setDescription(`المدة : ${duration / 60000} دقائق`)
                  .setFooter(message.author.username, message.author.avatarURL);
                  message.guild.channels.find('name', room).send(giveEmbed).then(m => {
                     let re = m.react('💖');
                     setTimeout(() => {
                       let users = m.reactions.get("💖").users;
                       let list = users.array().filter(u => u.id !== m.author.id);
                       let gFilter = list[Math.floor(Math.random() * list.length) + 0];
                         if(users.size === 1) gFilter = '**لم يتم التحديد**';
                       let endEmbed = new Discord.RichEmbed()
                       .setAuthor(message.author.username, message.author.avatarURL)
                       .setTitle(title)
                       .addField('انتهى القيف اواي !',`الفائز هو : ${gFilter}`)
                       .setFooter(message.guild.name, message.guild.iconURL);
                       m.edit(endEmbed);
                     },duration);
                   });
                  msgg.edit(`:heavy_check_mark:| **تم اعداد القيف اواي**`);
                } catch(e) {
                  msgg.edit(`:heavy_multiplication_x:| **لم اقدر على اعداد القيف اواي بسبب نقص الخصائص**`);
                  console.log(e);
                }
              });
            });
          });
        });
      });
    });
  }
});


client.on('message', message => {
            if (message.content.startsWith("botinfo")) {
     let embed = new Discord.RichEmbed()
.addField(' عدد السيرفرات التي بها',`[${client.guilds.size}]  `)
.addField(' عدد الاعضاء ',` [${client.users.size}] `)
.addField('الغرف ',`[${client.channels.size}]`) 
.addField(' البنق ',`[${Date.now() - message.createdTimestamp}]`) 
.addField(' Devolope - Tornado#6642, ')
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
    }
});


client.on('message', function(message) {
    if(message.content.startsWith(prefix + 'akon')) {
        let args = message.content.split(" ").slice(1);
        if (!args[0]) {
            message.channel.send('https://discordapp.com/api/oauth2/authorize?client_id=594251859955548160&permissions=8&scope=bot');
            return;
            }
    message.channel.send(Math.floor(Math.random() * args.join(' ')));
            if (!args[0]) {
          message.edit('1')
          return;
        }
    }
});


client.on('message', async msg =>{
    var prefix = '!';//هنا البريفيكس
    if (msg.author.bot) return undefined;
    if (!msg.content.startsWith(prefix)) return undefined;
   
    let args = msg.content.split(' ');
 
    let command = msg.content.toLowerCase().split(" ")[0];
    command = command.slice(prefix.length)
 
    if(command === `ping`) {//هنا الكوماند
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle("Your Ping!!")
    .setDescription(`${client.ping} ms`)
    .setFooter(`${msg.author.tag}`);
    msg.delete().catch(O_o=>{})
    msg.channel.send(embed);
    }
});//Alpha Codes_LioNDz


client.on('message', message => {let prefix = "!";
if(message.content.startsWith(prefix + "sug")) {
      message.delete()

const args = message.content.slice(prefix.length).trim().split(/ +/g);

  var suggestMessage = args.slice(1).join(" ")
  if(!suggestMessage) return message.reply("Please place a suggestion")
  let suggestsEMBED = new Discord.RichEmbed()
   .setColor('#0028db')
   .setTitle(" New Suggestion")
   .setDescription(`**${suggestMessage}**`)
   .setFooter(` Proposed : ${message.author.tag}`)
  
       let suggests = message.guild.channels.find(ch => ch.name === "sugg");
                   if (!suggests) return message.reply("Please put rom by name : sugg")
               suggests.send(suggestsEMBED);
}
})


client.on('message', function(message) {
    if(message.content.startsWith(prefix + 'support')) {
        let args = message.content.split(" ").slice(1);
        if (!args[0]) {
            message.channel.send('https://discord.gg/PmcTusA');
            return;
            }
    message.channel.send(Math.floor(Math.random() * args.join(' ')));
            if (!args[0]) {
          message.edit('1')
          return;
        }
    }
});


client.on('message', message =>{
  if(message.content.startsWith(prefix + 'stats')){
  if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('❌ **You Dont Have Administartor**');
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS'])) return message.reply('❌ **im Not Have Administartor**');
  message.guild.createChannel(`Discord status :` , 'category')
 
    message.guild.createChannel(`"Loading` , 'voice').then(time => {
    time.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
  
  setInterval(() => {
      time.setName(`${message.guild.memberCount} : Member Count  `);
 },1000);
    });

 message.guild.createChannel(`"Loading ...` , 'voice').then(time => {
  time.overwritePermissions(message.guild.id, {
    CONNECT: false,
    SPEAK: false
  });
setInterval(() => {
    time.setName(`${message.guild.members.filter(m =>!m.user.bot).size} :  User Count  `);
},1500);
});

message.guild.createChannel(`"Loading ...` , 'voice').then(time => {
  time.overwritePermissions(message.guild.id, {
    CONNECT: false,
    SPEAK: false
  });
setInterval(() => {
    time.setName(`${message.guild.members.filter(m=>m.user.bot).size} :  Bot Count `);
},2000);
});
}
});


client.on('message', function(message) {
    if(!message.channel.guild) return;
    if(message.content === '!color') {
    if(message.member.hasPermission('MANAGE_ROLES')) {
    setInterval(function(){})
    message.channel.send('Loading ... Cretar Color | ▶️')
    }else{
    message.channel.send('You Not Administartor |❌')
    }
    }
    });
    
    client.on('message', message=>{
    if (message.content === '!color'){
    if(!message.channel.guild) return;
    if (message.member.hasPermission('MANAGE_ROLES')){
    setInterval(function(){})
    let count = 0;
    let ecount = 0;
    for(let x = 1; x < 50; x++){
    message.guild.createRole({name:x,
    color: 'RANDOM'})
    }
    }
    }
    });


client.on('message', message => {
    if (message.content === "!croles") {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_ROLES`` **Premission**`);

                     message.guild.createRole({ name: "Owner", color: "#ff0000", permissions: [] })
                     message.guild.createRole({ name: "Co-Owner", color: "#ff0000", permissions: [] })
                     message.guild.createRole({ name: "Leader", color: "#اللون", permissions: [] })
                     message.guild.createRole({ name: "CoLeader", color: "#اللون", permissions: [] })
                     message.guild.createRole({ name: "King", color: "#اللون", permissions: [] })
                     message.guild.createRole({ name: "Queen", color: "#اللون", permissions: [] })
                     message.guild.createRole({ name: "VIP+", color: "#اللون", permissions: [] })
                     message.guild.createRole({ name: "VIP", color: "#اللون", permissions: [] })
                     message.guild.createRole({ name: "Active", color: "#اللون", permissions: [] })
                     message.guild.createRole({ name: "Member", color: "#اللون", permissions: [] })
        

message.channel.sendMessage('**Wait a bit until the row is finished! **')
}
});


client.on("message", message => {
                      if(message.content === '!رابط' ) {
						  message.channel.send('**تم الأرسال في الخاص .**').then(msg => {
							  msg.edit('تم أرسال الرابط بالخاص عزيزي.')
						  
						  });
                        message.channel.createInvite({
                        thing: true,
                        maxUses: 10,
                        maxAge: 86400
                        }).then(invite =>
       
							   message.author.sendMessage(invite.url)
							  
                             )						 
					}});


client.on("message", message => {
                      if(message.content === '!link' ) {
						  message.channel.send('**Look To private**').then(msg => {
							  msg.edit('Go to Private Now . ')
						  
						  });
                        message.channel.createInvite({
                        thing: true,
                        maxUses: 10,
                        maxAge: 86400
                        }).then(invite =>
       
							   message.author.sendMessage(invite.url)
							  
                             )						 
					}});


client.on('message', function(msg) {
        let verifLevels = ["None", "Low", "Medium", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];
        let region = {
            "brazil": "Brazil",
            "eu-central": "Central Europe",
            "singapore": "Singapore",
            "Russia": "Russia",
            "us-central": "U.S. Central",
            "sydney": "Sydney",
            "us-east": "U.S. East",
            "us-south": "U.S. South",
            "us-west": "U.S. West",
            "eu-west": "Western Europe",
            "vip-us-east": "VIP U.S. East",
            "london": "London",
            "amsterdam": "Amsterdam",
            "hongkong": "Hong Kong"
        };
      
          if (msg.content.startsWith(prefix + 'server')) {
          if (!msg.guild) return message.reply('**Only Servers | :x:**')
      console.log(`${msg.author.username} Has Ran Server Command`)
          let embed = new Discord.RichEmbed()
          .setColor('RANDOM')
          .setThumbnail(msg.guild.iconURL)
          .setTitle(`${msg.guild.name}`)
          .addField('**[❖] Server Name | اسم السيرفر**',`[** __${msg.guild.name}__ **]`,true)
          .addField('**[❖] OwnerShip | مؤسس السيرفر**',`**${msg.guild.owner}**`,true)
          .addField('**[❖] Server ID | معرف السيرفر**',`**${msg.guild.id}**`,true)
          .addField('**[❖] Members Count | عدد الاعضاء**',`[** __${msg.guild.memberCount}__ **]`,true)
          .addField('**[❖] Verification Level | مستوي الحمايه**',`[** __${verifLevels[msg.guild.verificationLevel]}__** ]`,true)
          .addField('**[❖] Region | البلد**',`[** __${region[msg.guild.region]}__** ]`,true)
          .addField('**[❖] Text Channels | رومات كتابيه**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
          .addField('**[❖] Voice Channels | رومات صوتيه**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
          .addField('**[❖] Created At | صنع في**',msg.guild.createdAt.toLocaleString())
          msg.channel.send({embed:embed});
        }
      });


client.on("message",async message => {
if(message.content === '!تصويت'){//الامر
if(!message.member.roles.some(r=>["manager","vote"].includes(r.name)) ) return; // الرتب الي يمديها تستخدم الامر يمديك تخليها ب برمشن
 
    let go1; //انشاء متغير go1
      let filter = m => m.author.id === message.author.id // (تعريف الفلتر (الشخص الي يمديه يرد على رسائل البوت يكون بس الكاتب
     
     
 
      await message.channel.send("** اكتب اسم الروم المراد التصويت فيه بدون منشن ... ✏**").then(go => {
      message.channel.awaitMessages(filter, { time: 90000, max: 1             // شروط الانتضار من بينها الفلتر يكون بس الكاتب الي يرد على البوت                        
})
     .then(go3 => { // اذا تحققة الشروط الي فوق
       go1 = go3.first().content; // يعطي قيمة لمتغير go1
        go3.first().delete(); // يحذف الرسالة
     
let go2; // انشاء متغير go2
       
 go.edit("**اكتب الشيء المراد التصويت عليه ... ✏ **").then(go => {
  message.channel.awaitMessages(filter, { time: 90000, max: 1 }) // شروط الانتضار من بينها الفلتر الي شرحناه فوق و وقت الانتضار
 
     .then(go3 => { // اذا تحقق الشروطة الي فوق
       go2 = go3.first().content; // يعطي قيمة للمتغير go2
        go3.first().delete(); // يحذف الرسالة
  let room = message.guild.channels.find("name",go1)
  if(!room) return message.reply("**الروم غير موجود او انك قمت بمنشنة الروم**") // اذا ماكان فيه الروم الي كتبه الشخص اول يقوله مافي
 go.edit(" 🛡 **تم الارسال.**").then(go => { //  يعدل الرسالة ويقول تم الارسال ويرسل الرسالة للروم المحدد
 let embed2 = new Discord.RichEmbed()
          .setColor("#79cbfa")
          .setDescription(`
          Yes ! 1⃣
           No ! 2⃣`)
          .setTimestamp()
  room.send(`${go2}`)
  room.send(embed2).then(go4 => {
  go4.react('2⃣')
  go4.react('1⃣')
  })
  })
})
  })
})
  })
           
     
 
     
 
     
           
}
});


client.on("message",async message => {
if(message.content === '!vote'){//الامر
if(!message.member.roles.some(r=>["manager","vote"].includes(r.name)) ) return; // الرتب الي يمديها تستخدم الامر يمديك تخليها ب برمشن
 
    let go1; //انشاء متغير go1
      let filter = m => m.author.id === message.author.id // (تعريف الفلتر (الشخص الي يمديه يرد على رسائل البوت يكون بس الكاتب
     
     
 
      await message.channel.send("** Set Name Channel Not Mention... ✏**").then(go => {
      message.channel.awaitMessages(filter, { time: 90000, max: 1             // شروط الانتضار من بينها الفلتر يكون بس الكاتب الي يرد على البوت                        
})
     .then(go3 => { // اذا تحققة الشروط الي فوق
       go1 = go3.first().content; // يعطي قيمة لمتغير go1
        go3.first().delete(); // يحذف الرسالة
     
let go2; // انشاء متغير go2
       
 go.edit("**Reason for voting ... ✏ **").then(go => {
  message.channel.awaitMessages(filter, { time: 90000, max: 1 }) // شروط الانتضار من بينها الفلتر الي شرحناه فوق و وقت الانتضار
 
     .then(go3 => { // اذا تحقق الشروطة الي فوق
       go2 = go3.first().content; // يعطي قيمة للمتغير go2
        go3.first().delete(); // يحذف الرسالة
  let room = message.guild.channels.find("name",go1)
  if(!room) return message.reply("**الروم غير موجود او انك قمت بمنشنة الروم**") // اذا ماكان فيه الروم الي كتبه الشخص اول يقوله مافي
 go.edit(" 🛡 **Done.**").then(go => { //  يعدل الرسالة ويقول تم الارسال ويرسل الرسالة للروم المحدد
 let embed2 = new Discord.RichEmbed()
          .setColor("#79cbfa")
          .setDescription(`
          Yes ! 1⃣
           No ! 2⃣`)
          .setTimestamp()
  room.send(`${go2}`)
  room.send(embed2).then(go4 => {
  go4.react('2⃣')
  go4.react('1⃣')
  })
  })
})
  })
})
  })
           
     
 
     
 
     
           
}
});


client.on('message', message => {
			var mintionchannel = message.content.split(' ').slice(1);
      if(message.content.startsWith(prefix + 'channel')) {
       
         if(!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS")) {
          message.channel.send("You Don't Have A Permissions `MANAGE_CHANNELS` ");
        } else {
			     var room1 = message.guild.channels.find('name', `${mintionchannel}`);
          if(!room1) {
           message.channel.send( "**Usage :** ```" + "  " + `${prefix}` + 'channel'+ " " + 'ChannelName```' );
            } else {
             
             if (room1.type = "text"){
              var filtertitle = "Channel Last Message : ";
              var filtermessage =  room1.lastMessage; 
             }if (room1.type = "voice"){
              var filtertitle = "Channel Timestamp";
              var filtermessage = room1.createdTimestamp;
             }
              let embed = new Discord.RichEmbed()
              .addField(' Chanel Name : ', room1.name, true)
              .addField(' Channel ID : ',room1.id, true)
              .addField(' Channel CreateAt  : ', room1.createdAt,true)
              .addField(`${filtertitle}`, filtermessage , true)
              .addField(' Channel Type : ', room1.type, true)
               message.channel.sendEmbed(embed);
		    	}
            
          }
     }
    });


client.on("message", message => {
  if (message.author.bot) return;
  
  let command = message.content.split(" ")[0];
  
  if (command === "!mute") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** You Don't Have Manage Roles 'Manage Roles' **").catch(console.error);
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'mute-log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** Not Role > 'Muted' **").catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('** Please Mention **').catch(console.error);
  
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('الأستعمال:', 'اسكت/احكي')
    .addField('تم ميوت:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
   
   if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** Manage Roles **').catch(console.error);
 
  if (message.guild.member(user).roles.has(muteRole.id)) {
     return message.reply("** Done   **").catch(console.error);
  } else {
    message.guild.member(user).addRole(muteRole).then(() => {
      return message.reply("** Done Muted .. **").catch(console.error);
    });
  }

};

});


client.on("message", message => {
  if (message.author.bot) return;
  
  let command = message.content.split(" ")[0];
  
  if (command === "!unmute") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** You Don't Have Manage Roles 'Manage Roles' **").catch(console.error);
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'mute-log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** Not Role > 'Muted' **").catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('** Mention @ **').catch(console.error);
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('الأستعمال:', 'اسكت/احكي')
    .addField('تم فك الميوت عن:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** i.m Not Have Manage Roles **').catch(console.error);

  if (message.guild.member(user).removeRole(muteRole.id)) {
      return message.reply("** Done Removal Muted  .. **").catch(console.error);
  } else {
    message.guild.member(user).removeRole(muteRole).then(() => {
      return message.reply("** Romve Muted .. **").catch(console.error);
    });
  }

};

});


client.on('message', message => {                      
    if(!message.channel.guild) return;
       if(message.content.startsWith(prefix + 'activation')) {
        let modlog = client.channels.find('name', 'activation'); /// m غير اسم الروم اذا تبي
       if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
	   var x = ['5587' ,' 9978' , '3785' , '7734' , '9864' , '7681' , '3758' , '7834' , '3489' , '1382' , '7389' , '8762' , '0889' , '0388' , '3316' , '0976' , '8603' , '1842' , '4565' , '9524' , '9524' , '0964' , '5930' , '5678' , '9567' , '6099' , '7058' , '0001' , '1324' , '9834' , '7668' , '0378' , '7055' , '9733' , '9876' , '9846' , '9685' , '8574' , '8975' , '9845' , '9862' , '0069' , '0807' , '0673' , '0813' , '1235' , '6879'];
var x2 = ['5587' ,' 9978' , '3785' , '7734' , '9864' , '7681' , '3758' , '7834' , '3489' , '1382' , '7389' , '8762' , '0889' , '0388' , '3316' , '0976' , '8603' , '1842' , '4565' , '9524' , '9524' , '0964' , '5930' , '5678' , '9567' , '6099' , '7058' , '0001' , '1324' , '9834' , '7668' , '0378' , '7055' , '9733' , '9876' , '9846' , '9685' , '8574' , '8975' , '9845' , '9862' , '0069' , '0807' , '0673' , '0813' , '1235' , '6879'];
        var x3 = Math.floor(Math.random()*x.length)
       message.channel.sendMessage(`\n \`${x[x3]}\` ** : Type the following number to activate **`).then(msg => {
          var r = message.channel.awaitMessages(msg => msg.content == x2[x3], { maxMatches : 1, time : 60000, errors : ['time'] })
               r.catch(() => {
            message.delete()
            r.delete()
            msg.delete()
        })
  r.then(s=> {

                                   message.member.addRole(message.guild.roles.find("discord", "mtasa")); /// الربته التجي للشخص
       
                            msg.delete();
                                   message.channel.send(`**Done Activation.**`).then(m => m.delete(1000));
     
                                   })
       })
                                   }
                                   });


client.on('message', function(msg) {
  if(msg.content.startsWith ('!voic')) {
     	        let foxembed = new Discord.RichEmbed()
				      .setColor('RANDOM') /// By KillerFox
    .setDescription(`Voice Online : [ ${msg.guild.members.filter(m => m.voiceChannel).size} ]`)
	msg.channel.send(foxembed)
  }
});
 

client.on('message', message => { 
  if(message.content.startsWith(prefix + "warn")) {
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply(`**You Don't Have Permissions**`);
     let user = message.mentions.users.first();
         if(!user) return message.reply('**Mention The User Please !**').then(message => message.delete(5000);;
     let reason = message.content.split(' ').slice(2);

         if(message.guild.member(user).hasPermission("ADMINISTRATOR")) return message.reply(`**You Can't Warn This User**`).then(message => message.delete(5000));;
     let embed = new Discord.RichEmbed()
     .setTitle(':warning: **You Were warned!')
     .addField(reason)
     .setFooter(`${message.guild.iconURL} ${message.guild.name} | ${message.createdAt}`);
     user.sendEmbed(embed)
     message.channel.send(`This User Has Ben Warned!`);

  }

});


client.login(process.env.BOT_TOKEN);
