const { zokou } = require("../framework/zokou");
const moment = require("moment-timezone");
const { default: axios } = require('axios');
//const conf = require('../set');


zokou({ nomCom: 'test',
    desc: 'To check Test bot spead',
    Categorie: 'General',
    reaction: '🚀', 
    fromMe: 'true', 

       
  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;
    const { start} = new Date().getTime()
    return repondre('* 𝕄𝔸𝔻𝔸ℝ𝔸_𝕄𝔻-𝕍𝟚 𝕀𝕊 𝔸𝕃𝕀𝕍𝔼 𝔹𝕐 𝔹ℝ𝕐𝔸ℕ𝕋 𝕋𝔼ℂℍ *\n ```' + Responding at 2000 + '``` *ms*') 
    const { end } = new Date().getTime()
    await zok.sendMessage('*𝕋𝕖𝕤𝕥 𝕔𝕠𝕞𝕡𝕝𝕖𝕥𝕖!*\n ```' + (end - start) + '``` *(◔‿◔)*')
  }
)
