const { Client, CustomStatus } = require('discord.js-selfbot-v13');
const client = new Client();
const express = require('express');
const app = express();

////////////////////////////////////////////////////////////////
const port = 3000 //Port
const emoji = "🌙"; //Emoji here
const state = "some custom status"; //Status
const status = "dnd"; //online / idle / dnd / invisible
const token = proccess.env.token || "DISCORD TOKEN HERE"; //Your discord account TOKEN
///////////////////////////////////////////////////////////////


app.get('/', (req, res) => {
  res.send('Success!!')
});
app.listen(port, () => {
  console.log(`Listening to port: ${port}`);
});

client.on('ready', async () => {
  console.log(`${client.user.username} is ready!`);
  const cs = new CustomStatus(client)
    .setEmoji(emoji);
    .setState(state);
  client.user.setPresence({ activities: [cs], status: status });
});

client.login(token);
