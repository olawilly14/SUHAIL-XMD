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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2347081414294";
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_23_21_12_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTg0LFxuICAgICAgICAzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA3NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNTksXG4gICAgICAgIDExMyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjMzLFxuICAgICAgICA2NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDM3LFxuICAgICAgICA4MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjE1LFxuICAgICAgICA5LFxuICAgICAgICA3MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDk1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDMzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDc2LFxuICAgICAgICA4NSxcbiAgICAgICAgODQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDExNCxcbiAgICAgICAgODAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDc5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMDksXG4gICAgICAgIDcsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIsXG4gICAgICAgIDI2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDU0LFxuICAgICAgICAxNSxcbiAgICAgICAgMjE2LFxuICAgICAgICA5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjAzLFxuICAgICAgICA2OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTg0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDk1LFxuICAgICAgICAyMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxODIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTA1LFxuICAgICAgICA2MixcbiAgICAgICAgNDIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNjksXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxODcsXG4gICAgICAgIDI3LFxuICAgICAgICA1NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDY2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDkyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgODAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTgwLFxuICAgICAgICA3OSxcbiAgICAgICAgMixcbiAgICAgICAgMTQwLFxuICAgICAgICAzNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDgzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjExLFxuICAgICAgICA3NixcbiAgICAgICAgMTQwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTY0LFxuICAgICAgICA2LFxuICAgICAgICA3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE3NixcbiAgICAgICAgNTIsXG4gICAgICAgIDExOCxcbiAgICAgICAgODYsXG4gICAgICAgIDkwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTA2LFxuICAgICAgICA1NixcbiAgICAgICAgMTk1LFxuICAgICAgICA0MCxcbiAgICAgICAgMjUxLFxuICAgICAgICA4OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjI0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDQxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyNixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNzZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyLFxuICAgICAgICA4MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDc3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjA1LFxuICAgICAgICA5NyxcbiAgICAgICAgMjMyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxODgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODAsXG4gICAgICAgIDMsXG4gICAgICAgIDM4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDMwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTkwLFxuICAgICAgICA4NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDUwLFxuICAgICAgICAxODEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIxLFxuICAgICAgICA5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAzNixcbiAgICAgICAgMTExLFxuICAgICAgICA5NyxcbiAgICAgICAgMTIxLFxuICAgICAgICA3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDksXG4gICAgICAgIDE5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRnZPYmZoYVozMXVUekRsRkl5UGVuSmNsMlF6aDJYeUdGakJGdWtxYjUwUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicVlVOXMtS3dSQy1WMkRUTW5VV01kUVwiLFxuICBcInBob25lSWRcIjogXCIzMGE4YWJhYi03ZDRiLTQ2NjMtOWNjNS1mYzg3NTExNDY0M2NcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM3LFxuICAgICAgNjYsXG4gICAgICAxMTcsXG4gICAgICAxNjgsXG4gICAgICA4NSxcbiAgICAgIDExNCxcbiAgICAgIDYwLFxuICAgICAgMyxcbiAgICAgIDExNyxcbiAgICAgIDIxNixcbiAgICAgIDIyOSxcbiAgICAgIDQ5LFxuICAgICAgNzMsXG4gICAgICAxNDQsXG4gICAgICAxMzksXG4gICAgICA0MixcbiAgICAgIDE1MCxcbiAgICAgIDAsXG4gICAgICAxNTQsXG4gICAgICAxNTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE2LFxuICAgICAgMjE3LFxuICAgICAgNjcsXG4gICAgICAxMjgsXG4gICAgICAzOSxcbiAgICAgIDEzLFxuICAgICAgMjA2LFxuICAgICAgMTkyLFxuICAgICAgMTA5LFxuICAgICAgMjI1LFxuICAgICAgMTczLFxuICAgICAgMTY1LFxuICAgICAgNTUsXG4gICAgICAxMjIsXG4gICAgICAxNTksXG4gICAgICAxOTgsXG4gICAgICAxODgsXG4gICAgICAxMjAsXG4gICAgICAyMDAsXG4gICAgICAxMjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTldONVZOTEdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMjEyMDQyNzk6MTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJDb2FjaCBGb2xha2UgV2lsbGlhbXNcIixcbiAgICBcImxpZFwiOiBcIjc0MjE3NDM3NTQ0NjE0OjE5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09PSmpQZ0RFUGE5b3JzR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNGxzUS9lbHR2Y1JYbmxJb0hTdCtvUVl5VGFuTDFUN04rYkErNHBtRXFqOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJqZmlVNmJXb1N3K0dycnVqc3dzVzI2M0VwYW5JQ21YRktpUDBMMURvaEQ5Q3JyNlJxWW1QcjJkYUsyVU1Rd2djMlVHaE1wanVjMXg2VHZnZWxmR3pEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJqNDRHbDZXWm42UVNRZnFpNU05QXlCbkttREpxWnYvdUg0c0FoOWNFM2lnRHBBVGlpWWpnbjB0eS96aGs1SW8rWWpEbzgyYjI4bkF6My93M1Z5cVFDUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDIxMjA0Mjc5OjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDkwOTY5M1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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
