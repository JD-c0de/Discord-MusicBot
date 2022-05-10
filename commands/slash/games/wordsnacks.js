const SlashCommand = require("../../../lib/SlashCommand");
const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

const command = new SlashCommand()
  .setName("wordsnacks")
  .setDescription("How many words can you whip up with only a handful of letters?")
  .setRun(async (client, interaction, options) => {
    if (!interaction.member.voice.channel) {
      const joinEmbed = new MessageEmbed()
        .setColor(client.config.embedColor)
        .setDescription(
          "You need to join voice channel first before you can use this command"
        );
      return interaction.reply({ embeds: [joinEmbed], ephemeral: true });
    }

    if (
      interaction.guild.me.voice.channel &&
      !interaction.guild.me.voice.channel.equals(
        interaction.member.voice.channel
      )
    ) {
      const sameEmbed = new MessageEmbed()
        .setColor(client.config.embedColor)
        .setDescription("You must be in the same voice channel as me.");
      return interaction.reply({ embeds: [sameEmbed], ephemeral: true });
    }
    let channel = await client.getChannel(client, interaction);

    fetch(`https://discord.com/api/v9/channels/${channel.id}/invites`, {
      method: "POST",
      body: JSON.stringify({
        max_age: 86400,
        max_uses: 0,
        target_application_id: "879863976006127627",
        target_type: 2,
        temporary: false,
        validate: null,
      }),
      headers: {
        Authorization: `Bot ${client.config.token}`,
        "Content-Type": "application/json",
      },
    }).then(async (res) => {
      if (res.status !== 200) {
        console.log(res.status);
        return interaction.reply(
          "There was an error creating the invite. Please try again later."
        );
      }
      const invite = await res.json();
      const Embed = new MessageEmbed()
        .setAuthor({
          name: "Word Snacks",
          iconURL: "https://cdn.discordapp.com/app-assets/879863976006127627/891070984474468392.png",
        })
        //.setAuthor(`Poker Night`, "https://darrennathanael.com/cdn/poker.png")
        .setColor(client.config.embedColor)
        .setDescription(`Using **Word Snacks** you can play a Word Snacks game with your friends in a Voice Channel. Click *Join Word Snacks* to join in!
      
      __**[Join Word Snacks](https://discord.com/invite/${invite.code})**__

      ⚠ **Note:** This only works in Desktop`);
      return interaction.reply({ embeds: [Embed] });
    });
  });

module.exports = command;
