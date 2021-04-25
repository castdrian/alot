import Util from '../../Util.js';
import { Guild, Client, MessageEmbed } from 'discord.js';

export default {
    name: 'guildCreate',
    async run(guild: Guild, gideon: Client): Promise<void> {
        await guild.members.fetch();
        const owner = await guild.fetchOwner();

        const embed = new MessageEmbed()
        .setTitle('Joined a new guild:')
        .setDescription(`Guild: \`${guild.name}\` (${guild.id})\nMembers: \`${guild.members.cache.filter(x => !x.user.bot).size}\` Bots: \`${guild.members.cache.filter(x => x.user.bot).size}\`\nCreated at: \`${guild.createdAt.toDateString()}\`\nOwner: \`${owner.user.tag ?? 'Unknown'}\` (${guild.ownerID})`)
        .setThumbnail((guild.iconURL() as string))
        .setColor('#997a63')
        .setFooter('alot of alots | © adrifcastr', process.alot.user?.displayAvatarURL());

        Util.log(embed);
    }
};