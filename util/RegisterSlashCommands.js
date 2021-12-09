const fs = require("fs");
const path = require("path");

/**
 * Register slash commands for a guild
 * @param {require("../structures/DiscordMusicBot")} client
 * @param {string} guild
 */
module.exports = (client, guild) => {
  client.log("Registering slash commands for " + guild);

  let musicCommandsDir = path.join(__dirname, "..", "commands", "music");
  let gamesCommandsDir = path.join(__dirname, "..", "commands", "games");
  let birthdayCommandsDir = path.join(__dirname, "..", "commands", "birthday");
  let settingsCommandsDir = path.join(__dirname, "..", "commands", "settings");
  let otherCommandsDir = path.join(__dirname, "..", "commands", "other");
  //let testCommandsDir = path.join(__dirname, "..", "commands", "test");

  fs.readdir(musicCommandsDir, (err, files) => {
    if (err) throw err;
    files.forEach(async (file) => {
      let cmd = require(musicCommandsDir + "/" + file);
      if (!cmd.SlashCommand || !cmd.SlashCommand.run) return;
      let dataStuff = {
        name: cmd.name,
        description: cmd.description,
        options: cmd.SlashCommand.options,
      };

      //Creating variables like this, So you might understand my code :)
      let ClientAPI = client.api.applications(client.user.id);
      let GuildAPI = ClientAPI.guilds(guild);

      client.log(
        "[Slash Command]: [POST] Guild " +
        guild +
        ", Command: " +
        dataStuff.name
      );
      try {
        await GuildAPI.commands.post({ data: dataStuff });
      } catch (e) {
        client.log(
          "[Slash Command]: [POST-FAILED] Guild " +
          guild +
          ", Command: " +
          dataStuff.name
        );
        console.log(e);
      }
    });
  });

  fs.readdir(gamesCommandsDir, (err, files) => {
    if (err) throw err;
    files.forEach(async (file) => {
      let cmd = require(gamesCommandsDir + "/" + file);
      if (!cmd.SlashCommand || !cmd.SlashCommand.run) return;
      let dataStuff = {
        name: cmd.name,
        description: cmd.description,
        options: cmd.SlashCommand.options,
      };

      //Creating variables like this, So you might understand my code :)
      let ClientAPI = client.api.applications(client.user.id);
      let GuildAPI = ClientAPI.guilds(guild);

      client.log(
        "[Slash Command]: [POST] Guild " +
        guild +
        ", Command: " +
        dataStuff.name
      );
      try {
        await GuildAPI.commands.post({ data: dataStuff });
      } catch (e) {
        client.log(
          "[Slash Command]: [POST-FAILED] Guild " +
          guild +
          ", Command: " +
          dataStuff.name
        );
        console.log(e);
      }
    });
  });

  fs.readdir(birthdayCommandsDir, (err, files) => {
    if (err) throw err;
    files.forEach(async (file) => {
      let cmd = require(birthdayCommandsDir + "/" + file);
      if (!cmd.SlashCommand || !cmd.SlashCommand.run) return;
      let dataStuff = {
        name: cmd.name,
        description: cmd.description,
        options: cmd.SlashCommand.options,
      };

      //Creating variables like this, So you might understand my code :)
      let ClientAPI = client.api.applications(client.user.id);
      let GuildAPI = ClientAPI.guilds(guild);

      client.log(
        "[Slash Command]: [POST] Guild " +
        guild +
        ", Command: " +
        dataStuff.name
      );
      try {
        await GuildAPI.commands.post({ data: dataStuff });
      } catch (e) {
        client.log(
          "[Slash Command]: [POST-FAILED] Guild " +
          guild +
          ", Command: " +
          dataStuff.name
        );
        console.log(e);
      }
    });
  });

  fs.readdir(settingsCommandsDir, (err, files) => {
    if (err) throw err;
    files.forEach(async (file) => {
      let cmd = require(settingsCommandsDir + "/" + file);
      if (!cmd.SlashCommand || !cmd.SlashCommand.run) return;
      let dataStuff = {
        name: cmd.name,
        description: cmd.description,
        options: cmd.SlashCommand.options,
      };

      //Creating variables like this, So you might understand my code :)
      let ClientAPI = client.api.applications(client.user.id);
      let GuildAPI = ClientAPI.guilds(guild);

      client.log(
        "[Slash Command]: [POST] Guild " +
        guild +
        ", Command: " +
        dataStuff.name
      );
      try {
        await GuildAPI.commands.post({ data: dataStuff });
      } catch (e) {
        client.log(
          "[Slash Command]: [POST-FAILED] Guild " +
          guild +
          ", Command: " +
          dataStuff.name
        );
        console.log(e);
      }
    });
  });

  fs.readdir(otherCommandsDir, (err, files) => {
    if (err) throw err;
    files.forEach(async (file) => {
      let cmd = require(otherCommandsDir + "/" + file);
      if (!cmd.SlashCommand || !cmd.SlashCommand.run) return;
      let dataStuff = {
        name: cmd.name,
        description: cmd.description,
        options: cmd.SlashCommand.options,
      };

      //Creating variables like this, So you might understand my code :)
      let ClientAPI = client.api.applications(client.user.id);
      let GuildAPI = ClientAPI.guilds(guild);

      client.log(
        "[Slash Command]: [POST] Guild " +
        guild +
        ", Command: " +
        dataStuff.name
      );
      try {
        await GuildAPI.commands.post({ data: dataStuff });
      } catch (e) {
        client.log(
          "[Slash Command]: [POST-FAILED] Guild " +
          guild +
          ", Command: " +
          dataStuff.name
        );
        console.log(e);
      }
    });
  });

  /*fs.readdir(testCommandsDir, (err, files) => {
    if (err) throw err;
    files.forEach(async (file) => {
      let cmd = require(testCommandsDir + "/" + file);
      if (!cmd.SlashCommand || !cmd.SlashCommand.run) return;
      let dataStuff = {
        name: cmd.name,
        description: cmd.description,
        options: cmd.SlashCommand.options,
      };

      //Creating variables like this, So you might understand my code :)
      let ClientAPI = client.api.applications(client.user.id);
      let GuildAPI = ClientAPI.guilds(guild);

      client.log(
        "[Slash Command]: [POST] Guild " +
        guild +
        ", Command: " +
        dataStuff.name
      );
      try {
        await GuildAPI.commands.post({ data: dataStuff });
      } catch (e) {
        client.log(
          "[Slash Command]: [POST-FAILED] Guild " +
          guild +
          ", Command: " +
          dataStuff.name
        );
        console.log(e);
      }
    });
  });*/
};
