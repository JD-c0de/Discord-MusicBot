const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "chess",
    description: "Just another game of chess",
    usage: "",
    permissions: {
        channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
        member: [],
    },
    aliases: [],
    /**
     *
     * @param {import("../structures/DiscordMusicBot")} client
     * @param {require("discord.js").Message} message
     * @param {string[]} args
     * @param {*} param3
     */
    run: async (client, message, args, { GuildDB }) => {
        if (!message.member.voice.channel) return client.sendTime(message.channel, "❌ | **You must be in a voice channel to play something!**");
        if(!message.member.voice.channel.permissionsFor(message.guild.me).has("CREATE_INSTANT_INVITE"))return client.sendTime(message.channel, "❌ | **Bot doesn't have Create Invite Permission**");

        let Invite = await message.member.voice.channel.activityInvite("832012774040141894")//Made using discordjs-activity package
        let embed = new MessageEmbed()
        .setAuthor("Chess in the Park", "https://cdn.discordapp.com/app-assets/832012774040141894/853007059326992414.png")
        .setColor("#938fe7")
        .setDescription(`
Using **Chess in the Park** you can play a chess game with your friends in a Voice Channel. Click *Join Chess in the Park* to join in!

__**[Join Chess in the Park](https://discord.com/invite/${Invite.code})**__

⚠ **Note:** This only works in Desktop
`)
        message.channel.send(embed)
    },
    SlashCommand: {
        options: [
        ],
    /**
     *
     * @param {import("../structures/DiscordMusicBot")} client
     * @param {import("discord.js").Message} message
     * @param {string[]} args
     * @param {*} param3
     */
        run: async (client, interaction, args, { GuildDB }) => {
            const guild = client.guilds.cache.get(interaction.guild_id);
            const member = guild.members.cache.get(interaction.member.user.id);

            if (!member.voice.channel) return client.sendTime(interaction, "❌ | You must be in a voice channel to use this command.");
            if(!member.voice.channel.permissionsFor(guild.me).has("CREATE_INSTANT_INVITE"))return client.sendTime(interaction, "❌ | **Bot doesn't have Create Invite Permission**");

            let Invite = await member.voice.channel.activityInvite("832012774040141894")//Made using discordjs-activity package
            let embed = new MessageEmbed()
            .setAuthor("Chess in the Park", "https://cdn.discordapp.com/app-assets/832012774040141894/853007059326992414.png")
            .setColor("#938fe7")
            .setDescription(`
Using **Chess in the Park** you can play a chess game with your friends in a Voice Channel. Click *Join Chess in the Park* to join in!

__**[Join Chess in the Park](https://discord.com/invite/${Invite.code})**__

⚠ **Note:** This only works in Desktop
`)
            interaction.send(embed.toJSON())
        },
    },
};
