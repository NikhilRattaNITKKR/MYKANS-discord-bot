const Discord = require('discord.js');
const { config } = require('dotenv');
const bot = new Discord.Client();

config();
const TOKEN = process.env.TOKEN;
bot.login(TOKEN);


bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  if (msg.content === '!hi') {
    msg.reply('Hello User');
    msg.channel.send('How are you?');
  } else if (msg.content.startsWith('!kick')) {
    if (msg.mentions.users.size) {
      const taggedUser = msg.mentions.users.first();
      msg.channel.send(`You wanted to kick: ${taggedUser.username}`);
    } else {
      msg.reply('Please tag a valid user!');
    }
  }
  else if(msg.content.startsWith('!how')){
    if (msg.mentions.users.size) {
      const taggedUser = msg.mentions.users.first();
      msg.channel.send(`${taggedUser.username} is super adorable :)`);
    } else {
      msg.reply('Please tag a valid user!');
    }
  }
});
