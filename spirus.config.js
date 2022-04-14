// config file for spirus

module.exports = {
	window: {
		width: 1920,
		height: 1080
	},
	discordRPC: {
		enabled: true, // feel free to disable
		clientID: "", // set to your client ID

		config: {
			state: "Spirus!", // state of the game
			details: "https://github.com/EclipseLikesSpace/Spirus", // the details
			startTimestamp: Date.now(),
			endTimestamp: null, // leave null for "Time elapsed"
			largeImageKey: 'spirus_large', // need to set these in your Discord Developer Portal
			smallImageKey: 'spirus_small', // ^
			instance: true, // leave this true
		}
	},
	spirusOptions: {
		madeWithSpirusWatermark: true // disable this if it is blocking canvas
	}
}