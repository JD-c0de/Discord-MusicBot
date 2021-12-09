/**
 *
 * @param {require("../structures/DiscordMusicBot")} client
 * @param {require("discord.js").Message} message
 * @returns {void} aka: nothing ;-;
 */

const min = 1500; //1500ms
const max = 3000; //3000ms

const delay = 10; //10ms

var helloGifs = ['https://tenor.com/vj6C.gif', 'https://tenor.com/oX8p.gif', 'https://tenor.com/bwEBR.gif', 'https://tenor.com/blBxC.gif', 'https://media.giphy.com/media/1kJxyyCq9ZHXX0GM3a/giphy.gif', 'https://media.giphy.com/media/r6vs6u9NngyiANYCRI/giphy.gif', 'https://tenor.com/oWxn.gif', 'https://tenor.com/bdWCD.gif', 'https://tenor.com/Hrm4.gif', 'https://media.giphy.com/media/xUPGcigl4eOfc6hA5y/giphy.gif', 'https://media.giphy.com/media/PnUatAYWMEMvmiwsyx/giphy.gif', 'https://media.giphy.com/media/fTI9mBoWLef8k/giphy.gif', 'https://media.giphy.com/media/srGTTWHrBMIcU/giphy.gif', 'https://media.giphy.com/media/WTmXCoCf60MtW/giphy.gif',
'https://tenor.com/6l3f.gif'];

var byeGifs = ['https://tenor.com/bnfSZ.gif', 'https://tenor.com/oukv.gif', 'https://tenor.com/vPcL.gif', 'https://tenor.com/QxTI.gif', 'https://tenor.com/beX90.gif', 'https://media.giphy.com/media/KctrWMQ7u9D2du0YmD/giphy.gif', 'https://media.giphy.com/media/fxe8v45NNXFd4jdaNI/giphy.gif', 'https://media.giphy.com/media/w89ak63KNl0nJl80ig/giphy.gif', 'https://media.giphy.com/media/vxNCVEe0PI9A3YVJEX/giphy.gif', 'https://media.giphy.com/media/kaBU6pgv0OsPHz2yxy/giphy.gif', 'https://media.giphy.com/media/k4ta29T68xlfi/giphy.gif', 'https://media.giphy.com/media/G5h04AkAvAHcs/giphy.gif', 'https://media.giphy.com/media/Gzvo3F4TBUm1W/giphy.gif', 'https://media.giphy.com/media/VRolEcq3Z4axa/giphy.gif', 'https://tenor.com/xRHd.gif', 'https://tenor.com/O2Xf.gif', 'https://tenor.com/bfDl8.gif',
'https://tenor.com/bt0du.gif'];

