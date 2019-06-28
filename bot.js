const Discord = require("discord.js");

const client = new Discord.Client();

var prefix = "a!";

client.on('ready', () => {

   console.log(`----------------`);

      console.log(`Desert Bot- Script By : i1Suhaib`);

        console.log(`----------------`);

      console.log(`ON ${client.guilds.size} Servers '     Script By : i1Suhaib ' `);

    console.log(`----------------`);

  console.log(`Logged in as ${client.user.tag}!`);

client.user.setGame(`a! , Akon`,"http://twitch.tv/S-F")

client.user.setStatus("dnd")

});


client.on('message', function(msg) {
    if(msg.content.startsWith (prefix  + 'a!server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField(':globe_with_meridians:** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField(':medal:** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField(':red_circle:**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField(':large_blue_circle:**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField(':pencil:**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField(':microphone:**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField(':crown:**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField(':id:**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
      .addField(':date:**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });


client.login(process.env.BOT_TOKEN);
