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
    shaped('minecraft:stick',16,[
        'L',
        'L'
    ],{
        L:'#minecraft:logs'
    })

    modifyShaped('cookingforblockheads:sink',1,[
        'III',
        'TBT',
        'TTT'
    ],{
        I:'minecraft:iron_ingot',
        T:'minecraft:terracotta',
        B:'mekanism:heavy_water_bucket'
    })   
    modifyShaped('bpm:singularity',1,[
        'SCS',
        'IFI',
        'SGS'
    ],{
       S:'create:shadow_steel',
       I:'mekanism:ingot_steel',
       F:'create:refined_radiance_casing',
       G:'thermal:enderium_gear',
       C:'mekanism:ultimate_control_circuit'
    })
    modifyShapeless('mythicbotany:kvasir_mead',1,['mythicbotany:kvasir_blood','minecraft:honey_bottle','kubejs:iron_nuggie'])
    shapeless('immersiveengineering:furnace_heater',1,'createaddition:heater')


})