const { Util, MessageEmbed } = require("discord.js");
const Database = require("@replit/database");
const momentTimezone = require('moment-timezone');


module.exports = {
  name: "bday-set",
  description: "Add/modify your birthday",
  usage: "<DD/MM> <Timezone>",
  //expectedArgs: "<DD/MM> <Timezone>",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["bdayset", "birthday-set"],

  run: async (client, message, args, { GuildDB }) => {
    let item = "";
    for (let i = 0; i < args.length; i++) {
      item += args[i] + " ";
    }
    //console.log(item);
    let server = message.guild.id;
    let user = message.author;
    let userMention = "<@" + user + ">";
    let userServer = userMention + server;
    const [date, timeZone] = args;
    let dateSplit = date.split("/");
    let day = dateSplit[0];
    let month = dateSplit[1];
    const validTimeZones = momentTimezone.tz.names();

    //console.log(server);
    if (!args) {
      return client.sendTime(
        message.channel,
        "❌ | ** Birthday's format is DD/MM <Timezone> **");
    } else if (day > 31 || month > 12 || day <= 0 || month <= 0) {
      return client.sendTime(
        message.channel,
        "❌ | ** Birthday is invalid **");
    } else if (!validTimeZones.includes(timeZone)) {
      return client.sendTime(
        message.channel,
        "❌ | ** Invalid timezone! Please enter one of the following timezones: <https://gist.github.com/AlexzanderFlores/d511a7c7e97b4c3ae60cb6e562f78300> **");
    }
    let bdayObj = { server: server, user: user, day: day, month: month, timezone: timeZone};

    let b_day = new Database();
    await b_day.set(userServer, bdayObj);
    //let check = await b_day.list();
    console.log(bdayObj);
    //console.log(check);

    client.sendTime(
      message.channel, `:white_check_mark: | Set` + userMention +
      `'s birthday to: ` + args);



  },
}