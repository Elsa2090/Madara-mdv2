"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "repo", reaction: "😌", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '𓃮Hello This is𓃮  *✦𝕄𝔸𝔻𝔸ℝ𝔸_𝕄𝔻-𝕍𝟚✦* \n\n ' + "The Following is *✦𝕄𝔸𝔻𝔸ℝ𝔸_𝕄𝔻-𝕍𝟚𝕣𝕖𝕡𝕠*";
    let d = 'https://github.com/Elsa2090/Madara-mdv2';
    let varmess = z + d;
    var img = 'https://telegra.ph/file/39e18db893d4a5c097117.jpg';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
/*module.exports.commande = () => {
  var nomCom = ["test","t"]
  var reaction="☺️"
  return { nomCom, execute,reaction }
};

async function  execute  (origineMessage,zok) {
  console.log("Commande saisie !!!s")
   let z ='Salut je m\'appelle *MEGATRON-BOT* \n\n '+'je suis un bot Whatsapp Multi-appareil '
      let d =' developpé par *Damon*'
      let varmess=z+d
      var img='https://telegra.ph/file/bcf5cec3445652ab197bc.jpg'
await  zok.sendMessage(origineMessage,  { image:{url:img},caption:varmess});
}  */ 
