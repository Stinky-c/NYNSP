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
    modifyShaped('psi:cad_assembly_iron',1,[
        '   ',
        'PPP',
        ' MP'
    ],{
        P:'create:iron_sheet',
        M:'botania:mana_powder'
    })
    modifyShaped('psi:cad_assembly_gold',1,[
        '   ',
        'PPP',
        ' MP'
    ],{
        P:'create:golden_sheet',
        M:'botania:mana_powder'
    })


})