
events.listen('recipes', function (event) {
    function emote(name, url) {
        event.recipes.emojiful.emoji_recipe({
            'category': 'Misc Emoji',
            'name': name,
            'url': 'https://cdn.discordapp.com/emojis/' + url,
        })
    }
    emote('cat_sit', '795883340027920406.png')
    emote('thunkban','761347667045384192.png')
    emote('dancey','844601017651036160.gif')
})
events.listen('recipes', function (event) {
    function emote(name, url) {
        event.recipes.emojiful.emoji_recipe({
            'category': 'Machiavellian Madness',
            'name': name,
            'url': 'https://cdn.discordapp.com/emojis/' + url,
        })
    }
    emote('wither', '820687314804146176.png')
    emote('steve', '824445728155369512.png')
    emote('skull', '820688630393077801.png')
    emote('puffer', '820686086741164052.png')
    emote('poison', '820687262936989716.png')
    emote('plat_mmm', '824090060118949928.png')
    emote('plat', '824090060488048640.png')
    emote('pixel_logo', '824082977821687818.png')
    emote('night_vision', '820687194993459240.png')
    emote('mm', '824090059393073193.png')
    emote('mad', '823673146506215484.png')
    emote('logo', '823671967126782012.png')
    emote('invisibility', '820687399117258782.png')
    emote('hero', '820687421750247474.png')
    emote('goju', '823669888424869908.png')
    emote('diamond', '820686233545736272.png')
    emote('glowing', '820687356809445376.png')
    emote('blink_o_love', '829105226324639825.png')
    emote('blink_o_ball' , '826618361702121533.png')
    emote('blind' , '820687102063673355.png')
    

    // emote(' emoji name here ' , ' last end of discord link here ')
    //adapted by Bucky
})

console.info('Emoji')