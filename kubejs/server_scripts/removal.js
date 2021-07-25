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

        //Applied Energistics 2
        'appliedenergistics2:decorative/quartz_glass',
        'appliedenergistics2:network/cables/covered_fluix',
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
        //ingots, and ores

		//uranium
        'immersiveengineering:ingot_uranium',
		'immersiveengineering:ore_uranium',
		'immersiveengineering:plate_uranium',
        'immersiveengineering:ingot_uranium',
        'immersiveengineering:storage_uranium',
        'immersiveengineering:slab_storage_uranium',
        'immersiveengineering:nugget_uranium',
        'immersiveengineering:dust_uranium',
        //lead
        'immersiveengineering:ingot_lead',
		'immersiveengineering:ore_lead',
        'thermal:lead_ingot',
        'eidolon:lead_ingot',
		//steel
		'immersiveengineering:plate_steel',
        'immersiveengineering:ingot_steel',
        'immersiveengineering:storage_steel',
        'immersiveengineering:slab_storage_steel',
        'immersiveengineering:nugget_steel',
        'immersiveengineering:dust_steel',
        //copper
        'create:copper_ingot',
		'thermal:copper_ingot',
		'immersiveengineering:ore_copper',
		'mekanism:copper_ore',
		'thermal:copper_ore',
        'thermal:copper_dust',
        'mekanism:block_copper',
        'thermal:copper_block',
        'immersiveengineering:plate_copper',
        'immersiveengineering:ingot_copper',
        'immersiveengineering:storage_copper',
        'immersiveengineering:slab_storage_copper',
        'immersiveengineering:nugget_copper',
        'immersiveengineering:dust_copper',
		//tin
		'thermal:tin_ingot',
		'thermal:tin_ore',
		//lead
		'thermal:lead_ore',
		'eidolon:lead_ore',
		'thermal:lead_nugget',
		'eidolon:lead_nugget',
		'thermal:lead_dust',
		'eidolon:lead_block',
		'thermal:lead_block',
		'immersiveengineering:plate_lead',
        'immersiveengineering:ingot_lead',
        'immersiveengineering:storage_lead',
        'immersiveengineering:slab_storage_lead',
        'immersiveengineering:nugget_lead',
        'immersiveengineering:dust_lead',
		//nickel
		'immersiveengineering:ingot_nickel',
		'immersiveengineering:storage_nickel',
		'immersiveengineering:slab_storage_nickel',
		'immersiveengineering:nugget_nickel',
		'immersiveengineering:plate_nickel',
        'immersiveengineering:dust_nickel',
		//silver
		'immersiveengineering:plate_silver',
        'immersiveengineering:storage_silver',
        'immersiveengineering:slab_storage_silver',
        'immersiveengineering:ore_silver',
        'immersiveengineering:ingot_silver',
        'immersiveengineering:dust_silver',
        'immersiveengineering:nugget_silver',
		//electrum
		'immersiveengineering:plate_electrum',
        'immersiveengineering:ingot_electrum',
        'immersiveengineering:storage_electrum',
        'immersiveengineering:slab_storage_electrum',
        'immersiveengineering:nugget_electrum',
        'immersiveengineering:dust_electrum',
		//constantan
		'immersiveengineering:plate_constantan',
        'immersiveengineering:ingot_constantan',
        'immersiveengineering:storage_constantan',
        'immersiveengineering:slab_storage_constantan',
        'immersiveengineering:nugget_constantan',
        'immersiveengineering:dust_constantan',
		//diamond dust
		'thermal:diamond_dust',
		'createaddition:diamond_grit',
		//iron
		'immersiveengineering:plate_iron',
        'immersiveengineering:dust_iron',
		//gold
		'immersiveengineering:plate_gold',
        'immersiveengineering:dust_gold',

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
    const {replaceOutput} = event
    //replace out put (item to be replace, replaced item)
    event.replaceOutput({},'thermal:bronze_ingot','mekanism:ingot_bronze')
    event.replaceOutput({},'createaddition:diamond_grit','mekanism:dust_diamond')
    event.replaceOutput({},'thermal:diamond_dust','mekanism:dust_diamond')
    //ae2
    //event.replaceInput({})


})