console.log("BOT runner for discord : Sneaky Sharky \n");

var config = require('./config.json');
var opus = require("opusscript");

const Discord = require('discord.js');
const client = new Discord.Client();
const d20 = require('d20');
const ytdl = require('ytdl-core');
const streamOptions = { seek: 0, volume: 1 };
const botActions = require('./actions.js');


var commands = new Map();
commands.set(new RegExp('!help', 'i'), displayCommands);
commands.set(new RegExp('^AH!$', 'i'),  botActions.ah);
commands.set(new RegExp('^tout petit$', ''), botActions.toutPetit);
commands.set(new RegExp('^flgv$', 'i'), botActions.flgv);
commands.set(new RegExp('^doli$', ''), botActions.doli);
commands.set(new RegExp('^towa$', ''), botActions.towa);
commands.set(new RegExp('^complot$', ''), botActions.complot);
commands.set(new RegExp('pr[eé]tention', ''), botActions.cheville);


function displayCommands(message) { 
  var helpMessage = '';

  commands.forEach(function(botAction, command) {
    var command_array = command.toString().split('/');

    cmd_options = []
    
    if(command_array[2] === 'i') 
      cmd_options.push('Case insensitive');

    if(command_array[1].substring(0,1) === '^' && command_array[1].slice(-1) === '$')
      cmd_options.push('Strict command');
      
    var final_command = command_array[1].replace('^','').replace('$','');

    helpMessage += final_command + ' :\t\t'+ cmd_options.join(' - ') + '\n';
  });
  helpMessage = '```'+helpMessage+'```';
  message.channel.send(helpMessage);
}


client.on('ready', () => {
  console.log('The bot is ready!');

  client.user.setUsername('SneakySharky');
  client.user.setGame('Sneak sneak');
  

});


client.on('message', message => {

  // ** Parse message and process actions **
  if(message.author.username !== client.user.username) {
    commands.forEach(function (botAction, regexp) {
      if(message.content.match(regexp)) {
        botAction(message);
      } 
    });
  }



  if(message.content === 'dev') {

    var voiceChannel = client.channels.find(val => val.type === 'voice' && val.name === 'GeneralDeuxGaules'); //broken syntax FTW
    const broadcast = client.createVoiceBroadcast();

    //console.log(voiceChannel);
    voiceChannel.join().then(connection => {
      const stream = ytdl('https://www.youtube.com/watch?v=AzQ5HqsYx1U', { filter : 'audioonly' });
      broadcast.playStream(stream);
      const dispatcher = connection.playBroadcast(broadcast);
    })
    .catch(console.error);
  }


  // Dices
  parsing = message.content.match(/^\s*\d+?\s*d\s*\d+\s*.*?\s*$/);
  if(parsing) {
    console.log("Parsed " + message.content);
    var dice_res = d20.verboseRoll(message.content);
    message.reply(dice_res);
  }

});

client.login(config.token);
