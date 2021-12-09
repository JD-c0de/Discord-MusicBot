const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "fishington",
    description: "nothing special, just fish, sell and upgrade",
    usage: "",
    permissions: {
        channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
        member: [],
    },
    aliases: ["fish"],
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

        let Invite = await message.member.voice.channel.activityInvite("814288819477020702")//Made using discordjs-activity package
        let embed = new MessageEmbed()
        .setAuthor("Fishington.io", "https://cdn.discordapp.com/app-icons/814288819477020702/0cafdebe76abfd7d8d9b015c2060512e.webp?size=40&keep_aspect_ratio=false")
        .setColor("#084bbe")
        .setDescription(`
Using **Fishington.io** you can play a fishington game with your friends in a Voice Channel. Click *Join Fishington.io* to join in!

__**[Join Fishington.io](https://discord.com/invite/${Invite.code})**__

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

            let Invite = await member.voice.channel.activityInvite("814288819477020702")//Made using discordjs-activity package
            let embed = new MessageEmbed()
            .setAuthor("Fishington.io", "https://cdn.discordapp.com/app-icons/814288819477020702/0cafdebe76abfd7d8d9b015c2060512e.webp?size=40&keep_aspect_ratio=false")
            .setColor("#084bbe")
            .setDescription(`
Using **Fishington.io** you can play a fishington game with your friends in a Voice Channel. Click *Join Fishington.io* to join in!

__**[Join Fishington.io](https://discord.com/invite/${Invite.code})**__

⚠ **Note:** This only works in Desktop
`)
            interaction.send(embed.toJSON())
        },
    },
};