module.exports = async (client, message) => {
  if (message.author.bot || message.channel.type === "dm") return;

  randomType = Math.random() * (max - min) + min;

  var helloGif = helloGifs[Math.floor(Math.random() * helloGifs.length)];

  var byeGif = byeGifs[Math.floor(Math.random() * byeGifs.length)];

  let sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

  if (message.content.toLowerCase() == "ping") {
    message.channel.send("pong");
  }

  if (message.content.toLowerCase() == "never gonna give you up") {
    message.channel.startTyping();
    await message.channel.send('https://media.giphy.com/media/lgcUUCXgC8mEo/giphy.gif');
    message.react('👞');
    message.react('🎤');
    await sleep(randomType);
    message.channel.stopTyping(true);
    await sleep(delay);
    message.channel.startTyping();
    await message.channel.send('Never gonna let you down');
    await sleep(randomType);
    message.channel.stopTyping(true);
    await sleep(delay);
    message.channel.startTyping();
    await message.channel.send('Never gonna run around and desert you');
    await sleep(randomType);
    message.channel.stopTyping(true);
    await sleep(delay);
    message.channel.startTyping();
    await message.channel.send('Never gonna make you cry');
    await sleep(randomType);
    message.channel.stopTyping(true);
    await sleep(delay);
    message.channel.startTyping();
    await message.channel.send('Never gonna say goodbye');
    await sleep(randomType);
    message.channel.stopTyping(true);
    await sleep(delay);
    message.channel.startTyping();
    await message.channel.send('Never gonna tell a lie and hurt you');
    await sleep(randomType);
    message.channel.stopTyping(true);
  }

  if (message.content.toLowerCase() == "hello") {
    message.channel.startTyping();
    setTimeout(() => {
      message.channel.send(helloGif);
      message.channel.send("Hi!");
      message.channel.stopTyping();
    }, randomType)
  }

  if (message.content.toLowerCase() == "ello") {
    message.channel.startTyping();
    setTimeout(() => {
      message.channel.send(helloGif);
      message.channel.send("Ello!");
      message.channel.stopTyping();
    }, randomType)
  }

  if (message.content.toLowerCase() == "hallo") {
    message.channel.startTyping();
    setTimeout(() => {
      message.channel.send(helloGif);
      message.channel.send("Hoi!");
      message.channel.stopTyping();
    }, randomType)
  }

  if (message.content.toLowerCase() == "kom call" || message.content.toLowerCase() == "call" || message.content.toLowerCase() == "schaken") {
    const user = message.author.id;
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        member.voice.kick();
      }
    }

  }

  if (message.content.toLowerCase() == "ciao" || message.content.toLowerCase() == "caoi" || message.content.toLowerCase() == "caio") {
    const user = message.author.id;
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        member.voice.kick();
      }
    }

    message.channel.startTyping();
    setTimeout(() => {
      message.channel.send(byeGif);
      message.channel.send("Ciao!");
      message.channel.stopTyping();
    }, randomType)

  }

  if (message.content.toLowerCase() == "goodbye") {
    const user = message.author.id;
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        member.voice.kick();
      }
    }

    message.channel.startTyping();
    setTimeout(() => {
      message.channel.send(byeGif);
      message.channel.send("Goodbye, my friend!");
      message.channel.stopTyping();
    }, randomType)

  }

  if (message.content.toLowerCase() == "bye") {
    const user = message.author.id;
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        member.voice.kick();
      }
    }

    message.channel.startTyping();
    setTimeout(() => {
      message.channel.send(byeGif);
      message.channel.send("Bye!");
      message.channel.stopTyping();
    }, randomType)

  }

    if (message.content.toLowerCase() == "de balle") {
    const user = message.author.id;
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        member.voice.kick();
      }
    }

    message.channel.startTyping();
    setTimeout(() => {
      message.channel.send(byeGif);
      message.channel.send("Doeg!");
      message.channel.stopTyping();
    }, randomType)

  }

  if (message.content.toLowerCase() == "farewell") {
    const user = message.author.id;
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        member.voice.kick();
      }
    }

    message.channel.startTyping();
    setTimeout(() => {
      message.channel.send(byeGif);
      message.channel.send("Farewell, my friend!");
      message.channel.stopTyping();
    }, randomType)

  }

  let url;
  let channel = message.member.voice.channel;

  let prefix = client.botconfig.DefaultPrefix;

  let GuildDB = await client.GetGuild(message.guild.id);
  if (GuildDB && GuildDB.prefix) prefix = GuildDB.prefix;

  //Initialize GuildDB
  if (!GuildDB) {
    await client.database.guild.set(message.guild.id, {
      prefix: prefix,
      DJ: null,
    });
    GuildDB = await client.GetGuild(message.guild.id);
  }

  const args1 = message.content.trim().split(/ +/g);
  //Making the command lowerCase because our file name will be in lowerCase
  const command1 = args1.shift().toLowerCase();

  if (message.attachments.size !== 0 && channel) {
    message.attachments.forEach(function(attachment) {
      // do something with the attachment
      url = attachment.url.trim().split(/ +/g);
      //console.log(url);
    });
    if (url[0].includes(".mp3") || url[0].includes(".m4a")) {
      await message.channel.send("Do you want to play audio file? yes or no");
      message.channel.awaitMessages(m => m.author.id == message.author.id, {max: 1, time: 10000}).then(collected => {

        if(collected.first().content.toLowerCase()=="yes"){
          client.commands.get('play').run(client, message, url, { GuildDB });
        }

      }).catch(() => {
        message.channel.send('Time is up');
      });

    }
  }

  //Prefixes also have mention match
  const prefixMention = new RegExp(`^<@!?${client.user.id}> `);
  prefix = message.content.match(prefixMention)
    ? message.content.match(prefixMention)[0]
    : prefix;

  if (message.content.indexOf(prefix) !== 0) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  //Making the command lowerCase because our file name will be in lowerCase
  const command = args.shift().toLowerCase();

  //Searching a command
  const cmd =
    client.commands.get(command) ||
    client.commands.find((x) => x.aliases && x.aliases.includes(command));

  //Executing the codes when we get the command or aliases
  if (cmd) {
    if (
      (cmd.permissions &&
        cmd.permissions.channel &&
        !message.channel
          .permissionsFor(client.user)
          .has(cmd.permissions.channel)) ||
      (cmd.permissions &&
        cmd.permissions.member &&
        !message.channel
          .permissionsFor(message.member)
          .has(cmd.permissions.member)) ||
      (cmd.permissions &&
        GuildDB.DJ &&
        !message.channel
          .permissionsFor(message.member)
          .has(["ADMINISTRATOR"]) &&
        !message.member.roles.cache.has(GuildDB.DJ))
    )
      return client.sendError(
        message.channel,
        "Missing Permissions!" + GuildDB.DJ
          ? " You need the `DJ` role to access this command."
          : ""
      );
    cmd.run(client, message, args, { GuildDB });
    client.CommandsRan++;
  } else return;
};
