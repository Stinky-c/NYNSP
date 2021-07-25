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



})