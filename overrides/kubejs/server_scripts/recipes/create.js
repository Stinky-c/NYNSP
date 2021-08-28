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
    
    const {mixing,filling,mechanical_crafting,splashing,sequenced_assembly,deploying,cutting}= event.recipes.create
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
      //SA
       
      //event.recipes.create.sequenced_assembly(output[], input, sequence[]).transitionalItem(item).loops(number)

    sequenced_assembly([
        item.of('appliedenergistics2:annihilation_core',2).withChance(20.0),
        item.of('refinedstorage:improved_processor',2).withChance(20.0),
        item.of('refinedstorage:destruction_core',2).withChance(20.0),
        item.of('minecraft:quartz',4).withChance(20.0),
        item.of('appliedenergistics2:fluix_dust',4).withChance(20.0)],
        'mekanism:advanced_control_circuit',[
        deploying('kubejs:refined_blank_core',['kubejs:refined_blank_core','refinedstorage:destruction_core']),
        deploying('kubejs:refined_blank_core',['kubejs:refined_blank_core','refinedstorage:improved_processor']),
        deploying('kubejs:refined_blank_core',['kubejs:refined_blank_core','minecraft:quartz']),
        deploying('kubejs:refined_blank_core',['kubejs:refined_blank_core','appliedenergistics2:fluix_dust']),
        cutting('kubejs:refined_blank_core','kubejs:refined_blank_core').processingTime(200)
        ]).transitionalItem('kubejs:refined_blank_core').id('kjs_appliedenergistics2:annihilation_core').loops(1)

    sequenced_assembly([
            item.of('appliedenergistics2:formation_core',2).withChance(20.0),
            item.of('refinedstorage:improved_processor',2).withChance(20.0),
            item.of('refinedstorage:construction_core',2).withChance(20.0),
            item.of('minecraft:quartz',4).withChance(20.0),
            item.of('appliedenergistics2:fluix_dust',4).withChance(20.0)],
            'mekanism:advanced_control_circuit',[
            deploying('kubejs:refined_blank_core',['kubejs:refined_blank_core','refinedstorage:construction_core']),
            deploying('kubejs:refined_blank_core',['kubejs:refined_blank_core','refinedstorage:improved_processor']),
            deploying('kubejs:refined_blank_core',['kubejs:refined_blank_core','minecraft:quartz']),
            deploying('kubejs:refined_blank_core',['kubejs:refined_blank_core','appliedenergistics2:fluix_dust']),
            cutting('kubejs:refined_blank_core','kubejs:refined_blank_core').processingTime(200)
            ]).transitionalItem('kubejs:refined_blank_core').id('kjs_appliedenergistics2:formation_core').loops(1)

        //perhaps make a random item gen using this? ores? ingots to other ingots?
        /*
        sequenced_assembly([
            item.of('kubejs:test_item_2').withChance(0.0),
            item.of('appliedenergistics2:annihilation_core',2).withChance(20.0),
            item.of('refinedstorage:improved_processor').withChance(20.0),
            item.of('refinedstorage:destruction_core').withChance(20.0),
            item.of('minecraft:quartz').withChance(20.0),
            item.of('appliedenergistics2:fluix_dust').withChance(20.0)],
            'mekanism:advanced_control_circuit',[
            deploying('kubejs:refined_blank_core',['kubejs:refined_blank_core','refinedstorage:improved_processor']),
            ]).transitionalItem('kubejs:refined_blank_core').id('kjs_kubejs:test_item').loops(1)
            */
        //ore processing attempts
/*
        deploying(item.of('create:crushed_iron_ore',2),['minecraft:iron_ore','#forge:gravel']),
        deploying(item.of('mekanism:dirty_dust_iron'),['create:crushed_iron_ore','#forge:sand']),
        cutting('minecraft:iron_ingot',item.of('mekanism:dirty_dust_iron',2))

    sequenced_assembly([
        Item.of('minecraft:iron_nugget', 12),
        Item.of('minecraft:iron_ingot', 2),
    ],'minecraft:iron_ore',[
        deploying('create:crushed_iron_ore',['minecraft:iron_ore','#forge:gravel']),
        deploying('mekanism:dirty_dust_iron',['create:crushed_iron_ore','#forge:sand']),
        cutting('mekanism:dirty_dust_iron','minecraft:iron_ingot')
    ]).id('kjs_create:iron_ore_processing').loops(1)
     sequenced_assembly([
        item.of('powah:ender_core').withChance(1.0),
      ], 'minecraft:ender_eye', [
        deploying('minecraft:ender_eye', ['create:incomplete_large_cogwheel', 'powah:capacitor_basic_tiny']),
        deploying('minecraft:ender_eye', ['create:incomplete_large_cogwheel', 'powah:dielectric_casing']),
        cutting('create:incomplete_large_cogwheel', 'create:incomplete_large_cogwheel').processingTime(50)
      ]).transitionalItem('minecraft:ender_pearl').loops(2).id('kjs_powah:ender_core')
*/
})