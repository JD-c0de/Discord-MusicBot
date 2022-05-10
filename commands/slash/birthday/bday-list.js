const SlashCommand = require("../../../lib/SlashCommand");
const { MessageEmbed } = require("discord.js");
const Database = require("@replit/database");

const command = new SlashCommand()
  .setName("birthday-list")
  .setDescription("See when your birthday is")
  .setRun(async (client, interaction) => {

    let server = interaction.guild.id;
    let days = [];
    let months = [];
    let timeZones = [];
    let bday_date = [];
    let users = [];
    let dbServer;
    let b_day = new Database();
    let bdayList = await b_day.getAll();

    for (const [user, info] of Object.entries(bdayList)) {
      //console.log(info);
      for (const [key, val] of Object.entries(info)) {
        if (key == 'server') {
          dbServer = val;
        }
        if (server == dbServer) {

          if (key == 'user') {
            users.push(val);
          }
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
      }
    }
    users.forEach((username, index) => {
      bday_date.push("<@" + username.id + ">" + `'s birthday is on ${days[index]}/${months[index]}, ${timeZones[index]}\n`);
    });

    const Embed = new MessageEmbed()
      .setAuthor({
        name: "Birthday list:",
      })
      .setColor(client.config.embedColor)
      .setDescription(`${bday_date}`);
    return interaction.reply({ embeds: [Embed] });

  });

module.exports = command;
