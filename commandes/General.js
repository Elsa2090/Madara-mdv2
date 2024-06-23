
/** 

🇫‌🇱‌🇦‌🇸‌🇭‌-🇲‌🇩‌ 

  𝗖𝗼𝗽𝘆𝗿𝗶𝗴𝗵𝘁 (𝗖) 2024.
 𝗟𝗶𝗰𝗲𝗻𝘀𝗲𝗱 𝘂𝗻𝗱𝗲𝗿 𝘁𝗵𝗲  𝗠𝗜𝗧 𝗟𝗶𝗰𝗲𝗻𝘀𝗲;
 𝗬𝗼𝘂 𝗺𝗮𝘆 𝗻𝗼𝘁 𝘂𝘀𝗲 𝘁𝗵𝗶𝘀 𝗳𝗶𝗹𝗲 𝗲𝘅𝗰𝗲𝗽𝘁 𝗶𝗻 𝗰𝗼𝗺𝗽𝗹𝗶𝗮𝗻𝗰𝗲 𝘄𝗶𝘁𝗵 𝘁𝗵𝗲 𝗟𝗶𝗰𝗲𝗻𝘀𝗲.
 𝗜𝘁 𝗶𝘀 𝘀𝘂𝗽𝗽𝗹𝗶𝗲𝗱 𝗶𝗻 𝘁𝗵𝗲 𝗵𝗼𝗽𝗲 𝘁𝗵𝗮𝘁 𝗶𝘁 𝗺𝗮𝘆 𝗯𝗲 𝘂𝘀𝗲𝗳𝘂𝗹.
 * @𝗽𝗿𝗼𝗷𝗲𝗰𝘁_𝗻𝗮𝗺𝗲 : 𝗙𝗹𝗮𝘀𝗵 𝗠𝗗, 𝗮 𝘀𝗶𝗺𝗽𝗹𝗲 𝗮𝗻𝗱 𝗲𝗮𝘀𝘆 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 𝘂𝘀𝗲𝗿 𝗯𝗼𝘁 
 * @𝗼𝘄𝗻𝗲𝗿: 𝗙𝗿𝗮𝗻𝗰𝗲 𝗞𝗶𝗻𝗴 
 
 **/




const { france } = require("../framework/france");
const {getAllSudoNumbers,isSudoTableNotEmpty} = require("../bdd/sudo")
const conf = require("../set");

france({ nomCom: "owner", categorie: "General", reaction: "💞" }, async (dest, zk, commandeOptions) => {
    const { ms , mybotpic } = commandeOptions;
    
  const thsudo = await isSudoTableNotEmpty()

  if (thsudo) {
     let msg = `*My Super-User*\n
     *Owner Number*\n :
- 🌟 @${conf.NUMERO_OWNER}

------ *other sudos* -----\n`
     
 let sudos = await getAllSudoNumbers()

   for ( const sudo of sudos) {
    if (sudo) { // Vérification plus stricte pour éliminer les valeurs vides ou indéfinies
      sudonumero = sudo.replace(/[^0-9]/g, '');
      msg += `- 💼 @${sudonumero}\n`;
    } else {return}

   }   const ownerjid = conf.NUMERO_OWNER.replace(/[^0-9]/g) + "@s.whatsapp.net";
   const mentionedJid = sudos.concat([ownerjid])
   console.log(sudos);
   console.log(mentionedJid)
      zk.sendMessage(
        dest,
        {
          image : { url : mybotpic() },
          caption : msg,
          mentions : mentionedJid
        }
      )
  } else {
    const vcard =
        'BEGIN:VCARD\n' + // metadata of the contact card
        'VERSION:3.0\n' +
        'FN:' + conf.OWNER_NAME + '\n' + // full name
        'ORG:undefined;\n' + // the organization of the contact
        'TEL;type=CELL;type=VOICE;waid=' + conf.NUMERO_OWNER + ':+' + conf.NUMERO_OWNER + '\n' + // WhatsApp ID + phone number
        'END:VCARD';
    zk.sendMessage(dest, {
        contacts: {
            displayName: conf.OWNER_NAME,
            contacts: [{ vcard }],
        },
    },{quoted:ms});
  }
});

france({ nomCom: "developer", categorie: "General", reaction: "😌" }, async (dest, zk, commandeOptions) => {
    const { ms, mybotpic } = commandeOptions;

    const devs = [
      { nom: "Bryant tech", numero: "233530729233" },
      { nom: "᚛Bryanttech᚜", numero: "94784192378" },
      // Ajoute d'autres développeurs ici avec leur nom et numéro
    ];

    let message = "Hello 👋\n *𝐇𝐄𝐋𝐋𝐎 𝐖𝐄𝐋𝐂𝐎𝐌𝐄 𝐓𝐎 𝐌𝐀𝐃𝐀𝐑𝐀_𝐌𝐃-𝐕𝟐*\n\n*✇❊╌──┈⊰᯽⊱𝘾𝙍𝙀𝘼𝙏𝙊𝙍 𝙄𝙉𝙁𝙊⊰᯽⊱┈──╌❊✇*\n\n\n *❦𝙉𝘼𝙈𝙀: _𝔹𝕣𝕪𝕒𝕟𝕥 𝕋𝕖𝕔𝕙_*\n*❦𝗔𝗚𝗘: 𝟙𝟝*\n*❦𝗟𝗢𝗖𝗔𝗧𝗜𝗢𝗡: _𝕆ℕ 𝔼𝔸ℝ𝕋ℍ_*\n*❦𝗕𝗘𝗟𝗜𝗘𝗩𝗘𝗥: 𝕐𝔼𝕊𝕊𝕊 ✅*\n*❦𝙁𝙍𝙄𝙀𝙉𝘿𝙇𝙔:𝕐𝔼𝕊𝕊𝕊✅*\n*❦𝗚𝗘𝗡𝗗𝗘𝗥: _𝕄𝔸𝕃𝔼_*\n*❦𝗙𝗔𝗩.𝗔𝗡𝗜𝗠𝗘: _ℕ𝔸ℝ𝕌𝕋𝕆_*\n*❦𝗜𝗡𝗦𝗧𝗔𝗚𝗥𝗔𝗠: https://instagram.com/Bryant_tech.1*\n*❦𝗕𝗢𝗧 𝗥𝗘𝗣𝗢:https://github.com/Elsa2090/Madara-mdv2*\n\n*◀︎_______________❚❚___________▶︎\n\n*♦︎𝗞𝗘𝗘𝗣 𝗨𝗦𝗜𝗡𝗚 𝗠𝗔𝗗𝗔𝗥𝗔_𝗠𝗗-𝗩𝟮♦︎*\n\n_𝗧𝗛𝗘 𝗙𝗢𝗟𝗟𝗢𝗪𝗜𝗡𝗚 𝗜𝗦 𝗧𝗛𝗘 𝗗𝗘𝗩𝗘𝗟𝗢𝗣𝗘𝗥:\n:"233530729233";
    for (const dev of devs) {
      message += `----------------\n• ${dev.nom} : https://wa.me/${dev.numero}\n`;
    }
   
  var lien = mybotpic()
    if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption: message }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:message }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
else {
    repondre(lien)
    repondre("link error");
    
}
});

france({ nomCom: "support", categorie: "General" }, async (dest, zk, commandeOptions) => {
  const { ms, repondre, auteurMessage, } = commandeOptions; 
 
  repondre("look on pm sir ")
  await zk.sendMessage(auteurMessage,{text : `https://wa.me/233530729233`},{quoted :ms})

})
 
