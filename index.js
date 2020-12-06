Discord = require('discord.js');
Bot = new Discord.Client();
Prefix = ("Enter Prefix Here");
Token = ("Enter Token Here");
Games = ["Enter Games Here"];
Game = Games[Math.floor(Math.random()*Games.length)];
Activity = ["PLAYING", "STREAMING", "WATCHING"];
Currently = Activity[Math.floor(Math.random()*Activity.length)];
Status = ("Online")

if (Currently == "PLAYING") {Mode = ("Playing")}
if (Currently == "STREAMING") {Mode = ("Streaming")}
if (Currently == "WATCHING") {Mode = ("Watching")}

Bot.once('ready', () => {
  console.info(`Name: ${Bot.user.username}`);
  console.info(`Bot Status: ${Status}!`);
  console.info(`Currently ${Mode}: ${Game}™!`);
  Bot.user.setActivity(Game, {type: `${Currently}`})
});

Bot.login(Token)
