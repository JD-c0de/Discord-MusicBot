const { MessageEmbed } = require("discord.js");

const min = 1500; //1500ms
const max = 3000; //3000ms

var helloGifs = ['https://tenor.com/vj6C.gif', 'https://tenor.com/oX8p.gif', 'https://tenor.com/bwEBR.gif', 'https://tenor.com/blBxC.gif', 'https://media.giphy.com/media/1kJxyyCq9ZHXX0GM3a/giphy.gif', 'https://media.giphy.com/media/r6vs6u9NngyiANYCRI/giphy.gif', 'https://tenor.com/oWxn.gif', 'https://tenor.com/bdWCD.gif', 'https://tenor.com/Hrm4.gif', 'https://media.giphy.com/media/xUPGcigl4eOfc6hA5y/giphy.gif', 'https://media.giphy.com/media/PnUatAYWMEMvmiwsyx/giphy.gif', 'https://media.giphy.com/media/fTI9mBoWLef8k/giphy.gif', 'https://media.giphy.com/media/srGTTWHrBMIcU/giphy.gif', 'https://media.giphy.com/media/WTmXCoCf60MtW/giphy.gif',
  'https://tenor.com/6l3f.gif', 'https://tenor.com/bkQew.gif', 'https://tenor.com/6Hyp.gif'];

var byeGifs = ['https://tenor.com/bnfSZ.gif', 'https://tenor.com/oukv.gif', 'https://tenor.com/vPcL.gif', 'https://tenor.com/QxTI.gif', 'https://tenor.com/beX90.gif', 'https://media.giphy.com/media/KctrWMQ7u9D2du0YmD/giphy.gif', 'https://media.giphy.com/media/fxe8v45NNXFd4jdaNI/giphy.gif', 'https://media.giphy.com/media/w89ak63KNl0nJl80ig/giphy.gif', 'https://media.giphy.com/media/vxNCVEe0PI9A3YVJEX/giphy.gif', 'https://media.giphy.com/media/kaBU6pgv0OsPHz2yxy/giphy.gif', 'https://media.giphy.com/media/k4ta29T68xlfi/giphy.gif', 'https://media.giphy.com/media/G5h04AkAvAHcs/giphy.gif', 'https://media.giphy.com/media/Gzvo3F4TBUm1W/giphy.gif', 'https://media.giphy.com/media/VRolEcq3Z4axa/giphy.gif', 'https://tenor.com/xRHd.gif', 'https://tenor.com/O2Xf.gif', 'https://tenor.com/bfDl8.gif',
  'https://tenor.com/bt0du.gif', 'https://tenor.com/bAo8p.gif', 'https://tenor.com/vXC0.gif', 'https://tenor.com/bPmbO.gif', 'https://tenor.com/r1dQ.gif', 'https://tenor.com/baZMo.gif', 'https://tenor.com/bAw92.gif', 'https://tenor.com/bi9Hj.gif', 'https://tenor.com/bytL6.gif', 'https://tenor.com/bcrkc.gif', 'https://tenor.com/bmf5G.gif', 'https://tenor.com/byt3o.gif', 'https://tenor.com/bIhwv.gif', 'https://tenor.com/bIjZh.gif'];

