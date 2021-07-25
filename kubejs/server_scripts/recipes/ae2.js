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

    const {mixing,filling,mechanical_crafting,splashing}= event.recipes.create
    //recipes
    event.replaceInput({mod: 'appliedenergistics2'}, '#forge:ingots/iron', '#forge:ingots/steel')
    event.replaceInput({},'appliedenergistics2:calculation_processor','kubejs:logistical_processor')
    event.replaceInput({},'appliedenergistics2:engineering_processor','refinedstorage:advanced_processor')
    event.replaceInput({},'appliedenergistics2:logic_processor','refinedstorage:improved_processor')



    modifyShaped('appliedenergistics2:controller',1,[
        'SPS',
        'PCP',
        'SPS'
    ],{
        S:'appliedenergistics2:smooth_sky_stone_block',
        P:'appliedenergistics2:purified_fluix_crystal',
        C:'kubejs:elite_resonating_radiant_control_circuit'
    })

    modifyShaped('appliedenergistics2:charger',1, [
        'SFS',
        'S C',
        'SFS'
    ], {
        S: '#forge:ingots/steel',
        F: '#appliedenergistics2:crystals/fluix',
        C: 'mekanism:advanced_universal_cable'
    })

    modifyShaped('appliedenergistics2:security_station',1, [
        'SCS',
        'F6F',
        'SPS'
    ], {
        S: '#forge:ingots/steel',
        F: 'appliedenergistics2:fluix_glass_cable',
        6: 'appliedenergistics2:16k_cell_component',
        P: 'refinedstorage:advanced_processor'
    })

    mixing('1x appliedenergistics2:quartz_glass', ['#forge:glass', '#forge:dusts/quartz']).heated().id('kjs_appliedenergistics2:quartz_glass')
    
    modifyShaped('appliedenergistics2:annihilation_core',2,[
        'SCS',
        'QDI',
        'SFS'
    ], {
        S: '#forge:ingots/steel',
        Q: '#appliedenergistics2:crystals/nether',
        D: 'refinedstorage:destruction_core',
        I: 'refinedstorage:improved_processor',
        F: '#forge:dusts/fluix',
        C: 'mekanism:advanced_control_circuit'
    })

    modifyShaped('appliedenergistics2:formation_core',2,[
        'SCS',
        'QDI',
        'SFS'
    ], {
        S: '#forge:ingots/steel',
        Q: '#appliedenergistics2:crystals/nether',
        D: 'refinedstorage:construction_core',
        I: 'refinedstorage:improved_processor',
        F: '#forge:dusts/fluix',
        C: 'mekanism:advanced_control_circuit'
    })
    
})