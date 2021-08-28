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
    shaped('ironjetpacks:creative_capacitor',1,[
        'ACA',
        'ACA',
        'ACA'
    ],{
        A:'mekanism:pellet_antimatter',
        C:'ironjetpacks:creative_cell',
    })
    shaped('ironjetpacks:creative_thruster',1,[
        'UCU',
        '123'
    ],{
        1:'ironjetpacks:emerald_thruster',
        2:'ironjetpacks:platinum_thruster',
        3:'ironjetpacks:diamond_thruster',
        U:'ironjetpacks:ultimate_coil',
        C:'ironjetpacks:creative_cell',
    })
    shaped('ironjetpacks:creative_cell',2,[
        'E1E','H2H','H3H'
    ],{
        E:'kubejs:elite_resonating_radiant_control_circuit',
        H:'mekanism:hdpe_sheet',
        1:'mekanism:ultimate_induction_cell',
        2:'powah:energy_cell_nitro',
        3:'appliedenergistics2:dense_energy_cell',
    })


})