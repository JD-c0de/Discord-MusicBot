const { Util, MessageEmbed } = require("discord.js");
const cron = require('node-cron');
const Database = require("@replit/database");

module.exports = async (client) => {
  (client.Ready = true),
    client.user.setPresence({
    status: client.botconfig.Presence.status, // You can show online, idle, and dnd
      activity: {
        name: client.botconfig.Presence.name,
        type: client.botconfig.Presence.type,
      },
});
  client.Manager.init(client.user.id);
  client.log("Successfully Logged in as " + client.user.tag); // You can change the text if you want, but DO NOT REMOVE "client.user.tag"
  client.RegisterSlashCommands();


/** Birthday functionality (Replit only)**/
  let b_day = new Database();
  let bdayList = await b_day.getAll();
  let bday = [];
  let days = [];
  let months = [];
  let timeZones = [];
  let birthdayChannel;
  let users = [];
  let servers = [];
  let server;

  for (const [user, info] of Object.entries(bdayList)) {

    for (const [key, val] of Object.entries(info)) {
      if (key == 'server') {
        servers.push(val);
      }
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

  users.forEach((username, index) => {
    server = client.guilds.cache.get(servers[index]);
    birthdayChannel = server.channels.cache.find(channel => channel.name === "birthday");

    console.log(server);
    cron.schedule(`00 00 ${days[index]} ${months[index]} *`, () => {
      birthdayChannel.send(`Today's ${users[index]} birthday, congratulations!`);
    }, {
        scheduled: true,
        timezone: timeZones[index]
      });

  });

};