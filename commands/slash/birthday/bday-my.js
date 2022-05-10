const SlashCommand = require("../../../lib/SlashCommand");
const { MessageEmbed } = require("discord.js");
const Database = require("@replit/database");

const command = new SlashCommand()
  .setName("birthday-my")
  .setDescription("See when your birthday is")
  .setRun(async (client, interaction) => {

    let server = interaction.guild.id;
    let user = interaction.user;
    let userMention = "<@" + user + ">";
    let userServer = userMention + server;
    let b_day = new Database();
    let myBday = await b_day.get(userServer);
    //console.log(myBday);
    let days = [];
    let months = [];
    let timeZones = [];

    if (myBday == null || myBday == undefined) {
      //console.log(await b_day.list());
      const invalidEmbed = new MessageEmbed()
        .setColor(client.config.embedColor)
        .setDescription(
          "❌ | ** " + userMention + "'s birthday hasn't been set yet **"
        );
      return interaction.reply({ embeds: [invalidEmbed] });
    } else {
      for (const [key, val] of Object.entries(myBday)) {
        if (key == 'day') {
          days.push(val);
        }
        if (key == 'month') {
          months.push(val);
        }
        if (key == 'timezone') {
          timeZones.push(val);
        }
      }

      const Embed = new MessageEmbed()
        .setAuthor({
          name: "Your birthday has been set",
        })
        .setColor(client.config.embedColor)
        .setDescription(`:white_check_mark: | ${userMention}'s birthday is on ${days}/${months}, ${timeZones}`);
      return interaction.reply({ embeds: [Embed] });
    }

  });

module.exports = command;
