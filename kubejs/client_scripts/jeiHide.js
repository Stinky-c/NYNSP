// priority: 0

var  color = [
	'white',
	'orange',
	'magenta',
	'yellow',
	'purple',
	'blue',
	'brown',
	'green',
	'lime',
	'cyan',
	'black',
	'red',
	'light_gray',
	'gray',
	'pink'
];
var refined = [
    `controller`,
    `creative_controller`,
    `grid`,
    `crafting_grid`,
    `pattern_grid`,
    `fluid_grid`,
    `network_receiver`,
    `network_transmitter`,
    `relay`,
    `detector`,
    `security_manager`,
    `wireless_transmitter`,
    `disk_manipulator`,
    `crafter`,
    `crafter_manager`,
    `crafting_monitor`
];
/*
onEvent(client.logged_in), event => {
	event.server.tell('test')
	event.console.info('test')
}
*/


onEvent('jei.hide.items', event => { event.hide([ 
		'quark:pipe',
		'quark:backpack',
		'quark:magnet',
		'quark:ravager_hide',
		'quark:crate',
		'quark:bonded_ravager_hide',
		'quark:midori_block',
		'quark:midori_pillar',
		'quark:midori_block_stairs',
		'quark:midori_block_slab',
		'quark:midori_block_vertical_slab',
		'createaddition:iron_wire',
		'createaddition:crude_burner',
		'createaddition:furnace_burner',
		'createaddition:gold_rod',
		'createaddition:brass_rod',
		'quark:cactus_paste',
		'quark:soul_compass',

		//quark chests suck
		'quark:oak_chest',
		'quark:spruce_chest',
		'quark:birch_chest',
		'quark:jungle_chest',
		'quark:acacia_chest',
		'quark:dark_oak_chest',
		'quark:crimson_chest',
		'quark:warped_chest',
		'quark:nether_brick_chest',
		'quark:purpur_chest',
		'quark:mushroom_chest',
		'quark:prismarine_chest',

		//quark chests still suck
		//im looking at you plat
		'quark:oak_trapped_chest',
		'quark:spruce_trapped_chest',
		'quark:birch_trapped_chest',
		'quark:jungle_trapped_chest',
		'quark:acacia_trapped_chest',
		'quark:dark_oak_trapped_chest',
		'quark:crimson_trapped_chest',
		'quark:warped_trapped_chest',
		'quark:nether_brick_trapped_chest',
		'quark:purpur_trapped_chest',
		'quark:mushroom_trapped_chest',
		'quark:prismarine_trapped_chest',

		//chests for the last time
		'ironchest:wood_to_copper_chest_upgrade',
        'ironchest:copper_to_silver_chest_upgrade',
        'ironchest:silver_to_gold_chest_upgrade',
        'ironchest:silver_chest',
        'ironchest:copper_chest',
		'ironchest:copper_to_iron_chest_upgrade',
		
		//ingots, and ores

		//uranium
        'immersiveengineering:ingot_uranium',
		'immersiveengineering:ore_uranium',
        //lead
        'immersiveengineering:ingot_lead',
		'immersiveengineering:ore_lead',
        //copper
        'create:copper_ingot',
        'immersiveengineering:ingot_copper',
		'immersiveengineering:ore_copper',
		//steel
		'immersiveengineering:ingot_steel',
		//diamond dust
		'thermal:diamond_dust',
		'createaddition:diamond_grit',

		//misc
		'kubejs:fortified_sandesite',
		'kubejs:sandesite',
		'titanium:gold_gear',
		'titanium:iron_gear',
		'titanium:diamond_gear',
		/appliedenergistics2:facade/,
		'ironjetpacks:platinum_jetpack',
		'cyclic:uncrafter',
		'botania:flight_tiara',
		
	])
	//rs
	color.forEach(color => {
        refined.forEach(refined => {
            event.hide([
                `refinedstorage:${color}_${refined}`
            ]);
        });
    });
	
})
//add info
onEvent('jei.information', event => {
	event.add('mythicbotany:kvasir_mead', ['Needed to travel to the Alfheim dimension'])
	event.add('cookingforblockheads:sink'), ['sink go brrrrr',' Jbomb']
})

console.info('Jei cleanup')