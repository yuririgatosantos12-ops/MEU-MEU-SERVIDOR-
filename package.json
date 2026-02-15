const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Bot Minecraft 24h ativo!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Servidor web rodando!");
});
const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'voidrealmss.falixsrv.me',
  port: 25565,
  username: 'BotAFK_Render'
});

bot.on('spawn', () => {
  console.log('Bot spawnou no mundo!');
});
