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
    modifyShaped('cyclic:melter',1,[
            'RQR',
            'GFG',
            'OOO'
        ],{
            R:'minecraft:redstone_block',
            G:'#forge:glass',
            Q:'#forge:gems/quartz',
            F:'thermal:machine_frame',
            O:'#forge:obsidian'
        })
        modifyShaped('cyclic:solidifier',1,[
            'RQR',
            'GFG',
            'OOO'
        ],{
            R:'minecraft:lapis_block',
            G:'#forge:glass',
            Q:'#forge:gems/quartz',
            F:'thermal:machine_frame',
            O:'#forge:obsidian'
        })


})