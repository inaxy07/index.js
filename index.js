require('dotenv').config();

const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers
  ]
});

const TOKEN = process.env.TOKEN;

client.on('clientReady', () => {
  console.log(`${client.user.tag} aktif!`);
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === "giris-cikis");
  if (!channel) return;

  channel.send(`🟢 <@${member.id}> Aramıza Katıldı, Hoşgeldin!`);
});

client.on('guildMemberRemove', member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === "giris-cikis");
  if (!channel) return;

  channel.send(`🔴 <@${member.id}> Aramızdan Ayrıldı, Hoşçakal!`);
});

client.login(TOKEN);