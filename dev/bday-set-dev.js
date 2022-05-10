const SlashCommand = require("../../../lib/SlashCommand");
const { MessageEmbed } = require("discord.js");
const Database = require("@replit/database");
const momentTimezone = require('moment-timezone');

const command = new SlashCommand()
  .setName("birthday-set-dev")
  .setDescription("Add/modify your birthday for everyone").addStringOption((option) =>
    option
      .setName("date")
      .setDescription("DD/MM")
      .setRequired(true)
  ).addStringOption((option) =>
    option
      .setName("timezone")
      .setDescription("example: Europe/Brussels")
      .setRequired(true)
  ).addStringOption((option) =>
    option
      .setName("user-id")
      .setDescription("8942318266370203")
      .setRequired(true)
  ).addStringOption((option) =>
    option
      .setName("server-id")
      .setDescription("8942318266370203")
      .setRequired(true)
  )
  .setRun(async (client, interaction, options) => {
    let serverID = options.getString("server-id", true);
    let server = serverID;
    let userID = options.getString("user-id", true);
    let user;
    await client.users.fetch(userID).then(myUser => {
      user = myUser;
    });
    let userMention = "<@" + user + ">";
    let userServer = userMention + server;

    let date = options.getString("date", true);
    let dateSplit = date.split("/");
    let day = dateSplit[0];
    let month = dateSplit[1];

    let timezone = options.getString("timezone", true);
    const validTimeZones = momentTimezone.tz.names();
    //console.log( "timezones: ", validTimeZones);

    if (day > 31 || month > 12 || day <= 0 || month <= 0) {
      const invalidEmbed = new MessageEmbed()
        .setColor(client.config.embedColor)
        .setDescription(
          "❌ | ** Birthday date is invalid **"
        );
      return interaction.reply({ embeds: [invalidEmbed] });
    } else if (!validTimeZones.includes(timezone)) {
      const invalidEmbed = new MessageEmbed()
        .setColor(client.config.embedColor)
        .setDescription(
          "❌ | ** Invalid timezone! Please enter one of the following timezones: <https://gist.github.com/AlexzanderFlores/d511a7c7e97b4c3ae60cb6e562f78300> **"
        );
      return interaction.reply({ embeds: [invalidEmbed] });

    }

    let bdayObj = { server: server, user: user, day: day, month: month, timezone: timezone };

    let b_day = new Database();
    await b_day.set(userServer, bdayObj);
    //let check = await b_day.list();
    console.log(bdayObj);
    //console.log(check);

    const Embed = new MessageEmbed()
      .setAuthor({
        name: "Your birthday has been set",
      })
      .setColor(client.config.embedColor)
      .setDescription(`:white_check_mark: | Set` + userMention +
        `'s birthday to: ` + date + ` , ` + timezone).setThumbnail('https://media.giphy.com/media/pWO49XP9L7TxbgQVib/giphy.gif');
    return interaction.reply({ embeds: [Embed] });
  });

module.exports = command;
