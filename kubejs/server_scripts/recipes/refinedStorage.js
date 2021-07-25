onEvent('recipes',event =>{
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

    function shaped (result, count, pattern, ingridients) {
        event.shaped(item.of(result, count),
            pattern,
            ingridients
        ).id(`kjs_` + result)
    }
    function shapeless  (result, count, ingridients) {
        event.shapeless(item.of(result, count),
            ingridients
            ).id(`kjs_` + result)
    }

    //recipes
    //refined storage
    modifyShaped('refinedstorage:machine_casing',9,[
        'QQQ',
        'QSQ',
        'QQQ'
    ],{
        Q:'refinedstorage:quartz_enriched_iron_block',
        S:'mekanism:ingot_steel'
    })

    shaped('refinedstorage:machine_casing',1,[
        'QQQ',
        'QSQ',
        'QQQ'
    ],{
        Q:'refinedstorage:quartz_enriched_iron',
        S:'mekanism:nugget_steel'
    })

    modifyShaped('refinedstorage:controller',1,[
        'QPQ',
        'SFS',
        'QSQ'
    ],{
        Q:'refinedstorage:quartz_enriched_iron',
        P:'kubejs:elite_resonating_radiant_control_circuit',
        S:'refinedstorage:silicon',
        F:'refinedstorage:machine_casing',
    })

    modifyShaped('refinedstorage:wireless_transmitter',1,[
        'QGQ',
        'QCQ',
        'QPQ'
    ],{
        Q:'refinedstorage:quartz_enriched_iron',
        P:'refinedstorage:advanced_processor',
        C:'refinedstorage:machine_casing',
        G:'thermal:enderium_gear'
    })
    modifyShaped('extrastorage:iron_crafter',1,[
        'ICI',
        'PCP',
        'ICI'
    ],{
       C:'refinedstorage:crafter',
       I:'minecraft:iron_ingot',
       P:'refinedstorage:improved_processor' 
    })
    modifyShaped('extrastorage:gold_crafter',1,[
        'GCG',
        'P P',
        'GCG'
    ],{
        G:'minecraft:gold_ingot',
        P:'refinedstorage:advanced_processor',
        C:'extrastorage:iron_crafter'
    })
    modifyShaped('extrastorage:diamond_crafter',1,[
        'GCG',
        'P P',
        'GCG'
    ],{
        G:'minecraft:diamond',
        P:'refinedstorage:advanced_processor',
        C:'extrastorage:gold_crafter'
    })
    modifyShaped('extrastorage:netherite_crafter',1,[
        'GCG',
        'P P',
        'GCG'
    ],{
        G:'minecraft:netherite_ingot',
        P:'refinedstorage:advanced_processor',
        C:'extrastorage:diamond_crafter'
    })
    shapeless('refinedstorageaddons:creative_wireless_crafting_grid',1,['refinedstorageaddons:wireless_crafting_grid','kubejs:iron_nuggie'])
    shapeless('refinedstorage:creative_wireless_grid',1,['refinedstorage:wireless_grid','kubejs:iron_nuggie'])
    shapeless('refinedstorage:creative_wireless_fluid_grid',1,['refinedstorage:wireless_fluid_grid','kubejs:iron_nuggie'])


})