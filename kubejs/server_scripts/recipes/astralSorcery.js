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
    modifyShaped('astralsorcery:wand',1,[
        ' AS',
        ' MA',
        'M  '
    ],{
        A:'astralsorcery:aquamarine',
        S:'bloodmagic:infusedslate',
        M:'tombstone:white_marble'
    })


})