onEvent('recipes',event =>{
    //functions
    const {filling,sequenced_assembly,deploying,cutting}= event.recipes.create
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
        //event.recipes.create.sequenced_assembly(output[], input, sequence[]).transitionalItem(item).loops(number)
    sequenced_assembly([item.of('refinedstorage:machine_casing',2).withChance(80.0),item.of('mekanism:nugget_steel',2).withChance(10.0),item.of('refinedstorage:quartz_enriched_iron_block',1).withChance(10.0)],'mekanism:nugget_steel',
        [deploying('mekanism:nugget_steel',['mekanism:nugget_steel','refinedstorage:quartz_enriched_iron_block']),
        cutting('mekanism:nugget_steel','refinedstorage:machine_casing')
        ]).transitionalItem('mekanism:nugget_steel').loops(1).id('kjs_refinedstorage:machine_casing/seq')

    sequenced_assembly([item.of('powah:dielectric_casing',1).withChance(80.0),Item.of('powah:dielectric_rod', 4).withChance(7.5),item.of('powah:dielectric_rod_horizontal').withChance(7.5),item.of('minecraft:iron_block').withChance(5.0)],'minecraft:iron_block',[
        deploying('powah:dielectric_casing',['minecraft:iron_block','powah:dielectric_rod']),
        deploying('powah:dielectric_casing',['minecraft:iron_block','powah:dielectric_rod']),
        deploying('powah:dielectric_casing',['minecraft:iron_block','powah:dielectric_rod_horizontal']),
        deploying('powah:dielectric_casing',['minecraft:iron_block','powah:dielectric_rod_horizontal']),
        cutting('powah:dielectric_casing','minecraft:iron_block')
    ]).transitionalItem('minecraft:iron_block').loops(1).id('kjs_powah:dielectric_casing/seq')

    sequenced_assembly([item.of('mekanism:steel_casing',2).withChance(80.0),item.of('mekanism:block_steel').withChance(7.5),item.of('minecraft:glass',4).withChance(5.0),item.of('mekanism:ingot_osmium').withChance(7.5)],'mekanism:ingot_osmium',[
        deploying('mekanism:block_steel',['mekanism:block_steel','minecraft:glass']),
        deploying('mekanism:block_steel',['mekanism:block_steel','minecraft:glass']),
        deploying('mekanism:block_steel',['mekanism:block_steel','mekanism:block_steel']),
        deploying('mekanism:block_steel',['mekanism:block_steel','minecraft:glass']),
        deploying('mekanism:block_steel',['mekanism:block_steel','minecraft:glass']),
        cutting('mekanism:block_steel','mekanism:steel_casing')
    ]).transitionalItem('mekanism:ingot_osmium').loops(1).id('kjs_mekanism:steel_casing/seq')

})