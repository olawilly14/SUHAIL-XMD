const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© CoachFolake WAbot" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2349021204279";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347081414294";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_07_12_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDU3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDMwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDQ0LFxuICAgICAgICA3OSxcbiAgICAgICAgNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjExLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMixcbiAgICAgICAgNzEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDQyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODIsXG4gICAgICAgIDEsXG4gICAgICAgIDEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMCxcbiAgICAgICAgMjM5LFxuICAgICAgICA1NyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDY2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODAsXG4gICAgICAgIDU5LFxuICAgICAgICAyMyxcbiAgICAgICAgMixcbiAgICAgICAgMTM5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTUwLFxuICAgICAgICAzMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDM5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjU1LFxuICAgICAgICA1MixcbiAgICAgICAgMTcwLFxuICAgICAgICA5MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTQwLFxuICAgICAgICA5MSxcbiAgICAgICAgNyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxODAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTAyLFxuICAgICAgICAzOSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDI1LFxuICAgICAgICA4MixcbiAgICAgICAgMjQwLFxuICAgICAgICAxNixcbiAgICAgICAgOTQsXG4gICAgICAgIDEwLFxuICAgICAgICA4NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDgxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTksXG4gICAgICAgIDExOSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDc2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDg3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI2LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDMyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjA1LFxuICAgICAgICA3MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNyxcbiAgICAgICAgMTYxLFxuICAgICAgICA3NixcbiAgICAgICAgNDYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIwLFxuICAgICAgICAxMTksXG4gICAgICAgIDE1MixcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDY1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDg2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM5LFxuICAgICAgICAxNTksXG4gICAgICAgIDUyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzksXG4gICAgICAgIDI1NCxcbiAgICAgICAgOCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDQyLFxuICAgICAgICAzNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDgyLFxuICAgICAgICAyMTksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDc3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDY3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA3MixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA3MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDQzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDY4LFxuICAgICAgICA5NixcbiAgICAgICAgNDAsXG4gICAgICAgIDEyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDc2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDUzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDYyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjU0LFxuICAgICAgICA1OSxcbiAgICAgICAgNzksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTAwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTksXG4gICAgICAgIDI3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDksXG4gICAgICAgIDEzMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNEJGNzZXZ0YxVHZXcnRsb0M1WlAySStXS0xyTnNURHB6ZWZ2eWV6TzVBUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUE8xLTFsSFlTSUtPLTVraHhZVW9TQVwiLFxuICBcInBob25lSWRcIjogXCJhNzI4NTFjOS0wMDYzLTQ2OWEtYjAzNS00MWFmY2EzM2EyZjNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTYsXG4gICAgICA4OSxcbiAgICAgIDIyNyxcbiAgICAgIDksXG4gICAgICAyNDEsXG4gICAgICA5NCxcbiAgICAgIDEyMSxcbiAgICAgIDE0NCxcbiAgICAgIDQ0LFxuICAgICAgMjU0LFxuICAgICAgMjM2LFxuICAgICAgMjIxLFxuICAgICAgMTYxLFxuICAgICAgNzQsXG4gICAgICAyMjQsXG4gICAgICAyMzQsXG4gICAgICA2MSxcbiAgICAgIDE3OCxcbiAgICAgIDI3LFxuICAgICAgMTQwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDgxLFxuICAgICAgMjE5LFxuICAgICAgMTM4LFxuICAgICAgMTU1LFxuICAgICAgMjAzLFxuICAgICAgMTI5LFxuICAgICAgODYsXG4gICAgICA1MCxcbiAgICAgIDEzNixcbiAgICAgIDE5MyxcbiAgICAgIDg1LFxuICAgICAgMjU1LFxuICAgICAgMjM4LFxuICAgICAgMTc5LFxuICAgICAgMjQ1LFxuICAgICAgMTI3LFxuICAgICAgMjAwLFxuICAgICAgMTQxLFxuICAgICAgMjM5LFxuICAgICAgMjhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVkxUSzIzTkVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMjEyMDQyNzk6MTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJDb2FjaCBGb2xha2UgV2lsbGlhbXNcIixcbiAgICBcImxpZFwiOiBcIjc0MjE3NDM3NTQ0NjE0OjE3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09LSmpQZ0RFTUdtbXJzR0dBVWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNGxzUS9lbHR2Y1JYbmxJb0hTdCtvUVl5VGFuTDFUN04rYkErNHBtRXFqOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJwN2xtOWtUMXl4Q1VNb3ZCL0duZHVEZkErODh4UFVuQmVYbVZFczRrMktJbk5LNDZValpFR0NIMzBWVWhFK045bkphRmhqZDZUN2cwV2p5dC9qZEpEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI3NUVBbk9tY0xXSzIrQSt4SWpEcTF6anJQSnIyRE5HNXpPek1xU3JNQXZPOUFMS0cxU25qQUxXVFA4dWRONkh6UW1Pd2pxT08yYksvQmZOMVVnc3ZnQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDIxMjA0Mjc5OjE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDc3NTYyMlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "/",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ CoachFolake WAbot ® 』```", //"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
