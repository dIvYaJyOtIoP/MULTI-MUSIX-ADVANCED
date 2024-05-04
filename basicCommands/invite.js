const { EmbedBuilder } = require('discord.js');
const db = require("../mongodb");
module.exports = {
    name: 'invite',
    description: 'invite me to server',
    execute(message, args) {
        const supportServerLink = 'https://dsc.gg/kalabott';
        const embed = new EmbedBuilder()
            .setColor('#FFFFFF')
            .setTitle('Invite Me')
            .setDescription(`[Click here to invite me](${supportServerLink})`)
            .setThumbnail(`https://images-ext-1.discordapp.net/external/rJT8V1XxxrF27NkqhADaBNs_yJOz9NhU5wQoV_O916I/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/1219975767056715797/a4260652b63751e3aac1d415962842c4.webp?format=webp&width=570&height=570`)
            .setTimestamp();


        message.reply({ embeds: [embed] });
    },
};


/*

  ________.__                        _____.___.___________
 /  _____/|  | _____    ____  ____   \__  |   |\__    ___/
/   \  ___|  | \__  \ _/ ___\/ __ \   /   |   |  |    |   
\    \_\  \  |__/ __ \\  \__\  ___/   \____   |  |    |   
 \______  /____(____  /\___  >___  >  / ______|  |____|   
        \/          \/     \/    \/   \/                  

╔════════════════════════════════════════════════════════════════════════╗
║                                                                        ║
║  ## Created by GlaceYT!                                                ║
║  ## Feel free to utilize any portion of the code                       ║
║  ## DISCORD :  https://discord.com/invite/xQF9f9yUEM                   ║
║  ## YouTube : https://www.youtube.com/@GlaceYt                         ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝


*/
