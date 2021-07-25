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
    modifyShaped('rftoolsbase:machine_base',1,[
        '   ',
        'GGG',
        'SSS'
    ],{
        S:'#forge:stone',
        G:'thermal:gold_coin'
    })
    modifyShaped('rftoolsbase:machine_frame',1,[
        'IBI',
        'G G',
        'IGI'
    ],{
        I:'#forge:ingots/iron',
        G:'thermal:gold_coin',
        B:'#forge:dyes/blue'
    })


})