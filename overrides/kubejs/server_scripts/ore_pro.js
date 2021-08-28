onEvent('recipes',event =>{
    //function
    const {filling,sequenced_assembly,deploying,cutting}= event.recipes.create
    function ore_processing (ore,ingot,id){
    sequenced_assembly([Item.of(ingot, 32).withChance(100.0)],ore,[
        deploying('minecraft:iron_ingot',['minecraft:iron_ore','#minecraft:sand']),
        filling(Item.of('minecraft:iron_ingot', 12), ['minecraft:iron_ore',Fluid.of('bloodmagic:life_essence_fluid', 100)]),
        filling(item.of('minecraft:iron_ingot',12),['minecraft:iron_ore',Fluid.of('astralsorcery:liquid_starlight',100)]),
        filling('minecraft:iron_ore',['minecraft:iron_ore',fluid.of('mekanism:sulfuric_acid',100)]),
        filling('minecraft:iron_ore',['minecraft:iron_ore',fluid.of('create:chocolate',100)]),
        filling('minecraft:iron_ore',['minecraft:iron_ore',fluid.of('thermal:refined_fuel',100)]),
        cutting('minecraft:iron_ore','minecraft:iron_ingot').processingTime(60),
    ]).transitionalItem('kubejs:ore_processing').id('kjs_' + id + '/custom_processing').loops(1)
    }
    //ore processing
        ore_processing('#forge:ores/gold','minecraft:gold_ingot','minecraft:gold')
        ore_processing('mekanism:lead_ore','mekanism:ingot_lead','mekanism:lead')
        ore_processing('create:zinc_ore','create:zinc_ingot','create:zinc')
        ore_processing('thermal:nickel_ore','thermal:nickel_ingot','thermal:nickel')
        ore_processing('thermal:silver_ore','thermal:silver_ingot','thermal:silver')
        ore_processing('astralsorcery:starmetal_ore','astralsorcery:starmetal_ingot','astralsorcery:starmetal',)
        ore_processing('create:copper_ore','create:copper_ingot','create:copper',)
        ore_processing('minecraft:iron_ore','minecraft:iron_ingot','minecraft:iron',)
        ore_processing('mekanism:osmium_ore','mekanism:ingot_osmium','mekanism:osmium')
        ore_processing('mekanism:tin_ore','mekanism:ingot_tin','mekanism:tin')
        ore_processing('mekanism:uranium_ore','mekanism:ingot_uranium','mekanism:uranium')
        ore_processing('minecraft:diamond_ore','minecraft:diamond','minecraft:diamond')
})  