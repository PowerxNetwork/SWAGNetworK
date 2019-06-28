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

client.user.setGame(`! , Akon`,"http://twitch.tv/S-F")

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
    if (message.author.bot) return;
     if (message.content === prefix + "!help") {
		 message.channel.send('**تم ارسالك في الخاص**');
            
	
		 


 message.author.sendMessage(`
 **
__~~The King Bot~~__ By: Peery#0609
╱╭╮╭╮╱╱╱╱╭╮╭━╮╱╱╱╱╱╱╭━━╮╱╱╱╭╮
╭╯╰┫┃╱╱╱╱┃┃┃╭╯╱╱╱╱╱╱┃╭╮┃╱╱╭╯╰╮
╰╮╭┫╰━┳━━┫╰╯╯╭┳━╮╭━━┫╰╯╰┳━┻╮╭╯
╱┃┃┃╭╮┃┃━┫╭╮┃┣┫╭╮┫╭╮┃╭━╮┃╭╮┃┃
╱┃╰┫┃┃┃┃━┫┃┃╰┫┃┃┃┃╰╯┃╰━╯┃╰╯┃╰╮
╱╰━┻╯╰┻━━┻╯╰━┻┻╯╰┻━╮┣━━━┻━━┻━
 ❖  *kick <mention > ➾ لطرد عضو
 
 ❖ *mute < mention > ➾ اسكات عضو 

 ❖ *clear  ➾ لتنضيف المحادثة (fixing)

 ❖ *cv <name> ➾ صنع روم صوتية

 ❖ *ct <name> ➾ صنع روم كتابية

 ❖ *unmute <mention> ➾ فك الاسكات من العضو
  
 ❖ *bc <message> ➾ لارسال رسالة لجميع اعضاء السيرفر


╔[❖════════════❖]╗
                    اوامر عامة
╚[❖════════════❖]╝

❖ *roll <number> ➾ قرعة

❖ *member ➾ معلومات الاعضاء

❖ *avatar ➾ شعار حسابك

❖ *ser-av ➾ شعار السيرفر

❖ *uptime ➾ مدة التشغيل

❖ *id ➾ اي دي

❖ *date ➾ التاريخ

❖ *invs ➾ رابط دخول سيرفرك

❖ *own ➾ مسؤول البوت

❖ *help-ar ➾ المساعدة في العربي

❖ *help-en ➾ المساعدة في الانجليزيلة

❖ *ping ➾ عرض سرعه اتصال البوت

❖ *bot ➾ معلومات البوت

❖ *server ➾ معلومات السيرفر

❖ *invite ➾ رابط دعوة البوت

╔[❖════════════❖]╗
                      الترحيب
╚[❖════════════❖]╝

لتفعيل خاصية الترحيب قم بعمل قناة اسمها "wlc"

==================================================================

Server support: https://discord.gg/twdHNJT

bot invite link: https://discordapp.com/oauth2/authorize?client_id=388700863893602304&scope=bot&permissions=0

==================================================================


`);

    }
});



client.login(process.env.BOT_TOKEN);
