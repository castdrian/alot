import { CommandInteraction, MessageEmbed } from 'discord.js';
import { Command } from 'src/@types/Util.js';
import Util from '../../Util.js';

export async function run(interaction: CommandInteraction): Promise<void> {
    const start = process.hrtime.bigint();

    Util.fetchJSON('https://discord.com/api/v9/gateway').then(() => {
        const took = (process.hrtime.bigint() - start) / BigInt('1000000');

        const embed = new MessageEmbed()
        .setTitle('alot of ping:')
        .setDescription(`WebSocket ping: ${process.alot.ws.ping.toFixed(2)} ms\nREST ping: ${took} ms`)
        .setColor('#997a63')
        .setThumbnail((process.alot.user?.displayAvatarURL() as string))
        .setFooter('alot of alots | © adrifcastr', process.alot.user?.displayAvatarURL());
        if (interaction.guildID !== '835430397033578497') embed.addField('Want more?', 'There\'s <:alot:835434140496429057> over at [Alot of Emojis](https://discord.gg/8KRmyaMewe)!');

        return interaction.editReply(embed);
    }, failed => {
        console.log(failed);
        return interaction.editReply('Failed to measure ping!');
    });
}

export const info: Command['info'] = {
    roles: [],
    user_perms: [],
    bot_perms: []
};

export const data: Command['data'] = {
    name: 'ping',
    description: 'ping alot'
};