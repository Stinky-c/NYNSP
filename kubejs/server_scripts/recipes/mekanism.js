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
    const {metallurgic_infusing,combining} = event.recipes.mekanism
    //recipes

    modifyShaped('mekanism:module_gravitational_modulating_unit',1,[
        'JSJ',
        'PBC',
        'TAT'
    ],{
        P:'mekanism:ultimate_induction_provider',
        B:'mekanism:module_base',
        C:'mekanism:ultimate_induction_cell',
        T:'ironjetpacks:creative_thruster',
        A:'mekanism:pellet_antimatter',
        J:'ironjetpacks:creative_capacitor',
        S:'forbidden_arcanus:dark_nether_star',
    })
    modifyShaped('mekanism:metallurgic_infuser',1, [
    'IFI',
    'RCR',
    'IFI'
    ], {
    I:'#forge:ingots/iron',
    F:'minecraft:furnace',
    R:'#forge:dusts/redstone',
    C:'mekanism:steel_casing'})
    
    modifyShaped('mekanismgenerators:control_rod_assembly',1,[
        'LCL',
        'S1S',
        'SLS'
    ],{
        L:'#forge:ingots/lead',
        C:'mekanism:ultimate_control_circuit',
        S:'#forge:ingots/steel',
        1:'mekanism:shard_lead'
    })
    modifyShaped('mekanismgenerators:fission_fuel_assembly',2,[
        'LSL',
        'LIL',
        'LSL'
    ],{
        L:'#forge:ingots/lead',
        S:'#forge:ingots/steel',
        I:'mekanism:shard_uranium'
    })
    modifyShaped('mekanismgenerators:fission_reactor_casing',1,[
        'SLS',
        'LCL',
        'SLS'
    ],{
        S:'mekanism:shard_lead',
        L:'#forge:ingots/lead',
        C:'mekanism:steel_casing'
    })
    modifyShaped('mekanismgenerators:reactor_glass',4,[
        'ELE',
        'LGL',
        'ELE'
    ],{
        E:'mekanism:enriched_iron',
        L:'#forge:ingots/lead',
        G:'thermal:obsidian_glass'
    })
    modifyShaped('mekanism:combiner',1,[
        'ACA',
        'PFP',
        'ACA'
    ],{
        A:'mekanism:alloy_reinforced',
        C:'mekanism:elite_control_circuit',
        F:'mekanism:steel_casing',
        P:'eidolon:pewter_ingot',
    })
    //infuser
    //metallurgic_infusing(output, inputItem, infusionInput, infusionAmount)
    metallurgic_infusing('kubejs:iron_nuggie','minecraft:iron_nugget','mekanism:diamond',8960).id('kjs_kubejs:iron_nuggie')
    metallurgic_infusing('create:rose_quartz','minecraft:quartz','mekanism:redstone',40).id('kjs_create:rose_quartz')
    //combining
    combining(Item.of('eidolon:pewter_blend', 2), '#forge:ingots/lead', '#forge:ingots/iron').id('kjs_eidolon:pewter_blend/infuse')
    combining(Item.of('eidolon:pewter_blend', 2), '#forge:ingots/iron','#forge:ingots/lead' ).id('kjs_eidolon:pewter_blend/infuse_2')
    combining('forbidden_arcanus:obsidian_with_iron', Item.of('minecraft:iron_nugget', 4),'minecraft:obsidian' ).id('kjs_forbidden_arcanus:obsidian_with_iron/infuse')
})