const SlashCommand = require("../../../lib/SlashCommand");
const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

const command = new SlashCommand()
  .setName("ocho")
  .setDescription("(AKA: blazing8s) A card game **(NOTE: <a:animatedboost:947794922185064478> lvl 1 required)**")
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
        target_application_id: "832025144389533716",
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
          name: "Blazing 8s",
          iconURL: "https://cdn.discordapp.com/app-icons/879864070101172255/0214576f3c33e4026a72f248c11d2292.webp?size=40&keep_aspect_ratio=false",
        })
        //.setAuthor(`Poker Night`, "https://darrennathanael.com/cdn/poker.png")
        .setColor(client.config.embedColor)
        .setDescription(`Using **Blazing 8s** you can play a Blazing 8s game with your friends in a Voice Channel. Click *Join Blazing 8s* to join in! **(NOTE: <a:animatedboost:947794922185064478> lvl 1 required)**
      
      __**[Join Blazing 8s](https://discord.com/invite/${invite.code})**__

      ⚠ **Note:** This only works in Desktop`);
      return interaction.reply({ embeds: [Embed] });
    });
  });

module.exports = command;
