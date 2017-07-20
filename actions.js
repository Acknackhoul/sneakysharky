var BotAction = function (client) {};

BotAction.prototype.test = function () {
  console.log('Yeah you!');
};

BotAction.prototype.ah = function(message) {
    message.channel.send({
      "embed": {
        title: 'AH!',
        "image": {
          "url": "https://cdn.discordapp.com/attachments/311814474736599040/336463473762500609/bro2.JPG",
        }
      }
    });
}

BotAction.prototype.flgv = function(message) {
  message.reply("FLGV :frog:");
}

BotAction.prototype.toutPetit = function(message) {
  var guild = message.client.guilds.find('id', '320180718313668619'); //Gloubi!
  var emote = guild.emojis.find('name','luli');
  message.react(emote);
  message.channel.send("C'est Luli! " + emote.toString());

}

BotAction.prototype.doli = function(message) {
  message.channel.send("https://www.youtube.com/watch?v=Fm-nqlO98tg");
}

BotAction.prototype.towa = function(message) {
  message.channel.send("Tomate :tomato:");
  //message.reply();
}


BotAction.prototype.complot = function(message) {
  message.channel.send({
    "embed": {
      "title": 'Ca complote!',
      "image": {
        "url": "https://cdn.discordapp.com/attachments/320180718313668619/323231003848081408/2017-05-04_18927031.PNG"
      }
    }
  });
}

BotAction.prototype.cheville = function(message) {
  message.channel.send({
    "embed": {
      "title": '#JeSuisCheville',
      "image": {
        "url": "https://images.discordapp.net/attachments/320180718313668619/327437714704302080/image.png"
      }
    }
  });
}



////---
module.exports = new BotAction();