// priority: 1

onEvent('recipes',event =>{  
    function smelt ( output, input, xp){
      event.smelting(output,input).xp(xp).id('kjs_' + output)
    }
    const {stonecutting,shapeless} = event
    event.replaceOutput({id:'immersiveengineering:crafting/furnace_heater'}, 'createaddition:heater', 'immersiveengineering:furnace_heater')
    //create
    //QOL
    shapeless('4x minecraft:quartz',['minecraft:quartz_block'])
    stonecutting('minecraft:smooth_quartz','minecraft:quartz_block')
    smelt('fluxnetworks:flux_dust','minecraft:redstone',0.1)
    smelt(Item.of('refinedstorage:silicon', 4),'#forge:storage_blocks/quartz',2.0)
    
})

console.info('Hello world!')