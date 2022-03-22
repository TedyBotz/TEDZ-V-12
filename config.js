/**
   *DI LARANG REUPLAD RECODE SENDIRI BASE NYA KALAU MAU 🗿👌
   https://github.com/DikaArdnt/Hisoka-morou

 * yhaa kasihan di enc :v
 * folow ig ku : kikollyn 
 * 1,5k folower no enc🐦
 
 * kalau ga bisa install modules cht
  wa.me/6283808840711 
  
  tq tq
  DikaArdnt.
  Zeone ofc
  sanzy Yt 
  Kizz - Botz 
  all crtr bot dll subscribe.
 
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': 'sanzychan01',
}

// Other
global.owner = ['6283808840711','62 83184072215','6283184072215']
global.premium = ['6283808840711']
global.packname = '2022'
global.author = 'KIKI ID'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/kiki.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
