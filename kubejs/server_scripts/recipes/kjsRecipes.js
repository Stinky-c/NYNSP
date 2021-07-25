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
    function modifyShapeless (result, count, ingridients) {
        event.remove({
             output: result,
            type: 'minecraft:crafting_shapeless'
            })
            event.shapeless(item.of(result, count),
                ingridients
            ).id(`kjs_` + result)
    }
    function shapeless  (result, count, ingridients) {
        event.shapeless(item.of(result, count),
            ingridients
            ).id(`kjs_` + result)
    }
    //recipes
    //shapeless
        shapeless('kubejs:tiny_coal',8,'minecraft:coal')
        shapeless('kubejs:tiny_charcoal',8,'minecraft:charcoal')
        shapeless('minecraft:coal',1,Item.of('kubejs:tiny_coal',8))
        shapeless('minecraft:charcoal',1,Item.of('kubejs:tiny_charcoal',8))
        shapeless('kubejs:elite_resonating_radiant_control_circuit',1,['mekanism:elite_control_circuit','astralsorcery:resonating_gem','create:refined_radiance'])
        shapeless('kubejs:prepared_dielectric_paste',1,[Item.of('minecraft:coal', 3),Item.of('minecraft:clay_ball', 2)])
        shapeless('kubejs:raw_logistical_processor',1,
        ['refinedstorage:processor_binding','appliedenergistics2:purified_certus_quartz_crystal','refinedstorage:silicon','minecraft:redstone'])
    //shaped
        shaped('kubejs:steel_gear',1,[
            ' S ',
            'SNS',
            ' S '
        ],{
            S:'#forge:ingots/steel',
            N:'#forge:nuggets/iron'
        })
    //smelting
    event.smelting('kubejs:logistical_processor','kubejs:raw_logistical_processor').xp(0.5).id('kjs:raw_logistical_processor')
    


})