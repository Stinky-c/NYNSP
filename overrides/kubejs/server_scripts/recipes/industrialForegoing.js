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
    //industiral
    modifyShaped('industrialforegoing:machine_frame_pity',1,[
        'LSL',
        'SRS',
        'LSL'
    ],{
       L:'#minecraft:logs',
       S:'#forge:ingots/steel',
       R:'#forge:storage_blocks/redstone'
    })


})