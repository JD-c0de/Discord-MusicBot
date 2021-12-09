const { Util, MessageEmbed } = require("discord.js");
const Database = require("@replit/database");


module.exports = {
  name: "bday-list",
  description: "See a list of all the birthdays",
  usage: "",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["bdaylist", "list-bday", "listbday", "listbirthday", "list-birthday", "birthday-list", "bdayls", "lsbday", "bday-ls"],

  run: async (client, message, args, { GuildDB }) => {
    let embed;
    let days = [];
    let months = [];
    let timeZones = [];
    let bday_date = [];
    let users = [];
    let server = message.guild.id;
    let dbServer;
    let b_day = new Database();
    let bdayList = await b_day.getAll();

    //console.log(users);

    for (const [user, info] of Object.entries(bdayList)) {
      console.log(info);
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
      bday_date.push("<@" + username.id + ">" + `'s birthday is on ${days[index]}/${months[index]}, ${timeZones[index]}`);
    });

    embed = new MessageEmbed()
      .setAuthor(`Birthday list:`)
      .setDescription(bday_date)
      .setColor("RANDOM");
    message.channel.send(embed);


  },
}