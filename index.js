const mineflayer = require('mineflayer');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Bot está online!');
});

app.listen(PORT, () => {
  console.log('Servidor web rodando!');
});

const bot = mineflayer.createBot({
  host: 'voidrealmss.falixsrv.me', // coloca o IP do seu servidor
  port: 25565, // se for outra porta, muda aqui
  username: 'NomeDoBot'
});

bot.on('login', () => {
  console.log('Bot entrou no servidor!');
});

bot.on('error', (err) => {
  console.log('Erro:', err);
});
