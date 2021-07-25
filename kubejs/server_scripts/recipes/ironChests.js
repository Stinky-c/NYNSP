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
    //recipes
    //ironchests
    modifyShaped('ironchest:iron_chest',1,[
        'SSS',
        'SCS',
        'SSS'
    ],{
        S:'create:iron_sheet',
        C:'#forge:chests/wooden'
    })

    modifyShaped('ironchest:gold_chest',1,[
        'SSS',
        'SCS',
        'SSS'
    ],{
        S:'create:golden_sheet',
        C:'ironchest:iron_chest'
    })

    modifyShaped('ironchest:diamond_chest',1,[
        'GGG',
        'DCD',
        'GGG'
    ],{
        G:'#forge:glass',
        C:'ironchest:gold_chest',
        D:'mekanism:enriched_diamond'
    })

    modifyShaped('ironchest:wood_to_iron_chest_upgrade',1,[
        'SSS',
        'SPS',
        'SSS'
    ],{
        S:'create:iron_sheet',
        P:'#minecraft:planks'
    })
    modifyShaped('ironchest:iron_to_gold_chest_upgrade',1,[
        'SSS',
        'SIS',
        'SSS'
    ],{
        S:'create:golden_sheet',
        I:'create:iron_sheet'
    })

    modifyShaped('ironchest:gold_to_diamond_chest_upgrade',1,[
        'GGG',
        'DSD',
        'GGG'
    ],{
        G:'#forge:glass',
        D:'mekanism:enriched_diamond',
        S:'create:golden_sheet'
    })
    


})