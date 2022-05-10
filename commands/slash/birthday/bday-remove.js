const SlashCommand = require("../../../lib/SlashCommand");
const { MessageEmbed } = require("discord.js");
const Database = require("@replit/database");

const command = new SlashCommand()
  .setName("birthday-remove")
  .setDescription("Remove your birthday")
  .setRun(async (client, interaction) => {

    let server = interaction.guild.id;
    let user = interaction.user;
    let userMention = "<@" + user + ">";
    let userServer = userMention + server;
    let b_day = new Database();
    await b_day.delete(userServer);

      const Embed = new MessageEmbed()
        .setAuthor({
          name: "Your birthday has been removed",
        })
        .setColor(client.config.embedColor)
        .setDescription(`:white_check_mark: | ${userMention}'s birthday removed`);
      return interaction.reply({ embeds: [Embed] });


  });

module.exports = command;
