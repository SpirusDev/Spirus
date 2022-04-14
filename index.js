const { app, BrowserWindow } = require('electron')

const config = require("./spirus.config")

const discordClientID = config.discordRPC.clientID
let client = null

if (config.discordRPC.enabled == true) {
	client = require('discord-rich-presence')(discordClientID)
}

const createWindow = () => {
	const win = new BrowserWindow({
		width: config.window.width,
		height: config.window.height,
		icon: "./public/favicon.png"
	})
	win.webContents.addListener('new-window', function(e, url) {
		e.preventDefault();
		require('electron').shell.openExternal(url);
	});

	win.loadFile('./public/index.html')
}

app.whenReady().then(() => {
	createWindow()

	app.on('activate', () => {
		if (BrowserWindow.getAllWindows().length === 0) createWindow()
	})

	console.log(client)
})