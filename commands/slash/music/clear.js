const SlashCommand = require("../../../lib/SlashCommand");
const { MessageEmbed } = require("discord.js");

const command = new SlashCommand()
  .setName("clear")
  .setDescription("Clear all tracks from queue")
  .setRun(async (client, interaction, options) => {
    let player = client.manager.players.get(interaction.guild.id);
    if (!player) {
      const queueEmbed = new MessageEmbed()
        .setColor(client.config.embedColor)
        .setDescription("❌ | **Nothing is playing right now...**");
      return interaction.reply({ embeds: [queueEmbed], ephemeral: true });
    }

    if (!interaction.member.voice.channel) {
      const joinEmbed = new MessageEmbed()
        .setColor(client.config.embedColor)
        .setDescription(
          "❌ | **You must be in a voice channel to use this command!**"
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
        .setDescription(
          "❌ | **You must be in the same voice channel as me to use this command!**"
        );
      return interaction.reply({ embeds: [sameEmbed], ephemeral: true });
    }

    if (!player.queue || !player.queue.length || player.queue.length === 0) {
      let cembed = new MessageEmbed()
        .setColor(client.config.embedColor)
        .setDescription("❌ | **Invalid, Not enough track to be cleared.**");

      return interaction.reply({ embeds: [cembed], ephemeral: true });
    }

    player.queue.clear();

    let clearembed = new MessageEmbed()
      .setColor(client.config.embedColor)
      .setDescription(`✅ | **Cleared the queue!**`);

    return interaction.reply({ embeds: [clearembed] });
  });

module.exports = command;
