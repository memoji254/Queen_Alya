//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kingdavid23565@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "./lib/alya.jpg";
global.devs = "2349123731026";
global.sudo = process.env.SUDO || "2349123731026";
global.owner = process.env.OWNER_NUMBER || "2349123731026";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "./lib/alya.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://alya-pair.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUJIbytFN0pEZnVnNEhKSmN2QkhFdDhZbjBrV3VuVmQ2bHdSYVpLT1JrMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNklqK01oSDBlVXBhMDgzQXZpclJIRjFHZnlvRlVTNDZjUUFFVHFPOVREZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwSlY5TnBZK3c0Nms3OHpMZzhRQVVrdDh4cU5BS3d6dGN2U0lDb01iMTBnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJERGNNSjQ0WkhpOU03NHYrVWFWN3V4bitxOW5qbmRYdnZNZlpKTnZOYUJvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlJUDJLTmlOR3VuOE9WM3FlVUNoQTdVbnVyR0l1UXE5amFFZmtDby9rR2s9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imw4S3R1b1lZTXZjK2NzYXdpR2J1VDNIRG5WNG1oQ3Zmb0cveDRtY0krR3c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0M1dXJvL0tCaXJqeUFMZHZaWHFsSlBGWTR2YXoyYTA3dk1MckFZeVVWbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYmZDdFRmNDhKdVIwbHNhV05CNlhKcFdCZXp2amgxRkVDbFFJb3luZGRtbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjR2cENHU085NlVlN0dqcGErQmRLRFVRcFBvQm1oRVVJdHEzTzlnZ2JrZ3dYRGEzQ0RTS1k1aEpyTWJhZm84ZklXT05qcmRBYXB5K2lhZ1o2anpQbGhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzksImFkdlNlY3JldEtleSI6ImlxMis5czhkdnJLWmJFaThNVGo0VSthZU00eDZIQWxLNm1VaStRSVJxbW89IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjhWSWhmQl9iUlVDYklpYVNYSEF1S1EiLCJwaG9uZUlkIjoiY2EyNDVjYjYtMzk1MS00ODkxLWIxYTUtYWI1ZjhjOTUzZGRkIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdpWkRJWGlvU0lzVnJhRERSV1FKVlpHZ3h1TT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3VGZFYU4zUUZQQS9QQnVyRHRIVlRTVmNlV1U9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiMlhYM1lGRlAiLCJtZSI6eyJpZCI6IjI1NDcwMDYzOTUxODo2NEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJtM21+w7hqISJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSTNPNTE4UThmNyt0d1lZQmlBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRTZQZUtOTzJVeFdOZ1Q4aTIvNzI2OWdWay9CK2RkU0JQcFJTdWcrRFdBMD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiVk9Bd0pTRXM1c3htd2FsN3Z5b3lKWVJueElqdXc0cU0yRy8zK28zTmlOM3AwaWZORFpTbmJTMEhCTjRqdzdtenZDamdvZkNNcUhmMW5VeCt2R1YrRGc9PSIsImRldmljZVNpZ25hdHVyZSI6IkdxZWZteFI3dU9TNUhjUnVxUGRLV2w5d1N0U0o4NmpQaVhDWFU0N1FxSVIzZkFZbGZHYUxuQkh5QXFER2ZJNHpTdjhTSVMvV3UyQWlOTCtGU2F0amdnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzAwNjM5NTE4OjY0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJPajNpalR0bE1WallFL0l0dis5dXZZRlpQd2ZuWFVnVDZVVXJvUGcxZ04ifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjgwMzY3MzR9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "+",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ALYA™`",
  author: process.env.PACK_AUTHER || "QUEEN_ALYA",
  packname: process.env.PACK_NAME || "A L Y A",
  botname: process.env.BOT_NAME || "QUEEN_ALYA",
  ownername: process.env.OWNER_NAME || "STAR KING",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
