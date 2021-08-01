onEvent('recipes',event =>{
    const {filling,sequenced_assembly,deploying,cutting}= event.recipes.create
    //event.recipes.create.sequenced_assembly(output[], input, sequence[]).transitionalItem(item).loops(number)
    var type = [
        'minecraft:gold',
        'minecraft:iron',
        'create:copper',
        'astralsorcery:starmetal',
        'thermal:silver',
        'thermal:nickel',
        'create:zinc',
    ]
    type.forEach(type => {
        sequenced_assembly([Item.of(`${type}_ingot`, 32).withChance(100.0)],`${type}_ore`,[
            deploying('minecraft:iron_ingot',['minecraft:iron_ore','#minecraft:sand']),
            filling(Item.of('minecraft:iron_ingot', 12), ['minecraft:iron_ore',Fluid.of('bloodmagic:life_essence_fluid', 100)]),
            filling(item.of('minecraft:iron_ingot',12),['minecraft:iron_ore',Fluid.of('astralsorcery:liquid_starlight',100)]),
            filling('minecraft:iron_ore',['minecraft:iron_ore',fluid.of('mekanism:sulfuric_acid',100)]),
            filling('minecraft:iron_ore',['minecraft:iron_ore',fluid.of('create:chocolate',100)]),
            filling('minecraft:iron_ore',['minecraft:iron_ore',fluid.of('thermal:refined_fuel',100)]),
            cutting('minecraft:iron_ore','minecraft:iron_ingot').processingTime(60),
        ]).transitionalItem('kubejs:test_item').id(`kjs_${type}/processing/custom`).loops(1)  
    })
    /*
    sequenced_assembly([Item.of('minecraft:iron_ingot', 32).withChance(100.0)],'minecraft:iron_ore',[
        deploying('minecraft:iron_ingot',['minecraft:iron_ore','#minecraft:sand']),
        filling(Item.of('minecraft:iron_ingot', 12), ['minecraft:iron_ore',Fluid.of('bloodmagic:life_essence_fluid', 100)]),
        filling(item.of('minecraft:iron_ingot',12),['minecraft:iron_ore',Fluid.of('astralsorcery:liquid_starlight',100)]),
        filling('minecraft:iron_ore',['minecraft:iron_ore',fluid.of('mekanism:sulfuric_acid',100)]),
        filling('minecraft:iron_ore',['minecraft:iron_ore',fluid.of('create:chocolate',100)]),
        filling('minecraft:iron_ore',['minecraft:iron_ore',fluid.of('thermal:refined_fuel',100)]),
        cutting('minecraft:iron_ore','minecraft:iron_ingot').processingTime(60),
    ]).transitionalItem('kubejs:test_item').id('kjs_kubejs:test_item').loops(1)
    */
})