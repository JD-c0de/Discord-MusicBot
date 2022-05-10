const SlashCommand = require("../../../lib/SlashCommand");
const { MessageEmbed } = require("discord.js");
const LoadCommands = require("../../../util/loadCommands");

const command = new SlashCommand()
  .setName("help")
  .setDescription("Shows help commands")
  .setRun(async (client, interaction) => {
    // map the commands name and description to the embed
    /*const commands = await LoadCommands().then((cmds) => {
      return [].concat(cmds.slash).concat(cmds.context);
    });*/
    const musicCommands = await LoadCommands().then((cmds) => {
      return [].concat(cmds.slashMusic);
    });
    const gamesCommands = await LoadCommands().then((cmds) => {
      return [].concat(cmds.slashGames);
    });
    const birthdayCommands = await LoadCommands().then((cmds) => {
      return [].concat(cmds.slashBirthday);
    });
    const settingsCommands = await LoadCommands().then((cmds) => {
      return [].concat(cmds.slashSettings);
    });
    const otherCommands = await LoadCommands().then((cmds) => {
      return [].concat(cmds.slashOther);
    });
    // from commands remove the ones that hae no description
    //const filteredCommands = commands.filter((cmd) => cmd.description);
    const filteredMusicCommands = musicCommands.filter((cmd) => cmd.description);
    const filteredGamesCommands = gamesCommands.filter((cmd) => cmd.description);
    const filteredBirthdayCommands = birthdayCommands.filter((cmd) => cmd.description);
    const filteredSettingsCommands = settingsCommands.filter((cmd) => cmd.description);
    const filteredOtherCommands = otherCommands.filter((cmd) => cmd.description);

    //get info of the developer 
    const developerID = process.env.developer_ID;
    
    let dev;
    await client.users.fetch(developerID).then(myUser => {
      dev = myUser;
    });

    // if git exists, then get commit hash
    let gitHash = "";
    try {
      gitHash = require("child_process")
        .execSync("git rev-parse --short HEAD")
        .toString()
        .trim();
    } catch (e) {
      // do nothing
      gitHash = "unknown";
    }

    // create the embed
    const helpEmbed = new MessageEmbed()
      .setAuthor({
        name: `Commands of ${client.user.username}`,
        iconURL: client.config.iconURL,
        url: client.config.website,
      })
      .setColor(client.config.embedColor)
      .setDescription(
        `\n🎵 MUSIC 🎵:\n` +
        filteredMusicCommands
          .map((cmd) => {
            return `\`/${cmd.name}\` - ${cmd.description}`;
          })
          .join("\n") +
        `\n\n🎮 GAMES 🎮:\n` +
        filteredGamesCommands
          .map((cmd) => {
            return `\`/${cmd.name}\` - ${cmd.description}`;
          })
          .join("\n") +
        `\n\n🎂 BIRTHDAY 🎂:\n` +
        filteredBirthdayCommands
          .map((cmd) => {
            return `\`/${cmd.name}\` - ${cmd.description}`;
          })
          .join("\n") +
        `\n\n🛠️ SETTINGS 🛠️:\n` +
        filteredSettingsCommands
          .map((cmd) => {
            return `\`/${cmd.name}\` - ${cmd.description}`;
          })
          .join("\n") +
        `\n\n🧩 OTHER 🧩:\n` +
        filteredOtherCommands
          .map((cmd) => {
            return `\`/${cmd.name}\` - ${cmd.description}`;
          })
          .join("\n") +
        "\n\n" +
        `Discord Music Bot Version: v${
        require("../../../package.json").version
        }; Build: ${gitHash}` +
        "\n" +
        `[✨ Support Server](${client.config.supportServer}) | [Issues](${client.config.Issues}) | [Source](https://git.darrennathanael.com/DarrenOfficial/DiscordMusic/) | [Fork](https://github.com/JD-c0de/Discord-MusicBot) | [Invite Me](https://discord.com/oauth2/authorize?client_id=${client.config.clientId}&permissions=${client.config.permissions}&scope=bot%20applications.commands)`
      ).setFooter({ text: 'Edited by JD_#1307', iconURL: `https://cdn.discordapp.com/avatars/${dev.id}/${dev.avatar}.png` });
    // Do not change the Source code link.
    return interaction.reply({ embeds: [helpEmbed], ephemeral: true });
  });

module.exports = command;
