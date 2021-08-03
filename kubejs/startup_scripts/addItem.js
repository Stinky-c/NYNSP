// priority: 2
onEvent('item.registry', event => {
	event.create('logistical_processor').displayName('Logistical Processor')
	event.create('raw_logistical_processor').displayName('Raw Logistical Processor')
	event.create('steel_gear').displayName('Steel Gear')
	event.create('tiny_coal').displayName('Tiny Coal').burnTime(200).tooltip('Burn time: 200 ticks')
	event.create('tiny_charcoal').displayName('Tiny Charcoal').burnTime(200).tooltip('Burn time: 200 ticks')
	//event.create('rune_press').displayName('Rune Press').tooltip('Used to make runes')
	event.create('iron_nuggie').displayName('Iron Nuggie').tooltip('Used in Refined Storage creative grids').tooltip('Can only be made in the Ultimate Infusing Factory')
	event.create('elite_resonating_radiant_control_circuit').displayName('Elite Resonating Radiant Control Circuit ').glow(true)
	event.create('prepared_dielectric_paste').displayName('Prepared Dielectric Paste').tooltip('Fill with lava to complete')
	event.create('ore_processing').type('create:sequenced_assembly').displayName('Ore Processing').tooltip('Used to display custom ore processing')
	event.create('test_item_2').displayName('test_item_2')
	event.create('refined_blank_core').type('create:sequenced_assembly').displayName('Refined Blank Core')
	//event.create('sandesite').displayName('Sandesite')
    //event.create('fortified_sandesite').displayName('Fortified Sandesite')
})

onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
	
	//event.create('sandesite').displayName('Sandesite').material('sand').hardness(0.6)
    //event.create('fortified_sandesite').displayName('Fortified Sandesite').material('iron').hardness(7)
})
console.info('Add items')