const { app, BrowserWindow, shell } = require("electron");

const dev = !app.isPackaged;
const config = require("./spirus.config");

const discordClientID = config.discordRPC.clientID;
let discordClient = null;
if (config.discordRPC.enabled == true)
    discordClient = require("discord-rich-presence")(discordClientID);

function createWindow() {
    const win = new BrowserWindow({
        width: config.window.width,
        height: config.window.height,
        icon: "./assets/favicon.png",
    });

    win.webContents.addListener("new-window", (e, url) => {
        e.preventDefault();
        shell.openExternal(url);
    });

    if (dev) win.loadURL(`http://localhost:${process.env.ELECTRON_WEBPACK_PORT}`);
    else win.loadFile("./dist/index.html");
}

app.on("ready", () => createWindow);

app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
});
