onEvent('recipes', event => {
    //functions 
    function modifyShaped (result, count, pattern, ingridients) {
        event.remove({
            output: result,
            type: 'minecraft:crafting_shaped'
        })
        event.shaped(item.of(result, count),
            pattern,
            ingridients
        ).id(`kjs_` + result)
    }
    function modifyShapeless (result, count, ingridients) {
        event.remove({
             output: result,
            type: 'minecraft:crafting_shapeless'
            })
            event.shapeless(item.of(result, count),
                ingridients
            ).id(`kjs_` + result)
    }
    
    const {mixing,filling,mechanical_crafting,splashing}= event.recipes.create
    //recipes
    modifyShapeless('create:rose_quartz',1,['minecraft:quartz',Item.of('minecraft:redstone', 4)])
    //misc recipes
    //to do: make a function for these
    //mixxing
    mixing('3x immersiveengineering:blastbrick', ['minecraft:nether_bricks','minecraft:bricks','minecraft:magma_block']).superheated().id('kjs_immersiveengineering:blastbrick_from_block')
    mixing('4x refinedstorage:quartz_enriched_iron',['#forge:ingots/iron','#forge:ingots/iron','#forge:ingots/iron','#forge:gems/quartz']).heated().id('kjs_refinedstorage:quartz_enriched_iron')
    mixing('2x eidolon:pewter_blend',['#forge:ingots/lead','#forge:ingots/iron']).heated().id('kjs_eidolon:pewter_blend')
    mixing('3x immersiveengineering:blastbrick', ['minecraft:brick','minecraft:nether_brick','minecraft:brick','minecraft:nether_brick','minecraft:brick','minecraft:nether_brick','minecraft:brick','minecraft:nether_brick','minecraft:magma_block']).superheated().id('kjs_immersiveengineering:blastbrick_from_brick')
    //filling
    filling(Item.of('powah:dielectric_paste', 24), [
        'kubejs:prepared_dielectric_paste',
        Fluid.of('minecraft:lava', 10)
      ]).id('kjs_powah:dielectric_paste')
    //mech crafters
    mechanical_crafting('torchmaster:megatorch',[
        'TWT',
        'DLD',
        'GLG'
      ],{
        T:'minecraft:torch',
        D:'minecraft:diamond',
        L:'#minecraft:logs',
        G:'create:brass_block',
        W:'bloodmagic:basemonstersoul',
      })
      //"splash"
      splashing(Item.of('refinedstorage:silicon').withChance(0.50),'create:limesand').id('kjs_create:silicon_from_limesand')
      
})