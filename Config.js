const fs = require('fs')

global.botname = "Nted Crasher"
global.version = "? ??"
global.packname = 'Nted Offical'
global.owner = "6289510019072"
global.footer = "NtedSempak"
global.idch = "120363393940866504@newsletter"
global.packname = "Nted Inflow"
global.welcome = false
global.autoread = false
global.anticall = false

//=========[ Settings Thumb V1 ]===============//
global.thumb = "https://files.catbox.moe/h6cnl8.mp4"
//==========================================//
global.mess = {
    done: '*`[ ◇ ] : Status Done!`*', 
    owner: '*`[ ◇ ] : Fiur Ini Khusus owner`*',
    private: '*`[ ◇ ] : Fitur Khusus Privat Onlu*',
    group: '*`[ ◇ ] : Fitur Khusus Group`*',
    botAdmin: '*`[ ◇ ] : Bot Not Admin`*',
    admin: '*`[ ◇ ] : khusus admin`*',
    wait: '*`[ ◇ ] : 𝚛𝚎𝚚𝚞𝚞𝚎𝚜𝚝 𝚙𝚛𝚘𝚌𝚎𝚜𝚎𝚍𝚍..`*',
    success: '*`[ ◇ ] : Sukses ✅\n>By Nted`*',
    prem: '*`[ ◇ ] : 𝚛𝚎𝚚𝚞𝚎𝚜𝚝 𝚘𝚗𝚕𝚢 𝚏𝚘𝚛 𝚞𝚜𝚎𝚛 𝚙𝚛𝚎𝚖..`*',
}
//==================================//


let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
