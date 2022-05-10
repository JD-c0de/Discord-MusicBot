/**
 *
 * @param {import("../lib/DiscordMusicBot")} client
 */

const cron = require('node-cron');
const Database = require("@replit/database");
var bdayGifs = ['https://tenor.com/bIakR.gif','https://tenor.com/VWLj.gif','https://tenor.com/bfaeX.gif','https://tenor.com/bccIm.gif','https://tenor.com/bPN7K.gif','https://media.giphy.com/media/eDSnmeQ4MWmB2/giphy.gif','https://media.giphy.com/media/oXpZ1sLkbCZ9jFhBMx/giphy.gif'];

module.exports = async (client) => {
  client.manager.init(client.user.id);
  client.user.setPresence(client.config.presence);
  client.log("Successfully Logged in as " + client.user.tag);
  //console.log(client.emojis.cache.find(emoji => emoji.name === 'animatedboost'));
  
  /** Birthday functionality (Replit only)**/
  let b_day = new Database();
  let bdayList = await b_day.getAll();
  let days = [];
  let months = [];
  let timeZones = [];
  let birthdayChannel;
  let users = [];
  let servers = [];
  let server;
  var bdayGif = bdayGifs[Math.floor(Math.random() * bdayGifs.length)];
  
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

    //console.log(server);
    cron.schedule(`00 00 ${days[index]} ${months[index]} *`, () => {
      birthdayChannel.send(`Today's ${users[index]} birthday, congratulations!\n ${bdayGif}`);
    }, {
        scheduled: true,
        timezone: timeZones[index]
      });

  });
};
