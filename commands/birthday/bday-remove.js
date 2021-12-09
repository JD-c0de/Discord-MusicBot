const { Util, MessageEmbed } = require("discord.js");
const Database = require("@replit/database")


module.exports = {
  name: "bday-remove",
  description: "Remove your birthday",
  usage: "",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["bdayremove", "birthday-remove", "bday-rm", "bdayrm"],

  run: async (client, message, args, { GuildDB }) => {
        let server = message.guild.id;
        let user = message.author;
        let userMention = "<@"+user+">";
        let userServer = userMention + server;
        let b_day = new Database();
        await b_day.delete(userServer);

        client.sendTime(
          message.channel,":white_check_mark: | "+ userMention +"'s birthday removed");
        //let check = await b_day.list();
        //console.log(check);

        
        
    },
}