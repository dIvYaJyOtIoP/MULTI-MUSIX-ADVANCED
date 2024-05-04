const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');
const { ButtonStyle } = require('discord.js');
const db = require("../mongodb");
module.exports = {
  name: 'help',
  aliases: ['hlp', 'h'],
  description: 'Shows a list of available commands',
  execute(message, args) {
    const botUser = message.client.user;
    const botPing = Date.now() - message.createdTimestamp;
    const serverCount = message.client.guilds.cache.size;
    const embed = new EmbedBuilder()
      .setColor('#2b71ec')     
      .addFields(
        // Basic commands category
        {
          name: '<:globe:1236228342009565236> GENERAL',
          value: '`avatar`, `owner`, `support`, `invite`, `userinfo`',
        },
        // Music commands category
        {
          name: '<:Music:1236227837284061185> MUSIC',
          value: '`play`, `stop`, `history`,`volume`,`pause`,`resume`,`247`',
        },
        //fun category
        {
          name: ':frame_photo: IMAGE',
          value: '`cat`, `dog` , `blush`, `cuddle`, `dance`, `slap`, `bonk`, `bully`, `hug`, `confused`, `kiss`, `pat`, `happy`, `smile`, `yes`, `highfive`, `wink`, `wave`, `thinking`, `sad`, `cry`, `stare`, `bored`, `scream`, `nervous`, `kill`.',
        },
        //anime category
        // Utility commands category
        {
          name: '<:zzutility:1236227946478305290> UTILITY',
          value: '`kick`, `ban`, `serverinfo`,`userinfo`, `clear`',
        }
      )
      .setThumbnail(botUser.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
    const button1 = new ButtonBuilder()
      .setLabel('Invite Me')
      .setURL('https://dsc.gg/kalabott')
      .setStyle(ButtonStyle.Link);

    const button2 = new ButtonBuilder()
      .setLabel('Support Server')
      .setURL('https://discord.gg/Tsuzz2zHXe')
      .setStyle(ButtonStyle.Link);

    const button3 = new ButtonBuilder()
      .setLabel('Vote Me')
      .setURL('https://top.gg/bot/1219975767056715797/vote')
      .setStyle(ButtonStyle.Link);
      
    const row = new ActionRowBuilder()
      .addComponents(button1, button2, button3);
    
    message.reply({ embeds: [embed], components: [row] });
  },
};
