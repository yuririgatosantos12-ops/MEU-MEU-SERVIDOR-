const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'voidrealmss.falixsrv.me', // exemplo: 127.0.0.1 ou play.voidrealms.com
  port: 25565, // porta padrão
  username: 'BotAFK', // nome que vai aparecer no servidor
  version: false // detecta automático
})

bot.on('spawn', () => {
  console.log('✅ Bot entrou no servidor!')
})

bot.on('end', () => {
  console.log('❌ Bot desconectou!')
})

bot.on('error', (err) => {
  console.log('Erro:', err)
})
