const api = require("express").Router();
const { Collection } = require("discord.js");
const { join } = require("path");
let config;
try {
  //Config for testing
  config = require("../dev-config");
} catch {
  //Config for production
  config = require("../botconfig");
}
const Auth = require("./Middlewares/Auth");
const fs = require("fs");

let MusicCommandsDir = join(__dirname, "..", "commands", "music");
let GamesCommandsDir = join(__dirname, "..", "commands", "games");
let BirthdayCommandsDir = join(__dirname, "..", "commands", "birthday");
let SettingsCommandsDir = join(__dirname, "..", "commands", "settings");
let OtherCommandsDir = join(__dirname, "..", "commands", "other");

let Commands = [];

fs.readdir(MusicCommandsDir, (err, files) => {
  if (err) this.log(err);
  else
    files.forEach((file) => {
      let cmd = require(MusicCommandsDir + "/" + file);
      if (!cmd.name || !cmd.description || !cmd.run) return;
      Commands.push({
        name: cmd.name,
        aliases: cmd.aliases,
        usage: cmd.usage,
        description: cmd.description,
      });
    });
});

fs.readdir(GamesCommandsDir, (err, files) => {
  if (err) this.log(err);
  else
    files.forEach((file) => {
      let cmd = require(GamesCommandsDir + "/" + file);
      if (!cmd.name || !cmd.description || !cmd.run) return;
      Commands.push({
        name: cmd.name,
        aliases: cmd.aliases,
        usage: cmd.usage,
        description: cmd.description,
      });
    });
});

fs.readdir(BirthdayCommandsDir, (err, files) => {
  if (err) this.log(err);
  else
    files.forEach((file) => {
      let cmd = require(BirthdayCommandsDir + "/" + file);
      if (!cmd.name || !cmd.description || !cmd.run) return;
      Commands.push({
        name: cmd.name,
        aliases: cmd.aliases,
        usage: cmd.usage,
        description: cmd.description,
      });
    });
});

fs.readdir(SettingsCommandsDir, (err, files) => {
  if (err) this.log(err);
  else
    files.forEach((file) => {
      let cmd = require(SettingsCommandsDir + "/" + file);
      if (!cmd.name || !cmd.description || !cmd.run) return;
      Commands.push({
        name: cmd.name,
        aliases: cmd.aliases,
        usage: cmd.usage,
        description: cmd.description,
      });
    });
});

fs.readdir(OtherCommandsDir, (err, files) => {
  if (err) this.log(err);
  else
    files.forEach((file) => {
      let cmd = require(OtherCommandsDir + "/" + file);
      if (!cmd.name || !cmd.description || !cmd.run) return;
      Commands.push({
        name: cmd.name,
        aliases: cmd.aliases,
        usage: cmd.usage,
        description: cmd.description,
      });
    });
});

api.get("/", (req, res) => {
  res.sendFile(join(__dirname, "..", "views", "index.html"));
});

api.get("/dashboard", Auth, (req, res) => {
  res.sendFile(join(__dirname, "..", "views", "dashboard.html"));
});

api.get("/servers", Auth, (req, res) => {
  res.sendFile(join(__dirname, "..", "views", "servers.html"));
});

api.get("/servers/:id", Auth, (req, res) => {
  if (!req.user.guilds.find((x) => x.id == req.params.id))
    return res.redirect("/servers");
  res.sendFile(join(__dirname, "..", "views", "server.html"));
});

api.get("/api/info", (req, res) => {
  res.send({
    ClientID: config.ClientID,
    Permissions: config.Permissions,
    Scopes: config.Scopes,
    Website: config.Website,
    CallbackURL: config.CallbackURL,
  });
});

api.get("/api/commands", (req, res) => {
  res.send({ commands: Commands });
});

api.get("/logout", (req, res) => {
  if (req.user) req.logout();
  res.redirect("/");
});

module.exports = api;
