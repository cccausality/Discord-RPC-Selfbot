// to understand how to use app id and image keys, follow https://github.com/slowwdev/Discord-Selfbot-RPC/wiki/Installation

module.exports = {
    // discord bot token
    "token": "MTM3OTE2NDg1MDE3NzE3OTY2OA.Ga8hA_.-sS4mpTQblab-UZ_wCFhBJwQqnrmltCVvQ3jsw",
    // spotify/game/twitch
    "mode": "", 
    // dnd/online/idle
    "status": "",

    "game": {
        "applicationID": "",

        "name": "", // title
        "details": "", // first row below title
        "state": "", // row below first row

        "largeImageKey": "", // Large Image
        "largeImageText": "", // the text when img surrounded (default is largeimage name in dev portal)

        "smallImageKey": "", // Small Image
        "smallImageText": "",
        
        // Date.now() Epoch timestamps
        "startTimestamp": "", // time elapsed since this timestamp (increase ++)
        "endTimestamp": "" // time left since this timestamp (decrease --)
    },
    "twitch": {
        "applicationID": "",
        "url": "", // twitch channel link

        "details": "", // title
        "state": "", // first row below title (playing ...)

        "largeImageKey": "", // in dev portal, upload img then name it with the name you want to appear with image is surrounded
        "largeImageText": "", // use this to replace text when img surrounded it will also be second row below title, if you dont want the row dont use it and setup text via dev portal (img name)
        
        "smallImageKey": "",
        "smallImageText": "",

        "startTimestamp": "",
        "endTimestamp": ""
    },
    "spotify": {
        "name": "Spotify", // for exemple listening to {name} instead of listening to spotify
        "details": "paragons", // title
        "state": "?", // row below title

        "largeImageKey": "https://image-cdn-fa.spotifycdn.com/image/ab67616d0000b273d51cf93fa845c1935289f2d1", // https://github.com/mewzax/Discord-RPC-Selfbot/wiki/Spotify-API
        "largeImageText": "", // will also be second row below title
        
        "smallImageKey": "",
        "smallImageText": "",
        
        "startTimestamp": "1",
        "endTimestamp": "1",
    }
}