module.exports = async (client, message) => {
  const mention = new RegExp(`^<@!?${client.user.id}>( |)$`);

  if (message.content.match(mention)) {
    const mentionEmbed = new MessageEmbed()
      .setColor(client.config.embedColor)
      .setDescription(
        `My prefix on this server is \`/\` (Slash Command).\nTo get started you can type \`/help\` to see all my commands.\nIf you can't see it, Please [reinvite](https://discord.com/oauth2/authorize?client_id=${client.config.clientId}&permissions=${client.config.permissions}&scope=bot%20applications.commands) me with the correct permissions.`
      );

    message.channel.send({
      embeds: [mentionEmbed],
    });
  }

  randomType = Math.random() * (max - min) + min;

  var helloGif = helloGifs[Math.floor(Math.random() * helloGifs.length)];

  var byeGif = byeGifs[Math.floor(Math.random() * byeGifs.length)];

  let sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

  if (message.content.toLowerCase() == "ping") {
    message.channel.send("pong");
  }

  if ((message.content.toLowerCase().includes("69") || message.content.toLowerCase().includes("6.9") || message.content.toLowerCase().includes("6,9")) && !(message.content.toLowerCase().includes("http") || message.content.toLowerCase().includes("<@") || message.content.toLowerCase().includes("<#"))) {
    message.channel.sendTyping();
    await sleep(randomType);
    await message.channel.send('https://tenor.com/LgPu.gif');
    message.react('♋');

    //message.channel.stopTyping(true);
  }

  if (message.content.toLowerCase() == "never gonna give you up") {
    message.channel.sendTyping();
    await sleep(randomType);
    await message.channel.send('https://media.giphy.com/media/lgcUUCXgC8mEo/giphy.gif');
    message.react('👞');
    message.react('🎤');
    message.channel.sendTyping();
    await sleep(randomType);
    await message.channel.send('Never gonna let you down');
    message.channel.sendTyping();
    await sleep(randomType);
    await message.channel.send('Never gonna run around and desert you');
    message.channel.sendTyping();
    await sleep(randomType);
    await message.channel.send('Never gonna make you cry');
    message.channel.sendTyping();
    await sleep(randomType);
    await message.channel.send('Never gonna say goodbye');
    message.channel.sendTyping();
    await sleep(randomType);
    await message.channel.send('Never gonna tell a lie and hurt you');
  }

  if (message.content.toLowerCase() == "hello") {
    message.channel.sendTyping();
    setTimeout(() => {
      message.channel.send(helloGif);
      message.channel.send("Hi!");
    }, randomType)
  }

  if (message.content.toLowerCase() == "ello") {
    message.channel.sendTyping();
    setTimeout(() => {
      message.channel.send(helloGif);
      message.channel.send("Ello!");
    }, randomType)
  }

  if (message.content.toLowerCase() == "hallo") {
    message.channel.sendTyping();
    setTimeout(() => {
      message.channel.send(helloGif);
      message.channel.send("Hoi!");
    }, randomType)
  }

  if (message.content.toLowerCase().includes("call") || message.content.toLowerCase().includes("schaken")) {
    const user = message.author.id;
    if (user) {
      // Now we get the member from the user
      const member = message.guild.members.cache.get(user);
      // If the member is in the guild
      if (member) {
        member.voice.disconnect();
      }
    }

  }

  if (message.content.toLowerCase() == "ciao" || message.content.toLowerCase() == "caoi" || message.content.toLowerCase() == "caio") {
    const user = message.author.id;
    if (user) {
      // Now we get the member from the user
      const member = message.guild.members.cache.get(user);
      // If the member is in the guild
      if (member) {
        member.voice.disconnect();
      }
    }

    message.channel.sendTyping();
    setTimeout(() => {
      message.channel.send(byeGif);
      message.channel.send("Ciao!");
    }, randomType)

  }

  if (message.content.toLowerCase() == "goodbye") {
    const user = message.author.id;
    if (user) {
      // Now we get the member from the user
      const member = message.guild.members.cache.get(user);
      // If the member is in the guild
      if (member) {
        member.voice.disconnect();
      }
    }

    message.channel.sendTyping();
    setTimeout(() => {
      message.channel.send(byeGif);
      message.channel.send("Goodbye, my friend!");
    }, randomType)

  }

  if (message.content.toLowerCase() == "bye") {
    const user = message.author.id;
    if (user) {
      // Now we get the member from the user
      const member = message.guild.members.cache.get(user);
      // If the member is in the guild
      if (member) {
        member.voice.disconnect();
      }
    }

    message.channel.sendTyping();
    setTimeout(() => {
      message.channel.send(byeGif);
      message.channel.send("Bye!");
    }, randomType)

  }

  if (message.content.toLowerCase() == "de balle") {
    const user = message.author.id;
    if (user) {
      // Now we get the member from the user
      const member = message.guild.members.cache.get(user);
      // If the member is in the guild
      if (member) {
        member.voice.disconnect();
      }
    }

    message.channel.sendTyping();
    setTimeout(() => {
      message.channel.send(byeGif);
      message.channel.send("Doeg!");
    }, randomType)

  }

  if (message.content.toLowerCase() == "farewell") {
    const user = message.author.id;
    if (user) {
      // Now we get the member from the user
      const member = message.guild.members.cache.get(user);
      // If the member is in the guild
      if (member) {
        member.voice.disconnect();
      }
    }

    message.channel.sendTyping();
    setTimeout(() => {
      message.channel.send(byeGif);
      message.channel.send("Farewell, my friend!");
    }, randomType)

  }


};
