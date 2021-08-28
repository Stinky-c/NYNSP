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

    function shaped (result, count, pattern, ingridients) {
        event.shaped(item.of(result, count),
            pattern,
            ingridients
        ).id(`kjs_` + result)
    }
    //recipes
    modifyShaped('thermal:redstone_servo',1,[
        ' R ',
        ' S ',
        ' R '
    ],{
        R:'#forge:dusts/redstone',
        S:'#forge:ingots/steel'
    })

    modifyShaped('thermal:machine_frame',1, [
        'SGS',
        'GTG',
        'SGS'
    ],{
        S:'#forge:ingots/iron',
        G:'#forge:glass',
        T:'kubejs:steel_gear'

    })

    modifyShaped('thermal:flux_drill',1, [
        ' D ',
        'STS',
        'GCG'
    ],{
        D:'thermal:drill_head',
        S:'#forge:ingots/steel',
        T:'mekanism:energy_tablet',
        G:'thermal:tin_gear',
        C:'thermal:rf_coil'
    })

    modifyShaped('thermal:flux_saw',1, [
        ' B ',
        'STS',
        'GCG'
    ],{
        B:'thermal:saw_blade',
        S:'#forge:ingots/steel',
        T:'mekanism:energy_tablet',
        G:'thermal:tin_gear',
        C:'thermal:rf_coil'
    })
    shaped('thermal:rubber',4,[
        'LLL',
        'LBL',
        'LLL'
    ],{
        L:'#minecraft:leaves',
        B:'minecraft:water_bucket'
    })
})