const { Util, MessageEmbed } = require("discord.js");
const Database = require("@replit/database");


module.exports = {
  name: "bday-my",
  description: "See when your birthday is",
  usage: "",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["bdaymy", "my-bday", "mybday", "mybirthday", "my-birthday"],

  run: async (client, message, args, { GuildDB }) => {

    let server = message.guild.id;
    let user = message.author.id;
    let userMention = "<@" + user + ">";
    let userServer = userMention + server;
    let b_day = new Database();
    let myBday = await b_day.get(userServer);
    let days = [];
    let months = [];
    let timeZones = [];
    console.log(myBday);

    if (myBday == null || myBday == undefined) {
      //console.log(await b_day.list());
      return client.sendTime(
        message.channel,
        "❌ | ** " + userMention + "'s birthday hasn't been set yet **");
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

      client.sendTime(
        message.channel, `:white_check_mark: | ${userMention}'s birthday is on ${days}/${months}, ${timeZones}`);
    }


    //let check = await b_day.list();

  },
}