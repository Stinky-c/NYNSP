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

    const {mixing,filling,mechanical_crafting,splashing} = event.recipes.create
    const {combining} = event.recipes.mekanism
    //recipes
    event.replaceInput({mod: 'appliedenergistics2'}, '#forge:ingots/iron', '#forge:ingots/steel')
    event.replaceInput({},'appliedenergistics2:formation_core', 'refinedstorage:construction_core')
    event.replaceInput({},'appliedenergistics2:annihilation_core', 'refinedstorage:destruction_core')
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
    combining('appliedenergistics2:fluix_covered_cable', 'appliedenergistics2:fluix_glass_cable', 'thermal:cured_rubber').id('kjs_appliedenergistics2:covered_cable')
    mixing('3x appliedenergistics2:sky_dust', ['#forge:dusts/coal', '#forge:dusts/coal', '#forge:dusts/diamond']).id('kjs_appliedenergistics2:sky_dust')
})