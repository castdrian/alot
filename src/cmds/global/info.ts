import { CommandInteraction, MessageEmbed, Message } from 'discord.js';
import { Command } from 'src/@types/Util';
import { default as si } from 'systeminformation';
import typecript from 'typescript';

export async function run(interaction: CommandInteraction): Promise<void | Message | null> {
    const os = await si.osInfo();
    const cpu = await si.cpu();
    const mem = await si.mem();

    const embed = new MessageEmbed()
    .setTitle('alot of info:')
    .setDescription(`alot of alots \`v1\`\n\n<:alot:835434140496429057> of <:GitHub:835870471517765642>[source code](https://github.com/adrifcastr/alot)\n<:alot:835434140496429057> of :desktop:OS\n\`\`\`\n${os.distro} ${os.release}\n${cpu.manufacturer} ${cpu.brand} @${cpu.speed} GHz\nRAM: ${(mem.used / 1e+6).toFixed(2)} MB / ${(mem.total / 1e+6).toFixed(2)} MB\n\`\`\`\n<:alot:835434140496429057> of <:djsmaster:818953388305809430>[discord.js](https://github.com/discordjs/discord.js)[#feat-interactions](https://github.com/vaporox/discord.js/tree/feat-interactions)\n<:alot:835434140496429057> of <:NodeJS:813910702631682068>node.js \`${process.version}\`\n<:alot:835434140496429057> of <:TypeScript:813907670176104478>TypeScript \`v${typecript.version}\`\n<:alot:835434140496429057> of :email:contact: \`adrifcastr@gmail.com\` / [Alot of Emojis](https://discord.gg/8KRmyaMewe)\n<:alot:835434140496429057> of :heart:`)
    .setColor('#997a63')
    .setThumbnail((process.alot.user?.displayAvatarURL() as string))
    .setFooter('alot of alots | © adrifcastr', process.alot.user?.displayAvatarURL());
    if (interaction.guildID !== '835430397033578497') embed.addField('Want more?', 'There\'s <:alot:835434140496429057> over at [Alot of Emojis](https://discord.gg/8KRmyaMewe)!');
    
    return interaction.editReply(embed);
}

export const info: Command['info'] = {
    roles: [],
    user_perms: [],
    bot_perms: []
};

export const data: Command['data'] = {
    name: 'info',
    description: 'alot of info'
};