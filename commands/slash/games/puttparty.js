const SlashCommand = require("../../../lib/SlashCommand");
const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

const command = new SlashCommand()
  .setName("puttparty")
  .setDescription("Golf game")
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
        target_application_id: "945737671223947305",
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
          name: "Putt Party",
          iconURL: "https://cdn.discordapp.com/emojis/814288819477020702.png?v=1",
        })
        //.setAuthor(`Poker Night`, "https://darrennathanael.com/cdn/poker.png")
        .setColor(client.config.embedColor)
        .setDescription(`Using **Putt Party** you can play golf with your friends in a Voice Channel. Click *Join Putt Party* to join in!
      
      __**[Join Putt Party](https://discord.com/invite/${invite.code})**__

      ⚠ **Note:** This only works in Desktop`);
      return interaction.reply({ embeds: [Embed] });
    });
  });

module.exports = command;
