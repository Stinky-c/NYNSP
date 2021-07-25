// priority: 1

onEvent('recipes',event =>{  
    function smelt ( output, input, xp){
      event.smelting(output,input).xp(xp).id('kjs_' + output)
    }

    event.replaceOutput({id:'immersiveengineering:crafting/furnace_heater'}, 'createaddition:heater', 'immersiveengineering:furnace_heater')
    //create
    //QOL
    event.shapeless('4x minecraft:quartz',['minecraft:quartz_block'])
    //event.smelting('fluxnetworks:flux_dust','minecraft:redstone').xp(0.1)
    event.stonecutting('minecraft:smooth_quartz','minecraft:quartz_block')
    smelt('fluxnetworks:flux_dust','minecraft:redstone',0.1)
    smelt(Item.of('refinedstorage:silicon', 4),'#forge:storage_blocks/quartz',2.0)
    
})

console.info('Hello world!')