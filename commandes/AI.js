const { zokou } = require('../framework/zokou');
const traduire = require("../framework/traduction") ;
const { default: axios } = require('axios');
//const conf = require('../set');




zokou({nomCom:"bot",reaction:"🤖",categorie:"IA"},async(dest,zk,commandeOptions)=>{

  const {repondre,ms,arg}=commandeOptions;
  
    if(!arg || !arg[0])
    {return repondre("yes I'm listening to you.")}
    //var quest = arg.join(' ');
  try{
    
    
const message = await traduire(arg.join(' '),{ to : 'en'});
 console.log(message)
fetch(`http://api.brainshop.ai/get?bid=177607&key=NwzhALqeO1kubFVD&uid=[uid]&msg=${message}`)
.then(response => response.json())
.then(data => {
  const botResponse = data.cnt;
  console.log(botResponse);

  traduire(botResponse, { to: 'en' })
    .then(translatedResponse => {
      repondre(translatedResponse);
    })
    .catch(error => {
      console.error('Error when translating into French :', error);
      repondre('Error when translating into French');
    });
})
.catch(error => {
  console.error('Error requesting BrainShop :', error);
  repondre('Error requesting BrainShop');
});

  }catch(e){ repondre("oops an error : "+e)}
    
  
  });  



  zokou({ nomCom: "dalle", reaction: "📡", categorie: "IA" }, async (dest, zk, commandeOptions) => {
    const { repondre, arg, ms } = commandeOptions;
  
    try {
      if (!arg || arg.length === 0) {
        return repondre(`Please enter the necessary information to generate the image.`);
      }
  
      // Regrouper les arguments en une seule chaîne séparée par "-"
      const image = arg.join(' ');
      const response = await axios.get(`https://vihangayt.me/tools/photoleap?q=${image}`);
      
      const data = response.data;
      let caption = '*𝒑𝒐𝒘𝒆𝒓𝒆𝒅 𝒃𝒚 𝑴𝑬𝑮𝑨𝑻𝑹𝑶𝑵-𝑩𝑶𝑻*';
      
      if (data.status && data.owner && data.data) {
        // Utiliser les données retournées par le service
        const imageUrl = data.data;
        zk.sendMessage(dest, { image: { url: imageUrl }, caption: caption }, { quoted: ms });
      } else {
        repondre("Error during image generation.");
      }
    } catch (error) {
      console.error('Erreur:', error.message || 'Une erreur s\'est produite');
      repondre("Oops, an error occurred while processing your request");
    }
  });
  
    zokou({ nomCom: "gpt", reaction: "📡", categorie: "IA" }, async (dest, zk, commandeOptions) => {
    const { repondre, arg, ms } = commandeOptions;


      if (!arg || arg.length === 0) {
        return repondre(`Please ask a question.`);
      }

      // Regrouper les arguments en une seule chaîne séparée par "-"
      const question = arg.join(' ');
     const response = await fetch(`https://api.maher-zubair.tech/ai/chatgptv4?q=${question}`);
const data = await response.json();

await repondre(data.result);
console.log(data.completion); 

import fetch from 'node-fetch';

const handler = async (m, { conn, text, usedPrefix, command }) => {
  try {
    if (!text && !(m.quoted && m.quoted.text)) {
      throw `*_Need query._*\n*_Example:_* _${usedPrefix + command} WHO IS THE FIRST MAN ON EARTH_`;
    }

    if (!text && m.quoted && m.quoted.text) {
      text = m.quoted.text;
    }

    await m.react('⚡');

    const API_URL = `https://api.maher-zubair.tech/ai/youai?q=${text}`;

    const response = await fetch(API_URL);
    const data = await response.json();

    await m.react('✅');

    if (data.status && data.data) {
      const respuestaAPI = data.data;
      conn.reply(m.chat, respuestaAPI, m);
    } else {
      throw '*Could not get a valid answer, sorry 😅.*';
    }
  } catch (error) {
    throw `*Oops, an API error occurred. Please try again later 😅.*`;
  }
};

handler.command = /^madara$/i;
handler.tags = ['study'];

export default handler;
  });


  
