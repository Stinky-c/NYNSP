// priority: 100 
//removes based on ID
events.listen('recipes', event => {
    var ID = [
        'createaddition:rolling/brass_ingot',
        'createaddition:rolling/gold_ingot',
        'createaddition:crafting/furnace_burner',
        'createaddition:crafting/crude_burner',
        'createaddition:rolling/iron_plate',
        'create:compat/quark/crushing/cactus',
        //'mekanismtools:bronze/tools/sword',
        'immersiveengineering:crafting/blastbrick',
        'immersiveengineering:crafting/sword_steel',
        'immersiveengineering:crafting/pickaxe_steel',
        'immersiveengineering:crafting/axe_steel',
        'immersiveengineering:crafting/hoe_steel',
        'immersiveengineering:crafting/shovel_steel',
        'immersiveengineering:crafting/stick_steel',
        'createaddition:compat/immersiveengineering/lapis_sheet_metal_press',
        'immersiveengineering:metalpress/plate_brass',
        'immersiveengineering:metalpress/plate_gold',
        'thermal:parts/enderium_gear',
        'refinedstorage:quartz_enriched_iron',
        'industrialforegoing:iron_gear',
        'industrialforegoing:gold_gear',
        'industrialforegoing:diamond_gear',
        'minecraft:smooth_quartz',
        'thermal:rubber_from_dandelion',
        'thermal:rubber_from_vine',
        'createaddition:compat/mekanism/rose_quartz_metallurgic_infusing',
        'appliedenergistics2:network/blocks/inscribers',
        'forbidden_arcanus:pixie_spawn_egg',
        //tetra
        'tetra:hammer/birch',
        'tetra:hammer/spruce',
        'tetra:hammer/jungle',
        'tetra:hammer/acacia',
        'tetra:hammer/oak',
        'tetra:hammer/dark_oak',
        'cyclic:uncrafter',
        'createaddtion:crafting/heater_exchange',
        'eidolon:pewter_blend',
        'torchmaster:megatorch',

        //'forbidden_arcanus:jei.apply_indestructible_enchantment.item.tetra.magmatic_cell',
        'bloodmagic:altar/soul_snare',
        'astralsorcery:altar/altar_attunement',
    ];
    ID.forEach(iR => {
        event.remove({
            id: iR
        });
    });
});

//removes based on type
events.listen('recipes', event => {
    var type = [
        'createaddition:crude_burning',
        'appliedenergistics2:inscriber',

    ];
    type.forEach(iR => {
        event.remove({
            type: iR
        });
    });
});

//removes based on output
events.listen('recipes', event => {
    var output = [
        //ingots
        //uranium
        'immersiveengineering:ingot_uranium',
        //lead
        'immersiveengineering:ingot_lead',
        'thermal:lead_ingot',
        'eidolon:lead_ingot',
        //copper
        'create:copper_ingot',
        'immersiveengineering:ingot_copper',
        'thermal:copper_ingot',
        //steel
        'immersiveengineering:ingot_steel',
        //tin
        'thermal:tin_ingot',
        //silver
        'immersiveengineering:ingot_silver',

        //chests again
        'ironchest:wood_to_copper_chest_upgrade',
        'ironchest:copper_to_silver_chest_upgrade',
        'ironchest:silver_to_gold_chest_upgrade',
        'ironchest:silver_chest',
        'ironchest:copper_chest',
        //misc
        'appliedenergistics2:silicon',
        'powah:dielectric_paste',
        'torchmaster:feral_flare_lantern',
        //'tetra:magmatic_cell',
        'botania:flight_tiara',
        
    ];
    output.forEach(iR => {
        event.remove({
            output: iR
        });
    });
});
onEvent('recipes',event =>{
    event.replaceOutput({},'thermal:bronze_ingot','mekanism:ingot_bronze')
    event.replaceOutput({},'createaddition:diamond_grit','mekanism:dust_diamond')
    event.replaceOutput({},'thermal:diamond_dust','mekanism:dust_diamond')
    //ae2
    //event.replaceInput({})


})

console.info('Removals')