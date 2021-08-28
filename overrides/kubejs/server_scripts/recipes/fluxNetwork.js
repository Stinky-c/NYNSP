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
    modifyShaped('fluxnetworks:flux_core',2,[
        'FOF',
        'OAO',
        'FOF'
    ],{
        O:'minecraft:obsidian',
        A:'mekanism:alloy_reinforced',
        F:'fluxnetworks:flux_dust'
    })
    modifyShaped('fluxnetworks:flux_controller',1,[
        'CBC',
        'F F',
        'CBC'
    ],{
        C:'fluxnetworks:flux_core',
        F:'fluxnetworks:flux_dust',
        B:'fluxnetworks:flux_block'
    })


})