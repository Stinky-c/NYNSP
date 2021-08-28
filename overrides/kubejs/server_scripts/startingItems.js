// priority: 1

//everytime the player logs in
events.listen('player.logged_in', function (event) {
  if(event.hasGameStage('starting_items')){
  event.server.scheduleInTicks(1, event.server, function (callback){
      event.player.tell('If there are any bugs or exploits head over to the discord')
  })
  
  event.server.scheduleInTicks(1, event.server, function (callback){
    event.player.tell('If you wish to assist in pack development also join the discord to recommned idea or become a tester')
  })
  event.server.scheduleInTicks(1, event.server, function (callback){
    event.player.tell(text.blue('https://discord.gg/Htxchm8PNC'))
  })
  }
})

//first time the player logs in
events.listen('player.logged_in', function (event) {
    if (!event.hasGameStage('starting_items')) {

      event.addGameStage('starting_items')
      event.player.give(Item.of('farmersdelight:squid_ink_pasta',4))
      event.player.give(Item.of('minecraft:leather_chestplate'))
      event.server.scheduleInTicks(1, event.server, function (callback){
      event.player.tell('"/top config" to change The one Probe Configs')
      }) 
    }
})

console.info('Starting Scripts')